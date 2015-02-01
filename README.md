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


## Manipulação de dados no shell via APIs:
Instalar httpie:
````shell
yum install -y httpie
````

Adcionar contato:
````shell
http --json POST http://192.168.0.9:8000/apicontatos/ nome="Novo Contato" fone="54-3333-7777" mfone="54-9999-3333" email="novo@mail.com.br"
````

Atualizar contato, especificar ID (Ex: apicontatos/1/) e prencher informações a serem alteradas:
````shell
http --json PUT http://192.168.0.9:8000/apicontatos/1/ nome="Contato Alterado" fone="54-3333-7777" mfone="54-9999-3333" email="novo@mail.com.br"
````

Remover contato, especificar ID (Ex: apicontatos/16/):
````shell
http --json DELETE http://192.168.0.9:8000/apicontatos/16/
````
