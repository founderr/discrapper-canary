n.d(t, {
    C: function () {
        return M;
    },
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(512722),
    r = n.n(a),
    l = n(442837),
    o = n(481060),
    c = n(131388),
    u = n(357352),
    d = n(70097),
    _ = n(565138),
    E = n(353254),
    I = n(695346),
    m = n(271383),
    T = n(594174),
    h = n(671533),
    N = n(51144),
    f = n(506071),
    C = n(696014),
    p = n(847033),
    g = n(544978),
    A = n(893182),
    S = n(689938),
    x = n(687006);
function R(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.Clickable, {
        onClick: t,
        className: x.showMoreButton,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: S.Z.Messages.GUILD_STORE_HERO_SHOW_MORE_DESCRIPTION_LABEL
            }),
            (0, i.jsx)(o.Spacer, {
                size: 4,
                horizontal: !0
            }),
            (0, i.jsx)(h.Z, {
                direction: h.Z.Directions.RIGHT,
                className: x.showMoreArrow
            })
        ]
    });
}
function O(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        s = I.QK.useSetting(),
        a = (0, f.n)() && s,
        [r, l] = (0, E.Z)(t, a),
        o = a
            ? (0, i.jsx)(d.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: x.coverImage,
                  width: 655,
                  poster: (0, u.b)('server_products/storefront/default-header.png'),
                  src: (0, u.b)('server_products/storefront/default-header.mov')
              })
            : (0, i.jsx)('img', {
                  src: (0, u.b)('server_products/storefront/default-header.png'),
                  alt: '',
                  className: x.coverImage
              });
    return (0, i.jsx)('div', {
        ref: r,
        className: x.coverImageContainer,
        children:
            null == l || n
                ? o
                : (0, i.jsx)('img', {
                      src: l,
                      alt: '',
                      className: x.coverImage
                  })
    });
}
function M(e) {
    var t, n, a;
    let { guild: d, subscriptionsSettings: E } = e,
        I = d.id;
    let { nickname: h, nickcolor: f } =
            ((a = I),
            (0, l.cj)(
                [m.ZP, T.default],
                () => {
                    var e, t;
                    let n = T.default.getCurrentUser();
                    r()(null != n, 'user cannot be null');
                    let i = m.ZP.getMember(a, n.id);
                    return {
                        nickname: null !== (e = null == i ? void 0 : i.nick) && void 0 !== e ? e : N.ZP.getName(n),
                        nickcolor: null !== (t = null == i ? void 0 : i.colorString) && void 0 !== t ? t : void 0
                    };
                },
                [a]
            )),
        { isTruncated: M, ExpandableTextContainer: v } = (0, C.s)(),
        L = (null !== (n = null == E ? void 0 : null === (t = E.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0,
        [Z, P] = s.useState(1),
        b = (0, c.Z)('(max-width: 1439px)'),
        { selectedTab: D, isPhantomPreview: j } = (0, p.m)(),
        U = D === g.y.GUILD_PRODUCTS_PREVIEW ? S.Z.Messages.GUILD_STORE_HERO_PREVIEW_TAB_DESCRIPTION : S.Z.Messages.GUILD_STORE_HERO_PREVIEW_PAGE_DESCRIPTION,
        y = L
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(v, {
                          lineClamp: b || 2 === Z ? 2 : 3,
                          children: (0, i.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              color: 'text-normal',
                              children: null == E ? void 0 : E.description
                          })
                      }),
                      M &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)(o.Spacer, { size: 4 }), (0, i.jsx)(R, { onClick: () => (0, A.Z)({ guildId: I }) })]
                          })
                  ]
              })
            : (0, i.jsx)(o.Text, {
                  variant: 'text-sm/normal',
                  color: 'text-normal',
                  children: j ? U : S.Z.Messages.GUILD_STORE_HERO_DEFAULT_DESCRIPTION
              });
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsxs)('div', {
                className: x.infoContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(_.Z, {
                            guild: d,
                            size: _.Z.Sizes.LARGER,
                            iconSrc: null == d.icon || j ? (0, u.b)('server_products/storefront/default-guild-icon.jpg') : void 0
                        })
                    }),
                    (0, i.jsx)(o.Spacer, {
                        size: 16,
                        horizontal: !0
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)('div', {
                                ref: (e) => {
                                    null != e && e.clientHeight > 30 && P(2);
                                },
                                children: (0, i.jsx)(o.Heading, {
                                    variant: 'heading-xl/semibold',
                                    color: 'header-primary',
                                    lineClamp: 2,
                                    children: j ? S.Z.Messages.GUILD_STORE_HERO_PREVIEW_TITLE : S.Z.Messages.GUILD_STORE_HERO_TITLE.format({ guildName: d.name })
                                })
                            }),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(o.Spacer, { size: 8 }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-normal',
                                        children: S.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_GREETING.format({
                                            username: h,
                                            usernameHook: function (e, t) {
                                                return (0, i.jsx)(
                                                    'span',
                                                    {
                                                        style: { color: f },
                                                        children: e
                                                    },
                                                    t
                                                );
                                            }
                                        })
                                    }),
                                    (0, i.jsx)(o.Spacer, { size: 9 }),
                                    y
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(O, {
                coverImageAsset: null == E ? void 0 : E.cover_image_asset,
                isPreview: j
            })
        ]
    });
}
