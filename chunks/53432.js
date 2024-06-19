n.d(t, {
  Z: function() {
    return Z
  }
});
var r = n(735250);
n(470079);
var u = n(442837),
  s = n(481060),
  a = n(153867),
  o = n(857595),
  i = n(607070),
  l = n(906732),
  c = n(705262),
  d = n(540059),
  E = n(210887),
  M = n(740492),
  I = n(695346),
  S = n(874893),
  T = n(981631),
  m = n(689938);

function Z() {
  let e = I.jU.useSetting(),
    {
      analyticsLocations: t
    } = (0, l.ZP)(),
    {
      theme: n,
      useSystemTheme: Z,
      useForcedColors: p
    } = (0, u.cj)([E.Z, M.ZP, i.Z], () => ({
      theme: E.Z.theme,
      useSystemTheme: M.ZP.useSystemTheme,
      useForcedColors: i.Z.useForcedColors
    })),
    _ = (0, d.Q)("appearance_settings"),
    h = (e, u) => (0, r.jsx)(s.MenuRadioItem, {
      id: e,
      group: "input-modes",
      label: u,
      disabled: p,
      checked: Z === S.K.ON ? "system" === e : e === n,
      action: () => {
        (0, c.Yk)({
          isPersisted: !0,
          analyticsLocations: t,
          themeName: "default ".concat(e)
        }), (0, a.ZI)({
          theme: e
        })
      }
    });
  return [(0, r.jsxs)(s.MenuGroup, {
    children: [h(T.BRd.DARK, m.Z.Messages.THEME_DARK), h(T.BRd.LIGHT, m.Z.Messages.THEME_LIGHT), _ && (0, r.jsxs)(r.Fragment, {
      children: [h(T.BRd.DARKER, "Darker"), h(T.BRd.MIDNIGHT, m.Z.Messages.THEME_MIDNIGHT)]
    }), h("system", m.Z.Messages.THEME_SYSTEM)]
  }, "theme-items"), (0, r.jsx)(s.MenuGroup, {
    children: (0, r.jsx)(s.MenuItem, {
      id: "compact-mode",
      label: e ? m.Z.Messages.SWITCH_TO_COZY_MODE : m.Z.Messages.SWITCH_TO_COMPACT_MODE,
      action: () => {
        I.jU.updateSetting(!e), (0, o.ZZ)()
      }
    })
  }, "compact-mode")]
}