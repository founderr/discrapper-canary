n.r(e), n.d(e, {
  default: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  o = n.n(i),
  r = n(481060),
  l = n(761705),
  a = n(407517);

function c(t) {
  let {
    className: e,
    transitionState: n,
    items: i,
    startingIndex: c,
    onClose: u,
    onIndexChange: h,
    modalCarouselClassName: p,
    modalCarouselItemClassName: d
  } = t;
  return (0, s.jsx)(r.ModalRoot, {
    hideShadow: !0,
    className: o()(a.carouselModal, e),
    size: r.ModalSize.DYNAMIC,
    transitionState: n,
    "aria-label": "",
    onClick: u,
    children: (0, s.jsx)(l.Z, {
      className: p,
      items: i,
      startWith: c,
      onIndexChange: h,
      modalCarouselItemClassName: d
    })
  })
}