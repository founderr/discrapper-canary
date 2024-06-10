"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("481060"),
  o = s("906732"),
  d = s("864106"),
  u = s("1585"),
  c = s("580747"),
  S = s("976644"),
  E = s("540086"),
  T = s("150039"),
  _ = s("993413"),
  I = s("689938"),
  N = s("35071");

function g(e) {
  let {
    user: t,
    guild: s,
    className: l,
    sectionTitle: E,
    forcedDivider: g = !1,
    withTutorial: m = !1,
    isTryItOutFlow: C = !1
  } = e, {
    analyticsLocations: A
  } = (0, o.default)(), O = null != s, {
    userAvatarDecoration: h,
    guildAvatarDecoration: p,
    pendingAvatarDecoration: R,
    pendingErrors: M
  } = (0, T.useGuildMemberAndUserPendingAvatarDecoration)(t, s), x = (0, c.default)("enable_avatar_decoration_uploads"), D = n.useCallback(() => (0, u.openAvatarDecorationModal)({
    analyticsLocations: A,
    isTryItOutFlow: C,
    guild: s
  }), [A, C, s]), L = C || void 0 !== R ? null != R : (O ? p : h) != null, P = m ? S.default : r.Button;
  return (0, a.jsxs)(_.default, {
    className: l,
    forcedDivider: g,
    hasBackground: !0,
    title: E,
    errors: M,
    children: [(0, a.jsxs)("div", {
      className: N.buttonsContainer,
      children: [(0, a.jsx)(P, {
        size: r.Button.Sizes.SMALL,
        onClick: D,
        className: i()({
          [N.buttonHighlighted]: m
        }),
        children: I.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), L && (0, a.jsx)(r.Button, {
        className: N.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, T.setNewPendingAvatarDecoration)(null == s ? void 0 : s.id, null)
        },
        children: (0, d.hasGlobalDefaultAvatarDecoration)(t, s) ? I.default.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : I.default.Messages.USER_SETTINGS_REMOVE_AVATAR_DECORATION
      })]
    }), t.isStaff() && x && (0, a.jsx)(f, {
      user: t
    })]
  })
}
let f = e => {
  let {
    user: t
  } = e;
  return (0, a.jsxs)("div", {
    className: N.overrideButtonsContainer,
    children: [(0, a.jsx)(r.Text, {
      variant: "text-xs/bold",
      children: "STAFF ONLY and Experimental. Upload a decoration to view throughout the app."
    }), (0, a.jsx)(E.default, {
      onChange: e => {
        null != e && (t.avatarDecoration = {
          asset: e,
          skuID: "PALUE000000001"
        })
      },
      buttonCTA: "Upload Override"
    })]
  })
}