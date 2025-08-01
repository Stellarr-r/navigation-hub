import React from 'react';

const App: React.FC = () => {
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    alert(`File selected: ${file.name} (Upload functionality requires Docker services)`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1>🌟 StellarVentures Navigation Hub</h1>
        <p style={{ color: '#666' }}>Welcome to your private navigation hub</p>
      </header>
      
      <nav style={{ marginBottom: '30px' }}>
        <h2>🔗 Quick Navigation</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>
            <a href="https://website-a.yourdomain.com" style={{ textDecoration: 'none', color: '#0066cc' }}>
              📊 Website A (Placeholder)
            </a>
          </li>
          <li style={{ margin: '10px 0' }}>
            <a href="https://website-b.yourdomain.com" style={{ textDecoration: 'none', color: '#0066cc' }}>
              🚀 Website B (Placeholder)
            </a>
          </li>
        </ul>
      </nav>
      
      <section style={{ marginBottom: '30px' }}>
        <h2>📁 In-house Storage</h2>
        <p>Upload and manage your private files</p>
        <input type="file" onChange={handleUpload} style={{ margin: '10px 0' }} />
        <p style={{ color: '#666', fontSize: '14px' }}>
          Note: Full authentication and storage features require Docker services to be running
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>⚙️ System Status</h2>
        <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
          <p>✅ Frontend: Running</p>
          <p>⏳ Authentication (Keycloak): Requires Docker</p>
          <p>⏳ Storage (MinIO): Requires Docker</p>
          <p>⏳ Database (PostgreSQL): Requires Docker</p>
        </div>
      </section>

      <footer style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
        <h3>🚀 Next Steps</h3>
        <ol>
          <li>Install Docker Desktop to enable full functionality</li>
          <li>Set up docker-compose.yml with Keycloak, MinIO, and PostgreSQL</li>
          <li>Configure authentication and storage services</li>
          <li>Deploy to Hetzner EX44 server for production</li>
        </ol>
      </footer>
    </div>
  );
};

export default App;