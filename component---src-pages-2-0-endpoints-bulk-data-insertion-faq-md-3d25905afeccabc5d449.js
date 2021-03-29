(self.webpackChunkanalytics_apis=self.webpackChunkanalytics_apis||[]).push([[2035],{1699:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return m}});var n=a(2122),i=a(9756),o=(a(5007),a(4983)),r=a(9536),d={},s={_frontmatter:d},l=r.Z;function m(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.mdx)(l,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"bulk-data-insertion-faq"},"Bulk data insertion FAQ"),(0,o.mdx)("p",null,"Get answers to common questions asked when using the Bulk data insertion API."),(0,o.mdx)("h2",{id:"what-compression-can-i-use"},"What compression can I use?"),(0,o.mdx)("p",null,"All batch files must be compressed using GZIP compression."),(0,o.mdx)("h2",{id:"how-big-can-my-files-be"},"How big can my files be?"),(0,o.mdx)("p",null,"Compressed files can be up to 100 MB.  Uncompressed file size is limited to 1 GB."),(0,o.mdx)("h2",{id:"what-should-i-name-my-batch-file"},"What should I name my batch file?"),(0,o.mdx)("p",null,'The Bulk Data Insertion API does not place any restrictions on file names. When submitted via an API call, a file identifier is returned that can be used to track the file. The name of the uploaded file is preserved, however, in the system so that customers have a "friendly" reference point when viewing information about files.'),(0,o.mdx)("h2",{id:"what-is-the-difference-between-the-bdia-and-the-data-insertion-api-available-in-the-14-api"},"What is the difference between the BDIA and the Data Insertion API available in the 1.4 API?"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"/analytics-apis/src/pages/1.4/endpoints/data-insertion/index.md"},"Data Insertion API")," and Bulk Data Insertion API are both methods to submit server-side collection data to Adobe Analytics. Data Insertion API calls are made one event at a time. Bulk Data Insertion API accepts CSV formatted files containing event data, one event per row. Adobe recommends using the Bulk Data Insertion API in most cases."),(0,o.mdx)("h2",{id:"what-are-the-limitations-of-using-the-bdia"},"What are the limitations of using the BDIA?"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},'BDIA can only send data to report suites that are configured as "Timestamp enabled" or "Timestamp optional."'),(0,o.mdx)("li",{parentName:"ul"},"Historical data for a visitor grouping must be ingested before any current data can be processed, unless Timestamp Optional report suites are being used and visitor continuity is not possible or not desirable."),(0,o.mdx)("li",{parentName:"ul"},"The amount of server calls that can be processed in a given time are dependent on throttle limits and allocated resources for that customer. Spikes in server calls must be reported to Adobe similarly to traditional data collection through AppMeasurement."),(0,o.mdx)("li",{parentName:"ul"},"Do not send more than 1 file per 20 seconds per visitor group."),(0,o.mdx)("li",{parentName:"ul"},"Utilize enough visitor groups so that you do not send more than 2000 rows/second per visitor group.")),(0,o.mdx)("h2",{id:"how-frequently-can-i-upload-files"},"How frequently can I upload files?"),(0,o.mdx)("p",null,"Before using BDIA, a customer must provide an expected volume of ingestion. From the expected volume, a per-second throttle limit is configured within Adobe's system. This configuration throttles the number per-second ingestion server calls. If the system detects the throttle limit may be exceeded, it will process uploaded files more slowly to stay within the limit."),(0,o.mdx)("p",null,"These limits help ensure a timely processing and availability of data for Adobe Analytics reporting. They also help protect the system from becoming overwhelmed before proper capacity has been provisioned for a sharp increase in call volume."),(0,o.mdx)("h2",{id:"how-do-i-handle-rows-that-contain-commas"},"How do I handle rows that contain commas?"),(0,o.mdx)("p",null,"Commas are used to separate columns in a given row. If you need to pass a comma as part of a value, surround the entire value in quotation marks. For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},'field1,"example, with, commas",field3\n')),(0,o.mdx)("h2",{id:"how-do-i-handle-rows-that-contain-quotation-marks"},"How do I handle rows that contain quotation marks?"),(0,o.mdx)("p",null,"If a field contains quotation marks, use two quotes. For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},'field1,"these are ""quotation marks"" inside a field",field3\n')),(0,o.mdx)("p",null,"The above row results in ",(0,o.mdx)("inlineCode",{parentName:"p"},'these are "quotation marks" inside a field')," as the value ingested into Analytics."),(0,o.mdx)("h2",{id:"does-that-last-row-in-a-file-require-a-line-break"},"Does that last row in a file require a line break?"),(0,o.mdx)("p",null,"The last row in the file can have a line break (CRLF or LF), but it is optional."),(0,o.mdx)("h2",{id:"i-accidentally-put-two-of-the-same-header-in-a-file-how-is-that-data-ingested"},"I accidentally put two of the same header in a file. How is that data ingested?"),(0,o.mdx)("p",null,"If a column header is duplicated in a file, only the first instance of the column and its corresponding data fields are used; the duplicate columns are ignored, even if the first column was empty."),(0,o.mdx)("h2",{id:"are-column-headers-case-sensitive"},"Are column headers case sensitive?"),(0,o.mdx)("p",null,"No, column header names are not case sensitive."),(0,o.mdx)("h2",{id:"how-does-bdia-handle-unrecognized-column-headers"},"How does BDIA handle unrecognized column headers?"),(0,o.mdx)("p",null,"A column header unrecognized by BDIA is ignored."),(0,o.mdx)("h2",{id:"what-order-should-i-put-my-headers-in"},"What order should I put my headers in?"),(0,o.mdx)("p",null,"Columns can appear in any order in the upload file. Most query strings in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"QueryString")," field are also valid in any order."),(0,o.mdx)("h2",{id:"what-are-the-response-codes-that-i-can-get-and-what-do-they-mean"},"What are the response codes that I can get, and what do they mean?"),(0,o.mdx)("p",null,"The following response codes are returned by the API:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"HTTP_Response"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"100 - Continue")),(0,o.mdx)("td",{parentName:"tr",align:null},"This is used when uploading a file. This is sent to a client after authentication is checked and the HTTP request headers are validated. This signals to the client that they can begin to upload the large file. For example, if a client waits for this response code before sending a file, it can avoid uploading an entire file before learning that a visitor group ID was not specified.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"400 - Bad Request")),(0,o.mdx)("td",{parentName:"tr",align:null},"Required headers are missing or the uploaded file is missing critical information or is malformed.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"401 - Unauthorized")),(0,o.mdx)("td",{parentName:"tr",align:null},"The API key or user token used to interact with the API is not valid.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"403 - Forbidden")),(0,o.mdx)("td",{parentName:"tr",align:null},"Occurs when attempting to perform an action that is not currently allowed.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"404 - Not Found")),(0,o.mdx)("td",{parentName:"tr",align:null},"Occurs when attempting to call an undefined endpoint.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"413 - Payload Too Large")),(0,o.mdx)("td",{parentName:"tr",align:null},"Returned when the file being uploaded is larger than the permitted size.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"429 - Too Many Requests")),(0,o.mdx)("td",{parentName:"tr",align:null},"Occurs when the number of API calls exceeds the system limits.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"500 - Internal Error")),(0,o.mdx)("td",{parentName:"tr",align:null},"Occurs when the API encounters an unexpected internal error that it is unable to recover from.")))),(0,o.mdx)("h2",{id:"i-did-not-validate-a-file-before-uploading-it-and-the-entire-upload-failed-what-are-my-options"},"I did not validate a file before uploading it, and the entire upload failed. What are my options?"),(0,o.mdx)("p",null,"If the entire file fails, use the ",(0,o.mdx)("a",{parentName:"p",href:"/analytics-apis/c8cec23679d57d373ec8da34c1e3f228/troubleshooting.md"},"troubleshooting")," page to help determine the cause of the issue. You can then make adjustments to the file creation process, and recreate and reupload the file. These actions do not result in any duplicate data, because no data was ingested into Analytics. You can look at the ",(0,o.mdx)("inlineCode",{parentName:"p"},"invalid_rows")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"rows")," field in the API response message to determine if all of the rows failed. If ",(0,o.mdx)("inlineCode",{parentName:"p"},"invalid_rows")," is equal to ",(0,o.mdx)("inlineCode",{parentName:"p"},"rows"),", then no rows were successfully ingested."),(0,o.mdx)("h2",{id:"i-did-not-validate-a-file-before-uploading-it-and-some-hits-were-valid-while-others-were-not-what-are-my-options"},"I did not validate a file before uploading it, and some hits were valid while others were not. What are my options?"),(0,o.mdx)("p",null,"Your best course of action depends on how many invalid rows exist:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Mostly valid rows"),": If a file with a large amount of rows is submitted, but a small percentage of those rows fail, it is probably best to not resubmit the file. If you resubmit a file where most rows were successfully ingested during its initial processing, the majority of rows will result in duplicated data in Analytics. Accepting that a small amount of rows were lost is typically better than duplicating a larger amount of data."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Mostly invalid rows"),": If a file is submitted, and a large percentage of the rows have failed, then it might make sense to repair the rows and resubmit the file. Only take this action if the number of duplicate hits is acceptable and the missed server calls are individually significant. Otherwise, Adobe recommends fixing the file generation process and not trying to resubmit the file.")),(0,o.mdx)("h2",{id:"how-do-i-remove-data-that-was-inadvertently-uploaded"},"How do I remove data that was inadvertently uploaded?"),(0,o.mdx)("p",null,"Data uploaded through the Bulk data insertion API is permanent. In some cases, you can use the ",(0,o.mdx)("a",{parentName:"p",href:"/analytics-apis/f0c36124705316b20350d9528d835c28/index.md"},"Data Repair API"),", but Adobe strongly recommends that you validate uploads before ingesting them into Adobe Analytics. Adobe Engineering Services can also assist customers in removing undesired data through a paid service engagement. Contact your Adobe Account Manager for more information."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-2-0-endpoints-bulk-data-insertion-faq-md-3d25905afeccabc5d449.js.map