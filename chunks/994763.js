n.r(t),
    n.d(t, {
        default: function () {
            return eQ;
        },
        getGuildSettingsSections: function () {
            return eY;
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
    y = n(637853),
    Z = n(526120),
    A = n(352981),
    L = n(610403),
    D = n(923726),
    O = n(144507),
    k = n(303737),
    P = n(15030),
    M = n(220685),
    w = n(751189),
    B = n(409059),
    U = n(810788),
    G = n(918658),
    F = n(84615),
    H = n(163400),
    z = n(210887),
    W = n(524329),
    V = n(575258),
    Y = n(995532),
    K = n(276687),
    q = n(984933),
    X = n(650774),
    Q = n(496675),
    J = n(594174),
    $ = n(585483),
    ee = n(771212),
    et = n(85001),
    en = n(434404),
    ei = n(146596),
    er = n(559368),
    el = n(600553),
    es = n(360606),
    ea = n(946724),
    eo = n(999382),
    ec = n(44550),
    ed = n(853714),
    eu = n(359191),
    em = n(84658),
    eh = n(142961),
    eg = n(730910),
    ex = n(475013),
    ep = n(213956),
    ef = n(702478),
    eC = n(247031),
    ev = n(787561),
    e_ = n(579648),
    eI = n(511480),
    eN = n(460461),
    eT = n(29605),
    ej = n(365307),
    eb = n(497666),
    eS = n(324330),
    eE = n(495300),
    eR = n(312397),
    ey = n(651780),
    eZ = n(279542),
    eA = n(413335),
    eL = n(665324),
    eD = n(208150),
    eO = n(353398),
    ek = n(365774),
    eP = n(803288),
    eM = n(804153),
    ew = n(981631),
    eB = n(308083),
    eU = n(190378),
    eG = n(135899),
    eF = n(388032),
    eH = n(413929);
function ez(e) {
    return '' !== e.toString() ? e.toString() : eF.intl.string(eF.t['154/bG']);
}
function eW(e, t) {
    if (R.Z.getEnabled(e)) return eF.intl.string(eF.t.pPSmxs).toUpperCase();
    if ((0, eh.C)(e)) return eF.intl.string(eF.t.HDF4o6).toUpperCase();
    let n = em.ug,
        i = n.findIndex((e) => e === t);
    if (-1 !== i)
        return eF.intl.formatToPlainString(eF.t['5r28iY'], {
            count: i + 1,
            total: n.length
        });
}
function eV(e) {
    var t;
    let { guild: r, isGuildAdmin: s, canManageGuild: d, canViewAuditLog: m, canManageRoles: h, canManageGuildExpressions: g, canManageWebhooks: N, canUnlinkChannels: E, canManageBans: R, canAccessMembersPage: Z, canViewGuildAnalytics: w, isOwner: B, isOwnerWithRequiredMfaLevel: G, showDirtyGuildTemplateIndicator: H, memberCount: z, showAccessRate: W, onboardingStep: Y, onboardingEnabled: q, welcomeScreenEmpty: X, guildMetadata: Q, section: ee, canAccessClanSettings: ei } = e,
        er = el.$.getCurrentConfig({
            guildId: r.id,
            location: 'generateSections'
        }).enabled,
        em = () =>
            (0, O.X$)({
                guild: r,
                isOwner: B,
                canManageGuildRoleSubscriptions: (0, O.H2)(r),
                isMonetizationWaitlistEnabledForGuild: (0, _.mG)(r.id),
                isGuildEligibleForRoleSubscriptions: (0, D.kT)(r.id),
                isExpeditedMonetizationOnboardingGuild: (0, _.Rw)(r),
                isUserInCreatorMonetizationEligibleCountry: (0, _.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, I.cu)(r.id)
            }),
        eh = (0, A.p)(r.id, 'guild_settings'),
        eV = !1 === r.hasFeature(ew.oNc.CREATOR_MONETIZABLE) && !1 === r.hasFeature(ew.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
        eY =
            eh && eV
                ? {
                      label: (0, i.jsx)('div', {
                          className: eH.roleSubLabel,
                          children: eF.intl.string(eF.t.Tn7Koq)
                      }),
                      ariaLabel: eF.intl.string(eF.t.Tn7Koq)
                  }
                : {
                      label: (0, i.jsx)('div', {
                          className: eH.roleSubLabel,
                          children: eF.intl.string(eF.t['KzCF//'])
                      }),
                      ariaLabel: eF.intl.string(eF.t['KzCF//'])
                  },
        eK = (null === (t = r.clan) || void 0 === t ? void 0 : t.badge) != null ? (0, f.ky)(r.id, r.clan.badge, eB.NC.SIZE_16) : null,
        eq = {
            section: ew.pNK.DELETE,
            onClick() {
                let e = J.default.getCurrentUser();
                if (null == e) return;
                let t = r.toString(),
                    l = {
                        header: eF.intl.formatToPlainString(eF.t.us7mCw, { name: t }),
                        confirmText: eF.intl.string(eF.t.l3hWPz),
                        cancelText: eF.intl.string(eF.t['ETE/oK']),
                        onConfirm: () => {
                            $.S.subscribeOnce(ew.CkL.LAYER_POP_COMPLETE, () => {
                                en.Z.deleteGuild(r.id, t).then(() => {
                                    if ((0, T.un)(a.z.GUILD_DELETE_FEEDBACK)) return;
                                    et.Z.trackExposure({ location: 'e4be39_1' });
                                    let { showFeedback: e } = et.Z.getCurrentConfig({ location: 'e4be39_2' }, { autoTrackExposure: !1 });
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
                                  children: eF.intl.format(eF.t['Zuo+VV'], { name: t })
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
                                  instructionText: eF.intl.string(eF.t.abprOD),
                                  errorText: eF.intl.string(eF.t['c2/DS0']),
                                  children: eF.intl.format(eF.t['Zuo+VV'], { name: t })
                              });
                      });
            },
            label: eF.intl.string(eF.t.l3hWPz),
            ariaLabel: eF.intl.string(eF.t.l3hWPz),
            icon: (0, i.jsx)(o.TrashIcon, {
                size: 'xs',
                color: 'currentColor'
            }),
            predicate: () => G
        };
    if (er) {
        let e = [
                { section: u.ID.DIVIDER },
                {
                    section: u.ID.HEADER,
                    label: eF.intl.string(eF.t.zrSbNj)
                },
                {
                    section: ew.pNK.EMOJI,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eF.intl.string(eF.t.sMOuub),
                    element: eT.ZP,
                    predicate: () => g
                },
                {
                    section: ew.pNK.STICKERS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eF.intl.string(eF.t.R5nQkZ),
                    ariaLabel: eF.intl.string(eF.t.R5nQkZ),
                    element: eD.Z,
                    predicate: () => g
                },
                {
                    section: ew.pNK.SOUNDBOARD,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eF.intl.string(eF.t.OWQNYm),
                    ariaLabel: eF.intl.string(eF.t.OWQNYm),
                    element: eL.Z,
                    predicate: () => g
                },
                {
                    section: ew.pNK.APP_DIRECTORY,
                    label: eF.intl.string(eF.t.PHjkRE),
                    ariaLabel: eF.intl.string(eF.t.PHjkRE),
                    onClick() {
                        (0, p.goToAppDirectory)({
                            guildId: r.id,
                            entrypoint: {
                                name: x.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
                                guildSettingsSection: ee
                            }
                        }),
                            (0, c.xf)();
                    }
                },
                {
                    section: ew.pNK.INTEGRATIONS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eF.intl.string(eF.t.CIsNZ2),
                    ariaLabel: eF.intl.string(eF.t.CIsNZ2),
                    element: ej.Z,
                    notice: {
                        stores: [es.default, eo.Z],
                        element: ej.j
                    },
                    predicate: () => d || N || E
                }
            ],
            t =
                h || Z || d
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: eF.intl.string(eF.t.WqkqPj)
                          },
                          {
                              section: ew.pNK.ROLES,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_ROLES,
                              label: eF.intl.string(eF.t.LPJmLy),
                              element: ex.Z,
                              type: u.bT.MINIMAL,
                              ariaLabel: eF.intl.string(eF.t.KXcECw),
                              notice: {
                                  stores: [ea.Z],
                                  element: ex._
                              },
                              predicate: () => h
                          },
                          {
                              section: ew.pNK.MEMBERS,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                              label: (0, i.jsx)(eS.$, {}),
                              ariaLabel: eF.intl.string(eF.t['9Oq93t']),
                              element: eS.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => Z
                          },
                          {
                              section: ew.pNK.INSTANT_INVITES,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_INVITES,
                              label: eF.intl.string(eF.t['9F90iY']),
                              element: eb.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => d
                          }
                      ]
                    : [],
            n = r.hasFeature(ew.oNc.COMMUNITY),
            s = d && n,
            o = d && !n,
            f = !n && ((0, b.Nb)(r.id) || (0, b.ze)(r.id)),
            _ =
                s || o || f || m || R
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: eF.intl.string(eF.t['02hvfn'])
                          },
                          {
                              section: ew.pNK.SAFETY,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_SAFETY,
                              label: eF.intl.string(eF.t['suhY+f']),
                              ariaLabel: eF.intl.string(eF.t['suhY+f']),
                              element: ep.Z,
                              newIndicatorDismissibleContentTypes: [a.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
                              predicate: () => s
                          },
                          {
                              section: ew.pNK.MODERATION,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_MODERATION,
                              label: eF.intl.string(eF.t['suhY+f']),
                              element: eZ.ZP,
                              predicate: () => o
                          },
                          {
                              section: ew.pNK.GUILD_AUTOMOD,
                              label: (0, i.jsx)('div', {
                                  className: eH.landingPageTabLink,
                                  children: eF.intl.string(eF.t.uRelg4)
                              }),
                              ariaLabel: eF.intl.string(eF.t.uRelg4),
                              element: S.Z,
                              newIndicatorDismissibleContentTypes: null,
                              predicate: () => f
                          },
                          {
                              section: ew.pNK.AUDIT_LOG,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                              label: eF.intl.string(eF.t.SPWLyc),
                              element: ed.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => m
                          },
                          {
                              section: ew.pNK.BANS,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_BANS,
                              label: eF.intl.string(eF.t.ZbeITU),
                              element: eC.Z,
                              predicate: () => R
                          }
                      ]
                    : [],
            I = (0, y.wC)(r.id),
            T = n && w,
            O = d && (r.hasFeature(ew.oNc.DISCOVERABLE) || !!(null == Q ? void 0 : Q.isPublished)),
            B = d && !X && !r.hasFeature(ew.oNc.GUILD_SERVER_GUIDE),
            J =
                n && (d || I || T || O || B)
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: u.ID.HEADER,
                              label: eF.intl.string(eF.t['1g9A/f'])
                          },
                          {
                              section: ew.pNK.COMMUNITY,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW,
                              label: eF.intl.string(eF.t['/dp6yc']),
                              element: ev.Z,
                              ariaLabel: eF.intl.string(eF.t['/dp6yc']),
                              notice: {
                                  stores: [eo.Z],
                                  element: ev.X
                              },
                              predicate: () => d
                          },
                          {
                              section: ew.pNK.ONBOARDING,
                              label: eF.intl.string(eF.t.LdxCKy),
                              element: eE.Z,
                              ariaLabel: eF.intl.string(eF.t.LdxCKy),
                              newIndicatorDismissibleContentTypes: q ? null : [a.z.COMMUNITY_ONBOARDING_NEW_BADGE],
                              notice: {
                                  stores: [eu.Z],
                                  element: eg.Z
                              },
                              predicate: () => I,
                              decoration: eW(r.id, Y)
                          },
                          {
                              section: ew.pNK.ANALYTICS,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                              label: eF.intl.string(eF.t['0wWfUF']),
                              ariaLabel: eF.intl.string(eF.t['0wWfUF']),
                              element: ef.Z,
                              newIndicator: U.Z.hasHotspot(eU.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
                              newIndicatorDismissibleContentTypes: W ? [a.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
                              predicate: () => T
                          },
                          {
                              section: ew.pNK.DISCOVERY,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                              label: eF.intl.string(eF.t.oGaVGx),
                              element: eI.Z,
                              notice: {
                                  stores: [eo.Z],
                                  element: eI.s
                              },
                              predicate: () => d,
                              ariaLabel: r.hasFeature(ew.oNc.DISCOVERABLE) ? eF.intl.string(eF.t.oGaVGx) : eF.intl.string(eF.t.XU0S6u)
                          },
                          {
                              section: ew.pNK.DISCOVERY_LANDING_PAGE,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                              label: (0, i.jsxs)('div', {
                                  className: eH.landingPageTabLink,
                                  children: [eF.intl.string(eF.t.kGlQGB), ' ', (0, i.jsx)(j.Z, {})]
                              }),
                              ariaLabel: eF.intl.string(eF.t.kGlQGB),
                              element: eN.Z,
                              notice: {
                                  stores: [eo.Z],
                                  element: eN.J
                              },
                              type: u.bT.CUSTOM,
                              predicate: () => O
                          },
                          {
                              section: ew.pNK.COMMUNITY_WELCOME,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                              label: eF.intl.string(eF.t['2rkmDg']),
                              ariaLabel: eF.intl.string(eF.t['2rkmDg']),
                              element: e_.Z,
                              notice: {
                                  stores: [V.Z],
                                  element: K.Z
                              },
                              predicate: () => B
                          }
                      ]
                    : [],
            $ = em()
                ? [
                      { section: u.ID.DIVIDER },
                      {
                          section: u.ID.HEADER,
                          label: eF.intl.string(eF.t.mbn3bW)
                      },
                      {
                          ...eY,
                          section: ew.pNK.ROLE_SUBSCRIPTIONS,
                          element: P.Z,
                          type: u.bT.CUSTOM,
                          newIndicatorDismissibleContentTypes: (0, k.sO)(r) ? [a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                      },
                      {
                          section: ew.pNK.GUILD_PRODUCTS,
                          label: eF.intl.string(eF.t.X6h2g4),
                          ariaLabel: eF.intl.string(eF.t.X6h2g4),
                          element: L.Z,
                          predicate: () => (0, A.p)(r.id, 'guild_product_settings_predicate') && (0, D.sy)(r)
                      },
                      {
                          section: ew.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                          impressionName: l.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                          newIndicator: 2022 === new Date().getFullYear(),
                          label: eF.intl.string(eF.t.ipTYsr),
                          ariaLabel: eF.intl.string(eF.t.ipTYsr),
                          element: M.Z,
                          predicate: () => (0, D.sy)(r)
                      }
                  ]
                : [],
            et = null != ei && ei,
            en = d && !r.hasFeature(ew.oNc.COMMUNITY),
            er =
                et || en || d
                    ? [
                          { section: u.ID.DIVIDER },
                          {
                              section: ew.pNK.CLAN,
                              label: eF.intl.string(eF.t['6g8uHB']),
                              ariaLabel: eF.intl.string(eF.t['6g8uHB']),
                              onClick() {
                                  (0, F.q4)(
                                      (e) => {
                                          let { closeLayer: t } = e;
                                          return (0, i.jsx)(C.Z, {
                                              onClose: t,
                                              guildId: r.id
                                          });
                                      },
                                      { layerKey: eB.q2 }
                                  ),
                                      (0, c.xf)();
                              },
                              predicate: () => et,
                              icon: null != eK ? (0, i.jsx)(v.KQ, { src: eK }) : null
                          },
                          {
                              section: ew.pNK.COMMUNITY,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                              label: eF.intl.string(eF.t.ElKTeX),
                              element: ev.Z,
                              ariaLabel: eF.intl.string(eF.t.ElKTeX),
                              newIndicator: null != z && z >= eG.U3 && U.Z.hasHotspot(eU.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                              notice: {
                                  stores: [eo.Z],
                                  element: ev.X
                              },
                              predicate: () => en
                          },
                          {
                              section: ew.pNK.WIDGET,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_WIDGET,
                              label: eF.intl.string(eF.t.ACjbTk),
                              element: eM.Z,
                              predicate: () => d
                          },
                          {
                              section: ew.pNK.VANITY_URL,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                              label: eF.intl.string(eF.t['5XZKy8']),
                              element: eP.Z,
                              notice: {
                                  stores: [ec.Z],
                                  element: eP.T
                              },
                              predicate: () => d
                          },
                          {
                              section: ew.pNK.GUILD_TEMPLATES,
                              impressionName: l.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                              label: (0, i.jsx)(ek.Z, { showDirtyIndicator: H }),
                              ariaLabel: eF.intl.string(eF.t.KUw7Sk),
                              element: eO.ZP,
                              notice: {
                                  stores: [eO.Sf],
                                  element: eO.Q5
                              },
                              predicate: () => d
                          }
                      ]
                    : [];
        return [
            {
                section: u.ID.HEADER,
                label: ez(r)
            },
            {
                section: ew.pNK.OVERVIEW,
                impressionName: l.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                label: eF.intl.string(eF.t['/dp6yc']),
                ariaLabel: eF.intl.string(eF.t['/dp6yc']),
                element: eR.Z,
                notice: {
                    stores: [eo.Z],
                    element: eR.O
                }
            },
            ...e,
            ...t,
            ..._,
            ...J,
            ...$,
            { section: u.ID.DIVIDER },
            {
                section: ew.pNK.GUILD_PREMIUM,
                impressionName: l.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                label: eF.intl.string(eF.t['8+VX4+']),
                ariaLabel: eF.intl.string(eF.t['8+VX4+']),
                element: ey.Z,
                className: eH.serverBoostTabItem,
                icon: (0, i.jsx)(eA.Z, { className: eH.icon })
            },
            ...er,
            {
                section: u.ID.DIVIDER,
                predicate: () => G
            },
            eq
        ];
    }
    return [
        {
            section: u.ID.HEADER,
            label: ez(r)
        },
        {
            section: ew.pNK.OVERVIEW,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
            label: eF.intl.string(eF.t['/dp6yc']),
            ariaLabel: eF.intl.string(eF.t['/dp6yc']),
            element: eR.Z,
            notice: {
                stores: [eo.Z],
                element: eR.O
            }
        },
        {
            section: ew.pNK.ROLES,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_ROLES,
            label: eF.intl.string(eF.t.LPJmLy),
            element: ex.Z,
            type: u.bT.MINIMAL,
            ariaLabel: eF.intl.string(eF.t.KXcECw),
            notice: {
                stores: [ea.Z],
                element: ex._
            },
            predicate: () => h
        },
        {
            section: ew.pNK.EMOJI,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_EMOJI,
            label: eF.intl.string(eF.t.sMOuub),
            element: eT.ZP,
            predicate: () => g
        },
        {
            section: ew.pNK.STICKERS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_STICKERS,
            label: eF.intl.string(eF.t.R5nQkZ),
            ariaLabel: eF.intl.string(eF.t.R5nQkZ),
            element: eD.Z,
            predicate: () => g
        },
        {
            section: ew.pNK.SOUNDBOARD,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
            label: eF.intl.string(eF.t.OWQNYm),
            ariaLabel: eF.intl.string(eF.t.OWQNYm),
            element: eL.Z,
            predicate: () => g
        },
        {
            section: ew.pNK.WIDGET,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_WIDGET,
            label: eF.intl.string(eF.t.ACjbTk),
            element: eM.Z,
            predicate: () => d
        },
        {
            section: ew.pNK.GUILD_TEMPLATES,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
            label: (0, i.jsx)(ek.Z, { showDirtyIndicator: H }),
            ariaLabel: eF.intl.string(eF.t.KUw7Sk),
            element: eO.ZP,
            notice: {
                stores: [eO.Sf],
                element: eO.Q5
            },
            predicate: () => d
        },
        {
            section: ew.pNK.VANITY_URL,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
            label: eF.intl.string(eF.t['5XZKy8']),
            element: eP.Z,
            notice: {
                stores: [ec.Z],
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
            label: eF.intl.string(eF.t.PHjkRE),
            predicate: () => d || N
        },
        {
            section: ew.pNK.INTEGRATIONS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
            label: eF.intl.string(eF.t.CIsNZ2),
            ariaLabel: eF.intl.string(eF.t.CIsNZ2),
            element: ej.Z,
            notice: {
                stores: [es.default, eo.Z],
                element: ej.j
            },
            predicate: () => d || N
        },
        {
            section: ew.pNK.APP_DIRECTORY,
            label: eF.intl.string(eF.t.AKcFUl),
            ariaLabel: eF.intl.string(eF.t.AKcFUl),
            onClick() {
                (0, p.goToAppDirectory)({
                    guildId: r.id,
                    entrypoint: {
                        name: x.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
                        guildSettingsSection: ee
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
            label: eF.intl.string(eF.t['5tbTdX']),
            predicate: () => d
        },
        {
            section: ew.pNK.SAFETY,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_SAFETY,
            label: eF.intl.string(eF.t['suhY+f']),
            ariaLabel: eF.intl.string(eF.t['suhY+f']),
            element: ep.Z,
            newIndicatorDismissibleContentTypes: [a.z.COMMUNITY_GUILD_SETTINGS_SAFETY],
            predicate: () => d && r.hasFeature(ew.oNc.COMMUNITY)
        },
        {
            section: ew.pNK.MODERATION,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_MODERATION,
            label: eF.intl.string(eF.t['suhY+f']),
            element: eZ.ZP,
            predicate: () => d && !r.hasFeature(ew.oNc.COMMUNITY)
        },
        {
            section: ew.pNK.GUILD_AUTOMOD,
            label: (0, i.jsx)('div', {
                className: eH.landingPageTabLink,
                children: eF.intl.string(eF.t.uRelg4)
            }),
            ariaLabel: eF.intl.string(eF.t.uRelg4),
            element: S.Z,
            newIndicatorDismissibleContentTypes: null,
            predicate: () => !r.hasFeature(ew.oNc.COMMUNITY) && ((0, b.Nb)(r.id) || (0, b.ze)(r.id))
        },
        {
            section: ew.pNK.AUDIT_LOG,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
            label: eF.intl.string(eF.t.SPWLyc),
            element: ed.Z,
            type: u.bT.CUSTOM,
            predicate: () => m
        },
        {
            section: ew.pNK.BANS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_BANS,
            label: eF.intl.string(eF.t.ZbeITU),
            element: eC.Z,
            predicate: () => R
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => d || w
        },
        {
            section: u.ID.HEADER,
            label: eF.intl.string(eF.t['1g9A/f']),
            predicate: () => !ei && (d || w)
        },
        {
            section: ew.pNK.CLAN,
            label: eF.intl.string(eF.t['6g8uHB']),
            ariaLabel: eF.intl.string(eF.t['6g8uHB']),
            onClick() {
                (0, F.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(C.Z, {
                            onClose: t,
                            guildId: r.id
                        });
                    },
                    { layerKey: eB.q2 }
                ),
                    (0, c.xf)();
            },
            predicate: () => null != ei && ei,
            icon: null != eK ? (0, i.jsx)(v.KQ, { src: eK }) : null
        },
        {
            section: ew.pNK.COMMUNITY,
            impressionName: r.hasFeature(ew.oNc.COMMUNITY) ? l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : l.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
            label: r.hasFeature(ew.oNc.COMMUNITY) ? eF.intl.string(eF.t['/dp6yc']) : eF.intl.string(eF.t.ElKTeX),
            element: ev.Z,
            ariaLabel: r.hasFeature(ew.oNc.COMMUNITY) ? eF.intl.string(eF.t['/dp6yc']) : eF.intl.string(eF.t.ElKTeX),
            newIndicator: !r.hasFeature(ew.oNc.COMMUNITY) && null != z && z >= eG.U3 && U.Z.hasHotspot(eU.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
            notice: {
                stores: [eo.Z],
                element: ev.X
            },
            predicate: () => d
        },
        {
            section: ew.pNK.ONBOARDING,
            label: eF.intl.string(eF.t.LdxCKy),
            element: eE.Z,
            ariaLabel: eF.intl.string(eF.t.LdxCKy),
            newIndicatorDismissibleContentTypes: q ? null : [a.z.COMMUNITY_ONBOARDING_NEW_BADGE],
            notice: {
                stores: [eu.Z],
                element: eg.Z
            },
            predicate: () => (0, y.wC)(r.id),
            decoration: eW(r.id, Y)
        },
        {
            section: ew.pNK.ANALYTICS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
            label: eF.intl.string(eF.t['0wWfUF']),
            ariaLabel: eF.intl.string(eF.t['0wWfUF']),
            element: ef.Z,
            newIndicator: U.Z.hasHotspot(eU.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
            newIndicatorDismissibleContentTypes: W ? [a.z.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
            predicate: () => w && r.hasFeature(ew.oNc.COMMUNITY)
        },
        {
            section: ew.pNK.DISCOVERY,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
            label: eF.intl.string(eF.t.oGaVGx),
            element: eI.Z,
            notice: {
                stores: [eo.Z],
                element: eI.s
            },
            predicate: () => d && r.hasFeature(ew.oNc.COMMUNITY),
            ariaLabel: r.hasFeature(ew.oNc.DISCOVERABLE) ? eF.intl.string(eF.t.oGaVGx) : eF.intl.string(eF.t.XU0S6u)
        },
        {
            section: ew.pNK.DISCOVERY_LANDING_PAGE,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
            label: (0, i.jsxs)('div', {
                className: eH.landingPageTabLink,
                children: [eF.intl.string(eF.t.kGlQGB), ' ', (0, i.jsx)(j.Z, {})]
            }),
            ariaLabel: eF.intl.string(eF.t.kGlQGB),
            element: eN.Z,
            notice: {
                stores: [eo.Z],
                element: eN.J
            },
            type: u.bT.CUSTOM,
            predicate: () => d && (r.hasFeature(ew.oNc.DISCOVERABLE) || !!(null == Q ? void 0 : Q.isPublished))
        },
        {
            section: ew.pNK.COMMUNITY_WELCOME,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
            label: eF.intl.string(eF.t['2rkmDg']),
            ariaLabel: eF.intl.string(eF.t['2rkmDg']),
            element: e_.Z,
            notice: {
                stores: [V.Z],
                element: K.Z
            },
            predicate: () => d && r.hasFeature(ew.oNc.COMMUNITY) && !X && !r.hasFeature(ew.oNc.GUILD_SERVER_GUIDE)
        },
        {
            section: u.ID.DIVIDER,
            predicate: em
        },
        {
            section: u.ID.HEADER,
            label: eF.intl.string(eF.t.mbn3bW),
            predicate: em
        },
        {
            ...eY,
            section: ew.pNK.ROLE_SUBSCRIPTIONS,
            element: P.Z,
            type: u.bT.CUSTOM,
            predicate: em,
            newIndicatorDismissibleContentTypes: (0, k.sO)(r) ? [a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        },
        {
            section: ew.pNK.GUILD_PRODUCTS,
            label: eF.intl.string(eF.t.X6h2g4),
            ariaLabel: eF.intl.string(eF.t.X6h2g4),
            element: L.Z,
            predicate: () => em() && (0, A.p)(r.id, 'guild_product_settings_predicate') && (0, D.sy)(r)
        },
        {
            section: ew.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE,
            impressionName: l.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
            newIndicator: 2022 === new Date().getFullYear(),
            label: eF.intl.string(eF.t.ipTYsr),
            ariaLabel: eF.intl.string(eF.t.ipTYsr),
            element: M.Z,
            predicate: () => em() && (0, D.sy)(r)
        },
        { section: u.ID.DIVIDER },
        {
            section: ew.pNK.GUILD_PREMIUM,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
            label: eF.intl.string(eF.t['8+VX4+']),
            ariaLabel: eF.intl.string(eF.t['8+VX4+']),
            element: ey.Z,
            className: eH.serverBoostTabItem,
            icon: (0, i.jsx)(eA.Z, { className: eH.icon })
        },
        { section: u.ID.DIVIDER },
        {
            section: u.ID.HEADER,
            label: eF.intl.string(eF.t['+OecxM'])
        },
        {
            section: ew.pNK.MEMBERS,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_MEMBERS,
            label: (0, i.jsx)(eS.$, {}),
            ariaLabel: eF.intl.string(eF.t['9Oq93t']),
            element: eS.Z,
            type: u.bT.CUSTOM,
            predicate: () => Z
        },
        {
            section: ew.pNK.INSTANT_INVITES,
            impressionName: l.ImpressionNames.GUILD_SETTINGS_INVITES,
            label: eF.intl.string(eF.t['9F90iY']),
            element: eb.Z,
            type: u.bT.CUSTOM,
            predicate: () => d
        },
        {
            section: u.ID.DIVIDER,
            predicate: () => G
        },
        eq
    ];
}
function eY(e, t) {
    let n = Q.Z.getGuildPermissionProps(e),
        i = (0, H.p)(e.id).length > 0;
    return eV({
        channels: t,
        showDirtyGuildTemplateIndicator: !1,
        ...n,
        canUnlinkChannels: i,
        showAccessRate: !1,
        canAccessClanSettings: n.isGuildAdmin && e.hasFeature(ew.oNc.CLAN),
        welcomeScreenEmpty: Y.Z.isEmpty(e.id)
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
    h.ZP.trackWithMetadata(ew.rMx.SETTINGS_PANE_VIEWED, {
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
class eX extends r.PureComponent {
    componentDidMount() {
        eK(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        en.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: n, isGuildAdmin: i, canManageGuild: r, canManageRoles: l, canManageBans: s, canManageNicknames: a, canManageGuildExpressions: o, canViewAuditLog: d, canManageWebhooks: u, canAccessMembersPage: m, canViewGuildAnalytics: h } = this.props;
        n !== t && eK(n, t), ((!i && !r && !l && !s && !a && !o && !d && !m && !u) || (!d && n === ew.pNK.AUDIT_LOG) || (!l && n === ew.pNK.ROLES) || (!o && n === ew.pNK.EMOJI) || (!o && n === ew.pNK.STICKERS) || (!o && n === ew.pNK.SOUNDBOARD) || (!s && n === ew.pNK.BANS) || (!h && n === ew.pNK.ANALYTICS) || (!m && n === ew.pNK.MEMBERS)) && (0, c.xf)();
    }
    render() {
        var e, t;
        let { theme: n, sidebarTheme: r, section: l, guild: s, channels: a, isGuildAdmin: o, canManageGuild: u, canViewAuditLog: m, canManageRoles: h, canManageGuildExpressions: g, canManageWebhooks: x, canUnlinkChannels: p, canManageBans: f, canAccessMembersPage: C, canViewGuildAnalytics: v, isOwner: _, isOwnerWithRequiredMfaLevel: I, showDirtyGuildTemplateIndicator: N, memberCount: T, showAccessRate: j, onboardingStep: b, onboardingEnabled: S, welcomeScreenEmpty: E, guildMetadata: R, canAccessClanSettings: y } = this.props;
        if (null == s) return null;
        let Z = eV({
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
                canAccessClanSettings: y
            }),
            A = (null === (t = Z.find((e) => e.section === l)) || void 0 === t ? void 0 : null === (e = t.predicate) || void 0 === e ? void 0 : e.call(t)) !== !1;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(d.ZP, {
                    theme: n,
                    sidebarTheme: r,
                    section: A && null != l ? l : ew.pNK.OVERVIEW,
                    onSetSection: en.Z.setSection,
                    onClose: c.xf,
                    title: ez(s),
                    sections: Z
                }),
                (0, i.jsx)(G.d, { guildId: s.id })
            ]
        });
    }
}
function eQ() {
    var e;
    let { guild: t, section: n, analyticsLocation: l, guildMetadata: a, isGuildMetadataLoaded: o } = (0, s.cj)([eo.Z], () => eo.Z.getProps()),
        { analyticsLocations: c } = (0, g.ZP)(m.Z.GUILD_SETTINGS),
        d = (0, s.e7)([z.Z], () => z.Z.theme),
        u = (0, s.e7)([z.Z], () => (z.Z.darkSidebar ? ew.BRd.DARK : void 0)),
        h = (0, s.e7)([q.ZP], () => (null != t ? q.ZP.getChannels(t.id).SELECTABLE : null), [t]),
        x = (0, s.cj)([Q.Z], () => (null != t ? Q.Z.getGuildPermissionProps(t) : eq)),
        p = null == t ? void 0 : t.id,
        f = (0, s.e7)([Q.Z], () => null != t && Q.Z.canAccessGuildSettings(t)),
        C = null != t && (0, ee.Fv)(t.id),
        v = C || f,
        _ = C || x.canViewGuildAnalytics,
        { shouldFetchMemberInsights: I, hasAccessRate: T } = (0, s.cj)([er.Z], () => ({
            shouldFetchMemberInsights: null != t && er.Z.shouldFetchMemberInsights(t.id),
            hasAccessRate: null != t && er.Z.getMemberInsights(t.id).hasAccessRate
        }));
    r.useEffect(() => {
        !o && null != p && (0, N.aC)(p);
    }, [o, p]),
        r.useEffect(() => {
            v && _ && I && null != p && (0, ei.r2)(p);
        }, [v, _, I, p]);
    let j = null !== (e = null == t ? void 0 : t.hasFeature(ew.oNc.COMMUNITY)) && void 0 !== e && e;
    r.useEffect(() => {
        null != p && j && ((0, E.eM)(p), (0, W.RM)(p));
    }, [p, j]),
        r.useEffect(() => {
            null != p && (0, Z.cP)(p);
        }, [p]);
    let { showAccessRate: b } = (0, ee.eA)(null == t ? void 0 : t.id, !T || !_ || !v),
        S = x.isGuildAdmin && (null == t ? void 0 : t.hasFeature(ew.oNc.CLAN)),
        y = (0, s.e7)(
            [B.Z],
            () => {
                var e;
                return (null == t ? void 0 : t.id) != null && (null === (e = B.Z.getForGuild(t.id)) || void 0 === e ? void 0 : e.isDirty) === !0;
            },
            [t]
        ),
        A = (0, s.e7)([X.Z], () => X.Z.getMemberCount(null == t ? void 0 : t.id), [t]);
    r.useEffect(() => {
        null != p && x.canManageGuild && w.Z.loadTemplatesForGuild(p);
    }, [p, x.canManageGuild]),
        r.useEffect(() => {
            !v && en.Z.close();
        }, [v]);
    let L = (0, s.e7)([eu.Z], () => eu.Z.getCurrentPage()),
        D = (0, s.e7)([R.Z], () => null != p && R.Z.getEnabled(p)),
        O = (0, s.e7)([Y.Z], () => null != p && Y.Z.isEmpty(p)),
        k = (0, H.F)(p).length > 0;
    return (0, i.jsx)(g.Gt, {
        value: c,
        children: (0, i.jsx)(eX, {
            guild: t,
            section: n,
            theme: d,
            sidebarTheme: u,
            channels: h,
            showDirtyGuildTemplateIndicator: y,
            analyticsLocation: l,
            memberCount: A,
            ...x,
            canUnlinkChannels: k,
            canViewGuildAnalytics: _,
            showAccessRate: b,
            onboardingStep: L,
            onboardingEnabled: D,
            welcomeScreenEmpty: O,
            guildMetadata: a,
            canAccessClanSettings: S
        })
    });
}
