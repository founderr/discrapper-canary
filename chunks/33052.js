n.d(t, {
    K: function () {
        return _;
    }
});
var r = n(200651),
    i = n(442837),
    a = n(780384),
    s = n(481060),
    o = n(410030),
    l = n(607070),
    u = n(987209),
    c = n(286961),
    d = n(897942),
    f = n(870705);
function _() {
    var e;
    let t = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
        n = (0, o.ZP)(),
        _ = (0, a.wj)(n),
        { claimableRewards: p } = (0, u.wD)(),
        h = null === (e = (0, c.Z)()) || void 0 === e ? void 0 : e.planSelection;
    return null == h || null == p || 0 === p.length
        ? null
        : (0, r.jsxs)('div', {
              className: f.promotionalGiftMessage,
              children: [
                  (0, r.jsxs)('div', {
                      className: f.promotionalTextSection,
                      children: [
                          (0, r.jsx)(s.Text, {
                              className: f.promotionalGiftMessageText,
                              variant: 'text-sm/bold',
                              children: h.heading()
                          }),
                          null != h.subheading &&
                              p.length > 1 &&
                              (0, r.jsx)(s.Text, {
                                  className: f.promotionalGiftMessageText,
                                  variant: 'text-sm/normal',
                                  children: h.subheading(p.length)
                              })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: p.length > 2 ? f.promotionalAvatarMaxRewards : f.promotionalAvatar,
                      children: (0, r.jsx)(d.Z, {
                          maxRewardImageSrc: h.getImageUrl(_, t),
                          claimableRewards: p,
                          size: s.AvatarSizes.SIZE_56
                      })
                  })
              ]
          });
}
