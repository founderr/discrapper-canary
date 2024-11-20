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
    d = n(905357),
    f = n(95422),
    _ = n(222062),
    p = n(706454),
    h = n(158776),
    m = n(55935),
    g = n(74538),
    E = n(204418),
    v = n(388032),
    I = n(256985);
let b = [
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
    T = (e) => {
        let { purchase: t } = e,
            n = (0, o.e7)([p.default], () => p.default.locale),
            i = (0, u.qS)(t),
            a = null != t.expiresAt ? (0, m.TD)(Date.now(), t.expiresAt) : null,
            s = (0, f.a)(t);
        return (0, r.jsxs)('div', {
            className: I.purchaseInfo,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: s
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    children: t.summary
                }),
                null != a &&
                    (0, r.jsx)(l.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: v.intl.format(v.t.Io7ozs, { days: a.days.toString() })
                    }),
                (0, r.jsxs)(l.Text, {
                    variant: 'text-xxs/normal',
                    color: 'text-muted',
                    children: [
                        v.intl.format(v.t.gW9R4O, {
                            date: t.purchasedAt.toLocaleDateString(n, {
                                month: 'long',
                                year: 'numeric'
                            })
                        }),
                        null != t.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('br', {}),
                                    v.intl.format(v.t.eZSTa2, {
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
                        children: v.intl.string(v.t.UewH9P)
                    })
            ]
        });
    };
t.Z = (e) => {
    let { user: t, guildId: n, avatarDecorationOverride: i, className: f } = e,
        p = (0, o.e7)([h.Z], () => h.Z.getStatus(t.id)),
        { product: m, purchase: S } = (0, c.Z)(null == i ? void 0 : i.skuId),
        y = g.ZP.canUseCollectibles(t),
        A = (0, u.qS)(S),
        N = (0, u.G1)(m),
        C = !y && A,
        R = (0, _.M)(!N || y),
        O = (0, d.k)(m);
    return null != m && (null == S || C)
        ? (0, r.jsxs)('div', {
              className: a()(I.modalPreview, I.shopPreviewContainer, f),
              children: [
                  (0, r.jsx)('div', {
                      className: I.shopPreviewBanner,
                      children: (0, r.jsx)(E.Z, {
                          user: t,
                          guildId: n,
                          avatarDecorationOverride: i
                      })
                  }),
                  (0, r.jsxs)('div', {
                      className: I.shopPreviewTextContainer,
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: 'text-sm/semibold',
                              children: O
                          }),
                          (0, r.jsx)(l.Text, {
                              variant: 'text-sm/normal',
                              children: C
                                  ? v.intl.string(v.t.zrBmQE)
                                  : (0, s.EQ)([N, y, R])
                                        .with([!0, !0, !1], () => v.intl.string(v.t.L5hyz8))
                                        .with([!0, !1, !0], () => v.intl.string(v.t.q0PlFh))
                                        .with([!0, !1, !1], () => v.intl.string(v.t.ucqOV1))
                                        .otherwise(() => v.intl.string(v.t.UROtt7))
                          })
                      ]
                  })
              ]
          })
        : (0, r.jsxs)('div', {
              className: a()(I.modalPreview, f),
              children: [
                  (0, r.jsxs)('div', {
                      className: I.previewSections,
                      children: [
                          (0, r.jsx)('div', {
                              className: I.decorationPreview,
                              children: (0, r.jsx)(E.Z, {
                                  user: t,
                                  guildId: n,
                                  avatarDecorationOverride: i
                              })
                          }),
                          (0, r.jsx)('div', {
                              className: I.smallDecorationPreviewsContainer,
                              children: b.map((e) => {
                                  let { avatarSize: a, showStatus: s } = e;
                                  return (0, r.jsx)(
                                      'div',
                                      {
                                          className: I.smallDecorationPreview,
                                          children: (0, r.jsx)(E.Z, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: a,
                                              avatarDecorationOverride: i,
                                              status: s ? p : void 0,
                                              'aria-hidden': !0
                                          })
                                      },
                                      ''.concat(a).concat(s)
                                  );
                              })
                          })
                      ]
                  }),
                  null != S && (0, r.jsx)(T, { purchase: S })
              ]
          });
};
