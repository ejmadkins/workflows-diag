export PROJECT_ID=$(gcloud config get-value project)
export LOCATION=$(gcloud config get compute/region)

curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" https://workflowexecutions.googleapis.com/v1/projects/${PROJECT_ID}/locations/${LOCATION}/workflows/diagnostics/executions

curl -H "Authorization: Bearer $(gcloud auth print-access-token)"  https://workflowexecutions.googleapis.com/v1/projects/${PROJECT_ID}/locations/${LOCATION}/workflows/diagnostics/executions/