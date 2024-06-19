l.d(n, {
  C3: function() {
    return N
  },
  O3: function() {
    return p
  },
  ZP: function() {
    return E
  }
});
var r = l(735250),
  s = l(470079),
  t = l(120356),
  o = l.n(t),
  a = l(512722),
  i = l.n(a),
  c = l(699581),
  d = l(481060),
  u = l(598),
  m = l(229828);

function E(e) {
  var n, l, t, a, c, E;
  let {
    header: N,
    isLargeModal: p,
    stepProps: h
  } = function(e) {
    let {
      header: n,
      isLargeModal: l,
      ...r
    } = e;
    return {
      header: n,
      isLargeModal: l,
      stepProps: r
    }
  }(e), {
    step: x,
    stepConfigs: _,
    setBodyNode: I,
    setFooterNode: C,
    setModalOverlayNode: S,
    setReadySlideId: f
  } = (0, u.usePaymentContext)(), j = _.find(e => e.key === x);
  s.useEffect(() => {
    S(null)
  }, [x, S]), i()(null != j, "Unknown step for current payment flow.");
  let v = null !== (c = null == j ? void 0 : null === (n = j.options) || void 0 === n ? void 0 : n.hideSlider) && void 0 !== c && c,
    T = null == j ? void 0 : null === (l = j.options) || void 0 === l ? void 0 : l.bodyClassName,
    M = void 0 !== p && p ? m.sliderBodyLarge : null == j ? void 0 : null === (t = j.options) || void 0 === t ? void 0 : t.sliderBodyClassName;
  return (0, r.jsxs)(r.Fragment, {
    children: [null === (E = null == j ? void 0 : null === (a = j.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === E || E ? N : null, j.renderStep(h), null == x || v ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.ModalContent, {
        className: o()(m.body, T),
        children: (0, r.jsx)(d.Slides, {
          activeSlide: x,
          centered: !1,
          onSlideReady: e => f(e),
          children: _.filter(e => null != e.key).map(e => (0, r.jsx)(d.Slide, {
            id: e.key,
            children: (0, r.jsx)("form", {
              className: o()(m.sliderBody, M),
              ref: e => I(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, r.jsx)("div", {
        ref: e => C(e)
      }), (0, r.jsx)("div", {
        ref: e => S(e)
      })]
    })]
  })
}

function N(e) {
  let {
    children: n
  } = e, {
    bodyNode: l
  } = (0, u.usePaymentContext)();
  return null == l ? null : c.createPortal(n, l)
}

function p(e) {
  let {
    children: n
  } = e, {
    footerNode: l
  } = (0, u.usePaymentContext)();
  return null == l ? null : c.createPortal(n, l)
}