n.r(t),
    n.d(t, {
        default: function () {
            return eQ;
        },
        getGuildSettingsSections: function () {
            return ez;
        }
    }),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(990547),
    r = n(442837),
    l = n(704215),
    o = n(481060),
    c = n(37234),
    d = n(503089),
    u = n(493544),
    _ = n(100527),
    I = n(367907),
    E = n(906732),
    T = n(132871),
    m = n(147890),
    N = n(353093),
    S = n(593128),
    g = n(979264),
    h = n(223892),
    C = n(738774),
    x = n(296386),
    p = n(605236),
    R = n(688465),
    L = n(676317),
    f = n(874993),
    O = n(745752),
    A = n(45966),
    M = n(637853),
    D = n(526120),
    v = n(621923),
    j = n(352981),
    Z = n(610403),
    b = n(923726),
    U = n(144507),
    G = n(303737),
    P = n(15030),
    B = n(220685),
    y = n(751189),
    F = n(409059),
    w = n(810788),
    k = n(918658),
    H = n(84615),
    V = n(210887),
    Y = n(524329),
    W = n(575258),
    z = n(995532),
    K = n(276687),
    q = n(984933),
    X = n(650774),
    Q = n(496675),
    J = n(594174),
    $ = n(585483),
    ee = n(771212),
    et = n(85001),
    en = n(434404),
    es = n(146596),
    ea = n(559368),
    ei = n(600553),
    er = n(360606),
    el = n(946724),
    eo = n(999382),
    ec = n(44550),
    ed = n(853714),
    eu = n(359191),
    e_ = n(84658),
    eI = n(142961),
    eE = n(730910),
    eT = n(475013),
    em = n(213956),
    eN = n(702478),
    eS = n(247031),
    eg = n(787561),
    eh = n(579648),
    eC = n(511480),
    ex = n(460461),
    ep = n(29605),
    eR = n(365307),
    eL = n(497666),
    ef = n(324330),
    eO = n(495300),
    eA = n(312397),
    eM = n(651780),
    eD = n(279542),
    ev = n(413335),
    ej = n(665324),
    eZ = n(208150),
    eb = n(353398),
    eU = n(365774),
    eG = n(803288),
    eP = n(804153),
    eB = n(981631),
    ey = n(308083),
    eF = n(190378),
    ew = n(135899),
    ek = n(689938),
    eH = n(9917);
function eV(e) {
    return '' !== e.toString() ? e.toString() : ek.Z.Messages.SERVER_SETTINGS;
}
function eY(e, t) {
    let { homeSettingsEnabled: n } = (0, v.l6)(e);
    if (A.Z.getEnabled(e)) return ek.Z.Messages.GUILD_ONBOARDING_ON.toUpperCase();
    if ((0, eI.C)(e)) return ek.Z.Messages.GUILD_ONBOARDING_OFF.toUpperCase();
    let s = e_.ug.filter((e) => !!n || e !== e_.PG.HOME_SETTINGS || !1),
        a = s.findIndex((e) => e === t);
    if (-1 !== a)
        return ek.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_COUNTER.format({
            count: a + 1,
            total: s.length
        });
}
function eW(e) {
    var t;
    let { guild: a, isGuildAdmin: r, canManageGuild: d, canViewAuditLog: _, canManageRoles: I, canManageGuildExpressions: E, canManageWebhooks: x, canManageBans: O, canAccessMembersPage: A, canViewGuildAnalytics: D, isOwner: v, isOwnerWithRequiredMfaLevel: y, showDirtyGuildTemplateIndicator: F, memberCount: k, showAccessRate: V, onboardingStep: Y, onboardingEnabled: z, welcomeScreenEmpty: q, guildMetadata: X, section: Q, canAccessClanSettings: ee } = e,
        es = ei.$.getCurrentConfig({
            guildId: a.id,
            location: 'generateSections'
        }).enabled,
        ea = () =>
            (0, U.X$)({
                guild: a,
                isOwner: v,
                canManageGuildRoleSubscriptions: (0, U.H2)(a),
                isMonetizationWaitlistEnabledForGuild: (0, h.mG)(a.id),
                isGuildEligibleForRoleSubscriptions: (0, b.kT)(a.id),
                isExpeditedMonetizationOnboardingGuild: (0, h.Rw)(a),
                isUserInCreatorMonetizationEligibleCountry: (0, h.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, C.cu)(a.id)
            }),
        e_ = (0, j.p)(a.id, 'guild_settings'),
        eI = !1 === a.hasFeature(eB.oNc.CREATOR_MONETIZABLE) && !1 === a.hasFeature(eB.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
        eW =
            e_ && eI
                ? {
                      label: (0, s.jsx)('div', {
                          className: eH.roleSubLabel,
                          children: ek.Z.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
                      }),
                      ariaLabel: ek.Z.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
                  }
                : {
                      label: (0, s.jsx)('div', {
                          className: eH.roleSubLabel,
                          children: ek.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
                      }),
                      ariaLabel: ek.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
                  },
        ez = (null === (t = a.clan) || void 0 === t ? void 0 : t.badge) != null ? (0, N.ky)(a.id, a.clan.badge, ey.NC.SIZE_16) : null,
        eK = {
            section: eB.pNK.DELETE,
            onClick() {
                let e = J.default.getCurrentUser();
                if (null == e) return;
                let t = a.toString(),
                    i = {
                        header: ek.Z.Messages.DELETE_SERVER_TITLE.format({ name: t }),
                        confirmText: ek.Z.Messages.DELETE_SERVER,
                        cancelText: ek.Z.Messages.CANCEL,
                        onConfirm: () => {
                            $.S.subscribeOnce(eB.CkL.LAYER_POP_COMPLETE, () => {
                                en.Z.deleteGuild(a.id, t).then(() => {
                                    if ((0, p.un)(l.z.GUILD_DELETE_FEEDBACK)) return;
                                    et.Z.trackExposure({ location: 'e4be39_1' });
                                    let { showFeedback: e } = et.Z.getCurrentConfig({ location: 'e4be39_2' }, { autoTrackExposure: !1 });
                                    e &&
                                        (0, o.openModalLazy)(async () => {
                                            let { default: e } = await n.e('31811').then(n.bind(n, 945903));
                                            return (t) =>
                                                (0, s.jsx)(e, {
                                                    ...t,
                                                    guildId: a.id
                                                });
                                        });
                                });
                            }),
                                (0, c.xf)();
                        }
                    };
                e.mfaEnabled
                    ? (0, o.openModal)((e) =>
                          (0, s.jsx)(o.ConfirmModal, {
                              ...e,
                              ...i,
                              children: (0, s.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  children: ek.Z.Messages.DELETE_SERVER_BODY.format({ name: t })
                              })
                          })
                      )
                    : (0, o.openModalLazy)(async () => {
                          let { default: e } = await n.e('18259').then(n.bind(n, 1493));
                          return (n) =>
                              (0, s.jsx)(e, {
                                  ...n,
                                  ...i,
                                  validationText: t,
                                  instructionText: ek.Z.Messages.DELETE_SERVER_ENTER_NAME,
                                  errorText: ek.Z.Messages.DELETE_SERVER_INCORRECT_NAME,
                                  children: ek.Z.Messages.DELETE_SERVER_BODY.format({ name: t })
                              });
                      });
            },
            label: ek.Z.Messages.DELETE_SERVER,
            ariaLabel: ek.Z.Messages.DELETE_SERVER,
            icon: (0, s.jsx)(o.TrashIcon, {
                size: 'xs',
                color: 'currentColor'
            }),
            predicate: () => y
        };
    if (es) {
        let e = [
                { section: u.ID.DIVIDER },
                {
                    section: u.ID.HEADER,
                    label: ek.Z.Messages.GUILD_SETTINGS_SECTION_TITLE_ADD_FUN_STUFF
                },
                {
                    section: eB.pNK.EMOJI,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: ek.Z.Messages.EMOJI,
                    element: ep.ZP,
                    predicate: () => E
                },
                {
                    section: eB.pNK.STICKERS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: ek.Z.Messages.GUILD_SETTINGS_STICKERS,
                    ariaLabel: ek.Z.Messages.GUILD_SETTINGS_STICKERS,
                    element: eZ.Z,
                    predicate: () => E
                },
                {
                    section: eB.pNK.SOUNDBOARD,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: ek.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
                    ariaLabel: ek.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
                    element: ej.Z,
                    predicate: () => E
                },
                {
                    section: eB.pNK.APP_DIRECTORY,
                    label: ek.Z.Messages.APPS,
                    ariaLabel: ek.Z.Messages.APPS,
                    onClick() {
                        (0, m.goToAppDirectory)({
                            guildId: a.id,
                            entrypoint: {
                                name: T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
                                guildSettingsSection: Q
                            }
                        }),
                            (0, c.xf)();
                    }
                },
                {
                    section: eB.pNK.INTEGRATIONS,
                    impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: ek.Z.Messages.INTEGRATIONS,
                    ariaLabel: ek.Z.Messages.INTEGRATIONS,
                    element: eR.Z,
                    notice: {
                        stores: [er.Z, eo.Z],
                        element: eR.j
                    },
                    predicate: () => d || x
                }
            ],
            t =
                I || A || d
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: ek.Z.Messages.GUILD_SETTINGS_SECTION_TITLE_MANAGE_USERS
                          },
                          {
                              section: eB.pNK.ROLES,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
                              label: ek.Z.Messages.ROLES,
                              element: eT.Z,
                              type: u.bT.MINIMAL,
                              ariaLabel: ek.Z.Messages.GUILD_SETTINGS_ROLE_ICON_SIDEBAR_NEW_ARIA_LABEL,
                              notice: {
                                  stores: [el.Z],
                                  element: eT._
                              },
                              predicate: () => I
                          },
                          {
                              section: eB.pNK.MEMBERS,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                              label: (0, s.jsx)(ef.$, {}),
                              ariaLabel: ek.Z.Messages.MEMBERS,
                              element: ef.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => A
                          },
                          {
                              section: eB.pNK.INSTANT_INVITES,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES,
                              label: ek.Z.Messages.INVITES,
                              element: eL.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => d
                          }
                      ]
                    : [],
            n = a.hasFeature(eB.oNc.COMMUNITY),
            r = d && n,
            o = d && !n,
            N = !n && ((0, L.Nb)(a.id) || (0, L.ze)(a.id)),
            h =
                r || o || N || _ || O
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: ek.Z.Messages.GUILD_SETTINGS_SECTION_TITLE_KEEP_IT_SAFE
                          },
                          {
                              section: eB.pNK.SAFETY,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
                              label: ek.Z.Messages.SAFETY_SETUP,
                              ariaLabel: ek.Z.Messages.SAFETY_SETUP,
                              element: em.Z,
                              newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                              predicate: () => r
                          },
                          {
                              section: eB.pNK.MODERATION,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
                              label: ek.Z.Messages.SAFETY_SETUP,
                              element: eD.ZP,
                              predicate: () => o
                          },
                          {
                              section: eB.pNK.GUILD_AUTOMOD,
                              label: (0, s.jsx)('div', {
                                  className: eH.landingPageTabLink,
                                  children: ek.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE
                              }),
                              ariaLabel: ek.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
                              element: f.Z,
                              newIndicatorDismissibleContentTypes: null,
                              predicate: () => N
                          },
                          {
                              section: eB.pNK.AUDIT_LOG,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                              label: ek.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
                              element: ed.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => _
                          },
                          {
                              section: eB.pNK.BANS,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
                              label: ek.Z.Messages.BANS,
                              element: eS.Z,
                              predicate: () => O
                          }
                      ]
                    : [],
            C = (0, M.wC)(a.id),
            p = n && D,
            v = d && (a.hasFeature(eB.oNc.DISCOVERABLE) || !!(null == X ? void 0 : X.isPublished)),
            U = d && !q && !a.hasFeature(eB.oNc.GUILD_SERVER_GUIDE),
            J =
                n && (d || C || p || v || U)
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: ek.Z.Messages.COMMUNITY
                          },
                          {
                              section: eB.pNK.COMMUNITY,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW,
                              label: ek.Z.Messages.OVERVIEW,
                              element: eg.Z,
                              ariaLabel: ek.Z.Messages.OVERVIEW,
                              notice: {
                                  stores: [eo.Z],
                                  element: eg.X
                              },
                              predicate: () => d
                          },
                          {
                              section: eB.pNK.ONBOARDING,
                              label: ek.Z.Messages.ONBOARDING,
                              element: eO.Z,
                              ariaLabel: ek.Z.Messages.ONBOARDING,
                              newIndicatorDismissibleContentTypes: z ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                              notice: {
                                  stores: [eu.Z],
                                  element: eE.Z
                              },
                              predicate: () => C,
                              decoration: eY(a.id, Y)
                          },
                          {
                              section: eB.pNK.ANALYTICS,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                              label: ek.Z.Messages.SERVER_INSIGHTS,
                              ariaLabel: ek.Z.Messages.SERVER_INSIGHTS,
                              element: eN.Z,
                              newIndicator: w.Z.hasHotspot(eF.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
                              newIndicatorDismissibleContentTypes: V ? [l.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
                              predicate: () => p
                          },
                          {
                              section: eB.pNK.DISCOVERY,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                              label: ek.Z.Messages.DISCOVERY,
                              element: eC.Z,
                              notice: {
                                  stores: [eo.Z],
                                  element: eC.s
                              },
                              predicate: () => d,
                              ariaLabel: a.hasFeature(eB.oNc.DISCOVERABLE) ? ek.Z.Messages.DISCOVERY : ek.Z.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
                          },
                          {
                              section: eB.pNK.DISCOVERY_LANDING_PAGE,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                              label: (0, s.jsxs)('div', {
                                  className: eH.landingPageTabLink,
                                  children: [ek.Z.Messages.DISCOVERY_LANDING_PAGE, ' ', (0, s.jsx)(R.Z, {})]
                              }),
                              ariaLabel: ek.Z.Messages.DISCOVERY_LANDING_PAGE,
                              element: ex.Z,
                              notice: {
                                  stores: [eo.Z],
                                  element: ex.J
                              },
                              type: u.bT.CUSTOM,
                              predicate: () => v
                          },
                          {
                              section: eB.pNK.COMMUNITY_WELCOME,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                              label: ek.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
                              ariaLabel: ek.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
                              element: eh.Z,
                              notice: {
                                  stores: [W.Z],
                                  element: K.Z
                              },
                              predicate: () => U
                          }
                      ]
                    : [],
            $ = ea()
                ? [
                      { section: u.ID.DIVIDER },
                      {
                          section: u.ID.HEADER,
                          label: ek.Z.Messages.MONETIZATION
                      },
                      {
                          ...eW,
                          section: eB.pNK.ROLE_SUBSCRIPTIONS,
                          element: P.Z,
                          type: u.bT.CUSTOM,
                          newIndicatorDismissibleContentTypes: (0, G.sO)(a) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                      },
                      {
                          section: eB.pNK.GUILD_PRODUCTS,
                          label: ek.Z.Messages.GUILD_PRODUCTS_TITLE,
                          ariaLabel: ek.Z.Messages.GUILD_PRODUCTS_TITLE,
                          element: Z.Z,
                          predicate: () => (0, j.p)(a.id, 'guild_product_settings_predicate') && (0, b.sy)(a)
                      },
                      {
                          section: eB.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                          impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                          newIndicator: 2022 === new Date().getFullYear(),
                          label: ek.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
                          ariaLabel: ek.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
                          element: B.Z,
                          predicate: () => (0, b.sy)(a)
                      }
                  ]
                : [],
            et = null != ee && ee,
            en = d && !a.hasFeature(eB.oNc.COMMUNITY),
            es =
                et || en || d
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: eB.pNK.CLAN,
                              label: ek.Z.Messages.CLAN_SETTINGS,
                              ariaLabel: ek.Z.Messages.CLAN_SETTINGS,
                              onClick() {
                                  (0, H.q4)(
                                      (e) => {
                                          let { closeLayer: t } = e;
                                          return (0, s.jsx)(S.Z, {
                                              onClose: t,
                                              guildId: a.id
                                          });
                                      },
                                      { layerKey: ey.q2 }
                                  ),
                                      (0, c.xf)();
                              },
                              predicate: () => et,
                              icon: null != ez ? (0, s.jsx)(g.KQ, { src: ez }) : null
                          },
                          {
                              section: eB.pNK.COMMUNITY,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                              label: ek.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
                              element: eg.Z,
                              ariaLabel: ek.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
                              newIndicator: null != k && k >= ew.U3 && w.Z.hasHotspot(eF.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                              notice: {
                                  stores: [eo.Z],
                                  element: eg.X
                              },
                              predicate: () => en
                          },
                          {
                              section: eB.pNK.WIDGET,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_WIDGET,
                              label: ek.Z.Messages.WIDGET,
                              element: eP.Z,
                              predicate: () => d
                          },
                          {
                              section: eB.pNK.VANITY_URL,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                              label: ek.Z.Messages.VANITY_URL,
                              element: eG.Z,
                              notice: {
                                  stores: [ec.Z],
                                  element: eG.T
                              },
                              predicate: () => d
                          },
                          {
                              section: eB.pNK.GUILD_TEMPLATES,
                              impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                              label: (0, s.jsx)(eU.Z, { showDirtyIndicator: F }),
                              ariaLabel: ek.Z.Messages.GUILD_TEMPLATES,
                              element: eb.ZP,
                              notice: {
                                  stores: [eb.Sf],
                                  element: eb.Q5
                              },
                              predicate: () => d
                          }
                      ]
                    : [];
        return [
            {
                section: u.ID.HEADER,
                label: eV(a)
            },
            {
                section: eB.pNK.OVERVIEW,
                impressionName: i.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                label: ek.Z.Messages.OVERVIEW,
                ariaLabel: ek.Z.Messages.OVERVIEW,
                element: eA.Z,
                notice: {
                    stores: [eo.Z],
                    element: eA.O
                }
            },
            ...e,
            ...t,
            ...h,
            ...J,
            ...$,
            { section: u.ID.DIVIDER },
            {
                section: eB.pNK.GUILD_PREMIUM,
                impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                label: ek.Z.Messages.GUILD_PREMIUM,
                ariaLabel: ek.Z.Messages.GUILD_PREMIUM,
                element: eM.Z,
                className: eH.serverBoostTabItem,
                icon: (0, s.jsx)(ev.Z, { className: eH.icon })
            },
            ...es,
            {
                section: u.ID.DIVIDER,
                predicate: () => y
            },
            eK
        ];
    }
    return [
        {
            section: u.ID.HEADER,
            label: eV(a)
        },
        {
            section: eB.pNK.OVERVIEW,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
            label: ek.Z.Messages.OVERVIEW,
            ariaLabel: ek.Z.Messages.OVERVIEW,
            element: eA.Z,
            notice: {
                stores: [eo.Z],
                element: eA.O
            }
        },
        {
            section: eB.pNK.ROLES,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES,
            label: ek.Z.Messages.ROLES,
            element: eT.Z,
            type: u.bT.MINIMAL,
            ariaLabel: ek.Z.Messages.GUILD_SETTINGS_ROLE_ICON_SIDEBAR_NEW_ARIA_LABEL,
            notice: {
                stores: [el.Z],
                element: eT._
            },
            predicate: () => I
        },
        {
            section: eB.pNK.EMOJI,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI,
            label: ek.Z.Messages.EMOJI,
            element: ep.ZP,
            predicate: () => E
        },
        {
            section: eB.pNK.STICKERS,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS,
            label: ek.Z.Messages.GUILD_SETTINGS_STICKERS,
            ariaLabel: ek.Z.Messages.GUILD_SETTINGS_STICKERS,
            element: eZ.Z,
            predicate: () => E
        },
        {
            section: eB.pNK.SOUNDBOARD,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
            label: ek.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
            ariaLabel: ek.Z.Messages.GUILD_SETTINGS_SOUNDBOARD,
            element: ej.Z,
            predicate: () => E
        },
        {
            section: eB.pNK.WIDGET,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_WIDGET,
            label: ek.Z.Messages.WIDGET,
            element: eP.Z,
            predicate: () => d
        },
        {
            section: eB.pNK.GUILD_TEMPLATES,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
            label: (0, s.jsx)(eU.Z, { showDirtyIndicator: F }),
            ariaLabel: ek.Z.Messages.GUILD_TEMPLATES,
            element: eb.ZP,
            notice: {
                stores: [eb.Sf],
                element: eb.Q5
            },
            predicate: () => d
        },
        {
            section: eB.pNK.VANITY_URL,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
            label: ek.Z.Messages.VANITY_URL,
            element: eG.Z,
            notice: {
                stores: [ec.Z],
                element: eG.T
            },
            predicate: () => r
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => d || x
        },
        {
            section: u.ID.HEADER,
            label: ek.Z.Messages.APPS,
            predicate: () => d || x
        },
        {
            section: eB.pNK.INTEGRATIONS,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
            label: ek.Z.Messages.INTEGRATIONS,
            ariaLabel: ek.Z.Messages.INTEGRATIONS,
            element: eR.Z,
            notice: {
                stores: [er.Z, eo.Z],
                element: eR.j
            },
            predicate: () => d || x
        },
        {
            section: eB.pNK.APP_DIRECTORY,
            label: ek.Z.Messages.APP_DIRECTORY,
            ariaLabel: ek.Z.Messages.APP_DIRECTORY,
            onClick() {
                (0, m.goToAppDirectory)({
                    guildId: a.id,
                    entrypoint: {
                        name: T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
                        guildSettingsSection: Q
                    }
                }),
                    (0, c.xf)();
            }
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => d
        },
        {
            section: u.ID.HEADER,
            label: ek.Z.Messages.MODERATION,
            predicate: () => d
        },
        {
            section: eB.pNK.SAFETY,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY,
            label: ek.Z.Messages.SAFETY_SETUP,
            ariaLabel: ek.Z.Messages.SAFETY_SETUP,
            element: em.Z,
            newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
            predicate: () => d && a.hasFeature(eB.oNc.COMMUNITY)
        },
        {
            section: eB.pNK.MODERATION,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION,
            label: ek.Z.Messages.SAFETY_SETUP,
            element: eD.ZP,
            predicate: () => d && !a.hasFeature(eB.oNc.COMMUNITY)
        },
        {
            section: eB.pNK.GUILD_AUTOMOD,
            label: (0, s.jsx)('div', {
                className: eH.landingPageTabLink,
                children: ek.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE
            }),
            ariaLabel: ek.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
            element: f.Z,
            newIndicatorDismissibleContentTypes: null,
            predicate: () => !a.hasFeature(eB.oNc.COMMUNITY) && ((0, L.Nb)(a.id) || (0, L.ze)(a.id))
        },
        {
            section: eB.pNK.AUDIT_LOG,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
            label: ek.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
            element: ed.Z,
            type: u.bT.CUSTOM,
            predicate: () => _
        },
        {
            section: eB.pNK.BANS,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS,
            label: ek.Z.Messages.BANS,
            element: eS.Z,
            predicate: () => O
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => d || D
        },
        {
            section: u.ID.HEADER,
            label: ek.Z.Messages.COMMUNITY,
            predicate: () => !ee && (d || D)
        },
        {
            section: eB.pNK.CLAN,
            label: ek.Z.Messages.CLAN_SETTINGS,
            ariaLabel: ek.Z.Messages.CLAN_SETTINGS,
            onClick() {
                (0, H.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, s.jsx)(S.Z, {
                            onClose: t,
                            guildId: a.id
                        });
                    },
                    { layerKey: ey.q2 }
                ),
                    (0, c.xf)();
            },
            predicate: () => null != ee && ee,
            icon: null != ez ? (0, s.jsx)(g.KQ, { src: ez }) : null
        },
        {
            section: eB.pNK.COMMUNITY,
            impressionName: a.hasFeature(eB.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
            label: a.hasFeature(eB.oNc.COMMUNITY) ? ek.Z.Messages.OVERVIEW : ek.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
            element: eg.Z,
            ariaLabel: a.hasFeature(eB.oNc.COMMUNITY) ? ek.Z.Messages.OVERVIEW : ek.Z.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
            newIndicator: !a.hasFeature(eB.oNc.COMMUNITY) && null != k && k >= ew.U3 && w.Z.hasHotspot(eF.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
            notice: {
                stores: [eo.Z],
                element: eg.X
            },
            predicate: () => d
        },
        {
            section: eB.pNK.ONBOARDING,
            label: ek.Z.Messages.ONBOARDING,
            element: eO.Z,
            ariaLabel: ek.Z.Messages.ONBOARDING,
            newIndicatorDismissibleContentTypes: z ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE],
            notice: {
                stores: [eu.Z],
                element: eE.Z
            },
            predicate: () => (0, M.wC)(a.id),
            decoration: eY(a.id, Y)
        },
        {
            section: eB.pNK.ANALYTICS,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
            label: ek.Z.Messages.SERVER_INSIGHTS,
            ariaLabel: ek.Z.Messages.SERVER_INSIGHTS,
            element: eN.Z,
            newIndicator: w.Z.hasHotspot(eF.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
            newIndicatorDismissibleContentTypes: V ? [l.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
            predicate: () => D && a.hasFeature(eB.oNc.COMMUNITY)
        },
        {
            section: eB.pNK.DISCOVERY,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
            label: ek.Z.Messages.DISCOVERY,
            element: eC.Z,
            notice: {
                stores: [eo.Z],
                element: eC.s
            },
            predicate: () => d && a.hasFeature(eB.oNc.COMMUNITY),
            ariaLabel: a.hasFeature(eB.oNc.DISCOVERABLE) ? ek.Z.Messages.DISCOVERY : ek.Z.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
        },
        {
            section: eB.pNK.DISCOVERY_LANDING_PAGE,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
            label: (0, s.jsxs)('div', {
                className: eH.landingPageTabLink,
                children: [ek.Z.Messages.DISCOVERY_LANDING_PAGE, ' ', (0, s.jsx)(R.Z, {})]
            }),
            ariaLabel: ek.Z.Messages.DISCOVERY_LANDING_PAGE,
            element: ex.Z,
            notice: {
                stores: [eo.Z],
                element: ex.J
            },
            type: u.bT.CUSTOM,
            predicate: () => d && (a.hasFeature(eB.oNc.DISCOVERABLE) || !!(null == X ? void 0 : X.isPublished))
        },
        {
            section: eB.pNK.COMMUNITY_WELCOME,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
            label: ek.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
            ariaLabel: ek.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
            element: eh.Z,
            notice: {
                stores: [W.Z],
                element: K.Z
            },
            predicate: () => d && a.hasFeature(eB.oNc.COMMUNITY) && !q && !a.hasFeature(eB.oNc.GUILD_SERVER_GUIDE)
        },
        {
            section: u.ID.DIVIDER,
            predicate: ea
        },
        {
            section: u.ID.HEADER,
            label: ek.Z.Messages.MONETIZATION,
            predicate: ea
        },
        {
            ...eW,
            section: eB.pNK.ROLE_SUBSCRIPTIONS,
            element: P.Z,
            type: u.bT.CUSTOM,
            predicate: ea,
            newIndicatorDismissibleContentTypes: (0, G.sO)(a) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        },
        {
            section: eB.pNK.GUILD_PRODUCTS,
            label: ek.Z.Messages.GUILD_PRODUCTS_TITLE,
            ariaLabel: ek.Z.Messages.GUILD_PRODUCTS_TITLE,
            element: Z.Z,
            predicate: () => ea() && (0, j.p)(a.id, 'guild_product_settings_predicate') && (0, b.sy)(a)
        },
        {
            section: eB.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
            impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
            newIndicator: 2022 === new Date().getFullYear(),
            label: ek.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
            ariaLabel: ek.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
            element: B.Z,
            predicate: () => ea() && (0, b.sy)(a)
        },
        { section: u.ID.DIVIDER },
        {
            section: eB.pNK.GUILD_PREMIUM,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
            label: ek.Z.Messages.GUILD_PREMIUM,
            ariaLabel: ek.Z.Messages.GUILD_PREMIUM,
            element: eM.Z,
            className: eH.serverBoostTabItem,
            icon: (0, s.jsx)(ev.Z, { className: eH.icon })
        },
        { section: u.ID.DIVIDER },
        {
            section: u.ID.HEADER,
            label: ek.Z.Messages.USER_MANAGEMENT
        },
        {
            section: eB.pNK.MEMBERS,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS,
            label: (0, s.jsx)(ef.$, {}),
            ariaLabel: ek.Z.Messages.MEMBERS,
            element: ef.Z,
            type: u.bT.CUSTOM,
            predicate: () => A
        },
        {
            section: eB.pNK.INSTANT_INVITES,
            impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES,
            label: ek.Z.Messages.INVITES,
            element: eL.Z,
            type: u.bT.CUSTOM,
            predicate: () => d
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => y
        },
        eK
    ];
}
function ez(e, t) {
    let n = Q.Z.getGuildPermissionProps(e);
    return eW({
        channels: t,
        showDirtyGuildTemplateIndicator: !1,
        ...n,
        showAccessRate: !1,
        canAccessClanSettings: n.isGuildAdmin && e.hasFeature(eB.oNc.CLAN),
        welcomeScreenEmpty: z.Z.isEmpty(e.id)
    })
        .filter((e) => {
            let { section: t } = e;
            return t !== u.ID.HEADER && t !== u.ID.DIVIDER;
        })
        .filter((e) => null == e.predicate || e.predicate());
}
function eK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    I.ZP.trackWithMetadata(eB.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: t,
        destination_pane: e,
        location: n
    });
}
let eq = {
    canManageGuild: !1,
    canManageChannels: !1,
    canManageRoles: !1,
    canManageBans: !1,
    canManageNicknames: !1,
    canManageGuildExpressions: !1,
    canViewAuditLog: !1,
    canManageWebhooks: !1,
    canAccessMembersPage: !1,
    canViewGuildAnalytics: !1,
    isOwner: !1,
    isOwnerWithRequiredMfaLevel: !1,
    isGuildAdmin: !1
};
class eX extends a.PureComponent {
    componentDidMount() {
        eK(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        en.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: n, isGuildAdmin: s, canManageGuild: a, canManageRoles: i, canManageBans: r, canManageNicknames: l, canManageGuildExpressions: o, canViewAuditLog: d, canManageWebhooks: u, canAccessMembersPage: _, canViewGuildAnalytics: I } = this.props;
        n !== t && eK(n, t), ((!s && !a && !i && !r && !l && !o && !d && !_ && !u) || (!d && n === eB.pNK.AUDIT_LOG) || (!i && n === eB.pNK.ROLES) || (!o && n === eB.pNK.EMOJI) || (!o && n === eB.pNK.STICKERS) || (!o && n === eB.pNK.SOUNDBOARD) || (!r && n === eB.pNK.BANS) || (!I && n === eB.pNK.ANALYTICS) || (!_ && n === eB.pNK.MEMBERS)) && (0, c.xf)();
    }
    render() {
        var e, t;
        let { theme: n, sidebarTheme: a, section: i, guild: r, channels: l, isGuildAdmin: o, canManageGuild: u, canViewAuditLog: _, canManageRoles: I, canManageGuildExpressions: E, canManageWebhooks: T, canManageBans: m, canAccessMembersPage: N, canViewGuildAnalytics: S, isOwner: g, isOwnerWithRequiredMfaLevel: h, showDirtyGuildTemplateIndicator: C, memberCount: x, showAccessRate: p, onboardingStep: R, onboardingEnabled: L, welcomeScreenEmpty: f, guildMetadata: O, canAccessClanSettings: A } = this.props;
        if (null == r) return null;
        let M = eW({
                guild: r,
                channels: l,
                isGuildAdmin: o,
                canManageGuild: u,
                canViewAuditLog: _,
                canManageRoles: I,
                canManageGuildExpressions: E,
                canManageWebhooks: T,
                canManageBans: m,
                canAccessMembersPage: N,
                canViewGuildAnalytics: S,
                isOwner: g,
                isOwnerWithRequiredMfaLevel: h,
                showDirtyGuildTemplateIndicator: C,
                memberCount: x,
                showAccessRate: p,
                onboardingStep: R,
                onboardingEnabled: L,
                welcomeScreenEmpty: f,
                guildMetadata: O,
                section: i,
                canAccessClanSettings: A
            }),
            D = (null === (t = M.find((e) => e.section === i)) || void 0 === t ? void 0 : null === (e = t.predicate) || void 0 === e ? void 0 : e.call(t)) !== !1;
        return (0, s.jsxs)('div', {
            children: [
                (0, s.jsx)(d.ZP, {
                    theme: n,
                    sidebarTheme: a,
                    section: D && null != i ? i : eB.pNK.OVERVIEW,
                    onSetSection: en.Z.setSection,
                    onClose: c.xf,
                    title: eV(r),
                    sections: M
                }),
                (0, s.jsx)(k.d, { guildId: r.id })
            ]
        });
    }
}
function eQ() {
    var e;
    let { guild: t, section: n, analyticsLocation: i, guildMetadata: l, isGuildMetadataLoaded: o } = (0, r.cj)([eo.Z], () => eo.Z.getProps()),
        { analyticsLocations: c } = (0, E.ZP)(_.Z.GUILD_SETTINGS),
        d = (0, r.e7)([V.Z], () => V.Z.theme),
        u = (0, r.e7)([V.Z], () => (V.Z.darkSidebar ? eB.BRd.DARK : void 0)),
        I = (0, r.e7)([q.ZP], () => (null != t ? q.ZP.getChannels(t.id).SELECTABLE : null), [t]),
        T = (0, r.cj)([Q.Z], () => (null != t ? Q.Z.getGuildPermissionProps(t) : eq)),
        m = null == t ? void 0 : t.id,
        N = (0, r.e7)([Q.Z], () => null != t && Q.Z.canAccessGuildSettings(t)),
        S = null != t && (0, ee.Fv)(t.id),
        g = S || N,
        h = S || T.canViewGuildAnalytics,
        { shouldFetchMemberInsights: C, hasAccessRate: p } = (0, r.cj)([ea.Z], () => ({
            shouldFetchMemberInsights: null != t && ea.Z.shouldFetchMemberInsights(t.id),
            hasAccessRate: null != t && ea.Z.getMemberInsights(t.id).hasAccessRate
        }));
    a.useEffect(() => {
        !o && null != m && (0, x.aC)(m);
    }, [o, m]),
        a.useEffect(() => {
            g && h && C && null != m && (0, es.r2)(m);
        }, [g, h, C, m]);
    let R = null !== (e = null == t ? void 0 : t.hasFeature(eB.oNc.COMMUNITY)) && void 0 !== e && e;
    a.useEffect(() => {
        null != m && R && ((0, O.eM)(m), (0, Y.RM)(m));
    }, [m, R]);
    let { homeSettingsEnabled: L } = (0, v.kZ)(null != m ? m : eB.lds);
    a.useEffect(() => {
        null != m && L && (0, D.cP)(m);
    }, [L, m]);
    let { showAccessRate: f } = (0, ee.eA)(null == t ? void 0 : t.id, !p || !h || !g),
        M = T.isGuildAdmin && (null == t ? void 0 : t.hasFeature(eB.oNc.CLAN)),
        j = (0, r.e7)(
            [F.Z],
            () => {
                var e;
                return (null == t ? void 0 : t.id) != null && (null === (e = F.Z.getForGuild(t.id)) || void 0 === e ? void 0 : e.isDirty) === !0;
            },
            [t]
        ),
        Z = (0, r.e7)([X.Z], () => X.Z.getMemberCount(null == t ? void 0 : t.id), [t]);
    a.useEffect(() => {
        null != m && T.canManageGuild && y.Z.loadTemplatesForGuild(m);
    }, [m, T.canManageGuild]),
        a.useEffect(() => {
            !g && en.Z.close();
        }, [g]);
    let b = (0, r.e7)([eu.Z], () => eu.Z.getCurrentPage()),
        U = (0, r.e7)([A.Z], () => null != m && A.Z.getEnabled(m)),
        G = (0, r.e7)([z.Z], () => null != m && z.Z.isEmpty(m));
    return (0, s.jsx)(E.Gt, {
        value: c,
        children: (0, s.jsx)(eX, {
            guild: t,
            section: n,
            theme: d,
            sidebarTheme: u,
            channels: I,
            showDirtyGuildTemplateIndicator: j,
            analyticsLocation: i,
            memberCount: Z,
            ...T,
            canViewGuildAnalytics: h,
            showAccessRate: f,
            onboardingStep: b,
            onboardingEnabled: U,
            welcomeScreenEmpty: G,
            guildMetadata: l,
            canAccessClanSettings: M
        })
    });
}
