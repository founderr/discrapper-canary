var s = r(200651),
    n = r(192379),
    a = r(481060),
    i = r(727637),
    l = r(906732),
    o = r(241553),
    c = r(333867),
    d = r(884697),
    u = r(231338),
    m = r(689938),
    f = r(65297);
let p = {
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
    let { product: t, returnRef: r, onSuccess: C, tooltipDelay: h, isGiftEasterEggEnabled: g, disableCustomColor: _ = !1 } = e,
        { analyticsLocations: b } = (0, l.ZP)(),
        x = n.useRef(null),
        E = (0, i.Z)(x),
        I = _ ? u.BR.DARK : u.BR.LIGHT;
    return (0, d.x6)(t)
        ? null
        : (0, s.jsx)(a.Tooltip, {
              text: m.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
              delay: h,
              children: (e) =>
                  (0, s.jsx)(a.Button, {
                      ...e,
                      buttonRef: x,
                      className: f.giftButton,
                      color: _ ? a.ButtonColors.BRAND : a.ButtonColors.CUSTOM,
                      look: a.Button.Looks.FILLED,
                      size: a.ButtonSizes.ICON,
                      innerClassName: f.giftButtonInner,
                      'aria-label': m.Z.Messages.PREMIUM_GIFTING_BUTTON,
                      onClick: (e) => {
                          e.stopPropagation(),
                              (0, c.Z)({
                                  skuId: t.skuId,
                                  isGift: !0,
                                  analyticsLocations: b,
                                  returnRef: r,
                                  onClose:
                                      null != C
                                          ? (e) => {
                                                e && C();
                                            }
                                          : void 0
                              });
                      },
                      children: g
                          ? (0, s.jsx)(o.e, {
                                hovered: E,
                                isContentDismissed: !0,
                                themeOverride: I,
                                boxColors: p
                            })
                          : (0, s.jsx)(a.GiftIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
          });
};
