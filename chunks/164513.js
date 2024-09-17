t.d(n, {
    Z: function () {
        return f;
    }
});
var r = t(735250);
t(470079);
var a = t(481060),
    i = t(906732),
    s = t(600164),
    o = t(522489),
    l = t(570711),
    C = t(669079),
    d = t(987209),
    c = t(598),
    u = t(614277),
    _ = t(981631),
    p = t(689938);
function f(e) {
    let { onClose: n } = e,
        { selectedPlan: t } = (0, c.usePaymentContext)(),
        { selectedGiftStyle: f, giftRecipient: h } = (0, d.wD)(),
        { analyticsLocations: x } = (0, i.ZP)(),
        L = !__BILLING_STANDALONE__ && (0, C.MY)(h, !1) === C.xr.CUSTOM_STYLE,
        { enabled: I } = o.m.useExperiment(
            { location: 'GiftPurchaseConfirmationFooter' },
            {
                autoTrackExposure: L,
                disable: !L
            }
        );
    return I
        ? (0, r.jsx)(u.O3, {
              children: (0, r.jsx)(a.ModalFooter, {
                  align: s.Z.Align.CENTER,
                  children: (0, r.jsx)(l.Z, {
                      repeatPurchase: !0,
                      initialPlanId: null == t ? void 0 : t.id,
                      subscriptionTier: null == t ? void 0 : t.skuId,
                      buttonText: p.Z.Messages.PREMIUM_GIFTING_REPEAT_GIFT,
                      giftStyle: f,
                      analyticsLocation: _.Sbl.REPEAT_GIFT_PURCHASE_BUTTON,
                      analyticsLocationsOverride: x.slice(0, -1),
                      onClick: () => {
                          n();
                      }
                  })
              })
          })
        : null;
}
