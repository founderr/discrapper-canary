"use strict";
l.r(r), l.d(r, {
  default: function() {
    return f
  },
  PaymentPortalBody: function() {
    return E
  },
  PaymentPortalFooter: function() {
    return N
  }
});
var n = l("37983"),
  t = l("884691"),
  s = l("414456"),
  a = l.n(s),
  o = l("627445"),
  i = l.n(o),
  c = l("817736"),
  d = l.n(c),
  u = l("77078"),
  p = l("642906"),
  m = l("304006");

function f(e) {
  var r, l, s, o, c, d;
  let {
    header: f,
    isLargeModal: E,
    stepProps: N
  } = function(e) {
    let {
      header: r,
      isLargeModal: l,
      ...n
    } = e;
    return {
      header: r,
      isLargeModal: l,
      stepProps: n
    }
  }(e), {
    step: h,
    stepConfigs: S,
    setBodyNode: x,
    setFooterNode: C,
    setModalOverlayNode: T,
    setReadySlideId: _
  } = (0, p.usePaymentContext)(), v = S.find(e => e.key === h);
  t.useEffect(() => {
    T(null)
  }, [h, T]), i(null != v, "Unknown step for current payment flow.");
  let I = null !== (c = null == v ? void 0 : null === (r = v.options) || void 0 === r ? void 0 : r.hideSlider) && void 0 !== c && c,
    j = null == v ? void 0 : null === (l = v.options) || void 0 === l ? void 0 : l.bodyClassName,
    P = void 0 !== E && E ? m.sliderBodyLarge : null == v ? void 0 : null === (s = v.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
  return (0, n.jsxs)(n.Fragment, {
    children: [null === (d = null == v ? void 0 : null === (o = v.options) || void 0 === o ? void 0 : o.renderHeader) || void 0 === d || d ? f : null, v.renderStep(N), null == h || I ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(u.ModalContent, {
        className: a(m.body, j),
        children: (0, n.jsx)(u.Slides, {
          activeSlide: h,
          centered: !1,
          onSlideReady: e => _(e),
          children: S.filter(e => null != e.key).map(e => (0, n.jsx)(u.Slide, {
            id: e.key,
            children: (0, n.jsx)("form", {
              className: a(m.sliderBody, P),
              ref: e => x(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, n.jsx)("div", {
        ref: e => C(e)
      }), (0, n.jsx)("div", {
        ref: e => T(e)
      })]
    })]
  })
}

function E(e) {
  let {
    children: r
  } = e, {
    bodyNode: l
  } = (0, p.usePaymentContext)();
  return null == l ? null : d.createPortal(r, l)
}

function N(e) {
  let {
    children: r
  } = e, {
    footerNode: l
  } = (0, p.usePaymentContext)();
  return null == l ? null : d.createPortal(r, l)
}