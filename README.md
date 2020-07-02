# validacion-cedula-dominicana

Algoritmo validador de cédula dominicana / Dominican ID validator algorithm

## Instalación / Installation

CDN

```html
<script src="https://unpkg.com/validacion-cedula-dominicana/src/index.min.js"></script>
```

NPM

```bash
npm install validacion-cedula-dominicana
```

Yarn

```bash
yarn add validacion-cedula-dominicana
```

## Uso / Usage

```javascript
import validateDominicanId from 'validacion-cedula-dominicana';

validateDominicanId('000-0000000-0');
validateDominicanId('00000000000');
```