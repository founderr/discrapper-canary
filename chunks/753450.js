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
    E = t(911969),
    b = t(330726),
    x = t(782568),
    T = t(607070),
    P = t(581364),
    S = t(970321),
    A = t(283836),
    N = t(220082),
    R = t(252618),
    L = t(299206),
    O = t(241209),
    y = t(422559),
    j = t(703656),
    D = t(280885),
    M = t(706454),
    Z = t(314897),
    B = t(451478),
    k = t(626135),
    F = t(768581),
    w = t(572004),
    H = t(823379),
    G = t(900849),
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
    el = t(939893),
    es = t(430913),
    ec = t(606183),
    ed = t(272242),
    eu = t(981631),
    e_ = t(558921),
    ep = t(689938),
    em = t(613250),
    eI = t(902294);
let ef = d().parserFor(el.Z),
    eh = d().reactFor(d().ruleOutput(el.Z, 'react')),
    eg = (0, p.Mg)(f.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
    eC = 'redirect_to_support_server',
    ev = 'start_application_install',
    eE = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
    eb = (e) => {
        if (null == e) return null;
        let n = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
        return null != n ? n[1] : null;
    };
function ex(e) {
    var n, r, l, c;
    let d,
        {
            match: {
                params: { applicationId: p, section: I = ed.ApplicationDirectoryProfileSections.GENERAL }
            }
        } = e,
        f = (0, ee.useApplicationDirectoryHistory)((e) => e.guildId),
        E = (0, V.Z)(),
        T = (0, m.e7)(
            [W.Z],
            () =>
                W.Z.getFetchState({
                    applicationId: p,
                    guildId: f
                }) === W.M.FETCHING
        ),
        N = a.useRef({
            applicationId: void 0,
            guildId: void 0
        }),
        { similarApplications: el, similarLoadId: eb } = (0, m.cj)([W.Z], () => {
            let e = {
                    applicationId: p,
                    guildId: f
                },
                n = W.Z.getSimilarApplications(e);
            return (
                null == n ? (n = W.Z.getSimilarApplications(N.current)) : (N.current = e),
                {
                    similarApplications: null == n ? void 0 : n.applications,
                    similarLoadId: null == n ? void 0 : n.loadId
                }
            );
        }),
        ex = a.useMemo(() => (null == el ? void 0 : el.slice(0, 3)), [el]),
        eS = (0, m.e7)([Y.Z], () => Y.Z.getApplicationFetchState(p)),
        [eN, eR] = a.useState(void 0),
        eL = a.useCallback(
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
        eO = (0, m.e7)([B.Z], () => B.Z.isFocused()),
        ey = (0, m.e7)([M.default], () => M.default.locale),
        ej = a.useRef(p),
        eD = (0, m.e7)([Y.Z], () => {
            let e = Y.Z.getApplication(p);
            return null == e ? (e = Y.Z.getApplication(ej.current)) : (ej.current = p), e;
        }),
        eM = (0, et.Z)({ application: eD }),
        eZ = (0, m.e7)([Z.default], () => Z.default.getSessionId());
    (0, R.Tt)({ location: null == eD ? void 0 : eD.name });
    let eB = a.useCallback(async () => {
        try {
            var e;
            let n = null == eD ? void 0 : null === (e = eD.guild) || void 0 === e ? void 0 : e.id;
            if (null != n) {
                (null == eD ? void 0 : eD.id) != null &&
                    k.default.track(eu.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: eD.id,
                        guild_id: n
                    });
                let e = { page: eu.ZY5.APPLICATION_DIRECTORY };
                await (0, G.Ub)(n, e, { setsHistorySnapshot: !1 });
            }
        } catch {}
    }, [eD]);
    a.useEffect(() => {
        if (null == eD) return;
        let e = new URL(location.href);
        if (E && null != eZ && 'true' === e.searchParams.get(eC)) {
            e.searchParams.delete(eC);
            let n = e.pathname + e.search;
            (0, j.dL)(n), eB();
        }
    }, [E, eB, eZ, eD]);
    let ek = a.useCallback(() => {
            var e;
            null != (null == eD ? void 0 : null === (e = eD.guild) || void 0 === e ? void 0 : e.id) && (E ? eB() : (0, q.rf)({ [eC]: 'true' }));
        }, [eD, E, eB]),
        eF = a.useCallback(() => {
            (0, en.replaceAppDirectoryURLWith)(''.concat(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(p)).concat(location.search));
        }, [p]);
    a.useEffect(() => {
        I === ed.ApplicationDirectoryProfileSections.GENERAL && eF();
    }, [eF, I]),
        a.useEffect(() => {
            null != p && U.i6(p);
        }, [p]),
        a.useEffect(() => {
            if ((null == eD ? void 0 : eD.directory_entry) != null) {
                let e = eD.directory_entry,
                    n = null == e ? void 0 : e.popular_application_commands;
                null != n
                    ? eR(
                          n.map((e) =>
                              (0, P.Z8)({
                                  rootCommand: e,
                                  command: e,
                                  applicationId: e.application_id
                              })
                          )
                      )
                    : eR(void 0);
            }
        }, [eD]);
    let ew = F.ZP.getApplicationIconURL({
            id: null !== (l = null == eD ? void 0 : eD.id) && void 0 !== l ? l : '-1',
            icon: null == eD ? void 0 : eD.icon,
            size: eg
        }),
        eH = (0, L.Z)({
            id: null !== (c = null == eD ? void 0 : eD.id) && void 0 !== c ? c : '',
            label: ep.Z.Messages.COPY_ID_APPLICATION
        }),
        { canInstall: eG, install: eU } = (0, K.P)(eD, f),
        eY = null === (n = (0, ee.getPreviousView)()) || void 0 === n ? void 0 : n.type;
    a.useEffect(() => {
        (null == eD ? void 0 : eD.id) != null &&
            k.default.track(eu.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: 'product',
                previous_page: eY,
                application_id: eD.id,
                guild_id: f,
                shown_mutual_guilds_count: eM.length,
                profile_section: I,
                referrer: document.referrer
            });
    }, [null == eD ? void 0 : eD.id, f, eM]);
    let eW = a.useMemo(() => {
            var e;
            let n = null == eD ? void 0 : null === (e = eD.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != n) return y.VY.filter((e) => _.e$(_.vB(n), e));
        }, [null == eD ? void 0 : null === (r = eD.install_params) || void 0 === r ? void 0 : r.permissions]),
        eV = a.useCallback(
            (e) => {
                eL(e),
                    (null == eD ? void 0 : eD.id) != null &&
                        k.default.track(eu.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: eD.id,
                            guild_id: f,
                            tab_name: e
                        });
            },
            [null == eD ? void 0 : eD.id, f, eL]
        ),
        ez = a.useMemo(() => {
            var e, n, t;
            return null !== (t = (null !== (n = null == eD ? void 0 : null === (e = eD.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== n ? n : []).map(eT).filter(H.lm)) && void 0 !== t ? t : [];
        }, [eD]),
        eK = a.useCallback(
            (e, n) => {
                if (e.type === eu.s9s.IMG) {
                    let n = ez.filter((e) => e.type === eu.s9s.IMG),
                        a = n.findIndex((n) => n === e);
                    if (a < 0) return;
                    let r = n.map((e) => ({
                        src: (0, C.Q)(e.src),
                        width: e.width,
                        height: e.height
                    }));
                    (0, h.openModalLazy)(async () => {
                        let { default: e } = await t.e('41814').then(t.bind(t, 895023));
                        return (n) => {
                            let { ...t } = n;
                            return (0, i.jsx)(e, {
                                ...t,
                                items: r,
                                startingIndex: a,
                                modalCarouselItemClassName: em.appSlide
                            });
                        };
                    });
                }
            },
            [ez]
        ),
        eq = a.useCallback(
            (e) => {
                (null == eD ? void 0 : eD.id) != null &&
                    k.default.track(eu.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        current_page: 'product',
                        category: e.name,
                        category_id: e.id,
                        application_id: eD.id,
                        guild_id: f
                    }),
                    (0, en.goToCategory)({ categoryId: e.id });
            },
            [eD, f]
        );
    a.useEffect(() => {
        if (null != p)
            U.T4({
                applicationId: p,
                guildId: f
            });
    }, [p, f]);
    let eX = a.useCallback(
            (e) => {
                let { application: n, mutualGuilds: t } = e;
                (null == eD ? void 0 : eD.id) != null &&
                    k.default.track(eu.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                        current_page: 'product',
                        application_id: eD.id,
                        suggested_application_id: n.id,
                        load_id: eb,
                        guild_id: f,
                        shown_mutual_guilds_count: t.length
                    }),
                    (0, en.goToApplication)({ applicationId: n.id });
            },
            [null == eD ? void 0 : eD.id, eb, f]
        ),
        eJ = a.useCallback(() => {
            null != eD &&
                (0, x.Z)(
                    (0, ea.G)({
                        id: eD.id,
                        name: eD.name,
                        locale: ey
                    })
                );
        }, [ey, eD]),
        eQ = a.useCallback(
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
                                action: eJ
                            })
                        }),
                        null != eH ? (0, i.jsx)(h.MenuGroup, { children: eH }) : null
                    ]
                }),
            [eH, eJ]
        ),
        [e$, e0] = (0, b.Z)(!1, 1000),
        e1 = a.useCallback(() => {
            if (null != eD)
                k.default.track(eu.rMx.APP_SHARE_BUTTON_CLICKED, {
                    source: 'product_page',
                    application_id: eD.id,
                    guild_id: f
                }),
                    (0, w.JG)(eE(eD.id)),
                    e0(!0);
        }, [eD, e0, f]);
    a.useEffect(() => {
        let e = new URL(location.href);
        if (E && 'true' === e.searchParams.get(ev)) {
            e.searchParams.delete(ev);
            let n = e.pathname + e.search;
            (0, j.dL)(n), eU('product_page');
        }
    }, [E, eU]);
    let e6 = a.useCallback(() => {
            null != eD &&
                (E
                    ? eU('product_page')
                    : (k.default.track(eu.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                          application_id: p,
                          guild_id: f,
                          auth_type: null != eD.custom_install_url ? 'custom_url' : 'in_app',
                          source: 'product_page',
                          device_platform: u.tq ? 'mobile_web' : 'desktop_web'
                      }),
                      (0, q.rf)({ [ev]: 'true' })));
        }, [eD, E, eU, p, f]),
        e8 = (null == eD ? void 0 : eD.id) === e_.g,
        [e5, e3] = a.useState(!1),
        [e2, e9] = a.useState(!1),
        [e4, e7] = a.useState(!0),
        ne = (e) => {
            null != e && e3(e.scrollHeight > e.clientHeight);
        },
        nn = null != eW && eW.length > 0,
        nt = (null == eD ? void 0 : eD.flags) != null,
        ni = (0, S.R)(null != p ? p : '');
    a.useEffect(() => {
        ni && null != p && (0, A.Z)(p);
    }, [ni, p]);
    let na = a.useMemo(() => {
            let e = [],
                n = !0;
            switch (I) {
                case ed.ApplicationDirectoryProfileSections.GENERAL: {
                    var t, a;
                    let r = null == eD ? void 0 : null === (t = eD.directory_entry) || void 0 === t ? void 0 : t.detailed_description;
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
                                          ref: ne,
                                          className: o()({
                                              [em.descriptionClamp]: !e2,
                                              [em.descriptionClampSafari]: !e2 && 'Safari' === s().name
                                          }),
                                          children: (0, i.jsx)(O.Z, {
                                              className: em.detailedDescription,
                                              parser: ef,
                                              output: eh,
                                              state: { allowLinks: !0 },
                                              children: r
                                          })
                                      }),
                                      (e5 || e2) &&
                                          (0, i.jsx)(eP, {
                                              isViewAll: e2,
                                              onToggle: () => {
                                                  e9((e) => !e);
                                              }
                                          })
                                  ]
                              })
                          ),
                          (n = !1))
                        : (null == eD ? void 0 : null === (a = eD.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0
                          ? e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: em.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: ep.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                        }),
                                        (0, i.jsx)('span', { children: eD.directory_entry.short_description })
                                    ]
                                })
                            )
                          : (null == eD ? void 0 : eD.description) != null &&
                            e.push(
                                (0, i.jsx)(D.Z, {
                                    className: em.description,
                                    userBio: eD.description
                                })
                            ),
                        null != eN &&
                            eN.length > 0 &&
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
                                            commands: eN
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
                                className: em.errorImage,
                                src: eI,
                                'aria-hidden': !0,
                                alt: ''
                            }),
                            (0, i.jsx)(h.Heading, {
                                variant: 'heading-xl/semibold',
                                children: ep.Z.Messages.ERRORS_IMAGE_NOT_FOUND
                            })
                        ]
                    });
                    ez.forEach((e, n) => {
                        null != eD
                            ? (e.alt = ep.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
                                  index: n + 1,
                                  totalImages: ez.length,
                                  name: eD.name
                              }))
                            : (e.alt = ep.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
                    }),
                        e.push(
                            (0, i.jsx)(v.Z, {
                                className: em.carousel,
                                themedPagination: !0,
                                items: ez,
                                autoplayInterval: 8000,
                                paused: !eO,
                                videoAutoPlay: !0,
                                onCurrentItemClick: eK,
                                errorComponent: n,
                                onImageLoad: (e) => {
                                    let { src: n, loadTimeMs: t } = e;
                                    null != t &&
                                        null != eD &&
                                        k.default.track(eu.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                                            application_id: eD.id,
                                            load_time_ms: t,
                                            src: n
                                        });
                                }
                            })
                        );
                    break;
                }
                case ed.ApplicationDirectoryProfileSections.STORE:
                    ni && null != p && e.push((0, i.jsx)(ei.M, { appId: p }));
                    break;
                case ed.ApplicationDirectoryProfileSections.PRIVACY:
                    nn &&
                        e.push(
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(h.Heading, {
                                        className: em.sectionHeader,
                                        variant: 'heading-md/semibold',
                                        children: ep.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
                                    }),
                                    (0, i.jsx)(g.Z, {
                                        className: em.commandList,
                                        grantedPermissions: eW,
                                        grantedPermissionsHeader: ep.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
                                    })
                                ]
                            })
                        ),
                        nt &&
                            e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: em.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: ep.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
                                        }),
                                        (0, i.jsx)(eo.Z, { application: eD })
                                    ]
                                })
                            );
            }
            return (
                e7(n),
                0 === e.length && I !== ed.ApplicationDirectoryProfileSections.GENERAL && null != eD && eF(),
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
        }, [I, eF, eD, eN, e2, e5, ez, eO, eK, ni, p, nn, nt, eW]),
        nr = a.useMemo(() => {
            let e = [
                {
                    name: ed.ApplicationDirectoryProfileSections.GENERAL,
                    text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
                    Icon: h.AppsIcon
                }
            ];
            return (
                ez.length > 0 &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.IMAGES,
                        text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
                        Icon: h.ImagesIcon
                    }),
                ni &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.STORE,
                        text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
                        Icon: h.ShopSparkleIcon
                    }),
                (nn || nt) &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.PRIVACY,
                        text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
                        Icon: h.PrivacyAndSafetyIcon
                    }),
                e
            );
        }, [ez.length, nn, nt, ni]);
    return (
        (d =
            null == eD
                ? null == eS || eS === Y.M.FETCHING
                    ? (0, i.jsx)(Q.Z, { loading: eS === Y.M.FETCHING })
                    : (0, i.jsx)('div', {
                          className: em.__invalid_page,
                          children: (0, i.jsxs)('div', {
                              className: em.emptyContainer,
                              children: [
                                  (0, i.jsx)('img', {
                                      className: em.emptyImage,
                                      src: eI,
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
                      loading: eS === Y.M.FETCHING,
                      children: [
                          (0, i.jsx)(eA, {
                              app: eD,
                              iconSrc: ew
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
                                                      src: ew,
                                                      width: eg,
                                                      height: eg
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
                                                                          text: ep.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                          children: (e) =>
                                                                              (0, i.jsx)('img', {
                                                                                  ...e,
                                                                                  alt: ep.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                                  className: em.premiumIcon,
                                                                                  src: t(744050)
                                                                              })
                                                                      }),
                                                                  e8 && (0, i.jsx)($.Z, { className: em.partnerBadge })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: em.buttons,
                                                              children: [
                                                                  (0, i.jsx)(h.Button, {
                                                                      onClick: e1,
                                                                      color: h.Button.Colors.PRIMARY,
                                                                      children: e$ ? ep.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : ep.Z.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(h.Button, {
                                                                      color: h.Button.Colors.BRAND,
                                                                      onClick: e6,
                                                                      disabled: !eG,
                                                                      children: ep.Z.Messages.APPLICATION_ADD_BUTTON
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
                                                  (0, i.jsx)(ec.Z, {
                                                      activeSection: I,
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
                                                  na,
                                                  null != ex && ex.length > 0
                                                      ? (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                e4 && (0, i.jsx)('div', { className: em.separator }),
                                                                (0, i.jsxs)('div', {
                                                                    className: em.section,
                                                                    children: [
                                                                        (0, i.jsx)(h.Heading, {
                                                                            className: em.relatedHeader,
                                                                            variant: 'eyebrow',
                                                                            children: ep.Z.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
                                                                        }),
                                                                        (0, i.jsx)(Q.Z, {
                                                                            loading: T,
                                                                            children: (0, i.jsx)(X.Z, {
                                                                                applications: ex,
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
                                              guildId: f,
                                              onViewCategory: eq,
                                              onClickGuildWidget: ek
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
function eT(e) {
    switch (e.type) {
        case E.ee.MEDIA_PROXY:
            var n;
            let t = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return {
                type: eu.s9s.IMG,
                width: 0,
                height: 0,
                src: t
            };
        case E.ee.YOUTUBE:
            let i = eb(e.url);
            if (null != i)
                return {
                    type: eu.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: i
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
let eP = (e) => {
        let n,
            { onToggle: t, isViewAll: a } = e;
        return (
            (n = a
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
            (0, i.jsx)(eS, {
                children: (0, i.jsx)(h.Button, {
                    look: h.Button.Looks.BLANK,
                    color: h.Button.Colors.TRANSPARENT,
                    size: h.Button.Sizes.NONE,
                    className: em.showMoreButton,
                    innerClassName: em.showMoreButtonInner,
                    onClick: t,
                    children: n
                })
            })
        );
    },
    eS = (e) => {
        let { className: n, contentClassName: t, children: a } = e;
        return (0, i.jsxs)('div', {
            className: o()([em.dividerContainer, n]),
            children: [
                (0, i.jsx)('div', { className: em.divider }),
                null != a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: o()(em.contentDivider, t),
                                  children: a
                              }),
                              (0, i.jsx)('div', { className: em.divider })
                          ]
                      })
                    : null
            ]
        });
    };
function eA(e) {
    let { app: n, iconSrc: t } = e,
        r = (0, N.ZP)(t, I.Z.unsafe_rawColors.PRIMARY_800.css),
        { bot: o } = n,
        l = (0, m.e7)([T.Z], () => T.Z.useReducedMotion),
        s = a.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != o) {
                let n = (0, F.aN)({
                    id: o.id,
                    banner: o.banner,
                    size: 1024,
                    canAnimate: !1
                });
                if ((null != n && ((e['--custom-background-static'] = 'url('.concat(n)), (e.height = '212px')), !l)) {
                    let n = (0, F.aN)({
                        id: o.id,
                        banner: o.banner,
                        size: 1024,
                        canAnimate: !0
                    });
                    null != n && (e['--custom-background-animated'] = 'url('.concat(n));
                }
            }
            return e;
        }, [r, o, l]);
    return (0, i.jsx)('div', {
        style: s,
        className: em.headerBanner
    });
}
