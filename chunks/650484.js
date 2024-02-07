"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  },
  PaymentPortalBody: function() {
    return C
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

function p(e) {
  var t, n, l, a, u, c;
  let {
    header: p,
    isLargeModal: C,
    stepProps: v
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
    step: E,
    stepConfigs: I,
    setBodyNode: g,
    setFooterNode: _,
    setModalOverlayNode: S,
    setReadySlideId: m
  } = (0, f.usePaymentContext)(), y = I.find(e => e.key === E);
  r.useEffect(() => {
    S(null)
  }, [E, S]), o(null != y, "Unknown step for current payment flow.");
  let A = null !== (u = null == y ? void 0 : null === (t = y.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
    N = null == y ? void 0 : null === (n = y.options) || void 0 === n ? void 0 : n.bodyClassName,
    T = void 0 !== C && C ? h.sliderBodyLarge : null == y ? void 0 : null === (l = y.options) || void 0 === l ? void 0 : l.sliderBodyClassName;
  return (0, i.jsxs)(i.Fragment, {
    children: [null === (c = null == y ? void 0 : null === (a = y.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === c || c ? p : null, y.renderStep(v), null == E || A ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(d.ModalContent, {
        className: s(h.body, N),
        children: (0, i.jsx)(d.Slides, {
          activeSlide: E,
          centered: !1,
          onSlideReady: e => m(e),
          children: I.filter(e => null != e.key).map(e => (0, i.jsx)(d.Slide, {
            id: e.key,
            children: (0, i.jsx)("form", {
              className: s(h.sliderBody, T),
              ref: e => g(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, i.jsx)("div", {
        ref: e => _(e)
      }), (0, i.jsx)("div", {
        ref: e => S(e)
      })]
    })]
  })
}

function C(e) {
  let {
    children: t
  } = e, {
    bodyNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}

function v(e) {
  let {
    children: t
  } = e, {
    footerNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}