# Workflows Diag

A Google Cloud Workflows demo example that covers the following functionality:

* [Calls](https://cloud.google.com/workflows/docs/reference/syntax/calls)
* [Jumps](https://cloud.google.com/workflows/docs/reference/syntax/jumps)
* [Wait using Polling](https://cloud.google.com/workflows/docs/sleeping)
* [Retries](https://cloud.google.com/workflows/docs/reference/syntax/retrying)
* [Firestore Connector](https://cloud.google.com/firestore/docs/solutions/workflows)

## Setup

The following are a basic set of setup instructions:

1. Create a docker container for the ping and diagnostics services and deploy to [Cloud Run](https://cloud.google.com/run/docs/quickstarts/deploy-container)
2. Update the `workflow.yaml` file with the deployed Cloud Run URLs
3. Create a new Workflow and copy the `workflow.yaml` file to the source
4. Ensure that the service account (Default is Compute Engine Default) used by Workflows [Cloud Datastore User](https://cloud.google.com/datastore/docs/access/iam#iam_roles)
5. Trigger execution manually with curl command in the `demo.sh` file
