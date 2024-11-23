n.d(t, {
    I: function () {
        return v;
    }
});
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(425493),
    u = n(410030),
    m = n(984370),
    h = n(594174),
    p = n(471731),
    f = n(335131),
    g = n(388032),
    C = n(454801);
function v(e) {
    let { isFullScreen: t, isLayer: n, onClose: i, isCatalogView: v, handleTransition: b, transparent: x } = e,
        _ = (0, u.ZP)(),
        k = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        I = (null == k ? void 0 : k.isStaff()) || (null == k ? void 0 : k.isStaffPersonal()) || !1;
    return (0, r.jsx)(c.ThemeProvider, {
        theme: _,
        children: (e) =>
            (0, r.jsxs)(m.Z, {
                className: l()(e, C.headerBar, {
                    [C.fullscreenHeaderBar]: t,
                    [C.headerBarRegularBackground]: !x,
                    [C.headerBarTransparentLightBackground]: x && !(0, o.wj)(_),
                    [C.headerBarTransparentDarkBackground]: x && (0, o.wj)(_)
                }),
                transparent: x,
                toolbar: t || !I ? null : (0, r.jsx)(a.Fragment, {}),
                children: [
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            v &&
                                null != b &&
                                (0, r.jsx)(c.Clickable, {
                                    onClick: b,
                                    className: C.back,
                                    'aria-label': g.intl.string(g.t['13/7kZ']),
                                    children: (0, r.jsx)(c.ArrowLargeLeftIcon, {})
                                }),
                            (0, r.jsx)(p.Z, {
                                color: x ? ((0, o.wj)(_) ? 'white' : 'black') : void 0,
                                className: C.discordLogo
                            })
                        ]
                    }),
                    (0, r.jsx)(m.Z.Title, { children: g.intl.string(g.t.pWG4zc) }),
                    v &&
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
