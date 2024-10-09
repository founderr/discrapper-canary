n.d(t, {
    Z: function () {
        return R;
    }
});
var i = n(735250);
n(470079);
var l = n(120356),
    r = n.n(l),
    a = n(399606),
    s = n(704215),
    o = n(433517),
    c = n(481060),
    u = n(239091),
    d = n(607070),
    h = n(367907),
    p = n(357352),
    f = n(652515),
    m = n(550951),
    _ = n(886176),
    g = n(605236),
    C = n(703656),
    I = n(984933),
    E = n(430824),
    N = n(626135),
    S = n(434479),
    x = n(981631),
    v = n(176505),
    T = n(629481),
    Z = n(689938),
    A = n(316512);
function b(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        u = (0, f.RF)(t, 'guild_shop_channel_row'),
        m = (0, a.e7)([E.Z], () => E.Z.getGuild(t)),
        v = (null == m ? void 0 : m.hasFeature(x.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !0,
        b = 'false' === o.K.get(T.tM, 'false'),
        R = (0, a.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, i.jsx)(S.m, {
        id: 'shop-'.concat(t),
        className: r()(A.previewChannelRow, {
            [A.selected]: n,
            [A.phantomPreview]: b
        }),
        innerClassName: A.previewChannelRowContent,
        renderIcon: (e) =>
            (0, i.jsx)(_.Z, {
                width: 20,
                height: 20,
                className: r()([e, A.shopIcon])
            }),
        text: Z.Z.Messages.GUILD_SHOP_CHANNEL_LABEL,
        selected: n,
        onClick: l,
        trailing: (0, i.jsxs)('div', {
            className: A.gifSection,
            children: [
                R
                    ? (0, i.jsx)(c.TextBadge, {
                          color: c.tokens.unsafe_rawColors.BRAND_260.css,
                          text: Z.Z.Messages.NEW,
                          className: A.newBadge
                      })
                    : (0, i.jsx)('img', {
                          src: (0, p.b)('server_products/storefront/money.gif'),
                          className: A.money,
                          alt: ''
                      }),
                n &&
                    (0, i.jsx)(c.Clickable, {
                        className: A.closeButton,
                        onClick: (e) => {
                            if (
                                (e.stopPropagation(),
                                (0, g.EW)(s.z.SERVER_SHOP_PHANTOM_PREVIEW),
                                N.default.track(x.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, h.hH)(t),
                                    action_taken: T.mz.DISMISS_CHANNEL_ROW
                                }),
                                !u || !v)
                            ) {
                                var n;
                                (0, C.dL)(x.Z5c.CHANNEL(t, null === (n = I.ZP.getDefaultChannel(t)) || void 0 === n ? void 0 : n.id));
                            }
                        },
                        'aria-label': Z.Z.Messages.CLOSE,
                        children: (0, i.jsx)(c.CircleXIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
            ]
        })
    });
}
function R(e) {
    let { guild: t, selected: l } = e,
        r = (0, m.g)(t, 'guild_shop_channel_row'),
        a = () => {
            o.K.set(T.tM, 'true'), (0, C.uL)(x.Z5c.CHANNEL(t.id, v.oC.GUILD_SHOP));
        };
    return r
        ? (0, i.jsx)(b, {
              guildId: t.id,
              selected: l,
              handleClick: a
          })
        : (0, i.jsx)(S.m, {
              id: 'shop-'.concat(t.id),
              renderIcon: (e) =>
                  (0, i.jsx)(_.Z, {
                      width: 20,
                      height: 20,
                      className: e
                  }),
              text: Z.Z.Messages.GUILD_SHOP_CHANNEL_LABEL,
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
