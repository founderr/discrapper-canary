n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(350810),
    u = n(579806),
    c = n(40851),
    d = n(358221),
    f = n(754347),
    _ = n(428548),
    p = n(718759),
    h = n(679219),
    m = n(835225),
    g = n(939039),
    E = n(117795),
    v = n(358085),
    I = n(998502),
    T = n(388032),
    b = n(882165);
let S = (e) => I.ZP.close(e),
    y = (e) => I.ZP.minimize(e),
    A = (e, t) => {
        (0, v.isMac)() && !t.altKey ? I.ZP.fullscreen(e) : I.ZP.maximize(e);
    },
    N = (e) => {
        let { children: t, windowKey: n, themeOverride: i, hasOpenLayer: s } = e,
            l = (0, r.jsx)(o.Clickable, {
                className: b.winButtonClose,
                onClick: () => S(n),
                'aria-label': T.intl.string(T.t.ZdNUj4),
                tabIndex: -1,
                children: (0, r.jsx)(_.Z, {})
            }),
            u = (0, r.jsx)(o.Clickable, {
                className: b.winButtonMinMax,
                onClick: (e) => A(n, e),
                'aria-label': T.intl.string(T.t.G1u0hI),
                tabIndex: -1,
                children: (0, r.jsx)(h.Z, {})
            }),
            c = (0, r.jsx)(o.Clickable, {
                className: b.winButtonMinMax,
                onClick: () => y(n),
                'aria-label': T.intl.string(T.t.CxOC4e),
                tabIndex: -1,
                children: (0, r.jsx)(g.Z, {})
            }),
            d = (0, r.jsxs)(r.Fragment, {
                children: [l, u, c]
            });
        return (0, r.jsx)(o.ThemeProvider, {
            theme: i,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: a()(b.typeWindows, e, { [b.withBackgroundOverride]: !s }),
                    children: [
                        (0, r.jsx)('div', {
                            className: b.wordmarkWindows,
                            children: (0, r.jsx)(f.Z, {})
                        }),
                        t,
                        d
                    ]
                })
        });
    },
    C = (e) => {
        let { focused: t, windowKey: n, frame: i, themeOverride: s, hasOpenLayer: l, children: c } = e;
        return (0, r.jsx)(o.ThemeProvider, {
            theme: s,
            children: (e) =>
                (0, r.jsxs)(o.Clickable, {
                    className: a()(i ? b.typeMacOSWithFrame : b.typeMacOS, t ? b.focused : b.unfocused, e, { [b.withBackgroundOverride]: !l }),
                    onDoubleClick: () => I.ZP.maximize(n),
                    tabIndex: -1,
                    children: [
                        u.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? c
                            : (0, r.jsxs)('div', {
                                  className: b.macButtons,
                                  children: [
                                      (0, r.jsx)(o.Clickable, {
                                          className: b.macButtonClose,
                                          onClick: () => S(n),
                                          'aria-label': T.intl.string(T.t.ZdNUj4),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(p.Z, { color: '#4c0000' })
                                      }),
                                      (0, r.jsx)(o.Clickable, {
                                          className: b.macButtonMinimize,
                                          onClick: () => y(n),
                                          'aria-label': T.intl.string(T.t.CxOC4e),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(E.Z, { color: '#975500' })
                                      }),
                                      (0, r.jsx)(o.Clickable, {
                                          className: b.macButtonMaximize,
                                          onClick: (e) => A(n, e),
                                          'aria-label': T.intl.string(T.t['2nM3Pj']),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(m.Z, { color: '#006500' })
                                      })
                                  ]
                              }),
                        i
                            ? (0, r.jsx)('div', {
                                  className: b.wordmarkMacOS,
                                  children: (0, r.jsx)(f.Z, { color: '#ffffff' })
                              })
                            : null
                    ]
                })
        });
    };
function R(e) {
    let { focused: t, type: n, windowKey: i, macOSFrame: a = !1, themeOverride: o } = e,
        u = (0, c.bp)(),
        f = (0, s.e7)([d.Z], () => d.Z.isFullscreenInContext(u)),
        _ = (0, l.Z)();
    if (f) return null;
    switch (n) {
        case v.PlatformTypes.WINDOWS:
            return (0, r.jsx)(N, {
                windowKey: i,
                themeOverride: o,
                hasOpenLayer: _
            });
        case v.PlatformTypes.OSX:
            return (0, r.jsx)(C, {
                focused: t,
                windowKey: i,
                frame: a,
                themeOverride: o,
                hasOpenLayer: _
            });
        default:
            return null;
    }
}
