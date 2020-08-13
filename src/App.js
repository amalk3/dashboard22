import React from 'react'
import { Layout } from 'antd';
import CenterContent from './components/CenterContent'

const { Content, Sider } = Layout

function DashBoard() {
  return (
    <div>
      <Layout>
        <Sider width={200}
          style={{ backgroundColor: 'white', position: 'fixed', left: 0,overflow: 'auto',height: '150vh',}}>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content style={{ backgroundColor:'#eff0f8dc' ,margin: '20px 16px 0', overflow: 'initial' }} className="Content">
            <div style={{ padding: 24, textAlign: 'center' }}>
             <CenterContent/>
            </div>
          </Content>
        </Layout>
        <Sider width={200} style={{backgroundColor:'white'}}></Sider>
      </Layout>
    </div>
  )
}

export default DashBoard