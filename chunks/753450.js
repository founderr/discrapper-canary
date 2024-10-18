t.r(n),
    t.d(n, {
        default: function () {
            return ex;
        }
    }),
    t(47120),
    t(315314),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(789020),
    t(653041);
var i = t(735250),
    a = t(470079),
    r = t(120356),
    o = t.n(r),
    s = t(525654),
    l = t.n(s),
    c = t(302454),
    d = t.n(c),
    u = t(873546),
    _ = t(149765),
    p = t(468194),
    m = t(442837),
    I = t(692547),
    f = t(477690),
    g = t(481060),
    h = t(995648),
    C = t(445986),
    b = t(9807),
    E = t(330726),
    v = t(782568),
    x = t(581364),
    P = t(970321),
    T = t(283836),
    S = t(220082),
    N = t(252618),
    A = t(299206),
    R = t(241209),
    L = t(341176),
    O = t(422559),
    j = t(703656),
    y = t(280885),
    D = t(706454),
    M = t(314897),
    Z = t(451478),
    B = t(626135),
    k = t(768581),
    F = t(572004),
    H = t(823379),
    w = t(900849),
    G = t(135431),
    U = t(674588),
    Y = t(264043),
    W = t(303383),
    V = t(887706),
    z = t(738130),
    K = t(4461),
    q = t(34674),
    X = t(576958),
    J = t(924489),
    Q = t(125909),
    $ = t(409425),
    ee = t(132871),
    en = t(147890),
    et = t(491576),
    ei = t(527564),
    ea = t(326135),
    er = t(940064),
    eo = t(626004),
    es = t(939893),
    el = t(430913),
    ec = t(606183),
    ed = t(272242),
    eu = t(981631),
    e_ = t(701865),
    ep = t(558921),
    em = t(689938),
    eI = t(613250),
    ef = t(902294);
let eg = d().parserFor(es.Z),
    eh = d().reactFor(d().ruleOutput(es.Z, 'react')),
    eC = (0, p.Mg)(f.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
    eb = 'redirect_to_support_server',
    eE = 'start_application_install',
    ev = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(e));
function ex(e) {
    var n, r, s, c;
    let d,
        {
            match: {
                params: { applicationId: p, section: I = ed.ApplicationDirectoryProfileSections.GENERAL }
            }
        } = e,
        f = (0, ee.useApplicationDirectoryHistory)((e) => e.guildId),
        S = (0, V.Z)(),
        es = (0, m.e7)(
            [W.Z],
            () =>
                W.Z.getFetchState({
                    applicationId: p,
                    guildId: f
                }) === W.M.FETCHING
        ),
        ex = a.useRef({
            applicationId: void 0,
            guildId: void 0
        }),
        { similarApplications: eT, similarLoadId: eN } = (0, m.cj)([W.Z], () => {
            let e = {
                    applicationId: p,
                    guildId: f
                },
                n = W.Z.getSimilarApplications(e);
            return (
                null == n ? (n = W.Z.getSimilarApplications(ex.current)) : (ex.current = e),
                {
                    similarApplications: null == n ? void 0 : n.applications,
                    similarLoadId: null == n ? void 0 : n.loadId
                }
            );
        }),
        eA = a.useMemo(() => (null == eT ? void 0 : eT.slice(0, 3)), [eT]),
        eR = (0, m.e7)([Y.Z], () => Y.Z.getApplicationFetchState(p)),
        [eL, eO] = a.useState(void 0),
        ej = a.useCallback(
            (e) => {
                if (null != p) {
                    if (e === ed.ApplicationDirectoryProfileSections.GENERAL) {
                        (0, en.replaceAppDirectoryURLWith)(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(p));
                        return;
                    }
                    (0, en.replaceAppDirectoryURLWith)(eu.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(p, e));
                }
            },
            [p]
        ),
        ey = (0, m.e7)([Z.Z], () => Z.Z.isFocused()),
        eD = (0, m.e7)([D.default], () => D.default.locale),
        eM = a.useRef(p),
        eZ = (0, m.e7)([Y.Z], () => {
            let e = Y.Z.getApplication(p);
            return null == e ? (e = Y.Z.getApplication(eM.current)) : (eM.current = p), e;
        }),
        eB = (0, et.Z)({ application: eZ }),
        ek = (0, m.e7)([M.default], () => M.default.getSessionId());
    (0, N.Tt)({ location: null == eZ ? void 0 : eZ.name });
    let eF = a.useCallback(async () => {
        try {
            var e;
            let n = null == eZ ? void 0 : null === (e = eZ.guild) || void 0 === e ? void 0 : e.id;
            if (null != n) {
                (null == eZ ? void 0 : eZ.id) != null &&
                    B.default.track(eu.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: eZ.id,
                        guild_id: n
                    });
                let e = { page: eu.ZY5.APPLICATION_DIRECTORY };
                await (0, w.Ub)(n, e, { setsHistorySnapshot: !1 });
            }
        } catch {}
    }, [eZ]);
    a.useEffect(() => {
        if (null == eZ) return;
        let e = new URL(location.href);
        if (S && null != ek && 'true' === e.searchParams.get(eb)) {
            e.searchParams.delete(eb);
            let n = e.pathname + e.search;
            (0, j.dL)(n), eF();
        }
    }, [S, eF, ek, eZ]);
    let eH = a.useCallback(() => {
            var e;
            null != (null == eZ ? void 0 : null === (e = eZ.guild) || void 0 === e ? void 0 : e.id) && (S ? eF() : (0, q.rf)({ [eb]: 'true' }));
        }, [eZ, S, eF]),
        ew = a.useCallback(() => {
            (0, en.replaceAppDirectoryURLWith)(''.concat(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(p)).concat(location.search));
        }, [p]);
    a.useEffect(() => {
        I === ed.ApplicationDirectoryProfileSections.GENERAL && ew();
    }, [ew, I]),
        a.useEffect(() => {
            if (null != p) {
                let e = 'true' === new URLSearchParams(location.search).get('preview') || void 0;
                U.i6(p, { noCache: e });
            }
        }, [p]),
        a.useEffect(() => {
            if ((null == eZ ? void 0 : eZ.directory_entry) != null) {
                let e = eZ.directory_entry,
                    n = null == e ? void 0 : e.popular_application_commands;
                null != n
                    ? eO(
                          n.map((e) =>
                              (0, x.Z8)({
                                  rootCommand: e,
                                  command: e,
                                  applicationId: e.application_id
                              })
                          )
                      )
                    : eO(void 0);
            }
        }, [eZ]);
    let eG = k.ZP.getApplicationIconURL({
            id: null !== (s = null == eZ ? void 0 : eZ.id) && void 0 !== s ? s : '-1',
            icon: null == eZ ? void 0 : eZ.icon,
            size: eC
        }),
        eU = (0, A.Z)({
            id: null !== (c = null == eZ ? void 0 : eZ.id) && void 0 !== c ? c : '',
            label: em.Z.Messages.COPY_ID_APPLICATION
        }),
        { canInstall: eY, install: eW } = (0, K.P)(eZ, f),
        eV = null === (n = (0, ee.getPreviousView)()) || void 0 === n ? void 0 : n.type;
    a.useEffect(() => {
        (null == eZ ? void 0 : eZ.id) != null &&
            B.default.track(eu.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: 'product',
                previous_page: eV,
                application_id: eZ.id,
                guild_id: f,
                shown_mutual_guilds_count: eB.length,
                profile_section: I,
                referrer: document.referrer
            });
    }, [null == eZ ? void 0 : eZ.id, f, eB]);
    let ez = a.useMemo(() => {
            var e;
            let n = null == eZ ? void 0 : null === (e = eZ.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != n) return O.VY.filter((e) => _.e$(_.vB(n), e));
        }, [null == eZ ? void 0 : null === (r = eZ.install_params) || void 0 === r ? void 0 : r.permissions]),
        eK = a.useCallback(
            (e) => {
                ej(e),
                    (null == eZ ? void 0 : eZ.id) != null &&
                        B.default.track(eu.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: eZ.id,
                            guild_id: f,
                            tab_name: e
                        });
            },
            [null == eZ ? void 0 : eZ.id, f, ej]
        ),
        eq = a.useMemo(() => {
            var e, n, t;
            return null !== (t = (null !== (n = null == eZ ? void 0 : null === (e = eZ.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== n ? n : []).map(q.RF).filter(H.lm)) && void 0 !== t ? t : [];
        }, [eZ]),
        eX = a.useCallback(
            (e, n) => {
                if (e.type === eu.s9s.IMG) {
                    let n = eq.filter((e) => e.type === eu.s9s.IMG),
                        a = n.findIndex((n) => n === e);
                    if (a < 0) return;
                    let r = n.map((e) => ({
                        url: (0, C.Q)(e.src),
                        original: e.src,
                        width: e.width,
                        height: e.height,
                        type: 'IMAGE'
                    }));
                    (0, g.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.resolve().then(t.bind(t, 950120));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    items: r,
                                    startingIndex: a,
                                    fit: L.D.CONTAIN,
                                    shouldHideMediaOptions: !0,
                                    shouldAnimateCarousel: !0
                                });
                        },
                        { modalKey: e_.U }
                    );
                }
            },
            [eq]
        ),
        eJ = a.useCallback(
            (e) => {
                (null == eZ ? void 0 : eZ.id) != null &&
                    B.default.track(eu.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        current_page: 'product',
                        category: e.name,
                        category_id: e.id,
                        application_id: eZ.id,
                        guild_id: f
                    }),
                    (0, en.goToCategory)({ categoryId: e.id });
            },
            [eZ, f]
        );
    a.useEffect(() => {
        if (null != p)
            U.T4({
                applicationId: p,
                guildId: f
            });
    }, [p, f]);
    let eQ = a.useCallback(
            (e) => {
                let { application: n, mutualGuilds: t } = e;
                (null == eZ ? void 0 : eZ.id) != null &&
                    B.default.track(eu.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                        current_page: 'product',
                        application_id: eZ.id,
                        suggested_application_id: n.id,
                        load_id: eN,
                        guild_id: f,
                        shown_mutual_guilds_count: t.length
                    }),
                    (0, en.goToApplication)({ applicationId: n.id });
            },
            [null == eZ ? void 0 : eZ.id, eN, f]
        ),
        e$ = a.useCallback(() => {
            null != eZ &&
                (0, v.Z)(
                    (0, ea.G)({
                        id: eZ.id,
                        name: eZ.name,
                        locale: eD
                    })
                );
        }, [eD, eZ]),
        e0 = a.useCallback(
            (e) =>
                (0, i.jsxs)(g.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': em.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
                    onClose: e,
                    onSelect: void 0,
                    children: [
                        (0, i.jsx)(g.MenuGroup, {
                            children: (0, i.jsx)(g.MenuItem, {
                                id: 'report',
                                label: em.Z.Messages.REPORT_APP,
                                color: 'danger',
                                action: e$
                            })
                        }),
                        null != eU ? (0, i.jsx)(g.MenuGroup, { children: eU }) : null
                    ]
                }),
            [eU, e$]
        ),
        [e6, e1] = (0, E.Z)(!1, 1000),
        e5 = a.useCallback(() => {
            if (null != eZ)
                B.default.track(eu.rMx.APP_SHARE_BUTTON_CLICKED, {
                    source: 'product_page',
                    application_id: eZ.id,
                    guild_id: f
                }),
                    (0, F.JG)(ev(eZ.id)),
                    e1(!0);
        }, [eZ, e1, f]);
    a.useEffect(() => {
        let e = new URL(location.href);
        if (S && 'true' === e.searchParams.get(eE)) {
            e.searchParams.delete(eE);
            let n = e.pathname + e.search;
            (0, j.dL)(n), eW('product_page');
        }
    }, [S, eW]);
    let e3 = a.useCallback(() => {
            if (null != eZ) {
                if ((u.tq || u.Em) && null == eZ.custom_install_url) {
                    let e = (0, G.Er)({
                        applicationId: eZ.id,
                        customInstallUrl: eZ.custom_install_url,
                        installParams: eZ.install_params,
                        integrationTypesConfig: eZ.integration_types_config
                    });
                    if (null != e) {
                        window.open(e, '_blank');
                        return;
                    }
                }
                S
                    ? eW('product_page')
                    : (B.default.track(eu.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                          application_id: p,
                          guild_id: f,
                          auth_type: null != eZ.custom_install_url ? 'custom_url' : 'in_app',
                          source: 'product_page',
                          device_platform: u.tq ? 'mobile_web' : 'desktop_web'
                      }),
                      (0, q.rf)({ [eE]: 'true' }));
            }
        }, [eZ, S, eW, p, f]),
        e8 = (null == eZ ? void 0 : eZ.id) === ep.g,
        [e9, e2] = a.useState(!1),
        [e4, e7] = a.useState(!1),
        [ne, nn] = a.useState(!0),
        nt = (e) => {
            null != e && e2(e.scrollHeight > e.clientHeight);
        },
        ni = null != ez && ez.length > 0,
        na = (null == eZ ? void 0 : eZ.flags) != null,
        nr = (0, P.R)(null != p ? p : '');
    a.useEffect(() => {
        nr && null != p && (0, T.Z)(p);
    }, [nr, p]);
    let no = a.useMemo(() => {
            let e = [],
                n = !0;
            switch (I) {
                case ed.ApplicationDirectoryProfileSections.GENERAL: {
                    var t, a;
                    let r = null == eZ ? void 0 : null === (t = eZ.directory_entry) || void 0 === t ? void 0 : t.detailed_description;
                    null != r && r.length > 0
                        ? (e.push(
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(g.Heading, {
                                          className: eI.sectionHeader,
                                          variant: 'heading-md/semibold',
                                          children: em.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                      }),
                                      (0, i.jsx)('div', {
                                          ref: nt,
                                          className: o()({
                                              [eI.descriptionClamp]: !e4,
                                              [eI.descriptionClampSafari]: !e4 && 'Safari' === l().name
                                          }),
                                          children: (0, i.jsx)(R.Z, {
                                              className: eI.detailedDescription,
                                              parser: eg,
                                              output: eh,
                                              state: { allowLinks: !0 },
                                              children: r
                                          })
                                      }),
                                      (e9 || e4) &&
                                          (0, i.jsx)(eP, {
                                              isViewAll: e4,
                                              onToggle: () => {
                                                  e7((e) => !e);
                                              }
                                          })
                                  ]
                              })
                          ),
                          (n = !1))
                        : (null == eZ ? void 0 : null === (a = eZ.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0
                          ? e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: eI.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: em.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                        }),
                                        (0, i.jsx)('span', { children: eZ.directory_entry.short_description })
                                    ]
                                })
                            )
                          : (null == eZ ? void 0 : eZ.description) != null &&
                            e.push(
                                (0, i.jsx)(y.Z, {
                                    className: eI.description,
                                    userBio: eZ.description
                                })
                            ),
                        null != eL &&
                            eL.length > 0 &&
                            (e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: eI.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: em.Z.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
                                        }),
                                        (0, i.jsx)(er.Z, {
                                            className: eI.commandList,
                                            commands: eL
                                        })
                                    ]
                                })
                            ),
                            (n = !0));
                    break;
                }
                case ed.ApplicationDirectoryProfileSections.IMAGES: {
                    if (0 === eq.length) break;
                    let n = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                className: eI.errorImage,
                                src: ef,
                                'aria-hidden': !0,
                                alt: ''
                            }),
                            (0, i.jsx)(g.Heading, {
                                variant: 'heading-xl/semibold',
                                children: em.Z.Messages.ERRORS_IMAGE_NOT_FOUND
                            })
                        ]
                    });
                    eq.forEach((e, n) => {
                        null != eZ
                            ? (e.alt = em.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
                                  index: n + 1,
                                  totalImages: eq.length,
                                  name: eZ.name
                              }))
                            : (e.alt = em.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
                    }),
                        e.push(
                            (0, i.jsx)(b.Z, {
                                className: eI.carousel,
                                themedPagination: !0,
                                items: eq,
                                autoplayInterval: 8000,
                                paused: !ey,
                                videoAutoPlay: !0,
                                onCurrentItemClick: eX,
                                errorComponent: n,
                                onImageLoad: (e) => {
                                    let { src: n, loadTimeMs: t } = e;
                                    null != t &&
                                        null != eZ &&
                                        B.default.track(eu.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                                            application_id: eZ.id,
                                            load_time_ms: t,
                                            src: n
                                        });
                                }
                            })
                        );
                    break;
                }
                case ed.ApplicationDirectoryProfileSections.STORE:
                    nr && null != p && e.push((0, i.jsx)(ei.M, { appId: p }));
                    break;
                case ed.ApplicationDirectoryProfileSections.PRIVACY:
                    ni &&
                        e.push(
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(g.Heading, {
                                        className: eI.sectionHeader,
                                        variant: 'heading-md/semibold',
                                        children: em.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
                                    }),
                                    (0, i.jsx)(h.Z, {
                                        className: eI.commandList,
                                        grantedPermissions: ez,
                                        grantedPermissionsHeader: em.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
                                    })
                                ]
                            })
                        ),
                        na &&
                            e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: eI.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: em.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
                                        }),
                                        (0, i.jsx)(eo.Z, { application: eZ })
                                    ]
                                })
                            );
            }
            return (
                nn(n),
                0 === e.length && I !== ed.ApplicationDirectoryProfileSections.GENERAL && null != eZ && ew(),
                e.map((e, n) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: eI.section,
                            children: e
                        },
                        n
                    )
                )
            );
        }, [I, ew, eZ, eL, e4, e9, eq, ey, eX, nr, p, ni, na, ez]),
        ns = a.useMemo(() => {
            let e = [
                {
                    name: ed.ApplicationDirectoryProfileSections.GENERAL,
                    text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
                    Icon: g.AppsIcon
                }
            ];
            return (
                eq.length > 0 &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.IMAGES,
                        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
                        Icon: g.ImagesIcon
                    }),
                nr &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.STORE,
                        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
                        Icon: g.ShopSparkleIcon
                    }),
                (ni || na) &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.PRIVACY,
                        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
                        Icon: g.PrivacyAndSafetyIcon
                    }),
                e
            );
        }, [eq.length, ni, na, nr]);
    return (
        (d =
            null == eZ
                ? null == eR || eR === Y.M.FETCHING
                    ? (0, i.jsx)(Q.Z, { loading: eR === Y.M.FETCHING })
                    : (0, i.jsx)('div', {
                          className: eI.__invalid_page,
                          children: (0, i.jsxs)('div', {
                              className: eI.emptyContainer,
                              children: [
                                  (0, i.jsx)('img', {
                                      className: eI.emptyImage,
                                      src: ef,
                                      alt: ''
                                  }),
                                  (0, i.jsx)(g.Heading, {
                                      variant: 'heading-xl/semibold',
                                      children: em.Z.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
                                  })
                              ]
                          })
                      })
                : (0, i.jsxs)(Q.Z, {
                      loading: eR === Y.M.FETCHING,
                      children: [
                          (0, i.jsx)(eS, {
                              app: eZ,
                              iconSrc: eG
                          }),
                          (0, i.jsxs)('div', {
                              className: eI.__invalid_page,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: eI.header,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: eI.headerSidebar,
                                              children: [
                                                  (0, i.jsx)('img', {
                                                      className: eI.headerIcon,
                                                      alt: '',
                                                      'aria-hidden': !0,
                                                      src: eG,
                                                      width: eC,
                                                      height: eC
                                                  }),
                                                  (0, i.jsx)(J.Z, {
                                                      application: eZ,
                                                      mutualGuilds: eB,
                                                      mutualGuildShownMax: 3,
                                                      compact: !0
                                                  })
                                              ]
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: eI.headerContent,
                                              children: [
                                                  (0, i.jsxs)('div', {
                                                      className: eI.headerNameAndButtons,
                                                      children: [
                                                          (0, i.jsxs)('div', {
                                                              className: eI.headerNameAndIcon,
                                                              children: [
                                                                  (0, i.jsx)(g.Heading, {
                                                                      className: eI.name,
                                                                      variant: 'heading-xxl/semibold',
                                                                      children: eZ.name
                                                                  }),
                                                                  nr &&
                                                                      (0, i.jsx)(g.Tooltip, {
                                                                          tooltipClassName: eI.premiumIconTooltip,
                                                                          text: em.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                          children: (e) =>
                                                                              (0, i.jsx)('img', {
                                                                                  ...e,
                                                                                  alt: em.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                                  className: eI.premiumIcon,
                                                                                  src: t(744050)
                                                                              })
                                                                      }),
                                                                  e8 && (0, i.jsx)($.Z, { className: eI.partnerBadge })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: eI.buttons,
                                                              children: [
                                                                  (0, i.jsx)(g.Button, {
                                                                      onClick: e5,
                                                                      color: g.Button.Colors.PRIMARY,
                                                                      children: e6 ? em.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : em.Z.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(g.Button, {
                                                                      color: g.Button.Colors.BRAND,
                                                                      onClick: e3,
                                                                      disabled: !eY,
                                                                      children: em.Z.Messages.APPLICATION_ADD_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(g.Popout, {
                                                                      renderPopout: (e) => {
                                                                          let { closePopout: n } = e;
                                                                          return e0(n);
                                                                      },
                                                                      position: 'left',
                                                                      align: 'top',
                                                                      animation: g.Popout.Animation.NONE,
                                                                      children: (e) =>
                                                                          (0, i.jsx)(g.Clickable, {
                                                                              className: eI.overflow,
                                                                              ...e,
                                                                              children: (0, i.jsx)(g.MoreHorizontalIcon, {
                                                                                  size: 'custom',
                                                                                  color: 'currentColor',
                                                                                  width: 20,
                                                                                  height: 20,
                                                                                  className: eI.iconInteractive
                                                                              })
                                                                          })
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  }),
                                                  (0, i.jsx)(ec.Z, {
                                                      activeSection: I,
                                                      setSection: eK,
                                                      sections: ns
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: eI.contentContainer,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: eI.content,
                                              children: [
                                                  no,
                                                  null != eA && eA.length > 0
                                                      ? (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                ne && (0, i.jsx)('div', { className: eI.separator }),
                                                                (0, i.jsxs)('div', {
                                                                    className: eI.section,
                                                                    children: [
                                                                        (0, i.jsx)(g.Heading, {
                                                                            className: eI.relatedHeader,
                                                                            variant: 'eyebrow',
                                                                            children: em.Z.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
                                                                        }),
                                                                        (0, i.jsx)(Q.Z, {
                                                                            loading: es,
                                                                            children: (0, i.jsx)(X.Z, {
                                                                                applications: eA,
                                                                                onViewOne: eQ
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                      : null
                                              ]
                                          }),
                                          (0, i.jsx)(el.Z, {
                                              className: eI.sidebar,
                                              application: eZ,
                                              guildId: f,
                                              onViewCategory: eJ,
                                              onClickGuildWidget: eH
                                          })
                                      ]
                                  })
                              ]
                          })
                      ]
                  })),
        (0, i.jsx)(z.Z, { children: d })
    );
}
let eP = (e) => {
        let n,
            { onToggle: t, isViewAll: a } = e;
        return (
            (n = a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.Text, {
                              className: eI.showMoreButtonText,
                              variant: 'eyebrow',
                              children: em.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
                          }),
                          (0, i.jsx)(g.ChevronSmallUpIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: eI.showMoreButtonIcon
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.Text, {
                              className: eI.showMoreButtonText,
                              variant: 'eyebrow',
                              children: em.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
                          }),
                          (0, i.jsx)(g.ChevronSmallDownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: eI.showMoreButtonIcon
                          })
                      ]
                  })),
            (0, i.jsx)(eT, {
                children: (0, i.jsx)(g.Button, {
                    look: g.Button.Looks.BLANK,
                    color: g.Button.Colors.TRANSPARENT,
                    size: g.Button.Sizes.NONE,
                    className: eI.showMoreButton,
                    innerClassName: eI.showMoreButtonInner,
                    onClick: t,
                    children: n
                })
            })
        );
    },
    eT = (e) => {
        let { className: n, contentClassName: t, children: a } = e;
        return (0, i.jsxs)('div', {
            className: o()([eI.dividerContainer, n]),
            children: [
                (0, i.jsx)('div', { className: eI.divider }),
                null != a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: o()(eI.contentDivider, t),
                                  children: a
                              }),
                              (0, i.jsx)('div', { className: eI.divider })
                          ]
                      })
                    : null
            ]
        });
    };
function eS(e) {
    let { app: n, iconSrc: t } = e,
        r = (0, S.ZP)(t, I.Z.unsafe_rawColors.PRIMARY_800.css),
        { bot: o } = n,
        s = a.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != o) {
                let n = (0, k.aN)({
                    id: o.id,
                    banner: o.banner,
                    size: 1024,
                    canAnimate: !1
                });
                null != n && ((e['--custom-background-static'] = 'url('.concat(n)), (e.height = 'auto'));
                let t = (0, k.xR)(o.banner)
                    ? (0, k.aN)({
                          id: o.id,
                          banner: o.banner,
                          size: 1024,
                          canAnimate: !0
                      })
                    : null;
                null != t && (e['--custom-background-animated'] = 'url('.concat(t));
            }
            return e;
        }, [r, o]);
    return (0, i.jsx)('div', {
        style: s,
        className: eI.headerBanner,
        'data-has-animated': '--custom-background-animated' in s
    });
}
