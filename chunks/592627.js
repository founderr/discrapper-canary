n.d(s, {
    Z: function () {
        return x;
    }
});
var t = n(735250);
n(470079);
var l = n(481060),
    i = n(906732),
    C = n(832149),
    r = n(600164),
    a = n(857039),
    o = n(515593),
    _ = n(598),
    d = n(614277),
    u = n(474936),
    c = n(689938),
    p = n(744078);
function x(e) {
    let { onClose: s, halloweenDecoPurchase: n } = e,
        { selectedPlan: x } = (0, _.usePaymentContext)(),
        { analyticsLocations: L } = (0, i.ZP)();
    return (0, a.Z)({ location: 'Gift purchase confirmation' }) && (null == x ? void 0 : x.skuId) === u.Si.TIER_2 && null != n
        ? (0, t.jsx)(d.O3, {
              children: (0, t.jsx)(l.ModalFooter, {
                  align: r.Z.Align.CENTER,
                  children: (0, t.jsxs)('div', {
                      className: p.halloweenFooter,
                      children: [
                          (0, t.jsx)(o.Z, { size: l.AvatarSizes.SIZE_32 }),
                          (0, t.jsx)(l.Button, {
                              onClick: () => {
                                  s(),
                                      (0, C.Z)({
                                          product: n,
                                          analyticsLocations: L
                                      });
                              },
                              children: c.Z.Messages.NITROWEEN_GIFT_CONFIRMATION_CTA
                          })
                      ]
                  })
              })
          })
        : null;
}
