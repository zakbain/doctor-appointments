## Requirements of system
- Get a list of all doctors
- Get a list of all appointments for a particular doctor and particular day
- Delete an existing appointment from a doctor's calendar
- Add a new appointment to a doctor's calendar
  - New appointments can only start at 15 minute intervals (ie, 8:15AM is a valid time
but 8:20AM is not)
  - A doctor can have multiple appointments with the same time, but no more than 3
appointments can be added with the same time for a given doctor

Check swagger for REST API - http://localhost:3000/api

## Installation & Docker start

```bash
$ yarn install
$ docker-compose up -d
```

##  Run saved migrations
```bash
$ yarn build
$ yarn migration:run 
```

## Running the app

```bash
$ yarn start:dev
```

Navigate to http://localhost:3000/api for swagger documentation

## Seed data
Make sure server is running (yarn start)
```bash
./scripts/seed-doctors.sh
./scripts/seed-appointments.sh <doctorId1> <doctorId2>
```
Note: Replace userId1 and userId2 with the user ids returned from seed-users.sh

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Create new migration
```bash
# Only do this if you updated/created an entity
$ yarn migration:generate src/database/migrations/{MIGRATION_NAME}
```

# doctor-appointments
