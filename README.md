### How to Install

Run 
```
git clone https://github.com/jeptvar/clickme.git
```

Then 
```
cd clickme
```

After that copy the env.example file to .env file by running
```
cp .env.example .env
```

Find this part in .env file and update the variables with your postgreSQL credentials
```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=dbname
DB_USERNAME=dbusername
DB_PASSWORD=dbuserpass
```

Then run
```
composer install
```

Finally run migrate
```
php artisan migrate
```
and don't forget
```
php artisan server
```

Have a great day!!!
