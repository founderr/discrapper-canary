"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("77078"),
  o = s("685665"),
  d = s("234251"),
  u = s("606292"),
  c = s("181114"),
  S = s("906932"),
  E = s("570697"),
  T = s("782340"),
  f = s("572540");

function m(e) {
  let {
    user: t,
    guild: s,
    className: l,
    forcedDivider: m = !1,
    withTutorial: _ = !1,
    isTryItOutFlow: g = !1
  } = e, {
    analyticsLocations: h
  } = (0, o.default)(), I = null != s, {
    userAvatarDecoration: N,
    guildAvatarDecoration: p,
    pendingAvatarDecoration: C,
    pendingErrors: A
  } = (0, S.useGuildMemberAndUserPendingAvatarDecoration)(t, s), O = n.useCallback(() => (0, u.openAvatarDecorationModal)({
    analyticsLocations: h,
    isTryItOutFlow: g,
    guild: s
  }), [h, g, s]), x = g || void 0 !== C ? null != C : (I ? p : N) != null, R = _ ? c.default : r.Button;
  return (0, a.jsx)(E.default, {
    className: l,
    forcedDivider: m,
    hasBackground: !0,
    title: T.default.Messages.USER_SETTINGS_AVATAR_DECORATION,
    errors: A,
    children: (0, a.jsxs)("div", {
      className: f.buttonsContainer,
      children: [(0, a.jsx)(R, {
        size: r.Button.Sizes.SMALL,
        onClick: O,
        className: i({
          [f.buttonHighlighted]: _
        }),
        children: T.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), x && (0, a.jsx)(r.Button, {
        className: f.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, S.setNewPendingAvatarDecoration)(null == s ? void 0 : s.id, null)
        },
        children: (0, d.hasGlobalDefaultAvatarDecoration)(t, s) ? T.default.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : T.default.Messages.USER_SETTINGS_REMOVE_AVATAR_DECORATION
      })]
    })
  })
}