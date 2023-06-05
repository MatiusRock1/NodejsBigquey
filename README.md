# NodejsBigquey

gcloud services list

gcloud services enable bigquery-json.googleapis.com

gcloud iam service-accounts create my-bigquery-sa --display-name "my bigquery codelab service account"

gcloud iam service-accounts keys create ~/key.json --iam-account  my-bigquery-sa@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com

gcloud projects add-iam-policy-binding ${GOOGLE_CLOUD_PROJECT} --member "serviceAccount:my-bigquery-sa@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com" --role "roles/bigquery.user"
