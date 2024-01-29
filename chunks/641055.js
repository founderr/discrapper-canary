"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
}), l("222007");
var s = l("37983"),
  i = l("884691"),
  n = l("446674"),
  u = l("151426"),
  a = l("819855"),
  o = l("77078"),
  r = l("841098"),
  d = l("340066"),
  c = l("206230"),
  f = l("10641"),
  _ = l("874419"),
  S = l("430312"),
  T = l("590456"),
  E = l("393036");
let C = () => {
  let e = (0, f.useIsDismissibleContentDismissed)(u.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP),
    t = (0, n.useStateFromStores)([c.default], () => c.default.syncProfileThemeWithUserTheme),
    l = (0, r.default)(),
    {
      profileTheme: s
    } = i.useContext(S.UserProfileContext),
    o = (0, a.isThemeDark)(l) && (0, a.isThemeLight)(s);
  return !e && !t && o
};
var p = e => {
  let {
    onTooltipClose: t
  } = e, {
    profileType: l
  } = i.useContext(S.UserProfileContext), n = l === T.UserProfileTypes.POPOUT, u = C(), [a, r] = i.useState(!n && u);
  return (0, d.default)(() => r(u), n ? 300 : null), (0, s.jsx)(o.Popout, {
    shouldShow: a,
    position: "left",
    align: "center",
    spacing: 32,
    ignoreModalClicks: !0,
    onRequestClose: () => {
      !n && r(!1)
    },
    renderPopout: e => {
      let {
        position: l
      } = e;
      return (0, s.jsx)(_.default, {
        position: null != l ? l : "left",
        onClose: t
      })
    },
    children: () => (0, s.jsx)("span", {
      className: E.hidden
    })
  })
}