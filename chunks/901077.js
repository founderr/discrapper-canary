"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var n = a("981631");
let s = "<removed>";

function l(e) {
  var t, a;
  let l = {
    ...e
  };
  if ("object" == typeof(t = l).args && "string" == typeof t.cmd) l = function(e) {
    switch (e.cmd) {
      case n.RPCCommands.AUTHENTICATE:
      case n.RPCCommands.GET_PROVIDER_ACCESS_TOKEN:
        return {
          ...e, args: {
            ...e.args,
            access_token: s
          }
        };
      default:
        return {
          ...e
        }
    }
  }(l);
  if ("object" == typeof(a = l).data && "string" == typeof a.cmd) l = function(e) {
    switch (e.cmd) {
      case n.RPCCommands.AUTHENTICATE:
      case n.RPCCommands.GET_PROVIDER_ACCESS_TOKEN:
        return {
          ...e, data: {
            ...e.data,
            access_token: s
          }
        };
      default:
        return {
          ...e
        }
    }
  }(l);
  return l
}