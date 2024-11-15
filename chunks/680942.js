var r = n(200651),
    a = n(192379),
    i = n(481060),
    s = n(727637),
    l = n(906732),
    o = n(241553),
    c = n(333867),
    d = n(884697),
    u = n(67409),
    m = n(474936),
    h = n(231338),
    p = n(388032),
    f = n(65297);
let g = {
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
    let { product: t, selectedVariantIndex: n, returnRef: C, onSuccess: b, tooltipDelay: x, isGiftEasterEggEnabled: v, disableCustomColor: _ = !1 } = e,
        { analyticsLocations: k } = (0, l.ZP)(),
        j = a.useRef(null),
        E = (0, s.Z)(j),
        I = _ ? h.BR.DARK : h.BR.LIGHT;
    return (0, d.x6)(t)
        ? null
        : (0, r.jsx)(i.Tooltip, {
              text: p.intl.string(p.t['JCFN//']),
              delay: x,
              children: (e) =>
                  (0, r.jsx)(i.Button, {
                      ...e,
                      buttonRef: j,
                      className: f.giftButton,
                      color: _ ? i.ButtonColors.BRAND : i.ButtonColors.CUSTOM,
                      look: i.Button.Looks.FILLED,
                      size: i.ButtonSizes.ICON,
                      innerClassName: f.giftButtonInner,
                      'aria-label': p.intl.string(p.t.PEjaCw),
                      onClick: (e) => {
                          e.stopPropagation(),
                              (0, c.Z)({
                                  skuId: (0, u.S)({
                                      product: t,
                                      selectedVariantIndex: n
                                  }),
                                  isGift: !0,
                                  giftingOrigin: m.Wt.SHOP_PAGE,
                                  analyticsLocations: k,
                                  returnRef: C,
                                  onClose:
                                      null != b
                                          ? (e) => {
                                                e && b();
                                            }
                                          : void 0
                              });
                      },
                      children: v
                          ? (0, r.jsx)(o.e, {
                                hovered: E,
                                isContentDismissed: !0,
                                themeOverride: I,
                                boxColors: g
                            })
                          : (0, r.jsx)(i.GiftIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
          });
};
