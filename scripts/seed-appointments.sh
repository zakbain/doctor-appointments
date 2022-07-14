#!/bin/bash

firstDoctorId=$1
secondDoctorId=$2

curl -X 'POST' \
  'http://localhost:3000/doctors/'${firstDoctorId}'/appointments' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"startsAt": "2022-07-29T06:30:00.000Z", "patientFirstName": "Alyssa", "patientLastName": "Earhart", "type": "Follow-up"}'  
