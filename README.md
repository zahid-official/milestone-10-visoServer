<div align="center">

<img src="https://viso-official.netlify.app/assets/2.logo.svg" alt="Viso Logo" width="50" />

# Viso Server - Visa Navigator Portal API

A robust RESTful API powering the Viso visa management platform, handling visa data, application processing, user-specific records, filtering, and search through Express.js and MongoDB.

[![Live API](https://img.shields.io/badge/▶_Live_API-server--one--ashen--40.vercel.app-00C853?style=for-the-badge&logo=vercel&logoColor=white)](https://server-one-ashen-40.vercel.app/)
[![Client App](https://img.shields.io/badge/▶_Client_App-viso--official.netlify.app-6366F1?style=for-the-badge&logo=netlify&logoColor=white)](https://viso-official.netlify.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zahid-official/milestone-10-visoServer)
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />

</div>

<br/>

## 🔍 Overview

**Viso Server** is the backend engine behind the [Viso](https://viso-official.netlify.app/) visa management platform. It exposes a RESTful API built with Express.js and MongoDB, enabling the client application to browse visa catalogs, submit and track applications, manage user-specific visa records, and perform filtered searches, all deployed seamlessly on Vercel as a serverless function.

> _Where every request navigates your visa journey forward._

<br/>

## ✨ Key Features

### 📡 API & Data Management

<table align="center">
<thead>
<tr><th align="left">Feature</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><b>Full CRUD Operations</b></td><td>Create, read, update, and delete visa entries and applications through dedicated endpoints</td></tr>
<tr><td><b>User-Scoped Data</b></td><td>Retrieve visas and applications filtered by user email for personalized dashboards</td></tr>
<tr><td><b>Visa Catalog</b></td><td>Serve a browsable catalog with latest-first sorting and configurable limits</td></tr>
<tr><td><b>Application Tracking</b></td><td>Accept and manage visa applications with full lifecycle support</td></tr>
</tbody>
</table>

### 🔐 Security & Configuration

<table align="center">
<thead>
<tr><th align="left">Feature</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><b>Environment Variables</b></td><td>Sensitive credentials stored securely via <code>dotenv</code>, never exposed in source</td></tr>
<tr><td><b>CORS Enabled</b></td><td>Cross-origin resource sharing configured for seamless client-server communication</td></tr>
<tr><td><b>MongoDB Atlas</b></td><td>Cloud-hosted database with Stable API versioning for production reliability</td></tr>
<tr><td><b>Serverless Deployment</b></td><td>Vercel-powered serverless functions with automatic scaling and zero cold starts</td></tr>
</tbody>
</table>

### 🔎 Search & Filtering

<table align="center">
<thead>
<tr><th align="left">Feature</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><b>Visa Type Filtering</b></td><td>Filter visas by type (Tourist, Student, Business, etc.) through dedicated filter endpoints</td></tr>
<tr><td><b>Application Search</b></td><td>Case-insensitive regex search across applications by country name</td></tr>
<tr><td><b>Flexible Queries</b></td><td>MongoDB-powered queries supporting dynamic filtering and pagination-ready responses</td></tr>
</tbody>
</table>

<br/>

## 🛠️ Tech Stack

<table align="center">
<thead>
<tr><th align="left">Technology</th><th align="center">Version</th><th align="left">Purpose</th></tr>
</thead>
<tbody>
<tr><td><b>Node.js</b></td><td align="center"><code>18+</code></td><td>Server-side JavaScript runtime</td></tr>
<tr><td><b>Express</b></td><td align="center"><code>^4.21.2</code></td><td>Minimal and flexible web application framework</td></tr>
<tr><td><b>MongoDB Driver</b></td><td align="center"><code>^6.11.0</code></td><td>Official MongoDB driver for data persistence</td></tr>
<tr><td><b>dotenv</b></td><td align="center"><code>^16.4.7</code></td><td>Environment variable management from <code>.env</code> files</td></tr>
<tr><td><b>CORS</b></td><td align="center"><code>^2.8.5</code></td><td>Cross-origin request handling middleware</td></tr>and hosting platform</td></tr>
</tbody>
</table>

<br/>

## 🏗️ Architecture

<div align="center">
<pre>
┌─────────────────────────────────────────────────────────────┐
│                     Client (React App)                      │
│            https://viso-official.netlify.app                │
└──────────────────────────────┬──────────────────────────────┘
                      │  HTTP Requests (REST)
▼
┌─────────────────────────────────────────────────────────────┐
│                    Express.js Server                        │
│  ┌────────────┐  ┌──────────────┐  ┌─────────────────────┐  │
│  │ Middleware │  │   Routes     │  │   Query Engine      │  │
│  │            │  │              │  │                     │  │
│  │ • CORS     │  │ GET  /       │  │ • Filter by Type    │  │
│  │ • JSON     │  │ GET  /visa   │  │ • Search by Country │  │
│  │   Parser   │  │ POST /visa   │  │ • Sort by Latest    │  │
│  │            │  │ PUT  /update │  │ • User-scoped Data  │  │
│  │            │  │ DEL  /visa   │  │                     │  │
│  └────────────┘  └──────┬───────┘  └─────────────────────┘  │
│                         │                                   │
├─────────────────────────┼───────────────────────────────────┤
│                         ▼                                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              MongoDB Atlas (Cluster1)                │   │
│  │  ┌──────────────────┐  ┌───────────────────────────┐ │   │
│  │  │ visas Collection │  │ applications Collection   │ │   │
│  │  └──────────────────┘  └───────────────────────────┘ │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
</pre>
</div>

<br/>

## 📡 API Endpoints

### Visas

<table align="center">
<thead>
<tr><th align="left">Method</th><th align="left">Endpoint</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><code>GET</code></td><td><code>/</code></td><td>Fetch latest 8 visas (sorted newest-first) for home page</td></tr>
<tr><td><code>GET</code></td><td><code>/visa</code></td><td>Fetch all visas in the catalog</td></tr>
<tr><td><code>GET</code></td><td><code>/visa/:email</code></td><td>Fetch visas added by a specific user (by email)</td></tr>
<tr><td><code>GET</code></td><td><code>/visaDetails/:id</code></td><td>Fetch a single visa by its ObjectId</td></tr>
<tr><td><code>GET</code></td><td><code>/visas/:id</code></td><td>Fetch a single visa for the "My Visas" view</td></tr>
<tr><td><code>GET</code></td><td><code>/filters/:visaType</code></td><td>Fetch visas filtered by visa type (e.g., Tourist, Student)</td></tr>
<tr><td><code>POST</code></td><td><code>/visa</code></td><td>Add a new visa entry to the catalog</td></tr>
<tr><td><code>PUT</code></td><td><code>/update/:id</code></td><td>Update an existing visa (country, type, fee, validity, etc.)</td></tr>
<tr><td><code>DELETE</code></td><td><code>/visaDetails/:id</code></td><td>Delete a visa from the catalog</td></tr>
</tbody>
</table>

### Applications

<table align="center">
<thead>
<tr><th align="left">Method</th><th align="left">Endpoint</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><code>GET</code></td><td><code>/applications/:email</code></td><td>Fetch all applications submitted by a specific user</td></tr>
<tr><td><code>GET</code></td><td><code>/search?searchQuery=...</code></td><td>Search applications by country name (case-insensitive regex)</td></tr>
<tr><td><code>POST</code></td><td><code>/applications</code></td><td>Submit a new visa application</td></tr>
<tr><td><code>DELETE</code></td><td><code>/applicationDetails/:id</code></td><td>Cancel/delete a submitted application</td></tr>
</tbody>
</table>

<br/>

## 🗃️ Database Collections

### 📋 visas Collection

<table align="center">
<thead>
<tr><th align="left">Field</th><th align="left">Type</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><code>_id</code></td><td>ObjectId</td><td>Auto-generated unique identifier</td></tr>
<tr><td><code>countryName</code></td><td>String</td><td>Destination country name</td></tr>
<tr><td><code>countryFlag</code></td><td>String</td><td>Flag image URL</td></tr>
<tr><td><code>visaType</code></td><td>String</td><td>Tourist / Student / Business / ...</td></tr>
<tr><td><code>processingTime</code></td><td>String</td><td>Estimated processing duration</td></tr>
<tr><td><code>visaFee</code></td><td>String</td><td>Application fee amount</td></tr>
<tr><td><code>validatiy</code></td><td>String</td><td>Visa validity period</td></tr>
<tr><td><code>applicationMethod</code></td><td>String</td><td>Online / in-person / embassy</td></tr>
<tr><td><code>userEmail</code></td><td>String</td><td>Email of the user who added it</td></tr>
</tbody>
</table>

### 📋 applications Collection

<table align="center">
<thead>
<tr><th align="left">Field</th><th align="left">Type</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><code>_id</code></td><td>ObjectId</td><td>Auto-generated unique identifier</td></tr>
<tr><td><code>countryName</code></td><td>String</td><td>Applied country name</td></tr>
<tr><td><code>applicantEmail</code></td><td>String</td><td>Email of the applicant</td></tr>
</tbody>
</table>

<br/>

## 📂 Project Structure

```
milestone-10-server/
├── index.js                       # Express server entry point with all routes
├── package.json                   # Dependencies and npm scripts
├── vercel.json                    # Vercel serverless deployment configuration
├── .gitignore                     # Ignored files (node_modules, .env, .vercel)
└── .env                           # Environment variables (not committed)
```

<br/>

## 🚀 Getting Started

### Prerequisites

<table align="center">
<thead>
<tr><th align="left">Requirement</th><th align="left">Details</th></tr>
</thead>
<tbody>
<tr><td><b>Node.js</b></td><td>v18 or higher recommended</td></tr>
<tr><td><b>npm</b></td><td>Comes bundled with Node.js</td></tr>
<tr><td><b>MongoDB Atlas</b></td><td>A cloud MongoDB cluster with connection credentials</td></tr>
<tr><td><b>Vercel CLI</b></td><td>Optional for deployment to Vercel</td></tr>
</tbody>
</table>

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/zahid-official/milestone-10-visoServer.git

# 2. Navigate to the project directory
cd milestone-10-server

# 3. Install dependencies
npm install

# 4. Set up environment variables (see section below)

# 5. Start the server
npm start
```

The server will be available at `http://localhost:3000` by default.

<br/>

## 🔑 Environment Variables

Create a `.env` file in the project root with the following credentials:

```env
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
PORT=3000
```

> **Note:** The `.env` file is included in `.gitignore` and will never be committed to version control. These variables are used to construct the MongoDB Atlas connection string securely.

<br/>

## 📜 Available Scripts

<table align="center">
<thead>
<tr><th align="left">Command</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><code>npm start</code></td><td>Start the Express server with <code>node index.js</code></td></tr>
<tr><td><code>npm test</code></td><td>Run the test suite (placeholder)</td></tr>
</tbody>
</table>

<br/>

## ⚙️ How It Works

<div align="">
<pre>
                        ┌──────────┐       ┌───────────────┐       ┌──────────────────┐
                        │  Client  │──────►│ Express.js    │──────►│   MongoDB Atlas  │
                        │  (React) │  HTTP │ Server        │ Query │   (visasDB)      │
                        └──────────┘       └────────┬──────┘       └────────┬─────────┘
                                                    │                       │
                                            ┌──────▼──────┐          ┌──────▼──────┐
                                            │   Router    │          │  Collections│
                                            │             │          │             │
                                            │ /visa       │          │ visas       │
                                            │ /application│          │ application │
                                            │ /filters    │          │             │
                                            │ /search     │          │             │
                                            │ /update     │          │             │
                                            └──────┬──────┘          └──────┬──────┘
                                                   │                        │
                                            ┌──────▼──────┐          ┌──────▼──────┐
                                            │ Middleware  │          │   Result    │
                                            │             │          │             │
                                            │ • CORS      │          │ • Find      │
                                            │ • JSON Body │          │ • Insert    │
                                            │   Parser    │          │ • Update    │
                                            │             │          │ • Delete    │
                                            └─────────────┘          └──────┬──────┘
                                                                            │
                                            ┌───────────────────────────────┘
                                            ▼
                                     JSON Response ──► Client Renders Data
</pre>
</div>

1. **Request Arrival** : The client sends HTTP requests to the Express server hosted on Vercel.
2. **Middleware Processing** : CORS headers are applied and the JSON request body is parsed.
3. **Route Matching** : Express matches the request method and URL pattern to the appropriate handler.
4. **Database Query** : The handler constructs a MongoDB query (with optional filters, sorting, or regex search).
5. **Data Processing** : MongoDB Atlas processes the query against the `visas` or `applications` collection.
6. **JSON Response** : The server returns structured JSON data to the client for rendering.

<br/>

## 🚢 Deployment

This server is deployed on **Vercel** as a serverless function. The `vercel.json` configuration routes all incoming requests to `index.js`:

```json
{
  "version": 2,
  "builds": [{ "src": "/index.js", "use": "@vercel/node" }],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.js",
      "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
    }
  ]
}
```

> **Tip:** Set your `DB_USER` and `DB_PASS` environment variables in the Vercel dashboard under **Settings → Environment Variables** before deploying.

<br/>

## 🔗 Related Repository

<table align="center">
<thead>
<tr><th align="left">Repository</th><th align="left">Description</th><th align="left">Link</th></tr>
</thead>
<tbody>
<tr><td><b>Viso Client</b></td><td>React frontend , browse visas, apply online, manage records</td><td><a href="https://github.com/zahid-official/milestone-10-visoMonorepo">GitHub</a></td></tr>
<tr><td><b>Live Client</b></td><td>Deployed client application on Netlify</td><td><a href="https://viso-official.netlify.app/">viso-official.netlify.app</a></td></tr>
</tbody>
</table>

<br/>

## 🌟 Author

<div align="center">
  <a href="https://github.com/zahid-official">
    <img src="https://github.com/zahid-official.png" width="100" height="100" style="border-radius: 50%;" alt="Zahid Official" />
  </a>

  <h3>Zahid Official</h3>
  <p><b>Web Developer | Tech Enthusiast</b></p>

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zahid-official)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/zahid-web)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:zahid.official8@gmail.com)

  <p>Creating impactful digital experiences with passion and purposeful design</p>
</div>

<br/>

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how you can help improve **Viso Server**:

```bash
# 1. Fork the repository

# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes and commit
git commit -m "feat: add your feature description"

# 4. Push to your fork
git push origin feature/your-feature-name

# 5. Open a Pull Request against the main branch
```

<p align="center"><b>Viso Server</b> <i> - Powering every visa journey with reliable, scalable API infrastructure.</i></p>
