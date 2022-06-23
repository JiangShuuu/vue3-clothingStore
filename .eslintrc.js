module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:vue/essential",
        "standard"
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
      'vue/no-multiple-template-root': 0,
      'no-unused-vars': 0,
      'vue/multi-word-component-names': 0,
      'vue/no-v-for-template-key': 0
    }
}
