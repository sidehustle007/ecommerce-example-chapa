from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from getway import payment

app = FastAPI()


origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
def main():
    return 'hi'


class Payit(BaseModel):
    email: str = 'test@gmail.com'
    fname: str = 'test'
    lname: str = 'lastname'
    amount: int
    rdurl: str


@app.post('/pay')
def pay(payit: Payit):
    data = payment.pay(email=payit.email, fname=payit.fname,
                       lname=payit.lname, amount=payit.amount, rdurl=payit.rdurl)
    return data


class Txnum(BaseModel):
    ref_num: str = ''


@app.post('/verify')
def verify(txnum: Txnum):
    ver = payment.verify(tx_num=txnum.ref_num)
    return ver
