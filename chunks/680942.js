var r = n(200651),
    s = n(192379),
    a = n(481060),
    i = n(727637),
    l = n(906732),
    o = n(241553),
    c = n(333867),
    d = n(884697),
    u = n(231338),
    m = n(689938),
    f = n(65297);
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
    let { product: t, returnRef: n, onSuccess: C, tooltipDelay: h, isGiftEasterEggEnabled: g, disableCustomColor: _ = !1 } = e,
        { analyticsLocations: b } = (0, l.ZP)(),
        x = s.useRef(null),
        E = (0, i.Z)(x),
        v = _ ? u.BR.DARK : u.BR.LIGHT;
    return (0, d.x6)(t)
        ? null
        : (0, r.jsx)(a.Tooltip, {
              text: m.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
              delay: h,
              children: (e) =>
                  (0, r.jsx)(a.Button, {
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
                                  returnRef: n,
                                  onClose:
                                      null != C
                                          ? (e) => {
                                                e && C();
                                            }
                                          : void 0
                              });
                      },
                      children: g
                          ? (0, r.jsx)(o.e, {
                                hovered: E,
                                isContentDismissed: !0,
                                themeOverride: v,
                                boxColors: p
                            })
                          : (0, r.jsx)(a.GiftIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
          });
};
