#!/bin/bash

set -xe

npm run clean
npm run build
aws s3 sync ./dist/ s3://blog.jhuizy.com/