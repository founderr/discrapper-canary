n(627341);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(278074),
    o = n(442837),
    l = n(481060),
    u = n(884697),
    c = n(449217),
    d = n(81245),
    f = n(706454),
    _ = n(158776),
    h = n(55935),
    p = n(74538),
    m = n(204418),
    g = n(388032),
    E = n(120187);
let v = [
        {
            avatarSize: l.AvatarSizes.SIZE_40,
            showStatus: !1
        },
        {
            avatarSize: l.AvatarSizes.SIZE_32,
            showStatus: !1
        },
        {
            avatarSize: l.AvatarSizes.SIZE_40,
            showStatus: !0
        },
        {
            avatarSize: l.AvatarSizes.SIZE_32,
            showStatus: !0
        }
    ],
    I = (e) => {
        let { purchase: t } = e,
            n = (0, o.e7)([f.default], () => f.default.locale),
            i = (0, u.qS)(t),
            a = null != t.expiresAt ? (0, h.TD)(Date.now(), t.expiresAt) : null;
        return (0, r.jsxs)('div', {
            className: E.purchaseInfo,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: t.name
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    children: t.summary
                }),
                null != a &&
                    (0, r.jsx)(l.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: g.intl.format(g.t.Io7ozs, { days: a.days.toString() })
                    }),
                (0, r.jsxs)(l.Text, {
                    variant: 'text-xxs/normal',
                    color: 'text-muted',
                    children: [
                        g.intl.format(g.t.gW9R4O, {
                            date: t.purchasedAt.toLocaleDateString(n, {
                                month: 'long',
                                year: 'numeric'
                            })
                        }),
                        null != t.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('br', {}),
                                    g.intl.format(g.t.eZSTa2, {
                                        date: t.expiresAt.toLocaleDateString(n, {
                                            minute: 'numeric',
                                            hour: 'numeric',
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })
                                    })
                                ]
                            })
                    ]
                }),
                i &&
                    (0, r.jsx)(l.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: g.intl.string(g.t.UewH9P)
                    })
            ]
        });
    };
t.Z = (e) => {
    let { user: t, guildId: n, avatarDecorationOverride: i, className: f } = e,
        h = (0, o.e7)([_.Z], () => _.Z.getStatus(t.id)),
        { product: S, purchase: T } = (0, c.Z)(null == i ? void 0 : i.skuId),
        b = p.ZP.canUseCollectibles(t),
        y = (0, u.qS)(T),
        A = (0, u.G1)(S),
        N = !b && y,
        C = (0, d.Mu)('ProfileEffectDescription', !A || b);
    return null != S && (null == T || N)
        ? (0, r.jsxs)('div', {
              className: a()(E.modalPreview, E.shopPreviewContainer, f),
              children: [
                  (0, r.jsx)('div', {
                      className: E.shopPreviewBanner,
                      children: (0, r.jsx)(m.Z, {
                          user: t,
                          guildId: n,
                          avatarDecorationOverride: i
                      })
                  }),
                  (0, r.jsxs)('div', {
                      className: E.shopPreviewTextContainer,
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: 'text-sm/semibold',
                              children: S.name
                          }),
                          (0, r.jsx)(l.Text, {
                              variant: 'text-sm/normal',
                              children: N
                                  ? g.intl.string(g.t.zrBmQE)
                                  : (0, s.EQ)([A, b, C])
                                        .with([!0, !0, !1], () => g.intl.string(g.t.L5hyz8))
                                        .with([!0, !1, !0], () => g.intl.string(g.t.q0PlFh))
                                        .with([!0, !1, !1], () => g.intl.string(g.t.ucqOV1))
                                        .otherwise(() => g.intl.string(g.t.UROtt7))
                          })
                      ]
                  })
              ]
          })
        : (0, r.jsxs)('div', {
              className: a()(E.modalPreview, f),
              children: [
                  (0, r.jsxs)('div', {
                      className: E.previewSections,
                      children: [
                          (0, r.jsx)('div', {
                              className: E.decorationPreview,
                              children: (0, r.jsx)(m.Z, {
                                  user: t,
                                  guildId: n,
                                  avatarDecorationOverride: i
                              })
                          }),
                          (0, r.jsx)('div', {
                              className: E.smallDecorationPreviewsContainer,
                              children: v.map((e) => {
                                  let { avatarSize: a, showStatus: s } = e;
                                  return (0, r.jsx)(
                                      'div',
                                      {
                                          className: E.smallDecorationPreview,
                                          children: (0, r.jsx)(m.Z, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: a,
                                              avatarDecorationOverride: i,
                                              status: s ? h : void 0,
                                              'aria-hidden': !0
                                          })
                                      },
                                      ''.concat(a).concat(s)
                                  );
                              })
                          })
                      ]
                  }),
                  null != T && (0, r.jsx)(I, { purchase: T })
              ]
          });
};
