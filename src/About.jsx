export default function About() {
 
  return (
    <>
    <div style={{padding:"20px", background: 'linear-gradient(75deg, #66b3ff, #66e0ff)'}}>
      <h1>About Our Website</h1>
      <p>
        Our website provides a convenient way to download Terabox links directly. 
        We aim to simplify the process of accessing and downloading files stored on Terabox, 
        making it easier for users to manage their data.
        We also offer a user-friendly interface and dedicated customer support to assist users with any inquiries or issues they may encounter while using our service.
      </p>
      <h2>What is Terabox?</h2>
      <p>
        Terabox is a cloud storage service that allows users to store and share files securely. 
        With Terabox, you can access your files from anywhere, making it a great solution for 
        both personal and professional use.
      </p>
      <h2>Features of Terabox</h2>
      <p>
        Terabox offers a variety of features including:
        <ul>
          <li>Generous storage space for all your files.</li>
          <li>Easy file sharing options with friends and colleagues.</li>
          <li>Robust security measures to protect your data.</li>
          <li>Cross-platform accessibility, allowing you to use it on any device.</li>
        </ul>
      </p>
      <h2>Benefits of Using Terabox</h2>
      <p>
        By using Terabox, you can enjoy:
        <ul>
          <li>Peace of mind knowing your files are safe and secure.</li>
          <li>Convenience of accessing your files from anywhere.</li>
          <li>Collaboration features that enhance teamwork.</li>
          <li>Regular updates and support from the Terabox team.</li>
        </ul>
      </p>
      <h2>How to Use Terabox</h2>
      <p>
        Using Terabox is simple and straightforward. Follow these steps to get started:
        <ol>
          <li>Sign up for a free account on the Terabox website.</li>
          <li>Upload your files to your Terabox storage.</li>
          <li>Share your files with others using shareable links.</li>
          <li>Access your files from any device at any time.</li>
        </ol>
      </p>
    </div>
     <footer style={{ padding: '10px', textAlign: 'center', backgroundColor: '#171717',color
      :"white" ,borderTop: '1px solid #ccc' }}>
      <p>&copy; {new Date().getFullYear()} teraboxdownloader.fun. All rights reserved.</p>
      <p  ><a href="/" target="_blank" rel="noopener noreferrer">Home</a> | <a href="/" target="_blank" rel="noopener noreferrer">Terms&condition</a></p>
    </footer>
    </>
  )
}
