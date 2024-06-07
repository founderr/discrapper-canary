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
  I = s("906364"),
  N = s("621853"),
  g = s("271383"),
  f = s("594174"),
  m = s("466111"),
  C = s("74538"),
  A = s("51144"),
  h = s("18438"),
  O = s("778825"),
  p = s("52597"),
  R = s("430131"),
  M = s("133484"),
  x = s("689938"),
  D = s("30314");

function L(e) {
  var t, s, n, L;
  let {
    guild: P
  } = e, b = (0, i.useStateFromStores)([f.default], () => {
    let e = f.default.getCurrentUser();
    return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), {
    pendingAvatar: v,
    pendingNickname: U,
    pendingBanner: j,
    pendingBio: G,
    pendingPronouns: F,
    pendingThemeColors: B,
    errors: y,
    guild: V
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
  }), H = null != P ? P : V;
  l()(null != H, "guild should not be null");
  let Y = (0, o.useGuildAutomodProfileQuarantineErrors)(H.id),
    k = (0, i.useStateFromStores)([g.default], () => null == H.id ? null : g.default.getMember(H.id, b.id)),
    w = (0, i.useStateFromStores)([N.default], () => N.default.getGuildMemberProfile(b.id, H.id)),
    W = C.default.canUsePremiumProfileCustomization(b),
    K = (0, d.showRemoveAvatar)(v, null == k ? void 0 : k.avatar),
    z = (0, d.showRemoveBanner)(j, null == w ? void 0 : w.banner),
    Q = (0, p.canResetThemeColors)(B, null == w ? void 0 : w.themeColors),
    q = null !== (t = null == w ? void 0 : w.bio) && void 0 !== t ? t : "",
    X = null !== (s = null == w ? void 0 : w.pronouns) && void 0 !== s ? s : "",
    Z = (e, t, s) => {
      s(null != e ? e : null != t ? null : void 0)
    };
  return (0, a.jsxs)("div", {
    className: D.sectionsContainer,
    children: [(0, a.jsx)(R.default, {
      errors: null !== (n = null == y ? void 0 : y.nick) && void 0 !== n ? n : null == Y ? void 0 : Y.nick,
      username: A.default.getName(b),
      pendingNick: U,
      currentNick: null == k ? void 0 : k.nick,
      guild: H
    }, "nick"), (0, a.jsx)(I.default, {
      sectionTitle: x.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: null == y ? void 0 : y.pronouns,
      onPronounsChange: e => {
        (0, p.setNewPendingGuildIdentityPronouns)(e, X)
      },
      pendingPronouns: F,
      currentPronouns: X
    }, "pronouns"), (0, a.jsxs)(M.default, {
      user: b,
      showOverlay: !W,
      children: [(0, a.jsx)(S.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [x.default.Messages.USER_SETTINGS_AVATAR, (0, a.jsx)(r.Tooltip, {
            text: x.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(m.default, {
              ...e,
              className: D.nitroWheel
            })
          })]
        }),
        showRemoveAvatarButton: K,
        onAvatarChange: e => Z(e, null == k ? void 0 : k.avatar, h.setPendingAvatar),
        errors: null == y ? void 0 : y.avatar,
        guildId: H.id,
        disabled: !W
      }, "avatar"), (0, a.jsx)(c.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [x.default.Messages.USER_SETTINGS_AVATAR_DECORATION, (0, a.jsx)(r.Tooltip, {
            text: x.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(m.default, {
              ...e,
              className: D.nitroWheel
            })
          })]
        }),
        user: b,
        guild: H
      }, "decoration"), (0, a.jsx)(T.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [x.default.Messages.USER_SETTINGS_PROFILE_EFFECT, (0, a.jsx)(r.Tooltip, {
            text: x.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(m.default, {
              ...e,
              className: D.nitroWheel
            })
          })]
        }),
        user: b,
        guild: H
      }, "effect"), (0, a.jsx)(E.default, {
        showRemoveBannerButton: z,
        errors: null == y ? void 0 : y.banner,
        onBannerChange: e => Z(e, null == w ? void 0 : w.banner, h.setPendingBanner),
        guildId: null == H ? void 0 : H.id,
        disabled: !W
      }, "banner"), (0, a.jsx)(_.default, {
        user: b,
        pendingAvatar: v,
        pendingColors: B,
        onThemeColorsChange: e => {
          (0, p.setNewPendingGuildIdentityThemeColors)(e, null == w ? void 0 : w.themeColors)
        },
        guildId: null == H ? void 0 : H.id,
        showResetThemeButton: Q
      }), (0, a.jsx)(u.default, {
        placeholder: x.default.Messages.CHANGE_IDENTITY_BIO_PLACEHOLDER,
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [x.default.Messages.USER_PROFILE_ABOUT_ME, (0, a.jsx)(r.Tooltip, {
            text: x.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(m.default, {
              ...e,
              className: D.nitroWheel
            })
          })]
        }),
        onBioChange: e => (0, p.setNewPendingGuildIdentityBio)(e, q),
        errors: null !== (L = null == y ? void 0 : y.bio) && void 0 !== L ? L : null == Y ? void 0 : Y.bio,
        pendingBio: G,
        currentBio: q,
        disabled: !W
      }, "about")]
    })]
  })
}