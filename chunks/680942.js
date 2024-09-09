var a = r(735250),
    n = r(470079),
    s = r(481060),
    i = r(727637),
    o = r(906732),
    l = r(241553),
    c = r(333867),
    d = r(884697),
    u = r(231338),
    f = r(689938),
    p = r(703909);
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
    let { product: t, returnRef: r, onSuccess: _, tooltipDelay: m, isGiftEasterEggEnabled: g, disableCustomColor: h = !1 } = e,
        { analyticsLocations: b } = (0, o.ZP)(),
        E = n.useRef(null),
        I = (0, i.Z)(E),
        x = h ? u.BR.DARK : u.BR.LIGHT;
    return (0, d.x6)(t)
        ? null
        : (0, a.jsx)(s.Tooltip, {
              text: f.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
              delay: m,
              children: (e) =>
                  (0, a.jsx)(s.Button, {
                      ...e,
                      buttonRef: E,
                      className: p.giftButton,
                      color: h ? s.ButtonColors.BRAND : s.ButtonColors.CUSTOM,
                      look: s.Button.Looks.FILLED,
                      size: s.ButtonSizes.ICON,
                      innerClassName: p.giftButtonInner,
                      'aria-label': f.Z.Messages.PREMIUM_GIFTING_BUTTON,
                      onClick: (e) => {
                          e.stopPropagation(),
                              (0, c.Z)({
                                  skuId: t.skuId,
                                  isGift: !0,
                                  analyticsLocations: b,
                                  returnRef: r,
                                  onClose:
                                      null != _
                                          ? (e) => {
                                                e && _();
                                            }
                                          : void 0
                              });
                      },
                      children: g
                          ? (0, a.jsx)(l.e, {
                                hovered: I,
                                isContentDismissed: !0,
                                themeOverride: x,
                                boxColors: C
                            })
                          : (0, a.jsx)(s.GiftIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
          });
};
