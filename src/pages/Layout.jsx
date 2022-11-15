import { Outlet, Link } from 'react-router-dom'
const exercises = ['eje01', 'eje02', 'eje03', 'eje04', 'eje05', 'eje06', 'eje07', 'eje08', 'eje09', 'eje10', 'eje11','eje12','eje13','eje14','eje15']

const Links = () => {
  return exercises.map((eje) => (
      <li key={eje}>
        <Link to={eje}>{eje}</Link>
      </li>
    ))
  
}
const Layout = () => {
  return (
    <>
      <nav>
        <ul className="flex flex-row gap-4 flex-wrap">
          <li>
            <Link to="/">Home</Link>
          </li>
         <Links/>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
