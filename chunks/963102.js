n.d(t, {
    I: function () {
        return _;
    }
});
var r = n(200651),
    s = n(192379),
    a = n(120356),
    i = n.n(a),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(425493),
    u = n(410030),
    m = n(984370),
    f = n(594174),
    p = n(471731),
    C = n(335131),
    h = n(689938),
    g = n(454801);
function _(e) {
    let { isFullScreen: t, isLayer: n, onClose: a, isCatalogView: _, handleTransition: b, transparent: x } = e,
        E = (0, u.ZP)(),
        v = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        I = (null == v ? void 0 : v.isStaff()) || (null == v ? void 0 : v.isStaffPersonal()) || !1;
    return (0, r.jsx)(c.ThemeProvider, {
        theme: E,
        children: (e) =>
            (0, r.jsxs)(m.Z, {
                className: i()(e, g.headerBar, {
                    [g.fullscreenHeaderBar]: t,
                    [g.headerBarRegularBackground]: !x,
                    [g.headerBarTransparentLightBackground]: x && !(0, o.wj)(E),
                    [g.headerBarTransparentDarkBackground]: x && (0, o.wj)(E)
                }),
                transparent: x,
                toolbar: t || !I ? null : (0, r.jsx)(s.Fragment, {}),
                children: [
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            _ &&
                                null != b &&
                                (0, r.jsx)(c.Clickable, {
                                    onClick: b,
                                    className: g.back,
                                    'aria-label': h.Z.Messages.BACK,
                                    children: (0, r.jsx)(c.ArrowLargeLeftIcon, {})
                                }),
                            (0, r.jsx)(p.Z, {
                                color: x ? ((0, o.wj)(E) ? 'white' : 'black') : void 0,
                                className: g.discordLogo
                            })
                        ]
                    }),
                    (0, r.jsx)(m.Z.Title, { children: h.Z.Messages.COLLECTIBLES_SHOP }),
                    _ &&
                        (0, r.jsx)(m.Z.Title, {
                            className: g.shopAllHeader,
                            children: h.Z.Messages.COLLECTIBLES_SHOP_ALL
                        }),
                    t &&
                        (0, r.jsx)(d.Z, {
                            className: g.closeIcon,
                            closeAction: n ? C.DR : a,
                            keybind: 'ESC'
                        })
                ]
            })
    });
}
