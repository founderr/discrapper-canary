n.d(t, {
    Z: function () {
        return D;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(350810),
    u = n(579806),
    c = n(40851),
    d = n(358221),
    _ = n(540059),
    E = n(754347),
    f = n(428548),
    h = n(718759),
    p = n(679219),
    I = n(835225),
    m = n(939039),
    T = n(117795),
    S = n(358085),
    g = n(998502),
    A = n(689938),
    N = n(211149);
let R = (e) => g.ZP.close(e),
    O = (e) => g.ZP.minimize(e),
    v = (e, t) => {
        (0, S.isMac)() && !t.altKey ? g.ZP.fullscreen(e) : g.ZP.maximize(e);
    },
    C = (e) => {
        let { children: t, windowKey: n, themeOverride: i, hasOpenLayer: s, isRefreshEnabled: l } = e,
            u = (0, r.jsx)(o.Clickable, {
                className: N.winButtonClose,
                onClick: () => R(n),
                'aria-label': A.Z.Messages.TITLE_BAR_CLOSE_WINDOW,
                tabIndex: -1,
                children: (0, r.jsx)(f.Z, {})
            }),
            c = (0, r.jsx)(o.Clickable, {
                className: N.winButtonMinMax,
                onClick: (e) => v(n, e),
                'aria-label': A.Z.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
                tabIndex: -1,
                children: (0, r.jsx)(p.Z, {})
            }),
            d = (0, r.jsx)(o.Clickable, {
                className: N.winButtonMinMax,
                onClick: () => O(n),
                'aria-label': A.Z.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                tabIndex: -1,
                children: (0, r.jsx)(m.Z, {})
            }),
            _ = l
                ? (0, r.jsxs)('div', {
                      className: N.winButtons,
                      children: [d, c, u]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [u, c, d]
                  });
        return (0, r.jsx)(o.ThemeProvider, {
            theme: i,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: a()(N.typeWindows, e, { [N.withBackgroundOverride]: !s }),
                    children: [
                        (0, r.jsx)('div', {
                            className: N.wordmarkWindows,
                            children: (0, r.jsx)(E.Z, {})
                        }),
                        t,
                        _
                    ]
                })
        });
    },
    L = (e) => {
        let { focused: t, windowKey: n, frame: i, themeOverride: s, hasOpenLayer: l, children: c } = e;
        return (0, r.jsx)(o.ThemeProvider, {
            theme: s,
            children: (e) =>
                (0, r.jsxs)(o.Clickable, {
                    className: a()(i ? N.typeMacOSWithFrame : N.typeMacOS, t ? N.focused : N.unfocused, e, { [N.withBackgroundOverride]: !l }),
                    onDoubleClick: () => g.ZP.maximize(n),
                    tabIndex: -1,
                    children: [
                        u.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? c
                            : (0, r.jsxs)('div', {
                                  className: N.macButtons,
                                  children: [
                                      (0, r.jsx)(o.Clickable, {
                                          className: N.macButtonClose,
                                          onClick: () => R(n),
                                          'aria-label': A.Z.Messages.TITLE_BAR_CLOSE_WINDOW,
                                          tabIndex: -1,
                                          children: (0, r.jsx)(h.Z, { color: '#4c0000' })
                                      }),
                                      (0, r.jsx)(o.Clickable, {
                                          className: N.macButtonMinimize,
                                          onClick: () => O(n),
                                          'aria-label': A.Z.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                                          tabIndex: -1,
                                          children: (0, r.jsx)(T.Z, { color: '#975500' })
                                      }),
                                      (0, r.jsx)(o.Clickable, {
                                          className: N.macButtonMaximize,
                                          onClick: (e) => v(n, e),
                                          'aria-label': A.Z.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                                          tabIndex: -1,
                                          children: (0, r.jsx)(I.Z, { color: '#006500' })
                                      })
                                  ]
                              }),
                        i
                            ? (0, r.jsx)('div', {
                                  className: N.wordmarkMacOS,
                                  children: (0, r.jsx)(E.Z, { color: '#ffffff' })
                              })
                            : null
                    ]
                })
        });
    };
function D(e) {
    let { focused: t, type: n, windowKey: i, macOSFrame: a = !1, themeOverride: o } = e,
        u = (0, c.bp)(),
        E = (0, s.e7)([d.Z], () => d.Z.isFullscreenInContext(u)),
        f = (0, l.Z)(),
        h = (0, _.Q)('AppPanels');
    if (E) return null;
    switch (n) {
        case S.PlatformTypes.WINDOWS:
            return (0, r.jsx)(C, {
                windowKey: i,
                themeOverride: o,
                hasOpenLayer: f,
                isRefreshEnabled: h
            });
        case S.PlatformTypes.OSX:
            return (0, r.jsx)(L, {
                focused: t,
                windowKey: i,
                frame: a,
                themeOverride: o,
                hasOpenLayer: f
            });
        default:
            return null;
    }
}
