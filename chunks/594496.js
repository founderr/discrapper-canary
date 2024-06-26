t.d(s, {
  Z: function() {
    return f
  }
});
var n = t(735250);
t(470079);
var a = t(512722),
  i = t.n(a),
  r = t(442837),
  o = t(481060),
  l = t(295474),
  c = t(150039),
  d = t(126631),
  _ = t(433411),
  E = t(532432),
  u = t(134795),
  T = t(513901),
  S = t(451392),
  I = t(906364),
  N = t(621853),
  C = t(271383),
  A = t(594174),
  m = t(74538),
  O = t(51144),
  g = t(18438),
  h = t(778825),
  R = t(52597),
  p = t(430131),
  x = t(133484),
  M = t(689938),
  D = t(469193);

function f(e) {
  var s, t, a, f;
  let {
    guild: L
  } = e, P = (0, r.e7)([A.default], () => {
    let e = A.default.getCurrentUser();
    return i()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), {
    pendingAvatar: Z,
    pendingNickname: v,
    pendingBanner: b,
    pendingBio: j,
    pendingPronouns: U,
    pendingThemeColors: B,
    errors: G,
    guild: F
  } = (0, r.cj)([h.Z], () => {
    let {
      pendingAvatar: e,
      pendingNickname: s,
      pendingBio: t,
      pendingPronouns: n,
      pendingBanner: a,
      pendingThemeColors: i
    } = h.Z.getAllPending();
    return {
      pendingAvatar: e,
      pendingNickname: s,
      pendingBanner: a,
      pendingBio: t,
      pendingPronouns: n,
      pendingThemeColors: i,
      errors: h.Z.getErrors(),
      guild: h.Z.getGuild()
    }
  }), V = null != L ? L : F;
  i()(null != V, "guild should not be null");
  let y = (0, l.gS)(V.id),
    Y = (0, r.e7)([C.ZP], () => null == V.id ? null : C.ZP.getMember(V.id, P.id)),
    H = (0, r.e7)([N.Z], () => N.Z.getGuildMemberProfile(P.id, V.id)),
    k = m.ZP.canUsePremiumProfileCustomization(P),
    w = (0, c.gd)(Z, null == Y ? void 0 : Y.avatar),
    W = (0, c.f$)(b, null == H ? void 0 : H.banner),
    K = (0, R.p)(B, null == H ? void 0 : H.themeColors),
    z = null !== (s = null == H ? void 0 : H.bio) && void 0 !== s ? s : "",
    Q = null !== (t = null == H ? void 0 : H.pronouns) && void 0 !== t ? t : "",
    X = (e, s, t) => {
      t(null != e ? e : null != s ? null : void 0)
    };
  return (0, n.jsxs)("div", {
    className: D.sectionsContainer,
    children: [(0, n.jsx)(p.Z, {
      errors: null !== (a = null == G ? void 0 : G.nick) && void 0 !== a ? a : null == y ? void 0 : y.nick,
      username: O.ZP.getName(P),
      pendingNick: v,
      currentNick: null == Y ? void 0 : Y.nick,
      guild: V
    }, "nick"), (0, n.jsx)(I.Z, {
      sectionTitle: M.Z.Messages.USER_SETTINGS_PRONOUNS,
      errors: null == G ? void 0 : G.pronouns,
      onPronounsChange: e => {
        (0, R.xs)(e, Q)
      },
      pendingPronouns: U,
      currentPronouns: Q
    }, "pronouns"), (0, n.jsxs)(x.Z, {
      user: P,
      showOverlay: !k,
      children: [(0, n.jsx)(E.Z, {
        sectionTitle: (0, n.jsxs)(n.Fragment, {
          children: [M.Z.Messages.USER_SETTINGS_AVATAR, (0, n.jsx)(o.Tooltip, {
            text: M.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, n.jsx)(o.NitroWheelIcon, {
              size: "md",
              color: "currentColor",
              ...e,
              className: D.nitroWheel
            })
          })]
        }),
        showRemoveAvatarButton: w,
        onAvatarChange: e => X(e, null == Y ? void 0 : Y.avatar, g.I5),
        errors: null == G ? void 0 : G.avatar,
        guildId: V.id,
        disabled: !k
      }, "avatar"), (0, n.jsx)(_.Z, {
        sectionTitle: (0, n.jsxs)(n.Fragment, {
          children: [M.Z.Messages.USER_SETTINGS_AVATAR_DECORATION, (0, n.jsx)(o.Tooltip, {
            text: M.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, n.jsx)(o.NitroWheelIcon, {
              size: "md",
              color: "currentColor",
              ...e,
              className: D.nitroWheel
            })
          })]
        }),
        user: P,
        guild: V
      }, "decoration"), (0, n.jsx)(T.Z, {
        sectionTitle: (0, n.jsxs)(n.Fragment, {
          children: [M.Z.Messages.USER_SETTINGS_PROFILE_EFFECT, (0, n.jsx)(o.Tooltip, {
            text: M.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, n.jsx)(o.NitroWheelIcon, {
              size: "md",
              color: "currentColor",
              ...e,
              className: D.nitroWheel
            })
          })]
        }),
        user: P,
        guild: V
      }, "effect"), (0, n.jsx)(u.Z, {
        showRemoveBannerButton: W,
        errors: null == G ? void 0 : G.banner,
        onBannerChange: e => X(e, null == H ? void 0 : H.banner, g.g_),
        guildId: null == V ? void 0 : V.id,
        disabled: !k
      }, "banner"), (0, n.jsx)(S.Z, {
        user: P,
        pendingAvatar: Z,
        pendingColors: B,
        onThemeColorsChange: e => {
          (0, R.ce)(e, null == H ? void 0 : H.themeColors)
        },
        guildId: null == V ? void 0 : V.id,
        showResetThemeButton: K
      }), (0, n.jsx)(d.Z, {
        placeholder: M.Z.Messages.CHANGE_IDENTITY_BIO_PLACEHOLDER,
        sectionTitle: (0, n.jsxs)(n.Fragment, {
          children: [M.Z.Messages.USER_PROFILE_ABOUT_ME, (0, n.jsx)(o.Tooltip, {
            text: M.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, n.jsx)(o.NitroWheelIcon, {
              size: "md",
              color: "currentColor",
              ...e,
              className: D.nitroWheel
            })
          })]
        }),
        onBioChange: e => (0, R.qN)(e, z),
        errors: null !== (f = null == G ? void 0 : G.bio) && void 0 !== f ? f : null == y ? void 0 : y.bio,
        pendingBio: j,
        currentBio: z,
        disabled: !k
      }, "about")]
    })]
  })
}