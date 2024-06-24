t.d(r, {
  E: function() {
    return c
  },
  Z9: function() {
    return s
  },
  wl: function() {
    return d
  }
});
var a = t(735250);
t(470079);
var n = t(120356),
  i = t.n(n),
  l = t(481060),
  o = t(719556);

function c(e) {
  let {
    className: r,
    children: t
  } = e;
  return (0, a.jsx)("dl", {
    className: i()(o.properties, r),
    children: t
  })
}

function s(e) {
  let {
    name: r,
    children: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("dt", {
      className: o.propertyName,
      children: r
    }), (0, a.jsx)("dd", {
      children: t
    })]
  })
}

function d(e) {
  let {
    value: r
  } = e;
  return (0, a.jsx)(l.Checkbox, {
    size: 16,
    value: r,
    shape: l.Checkbox.Shapes.SMALL_BOX,
    displayOnly: !0
  })
}