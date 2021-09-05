#!/bin/sh

docker build -t ret2cds .
docker run --name ret2cds --security-opt seccomp=seccomp.json -p 1337:1337 -d ret2cds
