t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(200651);
t(192379);
var a = t(481060),
    r = t(131388),
    o = t(409813),
    l = t(750143),
    s = t(264499),
    d = t(60314);
function c(e) {
    let { step: n, onClose: t } = e,
        c = (0, r.Z)(l.X);
    return n === o.h8.BENEFITS || n === o.h8.CONFIRM
        ? null
        : (0, i.jsxs)('div', {
              className: s.headerContainer,
              children: [
                  !c &&
                      (0, i.jsx)('div', {
                          className: s.headerImageContainer,
                          'aria-hidden': 'true',
                          'data-accessibility': 'desaturate',
                          children: (0, i.jsx)('img', {
                              src: d,
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
