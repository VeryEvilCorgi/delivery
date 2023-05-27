Для запуску:
docker-compose up

Без докеру
cd backend
npm install
npm run build
npm run start:prod

cd frontend
npm install
npm run dev

Ну і змінити кофігурацію для бд в backend/.env

http://localhost:8080/ - фронт
http://localhost:5555/ - адмінка для бд
pgadmin4@pgadmin.org
admin


Ендпоінти: (не бачу сенсу тягнути свагер)

POST /product
{
   "name": "Шеф-бургер",
   "price": 115,
   "shop": 2
}

POST /shop
{
    "name": "KFC"
}

POST /order
{
  name:"adolf",
  phone:"+380952267576",
  email:"adolf@mail.com",
  adress:"Berlin",
  products [{"id":11,"count":1}],
  shopname:"KFC"
}


GET /shop
GET /order (query params - email or phone)

