t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(627341);
var i = t(200651);
t(192379);
var a = t(120356),
    r = t.n(a),
    o = t(278074),
    l = t(481060),
    s = t(109213),
    c = t(409813),
    d = t(474936),
    u = t(388032),
    f = t(73913);
function p(e) {
    let { step: n, onClose: t, giftingOrigin: a } = e,
        { enabled: p } = s.G.useExperiment({ location: 'CollectiblesGiftPaymentModalHeader' }, { autoTrackExposure: !1 }),
        m = (0, o.EQ)(n)
            .with(c.h8.REVIEW, () => u.intl.string(u.t.JbRd5u))
            .with(c.h8.ADD_PAYMENT_STEPS, () => u.intl.string(u.t.QiGOam))
            .with(c.h8.GIFT_CUSTOMIZATION, () => (p && a === d.Wt.DM_CHANNEL ? u.intl.string(u.t['xU+d9P']) : u.intl.string(u.t['JCFN//'])))
            .with(c.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => u.intl.string(u.t.lDbi6O))
            .with(c.h8.CONFIRM, () => '')
            .otherwise(() => null);
    return null == m
        ? null
        : (0, i.jsxs)(l.ModalHeader, {
              className: r()(f.headerContainerGift),
              separator: n !== c.h8.CONFIRM,
              children: [
                  (0, i.jsx)(l.Heading, {
                      variant: 'heading-lg/semibold',
                      children: m
                  }),
                  (0, i.jsx)(l.ModalCloseButton, {
                      onClick: t,
                      className: f.closeButtonGift
                  })
              ]
          });
}
