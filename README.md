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

/**
 * @param {string} dominicanId 
 * - Cédula dominicana que contenga solo dígitos. No admite guiones ni letras.
 * - Dominican ID that contains only digits. Does not allow hyphens nor letters.
 */
validateDominicanId('00000000000');
```