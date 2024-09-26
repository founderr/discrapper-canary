var r = n(47120);
var i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(802498),
    c = n(266067),
    d = n(873546),
    _ = n(442837),
    E = n(704215),
    f = n(335854),
    h = n(481060),
    p = n(570140),
    m = n(721037),
    I = n(490173),
    T = n(114250),
    g = n(315263),
    S = n(40851),
    A = n(607070),
    v = n(899663),
    N = n(793903),
    O = n(213609),
    R = n(613413),
    C = n(94795),
    y = n(327943),
    L = n(907459),
    b = n(559407),
    D = n(556766),
    M = n(514361),
    P = n(724145),
    U = n(260035),
    w = n(482215),
    x = n(947519),
    G = n(243778),
    k = n(314910),
    B = n(84615),
    F = n(429142),
    Z = n(813744),
    V = n(311476),
    H = n(892254),
    Y = n(210887),
    j = n(978781),
    W = n(819640),
    K = n(594174),
    z = n(451478),
    q = n(358085),
    Q = n(74538),
    X = n(663993),
    $ = n(823453),
    J = n(628123),
    ee = n(436774),
    et = n(962745),
    en = n(686546),
    er = n(151851),
    ei = n(981631),
    ea = n(921944),
    eo = n(971583);
n(167666),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            q.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
        }),
    (0, f.E)({ getDefaultLinkInterceptor: g.default }),
    (0, X.Un)({
        createPromise: () => Promise.all([n.e('80451'), n.e('30634'), n.e('54343')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, X.Un)({
        createPromise: () => Promise.all([n.e('80451'), n.e('30634'), n.e('81811')]).then(n.bind(n, 80753)),
        webpackId: 80753
    });
let es = (0, X.Un)({
        createPromise: () => n.e('46369').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    el = o.memo(function (e) {
        let t = (0, _.e7)([z.Z], () => z.Z.isFocused());
        return (0, a.jsx)(er.Z, {
            ...e,
            focused: t
        });
    });
function eu(e) {
    let { children: t, skipsSettingDefaultPageTitle: n } = e,
        { pathname: r } = (0, c.TH)(),
        i = (0, q.getPlatform)(),
        s = d.tq || d.Em,
        f = (0, _.e7)([Y.Z], () => (Y.Z.darkSidebar ? ei.BRd.DARK : void 0)),
        g = (0, _.e7)([A.Z], () => (A.Z.useForcedColors ? 'yes' : 'no')),
        [z, X, er] = (0, _.Wu)([M.Z], () => [M.Z.isEditorOpen, M.Z.isCoachmark, M.Z.isPreview]),
        [eu, ec] = (0, _.Wu)([y.Z], () => [y.Z.isEditorOpen, y.Z.isUpsellPreview]),
        ed = (0, _.e7)([W.Z], () => W.Z.getLayers().includes(ei.S9g.USER_SETTINGS)),
        e_ = (0, _.e7)([K.default], () => Q.ZP.canUseClientThemes(K.default.getCurrentUser())),
        eE = z && !ed,
        ef = eu && !ed,
        eh = [];
    eE && X && !e_ && eh.push(E.z.CLIENT_THEMES_COACHMARK);
    let [ep, em] = (0, G.US)(eh, ea.R.SIDEBAR, !0);
    eh.push(E.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    let eI = ep === E.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
        eT = ep === E.z.CLIENT_THEMES_COACHMARK;
    o.useEffect(() => {
        null ==
            (0, c.LX)(r, {
                path: 'invite',
                exact: !1,
                strict: !1
            }) &&
            eI &&
            !eT &&
            ((0, C.nJ)(),
            p.Z.dispatch({
                type: 'APP_ICON_TRACK_IMPRESSION',
                markAsDismissed: em
            }));
    }, [eI, eT, em, r]);
    let eg = o.useRef(document.body),
        eS = () => {
            let e = (0, c.LX)(r, {
                path: ei.Z5c.APPLICATION_DIRECTORY,
                exact: !1,
                strict: !1
            });
            return ((!!d.tq || !!d.Em) && null != e) || !1;
        },
        eA = (eE && !X) || eT,
        ev = ef && !eT,
        eN = er || ec,
        { enabled: eO } = V.Z.useExperiment(
            { location: 'AppSkeleton' },
            {
                autoTrackExposure: eN && (eA || ev),
                disable: !eN
            }
        );
    return (0, a.jsx)(
        H.Z,
        {
            children: (0, a.jsx)(v.Z, {
                children: (0, a.jsxs)(h.RedesignIconContextProvider, {
                    children: [
                        (0, a.jsx)($.Z, { skipsSettingDefaultPageTitle: n }),
                        (0, a.jsx)(et.Z, {
                            children: (0, a.jsx)(J.Z, {
                                children: (0, a.jsxs)(h.FocusRingScope, {
                                    containerRef: eg,
                                    children: [
                                        (0, a.jsx)(en.Co, {}),
                                        (0, a.jsx)(ee.ZP, {}),
                                        (0, a.jsx)(u.OU, {}),
                                        (0, a.jsx)(S.Wu, {
                                            appContext: ei.IlC.APP,
                                            renderWindow: window,
                                            children: (0, a.jsxs)(k.yP, {
                                                children: [
                                                    null != i
                                                        ? (0, a.jsx)(el, {
                                                              type: i,
                                                              themeOverride: f
                                                          })
                                                        : null,
                                                    (0, a.jsxs)('div', {
                                                        className: l()(eo.appAsidePanelWrapper, s && eo.mobileAppAsidePanelWrapper, { [eo.allowsScrolling]: eS() }),
                                                        children: [
                                                            (0, a.jsx)(w.K, {}),
                                                            (0, a.jsx)('div', {
                                                                className: eo.notAppAsidePanel,
                                                                'data-app-not-dev-tools': !0,
                                                                children: (0, a.jsx)(U.m, {
                                                                    children: (0, a.jsx)(F.OR, {
                                                                        children: (0, a.jsxs)(N.Z.Provider, {
                                                                            value: O.Z,
                                                                            children: [
                                                                                (0, a.jsx)('div', {
                                                                                    className: l()(s ? eo.mobileApp : eo.app),
                                                                                    children: t
                                                                                }),
                                                                                (0, a.jsx)(b.Z, {}),
                                                                                (0, a.jsx)(I.Z, {}),
                                                                                (0, a.jsx)(h.Modals, {}),
                                                                                (0, a.jsx)(T.Z, {}),
                                                                                (0, a.jsx)(B.Ox, {}),
                                                                                (0, a.jsx)(k.Un, {}),
                                                                                (0, a.jsx)(F.ot, {}),
                                                                                (0, a.jsx)(h.ToastContainer, {}),
                                                                                (0, a.jsx)(R.Z, {}),
                                                                                (0, a.jsx)(Z.Z, {}),
                                                                                (0, a.jsx)(es, {})
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            (0, a.jsx)(D.Z, {}),
                                                            (0, a.jsx)(m.Z, {}),
                                                            eA && !eO && (0, a.jsx)(P.Z, { markAsDismissed: em }),
                                                            ev &&
                                                                !eO &&
                                                                (0, a.jsx)(L.Z, {
                                                                    isCoachmark: eI,
                                                                    markAsDismissed: em
                                                                }),
                                                            (eA || ev) &&
                                                                eO &&
                                                                (0, a.jsx)(j.Z, {
                                                                    initialTab: ev ? j._.APP_ICONS : j._.CLIENT_THEMES,
                                                                    markAsDismissed: em
                                                                }),
                                                            (0, a.jsx)(x.Z, { mobile: s })
                                                        ]
                                                    }),
                                                    !1
                                                ]
                                            })
                                        }),
                                        (0, a.jsx)(u.OU, {})
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        },
        g
    );
}
t.Z = eu;
