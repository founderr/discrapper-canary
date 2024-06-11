"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
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
    className: i,
    sectionTitle: E,
    forcedDivider: g = !1,
    withTutorial: m = !1,
    isTryItOutFlow: A = !1
  } = e, {
    analyticsLocations: C
  } = (0, o.default)(), O = null != s, {
    userAvatarDecoration: h,
    guildAvatarDecoration: R,
    pendingAvatarDecoration: p,
    pendingErrors: M
  } = (0, T.useGuildMemberAndUserPendingAvatarDecoration)(t, s), D = (0, c.default)("enable_avatar_decoration_uploads"), x = n.useCallback(() => (0, u.openAvatarDecorationModal)({
    analyticsLocations: C,
    isTryItOutFlow: A,
    guild: s
  }), [C, A, s]), L = A || void 0 !== p ? null != p : (O ? R : h) != null, P = m ? S.default : r.Button;
  return (0, a.jsxs)(_.default, {
    className: i,
    forcedDivider: g,
    hasBackground: !0,
    title: E,
    errors: M,
    children: [(0, a.jsxs)("div", {
      className: N.buttonsContainer,
      children: [(0, a.jsx)(P, {
        size: r.Button.Sizes.SMALL,
        onClick: x,
        className: l()({
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
    }), t.isStaff() && D && (0, a.jsx)(f, {
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