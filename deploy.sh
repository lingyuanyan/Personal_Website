#!/bin/bash

sudo rm /etc/nginx/sites-enabled/flask_nginx_lingyuanyan.conf
sudo rm /etc/nginx/sites-available/flask_nginx_lingyuanyan.conf
sudo ln -s $PWD/flask_nginx.conf /etc/nginx/sites-available/flask_nginx_lingyuanyan.conf
sudo ln -s $PWD/flask_nginx.conf /etc/nginx/sites-enabled/flask_nginx_lingyuanyan.conf
#sudo rm /etc/systemd/system/gunicorn_lingyuanyan.socket
#sudo ln -s $PWD/gunicorn_lingyuanyan.socket /etc/systemd/system/
#sudo rm /etc/systemd/system/gunicorn_lingyuanyan.service
#sudo ln -s $PWD/gunicorn_lingyuanyan.service /etc/systemd/system/
#sudo service uwsgi restart
sudo systemctl daemon-reload
#sudo systemctl restart gunicorn_lingyuanyan.socket
#sudo systemctl enable gunicorn_lingyuanyan.socket
#sudo systemctl restart gunicorn_lingyuanyan.service
#sudo systemctl enable gunicorn_lingyuanyan.service
#sudo systemctl status gunicorn_lingyuanyan.socket
#sudo systemctl status gunicorn_lingyuanyan.service
#sudo rm /etc/supervisor/conf.d/lingyuanyan.conf
#sudo ln -s $PWD/supervisor.conf /etc/supervisor/conf.d/lingyuanyan.conf
#sudo supervisorctl reread
#sudo supervisorctl update
sudo service nginx restart