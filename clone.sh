# clone the example repository
$ git clone --depth 1 https://github.com/buildbot/buildbot-docker-example-config

# Build the Buildbot container (it will take a few minutes to download packages)
cd buildbot-docker-example-config/simple
docker-compose up
