n.d(t, {
    Z: function () {
        return O;
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
    f = n(540059),
    _ = n(754347),
    p = n(428548),
    h = n(718759),
    m = n(679219),
    g = n(835225),
    E = n(939039),
    v = n(117795),
    I = n(358085),
    b = n(998502),
    T = n(388032),
    S = n(211149);
let y = (e) => b.ZP.close(e),
    A = (e) => b.ZP.minimize(e),
    N = (e, t) => {
        (0, I.isMac)() && !t.altKey ? b.ZP.fullscreen(e) : b.ZP.maximize(e);
    },
    C = (e) => {
        let { children: t, windowKey: n, themeOverride: i, hasOpenLayer: s, isRefreshEnabled: l } = e,
            u = (0, r.jsx)(o.Clickable, {
                className: S.winButtonClose,
                onClick: () => y(n),
                'aria-label': T.intl.string(T.t.ZdNUj4),
                tabIndex: -1,
                children: (0, r.jsx)(p.Z, {})
            }),
            c = (0, r.jsx)(o.Clickable, {
                className: S.winButtonMinMax,
                onClick: (e) => N(n, e),
                'aria-label': T.intl.string(T.t.G1u0hI),
                tabIndex: -1,
                children: (0, r.jsx)(m.Z, {})
            }),
            d = (0, r.jsx)(o.Clickable, {
                className: S.winButtonMinMax,
                onClick: () => A(n),
                'aria-label': T.intl.string(T.t.CxOC4e),
                tabIndex: -1,
                children: (0, r.jsx)(E.Z, {})
            }),
            f = l
                ? (0, r.jsxs)('div', {
                      className: S.winButtons,
                      children: [d, c, u]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [u, c, d]
                  });
        return (0, r.jsx)(o.ThemeProvider, {
            theme: i,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: a()(S.typeWindows, e, { [S.withBackgroundOverride]: !s }),
                    children: [
                        (0, r.jsx)('div', {
                            className: S.wordmarkWindows,
                            children: (0, r.jsx)(_.Z, {})
                        }),
                        t,
                        f
                    ]
                })
        });
    },
    R = (e) => {
        let { focused: t, windowKey: n, frame: i, themeOverride: s, hasOpenLayer: l, children: c } = e;
        return (0, r.jsx)(o.ThemeProvider, {
            theme: s,
            children: (e) =>
                (0, r.jsxs)(o.Clickable, {
                    className: a()(i ? S.typeMacOSWithFrame : S.typeMacOS, t ? S.focused : S.unfocused, e, { [S.withBackgroundOverride]: !l }),
                    onDoubleClick: () => b.ZP.maximize(n),
                    tabIndex: -1,
                    children: [
                        u.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? c
                            : (0, r.jsxs)('div', {
                                  className: S.macButtons,
                                  children: [
                                      (0, r.jsx)(o.Clickable, {
                                          className: S.macButtonClose,
                                          onClick: () => y(n),
                                          'aria-label': T.intl.string(T.t.ZdNUj4),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(h.Z, { color: '#4c0000' })
                                      }),
                                      (0, r.jsx)(o.Clickable, {
                                          className: S.macButtonMinimize,
                                          onClick: () => A(n),
                                          'aria-label': T.intl.string(T.t.CxOC4e),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(v.Z, { color: '#975500' })
                                      }),
                                      (0, r.jsx)(o.Clickable, {
                                          className: S.macButtonMaximize,
                                          onClick: (e) => N(n, e),
                                          'aria-label': T.intl.string(T.t['2nM3Pj']),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(g.Z, { color: '#006500' })
                                      })
                                  ]
                              }),
                        i
                            ? (0, r.jsx)('div', {
                                  className: S.wordmarkMacOS,
                                  children: (0, r.jsx)(_.Z, { color: '#ffffff' })
                              })
                            : null
                    ]
                })
        });
    };
function O(e) {
    let { focused: t, type: n, windowKey: i, macOSFrame: a = !1, themeOverride: o } = e,
        u = (0, c.bp)(),
        _ = (0, s.e7)([d.Z], () => d.Z.isFullscreenInContext(u)),
        p = (0, l.Z)(),
        h = (0, f.Q)('AppPanels');
    if (_) return null;
    switch (n) {
        case I.PlatformTypes.WINDOWS:
            return (0, r.jsx)(C, {
                windowKey: i,
                themeOverride: o,
                hasOpenLayer: p,
                isRefreshEnabled: h
            });
        case I.PlatformTypes.OSX:
            return (0, r.jsx)(R, {
                focused: t,
                windowKey: i,
                frame: a,
                themeOverride: o,
                hasOpenLayer: p
            });
        default:
            return null;
    }
}
