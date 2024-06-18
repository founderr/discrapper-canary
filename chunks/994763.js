"use strict";
t.r(s), t.d(s, {
  default: function() {
    return eQ
  },
  getGuildSettingsSections: function() {
    return ez
  }
});
var n = t(735250),
  i = t(470079),
  l = t(990547),
  a = t(442837),
  r = t(704215),
  o = t(481060),
  c = t(37234),
  d = t(503089),
  u = t(493544),
  E = t(100527),
  _ = t(367907),
  I = t(906732),
  T = t(132871),
  N = t(147890),
  m = t(353093),
  S = t(593128),
  h = t(979264),
  g = t(223892),
  C = t(738774),
  x = t(296386),
  R = t(605236),
  L = t(688465),
  O = t(826292),
  A = t(404228),
  p = t(676317),
  M = t(874993),
  f = t(745752),
  D = t(45966),
  v = t(637853),
  j = t(526120),
  Z = t(621923),
  U = t(352981),
  G = t(610403),
  P = t(923726),
  b = t(144507),
  B = t(303737),
  y = t(15030),
  F = t(220685),
  k = t(751189),
  H = t(409059),
  w = t(810788),
  V = t(918658),
  Y = t(210887),
  W = t(524329),
  z = t(575258),
  K = t(995532),
  q = t(276687),
  X = t(984933),
  Q = t(650774),
  J = t(496675),
  $ = t(594174),
  ee = t(725568),
  es = t(585483),
  et = t(771212),
  en = t(85001),
  ei = t(434404),
  el = t(146596),
  ea = t(559368),
  er = t(360606),
  eo = t(946724),
  ec = t(999382),
  ed = t(44550),
  eu = t(853714),
  eE = t(359191),
  e_ = t(84658),
  eI = t(142961),
  eT = t(730910),
  eN = t(475013),
  em = t(213956),
  eS = t(702478),
  eh = t(247031),
  eg = t(787561),
  eC = t(579648),
  ex = t(511480),
  eR = t(460461),
  eL = t(29605),
  eO = t(365307),
  eA = t(497666),
  ep = t(324330),
  eM = t(495300),
  ef = t(312397),
  eD = t(651780),
  ev = t(279542),
  ej = t(413335),
  eZ = t(665324),
  eU = t(208150),
  eG = t(353398),
  eP = t(365774),
  eb = t(803288),
  eB = t(804153),
  ey = t(981631),
  eF = t(308083),
  ek = t(190378),
  eH = t(135899),
  ew = t(689938),
  eV = t(37869);

function eY(e) {
  return "" !== e.toString() ? e.toString() : ew.Z.Messages.SERVER_SETTINGS
}

function eW(e) {
  var s;
  let {
    guild: i,
    canManageGuild: a,
    canViewAuditLog: d,
    canViewAuditLogV2: E,
    canManageRoles: _,
    canManageGuildExpressions: I,
    canManageWebhooks: x,
    canManageBans: O,
    canAccessMembersPage: f,
    canViewGuildAnalytics: j,
    isOwner: k,
    isOwnerWithRequiredMfaLevel: H,
    showDirtyGuildTemplateIndicator: V,
    memberCount: Y,
    isGuildAuditLogV2Enabled: W,
    showAccessRate: K,
    onboardingStep: X,
    onboardingEnabled: Q,
    welcomeScreenEmpty: J,
    guildMetadata: et,
    section: el,
    canAccessClanSettings: ea
  } = e, eW = () => (0, b.X$)({
    guild: i,
    isOwner: k,
    canManageGuildRoleSubscriptions: (0, b.H2)(i),
    isMonetizationWaitlistEnabledForGuild: (0, g.mG)(i.id),
    isGuildEligibleForRoleSubscriptions: (0, P.kT)(i.id),
    isExpeditedMonetizationOnboardingGuild: (0, g.Rw)(i),
    isUserInCreatorMonetizationEligibleCountry: (0, g.DB)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, C.cu)(i.id)
  }), ez = (0, U.p)(i.id, "guild_settings"), eK = !1 === i.hasFeature(ey.oNc.CREATOR_MONETIZABLE) && !1 === i.hasFeature(ey.oNc.CREATOR_MONETIZABLE_PROVISIONAL), eq = ez && eK ? {
    label: (0, n.jsx)("div", {
      className: eV.roleSubLabel,
      children: ew.Z.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
    }),
    ariaLabel: ew.Z.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
  } : {
    label: (0, n.jsx)("div", {
      className: eV.roleSubLabel,
      children: ew.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
    }),
    ariaLabel: ew.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
  }, eX = (null === (s = i.clan) || void 0 === s ? void 0 : s.badge) != null ? (0, m.ky)(i.id, i.clan.badge, eF.NC.SIZE_16) : null;
  return [{
    section: u.ID.HEADER,
    label: eY(i)
  }, {
    section: ey.pNK.OVERVIEW,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
    label: ew.Z.Messages.OVERVIEW,
    ariaLabel: ew.Z.Messages.OVERVIEW,
    element: ef.Z,
    notice: {
      stores: [ec.Z],
      element: ef.O
    }
  }, {
    section: ey.pNK.ROLES,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_ROLES,
    label: ew.Z.Messages.ROLES,
    element: eN.Z,
    type: u.bT.MINIMAL,
    ariaLabel: ew.Z.Messages.GUILD_SETTINGS_ROLE_ICON_SIDEBAR_NEW_ARIA_LABEL,
    notice: {
      stores: [eo.Z],
      element: eN._
    },
    predicate: () => _
  }, {
    section: ey.pNK.EMOJI,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_EMOJI,
    label: ew.Z.Messages.EMOJI,
    element: eL.ZP,
    predicate: () => I
  }, {
    section: ey.pNK.STICKERS,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_STICKERS,
    label: ew.Z.Messages.GUILD_SETTINGS_STICKERS,
    ariaLabel: ew.Z.Messages.GUILD_SETTINGS_STICKERS,
    element: eU.Z,
    predicate: () => I
  }, {
    section: ey.pNK.SOUNDBOARD,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
    label: ew.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
    ariaLabel: ew.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
    element: eZ.Z,
    predicate: () => I
  }, {
    section: ey.pNK.WIDGET,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_WIDGET,
    label: ew.Z.Messages.WIDGET,
    element: eB.Z,
    predicate: () => a
  }, {
    section: ey.pNK.GUILD_TEMPLATES,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
    label: (0, n.jsx)(eP.Z, {
      showDirtyIndicator: V
    }),
    ariaLabel: ew.Z.Messages.GUILD_TEMPLATES,
    element: eG.ZP,
    notice: {
      stores: [eG.Sf],
      element: eG.Q5
    },
    predicate: () => a
  }, {
    section: ey.pNK.VANITY_URL,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
    label: ew.Z.Messages.VANITY_URL,
    element: eb.Z,
    notice: {
      stores: [ed.Z],
      element: eb.T
    },
    predicate: () => a
  }, {
    section: u.ID.DIVIDER,
    predicate: () => a || x
  }, {
    section: u.ID.HEADER,
    label: ew.Z.Messages.APPS,
    predicate: () => a || x
  }, {
    section: ey.pNK.INTEGRATIONS,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
    label: ew.Z.Messages.INTEGRATIONS,
    ariaLabel: ew.Z.Messages.INTEGRATIONS,
    element: eO.Z,
    notice: {
      stores: [er.Z, ec.Z],
      element: eO.j
    },
    predicate: () => a || x
  }, {
    section: ey.pNK.APP_DIRECTORY,
    label: ew.Z.Messages.APP_DIRECTORY,
    ariaLabel: ew.Z.Messages.APP_DIRECTORY,
    onClick() {
      (0, N.goToAppDirectory)({
        guildId: i.id,
        entrypoint: {
          name: T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
          guildSettingsSection: el
        }
      }), (0, c.xf)()
    }
  }, {
    section: u.ID.DIVIDER,
    predicate: () => a
  }, {
    section: u.ID.HEADER,
    label: ew.Z.Messages.MODERATION,
    predicate: () => a
  }, {
    section: ey.pNK.SAFETY,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_SAFETY,
    label: ew.Z.Messages.SAFETY_SETUP,
    ariaLabel: ew.Z.Messages.SAFETY_SETUP,
    element: em.Z,
    newIndicatorDismissibleContentTypes: [r.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
    predicate: () => a && i.hasFeature(ey.oNc.COMMUNITY)
  }, {
    section: ey.pNK.MODERATION,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_MODERATION,
    label: ew.Z.Messages.SAFETY_SETUP,
    element: ev.ZP,
    predicate: () => a && !i.hasFeature(ey.oNc.COMMUNITY)
  }, {
    section: ey.pNK.GUILD_AUTOMOD,
    label: (0, n.jsx)("div", {
      className: eV.landingPageTabLink,
      children: ew.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE
    }),
    ariaLabel: ew.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
    element: M.Z,
    newIndicatorDismissibleContentTypes: null,
    predicate: () => !i.hasFeature(ey.oNc.COMMUNITY) && ((0, p.Nb)(i.id) || (0, p.ze)(i.id))
  }, {
    section: ey.pNK.AUDIT_LOG,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
    label: ew.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
    element: eu.Z,
    type: u.bT.CUSTOM,
    predicate: () => d
  }, {
    section: ey.pNK.AUDIT_LOG_V2,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG_V2,
    label: ew.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
    element: A.Z,
    type: u.bT.CUSTOM,
    predicate: () => E && W
  }, {
    section: ey.pNK.BANS,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_BANS,
    label: ew.Z.Messages.BANS,
    element: eh.Z,
    predicate: () => O
  }, {
    section: u.ID.DIVIDER,
    predicate: () => a || j
  }, {
    section: u.ID.HEADER,
    label: ew.Z.Messages.COMMUNITY,
    predicate: () => !ea && (a || j)
  }, {
    section: ey.pNK.CLAN,
    label: ew.Z.Messages.CLAN_SETTINGS,
    ariaLabel: ew.Z.Messages.CLAN_SETTINGS,
    onClick() {
      (0, ee.q4)(e => {
        let {
          closeLayer: s
        } = e;
        return (0, n.jsx)(S.Z, {
          onClose: s,
          guildId: i.id
        })
      }, {
        layerKey: eF.q2
      }), (0, c.xf)()
    },
    predicate: () => null != ea && ea,
    icon: null != eX ? (0, n.jsx)(h.KQ, {
      src: eX
    }) : null
  }, {
    section: ey.pNK.COMMUNITY,
    impressionName: i.hasFeature(ey.oNc.COMMUNITY) ? l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : l.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
    label: i.hasFeature(ey.oNc.COMMUNITY) ? ew.Z.Messages.OVERVIEW : ew.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
    element: eg.Z,
    ariaLabel: i.hasFeature(ey.oNc.COMMUNITY) ? ew.Z.Messages.OVERVIEW : ew.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
    newIndicator: !i.hasFeature(ey.oNc.COMMUNITY) && null != Y && Y >= eH.U3 && w.Z.hasHotspot(ek.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
    notice: {
      stores: [ec.Z],
      element: eg.X
    },
    predicate: () => a
  }, {
    section: ey.pNK.ONBOARDING,
    label: ew.Z.Messages.ONBOARDING,
    element: eM.Z,
    ariaLabel: ew.Z.Messages.ONBOARDING,
    newIndicatorDismissibleContentTypes: Q ? null : [r.z.COMMUNITY_ONBOARDING_NEW_BADGE],
    notice: {
      stores: [eE.Z],
      element: eT.Z
    },
    predicate: () => (0, v.wC)(i.id),
    decoration: function(e, s) {
      let {
        homeSettingsEnabled: t
      } = (0, Z.l6)(e);
      if (D.Z.getEnabled(e)) return ew.Z.Messages.GUILD_ONBOARDING_ON.toUpperCase();
      if ((0, eI.C)(e)) return ew.Z.Messages.GUILD_ONBOARDING_OFF.toUpperCase();
      let n = e_.ug.filter(e => !!t || e !== e_.PG.HOME_SETTINGS || !1),
        i = n.findIndex(e => e === s);
      if (-1 !== i) return ew.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_COUNTER.format({
        count: i + 1,
        total: n.length
      })
    }(i.id, X)
  }, {
    section: ey.pNK.ANALYTICS,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
    label: ew.Z.Messages.SERVER_INSIGHTS,
    ariaLabel: ew.Z.Messages.SERVER_INSIGHTS,
    element: eS.Z,
    newIndicator: w.Z.hasHotspot(ek.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
    newIndicatorDismissibleContentTypes: K ? [r.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
    predicate: () => j && i.hasFeature(ey.oNc.COMMUNITY)
  }, {
    section: ey.pNK.DISCOVERY,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
    label: ew.Z.Messages.DISCOVERY,
    element: ex.Z,
    notice: {
      stores: [ec.Z],
      element: ex.s
    },
    predicate: () => a && i.hasFeature(ey.oNc.COMMUNITY),
    ariaLabel: i.hasFeature(ey.oNc.DISCOVERABLE) ? ew.Z.Messages.DISCOVERY : ew.Z.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
  }, {
    section: ey.pNK.DISCOVERY_LANDING_PAGE,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
    label: (0, n.jsxs)("div", {
      className: eV.landingPageTabLink,
      children: [ew.Z.Messages.DISCOVERY_LANDING_PAGE, " ", (0, n.jsx)(L.Z, {})]
    }),
    ariaLabel: ew.Z.Messages.DISCOVERY_LANDING_PAGE,
    element: eR.Z,
    notice: {
      stores: [ec.Z],
      element: eR.J
    },
    type: u.bT.CUSTOM,
    predicate: () => a && (i.hasFeature(ey.oNc.DISCOVERABLE) || !!(null == et ? void 0 : et.isPublished))
  }, {
    section: ey.pNK.COMMUNITY_WELCOME,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
    label: ew.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    ariaLabel: ew.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    element: eC.Z,
    notice: {
      stores: [z.Z],
      element: q.Z
    },
    predicate: () => a && i.hasFeature(ey.oNc.COMMUNITY) && !J && !i.hasFeature(ey.oNc.GUILD_SERVER_GUIDE)
  }, {
    section: u.ID.DIVIDER,
    predicate: eW
  }, {
    section: u.ID.HEADER,
    label: ew.Z.Messages.MONETIZATION,
    predicate: eW
  }, {
    ...eq,
    section: ey.pNK.ROLE_SUBSCRIPTIONS,
    element: y.Z,
    type: u.bT.CUSTOM,
    predicate: eW,
    newIndicatorDismissibleContentTypes: (0, B.sO)(i) ? [r.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
  }, {
    section: ey.pNK.GUILD_PRODUCTS,
    label: ew.Z.Messages.GUILD_PRODUCTS_TITLE,
    ariaLabel: ew.Z.Messages.GUILD_PRODUCTS_TITLE,
    element: G.Z,
    predicate: () => eW() && (0, U.p)(i.id, "guild_product_settings_predicate") && (0, P.sy)(i)
  }, {
    section: ey.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
    impressionName: l.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
    newIndicator: 2022 === new Date().getFullYear(),
    label: ew.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
    ariaLabel: ew.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
    element: F.Z,
    predicate: () => eW() && (0, P.sy)(i)
  }, {
    section: u.ID.DIVIDER
  }, {
    section: ey.pNK.GUILD_PREMIUM,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
    label: ew.Z.Messages.GUILD_PREMIUM,
    ariaLabel: ew.Z.Messages.GUILD_PREMIUM,
    element: eD.Z,
    className: eV.serverBoostTabItem,
    icon: (0, n.jsx)(ej.Z, {
      className: eV.icon
    })
  }, {
    section: u.ID.DIVIDER
  }, {
    section: u.ID.HEADER,
    label: ew.Z.Messages.USER_MANAGEMENT
  }, {
    section: ey.pNK.MEMBERS,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_MEMBERS,
    label: (0, n.jsx)(ep.$, {}),
    ariaLabel: ew.Z.Messages.MEMBERS,
    element: ep.Z,
    type: u.bT.CUSTOM,
    predicate: () => f
  }, {
    section: ey.pNK.INSTANT_INVITES,
    impressionName: l.ImpressionNames.GUILD_SETTINGS_INVITES,
    label: ew.Z.Messages.INVITES,
    element: eA.Z,
    type: u.bT.CUSTOM,
    predicate: () => a
  }, {
    section: u.ID.DIVIDER,
    predicate: () => H
  }, {
    section: ey.pNK.DELETE,
    onClick() {
      let e = $.default.getCurrentUser();
      if (null == e) return;
      let s = i.toString(),
        l = {
          header: ew.Z.Messages.DELETE_SERVER_TITLE.format({
            name: s
          }),
          confirmText: ew.Z.Messages.DELETE_SERVER,
          cancelText: ew.Z.Messages.CANCEL,
          onConfirm: () => {
            es.S.subscribeOnce(ey.CkL.LAYER_POP_COMPLETE, () => {
              ei.Z.deleteGuild(i.id, s).then(() => {
                if ((0, R.un)(r.z.GUILD_DELETE_FEEDBACK)) return;
                en.Z.trackExposure({
                  location: "e4be39_1"
                });
                let {
                  showFeedback: e
                } = en.Z.getCurrentConfig({
                  location: "e4be39_2"
                }, {
                  autoTrackExposure: !1
                });
                e && (0, o.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([t.e("49237"), t.e("99387"), t.e("7685")]).then(t.bind(t, 945903));
                  return s => (0, n.jsx)(e, {
                    ...s,
                    guildId: i.id
                  })
                })
              })
            }), (0, c.xf)()
          }
        };
      e.mfaEnabled ? (0, o.openModal)(e => (0, n.jsx)(o.ConfirmModal, {
        ...e,
        ...l,
        children: (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          children: ew.Z.Messages.DELETE_SERVER_BODY.format({
            name: s
          })
        })
      })) : (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("18259")]).then(t.bind(t, 1493));
        return t => (0, n.jsx)(e, {
          ...t,
          ...l,
          validationText: s,
          instructionText: ew.Z.Messages.DELETE_SERVER_ENTER_NAME,
          errorText: ew.Z.Messages.DELETE_SERVER_INCORRECT_NAME,
          children: ew.Z.Messages.DELETE_SERVER_BODY.format({
            name: s
          })
        })
      })
    },
    label: ew.Z.Messages.DELETE_SERVER,
    ariaLabel: ew.Z.Messages.DELETE_SERVER,
    icon: (0, n.jsx)(o.TrashIcon, {
      size: "xs",
      color: "currentColor"
    }),
    predicate: () => H
  }]
}

function ez(e, s) {
  let t = J.Z.getGuildPermissionProps(e);
  return eW({
    channels: s,
    showDirtyGuildTemplateIndicator: !1,
    ...t,
    isGuildAuditLogV2Enabled: !1,
    showAccessRate: !1,
    canAccessClanSettings: t.isGuildAdmin && e.hasFeature(ey.oNc.CLAN)
  }).filter(e => {
    let {
      section: s
    } = e;
    return s !== u.ID.HEADER && s !== u.ID.DIVIDER
  }).filter(e => null == e.predicate || e.predicate())
}

function eK(e) {
  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    t = arguments.length > 2 ? arguments[2] : void 0;
  _.ZP.trackWithMetadata(ey.rMx.SETTINGS_PANE_VIEWED, {
    settings_type: "guild",
    origin_pane: s,
    destination_pane: e,
    location: t
  })
}
let eq = {
  canManageGuild: !1,
  canManageChannels: !1,
  canManageRoles: !1,
  canManageBans: !1,
  canManageNicknames: !1,
  canManageGuildExpressions: !1,
  canViewAuditLog: !1,
  canViewAuditLogV2: !1,
  canManageWebhooks: !1,
  canAccessMembersPage: !1,
  canViewGuildAnalytics: !1,
  isOwner: !1,
  isOwnerWithRequiredMfaLevel: !1,
  isGuildAdmin: !1
};
class eX extends i.PureComponent {
  componentDidMount() {
    eK(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    ei.Z.close()
  }
  componentDidUpdate(e) {
    let {
      section: s
    } = e, {
      section: t,
      canManageGuild: n,
      canManageRoles: i,
      canManageBans: l,
      canManageNicknames: a,
      canManageGuildExpressions: r,
      canViewAuditLog: o,
      canViewAuditLogV2: d,
      canManageWebhooks: u,
      canAccessMembersPage: E,
      canViewGuildAnalytics: _
    } = this.props;
    t !== s && eK(t, s), (!n && !i && !l && !a && !r && !o && !d && !E && !u || !o && t === ey.pNK.AUDIT_LOG || !d && t === ey.pNK.AUDIT_LOG_V2 || !i && t === ey.pNK.ROLES || !r && t === ey.pNK.EMOJI || !r && t === ey.pNK.STICKERS || !r && t === ey.pNK.SOUNDBOARD || !l && t === ey.pNK.BANS || !_ && t === ey.pNK.ANALYTICS || !E && t === ey.pNK.MEMBERS) && (0, c.xf)()
  }
  render() {
    var e, s;
    let {
      theme: t,
      sidebarTheme: i,
      section: l,
      guild: a,
      channels: r,
      canManageGuild: o,
      canViewAuditLog: u,
      canViewAuditLogV2: E,
      canManageRoles: _,
      canManageGuildExpressions: I,
      canManageWebhooks: T,
      canManageBans: N,
      canAccessMembersPage: m,
      canViewGuildAnalytics: S,
      isOwner: h,
      isOwnerWithRequiredMfaLevel: g,
      showDirtyGuildTemplateIndicator: C,
      memberCount: x,
      isGuildAuditLogV2Enabled: R,
      showAccessRate: L,
      onboardingStep: O,
      onboardingEnabled: A,
      welcomeScreenEmpty: p,
      guildMetadata: M,
      canAccessClanSettings: f
    } = this.props;
    if (null == a) return null;
    let D = eW({
        guild: a,
        channels: r,
        canManageGuild: o,
        canViewAuditLog: u,
        canViewAuditLogV2: E,
        canManageRoles: _,
        canManageGuildExpressions: I,
        canManageWebhooks: T,
        canManageBans: N,
        canAccessMembersPage: m,
        canViewGuildAnalytics: S,
        isOwner: h,
        isOwnerWithRequiredMfaLevel: g,
        showDirtyGuildTemplateIndicator: C,
        memberCount: x,
        isGuildAuditLogV2Enabled: R,
        showAccessRate: L,
        onboardingStep: O,
        onboardingEnabled: A,
        welcomeScreenEmpty: p,
        guildMetadata: M,
        section: l,
        canAccessClanSettings: f
      }),
      v = (null === (s = D.find(e => e.section === l)) || void 0 === s ? void 0 : null === (e = s.predicate) || void 0 === e ? void 0 : e.call(s)) !== !1;
    return (0, n.jsxs)("div", {
      children: [(0, n.jsx)(d.ZP, {
        theme: t,
        sidebarTheme: i,
        section: v && null != l ? l : ey.pNK.OVERVIEW,
        onSetSection: ei.Z.setSection,
        onClose: c.xf,
        title: eY(a),
        sections: D
      }), (0, n.jsx)(V.d, {
        guildId: a.id
      })]
    })
  }
}

function eQ() {
  var e, s;
  let {
    guild: t,
    section: l,
    analyticsLocation: r,
    guildMetadata: o,
    isGuildMetadataLoaded: c
  } = (0, a.cj)([ec.Z], () => ec.Z.getProps()), {
    analyticsLocations: d
  } = (0, I.ZP)(E.Z.GUILD_SETTINGS), u = (0, a.e7)([Y.Z], () => Y.Z.theme), _ = (0, a.e7)([Y.Z], () => Y.Z.darkSidebar ? ey.BRd.DARK : void 0), T = (0, a.e7)([X.ZP], () => null != t ? X.ZP.getChannels(t.id).SELECTABLE : null, [t]), N = (0, a.cj)([J.Z], () => null != t ? J.Z.getGuildPermissionProps(t) : eq), m = null == t ? void 0 : t.id, S = (0, a.e7)([J.Z], () => null != t && J.Z.canAccessGuildSettings(t)), h = null != t && (0, et.Fv)(t.id), g = h || S, C = h || N.canViewGuildAnalytics, {
    shouldFetchMemberInsights: R,
    hasAccessRate: L
  } = (0, a.cj)([ea.Z], () => ({
    shouldFetchMemberInsights: null != t && ea.Z.shouldFetchMemberInsights(t.id),
    hasAccessRate: null != t && ea.Z.getMemberInsights(t.id).hasAccessRate
  }));
  i.useEffect(() => {
    !c && null != m && (0, x.aC)(m)
  }, [c, m]), i.useEffect(() => {
    g && C && R && null != m && (0, el.r2)(m)
  }, [g, C, R, m]);
  let A = null !== (e = null == t ? void 0 : t.hasFeature(ey.oNc.COMMUNITY)) && void 0 !== e && e;
  i.useEffect(() => {
    null != m && A && ((0, f.eM)(m), (0, W.RM)(m))
  }, [m, A]);
  let {
    homeSettingsEnabled: p
  } = (0, Z.kZ)(null != m ? m : ey.lds);
  i.useEffect(() => {
    null != m && p && (0, j.cP)(m)
  }, [p, m]);
  let {
    showAccessRate: M
  } = (0, et.eA)(null == t ? void 0 : t.id, !L || !C || !g), v = N.isGuildAdmin && (null == t ? void 0 : t.hasFeature(ey.oNc.CLAN)), U = (0, a.e7)([H.Z], () => {
    var e;
    return (null == t ? void 0 : t.id) != null && (null === (e = H.Z.getForGuild(t.id)) || void 0 === e ? void 0 : e.isDirty) === !0
  }, [t]), G = (0, a.e7)([Q.Z], () => Q.Z.getMemberCount(null == t ? void 0 : t.id), [t]), P = (0, O.pU)(null !== (s = null == t ? void 0 : t.id) && void 0 !== s ? s : ey.lds);
  i.useEffect(() => {
    null != m && N.canManageGuild && k.Z.loadTemplatesForGuild(m)
  }, [m, N.canManageGuild]), i.useEffect(() => {
    !g && ei.Z.close()
  }, [g]);
  let b = (0, a.e7)([eE.Z], () => eE.Z.getCurrentPage()),
    B = (0, a.e7)([D.Z], () => null != m && D.Z.getEnabled(m)),
    y = (0, a.e7)([K.Z], () => null != m && K.Z.isEmpty(m));
  return (0, n.jsx)(I.Gt, {
    value: d,
    children: (0, n.jsx)(eX, {
      guild: t,
      section: l,
      theme: u,
      sidebarTheme: _,
      channels: T,
      showDirtyGuildTemplateIndicator: U,
      analyticsLocation: r,
      memberCount: G,
      isGuildAuditLogV2Enabled: P,
      ...N,
      canViewGuildAnalytics: C,
      showAccessRate: M,
      onboardingStep: b,
      onboardingEnabled: B,
      welcomeScreenEmpty: y,
      guildMetadata: o,
      canAccessClanSettings: v
    })
  })
}