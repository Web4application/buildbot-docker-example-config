# clone the example repository
$ git clone --depth 1 https://github.com/buildbot/buildbot-docker-example-config

# Build the Buildbot container (it will take a few minutes to download packages)
cd buildbot-docker-example-config/simple
docker-compose up

git branch -m master Main
git fetch origin
git branch -u origin/Main Main
git remote set-head origin -a

git clone git@github.com:winsiderss/systeminformer.git
cd systeminformer.git
