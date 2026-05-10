/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vitivinicola from './pages/Vitivinicola';
import Marketing from './pages/Marketing';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frente-vitivinicola" element={<Vitivinicola />} />
        <Route path="/frente-marketing" element={<Marketing />} />
      </Routes>
    </Router>
  );
}
