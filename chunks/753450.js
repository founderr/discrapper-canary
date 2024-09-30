a.r(n),
    a.d(n, {
        default: function () {
            return eP;
        }
    }),
    a(47120),
    a(315314),
    a(610138),
    a(216116),
    a(78328),
    a(815648),
    a(789020),
    a(653041);
var i = a(735250),
    t = a(470079),
    r = a(120356),
    l = a.n(r),
    s = a(525654),
    o = a.n(s),
    c = a(302454),
    d = a.n(c),
    u = a(873546),
    _ = a(149765),
    m = a(468194),
    p = a(442837),
    g = a(692547),
    I = a(477690),
    h = a(481060),
    v = a(995648),
    x = a(445986),
    f = a(9807),
    C = a(911969),
    E = a(330726),
    P = a(782568),
    R = a(607070),
    b = a(581364),
    A = a(970321),
    N = a(283836),
    T = a(220082),
    j = a(252618),
    S = a(299206),
    O = a(241209),
    L = a(422559),
    y = a(703656),
    D = a(280885),
    M = a(706454),
    Z = a(314897),
    k = a(451478),
    B = a(626135),
    w = a(768581),
    G = a(572004),
    H = a(823379),
    F = a(900849),
    Y = a(674588),
    U = a(264043),
    W = a(303383),
    V = a(887706),
    z = a(738130),
    K = a(4461),
    q = a(34674),
    X = a(576958),
    J = a(924489),
    Q = a(125909),
    $ = a(409425),
    ee = a(132871),
    en = a(147890),
    ea = a(491576),
    ei = a(527564),
    et = a(326135),
    er = a(940064),
    el = a(626004),
    es = a(939893),
    eo = a(430913),
    ec = a(606183),
    ed = a(272242),
    eu = a(981631),
    e_ = a(558921),
    em = a(689938),
    ep = a(613250),
    eg = a(902294);
let eI = d().parserFor(es.Z),
    eh = d().reactFor(d().ruleOutput(es.Z, 'react')),
    ev = (0, m.Mg)(I.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
    ex = 'redirect_to_support_server',
    ef = 'start_application_install',
    eC = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
    eE = (e) => {
        if (null == e) return null;
        let n = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
        return null != n ? n[1] : null;
    };
function eP(e) {
    var n, r, s, c;
    let d,
        {
            match: {
                params: { applicationId: m, section: g = ed.ApplicationDirectoryProfileSections.GENERAL }
            }
        } = e,
        I = (0, ee.useApplicationDirectoryHistory)((e) => e.guildId),
        C = (0, V.Z)(),
        R = (0, p.e7)(
            [W.Z],
            () =>
                W.Z.getFetchState({
                    applicationId: m,
                    guildId: I
                }) === W.M.FETCHING
        ),
        T = t.useRef({
            applicationId: void 0,
            guildId: void 0
        }),
        { similarApplications: es, similarLoadId: eE } = (0, p.cj)([W.Z], () => {
            let e = {
                    applicationId: m,
                    guildId: I
                },
                n = W.Z.getSimilarApplications(e);
            return (
                null == n ? (n = W.Z.getSimilarApplications(T.current)) : (T.current = e),
                {
                    similarApplications: null == n ? void 0 : n.applications,
                    similarLoadId: null == n ? void 0 : n.loadId
                }
            );
        }),
        eP = t.useMemo(() => (null == es ? void 0 : es.slice(0, 3)), [es]),
        eA = (0, p.e7)([U.Z], () => U.Z.getApplicationFetchState(m)),
        [eT, ej] = t.useState(void 0),
        eS = t.useCallback(
            (e) => {
                if (null != m) {
                    if (e === ed.ApplicationDirectoryProfileSections.GENERAL) {
                        (0, en.replaceAppDirectoryURLWith)(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(m));
                        return;
                    }
                    (0, en.replaceAppDirectoryURLWith)(eu.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(m, e));
                }
            },
            [m]
        ),
        eO = (0, p.e7)([k.Z], () => k.Z.isFocused()),
        eL = (0, p.e7)([M.default], () => M.default.locale),
        ey = t.useRef(m),
        eD = (0, p.e7)([U.Z], () => {
            let e = U.Z.getApplication(m);
            return null == e ? (e = U.Z.getApplication(ey.current)) : (ey.current = m), e;
        }),
        eM = (0, ea.Z)({ application: eD }),
        eZ = (0, p.e7)([Z.default], () => Z.default.getSessionId());
    (0, j.Tt)({ location: null == eD ? void 0 : eD.name });
    let ek = t.useCallback(async () => {
        try {
            var e;
            let n = null == eD ? void 0 : null === (e = eD.guild) || void 0 === e ? void 0 : e.id;
            if (null != n) {
                (null == eD ? void 0 : eD.id) != null &&
                    B.default.track(eu.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: eD.id,
                        guild_id: n
                    });
                let e = { page: eu.ZY5.APPLICATION_DIRECTORY };
                await (0, F.Ub)(n, e, { setsHistorySnapshot: !1 });
            }
        } catch {}
    }, [eD]);
    t.useEffect(() => {
        if (null == eD) return;
        let e = new URL(location.href);
        if (C && null != eZ && 'true' === e.searchParams.get(ex)) {
            e.searchParams.delete(ex);
            let n = e.pathname + e.search;
            (0, y.dL)(n), ek();
        }
    }, [C, ek, eZ, eD]);
    let eB = t.useCallback(() => {
            var e;
            null != (null == eD ? void 0 : null === (e = eD.guild) || void 0 === e ? void 0 : e.id) && (C ? ek() : (0, q.rf)({ [ex]: 'true' }));
        }, [eD, C, ek]),
        ew = t.useCallback(() => {
            (0, en.replaceAppDirectoryURLWith)(''.concat(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(m)).concat(location.search));
        }, [m]);
    t.useEffect(() => {
        g === ed.ApplicationDirectoryProfileSections.GENERAL && ew();
    }, [ew, g]),
        t.useEffect(() => {
            null != m && Y.i6(m);
        }, [m]),
        t.useEffect(() => {
            if ((null == eD ? void 0 : eD.directory_entry) != null) {
                let e = eD.directory_entry,
                    n = null == e ? void 0 : e.popular_application_commands;
                null != n
                    ? ej(
                          n.map((e) =>
                              (0, b.Z8)({
                                  rootCommand: e,
                                  command: e,
                                  applicationId: e.application_id
                              })
                          )
                      )
                    : ej(void 0);
            }
        }, [eD]);
    let eG = w.ZP.getApplicationIconURL({
            id: null !== (s = null == eD ? void 0 : eD.id) && void 0 !== s ? s : '-1',
            icon: null == eD ? void 0 : eD.icon,
            size: ev
        }),
        eH = (0, S.Z)({
            id: null !== (c = null == eD ? void 0 : eD.id) && void 0 !== c ? c : '',
            label: em.Z.Messages.COPY_ID_APPLICATION
        }),
        { canInstall: eF, install: eY } = (0, K.P)(eD, I),
        eU = null === (n = (0, ee.getPreviousView)()) || void 0 === n ? void 0 : n.type;
    t.useEffect(() => {
        (null == eD ? void 0 : eD.id) != null &&
            B.default.track(eu.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: 'product',
                previous_page: eU,
                application_id: eD.id,
                guild_id: I,
                shown_mutual_guilds_count: eM.length,
                profile_section: g,
                referrer: document.referrer
            });
    }, [null == eD ? void 0 : eD.id, I, eM]);
    let eW = t.useMemo(() => {
            var e;
            let n = null == eD ? void 0 : null === (e = eD.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != n) return L.VY.filter((e) => _.e$(_.vB(n), e));
        }, [null == eD ? void 0 : null === (r = eD.install_params) || void 0 === r ? void 0 : r.permissions]),
        eV = t.useCallback(
            (e) => {
                eS(e),
                    (null == eD ? void 0 : eD.id) != null &&
                        B.default.track(eu.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: eD.id,
                            guild_id: I,
                            tab_name: e
                        });
            },
            [null == eD ? void 0 : eD.id, I, eS]
        ),
        ez = t.useMemo(() => {
            var e, n, a;
            return null !== (a = (null !== (n = null == eD ? void 0 : null === (e = eD.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== n ? n : []).map(eR).filter(H.lm)) && void 0 !== a ? a : [];
        }, [eD]),
        eK = t.useCallback(
            (e, n) => {
                if (e.type === eu.s9s.IMG) {
                    let n = ez.filter((e) => e.type === eu.s9s.IMG),
                        t = n.findIndex((n) => n === e);
                    if (t < 0) return;
                    let r = n.map((e) => ({
                        src: (0, x.Q)(e.src),
                        width: e.width,
                        height: e.height
                    }));
                    (0, h.openModalLazy)(async () => {
                        let { default: e } = await a.e('41814').then(a.bind(a, 895023));
                        return (n) => {
                            let { ...a } = n;
                            return (0, i.jsx)(e, {
                                ...a,
                                items: r,
                                startingIndex: t,
                                modalCarouselItemClassName: ep.appSlide
                            });
                        };
                    });
                }
            },
            [ez]
        ),
        eq = t.useCallback(
            (e) => {
                (null == eD ? void 0 : eD.id) != null &&
                    B.default.track(eu.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        current_page: 'product',
                        category: e.name,
                        category_id: e.id,
                        application_id: eD.id,
                        guild_id: I
                    }),
                    (0, en.goToCategory)({ categoryId: e.id });
            },
            [eD, I]
        );
    t.useEffect(() => {
        if (null != m)
            Y.T4({
                applicationId: m,
                guildId: I
            });
    }, [m, I]);
    let eX = t.useCallback(
            (e) => {
                let { application: n, mutualGuilds: a } = e;
                (null == eD ? void 0 : eD.id) != null &&
                    B.default.track(eu.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                        current_page: 'product',
                        application_id: eD.id,
                        suggested_application_id: n.id,
                        load_id: eE,
                        guild_id: I,
                        shown_mutual_guilds_count: a.length
                    }),
                    (0, en.goToApplication)({ applicationId: n.id });
            },
            [null == eD ? void 0 : eD.id, eE, I]
        ),
        eJ = t.useCallback(() => {
            null != eD &&
                (0, P.Z)(
                    (0, et.G)({
                        id: eD.id,
                        name: eD.name,
                        locale: eL
                    })
                );
        }, [eL, eD]),
        eQ = t.useCallback(
            (e) =>
                (0, i.jsxs)(h.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': em.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
                    onClose: e,
                    onSelect: void 0,
                    children: [
                        (0, i.jsx)(h.MenuGroup, {
                            children: (0, i.jsx)(h.MenuItem, {
                                id: 'report',
                                label: em.Z.Messages.REPORT_APP,
                                color: 'danger',
                                action: eJ
                            })
                        }),
                        null != eH ? (0, i.jsx)(h.MenuGroup, { children: eH }) : null
                    ]
                }),
            [eH, eJ]
        ),
        [e$, e0] = (0, E.Z)(!1, 1000),
        e6 = t.useCallback(() => {
            if (null != eD)
                B.default.track(eu.rMx.APP_SHARE_BUTTON_CLICKED, {
                    source: 'product_page',
                    application_id: eD.id,
                    guild_id: I
                }),
                    (0, G.JG)(eC(eD.id)),
                    e0(!0);
        }, [eD, e0, I]);
    t.useEffect(() => {
        let e = new URL(location.href);
        if (C && 'true' === e.searchParams.get(ef)) {
            e.searchParams.delete(ef);
            let n = e.pathname + e.search;
            (0, y.dL)(n), eY('product_page');
        }
    }, [C, eY]);
    let e1 = t.useCallback(() => {
            null != eD &&
                (C
                    ? eY('product_page')
                    : (B.default.track(eu.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                          application_id: m,
                          guild_id: I,
                          auth_type: null != eD.custom_install_url ? 'custom_url' : 'in_app',
                          source: 'product_page',
                          device_platform: u.tq ? 'mobile_web' : 'desktop_web'
                      }),
                      (0, q.rf)({ [ef]: 'true' })));
        }, [eD, C, eY, m, I]),
        e5 = (null == eD ? void 0 : eD.id) === e_.g,
        [e8, e2] = t.useState(!1),
        [e3, e4] = t.useState(!1),
        [e9, e7] = t.useState(!0),
        ne = (e) => {
            null != e && e2(e.scrollHeight > e.clientHeight);
        },
        nn = null != eW && eW.length > 0,
        na = (null == eD ? void 0 : eD.flags) != null,
        ni = (0, A.R)(null != m ? m : '');
    t.useEffect(() => {
        ni && null != m && (0, N.Z)(m);
    }, [ni, m]);
    let nt = t.useMemo(() => {
            let e = [],
                n = !0;
            switch (g) {
                case ed.ApplicationDirectoryProfileSections.GENERAL: {
                    var a, t;
                    let r = null == eD ? void 0 : null === (a = eD.directory_entry) || void 0 === a ? void 0 : a.detailed_description;
                    null != r && r.length > 0
                        ? (e.push(
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(h.Heading, {
                                          className: ep.sectionHeader,
                                          variant: 'heading-md/semibold',
                                          children: em.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                      }),
                                      (0, i.jsx)('div', {
                                          ref: ne,
                                          className: l()({
                                              [ep.descriptionClamp]: !e3,
                                              [ep.descriptionClampSafari]: !e3 && 'Safari' === o().name
                                          }),
                                          children: (0, i.jsx)(O.Z, {
                                              className: ep.detailedDescription,
                                              parser: eI,
                                              output: eh,
                                              state: { allowLinks: !0 },
                                              children: r
                                          })
                                      }),
                                      (e8 || e3) &&
                                          (0, i.jsx)(eb, {
                                              isViewAll: e3,
                                              onToggle: () => {
                                                  e4((e) => !e);
                                              }
                                          })
                                  ]
                              })
                          ),
                          (n = !1))
                        : (null == eD ? void 0 : null === (t = eD.directory_entry) || void 0 === t ? void 0 : t.short_description) !== void 0
                          ? e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: ep.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: em.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                        }),
                                        (0, i.jsx)('span', { children: eD.directory_entry.short_description })
                                    ]
                                })
                            )
                          : (null == eD ? void 0 : eD.description) != null &&
                            e.push(
                                (0, i.jsx)(D.Z, {
                                    className: ep.description,
                                    userBio: eD.description
                                })
                            ),
                        null != eT &&
                            eT.length > 0 &&
                            (e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: ep.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: em.Z.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
                                        }),
                                        (0, i.jsx)(er.Z, {
                                            className: ep.commandList,
                                            commands: eT
                                        })
                                    ]
                                })
                            ),
                            (n = !0));
                    break;
                }
                case ed.ApplicationDirectoryProfileSections.IMAGES: {
                    if (0 === ez.length) break;
                    let n = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                className: ep.errorImage,
                                src: eg,
                                'aria-hidden': !0,
                                alt: ''
                            }),
                            (0, i.jsx)(h.Heading, {
                                variant: 'heading-xl/semibold',
                                children: em.Z.Messages.ERRORS_IMAGE_NOT_FOUND
                            })
                        ]
                    });
                    ez.forEach((e, n) => {
                        null != eD
                            ? (e.alt = em.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
                                  index: n + 1,
                                  totalImages: ez.length,
                                  name: eD.name
                              }))
                            : (e.alt = em.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
                    }),
                        e.push(
                            (0, i.jsx)(f.Z, {
                                className: ep.carousel,
                                themedPagination: !0,
                                items: ez,
                                autoplayInterval: 8000,
                                paused: !eO,
                                videoAutoPlay: !0,
                                onCurrentItemClick: eK,
                                errorComponent: n,
                                onImageLoad: (e) => {
                                    let { src: n, loadTimeMs: a } = e;
                                    null != a &&
                                        null != eD &&
                                        B.default.track(eu.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                                            application_id: eD.id,
                                            load_time_ms: a,
                                            src: n
                                        });
                                }
                            })
                        );
                    break;
                }
                case ed.ApplicationDirectoryProfileSections.STORE:
                    ni && null != m && e.push((0, i.jsx)(ei.M, { appId: m }));
                    break;
                case ed.ApplicationDirectoryProfileSections.PRIVACY:
                    nn &&
                        e.push(
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(h.Heading, {
                                        className: ep.sectionHeader,
                                        variant: 'heading-md/semibold',
                                        children: em.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
                                    }),
                                    (0, i.jsx)(v.Z, {
                                        className: ep.commandList,
                                        grantedPermissions: eW,
                                        grantedPermissionsHeader: em.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
                                    })
                                ]
                            })
                        ),
                        na &&
                            e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: ep.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: em.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
                                        }),
                                        (0, i.jsx)(el.Z, { application: eD })
                                    ]
                                })
                            );
            }
            return (
                e7(n),
                0 === e.length && g !== ed.ApplicationDirectoryProfileSections.GENERAL && null != eD && ew(),
                e.map((e, n) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: ep.section,
                            children: e
                        },
                        n
                    )
                )
            );
        }, [g, ew, eD, eT, e3, e8, ez, eO, eK, ni, m, nn, na, eW]),
        nr = t.useMemo(() => {
            let e = [
                {
                    name: ed.ApplicationDirectoryProfileSections.GENERAL,
                    text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
                    Icon: h.AppsIcon
                }
            ];
            return (
                ez.length > 0 &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.IMAGES,
                        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
                        Icon: h.ImagesIcon
                    }),
                ni &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.STORE,
                        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
                        Icon: h.ShopSparkleIcon
                    }),
                (nn || na) &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.PRIVACY,
                        text: em.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
                        Icon: h.PrivacyAndSafetyIcon
                    }),
                e
            );
        }, [ez.length, nn, na, ni]);
    return (
        (d =
            null == eD
                ? null == eA || eA === U.M.FETCHING
                    ? (0, i.jsx)(Q.Z, { loading: eA === U.M.FETCHING })
                    : (0, i.jsx)('div', {
                          className: ep.__invalid_page,
                          children: (0, i.jsxs)('div', {
                              className: ep.emptyContainer,
                              children: [
                                  (0, i.jsx)('img', {
                                      className: ep.emptyImage,
                                      src: eg,
                                      alt: ''
                                  }),
                                  (0, i.jsx)(h.Heading, {
                                      variant: 'heading-xl/semibold',
                                      children: em.Z.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
                                  })
                              ]
                          })
                      })
                : (0, i.jsxs)(Q.Z, {
                      loading: eA === U.M.FETCHING,
                      children: [
                          (0, i.jsx)(eN, {
                              app: eD,
                              iconSrc: eG
                          }),
                          (0, i.jsxs)('div', {
                              className: ep.__invalid_page,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: ep.header,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: ep.headerSidebar,
                                              children: [
                                                  (0, i.jsx)('img', {
                                                      className: ep.headerIcon,
                                                      alt: '',
                                                      'aria-hidden': !0,
                                                      src: eG,
                                                      width: ev,
                                                      height: ev
                                                  }),
                                                  (0, i.jsx)(J.Z, {
                                                      application: eD,
                                                      mutualGuilds: eM,
                                                      mutualGuildShownMax: 3,
                                                      compact: !0
                                                  })
                                              ]
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: ep.headerContent,
                                              children: [
                                                  (0, i.jsxs)('div', {
                                                      className: ep.headerNameAndButtons,
                                                      children: [
                                                          (0, i.jsxs)('div', {
                                                              className: ep.headerNameAndIcon,
                                                              children: [
                                                                  (0, i.jsx)(h.Heading, {
                                                                      className: ep.name,
                                                                      variant: 'heading-xxl/semibold',
                                                                      children: eD.name
                                                                  }),
                                                                  ni &&
                                                                      (0, i.jsx)(h.Tooltip, {
                                                                          tooltipClassName: ep.premiumIconTooltip,
                                                                          text: em.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                          children: (e) =>
                                                                              (0, i.jsx)('img', {
                                                                                  ...e,
                                                                                  alt: em.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                                  className: ep.premiumIcon,
                                                                                  src: a(744050)
                                                                              })
                                                                      }),
                                                                  e5 && (0, i.jsx)($.Z, { className: ep.partnerBadge })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: ep.buttons,
                                                              children: [
                                                                  (0, i.jsx)(h.Button, {
                                                                      onClick: e6,
                                                                      color: h.Button.Colors.PRIMARY,
                                                                      children: e$ ? em.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : em.Z.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(h.Button, {
                                                                      color: h.Button.Colors.BRAND,
                                                                      onClick: e1,
                                                                      disabled: !eF,
                                                                      children: em.Z.Messages.APPLICATION_ADD_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(h.Popout, {
                                                                      renderPopout: (e) => {
                                                                          let { closePopout: n } = e;
                                                                          return eQ(n);
                                                                      },
                                                                      position: 'left',
                                                                      align: 'top',
                                                                      animation: h.Popout.Animation.NONE,
                                                                      children: (e) =>
                                                                          (0, i.jsx)(h.Clickable, {
                                                                              className: ep.overflow,
                                                                              ...e,
                                                                              children: (0, i.jsx)(h.MoreHorizontalIcon, {
                                                                                  size: 'custom',
                                                                                  color: 'currentColor',
                                                                                  width: 20,
                                                                                  height: 20,
                                                                                  className: ep.iconInteractive
                                                                              })
                                                                          })
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  }),
                                                  (0, i.jsx)(ec.Z, {
                                                      activeSection: g,
                                                      setSection: eV,
                                                      sections: nr
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: ep.contentContainer,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: ep.content,
                                              children: [
                                                  nt,
                                                  null != eP && eP.length > 0
                                                      ? (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                e9 && (0, i.jsx)('div', { className: ep.separator }),
                                                                (0, i.jsxs)('div', {
                                                                    className: ep.section,
                                                                    children: [
                                                                        (0, i.jsx)(h.Heading, {
                                                                            className: ep.relatedHeader,
                                                                            variant: 'eyebrow',
                                                                            children: em.Z.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
                                                                        }),
                                                                        (0, i.jsx)(Q.Z, {
                                                                            loading: R,
                                                                            children: (0, i.jsx)(X.Z, {
                                                                                applications: eP,
                                                                                onViewOne: eX
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
                                              className: ep.sidebar,
                                              application: eD,
                                              guildId: I,
                                              onViewCategory: eq,
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
function eR(e) {
    switch (e.type) {
        case C.ee.MEDIA_PROXY:
            var n;
            let a = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return {
                type: eu.s9s.IMG,
                width: 0,
                height: 0,
                src: a
            };
        case C.ee.YOUTUBE:
            let i = eE(e.url);
            if (null != i)
                return {
                    type: eu.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: i
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
let eb = (e) => {
        let n,
            { onToggle: a, isViewAll: t } = e;
        return (
            (n = t
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.Text, {
                              className: ep.showMoreButtonText,
                              variant: 'eyebrow',
                              children: em.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
                          }),
                          (0, i.jsx)(h.ChevronSmallUpIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: ep.showMoreButtonIcon
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.Text, {
                              className: ep.showMoreButtonText,
                              variant: 'eyebrow',
                              children: em.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
                          }),
                          (0, i.jsx)(h.ChevronSmallDownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: ep.showMoreButtonIcon
                          })
                      ]
                  })),
            (0, i.jsx)(eA, {
                children: (0, i.jsx)(h.Button, {
                    look: h.Button.Looks.BLANK,
                    color: h.Button.Colors.TRANSPARENT,
                    size: h.Button.Sizes.NONE,
                    className: ep.showMoreButton,
                    innerClassName: ep.showMoreButtonInner,
                    onClick: a,
                    children: n
                })
            })
        );
    },
    eA = (e) => {
        let { className: n, contentClassName: a, children: t } = e;
        return (0, i.jsxs)('div', {
            className: l()([ep.dividerContainer, n]),
            children: [
                (0, i.jsx)('div', { className: ep.divider }),
                null != t
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: l()(ep.contentDivider, a),
                                  children: t
                              }),
                              (0, i.jsx)('div', { className: ep.divider })
                          ]
                      })
                    : null
            ]
        });
    };
function eN(e) {
    let { app: n, iconSrc: a } = e,
        r = (0, T.ZP)(a, g.Z.unsafe_rawColors.PRIMARY_800.css),
        { bot: l } = n,
        s = (0, p.e7)([R.Z], () => R.Z.useReducedMotion),
        o = t.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != l) {
                let n = (0, w.aN)({
                    id: l.id,
                    banner: l.banner,
                    size: 1024,
                    canAnimate: !1
                });
                if ((null != n && ((e['--custom-background-static'] = 'url('.concat(n)), (e.height = '212px')), !s)) {
                    let n = (0, w.aN)({
                        id: l.id,
                        banner: l.banner,
                        size: 1024,
                        canAnimate: !0
                    });
                    null != n && (e['--custom-background-animated'] = 'url('.concat(n));
                }
            }
            return e;
        }, [r, l, s]);
    return (0, i.jsx)('div', {
        style: o,
        className: ep.headerBanner
    });
}
