import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
const TeraboxDownloader = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDownloadLink = async () => {
    if (!inputUrl.trim()) {
      setError('Please enter a valid URL.');
      return;
    }

    setLoading(true);
    const url = 'https://terabox-downloader-direct-download-link-generator.p.rapidapi.com/fetch';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': 'e584681e21msh9cc35bc509dc34dp1fe86cjsnd1e16045a5b3',
        'x-rapidapi-host': 'terabox-downloader-direct-download-link-generator.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: inputUrl,
      }),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Full Response:', response);
      console.log('Fetched Data:', data);
      setResult(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    } finally {F
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load the first script
    const script1 = document.createElement('script');
    script1.src = "//shocking-honey.com/a/W/ZCy.QY2/9/k/ZmTE9A6sbB2f5TllSSWlQf9BNLTIgJwmOQDRk/yvNHiXZuwudUX_Nro/WUmy9luWZhUxlhkKPITiUx4EMMDHgf5_Mkj-YR";
    script1.async = true;
    script1.referrerPolicy = 'no-referrer-when-downgrade';
    document.body.appendChild(script1);

    // Load the second script
    const script2 = document.createElement('script');
    (function(idkzb) {
      var d = document,
          s = d.createElement('script'),
          l = d.scripts[d.scripts.length - 1];
      s.settings = idkzb || {};
      s.src = "//glum-mortgage.com/brX.VFsYdZG-l-0yYLW/dQiCY/WB5fuEZMXqIi/uegmv9GufZ/UllAkIPNTZUl4PM/DRklxzMHj/M/twNyT/gpwbOsTZE/yYN/AC";
      s.async = true;
      s.referrerPolicy = 'no-referrer-when-downgrade';
      l.parentNode.insertBefore(s, l);
    })({});

    return () => {
      document.body.removeChild(script1); // Cleanup first script
      // Note: The second script is added inline, so it doesn't need explicit removal
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <>
      <Helmet>
        <title>Terabox Downloader</title>
        <meta name="description" content="Download files from Terabox easily with our downloader tool.just paste and download it" />
        <meta name="keywords" content="Terabox,downloader,file download,cloud storage,terabox downloader online,terabox direct download,terabox direct download link generator,terabox link video downloader online free,terabox downloader video,download from terabox without app,	
terabox downloader bot,terabox downloader,terabox downloader online free,terabox link downloader" />
        <meta name="author" content="TeraDownloader.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Terabox Downloader" />
        <meta property="og:description" content="Easily download files from Terabox with our tool. Direct downnload using this website" />
        <meta property="og:image" content="URL_TO_IMAGE" /> 
        <meta property="og:url" content="https://teraboxdownloader.fun/" /> 
      </Helmet>
    <div id='background-color' style={{  background: 'linear-gradient(45deg, #66b3ff, #66e0ff)',}} >
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }} >
      <h1>Terabox Downloader</h1>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Enter Terabox sharing link"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            marginBottom: '10px',
          }}
        />
        <button
          onClick={fetchDownloadLink}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {loading ? 'Loading...' : 'Get Download Link'}
        </button>
      </div>
      
    </div>
    </div>
   
    {result && (
        <div style={{ marginTop: '20px' }}>
          <div style={{
           background: 'linear-gradient(45deg, #66b3ff, #66e0ff)',
            padding: '20px',
            borderRadius: '8px',
            display:"flex",
            justifyContent:"center",
            flexDirection: "column",
            alignItems: "center"
          }}>
            {result.map((value, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <div className="card" style={{width:"18rem", boxShadow: '1px 2px 10px black'}}>
                 <img src={value.thumbs.url1} />
                  <div className="card-body">
                    <h5 className="card-title">{value.server_filename}</h5>
                    <div style={{display:"block",padding:"10px"}} >
                    <a
                      className="btn btn-primary"
                      style={{paddingLeft:"20px",marginBottom:"20px"}}
  href={`${(value.dlink)}`}
  target="_blank"
  rel="noopener noreferrer"
>
 Download
</a>
                       
                       
                            <a
                      className="btn btn-warning"
                      style={{paddingLeft:"20px",marginBottom:"20px"}}
  href={`${(value.dlink)}`}
  target="_blank"
  rel="noopener noreferrer"
>
  Fast Download
</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    {!result && !loading && (
        <div style={{ background: 'linear-gradient(45deg, #66b3ff, #66e0ff)', marginTop: '20px', color: 'black',paddingTop:'30px',paddingBottom:"30px",alignItems:"center",display:"flex",justifyContent:"center" }}>
            <p>Please enter the link above </p>
        </div>
    )}
          <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>How to download videos, files from Terabox URL using Terabox link converter:</h2>
        <ol>
          <li>Copy Terabox Link: Copy your desired Terabox link from anywhere, like Telegram, Twitter, WhatsApp, or any groups.</li>
          <li>Paste URL: Paste the copied Terabox link in the input box of our app and click on the "Download" button.</li>
        </ol>
      </div>
      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px'}}>
        <h2>About Terabox</h2>
        <p>TeraBox is a free cloud storage tool that offers 1TB of secure storage for documents, file sharing, and videos. You can easily transfer files across devices and share them with friends.</p>
        <p>It ensures data safety with regular backups, either automatic or manual. You can manage your files effortlessly with features like folders for organization, version control for tracking changes, and easy file sharing.</p>
      </div>


      <footer style={{ marginTop: '20px', padding: '10px', textAlign: 'center', backgroundColor: '#171717',color
        :"white" ,borderTop: '1px solid #ccc' }}>
        <p>&copy; {new Date().getFullYear()} teraboxdownloader.fun. All rights reserved.</p>
        <p  ><a href="/" target="_blank" rel="noopener noreferrer">About us</a> | <a href="/" target="_blank" rel="noopener noreferrer">Terms&condition</a></p>
      </footer>
    </>
  );
};

export default TeraboxDownloader;
