"use strict";(self.webpackChunkproduct_hydration_generator=self.webpackChunkproduct_hydration_generator||[]).push([[6508],{6722:function(t){function e(t){!function(t){t.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var e,a=t.languages,n={"application/javascript":a.javascript,"application/json":a.json||a.javascript,"application/xml":a.xml,"text/xml":a.xml,"text/html":a.html,"text/css":a.css},r={"application/json":!0,"application/xml":!0};function s(t){var e=t.replace(/^[a-z]+\//,"");return"(?:"+t+"|"+("\\w+/(?:[\\w.-]+\\+)+"+e+"(?![+\\w.-])")+")"}for(var i in n)if(n[i]){e=e||{};var p=r[i]?s(i):i;e[i]={pattern:RegExp("(content-type:\\s*"+p+"[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:{rest:n[i]}}}e&&t.languages.insertBefore("http","header-name",e)}(t)}t.exports=e,e.displayName="http",e.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_http.8ce5f5c7.chunk.js.map