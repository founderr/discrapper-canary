var i = r(47120);
var a = r(653041);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(610521),
    d = r(512969),
    f = r(873546),
    _ = r(442837),
    h = r(704215),
    p = r(335854),
    m = r(481060),
    g = r(570140),
    E = r(721037),
    v = r(490173),
    I = r(504626),
    T = r(735246),
    b = r(315263),
    y = r(40851),
    S = r(607070),
    A = r(899663),
    N = r(793903),
    C = r(213609),
    R = r(613413),
    O = r(94795),
    D = r(327943),
    L = r(907459),
    x = r(559407),
    w = r(556766),
    P = r(514361),
    M = r(724145),
    k = r(195302),
    U = r(260035),
    B = r(482215),
    G = r(540059),
    Z = r(947519),
    F = r(243778),
    V = r(314910),
    j = r(84615),
    H = r(429142),
    Y = r(813744),
    W = r(311476),
    K = r(892254),
    z = r(210887),
    q = r(978781),
    Q = r(819640),
    X = r(594174),
    J = r(451478),
    $ = r(358085),
    ee = r(74538),
    et = r(663993),
    en = r(823453),
    er = r(628123),
    ei = r(436774),
    ea = r(686546),
    es = r(151851),
    eo = r(981631),
    el = r(921944),
    eu = r(999429);
r(167666),
    Promise.resolve()
        .then(r.bind(r, 62883))
        .then((e) => {
            $.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
        }),
    (0, p.E)({ getDefaultLinkInterceptor: b.default }),
    (0, et.Un)({
        createPromise: () => Promise.all([r.e('77298'), r.e('80451'), r.e('30634'), r.e('54343')]).then(r.bind(r, 849493)),
        webpackId: 849493
    }),
    (0, et.Un)({
        createPromise: () => Promise.all([r.e('77298'), r.e('80451'), r.e('30634'), r.e('81811')]).then(r.bind(r, 80753)),
        webpackId: 80753
    });
let ec = (0, et.Un)({
        createPromise: () => r.e('46369').then(r.bind(r, 177741)),
        webpackId: 177741
    }),
    ed = (0, et.Un)({
        createPromise: () => Promise.all([r.e('78447'), r.e('81465')]).then(r.bind(r, 420541)),
        webpackId: 420541
    }),
    ef = o.memo(function (e) {
        let n = (0, G.Q3)('ChannelSidebar'),
            r = (0, _.e7)([J.Z], () => J.Z.isFocused());
        return n
            ? null
            : (0, s.jsx)(es.Z, {
                  ...e,
                  focused: r
              });
    });
function e_(e) {
    let { children: n, skipsSettingDefaultPageTitle: r } = e,
        { pathname: i } = (0, d.TH)(),
        a = (0, $.getPlatform)(),
        l = f.tq || f.Em,
        p = (0, _.e7)([z.Z], () => (z.Z.darkSidebar ? eo.BRd.DARK : void 0)),
        b = (0, _.e7)([S.Z], () => (S.Z.useForcedColors ? 'yes' : 'no')),
        [G, J, et] = (0, _.Wu)([P.Z], () => [P.Z.isEditorOpen, P.Z.isCoachmark, P.Z.isPreview]),
        [es, e_] = (0, _.Wu)([D.Z], () => [D.Z.isEditorOpen, D.Z.isUpsellPreview]),
        eh = (0, _.e7)([Q.Z], () => Q.Z.getLayers().includes(eo.S9g.USER_SETTINGS)),
        ep = (0, _.e7)([X.default], () => ee.ZP.canUseClientThemes(X.default.getCurrentUser())),
        em = G && !eh,
        eg = es && !eh,
        eE = [];
    em && J && !ep && eE.push(h.z.CLIENT_THEMES_COACHMARK);
    let [ev, eI] = (0, F.US)(eE, el.R.SIDEBAR, !0);
    eE.push(h.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    let eT = ev === h.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
        eb = ev === h.z.CLIENT_THEMES_COACHMARK;
    o.useEffect(() => {
        null ==
            (0, d.LX)(i, {
                path: 'invite',
                exact: !1,
                strict: !1
            }) &&
            eT &&
            !eb &&
            ((0, O.nJ)(),
            g.Z.dispatch({
                type: 'APP_ICON_TRACK_IMPRESSION',
                markAsDismissed: eI
            }));
    }, [eT, eb, eI, i]);
    let ey = o.useRef(document.body),
        eS = () => {
            let e = (0, d.LX)(i, {
                path: eo.Z5c.APPLICATION_DIRECTORY,
                exact: !1,
                strict: !1
            });
            return ((!!f.tq || !!f.Em) && null != e) || !1;
        },
        eA = (em && !J) || eb,
        eN = eg && !eb,
        eC = et || e_,
        { enabled: eR } = W.Z.useExperiment(
            { location: 'AppSkeleton' },
            {
                autoTrackExposure: eC && (eA || eN),
                disable: !eC
            }
        );
    return (0, s.jsx)(
        K.Z,
        {
            children: (0, s.jsx)(A.Z, {
                children: (0, s.jsxs)(m.RedesignIconContextProvider, {
                    children: [
                        (0, s.jsx)(en.Z, { skipsSettingDefaultPageTitle: r }),
                        (0, s.jsx)(T.T, {
                            children: (0, s.jsx)(er.Z, {
                                children: (0, s.jsxs)(m.FocusRingScope, {
                                    containerRef: ey,
                                    children: [
                                        (0, s.jsx)(ea.Co, {}),
                                        (0, s.jsx)(ei.ZP, {}),
                                        (0, s.jsx)(c.OU, {}),
                                        (0, s.jsx)(y.Wu, {
                                            appContext: eo.IlC.APP,
                                            renderWindow: window,
                                            children: (0, s.jsxs)(V.yP, {
                                                children: [
                                                    null != a
                                                        ? (0, s.jsx)(ef, {
                                                              type: a,
                                                              themeOverride: p
                                                          })
                                                        : null,
                                                    (0, s.jsxs)('div', {
                                                        className: u()(eu.appAsidePanelWrapper, l && eu.mobileAppAsidePanelWrapper, { [eu.allowsScrolling]: eS() }),
                                                        children: [
                                                            (0, s.jsx)(B.K, {}),
                                                            (0, s.jsx)('div', {
                                                                className: eu.notAppAsidePanel,
                                                                'data-app-not-dev-tools': !0,
                                                                children: (0, s.jsx)(U.m, {
                                                                    children: (0, s.jsx)(H.OR, {
                                                                        children: (0, s.jsx)(N.Z.Provider, {
                                                                            value: C.Z,
                                                                            children: (0, s.jsxs)(k.p, {
                                                                                children: [
                                                                                    (0, s.jsx)('div', {
                                                                                        className: u()(l ? eu.mobileApp : eu.app),
                                                                                        children: n
                                                                                    }),
                                                                                    (0, s.jsx)(x.Z, {}),
                                                                                    (0, s.jsx)(v.Z, {}),
                                                                                    (0, s.jsx)(m.Modals, {}),
                                                                                    (0, s.jsx)(I.Z, {}),
                                                                                    (0, s.jsx)(j.Ox, {}),
                                                                                    (0, s.jsx)(V.Un, {}),
                                                                                    (0, s.jsx)(H.ot, {}),
                                                                                    (0, s.jsx)(m.ToastContainer, {}),
                                                                                    (0, s.jsx)(R.Z, {}),
                                                                                    (0, s.jsx)(Y.Z, {}),
                                                                                    (0, s.jsx)(ec, {}),
                                                                                    (0, s.jsx)(ed, {})
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            (0, s.jsx)(w.Z, {}),
                                                            (0, s.jsx)(E.Z, {}),
                                                            eA && !eR && (0, s.jsx)(M.Z, { markAsDismissed: eI }),
                                                            eN &&
                                                                !eR &&
                                                                (0, s.jsx)(L.Z, {
                                                                    isCoachmark: eT,
                                                                    markAsDismissed: eI
                                                                }),
                                                            (eA || eN) &&
                                                                eR &&
                                                                (0, s.jsx)(q.Z, {
                                                                    initialTab: eN ? q._.APP_ICONS : q._.CLIENT_THEMES,
                                                                    markAsDismissed: eI
                                                                }),
                                                            (0, s.jsx)(Z.Z, { mobile: l })
                                                        ]
                                                    }),
                                                    !1
                                                ]
                                            })
                                        }),
                                        (0, s.jsx)(c.OU, {})
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        },
        b
    );
}
n.Z = e_;
