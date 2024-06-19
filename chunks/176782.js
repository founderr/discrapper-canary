t.d(s, {
  _: function() {
    return _
  }
});
var n = t(442837),
  a = t(607070),
  r = t(314684),
  i = t(391110),
  l = t(678081);
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
  _ = e => {
    let s = (0, n.e7)([a.Z], () => a.Z.useReducedMotion),
      t = (0, r.IB)() && !s,
      _ = {
        [i.zW.DEFAULT]: o,
        [i.zW.REWARD]: {
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
            className: t ? l.glowingCardContainer : void 0
          }
        }
      };
    return null != e ? _[e] : _[i.zW.DEFAULT]
  }