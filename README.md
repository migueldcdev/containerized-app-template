# Create network
docker network create --driver bridge app-net

# Add containers to the network

docker run -d -p 3306:3306 --network app-net --name mariadb --env MARIADB_USER=youruser --env MARIADB_PASSWORD=yoursecret --env MARIADB_ROOT_PASSWORD=yoursecret-pw  mariadb:latest

docker run -d -p 3000:3000 --network app-net app

# Check network
docker network inspect app-net

# Run web server container

docker run --name webserver -d -p 8080:80 webserver

# Access DB
mariadb --host 127.0.0.1 -P 3306 --user root -p