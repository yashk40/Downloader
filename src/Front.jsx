import React, { useState } from 'react';
import Navbar from './Navbar';

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div id='background-color' >
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
            borderRadius: '4px',
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
          {loading ? 'Loading...' : 'Fetch Download Link'}
        </button>
      </div>
      
    </div>
    </div>
   
    {result && (
        <div style={{ marginTop: '20px' }}>
          <div style={{
            backgroundColor:"#ecd4f4",
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
        <div style={{ marginTop: '20px', color: 'black',backgroundColor:"#ecd4f4",paddingTop:'30px',paddingBottom:"30px",alignItems:"center",display:"flex",justifyContent:"center" }}>
            <p>Please enter the link above to fetch the download link.</p>
        </div>
    )}
          <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px',boxShadow:"1px 2px 4px " }}>
        <h2>How to download videos, files from Terabox URL using Terabox link converter:</h2>
        <ol>
          <li>Copy Terabox Link: Copy your desired Terabox link from anywhere, like Telegram, Twitter, WhatsApp, or any groups.</li>
          <li>Paste URL: Paste the copied Terabox link in the input box of our app and click on the "Download" button.</li>
        </ol>
      </div>
      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px',boxShadow:"1px 2px 4px" }}>
        <h2>About Terabox</h2>
        <p>TeraBox is a free cloud storage tool that offers 1TB of secure storage for documents, file sharing, and videos. You can easily transfer files across devices and share them with friends.</p>
        <p>It ensures data safety with regular backups, either automatic or manual. You can manage your files effortlessly with features like folders for organization, version control for tracking changes, and easy file sharing.</p>
      </div>


      <footer style={{ marginTop: '20px', padding: '10px', textAlign: 'center', backgroundColor: '#f8f9fa', borderTop: '1px solid #ccc' }}>
        <p>&copy; {new Date().getFullYear()} TeraDownloader.com. All rights reserved.</p>
        <p>Follow us on <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p>
      </footer>
    </>
  );
};

export default TeraboxDownloader;
