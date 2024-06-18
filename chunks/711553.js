"use strict";
var i = n(735250);
n(470079);
var s = n(120356),
  l = n.n(s),
  o = n(481060),
  a = n(547881),
  r = n(981631),
  c = n(689938),
  d = n(387080);
t.Z = function(e) {
  let t;
  let {
    title: n,
    header: s,
    children: u,
    renderSettings: h,
    onDragStart: p
  } = e;
  return t = null != n ? (0, i.jsxs)(a.ZP.Bar, {
    className: l()(d.header, d.draggableStartArea),
    onMouseDown: p,
    children: [(0, i.jsx)(a.ZP.Content, {
      className: l()(d.headerTitle, d.draggableStartArea),
      dynamicSize: !0,
      children: n
    }), (0, i.jsx)(a.ZP.Content, {
      children: (0, i.jsx)(o.Popout, {
        position: "right",
        renderPopout: null != h ? h : r.dG4,
        autoInvert: !1,
        children: e => (0, i.jsx)(a.ZP.Icon, {
          ...e,
          icon: o.SettingsIcon,
          label: c.Z.Messages.SETTINGS
        })
      })
    })]
  }) : s, (0, i.jsxs)("div", {
    className: d.sidebar,
    children: [t, (0, i.jsx)("div", {
      className: d.children,
      children: u
    })]
  })
}