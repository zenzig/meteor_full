#!/bin/bash
# --allow-incompatible-update
export HTTP_FORWARDED_COUNT=1;
export ROOT_URL="https://livecam1.zenzig.com";
export MAIL_URL="smtps://rich@zenzig.com:ma1trix.ma1trix@zmail.zenzig.com:465";
until MONGO_URL='mongodb://192.168.1.181:27017/meteor_full_1' meteor --port 3006 --allow-incompatible-update --settings ./settings.json; do
    echo "Server 'meteor' crashed with exit code $?.  Respawning.." >&2
    sleep 1
done
