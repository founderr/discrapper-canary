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
    h = n(570140),
    p = n(721037),
    m = n(490173),
    g = n(114250),
    E = n(735246),
    v = n(315263),
    I = n(40851),
    S = n(607070),
    T = n(899663),
    b = n(793903),
    y = n(213609),
    A = n(613413),
    N = n(94795),
    C = n(327943),
    R = n(907459),
    O = n(559407),
    D = n(556766),
    L = n(514361),
    x = n(724145),
    w = n(260035),
    M = n(482215),
    P = n(947519),
    k = n(243778),
    U = n(314910),
    G = n(84615),
    B = n(429142),
    Z = n(813744),
    F = n(311476),
    V = n(892254),
    H = n(210887),
    j = n(978781),
    Y = n(819640),
    W = n(594174),
    K = n(451478),
    z = n(358085),
    q = n(74538),
    Q = n(663993),
    X = n(823453),
    J = n(628123),
    $ = n(436774),
    ee = n(686546),
    et = n(151851),
    en = n(981631),
    er = n(921944),
    ei = n(971583);
n(167666),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            z.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
        }),
    (0, f.E)({ getDefaultLinkInterceptor: v.default }),
    (0, Q.Un)({
        createPromise: () => Promise.all([n.e('77298'), n.e('80451'), n.e('30634'), n.e('54343')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, Q.Un)({
        createPromise: () => Promise.all([n.e('77298'), n.e('80451'), n.e('30634'), n.e('81811')]).then(n.bind(n, 80753)),
        webpackId: 80753
    });
let ea = (0, Q.Un)({
        createPromise: () => n.e('46369').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    es = i.memo(function (e) {
        let t = (0, c.e7)([K.Z], () => K.Z.isFocused());
        return (0, r.jsx)(et.Z, {
            ...e,
            focused: t
        });
    });
t.Z = function (e) {
    let { children: t, skipsSettingDefaultPageTitle: n } = e,
        { pathname: a } = (0, l.TH)(),
        f = (0, z.getPlatform)(),
        v = u.tq || u.Em,
        K = (0, c.e7)([H.Z], () => (H.Z.darkSidebar ? en.BRd.DARK : void 0)),
        Q = (0, c.e7)([S.Z], () => (S.Z.useForcedColors ? 'yes' : 'no')),
        [et, eo, el] = (0, c.Wu)([L.Z], () => [L.Z.isEditorOpen, L.Z.isCoachmark, L.Z.isPreview]),
        [eu, ec] = (0, c.Wu)([C.Z], () => [C.Z.isEditorOpen, C.Z.isUpsellPreview]),
        ed = (0, c.e7)([Y.Z], () => Y.Z.getLayers().includes(en.S9g.USER_SETTINGS)),
        ef = (0, c.e7)([W.default], () => q.ZP.canUseClientThemes(W.default.getCurrentUser())),
        e_ = et && !ed,
        eh = [];
    e_ && eo && !ef && eh.push(d.z.CLIENT_THEMES_COACHMARK);
    let [ep, em] = (0, k.US)(eh, er.R.SIDEBAR, !0);
    eh.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    let eg = ep === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
        eE = ep === d.z.CLIENT_THEMES_COACHMARK;
    i.useEffect(() => {
        null ==
            (0, l.LX)(a, {
                path: 'invite',
                exact: !1,
                strict: !1
            }) &&
            eg &&
            !eE &&
            ((0, N.nJ)(),
            h.Z.dispatch({
                type: 'APP_ICON_TRACK_IMPRESSION',
                markAsDismissed: em
            }));
    }, [eg, eE, em, a]);
    let ev = i.useRef(document.body),
        eI = (e_ && !eo) || eE,
        eS = eu && !ed && !eE,
        eT = el || ec,
        { enabled: eb } = F.Z.useExperiment(
            { location: 'AppSkeleton' },
            {
                autoTrackExposure: eT && (eI || eS),
                disable: !eT
            }
        );
    return (0, r.jsx)(
        V.Z,
        {
            children: (0, r.jsx)(T.Z, {
                children: (0, r.jsxs)(_.RedesignIconContextProvider, {
                    children: [
                        (0, r.jsx)(X.Z, { skipsSettingDefaultPageTitle: n }),
                        (0, r.jsx)(E.T, {
                            children: (0, r.jsx)(J.Z, {
                                children: (0, r.jsxs)(_.FocusRingScope, {
                                    containerRef: ev,
                                    children: [
                                        (0, r.jsx)(ee.Co, {}),
                                        (0, r.jsx)($.ZP, {}),
                                        (0, r.jsx)(o.OU, {}),
                                        (0, r.jsx)(I.Wu, {
                                            appContext: en.IlC.APP,
                                            renderWindow: window,
                                            children: (0, r.jsxs)(U.yP, {
                                                children: [
                                                    null != f
                                                        ? (0, r.jsx)(es, {
                                                              type: f,
                                                              themeOverride: K
                                                          })
                                                        : null,
                                                    (0, r.jsxs)('div', {
                                                        className: s()(ei.appAsidePanelWrapper, v && ei.mobileAppAsidePanelWrapper, {
                                                            [ei.allowsScrolling]: (() => {
                                                                let e = (0, l.LX)(a, {
                                                                    path: en.Z5c.APPLICATION_DIRECTORY,
                                                                    exact: !1,
                                                                    strict: !1
                                                                });
                                                                return ((!!u.tq || !!u.Em) && null != e) || !1;
                                                            })()
                                                        }),
                                                        children: [
                                                            (0, r.jsx)(M.K, {}),
                                                            (0, r.jsx)('div', {
                                                                className: ei.notAppAsidePanel,
                                                                'data-app-not-dev-tools': !0,
                                                                children: (0, r.jsx)(w.m, {
                                                                    children: (0, r.jsx)(B.OR, {
                                                                        children: (0, r.jsxs)(b.Z.Provider, {
                                                                            value: y.Z,
                                                                            children: [
                                                                                (0, r.jsx)('div', {
                                                                                    className: s()(v ? ei.mobileApp : ei.app),
                                                                                    children: t
                                                                                }),
                                                                                (0, r.jsx)(O.Z, {}),
                                                                                (0, r.jsx)(m.Z, {}),
                                                                                (0, r.jsx)(_.Modals, {}),
                                                                                (0, r.jsx)(g.Z, {}),
                                                                                (0, r.jsx)(G.Ox, {}),
                                                                                (0, r.jsx)(U.Un, {}),
                                                                                (0, r.jsx)(B.ot, {}),
                                                                                (0, r.jsx)(_.ToastContainer, {}),
                                                                                (0, r.jsx)(A.Z, {}),
                                                                                (0, r.jsx)(Z.Z, {}),
                                                                                (0, r.jsx)(ea, {})
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            (0, r.jsx)(D.Z, {}),
                                                            (0, r.jsx)(p.Z, {}),
                                                            eI && !eb && (0, r.jsx)(x.Z, { markAsDismissed: em }),
                                                            eS &&
                                                                !eb &&
                                                                (0, r.jsx)(R.Z, {
                                                                    isCoachmark: eg,
                                                                    markAsDismissed: em
                                                                }),
                                                            (eI || eS) &&
                                                                eb &&
                                                                (0, r.jsx)(j.Z, {
                                                                    initialTab: eS ? j._.APP_ICONS : j._.CLIENT_THEMES,
                                                                    markAsDismissed: em
                                                                }),
                                                            (0, r.jsx)(P.Z, { mobile: v })
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
        Q
    );
};
