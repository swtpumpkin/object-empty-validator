# object-empty-validator
[![object-empty-validator-CI](https://github.com/swtpumpkin/object-empty-validator/workflows/object-empty-validator-CI/badge.svg?branch=master)](https://github.com/swtpumpkin/object-empty-validator/actions)
[![version](https://img.shields.io/npm/v/object-empty-validator.svg?style=flat-square)]((http://npm.im/object-empty-validator))
[![downloads](https://img.shields.io/npm/dm/object-empty-validator.svg?style=flat-square)](https://npm-stat.com/charts.html?package=object-empty-validator&from=2020-03-05)  
Only the empty value of the object returns true.
Empty array return false.

## Installation
Install via NPM:

```bash
npm install object-empty-validator
```

## Usage

#### Javascript

```javascript
var objIsEmpty = require("object-empty-validator");

objIsEmpty.validate({}); // true
objIsEmpty.validate({a:1, b:2}); // false
objIsEmpty.validate([]); // false
```

#### TypeScript

```typescript
import * as ObjIsEmpty from "object-empty-validator";

ObjIsEmpty.validate({}); // true
ObjIsEmpty.validate({a:1, b:2}); // false
ObjIsEmpty.validate([]); // false
```

## Description
[Korean](https://swtpumpkin.github.io/javascript/checkEmptyObject)
