t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(131388),
    a = t(409813),
    s = t(750143),
    o = t(802633),
    d = t(60314);
function c(e) {
    let { step: n, onClose: t } = e,
        c = (0, r.Z)(s.X);
    return n === a.h8.BENEFITS || n === a.h8.CONFIRM
        ? null
        : (0, i.jsxs)('div', {
              className: o.headerContainer,
              children: [
                  !c &&
                      (0, i.jsx)('div', {
                          className: o.headerImageContainer,
                          'aria-hidden': 'true',
                          'data-accessibility': 'desaturate',
                          children: (0, i.jsx)('img', {
                              src: d,
                              alt: '',
                              className: o.headerImage
                          })
                      }),
                  (0, i.jsx)(l.ModalCloseButton, {
                      withCircleBackground: !0,
                      className: o.closeButton,
                      onClick: t
                  })
              ]
          });
}
