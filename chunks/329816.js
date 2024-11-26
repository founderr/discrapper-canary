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
    T = n(607070),
    b = n(899663),
    S = n(793903),
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
    P = n(260035),
    M = n(482215),
    k = n(540059),
    U = n(947519),
    B = n(243778),
    G = n(314910),
    Z = n(84615),
    F = n(429142),
    V = n(813744),
    j = n(311476),
    H = n(892254),
    Y = n(210887),
    W = n(978781),
    K = n(819640),
    z = n(594174),
    q = n(451478),
    Q = n(358085),
    X = n(74538),
    J = n(663993),
    $ = n(823453),
    ee = n(628123),
    et = n(436774),
    en = n(686546),
    er = n(151851),
    ei = n(981631),
    ea = n(921944),
    es = n(999429);
n(167666),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            Q.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
        }),
    (0, f.E)({ getDefaultLinkInterceptor: v.default }),
    (0, J.Un)({
        createPromise: () => Promise.all([n.e('77298'), n.e('80451'), n.e('30634'), n.e('54343')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, J.Un)({
        createPromise: () => Promise.all([n.e('77298'), n.e('80451'), n.e('30634'), n.e('81811')]).then(n.bind(n, 80753)),
        webpackId: 80753
    });
let eo = (0, J.Un)({
        createPromise: () => n.e('46369').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    el = i.memo(function (e) {
        let t = (0, k.Q)('ChannelSidebar'),
            n = (0, c.e7)([q.Z], () => q.Z.isFocused());
        return t
            ? null
            : (0, r.jsx)(er.Z, {
                  ...e,
                  focused: n
              });
    });
t.Z = function (e) {
    let { children: t, skipsSettingDefaultPageTitle: n } = e,
        { pathname: a } = (0, l.TH)(),
        f = (0, Q.getPlatform)(),
        v = u.tq || u.Em,
        k = (0, c.e7)([Y.Z], () => (Y.Z.darkSidebar ? ei.BRd.DARK : void 0)),
        q = (0, c.e7)([T.Z], () => (T.Z.useForcedColors ? 'yes' : 'no')),
        [J, er, eu] = (0, c.Wu)([L.Z], () => [L.Z.isEditorOpen, L.Z.isCoachmark, L.Z.isPreview]),
        [ec, ed] = (0, c.Wu)([C.Z], () => [C.Z.isEditorOpen, C.Z.isUpsellPreview]),
        ef = (0, c.e7)([K.Z], () => K.Z.getLayers().includes(ei.S9g.USER_SETTINGS)),
        e_ = (0, c.e7)([z.default], () => X.ZP.canUseClientThemes(z.default.getCurrentUser())),
        ep = J && !ef,
        eh = [];
    ep && er && !e_ && eh.push(d.z.CLIENT_THEMES_COACHMARK);
    let [em, eg] = (0, B.US)(eh, ea.R.SIDEBAR, !0);
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
        eT = (ep && !er) || ev,
        eb = ec && !ef && !ev,
        eS = eu || ed,
        { enabled: ey } = j.Z.useExperiment(
            { location: 'AppSkeleton' },
            {
                autoTrackExposure: eS && (eT || eb),
                disable: !eS
            }
        );
    return (0, r.jsx)(
        H.Z,
        {
            children: (0, r.jsx)(b.Z, {
                children: (0, r.jsxs)(_.RedesignIconContextProvider, {
                    children: [
                        (0, r.jsx)($.Z, { skipsSettingDefaultPageTitle: n }),
                        (0, r.jsx)(E.T, {
                            children: (0, r.jsx)(ee.Z, {
                                children: (0, r.jsxs)(_.FocusRingScope, {
                                    containerRef: eI,
                                    children: [
                                        (0, r.jsx)(en.Co, {}),
                                        (0, r.jsx)(et.ZP, {}),
                                        (0, r.jsx)(o.OU, {}),
                                        (0, r.jsx)(I.Wu, {
                                            appContext: ei.IlC.APP,
                                            renderWindow: window,
                                            children: (0, r.jsxs)(G.yP, {
                                                children: [
                                                    null != f
                                                        ? (0, r.jsx)(el, {
                                                              type: f,
                                                              themeOverride: k
                                                          })
                                                        : null,
                                                    (0, r.jsxs)('div', {
                                                        className: s()(es.appAsidePanelWrapper, v && es.mobileAppAsidePanelWrapper, {
                                                            [es.allowsScrolling]: (() => {
                                                                let e = (0, l.LX)(a, {
                                                                    path: ei.Z5c.APPLICATION_DIRECTORY,
                                                                    exact: !1,
                                                                    strict: !1
                                                                });
                                                                return ((!!u.tq || !!u.Em) && null != e) || !1;
                                                            })()
                                                        }),
                                                        children: [
                                                            (0, r.jsx)(M.K, {}),
                                                            (0, r.jsx)('div', {
                                                                className: es.notAppAsidePanel,
                                                                'data-app-not-dev-tools': !0,
                                                                children: (0, r.jsx)(P.m, {
                                                                    children: (0, r.jsx)(F.OR, {
                                                                        children: (0, r.jsx)(S.Z.Provider, {
                                                                            value: y.Z,
                                                                            children: (0, r.jsxs)(w.p, {
                                                                                children: [
                                                                                    (0, r.jsx)('div', {
                                                                                        className: s()(v ? es.mobileApp : es.app),
                                                                                        children: t
                                                                                    }),
                                                                                    (0, r.jsx)(O.Z, {}),
                                                                                    (0, r.jsx)(m.Z, {}),
                                                                                    (0, r.jsx)(_.Modals, {}),
                                                                                    (0, r.jsx)(g.Z, {}),
                                                                                    (0, r.jsx)(Z.Ox, {}),
                                                                                    (0, r.jsx)(G.Un, {}),
                                                                                    (0, r.jsx)(F.ot, {}),
                                                                                    (0, r.jsx)(_.ToastContainer, {}),
                                                                                    (0, r.jsx)(A.Z, {}),
                                                                                    (0, r.jsx)(V.Z, {}),
                                                                                    (0, r.jsx)(eo, {})
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            (0, r.jsx)(D.Z, {}),
                                                            (0, r.jsx)(h.Z, {}),
                                                            eT && !ey && (0, r.jsx)(x.Z, { markAsDismissed: eg }),
                                                            eb &&
                                                                !ey &&
                                                                (0, r.jsx)(R.Z, {
                                                                    isCoachmark: eE,
                                                                    markAsDismissed: eg
                                                                }),
                                                            (eT || eb) &&
                                                                ey &&
                                                                (0, r.jsx)(W.Z, {
                                                                    initialTab: eb ? W._.APP_ICONS : W._.CLIENT_THEMES,
                                                                    markAsDismissed: eg
                                                                }),
                                                            (0, r.jsx)(U.Z, { mobile: v })
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
        q
    );
};
