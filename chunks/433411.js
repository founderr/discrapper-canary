"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
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
  f = s("689938"),
  m = s("35071");

function I(e) {
  let {
    user: t,
    guild: s,
    className: l,
    sectionTitle: E,
    forcedDivider: I = !1,
    withTutorial: N = !1,
    isTryItOutFlow: h = !1
  } = e, {
    analyticsLocations: C
  } = (0, o.default)(), O = null != s, {
    userAvatarDecoration: A,
    guildAvatarDecoration: p,
    pendingAvatarDecoration: R,
    pendingErrors: x
  } = (0, T.useGuildMemberAndUserPendingAvatarDecoration)(t, s), M = (0, c.default)("enable_avatar_decoration_uploads"), L = n.useCallback(() => (0, u.openAvatarDecorationModal)({
    analyticsLocations: C,
    isTryItOutFlow: h,
    guild: s
  }), [C, h, s]), D = h || void 0 !== R ? null != R : (O ? p : A) != null, P = N ? S.default : r.Button;
  return (0, a.jsxs)(_.default, {
    className: l,
    forcedDivider: I,
    hasBackground: !0,
    title: E,
    errors: x,
    children: [(0, a.jsxs)("div", {
      className: m.buttonsContainer,
      children: [(0, a.jsx)(P, {
        size: r.Button.Sizes.SMALL,
        onClick: L,
        className: i()({
          [m.buttonHighlighted]: N
        }),
        children: f.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), D && (0, a.jsx)(r.Button, {
        className: m.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, T.setNewPendingAvatarDecoration)(null == s ? void 0 : s.id, null)
        },
        children: (0, d.hasGlobalDefaultAvatarDecoration)(t, s) ? f.default.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : f.default.Messages.USER_SETTINGS_REMOVE_AVATAR_DECORATION
      })]
    }), t.isStaff() && M && (0, a.jsx)(g, {
      user: t
    })]
  })
}
let g = e => {
  let {
    user: t
  } = e;
  return (0, a.jsxs)("div", {
    className: m.overrideButtonsContainer,
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