"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  },
  PaymentPortalBody: function() {
    return _
  },
  PaymentPortalFooter: function() {
    return p
  }
});
var i = n("37983"),
  l = n("884691"),
  r = n("414456"),
  a = n.n(r),
  s = n("627445"),
  o = n.n(s),
  u = n("817736"),
  d = n.n(u),
  c = n("77078"),
  f = n("642906"),
  h = n("990893");

function E(e) {
  var t, n, r, s, u, d;
  let {
    header: E,
    isLargeModal: _,
    stepProps: p
  } = function(e) {
    let {
      header: t,
      isLargeModal: n,
      ...i
    } = e;
    return {
      header: t,
      isLargeModal: n,
      stepProps: i
    }
  }(e), {
    step: I,
    stepConfigs: C,
    setBodyNode: T,
    setFooterNode: S,
    setModalOverlayNode: v,
    setReadySlideId: N
  } = (0, f.usePaymentContext)(), g = C.find(e => e.key === I);
  l.useEffect(() => {
    v(null)
  }, [I, v]), o(null != g, "Unknown step for current payment flow.");
  let m = null !== (u = null == g ? void 0 : null === (t = g.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
    A = null == g ? void 0 : null === (n = g.options) || void 0 === n ? void 0 : n.bodyClassName,
    L = void 0 !== _ && _ ? h.sliderBodyLarge : null == g ? void 0 : null === (r = g.options) || void 0 === r ? void 0 : r.sliderBodyClassName;
  return (0, i.jsxs)(i.Fragment, {
    children: [null === (d = null == g ? void 0 : null === (s = g.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === d || d ? E : null, g.renderStep(p), null == I || m ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(c.ModalContent, {
        className: a(h.body, A),
        children: (0, i.jsx)(c.Slides, {
          activeSlide: I,
          centered: !1,
          onSlideReady: e => N(e),
          children: C.filter(e => null != e.key).map(e => (0, i.jsx)(c.Slide, {
            id: e.key,
            children: (0, i.jsx)("form", {
              className: a(h.sliderBody, L),
              ref: e => T(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, i.jsx)("div", {
        ref: e => S(e)
      }), (0, i.jsx)("div", {
        ref: e => v(e)
      })]
    })]
  })
}

function _(e) {
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