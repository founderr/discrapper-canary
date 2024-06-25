s.d(t, {
  _: function() {
    return c
  }
});
var n = s(442837),
  a = s(607070),
  i = s(314684),
  r = s(391110),
  l = s(678081);
let o = {
    subtitle: {
      onlyShowOnHover: !1
    },
    description: {
      onlyShowOnHover: !0,
      className: l.cardDescription
    },
    descriptionCta: {
      onlyShowOnHover: !0
    }
  },
  c = e => {
    let t = (0, n.e7)([a.Z], () => a.Z.useReducedMotion),
      s = (0, i.IB)() && !t,
      c = {
        [r.zW.DEFAULT]: o,
        [r.zW.REWARD]: {
          subtitle: {
            onlyShowOnHover: !0,
            textVariant: "text-sm/semibold"
          },
          description: {
            onlyShowOnHover: !0,
            className: l.cardDescriptionTenureReward
          },
          descriptionCta: {
            onlyShowOnHover: !1,
            hideOnHoverComponent: !0,
            className: l.descriptionCTATenureReward
          },
          cardContainer: {
            className: s ? l.glowingCardContainer : void 0
          }
        }
      };
    return null != e ? c[e] : c[r.zW.DEFAULT]
  }