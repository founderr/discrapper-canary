n.d(t, {
  Z: function() {
return g;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(392711),
  l = n.n(o),
  u = n(481060),
  c = n(583901),
  d = n(997945),
  _ = n(630117),
  E = n(441319),
  f = n(981631),
  h = n(689938),
  p = n(362214);
let m = () => [
h.Z.Messages.APP_ICON_PIRATE,
h.Z.Messages.APP_ICON_PIRATE_1,
h.Z.Messages.APP_ICON_PIRATE_2,
h.Z.Messages.APP_ICON_PIRATE_3,
h.Z.Messages.APP_ICON_PIRATE_4
  ],
  I = () => {
var e;
return null !== (e = l().sample(m())) && void 0 !== e ? e : h.Z.Messages.APP_ICON_PIRATE;
  };

function T(e) {
  let {
id: t,
className: n,
onSelect: a,
isSelected: o = !1,
tabIndex: l,
children: _,
isNew: h = !1,
locked: m = !1
  } = e, [T, g] = i.useState(E.QA[t].name), S = t === d.Ru.PIRATE, A = (0, u.useRadioItem)({
label: T,
isSelected: o
  });
  return (0, r.jsx)(u.Tooltip, {
text: T,
onTooltipShow: () => S && g(I()),
children: e => (0, r.jsxs)('div', {
  className: p.appIconSelectionContainer,
  children: [
    !o && h && (0, r.jsx)('div', {
      className: p.newBadgeCircle
    }),
    (0, r.jsx)(u.Clickable, {
      ...e,
      ...A,
      tabIndex: null != l ? l : A.tabIndex,
      className: s()(p.appIconSelection, {
        [p.selected]: o
      }, n),
      onClick: o ? f.dG4 : () => null == a ? void 0 : a(t),
      children: _
    }),
    o && (0, r.jsx)(c.oK, {}),
    m && (0, r.jsx)('div', {
      className: p.lockedBadgeContainer,
      children: (0, r.jsx)(u.LockIcon, {
        className: p.lockedBadge,
        color: 'currentColor'
      })
    })
  ]
})
  });
}

function g(e) {
  let {
icon: t,
isSelected: n,
disabled: i,
tabIndex: a,
onSelect: s,
isNew: o,
locked: l
  } = e;
  return (0, r.jsx)(T, {
onSelect: i ? void 0 : s,
isSelected: n,
id: t.id,
className: i ? p.disabled : void 0,
tabIndex: a,
isNew: o,
locked: l,
children: (0, r.jsx)(_.Z, {
  id: t.id,
  width: E.M9
})
  });
}