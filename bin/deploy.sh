#!/bin/bash

set -xe

OUTPUT=$(terraform output -json)

BUCKET_NAME=$(echo $OUTPUT | jq -r '.bucket_name.value')
DIST_ID=$(echo $OUTPUT | jq -r '.distribution_id.value')

npm run clean
npm run build
aws s3 sync ./dist/ s3://$BUCKET_NAME/ --delete

aws cloudfront create-invalidation --distribution-id $DIST_ID --paths "/*"