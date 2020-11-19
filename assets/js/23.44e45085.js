(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{382:function(t,a,s){"use strict";s.r(a);var e=s(43),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"local"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local"}},[t._v("#")]),t._v(" Local")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.npmjs.com/package/@feathersjs/authentication-local",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/@feathersjs/authentication-local.svg?style=flat-square",alt:"npm version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/feathersjs/feathers/blob/crow/packages/authentication-local/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/changelog-.md-blue.svg?style=flat-square",alt:"Changelog"}}),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install @feathersjs/authentication-local --save\n")])])]),s("p",[s("code",[t._v("@feathersjs/authentication-local")]),t._v(" provides a "),s("code",[t._v("LocalStrategy")]),t._v(" for authenticating with a username/email and password combination, e.g.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"strategy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello@feathersjs.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"supersecret"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("The following settings are available:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("usernameField")]),t._v(": Name of the username field (e.g. "),s("code",[t._v("'email'")]),t._v(")")]),t._v(" "),s("li",[s("code",[t._v("passwordField")]),t._v(": Name of the password field (e.g. "),s("code",[t._v("'password'")]),t._v(")")]),t._v(" "),s("li",[s("code",[t._v("hashSize")]),t._v(" (default: "),s("code",[t._v("10")]),t._v("): The BCrypt hash size")]),t._v(" "),s("li",[s("code",[t._v("errorMessage")]),t._v(" (default: "),s("code",[t._v("'Invalid login'")]),t._v("): The error message to return on errors")]),t._v(" "),s("li",[s("code",[t._v("entityUsernameField")]),t._v(" (default: "),s("code",[t._v("usernameField")]),t._v("): Name of the username field on the entity if authentication request data and entity field names are different")]),t._v(" "),s("li",[s("code",[t._v("entityPasswordField")]),t._v(" (default: "),s("code",[t._v("passwordField")]),t._v("): Name of the password field on the entity if authentication request data and entity field names are different")])]),t._v(" "),s("p",[t._v("Standard local authentication can be configured with those options in "),s("code",[t._v("config/default.json")]),t._v(" like this:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authentication"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"local"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usernameField"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"passwordField"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("Important:")]),t._v(" If you want to set the value of "),s("code",[t._v("usernameField")]),t._v(" to "),s("code",[t._v("username")]),t._v(" in your configuration file under Windows, the value has to be escaped as "),s("code",[t._v("\\\\username")]),t._v(" (otherwise the "),s("code",[t._v("username")]),t._v(" environment variable will be used).")])]),t._v(" "),s("h2",{attrs:{id:"localstrategy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localstrategy"}},[t._v("#")]),t._v(" LocalStrategy")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" The methods described in this section are intended for "),s("a",{attrs:{href:"#customization"}},[t._v("customization")]),t._v(" purposes and internal calls. They usually do not need to be called directly.")])]),t._v(" "),s("h3",{attrs:{id:"getentityquery-query-params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getentityquery-query-params"}},[t._v("#")]),t._v(" getEntityQuery(query, params)")]),t._v(" "),s("p",[s("code",[t._v("localStrategy.getEntityQuery(query, params) -> Promise")]),t._v(" returns the query for finding the entity. "),s("code",[t._v("query")]),t._v(" includes the "),s("code",[t._v("usernameField")]),t._v(" or "),s("code",[t._v("entityUsernameField")]),t._v(" as "),s("code",[t._v("{ [field]: username }")]),t._v(" and by default returns a promise that resolves with "),s("code",[t._v("{ $limit: 1 }")]),t._v(" combined with "),s("code",[t._v("query")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"findentity-username-params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#findentity-username-params"}},[t._v("#")]),t._v(" findEntity(username, params)")]),t._v(" "),s("p",[s("code",[t._v("localStrategy.findEntity(username, params) -> Promise")]),t._v(" return the entity for a given username and service call parameters. It will use the query returned by "),s("code",[t._v("getEntityQuery")]),t._v(" and call "),s("code",[t._v(".find")]),t._v(" on the entity (usually "),s("code",[t._v("/users")]),t._v(") service. It will return a promise that resolves with the first result of the "),s("code",[t._v(".find")]),t._v(" call or throw an error if nothing was found.")]),t._v(" "),s("h3",{attrs:{id:"getentity-entity-params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getentity-entity-params"}},[t._v("#")]),t._v(" getEntity(entity, params)")]),t._v(" "),s("p",[s("code",[t._v("localStrategy.getEntity(authResult, params) -> Promise")]),t._v(" returns the external representation for "),s("code",[t._v("entity")]),t._v(" that will be sent back to the client.")]),t._v(" "),s("h3",{attrs:{id:"hashpassword-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashpassword-password"}},[t._v("#")]),t._v(" hashPassword(password)")]),t._v(" "),s("p",[s("code",[t._v("localStrategy.hashPassword(password) -> Promise")]),t._v(" creates a safe one-way hash of the given plain "),s("code",[t._v("password")]),t._v(" string. By default "),s("a",{attrs:{href:""}},[t._v("bCryptJS")]),t._v(" is used.")]),t._v(" "),s("h3",{attrs:{id:"comparepassword-entity-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comparepassword-entity-password"}},[t._v("#")]),t._v(" comparePassword(entity, password)")]),t._v(" "),s("p",[s("code",[t._v("localStrategy.comparePassword(entity, password) -> Promise")]),t._v(" compares a plain text "),s("code",[t._v("password")]),t._v(" with the hashed password of the "),s("code",[t._v("entity")]),t._v(" returned by "),s("code",[t._v("findEntity")]),t._v(". Returns the "),s("code",[t._v("entity")]),t._v(" or throws an error if the passwords don't match.")]),t._v(" "),s("h3",{attrs:{id:"authenticate-authentication-params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authenticate-authentication-params"}},[t._v("#")]),t._v(" authenticate(authentication, params)")]),t._v(" "),s("p",[s("code",[t._v("localStrategy.authenticate(authentication, params)")]),t._v(" is the main endpoint implemented by any "),s("RouterLink",{attrs:{to:"/api/authentication/strategy.html"}},[t._v("authentication strategy")]),t._v(". It is usually called for authentication requests for this strategy by the "),s("RouterLink",{attrs:{to:"/api/authentication/service.html"}},[t._v("AuthenticationService")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"customization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customization"}},[t._v("#")]),t._v(" Customization")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("LocalStrategy")]),t._v(" can be customized like any ES6 class and then registered on the "),s("RouterLink",{attrs:{to:"/api/authentication/service.html"}},[t._v("AuthenticationService")]),t._v(":")],1),t._v(" "),s("tabs",{attrs:{options:{useUrlFragment:!1}}},[s("tab",{attrs:{name:"JavaScript"}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AuthenticationService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" JWTStrategy "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@feathersjs/authentication'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" LocalStrategy "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@feathersjs/authentication-local'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyLocalStrategy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalStrategy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntityQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Query for user but only include users marked as `active`")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      active"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      $limit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" authService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthenticationService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  authService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'local'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyLocalStrategy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/authentication'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" authService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("tab",{attrs:{name:"TypeScript"}},[s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Query "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@feathersjs/feathers'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AuthenticationService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" JWTStrategy "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@feathersjs/authentication'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" LocalStrategy "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@feathersjs/authentication-local'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyLocalStrategy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalStrategy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntityQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Query for use but only include `active` users")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      active"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      $limit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" authService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthenticationService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  authService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'local'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyLocalStrategy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/authentication'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" authService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1),t._v(" "),s("h2",{attrs:{id:"hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),s("h3",{attrs:{id:"hashpassword-field"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashpassword-field"}},[t._v("#")]),t._v(" hashPassword(field)")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("hashPassword(field [, options])")]),t._v(" hook should be used as a "),s("code",[t._v("before")]),t._v(" hook for "),s("code",[t._v("create")]),t._v(", "),s("code",[t._v("patch")]),t._v(" or "),s("code",[t._v("update")]),t._v(". It will replace the plain text "),s("code",[t._v("field")]),t._v(" on "),s("code",[t._v("data")]),t._v(" with a hashed password using "),s("a",{attrs:{href:""}},[t._v("LocalStrategy.hashPassword")]),t._v(" before storing it in the database.")]),t._v(" "),s("p",[s("code",[t._v("options")]),t._v(" is optional and may contain the following settings:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("authentication")]),t._v(" (default: "),s("code",[t._v("app.get('defaultAuthentication')")]),t._v("): The name of the "),s("RouterLink",{attrs:{to:"/api/authentication/service.html"}},[t._v("AuthenticationService")]),t._v(" the hook should use.")],1),t._v(" "),s("li",[s("code",[t._v("strategy")]),t._v(" (default: "),s("code",[t._v("'local'")]),t._v("): The name of the LocalStrategy to use on the authentication service.")])]),t._v(" "),s("h3",{attrs:{id:"protect-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#protect-fields"}},[t._v("#")]),t._v(" protect(...fields)")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("protect(...fields)")]),t._v(" hook removes fields from the data that is sent to the user by setting "),s("a",{attrs:{href:""}},[t._v("hook.dispatch")]),t._v(".")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);