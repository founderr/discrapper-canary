n.r(t),
    n.d(t, {
        default: function () {
            return e$;
        },
        getGuildSettingsSections: function () {
            return eq;
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
    N = n(605236),
    T = n(688465),
    b = n(456268),
    j = n(676317),
    S = n(874993),
    E = n(63568),
    R = n(745752),
    y = n(45966),
    Z = n(637853),
    A = n(526120),
    L = n(352981),
    D = n(610403),
    O = n(923726),
    k = n(144507),
    P = n(303737),
    M = n(15030),
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
    eb = n(29605),
    ej = n(365307),
    eS = n(497666),
    eE = n(324330),
    eR = n(495300),
    ey = n(312397),
    eZ = n(651780),
    eA = n(279542),
    eL = n(413335),
    eD = n(665324),
    eO = n(208150),
    ek = n(353398),
    eP = n(365774),
    eM = n(803288),
    ew = n(804153),
    eB = n(708510),
    eU = n(981631),
    eG = n(308083),
    eF = n(190378),
    eH = n(135899),
    ez = n(388032),
    eW = n(413929);
function eV(e) {
    return '' !== e.toString() ? e.toString() : ez.intl.string(ez.t['154/bG']);
}
function eY(e, t) {
    if (y.Z.getEnabled(e)) return ez.intl.string(ez.t.pPSmxs).toUpperCase();
    if ((0, eg.C)(e)) return ez.intl.string(ez.t.HDF4o6).toUpperCase();
    let n = eh.ug,
        i = n.findIndex((e) => e === t);
    if (-1 !== i)
        return ez.intl.formatToPlainString(ez.t['5r28iY'], {
            count: i + 1,
            total: n.length
        });
}
function eK(e) {
    var t;
    let { guild: r, isGuildAdmin: s, canManageGuild: d, canViewAuditLog: m, canManageRoles: h, canManageGuildExpressions: g, canManageWebhooks: b, canUnlinkChannels: E, canManageBans: R, canAccessMembersPage: y, canViewGuildAnalytics: A, isOwner: B, isOwnerWithRequiredMfaLevel: U, showDirtyGuildTemplateIndicator: F, memberCount: z, showAccessRate: W, onboardingStep: V, onboardingEnabled: K, welcomeScreenEmpty: X, guildMetadata: Q, section: J, canAccessClanSettings: et, memberVerificationRolloutEnabled: er } = e,
        el = es.$.getCurrentConfig({
            guildId: r.id,
            location: 'generateSections'
        }).enabled,
        eh = () =>
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
        eg = (0, L.p)(r.id, 'guild_settings'),
        eK = !1 === r.hasFeature(eU.oNc.CREATOR_MONETIZABLE) && !1 === r.hasFeature(eU.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
        eq =
            eg && eK
                ? {
                      label: (0, i.jsx)('div', {
                          className: eW.roleSubLabel,
                          children: ez.intl.string(ez.t.Tn7Koq)
                      }),
                      ariaLabel: ez.intl.string(ez.t.Tn7Koq)
                  }
                : {
                      label: (0, i.jsx)('div', {
                          className: eW.roleSubLabel,
                          children: ez.intl.string(ez.t['KzCF//'])
                      }),
                      ariaLabel: ez.intl.string(ez.t['KzCF//'])
                  },
        eX = (null === (t = r.clan) || void 0 === t ? void 0 : t.badge) != null ? (0, f.ky)(r.id, r.clan.badge, eG.NC.SIZE_16) : null,
        eQ = {
            section: eU.pNK.DELETE,
            onClick() {
                let e = $.default.getCurrentUser();
                if (null == e) return;
                let t = r.toString(),
                    l = {
                        header: ez.intl.formatToPlainString(ez.t.us7mCw, { name: t }),
                        confirmText: ez.intl.string(ez.t.l3hWPz),
                        cancelText: ez.intl.string(ez.t['ETE/oK']),
                        onConfirm: () => {
                            ee.S.subscribeOnce(eU.CkL.LAYER_POP_COMPLETE, () => {
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
                                  children: ez.intl.format(ez.t['Zuo+VV'], { name: t })
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
                                  instructionText: ez.intl.string(ez.t.abprOD),
                                  errorText: ez.intl.string(ez.t['c2/DS0']),
                                  children: ez.intl.format(ez.t['Zuo+VV'], { name: t })
                              });
                      });
            },
            label: ez.intl.string(ez.t.l3hWPz),
            ariaLabel: ez.intl.string(ez.t.l3hWPz),
            icon: (0, i.jsx)(o.TrashIcon, {
                size: 'xs',
                color: 'currentColor'
            }),
            predicate: () => U
        },
        eJ = er
            ? {
                  section: eU.pNK.DISCOVERY,
                  impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                  label: ez.intl.string(ez.t.oGaVGx),
                  element: eB.O,
                  predicate: () => d,
                  ariaLabel: ez.intl.string(ez.t.oGaVGx)
              }
            : {
                  section: eU.pNK.DISCOVERY,
                  impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                  label: ez.intl.string(ez.t.oGaVGx),
                  element: eN.Z,
                  notice: {
                      stores: [ec.Z],
                      element: eN.s
                  },
                  predicate: () => d && r.hasFeature(eU.oNc.COMMUNITY),
                  ariaLabel: r.hasFeature(eU.oNc.DISCOVERABLE) ? ez.intl.string(ez.t.oGaVGx) : ez.intl.string(ez.t.XU0S6u)
              };
    if (el) {
        let e = [
                { section: u.ID.DIVIDER },
                {
                    section: u.ID.HEADER,
                    label: ez.intl.string(ez.t.zrSbNj)
                },
                {
                    section: eU.pNK.EMOJI,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: ez.intl.string(ez.t.sMOuub),
                    element: eb.ZP,
                    predicate: () => g
                },
                {
                    section: eU.pNK.STICKERS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: ez.intl.string(ez.t.R5nQkZ),
                    ariaLabel: ez.intl.string(ez.t.R5nQkZ),
                    element: eO.Z,
                    predicate: () => g
                },
                {
                    section: eU.pNK.SOUNDBOARD,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: ez.intl.string(ez.t.OWQNYm),
                    ariaLabel: ez.intl.string(ez.t.OWQNYm),
                    element: eD.Z,
                    predicate: () => g
                },
                {
                    section: eU.pNK.APP_DIRECTORY,
                    label: ez.intl.string(ez.t.PHjkRE),
                    ariaLabel: ez.intl.string(ez.t.PHjkRE),
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
                    section: eU.pNK.INTEGRATIONS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: ez.intl.string(ez.t.CIsNZ2),
                    ariaLabel: ez.intl.string(ez.t.CIsNZ2),
                    element: ej.Z,
                    notice: {
                        stores: [ea.default, ec.Z],
                        element: ej.j
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
                              label: ez.intl.string(ez.t.WqkqPj)
                          },
                          {
                              section: eU.pNK.ROLES,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_ROLES,
                              label: ez.intl.string(ez.t.LPJmLy),
                              element: ep.Z,
                              type: u.bT.MINIMAL,
                              ariaLabel: ez.intl.string(ez.t.KXcECw),
                              notice: {
                                  stores: [eo.Z],
                                  element: ep._
                              },
                              predicate: () => h
                          },
                          {
                              section: eU.pNK.MEMBERS,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                              label: (0, i.jsx)(eE.$, {}),
                              ariaLabel: ez.intl.string(ez.t['9Oq93t']),
                              element: eE.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => y
                          },
                          {
                              section: eU.pNK.INSTANT_INVITES,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_INVITES,
                              label: ez.intl.string(ez.t['9F90iY']),
                              element: eS.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => d
                          }
                      ]
                    : [],
            n = r.hasFeature(eU.oNc.COMMUNITY),
            s = d && n,
            o = d && !n,
            f = !n && ((0, j.Nb)(r.id) || (0, j.ze)(r.id)),
            _ =
                s || o || f || m || R
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: ez.intl.string(ez.t['02hvfn'])
                          },
                          {
                              section: eU.pNK.SAFETY,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_SAFETY,
                              label: ez.intl.string(ez.t['suhY+f']),
                              ariaLabel: ez.intl.string(ez.t['suhY+f']),
                              element: ef.Z,
                              newIndicatorDismissibleContentTypes: [a.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                              predicate: () => s
                          },
                          {
                              section: eU.pNK.MODERATION,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_MODERATION,
                              label: ez.intl.string(ez.t['suhY+f']),
                              element: eA.ZP,
                              predicate: () => o
                          },
                          {
                              section: eU.pNK.GUILD_AUTOMOD,
                              label: (0, i.jsx)('div', {
                                  className: eW.landingPageTabLink,
                                  children: ez.intl.string(ez.t.uRelg4)
                              }),
                              ariaLabel: ez.intl.string(ez.t.uRelg4),
                              element: S.Z,
                              newIndicatorDismissibleContentTypes: null,
                              predicate: () => f
                          },
                          {
                              section: eU.pNK.AUDIT_LOG,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                              label: ez.intl.string(ez.t.SPWLyc),
                              element: eu.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => m
                          },
                          {
                              section: eU.pNK.BANS,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_BANS,
                              label: ez.intl.string(ez.t.ZbeITU),
                              element: ev.Z,
                              predicate: () => R
                          }
                      ]
                    : [],
            I = (0, Z.wC)(r.id),
            N = n && A,
            k = d && (r.hasFeature(eU.oNc.DISCOVERABLE) || !!(null == Q ? void 0 : Q.isPublished)),
            B = d && !X && !r.hasFeature(eU.oNc.GUILD_SERVER_GUIDE),
            $ =
                n && (d || I || N || k || B)
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: ez.intl.string(ez.t['1g9A/f'])
                          },
                          {
                              section: eU.pNK.COMMUNITY,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW,
                              label: ez.intl.string(ez.t['/dp6yc']),
                              element: e_.Z,
                              ariaLabel: ez.intl.string(ez.t['/dp6yc']),
                              notice: {
                                  stores: [ec.Z],
                                  element: e_.X
                              },
                              predicate: () => d
                          },
                          {
                              section: eU.pNK.ONBOARDING,
                              label: ez.intl.string(ez.t.LdxCKy),
                              element: eR.Z,
                              ariaLabel: ez.intl.string(ez.t.LdxCKy),
                              newIndicatorDismissibleContentTypes: K ? null : [a.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                              notice: {
                                  stores: [em.Z],
                                  element: ex.Z
                              },
                              predicate: () => I,
                              decoration: eY(r.id, V)
                          },
                          {
                              section: eU.pNK.ANALYTICS,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                              label: ez.intl.string(ez.t['0wWfUF']),
                              ariaLabel: ez.intl.string(ez.t['0wWfUF']),
                              element: eC.Z,
                              newIndicator: G.Z.hasHotspot(eF.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
                              newIndicatorDismissibleContentTypes: W ? [a.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
                              predicate: () => N
                          },
                          eJ,
                          {
                              section: eU.pNK.DISCOVERY_LANDING_PAGE,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                              label: (0, i.jsxs)('div', {
                                  className: eW.landingPageTabLink,
                                  children: [ez.intl.string(ez.t.kGlQGB), ' ', (0, i.jsx)(T.Z, {})]
                              }),
                              ariaLabel: ez.intl.string(ez.t.kGlQGB),
                              element: eT.Z,
                              notice: {
                                  stores: [ec.Z],
                                  element: eT.J
                              },
                              type: u.bT.CUSTOM,
                              predicate: () => k
                          },
                          {
                              section: eU.pNK.COMMUNITY_WELCOME,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                              label: ez.intl.string(ez.t['2rkmDg']),
                              ariaLabel: ez.intl.string(ez.t['2rkmDg']),
                              element: eI.Z,
                              notice: {
                                  stores: [Y.Z],
                                  element: q.Z
                              },
                              predicate: () => B
                          }
                      ]
                    : [],
            ee = eh()
                ? [
                      { section: u.ID.DIVIDER },
                      {
                          section: u.ID.HEADER,
                          label: ez.intl.string(ez.t.mbn3bW)
                      },
                      {
                          ...eq,
                          section: eU.pNK.ROLE_SUBSCRIPTIONS,
                          element: M.Z,
                          type: u.bT.CUSTOM,
                          newIndicatorDismissibleContentTypes: (0, P.sO)(r) ? [a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                      },
                      {
                          section: eU.pNK.GUILD_PRODUCTS,
                          label: ez.intl.string(ez.t.X6h2g4),
                          ariaLabel: ez.intl.string(ez.t.X6h2g4),
                          element: D.Z,
                          predicate: () => (0, L.p)(r.id, 'guild_product_settings_predicate') && (0, O.sy)(r)
                      },
                      {
                          section: eU.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                          impressionName: l.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                          newIndicator: 2022 === new Date().getFullYear(),
                          label: ez.intl.string(ez.t.ipTYsr),
                          ariaLabel: ez.intl.string(ez.t.ipTYsr),
                          element: w.Z,
                          predicate: () => (0, O.sy)(r)
                      }
                  ]
                : [],
            en = null != et && et,
            ei = d && !r.hasFeature(eU.oNc.COMMUNITY),
            er =
                en || ei || d
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: eU.pNK.CLAN,
                              label: ez.intl.string(ez.t['6g8uHB']),
                              ariaLabel: ez.intl.string(ez.t['6g8uHB']),
                              onClick() {
                                  (0, H.q4)(
                                      (e) => {
                                          let { closeLayer: t } = e;
                                          return (0, i.jsx)(C.Z, {
                                              onClose: t,
                                              guildId: r.id
                                          });
                                      },
                                      { layerKey: eG.q2 }
                                  ),
                                      (0, c.xf)();
                              },
                              predicate: () => en,
                              icon: null != eX ? (0, i.jsx)(v.KQ, { src: eX }) : null
                          },
                          {
                              section: eU.pNK.COMMUNITY,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                              label: ez.intl.string(ez.t.ElKTeX),
                              element: e_.Z,
                              ariaLabel: ez.intl.string(ez.t.ElKTeX),
                              newIndicator: null != z && z >= eH.U3 && G.Z.hasHotspot(eF.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                              notice: {
                                  stores: [ec.Z],
                                  element: e_.X
                              },
                              predicate: () => ei
                          },
                          ei ? eJ : void 0,
                          {
                              section: eU.pNK.WIDGET,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_WIDGET,
                              label: ez.intl.string(ez.t.ACjbTk),
                              element: ew.Z,
                              predicate: () => d
                          },
                          {
                              section: eU.pNK.VANITY_URL,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                              label: ez.intl.string(ez.t['5XZKy8']),
                              element: eM.Z,
                              notice: {
                                  stores: [ed.Z],
                                  element: eM.T
                              },
                              predicate: () => d
                          },
                          {
                              section: eU.pNK.GUILD_TEMPLATES,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                              label: (0, i.jsx)(eP.Z, { showDirtyIndicator: F }),
                              ariaLabel: ez.intl.string(ez.t.KUw7Sk),
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
                label: eV(r)
            },
            {
                section: eU.pNK.OVERVIEW,
                impressionName: l.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                label: ez.intl.string(ez.t['/dp6yc']),
                ariaLabel: ez.intl.string(ez.t['/dp6yc']),
                element: ey.Z,
                notice: {
                    stores: [ec.Z],
                    element: ey.O
                }
            },
            ...e,
            ...t,
            ..._,
            ...$,
            ...ee,
            { section: u.ID.DIVIDER },
            {
                section: eU.pNK.GUILD_PREMIUM,
                impressionName: l.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                label: ez.intl.string(ez.t['8+VX4+']),
                ariaLabel: ez.intl.string(ez.t['8+VX4+']),
                element: eZ.Z,
                className: eW.serverBoostTabItem,
                icon: (0, i.jsx)(eL.Z, { className: eW.icon })
            },
            ...er,
            {
                section: u.ID.DIVIDER,
                predicate: () => U
            },
            eQ
        ];
    }
    return [
        {
            section: u.ID.HEADER,
            label: eV(r)
        },
        {
            section: eU.pNK.OVERVIEW,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
            label: ez.intl.string(ez.t['/dp6yc']),
            ariaLabel: ez.intl.string(ez.t['/dp6yc']),
            element: ey.Z,
            notice: {
                stores: [ec.Z],
                element: ey.O
            }
        },
        {
            section: eU.pNK.ROLES,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_ROLES,
            label: ez.intl.string(ez.t.LPJmLy),
            element: ep.Z,
            type: u.bT.MINIMAL,
            ariaLabel: ez.intl.string(ez.t.KXcECw),
            notice: {
                stores: [eo.Z],
                element: ep._
            },
            predicate: () => h
        },
        {
            section: eU.pNK.EMOJI,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_EMOJI,
            label: ez.intl.string(ez.t.sMOuub),
            element: eb.ZP,
            predicate: () => g
        },
        {
            section: eU.pNK.STICKERS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_STICKERS,
            label: ez.intl.string(ez.t.R5nQkZ),
            ariaLabel: ez.intl.string(ez.t.R5nQkZ),
            element: eO.Z,
            predicate: () => g
        },
        {
            section: eU.pNK.SOUNDBOARD,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
            label: ez.intl.string(ez.t.OWQNYm),
            ariaLabel: ez.intl.string(ez.t.OWQNYm),
            element: eD.Z,
            predicate: () => g
        },
        {
            section: eU.pNK.WIDGET,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_WIDGET,
            label: ez.intl.string(ez.t.ACjbTk),
            element: ew.Z,
            predicate: () => d
        },
        {
            section: eU.pNK.GUILD_TEMPLATES,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
            label: (0, i.jsx)(eP.Z, { showDirtyIndicator: F }),
            ariaLabel: ez.intl.string(ez.t.KUw7Sk),
            element: ek.ZP,
            notice: {
                stores: [ek.Sf],
                element: ek.Q5
            },
            predicate: () => d
        },
        {
            section: eU.pNK.VANITY_URL,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
            label: ez.intl.string(ez.t['5XZKy8']),
            element: eM.Z,
            notice: {
                stores: [ed.Z],
                element: eM.T
            },
            predicate: () => s
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => d || b
        },
        {
            section: u.ID.HEADER,
            label: ez.intl.string(ez.t.PHjkRE),
            predicate: () => d || b
        },
        {
            section: eU.pNK.INTEGRATIONS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
            label: ez.intl.string(ez.t.CIsNZ2),
            ariaLabel: ez.intl.string(ez.t.CIsNZ2),
            element: ej.Z,
            notice: {
                stores: [ea.default, ec.Z],
                element: ej.j
            },
            predicate: () => d || b
        },
        {
            section: eU.pNK.APP_DIRECTORY,
            label: ez.intl.string(ez.t.AKcFUl),
            ariaLabel: ez.intl.string(ez.t.AKcFUl),
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
            label: ez.intl.string(ez.t['5tbTdX']),
            predicate: () => d
        },
        {
            section: eU.pNK.SAFETY,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_SAFETY,
            label: ez.intl.string(ez.t['suhY+f']),
            ariaLabel: ez.intl.string(ez.t['suhY+f']),
            element: ef.Z,
            newIndicatorDismissibleContentTypes: [a.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
            predicate: () => d && r.hasFeature(eU.oNc.COMMUNITY)
        },
        {
            section: eU.pNK.MODERATION,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_MODERATION,
            label: ez.intl.string(ez.t['suhY+f']),
            element: eA.ZP,
            predicate: () => d && !r.hasFeature(eU.oNc.COMMUNITY)
        },
        {
            section: eU.pNK.GUILD_AUTOMOD,
            label: (0, i.jsx)('div', {
                className: eW.landingPageTabLink,
                children: ez.intl.string(ez.t.uRelg4)
            }),
            ariaLabel: ez.intl.string(ez.t.uRelg4),
            element: S.Z,
            newIndicatorDismissibleContentTypes: null,
            predicate: () => !r.hasFeature(eU.oNc.COMMUNITY) && ((0, j.Nb)(r.id) || (0, j.ze)(r.id))
        },
        {
            section: eU.pNK.AUDIT_LOG,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
            label: ez.intl.string(ez.t.SPWLyc),
            element: eu.Z,
            type: u.bT.CUSTOM,
            predicate: () => m
        },
        {
            section: eU.pNK.BANS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_BANS,
            label: ez.intl.string(ez.t.ZbeITU),
            element: ev.Z,
            predicate: () => R
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => d || A
        },
        {
            section: u.ID.HEADER,
            label: ez.intl.string(ez.t['1g9A/f']),
            predicate: () => !et && (d || A)
        },
        {
            section: eU.pNK.CLAN,
            label: ez.intl.string(ez.t['6g8uHB']),
            ariaLabel: ez.intl.string(ez.t['6g8uHB']),
            onClick() {
                (0, H.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(C.Z, {
                            onClose: t,
                            guildId: r.id
                        });
                    },
                    { layerKey: eG.q2 }
                ),
                    (0, c.xf)();
            },
            predicate: () => null != et && et,
            icon: null != eX ? (0, i.jsx)(v.KQ, { src: eX }) : null
        },
        {
            section: eU.pNK.COMMUNITY,
            impressionName: r.hasFeature(eU.oNc.COMMUNITY) ? l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : l.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
            label: r.hasFeature(eU.oNc.COMMUNITY) ? ez.intl.string(ez.t['/dp6yc']) : ez.intl.string(ez.t.ElKTeX),
            element: e_.Z,
            ariaLabel: r.hasFeature(eU.oNc.COMMUNITY) ? ez.intl.string(ez.t['/dp6yc']) : ez.intl.string(ez.t.ElKTeX),
            newIndicator: !r.hasFeature(eU.oNc.COMMUNITY) && null != z && z >= eH.U3 && G.Z.hasHotspot(eF.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
            notice: {
                stores: [ec.Z],
                element: e_.X
            },
            predicate: () => d
        },
        {
            section: eU.pNK.ONBOARDING,
            label: ez.intl.string(ez.t.LdxCKy),
            element: eR.Z,
            ariaLabel: ez.intl.string(ez.t.LdxCKy),
            newIndicatorDismissibleContentTypes: K ? null : [a.z.COMMUNITY_ONBOARDING_NEW_BADGE],
            notice: {
                stores: [em.Z],
                element: ex.Z
            },
            predicate: () => (0, Z.wC)(r.id),
            decoration: eY(r.id, V)
        },
        {
            section: eU.pNK.ANALYTICS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
            label: ez.intl.string(ez.t['0wWfUF']),
            ariaLabel: ez.intl.string(ez.t['0wWfUF']),
            element: eC.Z,
            newIndicator: G.Z.hasHotspot(eF.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
            newIndicatorDismissibleContentTypes: W ? [a.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
            predicate: () => A && r.hasFeature(eU.oNc.COMMUNITY)
        },
        eJ,
        {
            section: eU.pNK.DISCOVERY_LANDING_PAGE,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
            label: (0, i.jsxs)('div', {
                className: eW.landingPageTabLink,
                children: [ez.intl.string(ez.t.kGlQGB), ' ', (0, i.jsx)(T.Z, {})]
            }),
            ariaLabel: ez.intl.string(ez.t.kGlQGB),
            element: eT.Z,
            notice: {
                stores: [ec.Z],
                element: eT.J
            },
            type: u.bT.CUSTOM,
            predicate: () => d && (r.hasFeature(eU.oNc.DISCOVERABLE) || !!(null == Q ? void 0 : Q.isPublished))
        },
        {
            section: eU.pNK.COMMUNITY_WELCOME,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
            label: ez.intl.string(ez.t['2rkmDg']),
            ariaLabel: ez.intl.string(ez.t['2rkmDg']),
            element: eI.Z,
            notice: {
                stores: [Y.Z],
                element: q.Z
            },
            predicate: () => d && r.hasFeature(eU.oNc.COMMUNITY) && !X && !r.hasFeature(eU.oNc.GUILD_SERVER_GUIDE)
        },
        {
            section: u.ID.DIVIDER,
            predicate: eh
        },
        {
            section: u.ID.HEADER,
            label: ez.intl.string(ez.t.mbn3bW),
            predicate: eh
        },
        {
            ...eq,
            section: eU.pNK.ROLE_SUBSCRIPTIONS,
            element: M.Z,
            type: u.bT.CUSTOM,
            predicate: eh,
            newIndicatorDismissibleContentTypes: (0, P.sO)(r) ? [a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        },
        {
            section: eU.pNK.GUILD_PRODUCTS,
            label: ez.intl.string(ez.t.X6h2g4),
            ariaLabel: ez.intl.string(ez.t.X6h2g4),
            element: D.Z,
            predicate: () => eh() && (0, L.p)(r.id, 'guild_product_settings_predicate') && (0, O.sy)(r)
        },
        {
            section: eU.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
            impressionName: l.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
            newIndicator: 2022 === new Date().getFullYear(),
            label: ez.intl.string(ez.t.ipTYsr),
            ariaLabel: ez.intl.string(ez.t.ipTYsr),
            element: w.Z,
            predicate: () => eh() && (0, O.sy)(r)
        },
        { section: u.ID.DIVIDER },
        {
            section: eU.pNK.GUILD_PREMIUM,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
            label: ez.intl.string(ez.t['8+VX4+']),
            ariaLabel: ez.intl.string(ez.t['8+VX4+']),
            element: eZ.Z,
            className: eW.serverBoostTabItem,
            icon: (0, i.jsx)(eL.Z, { className: eW.icon })
        },
        { section: u.ID.DIVIDER },
        {
            section: u.ID.HEADER,
            label: ez.intl.string(ez.t['+OecxM'])
        },
        {
            section: eU.pNK.MEMBERS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_MEMBERS,
            label: (0, i.jsx)(eE.$, {}),
            ariaLabel: ez.intl.string(ez.t['9Oq93t']),
            element: eE.Z,
            type: u.bT.CUSTOM,
            predicate: () => y
        },
        {
            section: eU.pNK.INSTANT_INVITES,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_INVITES,
            label: ez.intl.string(ez.t['9F90iY']),
            element: eS.Z,
            type: u.bT.CUSTOM,
            predicate: () => d
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => U
        },
        eQ
    ];
}
function eq(e, t) {
    let n = J.Z.getGuildPermissionProps(e),
        i = (0, z.p)(e.id).length > 0,
        r = (0, E.K2)(e.id, 'getGuildSettingsSections');
    return eK({
        channels: t,
        showDirtyGuildTemplateIndicator: !1,
        ...n,
        canUnlinkChannels: i,
        showAccessRate: !1,
        canAccessClanSettings: n.isGuildAdmin && e.hasFeature(eU.oNc.CLAN),
        welcomeScreenEmpty: K.Z.isEmpty(e.id),
        memberVerificationRolloutEnabled: r
    })
        .filter((e) => {
            let { section: t } = e;
            return t !== u.ID.HEADER && t !== u.ID.DIVIDER;
        })
        .filter((e) => null == e.predicate || e.predicate());
}
function eX(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    h.ZP.trackWithMetadata(eU.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: t,
        destination_pane: e,
        location: n
    });
}
let eQ = {
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
class eJ extends r.PureComponent {
    componentDidMount() {
        eX(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        ei.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: n, isGuildAdmin: i, canManageGuild: r, canManageRoles: l, canManageBans: s, canManageNicknames: a, canManageGuildExpressions: o, canViewAuditLog: d, canManageWebhooks: u, canAccessMembersPage: m, canViewGuildAnalytics: h } = this.props;
        n !== t && eX(n, t), ((!i && !r && !l && !s && !a && !o && !d && !m && !u) || (!d && n === eU.pNK.AUDIT_LOG) || (!l && n === eU.pNK.ROLES) || (!o && n === eU.pNK.EMOJI) || (!o && n === eU.pNK.STICKERS) || (!o && n === eU.pNK.SOUNDBOARD) || (!s && n === eU.pNK.BANS) || (!h && n === eU.pNK.ANALYTICS) || (!m && n === eU.pNK.MEMBERS)) && (0, c.xf)();
    }
    render() {
        var e, t;
        let { theme: n, sidebarTheme: r, section: l, guild: s, channels: a, isGuildAdmin: o, canManageGuild: u, canViewAuditLog: m, canManageRoles: h, canManageGuildExpressions: g, canManageWebhooks: x, canUnlinkChannels: p, canManageBans: f, canAccessMembersPage: C, canViewGuildAnalytics: v, isOwner: _, isOwnerWithRequiredMfaLevel: I, showDirtyGuildTemplateIndicator: N, memberCount: T, showAccessRate: b, onboardingStep: j, onboardingEnabled: S, welcomeScreenEmpty: E, guildMetadata: R, canAccessClanSettings: y, memberVerificationRolloutEnabled: Z } = this.props;
        if (null == s) return null;
        let A = eK({
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
                showAccessRate: b,
                onboardingStep: j,
                onboardingEnabled: S,
                welcomeScreenEmpty: E,
                guildMetadata: R,
                section: l,
                canAccessClanSettings: y,
                memberVerificationRolloutEnabled: Z
            }),
            L = (null === (t = A.find((e) => e.section === l)) || void 0 === t ? void 0 : null === (e = t.predicate) || void 0 === e ? void 0 : e.call(t)) !== !1;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(d.ZP, {
                    theme: n,
                    sidebarTheme: r,
                    section: L && null != l ? l : eU.pNK.OVERVIEW,
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
function e$() {
    var e;
    let { guild: t, section: n, analyticsLocation: l, guildMetadata: a, isGuildMetadataLoaded: o } = (0, s.cj)([ec.Z], () => ec.Z.getProps()),
        { analyticsLocations: c } = (0, g.ZP)(m.Z.GUILD_SETTINGS),
        d = (0, s.e7)([W.Z], () => W.Z.theme),
        u = (0, s.e7)([W.Z], () => (W.Z.darkSidebar ? eU.BRd.DARK : void 0)),
        h = (0, s.e7)([X.ZP], () => (null != t ? X.ZP.getChannels(t.id).SELECTABLE : null), [t]),
        x = (0, s.cj)([J.Z], () => (null != t ? J.Z.getGuildPermissionProps(t) : eQ)),
        p = null == t ? void 0 : t.id,
        f = (0, s.e7)([J.Z], () => null != t && J.Z.canAccessGuildSettings(t)),
        C = null != t && (0, et.Fv)(t.id),
        v = C || f,
        _ = C || x.canViewGuildAnalytics,
        { shouldFetchMemberInsights: I, hasAccessRate: N } = (0, s.cj)([el.Z], () => ({
            shouldFetchMemberInsights: null != t && el.Z.shouldFetchMemberInsights(t.id),
            hasAccessRate: null != t && el.Z.getMemberInsights(t.id).hasAccessRate
        }));
    r.useEffect(() => {
        !o && null != p && (0, b.aC)(p);
    }, [o, p]),
        r.useEffect(() => {
            v && _ && I && null != p && (0, er.r2)(p);
        }, [v, _, I, p]);
    let T = null !== (e = null == t ? void 0 : t.hasFeature(eU.oNc.COMMUNITY)) && void 0 !== e && e;
    r.useEffect(() => {
        null != p && T && ((0, R.eM)(p), (0, V.RM)(p));
    }, [p, T]),
        r.useEffect(() => {
            null != p && (0, A.cP)(p);
        }, [p]);
    let { showAccessRate: j } = (0, et.eA)(null == t ? void 0 : t.id, !N || !_ || !v),
        S = x.isGuildAdmin && (null == t ? void 0 : t.hasFeature(eU.oNc.CLAN)),
        Z = (0, s.e7)(
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
            !v && ei.Z.close();
        }, [v]);
    let D = (0, s.e7)([em.Z], () => em.Z.getCurrentPage()),
        O = (0, s.e7)([y.Z], () => null != p && y.Z.getEnabled(p)),
        k = (0, s.e7)([K.Z], () => null != p && K.Z.isEmpty(p)),
        P = (0, z.F)(p).length > 0,
        M = (0, E.jS)(p, 'GuildSettings');
    return (0, i.jsx)(g.Gt, {
        value: c,
        children: (0, i.jsx)(eJ, {
            guild: t,
            section: n,
            theme: d,
            sidebarTheme: u,
            channels: h,
            showDirtyGuildTemplateIndicator: Z,
            analyticsLocation: l,
            memberCount: L,
            ...x,
            canUnlinkChannels: P,
            canViewGuildAnalytics: _,
            showAccessRate: j,
            onboardingStep: D,
            onboardingEnabled: O,
            welcomeScreenEmpty: k,
            guildMetadata: a,
            canAccessClanSettings: S,
            memberVerificationRolloutEnabled: M
        })
    });
}
