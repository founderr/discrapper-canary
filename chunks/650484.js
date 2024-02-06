"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  },
  PaymentPortalBody: function() {
    return h
  },
  PaymentPortalFooter: function() {
    return _
  }
});
var i = n("37983"),
  l = n("884691"),
  r = n("414456"),
  o = n.n(r),
  a = n("627445"),
  s = n.n(a),
  u = n("817736"),
  c = n.n(u),
  d = n("77078"),
  f = n("642906"),
  E = n("990893");

function p(e) {
  var t, n, r, a, u, c;
  let {
    header: p,
    isLargeModal: h,
    stepProps: _
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
    step: C,
    stepConfigs: S,
    setBodyNode: I,
    setFooterNode: T,
    setModalOverlayNode: g,
    setReadySlideId: N
  } = (0, f.usePaymentContext)(), v = S.find(e => e.key === C);
  l.useEffect(() => {
    g(null)
  }, [C, g]), s(null != v, "Unknown step for current payment flow.");
  let A = null !== (u = null == v ? void 0 : null === (t = v.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
    m = null == v ? void 0 : null === (n = v.options) || void 0 === n ? void 0 : n.bodyClassName,
    L = void 0 !== h && h ? E.sliderBodyLarge : null == v ? void 0 : null === (r = v.options) || void 0 === r ? void 0 : r.sliderBodyClassName;
  return (0, i.jsxs)(i.Fragment, {
    children: [null === (c = null == v ? void 0 : null === (a = v.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === c || c ? p : null, v.renderStep(_), null == C || A ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(d.ModalContent, {
        className: o(E.body, m),
        children: (0, i.jsx)(d.Slides, {
          activeSlide: C,
          centered: !1,
          onSlideReady: e => N(e),
          children: S.filter(e => null != e.key).map(e => (0, i.jsx)(d.Slide, {
            id: e.key,
            children: (0, i.jsx)("form", {
              className: o(E.sliderBody, L),
              ref: e => I(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, i.jsx)("div", {
        ref: e => T(e)
      }), (0, i.jsx)("div", {
        ref: e => g(e)
      })]
    })]
  })
}

function h(e) {
  let {
    children: t
  } = e, {
    bodyNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}

function _(e) {
  let {
    children: t
  } = e, {
    footerNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}