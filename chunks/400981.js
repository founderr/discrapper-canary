n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    s = n(481060),
    r = n(607070),
    a = n(906732),
    o = n(821982),
    C = n(832149),
    d = n(600164),
    u = n(286961),
    c = n(594174),
    p = n(614277),
    x = n(648102);
function _(e) {
    let { onClose: t, selectedPromotionalDecoPurchaseRecord: n, selectedGiftingPromotionReward: _ } = e,
        h = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        f = (0, l.e7)([r.Z], () => r.Z.useReducedMotion),
        { analyticsLocations: j } = (0, a.ZP)(),
        m = s.AvatarSizes.SIZE_32,
        L = (0, o.Z)(null == _ ? void 0 : _.assetId, m, !f),
        E = (0, u.Z)(),
        S = null == E ? void 0 : E.giftPurchaseConfirmation;
    return null == n || null == S
        ? null
        : (0, i.jsx)(p.O3, {
              children: (0, i.jsx)(s.ModalFooter, {
                  align: d.Z.Align.CENTER,
                  children: (0, i.jsxs)('div', {
                      className: x.promotionalFooter,
                      children: [
                          (0, i.jsx)(s.AnimatedAvatar, {
                              'aria-label': null == h ? void 0 : h.username,
                              size: m,
                              src: null == h ? void 0 : h.getAvatarURL(void 0, (0, s.getAvatarSize)(m), !f),
                              avatarDecoration: L
                          }),
                          (0, i.jsx)(s.Button, {
                              onClick: () => {
                                  t(),
                                      (0, C.Z)({
                                          product: n,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: j
                                      });
                              },
                              children: S.collectRewardButtonText()
                          })
                      ]
                  })
              })
          });
}
