# fetch

## Getting started

      import fetch from 'qlu-fetch'

### Call with constant pause time
      let res = await fetch('https://randomuser.me/api', {
         method: 'GET',
         retry: 3,
         pause: 1000 
      })

### Call with different pause time for every request

      let res = await fetch('https://randomuser.me/api', { 
         method: 'GET',
         retry: 3,
         pause: [ 1000, 2000, 3000 ] 
      })

## Options allowed in addition to node-fetch options
- `retry`: Number \
   count of retires you want
- `pause` : Number | Array<Number> \
   Time to dealy between two consecutive retries
   in case of Array<Number> `retry`  must be equal to array.length 
-  `timeout`: Number \
   Abort all requests after timeout
-  `simultaneous`: Boolean \
   If true retires run simultaneously and return first response
 
 ### Functions Signature
      import { RequestInfo, RequestInit } from "node-fetch"

      type RequestOptions = RequestInit & {
         retry?: number,
         pause?: number | Array<number>,
         timeout?: number,
         simultaneous?: boolean
      }

      function fetch(url: RequestInfo, options?: RequestOptions): Promise<Response> 
