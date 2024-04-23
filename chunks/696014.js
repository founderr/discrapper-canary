"use strict";
n.r(t), n.d(t, {
  useExpandableTextContainer: function() {
    return o
  }
}), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("120356"),
  i = n.n(a),
  r = n("204727");

function o() {
  let [e, t] = l.useState(!1);
  return {
    isTruncated: e,
    ExpandableTextContainer: l.memo(function(e) {
      let {
        showAll: n = !1,
        className: l,
        children: a,
        lineClamp: o = 2
      } = e;
      return (0, s.jsx)("div", {
        ref: e => {
          null != e && t(e.scrollHeight - e.clientHeight > 1)
        },
        className: i()(r.lineClamp, l),
        style: n ? void 0 : {
          lineClamp: o,
          WebkitLineClamp: o
        },
        children: a
      })
    })
  }
}