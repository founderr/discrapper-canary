"use strict";
n.r(e), n.d(e, {
  findAppIconSrc: function() {
    return r
  }
});
var i = n("591759");

function r(t, e) {
  let n = t.getIconSource(e);
  if (null != n && "number" != typeof n) {
    let t;
    if (Array.isArray(n) ? n.length > 0 && (t = n[0].uri) : t = n.uri, null != t) {
      var r;
      return null !== (r = i.default.toURLSafe(t)) && void 0 !== r ? r : void 0
    }
  }
}