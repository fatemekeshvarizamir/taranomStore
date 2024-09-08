import React from 'react'
import styles from './homepage.module.css'
import MainLayout from '../../components/Layout/Mainlayout/mainLayout'

import Content1 from '../../components/Content/test'
import Content from '../../components/Content/content'



export default function Homepage() {
  return (
    <MainLayout>
      <Content />
    </MainLayout>
  )
}

