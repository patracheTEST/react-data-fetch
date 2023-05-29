import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { worker } from './mocks/browser'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'

if (process.env.NODE_ENV === 'development') {
  console.log("worker start")
  worker.start()
}

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
  </React.StrictMode>,
)
