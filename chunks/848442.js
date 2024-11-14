n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(399606),
    o = n(704215),
    s = n(433517),
    c = n(481060),
    u = n(239091),
    d = n(607070),
    h = n(367907),
    p = n(357352),
    f = n(652515),
    m = n(550951),
    g = n(886176),
    C = n(605236),
    _ = n(703656),
    v = n(984933),
    x = n(430824),
    I = n(626135),
    b = n(434479),
    E = n(981631),
    S = n(176505),
    Z = n(629481),
    N = n(388032),
    y = n(316512);
function T(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        u = (0, f.RF)(t, 'guild_shop_channel_row'),
        m = (0, a.e7)([x.Z], () => x.Z.getGuild(t)),
        S = (null == m ? void 0 : m.hasFeature(E.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !0,
        T = 'false' === s.K.get(Z.tM, 'false'),
        j = (0, a.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, i.jsx)(b.m, {
        id: 'shop-'.concat(t),
        className: r()(y.previewChannelRow, {
            [y.selected]: n,
            [y.phantomPreview]: T
        }),
        innerClassName: y.previewChannelRowContent,
        renderIcon: (e) =>
            (0, i.jsx)(g.Z, {
                width: 20,
                height: 20,
                className: r()([e, y.shopIcon])
            }),
        text: N.intl.string(N.t.al5EXF),
        selected: n,
        onClick: l,
        trailing: (0, i.jsxs)('div', {
            className: y.gifSection,
            children: [
                j
                    ? (0, i.jsx)(c.TextBadge, {
                          color: c.tokens.unsafe_rawColors.BRAND_260.css,
                          text: N.intl.string(N.t.y2b7CA),
                          className: y.newBadge
                      })
                    : (0, i.jsx)('img', {
                          src: (0, p.b)('server_products/storefront/money.gif'),
                          className: y.money,
                          alt: ''
                      }),
                n &&
                    (0, i.jsx)(c.Clickable, {
                        className: y.closeButton,
                        onClick: (e) => {
                            if (
                                (e.stopPropagation(),
                                (0, C.EW)(o.z.SERVER_SHOP_PHANTOM_PREVIEW),
                                I.default.track(E.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, h.hH)(t),
                                    action_taken: Z.mz.DISMISS_CHANNEL_ROW
                                }),
                                !u || !S)
                            ) {
                                var n;
                                (0, _.dL)(E.Z5c.CHANNEL(t, null === (n = v.ZP.getDefaultChannel(t)) || void 0 === n ? void 0 : n.id));
                            }
                        },
                        'aria-label': N.intl.string(N.t.cpT0Cg),
                        children: (0, i.jsx)(c.CircleXIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
            ]
        })
    });
}
function j(e) {
    let { guild: t, selected: l } = e,
        r = (0, m.g)(t, 'guild_shop_channel_row'),
        a = () => {
            s.K.set(Z.tM, 'true'), (0, _.uL)(E.Z5c.CHANNEL(t.id, S.oC.GUILD_SHOP));
        };
    return r
        ? (0, i.jsx)(T, {
              guildId: t.id,
              selected: l,
              handleClick: a
          })
        : (0, i.jsx)(b.m, {
              id: 'shop-'.concat(t.id),
              renderIcon: (e) =>
                  (0, i.jsx)(g.Z, {
                      width: 20,
                      height: 20,
                      className: e
                  }),
              text: N.intl.string(N.t.al5EXF),
              selected: l,
              onClick: a,
              onContextMenu: (e) => {
                  null != t &&
                      (0, u.jW)(e, async () => {
                          let { default: e } = await n.e('66050').then(n.bind(n, 376573));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guild: t
                              });
                      });
              }
          });
}
