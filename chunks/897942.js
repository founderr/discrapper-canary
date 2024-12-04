n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(607070),
    o = n(821982),
    l = n(594174),
    u = n(169413),
    c = n(328756),
    d = n(265174);
function f(e) {
    let { maxRewardImageSrc: t, claimableRewards: n, size: f } = e,
        _ = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        p = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        h = (0, a.getAvatarSize)(f);
    return n.length > 2
        ? (0, r.jsx)('img', {
              alt: '',
              src: t,
              className: u.image,
              style: { height: Math.round(1.4 * h) }
          })
        : (0, r.jsxs)('div', {
              className: u.container,
              children: [
                  (1 === n.length || 2 === n.length) &&
                      (0, r.jsx)(a.AnimatedAvatar, {
                          'aria-label': null == _ ? void 0 : _.username,
                          size: f,
                          className: u.firstPromotionalAvatar,
                          src: d,
                          avatarDecoration: (0, o.Z)(n[0].assetId, f, !p)
                      }),
                  2 === n.length &&
                      (0, r.jsx)('div', {
                          style: { marginRight: -Math.round(0.321 * h) },
                          children: (0, r.jsx)(a.AnimatedAvatar, {
                              'aria-label': null == _ ? void 0 : _.username,
                              size: f,
                              src: c,
                              avatarDecoration: (0, o.Z)(n[1].assetId, f, !p)
                          })
                      })
              ]
          });
}
