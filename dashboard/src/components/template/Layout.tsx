import ForceAuth from '../auth/ForceAuth'
import Content from './Content'
import Header from './Header'
import Sidebar from './Sidebar'

interface LayoutProps {
  title: string,
  subtitle: string,
  children?: any
}


export default function Layout (props: LayoutProps) {
  return (
    <ForceAuth>
      <div className='flex h-screen w-screen'>
        <Sidebar />
        <div className={`
          flex flex-col w-full p-7 
        bg-gray-200  text-gray-700
        dark:bg-gray-900 dark:text-gray-200
        `}>
          <Header title={props.title} subtitle={props.subtitle} />
          <Content>
            {props.children}
          </Content>
        </div>
      </div>
    </ForceAuth>
  )
}