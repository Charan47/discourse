hljs.registerLanguage("fsharp",function(e){var t={b:"<",e:">",c:[e.inherit(e.TM,{b:/'[a-zA-Z0-9_]+/})]};return{aliases:["fs"],k:"abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield",i:/\/\*/,c:[{cN:"keyword",b:/\b(yield|return|let|do)!/},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},{cN:"string",b:'"""',e:'"""'},e.C("\\(\\*","\\*\\)"),{cN:"class",bK:"type",e:"\\(|=|$",eE:!0,c:[e.UTM,t]},{cN:"meta",b:"\\[<",e:">\\]",r:10},{cN:"symbol",b:"\\B('[A-Za-z])\\b",c:[e.BE]},e.CLCM,e.inherit(e.QSM,{i:null}),e.CNM]}});