n.d(t, {
    I: function () {
        return x;
    }
});
var r = n(735250),
    a = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(780384),
    c = n(481060),
    l = n(425493),
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
    return (0, r.jsxs)(u.Z, {
        className: o()(b.headerBar, { [b.fullscreenHeaderBar]: s }),
        innerClassname: b.shopLogoContainer,
        toolbar: s ? null : (0, r.jsx)(a.Fragment, {}),
        children: [
            (0, r.jsx)(p.Z, { className: b.shopLogo }),
            s &&
                (0, r.jsx)(l.Z, {
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
        ? (0, r.jsx)(h, {
              isLayer: n,
              onClose: s,
              isFullScreen: t
          })
        : (0, r.jsxs)(u.Z, {
              className: o()((0, g.Q)(v), b.headerBar, {
                  [b.fullscreenHeaderBar]: t,
                  [b.headerBarRegularBackground]: !I,
                  [b.headerBarTransparentLightBackground]: I && !(0, i.wj)(v),
                  [b.headerBarTransparentDarkBackground]: I && (0, i.wj)(v)
              }),
              transparent: I,
              toolbar: t ? null : (0, r.jsx)(a.Fragment, {}),
              children: [
                  (0, r.jsxs)(r.Fragment, {
                      children: [
                          p &&
                              null != x &&
                              (0, r.jsx)(c.Clickable, {
                                  onClick: x,
                                  className: b.back,
                                  children: (0, r.jsx)(c.ArrowLargeLeftIcon, {})
                              }),
                          (0, r.jsx)(f.Z, {
                              color: I ? ((0, i.wj)(v) ? 'white' : 'black') : void 0,
                              className: b.discordLogo
                          })
                      ]
                  }),
                  (0, r.jsx)(u.Z.Title, { children: _.Z.Messages.COLLECTIBLES_SHOP }),
                  t &&
                      (0, r.jsx)(l.Z, {
                          className: b.closeIcon,
                          closeAction: n ? C.DR : s,
                          keybind: 'ESC'
                      })
              ]
          });
}
