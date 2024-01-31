"use strict";
var l = {
    childContextTypes: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  },
  s = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    arguments: !0,
    arity: !0
  },
  i = "function" == typeof Object.getOwnPropertySymbols;
e.exports = function(e, t, n) {
  if ("string" != typeof t) {
    var r = Object.getOwnPropertyNames(t);
    i && (r = r.concat(Object.getOwnPropertySymbols(t)));
    for (var o = 0; o < r.length; ++o)
      if (!l[r[o]] && !s[r[o]] && (!n || !n[r[o]])) try {
        e[r[o]] = t[r[o]]
      } catch (e) {}
  }
  return e
}