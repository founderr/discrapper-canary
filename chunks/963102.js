n.d(t, {
    I: function () {
        return h;
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
    g = n(335131),
    C = n(994896),
    m = n(689938),
    _ = n(99065);
function b(e) {
    let { isLayer: t, onClose: n, isFullScreen: s = !1 } = e;
    return (0, a.jsxs)(u.Z, {
        className: o()(_.headerBar, { [_.fullscreenHeaderBar]: s }),
        innerClassname: _.shopLogoContainer,
        toolbar: s ? null : (0, a.jsx)(r.Fragment, {}),
        children: [
            (0, a.jsx)(p.Z, { className: _.shopLogo }),
            s &&
                (0, a.jsx)(c.Z, {
                    className: _.closeIcon,
                    closeAction: t ? g.DR : n,
                    keybind: 'ESC'
                })
        ]
    });
}
function h(e) {
    let { isFullScreen: t, isLayer: n, onClose: s, showBackButton: p, handleTransition: h, transparent: x } = e,
        { newShopLogoEnabled: I } = (0, C.O)({ location: 'CollectiblesShop' }),
        E = (0, d.ZP)();
    return I
        ? (0, a.jsx)(b, {
              isLayer: n,
              onClose: s,
              isFullScreen: t
          })
        : (0, a.jsx)(l.ThemeProvider, {
              theme: E,
              children: (e) =>
                  (0, a.jsxs)(u.Z, {
                      className: o()(e, _.headerBar, {
                          [_.fullscreenHeaderBar]: t,
                          [_.headerBarRegularBackground]: !x,
                          [_.headerBarTransparentLightBackground]: x && !(0, i.wj)(E),
                          [_.headerBarTransparentDarkBackground]: x && (0, i.wj)(E)
                      }),
                      transparent: x,
                      toolbar: t ? null : (0, a.jsx)(r.Fragment, {}),
                      children: [
                          (0, a.jsxs)(a.Fragment, {
                              children: [
                                  p &&
                                      null != h &&
                                      (0, a.jsx)(l.Clickable, {
                                          onClick: h,
                                          className: _.back,
                                          'aria-label': m.Z.Messages.BACK,
                                          children: (0, a.jsx)(l.ArrowLargeLeftIcon, {})
                                      }),
                                  (0, a.jsx)(f.Z, {
                                      color: x ? ((0, i.wj)(E) ? 'white' : 'black') : void 0,
                                      className: _.discordLogo
                                  })
                              ]
                          }),
                          (0, a.jsx)(u.Z.Title, { children: m.Z.Messages.COLLECTIBLES_SHOP }),
                          t &&
                              (0, a.jsx)(c.Z, {
                                  className: _.closeIcon,
                                  closeAction: n ? g.DR : s,
                                  keybind: 'ESC'
                              })
                      ]
                  })
          });
}
