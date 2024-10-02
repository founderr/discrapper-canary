n.r(a),
    n.d(a, {
        default: function () {
            return eP;
        }
    }),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(789020),
    n(653041);
var i = n(735250),
    t = n(470079),
    r = n(120356),
    l = n.n(r),
    s = n(525654),
    o = n.n(s),
    c = n(302454),
    d = n.n(c),
    u = n(873546),
    _ = n(149765),
    p = n(468194),
    m = n(442837),
    g = n(692547),
    I = n(477690),
    h = n(481060),
    f = n(995648),
    x = n(445986),
    C = n(9807),
    v = n(911969),
    E = n(330726),
    P = n(782568),
    b = n(581364),
    A = n(970321),
    R = n(283836),
    N = n(220082),
    T = n(252618),
    j = n(299206),
    S = n(241209),
    O = n(422559),
    L = n(703656),
    y = n(280885),
    D = n(706454),
    M = n(314897),
    Z = n(451478),
    k = n(626135),
    w = n(768581),
    B = n(572004),
    G = n(823379),
    H = n(900849),
    Y = n(135431),
    F = n(674588),
    U = n(264043),
    W = n(303383),
    V = n(887706),
    z = n(738130),
    K = n(4461),
    q = n(34674),
    X = n(576958),
    J = n(924489),
    Q = n(125909),
    $ = n(409425),
    ee = n(132871),
    ea = n(147890),
    en = n(491576),
    ei = n(527564),
    et = n(326135),
    er = n(940064),
    el = n(626004),
    es = n(939893),
    eo = n(430913),
    ec = n(606183),
    ed = n(272242),
    eu = n(981631),
    e_ = n(558921),
    ep = n(689938),
    em = n(613250),
    eg = n(902294);
let eI = d().parserFor(es.Z),
    eh = d().reactFor(d().ruleOutput(es.Z, 'react')),
    ef = (0, p.Mg)(I.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
    ex = 'redirect_to_support_server',
    eC = 'start_application_install',
    ev = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
    eE = (e) => {
        if (null == e) return null;
        let a = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
        return null != a ? a[1] : null;
    };
function eP(e) {
    var a, r, s, c;
    let d,
        {
            match: {
                params: { applicationId: p, section: g = ed.ApplicationDirectoryProfileSections.GENERAL }
            }
        } = e,
        I = (0, ee.useApplicationDirectoryHistory)((e) => e.guildId),
        v = (0, V.Z)(),
        N = (0, m.e7)(
            [W.Z],
            () =>
                W.Z.getFetchState({
                    applicationId: p,
                    guildId: I
                }) === W.M.FETCHING
        ),
        es = t.useRef({
            applicationId: void 0,
            guildId: void 0
        }),
        { similarApplications: eE, similarLoadId: eP } = (0, m.cj)([W.Z], () => {
            let e = {
                    applicationId: p,
                    guildId: I
                },
                a = W.Z.getSimilarApplications(e);
            return (
                null == a ? (a = W.Z.getSimilarApplications(es.current)) : (es.current = e),
                {
                    similarApplications: null == a ? void 0 : a.applications,
                    similarLoadId: null == a ? void 0 : a.loadId
                }
            );
        }),
        eR = t.useMemo(() => (null == eE ? void 0 : eE.slice(0, 3)), [eE]),
        eT = (0, m.e7)([U.Z], () => U.Z.getApplicationFetchState(p)),
        [ej, eS] = t.useState(void 0),
        eO = t.useCallback(
            (e) => {
                if (null != p) {
                    if (e === ed.ApplicationDirectoryProfileSections.GENERAL) {
                        (0, ea.replaceAppDirectoryURLWith)(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(p));
                        return;
                    }
                    (0, ea.replaceAppDirectoryURLWith)(eu.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(p, e));
                }
            },
            [p]
        ),
        eL = (0, m.e7)([Z.Z], () => Z.Z.isFocused()),
        ey = (0, m.e7)([D.default], () => D.default.locale),
        eD = t.useRef(p),
        eM = (0, m.e7)([U.Z], () => {
            let e = U.Z.getApplication(p);
            return null == e ? (e = U.Z.getApplication(eD.current)) : (eD.current = p), e;
        }),
        eZ = (0, en.Z)({ application: eM }),
        ek = (0, m.e7)([M.default], () => M.default.getSessionId());
    (0, T.Tt)({ location: null == eM ? void 0 : eM.name });
    let ew = t.useCallback(async () => {
        try {
            var e;
            let a = null == eM ? void 0 : null === (e = eM.guild) || void 0 === e ? void 0 : e.id;
            if (null != a) {
                (null == eM ? void 0 : eM.id) != null &&
                    k.default.track(eu.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: eM.id,
                        guild_id: a
                    });
                let e = { page: eu.ZY5.APPLICATION_DIRECTORY };
                await (0, H.Ub)(a, e, { setsHistorySnapshot: !1 });
            }
        } catch {}
    }, [eM]);
    t.useEffect(() => {
        if (null == eM) return;
        let e = new URL(location.href);
        if (v && null != ek && 'true' === e.searchParams.get(ex)) {
            e.searchParams.delete(ex);
            let a = e.pathname + e.search;
            (0, L.dL)(a), ew();
        }
    }, [v, ew, ek, eM]);
    let eB = t.useCallback(() => {
            var e;
            null != (null == eM ? void 0 : null === (e = eM.guild) || void 0 === e ? void 0 : e.id) && (v ? ew() : (0, q.rf)({ [ex]: 'true' }));
        }, [eM, v, ew]),
        eG = t.useCallback(() => {
            (0, ea.replaceAppDirectoryURLWith)(''.concat(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(p)).concat(location.search));
        }, [p]);
    t.useEffect(() => {
        g === ed.ApplicationDirectoryProfileSections.GENERAL && eG();
    }, [eG, g]),
        t.useEffect(() => {
            null != p && F.i6(p);
        }, [p]),
        t.useEffect(() => {
            if ((null == eM ? void 0 : eM.directory_entry) != null) {
                let e = eM.directory_entry,
                    a = null == e ? void 0 : e.popular_application_commands;
                null != a
                    ? eS(
                          a.map((e) =>
                              (0, b.Z8)({
                                  rootCommand: e,
                                  command: e,
                                  applicationId: e.application_id
                              })
                          )
                      )
                    : eS(void 0);
            }
        }, [eM]);
    let eH = w.ZP.getApplicationIconURL({
            id: null !== (s = null == eM ? void 0 : eM.id) && void 0 !== s ? s : '-1',
            icon: null == eM ? void 0 : eM.icon,
            size: ef
        }),
        eY = (0, j.Z)({
            id: null !== (c = null == eM ? void 0 : eM.id) && void 0 !== c ? c : '',
            label: ep.Z.Messages.COPY_ID_APPLICATION
        }),
        { canInstall: eF, install: eU } = (0, K.P)(eM, I),
        eW = null === (a = (0, ee.getPreviousView)()) || void 0 === a ? void 0 : a.type;
    t.useEffect(() => {
        (null == eM ? void 0 : eM.id) != null &&
            k.default.track(eu.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: 'product',
                previous_page: eW,
                application_id: eM.id,
                guild_id: I,
                shown_mutual_guilds_count: eZ.length,
                profile_section: g,
                referrer: document.referrer
            });
    }, [null == eM ? void 0 : eM.id, I, eZ]);
    let eV = t.useMemo(() => {
            var e;
            let a = null == eM ? void 0 : null === (e = eM.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != a) return O.VY.filter((e) => _.e$(_.vB(a), e));
        }, [null == eM ? void 0 : null === (r = eM.install_params) || void 0 === r ? void 0 : r.permissions]),
        ez = t.useCallback(
            (e) => {
                eO(e),
                    (null == eM ? void 0 : eM.id) != null &&
                        k.default.track(eu.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: eM.id,
                            guild_id: I,
                            tab_name: e
                        });
            },
            [null == eM ? void 0 : eM.id, I, eO]
        ),
        eK = t.useMemo(() => {
            var e, a, n;
            return null !== (n = (null !== (a = null == eM ? void 0 : null === (e = eM.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== a ? a : []).map(eb).filter(G.lm)) && void 0 !== n ? n : [];
        }, [eM]),
        eq = t.useCallback(
            (e, a) => {
                if (e.type === eu.s9s.IMG) {
                    let a = eK.filter((e) => e.type === eu.s9s.IMG),
                        t = a.findIndex((a) => a === e);
                    if (t < 0) return;
                    let r = a.map((e) => ({
                        src: (0, x.Q)(e.src),
                        width: e.width,
                        height: e.height
                    }));
                    (0, h.openModalLazy)(async () => {
                        let { default: e } = await n.e('41814').then(n.bind(n, 895023));
                        return (a) => {
                            let { ...n } = a;
                            return (0, i.jsx)(e, {
                                ...n,
                                items: r,
                                startingIndex: t,
                                modalCarouselItemClassName: em.appSlide
                            });
                        };
                    });
                }
            },
            [eK]
        ),
        eX = t.useCallback(
            (e) => {
                (null == eM ? void 0 : eM.id) != null &&
                    k.default.track(eu.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        current_page: 'product',
                        category: e.name,
                        category_id: e.id,
                        application_id: eM.id,
                        guild_id: I
                    }),
                    (0, ea.goToCategory)({ categoryId: e.id });
            },
            [eM, I]
        );
    t.useEffect(() => {
        if (null != p)
            F.T4({
                applicationId: p,
                guildId: I
            });
    }, [p, I]);
    let eJ = t.useCallback(
            (e) => {
                let { application: a, mutualGuilds: n } = e;
                (null == eM ? void 0 : eM.id) != null &&
                    k.default.track(eu.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                        current_page: 'product',
                        application_id: eM.id,
                        suggested_application_id: a.id,
                        load_id: eP,
                        guild_id: I,
                        shown_mutual_guilds_count: n.length
                    }),
                    (0, ea.goToApplication)({ applicationId: a.id });
            },
            [null == eM ? void 0 : eM.id, eP, I]
        ),
        eQ = t.useCallback(() => {
            null != eM &&
                (0, P.Z)(
                    (0, et.G)({
                        id: eM.id,
                        name: eM.name,
                        locale: ey
                    })
                );
        }, [ey, eM]),
        e$ = t.useCallback(
            (e) =>
                (0, i.jsxs)(h.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': ep.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
                    onClose: e,
                    onSelect: void 0,
                    children: [
                        (0, i.jsx)(h.MenuGroup, {
                            children: (0, i.jsx)(h.MenuItem, {
                                id: 'report',
                                label: ep.Z.Messages.REPORT_APP,
                                color: 'danger',
                                action: eQ
                            })
                        }),
                        null != eY ? (0, i.jsx)(h.MenuGroup, { children: eY }) : null
                    ]
                }),
            [eY, eQ]
        ),
        [e0, e6] = (0, E.Z)(!1, 1000),
        e1 = t.useCallback(() => {
            if (null != eM)
                k.default.track(eu.rMx.APP_SHARE_BUTTON_CLICKED, {
                    source: 'product_page',
                    application_id: eM.id,
                    guild_id: I
                }),
                    (0, B.JG)(ev(eM.id)),
                    e6(!0);
        }, [eM, e6, I]);
    t.useEffect(() => {
        let e = new URL(location.href);
        if (v && 'true' === e.searchParams.get(eC)) {
            e.searchParams.delete(eC);
            let a = e.pathname + e.search;
            (0, L.dL)(a), eU('product_page');
        }
    }, [v, eU]);
    let e8 = t.useCallback(() => {
            if (null != eM) {
                if ((u.tq || u.Em) && null == eM.custom_install_url) {
                    let e = (0, Y.Er)({
                        applicationId: eM.id,
                        customInstallUrl: eM.custom_install_url,
                        installParams: eM.install_params,
                        integrationTypesConfig: eM.integration_types_config
                    });
                    if (null != e) {
                        window.open(e, '_blank');
                        return;
                    }
                }
                v
                    ? eU('product_page')
                    : (k.default.track(eu.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                          application_id: p,
                          guild_id: I,
                          auth_type: null != eM.custom_install_url ? 'custom_url' : 'in_app',
                          source: 'product_page',
                          device_platform: u.tq ? 'mobile_web' : 'desktop_web'
                      }),
                      (0, q.rf)({ [eC]: 'true' }));
            }
        }, [eM, v, eU, p, I]),
        e5 = (null == eM ? void 0 : eM.id) === e_.g,
        [e2, e3] = t.useState(!1),
        [e4, e9] = t.useState(!1),
        [e7, ae] = t.useState(!0),
        aa = (e) => {
            null != e && e3(e.scrollHeight > e.clientHeight);
        },
        an = null != eV && eV.length > 0,
        ai = (null == eM ? void 0 : eM.flags) != null,
        at = (0, A.R)(null != p ? p : '');
    t.useEffect(() => {
        at && null != p && (0, R.Z)(p);
    }, [at, p]);
    let ar = t.useMemo(() => {
            let e = [],
                a = !0;
            switch (g) {
                case ed.ApplicationDirectoryProfileSections.GENERAL: {
                    var n, t;
                    let r = null == eM ? void 0 : null === (n = eM.directory_entry) || void 0 === n ? void 0 : n.detailed_description;
                    null != r && r.length > 0
                        ? (e.push(
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(h.Heading, {
                                          className: em.sectionHeader,
                                          variant: 'heading-md/semibold',
                                          children: ep.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                      }),
                                      (0, i.jsx)('div', {
                                          ref: aa,
                                          className: l()({
                                              [em.descriptionClamp]: !e4,
                                              [em.descriptionClampSafari]: !e4 && 'Safari' === o().name
                                          }),
                                          children: (0, i.jsx)(S.Z, {
                                              className: em.detailedDescription,
                                              parser: eI,
                                              output: eh,
                                              state: { allowLinks: !0 },
                                              children: r
                                          })
                                      }),
                                      (e2 || e4) &&
                                          (0, i.jsx)(eA, {
                                              isViewAll: e4,
                                              onToggle: () => {
                                                  e9((e) => !e);
                                              }
                                          })
                                  ]
                              })
                          ),
                          (a = !1))
                        : (null == eM ? void 0 : null === (t = eM.directory_entry) || void 0 === t ? void 0 : t.short_description) !== void 0
                          ? e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: em.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: ep.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                        }),
                                        (0, i.jsx)('span', { children: eM.directory_entry.short_description })
                                    ]
                                })
                            )
                          : (null == eM ? void 0 : eM.description) != null &&
                            e.push(
                                (0, i.jsx)(y.Z, {
                                    className: em.description,
                                    userBio: eM.description
                                })
                            ),
                        null != ej &&
                            ej.length > 0 &&
                            (e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: em.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: ep.Z.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
                                        }),
                                        (0, i.jsx)(er.Z, {
                                            className: em.commandList,
                                            commands: ej
                                        })
                                    ]
                                })
                            ),
                            (a = !0));
                    break;
                }
                case ed.ApplicationDirectoryProfileSections.IMAGES: {
                    if (0 === eK.length) break;
                    let a = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                className: em.errorImage,
                                src: eg,
                                'aria-hidden': !0,
                                alt: ''
                            }),
                            (0, i.jsx)(h.Heading, {
                                variant: 'heading-xl/semibold',
                                children: ep.Z.Messages.ERRORS_IMAGE_NOT_FOUND
                            })
                        ]
                    });
                    eK.forEach((e, a) => {
                        null != eM
                            ? (e.alt = ep.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
                                  index: a + 1,
                                  totalImages: eK.length,
                                  name: eM.name
                              }))
                            : (e.alt = ep.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
                    }),
                        e.push(
                            (0, i.jsx)(C.Z, {
                                className: em.carousel,
                                themedPagination: !0,
                                items: eK,
                                autoplayInterval: 8000,
                                paused: !eL,
                                videoAutoPlay: !0,
                                onCurrentItemClick: eq,
                                errorComponent: a,
                                onImageLoad: (e) => {
                                    let { src: a, loadTimeMs: n } = e;
                                    null != n &&
                                        null != eM &&
                                        k.default.track(eu.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                                            application_id: eM.id,
                                            load_time_ms: n,
                                            src: a
                                        });
                                }
                            })
                        );
                    break;
                }
                case ed.ApplicationDirectoryProfileSections.STORE:
                    at && null != p && e.push((0, i.jsx)(ei.M, { appId: p }));
                    break;
                case ed.ApplicationDirectoryProfileSections.PRIVACY:
                    an &&
                        e.push(
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(h.Heading, {
                                        className: em.sectionHeader,
                                        variant: 'heading-md/semibold',
                                        children: ep.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
                                    }),
                                    (0, i.jsx)(f.Z, {
                                        className: em.commandList,
                                        grantedPermissions: eV,
                                        grantedPermissionsHeader: ep.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
                                    })
                                ]
                            })
                        ),
                        ai &&
                            e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: em.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: ep.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
                                        }),
                                        (0, i.jsx)(el.Z, { application: eM })
                                    ]
                                })
                            );
            }
            return (
                ae(a),
                0 === e.length && g !== ed.ApplicationDirectoryProfileSections.GENERAL && null != eM && eG(),
                e.map((e, a) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: em.section,
                            children: e
                        },
                        a
                    )
                )
            );
        }, [g, eG, eM, ej, e4, e2, eK, eL, eq, at, p, an, ai, eV]),
        al = t.useMemo(() => {
            let e = [
                {
                    name: ed.ApplicationDirectoryProfileSections.GENERAL,
                    text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
                    Icon: h.AppsIcon
                }
            ];
            return (
                eK.length > 0 &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.IMAGES,
                        text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
                        Icon: h.ImagesIcon
                    }),
                at &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.STORE,
                        text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
                        Icon: h.ShopSparkleIcon
                    }),
                (an || ai) &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.PRIVACY,
                        text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
                        Icon: h.PrivacyAndSafetyIcon
                    }),
                e
            );
        }, [eK.length, an, ai, at]);
    return (
        (d =
            null == eM
                ? null == eT || eT === U.M.FETCHING
                    ? (0, i.jsx)(Q.Z, { loading: eT === U.M.FETCHING })
                    : (0, i.jsx)('div', {
                          className: em.__invalid_page,
                          children: (0, i.jsxs)('div', {
                              className: em.emptyContainer,
                              children: [
                                  (0, i.jsx)('img', {
                                      className: em.emptyImage,
                                      src: eg,
                                      alt: ''
                                  }),
                                  (0, i.jsx)(h.Heading, {
                                      variant: 'heading-xl/semibold',
                                      children: ep.Z.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
                                  })
                              ]
                          })
                      })
                : (0, i.jsxs)(Q.Z, {
                      loading: eT === U.M.FETCHING,
                      children: [
                          (0, i.jsx)(eN, {
                              app: eM,
                              iconSrc: eH
                          }),
                          (0, i.jsxs)('div', {
                              className: em.__invalid_page,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: em.header,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: em.headerSidebar,
                                              children: [
                                                  (0, i.jsx)('img', {
                                                      className: em.headerIcon,
                                                      alt: '',
                                                      'aria-hidden': !0,
                                                      src: eH,
                                                      width: ef,
                                                      height: ef
                                                  }),
                                                  (0, i.jsx)(J.Z, {
                                                      application: eM,
                                                      mutualGuilds: eZ,
                                                      mutualGuildShownMax: 3,
                                                      compact: !0
                                                  })
                                              ]
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: em.headerContent,
                                              children: [
                                                  (0, i.jsxs)('div', {
                                                      className: em.headerNameAndButtons,
                                                      children: [
                                                          (0, i.jsxs)('div', {
                                                              className: em.headerNameAndIcon,
                                                              children: [
                                                                  (0, i.jsx)(h.Heading, {
                                                                      className: em.name,
                                                                      variant: 'heading-xxl/semibold',
                                                                      children: eM.name
                                                                  }),
                                                                  at &&
                                                                      (0, i.jsx)(h.Tooltip, {
                                                                          tooltipClassName: em.premiumIconTooltip,
                                                                          text: ep.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                          children: (e) =>
                                                                              (0, i.jsx)('img', {
                                                                                  ...e,
                                                                                  alt: ep.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                                  className: em.premiumIcon,
                                                                                  src: n(744050)
                                                                              })
                                                                      }),
                                                                  e5 && (0, i.jsx)($.Z, { className: em.partnerBadge })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: em.buttons,
                                                              children: [
                                                                  (0, i.jsx)(h.Button, {
                                                                      onClick: e1,
                                                                      color: h.Button.Colors.PRIMARY,
                                                                      children: e0 ? ep.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : ep.Z.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(h.Button, {
                                                                      color: h.Button.Colors.BRAND,
                                                                      onClick: e8,
                                                                      disabled: !eF,
                                                                      children: ep.Z.Messages.APPLICATION_ADD_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(h.Popout, {
                                                                      renderPopout: (e) => {
                                                                          let { closePopout: a } = e;
                                                                          return e$(a);
                                                                      },
                                                                      position: 'left',
                                                                      align: 'top',
                                                                      animation: h.Popout.Animation.NONE,
                                                                      children: (e) =>
                                                                          (0, i.jsx)(h.Clickable, {
                                                                              className: em.overflow,
                                                                              ...e,
                                                                              children: (0, i.jsx)(h.MoreHorizontalIcon, {
                                                                                  size: 'custom',
                                                                                  color: 'currentColor',
                                                                                  width: 20,
                                                                                  height: 20,
                                                                                  className: em.iconInteractive
                                                                              })
                                                                          })
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  }),
                                                  (0, i.jsx)(ec.Z, {
                                                      activeSection: g,
                                                      setSection: ez,
                                                      sections: al
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: em.contentContainer,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: em.content,
                                              children: [
                                                  ar,
                                                  null != eR && eR.length > 0
                                                      ? (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                e7 && (0, i.jsx)('div', { className: em.separator }),
                                                                (0, i.jsxs)('div', {
                                                                    className: em.section,
                                                                    children: [
                                                                        (0, i.jsx)(h.Heading, {
                                                                            className: em.relatedHeader,
                                                                            variant: 'eyebrow',
                                                                            children: ep.Z.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
                                                                        }),
                                                                        (0, i.jsx)(Q.Z, {
                                                                            loading: N,
                                                                            children: (0, i.jsx)(X.Z, {
                                                                                applications: eR,
                                                                                onViewOne: eJ
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                      : null
                                              ]
                                          }),
                                          (0, i.jsx)(eo.Z, {
                                              className: em.sidebar,
                                              application: eM,
                                              guildId: I,
                                              onViewCategory: eX,
                                              onClickGuildWidget: eB
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
function eb(e) {
    switch (e.type) {
        case v.ee.MEDIA_PROXY:
            var a;
            let n = null !== (a = e.proxy_url) && void 0 !== a ? a : e.url;
            return {
                type: eu.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case v.ee.YOUTUBE:
            let i = eE(e.url);
            if (null != i)
                return {
                    type: eu.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: i
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
let eA = (e) => {
        let a,
            { onToggle: n, isViewAll: t } = e;
        return (
            (a = t
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.Text, {
                              className: em.showMoreButtonText,
                              variant: 'eyebrow',
                              children: ep.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
                          }),
                          (0, i.jsx)(h.ChevronSmallUpIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: em.showMoreButtonIcon
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.Text, {
                              className: em.showMoreButtonText,
                              variant: 'eyebrow',
                              children: ep.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
                          }),
                          (0, i.jsx)(h.ChevronSmallDownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: em.showMoreButtonIcon
                          })
                      ]
                  })),
            (0, i.jsx)(eR, {
                children: (0, i.jsx)(h.Button, {
                    look: h.Button.Looks.BLANK,
                    color: h.Button.Colors.TRANSPARENT,
                    size: h.Button.Sizes.NONE,
                    className: em.showMoreButton,
                    innerClassName: em.showMoreButtonInner,
                    onClick: n,
                    children: a
                })
            })
        );
    },
    eR = (e) => {
        let { className: a, contentClassName: n, children: t } = e;
        return (0, i.jsxs)('div', {
            className: l()([em.dividerContainer, a]),
            children: [
                (0, i.jsx)('div', { className: em.divider }),
                null != t
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: l()(em.contentDivider, n),
                                  children: t
                              }),
                              (0, i.jsx)('div', { className: em.divider })
                          ]
                      })
                    : null
            ]
        });
    };
function eN(e) {
    let { app: a, iconSrc: n } = e,
        r = (0, N.ZP)(n, g.Z.unsafe_rawColors.PRIMARY_800.css),
        { bot: l } = a,
        s = t.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != l) {
                let a = (0, w.aN)({
                    id: l.id,
                    banner: l.banner,
                    size: 1024,
                    canAnimate: !1
                });
                null != a && ((e['--custom-background-static'] = 'url('.concat(a)), (e.height = 'auto'));
                let n = (0, w.xR)(l.banner)
                    ? (0, w.aN)({
                          id: l.id,
                          banner: l.banner,
                          size: 1024,
                          canAnimate: !0
                      })
                    : null;
                null != n && (e['--custom-background-animated'] = 'url('.concat(n));
            }
            return e;
        }, [r, l]);
    return (0, i.jsx)('div', {
        style: s,
        className: em.headerBanner,
        'data-has-animated': '--custom-background-animated' in s
    });
}
