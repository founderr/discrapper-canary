"use strict";
n.r(t), n.d(t, {
  SelectionCircle: function() {
    return v
  },
  DefaultThemeSelection: function() {
    return E
  },
  GradientThemeSelection: function() {
    return N
  }
}), n("794252");
var i = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  s = n("506838"),
  r = n("446674"),
  o = n("669491"),
  u = n("2662"),
  d = n("819855"),
  c = n("77078"),
  f = n("161778"),
  m = n("578706"),
  h = n("253539"),
  g = n("92130"),
  _ = n("49111"),
  p = n("782340"),
  S = n("823470");

function v() {
  return (0, i.jsx)("div", {
    className: S.selectionCircle,
    children: (0, i.jsx)(m.default, {
      className: S.checkmarkCircle,
      foreground: S.checkmark,
      backgroundColor: o.default.unsafe_rawColors.WHITE_500.css
    })
  })
}

function T(e) {
  let {
    name: t,
    className: n,
    style: a,
    onSelect: s,
    isSelected: r = !1,
    tabIndex: o,
    children: u
  } = e, d = (0, c.useRadioItem)({
    label: t,
    isSelected: r
  });
  return (0, i.jsx)(c.Tooltip, {
    text: t,
    children: e => (0, i.jsxs)("div", {
      className: S.themeSelectionContainer,
      children: [(0, i.jsx)(c.Clickable, {
        ...e,
        ...d,
        tabIndex: null != o ? o : d.tabIndex,
        className: l(S.themeSelection, {
          [S.selected]: r
        }, n),
        style: a,
        onClick: r ? _.NOOP : s,
        children: u
      }), r && (0, i.jsx)(v, {})]
    })
  })
}

function E(e) {
  let {
    theme: t,
    isSelected: n,
    onSelect: a
  } = e, m = (0, r.useStateFromStores)([f.default], () => f.default.systemPrefersColorScheme), h = e => (0, d.isThemeLight)(e) ? o.default.unsafe_rawColors.PRIMARY_600.css : o.default.unsafe_rawColors.WHITE_500.css, v = (0, s.match)({
    theme: t,
    systemPrefersColorScheme: m
  }).with({
    theme: "system",
    systemPrefersColorScheme: _.ThemeTypes.LIGHT
  }, () => S.lightIcon).with({
    theme: _.ThemeTypes.LIGHT
  }, () => S.lightIcon).otherwise(() => S.darkIcon), E = (0, s.match)(t).with(_.ThemeTypes.LIGHT, () => p.default.Messages.THEME_LIGHT).with(_.ThemeTypes.DARK, () => p.default.Messages.THEME_DARK).with("system", () => p.default.Messages.THEME_SYSTEM).exhaustive(), N = (0, c.useRedesignIconContext)().enabled;
  return (0, i.jsx)(T, {
    onSelect: a,
    isSelected: n,
    name: E,
    className: l(S.defaultThemeSelection, v),
    children: "system" === t && (0, i.jsx)("div", {
      className: S.iconWrapper,
      children: N ? (0, i.jsx)(u.RefreshIcon, {
        color: h(m)
      }) : (0, i.jsx)(g.default, {
        fill: h(m)
      })
    })
  })
}

function N(e) {
  let {
    preset: t,
    isSelected: n,
    disabled: a,
    tabIndex: s,
    onSelect: r
  } = e, {
    colors: o,
    angle: u,
    theme: c
  } = t, f = (0, h.getLinearGradientForBackgroundGradient)({
    colors: o,
    angle: u
  });
  return (0, i.jsx)(T, {
    onSelect: a ? void 0 : r,
    isSelected: n,
    name: t.getName(),
    className: l([a ? S.disabled : null, (0, d.isThemeDark)(c) ? S.darkOverlay : S.lightOverlay]),
    style: {
      background: "var(--bg-overlay), ".concat(f)
    },
    tabIndex: s
  })
}