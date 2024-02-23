"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  },
  PaymentPortalBody: function() {
    return C
  },
  PaymentPortalFooter: function() {
    return I
  }
});
var r = n("37983"),
  s = n("884691"),
  i = n("414456"),
  a = n.n(i),
  l = n("627445"),
  o = n.n(l),
  u = n("817736"),
  c = n.n(u),
  d = n("77078"),
  _ = n("642906"),
  f = n("304006");

function E(e) {
  var t, n, i, l, u, c;
  let {
    header: E,
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
    step: h,
    stepConfigs: p,
    setBodyNode: A,
    setFooterNode: R,
    setModalOverlayNode: N,
    setReadySlideId: T
  } = (0, _.usePaymentContext)(), m = p.find(e => e.key === h);
  s.useEffect(() => {
    N(null)
  }, [h, N]), o(null != m, "Unknown step for current payment flow.");
  let S = null !== (u = null == m ? void 0 : null === (t = m.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
    L = null == m ? void 0 : null === (n = m.options) || void 0 === n ? void 0 : n.bodyClassName,
    P = void 0 !== C && C ? f.sliderBodyLarge : null == m ? void 0 : null === (i = m.options) || void 0 === i ? void 0 : i.sliderBodyClassName;
  return (0, r.jsxs)(r.Fragment, {
    children: [null === (c = null == m ? void 0 : null === (l = m.options) || void 0 === l ? void 0 : l.renderHeader) || void 0 === c || c ? E : null, m.renderStep(I), null == h || S ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.ModalContent, {
        className: a(f.body, L),
        children: (0, r.jsx)(d.Slides, {
          activeSlide: h,
          centered: !1,
          onSlideReady: e => T(e),
          children: p.filter(e => null != e.key).map(e => (0, r.jsx)(d.Slide, {
            id: e.key,
            children: (0, r.jsx)("form", {
              className: a(f.sliderBody, P),
              ref: e => A(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, r.jsx)("div", {
        ref: e => R(e)
      }), (0, r.jsx)("div", {
        ref: e => N(e)
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