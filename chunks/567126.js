t.d(n, {
    H: function () {
        return b;
    },
    o: function () {
        return U;
    }
}),
    t(47120),
    t(518263),
    t(970173),
    t(520712),
    t(268111),
    t(941497),
    t(32026),
    t(480839),
    t(744285),
    t(492257),
    t(873817),
    t(863942),
    t(642549),
    t(653041),
    t(724458);
var l = t(735250),
    s = t(470079),
    a = t(120356),
    r = t.n(a),
    i = t(788900),
    o = t(268146),
    u = t(442837),
    c = t(141038),
    d = t(846519),
    m = t(481060),
    E = t(224706),
    S = t(600164),
    _ = t(152708),
    g = t(594190),
    h = t(569984),
    x = t(918701),
    Z = t(977156),
    f = t(28798),
    C = t(131951),
    N = t(449224),
    I = t(358085),
    R = t(463727),
    v = t(855403),
    T = t(989941),
    A = t(958707),
    p = t(133179),
    M = t(46140),
    j = t(65154),
    L = t(689938),
    O = t(624743);
async function D() {
    let e = C.Z.getVideoDevices(),
        n = (0, c.Z)(C.Z.getMediaEngine(), [o.vA.WINDOW, o.vA.SCREEN], {
            width: 176,
            height: 99
        }),
        t = P(),
        l = await t,
        s = await n,
        a = s.filter((e) => e.id.startsWith(o.vA.SCREEN)),
        r = (function (e, n) {
            let t = {};
            return (
                n.forEach((e) => {
                    t[e.id] = e;
                }),
                e.forEach((e) => {
                    t[e.id] = e;
                }),
                Object.values(t)
            );
        })(
            s.filter((e) => e.id.startsWith(o.vA.WINDOW)),
            l
        ),
        u = ['GQgGHISKZ5aYqYeYhX9isDUHGw', 'bAgKFITWhoVvmHVRuokCdjVQaA', 'XAgGDIJ/ipadd3iCiYUcWpCZBA', 'HRkGDIT5aXRneomGdlvUawB7qA', 'I9gNDISmlqqPmHiKd3isTp/5lg', 'XxgGBIIwT2ZGpneUeZev6fWLXQ', 'KzsKNIZDeYmfd3ihe1bXfr8Jxg', 'J9cRDIJ6iHd/d4h4eIUJf5LyRw', 'DggKFIQwtndKe3hVfXnAWQmddQ', 'WggKDILeh3ePZpd6l4jln1b5SQ', '4PgJJIJVl3eAaod2iJeHj7tE8Q'];
    return {
        windowSources: r,
        screenSources: a,
        cameraSources: Object.entries(e)
            .filter((e) => {
                let [n, t] = e;
                return !t.disabled;
            })
            .map((e, n) => {
                let [t, l] = e,
                    s = u[n % u.length],
                    a = Uint8Array.from(atob(s), (e) => e.charCodeAt(0)),
                    r = (0, i.xS)(a);
                return {
                    id: 'camera:' + l.id,
                    name: l.name,
                    url: r
                };
            })
    };
}
async function P() {
    let e = g.ZP.getRunningGames();
    return (
        await Promise.all(
            e.map(async (e) => {
                let n;
                if (null == e.name) return null;
                try {
                    n = await E.Z.identifyGame(e.pid, e.name);
                } catch (e) {
                    return null;
                }
                let t = e.windowHandle,
                    l = e.name,
                    s = n.icon;
                return null != t && null != l && null != s
                    ? {
                          id: 'window:'.concat(t),
                          name: l,
                          url: 'data:image/bmp;base64,'.concat(s)
                      }
                    : null;
            })
        )
    ).filter((e) => null !== e);
}
function G(e) {
    let n = (0, I.isWindows)() ? (0, T.Z)(g.ZP, N.Z) : null,
        t = g.ZP.getRunningGames();
    return null != n && (0, v.Z)(e.id, n.windowHandle) ? 2 : null != t.find((n) => (0, v.Z)(e.id, n.windowHandle)) ? 1 : 0;
}
function U(e) {
    let { selectedSource: n, onChangeSelectedSource: t } = e,
        { enableGoLiveCaptureCard: a } = R.Z.useExperiment({ location: 'GoLive_Source_Select' }),
        i = C.Z.supports(j.AN.GO_LIVE_HARDWARE),
        [c, E] = s.useState(null),
        [N, I] = s.useState(null),
        [T, P] = s.useState(null),
        U = null != T && T.length > 0,
        [b, w] = s.useState(o.vA.WINDOW),
        [k, V] = s.useState(!1),
        B = s.useRef(null),
        W = s.useRef(new d.Xp()),
        H = (0, u.e7)([g.ZP], () => g.ZP.getRunningGames()),
        y = (function (e, n, t) {
            let l = (0, Z.Zy)({ location: M.dr.STREAM_SOURCE_SELECT });
            return s.useMemo(() => {
                if (null == t || !l) return null;
                for (let l of t) {
                    var s, a;
                    let t = n.find((e) => (0, v.Z)(l.id, e.windowHandle));
                    if ((null == t ? void 0 : t.id) == null) continue;
                    let r = (0, x.lQ)(e, t.id);
                    if (null != r && (null === (s = r.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null && (null === (a = r.userStatus) || void 0 === a ? void 0 : a.completedAt) == null)
                        return {
                            source: l,
                            quest: r
                        };
                }
                return null;
            }, [l, e, n, t]);
        })(
            (0, u.e7)([h.Z], () => h.Z.quests),
            H,
            N
        ),
        F = s.useMemo(() => (null == N ? null : [...N].sort((e, n) => ((null == y ? void 0 : y.source.id) === e.id ? -1 : (null == y ? void 0 : y.source.id) === n.id ? 1 : G(n) - G(e)))), [y, N]);
    s.useEffect(() => {
        let e = W.current;
        return (
            D().then((e) => {
                let { screenSources: n, windowSources: t, cameraSources: l } = e;
                E(n), I(t), P(l);
            }),
            e.start(1000, async () => {
                let { screenSources: e, windowSources: n, cameraSources: t } = await D();
                E(e), I(n), P(t);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let z = s.useCallback((e) => {
            null !== e && ((B.current = e), V(!e.isScrolledToTop()));
        }, []),
        Y = (function (e) {
            switch (e) {
                case o.vA.WINDOW:
                    return F;
                case o.vA.SCREEN:
                    return c;
                case o.vA.CAMERA:
                    return T;
            }
        })(b);
    if (null == Y)
        return (0, l.jsx)(S.Z, {
            className: O.spinner,
            justify: S.Z.Justify.CENTER,
            align: S.Z.Align.CENTER,
            children: (0, l.jsx)(m.Spinner, {})
        });
    let K = Y.map((e) => {
        let { id: s } = e,
            a = (null == n ? void 0 : n.id) === s;
        return (0, l.jsx)(
            m.Clickable,
            {
                className: r()(O.tile, { [O.selected]: a }),
                onClick: () => t(e, null),
                children: (0, l.jsx)(
                    p.Z,
                    {
                        source: e,
                        selectedSource: n
                    },
                    e.id
                )
            },
            s
        );
    });
    function Q() {
        let e = B.current;
        null != e && V(!e.isScrolledToTop());
    }
    return (0, l.jsxs)(s.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: O.segmentContainer,
                children: [
                    (0, l.jsx)(A.Z, { separator: k }),
                    (0, l.jsx)(m.SegmentedControl, {
                        options: (function () {
                            let e = [
                                {
                                    name: L.Z.Messages.GO_LIVE_MODAL_APPLICATIONS,
                                    value: o.vA.WINDOW
                                },
                                {
                                    name: L.Z.Messages.GO_LIVE_MODAL_SCREENS,
                                    value: o.vA.SCREEN
                                }
                            ];
                            return (
                                a &&
                                    i &&
                                    U &&
                                    e.push({
                                        name: L.Z.Messages.GO_LIVE_MODAL_CAPTURE,
                                        value: o.vA.CAMERA
                                    }),
                                e
                            );
                        })(),
                        value: b,
                        onChange: (e) => {
                            let { value: n } = e;
                            return w(n);
                        },
                        className: O.segmentControl,
                        optionClassName: O.segmentControlOption
                    })
                ]
            }),
            b === o.vA.CAMERA
                ? (0, l.jsx)('div', {
                      className: O.sourceContainer,
                      children: (0, l.jsx)(m.AdvancedScroller, {
                          ref: z,
                          className: O.sourceScroller,
                          onScroll: Q,
                          children: (0, l.jsx)(_.Z, {
                              layout: _.Z.Layout.WRAP,
                              columns: 2,
                              className: O.sourceContainer,
                              children: K
                          })
                      })
                  })
                : (0, l.jsxs)(m.AdvancedScroller, {
                      ref: z,
                      className: O.sourceScroller,
                      onScroll: Q,
                      children: [
                          b === o.vA.WINDOW && null != y && (0, l.jsx)(f.Z, { quest: y.quest }),
                          (0, l.jsx)(_.Z, {
                              layout: _.Z.Layout.WRAP,
                              columns: 2,
                              className: O.sourceContainer,
                              children: K
                          })
                      ]
                  })
        ]
    });
}
function b(e) {
    let { onSourceSelect: n } = e,
        t = s.useMemo(
            () => ({
                'prepicked:window': L.Z.Messages.GO_LIVE_MODAL_WINDOW,
                'prepicked:screen': L.Z.Messages.GO_LIVE_MODAL_SCREEN
            }),
            []
        ),
        [a, i] = s.useState([]),
        [o, u] = s.useState(t),
        c = s.useRef(new d.Xp());
    s.useEffect(() => {
        let e = c.current,
            n = () => {
                let e = Object.entries(C.Z.getVideoDevices()).filter((e) => {
                    let [n, t] = e;
                    return !t.disabled;
                });
                i(e),
                    u({
                        ...t,
                        ...e.reduce((e, n) => {
                            let [t, l] = n;
                            return {
                                ...e,
                                ['camera:' + t]: l.name
                            };
                        }, {})
                    });
            };
        return (
            n(),
            e.start(1000, n),
            () => {
                e.stop();
            }
        );
    }, [t]);
    let E = s.useRef({}),
        S = s.useCallback(
            (e) => {
                var t;
                let { value: l } = e;
                n({
                    id: l,
                    name: null !== (t = o[l]) && void 0 !== t ? t : '',
                    url: ''
                });
            },
            [n, o]
        );
    return (
        (E.current = {
            'prepicked:window': L.Z.Messages.GO_LIVE_MODAL_WINDOW,
            'prepicked:screen': L.Z.Messages.GO_LIVE_MODAL_SCREEN,
            ...a
        }),
        (0, l.jsxs)('div', {
            children: [
                (0, l.jsx)(m.RadioGroup, {
                    className: O.nativePickerContainer,
                    onChange: S,
                    options: [
                        {
                            name: L.Z.Messages.GO_LIVE_MODAL_WINDOW,
                            value: 'prepicked:window',
                            icon: m.BrowserIcon,
                            radioItemIconClassName: r()(O.hideRadioCheckbox)
                        },
                        {
                            name: L.Z.Messages.GO_LIVE_MODAL_SCREEN,
                            value: 'prepicked:screen',
                            icon: m.ScreenIcon,
                            radioItemIconClassName: r()(O.hideRadioCheckbox)
                        }
                    ]
                }),
                0 === a.length
                    ? null
                    : (0, l.jsxs)('div', {
                          children: [
                              (0, l.jsx)(m.Text, {
                                  className: O.nativePickerLabel,
                                  variant: 'text-sm/bold',
                                  color: 'interactive-normal',
                                  children: L.Z.Messages.GO_LIVE_MODAL_CAPTURE
                              }),
                              (0, l.jsx)(m.RadioGroup, {
                                  className: O.nativePickerContainer,
                                  onChange: S,
                                  options: a.map((e) => {
                                      let [n, t] = e;
                                      return {
                                          name: t.name,
                                          value: 'camera:' + t.id,
                                          icon: m.VideoIcon
                                      };
                                  })
                              })
                          ]
                      })
            ]
        })
    );
}
