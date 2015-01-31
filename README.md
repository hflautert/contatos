#Contatos

Contatos é um aplicativo web, desenvolvido com Django, REST framework (RESTful APIs), e AngularJS.
O objetivo é fornecer um meio eficiente para buscar contatos, bem como um modelo de base consistente, código otimizado, para reaproveitamento em diversos projetos.

Estado atual do projeto:
https://drive.google.com/file/d/0B5M9a5uJ8hbKWjQ1N1dfZ0ZCSEE/view?usp=sharing

## Configuração Centos 7 - Modo rápido
````shell
systemctl stop firewalld
systemctl mask firewalld
yum install -y epel-release
yum install -y python-pip git
````
## Ambiente isolado para rodar app
````shell
pip install virtualenv
virtualenv contatos_env --no-site-packages
cd contatos_env 
source bin/activate
````
Estamos dentro de um ambiente isolado, após finalizar, podemos sair com o comando: **deactivate**
## Instalar pacotes e iniciar projeto
````shell
pip install Django djangorestframework
django-admin.py startproject gerenciador
cd gerenciador/
rm -Rf *
git clone https://github.com/hflautert/contatos.git .
./manage.py runserver 192.168.0.9:8000
````

Abrir no navegador (alterar com seu IP) http://192.168.0.9:8000/. 

