n.r(a),
    n.d(a, {
        default: function () {
            return eE;
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
    Y = n(674588),
    F = n(264043),
    U = n(303383),
    W = n(887706),
    V = n(738130),
    z = n(4461),
    K = n(34674),
    q = n(576958),
    X = n(924489),
    J = n(125909),
    Q = n(409425),
    $ = n(132871),
    ee = n(147890),
    ea = n(491576),
    en = n(527564),
    ei = n(326135),
    et = n(940064),
    er = n(626004),
    el = n(939893),
    es = n(430913),
    eo = n(606183),
    ec = n(272242),
    ed = n(981631),
    eu = n(558921),
    e_ = n(689938),
    ep = n(613250),
    em = n(902294);
let eg = d().parserFor(el.Z),
    eI = d().reactFor(d().ruleOutput(el.Z, 'react')),
    eh = (0, p.Mg)(I.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
    ex = 'redirect_to_support_server',
    ef = 'start_application_install',
    eC = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(ed.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
    ev = (e) => {
        if (null == e) return null;
        let a = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
        return null != a ? a[1] : null;
    };
function eE(e) {
    var a, r, s, c;
    let d,
        {
            match: {
                params: { applicationId: p, section: g = ec.ApplicationDirectoryProfileSections.GENERAL }
            }
        } = e,
        I = (0, $.useApplicationDirectoryHistory)((e) => e.guildId),
        v = (0, W.Z)(),
        N = (0, m.e7)(
            [U.Z],
            () =>
                U.Z.getFetchState({
                    applicationId: p,
                    guildId: I
                }) === U.M.FETCHING
        ),
        el = t.useRef({
            applicationId: void 0,
            guildId: void 0
        }),
        { similarApplications: ev, similarLoadId: eE } = (0, m.cj)([U.Z], () => {
            let e = {
                    applicationId: p,
                    guildId: I
                },
                a = U.Z.getSimilarApplications(e);
            return (
                null == a ? (a = U.Z.getSimilarApplications(el.current)) : (el.current = e),
                {
                    similarApplications: null == a ? void 0 : a.applications,
                    similarLoadId: null == a ? void 0 : a.loadId
                }
            );
        }),
        eA = t.useMemo(() => (null == ev ? void 0 : ev.slice(0, 3)), [ev]),
        eN = (0, m.e7)([F.Z], () => F.Z.getApplicationFetchState(p)),
        [eT, ej] = t.useState(void 0),
        eS = t.useCallback(
            (e) => {
                if (null != p) {
                    if (e === ec.ApplicationDirectoryProfileSections.GENERAL) {
                        (0, ee.replaceAppDirectoryURLWith)(ed.Z5c.APPLICATION_DIRECTORY_PROFILE(p));
                        return;
                    }
                    (0, ee.replaceAppDirectoryURLWith)(ed.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(p, e));
                }
            },
            [p]
        ),
        eO = (0, m.e7)([Z.Z], () => Z.Z.isFocused()),
        eL = (0, m.e7)([D.default], () => D.default.locale),
        ey = t.useRef(p),
        eD = (0, m.e7)([F.Z], () => {
            let e = F.Z.getApplication(p);
            return null == e ? (e = F.Z.getApplication(ey.current)) : (ey.current = p), e;
        }),
        eM = (0, ea.Z)({ application: eD }),
        eZ = (0, m.e7)([M.default], () => M.default.getSessionId());
    (0, T.Tt)({ location: null == eD ? void 0 : eD.name });
    let ek = t.useCallback(async () => {
        try {
            var e;
            let a = null == eD ? void 0 : null === (e = eD.guild) || void 0 === e ? void 0 : e.id;
            if (null != a) {
                (null == eD ? void 0 : eD.id) != null &&
                    k.default.track(ed.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: eD.id,
                        guild_id: a
                    });
                let e = { page: ed.ZY5.APPLICATION_DIRECTORY };
                await (0, H.Ub)(a, e, { setsHistorySnapshot: !1 });
            }
        } catch {}
    }, [eD]);
    t.useEffect(() => {
        if (null == eD) return;
        let e = new URL(location.href);
        if (v && null != eZ && 'true' === e.searchParams.get(ex)) {
            e.searchParams.delete(ex);
            let a = e.pathname + e.search;
            (0, L.dL)(a), ek();
        }
    }, [v, ek, eZ, eD]);
    let ew = t.useCallback(() => {
            var e;
            null != (null == eD ? void 0 : null === (e = eD.guild) || void 0 === e ? void 0 : e.id) && (v ? ek() : (0, K.rf)({ [ex]: 'true' }));
        }, [eD, v, ek]),
        eB = t.useCallback(() => {
            (0, ee.replaceAppDirectoryURLWith)(''.concat(ed.Z5c.APPLICATION_DIRECTORY_PROFILE(p)).concat(location.search));
        }, [p]);
    t.useEffect(() => {
        g === ec.ApplicationDirectoryProfileSections.GENERAL && eB();
    }, [eB, g]),
        t.useEffect(() => {
            null != p && Y.i6(p);
        }, [p]),
        t.useEffect(() => {
            if ((null == eD ? void 0 : eD.directory_entry) != null) {
                let e = eD.directory_entry,
                    a = null == e ? void 0 : e.popular_application_commands;
                null != a
                    ? ej(
                          a.map((e) =>
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
            size: eh
        }),
        eH = (0, j.Z)({
            id: null !== (c = null == eD ? void 0 : eD.id) && void 0 !== c ? c : '',
            label: e_.Z.Messages.COPY_ID_APPLICATION
        }),
        { canInstall: eY, install: eF } = (0, z.P)(eD, I),
        eU = null === (a = (0, $.getPreviousView)()) || void 0 === a ? void 0 : a.type;
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
            let a = null == eD ? void 0 : null === (e = eD.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != a) return O.VY.filter((e) => _.e$(_.vB(a), e));
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
            var e, a, n;
            return null !== (n = (null !== (a = null == eD ? void 0 : null === (e = eD.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== a ? a : []).map(eP).filter(G.lm)) && void 0 !== n ? n : [];
        }, [eD]),
        eK = t.useCallback(
            (e, a) => {
                if (e.type === ed.s9s.IMG) {
                    let a = ez.filter((e) => e.type === ed.s9s.IMG),
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
        if (null != p)
            Y.T4({
                applicationId: p,
                guildId: I
            });
    }, [p, I]);
    let eX = t.useCallback(
            (e) => {
                let { application: a, mutualGuilds: n } = e;
                (null == eD ? void 0 : eD.id) != null &&
                    k.default.track(ed.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                        current_page: 'product',
                        application_id: eD.id,
                        suggested_application_id: a.id,
                        load_id: eE,
                        guild_id: I,
                        shown_mutual_guilds_count: n.length
                    }),
                    (0, ee.goToApplication)({ applicationId: a.id });
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
                    (0, B.JG)(eC(eD.id)),
                    e0(!0);
        }, [eD, e0, I]);
    t.useEffect(() => {
        let e = new URL(location.href);
        if (v && 'true' === e.searchParams.get(ef)) {
            e.searchParams.delete(ef);
            let a = e.pathname + e.search;
            (0, L.dL)(a), eF('product_page');
        }
    }, [v, eF]);
    let e1 = t.useCallback(() => {
            null != eD &&
                (v
                    ? eF('product_page')
                    : (k.default.track(ed.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                          application_id: p,
                          guild_id: I,
                          auth_type: null != eD.custom_install_url ? 'custom_url' : 'in_app',
                          source: 'product_page',
                          device_platform: u.tq ? 'mobile_web' : 'desktop_web'
                      }),
                      (0, K.rf)({ [ef]: 'true' })));
        }, [eD, v, eF, p, I]),
        e8 = (null == eD ? void 0 : eD.id) === eu.g,
        [e5, e2] = t.useState(!1),
        [e3, e4] = t.useState(!1),
        [e9, e7] = t.useState(!0),
        ae = (e) => {
            null != e && e2(e.scrollHeight > e.clientHeight);
        },
        aa = null != eW && eW.length > 0,
        an = (null == eD ? void 0 : eD.flags) != null,
        ai = (0, A.R)(null != p ? p : '');
    t.useEffect(() => {
        ai && null != p && (0, R.Z)(p);
    }, [ai, p]);
    let at = t.useMemo(() => {
            let e = [],
                a = !0;
            switch (g) {
                case ec.ApplicationDirectoryProfileSections.GENERAL: {
                    var n, t;
                    let r = null == eD ? void 0 : null === (n = eD.directory_entry) || void 0 === n ? void 0 : n.detailed_description;
                    null != r && r.length > 0
                        ? (e.push(
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(h.Heading, {
                                          className: ep.sectionHeader,
                                          variant: 'heading-md/semibold',
                                          children: e_.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                      }),
                                      (0, i.jsx)('div', {
                                          ref: ae,
                                          className: l()({
                                              [ep.descriptionClamp]: !e3,
                                              [ep.descriptionClampSafari]: !e3 && 'Safari' === o().name
                                          }),
                                          children: (0, i.jsx)(S.Z, {
                                              className: ep.detailedDescription,
                                              parser: eg,
                                              output: eI,
                                              state: { allowLinks: !0 },
                                              children: r
                                          })
                                      }),
                                      (e5 || e3) &&
                                          (0, i.jsx)(eb, {
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
                                            className: ep.sectionHeader,
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
                                            children: e_.Z.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
                                        }),
                                        (0, i.jsx)(et.Z, {
                                            className: ep.commandList,
                                            commands: eT
                                        })
                                    ]
                                })
                            ),
                            (a = !0));
                    break;
                }
                case ec.ApplicationDirectoryProfileSections.IMAGES: {
                    if (0 === ez.length) break;
                    let a = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                className: ep.errorImage,
                                src: em,
                                'aria-hidden': !0,
                                alt: ''
                            }),
                            (0, i.jsx)(h.Heading, {
                                variant: 'heading-xl/semibold',
                                children: e_.Z.Messages.ERRORS_IMAGE_NOT_FOUND
                            })
                        ]
                    });
                    ez.forEach((e, a) => {
                        null != eD
                            ? (e.alt = e_.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
                                  index: a + 1,
                                  totalImages: ez.length,
                                  name: eD.name
                              }))
                            : (e.alt = e_.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
                    }),
                        e.push(
                            (0, i.jsx)(C.Z, {
                                className: ep.carousel,
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
                                        k.default.track(ed.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                                            application_id: eD.id,
                                            load_time_ms: n,
                                            src: a
                                        });
                                }
                            })
                        );
                    break;
                }
                case ec.ApplicationDirectoryProfileSections.STORE:
                    ai && null != p && e.push((0, i.jsx)(en.M, { appId: p }));
                    break;
                case ec.ApplicationDirectoryProfileSections.PRIVACY:
                    aa &&
                        e.push(
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(h.Heading, {
                                        className: ep.sectionHeader,
                                        variant: 'heading-md/semibold',
                                        children: e_.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
                                    }),
                                    (0, i.jsx)(x.Z, {
                                        className: ep.commandList,
                                        grantedPermissions: eW,
                                        grantedPermissionsHeader: e_.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
                                    })
                                ]
                            })
                        ),
                        an &&
                            e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: ep.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
                                        }),
                                        (0, i.jsx)(er.Z, { application: eD })
                                    ]
                                })
                            );
            }
            return (
                e7(a),
                0 === e.length && g !== ec.ApplicationDirectoryProfileSections.GENERAL && null != eD && eB(),
                e.map((e, a) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: ep.section,
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
                ai &&
                    e.push({
                        name: ec.ApplicationDirectoryProfileSections.STORE,
                        text: e_.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
                        Icon: h.ShopSparkleIcon
                    }),
                (aa || an) &&
                    e.push({
                        name: ec.ApplicationDirectoryProfileSections.PRIVACY,
                        text: e_.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
                        Icon: h.PrivacyAndSafetyIcon
                    }),
                e
            );
        }, [ez.length, aa, an, ai]);
    return (
        (d =
            null == eD
                ? null == eN || eN === F.M.FETCHING
                    ? (0, i.jsx)(J.Z, { loading: eN === F.M.FETCHING })
                    : (0, i.jsx)('div', {
                          className: ep.__invalid_page,
                          children: (0, i.jsxs)('div', {
                              className: ep.emptyContainer,
                              children: [
                                  (0, i.jsx)('img', {
                                      className: ep.emptyImage,
                                      src: em,
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
                      loading: eN === F.M.FETCHING,
                      children: [
                          (0, i.jsx)(eR, {
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
                                                                  ai &&
                                                                      (0, i.jsx)(h.Tooltip, {
                                                                          tooltipClassName: ep.premiumIconTooltip,
                                                                          text: e_.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                          children: (e) =>
                                                                              (0, i.jsx)('img', {
                                                                                  ...e,
                                                                                  alt: e_.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                                  className: ep.premiumIcon,
                                                                                  src: n(744050)
                                                                              })
                                                                      }),
                                                                  e8 && (0, i.jsx)(Q.Z, { className: ep.partnerBadge })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: ep.buttons,
                                                              children: [
                                                                  (0, i.jsx)(h.Button, {
                                                                      onClick: e6,
                                                                      color: h.Button.Colors.PRIMARY,
                                                                      children: e$ ? e_.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : e_.Z.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(h.Button, {
                                                                      color: h.Button.Colors.BRAND,
                                                                      onClick: e1,
                                                                      disabled: !eY,
                                                                      children: e_.Z.Messages.APPLICATION_ADD_BUTTON
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
                                                  (0, i.jsx)(eo.Z, {
                                                      activeSection: g,
                                                      setSection: eV,
                                                      sections: ar
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
                                                  at,
                                                  null != eA && eA.length > 0
                                                      ? (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                e9 && (0, i.jsx)('div', { className: ep.separator }),
                                                                (0, i.jsxs)('div', {
                                                                    className: ep.section,
                                                                    children: [
                                                                        (0, i.jsx)(h.Heading, {
                                                                            className: ep.relatedHeader,
                                                                            variant: 'eyebrow',
                                                                            children: e_.Z.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
                                                                        }),
                                                                        (0, i.jsx)(J.Z, {
                                                                            loading: N,
                                                                            children: (0, i.jsx)(q.Z, {
                                                                                applications: eA,
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
                                              className: ep.sidebar,
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
        case v.ee.MEDIA_PROXY:
            var a;
            let n = null !== (a = e.proxy_url) && void 0 !== a ? a : e.url;
            return {
                type: ed.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case v.ee.YOUTUBE:
            let i = ev(e.url);
            if (null != i)
                return {
                    type: ed.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: i
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
let eb = (e) => {
        let a,
            { onToggle: n, isViewAll: t } = e;
        return (
            (a = t
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.Text, {
                              className: ep.showMoreButtonText,
                              variant: 'eyebrow',
                              children: e_.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
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
                              children: e_.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
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
                    onClick: n,
                    children: a
                })
            })
        );
    },
    eA = (e) => {
        let { className: a, contentClassName: n, children: t } = e;
        return (0, i.jsxs)('div', {
            className: l()([ep.dividerContainer, a]),
            children: [
                (0, i.jsx)('div', { className: ep.divider }),
                null != t
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: l()(ep.contentDivider, n),
                                  children: t
                              }),
                              (0, i.jsx)('div', { className: ep.divider })
                          ]
                      })
                    : null
            ]
        });
    };
function eR(e) {
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
        className: ep.headerBanner,
        'data-has-animated': '--custom-background-animated' in s
    });
}
