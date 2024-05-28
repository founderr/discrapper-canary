"use strict";
n.r(t), n.d(t, {
  findAppIconSrc: function() {
    return r
  }
});
var i = n("591759");

function r(e, t) {
  let n = e.getIconSource(t);
  if (null != n && "number" != typeof n) {
    let e;
    if (Array.isArray(n) ? n.length > 0 && (e = n[0].uri) : e = n.uri, null != e) {
      var r;
      return null !== (r = i.default.toURLSafe(e)) && void 0 !== r ? r : void 0
    }
  }
}