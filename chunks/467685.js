var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(793030),
    l = n(976465),
    o = n(474936),
    c = n(388032),
    d = n(444328);
let u = (e) => {
    switch (e) {
        case o.VU.PREMIUM_TENURE_1_MONTH:
            return d.badgeBronzeGlow;
        case o.VU.PREMIUM_TENURE_3_MONTH:
            return d.badgeSilverGlow;
        case o.VU.PREMIUM_TENURE_6_MONTH:
            return d.badgeGoldGlow;
        case o.VU.PREMIUM_TENURE_12_MONTH:
            return d.badgePlatinumGlow;
        case o.VU.PREMIUM_TENURE_24_MONTH:
            return d.badgeDiamondGlow;
        case o.VU.PREMIUM_TENURE_36_MONTH:
            return d.badgeEmeraldGlow;
        case o.VU.PREMIUM_TENURE_60_MONTH:
            return d.badgeRubyGlow;
        case o.VU.PREMIUM_TENURE_72_MONTH:
            return d.badgeFireGlow;
        default:
            return;
    }
};
t.Z = () => {
    let { badge: e, image: t, name: n, earnedOnDate: r } = (0, l.Rw)();
    return null == e
        ? null
        : (0, i.jsxs)('div', {
              className: a()(d.container, u(e)),
              children: [
                  (0, i.jsx)('div', {}),
                  ' ',
                  (0, i.jsx)('img', {
                      src: t,
                      alt: n,
                      className: d.badgeImage
                  }),
                  (0, i.jsxs)('div', {
                      className: d.textColumn,
                      children: [
                          (0, i.jsx)(s.xv, {
                              variant: 'text-lg/semibold',
                              className: d.badgeText,
                              children: n
                          }),
                          (0, i.jsx)(s.xv, {
                              variant: 'text-xs/normal',
                              children: c.intl.format(c.t.zl7yMD, { date: r })
                          })
                      ]
                  })
              ]
          });
};
