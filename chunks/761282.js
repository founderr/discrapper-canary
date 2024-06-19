n.d(t, {
  JE: function() {
    return c
  },
  ct: function() {
    return u
  },
  dc: function() {
    return o
  }
});
var l = n(735250);
n(470079);
var i = n(261600),
  s = n(157925),
  r = n(301661);
let a = {
  [s.gD]: new i.U
};

function o(e) {
  var t;
  let n = e.application_id;
  if (null == n) return;
  let l = a[n];
  if (null != l && (null === (t = l.shouldShow) || void 0 === t ? void 0 : t.call(l, e)) !== !1) return l.createHeader(e)
}

function u(e) {
  var t;
  let n = e.application_id;
  if (null == n) return;
  let i = a[n];
  if ((null == i ? void 0 : i.body) != null && (null === (t = i.shouldShow) || void 0 === t ? void 0 : t.call(i, e)) !== !1) {
    let t = i.body;
    return (0, l.jsx)("section", {
      className: r.section,
      children: (0, l.jsx)(t, {
        activity: e
      })
    }, "delegate-".concat(n))
  }
}

function c(e) {
  var t;
  let n = e.application_id;
  if (null == n) return !0;
  let l = a[n];
  return null == l || (null === (t = l.shouldShow) || void 0 === t ? void 0 : t.call(l, e)) !== !1
}