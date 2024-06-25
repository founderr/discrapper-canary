t.d(s, {
  Z: function() {
    return L
  }
});
var n = t(735250);
t(470079);
var i = t(512722),
  a = t.n(i),
  l = t(442837),
  r = t(481060),
  o = t(295474),
  c = t(150039),
  E = t(126631),
  d = t(433411),
  _ = t(532432),
  T = t(134795),
  S = t(513901),
  u = t(451392),
  I = t(906364),
  N = t(621853),
  A = t(271383),
  C = t(594174),
  O = t(74538),
  m = t(51144),
  h = t(18438),
  g = t(778825),
  R = t(52597),
  M = t(430131),
  x = t(133484),
  D = t(689938),
  p = t(469193);

function L(e) {
  var s, t, i, L;
  let {
    guild: P
  } = e, Z = (0, l.e7)([C.default], () => {
    let e = C.default.getCurrentUser();
    return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), {
    pendingAvatar: f,
    pendingNickname: v,
    pendingBanner: j,
    pendingBio: U,
    pendingPronouns: B,
    pendingThemeColors: b,
    errors: G,
    guild: F
  } = (0, l.cj)([g.Z], () => {
    let {
      pendingAvatar: e,
      pendingNickname: s,
      pendingBio: t,
      pendingPronouns: n,
      pendingBanner: i,
      pendingThemeColors: a
    } = g.Z.getAllPending();
    return {
      pendingAvatar: e,
      pendingNickname: s,
      pendingBanner: i,
      pendingBio: t,
      pendingPronouns: n,
      pendingThemeColors: a,
      errors: g.Z.getErrors(),
      guild: g.Z.getGuild()
    }
  }), V = null != P ? P : F;
  a()(null != V, "guild should not be null");
  let y = (0, o.gS)(V.id),
    Y = (0, l.e7)([A.ZP], () => null == V.id ? null : A.ZP.getMember(V.id, Z.id)),
    H = (0, l.e7)([N.Z], () => N.Z.getGuildMemberProfile(Z.id, V.id)),
    k = O.ZP.canUsePremiumProfileCustomization(Z),
    w = (0, c.gd)(f, null == Y ? void 0 : Y.avatar),
    W = (0, c.f$)(j, null == H ? void 0 : H.banner),
    K = (0, R.p)(b, null == H ? void 0 : H.themeColors),
    z = null !== (s = null == H ? void 0 : H.bio) && void 0 !== s ? s : "",
    Q = null !== (t = null == H ? void 0 : H.pronouns) && void 0 !== t ? t : "",
    X = (e, s, t) => {
      t(null != e ? e : null != s ? null : void 0)
    };
  return (0, n.jsxs)("div", {
    className: p.sectionsContainer,
    children: [(0, n.jsx)(M.Z, {
      errors: null !== (i = null == G ? void 0 : G.nick) && void 0 !== i ? i : null == y ? void 0 : y.nick,
      username: m.ZP.getName(Z),
      pendingNick: v,
      currentNick: null == Y ? void 0 : Y.nick,
      guild: V
    }, "nick"), (0, n.jsx)(I.Z, {
      sectionTitle: D.Z.Messages.USER_SETTINGS_PRONOUNS,
      errors: null == G ? void 0 : G.pronouns,
      onPronounsChange: e => {
        (0, R.xs)(e, Q)
      },
      pendingPronouns: B,
      currentPronouns: Q
    }, "pronouns"), (0, n.jsxs)(x.Z, {
      user: Z,
      showOverlay: !k,
      children: [(0, n.jsx)(_.Z, {
        sectionTitle: (0, n.jsxs)(n.Fragment, {
          children: [D.Z.Messages.USER_SETTINGS_AVATAR, (0, n.jsx)(r.Tooltip, {
            text: D.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, n.jsx)(r.NitroWheelIcon, {
              size: "md",
              color: "currentColor",
              ...e,
              className: p.nitroWheel
            })
          })]
        }),
        showRemoveAvatarButton: w,
        onAvatarChange: e => X(e, null == Y ? void 0 : Y.avatar, h.I5),
        errors: null == G ? void 0 : G.avatar,
        guildId: V.id,
        disabled: !k
      }, "avatar"), (0, n.jsx)(d.Z, {
        sectionTitle: (0, n.jsxs)(n.Fragment, {
          children: [D.Z.Messages.USER_SETTINGS_AVATAR_DECORATION, (0, n.jsx)(r.Tooltip, {
            text: D.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, n.jsx)(r.NitroWheelIcon, {
              size: "md",
              color: "currentColor",
              ...e,
              className: p.nitroWheel
            })
          })]
        }),
        user: Z,
        guild: V
      }, "decoration"), (0, n.jsx)(S.Z, {
        sectionTitle: (0, n.jsxs)(n.Fragment, {
          children: [D.Z.Messages.USER_SETTINGS_PROFILE_EFFECT, (0, n.jsx)(r.Tooltip, {
            text: D.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, n.jsx)(r.NitroWheelIcon, {
              size: "md",
              color: "currentColor",
              ...e,
              className: p.nitroWheel
            })
          })]
        }),
        user: Z,
        guild: V
      }, "effect"), (0, n.jsx)(T.Z, {
        showRemoveBannerButton: W,
        errors: null == G ? void 0 : G.banner,
        onBannerChange: e => X(e, null == H ? void 0 : H.banner, h.g_),
        guildId: null == V ? void 0 : V.id,
        disabled: !k
      }, "banner"), (0, n.jsx)(u.Z, {
        user: Z,
        pendingAvatar: f,
        pendingColors: b,
        onThemeColorsChange: e => {
          (0, R.ce)(e, null == H ? void 0 : H.themeColors)
        },
        guildId: null == V ? void 0 : V.id,
        showResetThemeButton: K
      }), (0, n.jsx)(E.Z, {
        placeholder: D.Z.Messages.CHANGE_IDENTITY_BIO_PLACEHOLDER,
        sectionTitle: (0, n.jsxs)(n.Fragment, {
          children: [D.Z.Messages.USER_PROFILE_ABOUT_ME, (0, n.jsx)(r.Tooltip, {
            text: D.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, n.jsx)(r.NitroWheelIcon, {
              size: "md",
              color: "currentColor",
              ...e,
              className: p.nitroWheel
            })
          })]
        }),
        onBioChange: e => (0, R.qN)(e, z),
        errors: null !== (L = null == G ? void 0 : G.bio) && void 0 !== L ? L : null == y ? void 0 : y.bio,
        pendingBio: U,
        currentBio: z,
        disabled: !k
      }, "about")]
    })]
  })
}