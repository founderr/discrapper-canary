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
    a = n(512722),
    c = n.n(a),
    i = n(995295),
    d = n(481060),
    u = n(563132),
    p = n(135970);
function m(e) {
    var r, n, t, a, i, m;
    let {
            header: f,
            isLargeModal: h,
            isDynamicModal: x,
            stepProps: _
        } = (function (e) {
            let { header: r, isLargeModal: n, isDynamicModal: l, ...o } = e;
            return {
                header: r,
                isLargeModal: n,
                isDynamicModal: l,
                stepProps: o
            };
        })(e),
        { step: N, stepConfigs: b, setBodyNode: v, setFooterNode: y, setModalOverlayNode: C, setReadySlideId: g } = (0, u.usePaymentContext)(),
        j = b.find((e) => e.key === N);
    o.useEffect(() => {
        C(null);
    }, [N, C]),
        c()(null != j, 'Unknown step for current payment flow.');
    let S = null !== (i = null == j ? void 0 : null === (r = j.options) || void 0 === r ? void 0 : r.hideSlider) && void 0 !== i && i,
        E = null == j ? void 0 : null === (n = j.options) || void 0 === n ? void 0 : n.bodyClassName,
        I = null == j ? void 0 : null === (t = j.options) || void 0 === t ? void 0 : t.sliderBodyClassName;
    return (
        void 0 !== h && h ? (I = p.sliderBodyLarge) : x && (I = p.sliderBodyDynamic),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null === (m = null == j ? void 0 : null === (a = j.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === m || m ? f : null,
                j.renderStep(_),
                null == N || S
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.ModalContent, {
                                  className: s()(E, p.body, p.modalContentOverride),
                                  children: (0, l.jsx)(d.Slides, {
                                      activeSlide: N,
                                      centered: !1,
                                      onSlideReady: (e) => g(e),
                                      children: b
                                          .filter((e) => null != e.key)
                                          .map((e) =>
                                              (0, l.jsx)(
                                                  d.Slide,
                                                  {
                                                      id: e.key,
                                                      children: (0, l.jsx)('form', {
                                                          className: s()(p.sliderBody, I),
                                                          ref: (e) => v(e),
                                                          onSubmit: (e) => e.preventDefault()
                                                      })
                                                  },
                                                  e.key
                                              )
                                          )
                                  })
                              }),
                              (0, l.jsx)('div', { ref: (e) => y(e) }),
                              (0, l.jsx)('div', { ref: (e) => C(e) })
                          ]
                      })
            ]
        })
    );
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
