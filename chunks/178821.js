n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    c = n(481060),
    s = n(38618),
    d = n(980361),
    u = n(219299);
let h = 1000 / 60,
    m = 1000 / 45,
    x = 3 * h,
    f = Math.ceil(3000 / h);
function p(e) {
    let { socket: t, isAverageFrameTime: n } = e,
        [l, i] = (function (e) {
            let t = e.dispatcher.getIsSchedulerBackgrounded(),
                n = a.useRef(t);
            n.current = t;
            let r = a.useRef(t ? performance.now() : 0);
            return (
                a.useEffect(() => {
                    e.dispatcher.getIsSchedulerBackgrounded() && (r.current = performance.now());
                }),
                [n, r]
            );
        })(t),
        {
            currentFPS: o,
            averageFrameTime: s,
            timeSinceLastDrop: u,
            onResetFrameData: m,
            droppedFramesRef: p,
            renderedFrameCount: g,
            bufferFramecountRef: b,
            frameCheckerEffect: v
        } = (function (e, t) {
            let n = a.useRef(Array(f).fill(0)),
                r = a.useRef(performance.now()),
                l = a.useRef(0),
                i = a.useRef(0),
                o = a.useRef(0),
                c = a.useRef(0),
                s = a.useRef(0),
                d = a.useRef(0),
                u = a.useCallback(() => {
                    n.current.fill(0), (l.current = 0), (i.current = 0), (c.current = 0), (s.current = 0), (r.current = performance.now()), (o.current = 0);
                }, []),
                m = a.useCallback(
                    function () {
                        let a = performance.now(),
                            u = a - r.current;
                        if (((r.current = a), t.current)) return;
                        if (((i.current -= n.current[s.current]), (n.current[s.current] = u), (i.current += u), c.current < f && (c.current += 1), (s.current = (s.current + 1) % f), u > x)) {
                            let t = 0 === c.current ? h : i.current / c.current,
                                n = Math.min(2 * h, t),
                                r = Math.floor(u / (e ? n : h));
                            r > 0 && (d.current = performance.now()), (l.current += r);
                        }
                        let m = 0 === c.current ? h : i.current / c.current;
                        o.current += u / m;
                    },
                    [e, t]
                ),
                p = 0 === c.current ? 0 : i.current / c.current;
            return {
                currentFPS: 0 === p ? 0 : (h / p) * 60,
                averageFrameTime: p,
                timeSinceLastDrop: (performance.now() - d.current) / 1000,
                droppedFramesRef: l,
                bufferFramecountRef: c,
                renderedFrameCount: o,
                frameCheckerEffect: m,
                onResetFrameData: u
            };
        })(n, l),
        [_, C, j] = (function (e) {
            let t = a.useRef(Array(f).fill(0)),
                n = a.useRef(performance.now()),
                r = a.useRef(0),
                l = a.useRef(0),
                i = a.useRef(0),
                o = e.dispatcher.getIsSchedulerBackgrounded(),
                c = a.useRef(o);
            c.current = o;
            let s = a.useRef(o ? performance.now() : 0);
            a.useEffect(() => {
                e.dispatcher.getIsSchedulerBackgrounded() && (s.current = performance.now());
            });
            let d = a.useCallback(function () {
                let e = performance.now(),
                    a = e - n.current;
                if (((n.current = e), !c.current)) (r.current -= t.current[i.current]), (t.current[i.current] = a), (r.current += a), l.current < f && (l.current += 1), (i.current = (i.current + 1) % f);
            }, []);
            return [
                d,
                (e, t) => {
                    var n;
                    let a = null !== (n = l.current) && void 0 !== n ? n : 1,
                        i = r.current / a;
                    return Math.abs(e * t - i * a) / t;
                },
                () => {
                    (r.current = 0), (l.current = 0), t.current.fill(0), (n.current = performance.now()), (i.current = 0);
                }
            ];
        })(t),
        [T, S] = (function (e, t) {
            let n = a.useRef(null),
                r = a.useRef(null),
                l = a.useRef(null),
                i = a.useCallback(() => {
                    null != n.current && clearInterval(n.current), null != r.current && cancelIdleCallback(r.current), null != l.current && cancelAnimationFrame(l.current);
                }, []),
                o = a.useCallback(() => {
                    n.current = setTimeout(() => {
                        (r.current = requestIdleCallback(e)),
                            (l.current = requestAnimationFrame(() => {
                                t(), o();
                            }));
                    }, 12);
                }, [e, t]);
            return [
                a.useCallback(() => {
                    i(), o();
                }, [i, o]),
                i
            ];
        })(_, v),
        N = performance.now() - i.current < 5000,
        y = C(s, b.current);
    a.useEffect(
        () => (
            T(),
            () => {
                S();
            }
        ),
        []
    );
    let I = a.useCallback(() => {
        m(), j(), T();
    }, [m, j, T]);
    return (0, r.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, r.jsxs)(c.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'FPS (~3sec):',
                    ' ',
                    (0, r.jsx)(c.Text, {
                        tag: 'span',
                        variant: 'text-md/bold',
                        color: o < 30 ? 'text-danger' : o < 45 ? 'text-warning' : 'text-primary',
                        children: o.toFixed(2)
                    })
                ]
            }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Dropped Frames:',
                    ' ',
                    (0, r.jsx)(c.Text, {
                        tag: 'span',
                        variant: 'text-md/bold',
                        color: u < 2 ? 'text-danger' : u < 5 ? 'text-warning' : 'text-primary',
                        children: p.current
                    }),
                    (0, r.jsxs)(c.Text, {
                        tag: 'span',
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: d.secondaryInfoText,
                        children: ['(Dropped: ', ((p.current / g.current) * 100).toFixed(4), '%)']
                    }),
                    N &&
                        (0, r.jsx)(c.Tooltip, {
                            position: 'left',
                            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                            children: (e) =>
                                (0, r.jsx)('span', {
                                    ...e,
                                    children: (0, r.jsx)(c.Text, {
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
            (0, r.jsxs)(c.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Rendered Frames:',
                    ' ',
                    (0, r.jsx)(c.Text, {
                        tag: 'span',
                        variant: 'text-md/semibold',
                        color: 'text-secondary',
                        children: g.current.toFixed(0)
                    })
                ]
            }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Frame Times (~3sec):',
                    ' ',
                    (0, r.jsxs)(c.Text, {
                        tag: 'span',
                        variant: 'text-md/semibold',
                        color: s > 1.1 * h ? 'text-warning' : 'text-secondary',
                        children: [s.toFixed(2), 'ms']
                    })
                ]
            }),
            (0, r.jsx)(c.Tooltip, {
                position: 'left',
                text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                children: (e) =>
                    (0, r.jsx)('div', {
                        ...e,
                        children: (0, r.jsxs)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: [
                                'Idle Frame Delta (~3sec):',
                                ' ',
                                (0, r.jsxs)(c.Text, {
                                    tag: 'span',
                                    variant: 'text-md/semibold',
                                    color: y > 1 ? 'text-danger' : 'text-secondary',
                                    children: [y.toFixed(2), 'ms']
                                }),
                                N &&
                                    (0, r.jsx)(c.Tooltip, {
                                        position: 'left',
                                        text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                                        children: (e) =>
                                            (0, r.jsx)('span', {
                                                ...e,
                                                children: (0, r.jsx)(c.Text, {
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
            (0, r.jsx)('div', {
                className: d.bottomPanelButton,
                children: (0, r.jsx)(c.Button, {
                    size: c.Button.Sizes.SMALL,
                    onClick: I,
                    children: 'Reset Frame Data'
                })
            })
        ]
    });
}
function g(e) {
    let { socket: t, isAverageFrameTime: n, onToggleAverageFrameTime: l } = e,
        [i, o] = a.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()),
        s = a.useRef(null);
    a.useEffect(() => {
        let e = setInterval(() => {
            o(t.dispatcher.getIsRequestIdleCallbackEnabled());
        }, m);
        return (
            (s.current = e),
            () => {
                null != s.current && clearInterval(s.current);
            }
        );
    }, [t.dispatcher]);
    let u = (e) => {
        t.dispatcher.toggleRequestIdleCallback(e), o(e);
    };
    return (0, r.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, r.jsx)(c.Tooltip, {
                position: 'left',
                text: 'Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.',
                children: (e) =>
                    (0, r.jsx)('div', {
                        ...e,
                        children: (0, r.jsx)(c.Checkbox, {
                            value: n,
                            onChange: () => l(!n),
                            size: 18,
                            type: c.Checkbox.Types.INVERTED,
                            shape: c.Checkbox.Shapes.BOX,
                            children: (0, r.jsx)(c.Text, {
                                tag: 'span',
                                variant: 'text-md/normal',
                                color: 'text-muted',
                                children: 'Use Average Frame Time'
                            })
                        })
                    })
            }),
            (0, r.jsx)(c.Checkbox, {
                value: i,
                onChange: () => u(!i),
                size: 18,
                type: c.Checkbox.Types.INVERTED,
                shape: c.Checkbox.Shapes.BOX,
                children: (0, r.jsx)(c.Text, {
                    tag: 'span',
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: 'Enable New Dispatch Scheduler (requestIdleCallback)'
                })
            })
        ]
    });
}
function b(e) {
    let { socket: t } = e,
        n = t.dispatcher.getDispatchTimings(),
        [l, o] = a.useState(!1);
    return (0, r.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, r.jsx)('div', {
                className: i()(l && d.topPanelToggle),
                children: (0, r.jsx)(c.Checkbox, {
                    value: l,
                    onChange: () => o((e) => !e),
                    size: 18,
                    type: c.Checkbox.Types.INVERTED,
                    shape: c.Checkbox.Shapes.BOX,
                    children: (0, r.jsx)(c.Text, {
                        tag: 'span',
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        children: 'Show Dispatch Timings'
                    })
                })
            }),
            l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(c.Text, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: 'Gateway Dispatch Timings:'
                          }),
                          (0, r.jsx)('table', {
                              cellPadding: 4,
                              children: Object.entries(n).map((e) => {
                                  let [t, [n, a]] = e;
                                  return (0, r.jsxs)(
                                      'tr',
                                      {
                                          children: [
                                              (0, r.jsx)('td', {
                                                  children: (0, r.jsx)(c.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: t
                                                  })
                                              }),
                                              (0, r.jsx)('td', {
                                                  children: (0, r.jsxs)(c.Text, {
                                                      tag: 'span',
                                                      variant: 'text-xs/bold',
                                                      color: 'text-normal',
                                                      children: [n.toFixed(2), 'ms']
                                                  })
                                              }),
                                              (0, r.jsx)('td', {
                                                  children: (0, r.jsxs)(c.Text, {
                                                      tag: 'span',
                                                      variant: 'text-xs/normal',
                                                      color: 'text-muted',
                                                      children: ['(count: ', a, ')']
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
function v(e) {
    let { socket: t } = e,
        n = t.dispatcher.getSchedulerTelemetry(),
        [l, o] = a.useState(n.isTelemetryEnabled),
        [s, u] = a.useState(n.isTelemetryEnabled),
        h = (e) => {
            u(e), n.toggleTelemetry(e);
        };
    return (0, r.jsxs)('div', {
        className: d.panelGroup,
        children: [
            (0, r.jsx)(c.Checkbox, {
                value: s,
                onChange: () => h(!s),
                size: 18,
                type: c.Checkbox.Types.INVERTED,
                shape: c.Checkbox.Shapes.BOX,
                children: (0, r.jsx)(c.Text, {
                    tag: 'span',
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: 'Enable Dispatch Telemetry'
                })
            }),
            (0, r.jsx)('div', {
                className: i()(l && d.topPanelToggle),
                children: (0, r.jsx)(c.Checkbox, {
                    value: l,
                    onChange: () => {
                        o((e) => {
                            let t = !e;
                            return t && h(!0), t;
                        });
                    },
                    size: 18,
                    type: c.Checkbox.Types.INVERTED,
                    shape: c.Checkbox.Shapes.BOX,
                    children: (0, r.jsx)(c.Text, {
                        tag: 'span',
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        children: 'Show Dispatch Scheduler Telemetry'
                    })
                })
            }),
            l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(c.Text, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: 'Dispatch Scheduler Telemetry:'
                          }),
                          (0, r.jsx)('table', {
                              cellPadding: 4,
                              children: Object.entries(n.generateTelemetry()).map((e) => {
                                  let [t, n] = e;
                                  return (0, r.jsxs)(
                                      'tr',
                                      {
                                          children: [
                                              (0, r.jsx)('td', {
                                                  children: (0, r.jsx)(c.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: t
                                                  })
                                              }),
                                              (0, r.jsx)('td', {
                                                  children: (0, r.jsx)(c.Text, {
                                                      tag: 'span',
                                                      variant: 'text-xs/bold',
                                                      color: 'text-normal',
                                                      children: n
                                                  })
                                              })
                                          ]
                                      },
                                      t
                                  );
                              })
                          }),
                          (0, r.jsx)('div', {
                              className: d.bottomPanelButton,
                              children: (0, r.jsx)(c.Button, {
                                  size: c.Button.Sizes.SMALL,
                                  onClick: () => {
                                      n.reset();
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
function _() {
    let e = (0, o.e7)([s.Z], () => s.Z.getSocket()),
        [t, n] = a.useState(!1);
    return (
        !(function () {
            let [, e] = a.useState({});
            a.useEffect(() => {
                let t = setInterval(() => {
                    e({});
                }, m);
                return () => {
                    clearInterval(t);
                };
            }, []);
        })(),
        (0, r.jsx)('div', {
            className: i()(u.panel, d.panel),
            children: (0, r.jsxs)(c.ScrollerThin, {
                className: d.panel,
                children: [
                    (0, r.jsx)(p, {
                        socket: e,
                        isAverageFrameTime: t
                    }),
                    (0, r.jsx)(g, {
                        socket: e,
                        isAverageFrameTime: t,
                        onToggleAverageFrameTime: n
                    }),
                    (0, r.jsx)(b, { socket: e }),
                    (0, r.jsx)(v, { socket: e })
                ]
            })
        })
    );
}
