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
         pause: [ 1000, 2000 ] 
      })

## Options allowed in addition to node-fetch options
- `retry`: Number \
   count of retires you want
- `pause` : Number | Array<Number> \
   Time to dealy between two consecutive retries
   in case of Array<Number> `retry`  must be equal to array.length - 1   
 
 ### Functions Signature
      import { RequestInit } from 'node-fetch'
      fetch(url: string, options: FetchOpts): Promise<any> 

      interface FetchOpts extends RequestInit {
         retry: number,
         pause: Array<number> | number
      }