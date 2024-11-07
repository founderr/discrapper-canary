n.r(t),
    n.d(t, {
        default: function () {
            return eN;
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
    l = n.n(r),
    o = n(525654),
    s = n.n(o),
    c = n(302454),
    d = n.n(c),
    u = n(873546),
    p = n(149765),
    m = n(468194),
    _ = n(442837),
    h = n(692547),
    f = n(477690),
    g = n(481060),
    v = n(995648),
    I = n(445986),
    x = n(9807),
    C = n(330726),
    S = n(782568),
    N = n(581364),
    b = n(970321),
    T = n(283836),
    j = n(220082),
    y = n(252618),
    E = n(299206),
    A = n(241209),
    P = n(341176),
    L = n(312097),
    R = n(422559),
    k = n(703656),
    O = n(280885),
    B = n(706454),
    Z = n(314897),
    w = n(451478),
    F = n(626135),
    D = n(768581),
    H = n(572004),
    M = n(823379),
    U = n(900849),
    G = n(135431),
    z = n(674588),
    Y = n(264043),
    V = n(303383),
    K = n(887706),
    W = n(738130),
    X = n(4461),
    q = n(34674),
    J = n(576958),
    Q = n(924489),
    $ = n(125909),
    ee = n(409425),
    et = n(132871),
    en = n(147890),
    ei = n(824606),
    ea = n(527564),
    er = n(326135),
    el = n(940064),
    eo = n(626004),
    es = n(939893),
    ec = n(430913),
    ed = n(606183),
    eu = n(272242),
    ep = n(981631),
    em = n(558921),
    e_ = n(388032),
    eh = n(67124),
    ef = n(902294);
let eg = d().parserFor(es.Z),
    ev = d().reactFor(d().ruleOutput(es.Z, 'react')),
    eI = (0, m.Mg)(f.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
    ex = 'redirect_to_support_server',
    eC = 'start_application_install',
    eS = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(e));
function eN(e) {
    var t, r, o, c;
    let d,
        {
            match: {
                params: { applicationId: m, section: h = eu.ApplicationDirectoryProfileSections.GENERAL }
            }
        } = e,
        f = (0, et.useApplicationDirectoryHistory)((e) => e.guildId),
        j = (0, K.Z)(),
        es = (0, _.e7)(
            [V.Z],
            () =>
                V.Z.getFetchState({
                    applicationId: m,
                    guildId: f
                }) === V.M.FETCHING
        ),
        eN = a.useRef({
            applicationId: void 0,
            guildId: void 0
        }),
        { similarApplications: eT, similarLoadId: ey } = (0, _.cj)([V.Z], () => {
            let e = {
                    applicationId: m,
                    guildId: f
                },
                t = V.Z.getSimilarApplications(e);
            return (
                null == t ? (t = V.Z.getSimilarApplications(eN.current)) : (eN.current = e),
                {
                    similarApplications: null == t ? void 0 : t.applications,
                    similarLoadId: null == t ? void 0 : t.loadId
                }
            );
        }),
        eE = a.useMemo(() => (null == eT ? void 0 : eT.slice(0, 3)), [eT]),
        eA = (0, _.e7)([Y.Z], () => Y.Z.getApplicationFetchState(m)),
        [eP, eL] = a.useState(void 0),
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
        eO = (0, _.e7)([B.default], () => B.default.locale),
        eB = a.useRef(m),
        eZ = (0, _.e7)([Y.Z], () => {
            let e = Y.Z.getApplication(m);
            return null == e ? (e = Y.Z.getApplication(eB.current)) : (eB.current = m), e;
        }),
        ew = (0, ei.Z)({ application: eZ }),
        eF = (0, _.e7)([Z.default], () => Z.default.getSessionId());
    (0, y.Tt)({ location: null == eZ ? void 0 : eZ.name });
    let eD = a.useCallback(async () => {
        try {
            var e;
            let t = null == eZ ? void 0 : null === (e = eZ.guild) || void 0 === e ? void 0 : e.id;
            if (null != t) {
                (null == eZ ? void 0 : eZ.id) != null &&
                    F.default.track(ep.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: eZ.id,
                        guild_id: t
                    });
                let e = { page: ep.ZY5.APPLICATION_DIRECTORY };
                await (0, U.Ub)(t, e, { setsHistorySnapshot: !1 });
            }
        } catch {}
    }, [eZ]);
    a.useEffect(() => {
        if (null == eZ) return;
        let e = new URL(location.href);
        if (j && null != eF && 'true' === e.searchParams.get(ex)) {
            e.searchParams.delete(ex);
            let t = e.pathname + e.search;
            (0, k.dL)(t), eD();
        }
    }, [j, eD, eF, eZ]);
    let eH = a.useCallback(() => {
            var e;
            null != (null == eZ ? void 0 : null === (e = eZ.guild) || void 0 === e ? void 0 : e.id) && (j ? eD() : (0, q.rf)({ [ex]: 'true' }));
        }, [eZ, j, eD]),
        eM = a.useCallback(() => {
            (0, en.replaceAppDirectoryURLWith)(''.concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(m)).concat(location.search));
        }, [m]);
    a.useEffect(() => {
        h === eu.ApplicationDirectoryProfileSections.GENERAL && eM();
    }, [eM, h]),
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
                              (0, N.Z8)({
                                  rootCommand: e,
                                  command: e,
                                  applicationId: e.application_id
                              })
                          )
                      )
                    : eL(void 0);
            }
        }, [eZ]);
    let eU = D.ZP.getApplicationIconURL({
            id: null !== (o = null == eZ ? void 0 : eZ.id) && void 0 !== o ? o : '-1',
            icon: null == eZ ? void 0 : eZ.icon,
            size: eI
        }),
        eG = (0, E.Z)({
            id: null !== (c = null == eZ ? void 0 : eZ.id) && void 0 !== c ? c : '',
            label: e_.intl.string(e_.t['FfCL+/'])
        }),
        { canInstall: ez, install: eY } = (0, X.P)(eZ, f),
        eV = null === (t = (0, et.getPreviousView)()) || void 0 === t ? void 0 : t.type;
    a.useEffect(() => {
        (null == eZ ? void 0 : eZ.id) != null &&
            F.default.track(ep.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: 'product',
                previous_page: eV,
                application_id: eZ.id,
                guild_id: f,
                shown_mutual_guilds_count: ew.length,
                profile_section: h,
                referrer: document.referrer
            });
    }, [null == eZ ? void 0 : eZ.id, f, ew]);
    let eK = a.useMemo(() => {
            var e;
            let t = null == eZ ? void 0 : null === (e = eZ.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != t) return R.VY.filter((e) => p.e$(p.vB(t), e));
        }, [null == eZ ? void 0 : null === (r = eZ.install_params) || void 0 === r ? void 0 : r.permissions]),
        eW = a.useCallback(
            (e) => {
                eR(e),
                    (null == eZ ? void 0 : eZ.id) != null &&
                        F.default.track(ep.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: eZ.id,
                            guild_id: f,
                            tab_name: e
                        });
            },
            [null == eZ ? void 0 : eZ.id, f, eR]
        ),
        eX = a.useMemo(() => {
            var e, t, n;
            return null !== (n = (null !== (t = null == eZ ? void 0 : null === (e = eZ.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(q.RF).filter(M.lm)) && void 0 !== n ? n : [];
        }, [eZ]),
        eq = a.useCallback(
            (e, t) => {
                if (e.type === ep.s9s.IMG) {
                    let t = eX.filter((e) => e.type === ep.s9s.IMG),
                        n = t.findIndex((t) => t === e);
                    if (n < 0) return;
                    let i = t.map((e) => ({
                        url: (0, I.Q)(e.src),
                        original: e.src,
                        width: e.width,
                        height: e.height,
                        type: 'IMAGE'
                    }));
                    (0, L.K)({
                        items: i,
                        startingIndex: n,
                        fit: P.D.CONTAIN,
                        shouldHideMediaOptions: !0,
                        shouldAnimateCarousel: !0,
                        location: 'ApplicationDirectoryProfile'
                    });
                }
            },
            [eX]
        ),
        eJ = a.useCallback(
            (e) => {
                (null == eZ ? void 0 : eZ.id) != null &&
                    F.default.track(ep.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
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
        if (null != m)
            z.T4({
                applicationId: m,
                guildId: f
            });
    }, [m, f]);
    let eQ = a.useCallback(
            (e) => {
                let { application: t, mutualGuilds: n } = e;
                (null == eZ ? void 0 : eZ.id) != null &&
                    F.default.track(ep.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                        current_page: 'product',
                        application_id: eZ.id,
                        suggested_application_id: t.id,
                        load_id: ey,
                        guild_id: f,
                        shown_mutual_guilds_count: n.length
                    }),
                    (0, en.goToApplication)({ applicationId: t.id });
            },
            [null == eZ ? void 0 : eZ.id, ey, f]
        ),
        e$ = a.useCallback(() => {
            null != eZ &&
                (0, S.Z)(
                    (0, er.G)({
                        id: eZ.id,
                        name: eZ.name,
                        locale: eO
                    })
                );
        }, [eO, eZ]),
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
        [e1, e2] = (0, C.Z)(!1, 1000),
        e3 = a.useCallback(() => {
            if (null != eZ)
                F.default.track(ep.rMx.APP_SHARE_BUTTON_CLICKED, {
                    source: 'product_page',
                    application_id: eZ.id,
                    guild_id: f
                }),
                    (0, H.JG)(eS(eZ.id)),
                    e2(!0);
        }, [eZ, e2, f]);
    a.useEffect(() => {
        let e = new URL(location.href);
        if (j && 'true' === e.searchParams.get(eC)) {
            e.searchParams.delete(eC);
            let t = e.pathname + e.search;
            (0, k.dL)(t), eY('product_page');
        }
    }, [j, eY]);
    let e6 = a.useCallback(() => {
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
                j
                    ? eY('product_page')
                    : (F.default.track(ep.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                          application_id: m,
                          guild_id: f,
                          auth_type: null != eZ.custom_install_url ? 'custom_url' : 'in_app',
                          source: 'product_page',
                          device_platform: u.tq ? 'mobile_web' : 'desktop_web'
                      }),
                      (0, q.rf)({ [eC]: 'true' }));
            }
        }, [eZ, j, eY, m, f]),
        e5 = (null == eZ ? void 0 : eZ.id) === em.g,
        [e9, e8] = a.useState(!1),
        [e4, e7] = a.useState(!1),
        [te, tt] = a.useState(!0),
        tn = (e) => {
            null != e && e8(e.scrollHeight > e.clientHeight);
        },
        ti = null != eK && eK.length > 0,
        ta = (null == eZ ? void 0 : eZ.flags) != null,
        tr = (0, b.R)(null != m ? m : '');
    a.useEffect(() => {
        tr && null != m && (0, T.Z)(m);
    }, [tr, m]);
    let tl = a.useMemo(() => {
            let e = [],
                t = !0;
            switch (h) {
                case eu.ApplicationDirectoryProfileSections.GENERAL: {
                    var n, a;
                    let r = null == eZ ? void 0 : null === (n = eZ.directory_entry) || void 0 === n ? void 0 : n.detailed_description;
                    null != r && r.length > 0
                        ? (e.push(
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(g.Heading, {
                                          className: eh.sectionHeader,
                                          variant: 'heading-md/semibold',
                                          children: e_.intl.string(e_.t.txraKS)
                                      }),
                                      (0, i.jsx)('div', {
                                          ref: tn,
                                          className: l()({
                                              [eh.descriptionClamp]: !e4,
                                              [eh.descriptionClampSafari]: !e4 && 'Safari' === s().name
                                          }),
                                          children: (0, i.jsx)(A.Z, {
                                              className: eh.detailedDescription,
                                              parser: eg,
                                              output: ev,
                                              state: { allowLinks: !0 },
                                              children: r
                                          })
                                      }),
                                      (e9 || e4) &&
                                          (0, i.jsx)(eb, {
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
                                            className: eh.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.intl.string(e_.t.txraKS)
                                        }),
                                        (0, i.jsx)('span', { children: eZ.directory_entry.short_description })
                                    ]
                                })
                            )
                          : (null == eZ ? void 0 : eZ.description) != null &&
                            e.push(
                                (0, i.jsx)(O.Z, {
                                    className: eh.description,
                                    userBio: eZ.description
                                })
                            ),
                        null != eP &&
                            eP.length > 0 &&
                            (e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: eh.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.intl.string(e_.t.swIgTE)
                                        }),
                                        (0, i.jsx)(el.Z, {
                                            className: eh.commandList,
                                            commands: eP
                                        })
                                    ]
                                })
                            ),
                            (t = !0));
                    break;
                }
                case eu.ApplicationDirectoryProfileSections.IMAGES: {
                    if (0 === eX.length) break;
                    let t = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                className: eh.errorImage,
                                src: ef,
                                'aria-hidden': !0,
                                alt: ''
                            }),
                            (0, i.jsx)(g.Heading, {
                                variant: 'heading-xl/semibold',
                                children: e_.intl.string(e_.t.UvDfMz)
                            })
                        ]
                    });
                    eX.forEach((e, t) => {
                        null != eZ
                            ? (e.alt = e_.intl.formatToPlainString(e_.t.sSEhHR, {
                                  index: t + 1,
                                  totalImages: eX.length,
                                  name: eZ.name
                              }))
                            : (e.alt = e_.intl.string(e_.t['5UVm9/']));
                    }),
                        e.push(
                            (0, i.jsx)(x.Z, {
                                className: eh.carousel,
                                themedPagination: !0,
                                items: eX,
                                autoplayInterval: 8000,
                                paused: !ek,
                                videoAutoPlay: !0,
                                onCurrentItemClick: eq,
                                errorComponent: t,
                                onImageLoad: (e) => {
                                    let { src: t, loadTimeMs: n } = e;
                                    null != n &&
                                        null != eZ &&
                                        F.default.track(ep.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
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
                                        className: eh.sectionHeader,
                                        variant: 'heading-md/semibold',
                                        children: e_.intl.string(e_.t.runNFx)
                                    }),
                                    (0, i.jsx)(v.Z, {
                                        className: eh.commandList,
                                        grantedPermissions: eK,
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
                                            className: eh.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.intl.string(e_.t.QzDgMj)
                                        }),
                                        (0, i.jsx)(eo.Z, { application: eZ })
                                    ]
                                })
                            );
            }
            return (
                tt(t),
                0 === e.length && h !== eu.ApplicationDirectoryProfileSections.GENERAL && null != eZ && eM(),
                e.map((e, t) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: eh.section,
                            children: e
                        },
                        t
                    )
                )
            );
        }, [h, eM, eZ, eP, e4, e9, eX, ek, eq, tr, m, ti, ta, eK]),
        to = a.useMemo(() => {
            let e = [
                {
                    name: eu.ApplicationDirectoryProfileSections.GENERAL,
                    text: e_.intl.string(e_.t.r4vJeX),
                    Icon: g.AppsIcon
                }
            ];
            return (
                eX.length > 0 &&
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
        }, [eX.length, ti, ta, tr]);
    return (
        (d =
            null == eZ
                ? null == eA || eA === Y.M.FETCHING
                    ? (0, i.jsx)($.Z, { loading: eA === Y.M.FETCHING })
                    : (0, i.jsx)('div', {
                          className: eh.__invalid_page,
                          children: (0, i.jsxs)('div', {
                              className: eh.emptyContainer,
                              children: [
                                  (0, i.jsx)('img', {
                                      className: eh.emptyImage,
                                      src: ef,
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
                      loading: eA === Y.M.FETCHING,
                      children: [
                          (0, i.jsx)(ej, {
                              app: eZ,
                              iconSrc: eU
                          }),
                          (0, i.jsxs)('div', {
                              className: eh.__invalid_page,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: eh.header,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: eh.headerSidebar,
                                              children: [
                                                  (0, i.jsx)('img', {
                                                      className: eh.headerIcon,
                                                      alt: '',
                                                      'aria-hidden': !0,
                                                      src: eU,
                                                      width: eI,
                                                      height: eI
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
                                              className: eh.headerContent,
                                              children: [
                                                  (0, i.jsxs)('div', {
                                                      className: eh.headerNameAndButtons,
                                                      children: [
                                                          (0, i.jsxs)('div', {
                                                              className: eh.headerNameAndIcon,
                                                              children: [
                                                                  (0, i.jsx)(g.Heading, {
                                                                      className: eh.name,
                                                                      variant: 'heading-xxl/semibold',
                                                                      children: eZ.name
                                                                  }),
                                                                  tr &&
                                                                      (0, i.jsx)(g.Tooltip, {
                                                                          tooltipClassName: eh.premiumIconTooltip,
                                                                          text: e_.intl.string(e_.t['7B10XF']),
                                                                          children: (e) =>
                                                                              (0, i.jsx)('img', {
                                                                                  ...e,
                                                                                  alt: e_.intl.string(e_.t['7B10XF']),
                                                                                  className: eh.premiumIcon,
                                                                                  src: n(744050)
                                                                              })
                                                                      }),
                                                                  e5 && (0, i.jsx)(ee.Z, { className: eh.partnerBadge })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: eh.buttons,
                                                              children: [
                                                                  (0, i.jsx)(g.Button, {
                                                                      onClick: e3,
                                                                      color: g.Button.Colors.PRIMARY,
                                                                      children: e1 ? e_.intl.string(e_.t.wwdb3t) : e_.intl.string(e_.t.z4sP5O)
                                                                  }),
                                                                  (0, i.jsx)(g.Button, {
                                                                      color: g.Button.Colors.BRAND,
                                                                      onClick: e6,
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
                                                                              className: eh.overflow,
                                                                              ...e,
                                                                              children: (0, i.jsx)(g.MoreHorizontalIcon, {
                                                                                  size: 'custom',
                                                                                  color: 'currentColor',
                                                                                  width: 20,
                                                                                  height: 20,
                                                                                  className: eh.iconInteractive
                                                                              })
                                                                          })
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  }),
                                                  (0, i.jsx)(ed.Z, {
                                                      activeSection: h,
                                                      setSection: eW,
                                                      sections: to
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: eh.contentContainer,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: eh.content,
                                              children: [
                                                  tl,
                                                  null != eE && eE.length > 0
                                                      ? (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                te && (0, i.jsx)('div', { className: eh.separator }),
                                                                (0, i.jsxs)('div', {
                                                                    className: eh.section,
                                                                    children: [
                                                                        (0, i.jsx)(g.Heading, {
                                                                            className: eh.relatedHeader,
                                                                            variant: 'eyebrow',
                                                                            children: e_.intl.string(e_.t.E8wCnp)
                                                                        }),
                                                                        (0, i.jsx)($.Z, {
                                                                            loading: es,
                                                                            children: (0, i.jsx)(J.Z, {
                                                                                applications: eE,
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
                                              className: eh.sidebar,
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
        (0, i.jsx)(W.Z, { children: d })
    );
}
let eb = (e) => {
        let t,
            { onToggle: n, isViewAll: a } = e;
        return (
            (t = a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.Text, {
                              className: eh.showMoreButtonText,
                              variant: 'eyebrow',
                              children: e_.intl.string(e_.t['vtfc4+'])
                          }),
                          (0, i.jsx)(g.ChevronSmallUpIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: eh.showMoreButtonIcon
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.Text, {
                              className: eh.showMoreButtonText,
                              variant: 'eyebrow',
                              children: e_.intl.string(e_.t.ZDRyur)
                          }),
                          (0, i.jsx)(g.ChevronSmallDownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: eh.showMoreButtonIcon
                          })
                      ]
                  })),
            (0, i.jsx)(eT, {
                children: (0, i.jsx)(g.Button, {
                    look: g.Button.Looks.BLANK,
                    color: g.Button.Colors.TRANSPARENT,
                    size: g.Button.Sizes.NONE,
                    className: eh.showMoreButton,
                    innerClassName: eh.showMoreButtonInner,
                    onClick: n,
                    children: t
                })
            })
        );
    },
    eT = (e) => {
        let { className: t, contentClassName: n, children: a } = e;
        return (0, i.jsxs)('div', {
            className: l()([eh.dividerContainer, t]),
            children: [
                (0, i.jsx)('div', { className: eh.divider }),
                null != a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: l()(eh.contentDivider, n),
                                  children: a
                              }),
                              (0, i.jsx)('div', { className: eh.divider })
                          ]
                      })
                    : null
            ]
        });
    };
function ej(e) {
    let { app: t, iconSrc: n } = e,
        r = (0, j.ZP)(n, h.Z.unsafe_rawColors.PRIMARY_800.css),
        { bot: l } = t,
        o = a.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != l) {
                let t = (0, D.aN)({
                    id: l.id,
                    banner: l.banner,
                    size: 1024,
                    canAnimate: !1
                });
                null != t && ((e['--custom-background-static'] = 'url('.concat(t)), (e.height = 'auto'));
                let n = (0, D.xR)(l.banner)
                    ? (0, D.aN)({
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
        style: o,
        className: eh.headerBanner,
        'data-has-animated': '--custom-background-animated' in o
    });
}
