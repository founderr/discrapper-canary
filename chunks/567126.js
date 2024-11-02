n.d(t, {
    Hu: function () {
        return K;
    },
    oA: function () {
        return W;
    },
    se: function () {
        return z;
    }
}),
    n(47120),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(863942),
    n(642549),
    n(653041),
    n(724458);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(553813),
    o = n.n(a),
    c = n(788900),
    d = n(268146),
    u = n(442837),
    f = n(141038),
    h = n(846519),
    m = n(481060),
    x = n(224706),
    g = n(579806),
    p = n(600164),
    v = n(152708),
    j = n(594190),
    C = n(569984),
    S = n(918701),
    _ = n(977156),
    Z = n(28798),
    I = n(131951),
    T = n(449224),
    N = n(358085),
    w = n(463727),
    b = n(855403),
    y = n(299570),
    R = n(960861),
    E = n(989941),
    M = n(958707),
    k = n(152165),
    A = n(133179),
    P = n(70722),
    B = n(46140),
    L = n(65154),
    G = n(388032),
    D = n(24548);
async function O() {
    let e = I.Z.getVideoDevices(),
        t = (0, f.Z)(I.Z.getMediaEngine(), [d.vA.WINDOW, d.vA.SCREEN], {
            width: 176,
            height: 99
        }),
        n = U(),
        l = await n,
        i = await t,
        r = i.filter((e) => e.id.startsWith(d.vA.SCREEN)),
        s = (function (e, t) {
            let n = {};
            return (
                t.forEach((e) => {
                    n[e.id] = e;
                }),
                e.forEach((e) => {
                    n[e.id] = e;
                }),
                Object.values(n)
            );
        })(
            i.filter((e) => e.id.startsWith(d.vA.WINDOW)),
            l
        ),
        a = ['GQgGHISKZ5aYqYeYhX9isDUHGw', 'bAgKFITWhoVvmHVRuokCdjVQaA', 'XAgGDIJ/ipadd3iCiYUcWpCZBA', 'HRkGDIT5aXRneomGdlvUawB7qA', 'I9gNDISmlqqPmHiKd3isTp/5lg', 'XxgGBIIwT2ZGpneUeZev6fWLXQ', 'KzsKNIZDeYmfd3ihe1bXfr8Jxg', 'J9cRDIJ6iHd/d4h4eIUJf5LyRw', 'DggKFIQwtndKe3hVfXnAWQmddQ', 'WggKDILeh3ePZpd6l4jln1b5SQ', '4PgJJIJVl3eAaod2iJeHj7tE8Q'];
    return {
        windowSources: s,
        screenSources: r,
        cameraSources: Object.entries(e)
            .filter((e) => {
                let [t, n] = e;
                return !n.disabled;
            })
            .map((e, t) => {
                let [n, l] = e,
                    i = a[t % a.length],
                    r = Uint8Array.from(atob(i), (e) => e.charCodeAt(0)),
                    s = (0, c.xS)(r);
                return {
                    id: 'camera:' + l.id,
                    name: l.name,
                    url: s
                };
            })
    };
}
async function U() {
    let e = j.ZP.getRunningGames();
    return (
        await Promise.all(
            e.map(async (e) => {
                let t;
                if (null == e.name) return null;
                try {
                    t = await x.Z.identifyGame(e.pid, e.name);
                } catch (e) {
                    return null;
                }
                let n = e.windowHandle,
                    l = e.name,
                    i = t.icon;
                return null != n && null != l && null != i
                    ? {
                          id: 'window:'.concat(n),
                          name: l,
                          url: 'data:image/bmp;base64,'.concat(i)
                      }
                    : null;
            })
        )
    ).filter((e) => null !== e);
}
function F(e) {
    let t = (0, N.isWindows)() ? (0, E.Z)(j.ZP, T.Z) : null,
        n = j.ZP.getRunningGames();
    return null != t && (0, b.Z)(e.id, t.windowHandle) ? 2 : null != n.find((t) => (0, b.Z)(e.id, t.windowHandle)) ? 1 : 0;
}
function W(e) {
    let { selectedSource: t, onChangeSelectedSource: n } = e,
        { enableGoLiveCaptureCard: r } = w.Z.useExperiment({ location: 'GoLive_Source_Select' }),
        a = I.Z.supports(L.AN.GO_LIVE_HARDWARE),
        [o, c] = i.useState(null),
        [f, x] = i.useState(null),
        [g, T] = i.useState(null),
        N = null != g && g.length > 0,
        [y, R] = i.useState(d.vA.WINDOW),
        [E, k] = i.useState(!1),
        P = i.useRef(null),
        U = i.useRef(new h.Xp()),
        W = (0, u.e7)([j.ZP], () => j.ZP.getRunningGames()),
        H = (function (e, t, n) {
            let l = (0, _.Zy)({ location: B.dr.STREAM_SOURCE_SELECT });
            return i.useMemo(() => {
                if (null == n || !l) return null;
                for (let l of n) {
                    var i, r;
                    let n = t.find((e) => (0, b.Z)(l.id, e.windowHandle));
                    if ((null == n ? void 0 : n.id) == null) continue;
                    let s = (0, S.lQ)(e, n.id);
                    if (null != s && (null === (i = s.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null && (null === (r = s.userStatus) || void 0 === r ? void 0 : r.completedAt) == null)
                        return {
                            source: l,
                            quest: s
                        };
                }
                return null;
            }, [l, e, t, n]);
        })(
            (0, u.e7)([C.Z], () => C.Z.quests),
            W,
            f
        ),
        V = i.useMemo(() => (null == f ? null : [...f].sort((e, t) => ((null == H ? void 0 : H.source.id) === e.id ? -1 : (null == H ? void 0 : H.source.id) === t.id ? 1 : F(t) - F(e)))), [H, f]);
    i.useEffect(() => {
        let e = U.current;
        return (
            O().then((e) => {
                let { screenSources: t, windowSources: n, cameraSources: l } = e;
                c(t), x(n), T(l);
            }),
            e.start(1000, async () => {
                let { screenSources: e, windowSources: t, cameraSources: n } = await O();
                c(e), x(t), T(n);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let z = i.useCallback((e) => {
            null !== e && ((P.current = e), k(!e.isScrolledToTop()));
        }, []),
        K = (function (e) {
            switch (e) {
                case d.vA.WINDOW:
                    return V;
                case d.vA.SCREEN:
                    return o;
                case d.vA.CAMERA:
                    return g;
            }
        })(y);
    if (null == K)
        return (0, l.jsx)(p.Z, {
            className: D.spinner,
            justify: p.Z.Justify.CENTER,
            align: p.Z.Align.CENTER,
            children: (0, l.jsx)(m.Spinner, {})
        });
    let Y = K.map((e) => {
        let { id: i } = e,
            r = (null == t ? void 0 : t.id) === i;
        return (0, l.jsx)(
            m.Clickable,
            {
                className: s()(D.tile, { [D.selected]: r }),
                onClick: () => n(e, null),
                children: (0, l.jsx)(
                    A.Z,
                    {
                        source: e,
                        selectedSource: t
                    },
                    e.id
                )
            },
            i
        );
    });
    function X() {
        let e = P.current;
        null != e && k(!e.isScrolledToTop());
    }
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: D.segmentContainer,
                children: [
                    (0, l.jsx)(M.Z, { separator: E }),
                    (0, l.jsx)(m.SegmentedControl, {
                        options: (function () {
                            let e = [
                                {
                                    name: G.intl.string(G.t.tHoi7u),
                                    value: d.vA.WINDOW
                                },
                                {
                                    name: G.intl.string(G.t['/iX8u7']),
                                    value: d.vA.SCREEN
                                }
                            ];
                            return (
                                r &&
                                    a &&
                                    N &&
                                    e.push({
                                        name: G.intl.string(G.t.cWt5Ul),
                                        value: d.vA.CAMERA
                                    }),
                                e
                            );
                        })(),
                        value: y,
                        onChange: (e) => {
                            let { value: t } = e;
                            return R(t);
                        },
                        className: D.segmentControl,
                        optionClassName: D.segmentControlOption
                    })
                ]
            }),
            y === d.vA.CAMERA
                ? (0, l.jsx)('div', {
                      className: D.sourceContainer,
                      children: (0, l.jsx)(m.AdvancedScroller, {
                          ref: z,
                          className: D.sourceScroller,
                          onScroll: X,
                          children: (0, l.jsx)(v.Z, {
                              layout: v.Z.Layout.WRAP,
                              columns: 2,
                              className: D.sourceContainer,
                              children: Y
                          })
                      })
                  })
                : (0, l.jsxs)(m.AdvancedScroller, {
                      ref: z,
                      className: D.sourceScroller,
                      onScroll: X,
                      children: [
                          y === d.vA.WINDOW && null != H && (0, l.jsx)(Z.Z, { quest: H.quest }),
                          (0, l.jsx)(v.Z, {
                              layout: v.Z.Layout.WRAP,
                              columns: 2,
                              className: D.sourceContainer,
                              children: Y
                          })
                      ]
                  })
        ]
    });
}
function H(e) {
    let { onSelect: t } = e,
        n = i.useCallback(() => {
            t({
                id: 'prepicked:',
                name: G.intl.string(G.t['KKcy9/']),
                url: ''
            });
        }, [t]);
    return (0, l.jsx)(m.Clickable, {
        role: 'radio',
        'aria-checked': !1,
        onClick: n,
        tabIndex: 0,
        className: s()(D.nativeSourceSingleTypeButton, D.nativePickerRadioItem),
        children: (0, l.jsxs)('div', {
            className: D.nativeSourceSingleTypeButtonInner,
            children: [
                (0, l.jsx)(k.Z, { className: D.nativeSourceSingleTypeImage }),
                (0, l.jsx)(m.Text, {
                    variant: 'text-md/medium',
                    color: 'none',
                    children: G.intl.string(G.t.Yp6h5e)
                })
            ]
        })
    });
}
function V(e) {
    let { id: t, name: n, text: r, icon: a, onSelect: o } = e,
        c = i.useCallback(() => {
            o({
                id: 'prepicked:' + t,
                name: n,
                url: ''
            });
        }, [t, n, o]);
    return (0, l.jsx)(m.Clickable, {
        role: 'radio',
        'aria-checked': !1,
        onClick: c,
        tabIndex: 0,
        className: s()(D.nativeSourceTypeButton, D.nativePickerRadioItem),
        children: (0, l.jsxs)('div', {
            className: D.nativeSourceTypeButtonInner,
            children: [
                (0, l.jsx)(a, { size: 'lg' }),
                (0, l.jsx)(m.Text, {
                    variant: 'text-sm/medium',
                    color: 'none',
                    children: r
                })
            ]
        })
    });
}
function z(e) {
    let { onSourceSelect: t } = e,
        [n, r] = i.useState([]),
        [a, c] = i.useState({}),
        d = i.useRef(new h.Xp());
    i.useEffect(() => {
        let e = d.current,
            t = () => {
                let e = Object.entries(I.Z.getVideoDevices()).filter((e) => {
                    let [t, n] = e;
                    return !n.disabled;
                });
                r(e),
                    c({
                        ...e.reduce((e, t) => {
                            let [n, l] = t;
                            return {
                                ...e,
                                ['camera:' + n]: l.name
                            };
                        }, {})
                    });
            };
        return (
            t(),
            e.start(1000, t),
            () => {
                e.stop();
            }
        );
    }, []);
    let u = i.useCallback(
            (e) => {
                var n;
                let { value: l } = e;
                t({
                    id: l,
                    name: null !== (n = a[l]) && void 0 !== n ? n : '',
                    url: ''
                });
            },
            [t, a]
        ),
        f = (0, N.isMac)() && o().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, P.jR),
        x = (0, N.isMac)(),
        [p, v] = i.useState(!1),
        j = i.useCallback(() => {
            v(!p);
        }, [p]),
        C = f
            ? (0, l.jsx)(H, { onSelect: t })
            : (0, l.jsxs)('div', {
                  className: D.nativePickerTypes,
                  children: [
                      (0, l.jsx)(V, {
                          onSelect: t,
                          id: 'screen',
                          name: G.intl.string(G.t.R4wpLC),
                          text: G.intl.string(G.t.cVUFXV),
                          icon: m.ScreenIcon
                      }),
                      (0, l.jsx)(V, {
                          onSelect: t,
                          id: 'window',
                          name: G.intl.string(G.t['+SLJCg']),
                          text: G.intl.string(G.t.dG2A1N),
                          icon: m.BrowserIcon
                      }),
                      x
                          ? (0, l.jsx)(V, {
                                onSelect: t,
                                id: 'app',
                                name: G.intl.string(G.t.ct7AKS),
                                text: G.intl.string(G.t['8lQwf3']),
                                icon: m.ClydeIcon
                            })
                          : null
                  ]
              });
    return (0, l.jsxs)('div', {
        className: D.nativePickerScroll,
        children: [
            (0, l.jsx)(m.Text, {
                className: D.nativePickerLabel,
                variant: 'text-md/semibold',
                color: 'interactive-normal',
                children: G.intl.string(G.t.XyYoFR)
            }),
            C,
            0 === n.length
                ? null
                : (0, l.jsxs)('div', {
                      className: s()(D.nativePickerCaptureSection, p ? null : D.nativePickerCollapsed),
                      children: [
                          (0, l.jsxs)(m.Clickable, {
                              onClick: j,
                              className: s()(D.nativePickerLabel),
                              children: [
                                  (0, l.jsx)(m.Text, {
                                      className: D.nativeCaptureDevicesText,
                                      variant: 'text-md/semibold',
                                      color: 'interactive-normal',
                                      children: G.intl.string(G.t.rO0Vi4)
                                  }),
                                  (0, l.jsx)(m.ChevronSmallDownIcon, {
                                      size: 'sm',
                                      color: 'currentColor',
                                      className: D.captureDevicesToggleIndicator
                                  })
                              ]
                          }),
                          (0, l.jsx)(m.RadioGroup, {
                              className: D.nativePickerCaptureList,
                              onChange: u,
                              radioItemClassName: D.nativePickerRadioItem,
                              options: n.map((e) => {
                                  let [t, n] = e;
                                  return {
                                      name: n.name,
                                      value: 'camera:' + n.id,
                                      icon: m.VideoIcon,
                                      radioItemIconClassName: D.hideRadioCheckbox
                                  };
                              })
                          })
                      ]
                  })
        ]
    });
}
function K(e) {
    let { onSourceSelect: t, onCancel: n, pickerType: r } = e,
        { lastPickerAction: s, lastPickerError: a } = (0, u.e7)([R.ZP], () => R.ZP.getPickerState()),
        [o, c] = i.useState(!1);
    return (
        (0, R.kE)(),
        i.useEffect(() => {
            '' === r ? (0, y.T)(r) : (0, y.t)();
        }, [r]),
        i.useEffect(() => {
            o ? (s === R.Uc.Update ? t() : s === R.Uc.Cancel && ((0, y.t)(), n())) : (null == s || s === R.Uc.Present) && c(!0);
        }, [o, s, t, n]),
        s === R.Uc.Error
            ? (0, l.jsx)(m.Text, {
                  className: D.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: null != a && a.length > 0 ? a : G.intl.string(G.t.CKsXk5)
              })
            : (0, l.jsx)(k.Z, {
                  animated: !0,
                  className: D.nativePickerGuide
              })
    );
}
