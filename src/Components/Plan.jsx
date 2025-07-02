import React, { useState } from 'react'
import HeroPage from '../layouts/HeroPage'
import OrganizationalDevelopmentPlan from './plan/OrganizationalDevelopmentPlan '
import Kepengurusan from './about/Kepengurusan'
import Pengumuman from './Pengumuman'
const Plan = () => {

  const [activeComponent, setActiveComponent] = useState('organizational');

  return (
    <>
          <Pengumuman />
    </>
  )
}

export default Plan