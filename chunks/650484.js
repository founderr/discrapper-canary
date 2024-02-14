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
    stepConfigs: T,
    setBodyNode: p,
    setFooterNode: R,
    setModalOverlayNode: h,
    setReadySlideId: N
  } = (0, _.usePaymentContext)(), S = T.find(e => e.key === A);
  i.useEffect(() => {
    h(null)
  }, [A, h]), u(null != S, "Unknown step for current payment flow.");
  let P = null !== (o = null == S ? void 0 : null === (t = S.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== o && o,
    m = null == S ? void 0 : null === (n = S.options) || void 0 === n ? void 0 : n.bodyClassName,
    O = void 0 !== C && C ? E.sliderBodyLarge : null == S ? void 0 : null === (s = S.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
  return (0, r.jsxs)(r.Fragment, {
    children: [null === (c = null == S ? void 0 : null === (l = S.options) || void 0 === l ? void 0 : l.renderHeader) || void 0 === c || c ? f : null, S.renderStep(I), null == A || P ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.ModalContent, {
        className: a(E.body, m),
        children: (0, r.jsx)(d.Slides, {
          activeSlide: A,
          centered: !1,
          onSlideReady: e => N(e),
          children: T.filter(e => null != e.key).map(e => (0, r.jsx)(d.Slide, {
            id: e.key,
            children: (0, r.jsx)("form", {
              className: a(E.sliderBody, O),
              ref: e => p(e),
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