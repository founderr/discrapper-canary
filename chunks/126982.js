t.d(n, {
    Z: function () {
        return c;
    }
});
var s = t(735250);
t(470079);
var a = t(481060),
    l = t(131388),
    i = t(409813),
    r = t(750143),
    o = t(264499),
    d = t(60314);
function c(e) {
    let { step: n, onClose: t } = e,
        c = (0, l.Z)(r.X);
    return n === i.h8.BENEFITS || n === i.h8.CONFIRM
        ? null
        : (0, s.jsxs)('div', {
              className: o.headerContainer,
              children: [
                  !c &&
                      (0, s.jsx)('div', {
                          className: o.headerImageContainer,
                          'aria-hidden': 'true',
                          'data-accessibility': 'desaturate',
                          children: (0, s.jsx)('img', {
                              src: d,
                              alt: '',
                              className: o.headerImage
                          })
                      }),
                  (0, s.jsx)(a.ModalCloseButton, {
                      withCircleBackground: !0,
                      className: o.closeButton,
                      onClick: t
                  })
              ]
          });
}
