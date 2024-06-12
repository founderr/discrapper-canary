"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
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
  S = s("345861"),
  E = s("150039"),
  T = s("993413"),
  _ = s("689938"),
  I = s("35071");

function N(e) {
  let {
    user: t,
    guild: s,
    className: i,
    sectionTitle: S,
    forcedDivider: N = !1,
    withTutorial: f = !1,
    isTryItOutFlow: m = !1
  } = e, {
    analyticsLocations: A
  } = (0, o.default)(), C = null != s, {
    userAvatarDecoration: O,
    guildAvatarDecoration: h,
    pendingAvatarDecoration: R,
    pendingErrors: p
  } = (0, E.useGuildMemberAndUserPendingAvatarDecoration)(t, s), M = (0, c.default)("enable_avatar_decoration_uploads"), D = n.useCallback(() => (0, u.openAvatarDecorationModal)({
    analyticsLocations: A,
    isTryItOutFlow: m,
    guild: s
  }), [A, m, s]), x = m || void 0 !== R ? null != R : (C ? h : O) != null, L = f ? r.ShinyButton : r.Button;
  return (0, a.jsxs)(T.default, {
    className: i,
    forcedDivider: N,
    hasBackground: !0,
    title: S,
    errors: p,
    children: [(0, a.jsxs)("div", {
      className: I.buttonsContainer,
      children: [(0, a.jsx)(L, {
        size: r.Button.Sizes.SMALL,
        onClick: D,
        className: l()({
          [I.buttonHighlighted]: f
        }),
        children: _.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), x && (0, a.jsx)(r.Button, {
        className: I.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, E.setNewPendingAvatarDecoration)(null == s ? void 0 : s.id, null)
        },
        children: (0, d.hasGlobalDefaultAvatarDecoration)(t, s) ? _.default.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : _.default.Messages.USER_SETTINGS_REMOVE_AVATAR_DECORATION
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
    className: I.overrideButtonsContainer,
    children: [(0, a.jsx)(r.Text, {
      variant: "text-xs/bold",
      children: "STAFF ONLY and Experimental. Upload a decoration to view throughout the app."
    }), (0, a.jsx)(S.default, {
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