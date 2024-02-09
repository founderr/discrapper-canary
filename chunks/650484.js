"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  },
  PaymentPortalBody: function() {
    return g
  },
  PaymentPortalFooter: function() {
    return p
  }
});
var a = n("37983"),
  r = n("884691"),
  i = n("414456"),
  l = n.n(i),
  s = n("627445"),
  u = n.n(s),
  o = n("817736"),
  d = n.n(o),
  c = n("77078"),
  f = n("642906"),
  h = n("990893");

function m(e) {
  var t, n, i, s, o, d;
  let {
    header: m,
    isLargeModal: g,
    stepProps: p
  } = function(e) {
    let {
      header: t,
      isLargeModal: n,
      ...a
    } = e;
    return {
      header: t,
      isLargeModal: n,
      stepProps: a
    }
  }(e), {
    step: v,
    stepConfigs: S,
    setBodyNode: C,
    setFooterNode: E,
    setModalOverlayNode: _,
    setReadySlideId: N
  } = (0, f.usePaymentContext)(), I = S.find(e => e.key === v);
  r.useEffect(() => {
    _(null)
  }, [v, _]), u(null != I, "Unknown step for current payment flow.");
  let O = null !== (o = null == I ? void 0 : null === (t = I.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== o && o,
    A = null == I ? void 0 : null === (n = I.options) || void 0 === n ? void 0 : n.bodyClassName,
    D = void 0 !== g && g ? h.sliderBodyLarge : null == I ? void 0 : null === (i = I.options) || void 0 === i ? void 0 : i.sliderBodyClassName;
  return (0, a.jsxs)(a.Fragment, {
    children: [null === (d = null == I ? void 0 : null === (s = I.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === d || d ? m : null, I.renderStep(p), null == v || O ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.ModalContent, {
        className: l(h.body, A),
        children: (0, a.jsx)(c.Slides, {
          activeSlide: v,
          centered: !1,
          onSlideReady: e => N(e),
          children: S.filter(e => null != e.key).map(e => (0, a.jsx)(c.Slide, {
            id: e.key,
            children: (0, a.jsx)("form", {
              className: l(h.sliderBody, D),
              ref: e => C(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, a.jsx)("div", {
        ref: e => E(e)
      }), (0, a.jsx)("div", {
        ref: e => _(e)
      })]
    })]
  })
}

function g(e) {
  let {
    children: t
  } = e, {
    bodyNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : d.createPortal(t, n)
}

function p(e) {
  let {
    children: t
  } = e, {
    footerNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : d.createPortal(t, n)
}