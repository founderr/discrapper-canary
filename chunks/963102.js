r.d(t, {
    I: function () {
        return _;
    }
});
var s = r(200651),
    n = r(192379),
    a = r(120356),
    i = r.n(a),
    l = r(442837),
    o = r(780384),
    c = r(481060),
    d = r(425493),
    u = r(410030),
    m = r(984370),
    f = r(594174),
    p = r(471731),
    C = r(335131),
    h = r(689938),
    g = r(454801);
function _(e) {
    let { isFullScreen: t, isLayer: r, onClose: a, isCatalogView: _, handleTransition: b, transparent: x } = e,
        E = (0, u.ZP)(),
        I = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        v = (null == I ? void 0 : I.isStaff()) || (null == I ? void 0 : I.isStaffPersonal()) || !1;
    return (0, s.jsx)(c.ThemeProvider, {
        theme: E,
        children: (e) =>
            (0, s.jsxs)(m.Z, {
                className: i()(e, g.headerBar, {
                    [g.fullscreenHeaderBar]: t,
                    [g.headerBarRegularBackground]: !x,
                    [g.headerBarTransparentLightBackground]: x && !(0, o.wj)(E),
                    [g.headerBarTransparentDarkBackground]: x && (0, o.wj)(E)
                }),
                transparent: x,
                toolbar: t || !v ? null : (0, s.jsx)(n.Fragment, {}),
                children: [
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            _ &&
                                null != b &&
                                (0, s.jsx)(c.Clickable, {
                                    onClick: b,
                                    className: g.back,
                                    'aria-label': h.Z.Messages.BACK,
                                    children: (0, s.jsx)(c.ArrowLargeLeftIcon, {})
                                }),
                            (0, s.jsx)(p.Z, {
                                color: x ? ((0, o.wj)(E) ? 'white' : 'black') : void 0,
                                className: g.discordLogo
                            })
                        ]
                    }),
                    (0, s.jsx)(m.Z.Title, { children: h.Z.Messages.COLLECTIBLES_SHOP }),
                    _ &&
                        (0, s.jsx)(m.Z.Title, {
                            className: g.shopAllHeader,
                            children: h.Z.Messages.COLLECTIBLES_SHOP_ALL
                        }),
                    t &&
                        (0, s.jsx)(d.Z, {
                            className: g.closeIcon,
                            closeAction: r ? C.DR : a,
                            keybind: 'ESC'
                        })
                ]
            })
    });
}
