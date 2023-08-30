#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn build
yarn typeorm migration:generate dist/src/migrations/createUser -d dist/src/data-source
yarn typeorm migration:run -d dist/src/data-source.js