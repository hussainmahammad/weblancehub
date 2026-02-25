terraform {
  backend "s3" {
    bucket  = "hussainmahammad.online-tfstates"
    key     = "weblancehub/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}
