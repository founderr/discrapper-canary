n(47120), n(653041);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(802498),
    l = n(266067),
    u = n(873546),
    c = n(442837),
    d = n(704215),
    _ = n(335854),
    E = n(481060),
    f = n(570140),
    h = n(721037),
    p = n(490173),
    I = n(114250),
    m = n(735246),
    T = n(315263),
    S = n(40851),
    g = n(607070),
    A = n(899663),
    N = n(793903),
    O = n(213609),
    R = n(613413),
    v = n(94795),
    C = n(327943),
    L = n(907459),
    y = n(559407),
    D = n(556766),
    b = n(514361),
    M = n(724145),
    P = n(260035),
    U = n(482215),
    w = n(947519),
    x = n(243778),
    G = n(314910),
    k = n(84615),
    B = n(429142),
    F = n(813744),
    V = n(311476),
    H = n(892254),
    Z = n(210887),
    Y = n(978781),
    j = n(819640),
    W = n(594174),
    K = n(451478),
    z = n(358085),
    q = n(74538),
    Q = n(663993),
    X = n(823453),
    $ = n(628123),
    J = n(436774),
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
    (0, _.E)({ getDefaultLinkInterceptor: T.default }),
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
        _ = (0, z.getPlatform)(),
        T = u.tq || u.Em,
        K = (0, c.e7)([Z.Z], () => (Z.Z.darkSidebar ? en.BRd.DARK : void 0)),
        Q = (0, c.e7)([g.Z], () => (g.Z.useForcedColors ? 'yes' : 'no')),
        [et, eo, el] = (0, c.Wu)([b.Z], () => [b.Z.isEditorOpen, b.Z.isCoachmark, b.Z.isPreview]),
        [eu, ec] = (0, c.Wu)([C.Z], () => [C.Z.isEditorOpen, C.Z.isUpsellPreview]),
        ed = (0, c.e7)([j.Z], () => j.Z.getLayers().includes(en.S9g.USER_SETTINGS)),
        e_ = (0, c.e7)([W.default], () => q.ZP.canUseClientThemes(W.default.getCurrentUser())),
        eE = et && !ed,
        ef = [];
    eE && eo && !e_ && ef.push(d.z.CLIENT_THEMES_COACHMARK);
    let [eh, ep] = (0, x.US)(ef, er.R.SIDEBAR, !0);
    ef.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    let eI = eh === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
        em = eh === d.z.CLIENT_THEMES_COACHMARK;
    i.useEffect(() => {
        null ==
            (0, l.LX)(a, {
                path: 'invite',
                exact: !1,
                strict: !1
            }) &&
            eI &&
            !em &&
            ((0, v.nJ)(),
            f.Z.dispatch({
                type: 'APP_ICON_TRACK_IMPRESSION',
                markAsDismissed: ep
            }));
    }, [eI, em, ep, a]);
    let eT = i.useRef(document.body),
        eS = (eE && !eo) || em,
        eg = eu && !ed && !em,
        eA = el || ec,
        { enabled: eN } = V.Z.useExperiment(
            { location: 'AppSkeleton' },
            {
                autoTrackExposure: eA && (eS || eg),
                disable: !eA
            }
        );
    return (0, r.jsx)(
        H.Z,
        {
            children: (0, r.jsx)(A.Z, {
                children: (0, r.jsxs)(E.RedesignIconContextProvider, {
                    children: [
                        (0, r.jsx)(X.Z, { skipsSettingDefaultPageTitle: n }),
                        (0, r.jsx)(m.T, {
                            children: (0, r.jsx)($.Z, {
                                children: (0, r.jsxs)(E.FocusRingScope, {
                                    containerRef: eT,
                                    children: [
                                        (0, r.jsx)(ee.Co, {}),
                                        (0, r.jsx)(J.ZP, {}),
                                        (0, r.jsx)(o.OU, {}),
                                        (0, r.jsx)(S.Wu, {
                                            appContext: en.IlC.APP,
                                            renderWindow: window,
                                            children: (0, r.jsxs)(G.yP, {
                                                children: [
                                                    null != _
                                                        ? (0, r.jsx)(es, {
                                                              type: _,
                                                              themeOverride: K
                                                          })
                                                        : null,
                                                    (0, r.jsxs)('div', {
                                                        className: s()(ei.appAsidePanelWrapper, T && ei.mobileAppAsidePanelWrapper, {
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
                                                            (0, r.jsx)(U.K, {}),
                                                            (0, r.jsx)('div', {
                                                                className: ei.notAppAsidePanel,
                                                                'data-app-not-dev-tools': !0,
                                                                children: (0, r.jsx)(P.m, {
                                                                    children: (0, r.jsx)(B.OR, {
                                                                        children: (0, r.jsxs)(N.Z.Provider, {
                                                                            value: O.Z,
                                                                            children: [
                                                                                (0, r.jsx)('div', {
                                                                                    className: s()(T ? ei.mobileApp : ei.app),
                                                                                    children: t
                                                                                }),
                                                                                (0, r.jsx)(y.Z, {}),
                                                                                (0, r.jsx)(p.Z, {}),
                                                                                (0, r.jsx)(E.Modals, {}),
                                                                                (0, r.jsx)(I.Z, {}),
                                                                                (0, r.jsx)(k.Ox, {}),
                                                                                (0, r.jsx)(G.Un, {}),
                                                                                (0, r.jsx)(B.ot, {}),
                                                                                (0, r.jsx)(E.ToastContainer, {}),
                                                                                (0, r.jsx)(R.Z, {}),
                                                                                (0, r.jsx)(F.Z, {}),
                                                                                (0, r.jsx)(ea, {})
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            (0, r.jsx)(D.Z, {}),
                                                            (0, r.jsx)(h.Z, {}),
                                                            eS && !eN && (0, r.jsx)(M.Z, { markAsDismissed: ep }),
                                                            eg &&
                                                                !eN &&
                                                                (0, r.jsx)(L.Z, {
                                                                    isCoachmark: eI,
                                                                    markAsDismissed: ep
                                                                }),
                                                            (eS || eg) &&
                                                                eN &&
                                                                (0, r.jsx)(Y.Z, {
                                                                    initialTab: eg ? Y._.APP_ICONS : Y._.CLIENT_THEMES,
                                                                    markAsDismissed: ep
                                                                }),
                                                            (0, r.jsx)(w.Z, { mobile: T })
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
