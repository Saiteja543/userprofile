import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    unqNo: 1,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Teja',
    role: 'software developer',
  },
  {
    unqNo: 2,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Krishna',
    role: 'software developer',
  },
  {
    unqNo: 3,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon',
    role: 'software developer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">UsersList</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.unqNo} />
      ))}
    </ul>
  </div>
)

export default App
