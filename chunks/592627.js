n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    s = n(906732),
    r = n(832149),
    C = n(600164),
    a = n(857039),
    o = n(515593),
    d = n(563132),
    u = n(614277),
    c = n(474936),
    p = n(388032),
    x = n(744078);
function _(e) {
    let { onClose: t, halloweenDecoPurchase: n } = e,
        { selectedPlan: _ } = (0, d.usePaymentContext)(),
        { analyticsLocations: h } = (0, s.ZP)();
    return (0, a.Z)({ location: 'Gift purchase confirmation' }) && (null == _ ? void 0 : _.skuId) === c.Si.TIER_2 && null != n
        ? (0, i.jsx)(u.O3, {
              children: (0, i.jsx)(l.ModalFooter, {
                  align: C.Z.Align.CENTER,
                  children: (0, i.jsxs)('div', {
                      className: x.halloweenFooter,
                      children: [
                          (0, i.jsx)(o.Z, { size: l.AvatarSizes.SIZE_32 }),
                          (0, i.jsx)(l.Button, {
                              onClick: () => {
                                  t(),
                                      (0, r.Z)({
                                          product: n,
                                          analyticsLocations: h
                                      });
                              },
                              children: p.intl.string(p.t.kMYVws)
                          })
                      ]
                  })
              })
          })
        : null;
}
