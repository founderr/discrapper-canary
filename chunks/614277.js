n.d(r, {
    C3: function () {
        return f;
    },
    O3: function () {
        return h;
    },
    ZP: function () {
        return m;
    }
});
var l = n(200651),
    o = n(192379),
    t = n(120356),
    s = n.n(t),
    c = n(512722),
    a = n.n(c),
    i = n(995295),
    d = n(481060),
    u = n(563132),
    p = n(854724);
function m(e) {
    var r, n, t, c, i, m;
    let {
            header: f,
            isLargeModal: h,
            stepProps: x
        } = (function (e) {
            let { header: r, isLargeModal: n, ...l } = e;
            return {
                header: r,
                isLargeModal: n,
                stepProps: l
            };
        })(e),
        { step: N, stepConfigs: _, setBodyNode: g, setFooterNode: v, setModalOverlayNode: b, setReadySlideId: j } = (0, u.usePaymentContext)(),
        C = _.find((e) => e.key === N);
    o.useEffect(() => {
        b(null);
    }, [N, b]),
        a()(null != C, 'Unknown step for current payment flow.');
    let y = null !== (i = null == C ? void 0 : null === (r = C.options) || void 0 === r ? void 0 : r.hideSlider) && void 0 !== i && i,
        S = null == C ? void 0 : null === (n = C.options) || void 0 === n ? void 0 : n.bodyClassName,
        E = void 0 !== h && h ? p.sliderBodyLarge : null == C ? void 0 : null === (t = C.options) || void 0 === t ? void 0 : t.sliderBodyClassName;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null === (m = null == C ? void 0 : null === (c = C.options) || void 0 === c ? void 0 : c.renderHeader) || void 0 === m || m ? f : null,
            C.renderStep(x),
            null == N || y
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(d.ModalContent, {
                              className: s()(p.body, S),
                              children: (0, l.jsx)(d.Slides, {
                                  activeSlide: N,
                                  centered: !1,
                                  onSlideReady: (e) => j(e),
                                  children: _.filter((e) => null != e.key).map((e) =>
                                      (0, l.jsx)(
                                          d.Slide,
                                          {
                                              id: e.key,
                                              children: (0, l.jsx)('form', {
                                                  className: s()(p.sliderBody, E),
                                                  ref: (e) => g(e),
                                                  onSubmit: (e) => e.preventDefault()
                                              })
                                          },
                                          e.key
                                      )
                                  )
                              })
                          }),
                          (0, l.jsx)('div', { ref: (e) => v(e) }),
                          (0, l.jsx)('div', { ref: (e) => b(e) })
                      ]
                  })
        ]
    });
}
function f(e) {
    let { children: r } = e,
        { bodyNode: n } = (0, u.usePaymentContext)();
    return null == n ? null : i.createPortal(r, n);
}
function h(e) {
    let { children: r } = e,
        { footerNode: n } = (0, u.usePaymentContext)();
    return null == n ? null : i.createPortal(r, n);
}
