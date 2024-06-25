"use strict";
n(47120);
var i = n(735250);
n(470079);
var r = n(658722),
  s = n.n(r),
  o = n(392711),
  a = n.n(o),
  l = n(866442),
  u = n(442837),
  _ = n(481060),
  c = n(430824),
  d = n(981631),
  E = n(689938),
  I = n(544120);
t.Z = function(e) {
  let {
    className: t,
    guild: n,
    roleStyle: r,
    roleFilter: o,
    onSelect: T,
    onClose: h
  } = e, f = (0, u.e7)([c.Z], () => c.Z.getRoles(n.id)), S = e => a()(f).filter(o).filter(t => s()(e.toLowerCase(), t.name.toLowerCase())).value();
  return (0, i.jsx)(_.ComboboxPopout, {
    className: t,
    value: new Set,
    onChange: T,
    placeholder: E.Z.Messages.ADD_ROLE_PLACEHOLDER,
    "aria-label": E.Z.Messages.ADD_ROLE_A11Y_LABEL,
    onClose: h,
    children: e => S(e).map(e => {
      var t, n;
      return (0, i.jsxs)(_.ComboboxItem, {
        value: e.id,
        children: ["dot" === r ? (0, i.jsx)(_.RoleDot, {
          className: I.popoutRoleDot,
          color: null !== (t = e.colorString) && void 0 !== t ? t : (0, l.Rf)(d.p6O),
          background: !1,
          tooltip: !1
        }) : (0, i.jsx)(_.RoleCircle, {
          className: I.popoutRoleCircle,
          color: null !== (n = e.colorString) && void 0 !== n ? n : (0, l.Rf)(d.p6O)
        }), (0, i.jsx)(_.ComboboxItem.Label, {
          children: e.name
        })]
      }, e.id)
    })
  })
}