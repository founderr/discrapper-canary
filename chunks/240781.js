var r = n(627341);
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(442837),
    u = n(481060),
    c = n(884697),
    d = n(449217),
    _ = n(81245),
    E = n(706454),
    f = n(158776),
    h = n(55935),
    p = n(74538),
    m = n(204418),
    I = n(689938),
    T = n(256985);
let g = [
        {
            avatarSize: u.AvatarSizes.SIZE_40,
            showStatus: !1
        },
        {
            avatarSize: u.AvatarSizes.SIZE_32,
            showStatus: !1
        },
        {
            avatarSize: u.AvatarSizes.SIZE_40,
            showStatus: !0
        },
        {
            avatarSize: u.AvatarSizes.SIZE_32,
            showStatus: !0
        }
    ],
    S = (e) => {
        let { purchase: t } = e,
            n = (0, l.e7)([E.default], () => E.default.locale),
            r = (0, c.qS)(t),
            a = null != t.expiresAt ? (0, h.TD)(Date.now(), t.expiresAt) : null;
        return (0, i.jsxs)('div', {
            className: T.purchaseInfo,
            children: [
                (0, i.jsx)(u.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: t.name
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    children: t.summary
                }),
                null != a &&
                    (0, i.jsx)(u.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: I.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({ days: a.days.toString() })
                    }),
                (0, i.jsxs)(u.Text, {
                    variant: 'text-xxs/normal',
                    color: 'text-muted',
                    children: [
                        I.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                            date: t.purchasedAt.toLocaleDateString(n, {
                                month: 'long',
                                year: 'numeric'
                            })
                        }),
                        null != t.expiresAt &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('br', {}),
                                    I.Z.Messages.COLLECTIBLES_EXPIRE_DATE.format({
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
                r &&
                    (0, i.jsx)(u.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: I.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC
                    })
            ]
        });
    },
    A = (e) => {
        let { user: t, guildId: n, avatarDecorationOverride: r, className: a } = e,
            E = (0, l.e7)([f.Z], () => f.Z.getStatus(t.id)),
            { product: h, purchase: A } = (0, d.Z)(null == r ? void 0 : r.skuId),
            v = p.ZP.canUseCollectibles(t),
            N = (0, c.qS)(A),
            O = (0, c.G1)(h),
            R = !v && N,
            C = (0, _.Mu)('ProfileEffectDescription', !O || v);
        return null != h && (null == A || R)
            ? (0, i.jsxs)('div', {
                  className: o()(T.modalPreview, T.shopPreviewContainer, a),
                  children: [
                      (0, i.jsx)('div', {
                          className: T.shopPreviewBanner,
                          children: (0, i.jsx)(m.Z, {
                              user: t,
                              guildId: n,
                              avatarDecorationOverride: r
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: T.shopPreviewTextContainer,
                          children: [
                              (0, i.jsx)(u.Text, {
                                  variant: 'text-sm/semibold',
                                  children: h.name
                              }),
                              (0, i.jsx)(u.Text, {
                                  variant: 'text-sm/normal',
                                  children: R
                                      ? I.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED
                                      : (0, s.EQ)([O, v, C])
                                            .with([!0, !0, !1], () => I.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM)
                                            .with([!0, !1, !0], () => I.Z.Messages.PREMIUM_UPSELL_PROFILE_AVATAR_DECO_INLINE_UPSELL_DESCRIPTION)
                                            .with([!0, !1, !1], () => I.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER)
                                            .otherwise(() => I.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
                              })
                          ]
                      })
                  ]
              })
            : (0, i.jsxs)('div', {
                  className: o()(T.modalPreview, a),
                  children: [
                      (0, i.jsxs)('div', {
                          className: T.previewSections,
                          children: [
                              (0, i.jsx)('div', {
                                  className: T.decorationPreview,
                                  children: (0, i.jsx)(m.Z, {
                                      user: t,
                                      guildId: n,
                                      avatarDecorationOverride: r
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: T.smallDecorationPreviewsContainer,
                                  children: g.map((e) => {
                                      let { avatarSize: a, showStatus: o } = e;
                                      return (0, i.jsx)(
                                          'div',
                                          {
                                              className: T.smallDecorationPreview,
                                              children: (0, i.jsx)(m.Z, {
                                                  user: t,
                                                  guildId: n,
                                                  avatarSize: a,
                                                  avatarDecorationOverride: r,
                                                  status: o ? E : void 0,
                                                  'aria-hidden': !0
                                              })
                                          },
                                          ''.concat(a).concat(o)
                                      );
                                  })
                              })
                          ]
                      }),
                      null != A && (0, i.jsx)(S, { purchase: A })
                  ]
              });
    };
t.Z = A;
