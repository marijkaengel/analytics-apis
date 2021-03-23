---
title: Segments endpoint FAQ
description: Frequently asked questions around using the Segments endpoint.
---

# Segments endpoint FAQ

Frequently asked questions around using the Segments endpoint.

## What are some best practices around submitting segment API calls?

*  Make multiple, smaller requests instead of a large, single request.
*  Request data once and cache it.
*  Use caution when updating a segment so that you do not alter the original segment used by others.
*  Avoid creating duplicate segments with the same definition. Creating many segments affects performance for your company in some situations.
*  If possible use the Analytics UI for creating segments from scratch. The UI offers significant advantages for managing and optimizing the complexity of this task. If you need to create segments programmatically, it is usually easier to create a template segment in the UI and then have your application change only small portions of the segment definition.

## What are segment templates?

[Segment templates](https://experienceleague.adobe.com/docs/analytics/components/segmentation/segmentation-workflow/seg-build.html) are provided by Adobe for common use cases. You can base new segments off of these Adobe-provided segment templates. Although original templates cannot be modified, copies of them can be made and then the copies can be modified. You can identify templates by the additional attribute `template: true` as shown at the bottom of the following example:

```json
{
      "id": "Has_An_Action",
      "name": "Has an Action",
      "description": null,
      "definition": {
        "container": {
          "func": "container",
          "pred": {
            "val": {
              "func": "attr",
              "name": "variables/mobileaction"
            },
            "func": "exists",
            "description": "Action Name"
          },
          "context": "hits"
        },
        "func": "segment",
        "version": [
          1,
          0,
          0
        ]
      },
      "template": true
},
```