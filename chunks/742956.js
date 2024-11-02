n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(627341);
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(278074),
    o = n(481060),
    s = n(109213),
    c = n(409813),
    u = n(474936),
    d = n(388032),
    m = n(73913);
function f(e) {
    let { step: t, onClose: n, giftingOrigin: r } = e,
        { enabled: f } = s.G.useExperiment({ location: 'CollectiblesGiftPaymentModalHeader' }, { autoTrackExposure: !1 }),
        h = (0, a.EQ)(t)
            .with(c.h8.REVIEW, () => d.intl.string(d.t.JbRd5u))
            .with(c.h8.ADD_PAYMENT_STEPS, () => d.intl.string(d.t.QiGOam))
            .with(c.h8.GIFT_CUSTOMIZATION, () => (f && r === u.Wt.DM_CHANNEL ? d.intl.string(d.t['xU+d9P']) : d.intl.string(d.t['JCFN//'])))
            .with(c.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => d.intl.string(d.t.lDbi6O))
            .with(c.h8.CONFIRM, () => '')
            .otherwise(() => null);
    return null == h
        ? null
        : (0, i.jsxs)(o.ModalHeader, {
              className: l()(m.headerContainerGift),
              separator: t !== c.h8.CONFIRM,
              children: [
                  (0, i.jsx)(o.Heading, {
                      variant: 'heading-lg/semibold',
                      children: h
                  }),
                  (0, i.jsx)(o.ModalCloseButton, {
                      onClick: n,
                      className: m.closeButtonGift
                  })
              ]
          });
}
