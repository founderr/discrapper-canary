n.d(t, {
    C: function () {
        return R;
    },
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(512722),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    c = n(131388),
    d = n(357352),
    u = n(70097),
    _ = n(565138),
    E = n(353254),
    I = n(695346),
    m = n(271383),
    T = n(594174),
    N = n(671533),
    h = n(51144),
    C = n(506071),
    f = n(696014),
    p = n(847033),
    g = n(544978),
    A = n(893182),
    S = n(689938),
    M = n(687006);
function O(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.Clickable, {
        onClick: t,
        className: M.showMoreButton,
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
            (0, i.jsx)(N.Z, {
                direction: N.Z.Directions.RIGHT,
                className: M.showMoreArrow
            })
        ]
    });
}
function x(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        a = I.QK.useSetting(),
        s = (0, C.n)() && a,
        [l, r] = (0, E.Z)(t, s),
        o = s
            ? (0, i.jsx)(u.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: M.coverImage,
                  width: 655,
                  poster: (0, d.b)('server_products/storefront/default-header.png'),
                  src: (0, d.b)('server_products/storefront/default-header.mov')
              })
            : (0, i.jsx)('img', {
                  src: (0, d.b)('server_products/storefront/default-header.png'),
                  alt: '',
                  className: M.coverImage
              });
    return (0, i.jsx)('div', {
        ref: l,
        className: M.coverImageContainer,
        children:
            null == r || n
                ? o
                : (0, i.jsx)('img', {
                      src: r,
                      alt: '',
                      className: M.coverImage
                  })
    });
}
function R(e) {
    var t, n, s;
    let { guild: u, subscriptionsSettings: E } = e,
        I = u.id;
    let { nickname: N, nickcolor: C } =
            ((s = I),
            (0, r.cj)(
                [m.ZP, T.default],
                () => {
                    var e, t;
                    let n = T.default.getCurrentUser();
                    l()(null != n, 'user cannot be null');
                    let i = m.ZP.getMember(s, n.id);
                    return {
                        nickname: null !== (e = null == i ? void 0 : i.nick) && void 0 !== e ? e : h.ZP.getName(n),
                        nickcolor: null !== (t = null == i ? void 0 : i.colorString) && void 0 !== t ? t : void 0
                    };
                },
                [s]
            )),
        { isTruncated: R, ExpandableTextContainer: v } = (0, f.s)(),
        L = (null !== (n = null == E ? void 0 : null === (t = E.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0,
        [Z, P] = a.useState(1),
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
                      R &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)(o.Spacer, { size: 4 }), (0, i.jsx)(O, { onClick: () => (0, A.Z)({ guildId: I }) })]
                          })
                  ]
              })
            : (0, i.jsx)(o.Text, {
                  variant: 'text-sm/normal',
                  color: 'text-normal',
                  children: j ? U : S.Z.Messages.GUILD_STORE_HERO_DEFAULT_DESCRIPTION
              });
    return (0, i.jsxs)('div', {
        className: M.container,
        children: [
            (0, i.jsxs)('div', {
                className: M.infoContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(_.Z, {
                            guild: u,
                            size: _.Z.Sizes.LARGER,
                            iconSrc: null == u.icon || j ? (0, d.b)('server_products/storefront/default-guild-icon.jpg') : void 0
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
                                    children: j ? S.Z.Messages.GUILD_STORE_HERO_PREVIEW_TITLE : S.Z.Messages.GUILD_STORE_HERO_TITLE.format({ guildName: u.name })
                                })
                            }),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(o.Spacer, { size: 8 }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-normal',
                                        children: S.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_GREETING.format({
                                            username: N,
                                            usernameHook: function (e, t) {
                                                return (0, i.jsx)(
                                                    'span',
                                                    {
                                                        style: { color: C },
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
            (0, i.jsx)(x, {
                coverImageAsset: null == E ? void 0 : E.cover_image_asset,
                isPreview: j
            })
        ]
    });
}
