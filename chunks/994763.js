"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eJ
  },
  getGuildSettingsSections: function() {
    return eK
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("990547"),
  i = s("442837"),
  r = s("524437"),
  o = s("481060"),
  d = s("37234"),
  u = s("503089"),
  c = s("493544"),
  E = s("100527"),
  _ = s("367907"),
  I = s("906732"),
  T = s("132871"),
  S = s("147890"),
  f = s("963202"),
  m = s("593128"),
  N = s("223892"),
  g = s("738774"),
  h = s("296386"),
  C = s("605236"),
  R = s("688465"),
  x = s("826292"),
  L = s("404228"),
  O = s("676317"),
  A = s("874993"),
  p = s("745752"),
  M = s("45966"),
  D = s("637853"),
  v = s("526120"),
  G = s("621923"),
  j = s("352981"),
  U = s("610403"),
  P = s("923726"),
  b = s("144507"),
  B = s("303737"),
  y = s("15030"),
  F = s("220685"),
  H = s("751189"),
  k = s("409059"),
  w = s("810788"),
  V = s("918658"),
  Y = s("210887"),
  W = s("524329"),
  z = s("575258"),
  K = s("995532"),
  Z = s("276687"),
  X = s("984933"),
  Q = s("650774"),
  J = s("496675"),
  q = s("594174"),
  $ = s("740727"),
  ee = s("725568"),
  et = s("585483"),
  es = s("771212"),
  ea = s("85001"),
  el = s("434404"),
  en = s("146596"),
  ei = s("559368"),
  er = s("360606"),
  eo = s("946724"),
  ed = s("999382"),
  eu = s("44550"),
  ec = s("853714"),
  eE = s("359191"),
  e_ = s("84658"),
  eI = s("142961"),
  eT = s("730910"),
  eS = s("475013"),
  ef = s("213956"),
  em = s("702478"),
  eN = s("247031"),
  eg = s("787561"),
  eh = s("579648"),
  eC = s("511480"),
  eR = s("460461"),
  ex = s("29605"),
  eL = s("365307"),
  eO = s("497666"),
  eA = s("324330"),
  ep = s("495300"),
  eM = s("312397"),
  eD = s("651780"),
  ev = s("279542"),
  eG = s("413335"),
  ej = s("665324"),
  eU = s("208150"),
  eP = s("353398"),
  eb = s("365774"),
  eB = s("803288"),
  ey = s("804153"),
  eF = s("981631"),
  eH = s("308083"),
  ek = s("190378"),
  ew = s("135899"),
  eV = s("689938"),
  eY = s("354104");

function eW(e) {
  return "" !== e.toString() ? e.toString() : eV.default.Messages.SERVER_SETTINGS
}

function ez(e) {
  let {
    guild: t,
    canManageGuild: l,
    canViewAuditLog: i,
    canViewAuditLogV2: u,
    canManageRoles: E,
    canManageGuildExpressions: _,
    canManageWebhooks: I,
    canManageBans: f,
    canAccessMembersPage: h,
    canViewGuildAnalytics: x,
    isOwner: p,
    isOwnerWithRequiredMfaLevel: v,
    showDirtyGuildTemplateIndicator: H,
    memberCount: k,
    isGuildAuditLogV2Enabled: V,
    showAccessRate: Y,
    onboardingStep: W,
    onboardingEnabled: K,
    welcomeScreenEmpty: X,
    guildMetadata: Q,
    section: J,
    canAccessClanSettings: es
  } = e, en = () => (0, b.canSeeGuildRoleSubscriptionSettings)({
    guild: t,
    isOwner: p,
    canManageGuildRoleSubscriptions: (0, b.canManageGuildRoleSubscriptions)(t),
    isMonetizationWaitlistEnabledForGuild: (0, N.isMonetizationWaitlistEnabledForGuild)(t.id),
    isGuildEligibleForRoleSubscriptions: (0, P.isGuildEligibleForRoleSubscriptions)(t.id),
    isExpeditedMonetizationOnboardingGuild: (0, N.isExpeditedMonetizationOnboardingGuild)(t),
    isUserInCreatorMonetizationEligibleCountry: (0, N.isUserInCreatorMonetizationEligibleCountry)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, g.shouldRestrictUpdatingCreatorMonetizationSettings)(t.id)
  }), ei = (0, j.isGuildEligibleForGuildProducts)(t.id, "guild_settings"), ez = !1 === t.hasFeature(eF.GuildFeatures.CREATOR_MONETIZABLE) && !1 === t.hasFeature(eF.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL), eK = ei && ez ? {
    label: (0, a.jsx)("div", {
      className: eY.roleSubLabel,
      children: eV.default.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
    }),
    ariaLabel: eV.default.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
  } : {
    label: (0, a.jsx)("div", {
      className: eY.roleSubLabel,
      children: eV.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
    }),
    ariaLabel: eV.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
  };
  return [{
    section: c.SectionTypes.HEADER,
    label: eW(t)
  }, {
    section: eF.GuildSettingsSections.OVERVIEW,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
    label: eV.default.Messages.OVERVIEW,
    ariaLabel: eV.default.Messages.OVERVIEW,
    element: eM.default,
    notice: {
      stores: [ed.default],
      element: eM.GuildSettingsOverviewNotice
    }
  }, {
    section: eF.GuildSettingsSections.ROLES,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_ROLES,
    label: eV.default.Messages.ROLES,
    element: eS.default,
    type: c.ContentTypes.MINIMAL,
    ariaLabel: eV.default.Messages.GUILD_SETTINGS_ROLE_ICON_SIDEBAR_NEW_ARIA_LABEL,
    notice: {
      stores: [eo.default],
      element: eS.GuildSettingsRolesNotice
    },
    predicate: () => E
  }, {
    section: eF.GuildSettingsSections.EMOJI,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_EMOJI,
    label: eV.default.Messages.EMOJI,
    element: ex.default,
    predicate: () => _
  }, {
    section: eF.GuildSettingsSections.STICKERS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_STICKERS,
    label: eV.default.Messages.GUILD_SETTINGS_STICKERS,
    ariaLabel: eV.default.Messages.GUILD_SETTINGS_STICKERS,
    element: eU.default,
    predicate: () => _
  }, {
    section: eF.GuildSettingsSections.SOUNDBOARD,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
    label: eV.default.Messages.GUILD_SETTINGS_SOUNDBOARD,
    ariaLabel: eV.default.Messages.GUILD_SETTINGS_SOUNDBOARD,
    element: ej.default,
    predicate: () => _
  }, {
    section: eF.GuildSettingsSections.WIDGET,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_WIDGET,
    label: eV.default.Messages.WIDGET,
    element: ey.default,
    predicate: () => l
  }, {
    section: eF.GuildSettingsSections.GUILD_TEMPLATES,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
    label: (0, a.jsx)(eb.default, {
      showDirtyIndicator: H
    }),
    ariaLabel: eV.default.Messages.GUILD_TEMPLATES,
    element: eP.default,
    notice: {
      stores: [eP.GuildSettingsTemplateMetadataStore],
      element: eP.GuildSettingsTemplateNotice
    },
    predicate: () => l
  }, {
    section: eF.GuildSettingsSections.VANITY_URL,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
    label: eV.default.Messages.VANITY_URL,
    element: eB.default,
    notice: {
      stores: [eu.default],
      element: eB.GuildSettingsVanityURLNotice
    },
    predicate: () => l
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => l || I
  }, {
    section: c.SectionTypes.HEADER,
    label: eV.default.Messages.APPS,
    predicate: () => l || I
  }, {
    section: eF.GuildSettingsSections.INTEGRATIONS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
    label: eV.default.Messages.INTEGRATIONS,
    ariaLabel: eV.default.Messages.INTEGRATIONS,
    element: eL.default,
    notice: {
      stores: [er.default, ed.default],
      element: eL.GuildSettingsIntegrationsNotice
    },
    predicate: () => l || I
  }, {
    section: eF.GuildSettingsSections.APP_DIRECTORY,
    label: eV.default.Messages.APP_DIRECTORY,
    ariaLabel: eV.default.Messages.APP_DIRECTORY,
    onClick() {
      (0, S.goToAppDirectory)({
        guildId: t.id,
        entrypoint: {
          name: T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
          guildSettingsSection: J
        }
      }), (0, d.popLayer)()
    }
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => l
  }, {
    section: c.SectionTypes.HEADER,
    label: eV.default.Messages.MODERATION,
    predicate: () => l
  }, {
    section: eF.GuildSettingsSections.SAFETY,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_SAFETY,
    label: eV.default.Messages.SAFETY_SETUP,
    ariaLabel: eV.default.Messages.SAFETY_SETUP,
    element: ef.default,
    newIndicatorDismissibleContentTypes: [r.DismissibleContent.COMMUNITY_GUILD_SETTINGS_SAFETY],
    predicate: () => l && t.hasFeature(eF.GuildFeatures.COMMUNITY)
  }, {
    section: eF.GuildSettingsSections.MODERATION,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_MODERATION,
    label: eV.default.Messages.SAFETY_SETUP,
    element: ev.default,
    predicate: () => l && !t.hasFeature(eF.GuildFeatures.COMMUNITY)
  }, {
    section: eF.GuildSettingsSections.GUILD_AUTOMOD,
    label: (0, a.jsx)("div", {
      className: eY.landingPageTabLink,
      children: eV.default.Messages.GUILD_SETTINGS_AUTOMOD_TITLE
    }),
    ariaLabel: eV.default.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
    element: A.default,
    newIndicatorDismissibleContentTypes: null,
    predicate: () => !t.hasFeature(eF.GuildFeatures.COMMUNITY) && ((0, O.canCurrentUserManageAutomod)(t.id) || (0, O.canCurrentUserManageMessageFilters)(t.id))
  }, {
    section: eF.GuildSettingsSections.AUDIT_LOG,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
    label: eV.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
    element: ec.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => i
  }, {
    section: eF.GuildSettingsSections.AUDIT_LOG_V2,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG_V2,
    label: eV.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
    element: L.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => u && V
  }, {
    section: eF.GuildSettingsSections.BANS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_BANS,
    label: eV.default.Messages.BANS,
    element: eN.default,
    predicate: () => f
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => l || x
  }, {
    section: c.SectionTypes.HEADER,
    label: eV.default.Messages.COMMUNITY,
    predicate: () => !es && (l || x)
  }, {
    section: eF.GuildSettingsSections.CLAN,
    label: eV.default.Messages.CLAN_SETTINGS,
    ariaLabel: eV.default.Messages.CLAN_SETTINGS,
    onClick() {
      (0, ee.openFullScreenLayer)(e => {
        let {
          closeLayer: s
        } = e;
        return (0, a.jsx)(m.default, {
          onClose: s,
          guildId: t.id
        })
      }, {
        layerKey: eH.CLAN_SETTINGS_MODAL_LAYER_KEY
      }), (0, d.popLayer)()
    },
    predicate: () => null != es && es
  }, {
    section: eF.GuildSettingsSections.COMMUNITY,
    impressionName: t.hasFeature(eF.GuildFeatures.COMMUNITY) ? n.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : n.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
    label: t.hasFeature(eF.GuildFeatures.COMMUNITY) ? eV.default.Messages.OVERVIEW : eV.default.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
    element: eg.default,
    ariaLabel: t.hasFeature(eF.GuildFeatures.COMMUNITY) ? eV.default.Messages.OVERVIEW : eV.default.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
    newIndicator: !t.hasFeature(eF.GuildFeatures.COMMUNITY) && null != k && k >= ew.COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE && w.default.hasHotspot(ek.HotspotLocations.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
    notice: {
      stores: [ed.default],
      element: eg.GuildSettingsCommunityOverviewNotice
    },
    predicate: () => l
  }, {
    section: eF.GuildSettingsSections.ONBOARDING,
    label: eV.default.Messages.ONBOARDING,
    element: ep.default,
    ariaLabel: eV.default.Messages.ONBOARDING,
    newIndicatorDismissibleContentTypes: K ? null : [r.DismissibleContent.COMMUNITY_ONBOARDING_NEW_BADGE],
    notice: {
      stores: [eE.default],
      element: eT.default
    },
    predicate: () => (0, D.isGuildOnboardingSettingsAvailable)(t.id),
    decoration: function(e, t) {
      let {
        homeSettingsEnabled: s
      } = (0, G.getOnboardingHomeAdminExperiment)(e);
      if (M.default.getEnabled(e)) return eV.default.Messages.GUILD_ONBOARDING_ON.toUpperCase();
      if ((0, eI.isOnboardingWizardCompleted)(e)) return eV.default.Messages.GUILD_ONBOARDING_OFF.toUpperCase();
      let a = e_.COMPLETABLE_ONBOARDING_STEPS.filter(e => !!s || e !== e_.GuildSettingsOnboardingPage.HOME_SETTINGS || !1),
        l = a.findIndex(e => e === t);
      if (-1 !== l) return eV.default.Messages.GUILD_ONBOARDING_SETUP_STEP_COUNTER.format({
        count: l + 1,
        total: a.length
      })
    }(t.id, W)
  }, {
    section: eF.GuildSettingsSections.ANALYTICS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
    label: eV.default.Messages.SERVER_INSIGHTS,
    ariaLabel: eV.default.Messages.SERVER_INSIGHTS,
    element: em.default,
    newIndicator: w.default.hasHotspot(ek.HotspotLocations.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
    newIndicatorDismissibleContentTypes: Y ? [r.DismissibleContent.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
    predicate: () => x && t.hasFeature(eF.GuildFeatures.COMMUNITY)
  }, {
    section: eF.GuildSettingsSections.DISCOVERY,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
    label: eV.default.Messages.DISCOVERY,
    element: eC.default,
    notice: {
      stores: [ed.default],
      element: eC.GuildSettingsDiscoveryNotice
    },
    predicate: () => l && t.hasFeature(eF.GuildFeatures.COMMUNITY),
    ariaLabel: t.hasFeature(eF.GuildFeatures.DISCOVERABLE) ? eV.default.Messages.DISCOVERY : eV.default.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
  }, {
    section: eF.GuildSettingsSections.DISCOVERY_LANDING_PAGE,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
    label: (0, a.jsxs)("div", {
      className: eY.landingPageTabLink,
      children: [eV.default.Messages.DISCOVERY_LANDING_PAGE, " ", (0, a.jsx)(R.default, {})]
    }),
    ariaLabel: eV.default.Messages.DISCOVERY_LANDING_PAGE,
    element: eR.default,
    notice: {
      stores: [ed.default],
      element: eR.GuildSettingsDiscoveryLandingPageNotice
    },
    type: c.ContentTypes.CUSTOM,
    predicate: () => l && (t.hasFeature(eF.GuildFeatures.DISCOVERABLE) || !!(null == Q ? void 0 : Q.isPublished))
  }, {
    section: eF.GuildSettingsSections.COMMUNITY_WELCOME,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
    label: eV.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    ariaLabel: eV.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    element: eh.default,
    notice: {
      stores: [z.default],
      element: Z.default
    },
    predicate: () => l && t.hasFeature(eF.GuildFeatures.COMMUNITY) && !X && !t.hasFeature(eF.GuildFeatures.GUILD_SERVER_GUIDE)
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: en
  }, {
    section: c.SectionTypes.HEADER,
    label: eV.default.Messages.MONETIZATION,
    predicate: en
  }, {
    ...eK,
    section: eF.GuildSettingsSections.ROLE_SUBSCRIPTIONS,
    element: y.default,
    type: c.ContentTypes.CUSTOM,
    predicate: en,
    newIndicatorDismissibleContentTypes: (0, B.isEligibleForNewBadge)(t) ? [r.DismissibleContent.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
  }, {
    section: eF.GuildSettingsSections.GUILD_PRODUCTS,
    label: eV.default.Messages.GUILD_PRODUCTS_TITLE,
    ariaLabel: eV.default.Messages.GUILD_PRODUCTS_TITLE,
    element: U.default,
    predicate: () => en() && (0, j.isGuildEligibleForGuildProducts)(t.id, "guild_product_settings_predicate") && (0, P.hasEnabledMonetization)(t)
  }, {
    section: eF.GuildSettingsSections.ROLE_SUBSCRIPTIONS_STORE_PAGE,
    impressionName: n.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
    newIndicator: 2022 === new Date().getFullYear(),
    label: eV.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
    ariaLabel: eV.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
    element: F.default,
    predicate: () => en() && (0, P.hasEnabledMonetization)(t)
  }, {
    section: c.SectionTypes.DIVIDER
  }, {
    section: eF.GuildSettingsSections.GUILD_PREMIUM,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
    label: eV.default.Messages.GUILD_PREMIUM,
    ariaLabel: eV.default.Messages.GUILD_PREMIUM,
    element: eD.default,
    className: eY.serverBoostTabItem,
    icon: (0, a.jsx)(eG.default, {
      className: eY.icon
    })
  }, {
    section: c.SectionTypes.DIVIDER
  }, {
    section: c.SectionTypes.HEADER,
    label: eV.default.Messages.USER_MANAGEMENT
  }, {
    section: eF.GuildSettingsSections.MEMBERS,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_MEMBERS,
    label: (0, a.jsx)(eA.GuildSettingsMembersRow, {}),
    ariaLabel: eV.default.Messages.MEMBERS,
    element: eA.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => h
  }, {
    section: eF.GuildSettingsSections.INSTANT_INVITES,
    impressionName: n.ImpressionNames.GUILD_SETTINGS_INVITES,
    label: eV.default.Messages.INVITES,
    element: eO.default,
    type: c.ContentTypes.CUSTOM,
    predicate: () => l
  }, {
    section: c.SectionTypes.DIVIDER,
    predicate: () => v
  }, {
    section: eF.GuildSettingsSections.DELETE,
    onClick() {
      let e = q.default.getCurrentUser();
      if (null == e) return;
      let l = t.toString(),
        n = {
          header: eV.default.Messages.DELETE_SERVER_TITLE.format({
            name: l
          }),
          confirmText: eV.default.Messages.DELETE_SERVER,
          cancelText: eV.default.Messages.CANCEL,
          onConfirm: () => {
            et.ComponentDispatch.subscribeOnce(eF.ComponentActions.LAYER_POP_COMPLETE, () => {
              el.default.deleteGuild(t.id, l).then(() => {
                if ((0, C.isDismissibleContentDismissed)(r.DismissibleContent.GUILD_DELETE_FEEDBACK)) return;
                ea.default.trackExposure({
                  location: "e4be39_1"
                });
                let {
                  showFeedback: e
                } = ea.default.getCurrentConfig({
                  location: "e4be39_2"
                }, {
                  autoTrackExposure: !1
                });
                e && (0, o.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([s.e("49237"), s.e("99387"), s.e("7685")]).then(s.bind(s, "945903"));
                  return s => (0, a.jsx)(e, {
                    ...s,
                    guildId: t.id
                  })
                })
              })
            }), (0, d.popLayer)()
          }
        };
      e.mfaEnabled ? (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
        ...e,
        ...n,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: eV.default.Messages.DELETE_SERVER_BODY.format({
            name: l
          })
        })
      })) : (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("18259")]).then(s.bind(s, "1493"));
        return t => (0, a.jsx)(e, {
          ...t,
          ...n,
          validationText: l,
          instructionText: eV.default.Messages.DELETE_SERVER_ENTER_NAME,
          errorText: eV.default.Messages.DELETE_SERVER_INCORRECT_NAME,
          children: eV.default.Messages.DELETE_SERVER_BODY.format({
            name: l
          })
        })
      })
    },
    label: eV.default.Messages.DELETE_SERVER,
    ariaLabel: eV.default.Messages.DELETE_SERVER,
    icon: (0, a.jsx)($.default, {
      width: 16,
      height: 16
    }),
    predicate: () => v
  }]
}

function eK(e, t) {
  let s = J.default.getGuildPermissionProps(e);
  return ez({
    channels: t,
    showDirtyGuildTemplateIndicator: !1,
    ...s,
    isGuildAuditLogV2Enabled: !1,
    showAccessRate: !1,
    canAccessClanSettings: (0, f.isClanPrepilotExperimentEnabled)(e, "guild context menu") && s.isGuildAdmin && e.hasFeature(eF.GuildFeatures.CLAN)
  }).filter(e => {
    let {
      section: t
    } = e;
    return t !== c.SectionTypes.HEADER && t !== c.SectionTypes.DIVIDER
  }).filter(e => null == e.predicate || e.predicate())
}

function eZ(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    s = arguments.length > 2 ? arguments[2] : void 0;
  _.default.trackWithMetadata(eF.AnalyticEvents.SETTINGS_PANE_VIEWED, {
    settings_type: "guild",
    origin_pane: t,
    destination_pane: e,
    location: s
  })
}
let eX = {
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
class eQ extends l.PureComponent {
  componentDidMount() {
    eZ(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    el.default.close()
  }
  componentDidUpdate(e) {
    let {
      section: t
    } = e, {
      section: s,
      canManageGuild: a,
      canManageRoles: l,
      canManageBans: n,
      canManageNicknames: i,
      canManageGuildExpressions: r,
      canViewAuditLog: o,
      canViewAuditLogV2: u,
      canManageWebhooks: c,
      canAccessMembersPage: E,
      canViewGuildAnalytics: _
    } = this.props;
    s !== t && eZ(s, t), (!a && !l && !n && !i && !r && !o && !u && !E && !c || !o && s === eF.GuildSettingsSections.AUDIT_LOG || !u && s === eF.GuildSettingsSections.AUDIT_LOG_V2 || !l && s === eF.GuildSettingsSections.ROLES || !r && s === eF.GuildSettingsSections.EMOJI || !r && s === eF.GuildSettingsSections.STICKERS || !r && s === eF.GuildSettingsSections.SOUNDBOARD || !n && s === eF.GuildSettingsSections.BANS || !_ && s === eF.GuildSettingsSections.ANALYTICS || !E && s === eF.GuildSettingsSections.MEMBERS) && (0, d.popLayer)()
  }
  render() {
    var e, t;
    let {
      theme: s,
      sidebarTheme: l,
      section: n,
      guild: i,
      channels: r,
      canManageGuild: o,
      canViewAuditLog: c,
      canViewAuditLogV2: E,
      canManageRoles: _,
      canManageGuildExpressions: I,
      canManageWebhooks: T,
      canManageBans: S,
      canAccessMembersPage: f,
      canViewGuildAnalytics: m,
      isOwner: N,
      isOwnerWithRequiredMfaLevel: g,
      showDirtyGuildTemplateIndicator: h,
      memberCount: C,
      isGuildAuditLogV2Enabled: R,
      showAccessRate: x,
      onboardingStep: L,
      onboardingEnabled: O,
      welcomeScreenEmpty: A,
      guildMetadata: p,
      canAccessClanSettings: M
    } = this.props;
    if (null == i) return null;
    let D = ez({
        guild: i,
        channels: r,
        canManageGuild: o,
        canViewAuditLog: c,
        canViewAuditLogV2: E,
        canManageRoles: _,
        canManageGuildExpressions: I,
        canManageWebhooks: T,
        canManageBans: S,
        canAccessMembersPage: f,
        canViewGuildAnalytics: m,
        isOwner: N,
        isOwnerWithRequiredMfaLevel: g,
        showDirtyGuildTemplateIndicator: h,
        memberCount: C,
        isGuildAuditLogV2Enabled: R,
        showAccessRate: x,
        onboardingStep: L,
        onboardingEnabled: O,
        welcomeScreenEmpty: A,
        guildMetadata: p,
        section: n,
        canAccessClanSettings: M
      }),
      v = (null === (t = D.find(e => e.section === n)) || void 0 === t ? void 0 : null === (e = t.predicate) || void 0 === e ? void 0 : e.call(t)) !== !1;
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)(u.default, {
        theme: s,
        sidebarTheme: l,
        section: v && null != n ? n : eF.GuildSettingsSections.OVERVIEW,
        onSetSection: el.default.setSection,
        onClose: d.popLayer,
        title: eW(i),
        sections: D
      }), (0, a.jsx)(V.ViewingRolesSettingsNotice, {
        guildId: i.id
      })]
    })
  }
}

function eJ() {
  var e, t;
  let {
    guild: s,
    section: n,
    analyticsLocation: r,
    guildMetadata: o,
    isGuildMetadataLoaded: d
  } = (0, i.useStateFromStoresObject)([ed.default], () => ed.default.getProps()), {
    analyticsLocations: u
  } = (0, I.default)(E.default.GUILD_SETTINGS), c = (0, i.useStateFromStores)([Y.default], () => Y.default.theme), _ = (0, i.useStateFromStores)([Y.default], () => Y.default.darkSidebar ? eF.ThemeTypes.DARK : void 0), T = (0, i.useStateFromStores)([X.default], () => null != s ? X.default.getChannels(s.id).SELECTABLE : null, [s]), S = (0, i.useStateFromStoresObject)([J.default], () => null != s ? J.default.getGuildPermissionProps(s) : eX), m = null == s ? void 0 : s.id, N = (0, i.useStateFromStores)([J.default], () => null != s && J.default.canAccessGuildSettings(s)), g = null != s && (0, es.staffOnlyGuildSettingsAccess)(s.id), C = g || N, R = g || S.canViewGuildAnalytics, {
    shouldFetchMemberInsights: L,
    hasAccessRate: O
  } = (0, i.useStateFromStoresObject)([ei.default], () => ({
    shouldFetchMemberInsights: null != s && ei.default.shouldFetchMemberInsights(s.id),
    hasAccessRate: null != s && ei.default.getMemberInsights(s.id).hasAccessRate
  }));
  l.useEffect(() => {
    !d && null != m && (0, h.fetchMetadataForGuild)(m)
  }, [d, m]), l.useEffect(() => {
    C && R && L && null != m && (0, en.fetchMemberInsights)(m)
  }, [C, R, L, m]);
  let A = null !== (e = null == s ? void 0 : s.hasFeature(eF.GuildFeatures.COMMUNITY)) && void 0 !== e && e;
  l.useEffect(() => {
    null != m && A && ((0, p.fetchOnboardingPrompts)(m), (0, W.fetchWelcomeScreen)(m))
  }, [m, A]);
  let {
    homeSettingsEnabled: D
  } = (0, G.useOnboardingHomeAdminExperiment)(null != m ? m : eF.EMPTY_STRING_SNOWFLAKE_ID);
  l.useEffect(() => {
    null != m && D && (0, v.fetchGuildHomeSettings)(m)
  }, [D, m]);
  let {
    showAccessRate: j
  } = (0, es.useGuildAccessRateInsightExperiment)(null == s ? void 0 : s.id, !O || !R || !C), {
    enableClanCreation: U
  } = (0, f.useClanPrepilotExperiment)(s, "guild settings", !1), P = S.isGuildAdmin && U && (null == s ? void 0 : s.hasFeature(eF.GuildFeatures.CLAN)), b = (0, i.useStateFromStores)([k.default], () => {
    var e;
    return (null == s ? void 0 : s.id) != null && (null === (e = k.default.getForGuild(s.id)) || void 0 === e ? void 0 : e.isDirty) === !0
  }, [s]), B = (0, i.useStateFromStores)([Q.default], () => Q.default.getMemberCount(null == s ? void 0 : s.id), [s]), y = (0, x.useGuildAuditLogV2Enabled)(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : eF.EMPTY_STRING_SNOWFLAKE_ID);
  l.useEffect(() => {
    null != m && S.canManageGuild && H.default.loadTemplatesForGuild(m)
  }, [m, S.canManageGuild]), l.useEffect(() => {
    !C && el.default.close()
  }, [C]);
  let F = (0, i.useStateFromStores)([eE.default], () => eE.default.getCurrentPage()),
    w = (0, i.useStateFromStores)([M.default], () => null != m && M.default.getEnabled(m)),
    V = (0, i.useStateFromStores)([K.default], () => null != m && K.default.isEmpty(m));
  return (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: u,
    children: (0, a.jsx)(eQ, {
      guild: s,
      section: n,
      theme: c,
      sidebarTheme: _,
      channels: T,
      showDirtyGuildTemplateIndicator: b,
      analyticsLocation: r,
      memberCount: B,
      isGuildAuditLogV2Enabled: y,
      ...S,
      canViewGuildAnalytics: R,
      showAccessRate: j,
      onboardingStep: F,
      onboardingEnabled: w,
      welcomeScreenEmpty: V,
      guildMetadata: o,
      canAccessClanSettings: P
    })
  })
}