n.d(t, {
    I: function () {
        return x;
    }
});
var a = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(780384),
    l = n(481060),
    c = n(425493),
    d = n(410030),
    u = n(984370),
    f = n(471731),
    p = n(486620),
    g = n(792125),
    C = n(335131),
    m = n(994896),
    _ = n(689938),
    b = n(99065);
function h(e) {
    let { isLayer: t, onClose: n, isFullScreen: s = !1 } = e;
    return (0, a.jsxs)(u.Z, {
        className: o()(b.headerBar, { [b.fullscreenHeaderBar]: s }),
        innerClassname: b.shopLogoContainer,
        toolbar: s ? null : (0, a.jsx)(r.Fragment, {}),
        children: [
            (0, a.jsx)(p.Z, { className: b.shopLogo }),
            s &&
                (0, a.jsx)(c.Z, {
                    className: b.closeIcon,
                    closeAction: t ? C.DR : n,
                    keybind: 'ESC'
                })
        ]
    });
}
function x(e) {
    let { isFullScreen: t, isLayer: n, onClose: s, showBackButton: p, handleTransition: x, transparent: I } = e,
        { newShopLogoEnabled: E } = (0, m.O)({ location: 'CollectiblesShop' }),
        v = (0, d.ZP)();
    return E
        ? (0, a.jsx)(h, {
              isLayer: n,
              onClose: s,
              isFullScreen: t
          })
        : (0, a.jsxs)(u.Z, {
              className: o()((0, g.Q)(v), b.headerBar, {
                  [b.fullscreenHeaderBar]: t,
                  [b.headerBarRegularBackground]: !I,
                  [b.headerBarTransparentLightBackground]: I && !(0, i.wj)(v),
                  [b.headerBarTransparentDarkBackground]: I && (0, i.wj)(v)
              }),
              transparent: I,
              toolbar: t ? null : (0, a.jsx)(r.Fragment, {}),
              children: [
                  (0, a.jsxs)(a.Fragment, {
                      children: [
                          p &&
                              null != x &&
                              (0, a.jsx)(l.Clickable, {
                                  onClick: x,
                                  className: b.back,
                                  children: (0, a.jsx)(l.ArrowLargeLeftIcon, {})
                              }),
                          (0, a.jsx)(f.Z, {
                              color: I ? ((0, i.wj)(v) ? 'white' : 'black') : void 0,
                              className: b.discordLogo
                          })
                      ]
                  }),
                  (0, a.jsx)(u.Z.Title, { children: _.Z.Messages.COLLECTIBLES_SHOP }),
                  t &&
                      (0, a.jsx)(c.Z, {
                          className: b.closeIcon,
                          closeAction: n ? C.DR : s,
                          keybind: 'ESC'
                      })
              ]
          });
}
