/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    versions: [
      {
        title: 'v2.0',
        path: '/2.0/'
      },
      {
        title: 'v1.4',
        path: '/1.4/'
      }
    ],
    pages: [
      {
        title: 'Adobe Analytics API',
        path: '/'
      },
      {
        title: 'Getting started',
        path: '/getting-started/'
      },
      {
        title: 'Endpoint guides',
        path: '/endpoints/'
      },
      {
        title: 'API reference',
        path: '/api/'
      },
      {
        title: 'Use cases',
        path: '/use-cases/'
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Getting started',
        path: '/getting-started/',
        pages: [
          {
            title: 'JWT',
            path: '/getting-started/jwt/'
          },
          {
            title: 'Migrating from 1.4',
            path: '/getting-started/migration/'
          },
          {
            title: 'FAQ',
            path: '/getting-started/faq/'
          }
        ]
      },
      {
        title: 'Endpoint guides',
        path: '/endpoints/',
        pages: [
          {
            title: 'Bulk data insertion',
            path: '/endpoints/bulk-data-insertion/',
            pages: [
              {
                title: 'API reference',
                path: '/endpoints/bulk-data-insertion/api-reference/'
              },
              {
                title: 'Column reference',
                path: '/endpoints/bulk-data-insertion/column-reference/'
              },
              {
                title: 'Validate',
                path: '/endpoints/bulk-data-insertion/validate/'
              },
              {
                title: 'Visitor groups',
                path: '/endpoints/bulk-data-insertion/visitor-groups/'
              },
              {
                title: 'Customer ID',
                path: '/endpoints/bulk-data-insertion/customer-id/'
              },
              {
                title: 'Examples',
                path: '/endpoints/bulk-data-insertion/example/'
              },
              {
                title: 'Troubleshooting',
                path: '/endpoints/bulk-data-insertion/troubleshooting/'
              },
              {
                title: 'FAQ',
                path: '/endpoints/bulk-data-insertion/faq/'
              }
            ]
          },
          {
            title: 'Calculated metrics',
            path: '/endpoints/calculatedmetrics/',
            pages: [
              {
                title: 'Functions',
                path: '/endpoints/calculatedmetrics/functions'
              },
              {
                title: 'Validate',
                path: '/endpoints/calculatedmetrics/validate'
              },
              {
                title: 'FAQ',
                path: '/endpoints/calculatedmetrics/faq'
              }
            ]
          },
          {
            title: 'Data repair',
            path: '/endpoints/data-repair/',
            pages: [
              {
                title: 'API reference',
                path: '/endpoints/data-repair/api-reference/'
              },
              {
                title: 'Variables',
                path: '/endpoints/data-repair/variables/'
              },
              {
                title: 'Server call estimate',
                path: '/endpoints/data-repair/server-call-estimate/'
              },
              {
                title: 'Job',
                path: '/endpoints/data-repair/job/'
              },
              {
                title: 'Job ID',
                path: '/endpoints/data-repair/job-id/'
              },
              {
                title: 'FAQ',
                path: '/endpoints/data-repair/faq/'
              }
            ]
          },
          {
            title: 'Discovery',
            path: '/endpoints/discovery/'
          },
          {
            title: 'Reports',
            path: '/endpoints/reports/',
            pages: [
              {
                title: 'Breakdowns',
                path: '/endpoints/reports/breakdowns/'
              },
              {
                title: 'Debugger',
                path: '/endpoints/reports/debugger/'
              },
              {
                title: 'Examples',
                path: '/endpoints/reports/examples/'
              },
              {
                title: 'Search filters',
                path: '/endpoints/reports/search-filters/'
              },
              {
                title: 'Segments',
                path: '/endpoints/reports/segments/'
              }
            ]
          },
          {
            title: 'Report suites',
            path: '/endpoints/report-suites/'
          },
          {
            title: 'Segments',
            path: '/endpoints/segments/',
            pages: [
              {
                title: 'Definitions',
                path: '/endpoints/segments/definition/'
              },
              {
                title: 'Validate',
                path: '/endpoints/segments/validate/'
              },
              {
                title: 'Examples',
                path: '/endpoints/segments/examples/'
              },
              {
                title: 'FAQ',
                path: '/endpoints/segments/faq'
              }
            ]
          },
          {
            title: 'Tags',
            path: '/endpoints/tags/'
          },
          {
            title: 'Usage',
            path: '/endpoints/usage/'
          },
          {
            title: 'Virtual report suites',
            path: '/endpoints/vrs/',
            pages: [
              {
                title: 'JSON body reference',
                path: '/endpoints/vrs/reference/'
              },
              {
                title: 'Examples',
                path: '/endpoints/vrs/examples/'
              }
            ]
          }
        ]
      },
      {
        title: 'Use cases',
        path: '/use-cases/',
        pages: [
          {
            title: 'cURL',
            path: '/use-cases/curl/'
          },
          {
            title: 'Java',
            path: '/use-cases/java/'
          },
          {
            title: 'Postman',
            path: '/use-cases/postman/'
          },
          {
            title: 'Python',
            path: '/use-cases/python/'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/analytics-apis/'
};
