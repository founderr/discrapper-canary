"use strict";
r.r(l), r.d(l, {
  PaymentPortalBody: function() {
    return f
  },
  PaymentPortalFooter: function() {
    return S
  },
  default: function() {
    return E
  }
});
var n = r("735250"),
  t = r("470079"),
  s = r("120356"),
  a = r.n(s),
  o = r("512722"),
  i = r.n(o),
  d = r("699581"),
  c = r.n(d),
  u = r("481060"),
  p = r("598"),
  m = r("636461");

function E(e) {
  var l, r, s, o, d, c;
  let {
    header: E,
    isLargeModal: f,
    stepProps: S
  } = function(e) {
    let {
      header: l,
      isLargeModal: r,
      ...n
    } = e;
    return {
      header: l,
      isLargeModal: r,
      stepProps: n
    }
  }(e), {
    step: N,
    stepConfigs: _,
    setBodyNode: x,
    setFooterNode: T,
    setModalOverlayNode: P,
    setReadySlideId: C
  } = (0, p.usePaymentContext)(), A = _.find(e => e.key === N);
  t.useEffect(() => {
    P(null)
  }, [N, P]), i()(null != A, "Unknown step for current payment flow.");
  let I = null !== (d = null == A ? void 0 : null === (l = A.options) || void 0 === l ? void 0 : l.hideSlider) && void 0 !== d && d,
    h = null == A ? void 0 : null === (r = A.options) || void 0 === r ? void 0 : r.bodyClassName,
    j = void 0 !== f && f ? m.sliderBodyLarge : null == A ? void 0 : null === (s = A.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
  return (0, n.jsxs)(n.Fragment, {
    children: [null === (c = null == A ? void 0 : null === (o = A.options) || void 0 === o ? void 0 : o.renderHeader) || void 0 === c || c ? E : null, A.renderStep(S), null == N || I ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(u.ModalContent, {
        className: a()(m.body, h),
        children: (0, n.jsx)(u.Slides, {
          activeSlide: N,
          centered: !1,
          onSlideReady: e => C(e),
          children: _.filter(e => null != e.key).map(e => (0, n.jsx)(u.Slide, {
            id: e.key,
            children: (0, n.jsx)("form", {
              className: a()(m.sliderBody, j),
              ref: e => x(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, n.jsx)("div", {
        ref: e => T(e)
      }), (0, n.jsx)("div", {
        ref: e => P(e)
      })]
    })]
  })
}

function f(e) {
  let {
    children: l
  } = e, {
    bodyNode: r
  } = (0, p.usePaymentContext)();
  return null == r ? null : c().createPortal(l, r)
}

function S(e) {
  let {
    children: l
  } = e, {
    footerNode: r
  } = (0, p.usePaymentContext)();
  return null == r ? null : c().createPortal(l, r)
}