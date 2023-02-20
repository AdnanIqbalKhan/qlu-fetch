# fetch



## Getting started

    import fetch from '@adnaniqbal/fetch'

    const res = await fetch('https://randomuser.me/api', {}, 3)
 

 ### functions signature
      fetch(url: string, options: FetchOpts): Promise<any> 

      interface FetchOpts extends RequestInit {
         retry: number,
         pause: Array<number> | number
      }