#!/bin/bash

firstDoctorId=$1
secondDoctorId=$2

curl -X 'POST' \
  'http://localhost:3000/doctors/'${firstDoctorId}'/appointments' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"startsAt": "2022-7-28T5:00:00", "patientFirstName": "Jordan", patientLastName: "Welding", "type": "New Patient"}'  

curl -X 'POST' \
  'http://localhost:3000/doctors/'${firstDoctorId}'/appointments' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"startsAt": "2022-7-29T6:00:00", "patientFirstName": "Alyssa", patientLastName: "Earhart", "type": "Follow-up"}'  
