n.r(t),
    n.d(t, {
        default: function () {
            return e1;
        },
        getGuildSettingsSections: function () {
            return eQ;
        }
    }),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(990547),
    s = n(442837),
    a = n(704215),
    o = n(481060),
    c = n(37234),
    d = n(503089),
    u = n(493544),
    m = n(100527),
    h = n(367907),
    g = n(906732),
    x = n(132871),
    p = n(147890),
    f = n(353093),
    C = n(593128),
    I = n(979264),
    _ = n(223892),
    v = n(738774),
    N = n(605236),
    T = n(688465),
    b = n(456268),
    j = n(676317),
    S = n(874993),
    E = n(63568),
    R = n(745752),
    y = n(45966),
    A = n(637853),
    Z = n(526120),
    L = n(352981),
    D = n(610403),
    O = n(923726),
    P = n(144507),
    k = n(303737),
    M = n(15030),
    w = n(220685),
    B = n(751189),
    U = n(409059),
    G = n(810788),
    F = n(918658),
    H = n(84615),
    z = n(163400),
    V = n(210887),
    W = n(524329),
    Y = n(575258),
    K = n(995532),
    q = n(276687),
    X = n(984933),
    Q = n(650774),
    J = n(496675),
    $ = n(594174),
    ee = n(585483),
    et = n(771212),
    en = n(85001),
    ei = n(434404),
    er = n(146596),
    el = n(559368),
    es = n(600553),
    ea = n(360606),
    eo = n(894376),
    ec = n(946724),
    ed = n(999382),
    eu = n(44550),
    em = n(853714),
    eh = n(359191),
    eg = n(84658),
    ex = n(142961),
    ep = n(730910),
    ef = n(475013),
    eC = n(213956),
    eI = n(702478),
    e_ = n(247031),
    ev = n(787561),
    eN = n(579648),
    eT = n(511480),
    eb = n(460461),
    ej = n(29605),
    eS = n(365307),
    eE = n(497666),
    eR = n(324330),
    ey = n(495300),
    eA = n(312397),
    eZ = n(651780),
    eL = n(279542),
    eD = n(413335),
    eO = n(665324),
    eP = n(208150),
    ek = n(353398),
    eM = n(365774),
    ew = n(803288),
    eB = n(804153),
    eU = n(708510),
    eG = n(237245),
    eF = n(981631),
    eH = n(308083),
    ez = n(190378),
    eV = n(135899),
    eW = n(388032),
    eY = n(413929);
function eK(e) {
    return '' !== e.toString() ? e.toString() : eW.intl.string(eW.t['154/bG']);
}
function eq(e, t) {
    if (y.Z.getEnabled(e)) return eW.intl.string(eW.t.pPSmxs).toUpperCase();
    if ((0, ex.C)(e)) return eW.intl.string(eW.t.HDF4o6).toUpperCase();
    let n = eg.ug,
        i = n.findIndex((e) => e === t);
    if (-1 !== i)
        return eW.intl.formatToPlainString(eW.t['5r28iY'], {
            count: i + 1,
            total: n.length
        });
}
function eX(e) {
    var t;
    let { guild: r, isGuildAdmin: s, canManageGuild: d, canViewAuditLog: m, canManageRoles: h, canManageGuildExpressions: g, canManageWebhooks: b, canUnlinkChannels: E, canManageBans: R, canAccessMembersPage: y, canViewGuildAnalytics: Z, isOwner: B, isOwnerWithRequiredMfaLevel: U, showDirtyGuildTemplateIndicator: F, memberCount: z, showAccessRate: V, onboardingStep: W, onboardingEnabled: K, welcomeScreenEmpty: X, guildMetadata: Q, section: J, canAccessClanSettings: et, memberVerificationRolloutEnabled: er } = e,
        el = es.$.getCurrentConfig({
            guildId: r.id,
            location: 'generateSections'
        }).enabled,
        eg = () =>
            (0, P.X$)({
                guild: r,
                isOwner: B,
                canManageGuildRoleSubscriptions: (0, P.H2)(r),
                isMonetizationWaitlistEnabledForGuild: (0, _.mG)(r.id),
                isGuildEligibleForRoleSubscriptions: (0, O.kT)(r.id),
                isExpeditedMonetizationOnboardingGuild: (0, _.Rw)(r),
                isUserInCreatorMonetizationEligibleCountry: (0, _.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, v.cu)(r.id)
            }),
        ex = (0, L.p)(r.id, 'guild_settings'),
        eX = !1 === r.hasFeature(eF.oNc.CREATOR_MONETIZABLE) && !1 === r.hasFeature(eF.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
        eQ =
            ex && eX
                ? {
                      label: (0, i.jsx)('div', {
                          className: eY.roleSubLabel,
                          children: eW.intl.string(eW.t.Tn7Koq)
                      }),
                      ariaLabel: eW.intl.string(eW.t.Tn7Koq)
                  }
                : {
                      label: (0, i.jsx)('div', {
                          className: eY.roleSubLabel,
                          children: eW.intl.string(eW.t['KzCF//'])
                      }),
                      ariaLabel: eW.intl.string(eW.t['KzCF//'])
                  },
        eJ = (null === (t = r.clan) || void 0 === t ? void 0 : t.badge) != null ? (0, f.ky)(r.id, r.clan.badge, eH.NC.SIZE_16) : null,
        e$ = {
            section: eF.pNK.DELETE,
            onClick() {
                let e = $.default.getCurrentUser();
                if (null == e) return;
                let t = r.toString(),
                    l = {
                        header: eW.intl.formatToPlainString(eW.t.us7mCw, { name: t }),
                        confirmText: eW.intl.string(eW.t.l3hWPz),
                        cancelText: eW.intl.string(eW.t['ETE/oK']),
                        onConfirm: () => {
                            ee.S.subscribeOnce(eF.CkL.LAYER_POP_COMPLETE, () => {
                                ei.Z.deleteGuild(r.id, t).then(() => {
                                    if ((0, N.un)(a.z.GUILD_DELETE_FEEDBACK)) return;
                                    en.Z.trackExposure({ location: 'e4be39_1' });
                                    let { showFeedback: e } = en.Z.getCurrentConfig({ location: 'e4be39_2' }, { autoTrackExposure: !1 });
                                    e &&
                                        (0, o.openModalLazy)(async () => {
                                            let { default: e } = await n.e('31811').then(n.bind(n, 945903));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    guildId: r.id
                                                });
                                        });
                                });
                            }),
                                (0, c.xf)();
                        }
                    };
                e.mfaEnabled
                    ? (0, o.openModal)((e) =>
                          (0, i.jsx)(o.ConfirmModal, {
                              ...e,
                              ...l,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  children: eW.intl.format(eW.t['Zuo+VV'], { name: t })
                              })
                          })
                      )
                    : (0, o.openModalLazy)(async () => {
                          let { default: e } = await n.e('18259').then(n.bind(n, 1493));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  ...l,
                                  validationText: t,
                                  instructionText: eW.intl.string(eW.t.abprOD),
                                  errorText: eW.intl.string(eW.t['c2/DS0']),
                                  children: eW.intl.format(eW.t['Zuo+VV'], { name: t })
                              });
                      });
            },
            label: eW.intl.string(eW.t.l3hWPz),
            ariaLabel: eW.intl.string(eW.t.l3hWPz),
            icon: (0, i.jsx)(o.TrashIcon, {
                size: 'xs',
                color: 'currentColor'
            }),
            predicate: () => U
        },
        e0 = er
            ? {
                  section: eF.pNK.DISCOVERY,
                  impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                  label: eW.intl.string(eW.t.oGaVGx),
                  element: eU.O,
                  notice: {
                      stores: [eo.Z],
                      element: eG.w
                  },
                  predicate: () => d,
                  ariaLabel: eW.intl.string(eW.t.oGaVGx)
              }
            : {
                  section: eF.pNK.DISCOVERY,
                  impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                  label: eW.intl.string(eW.t.oGaVGx),
                  element: eT.Z,
                  notice: {
                      stores: [ed.Z],
                      element: eT.s
                  },
                  predicate: () => d && r.hasFeature(eF.oNc.COMMUNITY),
                  ariaLabel: r.hasFeature(eF.oNc.DISCOVERABLE) ? eW.intl.string(eW.t.oGaVGx) : eW.intl.string(eW.t.XU0S6u)
              };
    if (el) {
        let e = [
                { section: u.ID.DIVIDER },
                {
                    section: u.ID.HEADER,
                    label: eW.intl.string(eW.t.zrSbNj)
                },
                {
                    section: eF.pNK.EMOJI,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eW.intl.string(eW.t.sMOuub),
                    element: ej.ZP,
                    predicate: () => g
                },
                {
                    section: eF.pNK.STICKERS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eW.intl.string(eW.t.R5nQkZ),
                    ariaLabel: eW.intl.string(eW.t.R5nQkZ),
                    element: eP.Z,
                    predicate: () => g
                },
                {
                    section: eF.pNK.SOUNDBOARD,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eW.intl.string(eW.t.OWQNYm),
                    ariaLabel: eW.intl.string(eW.t.OWQNYm),
                    element: eO.Z,
                    predicate: () => g
                },
                {
                    section: eF.pNK.APP_DIRECTORY,
                    label: eW.intl.string(eW.t.PHjkRE),
                    ariaLabel: eW.intl.string(eW.t.PHjkRE),
                    onClick() {
                        (0, p.goToAppDirectory)({
                            guildId: r.id,
                            entrypoint: {
                                name: x.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
                                guildSettingsSection: J
                            }
                        }),
                            (0, c.xf)();
                    }
                },
                {
                    section: eF.pNK.INTEGRATIONS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eW.intl.string(eW.t.CIsNZ2),
                    ariaLabel: eW.intl.string(eW.t.CIsNZ2),
                    element: eS.Z,
                    notice: {
                        stores: [ea.default, ed.Z],
                        element: eS.j
                    },
                    predicate: () => d || b || E
                }
            ],
            t =
                h || y || d
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: eW.intl.string(eW.t.WqkqPj)
                          },
                          {
                              section: eF.pNK.ROLES,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_ROLES,
                              label: eW.intl.string(eW.t.LPJmLy),
                              element: ef.Z,
                              type: u.bT.MINIMAL,
                              ariaLabel: eW.intl.string(eW.t.KXcECw),
                              notice: {
                                  stores: [ec.Z],
                                  element: ef._
                              },
                              predicate: () => h
                          },
                          {
                              section: eF.pNK.MEMBERS,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                              label: (0, i.jsx)(eR.$, {}),
                              ariaLabel: eW.intl.string(eW.t['9Oq93t']),
                              element: eR.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => y
                          },
                          {
                              section: eF.pNK.INSTANT_INVITES,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_INVITES,
                              label: eW.intl.string(eW.t['9F90iY']),
                              element: eE.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => d
                          }
                      ]
                    : [],
            n = r.hasFeature(eF.oNc.COMMUNITY),
            s = d && n,
            o = d && !n,
            f = !n && ((0, j.Nb)(r.id) || (0, j.ze)(r.id)),
            _ =
                s || o || f || m || R
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: eW.intl.string(eW.t['02hvfn'])
                          },
                          {
                              section: eF.pNK.SAFETY,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_SAFETY,
                              label: eW.intl.string(eW.t['suhY+f']),
                              ariaLabel: eW.intl.string(eW.t['suhY+f']),
                              element: eC.Z,
                              newIndicatorDismissibleContentTypes: [a.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                              predicate: () => s
                          },
                          {
                              section: eF.pNK.MODERATION,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_MODERATION,
                              label: eW.intl.string(eW.t['suhY+f']),
                              element: eL.ZP,
                              predicate: () => o
                          },
                          {
                              section: eF.pNK.GUILD_AUTOMOD,
                              label: (0, i.jsx)('div', {
                                  className: eY.landingPageTabLink,
                                  children: eW.intl.string(eW.t.uRelg4)
                              }),
                              ariaLabel: eW.intl.string(eW.t.uRelg4),
                              element: S.Z,
                              newIndicatorDismissibleContentTypes: null,
                              predicate: () => f
                          },
                          {
                              section: eF.pNK.AUDIT_LOG,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                              label: eW.intl.string(eW.t.SPWLyc),
                              element: em.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => m
                          },
                          {
                              section: eF.pNK.BANS,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_BANS,
                              label: eW.intl.string(eW.t.ZbeITU),
                              element: e_.Z,
                              predicate: () => R
                          }
                      ]
                    : [],
            v = (0, A.wC)(r.id),
            N = n && Z,
            P = d && (r.hasFeature(eF.oNc.DISCOVERABLE) || !!(null == Q ? void 0 : Q.isPublished)),
            B = d && !X && !r.hasFeature(eF.oNc.GUILD_SERVER_GUIDE),
            $ =
                n && (d || v || N || P || B)
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: eW.intl.string(eW.t['1g9A/f'])
                          },
                          {
                              section: eF.pNK.COMMUNITY,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW,
                              label: eW.intl.string(eW.t['/dp6yc']),
                              element: ev.Z,
                              ariaLabel: eW.intl.string(eW.t['/dp6yc']),
                              notice: {
                                  stores: [ed.Z],
                                  element: ev.X
                              },
                              predicate: () => d
                          },
                          {
                              section: eF.pNK.ONBOARDING,
                              label: eW.intl.string(eW.t.LdxCKy),
                              element: ey.Z,
                              ariaLabel: eW.intl.string(eW.t.LdxCKy),
                              newIndicatorDismissibleContentTypes: K ? null : [a.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                              notice: {
                                  stores: [eh.Z],
                                  element: ep.Z
                              },
                              predicate: () => v,
                              decoration: eq(r.id, W)
                          },
                          {
                              section: eF.pNK.ANALYTICS,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                              label: eW.intl.string(eW.t['0wWfUF']),
                              ariaLabel: eW.intl.string(eW.t['0wWfUF']),
                              element: eI.Z,
                              newIndicator: G.Z.hasHotspot(ez.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
                              newIndicatorDismissibleContentTypes: V ? [a.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
                              predicate: () => N
                          },
                          e0,
                          {
                              section: eF.pNK.DISCOVERY_LANDING_PAGE,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                              label: (0, i.jsxs)('div', {
                                  className: eY.landingPageTabLink,
                                  children: [eW.intl.string(eW.t.kGlQGB), ' ', (0, i.jsx)(T.Z, {})]
                              }),
                              ariaLabel: eW.intl.string(eW.t.kGlQGB),
                              element: eb.Z,
                              notice: {
                                  stores: [ed.Z],
                                  element: eb.J
                              },
                              type: u.bT.CUSTOM,
                              predicate: () => P
                          },
                          {
                              section: eF.pNK.COMMUNITY_WELCOME,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                              label: eW.intl.string(eW.t['2rkmDg']),
                              ariaLabel: eW.intl.string(eW.t['2rkmDg']),
                              element: eN.Z,
                              notice: {
                                  stores: [Y.Z],
                                  element: q.Z
                              },
                              predicate: () => B
                          }
                      ]
                    : [],
            ee = eg()
                ? [
                      { section: u.ID.DIVIDER },
                      {
                          section: u.ID.HEADER,
                          label: eW.intl.string(eW.t.mbn3bW)
                      },
                      {
                          ...eQ,
                          section: eF.pNK.ROLE_SUBSCRIPTIONS,
                          element: M.Z,
                          type: u.bT.CUSTOM,
                          newIndicatorDismissibleContentTypes: (0, k.sO)(r) ? [a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                      },
                      {
                          section: eF.pNK.GUILD_PRODUCTS,
                          label: eW.intl.string(eW.t.X6h2g4),
                          ariaLabel: eW.intl.string(eW.t.X6h2g4),
                          element: D.Z,
                          predicate: () => (0, L.p)(r.id, 'guild_product_settings_predicate') && (0, O.sy)(r)
                      },
                      {
                          section: eF.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                          impressionName: l.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                          newIndicator: 2022 === new Date().getFullYear(),
                          label: eW.intl.string(eW.t.ipTYsr),
                          ariaLabel: eW.intl.string(eW.t.ipTYsr),
                          element: w.Z,
                          predicate: () => (0, O.sy)(r)
                      }
                  ]
                : [],
            en = null != et && et,
            ei = d && !r.hasFeature(eF.oNc.COMMUNITY),
            er =
                en || ei || d
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: eF.pNK.CLAN,
                              label: eW.intl.string(eW.t['6g8uHB']),
                              ariaLabel: eW.intl.string(eW.t['6g8uHB']),
                              onClick() {
                                  (0, H.q4)(
                                      (e) => {
                                          let { closeLayer: t } = e;
                                          return (0, i.jsx)(C.Z, {
                                              onClose: t,
                                              guildId: r.id
                                          });
                                      },
                                      { layerKey: eH.q2 }
                                  ),
                                      (0, c.xf)();
                              },
                              predicate: () => en,
                              icon: null != eJ ? (0, i.jsx)(I.KQ, { src: eJ }) : null
                          },
                          {
                              section: eF.pNK.COMMUNITY,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                              label: eW.intl.string(eW.t.ElKTeX),
                              element: ev.Z,
                              ariaLabel: eW.intl.string(eW.t.ElKTeX),
                              newIndicator: null != z && z >= eV.U3 && G.Z.hasHotspot(ez.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                              notice: {
                                  stores: [ed.Z],
                                  element: ev.X
                              },
                              predicate: () => ei
                          },
                          ei ? e0 : void 0,
                          {
                              section: eF.pNK.WIDGET,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_WIDGET,
                              label: eW.intl.string(eW.t.ACjbTk),
                              element: eB.Z,
                              predicate: () => d
                          },
                          {
                              section: eF.pNK.VANITY_URL,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                              label: eW.intl.string(eW.t['5XZKy8']),
                              element: ew.Z,
                              notice: {
                                  stores: [eu.Z],
                                  element: ew.T
                              },
                              predicate: () => d
                          },
                          {
                              section: eF.pNK.GUILD_TEMPLATES,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                              label: (0, i.jsx)(eM.Z, { showDirtyIndicator: F }),
                              ariaLabel: eW.intl.string(eW.t.KUw7Sk),
                              element: ek.ZP,
                              notice: {
                                  stores: [ek.Sf],
                                  element: ek.Q5
                              },
                              predicate: () => d
                          }
                      ].filter((e) => void 0 !== e)
                    : [];
        return [
            {
                section: u.ID.HEADER,
                label: eK(r)
            },
            {
                section: eF.pNK.OVERVIEW,
                impressionName: l.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                label: eW.intl.string(eW.t['/dp6yc']),
                ariaLabel: eW.intl.string(eW.t['/dp6yc']),
                element: eA.Z,
                notice: {
                    stores: [ed.Z],
                    element: eA.O
                }
            },
            ...e,
            ...t,
            ..._,
            ...$,
            ...ee,
            { section: u.ID.DIVIDER },
            {
                section: eF.pNK.GUILD_PREMIUM,
                impressionName: l.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                label: eW.intl.string(eW.t['8+VX4+']),
                ariaLabel: eW.intl.string(eW.t['8+VX4+']),
                element: eZ.Z,
                className: eY.serverBoostTabItem,
                icon: (0, i.jsx)(eD.Z, { className: eY.icon })
            },
            ...er,
            {
                section: u.ID.DIVIDER,
                predicate: () => U
            },
            e$
        ];
    }
    return [
        {
            section: u.ID.HEADER,
            label: eK(r)
        },
        {
            section: eF.pNK.OVERVIEW,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
            label: eW.intl.string(eW.t['/dp6yc']),
            ariaLabel: eW.intl.string(eW.t['/dp6yc']),
            element: eA.Z,
            notice: {
                stores: [ed.Z],
                element: eA.O
            }
        },
        {
            section: eF.pNK.ROLES,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_ROLES,
            label: eW.intl.string(eW.t.LPJmLy),
            element: ef.Z,
            type: u.bT.MINIMAL,
            ariaLabel: eW.intl.string(eW.t.KXcECw),
            notice: {
                stores: [ec.Z],
                element: ef._
            },
            predicate: () => h
        },
        {
            section: eF.pNK.EMOJI,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_EMOJI,
            label: eW.intl.string(eW.t.sMOuub),
            element: ej.ZP,
            predicate: () => g
        },
        {
            section: eF.pNK.STICKERS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_STICKERS,
            label: eW.intl.string(eW.t.R5nQkZ),
            ariaLabel: eW.intl.string(eW.t.R5nQkZ),
            element: eP.Z,
            predicate: () => g
        },
        {
            section: eF.pNK.SOUNDBOARD,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
            label: eW.intl.string(eW.t.OWQNYm),
            ariaLabel: eW.intl.string(eW.t.OWQNYm),
            element: eO.Z,
            predicate: () => g
        },
        {
            section: eF.pNK.WIDGET,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_WIDGET,
            label: eW.intl.string(eW.t.ACjbTk),
            element: eB.Z,
            predicate: () => d
        },
        {
            section: eF.pNK.GUILD_TEMPLATES,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
            label: (0, i.jsx)(eM.Z, { showDirtyIndicator: F }),
            ariaLabel: eW.intl.string(eW.t.KUw7Sk),
            element: ek.ZP,
            notice: {
                stores: [ek.Sf],
                element: ek.Q5
            },
            predicate: () => d
        },
        {
            section: eF.pNK.VANITY_URL,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
            label: eW.intl.string(eW.t['5XZKy8']),
            element: ew.Z,
            notice: {
                stores: [eu.Z],
                element: ew.T
            },
            predicate: () => s
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => d || b
        },
        {
            section: u.ID.HEADER,
            label: eW.intl.string(eW.t.PHjkRE),
            predicate: () => d || b
        },
        {
            section: eF.pNK.INTEGRATIONS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
            label: eW.intl.string(eW.t.CIsNZ2),
            ariaLabel: eW.intl.string(eW.t.CIsNZ2),
            element: eS.Z,
            notice: {
                stores: [ea.default, ed.Z],
                element: eS.j
            },
            predicate: () => d || b
        },
        {
            section: eF.pNK.APP_DIRECTORY,
            label: eW.intl.string(eW.t.AKcFUl),
            ariaLabel: eW.intl.string(eW.t.AKcFUl),
            onClick() {
                (0, p.goToAppDirectory)({
                    guildId: r.id,
                    entrypoint: {
                        name: x.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
                        guildSettingsSection: J
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
            label: eW.intl.string(eW.t['5tbTdX']),
            predicate: () => d
        },
        {
            section: eF.pNK.SAFETY,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_SAFETY,
            label: eW.intl.string(eW.t['suhY+f']),
            ariaLabel: eW.intl.string(eW.t['suhY+f']),
            element: eC.Z,
            newIndicatorDismissibleContentTypes: [a.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
            predicate: () => d && r.hasFeature(eF.oNc.COMMUNITY)
        },
        {
            section: eF.pNK.MODERATION,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_MODERATION,
            label: eW.intl.string(eW.t['suhY+f']),
            element: eL.ZP,
            predicate: () => d && !r.hasFeature(eF.oNc.COMMUNITY)
        },
        {
            section: eF.pNK.GUILD_AUTOMOD,
            label: (0, i.jsx)('div', {
                className: eY.landingPageTabLink,
                children: eW.intl.string(eW.t.uRelg4)
            }),
            ariaLabel: eW.intl.string(eW.t.uRelg4),
            element: S.Z,
            newIndicatorDismissibleContentTypes: null,
            predicate: () => !r.hasFeature(eF.oNc.COMMUNITY) && ((0, j.Nb)(r.id) || (0, j.ze)(r.id))
        },
        {
            section: eF.pNK.AUDIT_LOG,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
            label: eW.intl.string(eW.t.SPWLyc),
            element: em.Z,
            type: u.bT.CUSTOM,
            predicate: () => m
        },
        {
            section: eF.pNK.BANS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_BANS,
            label: eW.intl.string(eW.t.ZbeITU),
            element: e_.Z,
            predicate: () => R
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => d || Z
        },
        {
            section: u.ID.HEADER,
            label: eW.intl.string(eW.t['1g9A/f']),
            predicate: () => !et && (d || Z)
        },
        {
            section: eF.pNK.CLAN,
            label: eW.intl.string(eW.t['6g8uHB']),
            ariaLabel: eW.intl.string(eW.t['6g8uHB']),
            onClick() {
                (0, H.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(C.Z, {
                            onClose: t,
                            guildId: r.id
                        });
                    },
                    { layerKey: eH.q2 }
                ),
                    (0, c.xf)();
            },
            predicate: () => null != et && et,
            icon: null != eJ ? (0, i.jsx)(I.KQ, { src: eJ }) : null
        },
        {
            section: eF.pNK.COMMUNITY,
            impressionName: r.hasFeature(eF.oNc.COMMUNITY) ? l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : l.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
            label: r.hasFeature(eF.oNc.COMMUNITY) ? eW.intl.string(eW.t['/dp6yc']) : eW.intl.string(eW.t.ElKTeX),
            element: ev.Z,
            ariaLabel: r.hasFeature(eF.oNc.COMMUNITY) ? eW.intl.string(eW.t['/dp6yc']) : eW.intl.string(eW.t.ElKTeX),
            newIndicator: !r.hasFeature(eF.oNc.COMMUNITY) && null != z && z >= eV.U3 && G.Z.hasHotspot(ez.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
            notice: {
                stores: [ed.Z],
                element: ev.X
            },
            predicate: () => d
        },
        {
            section: eF.pNK.ONBOARDING,
            label: eW.intl.string(eW.t.LdxCKy),
            element: ey.Z,
            ariaLabel: eW.intl.string(eW.t.LdxCKy),
            newIndicatorDismissibleContentTypes: K ? null : [a.z.COMMUNITY_ONBOARDING_NEW_BADGE],
            notice: {
                stores: [eh.Z],
                element: ep.Z
            },
            predicate: () => (0, A.wC)(r.id),
            decoration: eq(r.id, W)
        },
        {
            section: eF.pNK.ANALYTICS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
            label: eW.intl.string(eW.t['0wWfUF']),
            ariaLabel: eW.intl.string(eW.t['0wWfUF']),
            element: eI.Z,
            newIndicator: G.Z.hasHotspot(ez.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
            newIndicatorDismissibleContentTypes: V ? [a.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
            predicate: () => Z && r.hasFeature(eF.oNc.COMMUNITY)
        },
        e0,
        {
            section: eF.pNK.DISCOVERY_LANDING_PAGE,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
            label: (0, i.jsxs)('div', {
                className: eY.landingPageTabLink,
                children: [eW.intl.string(eW.t.kGlQGB), ' ', (0, i.jsx)(T.Z, {})]
            }),
            ariaLabel: eW.intl.string(eW.t.kGlQGB),
            element: eb.Z,
            notice: {
                stores: [ed.Z],
                element: eb.J
            },
            type: u.bT.CUSTOM,
            predicate: () => d && (r.hasFeature(eF.oNc.DISCOVERABLE) || !!(null == Q ? void 0 : Q.isPublished))
        },
        {
            section: eF.pNK.COMMUNITY_WELCOME,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
            label: eW.intl.string(eW.t['2rkmDg']),
            ariaLabel: eW.intl.string(eW.t['2rkmDg']),
            element: eN.Z,
            notice: {
                stores: [Y.Z],
                element: q.Z
            },
            predicate: () => d && r.hasFeature(eF.oNc.COMMUNITY) && !X && !r.hasFeature(eF.oNc.GUILD_SERVER_GUIDE)
        },
        {
            section: u.ID.DIVIDER,
            predicate: eg
        },
        {
            section: u.ID.HEADER,
            label: eW.intl.string(eW.t.mbn3bW),
            predicate: eg
        },
        {
            ...eQ,
            section: eF.pNK.ROLE_SUBSCRIPTIONS,
            element: M.Z,
            type: u.bT.CUSTOM,
            predicate: eg,
            newIndicatorDismissibleContentTypes: (0, k.sO)(r) ? [a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        },
        {
            section: eF.pNK.GUILD_PRODUCTS,
            label: eW.intl.string(eW.t.X6h2g4),
            ariaLabel: eW.intl.string(eW.t.X6h2g4),
            element: D.Z,
            predicate: () => eg() && (0, L.p)(r.id, 'guild_product_settings_predicate') && (0, O.sy)(r)
        },
        {
            section: eF.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
            impressionName: l.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
            newIndicator: 2022 === new Date().getFullYear(),
            label: eW.intl.string(eW.t.ipTYsr),
            ariaLabel: eW.intl.string(eW.t.ipTYsr),
            element: w.Z,
            predicate: () => eg() && (0, O.sy)(r)
        },
        { section: u.ID.DIVIDER },
        {
            section: eF.pNK.GUILD_PREMIUM,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
            label: eW.intl.string(eW.t['8+VX4+']),
            ariaLabel: eW.intl.string(eW.t['8+VX4+']),
            element: eZ.Z,
            className: eY.serverBoostTabItem,
            icon: (0, i.jsx)(eD.Z, { className: eY.icon })
        },
        { section: u.ID.DIVIDER },
        {
            section: u.ID.HEADER,
            label: eW.intl.string(eW.t['+OecxM'])
        },
        {
            section: eF.pNK.MEMBERS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_MEMBERS,
            label: (0, i.jsx)(eR.$, {}),
            ariaLabel: eW.intl.string(eW.t['9Oq93t']),
            element: eR.Z,
            type: u.bT.CUSTOM,
            predicate: () => y
        },
        {
            section: eF.pNK.INSTANT_INVITES,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_INVITES,
            label: eW.intl.string(eW.t['9F90iY']),
            element: eE.Z,
            type: u.bT.CUSTOM,
            predicate: () => d
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => U
        },
        e$
    ];
}
function eQ(e, t) {
    let n = J.Z.getGuildPermissionProps(e),
        i = (0, z.p)(e.id).length > 0,
        r = (0, E.K2)(e.id, 'getGuildSettingsSections');
    return eX({
        channels: t,
        showDirtyGuildTemplateIndicator: !1,
        ...n,
        canUnlinkChannels: i,
        showAccessRate: !1,
        canAccessClanSettings: n.isGuildAdmin && e.hasFeature(eF.oNc.CLAN),
        welcomeScreenEmpty: K.Z.isEmpty(e.id),
        memberVerificationRolloutEnabled: r
    })
        .filter((e) => {
            let { section: t } = e;
            return t !== u.ID.HEADER && t !== u.ID.DIVIDER;
        })
        .filter((e) => null == e.predicate || e.predicate());
}
function eJ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    h.ZP.trackWithMetadata(eF.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: t,
        destination_pane: e,
        location: n
    });
}
let e$ = {
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
class e0 extends r.PureComponent {
    componentDidMount() {
        eJ(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        ei.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: n, isGuildAdmin: i, canManageGuild: r, canManageRoles: l, canManageBans: s, canManageNicknames: a, canManageGuildExpressions: o, canViewAuditLog: d, canManageWebhooks: u, canAccessMembersPage: m, canViewGuildAnalytics: h } = this.props;
        n !== t && eJ(n, t), ((!i && !r && !l && !s && !a && !o && !d && !m && !u) || (!d && n === eF.pNK.AUDIT_LOG) || (!l && n === eF.pNK.ROLES) || (!o && n === eF.pNK.EMOJI) || (!o && n === eF.pNK.STICKERS) || (!o && n === eF.pNK.SOUNDBOARD) || (!s && n === eF.pNK.BANS) || (!h && n === eF.pNK.ANALYTICS) || (!m && n === eF.pNK.MEMBERS)) && (0, c.xf)();
    }
    render() {
        var e, t;
        let { theme: n, sidebarTheme: r, section: l, guild: s, channels: a, isGuildAdmin: o, canManageGuild: u, canViewAuditLog: m, canManageRoles: h, canManageGuildExpressions: g, canManageWebhooks: x, canUnlinkChannels: p, canManageBans: f, canAccessMembersPage: C, canViewGuildAnalytics: I, isOwner: _, isOwnerWithRequiredMfaLevel: v, showDirtyGuildTemplateIndicator: N, memberCount: T, showAccessRate: b, onboardingStep: j, onboardingEnabled: S, welcomeScreenEmpty: E, guildMetadata: R, canAccessClanSettings: y, memberVerificationRolloutEnabled: A } = this.props;
        if (null == s) return null;
        let Z = eX({
                guild: s,
                channels: a,
                isGuildAdmin: o,
                canManageGuild: u,
                canViewAuditLog: m,
                canManageRoles: h,
                canManageGuildExpressions: g,
                canManageWebhooks: x,
                canUnlinkChannels: p,
                canManageBans: f,
                canAccessMembersPage: C,
                canViewGuildAnalytics: I,
                isOwner: _,
                isOwnerWithRequiredMfaLevel: v,
                showDirtyGuildTemplateIndicator: N,
                memberCount: T,
                showAccessRate: b,
                onboardingStep: j,
                onboardingEnabled: S,
                welcomeScreenEmpty: E,
                guildMetadata: R,
                section: l,
                canAccessClanSettings: y,
                memberVerificationRolloutEnabled: A
            }),
            L = (null === (t = Z.find((e) => e.section === l)) || void 0 === t ? void 0 : null === (e = t.predicate) || void 0 === e ? void 0 : e.call(t)) !== !1;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(d.ZP, {
                    theme: n,
                    sidebarTheme: r,
                    section: L && null != l ? l : eF.pNK.OVERVIEW,
                    onSetSection: ei.Z.setSection,
                    onClose: c.xf,
                    title: eK(s),
                    sections: Z
                }),
                (0, i.jsx)(F.d, { guildId: s.id })
            ]
        });
    }
}
function e1() {
    var e;
    let { guild: t, section: n, analyticsLocation: l, guildMetadata: a, isGuildMetadataLoaded: o } = (0, s.cj)([ed.Z], () => ed.Z.getProps()),
        { analyticsLocations: c } = (0, g.ZP)(m.Z.GUILD_SETTINGS),
        d = (0, s.e7)([V.Z], () => V.Z.theme),
        u = (0, s.e7)([V.Z], () => (V.Z.darkSidebar ? eF.BRd.DARK : void 0)),
        h = (0, s.e7)([X.ZP], () => (null != t ? X.ZP.getChannels(t.id).SELECTABLE : null), [t]),
        x = (0, s.cj)([J.Z], () => (null != t ? J.Z.getGuildPermissionProps(t) : e$)),
        p = null == t ? void 0 : t.id,
        f = (0, s.e7)([J.Z], () => null != t && J.Z.canAccessGuildSettings(t)),
        C = null != t && (0, et.Fv)(t.id),
        I = C || f,
        _ = C || x.canViewGuildAnalytics,
        { shouldFetchMemberInsights: v, hasAccessRate: N } = (0, s.cj)([el.Z], () => ({
            shouldFetchMemberInsights: null != t && el.Z.shouldFetchMemberInsights(t.id),
            hasAccessRate: null != t && el.Z.getMemberInsights(t.id).hasAccessRate
        }));
    r.useEffect(() => {
        !o && null != p && (0, b.aC)(p);
    }, [o, p]),
        r.useEffect(() => {
            I && _ && v && null != p && (0, er.r2)(p);
        }, [I, _, v, p]);
    let T = null !== (e = null == t ? void 0 : t.hasFeature(eF.oNc.COMMUNITY)) && void 0 !== e && e;
    r.useEffect(() => {
        null != p && T && ((0, R.eM)(p), (0, W.RM)(p));
    }, [p, T]),
        r.useEffect(() => {
            null != p && (0, Z.cP)(p);
        }, [p]);
    let { showAccessRate: j } = (0, et.eA)(null == t ? void 0 : t.id, !N || !_ || !I),
        S = x.isGuildAdmin && (null == t ? void 0 : t.hasFeature(eF.oNc.CLAN)),
        A = (0, s.e7)(
            [U.Z],
            () => {
                var e;
                return (null == t ? void 0 : t.id) != null && (null === (e = U.Z.getForGuild(t.id)) || void 0 === e ? void 0 : e.isDirty) === !0;
            },
            [t]
        ),
        L = (0, s.e7)([Q.Z], () => Q.Z.getMemberCount(null == t ? void 0 : t.id), [t]);
    r.useEffect(() => {
        null != p && x.canManageGuild && B.Z.loadTemplatesForGuild(p);
    }, [p, x.canManageGuild]),
        r.useEffect(() => {
            !I && ei.Z.close();
        }, [I]);
    let D = (0, s.e7)([eh.Z], () => eh.Z.getCurrentPage()),
        O = (0, s.e7)([y.Z], () => null != p && y.Z.getEnabled(p)),
        P = (0, s.e7)([K.Z], () => null != p && K.Z.isEmpty(p)),
        k = (0, z.F)(p).length > 0,
        M = (0, E.jS)(p, 'GuildSettings');
    return (0, i.jsx)(g.Gt, {
        value: c,
        children: (0, i.jsx)(e0, {
            guild: t,
            section: n,
            theme: d,
            sidebarTheme: u,
            channels: h,
            showDirtyGuildTemplateIndicator: A,
            analyticsLocation: l,
            memberCount: L,
            ...x,
            canUnlinkChannels: k,
            canViewGuildAnalytics: _,
            showAccessRate: j,
            onboardingStep: D,
            onboardingEnabled: O,
            welcomeScreenEmpty: P,
            guildMetadata: a,
            canAccessClanSettings: S,
            memberVerificationRolloutEnabled: M
        })
    });
}
