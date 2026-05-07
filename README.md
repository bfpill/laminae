# laminae

A typed component registry for data visualization. Build, browse, and share visualization components across the org — designed for both humans and AI agents.

## Goals

- **Shared vocabulary for visualizations.** A single place to find, preview, and reuse data visualization components. No more one-off chart code scattered across projects.
- **Agent-friendly by default.** Every component registers a typed schema describing exactly what data it accepts. Agents can introspect the registry, pick a component, and render data into it without human guidance.
- **Low friction to add components.** Write a React component, call `register()` with its schema and sample data, and it's immediately discoverable in the catalog and via API.
- **Composable.** Components can render other components. A simulation component generates data and passes it to a chart. A dashboard layout arranges metric cards and tables. The registry is the glue.
- **Strict typing, flexible rendering.** Data contracts are explicit — if your data matches the schema, the component will render it. This makes it possible to automatically suggest or select components for a given dataset.

## Usage modes

1. **Catalog app** — browse and preview components at `localhost:5173`. Search, filter by category, inspect schemas, and see live renders with sample data.
2. **Library import** — use components directly in other React projects via the registry API (`getComponent`, `getManifest`, `getByCategory`).
3. **API serving** (planned) — expose the registry and component rendering over HTTP so other internal tools can discover and embed visualizations.

## Adding a component

```tsx
import { register } from '@/registry'

register({
  id: 'my-chart',
  name: 'My Chart',
  category: 'chart',
  description: 'What it does',
  tags: ['chart'],
  schema: {
    fields: [
      { name: 'data', type: 'record', required: true, description: 'Array of data points' },
      { name: 'title', type: 'string', description: 'Chart title' },
    ],
  },
  component: MyChartComponent,
  sampleData: { data: [...], title: 'Example' },
})
```

The component appears in the catalog and manifest automatically.
