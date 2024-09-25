n.d(t, {
    Z: function () {
        return D;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(191741),
    u = n(350810),
    c = n(579806),
    d = n(40851),
    _ = n(358221),
    E = n(540059),
    f = n(754347),
    h = n(428548),
    p = n(718759),
    m = n(679219),
    I = n(835225),
    T = n(939039),
    g = n(117795),
    S = n(358085),
    A = n(998502),
    v = n(689938),
    N = n(211149);
let O = '#ffffff',
    R = (e) => A.ZP.close(e),
    C = (e) => A.ZP.minimize(e),
    y = (e, t) => {
        (0, S.isMac)() && !t.altKey ? A.ZP.fullscreen(e) : A.ZP.maximize(e);
    },
    b = (e) => {
        let { children: t, windowKey: n, themeOverride: i, hasOpenLayer: o, isRefreshEnabled: l } = e,
            u = (0, r.jsx)(s.Clickable, {
                className: N.winButtonClose,
                onClick: () => R(n),
                'aria-label': v.Z.Messages.TITLE_BAR_CLOSE_WINDOW,
                tabIndex: -1,
                children: (0, r.jsx)(h.Z, {})
            }),
            c = (0, r.jsx)(s.Clickable, {
                className: N.winButtonMinMax,
                onClick: (e) => y(n, e),
                'aria-label': v.Z.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
                tabIndex: -1,
                children: (0, r.jsx)(m.Z, {})
            }),
            d = (0, r.jsx)(s.Clickable, {
                className: N.winButtonMinMax,
                onClick: () => C(n),
                'aria-label': v.Z.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                tabIndex: -1,
                children: (0, r.jsx)(T.Z, {})
            }),
            _ = l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [d, c, u]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [u, c, d]
                  });
        return (0, r.jsx)(s.ThemeProvider, {
            theme: i,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: a()(N.typeWindows, e, { [N.withBackgroundOverride]: !o }),
                    children: [
                        (0, r.jsx)('div', {
                            className: N.wordmarkWindows,
                            children: (0, r.jsx)(f.Z, {})
                        }),
                        t,
                        _
                    ]
                })
        });
    },
    L = (e) => {
        let { focused: t, windowKey: n, frame: i, themeOverride: o, hasOpenLayer: l, children: u } = e;
        return (0, r.jsx)(s.ThemeProvider, {
            theme: o,
            children: (e) =>
                (0, r.jsxs)(s.Clickable, {
                    className: a()(i ? N.typeMacOSWithFrame : N.typeMacOS, t ? N.focused : N.unfocused, e, { [N.withBackgroundOverride]: !l }),
                    onDoubleClick: () => A.ZP.maximize(n),
                    tabIndex: -1,
                    children: [
                        c.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? u
                            : (0, r.jsxs)('div', {
                                  className: N.macButtons,
                                  children: [
                                      (0, r.jsx)(s.Clickable, {
                                          className: N.macButtonClose,
                                          onClick: () => R(n),
                                          'aria-label': v.Z.Messages.TITLE_BAR_CLOSE_WINDOW,
                                          tabIndex: -1,
                                          children: (0, r.jsx)(p.Z, { color: '#4c0000' })
                                      }),
                                      (0, r.jsx)(s.Clickable, {
                                          className: N.macButtonMinimize,
                                          onClick: () => C(n),
                                          'aria-label': v.Z.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                                          tabIndex: -1,
                                          children: (0, r.jsx)(g.Z, { color: '#975500' })
                                      }),
                                      (0, r.jsx)(s.Clickable, {
                                          className: N.macButtonMaximize,
                                          onClick: (e) => y(n, e),
                                          'aria-label': v.Z.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                                          tabIndex: -1,
                                          children: (0, r.jsx)(I.Z, { color: '#006500' })
                                      })
                                  ]
                              }),
                        i
                            ? (0, r.jsx)('div', {
                                  className: N.wordmarkMacOS,
                                  children: (0, r.jsx)(f.Z, { color: O })
                              })
                            : null
                    ]
                })
        });
    };
function D(e) {
    let { focused: t, type: n, windowKey: i, macOSFrame: a = !1, themeOverride: s } = e,
        c = (0, d.bp)(),
        f = (0, o.e7)([_.Z], () => _.Z.isFullscreenInContext(c)),
        h = (0, u.Z)(),
        p = (0, E.Q)('AppPanels'),
        m = p && !a ? (0, r.jsx)(l.U, {}) : null;
    if (f) return null;
    switch (n) {
        case S.PlatformTypes.WINDOWS:
            return (0, r.jsx)(b, {
                windowKey: i,
                themeOverride: s,
                hasOpenLayer: h,
                isRefreshEnabled: p,
                children: m
            });
        case S.PlatformTypes.OSX:
            return (0, r.jsx)(L, {
                focused: t,
                windowKey: i,
                frame: a,
                themeOverride: s,
                hasOpenLayer: h,
                children: m
            });
        default:
            return null;
    }
}
