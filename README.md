# object-empty-validator

[![Build Status](https://travis-ci.org/swtpumpkin/object-empty-validator.svg?branch=master)](https://travis-ci.org/swtpumpkin/object-empty-validator)
[![version](https://img.shields.io/npm/v/object-empty-validator.svg?style=flat-square)]((http://npm.im/object-empty-validator))
[![downloads](https://img.shields.io/npm/dm/object-empty-validator.svg?style=flat-square)](https://npm-stat.com/charts.html?package=object-empty-validator&from=2020-03-05)

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
```

#### TypeScript

```typescript
import * as ObjIsEmpty from "object-empty-validator";

ObjIsEmpty.validate({}); // true
ObjIsEmpty.validate({a:1, b:2}); // false
```
