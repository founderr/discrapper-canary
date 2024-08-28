r.d(t, {
    Z: function () {
        return k;
    }
}),
    r(47120);
var a = r(735250),
    n = r(470079),
    i = r(120356),
    o = r.n(i),
    l = r(442837),
    c = r(481060),
    s = r(38618),
    d = r(465488),
    u = r(535271);
let h = 1000 / 60,
    m = 1000 / 45,
    g = 3 * h,
    p = Math.ceil(3000 / h);
function b(e) {
    let { socket: t, isAverageFrameTime: r } = e,
        [i, o] = (function (e) {
            let t = e.dispatcher.getIsSchedulerBackgrounded(),
                r = n.useRef(t);
            r.current = t;
            let a = n.useRef(t ? performance.now() : 0);
            return (
                n.useEffect(() => {
                    e.dispatcher.getIsSchedulerBackgrounded() && (a.current = performance.now());
                }),
                [r, a]
            );
        })(t),
        {
            currentFPS: l,
            averageFrameTime: s,
            timeSinceLastDrop: u,
            onResetFrameData: m,
            droppedFramesRef: b,
            renderedFrameCount: f,
            bufferFramecountRef: x,
            frameCheckerEffect: y
        } = (function (e, t) {
            let r = n.useRef(Array(p).fill(0)),
                a = n.useRef(performance.now()),
                i = n.useRef(0),
                o = n.useRef(0),
                l = n.useRef(0),
                c = n.useRef(0),
                s = n.useRef(0),
                d = n.useRef(0),
                u = n.useCallback(() => {
                    r.current.fill(0), (i.current = 0), (o.current = 0), (c.current = 0), (s.current = 0), (a.current = performance.now()), (l.current = 0);
                }, []),
                m = n.useCallback(
                    function () {
                        let n = performance.now(),
                            u = n - a.current;
                        if (((a.current = n), t.current)) return;
                        if (((o.current -= r.current[s.current]), (r.current[s.current] = u), (o.current += u), c.current < p && (c.current += 1), (s.current = (s.current + 1) % p), u > g)) {
                            let t = 0 === c.current ? h : o.current / c.current,
                                r = Math.min(2 * h, t),
                                a = Math.floor(u / (e ? r : h));
                            a > 0 && (d.current = performance.now()), (i.current += a);
                        }
                        let m = 0 === c.current ? h : o.current / c.current;
                        l.current += u / m;
                    },
                    [e, t]
                ),
                b = 0 === c.current ? 0 : o.current / c.current;
            return {
                currentFPS: 0 === b ? 0 : (h / b) * 60,
                averageFrameTime: b,
                timeSinceLastDrop: (performance.now() - d.current) / 1000,
                droppedFramesRef: i,
                bufferFramecountRef: c,
                renderedFrameCount: l,
                frameCheckerEffect: m,
                onResetFrameData: u
            };
        })(r, i),
        [k, v, _] = (function (e) {
            let t = n.useRef(Array(p).fill(0)),
                r = n.useRef(performance.now()),
                a = n.useRef(0),
                i = n.useRef(0),
                o = n.useRef(0),
                l = e.dispatcher.getIsSchedulerBackgrounded(),
                c = n.useRef(l);
            c.current = l;
            let s = n.useRef(l ? performance.now() : 0);
            n.useEffect(() => {
                e.dispatcher.getIsSchedulerBackgrounded() && (s.current = performance.now());
            });
            let d = n.useCallback(function () {
                let e = performance.now(),
                    n = e - r.current;
                if (((r.current = e), !c.current)) (a.current -= t.current[o.current]), (t.current[o.current] = n), (a.current += n), i.current < p && (i.current += 1), (o.current = (o.current + 1) % p);
            }, []);
            return [
                d,
                (e, t) => {
                    var r;
                    let n = null !== (r = i.current) && void 0 !== r ? r : 1,
                        o = a.current / n;
                    return Math.abs(e * t - o * n) / t;
                },
                () => {
                    (a.current = 0), (i.current = 0), t.current.fill(0), (r.current = performance.now()), (o.current = 0);
                }
            ];
        })(t),
        [j, w] = (function (e, t) {
            let r = n.useRef(null),
                a = n.useRef(null),
                i = n.useRef(null),
                o = n.useCallback(() => {
                    null != r.current && clearInterval(r.current), null != a.current && cancelIdleCallback(a.current), null != i.current && cancelAnimationFrame(i.current);
                }, []),
                l = n.useCallback(() => {
                    r.current = setTimeout(() => {
                        (a.current = requestIdleCallback(e)),
                            (i.current = requestAnimationFrame(() => {
                                t(), l();
                            }));
                    }, 12);
                }, [e, t]);
            return [
                n.useCallback(() => {
                    o(), l();
                }, [o, l]),
                o
            ];
        })(k, y),
        C = performance.now() - o.current < 5000,
        T = v(s, x.current);
    n.useEffect(
        () => (
            j(),
            () => {
                w();
            }
        ),
        []
    );
    let S = n.useCallback(() => {
        m(), _(), j();
    }, [m, _, j]);
    return (0, a.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, a.jsxs)(c.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'FPS (~3sec):',
                    ' ',
                    (0, a.jsx)(c.Text, {
                        tag: 'span',
                        variant: 'text-md/bold',
                        color: l < 30 ? 'text-danger' : l < 45 ? 'text-warning' : 'text-primary',
                        children: l.toFixed(2)
                    })
                ]
            }),
            (0, a.jsxs)(c.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Dropped Frames:',
                    ' ',
                    (0, a.jsx)(c.Text, {
                        tag: 'span',
                        variant: 'text-md/bold',
                        color: u < 2 ? 'text-danger' : u < 5 ? 'text-warning' : 'text-primary',
                        children: b.current
                    }),
                    (0, a.jsxs)(c.Text, {
                        tag: 'span',
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: d.secondaryInfoText,
                        children: ['(Dropped: ', ((b.current / f.current) * 100).toFixed(4), '%)']
                    }),
                    C &&
                        (0, a.jsx)(c.Tooltip, {
                            position: 'left',
                            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                            children: (e) =>
                                (0, a.jsx)('span', {
                                    ...e,
                                    children: (0, a.jsx)(c.Text, {
                                        tag: 'span',
                                        variant: 'text-xs/bold',
                                        color: 'text-danger',
                                        className: d.secondaryInfoText,
                                        children: '(Backgrounded)'
                                    })
                                })
                        })
                ]
            }),
            (0, a.jsxs)(c.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Rendered Frames:',
                    ' ',
                    (0, a.jsx)(c.Text, {
                        tag: 'span',
                        variant: 'text-md/semibold',
                        color: 'text-secondary',
                        children: f.current.toFixed(0)
                    })
                ]
            }),
            (0, a.jsxs)(c.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Frame Times (~3sec):',
                    ' ',
                    (0, a.jsxs)(c.Text, {
                        tag: 'span',
                        variant: 'text-md/semibold',
                        color: s > 1.1 * h ? 'text-warning' : 'text-secondary',
                        children: [s.toFixed(2), 'ms']
                    })
                ]
            }),
            (0, a.jsx)(c.Tooltip, {
                position: 'left',
                text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                children: (e) =>
                    (0, a.jsx)('div', {
                        ...e,
                        children: (0, a.jsxs)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: [
                                'Idle Frame Delta (~3sec):',
                                ' ',
                                (0, a.jsxs)(c.Text, {
                                    tag: 'span',
                                    variant: 'text-md/semibold',
                                    color: T > 1 ? 'text-danger' : 'text-secondary',
                                    children: [T.toFixed(2), 'ms']
                                }),
                                C &&
                                    (0, a.jsx)(c.Tooltip, {
                                        position: 'left',
                                        text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                                        children: (e) =>
                                            (0, a.jsx)('span', {
                                                ...e,
                                                children: (0, a.jsx)(c.Text, {
                                                    tag: 'span',
                                                    variant: 'text-xs/bold',
                                                    color: 'text-danger',
                                                    className: d.secondaryInfoText,
                                                    children: '(Backgrounded)'
                                                })
                                            })
                                    })
                            ]
                        })
                    })
            }),
            (0, a.jsx)('div', {
                className: d.bottomPanelButton,
                children: (0, a.jsx)(c.Button, {
                    size: c.Button.Sizes.SMALL,
                    onClick: S,
                    children: 'Reset Frame Data'
                })
            })
        ]
    });
}
function f(e) {
    let { socket: t, isAverageFrameTime: r, onToggleAverageFrameTime: i } = e,
        [o, l] = n.useState(t.dispatcher.getIsRequestIdleCallbackEnabled());
    n.useEffect(() => {
        let e = t.dispatcher.getIsRequestIdleCallbackEnabled();
        e !== o && l(e);
    }, [t.dispatcher, o]);
    let s = (e) => {
        t.dispatcher.toggleRequestIdleCallback(e), l(e);
    };
    return (0, a.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, a.jsx)(c.Tooltip, {
                position: 'left',
                text: 'Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.',
                children: (e) =>
                    (0, a.jsx)('div', {
                        ...e,
                        children: (0, a.jsx)(c.Checkbox, {
                            value: r,
                            onChange: () => i(!r),
                            size: 18,
                            type: c.Checkbox.Types.INVERTED,
                            shape: c.Checkbox.Shapes.BOX,
                            children: (0, a.jsx)(c.Text, {
                                tag: 'span',
                                variant: 'text-md/normal',
                                color: 'text-muted',
                                children: 'Use Average Frame Time'
                            })
                        })
                    })
            }),
            (0, a.jsx)(c.Checkbox, {
                value: o,
                onChange: () => s(!o),
                size: 18,
                type: c.Checkbox.Types.INVERTED,
                shape: c.Checkbox.Shapes.BOX,
                children: (0, a.jsx)(c.Text, {
                    tag: 'span',
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: 'Enable New Dispatch Scheduler (requestIdleCallback)'
                })
            })
        ]
    });
}
function x(e) {
    let { socket: t } = e,
        r = t.dispatcher.getDispatchTimings(),
        [i, l] = n.useState(!1);
    return (0, a.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, a.jsx)('div', {
                className: o()(i && d.topPanelToggle),
                children: (0, a.jsx)(c.Checkbox, {
                    value: i,
                    onChange: () => l((e) => !e),
                    size: 18,
                    type: c.Checkbox.Types.INVERTED,
                    shape: c.Checkbox.Shapes.BOX,
                    children: (0, a.jsx)(c.Text, {
                        tag: 'span',
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        children: 'Show Dispatch Timings'
                    })
                })
            }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(c.Text, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: 'Gateway Dispatch Timings:'
                          }),
                          (0, a.jsx)('table', {
                              cellPadding: 4,
                              children: Object.entries(r).map((e) => {
                                  let [t, [r, n]] = e;
                                  return (0, a.jsxs)(
                                      'tr',
                                      {
                                          children: [
                                              (0, a.jsx)('td', {
                                                  children: (0, a.jsx)(c.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: t
                                                  })
                                              }),
                                              (0, a.jsx)('td', {
                                                  children: (0, a.jsxs)(c.Text, {
                                                      tag: 'span',
                                                      variant: 'text-xs/bold',
                                                      color: 'text-normal',
                                                      children: [r.toFixed(2), 'ms']
                                                  })
                                              }),
                                              (0, a.jsx)('td', {
                                                  children: (0, a.jsxs)(c.Text, {
                                                      tag: 'span',
                                                      variant: 'text-xs/normal',
                                                      color: 'text-muted',
                                                      children: ['(count: ', n, ')']
                                                  })
                                              })
                                          ]
                                      },
                                      t
                                  );
                              })
                          })
                      ]
                  })
                : null
        ]
    });
}
function y(e) {
    let { socket: t } = e,
        r = t.dispatcher.getSchedulerTelemetry(),
        [i, l] = n.useState(r.isTelemetryEnabled),
        [s, u] = n.useState(r.isTelemetryEnabled),
        h = (e) => {
            u(e), r.toggleTelemetry(e);
        };
    return (0, a.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, a.jsx)(c.Checkbox, {
                value: s,
                onChange: () => h(!s),
                size: 18,
                type: c.Checkbox.Types.INVERTED,
                shape: c.Checkbox.Shapes.BOX,
                children: (0, a.jsx)(c.Text, {
                    tag: 'span',
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: 'Enable Dispatch Telemetry'
                })
            }),
            (0, a.jsx)('div', {
                className: o()(i && d.topPanelToggle),
                children: (0, a.jsx)(c.Checkbox, {
                    value: i,
                    onChange: () => {
                        l((e) => {
                            let t = !e;
                            return t && h(!0), t;
                        });
                    },
                    size: 18,
                    type: c.Checkbox.Types.INVERTED,
                    shape: c.Checkbox.Shapes.BOX,
                    children: (0, a.jsx)(c.Text, {
                        tag: 'span',
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        children: 'Show Dispatch Scheduler Telemetry'
                    })
                })
            }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(c.Text, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: 'Dispatch Scheduler Telemetry:'
                          }),
                          (0, a.jsx)('table', {
                              cellPadding: 4,
                              children: Object.entries(r.generateTelemetry()).map((e) => {
                                  let [t, r] = e;
                                  return (0, a.jsxs)(
                                      'tr',
                                      {
                                          children: [
                                              (0, a.jsx)('td', {
                                                  children: (0, a.jsx)(c.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: t
                                                  })
                                              }),
                                              (0, a.jsx)('td', {
                                                  children: (0, a.jsx)(c.Text, {
                                                      tag: 'span',
                                                      variant: 'text-xs/bold',
                                                      color: 'text-normal',
                                                      children: r
                                                  })
                                              })
                                          ]
                                      },
                                      t
                                  );
                              })
                          }),
                          (0, a.jsx)('div', {
                              className: d.bottomPanelButton,
                              children: (0, a.jsx)(c.Button, {
                                  size: c.Button.Sizes.SMALL,
                                  onClick: () => {
                                      r.reset();
                                  },
                                  children: 'Reset Scheduler Telemetry'
                              })
                          })
                      ]
                  })
                : null
        ]
    });
}
function k() {
    let e = (0, l.e7)([s.Z], () => s.Z.getSocket()),
        [t, r] = n.useState(!1);
    return (
        !(function () {
            let [, e] = n.useState({});
            n.useEffect(() => {
                let t = setInterval(() => {
                    e({});
                }, m);
                return () => {
                    clearInterval(t);
                };
            }, []);
        })(),
        (0, a.jsx)('div', {
            className: o()(u.panel, d.panel),
            children: (0, a.jsxs)(c.ScrollerThin, {
                className: d.panel,
                children: [
                    (0, a.jsx)(b, {
                        socket: e,
                        isAverageFrameTime: t
                    }),
                    (0, a.jsx)(f, {
                        socket: e,
                        isAverageFrameTime: t,
                        onToggleAverageFrameTime: r
                    }),
                    (0, a.jsx)(x, { socket: e }),
                    (0, a.jsx)(y, { socket: e })
                ]
            })
        })
    );
}
