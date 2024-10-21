n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    s = n(131388),
    r = n(409813),
    l = n(750143),
    o = n(264499),
    c = n(60314);
function u(e) {
    let { step: t, onClose: n } = e,
        u = (0, s.Z)(l.X);
    return t === r.h8.BENEFITS || t === r.h8.CONFIRM
        ? null
        : (0, i.jsxs)('div', {
              className: o.headerContainer,
              children: [
                  !u &&
                      (0, i.jsx)('div', {
                          className: o.headerImageContainer,
                          'aria-hidden': 'true',
                          'data-accessibility': 'desaturate',
                          children: (0, i.jsx)('img', {
                              src: c,
                              alt: '',
                              className: o.headerImage
                          })
                      }),
                  (0, i.jsx)(a.ModalCloseButton, {
                      withCircleBackground: !0,
                      className: o.closeButton,
                      onClick: n
                  })
              ]
          });
}
