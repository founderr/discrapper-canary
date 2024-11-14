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
    f = n(81245),
    _ = n(706454),
    p = n(158776),
    h = n(55935),
    m = n(74538),
    g = n(204418),
    E = n(388032),
    v = n(256985);
let I = [
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
    b = (e) => {
        let { purchase: t } = e,
            n = (0, o.e7)([_.default], () => _.default.locale),
            i = (0, u.qS)(t),
            a = null != t.expiresAt ? (0, h.TD)(Date.now(), t.expiresAt) : null;
        return (0, r.jsxs)('div', {
            className: v.purchaseInfo,
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
                        children: E.intl.format(E.t.Io7ozs, { days: a.days.toString() })
                    }),
                (0, r.jsxs)(l.Text, {
                    variant: 'text-xxs/normal',
                    color: 'text-muted',
                    children: [
                        E.intl.format(E.t.gW9R4O, {
                            date: t.purchasedAt.toLocaleDateString(n, {
                                month: 'long',
                                year: 'numeric'
                            })
                        }),
                        null != t.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('br', {}),
                                    E.intl.format(E.t.eZSTa2, {
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
                        children: E.intl.string(E.t.UewH9P)
                    })
            ]
        });
    };
t.Z = (e) => {
    let { user: t, guildId: n, avatarDecorationOverride: i, className: _ } = e,
        h = (0, o.e7)([p.Z], () => p.Z.getStatus(t.id)),
        { product: S, purchase: T } = (0, c.Z)(null == i ? void 0 : i.skuId),
        y = m.ZP.canUseCollectibles(t),
        A = (0, u.qS)(T),
        N = (0, u.G1)(S),
        C = !y && A,
        R = (0, f.Mu)('ProfileEffectDescription', !N || y),
        O = (0, d.k)(S);
    return null != S && (null == T || C)
        ? (0, r.jsxs)('div', {
              className: a()(v.modalPreview, v.shopPreviewContainer, _),
              children: [
                  (0, r.jsx)('div', {
                      className: v.shopPreviewBanner,
                      children: (0, r.jsx)(g.Z, {
                          user: t,
                          guildId: n,
                          avatarDecorationOverride: i
                      })
                  }),
                  (0, r.jsxs)('div', {
                      className: v.shopPreviewTextContainer,
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: 'text-sm/semibold',
                              children: O
                          }),
                          (0, r.jsx)(l.Text, {
                              variant: 'text-sm/normal',
                              children: C
                                  ? E.intl.string(E.t.zrBmQE)
                                  : (0, s.EQ)([N, y, R])
                                        .with([!0, !0, !1], () => E.intl.string(E.t.L5hyz8))
                                        .with([!0, !1, !0], () => E.intl.string(E.t.q0PlFh))
                                        .with([!0, !1, !1], () => E.intl.string(E.t.ucqOV1))
                                        .otherwise(() => E.intl.string(E.t.UROtt7))
                          })
                      ]
                  })
              ]
          })
        : (0, r.jsxs)('div', {
              className: a()(v.modalPreview, _),
              children: [
                  (0, r.jsxs)('div', {
                      className: v.previewSections,
                      children: [
                          (0, r.jsx)('div', {
                              className: v.decorationPreview,
                              children: (0, r.jsx)(g.Z, {
                                  user: t,
                                  guildId: n,
                                  avatarDecorationOverride: i
                              })
                          }),
                          (0, r.jsx)('div', {
                              className: v.smallDecorationPreviewsContainer,
                              children: I.map((e) => {
                                  let { avatarSize: a, showStatus: s } = e;
                                  return (0, r.jsx)(
                                      'div',
                                      {
                                          className: v.smallDecorationPreview,
                                          children: (0, r.jsx)(g.Z, {
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
                  null != T && (0, r.jsx)(b, { purchase: T })
              ]
          });
};
