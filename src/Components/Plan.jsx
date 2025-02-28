import React, { useState } from 'react'
import HeroPage from '../layouts/HeroPage'
import OrganizationalDevelopmentPlan from './plan/OrganizationalDevelopmentPlan '
import Kepengurusan from './about/Kepengurusan'
const Plan = () => {

  const [activeComponent, setActiveComponent] = useState('organizational');

  return (
    <>
    <HeroPage teks="
          Organizational Development Plan"/>
          <OrganizationalDevelopmentPlan />
    {/* 
    <div className="flex items-center justify-center gap-4 my-4">
        <button onClick={() => setActiveComponent('organizational')} className="px-4 py-2 bg-blue-500 text-white rounded">
          Organizational Development Plan
        </button>
        <button onClick={() => setActiveComponent('logoPhilosophy')} className="px-4 py-2 bg-green-500 text-white rounded">
          Logo Philosophy
        </button>
      </div>
      {activeComponent === 'organizational' ? <OrganizationalDevelopmentPlan /> : <Kepengurusan />}
    */}
    </>
  )
}

export default Plan