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
  _ = s("451392"),
  f = s("906364"),
  m = s("621853"),
  I = s("271383"),
  g = s("594174"),
  N = s("466111"),
  h = s("74538"),
  C = s("51144"),
  O = s("18438"),
  A = s("778825"),
  p = s("52597"),
  R = s("430131"),
  x = s("133484"),
  M = s("689938"),
  L = s("30314");

function D(e) {
  var t, s, n, D;
  let {
    guild: P
  } = e, v = (0, i.useStateFromStores)([g.default], () => {
    let e = g.default.getCurrentUser();
    return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), {
    pendingAvatar: b,
    pendingNickname: j,
    pendingBanner: U,
    pendingBio: G,
    pendingPronouns: F,
    pendingThemeColors: B,
    errors: y,
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
  }), V = null != P ? P : k;
  l()(null != V, "guild should not be null");
  let H = (0, o.useGuildAutomodProfileQuarantineErrors)(V.id),
    w = (0, i.useStateFromStores)([I.default], () => null == V.id ? null : I.default.getMember(V.id, v.id)),
    Y = (0, i.useStateFromStores)([m.default], () => m.default.getGuildMemberProfile(v.id, V.id)),
    W = h.default.canUsePremiumProfileCustomization(v),
    K = (0, d.showRemoveAvatar)(b, null == w ? void 0 : w.avatar),
    z = (0, d.showRemoveBanner)(U, null == Y ? void 0 : Y.banner),
    Q = (0, p.canResetThemeColors)(B, null == Y ? void 0 : Y.themeColors),
    q = null !== (t = null == Y ? void 0 : Y.bio) && void 0 !== t ? t : "",
    Z = null !== (s = null == Y ? void 0 : Y.pronouns) && void 0 !== s ? s : "",
    X = (e, t, s) => {
      s(null != e ? e : null != t ? null : void 0)
    };
  return (0, a.jsxs)("div", {
    className: L.sectionsContainer,
    children: [(0, a.jsx)(R.default, {
      errors: null !== (n = null == y ? void 0 : y.nick) && void 0 !== n ? n : null == H ? void 0 : H.nick,
      username: C.default.getName(v),
      pendingNick: j,
      currentNick: null == w ? void 0 : w.nick,
      guild: V
    }, "nick"), (0, a.jsx)(f.default, {
      sectionTitle: M.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: null == y ? void 0 : y.pronouns,
      onPronounsChange: e => {
        (0, p.setNewPendingGuildIdentityPronouns)(e, Z)
      },
      pendingPronouns: F,
      currentPronouns: Z
    }, "pronouns"), (0, a.jsxs)(x.default, {
      user: v,
      showOverlay: !W,
      children: [(0, a.jsx)(S.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_SETTINGS_AVATAR, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(N.default, {
              ...e,
              className: L.nitroWheel
            })
          })]
        }),
        showRemoveAvatarButton: K,
        onAvatarChange: e => X(e, null == w ? void 0 : w.avatar, O.setPendingAvatar),
        errors: null == y ? void 0 : y.avatar,
        guildId: V.id,
        disabled: !W
      }, "avatar"), (0, a.jsx)(c.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_SETTINGS_AVATAR_DECORATION, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(N.default, {
              ...e,
              className: L.nitroWheel
            })
          })]
        }),
        user: v,
        guild: V
      }, "decoration"), (0, a.jsx)(T.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_SETTINGS_PROFILE_EFFECT, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(N.default, {
              ...e,
              className: L.nitroWheel
            })
          })]
        }),
        user: v,
        guild: V
      }, "effect"), (0, a.jsx)(E.default, {
        showRemoveBannerButton: z,
        errors: null == y ? void 0 : y.banner,
        onBannerChange: e => X(e, null == Y ? void 0 : Y.banner, O.setPendingBanner),
        guildId: null == V ? void 0 : V.id,
        disabled: !W
      }, "banner"), (0, a.jsx)(_.default, {
        user: v,
        pendingAvatar: b,
        pendingColors: B,
        onThemeColorsChange: e => {
          (0, p.setNewPendingGuildIdentityThemeColors)(e, null == Y ? void 0 : Y.themeColors)
        },
        guildId: null == V ? void 0 : V.id,
        showResetThemeButton: Q
      }), (0, a.jsx)(u.default, {
        placeholder: M.default.Messages.CHANGE_IDENTITY_BIO_PLACEHOLDER,
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_PROFILE_ABOUT_ME, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(N.default, {
              ...e,
              className: L.nitroWheel
            })
          })]
        }),
        onBioChange: e => (0, p.setNewPendingGuildIdentityBio)(e, q),
        errors: null !== (D = null == y ? void 0 : y.bio) && void 0 !== D ? D : null == H ? void 0 : H.bio,
        pendingBio: G,
        currentBio: q,
        disabled: !W
      }, "about")]
    })]
  })
}