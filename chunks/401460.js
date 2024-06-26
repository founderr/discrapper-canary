"use strict";
n.d(t, {
  Z: function() {
    return A
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(481060),
  _ = n(583901),
  c = n(997945),
  d = n(630117),
  E = n(441319),
  I = n(981631),
  T = n(689938),
  h = n(128108);
let f = () => [T.Z.Messages.APP_ICON_PIRATE, T.Z.Messages.APP_ICON_PIRATE_1, T.Z.Messages.APP_ICON_PIRATE_2, T.Z.Messages.APP_ICON_PIRATE_3, T.Z.Messages.APP_ICON_PIRATE_4],
  S = () => {
    var e;
    return null !== (e = l().sample(f())) && void 0 !== e ? e : T.Z.Messages.APP_ICON_PIRATE
  };

function N(e) {
  let {
    id: t,
    className: n,
    onSelect: s,
    isSelected: a = !1,
    tabIndex: l,
    children: d,
    isNew: T = !1
  } = e, [f, N] = r.useState(E.QA[t].name), A = t === c.Ru.PIRATE, m = (0, u.useRadioItem)({
    label: f,
    isSelected: a
  });
  return (0, i.jsx)(u.Tooltip, {
    text: f,
    onTooltipShow: () => A && N(S()),
    children: e => (0, i.jsxs)("div", {
      className: h.appIconSelectionContainer,
      children: [!a && T && (0, i.jsx)("div", {
        className: h.newBadgeCircle
      }), (0, i.jsx)(u.Clickable, {
        ...e,
        ...m,
        tabIndex: null != l ? l : m.tabIndex,
        className: o()(h.appIconSelection, {
          [h.selected]: a
        }, n),
        onClick: a ? I.dG4 : () => null == s ? void 0 : s(t),
        children: d
      }), a && (0, i.jsx)(_.oK, {})]
    })
  })
}

function A(e) {
  let {
    icon: t,
    isSelected: n,
    disabled: r,
    tabIndex: s,
    onSelect: o,
    isNew: a
  } = e;
  return (0, i.jsx)(N, {
    onSelect: r ? void 0 : o,
    isSelected: n,
    id: t.id,
    className: r ? h.disabled : void 0,
    tabIndex: s,
    isNew: a,
    children: (0, i.jsx)(d.Z, {
      id: t.id,
      width: E.M9
    })
  })
}