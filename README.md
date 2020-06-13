# Yandex.Практикум Проектная работа № 12

## Описание

### Основы работы с Express.js

в ответ на запрос GET localhost:3000/users сервер вернёт JSON-объект из файла users.json;

в ответ на запрос GET localhost:3000/cards сервер вернёт JSON-объект из файла cards.json;

в ответ на запрос GET localhost:3000/users/8340d0ec33270a25f2413b69, сервер вернёт JSON-объект пользователя с переданным после /users идентификатором;

если пользователя с запрошенным идентификатором нет, API должен возвращать 404 статус ответа и JSON: { "message": "Нет пользователя с таким id" };

при запросе на несуществующий адрес, API должен возвращать 404 статус ответа и JSON: { "message": "Запрашиваемый ресурс не найден" }

## Запуск

1. Клонировать репозиторий
2. Установить модули npm

\$ npm install

3. Запустить локальный сервер на localhost:3000

\$ npm run start

\$ npm run dev
