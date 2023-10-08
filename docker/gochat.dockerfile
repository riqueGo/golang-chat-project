FROM golang:1.19

WORKDIR /app/src/gochat

ENV GOPATH=/app

# pre-copy/cache go.mod for pre-downloading dependencies and only redownloading them in subsequent builds if they change
COPY backend/go.mod backend/go.sum ./
RUN go mod download && go mod verify

COPY ./backend .
RUN go build -v -o gochat

CMD ["./gochat"]

EXPOSE 8080