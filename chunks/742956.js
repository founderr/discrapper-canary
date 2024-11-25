t.d(n, {
    Z: function () {
        return m;
    }
}),
    t(627341);
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    a = t(278074),
    s = t(481060),
    o = t(109213),
    d = t(409813),
    c = t(474936),
    u = t(388032),
    h = t(283314);
function m(e) {
    let { step: n, onClose: t, giftingOrigin: l } = e,
        { enabled: m } = o.G.useExperiment({ location: 'CollectiblesGiftPaymentModalHeader' }, { autoTrackExposure: !1 }),
        x = (0, a.EQ)(n)
            .with(d.h8.REVIEW, () => u.intl.string(u.t.JbRd5u))
            .with(d.h8.ADD_PAYMENT_STEPS, () => u.intl.string(u.t.QiGOam))
            .with(d.h8.GIFT_CUSTOMIZATION, () => (m && l === c.Wt.DM_CHANNEL ? u.intl.string(u.t['xU+d9P']) : u.intl.string(u.t['JCFN//'])))
            .with(d.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => u.intl.string(u.t.lDbi6O))
            .with(d.h8.CONFIRM, () => '')
            .otherwise(() => null);
    return null == x
        ? null
        : (0, i.jsxs)(s.ModalHeader, {
              className: r()(h.headerContainerGift),
              separator: n !== d.h8.CONFIRM,
              children: [
                  (0, i.jsx)(s.Heading, {
                      variant: 'heading-lg/semibold',
                      children: x
                  }),
                  (0, i.jsx)(s.ModalCloseButton, {
                      onClick: t,
                      className: h.closeButtonGift
                  })
              ]
          });
}
