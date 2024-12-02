n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    s = n(906732),
    r = n(832149),
    a = n(600164),
    C = n(857039),
    o = n(515593),
    d = n(563132),
    u = n(614277),
    c = n(474936),
    p = n(388032),
    x = n(956247);
function h(e) {
    let { onClose: t, halloweenDecoPurchase: n } = e,
        { selectedPlan: h } = (0, d.usePaymentContext)(),
        { analyticsLocations: f } = (0, s.ZP)();
    return (0, C.Z)({ location: 'Gift purchase confirmation' }) && (null == h ? void 0 : h.skuId) === c.Si.TIER_2 && null != n
        ? (0, i.jsx)(u.O3, {
              children: (0, i.jsx)(l.ModalFooter, {
                  align: a.Z.Align.CENTER,
                  children: (0, i.jsxs)('div', {
                      className: x.halloweenFooter,
                      children: [
                          (0, i.jsx)(o.Z, { size: l.AvatarSizes.SIZE_32 }),
                          (0, i.jsx)(l.Button, {
                              onClick: () => {
                                  t(),
                                      (0, r.Z)({
                                          product: n,
                                          analyticsLocations: f
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
