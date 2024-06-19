n.d(t, {
  G: function() {
    return o
  },
  V: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  l = n(931240),
  a = n(308083),
  r = n(689938);

function o(e) {
  return [{
    index: a.Wy.GAMES,
    name: r.Z.Messages.CLAN_SETUP_GAMES_STEP,
    hasError: (null == e ? void 0 : e.gameApplicationIds) != null
  }, {
    index: a.Wy.PLAYSTYLE,
    name: r.Z.Messages.CLAN_SETUP_PLAYSTYLE_STEP,
    hasError: (null == e ? void 0 : e.playstyle) != null
  }, {
    index: a.Wy.UTILITY_TRAITS,
    name: r.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
  }, {
    index: a.Wy.INTERESTS,
    name: r.Z.Messages.CLAN_SETUP_INTERESTS_STEP,
    hasError: (null == e ? void 0 : e.interests) != null
  }, {
    index: a.Wy.DESCRIPTION,
    name: r.Z.Messages.CLAN_SETUP_DESCRIPTION_STEP,
    hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
  }, {
    index: a.Wy.CUSTOMIZE_TAG_BADGE,
    name: r.Z.Messages.CLAN_SETUP_TAG_STEP,
    hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
  }, {
    index: a.Wy.CUSTOMIZE_BANNER,
    name: r.Z.Messages.CLAN_SETUP_BANNER_STEP,
    hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
  }, {
    index: a.Wy.MEMBER_APPLICATION,
    name: r.Z.Messages.CLAN_SETUP_APPLICATIONS_STEP,
    hasError: (null == e ? void 0 : e.verificationForm) != null
  }]
}
async function c(e) {
  let {
    guildId: t,
    onSuccess: a,
    progress: r
  } = e;
  try {
    await l.sv(t, r)
  } catch (e) {
    return
  }
  a(), (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("63636")]).then(n.bind(n, 511385));
    return n => (0, i.jsx)(e, {
      guildId: t,
      tag: r.tag,
      brandPrimaryColor: r.brandPrimaryColor,
      ...n
    })
  })
}