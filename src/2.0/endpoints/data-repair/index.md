---
title: Data Repair API
description: Make repairs and alterations to data already collected in a report suite.
---

# Data Repair API

The Data Repair API provides you with a way to delete or edit Adobe Analytics data.  Repair requests are made by submitting a job definition to the Data Repair API, which includes the report suite, date range, variables and actions to be applied to the data.

WARNING: Use of the Data Repair API permanently deletes existing Adobe Analytics data. Adobe recommends a careful approach to executing the repair to minimize accidental deletion. Read through all pages of this guide before using the Data Repair API.

## Workflow

Successfully using the API follows this overarching workflow:

1. **Confirm contract**: The Data Repair API is a paid service. Reach out to your Adobe Account Manager for details and confirmation of your status to use this API.
1. **API project is set up with the correct permissions**: See [Getting started](../../getting-started/index.md) for information around the correct permissions, creating an API client in the Adobe I/O Console, and successfully authenticating.
1. **Estimate repair size**: The Data Repair API incurs charges based on every row of data it scans for repairs. Use the [Server call estimate endpoint](server-call-estimate.md) to retrieve the cost of a job and obtain a `validationToken`, which is required for the job creation call.
1. **Create repair job**: Use the [Job endpoint](job.md). This endpoint requires a report suite, date range, validation token, and a [Job definition](variables.md).
1. **Monitor progress**: When a repair job is created, a job ID is returned. You can use the [Job ID endpoint](job-id.md) to monitor the status of a job at any point after job submission.
