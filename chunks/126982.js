n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(131388),
    a = n(409813),
    o = n(750143),
    s = n(264499),
    c = n(60314);
function u(e) {
    let { step: t, onClose: n } = e,
        u = (0, l.Z)(o.X);
    return t === a.h8.BENEFITS || t === a.h8.CONFIRM
        ? null
        : (0, i.jsxs)('div', {
              className: s.headerContainer,
              children: [
                  !u &&
                      (0, i.jsx)('div', {
                          className: s.headerImageContainer,
                          'aria-hidden': 'true',
                          'data-accessibility': 'desaturate',
                          children: (0, i.jsx)('img', {
                              src: c,
                              alt: '',
                              className: s.headerImage
                          })
                      }),
                  (0, i.jsx)(r.ModalCloseButton, {
                      withCircleBackground: !0,
                      className: s.closeButton,
                      onClick: n
                  })
              ]
          });
}
