"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var i = n("37983");
n("884691");
var l = n("627445"),
  r = n.n(l),
  s = n("446674"),
  a = n("184900"),
  o = n("11899"),
  u = n("447645"),
  d = n("569460"),
  c = n("52704"),
  f = n("121370"),
  E = n("26989"),
  h = n("305961"),
  _ = n("697218"),
  C = n("335189"),
  p = n("473591"),
  S = n("680894"),
  I = n("782340"),
  R = n("618641");

function m(e) {
  let {
    guildId: t,
    clydeUser: n
  } = e, {
    pendingNick: l,
    pendingThemeColors: r
  } = (0, s.useStateFromStoresObject)([p.default], () => p.default.getPendingUpdates()), a = (0, s.useStateFromStores)([E.default], () => E.default.getMember(t, S.CLYDE_AI_USER_ID));
  return (0, i.jsxs)("div", {
    className: R.editProfileSections,
    children: [(0, i.jsx)(d.default, {
      placeholder: I.default.Messages.CLYDE_NAME,
      errors: [],
      currentGlobalName: null == a ? void 0 : a.nick,
      pendingGlobalName: l,
      onGlobalNameChange: C.setPendingNick
    }), (0, i.jsx)(u.default, {
      guildId: t,
      onAvatarChange: C.setPendingAvatar,
      showRemoveAvatarButton: !0,
      sectionTitle: I.default.Messages.CLYDE_SETTINGS_AVATAR_HEADER,
      isClyde: !0
    }), (0, i.jsx)(c.default, {
      guildId: t,
      onBannerChange: C.setPendingBanner,
      showRemoveBannerButton: !0,
      showPremiumIcon: !1
    }), (0, i.jsx)(f.default, {
      user: n,
      guildId: t,
      showPremiumIcon: !1,
      preventDisabled: !0,
      pendingColors: null != r ? r : void 0,
      onThemeColorsChange: C.setPendingThemeColors
    })]
  })
}

function g(e) {
  let {
    guildId: t
  } = e, {
    pendingNick: n,
    pendingAvatar: l,
    pendingBanner: u,
    pendingThemeColors: d
  } = (0, s.useStateFromStoresObject)([p.default], () => p.default.getPendingUpdates()), c = (0, s.useStateFromStores)([_.default], () => _.default.getUser(S.CLYDE_AI_USER_ID));
  r(null != c, "Clyde User must exist");
  let f = (0, s.useStateFromStores)([h.default], () => h.default.getGuild(t));
  return (0, i.jsx)(o.default, {
    className: R.profileCustomizationTab,
    previewTitle: "Clyde",
    profilePreview: (0, i.jsx)(a.default, {
      user: c,
      guild: f,
      canUsePremiumCustomization: !0,
      onAvatarChange: C.setPendingAvatar,
      onBannerChange: C.setPendingBanner,
      pendingNickname: null != n ? n : void 0,
      pendingAvatar: l,
      pendingBanner: u,
      pendingThemeColors: null != d ? d : void 0,
      pendingBio: void 0,
      pendingPronouns: void 0,
      hideFakeActivity: !0
    }),
    children: (0, i.jsx)(m, {
      guildId: t,
      clydeUser: c
    })
  })
}