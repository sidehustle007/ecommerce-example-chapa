from chapa import Chapa
from datetime import datetime

key_api = 'ur_api_key'


chapa = Chapa(key_api)


class payment():
    def pay(email, fname, lname, amount, rdurl):
        now = datetime.now()
        tx_un_num = now.strftime("%m%d%Y%H%M%S")
        tx_id = f'tx_{fname}{tx_un_num}'
        data = {
            'email': email,
            'amount': amount,
            'first_name': fname,
            'last_name': lname,
            'tx_ref': tx_id,
            'return_url': rdurl,
            'customization': {
                'title': '2utube',
                'description': 'Payment for your services',
            }
        }

        response = chapa.initialize(**data)
        return {'detail': response, 'tx_id': tx_id}
        # print(response)

    def verify(tx_num):
        # # How to verify a transaction
        response = chapa.verify(tx_num)
        # print(response)
        return response
