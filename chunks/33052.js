n.d(t, {
    K: function () {
        return _;
    }
});
var r = n(200651),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(607070),
    u = n(987209),
    c = n(286961),
    d = n(897942),
    f = n(870705);
function _() {
    var e;
    let t = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        { claimableRewards: n } = (0, u.wD)(),
        i = null === (e = (0, c.Z)()) || void 0 === e ? void 0 : e.planSelection;
    return null == i || null == n || 0 === n.length
        ? null
        : (0, r.jsxs)('div', {
              className: f.promotionalGiftMessage,
              children: [
                  (0, r.jsxs)('div', {
                      className: f.promotionalTextSection,
                      children: [
                          (0, r.jsx)(o.Text, {
                              className: f.promotionalGiftMessageText,
                              variant: 'text-sm/bold',
                              children: i.heading()
                          }),
                          null != i.subheading &&
                              n.length > 1 &&
                              (0, r.jsx)(o.Text, {
                                  className: f.promotionalGiftMessageText,
                                  variant: 'text-sm/normal',
                                  children: i.subheading(n.length)
                              })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: a()({
                          [f.promotionalAvatarMaxRewards]: n.length > 2,
                          [f.promotionalAvatarTwoRewards]: 2 === n.length,
                          [f.promotionalAvatarSingleReward]: 1 === n.length
                      }),
                      children: (0, r.jsx)(d.Z, {
                          maxRewardImageSrc: i.getImageUrl(!0, t),
                          claimableRewards: n,
                          size: o.AvatarSizes.SIZE_56
                      })
                  })
              ]
          });
}
