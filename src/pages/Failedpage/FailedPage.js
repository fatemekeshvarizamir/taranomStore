import React from 'react'
import MainLayout from '../../components/Layout/Mainlayout/mainLayout'
import SuccessfulPage from '../../components/SuccessfulPayment/Successful'
import FailedPayment from '../../components/FailedPayment/FailedPayment'

export default function FailedP() {
  return (
    <MainLayout>
     <FailedPayment/>
    </MainLayout>
  )
}
