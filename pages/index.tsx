import Layout from '../components/Layout/Layout.component'
import Schedule from '../components/Schedule/schedule.component';
import Sidebar from '../components/SideBar/sidebar.component';



const IndexPage = () => (
  <Layout title="Schedule">
        <Sidebar/>
        <Schedule/>
  </Layout>
)

export default IndexPage
