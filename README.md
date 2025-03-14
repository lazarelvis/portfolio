# porfolio
This is my portfolio
```
npm install
npm start
```
for creating build version in production `npm run build` it will create in folder **out**

![screencapture-localhost-3006-2025-03-13-13_25_48](https://github.com/user-attachments/assets/d3d8d5fc-9297-454c-a690-a5cec577cb41)


---install necesary dependecies---

sudo apt-get install nginx

cd ~
curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
nano nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs 

sudo service nginx status

git clone https://github.com/lazarelvis/portfolio.git
cd portfolio/
npm i
npm run build
npx browserslist@latest --update-db
npm run build

node version v16.13.0
npm version 8.1.0

cd~
mkdir app-deploy-portfolio
cp -R portfolio/out app-deploy-portfolio

---nginx config---

react.conf (config to deploy static SPA react app)
server {
  listen 80;
  listen [::]:80;
  root /root/app-deploy-portfolio/out;
  location / {
    try_files $uri /index.html;
  }
}

sudo nano /etc/nginx/conf.d/react.conf
cat /etc/nginx/nginx.conf
sudo nginx -t (should be succcesful)
sudo service nginx reload



---redirect public ip to domain (301 redirect)---
cd /etc/nginx/sites-available
cp default example.ro
nano example.ro
-paste
server {
        listen 80;
        listen [::]:80;
        server_name example.ro www.example.ro;#
        root /var/www/html;
        index index.html;
        location / {
                try_files $uri $uri/ =404;
        }
}

server {
        listen 80;
        server_name "public IP adress";
        return 301 http://example.ro;
}
---to be available this changes we need to have this settings in sites-enabled----
cd /etc/nginx/sites-enabled/
ls -l (we can se the simlink)
sudo rm default
systemctl restart nginx
sudo ln -s /etc/nginx/sites-available/example.ro /etc/nginx/sites-enabled/example.ro
systemctl restart nginx (now ip public should redirect to dns 301code)


---install SSL certificate---
https://docs.chaicode.com/ssl-in-nginx-ubuntu/
```
sudo apt install certbot python3-certbot-nginx
sudo nano /etc/nginx/sites-available/default
```
server {
    ...
    server_name test.chaicode.com;
    ...
}
```
sudo nginx -t
sudo certbot --nginx -d test.chaicode.com
renew certificate
sudo certbot renew --dry-run
sudo certbot renew
```
