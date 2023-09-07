import {Route, Routes} from 'react-router-dom'

import {Home} from './components/Home'
import {AuthLayout} from './AuthLayout'

const LandingPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='home' element={<Home />} />

      <Route index element={<Home />} />
    </Route>
  </Routes>
)

export {LandingPage}
