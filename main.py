from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import requests

app = FastAPI(title="BathShop Secure Backend", version="1.0")

# CORS tənzimlənməsi (frontend-dən gələn sorğular bloklanmasın deyə)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sənin BotFather-dən aldığın TƏZƏ Token
TELEGRAM_BOT_TOKEN = "8704616357:AAFVt1mSspFtV00fAGQhhH7ZH5jYM7G9jKs"

# Telegram ID-n (aşağıdakı addımda tapacağıq)
CHAT_ID = "1089304401"

class OrderModel(BaseModel):
    name: str = Field(..., min_length=2, max_length=50)
    phone: str = Field(..., min_length=9, max_length=20)
    items: list
    total: float

@app.post("/api/checkout")
def create_order(order: OrderModel):
    items_list = "\n".join([f"- {item['name']} ({item['price']} ₼)" for item in order.items])
    
    message = (
        f"🛒 **YENİ SİFARİŞ GƏLDİ!**\n\n"
        f"👤 **Müştəri:** {order.name}\n"
        f"📞 **Telefon:** {order.phone}\n\n"
        f"📦 **Məhsullar:**\n{items_list}\n\n"
        f"💰 **Cəmi məbləğ:** {order.total:.2f} ₼"
    )
    
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    payload = {
        "chat_id": CHAT_ID,
        "text": message,
        "parse_mode": "Markdown"
    }
    
    response = requests.post(url, json=payload)
    
    if response.status_code != 200:
        raise HTTPException(status_code=500, detail="Sifariş göndərilərkən xəta baş verdi.")
        
    return {"status": "success", "message": "Sifariş uğurla qəbul olundu!"}