t.d(n, {
    C3: function () {
        return m;
    },
    O3: function () {
        return _;
    },
    ZP: function () {
        return f;
    }
});
var o = t(200651),
    l = t(192379),
    i = t(120356),
    r = t.n(i),
    a = t(512722),
    s = t.n(a),
    u = t(995295),
    c = t(481060),
    d = t(563132),
    p = t(135970);
function f(e) {
    var n, t, i, a, u, f;
    let {
            header: m,
            isLargeModal: _,
            stepProps: S
        } = (function (e) {
            let { header: n, isLargeModal: t, ...o } = e;
            return {
                header: n,
                isLargeModal: t,
                stepProps: o
            };
        })(e),
        { step: E, stepConfigs: h, setBodyNode: g, setFooterNode: P, setModalOverlayNode: T, setReadySlideId: I } = (0, d.usePaymentContext)(),
        x = h.find((e) => e.key === E);
    l.useEffect(() => {
        T(null);
    }, [E, T]),
        s()(null != x, 'Unknown step for current payment flow.');
    let C = null !== (u = null == x ? void 0 : null === (n = x.options) || void 0 === n ? void 0 : n.hideSlider) && void 0 !== u && u,
        b = null == x ? void 0 : null === (t = x.options) || void 0 === t ? void 0 : t.bodyClassName,
        N = void 0 !== _ && _ ? p.sliderBodyLarge : null == x ? void 0 : null === (i = x.options) || void 0 === i ? void 0 : i.sliderBodyClassName;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            null === (f = null == x ? void 0 : null === (a = x.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === f || f ? m : null,
            x.renderStep(S),
            null == E || C
                ? null
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(c.ModalContent, {
                              className: r()(p.body, b),
                              children: (0, o.jsx)(c.Slides, {
                                  activeSlide: E,
                                  centered: !1,
                                  onSlideReady: (e) => I(e),
                                  children: h
                                      .filter((e) => null != e.key)
                                      .map((e) =>
                                          (0, o.jsx)(
                                              c.Slide,
                                              {
                                                  id: e.key,
                                                  children: (0, o.jsx)('form', {
                                                      className: r()(p.sliderBody, N),
                                                      ref: (e) => g(e),
                                                      onSubmit: (e) => e.preventDefault()
                                                  })
                                              },
                                              e.key
                                          )
                                      )
                              })
                          }),
                          (0, o.jsx)('div', { ref: (e) => P(e) }),
                          (0, o.jsx)('div', { ref: (e) => T(e) })
                      ]
                  })
        ]
    });
}
function m(e) {
    let { children: n } = e,
        { bodyNode: t } = (0, d.usePaymentContext)();
    return null == t ? null : u.createPortal(n, t);
}
function _(e) {
    let { children: n } = e,
        { footerNode: t } = (0, d.usePaymentContext)();
    return null == t ? null : u.createPortal(n, t);
}
