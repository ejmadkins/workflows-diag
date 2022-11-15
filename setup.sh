docker build -t ping .
docker tag ping europe-west1-docker.pkg.dev/ejmadkins-workflows-diag/diagnostics-images/ping
docker push europe-west1-docker.pkg.dev/ejmadkins-workflows-diag/diagnostics-images/ping

docker build -t diagnostics .
docker tag diagnostics europe-west1-docker.pkg.dev/ejmadkins-workflows-diag/diagnostics-images/diagnostics
docker push europe-west1-docker.pkg.dev/ejmadkins-workflows-diag/diagnostics-images/diagnostics

