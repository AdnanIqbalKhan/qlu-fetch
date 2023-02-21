# fetch

## Getting started

      import fetch from '@adnaniqbal/fetch'

      let res = await fetch('https://randomuser.me/api', { method: 'GET', retry: 3, pause: 1000 })
 
 ### functions signature
      fetch(url: string, options: FetchOpts): Promise<any> 

      interface FetchOpts extends RequestInit {
         retry: number,
         pause: Array<number> | number
      }