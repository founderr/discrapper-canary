n.d(t, {
    Hu: function () {
        return X;
    },
    oA: function () {
        return V;
    },
    se: function () {
        return Y;
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
    C = n(751571),
    S = n(569984),
    Z = n(918701),
    _ = n(977156),
    I = n(28798),
    T = n(131951),
    N = n(449224),
    b = n(358085),
    w = n(463727),
    y = n(855403),
    E = n(299570),
    R = n(960861),
    M = n(989941),
    P = n(958707),
    A = n(152165),
    k = n(133179),
    L = n(70722),
    B = n(761274),
    G = n(46140),
    D = n(65154),
    O = n(388032),
    U = n(986682);
async function F() {
    let e = T.Z.getVideoDevices(),
        t = (0, f.Z)(T.Z.getMediaEngine(), [d.vA.WINDOW, d.vA.SCREEN], {
            width: 176,
            height: 99
        }),
        n = H(),
        l = await n,
        i = await t,
        r = i
            .filter((e) => e.id.startsWith(d.vA.SCREEN))
            .map((e) => {
                let t = e.name;
                return (
                    'Entire screen' === t ? (t = O.intl.string(O.t.R4wpLC)) : /^Screen \d+$/.test(t) && (t = O.intl.formatToPlainString(O.t['y/R7n5'], { index: parseInt(t.split(' ')[1]) })),
                    {
                        ...e,
                        name: t
                    }
                );
            }),
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
async function H() {
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
function W(e) {
    let t = (0, b.isWindows)() ? (0, M.Z)(j.ZP, N.Z) : null,
        n = j.ZP.getRunningGames();
    return null != t && (0, y.Z)(e.id, t.windowHandle) ? 2 : null != n.find((t) => (0, y.Z)(e.id, t.windowHandle)) ? 1 : 0;
}
function V(e) {
    let { selectedSource: t, onChangeSelectedSource: n } = e,
        { enableGoLiveCaptureCard: r } = w.Z.useExperiment({ location: 'GoLive_Source_Select' }),
        a = T.Z.supports(D.AN.GO_LIVE_HARDWARE),
        [o, c] = i.useState(null),
        [f, x] = i.useState(null),
        [g, N] = i.useState(null),
        b = null != g && g.length > 0,
        [E, R] = i.useState(d.vA.WINDOW),
        [M, A] = i.useState(!1),
        L = i.useRef(null),
        H = i.useRef(new h.Xp()),
        V = (0, u.e7)([j.ZP], () => j.ZP.getRunningGames()),
        z = (function (e, t, n) {
            let l = (0, _.Zy)({ location: G.dr.STREAM_SOURCE_SELECT });
            return i.useMemo(() => {
                if (null == n || !l) return null;
                for (let l of n) {
                    var i, r;
                    let n = t.find((e) => (0, y.Z)(l.id, e.windowHandle));
                    if ((null == n ? void 0 : n.id) == null) continue;
                    let s = (0, Z.lQ)(e, n.id);
                    if (null != s && (null === (i = s.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null && (null === (r = s.userStatus) || void 0 === r ? void 0 : r.completedAt) == null)
                        return {
                            source: l,
                            quest: s
                        };
                }
                return null;
            }, [l, e, t, n]);
        })(
            (0, u.e7)([S.Z], () => S.Z.quests),
            V,
            f
        ),
        K = i.useMemo(() => (null == f ? null : [...f].sort((e, t) => ((null == z ? void 0 : z.source.id) === e.id ? -1 : (null == z ? void 0 : z.source.id) === t.id ? 1 : W(t) - W(e)))), [z, f]);
    i.useEffect(() => {
        let e = H.current;
        return (
            F().then((e) => {
                let { screenSources: t, windowSources: n, cameraSources: l } = e;
                c(t), x(n), N(l);
            }),
            e.start(1000, async () => {
                let { screenSources: e, windowSources: t, cameraSources: n } = await F();
                c(e), x(t), N(n);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let Y = i.useCallback((e) => {
            null !== e && ((L.current = e), A(!e.isScrolledToTop()));
        }, []),
        [X, J] = i.useState(void 0);
    i.useEffect(() => {
        C.Z.hasPermission(B.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then(J);
    }, []);
    let q = (function (e) {
        switch (e) {
            case d.vA.WINDOW:
                return K;
            case d.vA.SCREEN:
                return o;
            case d.vA.CAMERA:
                return g;
        }
    })(E);
    if (null == q)
        return !1 === X
            ? (0, l.jsxs)(m.Text, {
                  className: U.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: [O.intl.string(O.t['kW5h/f']), (0, l.jsx)('br', {}), O.intl.string(O.t['5Jvu1d'])]
              })
            : (0, l.jsx)(p.Z, {
                  className: U.spinner,
                  justify: p.Z.Justify.CENTER,
                  align: p.Z.Align.CENTER,
                  children: (0, l.jsx)(m.Spinner, {})
              });
    let Q = q.map((e) => {
        let { id: i } = e,
            r = (null == t ? void 0 : t.id) === i;
        return (0, l.jsx)(
            m.Clickable,
            {
                className: s()(U.tile, { [U.selected]: r }),
                onClick: () => n(e, null),
                children: (0, l.jsx)(
                    k.Z,
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
    function $() {
        let e = L.current;
        null != e && A(!e.isScrolledToTop());
    }
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: U.segmentContainer,
                children: [
                    (0, l.jsx)(P.Z, { separator: M }),
                    (0, l.jsx)(m.SegmentedControl, {
                        options: (function () {
                            let e = [
                                {
                                    name: O.intl.string(O.t.tHoi7u),
                                    value: d.vA.WINDOW
                                },
                                {
                                    name: O.intl.string(O.t['/iX8u7']),
                                    value: d.vA.SCREEN
                                }
                            ];
                            return (
                                r &&
                                    a &&
                                    b &&
                                    e.push({
                                        name: O.intl.string(O.t.cWt5Ul),
                                        value: d.vA.CAMERA
                                    }),
                                e
                            );
                        })(),
                        value: E,
                        onChange: (e) => {
                            let { value: t } = e;
                            return R(t);
                        },
                        className: U.segmentControl,
                        optionClassName: U.segmentControlOption
                    })
                ]
            }),
            E === d.vA.CAMERA
                ? (0, l.jsx)('div', {
                      className: U.sourceContainer,
                      children: (0, l.jsx)(m.AdvancedScroller, {
                          ref: Y,
                          className: U.sourceScroller,
                          onScroll: $,
                          children: (0, l.jsx)(v.Z, {
                              layout: v.Z.Layout.WRAP,
                              columns: 2,
                              className: U.sourceContainer,
                              children: Q
                          })
                      })
                  })
                : (0, l.jsxs)(m.AdvancedScroller, {
                      ref: Y,
                      className: U.sourceScroller,
                      onScroll: $,
                      children: [
                          E === d.vA.WINDOW && null != z && (0, l.jsx)(I.Z, { quest: z.quest }),
                          (0, l.jsx)(v.Z, {
                              layout: v.Z.Layout.WRAP,
                              columns: 2,
                              className: U.sourceContainer,
                              children: Q
                          })
                      ]
                  })
        ]
    });
}
function z(e) {
    let { onSelect: t } = e,
        n = i.useCallback(() => {
            t({
                id: 'prepicked:',
                name: O.intl.string(O.t['KKcy9/']),
                url: ''
            });
        }, [t]);
    return (0, l.jsx)(m.Clickable, {
        role: 'radio',
        'aria-checked': !1,
        onClick: n,
        tabIndex: 0,
        className: s()(U.nativeSourceSingleTypeButton, U.nativePickerRadioItem),
        children: (0, l.jsxs)('div', {
            className: U.nativeSourceSingleTypeButtonInner,
            children: [
                (0, l.jsx)(A.Z, { className: U.nativeSourceSingleTypeImage }),
                (0, l.jsx)(m.Text, {
                    variant: 'text-md/medium',
                    color: 'none',
                    children: O.intl.string(O.t.Yp6h5e)
                })
            ]
        })
    });
}
function K(e) {
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
        className: s()(U.nativeSourceTypeButton, U.nativePickerRadioItem),
        children: (0, l.jsxs)('div', {
            className: U.nativeSourceTypeButtonInner,
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
function Y(e) {
    let { onSourceSelect: t } = e,
        [n, r] = i.useState([]),
        [a, c] = i.useState({}),
        d = i.useRef(new h.Xp());
    i.useEffect(() => {
        let e = d.current,
            t = () => {
                let e = Object.entries(T.Z.getVideoDevices()).filter((e) => {
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
        f = (0, b.isMac)() && o().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, L.jR),
        x = (0, b.isMac)(),
        [p, v] = i.useState(!1),
        j = i.useCallback(() => {
            v(!p);
        }, [p]),
        C = f
            ? (0, l.jsx)(z, { onSelect: t })
            : (0, l.jsxs)('div', {
                  className: U.nativePickerTypes,
                  children: [
                      (0, l.jsx)(K, {
                          onSelect: t,
                          id: 'screen',
                          name: O.intl.string(O.t.R4wpLC),
                          text: O.intl.string(O.t.cVUFXV),
                          icon: m.ScreenIcon
                      }),
                      (0, l.jsx)(K, {
                          onSelect: t,
                          id: 'window',
                          name: O.intl.string(O.t['+SLJCg']),
                          text: O.intl.string(O.t.dG2A1N),
                          icon: m.BrowserIcon
                      }),
                      x
                          ? (0, l.jsx)(K, {
                                onSelect: t,
                                id: 'app',
                                name: O.intl.string(O.t.ct7AKS),
                                text: O.intl.string(O.t['8lQwf3']),
                                icon: m.ClydeIcon
                            })
                          : null
                  ]
              });
    return (0, l.jsxs)('div', {
        className: U.nativePickerScroll,
        children: [
            (0, l.jsx)(m.Text, {
                className: U.nativePickerLabel,
                variant: 'text-md/semibold',
                color: 'interactive-normal',
                children: O.intl.string(O.t.XyYoFR)
            }),
            C,
            0 === n.length
                ? null
                : (0, l.jsxs)('div', {
                      className: s()(U.nativePickerCaptureSection, p ? null : U.nativePickerCollapsed),
                      children: [
                          (0, l.jsxs)(m.Clickable, {
                              onClick: j,
                              className: s()(U.nativePickerLabel),
                              children: [
                                  (0, l.jsx)(m.Text, {
                                      className: U.nativeCaptureDevicesText,
                                      variant: 'text-md/semibold',
                                      color: 'interactive-normal',
                                      children: O.intl.string(O.t.rO0Vi4)
                                  }),
                                  (0, l.jsx)(m.ChevronSmallDownIcon, {
                                      size: 'sm',
                                      color: 'currentColor',
                                      className: U.captureDevicesToggleIndicator
                                  })
                              ]
                          }),
                          (0, l.jsx)(m.RadioGroup, {
                              className: U.nativePickerCaptureList,
                              onChange: u,
                              radioItemClassName: U.nativePickerRadioItem,
                              options: n.map((e) => {
                                  let [t, n] = e;
                                  return {
                                      name: n.name,
                                      value: 'camera:' + n.id,
                                      icon: m.VideoIcon,
                                      radioItemIconClassName: U.hideRadioCheckbox
                                  };
                              })
                          })
                      ]
                  })
        ]
    });
}
function X(e) {
    let { onSourceSelect: t, onCancel: n, pickerType: r } = e,
        { lastPickerAction: s, lastPickerError: a } = (0, u.e7)([R.ZP], () => R.ZP.getPickerState()),
        [o, c] = i.useState(!1);
    return (
        (0, R.kE)(),
        i.useEffect(() => {
            '' === r ? (0, E.T)(r) : (0, E.t)();
        }, [r]),
        i.useEffect(() => {
            o ? (s === R.Uc.Update ? t() : s === R.Uc.Cancel && ((0, E.t)(), n())) : (null == s || s === R.Uc.Present) && c(!0);
        }, [o, s, t, n]),
        s === R.Uc.Error
            ? (0, l.jsx)(m.Text, {
                  className: U.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: null != a && a.length > 0 ? a : O.intl.string(O.t.CKsXk5)
              })
            : (0, l.jsx)(A.Z, {
                  animated: !0,
                  className: U.nativePickerGuide
              })
    );
}
