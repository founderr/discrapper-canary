n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(610521),
    l = n(512969),
    u = n(873546),
    c = n(442837),
    d = n(704215),
    f = n(335854),
    _ = n(481060),
    p = n(570140),
    h = n(721037),
    m = n(490173),
    g = n(114250),
    E = n(735246),
    v = n(315263),
    I = n(40851),
    b = n(607070),
    S = n(899663),
    T = n(793903),
    y = n(213609),
    A = n(613413),
    N = n(94795),
    C = n(327943),
    R = n(907459),
    O = n(559407),
    D = n(556766),
    L = n(514361),
    x = n(724145),
    w = n(195302),
    M = n(260035),
    P = n(482215),
    k = n(947519),
    U = n(243778),
    G = n(314910),
    B = n(84615),
    Z = n(429142),
    F = n(813744),
    V = n(311476),
    j = n(892254),
    H = n(210887),
    Y = n(978781),
    W = n(819640),
    K = n(594174),
    z = n(451478),
    q = n(358085),
    Q = n(74538),
    X = n(663993),
    J = n(823453),
    $ = n(628123),
    ee = n(436774),
    et = n(686546),
    en = n(151851),
    er = n(981631),
    ei = n(921944),
    ea = n(971583);
n(167666),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            q.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
        }),
    (0, f.E)({ getDefaultLinkInterceptor: v.default }),
    (0, X.Un)({
        createPromise: () => Promise.all([n.e('77298'), n.e('80451'), n.e('30634'), n.e('54343')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, X.Un)({
        createPromise: () => Promise.all([n.e('77298'), n.e('80451'), n.e('30634'), n.e('81811')]).then(n.bind(n, 80753)),
        webpackId: 80753
    });
let es = (0, X.Un)({
        createPromise: () => n.e('46369').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    eo = i.memo(function (e) {
        let t = (0, c.e7)([z.Z], () => z.Z.isFocused());
        return (0, r.jsx)(en.Z, {
            ...e,
            focused: t
        });
    });
t.Z = function (e) {
    let { children: t, skipsSettingDefaultPageTitle: n } = e,
        { pathname: a } = (0, l.TH)(),
        f = (0, q.getPlatform)(),
        v = u.tq || u.Em,
        z = (0, c.e7)([H.Z], () => (H.Z.darkSidebar ? er.BRd.DARK : void 0)),
        X = (0, c.e7)([b.Z], () => (b.Z.useForcedColors ? 'yes' : 'no')),
        [en, el, eu] = (0, c.Wu)([L.Z], () => [L.Z.isEditorOpen, L.Z.isCoachmark, L.Z.isPreview]),
        [ec, ed] = (0, c.Wu)([C.Z], () => [C.Z.isEditorOpen, C.Z.isUpsellPreview]),
        ef = (0, c.e7)([W.Z], () => W.Z.getLayers().includes(er.S9g.USER_SETTINGS)),
        e_ = (0, c.e7)([K.default], () => Q.ZP.canUseClientThemes(K.default.getCurrentUser())),
        ep = en && !ef,
        eh = [];
    ep && el && !e_ && eh.push(d.z.CLIENT_THEMES_COACHMARK);
    let [em, eg] = (0, U.US)(eh, ei.R.SIDEBAR, !0);
    eh.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    let eE = em === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
        ev = em === d.z.CLIENT_THEMES_COACHMARK;
    i.useEffect(() => {
        null ==
            (0, l.LX)(a, {
                path: 'invite',
                exact: !1,
                strict: !1
            }) &&
            eE &&
            !ev &&
            ((0, N.nJ)(),
            p.Z.dispatch({
                type: 'APP_ICON_TRACK_IMPRESSION',
                markAsDismissed: eg
            }));
    }, [eE, ev, eg, a]);
    let eI = i.useRef(document.body),
        eb = (ep && !el) || ev,
        eS = ec && !ef && !ev,
        eT = eu || ed,
        { enabled: ey } = V.Z.useExperiment(
            { location: 'AppSkeleton' },
            {
                autoTrackExposure: eT && (eb || eS),
                disable: !eT
            }
        );
    return (0, r.jsx)(
        j.Z,
        {
            children: (0, r.jsx)(S.Z, {
                children: (0, r.jsxs)(_.RedesignIconContextProvider, {
                    children: [
                        (0, r.jsx)(J.Z, { skipsSettingDefaultPageTitle: n }),
                        (0, r.jsx)(E.T, {
                            children: (0, r.jsx)($.Z, {
                                children: (0, r.jsxs)(_.FocusRingScope, {
                                    containerRef: eI,
                                    children: [
                                        (0, r.jsx)(et.Co, {}),
                                        (0, r.jsx)(ee.ZP, {}),
                                        (0, r.jsx)(o.OU, {}),
                                        (0, r.jsx)(I.Wu, {
                                            appContext: er.IlC.APP,
                                            renderWindow: window,
                                            children: (0, r.jsxs)(G.yP, {
                                                children: [
                                                    null != f
                                                        ? (0, r.jsx)(eo, {
                                                              type: f,
                                                              themeOverride: z
                                                          })
                                                        : null,
                                                    (0, r.jsxs)('div', {
                                                        className: s()(ea.appAsidePanelWrapper, v && ea.mobileAppAsidePanelWrapper, {
                                                            [ea.allowsScrolling]: (() => {
                                                                let e = (0, l.LX)(a, {
                                                                    path: er.Z5c.APPLICATION_DIRECTORY,
                                                                    exact: !1,
                                                                    strict: !1
                                                                });
                                                                return ((!!u.tq || !!u.Em) && null != e) || !1;
                                                            })()
                                                        }),
                                                        children: [
                                                            (0, r.jsx)(P.K, {}),
                                                            (0, r.jsx)('div', {
                                                                className: ea.notAppAsidePanel,
                                                                'data-app-not-dev-tools': !0,
                                                                children: (0, r.jsx)(M.m, {
                                                                    children: (0, r.jsx)(Z.OR, {
                                                                        children: (0, r.jsx)(T.Z.Provider, {
                                                                            value: y.Z,
                                                                            children: (0, r.jsxs)(w.p, {
                                                                                children: [
                                                                                    (0, r.jsx)('div', {
                                                                                        className: s()(v ? ea.mobileApp : ea.app),
                                                                                        children: t
                                                                                    }),
                                                                                    (0, r.jsx)(O.Z, {}),
                                                                                    (0, r.jsx)(m.Z, {}),
                                                                                    (0, r.jsx)(_.Modals, {}),
                                                                                    (0, r.jsx)(g.Z, {}),
                                                                                    (0, r.jsx)(B.Ox, {}),
                                                                                    (0, r.jsx)(G.Un, {}),
                                                                                    (0, r.jsx)(Z.ot, {}),
                                                                                    (0, r.jsx)(_.ToastContainer, {}),
                                                                                    (0, r.jsx)(A.Z, {}),
                                                                                    (0, r.jsx)(F.Z, {}),
                                                                                    (0, r.jsx)(es, {})
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            (0, r.jsx)(D.Z, {}),
                                                            (0, r.jsx)(h.Z, {}),
                                                            eb && !ey && (0, r.jsx)(x.Z, { markAsDismissed: eg }),
                                                            eS &&
                                                                !ey &&
                                                                (0, r.jsx)(R.Z, {
                                                                    isCoachmark: eE,
                                                                    markAsDismissed: eg
                                                                }),
                                                            (eb || eS) &&
                                                                ey &&
                                                                (0, r.jsx)(Y.Z, {
                                                                    initialTab: eS ? Y._.APP_ICONS : Y._.CLIENT_THEMES,
                                                                    markAsDismissed: eg
                                                                }),
                                                            (0, r.jsx)(k.Z, { mobile: v })
                                                        ]
                                                    }),
                                                    !1
                                                ]
                                            })
                                        }),
                                        (0, r.jsx)(o.OU, {})
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        },
        X
    );
};
