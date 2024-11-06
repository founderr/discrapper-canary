n.r(t),
    n.d(t, {
        default: function () {
            return eJ;
        },
        getGuildSettingsSections: function () {
            return eK;
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
    N = n(738774),
    v = n(296386),
    T = n(605236),
    j = n(688465),
    S = n(676317),
    b = n(874993),
    E = n(745752),
    R = n(45966),
    Z = n(637853),
    A = n(526120),
    L = n(621923),
    y = n(352981),
    D = n(610403),
    O = n(923726),
    M = n(144507),
    P = n(303737),
    k = n(15030),
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
    eo = n(946724),
    ec = n(999382),
    ed = n(44550),
    eu = n(853714),
    em = n(359191),
    eh = n(84658),
    eg = n(142961),
    ex = n(730910),
    ep = n(475013),
    ef = n(213956),
    eC = n(702478),
    eI = n(247031),
    e_ = n(787561),
    eN = n(579648),
    ev = n(511480),
    eT = n(460461),
    ej = n(29605),
    eS = n(365307),
    eb = n(497666),
    eE = n(324330),
    eR = n(495300),
    eZ = n(312397),
    eA = n(651780),
    eL = n(279542),
    ey = n(413335),
    eD = n(665324),
    eO = n(208150),
    eM = n(353398),
    eP = n(365774),
    ek = n(803288),
    ew = n(804153),
    eB = n(981631),
    eU = n(308083),
    eG = n(190378),
    eF = n(135899),
    eH = n(388032),
    ez = n(9917);
function eV(e) {
    return '' !== e.toString() ? e.toString() : eH.intl.string(eH.t['154/bG']);
}
function eW(e, t) {
    let { homeSettingsEnabled: n } = (0, L.l6)(e);
    if (R.Z.getEnabled(e)) return eH.intl.string(eH.t.pPSmxs).toUpperCase();
    if ((0, eg.C)(e)) return eH.intl.string(eH.t.HDF4o6).toUpperCase();
    let i = eh.ug.filter((e) => !!n || e !== eh.PG.HOME_SETTINGS || !1),
        r = i.findIndex((e) => e === t);
    if (-1 !== r)
        return eH.intl.formatToPlainString(eH.t['5r28iY'], {
            count: r + 1,
            total: i.length
        });
}
function eY(e) {
    var t;
    let { guild: r, isGuildAdmin: s, canManageGuild: d, canViewAuditLog: m, canManageRoles: h, canManageGuildExpressions: g, canManageWebhooks: v, canUnlinkChannels: E, canManageBans: R, canAccessMembersPage: A, canViewGuildAnalytics: L, isOwner: B, isOwnerWithRequiredMfaLevel: U, showDirtyGuildTemplateIndicator: F, memberCount: z, showAccessRate: V, onboardingStep: W, onboardingEnabled: K, welcomeScreenEmpty: X, guildMetadata: Q, section: J, canAccessClanSettings: et } = e,
        er = es.$.getCurrentConfig({
            guildId: r.id,
            location: 'generateSections'
        }).enabled,
        el = () =>
            (0, M.X$)({
                guild: r,
                isOwner: B,
                canManageGuildRoleSubscriptions: (0, M.H2)(r),
                isMonetizationWaitlistEnabledForGuild: (0, _.mG)(r.id),
                isGuildEligibleForRoleSubscriptions: (0, O.kT)(r.id),
                isExpeditedMonetizationOnboardingGuild: (0, _.Rw)(r),
                isUserInCreatorMonetizationEligibleCountry: (0, _.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, N.cu)(r.id)
            }),
        eh = (0, y.p)(r.id, 'guild_settings'),
        eg = !1 === r.hasFeature(eB.oNc.CREATOR_MONETIZABLE) && !1 === r.hasFeature(eB.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
        eY =
            eh && eg
                ? {
                      label: (0, i.jsx)('div', {
                          className: ez.roleSubLabel,
                          children: eH.intl.string(eH.t.Tn7Koq)
                      }),
                      ariaLabel: eH.intl.string(eH.t.Tn7Koq)
                  }
                : {
                      label: (0, i.jsx)('div', {
                          className: ez.roleSubLabel,
                          children: eH.intl.string(eH.t['KzCF//'])
                      }),
                      ariaLabel: eH.intl.string(eH.t['KzCF//'])
                  },
        eK = (null === (t = r.clan) || void 0 === t ? void 0 : t.badge) != null ? (0, f.ky)(r.id, r.clan.badge, eU.NC.SIZE_16) : null,
        eq = {
            section: eB.pNK.DELETE,
            onClick() {
                let e = $.default.getCurrentUser();
                if (null == e) return;
                let t = r.toString(),
                    l = {
                        header: eH.intl.formatToPlainString(eH.t.us7mCw, { name: t }),
                        confirmText: eH.intl.string(eH.t.l3hWPz),
                        cancelText: eH.intl.string(eH.t['ETE/oK']),
                        onConfirm: () => {
                            ee.S.subscribeOnce(eB.CkL.LAYER_POP_COMPLETE, () => {
                                ei.Z.deleteGuild(r.id, t).then(() => {
                                    if ((0, T.un)(a.z.GUILD_DELETE_FEEDBACK)) return;
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
                                  children: eH.intl.format(eH.t['Zuo+VV'], { name: t })
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
                                  instructionText: eH.intl.string(eH.t.abprOD),
                                  errorText: eH.intl.string(eH.t['c2/DS0']),
                                  children: eH.intl.format(eH.t['Zuo+VV'], { name: t })
                              });
                      });
            },
            label: eH.intl.string(eH.t.l3hWPz),
            ariaLabel: eH.intl.string(eH.t.l3hWPz),
            icon: (0, i.jsx)(o.TrashIcon, {
                size: 'xs',
                color: 'currentColor'
            }),
            predicate: () => U
        };
    if (er) {
        let e = [
                { section: u.ID.DIVIDER },
                {
                    section: u.ID.HEADER,
                    label: eH.intl.string(eH.t.zrSbNj)
                },
                {
                    section: eB.pNK.EMOJI,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eH.intl.string(eH.t.sMOuub),
                    element: ej.ZP,
                    predicate: () => g
                },
                {
                    section: eB.pNK.STICKERS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eH.intl.string(eH.t.R5nQkZ),
                    ariaLabel: eH.intl.string(eH.t.R5nQkZ),
                    element: eO.Z,
                    predicate: () => g
                },
                {
                    section: eB.pNK.SOUNDBOARD,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eH.intl.string(eH.t.OWQNYm),
                    ariaLabel: eH.intl.string(eH.t.OWQNYm),
                    element: eD.Z,
                    predicate: () => g
                },
                {
                    section: eB.pNK.APP_DIRECTORY,
                    label: eH.intl.string(eH.t.PHjkRE),
                    ariaLabel: eH.intl.string(eH.t.PHjkRE),
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
                    section: eB.pNK.INTEGRATIONS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eH.intl.string(eH.t.CIsNZ2),
                    ariaLabel: eH.intl.string(eH.t.CIsNZ2),
                    element: eS.Z,
                    notice: {
                        stores: [ea.default, ec.Z],
                        element: eS.j
                    },
                    predicate: () => d || v || E
                }
            ],
            t =
                h || A || d
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: eH.intl.string(eH.t.WqkqPj)
                          },
                          {
                              section: eB.pNK.ROLES,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_ROLES,
                              label: eH.intl.string(eH.t.LPJmLy),
                              element: ep.Z,
                              type: u.bT.MINIMAL,
                              ariaLabel: eH.intl.string(eH.t.KXcECw),
                              notice: {
                                  stores: [eo.Z],
                                  element: ep._
                              },
                              predicate: () => h
                          },
                          {
                              section: eB.pNK.MEMBERS,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                              label: (0, i.jsx)(eE.$, {}),
                              ariaLabel: eH.intl.string(eH.t['9Oq93t']),
                              element: eE.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => A
                          },
                          {
                              section: eB.pNK.INSTANT_INVITES,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_INVITES,
                              label: eH.intl.string(eH.t['9F90iY']),
                              element: eb.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => d
                          }
                      ]
                    : [],
            n = r.hasFeature(eB.oNc.COMMUNITY),
            s = d && n,
            o = d && !n,
            f = !n && ((0, S.Nb)(r.id) || (0, S.ze)(r.id)),
            _ =
                s || o || f || m || R
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: eH.intl.string(eH.t['02hvfn'])
                          },
                          {
                              section: eB.pNK.SAFETY,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_SAFETY,
                              label: eH.intl.string(eH.t['suhY+f']),
                              ariaLabel: eH.intl.string(eH.t['suhY+f']),
                              element: ef.Z,
                              newIndicatorDismissibleContentTypes: [a.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                              predicate: () => s
                          },
                          {
                              section: eB.pNK.MODERATION,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_MODERATION,
                              label: eH.intl.string(eH.t['suhY+f']),
                              element: eL.ZP,
                              predicate: () => o
                          },
                          {
                              section: eB.pNK.GUILD_AUTOMOD,
                              label: (0, i.jsx)('div', {
                                  className: ez.landingPageTabLink,
                                  children: eH.intl.string(eH.t.uRelg4)
                              }),
                              ariaLabel: eH.intl.string(eH.t.uRelg4),
                              element: b.Z,
                              newIndicatorDismissibleContentTypes: null,
                              predicate: () => f
                          },
                          {
                              section: eB.pNK.AUDIT_LOG,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                              label: eH.intl.string(eH.t.SPWLyc),
                              element: eu.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => m
                          },
                          {
                              section: eB.pNK.BANS,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_BANS,
                              label: eH.intl.string(eH.t.ZbeITU),
                              element: eI.Z,
                              predicate: () => R
                          }
                      ]
                    : [],
            N = (0, Z.wC)(r.id),
            T = n && L,
            M = d && (r.hasFeature(eB.oNc.DISCOVERABLE) || !!(null == Q ? void 0 : Q.isPublished)),
            B = d && !X && !r.hasFeature(eB.oNc.GUILD_SERVER_GUIDE),
            $ =
                n && (d || N || T || M || B)
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: eH.intl.string(eH.t['1g9A/f'])
                          },
                          {
                              section: eB.pNK.COMMUNITY,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW,
                              label: eH.intl.string(eH.t['/dp6yc']),
                              element: e_.Z,
                              ariaLabel: eH.intl.string(eH.t['/dp6yc']),
                              notice: {
                                  stores: [ec.Z],
                                  element: e_.X
                              },
                              predicate: () => d
                          },
                          {
                              section: eB.pNK.ONBOARDING,
                              label: eH.intl.string(eH.t.LdxCKy),
                              element: eR.Z,
                              ariaLabel: eH.intl.string(eH.t.LdxCKy),
                              newIndicatorDismissibleContentTypes: K ? null : [a.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                              notice: {
                                  stores: [em.Z],
                                  element: ex.Z
                              },
                              predicate: () => N,
                              decoration: eW(r.id, W)
                          },
                          {
                              section: eB.pNK.ANALYTICS,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                              label: eH.intl.string(eH.t['0wWfUF']),
                              ariaLabel: eH.intl.string(eH.t['0wWfUF']),
                              element: eC.Z,
                              newIndicator: G.Z.hasHotspot(eG.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
                              newIndicatorDismissibleContentTypes: V ? [a.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
                              predicate: () => T
                          },
                          {
                              section: eB.pNK.DISCOVERY,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                              label: eH.intl.string(eH.t.oGaVGx),
                              element: ev.Z,
                              notice: {
                                  stores: [ec.Z],
                                  element: ev.s
                              },
                              predicate: () => d,
                              ariaLabel: r.hasFeature(eB.oNc.DISCOVERABLE) ? eH.intl.string(eH.t.oGaVGx) : eH.intl.string(eH.t.XU0S6u)
                          },
                          {
                              section: eB.pNK.DISCOVERY_LANDING_PAGE,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                              label: (0, i.jsxs)('div', {
                                  className: ez.landingPageTabLink,
                                  children: [eH.intl.string(eH.t.kGlQGB), ' ', (0, i.jsx)(j.Z, {})]
                              }),
                              ariaLabel: eH.intl.string(eH.t.kGlQGB),
                              element: eT.Z,
                              notice: {
                                  stores: [ec.Z],
                                  element: eT.J
                              },
                              type: u.bT.CUSTOM,
                              predicate: () => M
                          },
                          {
                              section: eB.pNK.COMMUNITY_WELCOME,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                              label: eH.intl.string(eH.t['2rkmDg']),
                              ariaLabel: eH.intl.string(eH.t['2rkmDg']),
                              element: eN.Z,
                              notice: {
                                  stores: [Y.Z],
                                  element: q.Z
                              },
                              predicate: () => B
                          }
                      ]
                    : [],
            ee = el()
                ? [
                      { section: u.ID.DIVIDER },
                      {
                          section: u.ID.HEADER,
                          label: eH.intl.string(eH.t.mbn3bW)
                      },
                      {
                          ...eY,
                          section: eB.pNK.ROLE_SUBSCRIPTIONS,
                          element: k.Z,
                          type: u.bT.CUSTOM,
                          newIndicatorDismissibleContentTypes: (0, P.sO)(r) ? [a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                      },
                      {
                          section: eB.pNK.GUILD_PRODUCTS,
                          label: eH.intl.string(eH.t.X6h2g4),
                          ariaLabel: eH.intl.string(eH.t.X6h2g4),
                          element: D.Z,
                          predicate: () => (0, y.p)(r.id, 'guild_product_settings_predicate') && (0, O.sy)(r)
                      },
                      {
                          section: eB.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                          impressionName: l.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                          newIndicator: 2022 === new Date().getFullYear(),
                          label: eH.intl.string(eH.t.ipTYsr),
                          ariaLabel: eH.intl.string(eH.t.ipTYsr),
                          element: w.Z,
                          predicate: () => (0, O.sy)(r)
                      }
                  ]
                : [],
            en = null != et && et,
            ei = d && !r.hasFeature(eB.oNc.COMMUNITY),
            er =
                en || ei || d
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: eB.pNK.CLAN,
                              label: eH.intl.string(eH.t['6g8uHB']),
                              ariaLabel: eH.intl.string(eH.t['6g8uHB']),
                              onClick() {
                                  (0, H.q4)(
                                      (e) => {
                                          let { closeLayer: t } = e;
                                          return (0, i.jsx)(C.Z, {
                                              onClose: t,
                                              guildId: r.id
                                          });
                                      },
                                      { layerKey: eU.q2 }
                                  ),
                                      (0, c.xf)();
                              },
                              predicate: () => en,
                              icon: null != eK ? (0, i.jsx)(I.KQ, { src: eK }) : null
                          },
                          {
                              section: eB.pNK.COMMUNITY,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                              label: eH.intl.string(eH.t.ElKTeX),
                              element: e_.Z,
                              ariaLabel: eH.intl.string(eH.t.ElKTeX),
                              newIndicator: null != z && z >= eF.U3 && G.Z.hasHotspot(eG.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                              notice: {
                                  stores: [ec.Z],
                                  element: e_.X
                              },
                              predicate: () => ei
                          },
                          {
                              section: eB.pNK.WIDGET,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_WIDGET,
                              label: eH.intl.string(eH.t.ACjbTk),
                              element: ew.Z,
                              predicate: () => d
                          },
                          {
                              section: eB.pNK.VANITY_URL,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                              label: eH.intl.string(eH.t['5XZKy8']),
                              element: ek.Z,
                              notice: {
                                  stores: [ed.Z],
                                  element: ek.T
                              },
                              predicate: () => d
                          },
                          {
                              section: eB.pNK.GUILD_TEMPLATES,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                              label: (0, i.jsx)(eP.Z, { showDirtyIndicator: F }),
                              ariaLabel: eH.intl.string(eH.t.KUw7Sk),
                              element: eM.ZP,
                              notice: {
                                  stores: [eM.Sf],
                                  element: eM.Q5
                              },
                              predicate: () => d
                          }
                      ]
                    : [];
        return [
            {
                section: u.ID.HEADER,
                label: eV(r)
            },
            {
                section: eB.pNK.OVERVIEW,
                impressionName: l.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                label: eH.intl.string(eH.t['/dp6yc']),
                ariaLabel: eH.intl.string(eH.t['/dp6yc']),
                element: eZ.Z,
                notice: {
                    stores: [ec.Z],
                    element: eZ.O
                }
            },
            ...e,
            ...t,
            ..._,
            ...$,
            ...ee,
            { section: u.ID.DIVIDER },
            {
                section: eB.pNK.GUILD_PREMIUM,
                impressionName: l.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                label: eH.intl.string(eH.t['8+VX4+']),
                ariaLabel: eH.intl.string(eH.t['8+VX4+']),
                element: eA.Z,
                className: ez.serverBoostTabItem,
                icon: (0, i.jsx)(ey.Z, { className: ez.icon })
            },
            ...er,
            {
                section: u.ID.DIVIDER,
                predicate: () => U
            },
            eq
        ];
    }
    return [
        {
            section: u.ID.HEADER,
            label: eV(r)
        },
        {
            section: eB.pNK.OVERVIEW,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
            label: eH.intl.string(eH.t['/dp6yc']),
            ariaLabel: eH.intl.string(eH.t['/dp6yc']),
            element: eZ.Z,
            notice: {
                stores: [ec.Z],
                element: eZ.O
            }
        },
        {
            section: eB.pNK.ROLES,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_ROLES,
            label: eH.intl.string(eH.t.LPJmLy),
            element: ep.Z,
            type: u.bT.MINIMAL,
            ariaLabel: eH.intl.string(eH.t.KXcECw),
            notice: {
                stores: [eo.Z],
                element: ep._
            },
            predicate: () => h
        },
        {
            section: eB.pNK.EMOJI,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_EMOJI,
            label: eH.intl.string(eH.t.sMOuub),
            element: ej.ZP,
            predicate: () => g
        },
        {
            section: eB.pNK.STICKERS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_STICKERS,
            label: eH.intl.string(eH.t.R5nQkZ),
            ariaLabel: eH.intl.string(eH.t.R5nQkZ),
            element: eO.Z,
            predicate: () => g
        },
        {
            section: eB.pNK.SOUNDBOARD,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
            label: eH.intl.string(eH.t.OWQNYm),
            ariaLabel: eH.intl.string(eH.t.OWQNYm),
            element: eD.Z,
            predicate: () => g
        },
        {
            section: eB.pNK.WIDGET,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_WIDGET,
            label: eH.intl.string(eH.t.ACjbTk),
            element: ew.Z,
            predicate: () => d
        },
        {
            section: eB.pNK.GUILD_TEMPLATES,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
            label: (0, i.jsx)(eP.Z, { showDirtyIndicator: F }),
            ariaLabel: eH.intl.string(eH.t.KUw7Sk),
            element: eM.ZP,
            notice: {
                stores: [eM.Sf],
                element: eM.Q5
            },
            predicate: () => d
        },
        {
            section: eB.pNK.VANITY_URL,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
            label: eH.intl.string(eH.t['5XZKy8']),
            element: ek.Z,
            notice: {
                stores: [ed.Z],
                element: ek.T
            },
            predicate: () => s
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => d || v
        },
        {
            section: u.ID.HEADER,
            label: eH.intl.string(eH.t.PHjkRE),
            predicate: () => d || v
        },
        {
            section: eB.pNK.INTEGRATIONS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
            label: eH.intl.string(eH.t.CIsNZ2),
            ariaLabel: eH.intl.string(eH.t.CIsNZ2),
            element: eS.Z,
            notice: {
                stores: [ea.default, ec.Z],
                element: eS.j
            },
            predicate: () => d || v
        },
        {
            section: eB.pNK.APP_DIRECTORY,
            label: eH.intl.string(eH.t.AKcFUl),
            ariaLabel: eH.intl.string(eH.t.AKcFUl),
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
            label: eH.intl.string(eH.t['5tbTdX']),
            predicate: () => d
        },
        {
            section: eB.pNK.SAFETY,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_SAFETY,
            label: eH.intl.string(eH.t['suhY+f']),
            ariaLabel: eH.intl.string(eH.t['suhY+f']),
            element: ef.Z,
            newIndicatorDismissibleContentTypes: [a.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
            predicate: () => d && r.hasFeature(eB.oNc.COMMUNITY)
        },
        {
            section: eB.pNK.MODERATION,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_MODERATION,
            label: eH.intl.string(eH.t['suhY+f']),
            element: eL.ZP,
            predicate: () => d && !r.hasFeature(eB.oNc.COMMUNITY)
        },
        {
            section: eB.pNK.GUILD_AUTOMOD,
            label: (0, i.jsx)('div', {
                className: ez.landingPageTabLink,
                children: eH.intl.string(eH.t.uRelg4)
            }),
            ariaLabel: eH.intl.string(eH.t.uRelg4),
            element: b.Z,
            newIndicatorDismissibleContentTypes: null,
            predicate: () => !r.hasFeature(eB.oNc.COMMUNITY) && ((0, S.Nb)(r.id) || (0, S.ze)(r.id))
        },
        {
            section: eB.pNK.AUDIT_LOG,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
            label: eH.intl.string(eH.t.SPWLyc),
            element: eu.Z,
            type: u.bT.CUSTOM,
            predicate: () => m
        },
        {
            section: eB.pNK.BANS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_BANS,
            label: eH.intl.string(eH.t.ZbeITU),
            element: eI.Z,
            predicate: () => R
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => d || L
        },
        {
            section: u.ID.HEADER,
            label: eH.intl.string(eH.t['1g9A/f']),
            predicate: () => !et && (d || L)
        },
        {
            section: eB.pNK.CLAN,
            label: eH.intl.string(eH.t['6g8uHB']),
            ariaLabel: eH.intl.string(eH.t['6g8uHB']),
            onClick() {
                (0, H.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(C.Z, {
                            onClose: t,
                            guildId: r.id
                        });
                    },
                    { layerKey: eU.q2 }
                ),
                    (0, c.xf)();
            },
            predicate: () => null != et && et,
            icon: null != eK ? (0, i.jsx)(I.KQ, { src: eK }) : null
        },
        {
            section: eB.pNK.COMMUNITY,
            impressionName: r.hasFeature(eB.oNc.COMMUNITY) ? l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : l.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
            label: r.hasFeature(eB.oNc.COMMUNITY) ? eH.intl.string(eH.t['/dp6yc']) : eH.intl.string(eH.t.ElKTeX),
            element: e_.Z,
            ariaLabel: r.hasFeature(eB.oNc.COMMUNITY) ? eH.intl.string(eH.t['/dp6yc']) : eH.intl.string(eH.t.ElKTeX),
            newIndicator: !r.hasFeature(eB.oNc.COMMUNITY) && null != z && z >= eF.U3 && G.Z.hasHotspot(eG.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
            notice: {
                stores: [ec.Z],
                element: e_.X
            },
            predicate: () => d
        },
        {
            section: eB.pNK.ONBOARDING,
            label: eH.intl.string(eH.t.LdxCKy),
            element: eR.Z,
            ariaLabel: eH.intl.string(eH.t.LdxCKy),
            newIndicatorDismissibleContentTypes: K ? null : [a.z.COMMUNITY_ONBOARDING_NEW_BADGE],
            notice: {
                stores: [em.Z],
                element: ex.Z
            },
            predicate: () => (0, Z.wC)(r.id),
            decoration: eW(r.id, W)
        },
        {
            section: eB.pNK.ANALYTICS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
            label: eH.intl.string(eH.t['0wWfUF']),
            ariaLabel: eH.intl.string(eH.t['0wWfUF']),
            element: eC.Z,
            newIndicator: G.Z.hasHotspot(eG.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
            newIndicatorDismissibleContentTypes: V ? [a.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
            predicate: () => L && r.hasFeature(eB.oNc.COMMUNITY)
        },
        {
            section: eB.pNK.DISCOVERY,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
            label: eH.intl.string(eH.t.oGaVGx),
            element: ev.Z,
            notice: {
                stores: [ec.Z],
                element: ev.s
            },
            predicate: () => d && r.hasFeature(eB.oNc.COMMUNITY),
            ariaLabel: r.hasFeature(eB.oNc.DISCOVERABLE) ? eH.intl.string(eH.t.oGaVGx) : eH.intl.string(eH.t.XU0S6u)
        },
        {
            section: eB.pNK.DISCOVERY_LANDING_PAGE,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
            label: (0, i.jsxs)('div', {
                className: ez.landingPageTabLink,
                children: [eH.intl.string(eH.t.kGlQGB), ' ', (0, i.jsx)(j.Z, {})]
            }),
            ariaLabel: eH.intl.string(eH.t.kGlQGB),
            element: eT.Z,
            notice: {
                stores: [ec.Z],
                element: eT.J
            },
            type: u.bT.CUSTOM,
            predicate: () => d && (r.hasFeature(eB.oNc.DISCOVERABLE) || !!(null == Q ? void 0 : Q.isPublished))
        },
        {
            section: eB.pNK.COMMUNITY_WELCOME,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
            label: eH.intl.string(eH.t['2rkmDg']),
            ariaLabel: eH.intl.string(eH.t['2rkmDg']),
            element: eN.Z,
            notice: {
                stores: [Y.Z],
                element: q.Z
            },
            predicate: () => d && r.hasFeature(eB.oNc.COMMUNITY) && !X && !r.hasFeature(eB.oNc.GUILD_SERVER_GUIDE)
        },
        {
            section: u.ID.DIVIDER,
            predicate: el
        },
        {
            section: u.ID.HEADER,
            label: eH.intl.string(eH.t.mbn3bW),
            predicate: el
        },
        {
            ...eY,
            section: eB.pNK.ROLE_SUBSCRIPTIONS,
            element: k.Z,
            type: u.bT.CUSTOM,
            predicate: el,
            newIndicatorDismissibleContentTypes: (0, P.sO)(r) ? [a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        },
        {
            section: eB.pNK.GUILD_PRODUCTS,
            label: eH.intl.string(eH.t.X6h2g4),
            ariaLabel: eH.intl.string(eH.t.X6h2g4),
            element: D.Z,
            predicate: () => el() && (0, y.p)(r.id, 'guild_product_settings_predicate') && (0, O.sy)(r)
        },
        {
            section: eB.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
            impressionName: l.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
            newIndicator: 2022 === new Date().getFullYear(),
            label: eH.intl.string(eH.t.ipTYsr),
            ariaLabel: eH.intl.string(eH.t.ipTYsr),
            element: w.Z,
            predicate: () => el() && (0, O.sy)(r)
        },
        { section: u.ID.DIVIDER },
        {
            section: eB.pNK.GUILD_PREMIUM,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
            label: eH.intl.string(eH.t['8+VX4+']),
            ariaLabel: eH.intl.string(eH.t['8+VX4+']),
            element: eA.Z,
            className: ez.serverBoostTabItem,
            icon: (0, i.jsx)(ey.Z, { className: ez.icon })
        },
        { section: u.ID.DIVIDER },
        {
            section: u.ID.HEADER,
            label: eH.intl.string(eH.t['+OecxM'])
        },
        {
            section: eB.pNK.MEMBERS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_MEMBERS,
            label: (0, i.jsx)(eE.$, {}),
            ariaLabel: eH.intl.string(eH.t['9Oq93t']),
            element: eE.Z,
            type: u.bT.CUSTOM,
            predicate: () => A
        },
        {
            section: eB.pNK.INSTANT_INVITES,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_INVITES,
            label: eH.intl.string(eH.t['9F90iY']),
            element: eb.Z,
            type: u.bT.CUSTOM,
            predicate: () => d
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => U
        },
        eq
    ];
}
function eK(e, t) {
    let n = J.Z.getGuildPermissionProps(e),
        i = (0, z.p)(e.id).length > 0;
    return eY({
        channels: t,
        showDirtyGuildTemplateIndicator: !1,
        ...n,
        canUnlinkChannels: i,
        showAccessRate: !1,
        canAccessClanSettings: n.isGuildAdmin && e.hasFeature(eB.oNc.CLAN),
        welcomeScreenEmpty: K.Z.isEmpty(e.id)
    })
        .filter((e) => {
            let { section: t } = e;
            return t !== u.ID.HEADER && t !== u.ID.DIVIDER;
        })
        .filter((e) => null == e.predicate || e.predicate());
}
function eq(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    h.ZP.trackWithMetadata(eB.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: t,
        destination_pane: e,
        location: n
    });
}
let eX = {
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
class eQ extends r.PureComponent {
    componentDidMount() {
        eq(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        ei.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: n, isGuildAdmin: i, canManageGuild: r, canManageRoles: l, canManageBans: s, canManageNicknames: a, canManageGuildExpressions: o, canViewAuditLog: d, canManageWebhooks: u, canAccessMembersPage: m, canViewGuildAnalytics: h } = this.props;
        n !== t && eq(n, t), ((!i && !r && !l && !s && !a && !o && !d && !m && !u) || (!d && n === eB.pNK.AUDIT_LOG) || (!l && n === eB.pNK.ROLES) || (!o && n === eB.pNK.EMOJI) || (!o && n === eB.pNK.STICKERS) || (!o && n === eB.pNK.SOUNDBOARD) || (!s && n === eB.pNK.BANS) || (!h && n === eB.pNK.ANALYTICS) || (!m && n === eB.pNK.MEMBERS)) && (0, c.xf)();
    }
    render() {
        var e, t;
        let { theme: n, sidebarTheme: r, section: l, guild: s, channels: a, isGuildAdmin: o, canManageGuild: u, canViewAuditLog: m, canManageRoles: h, canManageGuildExpressions: g, canManageWebhooks: x, canUnlinkChannels: p, canManageBans: f, canAccessMembersPage: C, canViewGuildAnalytics: I, isOwner: _, isOwnerWithRequiredMfaLevel: N, showDirtyGuildTemplateIndicator: v, memberCount: T, showAccessRate: j, onboardingStep: S, onboardingEnabled: b, welcomeScreenEmpty: E, guildMetadata: R, canAccessClanSettings: Z } = this.props;
        if (null == s) return null;
        let A = eY({
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
                isOwnerWithRequiredMfaLevel: N,
                showDirtyGuildTemplateIndicator: v,
                memberCount: T,
                showAccessRate: j,
                onboardingStep: S,
                onboardingEnabled: b,
                welcomeScreenEmpty: E,
                guildMetadata: R,
                section: l,
                canAccessClanSettings: Z
            }),
            L = (null === (t = A.find((e) => e.section === l)) || void 0 === t ? void 0 : null === (e = t.predicate) || void 0 === e ? void 0 : e.call(t)) !== !1;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(d.ZP, {
                    theme: n,
                    sidebarTheme: r,
                    section: L && null != l ? l : eB.pNK.OVERVIEW,
                    onSetSection: ei.Z.setSection,
                    onClose: c.xf,
                    title: eV(s),
                    sections: A
                }),
                (0, i.jsx)(F.d, { guildId: s.id })
            ]
        });
    }
}
function eJ() {
    var e;
    let { guild: t, section: n, analyticsLocation: l, guildMetadata: a, isGuildMetadataLoaded: o } = (0, s.cj)([ec.Z], () => ec.Z.getProps()),
        { analyticsLocations: c } = (0, g.ZP)(m.Z.GUILD_SETTINGS),
        d = (0, s.e7)([V.Z], () => V.Z.theme),
        u = (0, s.e7)([V.Z], () => (V.Z.darkSidebar ? eB.BRd.DARK : void 0)),
        h = (0, s.e7)([X.ZP], () => (null != t ? X.ZP.getChannels(t.id).SELECTABLE : null), [t]),
        x = (0, s.cj)([J.Z], () => (null != t ? J.Z.getGuildPermissionProps(t) : eX)),
        p = null == t ? void 0 : t.id,
        f = (0, s.e7)([J.Z], () => null != t && J.Z.canAccessGuildSettings(t)),
        C = null != t && (0, et.Fv)(t.id),
        I = C || f,
        _ = C || x.canViewGuildAnalytics,
        { shouldFetchMemberInsights: N, hasAccessRate: T } = (0, s.cj)([el.Z], () => ({
            shouldFetchMemberInsights: null != t && el.Z.shouldFetchMemberInsights(t.id),
            hasAccessRate: null != t && el.Z.getMemberInsights(t.id).hasAccessRate
        }));
    r.useEffect(() => {
        !o && null != p && (0, v.aC)(p);
    }, [o, p]),
        r.useEffect(() => {
            I && _ && N && null != p && (0, er.r2)(p);
        }, [I, _, N, p]);
    let j = null !== (e = null == t ? void 0 : t.hasFeature(eB.oNc.COMMUNITY)) && void 0 !== e && e;
    r.useEffect(() => {
        null != p && j && ((0, E.eM)(p), (0, W.RM)(p));
    }, [p, j]);
    let { homeSettingsEnabled: S } = (0, L.kZ)(null != p ? p : eB.lds);
    r.useEffect(() => {
        null != p && S && (0, A.cP)(p);
    }, [S, p]);
    let { showAccessRate: b } = (0, et.eA)(null == t ? void 0 : t.id, !T || !_ || !I),
        Z = x.isGuildAdmin && (null == t ? void 0 : t.hasFeature(eB.oNc.CLAN)),
        y = (0, s.e7)(
            [U.Z],
            () => {
                var e;
                return (null == t ? void 0 : t.id) != null && (null === (e = U.Z.getForGuild(t.id)) || void 0 === e ? void 0 : e.isDirty) === !0;
            },
            [t]
        ),
        D = (0, s.e7)([Q.Z], () => Q.Z.getMemberCount(null == t ? void 0 : t.id), [t]);
    r.useEffect(() => {
        null != p && x.canManageGuild && B.Z.loadTemplatesForGuild(p);
    }, [p, x.canManageGuild]),
        r.useEffect(() => {
            !I && ei.Z.close();
        }, [I]);
    let O = (0, s.e7)([em.Z], () => em.Z.getCurrentPage()),
        M = (0, s.e7)([R.Z], () => null != p && R.Z.getEnabled(p)),
        P = (0, s.e7)([K.Z], () => null != p && K.Z.isEmpty(p)),
        k = (0, z.F)(p).length > 0;
    return (0, i.jsx)(g.Gt, {
        value: c,
        children: (0, i.jsx)(eQ, {
            guild: t,
            section: n,
            theme: d,
            sidebarTheme: u,
            channels: h,
            showDirtyGuildTemplateIndicator: y,
            analyticsLocation: l,
            memberCount: D,
            ...x,
            canUnlinkChannels: k,
            canViewGuildAnalytics: _,
            showAccessRate: b,
            onboardingStep: O,
            onboardingEnabled: M,
            welcomeScreenEmpty: P,
            guildMetadata: a,
            canAccessClanSettings: Z
        })
    });
}
