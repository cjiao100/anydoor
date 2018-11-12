module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ["eslint:recommended"],
    "parserOptions": {
        "ecmaVersion": 6,
		"sourceType": "script"
    },
	"parser": "babel-eslint",
    "rules": {
		"no-console": [
			"error", {
			"allow" : ["warn", "error", "info"]
			}
		]
    },
	"globals": {
    	"process": true
	}
};
