import React from 'react'
import { useEffect } from 'react';
export default function YTdown() {
    useEffect(() => {
        const url = 'https://youtube-media-downloader.p.rapidapi.com/v2/misc/list-items';
        const data = new FormData();

        const options = {
          method: 'POST',
          headers: {
            'x-rapidapi-key': 'e584681e21msh9cc35bc509dc34dp1fe86cjsnd1e16045a5b3',
            'x-rapidapi-host': 'youtube-media-downloader.p.rapidapi.com'
          },
          body: data
        };
    
        const fetchData = async () => {
          try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []); // Empty dependency array to run once on mount
    
  return (
    <>
      
    </>
  )
}
