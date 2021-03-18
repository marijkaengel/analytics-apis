---
title: Use the Analytics 2.0 APIs with Python
description: Send API calls to Adobe using Python.
---

# Use the Analytics 2.0 APIs with Python

1. Create a local virtual environment
    
    ```bash
    $ rm -rf venv;
    $ virtualenv -p $(which python3 2>/dev/null || which python) venv
    ```

2. Activate the virtual environment

    ```bash
    $ [ -f venv/bin/activate ] && source venv/bin/activate || source venv/Scripts/activate
    ```

3. Install python requirements

    ```bash
    $ pip install -r requirements.txt
    ```
   
4. Create (or re-use) a [JWT Ingegration](https://www.adobe.io/apis/experiencecloud/analytics/docs.html#!AdobeDocs/analytics-2.0-apis/master/jwt.md)

5. Populate `config.ini` with parameters specific to your integration

6. Run `python ims_client.py`

See [Python client resources](https://github.com/AdobeDocs/analytics-apis/tree/main/src/2.0/resources/python/) on GitHub for example code and additional resources.
