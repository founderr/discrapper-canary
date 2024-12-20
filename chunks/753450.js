n.r(t),
    n.d(t, {
        default: function () {
            return eS;
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
var i = n(200651),
    a = n(192379),
    r = n(120356),
    o = n.n(r),
    l = n(525654),
    s = n.n(l),
    c = n(477660),
    d = n.n(c),
    u = n(873546),
    p = n(149765),
    m = n(468194),
    _ = n(442837),
    f = n(692547),
    h = n(477690),
    g = n(481060),
    I = n(995648),
    v = n(445986),
    x = n(9807),
    b = n(330726),
    C = n(782568),
    S = n(581364),
    N = n(970321),
    j = n(283836),
    T = n(220082),
    y = n(252618),
    P = n(299206),
    E = n(241209),
    A = n(341176),
    L = n(312097),
    R = n(422559),
    k = n(703656),
    B = n(280885),
    O = n(706454),
    Z = n(314897),
    w = n(451478),
    D = n(626135),
    H = n(768581),
    M = n(572004),
    F = n(823379),
    U = n(900849),
    G = n(135431),
    z = n(674588),
    V = n(264043),
    W = n(303383),
    Y = n(887706),
    K = n(738130),
    q = n(4461),
    X = n(34674),
    J = n(576958),
    Q = n(924489),
    $ = n(125909),
    ee = n(409425),
    et = n(132871),
    en = n(147890),
    ei = n(824606),
    ea = n(527564),
    er = n(326135),
    eo = n(940064),
    el = n(626004),
    es = n(939893),
    ec = n(430913),
    ed = n(606183),
    eu = n(272242),
    ep = n(981631),
    em = n(558921),
    e_ = n(388032),
    ef = n(669761),
    eh = n(902294);
let eg = d().parserFor(es.Z),
    eI = d().reactFor(d().ruleOutput(es.Z, 'react')),
    ev = (0, m.Mg)(h.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
    ex = 'redirect_to_support_server',
    eb = 'start_application_install',
    eC = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(e));
function eS(e) {
    var t, r, l, c;
    let d,
        {
            match: {
                params: { applicationId: m, section: f = eu.ApplicationDirectoryProfileSections.GENERAL }
            }
        } = e,
        h = (0, et.useApplicationDirectoryHistory)((e) => e.guildId),
        T = (0, Y.Z)(),
        es = (0, _.e7)(
            [W.Z],
            () =>
                W.Z.getFetchState({
                    applicationId: m,
                    guildId: h
                }) === W.M.FETCHING
        ),
        eS = a.useRef({
            applicationId: void 0,
            guildId: void 0
        }),
        { similarApplications: ej, similarLoadId: ey } = (0, _.cj)([W.Z], () => {
            let e = {
                    applicationId: m,
                    guildId: h
                },
                t = W.Z.getSimilarApplications(e);
            return (
                null == t ? (t = W.Z.getSimilarApplications(eS.current)) : (eS.current = e),
                {
                    similarApplications: null == t ? void 0 : t.applications,
                    similarLoadId: null == t ? void 0 : t.loadId
                }
            );
        }),
        eP = a.useMemo(() => (null == ej ? void 0 : ej.slice(0, 3)), [ej]),
        eE = (0, _.e7)([V.Z], () => V.Z.getApplicationFetchState(m)),
        [eA, eL] = a.useState(void 0),
        eR = a.useCallback(
            (e) => {
                if (null != m) {
                    if (e === eu.ApplicationDirectoryProfileSections.GENERAL) {
                        (0, en.replaceAppDirectoryURLWith)(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(m));
                        return;
                    }
                    (0, en.replaceAppDirectoryURLWith)(ep.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(m, e));
                }
            },
            [m]
        ),
        ek = (0, _.e7)([w.Z], () => w.Z.isFocused()),
        eB = (0, _.e7)([O.default], () => O.default.locale),
        eO = a.useRef(m),
        eZ = (0, _.e7)([V.Z], () => {
            let e = V.Z.getApplication(m);
            return null == e ? (e = V.Z.getApplication(eO.current)) : (eO.current = m), e;
        }),
        ew = (0, ei.Z)({ application: eZ }),
        eD = (0, _.e7)([Z.default], () => Z.default.getSessionId());
    (0, y.Tt)({ location: null == eZ ? void 0 : eZ.name });
    let eH = a.useCallback(async () => {
        try {
            var e;
            let t = null == eZ ? void 0 : null === (e = eZ.guild) || void 0 === e ? void 0 : e.id;
            if (null != t) {
                (null == eZ ? void 0 : eZ.id) != null &&
                    D.default.track(ep.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: eZ.id,
                        guild_id: h,
                        support_guild_id: t
                    });
                let e = { page: ep.ZY5.APPLICATION_DIRECTORY };
                await (0, U.Ub)(t, e, { setsHistorySnapshot: !1 });
            }
        } catch {}
    }, [eZ, h]);
    a.useEffect(() => {
        if (null == eZ) return;
        let e = new URL(location.href);
        if (T && null != eD && 'true' === e.searchParams.get(ex)) {
            e.searchParams.delete(ex);
            let t = e.pathname + e.search;
            (0, k.dL)(t), eH();
        }
    }, [T, eH, eD, eZ]);
    let eM = a.useCallback(() => {
            var e;
            null != (null == eZ ? void 0 : null === (e = eZ.guild) || void 0 === e ? void 0 : e.id) && (T ? eH() : (0, X.rf)({ [ex]: 'true' }));
        }, [eZ, T, eH]),
        eF = a.useCallback(() => {
            (0, en.replaceAppDirectoryURLWith)(''.concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(m)).concat(location.search));
        }, [m]);
    a.useEffect(() => {
        f === eu.ApplicationDirectoryProfileSections.GENERAL && eF();
    }, [eF, f]),
        a.useEffect(() => {
            if (null != m) {
                let e = 'true' === new URLSearchParams(location.search).get('preview') || void 0;
                z.i6(m, { noCache: e });
            }
        }, [m]),
        a.useEffect(() => {
            if ((null == eZ ? void 0 : eZ.directory_entry) != null) {
                let e = eZ.directory_entry,
                    t = null == e ? void 0 : e.popular_application_commands;
                null != t
                    ? eL(
                          t.map((e) =>
                              (0, S.Z8)({
                                  rootCommand: e,
                                  command: e,
                                  applicationId: e.application_id
                              })
                          )
                      )
                    : eL(void 0);
            }
        }, [eZ]);
    let eU = H.ZP.getApplicationIconURL({
            id: null !== (l = null == eZ ? void 0 : eZ.id) && void 0 !== l ? l : '-1',
            icon: null == eZ ? void 0 : eZ.icon,
            size: ev
        }),
        eG = (0, P.Z)({
            id: null !== (c = null == eZ ? void 0 : eZ.id) && void 0 !== c ? c : '',
            label: e_.intl.string(e_.t['FfCL+/'])
        }),
        { canInstall: ez, install: eV } = (0, q.P)(eZ, h),
        eW = null === (t = (0, et.getPreviousView)()) || void 0 === t ? void 0 : t.type;
    a.useEffect(() => {
        (null == eZ ? void 0 : eZ.id) != null &&
            D.default.track(ep.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: 'product',
                previous_page: eW,
                application_id: eZ.id,
                guild_id: h,
                shown_mutual_guilds_count: ew.length,
                profile_section: f,
                referrer: document.referrer
            });
    }, [null == eZ ? void 0 : eZ.id, h, ew]);
    let eY = a.useMemo(() => {
            var e;
            let t = null == eZ ? void 0 : null === (e = eZ.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != t) return R.VY.filter((e) => p.e$(p.vB(t), e));
        }, [null == eZ ? void 0 : null === (r = eZ.install_params) || void 0 === r ? void 0 : r.permissions]),
        eK = a.useCallback(
            (e) => {
                eR(e),
                    (null == eZ ? void 0 : eZ.id) != null &&
                        D.default.track(ep.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: eZ.id,
                            guild_id: h,
                            tab_name: e
                        });
            },
            [null == eZ ? void 0 : eZ.id, h, eR]
        ),
        eq = a.useMemo(() => {
            var e, t, n;
            return null !== (n = (null !== (t = null == eZ ? void 0 : null === (e = eZ.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(X.RF).filter(F.lm)) && void 0 !== n ? n : [];
        }, [eZ]),
        eX = a.useCallback(
            (e, t) => {
                if (e.type === ep.s9s.IMG) {
                    let t = eq.filter((e) => e.type === ep.s9s.IMG),
                        n = t.findIndex((t) => t === e);
                    if (n < 0) return;
                    let i = t.map((e) => ({
                        url: (0, v.Q)(e.src),
                        original: e.src,
                        width: e.width,
                        height: e.height,
                        type: 'IMAGE'
                    }));
                    (0, L.K)({
                        items: i,
                        startingIndex: n,
                        fit: A.D.CONTAIN,
                        shouldHideMediaOptions: !0,
                        shouldAnimateCarousel: !0,
                        location: 'ApplicationDirectoryProfile'
                    });
                }
            },
            [eq]
        ),
        eJ = a.useCallback(
            (e) => {
                (null == eZ ? void 0 : eZ.id) != null &&
                    D.default.track(ep.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        current_page: 'product',
                        category: e.name,
                        category_id: e.id,
                        application_id: eZ.id,
                        guild_id: h
                    }),
                    (0, en.goToCategory)({ categoryId: e.id });
            },
            [eZ, h]
        );
    a.useEffect(() => {
        if (null != m)
            z.T4({
                applicationId: m,
                guildId: h
            });
    }, [m, h]);
    let eQ = a.useCallback(
            (e) => {
                let { application: t, mutualGuilds: n, index: i } = e;
                (null == eZ ? void 0 : eZ.id) != null &&
                    D.default.track(ep.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                        current_page: 'product',
                        application_id: eZ.id,
                        suggested_application_id: t.id,
                        position: i,
                        load_id: ey,
                        guild_id: h,
                        shown_mutual_guilds_count: n.length
                    }),
                    (0, en.goToApplication)({ applicationId: t.id });
            },
            [null == eZ ? void 0 : eZ.id, ey, h]
        ),
        e$ = a.useCallback(() => {
            null != eZ &&
                (0, C.Z)(
                    (0, er.G)({
                        id: eZ.id,
                        name: eZ.name,
                        locale: eB
                    })
                );
        }, [eB, eZ]),
        e0 = a.useCallback(
            (e) =>
                (0, i.jsxs)(g.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': e_.intl.string(e_.t['/7I4/P']),
                    onClose: e,
                    onSelect: void 0,
                    children: [
                        (0, i.jsx)(g.MenuGroup, {
                            children: (0, i.jsx)(g.MenuItem, {
                                id: 'report',
                                label: e_.intl.string(e_.t.NgA5vr),
                                color: 'danger',
                                action: e$
                            })
                        }),
                        null != eG ? (0, i.jsx)(g.MenuGroup, { children: eG }) : null
                    ]
                }),
            [eG, e$]
        ),
        [e1, e6] = (0, b.Z)(!1, 1000),
        e2 = a.useCallback(() => {
            if (null != eZ)
                D.default.track(ep.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
                    application_id: eZ.id,
                    guild_id: h
                }),
                    (0, M.JG)(eC(eZ.id)),
                    e6(!0);
        }, [eZ, e6, h]);
    a.useEffect(() => {
        let e = new URL(location.href);
        if (T && 'true' === e.searchParams.get(eb)) {
            e.searchParams.delete(eb);
            let t = e.pathname + e.search;
            (0, k.dL)(t), eV('product_page');
        }
    }, [T, eV]);
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
                T
                    ? eV('product_page')
                    : (D.default.track(ep.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                          application_id: m,
                          guild_id: h,
                          auth_type: null != eZ.custom_install_url ? 'custom_url' : 'in_app',
                          source: 'product_page',
                          device_platform: u.tq ? 'mobile_web' : 'desktop_web'
                      }),
                      (0, X.rf)({ [eb]: 'true' }));
            }
        }, [eZ, T, eV, m, h]),
        e5 = (null == eZ ? void 0 : eZ.id) === em.g,
        [e8, e9] = a.useState(!1),
        [e4, e7] = a.useState(!1),
        [te, tt] = a.useState(!0),
        tn = (e) => {
            null != e && e9(e.scrollHeight > e.clientHeight);
        },
        ti = null != eY && eY.length > 0,
        ta = (null == eZ ? void 0 : eZ.flags) != null,
        tr = (0, N.R)(null != m ? m : '');
    a.useEffect(() => {
        tr && null != m && (0, j.Z)(m);
    }, [tr, m]);
    let to = a.useMemo(() => {
            let e = [],
                t = !0;
            switch (f) {
                case eu.ApplicationDirectoryProfileSections.GENERAL: {
                    var n, a;
                    let r = null == eZ ? void 0 : null === (n = eZ.directory_entry) || void 0 === n ? void 0 : n.detailed_description;
                    null != r && r.length > 0
                        ? (e.push(
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(g.Heading, {
                                          className: ef.sectionHeader,
                                          variant: 'heading-md/semibold',
                                          children: e_.intl.string(e_.t.txraKS)
                                      }),
                                      (0, i.jsx)('div', {
                                          ref: tn,
                                          className: o()({
                                              [ef.descriptionClamp]: !e4,
                                              [ef.descriptionClampSafari]: !e4 && 'Safari' === s().name
                                          }),
                                          children: (0, i.jsx)(E.Z, {
                                              className: ef.detailedDescription,
                                              parser: eg,
                                              output: eI,
                                              state: { allowLinks: !0 },
                                              children: r
                                          })
                                      }),
                                      (e8 || e4) &&
                                          (0, i.jsx)(eN, {
                                              isViewAll: e4,
                                              onToggle: () => {
                                                  e7((e) => !e);
                                              }
                                          })
                                  ]
                              })
                          ),
                          (t = !1))
                        : (null == eZ ? void 0 : null === (a = eZ.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0
                          ? e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.intl.string(e_.t.txraKS)
                                        }),
                                        (0, i.jsx)('span', { children: eZ.directory_entry.short_description })
                                    ]
                                })
                            )
                          : (null == eZ ? void 0 : eZ.description) != null &&
                            e.push(
                                (0, i.jsx)(B.Z, {
                                    className: ef.description,
                                    userBio: eZ.description
                                })
                            ),
                        null != eA &&
                            eA.length > 0 &&
                            (e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.intl.string(e_.t.swIgTE)
                                        }),
                                        (0, i.jsx)(eo.Z, {
                                            className: ef.commandList,
                                            commands: eA
                                        })
                                    ]
                                })
                            ),
                            (t = !0));
                    break;
                }
                case eu.ApplicationDirectoryProfileSections.IMAGES: {
                    if (0 === eq.length) break;
                    let t = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                className: ef.errorImage,
                                src: eh,
                                'aria-hidden': !0,
                                alt: ''
                            }),
                            (0, i.jsx)(g.Heading, {
                                variant: 'heading-xl/semibold',
                                children: e_.intl.string(e_.t.UvDfMz)
                            })
                        ]
                    });
                    eq.forEach((e, t) => {
                        null != eZ
                            ? (e.alt = e_.intl.formatToPlainString(e_.t.sSEhHR, {
                                  index: t + 1,
                                  totalImages: eq.length,
                                  name: eZ.name
                              }))
                            : (e.alt = e_.intl.string(e_.t['5UVm9/']));
                    }),
                        e.push(
                            (0, i.jsx)(x.Z, {
                                className: ef.carousel,
                                themedPagination: !0,
                                items: eq,
                                autoplayInterval: 8000,
                                paused: !ek,
                                videoAutoPlay: !0,
                                onCurrentItemClick: eX,
                                errorComponent: t,
                                onImageLoad: (e) => {
                                    let { src: t, loadTimeMs: n } = e;
                                    null != n &&
                                        null != eZ &&
                                        D.default.track(ep.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                                            application_id: eZ.id,
                                            load_time_ms: n,
                                            src: t
                                        });
                                }
                            })
                        );
                    break;
                }
                case eu.ApplicationDirectoryProfileSections.STORE:
                    tr && null != m && e.push((0, i.jsx)(ea.M, { appId: m }));
                    break;
                case eu.ApplicationDirectoryProfileSections.PRIVACY:
                    ti &&
                        e.push(
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(g.Heading, {
                                        className: ef.sectionHeader,
                                        variant: 'heading-md/semibold',
                                        children: e_.intl.string(e_.t.runNFx)
                                    }),
                                    (0, i.jsx)(I.Z, {
                                        className: ef.commandList,
                                        grantedPermissions: eY,
                                        grantedPermissionsHeader: e_.intl.string(e_.t.SLgiND)
                                    })
                                ]
                            })
                        ),
                        ta &&
                            e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.intl.string(e_.t.QzDgMj)
                                        }),
                                        (0, i.jsx)(el.Z, { application: eZ })
                                    ]
                                })
                            );
            }
            return (
                tt(t),
                0 === e.length && f !== eu.ApplicationDirectoryProfileSections.GENERAL && null != eZ && eF(),
                e.map((e, t) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: ef.section,
                            children: e
                        },
                        t
                    )
                )
            );
        }, [f, eF, eZ, eA, e4, e8, eq, ek, eX, tr, m, ti, ta, eY]),
        tl = a.useMemo(() => {
            let e = [
                {
                    name: eu.ApplicationDirectoryProfileSections.GENERAL,
                    text: e_.intl.string(e_.t.r4vJeX),
                    Icon: g.AppsIcon
                }
            ];
            return (
                eq.length > 0 &&
                    e.push({
                        name: eu.ApplicationDirectoryProfileSections.IMAGES,
                        text: e_.intl.string(e_.t.BEFwGR),
                        Icon: g.ImagesIcon
                    }),
                tr &&
                    e.push({
                        name: eu.ApplicationDirectoryProfileSections.STORE,
                        text: e_.intl.string(e_.t.pylO39),
                        Icon: g.ShopSparkleIcon
                    }),
                (ti || ta) &&
                    e.push({
                        name: eu.ApplicationDirectoryProfileSections.PRIVACY,
                        text: e_.intl.string(e_.t.hrodJy),
                        Icon: g.PrivacyAndSafetyIcon
                    }),
                e
            );
        }, [eq.length, ti, ta, tr]);
    return (
        (d =
            null == eZ
                ? null == eE || eE === V.M.FETCHING
                    ? (0, i.jsx)($.Z, { loading: eE === V.M.FETCHING })
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
                                  (0, i.jsx)(g.Heading, {
                                      variant: 'heading-xl/semibold',
                                      children: e_.intl.string(e_.t.T48fKS)
                                  })
                              ]
                          })
                      })
                : (0, i.jsxs)($.Z, {
                      loading: eE === V.M.FETCHING,
                      children: [
                          (0, i.jsx)(eT, {
                              app: eZ,
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
                                                      application: eZ,
                                                      mutualGuilds: ew,
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
                                                                      children: eZ.name
                                                                  }),
                                                                  tr &&
                                                                      (0, i.jsx)(g.Tooltip, {
                                                                          tooltipClassName: ef.premiumIconTooltip,
                                                                          text: e_.intl.string(e_.t['7B10XF']),
                                                                          children: (e) =>
                                                                              (0, i.jsx)('img', {
                                                                                  ...e,
                                                                                  alt: e_.intl.string(e_.t['7B10XF']),
                                                                                  className: ef.premiumIcon,
                                                                                  src: n(744050)
                                                                              })
                                                                      }),
                                                                  e5 && (0, i.jsx)(ee.Z, { className: ef.partnerBadge })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: ef.buttons,
                                                              children: [
                                                                  (0, i.jsx)(g.Button, {
                                                                      onClick: e2,
                                                                      color: g.Button.Colors.PRIMARY,
                                                                      children: e1 ? e_.intl.string(e_.t.wwdb3t) : e_.intl.string(e_.t.z4sP5O)
                                                                  }),
                                                                  (0, i.jsx)(g.Button, {
                                                                      color: g.Button.Colors.BRAND,
                                                                      onClick: e3,
                                                                      disabled: !ez,
                                                                      children: e_.intl.string(e_.t.NgXl3N)
                                                                  }),
                                                                  (0, i.jsx)(g.Popout, {
                                                                      renderPopout: (e) => {
                                                                          let { closePopout: t } = e;
                                                                          return e0(t);
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
                                                  (0, i.jsx)(ed.Z, {
                                                      activeSection: f,
                                                      setSection: eK,
                                                      sections: tl
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
                                                  to,
                                                  null != eP && eP.length > 0
                                                      ? (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                te && (0, i.jsx)('div', { className: ef.separator }),
                                                                (0, i.jsxs)('div', {
                                                                    className: ef.section,
                                                                    children: [
                                                                        (0, i.jsx)(g.Heading, {
                                                                            className: ef.relatedHeader,
                                                                            variant: 'eyebrow',
                                                                            children: e_.intl.string(e_.t.E8wCnp)
                                                                        }),
                                                                        (0, i.jsx)($.Z, {
                                                                            loading: es,
                                                                            children: (0, i.jsx)(J.Z, {
                                                                                applicationId: m,
                                                                                applications: eP,
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
                                          (0, i.jsx)(ec.Z, {
                                              className: ef.sidebar,
                                              application: eZ,
                                              guildId: h,
                                              onViewCategory: eJ,
                                              onClickGuildWidget: eM
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
let eN = (e) => {
        let t,
            { onToggle: n, isViewAll: a } = e;
        return (
            (t = a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.Text, {
                              className: ef.showMoreButtonText,
                              variant: 'eyebrow',
                              children: e_.intl.string(e_.t['vtfc4+'])
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
                              children: e_.intl.string(e_.t.ZDRyur)
                          }),
                          (0, i.jsx)(g.ChevronSmallDownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: ef.showMoreButtonIcon
                          })
                      ]
                  })),
            (0, i.jsx)(ej, {
                children: (0, i.jsx)(g.Button, {
                    look: g.Button.Looks.BLANK,
                    color: g.Button.Colors.TRANSPARENT,
                    size: g.Button.Sizes.NONE,
                    className: ef.showMoreButton,
                    innerClassName: ef.showMoreButtonInner,
                    onClick: n,
                    children: t
                })
            })
        );
    },
    ej = (e) => {
        let { className: t, contentClassName: n, children: a } = e;
        return (0, i.jsxs)('div', {
            className: o()([ef.dividerContainer, t]),
            children: [
                (0, i.jsx)('div', { className: ef.divider }),
                null != a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: o()(ef.contentDivider, n),
                                  children: a
                              }),
                              (0, i.jsx)('div', { className: ef.divider })
                          ]
                      })
                    : null
            ]
        });
    };
function eT(e) {
    let { app: t, iconSrc: n } = e,
        r = (0, T.ZP)(n, f.Z.unsafe_rawColors.PRIMARY_800.css),
        { bot: o } = t,
        l = a.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != o) {
                let t = (0, H.aN)({
                    id: o.id,
                    banner: o.banner,
                    size: 1024,
                    canAnimate: !1
                });
                null != t && ((e['--custom-background-static'] = 'url('.concat(t)), (e.height = 'auto'));
                let n = (0, H.xR)(o.banner)
                    ? (0, H.aN)({
                          id: o.id,
                          banner: o.banner,
                          size: 1024,
                          canAnimate: !0
                      })
                    : null;
                null != n && (e['--custom-background-animated'] = 'url('.concat(n));
            }
            return e;
        }, [r, o]);
    return (0, i.jsx)('div', {
        style: l,
        className: ef.headerBanner,
        'data-has-animated': '--custom-background-animated' in l
    });
}
