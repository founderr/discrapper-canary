"use strict";
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(296386),
  a = t(150192),
  r = t(987134),
  o = t(203377),
  c = t(71988);
s.Z = e => {
  let {
    guild: s,
    guildMetadata: t,
    menuPlacement: d,
    disabled: u
  } = e, E = e => {
    let {
      secondaryCategoryIds: n
    } = t, i = e.map(e => e.value);
    if (e.length < n.length) n.filter(e => !i.includes(e)).forEach(e => (0, l.K0)(s.id, e));
    else {
      if (n.length >= o.Pg) return;
      i.filter(e => !n.includes(e)).forEach(e => (0, l.Kq)(s.id, e))
    }
  }, _ = e => {
    (0, l.K0)(s.id, e)
  }, I = e => {
    e.preventDefault(), e.stopPropagation()
  }, T = a.Z.getAllCategories().map(e => {
    let {
      categoryId: s,
      name: t
    } = e;
    return {
      value: s,
      label: t
    }
  });
  return (0, n.jsx)(r.Z, {
    value: t.secondaryCategoryIds,
    searchable: !0,
    clearable: !1,
    options: T,
    onChange: e => E(e),
    multiValueRenderer: e => {
      let {
        label: s,
        value: t
      } = e;
      return (0, n.jsxs)("span", {
        className: c.subcategory,
        onMouseDown: I,
        children: [s, (0, n.jsx)(i.Clickable, {
          className: c.closeWrapper,
          onClick: () => _(t),
          children: (0, n.jsx)(i.CloseSmallIcon, {
            size: "xs",
            color: "currentColor",
            className: c.close
          })
        })]
      })
    },
    menuPlacement: d,
    disabled: u,
    isMulti: !0
  })
}