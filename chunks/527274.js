"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
});
var a = s("37983");
s("884691");
var n = s("627445"),
  l = s.n(n),
  i = s("446674"),
  r = s("77078"),
  o = s("956967"),
  d = s("906932"),
  u = s("702877"),
  c = s("668688"),
  S = s("447645"),
  E = s("52704"),
  T = s("741781"),
  f = s("121370"),
  m = s("370505"),
  _ = s("555898"),
  g = s("713135"),
  h = s("26989"),
  I = s("697218"),
  N = s("216422"),
  p = s("719923"),
  C = s("158998"),
  A = s("929423"),
  O = s("424562"),
  x = s("754893"),
  R = s("8204"),
  M = s("250590"),
  D = s("49111"),
  v = s("782340"),
  L = s("999997");

function P(e) {
  var t, s, n, P;
  let {
    guild: j
  } = e, b = (0, i.useStateFromStores)([I.default], () => {
    let e = I.default.getCurrentUser();
    return l(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), {
    pendingAvatar: U,
    pendingNickname: B,
    pendingBanner: y,
    pendingBio: F,
    pendingPronouns: G,
    pendingThemeColors: k,
    errors: H,
    guild: w
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
  }), V = null != j ? j : w;
  l(null != V, "guild should not be null");
  let Y = (0, o.useGuildAutomodProfileQuarantineErrors)(V.id),
    W = (0, i.useStateFromStores)([h.default], () => null == V.id ? null : h.default.getMember(V.id, b.id)),
    K = (0, i.useStateFromStores)([g.default], () => g.default.getGuildMemberProfile(b.id, V.id)),
    z = p.default.canUsePremiumProfileCustomization(b),
    Q = (0, d.showRemoveAvatar)(U, null == W ? void 0 : W.avatar),
    q = (0, d.showRemoveBanner)(y, null == K ? void 0 : K.banner),
    Z = (0, x.canResetThemeColors)(k, null == K ? void 0 : K.themeColors),
    X = null !== (t = null == K ? void 0 : K.bio) && void 0 !== t ? t : "",
    J = null !== (s = null == K ? void 0 : K.pronouns) && void 0 !== s ? s : "",
    $ = (0, _.useCanCustomizeGuildCollectibleItem)({
      location: "GuildIdentityCustomizationSections"
    }),
    ee = (e, t, s) => {
      s(null != e ? e : null != t ? null : void 0)
    };
  return (0, a.jsxs)("div", {
    className: L.sectionsContainer,
    children: [(0, a.jsx)(R.default, {
      errors: null !== (n = null == H ? void 0 : H.nick) && void 0 !== n ? n : null == Y ? void 0 : Y.nick,
      username: C.default.getName(b),
      pendingNick: B,
      currentNick: null == W ? void 0 : W.nick,
      guild: V
    }, "nick"), (0, a.jsx)(m.default, {
      sectionTitle: v.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: null == H ? void 0 : H.pronouns,
      onPronounsChange: e => {
        (0, x.setNewPendingGuildIdentityPronouns)(e, J)
      },
      pendingPronouns: G,
      currentPronouns: J
    }, "pronouns"), (0, a.jsxs)(M.default, {
      user: b,
      showOverlay: !z,
      children: [(0, a.jsx)(S.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [v.default.Messages.USER_SETTINGS_AVATAR, (0, a.jsx)(r.Tooltip, {
            text: v.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(N.default, {
              ...e,
              className: L.nitroWheel
            })
          })]
        }),
        showRemoveAvatarButton: Q,
        onAvatarChange: e => ee(e, null == W ? void 0 : W.avatar, A.setPendingAvatar),
        errors: null == H ? void 0 : H.avatar,
        guildId: V.id,
        disabled: !z
      }, "avatar"), $ ? (0, a.jsx)(c.default, {
        user: b,
        guild: V
      }, "decoration") : null, $ ? (0, a.jsx)(T.default, {
        user: b,
        guild: V
      }, "effect") : null, (0, a.jsx)(E.default, {
        showRemoveBannerButton: q,
        errors: null == H ? void 0 : H.banner,
        onBannerChange: e => ee(e, null == K ? void 0 : K.banner, A.setPendingBanner),
        guildId: null == V ? void 0 : V.id,
        disabled: !z
      }, "banner"), (0, a.jsx)(f.default, {
        user: b,
        pendingAvatar: U,
        pendingColors: k,
        onThemeColorsChange: e => {
          (0, x.setNewPendingGuildIdentityThemeColors)(e, null == K ? void 0 : K.themeColors)
        },
        guildId: null == V ? void 0 : V.id,
        showResetThemeButton: Z
      }), (0, a.jsx)(u.default, {
        placeholder: v.default.Messages.CHANGE_IDENTITY_BIO_PLACEHOLDER,
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [v.default.Messages.USER_PROFILE_ABOUT_ME, (0, a.jsx)(r.Tooltip, {
            text: v.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(N.default, {
              ...e,
              className: L.nitroWheel
            })
          })]
        }),
        onBioChange: e => {
          (0, x.setNewPendingGuildIdentityBio)(e, X), (0, A.setDisableSubmit)(null != e && e.length > D.BIO_MAX_LENGTH)
        },
        errors: null !== (P = null == H ? void 0 : H.bio) && void 0 !== P ? P : null == Y ? void 0 : Y.bio,
        pendingBio: F,
        currentBio: X,
        disabled: !z
      }, "about")]
    })]
  })
}