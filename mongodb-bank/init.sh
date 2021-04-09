#! /bin/bash
mongoimport --host localhost --type csv --db bank --collection clients --headerline --ignoreBlanks --file /data/BankChurners.csv
