n.d(t, {
    I: function () {
        return h;
    }
});
var r = n(735250),
    s = n(470079),
    a = n(120356),
    i = n.n(a),
    o = n(481060),
    l = n(425493),
    c = n(410030),
    d = n(984370),
    u = n(471731),
    f = n(486620),
    p = n(792125),
    g = n(335131),
    C = n(994896),
    m = n(689938),
    _ = n(99065);
function b(e) {
    let { isLayer: t, onClose: n, isFullScreen: a = !1 } = e;
    return (0, r.jsxs)(d.Z, {
        className: i()(_.headerBar, { [_.fullscreenHeaderBar]: a }),
        innerClassname: _.shopLogoContainer,
        toolbar: a ? null : (0, r.jsx)(s.Fragment, {}),
        children: [
            (0, r.jsx)(f.Z, { className: _.shopLogo }),
            a &&
                (0, r.jsx)(l.Z, {
                    className: _.closeIcon,
                    closeAction: t ? g.DR : n,
                    keybind: 'ESC'
                })
        ]
    });
}
function h(e) {
    let { isFullScreen: t, isLayer: n, onClose: a, showBackButton: f, handleTransition: h } = e,
        { newShopLogoEnabled: x } = (0, C.O)({ location: 'CollectiblesShop' }),
        I = (0, c.ZP)();
    return x
        ? (0, r.jsx)(b, {
              isLayer: n,
              onClose: a,
              isFullScreen: t
          })
        : (0, r.jsxs)(d.Z, {
              className: i()((0, p.Q)(I), _.headerBar, { [_.fullscreenHeaderBar]: t }),
              toolbar: t ? null : (0, r.jsx)(s.Fragment, {}),
              children: [
                  (0, r.jsxs)(r.Fragment, {
                      children: [
                          f &&
                              null != h &&
                              (0, r.jsx)(o.Clickable, {
                                  onClick: h,
                                  className: _.back,
                                  children: (0, r.jsx)(o.ArrowLargeLeftIcon, {})
                              }),
                          (0, r.jsx)(u.Z, { className: _.discordLogo })
                      ]
                  }),
                  (0, r.jsx)(d.Z.Title, { children: m.Z.Messages.COLLECTIBLES_SHOP }),
                  t &&
                      (0, r.jsx)(l.Z, {
                          className: _.closeIcon,
                          closeAction: n ? g.DR : a,
                          keybind: 'ESC'
                      })
              ]
          });
}
