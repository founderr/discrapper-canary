"use strict";
n.r(t), n.d(t, {
  default: function() {
    return function e(t, n) {
      void 0 === n && (n = []);
      var u, s = (0, r.default)(t),
        l = s === (null == (u = t.ownerDocument) ? void 0 : u.body),
        c = (0, o.default)(s),
        f = l ? [c].concat(c.visualViewport || [], (0, i.default)(s) ? s : []) : s,
        d = n.concat(f);
      return l ? d : d.concat(e((0, a.default)(f)))
    }
  }
});
var r = n("895175"),
  a = n("199407"),
  o = n("320959"),
  i = n("790973")