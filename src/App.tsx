import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@/components'
import { CatalogPage } from '@/app/CatalogPage'
import { ComponentPage } from '@/app/ComponentPage'
import { SimulationPage } from '@/app/SimulationPage'
import { DocPage } from '@/app/DocPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/component/:id" element={<ComponentPage />} />
        <Route path="/simulation/cusp" element={<SimulationPage />} />
        <Route path="/doc" element={<DocPage />} />
        <Route path="/doc/:slug" element={<DocPage />} />
      </Routes>
    </BrowserRouter>
  )
}
