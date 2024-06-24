n.d(t, {
  Z: function() {
    return Z
  }
});
var r = n(735250);
n(470079);
var u = n(442837),
  l = n(481060),
  a = n(153867),
  i = n(857595),
  s = n(607070),
  o = n(906732),
  c = n(705262),
  d = n(540059),
  E = n(210887),
  I = n(740492),
  T = n(695346),
  S = n(874893),
  _ = n(981631),
  M = n(689938);

function Z() {
  let e = T.jU.useSetting(),
    {
      analyticsLocations: t
    } = (0, o.ZP)(),
    {
      theme: n,
      useSystemTheme: Z,
      useForcedColors: N
    } = (0, u.cj)([E.Z, I.ZP, s.Z], () => ({
      theme: E.Z.theme,
      useSystemTheme: I.ZP.useSystemTheme,
      useForcedColors: s.Z.useForcedColors
    })),
    m = (0, d.Q)("appearance_settings"),
    f = (e, u) => (0, r.jsx)(l.MenuRadioItem, {
      id: e,
      group: "input-modes",
      label: u,
      disabled: N,
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
  return [(0, r.jsxs)(l.MenuGroup, {
    children: [f(_.BRd.DARK, M.Z.Messages.THEME_DARK), f(_.BRd.LIGHT, M.Z.Messages.THEME_LIGHT), m && (0, r.jsxs)(r.Fragment, {
      children: [f(_.BRd.DARKER, "Darker"), f(_.BRd.MIDNIGHT, M.Z.Messages.THEME_MIDNIGHT)]
    }), f("system", M.Z.Messages.THEME_SYSTEM)]
  }, "theme-items"), (0, r.jsx)(l.MenuGroup, {
    children: (0, r.jsx)(l.MenuItem, {
      id: "compact-mode",
      label: e ? M.Z.Messages.SWITCH_TO_COZY_MODE : M.Z.Messages.SWITCH_TO_COMPACT_MODE,
      action: () => {
        T.jU.updateSetting(!e), (0, i.ZZ)()
      }
    })
  }, "compact-mode")]
}