n.d(t, {
    _: function () {
        return c;
    }
});
var s = n(442837),
    a = n(607070),
    r = n(314684),
    i = n(391110),
    o = n(180129);
let l = {
        subtitle: { onlyShowOnHover: !1 },
        description: {
            onlyShowOnHover: !0,
            className: o.cardDescription
        },
        descriptionCta: { onlyShowOnHover: !0 }
    },
    c = (e) => {
        let t = (0, s.e7)([a.Z], () => a.Z.useReducedMotion),
            n = (0, r.IB)() && !t,
            c = {
                [i.zW.DEFAULT]: l,
                [i.zW.REWARD]: {
                    subtitle: {
                        onlyShowOnHover: !0,
                        textVariant: 'text-sm/semibold'
                    },
                    description: {
                        onlyShowOnHover: !0,
                        className: o.cardDescriptionTenureReward
                    },
                    descriptionCta: {
                        onlyShowOnHover: !1,
                        hideOnHoverComponent: !0,
                        className: o.descriptionCTATenureReward
                    },
                    cardContainer: { className: n ? o.glowingCardContainer : void 0 }
                },
                [i.zW.NITRO_GRADIENT_HOVER_BORDER]: { cardContainer: { className: o.nitroGradientBorderHover } }
            };
        return null != e ? c[e] : c[i.zW.DEFAULT];
    };
