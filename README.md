# object-empty-validator

[![Build Status](https://travis-ci.org/swtpumpkin/object-empty-validator.svg?branch=master)](https://travis-ci.org/swtpumpkin/object-empty-validator)

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

## Meta

Distributed under the unlicense public domain.

[https://github.com/swtpumpkin/object-empty-validator](https://github.com/swtpumpkin/object-empty-validator)
