"use strict";
a.r(t), a.d(t, {
  createRPCCommand: function() {
    return s
  }
});
var n = a("137006");

function s(e, t) {
  var a;
  let {
    scope: s,
    handler: l
  } = t, i = {
    scope: s,
    handler: l
  }, r = null === (a = n.RPCCommandSchemas[e]) || void 0 === a ? void 0 : a.request, o = null;
  return null != r && (i.validation = function(e) {
    return null == o && (o = r(e)), o
  }), i
}