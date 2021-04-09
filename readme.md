# Intruciones para Iniciar la prueba
Aqui el paso a paso de como iniciarlizar el proyecto,
presento las instruciones del desarrollo y los requerimientos para el desarrollo.
---

La siguiente prueba consiste en el desarrollo de una aplicación web que utilice los
datos financieros provistos para que su usuario pueda realizar consultas de
diferentes clientes.

* Esta aplicación debe estar contenerizada con Docker
* El back end debe ser realizado con NodeJS
* El front end debe ser realizado con AngularJS
* El acceso a la aplicación debe ser por medio de un sistema de acceso con nombre de usuario y password
* Contener una base de datos SQL o NoSQL
* Contener un modelo de dato
* Interacción entre front y back end debe ser por medio de un RESTful Api
* Contener al menos 1 microservicio en Python avanzado en el que se solicite el calculo de características estadísticas de los datos con visualizaciones tabulares y graficas.
* El front end debe ser responsivo y en angular 6+.
* Proveer un diseño de arquitectura del sistema desarrollado.

## Network
```sh
    docker network create -d bridge banistmo
```

## Base de datos Mongodb

> MongoDB version v3.6.9

Construir Dockerfile `/mongodb-bank`
```sh
    docker build -t elay/mongodb .    
```
Iniciar contenedor, con puerto expuesto `27017` con el nombre del container `mongodb`
```sh
    docker run -p 27017:27017 -d --network banistmo --name mongodb elay/mongodb
```
Ejecutar script para importar los datos en el contenedor
```sh
    docker exec -t mongodb ./init.sh
```

## API NodeJS (Express)
> node v10.15.3
> npm 6.4.1
> yarn 1.12.3

Construir el Dockerfile `/api-bank`
```sh
    docker build -t elay/api-bank .
```
Iniciar contenedor, con puerto expuesto `27017` con el nombre del container `mongodb`
```sh
    docker run -p 3000:3000 -d --network banistmo --name api-bank elay/api-bank
```

## Analytic Python
> python 3.8

Levantar el ambiente `/analytic`
```sh
    source venv/bin/activae
```
Installar los modulos que vamos a utilizar
```sh
    python -m pip install -r requirements.txt
```
Levantar app
```sh
    python app.py
```

## FrontEnd Angular
> Angular 11

Levantar app `/frontend`
```sh
    ng serve
```

### Kmeans Clustering (Machine Learning)
Es uno de los algoritmos mas simples y populares, utilizados en el machine learning, 
Se basa en agrupar puntos de datos similares y descubrir los patrones entre ellos.
Este algoritmo K-means lo hace buscando un numero fijo (K) de grupos del conjunto de datos.

![](https://github.com/SettleValley/analista-desarrollador-test/blob/main/analytic/app/cluster.png){width='100px'}