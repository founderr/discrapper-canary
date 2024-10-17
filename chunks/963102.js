s.d(t, {
    I: function () {
        return _;
    }
});
var a = s(735250),
    r = s(470079),
    n = s(120356),
    i = s.n(n),
    l = s(442837),
    o = s(780384),
    c = s(481060),
    d = s(425493),
    u = s(410030),
    m = s(984370),
    C = s(594174),
    f = s(471731),
    p = s(335131),
    h = s(689938),
    g = s(454801);
function _(e) {
    let { isFullScreen: t, isLayer: s, onClose: n, isCatalogView: _, handleTransition: b, transparent: x } = e,
        E = (0, u.ZP)(),
        I = (0, l.e7)([C.default], () => C.default.getCurrentUser()),
        T = (null == I ? void 0 : I.isStaff()) || (null == I ? void 0 : I.isStaffPersonal()) || !1;
    return (0, a.jsx)(c.ThemeProvider, {
        theme: E,
        children: (e) =>
            (0, a.jsxs)(m.Z, {
                className: i()(e, g.headerBar, {
                    [g.fullscreenHeaderBar]: t,
                    [g.headerBarRegularBackground]: !x,
                    [g.headerBarTransparentLightBackground]: x && !(0, o.wj)(E),
                    [g.headerBarTransparentDarkBackground]: x && (0, o.wj)(E)
                }),
                transparent: x,
                toolbar: t || !T ? null : (0, a.jsx)(r.Fragment, {}),
                children: [
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            _ &&
                                null != b &&
                                (0, a.jsx)(c.Clickable, {
                                    onClick: b,
                                    className: g.back,
                                    'aria-label': h.Z.Messages.BACK,
                                    children: (0, a.jsx)(c.ArrowLargeLeftIcon, {})
                                }),
                            (0, a.jsx)(f.Z, {
                                color: x ? ((0, o.wj)(E) ? 'white' : 'black') : void 0,
                                className: g.discordLogo
                            })
                        ]
                    }),
                    (0, a.jsx)(m.Z.Title, { children: h.Z.Messages.COLLECTIBLES_SHOP }),
                    _ &&
                        (0, a.jsx)(m.Z.Title, {
                            className: g.shopAllHeader,
                            children: h.Z.Messages.COLLECTIBLES_SHOP_ALL
                        }),
                    t &&
                        (0, a.jsx)(d.Z, {
                            className: g.closeIcon,
                            closeAction: s ? p.DR : n,
                            keybind: 'ESC'
                        })
                ]
            })
    });
}
