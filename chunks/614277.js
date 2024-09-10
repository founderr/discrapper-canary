t.d(n, {
    C3: function () {
        return f;
    },
    O3: function () {
        return m;
    },
    ZP: function () {
        return _;
    }
});
var o = t(735250),
    r = t(470079),
    a = t(120356),
    i = t.n(a),
    c = t(512722),
    l = t.n(c),
    s = t(699581),
    u = t(481060),
    d = t(598),
    p = t(130298);
function _(e) {
    var n, t, a, c, s, _;
    let {
            header: f,
            isLargeModal: m,
            stepProps: h
        } = (function (e) {
            let { header: n, isLargeModal: t, ...o } = e;
            return {
                header: n,
                isLargeModal: t,
                stepProps: o
            };
        })(e),
        { step: g, stepConfigs: S, setBodyNode: b, setFooterNode: E, setModalOverlayNode: I, setReadySlideId: P } = (0, d.usePaymentContext)(),
        T = S.find((e) => e.key === g);
    r.useEffect(() => {
        I(null);
    }, [g, I]),
        l()(null != T, 'Unknown step for current payment flow.');
    let x = null !== (s = null == T ? void 0 : null === (n = T.options) || void 0 === n ? void 0 : n.hideSlider) && void 0 !== s && s,
        y = null == T ? void 0 : null === (t = T.options) || void 0 === t ? void 0 : t.bodyClassName,
        M = void 0 !== m && m ? p.sliderBodyLarge : null == T ? void 0 : null === (a = T.options) || void 0 === a ? void 0 : a.sliderBodyClassName;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            null === (_ = null == T ? void 0 : null === (c = T.options) || void 0 === c ? void 0 : c.renderHeader) || void 0 === _ || _ ? f : null,
            T.renderStep(h),
            null == g || x
                ? null
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(u.ModalContent, {
                              className: i()(p.body, y),
                              children: (0, o.jsx)(u.Slides, {
                                  activeSlide: g,
                                  centered: !1,
                                  onSlideReady: (e) => P(e),
                                  children: S.filter((e) => null != e.key).map((e) =>
                                      (0, o.jsx)(
                                          u.Slide,
                                          {
                                              id: e.key,
                                              children: (0, o.jsx)('form', {
                                                  className: i()(p.sliderBody, M),
                                                  ref: (e) => b(e),
                                                  onSubmit: (e) => e.preventDefault()
                                              })
                                          },
                                          e.key
                                      )
                                  )
                              })
                          }),
                          (0, o.jsx)('div', { ref: (e) => E(e) }),
                          (0, o.jsx)('div', { ref: (e) => I(e) })
                      ]
                  })
        ]
    });
}
function f(e) {
    let { children: n } = e,
        { bodyNode: t } = (0, d.usePaymentContext)();
    return null == t ? null : s.createPortal(n, t);
}
function m(e) {
    let { children: n } = e,
        { footerNode: t } = (0, d.usePaymentContext)();
    return null == t ? null : s.createPortal(n, t);
}
