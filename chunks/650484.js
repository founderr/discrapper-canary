"use strict";
n.r(e), n.d(e, {
  default: function() {
    return p
  },
  PaymentPortalBody: function() {
    return _
  },
  PaymentPortalFooter: function() {
    return v
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  s = n.n(l),
  a = n("627445"),
  o = n.n(a),
  u = n("817736"),
  c = n.n(u),
  d = n("77078"),
  f = n("642906"),
  h = n("990893");

function p(t) {
  var e, n, l, a, u, c;
  let {
    header: p,
    isLargeModal: _,
    stepProps: v
  } = function(t) {
    let {
      header: e,
      isLargeModal: n,
      ...i
    } = t;
    return {
      header: e,
      isLargeModal: n,
      stepProps: i
    }
  }(t), {
    step: C,
    stepConfigs: E,
    setBodyNode: g,
    setFooterNode: I,
    setModalOverlayNode: S,
    setReadySlideId: m
  } = (0, f.usePaymentContext)(), A = E.find(t => t.key === C);
  r.useEffect(() => {
    S(null)
  }, [C, S]), o(null != A, "Unknown step for current payment flow.");
  let N = null !== (u = null == A ? void 0 : null === (e = A.options) || void 0 === e ? void 0 : e.hideSlider) && void 0 !== u && u,
    T = null == A ? void 0 : null === (n = A.options) || void 0 === n ? void 0 : n.bodyClassName,
    w = void 0 !== _ && _ ? h.sliderBodyLarge : null == A ? void 0 : null === (l = A.options) || void 0 === l ? void 0 : l.sliderBodyClassName;
  return (0, i.jsxs)(i.Fragment, {
    children: [null === (c = null == A ? void 0 : null === (a = A.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === c || c ? p : null, A.renderStep(v), null == C || N ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(d.ModalContent, {
        className: s(h.body, T),
        children: (0, i.jsx)(d.Slides, {
          activeSlide: C,
          centered: !1,
          onSlideReady: t => m(t),
          children: E.filter(t => null != t.key).map(t => (0, i.jsx)(d.Slide, {
            id: t.key,
            children: (0, i.jsx)("form", {
              className: s(h.sliderBody, w),
              ref: t => g(t),
              onSubmit: t => t.preventDefault()
            })
          }, t.key))
        })
      }), (0, i.jsx)("div", {
        ref: t => I(t)
      }), (0, i.jsx)("div", {
        ref: t => S(t)
      })]
    })]
  })
}

function _(t) {
  let {
    children: e
  } = t, {
    bodyNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(e, n)
}

function v(t) {
  let {
    children: e
  } = t, {
    footerNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(e, n)
}