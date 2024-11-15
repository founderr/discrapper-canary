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
    v = n(979264),
    _ = n(223892),
    I = n(738774),
    N = n(296386),
    T = n(605236),
    j = n(688465),
    b = n(676317),
    S = n(874993),
    E = n(745752),
    R = n(45966),
    Z = n(637853),
    y = n(526120),
    A = n(621923),
    L = n(352981),
    D = n(610403),
    O = n(923726),
    k = n(144507),
    M = n(303737),
    P = n(15030),
    w = n(220685),
    B = n(751189),
    U = n(409059),
    G = n(810788),
    F = n(918658),
    H = n(84615),
    z = n(163400),
    W = n(210887),
    V = n(524329),
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
    ev = n(247031),
    e_ = n(787561),
    eI = n(579648),
    eN = n(511480),
    eT = n(460461),
    ej = n(29605),
    eb = n(365307),
    eS = n(497666),
    eE = n(324330),
    eR = n(495300),
    eZ = n(312397),
    ey = n(651780),
    eA = n(279542),
    eL = n(413335),
    eD = n(665324),
    eO = n(208150),
    ek = n(353398),
    eM = n(365774),
    eP = n(803288),
    ew = n(804153),
    eB = n(981631),
    eU = n(308083),
    eG = n(190378),
    eF = n(135899),
    eH = n(388032),
    ez = n(684049);
function eW(e) {
    return '' !== e.toString() ? e.toString() : eH.intl.string(eH.t['154/bG']);
}
function eV(e, t) {
    let { homeSettingsEnabled: n } = (0, A.l6)(e);
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
    let { guild: r, isGuildAdmin: s, canManageGuild: d, canViewAuditLog: m, canManageRoles: h, canManageGuildExpressions: g, canManageWebhooks: N, canUnlinkChannels: E, canManageBans: R, canAccessMembersPage: y, canViewGuildAnalytics: A, isOwner: B, isOwnerWithRequiredMfaLevel: U, showDirtyGuildTemplateIndicator: F, memberCount: z, showAccessRate: W, onboardingStep: V, onboardingEnabled: K, welcomeScreenEmpty: X, guildMetadata: Q, section: J, canAccessClanSettings: et } = e,
        er = es.$.getCurrentConfig({
            guildId: r.id,
            location: 'generateSections'
        }).enabled,
        el = () =>
            (0, k.X$)({
                guild: r,
                isOwner: B,
                canManageGuildRoleSubscriptions: (0, k.H2)(r),
                isMonetizationWaitlistEnabledForGuild: (0, _.mG)(r.id),
                isGuildEligibleForRoleSubscriptions: (0, O.kT)(r.id),
                isExpeditedMonetizationOnboardingGuild: (0, _.Rw)(r),
                isUserInCreatorMonetizationEligibleCountry: (0, _.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, I.cu)(r.id)
            }),
        eh = (0, L.p)(r.id, 'guild_settings'),
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
                    element: eb.Z,
                    notice: {
                        stores: [ea.default, ec.Z],
                        element: eb.j
                    },
                    predicate: () => d || N || E
                }
            ],
            t =
                h || y || d
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
                              predicate: () => y
                          },
                          {
                              section: eB.pNK.INSTANT_INVITES,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_INVITES,
                              label: eH.intl.string(eH.t['9F90iY']),
                              element: eS.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => d
                          }
                      ]
                    : [],
            n = r.hasFeature(eB.oNc.COMMUNITY),
            s = d && n,
            o = d && !n,
            f = !n && ((0, b.Nb)(r.id) || (0, b.ze)(r.id)),
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
                              element: eA.ZP,
                              predicate: () => o
                          },
                          {
                              section: eB.pNK.GUILD_AUTOMOD,
                              label: (0, i.jsx)('div', {
                                  className: ez.landingPageTabLink,
                                  children: eH.intl.string(eH.t.uRelg4)
                              }),
                              ariaLabel: eH.intl.string(eH.t.uRelg4),
                              element: S.Z,
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
                              element: ev.Z,
                              predicate: () => R
                          }
                      ]
                    : [],
            I = (0, Z.wC)(r.id),
            T = n && A,
            k = d && (r.hasFeature(eB.oNc.DISCOVERABLE) || !!(null == Q ? void 0 : Q.isPublished)),
            B = d && !X && !r.hasFeature(eB.oNc.GUILD_SERVER_GUIDE),
            $ =
                n && (d || I || T || k || B)
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
                              predicate: () => I,
                              decoration: eV(r.id, V)
                          },
                          {
                              section: eB.pNK.ANALYTICS,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                              label: eH.intl.string(eH.t['0wWfUF']),
                              ariaLabel: eH.intl.string(eH.t['0wWfUF']),
                              element: eC.Z,
                              newIndicator: G.Z.hasHotspot(eG.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
                              newIndicatorDismissibleContentTypes: W ? [a.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
                              predicate: () => T
                          },
                          {
                              section: eB.pNK.DISCOVERY,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                              label: eH.intl.string(eH.t.oGaVGx),
                              element: eN.Z,
                              notice: {
                                  stores: [ec.Z],
                                  element: eN.s
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
                              predicate: () => k
                          },
                          {
                              section: eB.pNK.COMMUNITY_WELCOME,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                              label: eH.intl.string(eH.t['2rkmDg']),
                              ariaLabel: eH.intl.string(eH.t['2rkmDg']),
                              element: eI.Z,
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
                          element: P.Z,
                          type: u.bT.CUSTOM,
                          newIndicatorDismissibleContentTypes: (0, M.sO)(r) ? [a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                      },
                      {
                          section: eB.pNK.GUILD_PRODUCTS,
                          label: eH.intl.string(eH.t.X6h2g4),
                          ariaLabel: eH.intl.string(eH.t.X6h2g4),
                          element: D.Z,
                          predicate: () => (0, L.p)(r.id, 'guild_product_settings_predicate') && (0, O.sy)(r)
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
                              icon: null != eK ? (0, i.jsx)(v.KQ, { src: eK }) : null
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
                              element: eP.Z,
                              notice: {
                                  stores: [ed.Z],
                                  element: eP.T
                              },
                              predicate: () => d
                          },
                          {
                              section: eB.pNK.GUILD_TEMPLATES,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                              label: (0, i.jsx)(eM.Z, { showDirtyIndicator: F }),
                              ariaLabel: eH.intl.string(eH.t.KUw7Sk),
                              element: ek.ZP,
                              notice: {
                                  stores: [ek.Sf],
                                  element: ek.Q5
                              },
                              predicate: () => d
                          }
                      ]
                    : [];
        return [
            {
                section: u.ID.HEADER,
                label: eW(r)
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
                element: ey.Z,
                className: ez.serverBoostTabItem,
                icon: (0, i.jsx)(eL.Z, { className: ez.icon })
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
            label: eW(r)
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
            label: (0, i.jsx)(eM.Z, { showDirtyIndicator: F }),
            ariaLabel: eH.intl.string(eH.t.KUw7Sk),
            element: ek.ZP,
            notice: {
                stores: [ek.Sf],
                element: ek.Q5
            },
            predicate: () => d
        },
        {
            section: eB.pNK.VANITY_URL,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
            label: eH.intl.string(eH.t['5XZKy8']),
            element: eP.Z,
            notice: {
                stores: [ed.Z],
                element: eP.T
            },
            predicate: () => s
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => d || N
        },
        {
            section: u.ID.HEADER,
            label: eH.intl.string(eH.t.PHjkRE),
            predicate: () => d || N
        },
        {
            section: eB.pNK.INTEGRATIONS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
            label: eH.intl.string(eH.t.CIsNZ2),
            ariaLabel: eH.intl.string(eH.t.CIsNZ2),
            element: eb.Z,
            notice: {
                stores: [ea.default, ec.Z],
                element: eb.j
            },
            predicate: () => d || N
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
            element: eA.ZP,
            predicate: () => d && !r.hasFeature(eB.oNc.COMMUNITY)
        },
        {
            section: eB.pNK.GUILD_AUTOMOD,
            label: (0, i.jsx)('div', {
                className: ez.landingPageTabLink,
                children: eH.intl.string(eH.t.uRelg4)
            }),
            ariaLabel: eH.intl.string(eH.t.uRelg4),
            element: S.Z,
            newIndicatorDismissibleContentTypes: null,
            predicate: () => !r.hasFeature(eB.oNc.COMMUNITY) && ((0, b.Nb)(r.id) || (0, b.ze)(r.id))
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
            element: ev.Z,
            predicate: () => R
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => d || A
        },
        {
            section: u.ID.HEADER,
            label: eH.intl.string(eH.t['1g9A/f']),
            predicate: () => !et && (d || A)
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
            icon: null != eK ? (0, i.jsx)(v.KQ, { src: eK }) : null
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
            decoration: eV(r.id, V)
        },
        {
            section: eB.pNK.ANALYTICS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
            label: eH.intl.string(eH.t['0wWfUF']),
            ariaLabel: eH.intl.string(eH.t['0wWfUF']),
            element: eC.Z,
            newIndicator: G.Z.hasHotspot(eG.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
            newIndicatorDismissibleContentTypes: W ? [a.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
            predicate: () => A && r.hasFeature(eB.oNc.COMMUNITY)
        },
        {
            section: eB.pNK.DISCOVERY,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
            label: eH.intl.string(eH.t.oGaVGx),
            element: eN.Z,
            notice: {
                stores: [ec.Z],
                element: eN.s
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
            element: eI.Z,
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
            element: P.Z,
            type: u.bT.CUSTOM,
            predicate: el,
            newIndicatorDismissibleContentTypes: (0, M.sO)(r) ? [a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        },
        {
            section: eB.pNK.GUILD_PRODUCTS,
            label: eH.intl.string(eH.t.X6h2g4),
            ariaLabel: eH.intl.string(eH.t.X6h2g4),
            element: D.Z,
            predicate: () => el() && (0, L.p)(r.id, 'guild_product_settings_predicate') && (0, O.sy)(r)
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
            element: ey.Z,
            className: ez.serverBoostTabItem,
            icon: (0, i.jsx)(eL.Z, { className: ez.icon })
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
            predicate: () => y
        },
        {
            section: eB.pNK.INSTANT_INVITES,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_INVITES,
            label: eH.intl.string(eH.t['9F90iY']),
            element: eS.Z,
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
        let { theme: n, sidebarTheme: r, section: l, guild: s, channels: a, isGuildAdmin: o, canManageGuild: u, canViewAuditLog: m, canManageRoles: h, canManageGuildExpressions: g, canManageWebhooks: x, canUnlinkChannels: p, canManageBans: f, canAccessMembersPage: C, canViewGuildAnalytics: v, isOwner: _, isOwnerWithRequiredMfaLevel: I, showDirtyGuildTemplateIndicator: N, memberCount: T, showAccessRate: j, onboardingStep: b, onboardingEnabled: S, welcomeScreenEmpty: E, guildMetadata: R, canAccessClanSettings: Z } = this.props;
        if (null == s) return null;
        let y = eY({
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
                canViewGuildAnalytics: v,
                isOwner: _,
                isOwnerWithRequiredMfaLevel: I,
                showDirtyGuildTemplateIndicator: N,
                memberCount: T,
                showAccessRate: j,
                onboardingStep: b,
                onboardingEnabled: S,
                welcomeScreenEmpty: E,
                guildMetadata: R,
                section: l,
                canAccessClanSettings: Z
            }),
            A = (null === (t = y.find((e) => e.section === l)) || void 0 === t ? void 0 : null === (e = t.predicate) || void 0 === e ? void 0 : e.call(t)) !== !1;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(d.ZP, {
                    theme: n,
                    sidebarTheme: r,
                    section: A && null != l ? l : eB.pNK.OVERVIEW,
                    onSetSection: ei.Z.setSection,
                    onClose: c.xf,
                    title: eW(s),
                    sections: y
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
        d = (0, s.e7)([W.Z], () => W.Z.theme),
        u = (0, s.e7)([W.Z], () => (W.Z.darkSidebar ? eB.BRd.DARK : void 0)),
        h = (0, s.e7)([X.ZP], () => (null != t ? X.ZP.getChannels(t.id).SELECTABLE : null), [t]),
        x = (0, s.cj)([J.Z], () => (null != t ? J.Z.getGuildPermissionProps(t) : eX)),
        p = null == t ? void 0 : t.id,
        f = (0, s.e7)([J.Z], () => null != t && J.Z.canAccessGuildSettings(t)),
        C = null != t && (0, et.Fv)(t.id),
        v = C || f,
        _ = C || x.canViewGuildAnalytics,
        { shouldFetchMemberInsights: I, hasAccessRate: T } = (0, s.cj)([el.Z], () => ({
            shouldFetchMemberInsights: null != t && el.Z.shouldFetchMemberInsights(t.id),
            hasAccessRate: null != t && el.Z.getMemberInsights(t.id).hasAccessRate
        }));
    r.useEffect(() => {
        !o && null != p && (0, N.aC)(p);
    }, [o, p]),
        r.useEffect(() => {
            v && _ && I && null != p && (0, er.r2)(p);
        }, [v, _, I, p]);
    let j = null !== (e = null == t ? void 0 : t.hasFeature(eB.oNc.COMMUNITY)) && void 0 !== e && e;
    r.useEffect(() => {
        null != p && j && ((0, E.eM)(p), (0, V.RM)(p));
    }, [p, j]);
    let { homeSettingsEnabled: b } = (0, A.kZ)(null != p ? p : eB.lds);
    r.useEffect(() => {
        null != p && b && (0, y.cP)(p);
    }, [b, p]);
    let { showAccessRate: S } = (0, et.eA)(null == t ? void 0 : t.id, !T || !_ || !v),
        Z = x.isGuildAdmin && (null == t ? void 0 : t.hasFeature(eB.oNc.CLAN)),
        L = (0, s.e7)(
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
            !v && ei.Z.close();
        }, [v]);
    let O = (0, s.e7)([em.Z], () => em.Z.getCurrentPage()),
        k = (0, s.e7)([R.Z], () => null != p && R.Z.getEnabled(p)),
        M = (0, s.e7)([K.Z], () => null != p && K.Z.isEmpty(p)),
        P = (0, z.F)(p).length > 0;
    return (0, i.jsx)(g.Gt, {
        value: c,
        children: (0, i.jsx)(eQ, {
            guild: t,
            section: n,
            theme: d,
            sidebarTheme: u,
            channels: h,
            showDirtyGuildTemplateIndicator: L,
            analyticsLocation: l,
            memberCount: D,
            ...x,
            canUnlinkChannels: P,
            canViewGuildAnalytics: _,
            showAccessRate: S,
            onboardingStep: O,
            onboardingEnabled: k,
            welcomeScreenEmpty: M,
            guildMetadata: a,
            canAccessClanSettings: Z
        })
    });
}
