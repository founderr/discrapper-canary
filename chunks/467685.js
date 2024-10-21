var s = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    i = n(793030),
    l = n(976465),
    o = n(474936),
    c = n(689938),
    _ = n(305675);
let d = (e) => {
    switch (e) {
        case o.VU.PREMIUM_TENURE_1_MONTH:
            return _.badgeBronzeGlow;
        case o.VU.PREMIUM_TENURE_3_MONTH:
            return _.badgeSilverGlow;
        case o.VU.PREMIUM_TENURE_6_MONTH:
            return _.badgeGoldGlow;
        case o.VU.PREMIUM_TENURE_12_MONTH:
            return _.badgePlatinumGlow;
        case o.VU.PREMIUM_TENURE_24_MONTH:
            return _.badgeDiamondGlow;
        case o.VU.PREMIUM_TENURE_36_MONTH:
            return _.badgeEmeraldGlow;
        case o.VU.PREMIUM_TENURE_60_MONTH:
            return _.badgeRubyGlow;
        case o.VU.PREMIUM_TENURE_72_MONTH:
            return _.badgeFireGlow;
        default:
            return;
    }
};
t.Z = () => {
    let { badge: e, image: t, name: n, earnedOnDate: a } = (0, l.Rw)();
    return null == e
        ? null
        : (0, s.jsxs)('div', {
              className: r()(_.container, d(e)),
              children: [
                  (0, s.jsx)('div', {}),
                  ' ',
                  (0, s.jsx)('img', {
                      src: t,
                      alt: n,
                      className: _.badgeImage
                  }),
                  (0, s.jsxs)('div', {
                      className: _.textColumn,
                      children: [
                          (0, s.jsx)(i.xv, {
                              variant: 'text-lg/semibold',
                              className: _.badgeText,
                              children: n
                          }),
                          (0, s.jsx)(i.xv, {
                              variant: 'text-xs/normal',
                              children: c.Z.Messages.NITRO_HOME_TIERED_TENURE_BADGES_EARNED_ON.format({ date: a })
                          })
                      ]
                  })
              ]
          });
};
