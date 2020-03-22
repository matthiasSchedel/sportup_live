
#!/bin/bash
set -e

if [ -z ${MONGO_INITDB_DATABASE+x} ]; then export MONGO_INITDB_DATABASE="sportupdb"; fi #else echo "var is set to '$var'"; fi

mongo --eval "var databaseName = '$MONGO_INITDB_DATABASE'" $MONGO_INITDB_DATABASE /home/mongo-init.js
