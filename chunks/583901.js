"use strict";
n.d(t, {
  DR: function() {
    return A
  },
  bD: function() {
    return N
  },
  oK: function() {
    return S
  }
}), n(627341);
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(278074),
  a = n(442837),
  l = n(692547),
  u = n(780384),
  _ = n(481060),
  c = n(210887),
  d = n(47760),
  E = n(798728),
  I = n(981631),
  T = n(689938),
  h = n(480094);

function S() {
  return (0, i.jsx)("div", {
    className: h.selectionCircle,
    children: (0, i.jsx)(_.CircleCheckIcon, {
      size: "md",
      color: "currentColor",
      className: h.checkmarkCircle,
      colorClass: h.checkmark,
      secondaryColor: l.Z.unsafe_rawColors.WHITE_500.css
    })
  })
}

function f(e) {
  let {
    name: t,
    className: n,
    style: r,
    onSelect: o,
    isSelected: a = !1,
    tabIndex: l,
    children: u,
    showBadge: c
  } = e, d = (0, _.useRadioItem)({
    label: t,
    isSelected: a
  });
  return (0, i.jsx)(_.Tooltip, {
    text: t,
    children: e => (0, i.jsxs)("div", {
      className: h.themeSelectionContainer,
      children: [(0, i.jsx)(_.Clickable, {
        ...e,
        ...d,
        tabIndex: null != l ? l : d.tabIndex,
        className: s()(h.themeSelection, {
          [h.selected]: a
        }, n),
        style: r,
        onClick: a ? I.dG4 : o,
        children: u
      }), a && (0, i.jsx)(S, {}), !a && c && (0, i.jsx)("div", {
        className: h.redCircle
      })]
    })
  })
}

function N(e) {
  let {
    theme: t,
    isSelected: n,
    onSelect: r
  } = e, d = (0, a.e7)([c.Z], () => c.Z.systemPrefersColorScheme), S = e => (0, u.ap)(e) ? l.Z.unsafe_rawColors.PRIMARY_600.css : l.Z.unsafe_rawColors.WHITE_500.css, N = (0, o.EQ)({
    theme: t,
    systemPrefersColorScheme: d
  }).with({
    theme: "system",
    systemPrefersColorScheme: I.BRd.LIGHT
  }, () => h.lightIcon).with({
    theme: I.BRd.LIGHT
  }, () => h.lightIcon).with({
    theme: I.BRd.DARK
  }, () => h.darkIcon).with({
    theme: I.BRd.DARKER
  }, () => h.darkerIcon).with({
    theme: I.BRd.MIDNIGHT
  }, () => h.midnightIcon).otherwise(() => h.darkIcon), A = (0, o.EQ)(t).with(I.BRd.LIGHT, () => T.Z.Messages.THEME_LIGHT).with(I.BRd.DARK, () => T.Z.Messages.THEME_DARK).with(I.BRd.DARKER, () => "Darker").with(I.BRd.MIDNIGHT, () => T.Z.Messages.THEME_MIDNIGHT).with("system", () => T.Z.Messages.THEME_SYSTEM).exhaustive(), m = (0, _.useRedesignIconContext)().enabled;
  return (0, i.jsx)(f, {
    onSelect: r,
    isSelected: n,
    name: A,
    className: s()(h.defaultThemeSelection, N),
    children: "system" === t && (0, i.jsx)("div", {
      className: h.iconWrapper,
      children: m ? (0, i.jsx)(_.RefreshIcon, {
        color: S(d)
      }) : (0, i.jsx)(E.Z, {
        fill: S(d)
      })
    })
  })
}

function A(e) {
  let {
    preset: t,
    isSelected: n,
    disabled: r,
    tabIndex: o,
    onSelect: a,
    showBadge: l
  } = e, {
    colors: _,
    angle: c,
    theme: E
  } = t, I = (0, d.VK)({
    colors: _,
    angle: c
  });
  return (0, i.jsx)(f, {
    onSelect: r ? void 0 : a,
    isSelected: n,
    name: t.getName(),
    className: s()([r ? h.disabled : null, (0, u.wj)(E) ? h.darkOverlay : h.lightOverlay]),
    style: {
      background: "var(--bg-overlay), ".concat(I)
    },
    tabIndex: o,
    showBadge: l
  })
}