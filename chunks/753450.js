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
    v = t(9807),
    E = t(911969),
    b = t(330726),
    x = t(782568),
    A = t(607070),
    P = t(581364),
    T = t(970321),
    R = t(283836),
    N = t(220082),
    S = t(252618),
    L = t(299206),
    O = t(241209),
    j = t(422559),
    y = t(270144),
    D = t(864843),
    Z = t(703656),
    M = t(280885),
    B = t(706454),
    k = t(314897),
    w = t(451478),
    G = t(626135),
    H = t(768581),
    F = t(572004),
    U = t(823379),
    Y = t(900849),
    W = t(674588),
    V = t(264043),
    z = t(303383),
    K = t(887706),
    q = t(738130),
    J = t(4461),
    Q = t(34674),
    X = t(576958),
    $ = t(924489),
    ee = t(125909),
    en = t(409425),
    et = t(132871),
    ei = t(147890),
    ea = t(491576),
    er = t(527564),
    eo = t(326135),
    es = t(940064),
    el = t(626004),
    ec = t(939893),
    ed = t(430913),
    eu = t(606183),
    e_ = t(272242),
    ep = t(981631),
    em = t(558921),
    eI = t(689938),
    ef = t(364658),
    eg = t(902294);
let eh = d().parserFor(ec.Z),
    eC = d().reactFor(d().ruleOutput(ec.Z, 'react')),
    ev = (0, p.Mg)(f.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
    eE = 'redirect_to_support_server',
    eb = 'start_application_install',
    ex = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
    eA = (e) => {
        if (null == e) return null;
        let n = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
        return null != n ? n[1] : null;
    };
function eP(e) {
    var n, r, s, c;
    let d,
        {
            match: {
                params: { applicationId: p, section: I = e_.ApplicationDirectoryProfileSections.GENERAL }
            }
        } = e,
        f = (0, et.useApplicationDirectoryHistory)((e) => e.guildId),
        E = (0, K.Z)(),
        A = (0, m.e7)(
            [z.Z],
            () =>
                z.Z.getFetchState({
                    applicationId: p,
                    guildId: f
                }) === z.M.FETCHING
        ),
        N = a.useRef({
            applicationId: void 0,
            guildId: void 0
        }),
        { similarApplications: ec, similarLoadId: eA } = (0, m.cj)([z.Z], () => {
            let e = {
                    applicationId: p,
                    guildId: f
                },
                n = z.Z.getSimilarApplications(e);
            return (
                null == n ? (n = z.Z.getSimilarApplications(N.current)) : (N.current = e),
                {
                    similarApplications: null == n ? void 0 : n.applications,
                    similarLoadId: null == n ? void 0 : n.loadId
                }
            );
        }),
        eP = a.useMemo(() => (null == ec ? void 0 : ec.slice(0, 3)), [ec]),
        eN = (0, m.e7)([V.Z], () => V.Z.getApplicationFetchState(p)),
        [eL, eO] = a.useState(void 0),
        ej = a.useCallback(
            (e) => {
                if (null != p) {
                    if (e === e_.ApplicationDirectoryProfileSections.GENERAL) {
                        (0, ei.replaceAppDirectoryURLWith)(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(p));
                        return;
                    }
                    (0, ei.replaceAppDirectoryURLWith)(ep.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(p, e));
                }
            },
            [p]
        ),
        ey = (0, m.e7)([w.Z], () => w.Z.isFocused()),
        eD = (0, m.e7)([B.default], () => B.default.locale),
        eZ = a.useRef(p),
        eM = (0, m.e7)([V.Z], () => {
            let e = V.Z.getApplication(p);
            return null == e ? (e = V.Z.getApplication(eZ.current)) : (eZ.current = p), e;
        }),
        eB = (0, ea.Z)({ application: eM }),
        ek = (0, m.e7)([k.default], () => k.default.getSessionId());
    (0, S.Tt)({ location: null == eM ? void 0 : eM.name });
    let ew = a.useCallback(async () => {
        try {
            var e;
            let n = null == eM ? void 0 : null === (e = eM.guild) || void 0 === e ? void 0 : e.id;
            if (null != n) {
                (null == eM ? void 0 : eM.id) != null &&
                    G.default.track(ep.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: eM.id,
                        guild_id: n
                    });
                let e = { page: ep.ZY5.APPLICATION_DIRECTORY };
                await (0, Y.Ub)(n, e, { setsHistorySnapshot: !1 });
            }
        } catch {}
    }, [eM]);
    a.useEffect(() => {
        if (null == eM) return;
        let e = new URL(location.href);
        if (E && null != ek && 'true' === e.searchParams.get(eE)) {
            e.searchParams.delete(eE);
            let n = e.pathname + e.search;
            (0, Z.dL)(n), ew();
        }
    }, [E, ew, ek, eM]);
    let eG = a.useCallback(() => {
            var e;
            null != (null == eM ? void 0 : null === (e = eM.guild) || void 0 === e ? void 0 : e.id) && (E ? ew() : (0, Q.rf)({ [eE]: 'true' }));
        }, [eM, E, ew]),
        eH = a.useCallback(() => {
            (0, ei.replaceAppDirectoryURLWith)(''.concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(p)).concat(location.search));
        }, [p]);
    a.useEffect(() => {
        I === e_.ApplicationDirectoryProfileSections.GENERAL && eH();
    }, [eH, I]),
        a.useEffect(() => {
            null != p && W.i6(p);
        }, [p]),
        a.useEffect(() => {
            if ((null == eM ? void 0 : eM.directory_entry) != null) {
                let e = eM.directory_entry,
                    n = null == e ? void 0 : e.popular_application_commands;
                null != n
                    ? eO(
                          n.map((e) =>
                              (0, P.Z8)({
                                  rootCommand: e,
                                  command: e,
                                  applicationId: e.application_id
                              })
                          )
                      )
                    : eO(void 0);
            }
        }, [eM]);
    let eF = H.ZP.getApplicationIconURL({
            id: null !== (s = null == eM ? void 0 : eM.id) && void 0 !== s ? s : '-1',
            icon: null == eM ? void 0 : eM.icon,
            size: ev
        }),
        eU = (0, L.Z)({
            id: null !== (c = null == eM ? void 0 : eM.id) && void 0 !== c ? c : '',
            label: eI.Z.Messages.COPY_ID_APPLICATION
        }),
        { canInstall: eY, install: eW } = (0, J.P)(eM, f),
        eV = null === (n = (0, et.getPreviousView)()) || void 0 === n ? void 0 : n.type;
    a.useEffect(() => {
        (null == eM ? void 0 : eM.id) != null &&
            G.default.track(ep.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: 'product',
                previous_page: eV,
                application_id: eM.id,
                guild_id: f,
                shown_mutual_guilds_count: eB.length,
                profile_section: I,
                referrer: document.referrer
            });
    }, [null == eM ? void 0 : eM.id, f, eB]);
    let ez = a.useMemo(() => {
            var e;
            let n = null == eM ? void 0 : null === (e = eM.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != n) return j.VY.filter((e) => _.e$(_.vB(n), e));
        }, [null == eM ? void 0 : null === (r = eM.install_params) || void 0 === r ? void 0 : r.permissions]),
        eK = a.useCallback(
            (e) => {
                ej(e),
                    (null == eM ? void 0 : eM.id) != null &&
                        G.default.track(ep.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: eM.id,
                            guild_id: f,
                            tab_name: e
                        });
            },
            [null == eM ? void 0 : eM.id, f, ej]
        ),
        eq = a.useMemo(() => {
            var e, n, t;
            return null !== (t = (null !== (n = null == eM ? void 0 : null === (e = eM.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== n ? n : []).map(eT).filter(U.lm)) && void 0 !== t ? t : [];
        }, [eM]),
        eJ = a.useCallback(
            (e, n) => {
                if (e.type === ep.s9s.IMG) {
                    let n = eq.filter((e) => e.type === ep.s9s.IMG),
                        a = n.findIndex((n) => n === e);
                    if (a < 0) return;
                    let r = n.map((e) => ({
                        src: (0, C.Q)(e.src),
                        width: e.width,
                        height: e.height
                    }));
                    (0, g.openModalLazy)(async () => {
                        let { default: e } = await t.e('41814').then(t.bind(t, 895023));
                        return (n) => {
                            let { ...t } = n;
                            return (0, i.jsx)(e, {
                                ...t,
                                items: r,
                                startingIndex: a,
                                modalCarouselItemClassName: ef.appSlide
                            });
                        };
                    });
                }
            },
            [eq]
        ),
        eQ = a.useCallback(
            (e) => {
                (null == eM ? void 0 : eM.id) != null &&
                    G.default.track(ep.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        current_page: 'product',
                        category: e.name,
                        category_id: e.id,
                        application_id: eM.id,
                        guild_id: f
                    }),
                    (0, ei.goToCategory)({ categoryId: e.id });
            },
            [eM, f]
        );
    a.useEffect(() => {
        if (null != p)
            W.T4({
                applicationId: p,
                guildId: f
            });
    }, [p, f]);
    let eX = a.useCallback(
            (e) => {
                let { application: n, mutualGuilds: t } = e;
                (null == eM ? void 0 : eM.id) != null &&
                    G.default.track(ep.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                        current_page: 'product',
                        application_id: eM.id,
                        suggested_application_id: n.id,
                        load_id: eA,
                        guild_id: f,
                        shown_mutual_guilds_count: t.length
                    }),
                    (0, ei.goToApplication)({ applicationId: n.id });
            },
            [null == eM ? void 0 : eM.id, eA, f]
        ),
        e$ = a.useCallback(() => {
            null != eM &&
                (0, x.Z)(
                    (0, eo.G)({
                        id: eM.id,
                        name: eM.name,
                        locale: eD
                    })
                );
        }, [eD, eM]),
        e0 = a.useCallback(
            (e) =>
                (0, i.jsxs)(g.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': eI.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
                    onClose: e,
                    onSelect: void 0,
                    children: [
                        (0, i.jsx)(g.MenuGroup, {
                            children: (0, i.jsx)(g.MenuItem, {
                                id: 'report',
                                label: eI.Z.Messages.REPORT_APP,
                                color: 'danger',
                                action: e$
                            })
                        }),
                        null != eU ? (0, i.jsx)(g.MenuGroup, { children: eU }) : null
                    ]
                }),
            [eU, e$]
        ),
        [e1, e6] = (0, b.Z)(!1, 1000),
        e8 = a.useCallback(() => {
            if (null != eM)
                G.default.track(ep.rMx.APP_SHARE_BUTTON_CLICKED, {
                    source: 'product_page',
                    application_id: eM.id,
                    guild_id: f
                }),
                    (0, F.JG)(ex(eM.id)),
                    e6(!0);
        }, [eM, e6, f]);
    a.useEffect(() => {
        let e = new URL(location.href);
        if (E && 'true' === e.searchParams.get(eb)) {
            e.searchParams.delete(eb);
            let n = e.pathname + e.search;
            (0, Z.dL)(n), eW('product_page');
        }
    }, [E, eW]);
    let e5 = a.useCallback(() => {
            null != eM &&
                (E
                    ? eW('product_page')
                    : (G.default.track(ep.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                          application_id: p,
                          guild_id: f,
                          auth_type: null != eM.custom_install_url ? 'custom_url' : 'in_app',
                          source: 'product_page',
                          device_platform: u.tq ? 'mobile_web' : 'desktop_web'
                      }),
                      (0, Q.rf)({ [eb]: 'true' })));
        }, [eM, E, eW, p, f]),
        { applicationSubscriptionListingsShown: e3 } = (0, y.ZP)({
            applicationId: null == eM ? void 0 : eM.id,
            groupListingId: null == eM ? void 0 : eM.primary_sku_id,
            guildId: f
        }),
        e2 = (null == eM ? void 0 : eM.id) === em.g,
        [e4, e9] = a.useState(!1),
        [e7, ne] = a.useState(!1),
        [nn, nt] = a.useState(!0),
        ni = (e) => {
            null != e && e9(e.scrollHeight > e.clientHeight);
        },
        na = null != ez && ez.length > 0,
        nr = (null == eM ? void 0 : eM.flags) != null,
        no = (0, T.R)(null != p ? p : '');
    a.useEffect(() => {
        no && null != p && (0, R.Z)(p);
    }, [no, p]);
    let ns = a.useMemo(() => {
            let e = [],
                n = !0;
            switch (I) {
                case e_.ApplicationDirectoryProfileSections.GENERAL: {
                    var t, a;
                    let r = null == eM ? void 0 : null === (t = eM.directory_entry) || void 0 === t ? void 0 : t.detailed_description;
                    null != r && r.length > 0
                        ? (e.push(
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(g.Heading, {
                                          className: ef.sectionHeader,
                                          variant: 'heading-md/semibold',
                                          children: eI.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                      }),
                                      (0, i.jsx)('div', {
                                          ref: ni,
                                          className: o()({
                                              [ef.descriptionClamp]: !e7,
                                              [ef.descriptionClampSafari]: !e7 && 'Safari' === l().name
                                          }),
                                          children: (0, i.jsx)(O.Z, {
                                              className: ef.detailedDescription,
                                              parser: eh,
                                              output: eC,
                                              state: { allowLinks: !0 },
                                              children: r
                                          })
                                      }),
                                      (e4 || e7) &&
                                          (0, i.jsx)(eR, {
                                              isViewAll: e7,
                                              onToggle: () => {
                                                  ne((e) => !e);
                                              }
                                          })
                                  ]
                              })
                          ),
                          (n = !1))
                        : (null == eM ? void 0 : null === (a = eM.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0
                          ? e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: eI.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                        }),
                                        (0, i.jsx)('span', { children: eM.directory_entry.short_description })
                                    ]
                                })
                            )
                          : (null == eM ? void 0 : eM.description) != null &&
                            e.push(
                                (0, i.jsx)(M.Z, {
                                    className: ef.description,
                                    userBio: eM.description
                                })
                            ),
                        null != eL &&
                            eL.length > 0 &&
                            (e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: eI.Z.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
                                        }),
                                        (0, i.jsx)(es.Z, {
                                            className: ef.commandList,
                                            commands: eL
                                        })
                                    ]
                                })
                            ),
                            (n = !0));
                    break;
                }
                case e_.ApplicationDirectoryProfileSections.IMAGES: {
                    if (0 === eq.length) break;
                    let n = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                className: ef.errorImage,
                                src: eg,
                                'aria-hidden': !0,
                                alt: ''
                            }),
                            (0, i.jsx)(g.Heading, {
                                variant: 'heading-xl/semibold',
                                children: eI.Z.Messages.ERRORS_IMAGE_NOT_FOUND
                            })
                        ]
                    });
                    eq.forEach((e, n) => {
                        null != eM
                            ? (e.alt = eI.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
                                  index: n + 1,
                                  totalImages: eq.length,
                                  name: eM.name
                              }))
                            : (e.alt = eI.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
                    }),
                        e.push(
                            (0, i.jsx)(v.Z, {
                                className: ef.carousel,
                                themedPagination: !0,
                                items: eq,
                                autoplayInterval: 8000,
                                paused: !ey,
                                videoAutoPlay: !0,
                                onCurrentItemClick: eJ,
                                errorComponent: n,
                                onImageLoad: (e) => {
                                    let { src: n, loadTimeMs: t } = e;
                                    null != t &&
                                        null != eM &&
                                        G.default.track(ep.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                                            application_id: eM.id,
                                            load_time_ms: t,
                                            src: n
                                        });
                                }
                            })
                        );
                    break;
                }
                case e_.ApplicationDirectoryProfileSections.STORE:
                    no &&
                        null != p &&
                        e.push(
                            (0, i.jsx)(er.M, {
                                appId: p,
                                guildId: null != f ? f : void 0
                            })
                        );
                    break;
                case e_.ApplicationDirectoryProfileSections.PREMIUM:
                    e3 &&
                        (null == eM ? void 0 : eM.primary_sku_id) != null &&
                        e.push(
                            (0, i.jsx)(D.Z, {
                                applicationId: eM.id,
                                applicationPrimarySkuId: null == eM ? void 0 : eM.primary_sku_id,
                                analyticsLocation: ep.Sbl.APP_DIRECTORY_PROFILE,
                                forcesTransitionToGuild: !0
                            })
                        );
                    break;
                case e_.ApplicationDirectoryProfileSections.PRIVACY:
                    na &&
                        e.push(
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(g.Heading, {
                                        className: ef.sectionHeader,
                                        variant: 'heading-md/semibold',
                                        children: eI.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
                                    }),
                                    (0, i.jsx)(h.Z, {
                                        className: ef.commandList,
                                        grantedPermissions: ez,
                                        grantedPermissionsHeader: eI.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
                                    })
                                ]
                            })
                        ),
                        nr &&
                            e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: eI.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
                                        }),
                                        (0, i.jsx)(el.Z, { application: eM })
                                    ]
                                })
                            );
            }
            return (
                nt(n),
                0 === e.length && I !== e_.ApplicationDirectoryProfileSections.GENERAL && null != eM && eH(),
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
        }, [I, eH, eM, eL, e7, e4, eq, ey, eJ, no, p, f, e3, na, nr, ez]),
        nl = a.useMemo(() => {
            let e = [
                {
                    name: e_.ApplicationDirectoryProfileSections.GENERAL,
                    text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
                    Icon: g.AppsIcon
                }
            ];
            return (
                eq.length > 0 &&
                    e.push({
                        name: e_.ApplicationDirectoryProfileSections.IMAGES,
                        text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
                        Icon: g.ImagesIcon
                    }),
                no &&
                    e.push({
                        name: e_.ApplicationDirectoryProfileSections.STORE,
                        text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
                        Icon: g.ShopSparkleIcon
                    }),
                e3 &&
                    !no &&
                    e.push({
                        name: e_.ApplicationDirectoryProfileSections.PREMIUM,
                        text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM,
                        Icon: g.ShopSparkleIcon
                    }),
                (na || nr) &&
                    e.push({
                        name: e_.ApplicationDirectoryProfileSections.PRIVACY,
                        text: eI.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
                        Icon: g.PrivacyAndSafetyIcon
                    }),
                e
            );
        }, [eq.length, e3, na, nr, no]);
    return (
        (d =
            null == eM
                ? null == eN || eN === V.M.FETCHING
                    ? (0, i.jsx)(ee.Z, { loading: eN === V.M.FETCHING })
                    : (0, i.jsx)('div', {
                          className: ef.__invalid_page,
                          children: (0, i.jsxs)('div', {
                              className: ef.emptyContainer,
                              children: [
                                  (0, i.jsx)('img', {
                                      className: ef.emptyImage,
                                      src: eg,
                                      alt: ''
                                  }),
                                  (0, i.jsx)(g.Heading, {
                                      variant: 'heading-xl/semibold',
                                      children: eI.Z.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
                                  })
                              ]
                          })
                      })
                : (0, i.jsxs)(ee.Z, {
                      loading: eN === V.M.FETCHING,
                      children: [
                          (0, i.jsx)(eS, {
                              app: eM,
                              iconSrc: eF
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
                                                      src: eF,
                                                      width: ev,
                                                      height: ev
                                                  }),
                                                  (0, i.jsx)($.Z, {
                                                      application: eM,
                                                      mutualGuilds: eB,
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
                                                                  (0, i.jsx)(g.Heading, {
                                                                      className: ef.name,
                                                                      variant: 'heading-xxl/semibold',
                                                                      children: eM.name
                                                                  }),
                                                                  (no || e3) &&
                                                                      (0, i.jsx)(g.Tooltip, {
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
                                                                  e2 && (0, i.jsx)(en.Z, { className: ef.partnerBadge })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: ef.buttons,
                                                              children: [
                                                                  (0, i.jsx)(g.Button, {
                                                                      onClick: e8,
                                                                      color: g.Button.Colors.PRIMARY,
                                                                      children: e1 ? eI.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : eI.Z.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(g.Button, {
                                                                      color: g.Button.Colors.BRAND,
                                                                      onClick: e5,
                                                                      disabled: !eY,
                                                                      children: eI.Z.Messages.APPLICATION_ADD_BUTTON
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
                                                                              className: ef.overflow,
                                                                              ...e,
                                                                              children: (0, i.jsx)(g.MoreHorizontalIcon, {
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
                                                  (0, i.jsx)(eu.Z, {
                                                      activeSection: I,
                                                      setSection: eK,
                                                      sections: nl
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
                                                  ns,
                                                  null != eP && eP.length > 0
                                                      ? (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                nn && (0, i.jsx)('div', { className: ef.separator }),
                                                                (0, i.jsxs)('div', {
                                                                    className: ef.section,
                                                                    children: [
                                                                        (0, i.jsx)(g.Heading, {
                                                                            className: ef.relatedHeader,
                                                                            variant: 'eyebrow',
                                                                            children: eI.Z.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
                                                                        }),
                                                                        (0, i.jsx)(ee.Z, {
                                                                            loading: A,
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
                                          (0, i.jsx)(ed.Z, {
                                              className: ef.sidebar,
                                              application: eM,
                                              guildId: f,
                                              onViewCategory: eQ,
                                              onClickGuildWidget: eG
                                          })
                                      ]
                                  })
                              ]
                          })
                      ]
                  })),
        (0, i.jsx)(q.Z, { children: d })
    );
}
function eT(e) {
    switch (e.type) {
        case E.ee.MEDIA_PROXY:
            var n;
            let t = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return {
                type: ep.s9s.IMG,
                width: 0,
                height: 0,
                src: t
            };
        case E.ee.YOUTUBE:
            let i = eA(e.url);
            if (null != i)
                return {
                    type: ep.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: i
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
let eR = (e) => {
        let n,
            { onToggle: t, isViewAll: a } = e;
        return (
            (n = a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.Text, {
                              className: ef.showMoreButtonText,
                              variant: 'eyebrow',
                              children: eI.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
                          }),
                          (0, i.jsx)(g.ChevronSmallUpIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: ef.showMoreButtonIcon
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.Text, {
                              className: ef.showMoreButtonText,
                              variant: 'eyebrow',
                              children: eI.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
                          }),
                          (0, i.jsx)(g.ChevronSmallDownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: ef.showMoreButtonIcon
                          })
                      ]
                  })),
            (0, i.jsx)(eN, {
                children: (0, i.jsx)(g.Button, {
                    look: g.Button.Looks.BLANK,
                    color: g.Button.Colors.TRANSPARENT,
                    size: g.Button.Sizes.NONE,
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
function eS(e) {
    let { app: n, iconSrc: t } = e,
        r = (0, N.ZP)(t, I.Z.unsafe_rawColors.PRIMARY_800.css),
        { bot: o } = n,
        s = (0, m.e7)([A.Z], () => A.Z.useReducedMotion),
        l = a.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != o) {
                let n = (0, H.aN)({
                    id: o.id,
                    banner: o.banner,
                    size: 1024,
                    canAnimate: !1
                });
                if ((null != n && ((e['--custom-background-static'] = 'url('.concat(n)), (e.height = '212px')), !s)) {
                    let n = (0, H.aN)({
                        id: o.id,
                        banner: o.banner,
                        size: 1024,
                        canAnimate: !0
                    });
                    null != n && (e['--custom-background-animated'] = 'url('.concat(n));
                }
            }
            return e;
        }, [r, o, s]);
    return (0, i.jsx)('div', {
        style: l,
        className: ef.headerBanner
    });
}
