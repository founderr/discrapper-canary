"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("981631");
let s = "<removed>";

function i(e) {
  var t, n;
  let i = {
    ...e
  };
  if ("object" == typeof(t = i).args && "string" == typeof t.cmd) i = function(e) {
    switch (e.cmd) {
      case a.RPCCommands.AUTHENTICATE:
      case a.RPCCommands.GET_PROVIDER_ACCESS_TOKEN:
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
  }(i);
  if ("object" == typeof(n = i).data && "string" == typeof n.cmd) i = function(e) {
    switch (e.cmd) {
      case a.RPCCommands.AUTHENTICATE:
      case a.RPCCommands.GET_PROVIDER_ACCESS_TOKEN:
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
  }(i);
  return i
}