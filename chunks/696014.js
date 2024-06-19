n.d(t, {
  s: function() {
    return o
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(668878);

function o() {
  let [e, t] = i.useState(!1);
  return {
    isTruncated: e,
    ExpandableTextContainer: i.memo(function(e) {
      let {
        showAll: n = !1,
        className: i,
        children: l,
        lineClamp: o = 2
      } = e;
      return (0, s.jsx)("div", {
        ref: e => {
          null != e && t(e.scrollHeight - e.clientHeight > 1)
        },
        className: a()(r.lineClamp, i),
        style: n ? void 0 : {
          lineClamp: o,
          WebkitLineClamp: o
        },
        children: l
      })
    })
  }
}