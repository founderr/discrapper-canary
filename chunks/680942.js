var r = n(200651),
    a = n(192379),
    i = n(481060),
    s = n(727637),
    l = n(906732),
    o = n(241553),
    c = n(333867),
    d = n(884697),
    u = n(228624),
    m = n(67409),
    p = n(474936),
    h = n(231338),
    f = n(388032),
    g = n(149158);
let C = {
    dark: [
        {
            box: '#FFF19E',
            ribbon: '#FF484B'
        },
        {
            box: '#17B5E2',
            ribbon: '#FFFFFF'
        },
        {
            box: '#FFE1A6',
            ribbon: '#C29CFF'
        },
        {
            box: '#60DA81',
            ribbon: '#FFF597'
        },
        {
            box: '#E4578A',
            ribbon: '#BEC4FF'
        },
        {
            box: '#AFE0FC',
            ribbon: '#FF9356'
        },
        {
            box: '#DB6D6D',
            ribbon: '#67DA9C'
        }
    ],
    light: [
        {
            box: '#FFF19E',
            ribbon: '#FF484B'
        },
        {
            box: '#025D90',
            ribbon: '#70FFF8'
        },
        {
            box: '#C29CFF',
            ribbon: '#255FA3'
        },
        {
            box: '#6AC082',
            ribbon: '#DED052'
        },
        {
            box: '#AC448B',
            ribbon: '#4845B8'
        },
        {
            box: '#175B82',
            ribbon: '#F9D249'
        },
        {
            box: '#B54141',
            ribbon: '#026530'
        }
    ]
};
t.Z = (e) => {
    let { product: t, selectedVariantIndex: n, returnRef: b, onSuccess: x, tooltipDelay: v, isGiftEasterEggEnabled: _, disableCustomColor: k = !1 } = e,
        { analyticsLocations: j } = (0, l.ZP)(),
        E = a.useRef(null),
        S = (0, s.Z)(E),
        I = k ? h.BR.DARK : h.BR.LIGHT,
        T = (0, u.hv)('CollectiblesShopGiftButton');
    return (0, d.x6)(t)
        ? null
        : (0, r.jsx)(i.Tooltip, {
              text: f.intl.string(f.t['JCFN//']),
              delay: v,
              children: (e) =>
                  (0, r.jsx)(i.Button, {
                      ...e,
                      buttonRef: E,
                      className: g.giftButton,
                      color: k ? i.ButtonColors.BRAND : i.ButtonColors.CUSTOM,
                      look: i.Button.Looks.FILLED,
                      size: i.ButtonSizes.ICON,
                      innerClassName: g.giftButtonInner,
                      'aria-label': f.intl.string(f.t.PEjaCw),
                      onClick: (e) => {
                          e.stopPropagation(),
                              (0, c.Z)({
                                  skuId: (0, m.S)({
                                      product: t,
                                      selectedVariantIndex: n
                                  }),
                                  isGift: !0,
                                  giftingOrigin: p.Wt.SHOP_PAGE,
                                  analyticsLocations: j,
                                  returnRef: b,
                                  variantsReturnStyle: T,
                                  onClose:
                                      null != x
                                          ? (e) => {
                                                e && x();
                                            }
                                          : void 0
                              });
                      },
                      children: _
                          ? (0, r.jsx)(o.e, {
                                hovered: S,
                                isContentDismissed: !0,
                                themeOverride: I,
                                boxColors: C
                            })
                          : (0, r.jsx)(i.GiftIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
          });
};
