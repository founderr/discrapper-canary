"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  r = n("917351"),
  o = n.n(r),
  u = n("77078"),
  d = n("164546"),
  c = n("513196"),
  f = n("42723"),
  m = n("605475"),
  h = n("49111"),
  g = n("782340"),
  _ = n("279732");
let p = () => [g.default.Messages.APP_ICON_PIRATE, g.default.Messages.APP_ICON_PIRATE_1, g.default.Messages.APP_ICON_PIRATE_2, g.default.Messages.APP_ICON_PIRATE_3, g.default.Messages.APP_ICON_PIRATE_4],
  S = () => {
    var e;
    return null !== (e = o.sample(p())) && void 0 !== e ? e : g.default.Messages.APP_ICON_PIRATE
  };

function Selection(e) {
  let {
    id: t,
    className: n,
    onSelect: l,
    isSelected: r = !1,
    tabIndex: o,
    children: f
  } = e, [g, p] = a.useState(m.ICONS_BY_ID[t].name), v = t === c.PremiumAppIconIds.PIRATE, T = (0, u.useRadioItem)({
    label: g,
    isSelected: r
  });
  return (0, i.jsx)(u.Tooltip, {
    text: g,
    onTooltipShow: () => v && p(S()),
    children: e => (0, i.jsxs)("div", {
      className: _.appIconSelectionContainer,
      children: [(0, i.jsx)(u.Clickable, {
        ...e,
        ...T,
        tabIndex: null != o ? o : T.tabIndex,
        className: s(_.appIconSelection, {
          [_.selected]: r
        }, n),
        onClick: r ? h.NOOP : () => null == l ? void 0 : l(t),
        children: f
      }), r && (0, i.jsx)(d.SelectionCircle, {})]
    })
  })
}

function v(e) {
  let {
    icon: t,
    isSelected: n,
    disabled: a,
    tabIndex: l,
    onSelect: s
  } = e;
  return (0, i.jsx)(Selection, {
    onSelect: a ? void 0 : s,
    isSelected: n,
    id: t.id,
    className: a ? _.disabled : void 0,
    tabIndex: l,
    children: (0, i.jsx)(f.default, {
      id: t.id,
      width: m.CUSTOM_BASE_SIZE
    })
  })
}