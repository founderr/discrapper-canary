t.r(n),
    t.d(n, {
        default: function () {
            return eP;
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
    l = t(525654),
    s = t.n(l),
    c = t(302454),
    d = t.n(c),
    u = t(873546),
    _ = t(149765),
    p = t(468194),
    m = t(442837),
    I = t(692547),
    f = t(477690),
    h = t(481060),
    g = t(995648),
    C = t(445986),
    v = t(9807),
    b = t(911969),
    E = t(330726),
    x = t(782568),
    T = t(581364),
    P = t(970321),
    S = t(283836),
    A = t(220082),
    N = t(252618),
    R = t(299206),
    L = t(241209),
    O = t(341176),
    y = t(422559),
    j = t(703656),
    D = t(280885),
    M = t(706454),
    Z = t(314897),
    B = t(451478),
    k = t(626135),
    w = t(768581),
    F = t(572004),
    H = t(823379),
    G = t(900849),
    U = t(135431),
    Y = t(674588),
    W = t(264043),
    V = t(303383),
    z = t(887706),
    K = t(738130),
    q = t(4461),
    X = t(34674),
    J = t(576958),
    Q = t(924489),
    $ = t(125909),
    ee = t(409425),
    en = t(132871),
    et = t(147890),
    ei = t(491576),
    ea = t(527564),
    er = t(326135),
    eo = t(940064),
    el = t(626004),
    es = t(939893),
    ec = t(430913),
    ed = t(606183),
    eu = t(272242),
    e_ = t(981631),
    ep = t(701865),
    em = t(558921),
    eI = t(689938),
    ef = t(613250),
    eh = t(902294);
let eg = d().parserFor(es.Z),
    eC = d().reactFor(d().ruleOutput(es.Z, 'react')),
    ev = (0, p.Mg)(f.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
    eb = 'redirect_to_support_server',
    eE = 'start_application_install',
    ex = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(e_.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
    eT = (e) => {
        if (null == e) return null;
        let n = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
        return null != n ? n[1] : null;
    };
function eP(e) {
    var n, r, l, c;
    let d,
        {
            match: {
                params: { applicationId: p, section: I = eu.ApplicationDirectoryProfileSections.GENERAL }
            }
        } = e,
        f = (0, en.useApplicationDirectoryHistory)((e) => e.guildId),
        b = (0, z.Z)(),
        A = (0, m.e7)(
            [V.Z],
            () =>
                V.Z.getFetchState({
                    applicationId: p,
                    guildId: f
                }) === V.M.FETCHING
        ),
        es = a.useRef({
            applicationId: void 0,
            guildId: void 0
        }),
        { similarApplications: eT, similarLoadId: eP } = (0, m.cj)([V.Z], () => {
            let e = {
                    applicationId: p,
                    guildId: f
                },
                n = V.Z.getSimilarApplications(e);
            return (
                null == n ? (n = V.Z.getSimilarApplications(es.current)) : (es.current = e),
                {
                    similarApplications: null == n ? void 0 : n.applications,
                    similarLoadId: null == n ? void 0 : n.loadId
                }
            );
        }),
        eN = a.useMemo(() => (null == eT ? void 0 : eT.slice(0, 3)), [eT]),
        eL = (0, m.e7)([W.Z], () => W.Z.getApplicationFetchState(p)),
        [eO, ey] = a.useState(void 0),
        ej = a.useCallback(
            (e) => {
                if (null != p) {
                    if (e === eu.ApplicationDirectoryProfileSections.GENERAL) {
                        (0, et.replaceAppDirectoryURLWith)(e_.Z5c.APPLICATION_DIRECTORY_PROFILE(p));
                        return;
                    }
                    (0, et.replaceAppDirectoryURLWith)(e_.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(p, e));
                }
            },
            [p]
        ),
        eD = (0, m.e7)([B.Z], () => B.Z.isFocused()),
        eM = (0, m.e7)([M.default], () => M.default.locale),
        eZ = a.useRef(p),
        eB = (0, m.e7)([W.Z], () => {
            let e = W.Z.getApplication(p);
            return null == e ? (e = W.Z.getApplication(eZ.current)) : (eZ.current = p), e;
        }),
        ek = (0, ei.Z)({ application: eB }),
        ew = (0, m.e7)([Z.default], () => Z.default.getSessionId());
    (0, N.Tt)({ location: null == eB ? void 0 : eB.name });
    let eF = a.useCallback(async () => {
        try {
            var e;
            let n = null == eB ? void 0 : null === (e = eB.guild) || void 0 === e ? void 0 : e.id;
            if (null != n) {
                (null == eB ? void 0 : eB.id) != null &&
                    k.default.track(e_.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: eB.id,
                        guild_id: n
                    });
                let e = { page: e_.ZY5.APPLICATION_DIRECTORY };
                await (0, G.Ub)(n, e, { setsHistorySnapshot: !1 });
            }
        } catch {}
    }, [eB]);
    a.useEffect(() => {
        if (null == eB) return;
        let e = new URL(location.href);
        if (b && null != ew && 'true' === e.searchParams.get(eb)) {
            e.searchParams.delete(eb);
            let n = e.pathname + e.search;
            (0, j.dL)(n), eF();
        }
    }, [b, eF, ew, eB]);
    let eH = a.useCallback(() => {
            var e;
            null != (null == eB ? void 0 : null === (e = eB.guild) || void 0 === e ? void 0 : e.id) && (b ? eF() : (0, X.rf)({ [eb]: 'true' }));
        }, [eB, b, eF]),
        eG = a.useCallback(() => {
            (0, et.replaceAppDirectoryURLWith)(''.concat(e_.Z5c.APPLICATION_DIRECTORY_PROFILE(p)).concat(location.search));
        }, [p]);
    a.useEffect(() => {
        I === eu.ApplicationDirectoryProfileSections.GENERAL && eG();
    }, [eG, I]),
        a.useEffect(() => {
            if (null != p) {
                let e = 'true' === new URLSearchParams(location.search).get('preview') || void 0;
                Y.i6(p, { noCache: e });
            }
        }, [p]),
        a.useEffect(() => {
            if ((null == eB ? void 0 : eB.directory_entry) != null) {
                let e = eB.directory_entry,
                    n = null == e ? void 0 : e.popular_application_commands;
                null != n
                    ? ey(
                          n.map((e) =>
                              (0, T.Z8)({
                                  rootCommand: e,
                                  command: e,
                                  applicationId: e.application_id
                              })
                          )
                      )
                    : ey(void 0);
            }
        }, [eB]);
    let eU = w.ZP.getApplicationIconURL({
            id: null !== (l = null == eB ? void 0 : eB.id) && void 0 !== l ? l : '-1',
            icon: null == eB ? void 0 : eB.icon,
            size: ev
        }),
        eY = (0, R.Z)({
            id: null !== (c = null == eB ? void 0 : eB.id) && void 0 !== c ? c : '',
            label: eI.Z.Messages.COPY_ID_APPLICATION
        }),
        { canInstall: eW, install: eV } = (0, q.P)(eB, f),
        ez = null === (n = (0, en.getPreviousView)()) || void 0 === n ? void 0 : n.type;
    a.useEffect(() => {
        (null == eB ? void 0 : eB.id) != null &&
            k.default.track(e_.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: 'product',
                previous_page: ez,
                application_id: eB.id,
                guild_id: f,
                shown_mutual_guilds_count: ek.length,
                profile_section: I,
                referrer: document.referrer
            });
    }, [null == eB ? void 0 : eB.id, f, ek]);
    let eK = a.useMemo(() => {
            var e;
            let n = null == eB ? void 0 : null === (e = eB.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != n) return y.VY.filter((e) => _.e$(_.vB(n), e));
        }, [null == eB ? void 0 : null === (r = eB.install_params) || void 0 === r ? void 0 : r.permissions]),
        eq = a.useCallback(
            (e) => {
                ej(e),
                    (null == eB ? void 0 : eB.id) != null &&
                        k.default.track(e_.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: eB.id,
                            guild_id: f,
                            tab_name: e
                        });
            },
            [null == eB ? void 0 : eB.id, f, ej]
        ),
        eX = a.useMemo(() => {
            var e, n, t;
            return null !== (t = (null !== (n = null == eB ? void 0 : null === (e = eB.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== n ? n : []).map(eS).filter(H.lm)) && void 0 !== t ? t : [];
        }, [eB]),
        eJ = a.useCallback(
            (e, n) => {
                if (e.type === e_.s9s.IMG) {
                    let n = eX.filter((e) => e.type === e_.s9s.IMG),
                        a = n.findIndex((n) => n === e);
                    if (a < 0) return;
                    let r = n.map((e) => ({
                        url: (0, C.Q)(e.src),
                        original: e.src,
                        width: e.width,
                        height: e.height,
                        type: 'IMAGE'
                    }));
                    (0, h.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.resolve().then(t.bind(t, 950120));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    items: r,
                                    startingIndex: a,
                                    fit: O.D.CONTAIN,
                                    shouldHideMediaOptions: !0,
                                    shouldAnimateCarousel: !0
                                });
                        },
                        { modalKey: ep.U }
                    );
                }
            },
            [eX]
        ),
        eQ = a.useCallback(
            (e) => {
                (null == eB ? void 0 : eB.id) != null &&
                    k.default.track(e_.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        current_page: 'product',
                        category: e.name,
                        category_id: e.id,
                        application_id: eB.id,
                        guild_id: f
                    }),
                    (0, et.goToCategory)({ categoryId: e.id });
            },
            [eB, f]
        );
    a.useEffect(() => {
        if (null != p)
            Y.T4({
                applicationId: p,
                guildId: f
            });
    }, [p, f]);
    let e$ = a.useCallback(
            (e) => {
                let { application: n, mutualGuilds: t } = e;
                (null == eB ? void 0 : eB.id) != null &&
                    k.default.track(e_.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                        current_page: 'product',
                        application_id: eB.id,
                        suggested_application_id: n.id,
                        load_id: eP,
                        guild_id: f,
                        shown_mutual_guilds_count: t.length
                    }),
                    (0, et.goToApplication)({ applicationId: n.id });
            },
            [null == eB ? void 0 : eB.id, eP, f]
        ),
        e0 = a.useCallback(() => {
            null != eB &&
                (0, x.Z)(
                    (0, er.G)({
                        id: eB.id,
                        name: eB.name,
                        locale: eM
                    })
                );
        }, [eM, eB]),
        e1 = a.useCallback(
            (e) =>
                (0, i.jsxs)(h.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': eI.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
                    onClose: e,
                    onSelect: void 0,
                    children: [
                        (0, i.jsx)(h.MenuGroup, {
                            children: (0, i.jsx)(h.MenuItem, {
                                id: 'report',
                                label: eI.Z.Messages.REPORT_APP,
                                color: 'danger',
                                action: e0
                            })
                        }),
                        null != eY ? (0, i.jsx)(h.MenuGroup, { children: eY }) : null
                    ]
                }),
            [eY, e0]
        ),
        [e6, e5] = (0, E.Z)(!1, 1000),
        e3 = a.useCallback(() => {
            if (null != eB)
                k.default.track(e_.rMx.APP_SHARE_BUTTON_CLICKED, {
                    source: 'product_page',
                    application_id: eB.id,
                    guild_id: f
                }),
                    (0, F.JG)(ex(eB.id)),
                    e5(!0);
        }, [eB, e5, f]);
    a.useEffect(() => {
        let e = new URL(location.href);
        if (b && 'true' === e.searchParams.get(eE)) {
            e.searchParams.delete(eE);
            let n = e.pathname + e.search;
            (0, j.dL)(n), eV('product_page');
        }
    }, [b, eV]);
    let e8 = a.useCallback(() => {
            if (null != eB) {
                if ((u.tq || u.Em) && null == eB.custom_install_url) {
                    let e = (0, U.Er)({
                        applicationId: eB.id,
                        customInstallUrl: eB.custom_install_url,
                        installParams: eB.install_params,
                        integrationTypesConfig: eB.integration_types_config
                    });
                    if (null != e) {
                        window.open(e, '_blank');
                        return;
                    }
                }
                b
                    ? eV('product_page')
                    : (k.default.track(e_.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                          application_id: p,
                          guild_id: f,
                          auth_type: null != eB.custom_install_url ? 'custom_url' : 'in_app',
                          source: 'product_page',
                          device_platform: u.tq ? 'mobile_web' : 'desktop_web'
                      }),
                      (0, X.rf)({ [eE]: 'true' }));
            }
        }, [eB, b, eV, p, f]),
        e9 = (null == eB ? void 0 : eB.id) === em.g,
        [e2, e4] = a.useState(!1),
        [e7, ne] = a.useState(!1),
        [nn, nt] = a.useState(!0),
        ni = (e) => {
            null != e && e4(e.scrollHeight > e.clientHeight);
        },
        na = null != eK && eK.length > 0,
        nr = (null == eB ? void 0 : eB.flags) != null,
        no = (0, P.R)(null != p ? p : '');
    a.useEffect(() => {
        no && null != p && (0, S.Z)(p);
    }, [no, p]);
    let nl = a.useMemo(() => {
            let e = [],
                n = !0;
            switch (I) {
                case eu.ApplicationDirectoryProfileSections.GENERAL: {
                    var t, a;
                    let r = null == eB ? void 0 : null === (t = eB.directory_entry) || void 0 === t ? void 0 : t.detailed_description;
                    null != r && r.length > 0
                        ? (e.push(
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(h.Heading, {
                                          className: ef.sectionHeader,
                                          variant: 'heading-md/semibold',
                                          children: eI.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                      }),
                                      (0, i.jsx)('div', {
                                          ref: ni,
                                          className: o()({
                                              [ef.descriptionClamp]: !e7,
                                              [ef.descriptionClampSafari]: !e7 && 'Safari' === s().name
                                          }),
                                          children: (0, i.jsx)(L.Z, {
                                              className: ef.detailedDescription,
                                              parser: eg,
                                              output: eC,
                                              state: { allowLinks: !0 },
                                              children: r
                                          })
                                      }),
                                      (e2 || e7) &&
                                          (0, i.jsx)(eA, {
                                              isViewAll: e7,
                                              onToggle: () => {
                                                  ne((e) => !e);
                                              }
                                          })
                                  ]
                              })
                          ),
                          (n = !1))
                        : (null == eB ? void 0 : null === (a = eB.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0
                          ? e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: eI.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                        }),
                                        (0, i.jsx)('span', { children: eB.directory_entry.short_description })
                                    ]
                                })
                            )
                          : (null == eB ? void 0 : eB.description) != null &&
                            e.push(
                                (0, i.jsx)(D.Z, {
                                    className: ef.description,
                                    userBio: eB.description
                                })
                            ),
                        null != eO &&
                            eO.length > 0 &&
                            (e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: eI.Z.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
                                        }),
                                        (0, i.jsx)(eo.Z, {
                                            className: ef.commandList,
                                            commands: eO
                                        })
                                    ]
                                })
                            ),
                            (n = !0));
                    break;
                }
                case eu.ApplicationDirectoryProfileSections.IMAGES: {
                    if (0 === eX.length) break;
                    let n = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                className: ef.errorImage,
                                src: eh,
                                'aria-hidden': !0,
                                alt: ''
                            }),
                            (0, i.jsx)(h.Heading, {
                                variant: 'heading-xl/semibold',
                                children: eI.Z.Messages.ERRORS_IMAGE_NOT_FOUND
                            })
                        ]
                    });
                    eX.forEach((e, n) => {
                        null != eB
                            ? (e.alt = eI.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
                                  index: n + 1,
                                  totalImages: eX.length,
                                  name: eB.name
                              }))
                            : (e.alt = eI.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
                    }),
                        e.push(
                            (0, i.jsx)(v.Z, {
                                className: ef.carousel,
                                themedPagination: !0,
                                items: eX,
                                autoplayInterval: 8000,
                                paused: !eD,
                                videoAutoPlay: !0,
                                onCurrentItemClick: eJ,
                                errorComponent: n,
                                onImageLoad: (e) => {
                                    let { src: n, loadTimeMs: t } = e;
                                    null != t &&
                                        null != eB &&
                                        k.default.track(e_.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                                            application_id: eB.id,
                                            load_time_ms: t,
                                            src: n
                                        });
                                }
                            })
                        );
                    break;
                }
                case eu.ApplicationDirectoryProfileSections.STORE:
                    no && null != p && e.push((0, i.jsx)(ea.M, { appId: p }));
                    break;
                case eu.ApplicationDirectoryProfileSections.PRIVACY:
                    na &&
                        e.push(
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(h.Heading, {
                                        className: ef.sectionHeader,
                                        variant: 'heading-md/semibold',
                                        children: eI.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
                                    }),
                                    (0, i.jsx)(g.Z, {
                                        className: ef.commandList,
                                        grantedPermissions: eK,
                                        grantedPermissionsHeader: eI.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
                                    })
                                ]
                            })
                        ),
                        nr &&
                            e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: eI.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
                                        }),
                                        (0, i.jsx)(el.Z, { application: eB })
                                    ]
                                })
                            );
            }
            return (
                nt(n),
                0 === e.length && I !== eu.ApplicationDirectoryProfileSections.GENERAL && null != eB && eG(),
                e.map((e, n) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: ef.section,
                            children: e
                        },
                        n
                    )
                )
            );
        }, [I, eG, eB, eO, e7, e2, eX, eD, eJ, no, p, na, nr, eK]),
        ns = a.useMemo(() => {
            let e = [
                {
                    name: eu.ApplicationDirectoryProfileSections.GENERAL,
                    text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
                    Icon: h.AppsIcon
                }
            ];
            return (
                eX.length > 0 &&
                    e.push({
                        name: eu.ApplicationDirectoryProfileSections.IMAGES,
                        text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
                        Icon: h.ImagesIcon
                    }),
                no &&
                    e.push({
                        name: eu.ApplicationDirectoryProfileSections.STORE,
                        text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
                        Icon: h.ShopSparkleIcon
                    }),
                (na || nr) &&
                    e.push({
                        name: eu.ApplicationDirectoryProfileSections.PRIVACY,
                        text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
                        Icon: h.PrivacyAndSafetyIcon
                    }),
                e
            );
        }, [eX.length, na, nr, no]);
    return (
        (d =
            null == eB
                ? null == eL || eL === W.M.FETCHING
                    ? (0, i.jsx)($.Z, { loading: eL === W.M.FETCHING })
                    : (0, i.jsx)('div', {
                          className: ef.__invalid_page,
                          children: (0, i.jsxs)('div', {
                              className: ef.emptyContainer,
                              children: [
                                  (0, i.jsx)('img', {
                                      className: ef.emptyImage,
                                      src: eh,
                                      alt: ''
                                  }),
                                  (0, i.jsx)(h.Heading, {
                                      variant: 'heading-xl/semibold',
                                      children: eI.Z.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
                                  })
                              ]
                          })
                      })
                : (0, i.jsxs)($.Z, {
                      loading: eL === W.M.FETCHING,
                      children: [
                          (0, i.jsx)(eR, {
                              app: eB,
                              iconSrc: eU
                          }),
                          (0, i.jsxs)('div', {
                              className: ef.__invalid_page,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: ef.header,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: ef.headerSidebar,
                                              children: [
                                                  (0, i.jsx)('img', {
                                                      className: ef.headerIcon,
                                                      alt: '',
                                                      'aria-hidden': !0,
                                                      src: eU,
                                                      width: ev,
                                                      height: ev
                                                  }),
                                                  (0, i.jsx)(Q.Z, {
                                                      application: eB,
                                                      mutualGuilds: ek,
                                                      mutualGuildShownMax: 3,
                                                      compact: !0
                                                  })
                                              ]
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: ef.headerContent,
                                              children: [
                                                  (0, i.jsxs)('div', {
                                                      className: ef.headerNameAndButtons,
                                                      children: [
                                                          (0, i.jsxs)('div', {
                                                              className: ef.headerNameAndIcon,
                                                              children: [
                                                                  (0, i.jsx)(h.Heading, {
                                                                      className: ef.name,
                                                                      variant: 'heading-xxl/semibold',
                                                                      children: eB.name
                                                                  }),
                                                                  no &&
                                                                      (0, i.jsx)(h.Tooltip, {
                                                                          tooltipClassName: ef.premiumIconTooltip,
                                                                          text: eI.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                          children: (e) =>
                                                                              (0, i.jsx)('img', {
                                                                                  ...e,
                                                                                  alt: eI.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                                  className: ef.premiumIcon,
                                                                                  src: t(744050)
                                                                              })
                                                                      }),
                                                                  e9 && (0, i.jsx)(ee.Z, { className: ef.partnerBadge })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: ef.buttons,
                                                              children: [
                                                                  (0, i.jsx)(h.Button, {
                                                                      onClick: e3,
                                                                      color: h.Button.Colors.PRIMARY,
                                                                      children: e6 ? eI.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : eI.Z.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(h.Button, {
                                                                      color: h.Button.Colors.BRAND,
                                                                      onClick: e8,
                                                                      disabled: !eW,
                                                                      children: eI.Z.Messages.APPLICATION_ADD_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(h.Popout, {
                                                                      renderPopout: (e) => {
                                                                          let { closePopout: n } = e;
                                                                          return e1(n);
                                                                      },
                                                                      position: 'left',
                                                                      align: 'top',
                                                                      animation: h.Popout.Animation.NONE,
                                                                      children: (e) =>
                                                                          (0, i.jsx)(h.Clickable, {
                                                                              className: ef.overflow,
                                                                              ...e,
                                                                              children: (0, i.jsx)(h.MoreHorizontalIcon, {
                                                                                  size: 'custom',
                                                                                  color: 'currentColor',
                                                                                  width: 20,
                                                                                  height: 20,
                                                                                  className: ef.iconInteractive
                                                                              })
                                                                          })
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  }),
                                                  (0, i.jsx)(ed.Z, {
                                                      activeSection: I,
                                                      setSection: eq,
                                                      sections: ns
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: ef.contentContainer,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: ef.content,
                                              children: [
                                                  nl,
                                                  null != eN && eN.length > 0
                                                      ? (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                nn && (0, i.jsx)('div', { className: ef.separator }),
                                                                (0, i.jsxs)('div', {
                                                                    className: ef.section,
                                                                    children: [
                                                                        (0, i.jsx)(h.Heading, {
                                                                            className: ef.relatedHeader,
                                                                            variant: 'eyebrow',
                                                                            children: eI.Z.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
                                                                        }),
                                                                        (0, i.jsx)($.Z, {
                                                                            loading: A,
                                                                            children: (0, i.jsx)(J.Z, {
                                                                                applications: eN,
                                                                                onViewOne: e$
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                      : null
                                              ]
                                          }),
                                          (0, i.jsx)(ec.Z, {
                                              className: ef.sidebar,
                                              application: eB,
                                              guildId: f,
                                              onViewCategory: eQ,
                                              onClickGuildWidget: eH
                                          })
                                      ]
                                  })
                              ]
                          })
                      ]
                  })),
        (0, i.jsx)(K.Z, { children: d })
    );
}
function eS(e) {
    switch (e.type) {
        case b.ee.MEDIA_PROXY:
            var n;
            let t = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return {
                type: e_.s9s.IMG,
                width: 0,
                height: 0,
                src: t
            };
        case b.ee.YOUTUBE:
            let i = eT(e.url);
            if (null != i)
                return {
                    type: e_.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: i
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
let eA = (e) => {
        let n,
            { onToggle: t, isViewAll: a } = e;
        return (
            (n = a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.Text, {
                              className: ef.showMoreButtonText,
                              variant: 'eyebrow',
                              children: eI.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
                          }),
                          (0, i.jsx)(h.ChevronSmallUpIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: ef.showMoreButtonIcon
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.Text, {
                              className: ef.showMoreButtonText,
                              variant: 'eyebrow',
                              children: eI.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
                          }),
                          (0, i.jsx)(h.ChevronSmallDownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: ef.showMoreButtonIcon
                          })
                      ]
                  })),
            (0, i.jsx)(eN, {
                children: (0, i.jsx)(h.Button, {
                    look: h.Button.Looks.BLANK,
                    color: h.Button.Colors.TRANSPARENT,
                    size: h.Button.Sizes.NONE,
                    className: ef.showMoreButton,
                    innerClassName: ef.showMoreButtonInner,
                    onClick: t,
                    children: n
                })
            })
        );
    },
    eN = (e) => {
        let { className: n, contentClassName: t, children: a } = e;
        return (0, i.jsxs)('div', {
            className: o()([ef.dividerContainer, n]),
            children: [
                (0, i.jsx)('div', { className: ef.divider }),
                null != a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: o()(ef.contentDivider, t),
                                  children: a
                              }),
                              (0, i.jsx)('div', { className: ef.divider })
                          ]
                      })
                    : null
            ]
        });
    };
function eR(e) {
    let { app: n, iconSrc: t } = e,
        r = (0, A.ZP)(t, I.Z.unsafe_rawColors.PRIMARY_800.css),
        { bot: o } = n,
        l = a.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != o) {
                let n = (0, w.aN)({
                    id: o.id,
                    banner: o.banner,
                    size: 1024,
                    canAnimate: !1
                });
                null != n && ((e['--custom-background-static'] = 'url('.concat(n)), (e.height = 'auto'));
                let t = (0, w.xR)(o.banner)
                    ? (0, w.aN)({
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
        style: l,
        className: ef.headerBanner,
        'data-has-animated': '--custom-background-animated' in l
    });
}
