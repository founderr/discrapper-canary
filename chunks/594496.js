"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
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
  f = s("451392"),
  m = s("906364"),
  _ = s("621853"),
  g = s("271383"),
  I = s("594174"),
  h = s("466111"),
  N = s("74538"),
  p = s("51144"),
  C = s("18438"),
  A = s("778825"),
  O = s("52597"),
  x = s("430131"),
  R = s("133484"),
  M = s("689938"),
  v = s("621694");

function D(e) {
  var t, s, n, D;
  let {
    guild: L
  } = e, P = (0, i.useStateFromStores)([I.default], () => {
    let e = I.default.getCurrentUser();
    return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), {
    pendingAvatar: j,
    pendingNickname: b,
    pendingBanner: U,
    pendingBio: y,
    pendingPronouns: B,
    pendingThemeColors: F,
    errors: G,
    guild: k
  } = (0, i.useStateFromStoresObject)([A.default], () => {
    let {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBio: s,
      pendingPronouns: a,
      pendingBanner: n,
      pendingThemeColors: l
    } = A.default.getAllPending();
    return {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBanner: n,
      pendingBio: s,
      pendingPronouns: a,
      pendingThemeColors: l,
      errors: A.default.getErrors(),
      guild: A.default.getGuild()
    }
  }), H = null != L ? L : k;
  l()(null != H, "guild should not be null");
  let w = (0, o.useGuildAutomodProfileQuarantineErrors)(H.id),
    V = (0, i.useStateFromStores)([g.default], () => null == H.id ? null : g.default.getMember(H.id, P.id)),
    Y = (0, i.useStateFromStores)([_.default], () => _.default.getGuildMemberProfile(P.id, H.id)),
    W = N.default.canUsePremiumProfileCustomization(P),
    K = (0, d.showRemoveAvatar)(j, null == V ? void 0 : V.avatar),
    z = (0, d.showRemoveBanner)(U, null == Y ? void 0 : Y.banner),
    Q = (0, O.canResetThemeColors)(F, null == Y ? void 0 : Y.themeColors),
    q = null !== (t = null == Y ? void 0 : Y.bio) && void 0 !== t ? t : "",
    Z = null !== (s = null == Y ? void 0 : Y.pronouns) && void 0 !== s ? s : "",
    X = (e, t, s) => {
      s(null != e ? e : null != t ? null : void 0)
    };
  return (0, a.jsxs)("div", {
    className: v.sectionsContainer,
    children: [(0, a.jsx)(x.default, {
      errors: null !== (n = null == G ? void 0 : G.nick) && void 0 !== n ? n : null == w ? void 0 : w.nick,
      username: p.default.getName(P),
      pendingNick: b,
      currentNick: null == V ? void 0 : V.nick,
      guild: H
    }, "nick"), (0, a.jsx)(m.default, {
      sectionTitle: M.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: null == G ? void 0 : G.pronouns,
      onPronounsChange: e => {
        (0, O.setNewPendingGuildIdentityPronouns)(e, Z)
      },
      pendingPronouns: B,
      currentPronouns: Z
    }, "pronouns"), (0, a.jsxs)(R.default, {
      user: P,
      showOverlay: !W,
      children: [(0, a.jsx)(S.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_SETTINGS_AVATAR, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(h.default, {
              ...e,
              className: v.nitroWheel
            })
          })]
        }),
        showRemoveAvatarButton: K,
        onAvatarChange: e => X(e, null == V ? void 0 : V.avatar, C.setPendingAvatar),
        errors: null == G ? void 0 : G.avatar,
        guildId: H.id,
        disabled: !W
      }, "avatar"), (0, a.jsx)(c.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_SETTINGS_AVATAR_DECORATION, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(h.default, {
              ...e,
              className: v.nitroWheel
            })
          })]
        }),
        user: P,
        guild: H
      }, "decoration"), (0, a.jsx)(T.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_SETTINGS_PROFILE_EFFECT, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(h.default, {
              ...e,
              className: v.nitroWheel
            })
          })]
        }),
        user: P,
        guild: H
      }, "effect"), (0, a.jsx)(E.default, {
        showRemoveBannerButton: z,
        errors: null == G ? void 0 : G.banner,
        onBannerChange: e => X(e, null == Y ? void 0 : Y.banner, C.setPendingBanner),
        guildId: null == H ? void 0 : H.id,
        disabled: !W
      }, "banner"), (0, a.jsx)(f.default, {
        user: P,
        pendingAvatar: j,
        pendingColors: F,
        onThemeColorsChange: e => {
          (0, O.setNewPendingGuildIdentityThemeColors)(e, null == Y ? void 0 : Y.themeColors)
        },
        guildId: null == H ? void 0 : H.id,
        showResetThemeButton: Q
      }), (0, a.jsx)(u.default, {
        placeholder: M.default.Messages.CHANGE_IDENTITY_BIO_PLACEHOLDER,
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_PROFILE_ABOUT_ME, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(h.default, {
              ...e,
              className: v.nitroWheel
            })
          })]
        }),
        onBioChange: e => (0, O.setNewPendingGuildIdentityBio)(e, q),
        errors: null !== (D = null == G ? void 0 : G.bio) && void 0 !== D ? D : null == w ? void 0 : w.bio,
        pendingBio: y,
        currentBio: q,
        disabled: !W
      }, "about")]
    })]
  })
}