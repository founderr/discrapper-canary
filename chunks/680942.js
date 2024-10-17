var a = s(735250),
    r = s(470079),
    n = s(481060),
    i = s(727637),
    l = s(906732),
    o = s(241553),
    c = s(333867),
    d = s(884697),
    u = s(231338),
    m = s(689938),
    C = s(65297);
let f = {
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
    let { product: t, returnRef: s, onSuccess: p, tooltipDelay: h, isGiftEasterEggEnabled: g, disableCustomColor: _ = !1 } = e,
        { analyticsLocations: b } = (0, l.ZP)(),
        x = r.useRef(null),
        E = (0, i.Z)(x),
        I = _ ? u.BR.DARK : u.BR.LIGHT;
    return (0, d.x6)(t)
        ? null
        : (0, a.jsx)(n.Tooltip, {
              text: m.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
              delay: h,
              children: (e) =>
                  (0, a.jsx)(n.Button, {
                      ...e,
                      buttonRef: x,
                      className: C.giftButton,
                      color: _ ? n.ButtonColors.BRAND : n.ButtonColors.CUSTOM,
                      look: n.Button.Looks.FILLED,
                      size: n.ButtonSizes.ICON,
                      innerClassName: C.giftButtonInner,
                      'aria-label': m.Z.Messages.PREMIUM_GIFTING_BUTTON,
                      onClick: (e) => {
                          e.stopPropagation(),
                              (0, c.Z)({
                                  skuId: t.skuId,
                                  isGift: !0,
                                  analyticsLocations: b,
                                  returnRef: s,
                                  onClose:
                                      null != p
                                          ? (e) => {
                                                e && p();
                                            }
                                          : void 0
                              });
                      },
                      children: g
                          ? (0, a.jsx)(o.e, {
                                hovered: E,
                                isContentDismissed: !0,
                                themeOverride: I,
                                boxColors: f
                            })
                          : (0, a.jsx)(n.GiftIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
          });
};
