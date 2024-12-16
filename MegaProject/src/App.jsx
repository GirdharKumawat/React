 
import './App.css'
import conf from './conf/conf'
function App() {
  console.log(import.meta.env.VITE_APPWRITE_ENDPOINT)
  

return (
  <>
    <h1>MyBlog with React</h1>
    <ul>
      {Object.entries(conf).map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
    </ul>
  </>
)
}

export default App
