"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("74892"),
  r = n.n(l);
let a = /\n$/,
  i = {
    ...r.defaultRules.heading,
    requiredFirstCharacters: [" ", "#"],
    match: (e, t, n) => t.allowHeading ? null == n || "" === n || null != n.match(a) ? (0, l.anyScopeRegex)(/^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/)(e, t, n) : null : null
  };
var u = i