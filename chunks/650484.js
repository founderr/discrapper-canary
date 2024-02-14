"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  },
  PaymentPortalBody: function() {
    return C
  },
  PaymentPortalFooter: function() {
    return I
  }
});
var r = n("37983"),
  i = n("884691"),
  s = n("414456"),
  a = n.n(s),
  l = n("627445"),
  u = n.n(l),
  o = n("817736"),
  c = n.n(o),
  d = n("77078"),
  _ = n("642906"),
  E = n("304006");

function f(e) {
  var t, n, s, l, o, c;
  let {
    header: f,
    isLargeModal: C,
    stepProps: I
  } = function(e) {
    let {
      header: t,
      isLargeModal: n,
      ...r
    } = e;
    return {
      header: t,
      isLargeModal: n,
      stepProps: r
    }
  }(e), {
    step: A,
    stepConfigs: p,
    setBodyNode: T,
    setFooterNode: R,
    setModalOverlayNode: h,
    setReadySlideId: S
  } = (0, _.usePaymentContext)(), N = p.find(e => e.key === A);
  i.useEffect(() => {
    h(null)
  }, [A, h]), u(null != N, "Unknown step for current payment flow.");
  let P = null !== (o = null == N ? void 0 : null === (t = N.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== o && o,
    m = null == N ? void 0 : null === (n = N.options) || void 0 === n ? void 0 : n.bodyClassName,
    L = void 0 !== C && C ? E.sliderBodyLarge : null == N ? void 0 : null === (s = N.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
  return (0, r.jsxs)(r.Fragment, {
    children: [null === (c = null == N ? void 0 : null === (l = N.options) || void 0 === l ? void 0 : l.renderHeader) || void 0 === c || c ? f : null, N.renderStep(I), null == A || P ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.ModalContent, {
        className: a(E.body, m),
        children: (0, r.jsx)(d.Slides, {
          activeSlide: A,
          centered: !1,
          onSlideReady: e => S(e),
          children: p.filter(e => null != e.key).map(e => (0, r.jsx)(d.Slide, {
            id: e.key,
            children: (0, r.jsx)("form", {
              className: a(E.sliderBody, L),
              ref: e => T(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, r.jsx)("div", {
        ref: e => R(e)
      }), (0, r.jsx)("div", {
        ref: e => h(e)
      })]
    })]
  })
}

function C(e) {
  let {
    children: t
  } = e, {
    bodyNode: n
  } = (0, _.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}

function I(e) {
  let {
    children: t
  } = e, {
    footerNode: n
  } = (0, _.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}