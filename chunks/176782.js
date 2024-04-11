"use strict";
s.r(t), s.d(t, {
  useCardVariantsInfo: function() {
    return u
  }
});
var a = s("442837"),
  i = s("607070"),
  r = s("314684"),
  l = s("391110"),
  n = s("518400");
let o = {
    subtitle: {
      onlyShowOnHover: !1
    },
    description: {
      onlyShowOnHover: !0,
      className: n.cardDescription
    },
    descriptionCta: {
      onlyShowOnHover: !0
    }
  },
  u = e => {
    let t = (0, a.useStateFromStores)([i.default], () => i.default.useReducedMotion),
      s = (0, r.useShouldShowConfettiAndGlow)() && !t,
      u = {
        [l.CardVariants.DEFAULT]: o,
        [l.CardVariants.REWARD]: {
          subtitle: {
            onlyShowOnHover: !0,
            textVariant: "text-sm/semibold"
          },
          description: {
            onlyShowOnHover: !0,
            className: n.cardDescriptionTenureReward
          },
          descriptionCta: {
            onlyShowOnHover: !1,
            hideOnHoverComponent: !0,
            className: n.descriptionCTATenureReward
          },
          cardContainer: {
            className: s ? n.glowingCardContainer : void 0
          }
        }
      };
    return null != e ? u[e] : u[l.CardVariants.DEFAULT]
  }