a.r(n),
    a.d(n, {
        default: function () {
            return eE;
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
    R = a(581364),
    b = a(970321),
    A = a(283836),
    N = a(220082),
    T = a(252618),
    j = a(299206),
    S = a(241209),
    O = a(422559),
    L = a(703656),
    y = a(280885),
    D = a(706454),
    M = a(314897),
    Z = a(451478),
    k = a(626135),
    w = a(768581),
    B = a(572004),
    G = a(823379),
    H = a(900849),
    F = a(674588),
    Y = a(264043),
    U = a(303383),
    W = a(887706),
    V = a(738130),
    z = a(4461),
    K = a(34674),
    q = a(576958),
    X = a(924489),
    J = a(125909),
    Q = a(409425),
    $ = a(132871),
    ee = a(147890),
    en = a(491576),
    ea = a(527564),
    ei = a(326135),
    et = a(940064),
    er = a(626004),
    el = a(939893),
    es = a(430913),
    eo = a(606183),
    ec = a(272242),
    ed = a(981631),
    eu = a(558921),
    e_ = a(689938),
    em = a(613250),
    ep = a(902294);
let eg = d().parserFor(el.Z),
    eI = d().reactFor(d().ruleOutput(el.Z, 'react')),
    eh = (0, m.Mg)(I.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
    ev = 'redirect_to_support_server',
    ex = 'start_application_install',
    ef = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(ed.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
    eC = (e) => {
        if (null == e) return null;
        let n = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
        return null != n ? n[1] : null;
    };
function eE(e) {
    var n, r, s, c;
    let d,
        {
            match: {
                params: { applicationId: m, section: g = ec.ApplicationDirectoryProfileSections.GENERAL }
            }
        } = e,
        I = (0, $.useApplicationDirectoryHistory)((e) => e.guildId),
        C = (0, W.Z)(),
        N = (0, p.e7)(
            [U.Z],
            () =>
                U.Z.getFetchState({
                    applicationId: m,
                    guildId: I
                }) === U.M.FETCHING
        ),
        el = t.useRef({
            applicationId: void 0,
            guildId: void 0
        }),
        { similarApplications: eC, similarLoadId: eE } = (0, p.cj)([U.Z], () => {
            let e = {
                    applicationId: m,
                    guildId: I
                },
                n = U.Z.getSimilarApplications(e);
            return (
                null == n ? (n = U.Z.getSimilarApplications(el.current)) : (el.current = e),
                {
                    similarApplications: null == n ? void 0 : n.applications,
                    similarLoadId: null == n ? void 0 : n.loadId
                }
            );
        }),
        eb = t.useMemo(() => (null == eC ? void 0 : eC.slice(0, 3)), [eC]),
        eN = (0, p.e7)([Y.Z], () => Y.Z.getApplicationFetchState(m)),
        [eT, ej] = t.useState(void 0),
        eS = t.useCallback(
            (e) => {
                if (null != m) {
                    if (e === ec.ApplicationDirectoryProfileSections.GENERAL) {
                        (0, ee.replaceAppDirectoryURLWith)(ed.Z5c.APPLICATION_DIRECTORY_PROFILE(m));
                        return;
                    }
                    (0, ee.replaceAppDirectoryURLWith)(ed.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(m, e));
                }
            },
            [m]
        ),
        eO = (0, p.e7)([Z.Z], () => Z.Z.isFocused()),
        eL = (0, p.e7)([D.default], () => D.default.locale),
        ey = t.useRef(m),
        eD = (0, p.e7)([Y.Z], () => {
            let e = Y.Z.getApplication(m);
            return null == e ? (e = Y.Z.getApplication(ey.current)) : (ey.current = m), e;
        }),
        eM = (0, en.Z)({ application: eD }),
        eZ = (0, p.e7)([M.default], () => M.default.getSessionId());
    (0, T.Tt)({ location: null == eD ? void 0 : eD.name });
    let ek = t.useCallback(async () => {
        try {
            var e;
            let n = null == eD ? void 0 : null === (e = eD.guild) || void 0 === e ? void 0 : e.id;
            if (null != n) {
                (null == eD ? void 0 : eD.id) != null &&
                    k.default.track(ed.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: eD.id,
                        guild_id: n
                    });
                let e = { page: ed.ZY5.APPLICATION_DIRECTORY };
                await (0, H.Ub)(n, e, { setsHistorySnapshot: !1 });
            }
        } catch {}
    }, [eD]);
    t.useEffect(() => {
        if (null == eD) return;
        let e = new URL(location.href);
        if (C && null != eZ && 'true' === e.searchParams.get(ev)) {
            e.searchParams.delete(ev);
            let n = e.pathname + e.search;
            (0, L.dL)(n), ek();
        }
    }, [C, ek, eZ, eD]);
    let ew = t.useCallback(() => {
            var e;
            null != (null == eD ? void 0 : null === (e = eD.guild) || void 0 === e ? void 0 : e.id) && (C ? ek() : (0, K.rf)({ [ev]: 'true' }));
        }, [eD, C, ek]),
        eB = t.useCallback(() => {
            (0, ee.replaceAppDirectoryURLWith)(''.concat(ed.Z5c.APPLICATION_DIRECTORY_PROFILE(m)).concat(location.search));
        }, [m]);
    t.useEffect(() => {
        g === ec.ApplicationDirectoryProfileSections.GENERAL && eB();
    }, [eB, g]),
        t.useEffect(() => {
            null != m && F.i6(m);
        }, [m]),
        t.useEffect(() => {
            if ((null == eD ? void 0 : eD.directory_entry) != null) {
                let e = eD.directory_entry,
                    n = null == e ? void 0 : e.popular_application_commands;
                null != n
                    ? ej(
                          n.map((e) =>
                              (0, R.Z8)({
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
            size: eh
        }),
        eH = (0, j.Z)({
            id: null !== (c = null == eD ? void 0 : eD.id) && void 0 !== c ? c : '',
            label: e_.Z.Messages.COPY_ID_APPLICATION
        }),
        { canInstall: eF, install: eY } = (0, z.P)(eD, I),
        eU = null === (n = (0, $.getPreviousView)()) || void 0 === n ? void 0 : n.type;
    t.useEffect(() => {
        (null == eD ? void 0 : eD.id) != null &&
            k.default.track(ed.rMx.APP_DIRECTORY_PAGE_VIEWED, {
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
            if (null != n) return O.VY.filter((e) => _.e$(_.vB(n), e));
        }, [null == eD ? void 0 : null === (r = eD.install_params) || void 0 === r ? void 0 : r.permissions]),
        eV = t.useCallback(
            (e) => {
                eS(e),
                    (null == eD ? void 0 : eD.id) != null &&
                        k.default.track(ed.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: eD.id,
                            guild_id: I,
                            tab_name: e
                        });
            },
            [null == eD ? void 0 : eD.id, I, eS]
        ),
        ez = t.useMemo(() => {
            var e, n, a;
            return null !== (a = (null !== (n = null == eD ? void 0 : null === (e = eD.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== n ? n : []).map(eP).filter(G.lm)) && void 0 !== a ? a : [];
        }, [eD]),
        eK = t.useCallback(
            (e, n) => {
                if (e.type === ed.s9s.IMG) {
                    let n = ez.filter((e) => e.type === ed.s9s.IMG),
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
                                modalCarouselItemClassName: em.appSlide
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
                    k.default.track(ed.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        current_page: 'product',
                        category: e.name,
                        category_id: e.id,
                        application_id: eD.id,
                        guild_id: I
                    }),
                    (0, ee.goToCategory)({ categoryId: e.id });
            },
            [eD, I]
        );
    t.useEffect(() => {
        if (null != m)
            F.T4({
                applicationId: m,
                guildId: I
            });
    }, [m, I]);
    let eX = t.useCallback(
            (e) => {
                let { application: n, mutualGuilds: a } = e;
                (null == eD ? void 0 : eD.id) != null &&
                    k.default.track(ed.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                        current_page: 'product',
                        application_id: eD.id,
                        suggested_application_id: n.id,
                        load_id: eE,
                        guild_id: I,
                        shown_mutual_guilds_count: a.length
                    }),
                    (0, ee.goToApplication)({ applicationId: n.id });
            },
            [null == eD ? void 0 : eD.id, eE, I]
        ),
        eJ = t.useCallback(() => {
            null != eD &&
                (0, P.Z)(
                    (0, ei.G)({
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
                    'aria-label': e_.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
                    onClose: e,
                    onSelect: void 0,
                    children: [
                        (0, i.jsx)(h.MenuGroup, {
                            children: (0, i.jsx)(h.MenuItem, {
                                id: 'report',
                                label: e_.Z.Messages.REPORT_APP,
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
                k.default.track(ed.rMx.APP_SHARE_BUTTON_CLICKED, {
                    source: 'product_page',
                    application_id: eD.id,
                    guild_id: I
                }),
                    (0, B.JG)(ef(eD.id)),
                    e0(!0);
        }, [eD, e0, I]);
    t.useEffect(() => {
        let e = new URL(location.href);
        if (C && 'true' === e.searchParams.get(ex)) {
            e.searchParams.delete(ex);
            let n = e.pathname + e.search;
            (0, L.dL)(n), eY('product_page');
        }
    }, [C, eY]);
    let e1 = t.useCallback(() => {
            null != eD &&
                (C
                    ? eY('product_page')
                    : (k.default.track(ed.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                          application_id: m,
                          guild_id: I,
                          auth_type: null != eD.custom_install_url ? 'custom_url' : 'in_app',
                          source: 'product_page',
                          device_platform: u.tq ? 'mobile_web' : 'desktop_web'
                      }),
                      (0, K.rf)({ [ex]: 'true' })));
        }, [eD, C, eY, m, I]),
        e5 = (null == eD ? void 0 : eD.id) === eu.g,
        [e8, e2] = t.useState(!1),
        [e3, e4] = t.useState(!1),
        [e9, e7] = t.useState(!0),
        ne = (e) => {
            null != e && e2(e.scrollHeight > e.clientHeight);
        },
        nn = null != eW && eW.length > 0,
        na = (null == eD ? void 0 : eD.flags) != null,
        ni = (0, b.R)(null != m ? m : '');
    t.useEffect(() => {
        ni && null != m && (0, A.Z)(m);
    }, [ni, m]);
    let nt = t.useMemo(() => {
            let e = [],
                n = !0;
            switch (g) {
                case ec.ApplicationDirectoryProfileSections.GENERAL: {
                    var a, t;
                    let r = null == eD ? void 0 : null === (a = eD.directory_entry) || void 0 === a ? void 0 : a.detailed_description;
                    null != r && r.length > 0
                        ? (e.push(
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(h.Heading, {
                                          className: em.sectionHeader,
                                          variant: 'heading-md/semibold',
                                          children: e_.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                      }),
                                      (0, i.jsx)('div', {
                                          ref: ne,
                                          className: l()({
                                              [em.descriptionClamp]: !e3,
                                              [em.descriptionClampSafari]: !e3 && 'Safari' === o().name
                                          }),
                                          children: (0, i.jsx)(S.Z, {
                                              className: em.detailedDescription,
                                              parser: eg,
                                              output: eI,
                                              state: { allowLinks: !0 },
                                              children: r
                                          })
                                      }),
                                      (e8 || e3) &&
                                          (0, i.jsx)(eR, {
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
                                            className: em.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                        }),
                                        (0, i.jsx)('span', { children: eD.directory_entry.short_description })
                                    ]
                                })
                            )
                          : (null == eD ? void 0 : eD.description) != null &&
                            e.push(
                                (0, i.jsx)(y.Z, {
                                    className: em.description,
                                    userBio: eD.description
                                })
                            ),
                        null != eT &&
                            eT.length > 0 &&
                            (e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: em.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.Z.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
                                        }),
                                        (0, i.jsx)(et.Z, {
                                            className: em.commandList,
                                            commands: eT
                                        })
                                    ]
                                })
                            ),
                            (n = !0));
                    break;
                }
                case ec.ApplicationDirectoryProfileSections.IMAGES: {
                    if (0 === ez.length) break;
                    let n = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                className: em.errorImage,
                                src: ep,
                                'aria-hidden': !0,
                                alt: ''
                            }),
                            (0, i.jsx)(h.Heading, {
                                variant: 'heading-xl/semibold',
                                children: e_.Z.Messages.ERRORS_IMAGE_NOT_FOUND
                            })
                        ]
                    });
                    ez.forEach((e, n) => {
                        null != eD
                            ? (e.alt = e_.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
                                  index: n + 1,
                                  totalImages: ez.length,
                                  name: eD.name
                              }))
                            : (e.alt = e_.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
                    }),
                        e.push(
                            (0, i.jsx)(f.Z, {
                                className: em.carousel,
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
                                        k.default.track(ed.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                                            application_id: eD.id,
                                            load_time_ms: a,
                                            src: n
                                        });
                                }
                            })
                        );
                    break;
                }
                case ec.ApplicationDirectoryProfileSections.STORE:
                    ni && null != m && e.push((0, i.jsx)(ea.M, { appId: m }));
                    break;
                case ec.ApplicationDirectoryProfileSections.PRIVACY:
                    nn &&
                        e.push(
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(h.Heading, {
                                        className: em.sectionHeader,
                                        variant: 'heading-md/semibold',
                                        children: e_.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
                                    }),
                                    (0, i.jsx)(v.Z, {
                                        className: em.commandList,
                                        grantedPermissions: eW,
                                        grantedPermissionsHeader: e_.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
                                    })
                                ]
                            })
                        ),
                        na &&
                            e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: em.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
                                        }),
                                        (0, i.jsx)(er.Z, { application: eD })
                                    ]
                                })
                            );
            }
            return (
                e7(n),
                0 === e.length && g !== ec.ApplicationDirectoryProfileSections.GENERAL && null != eD && eB(),
                e.map((e, n) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: em.section,
                            children: e
                        },
                        n
                    )
                )
            );
        }, [g, eB, eD, eT, e3, e8, ez, eO, eK, ni, m, nn, na, eW]),
        nr = t.useMemo(() => {
            let e = [
                {
                    name: ec.ApplicationDirectoryProfileSections.GENERAL,
                    text: e_.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
                    Icon: h.AppsIcon
                }
            ];
            return (
                ez.length > 0 &&
                    e.push({
                        name: ec.ApplicationDirectoryProfileSections.IMAGES,
                        text: e_.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
                        Icon: h.ImagesIcon
                    }),
                ni &&
                    e.push({
                        name: ec.ApplicationDirectoryProfileSections.STORE,
                        text: e_.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
                        Icon: h.ShopSparkleIcon
                    }),
                (nn || na) &&
                    e.push({
                        name: ec.ApplicationDirectoryProfileSections.PRIVACY,
                        text: e_.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
                        Icon: h.PrivacyAndSafetyIcon
                    }),
                e
            );
        }, [ez.length, nn, na, ni]);
    return (
        (d =
            null == eD
                ? null == eN || eN === Y.M.FETCHING
                    ? (0, i.jsx)(J.Z, { loading: eN === Y.M.FETCHING })
                    : (0, i.jsx)('div', {
                          className: em.__invalid_page,
                          children: (0, i.jsxs)('div', {
                              className: em.emptyContainer,
                              children: [
                                  (0, i.jsx)('img', {
                                      className: em.emptyImage,
                                      src: ep,
                                      alt: ''
                                  }),
                                  (0, i.jsx)(h.Heading, {
                                      variant: 'heading-xl/semibold',
                                      children: e_.Z.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
                                  })
                              ]
                          })
                      })
                : (0, i.jsxs)(J.Z, {
                      loading: eN === Y.M.FETCHING,
                      children: [
                          (0, i.jsx)(eA, {
                              app: eD,
                              iconSrc: eG
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
                                                      src: eG,
                                                      width: eh,
                                                      height: eh
                                                  }),
                                                  (0, i.jsx)(X.Z, {
                                                      application: eD,
                                                      mutualGuilds: eM,
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
                                                                      children: eD.name
                                                                  }),
                                                                  ni &&
                                                                      (0, i.jsx)(h.Tooltip, {
                                                                          tooltipClassName: em.premiumIconTooltip,
                                                                          text: e_.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                          children: (e) =>
                                                                              (0, i.jsx)('img', {
                                                                                  ...e,
                                                                                  alt: e_.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                                  className: em.premiumIcon,
                                                                                  src: a(744050)
                                                                              })
                                                                      }),
                                                                  e5 && (0, i.jsx)(Q.Z, { className: em.partnerBadge })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: em.buttons,
                                                              children: [
                                                                  (0, i.jsx)(h.Button, {
                                                                      onClick: e6,
                                                                      color: h.Button.Colors.PRIMARY,
                                                                      children: e$ ? e_.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : e_.Z.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(h.Button, {
                                                                      color: h.Button.Colors.BRAND,
                                                                      onClick: e1,
                                                                      disabled: !eF,
                                                                      children: e_.Z.Messages.APPLICATION_ADD_BUTTON
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
                                                  (0, i.jsx)(eo.Z, {
                                                      activeSection: g,
                                                      setSection: eV,
                                                      sections: nr
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
                                                  nt,
                                                  null != eb && eb.length > 0
                                                      ? (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                e9 && (0, i.jsx)('div', { className: em.separator }),
                                                                (0, i.jsxs)('div', {
                                                                    className: em.section,
                                                                    children: [
                                                                        (0, i.jsx)(h.Heading, {
                                                                            className: em.relatedHeader,
                                                                            variant: 'eyebrow',
                                                                            children: e_.Z.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
                                                                        }),
                                                                        (0, i.jsx)(J.Z, {
                                                                            loading: N,
                                                                            children: (0, i.jsx)(q.Z, {
                                                                                applications: eb,
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
                                          (0, i.jsx)(es.Z, {
                                              className: em.sidebar,
                                              application: eD,
                                              guildId: I,
                                              onViewCategory: eq,
                                              onClickGuildWidget: ew
                                          })
                                      ]
                                  })
                              ]
                          })
                      ]
                  })),
        (0, i.jsx)(V.Z, { children: d })
    );
}
function eP(e) {
    switch (e.type) {
        case C.ee.MEDIA_PROXY:
            var n;
            let a = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return {
                type: ed.s9s.IMG,
                width: 0,
                height: 0,
                src: a
            };
        case C.ee.YOUTUBE:
            let i = eC(e.url);
            if (null != i)
                return {
                    type: ed.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: i
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
let eR = (e) => {
        let n,
            { onToggle: a, isViewAll: t } = e;
        return (
            (n = t
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.Text, {
                              className: em.showMoreButtonText,
                              variant: 'eyebrow',
                              children: e_.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
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
                              children: e_.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
                          }),
                          (0, i.jsx)(h.ChevronSmallDownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: em.showMoreButtonIcon
                          })
                      ]
                  })),
            (0, i.jsx)(eb, {
                children: (0, i.jsx)(h.Button, {
                    look: h.Button.Looks.BLANK,
                    color: h.Button.Colors.TRANSPARENT,
                    size: h.Button.Sizes.NONE,
                    className: em.showMoreButton,
                    innerClassName: em.showMoreButtonInner,
                    onClick: a,
                    children: n
                })
            })
        );
    },
    eb = (e) => {
        let { className: n, contentClassName: a, children: t } = e;
        return (0, i.jsxs)('div', {
            className: l()([em.dividerContainer, n]),
            children: [
                (0, i.jsx)('div', { className: em.divider }),
                null != t
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: l()(em.contentDivider, a),
                                  children: t
                              }),
                              (0, i.jsx)('div', { className: em.divider })
                          ]
                      })
                    : null
            ]
        });
    };
function eA(e) {
    let { app: n, iconSrc: a } = e,
        r = (0, N.ZP)(a, g.Z.unsafe_rawColors.PRIMARY_800.css),
        { bot: l } = n,
        s = t.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != l) {
                let n = (0, w.aN)({
                    id: l.id,
                    banner: l.banner,
                    size: 1024,
                    canAnimate: !1
                });
                null != n && ((e['--custom-background-static'] = 'url('.concat(n)), (e.height = 'auto'));
                let a = (0, w.aN)({
                    id: l.id,
                    banner: l.banner,
                    size: 1024,
                    canAnimate: !0
                });
                null != a && (e['--custom-background-animated'] = 'url('.concat(a));
            }
            return e;
        }, [r, l]);
    return (0, i.jsx)('div', {
        style: s,
        className: em.headerBanner
    });
}
