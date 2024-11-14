n.d(t, {
    I: function () {
        return b;
    }
});
var r = n(200651),
    a = n(192379),
    i = n(120356),
    s = n.n(i),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(425493),
    u = n(410030),
    m = n(984370),
    p = n(594174),
    h = n(471731),
    f = n(335131),
    g = n(388032),
    C = n(454801);
function b(e) {
    let { isFullScreen: t, isLayer: n, onClose: i, isCatalogView: b, handleTransition: x, transparent: v } = e,
        _ = (0, u.ZP)(),
        k = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        j = (null == k ? void 0 : k.isStaff()) || (null == k ? void 0 : k.isStaffPersonal()) || !1;
    return (0, r.jsx)(c.ThemeProvider, {
        theme: _,
        children: (e) =>
            (0, r.jsxs)(m.Z, {
                className: s()(e, C.headerBar, {
                    [C.fullscreenHeaderBar]: t,
                    [C.headerBarRegularBackground]: !v,
                    [C.headerBarTransparentLightBackground]: v && !(0, o.wj)(_),
                    [C.headerBarTransparentDarkBackground]: v && (0, o.wj)(_)
                }),
                transparent: v,
                toolbar: t || !j ? null : (0, r.jsx)(a.Fragment, {}),
                children: [
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            b &&
                                null != x &&
                                (0, r.jsx)(c.Clickable, {
                                    onClick: x,
                                    className: C.back,
                                    'aria-label': g.intl.string(g.t['13/7kZ']),
                                    children: (0, r.jsx)(c.ArrowLargeLeftIcon, {})
                                }),
                            (0, r.jsx)(h.Z, {
                                color: v ? ((0, o.wj)(_) ? 'white' : 'black') : void 0,
                                className: C.discordLogo
                            })
                        ]
                    }),
                    (0, r.jsx)(m.Z.Title, { children: g.intl.string(g.t.pWG4zc) }),
                    b &&
                        (0, r.jsx)(m.Z.Title, {
                            className: C.shopAllHeader,
                            children: g.intl.string(g.t.xFcotb)
                        }),
                    t &&
                        (0, r.jsx)(d.Z, {
                            className: C.closeIcon,
                            closeAction: n ? f.DR : i,
                            keybind: 'ESC'
                        })
                ]
            })
    });
}
