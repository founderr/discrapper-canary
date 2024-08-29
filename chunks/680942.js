var r = n(735250),
    a = n(470079),
    s = n(481060),
    o = n(727637),
    i = n(906732),
    c = n(241553),
    l = n(333867),
    d = n(884697),
    u = n(231338),
    f = n(689938),
    p = n(703909);
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
    let { product: t, returnRef: n, onSuccess: C, tooltipDelay: m, isGiftEasterEggEnabled: _, disableCustomColor: b = !1 } = e,
        { analyticsLocations: h } = (0, i.ZP)(),
        x = a.useRef(null),
        I = (0, o.Z)(x),
        E = b ? u.BR.DARK : u.BR.LIGHT;
    return (0, d.x6)(t)
        ? null
        : (0, r.jsx)(s.Tooltip, {
              text: f.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
              delay: m,
              children: (e) =>
                  (0, r.jsx)(s.Button, {
                      ...e,
                      buttonRef: x,
                      className: p.giftButton,
                      color: b ? s.ButtonColors.BRAND : s.ButtonColors.CUSTOM,
                      look: s.Button.Looks.FILLED,
                      size: s.ButtonSizes.ICON,
                      innerClassName: p.giftButtonInner,
                      'aria-label': f.Z.Messages.PREMIUM_GIFTING_BUTTON,
                      onClick: (e) => {
                          e.stopPropagation(),
                              (0, l.Z)({
                                  skuId: t.skuId,
                                  isGift: !0,
                                  analyticsLocations: h,
                                  returnRef: n,
                                  onClose:
                                      null != C
                                          ? (e) => {
                                                e && C();
                                            }
                                          : void 0
                              });
                      },
                      children: _
                          ? (0, r.jsx)(c.e, {
                                hovered: I,
                                isContentDismissed: !0,
                                themeOverride: E,
                                boxColors: g
                            })
                          : (0, r.jsx)(s.GiftIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
          });
};
