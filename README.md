#### Почтовый ящик с регистрацией без телефона

https://www.hotmail.com

#### Шпаргалки

https://my-js.org/docs/cheatsheet/intro-cheatsheet

#### Устанавливаем email и name автора в GIT

git config --global user.email "you@example.com"  
git config --global user.name "Your Name"

### Используемые зависимости

express  
nodemon  
ws

#### Зпуск нескольких скриптов с помощью npm

npm i concurrently --save-dev  
Добвить в файл package.json строку  
"dev": "concurrently --kill-others \"npm run start-watch\" \"npm run wp-server\""
