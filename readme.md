## How to setup a test suite

### Create folder

```
mkdir project
cd project
```

### Create test folder and file

```
mkdir test
touch test/test.js
```

### Init package.json and install dev dependencies

```
npm init -y
npm install --save-dev mocha chai
```

### Run tests

```
mocha
```