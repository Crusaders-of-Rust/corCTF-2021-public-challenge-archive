FROM python:slim
RUN apt-get update && apt-get install -y socat && rm -rf /var/lib/apt/lists/*
RUN useradd -ms /bin/bash ctf
WORKDIR /app
COPY fox.py flag.py .
RUN python3 flag.py

USER ctf
CMD  ["socat", "tcp-l:1337,reuseaddr,fork", "EXEC:/app/flag.py"]
