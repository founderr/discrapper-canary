"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  },
  PaymentPortalBody: function() {
    return I
  },
  PaymentPortalFooter: function() {
    return h
  }
});
var i = n("37983"),
  r = n("884691"),
  o = n("414456"),
  s = n.n(o),
  l = n("627445"),
  a = n.n(l),
  u = n("817736"),
  c = n.n(u),
  d = n("77078"),
  f = n("642906"),
  E = n("990893");

function _(e) {
  var t, n, o, l, u, c;
  let {
    header: _,
    isLargeModal: I,
    stepProps: h
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
    step: S,
    stepConfigs: p,
    setBodyNode: T,
    setFooterNode: N,
    setModalOverlayNode: C,
    setReadySlideId: R
  } = (0, f.usePaymentContext)(), v = p.find(e => e.key === S);
  r.useEffect(() => {
    C(null)
  }, [S, C]), a(null != v, "Unknown step for current payment flow.");
  let A = null !== (u = null == v ? void 0 : null === (t = v.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
    g = null == v ? void 0 : null === (n = v.options) || void 0 === n ? void 0 : n.bodyClassName,
    m = void 0 !== I && I ? E.sliderBodyLarge : null == v ? void 0 : null === (o = v.options) || void 0 === o ? void 0 : o.sliderBodyClassName;
  return (0, i.jsxs)(i.Fragment, {
    children: [null === (c = null == v ? void 0 : null === (l = v.options) || void 0 === l ? void 0 : l.renderHeader) || void 0 === c || c ? _ : null, v.renderStep(h), null == S || A ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(d.ModalContent, {
        className: s(E.body, g),
        children: (0, i.jsx)(d.Slides, {
          activeSlide: S,
          centered: !1,
          onSlideReady: e => R(e),
          children: p.filter(e => null != e.key).map(e => (0, i.jsx)(d.Slide, {
            id: e.key,
            children: (0, i.jsx)("form", {
              className: s(E.sliderBody, m),
              ref: e => T(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, i.jsx)("div", {
        ref: e => N(e)
      }), (0, i.jsx)("div", {
        ref: e => C(e)
      })]
    })]
  })
}

function I(e) {
  let {
    children: t
  } = e, {
    bodyNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}

function h(e) {
  let {
    children: t
  } = e, {
    footerNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}