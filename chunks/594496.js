"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
});
var a = s("735250");
s("470079");
var n = s("512722"),
  l = s.n(n),
  i = s("442837"),
  r = s("481060"),
  o = s("295474"),
  d = s("150039"),
  u = s("126631"),
  c = s("433411"),
  S = s("532432"),
  E = s("134795"),
  T = s("513901"),
  _ = s("451392"),
  f = s("906364"),
  I = s("621853"),
  m = s("271383"),
  N = s("594174"),
  g = s("466111"),
  h = s("74538"),
  C = s("51144"),
  A = s("18438"),
  O = s("778825"),
  p = s("52597"),
  R = s("430131"),
  x = s("133484"),
  M = s("689938"),
  D = s("30314");

function L(e) {
  var t, s, n, L;
  let {
    guild: v
  } = e, P = (0, i.useStateFromStores)([N.default], () => {
    let e = N.default.getCurrentUser();
    return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), {
    pendingAvatar: b,
    pendingNickname: U,
    pendingBanner: j,
    pendingBio: F,
    pendingPronouns: G,
    pendingThemeColors: y,
    errors: B,
    guild: k
  } = (0, i.useStateFromStoresObject)([O.default], () => {
    let {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBio: s,
      pendingPronouns: a,
      pendingBanner: n,
      pendingThemeColors: l
    } = O.default.getAllPending();
    return {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBanner: n,
      pendingBio: s,
      pendingPronouns: a,
      pendingThemeColors: l,
      errors: O.default.getErrors(),
      guild: O.default.getGuild()
    }
  }), H = null != v ? v : k;
  l()(null != H, "guild should not be null");
  let w = (0, o.useGuildAutomodProfileQuarantineErrors)(H.id),
    V = (0, i.useStateFromStores)([m.default], () => null == H.id ? null : m.default.getMember(H.id, P.id)),
    Y = (0, i.useStateFromStores)([I.default], () => I.default.getGuildMemberProfile(P.id, H.id)),
    W = h.default.canUsePremiumProfileCustomization(P),
    K = (0, d.showRemoveAvatar)(b, null == V ? void 0 : V.avatar),
    z = (0, d.showRemoveBanner)(j, null == Y ? void 0 : Y.banner),
    Q = (0, p.canResetThemeColors)(y, null == Y ? void 0 : Y.themeColors),
    q = null !== (t = null == Y ? void 0 : Y.bio) && void 0 !== t ? t : "",
    Z = null !== (s = null == Y ? void 0 : Y.pronouns) && void 0 !== s ? s : "",
    X = (e, t, s) => {
      s(null != e ? e : null != t ? null : void 0)
    };
  return (0, a.jsxs)("div", {
    className: D.sectionsContainer,
    children: [(0, a.jsx)(R.default, {
      errors: null !== (n = null == B ? void 0 : B.nick) && void 0 !== n ? n : null == w ? void 0 : w.nick,
      username: C.default.getName(P),
      pendingNick: U,
      currentNick: null == V ? void 0 : V.nick,
      guild: H
    }, "nick"), (0, a.jsx)(f.default, {
      sectionTitle: M.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: null == B ? void 0 : B.pronouns,
      onPronounsChange: e => {
        (0, p.setNewPendingGuildIdentityPronouns)(e, Z)
      },
      pendingPronouns: G,
      currentPronouns: Z
    }, "pronouns"), (0, a.jsxs)(x.default, {
      user: P,
      showOverlay: !W,
      children: [(0, a.jsx)(S.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_SETTINGS_AVATAR, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(g.default, {
              ...e,
              className: D.nitroWheel
            })
          })]
        }),
        showRemoveAvatarButton: K,
        onAvatarChange: e => X(e, null == V ? void 0 : V.avatar, A.setPendingAvatar),
        errors: null == B ? void 0 : B.avatar,
        guildId: H.id,
        disabled: !W
      }, "avatar"), (0, a.jsx)(c.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_SETTINGS_AVATAR_DECORATION, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(g.default, {
              ...e,
              className: D.nitroWheel
            })
          })]
        }),
        user: P,
        guild: H
      }, "decoration"), (0, a.jsx)(T.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_SETTINGS_PROFILE_EFFECT, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(g.default, {
              ...e,
              className: D.nitroWheel
            })
          })]
        }),
        user: P,
        guild: H
      }, "effect"), (0, a.jsx)(E.default, {
        showRemoveBannerButton: z,
        errors: null == B ? void 0 : B.banner,
        onBannerChange: e => X(e, null == Y ? void 0 : Y.banner, A.setPendingBanner),
        guildId: null == H ? void 0 : H.id,
        disabled: !W
      }, "banner"), (0, a.jsx)(_.default, {
        user: P,
        pendingAvatar: b,
        pendingColors: y,
        onThemeColorsChange: e => {
          (0, p.setNewPendingGuildIdentityThemeColors)(e, null == Y ? void 0 : Y.themeColors)
        },
        guildId: null == H ? void 0 : H.id,
        showResetThemeButton: Q
      }), (0, a.jsx)(u.default, {
        placeholder: M.default.Messages.CHANGE_IDENTITY_BIO_PLACEHOLDER,
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_PROFILE_ABOUT_ME, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(g.default, {
              ...e,
              className: D.nitroWheel
            })
          })]
        }),
        onBioChange: e => (0, p.setNewPendingGuildIdentityBio)(e, q),
        errors: null !== (L = null == B ? void 0 : B.bio) && void 0 !== L ? L : null == w ? void 0 : w.bio,
        pendingBio: F,
        currentBio: q,
        disabled: !W
      }, "about")]
    })]
  })
}