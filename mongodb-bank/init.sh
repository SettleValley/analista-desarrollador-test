#! /bin/bash
mongoimport --host mongodb --type csv --db bank --collection clients --headerline --ignoreBlanks --file /dump/BankChurners.csv
