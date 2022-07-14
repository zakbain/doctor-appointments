#!/bin/bash

curl -X 'POST' \
  'http://localhost:3000/doctors' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"firstName": "Elizabeth", "lastName": "Blackwell"}'  
  
curl -X 'POST' \
  'http://localhost:3000/doctors' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"firstName": "Virginia", "lastName": "Apgar" }'  
  