t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var a = t(481060),
    r = t(131388),
    o = t(409813),
    l = t(750143),
    s = t(264499),
    c = t(60314);
function d(e) {
    let { step: n, onClose: t } = e,
        d = (0, r.Z)(l.X);
    return n === o.h8.BENEFITS || n === o.h8.CONFIRM
        ? null
        : (0, i.jsxs)('div', {
              className: s.headerContainer,
              children: [
                  !d &&
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
                  (0, i.jsx)(a.ModalCloseButton, {
                      withCircleBackground: !0,
                      className: s.closeButton,
                      onClick: t
                  })
              ]
          });
}
