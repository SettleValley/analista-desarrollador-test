#! /bin/bash
mongoimport --host mongodb --type csv --db bank --collection Churners --headerline --ignoreBlanks --file /dump/BankChurners.csv