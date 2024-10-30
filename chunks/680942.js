var r = n(200651),
    s = n(192379),
    a = n(481060),
    i = n(727637),
    l = n(906732),
    o = n(241553),
    c = n(333867),
    d = n(884697),
    u = n(474936),
    m = n(231338),
    f = n(689938),
    p = n(65297);
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
    let { product: t, returnRef: n, onSuccess: h, tooltipDelay: g, isGiftEasterEggEnabled: _, disableCustomColor: b = !1 } = e,
        { analyticsLocations: x } = (0, l.ZP)(),
        E = s.useRef(null),
        v = (0, i.Z)(E),
        I = b ? m.BR.DARK : m.BR.LIGHT;
    return (0, d.x6)(t)
        ? null
        : (0, r.jsx)(a.Tooltip, {
              text: f.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
              delay: g,
              children: (e) =>
                  (0, r.jsx)(a.Button, {
                      ...e,
                      buttonRef: E,
                      className: p.giftButton,
                      color: b ? a.ButtonColors.BRAND : a.ButtonColors.CUSTOM,
                      look: a.Button.Looks.FILLED,
                      size: a.ButtonSizes.ICON,
                      innerClassName: p.giftButtonInner,
                      'aria-label': f.Z.Messages.PREMIUM_GIFTING_BUTTON,
                      onClick: (e) => {
                          e.stopPropagation(),
                              (0, c.Z)({
                                  skuId: t.skuId,
                                  isGift: !0,
                                  giftingOrigin: u.Wt.SHOP_PAGE,
                                  analyticsLocations: x,
                                  returnRef: n,
                                  onClose:
                                      null != h
                                          ? (e) => {
                                                e && h();
                                            }
                                          : void 0
                              });
                      },
                      children: _
                          ? (0, r.jsx)(o.e, {
                                hovered: v,
                                isContentDismissed: !0,
                                themeOverride: I,
                                boxColors: C
                            })
                          : (0, r.jsx)(a.GiftIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
          });
};
