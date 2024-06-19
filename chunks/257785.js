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
var i = t(120356),
  n = t.n(i),
  o = t(481060),
  l = t(719556);

function c(e) {
  let {
    className: r,
    children: t
  } = e;
  return (0, a.jsx)("dl", {
    className: n()(l.properties, r),
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
      className: l.propertyName,
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
  return (0, a.jsx)(o.Checkbox, {
    size: 16,
    value: r,
    shape: o.Checkbox.Shapes.SMALL_BOX,
    displayOnly: !0
  })
}