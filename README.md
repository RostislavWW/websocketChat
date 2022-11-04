#### Устанавливаем email и name автора

git config --global user.email "you@example.com"  
git config --global user.name "Your Name"

### Используемые зависимости

#### Зпуск нескольких скриптов с помощью npm

npm i concurrently --save-dev  
Добвить в файл package.json строку  
"dev": "concurrently --kill-others \"npm run start-watch\" \"npm run wp-server\""
