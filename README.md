# Feedback Widget

## Conceitos do ReactJS

### Componentes

Componentes permitem você dividir a UI em partes independentes, reutilizáveis e pensar em cada parte isoladamente.

Conceitualmente, componentes são como funções JavaScript. Eles aceitam entradas arbitrárias chamadas props e retornam elementos React que descrevem o que deve aparecer na tela.

```tsx
import { Widget } from './components/Widget'

export function App() {
  return <Widget />
}
```

##### Props são somente leitura

Um componente nunca deve modificar seus próprios props. O React é bastante flexível mas tem uma única regra estrita:

> **Todos os componentes React tem que agir como funções puras em relação ao seus props**

### useState

**O que o useState faz ?** Ele declara uma variável state.

```ts
import { useState } from 'react'

export function Widget() {
  const [isWidgetOpen, setWidgetOpen] = useState(false)
}
```

**O que passamos para o useState como argumento ?** O único argumento para o `useState()` é o state inicial.

**O que o useState retorna ?** Retorna um par de valores em forma de array: o state atual e uma função que atualiza o state.

## Techs

- [ReactJS](https://pt-br.reactjs.org/) - Biblioteca JavaScript

- [TailwindCSS](https://tailwindcss.com/) - Estilização de CSS

- [Phosphor](https://phosphoricons.com/) - Pack de icons

- [HeadlessUI](https://headlessui.dev/) - Acessibilidade
