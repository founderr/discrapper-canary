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
    x = n(995648),
    f = n(445986),
    C = n(9807),
    v = n(911969),
    E = n(330726),
    P = n(782568),
    R = n(607070),
    A = n(581364),
    b = n(970321),
    N = n(283836),
    T = n(220082),
    j = n(252618),
    S = n(299206),
    O = n(241209),
    L = n(422559),
    y = n(703656),
    D = n(280885),
    M = n(706454),
    Z = n(314897),
    k = n(451478),
    w = n(626135),
    B = n(768581),
    G = n(572004),
    H = n(823379),
    Y = n(900849),
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
    ex = (0, p.Mg)(I.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
    ef = 'redirect_to_support_server',
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
        R = (0, m.e7)(
            [W.Z],
            () =>
                W.Z.getFetchState({
                    applicationId: p,
                    guildId: I
                }) === W.M.FETCHING
        ),
        T = t.useRef({
            applicationId: void 0,
            guildId: void 0
        }),
        { similarApplications: es, similarLoadId: eE } = (0, m.cj)([W.Z], () => {
            let e = {
                    applicationId: p,
                    guildId: I
                },
                a = W.Z.getSimilarApplications(e);
            return (
                null == a ? (a = W.Z.getSimilarApplications(T.current)) : (T.current = e),
                {
                    similarApplications: null == a ? void 0 : a.applications,
                    similarLoadId: null == a ? void 0 : a.loadId
                }
            );
        }),
        eP = t.useMemo(() => (null == es ? void 0 : es.slice(0, 3)), [es]),
        eb = (0, m.e7)([U.Z], () => U.Z.getApplicationFetchState(p)),
        [eT, ej] = t.useState(void 0),
        eS = t.useCallback(
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
        eO = (0, m.e7)([k.Z], () => k.Z.isFocused()),
        eL = (0, m.e7)([M.default], () => M.default.locale),
        ey = t.useRef(p),
        eD = (0, m.e7)([U.Z], () => {
            let e = U.Z.getApplication(p);
            return null == e ? (e = U.Z.getApplication(ey.current)) : (ey.current = p), e;
        }),
        eM = (0, en.Z)({ application: eD }),
        eZ = (0, m.e7)([Z.default], () => Z.default.getSessionId());
    (0, j.Tt)({ location: null == eD ? void 0 : eD.name });
    let ek = t.useCallback(async () => {
        try {
            var e;
            let a = null == eD ? void 0 : null === (e = eD.guild) || void 0 === e ? void 0 : e.id;
            if (null != a) {
                (null == eD ? void 0 : eD.id) != null &&
                    w.default.track(eu.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: eD.id,
                        guild_id: a
                    });
                let e = { page: eu.ZY5.APPLICATION_DIRECTORY };
                await (0, Y.Ub)(a, e, { setsHistorySnapshot: !1 });
            }
        } catch {}
    }, [eD]);
    t.useEffect(() => {
        if (null == eD) return;
        let e = new URL(location.href);
        if (v && null != eZ && 'true' === e.searchParams.get(ef)) {
            e.searchParams.delete(ef);
            let a = e.pathname + e.search;
            (0, y.dL)(a), ek();
        }
    }, [v, ek, eZ, eD]);
    let ew = t.useCallback(() => {
            var e;
            null != (null == eD ? void 0 : null === (e = eD.guild) || void 0 === e ? void 0 : e.id) && (v ? ek() : (0, q.rf)({ [ef]: 'true' }));
        }, [eD, v, ek]),
        eB = t.useCallback(() => {
            (0, ea.replaceAppDirectoryURLWith)(''.concat(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(p)).concat(location.search));
        }, [p]);
    t.useEffect(() => {
        g === ed.ApplicationDirectoryProfileSections.GENERAL && eB();
    }, [eB, g]),
        t.useEffect(() => {
            null != p && F.i6(p);
        }, [p]),
        t.useEffect(() => {
            if ((null == eD ? void 0 : eD.directory_entry) != null) {
                let e = eD.directory_entry,
                    a = null == e ? void 0 : e.popular_application_commands;
                null != a
                    ? ej(
                          a.map((e) =>
                              (0, A.Z8)({
                                  rootCommand: e,
                                  command: e,
                                  applicationId: e.application_id
                              })
                          )
                      )
                    : ej(void 0);
            }
        }, [eD]);
    let eG = B.ZP.getApplicationIconURL({
            id: null !== (s = null == eD ? void 0 : eD.id) && void 0 !== s ? s : '-1',
            icon: null == eD ? void 0 : eD.icon,
            size: ex
        }),
        eH = (0, S.Z)({
            id: null !== (c = null == eD ? void 0 : eD.id) && void 0 !== c ? c : '',
            label: ep.Z.Messages.COPY_ID_APPLICATION
        }),
        { canInstall: eY, install: eF } = (0, K.P)(eD, I),
        eU = null === (a = (0, ee.getPreviousView)()) || void 0 === a ? void 0 : a.type;
    t.useEffect(() => {
        (null == eD ? void 0 : eD.id) != null &&
            w.default.track(eu.rMx.APP_DIRECTORY_PAGE_VIEWED, {
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
            let a = null == eD ? void 0 : null === (e = eD.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != a) return L.VY.filter((e) => _.e$(_.vB(a), e));
        }, [null == eD ? void 0 : null === (r = eD.install_params) || void 0 === r ? void 0 : r.permissions]),
        eV = t.useCallback(
            (e) => {
                eS(e),
                    (null == eD ? void 0 : eD.id) != null &&
                        w.default.track(eu.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: eD.id,
                            guild_id: I,
                            tab_name: e
                        });
            },
            [null == eD ? void 0 : eD.id, I, eS]
        ),
        ez = t.useMemo(() => {
            var e, a, n;
            return null !== (n = (null !== (a = null == eD ? void 0 : null === (e = eD.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== a ? a : []).map(eR).filter(H.lm)) && void 0 !== n ? n : [];
        }, [eD]),
        eK = t.useCallback(
            (e, a) => {
                if (e.type === eu.s9s.IMG) {
                    let a = ez.filter((e) => e.type === eu.s9s.IMG),
                        t = a.findIndex((a) => a === e);
                    if (t < 0) return;
                    let r = a.map((e) => ({
                        src: (0, f.Q)(e.src),
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
            [ez]
        ),
        eq = t.useCallback(
            (e) => {
                (null == eD ? void 0 : eD.id) != null &&
                    w.default.track(eu.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        current_page: 'product',
                        category: e.name,
                        category_id: e.id,
                        application_id: eD.id,
                        guild_id: I
                    }),
                    (0, ea.goToCategory)({ categoryId: e.id });
            },
            [eD, I]
        );
    t.useEffect(() => {
        if (null != p)
            F.T4({
                applicationId: p,
                guildId: I
            });
    }, [p, I]);
    let eX = t.useCallback(
            (e) => {
                let { application: a, mutualGuilds: n } = e;
                (null == eD ? void 0 : eD.id) != null &&
                    w.default.track(eu.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                        current_page: 'product',
                        application_id: eD.id,
                        suggested_application_id: a.id,
                        load_id: eE,
                        guild_id: I,
                        shown_mutual_guilds_count: n.length
                    }),
                    (0, ea.goToApplication)({ applicationId: a.id });
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
        [e$, e0] = (0, E.Z)(!1, 1000),
        e6 = t.useCallback(() => {
            if (null != eD)
                w.default.track(eu.rMx.APP_SHARE_BUTTON_CLICKED, {
                    source: 'product_page',
                    application_id: eD.id,
                    guild_id: I
                }),
                    (0, G.JG)(ev(eD.id)),
                    e0(!0);
        }, [eD, e0, I]);
    t.useEffect(() => {
        let e = new URL(location.href);
        if (v && 'true' === e.searchParams.get(eC)) {
            e.searchParams.delete(eC);
            let a = e.pathname + e.search;
            (0, y.dL)(a), eF('product_page');
        }
    }, [v, eF]);
    let e1 = t.useCallback(() => {
            null != eD &&
                (v
                    ? eF('product_page')
                    : (w.default.track(eu.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                          application_id: p,
                          guild_id: I,
                          auth_type: null != eD.custom_install_url ? 'custom_url' : 'in_app',
                          source: 'product_page',
                          device_platform: u.tq ? 'mobile_web' : 'desktop_web'
                      }),
                      (0, q.rf)({ [eC]: 'true' })));
        }, [eD, v, eF, p, I]),
        e8 = (null == eD ? void 0 : eD.id) === e_.g,
        [e5, e2] = t.useState(!1),
        [e3, e4] = t.useState(!1),
        [e9, e7] = t.useState(!0),
        ae = (e) => {
            null != e && e2(e.scrollHeight > e.clientHeight);
        },
        aa = null != eW && eW.length > 0,
        an = (null == eD ? void 0 : eD.flags) != null,
        ai = (0, b.R)(null != p ? p : '');
    t.useEffect(() => {
        ai && null != p && (0, N.Z)(p);
    }, [ai, p]);
    let at = t.useMemo(() => {
            let e = [],
                a = !0;
            switch (g) {
                case ed.ApplicationDirectoryProfileSections.GENERAL: {
                    var n, t;
                    let r = null == eD ? void 0 : null === (n = eD.directory_entry) || void 0 === n ? void 0 : n.detailed_description;
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
                                          ref: ae,
                                          className: l()({
                                              [em.descriptionClamp]: !e3,
                                              [em.descriptionClampSafari]: !e3 && 'Safari' === o().name
                                          }),
                                          children: (0, i.jsx)(O.Z, {
                                              className: em.detailedDescription,
                                              parser: eI,
                                              output: eh,
                                              state: { allowLinks: !0 },
                                              children: r
                                          })
                                      }),
                                      (e5 || e3) &&
                                          (0, i.jsx)(eA, {
                                              isViewAll: e3,
                                              onToggle: () => {
                                                  e4((e) => !e);
                                              }
                                          })
                                  ]
                              })
                          ),
                          (a = !1))
                        : (null == eD ? void 0 : null === (t = eD.directory_entry) || void 0 === t ? void 0 : t.short_description) !== void 0
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
                        null != eT &&
                            eT.length > 0 &&
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
                                            commands: eT
                                        })
                                    ]
                                })
                            ),
                            (a = !0));
                    break;
                }
                case ed.ApplicationDirectoryProfileSections.IMAGES: {
                    if (0 === ez.length) break;
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
                    ez.forEach((e, a) => {
                        null != eD
                            ? (e.alt = ep.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
                                  index: a + 1,
                                  totalImages: ez.length,
                                  name: eD.name
                              }))
                            : (e.alt = ep.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
                    }),
                        e.push(
                            (0, i.jsx)(C.Z, {
                                className: em.carousel,
                                themedPagination: !0,
                                items: ez,
                                autoplayInterval: 8000,
                                paused: !eO,
                                videoAutoPlay: !0,
                                onCurrentItemClick: eK,
                                errorComponent: a,
                                onImageLoad: (e) => {
                                    let { src: a, loadTimeMs: n } = e;
                                    null != n &&
                                        null != eD &&
                                        w.default.track(eu.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                                            application_id: eD.id,
                                            load_time_ms: n,
                                            src: a
                                        });
                                }
                            })
                        );
                    break;
                }
                case ed.ApplicationDirectoryProfileSections.STORE:
                    ai && null != p && e.push((0, i.jsx)(ei.M, { appId: p }));
                    break;
                case ed.ApplicationDirectoryProfileSections.PRIVACY:
                    aa &&
                        e.push(
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(h.Heading, {
                                        className: em.sectionHeader,
                                        variant: 'heading-md/semibold',
                                        children: ep.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
                                    }),
                                    (0, i.jsx)(x.Z, {
                                        className: em.commandList,
                                        grantedPermissions: eW,
                                        grantedPermissionsHeader: ep.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
                                    })
                                ]
                            })
                        ),
                        an &&
                            e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: em.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: ep.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
                                        }),
                                        (0, i.jsx)(el.Z, { application: eD })
                                    ]
                                })
                            );
            }
            return (
                e7(a),
                0 === e.length && g !== ed.ApplicationDirectoryProfileSections.GENERAL && null != eD && eB(),
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
        }, [g, eB, eD, eT, e3, e5, ez, eO, eK, ai, p, aa, an, eW]),
        ar = t.useMemo(() => {
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
                ai &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.STORE,
                        text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
                        Icon: h.ShopSparkleIcon
                    }),
                (aa || an) &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.PRIVACY,
                        text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
                        Icon: h.PrivacyAndSafetyIcon
                    }),
                e
            );
        }, [ez.length, aa, an, ai]);
    return (
        (d =
            null == eD
                ? null == eb || eb === U.M.FETCHING
                    ? (0, i.jsx)(Q.Z, { loading: eb === U.M.FETCHING })
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
                      loading: eb === U.M.FETCHING,
                      children: [
                          (0, i.jsx)(eN, {
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
                                                      width: ex,
                                                      height: ex
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
                                                                  ai &&
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
                                                                  e8 && (0, i.jsx)($.Z, { className: em.partnerBadge })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: em.buttons,
                                                              children: [
                                                                  (0, i.jsx)(h.Button, {
                                                                      onClick: e6,
                                                                      color: h.Button.Colors.PRIMARY,
                                                                      children: e$ ? ep.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : ep.Z.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(h.Button, {
                                                                      color: h.Button.Colors.BRAND,
                                                                      onClick: e1,
                                                                      disabled: !eY,
                                                                      children: ep.Z.Messages.APPLICATION_ADD_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(h.Popout, {
                                                                      renderPopout: (e) => {
                                                                          let { closePopout: a } = e;
                                                                          return eQ(a);
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
                                                      setSection: eV,
                                                      sections: ar
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
                                                  at,
                                                  null != eP && eP.length > 0
                                                      ? (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                e9 && (0, i.jsx)('div', { className: em.separator }),
                                                                (0, i.jsxs)('div', {
                                                                    className: em.section,
                                                                    children: [
                                                                        (0, i.jsx)(h.Heading, {
                                                                            className: em.relatedHeader,
                                                                            variant: 'eyebrow',
                                                                            children: ep.Z.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
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
        (0, i.jsx)(z.Z, { children: d })
    );
}
function eR(e) {
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
            (0, i.jsx)(eb, {
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
    eb = (e) => {
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
        r = (0, T.ZP)(n, g.Z.unsafe_rawColors.PRIMARY_800.css),
        { bot: l } = a,
        s = (0, m.e7)([R.Z], () => R.Z.useReducedMotion),
        o = t.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != l) {
                let a = (0, B.aN)({
                    id: l.id,
                    banner: l.banner,
                    size: 1024,
                    canAnimate: !1
                });
                if ((null != a && ((e['--custom-background-static'] = 'url('.concat(a)), (e.height = '212px')), !s)) {
                    let a = (0, B.aN)({
                        id: l.id,
                        banner: l.banner,
                        size: 1024,
                        canAnimate: !0
                    });
                    null != a && (e['--custom-background-animated'] = 'url('.concat(a));
                }
            }
            return e;
        }, [r, l, s]);
    return (0, i.jsx)('div', {
        style: o,
        className: em.headerBanner
    });
}
