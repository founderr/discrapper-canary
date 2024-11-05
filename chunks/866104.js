n.d(t, {
    C: function () {
        return j;
    },
    Z: function () {
        return A;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(131388),
    d = n(357352),
    u = n(70097),
    m = n(565138),
    h = n(353254),
    f = n(695346),
    p = n(271383),
    g = n(594174),
    _ = n(671533),
    C = n(51144),
    E = n(506071),
    I = n(696014),
    x = n(847033),
    v = n(544978),
    N = n(893182),
    T = n(388032),
    S = n(687006);
function b(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(s.Clickable, {
        onClick: t,
        className: S.showMoreButton,
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: T.intl.string(T.t.J4cw1t)
            }),
            (0, i.jsx)(s.Spacer, {
                size: 4,
                horizontal: !0
            }),
            (0, i.jsx)(_.Z, {
                direction: _.Z.Directions.RIGHT,
                className: S.showMoreArrow
            })
        ]
    });
}
function A(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        r = f.QK.useSetting(),
        l = (0, E.n)() && r,
        [a, o] = (0, h.Z)(t, l),
        s = l
            ? (0, i.jsx)(u.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: S.coverImage,
                  width: 655,
                  poster: (0, d.b)('server_products/storefront/default-header.png'),
                  src: (0, d.b)('server_products/storefront/default-header.mov')
              })
            : (0, i.jsx)('img', {
                  src: (0, d.b)('server_products/storefront/default-header.png'),
                  alt: '',
                  className: S.coverImage
              });
    return (0, i.jsx)('div', {
        ref: a,
        className: S.coverImageContainer,
        children:
            null == o || n
                ? s
                : (0, i.jsx)('img', {
                      src: o,
                      alt: '',
                      className: S.coverImage
                  })
    });
}
function j(e) {
    var t, n, l;
    let { guild: u, subscriptionsSettings: h } = e,
        f = u.id;
    let { nickname: _, nickcolor: E } =
            ((l = f),
            (0, o.cj)(
                [p.ZP, g.default],
                () => {
                    var e, t;
                    let n = g.default.getCurrentUser();
                    a()(null != n, 'user cannot be null');
                    let i = p.ZP.getMember(l, n.id);
                    return {
                        nickname: null !== (e = null == i ? void 0 : i.nick) && void 0 !== e ? e : C.ZP.getName(n),
                        nickcolor: null !== (t = null == i ? void 0 : i.colorString) && void 0 !== t ? t : void 0
                    };
                },
                [l]
            )),
        { isTruncated: j, ExpandableTextContainer: Z } = (0, I.s)(),
        R = (null !== (n = null == h ? void 0 : null === (t = h.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0,
        [P, y] = r.useState(1),
        L = (0, c.Z)('(max-width: 1439px)'),
        { selectedTab: O, isPhantomPreview: M } = (0, x.m)(),
        k = O === v.y.GUILD_PRODUCTS_PREVIEW ? T.intl.string(T.t['LvXy/P']) : T.intl.string(T.t.XyqKh4),
        D = R
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(Z, {
                          lineClamp: L || 2 === P ? 2 : 3,
                          children: (0, i.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'text-normal',
                              children: null == h ? void 0 : h.description
                          })
                      }),
                      j &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)(s.Spacer, { size: 4 }), (0, i.jsx)(b, { onClick: () => (0, N.Z)({ guildId: f }) })]
                          })
                  ]
              })
            : (0, i.jsx)(s.Text, {
                  variant: 'text-sm/normal',
                  color: 'text-normal',
                  children: M ? k : T.intl.string(T.t['NY/FIS'])
              });
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsxs)('div', {
                className: S.infoContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(m.Z, {
                            guild: u,
                            size: m.Z.Sizes.LARGER,
                            iconSrc: null == u.icon || M ? (0, d.b)('server_products/storefront/default-guild-icon.jpg') : void 0
                        })
                    }),
                    (0, i.jsx)(s.Spacer, {
                        size: 16,
                        horizontal: !0
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)('div', {
                                ref: (e) => {
                                    null != e && e.clientHeight > 30 && y(2);
                                },
                                children: (0, i.jsx)(s.Heading, {
                                    variant: 'heading-xl/semibold',
                                    color: 'header-primary',
                                    lineClamp: 2,
                                    children: M ? T.intl.string(T.t.rtgp7u) : T.intl.formatToPlainString(T.t.NZeik5, { guildName: u.name })
                                })
                            }),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(s.Spacer, { size: 8 }),
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-normal',
                                        children: T.intl.format(T.t['7JwrlJ'], {
                                            username: _,
                                            usernameHook: function (e, t) {
                                                return (0, i.jsx)(
                                                    'span',
                                                    {
                                                        style: { color: E },
                                                        children: e
                                                    },
                                                    t
                                                );
                                            }
                                        })
                                    }),
                                    (0, i.jsx)(s.Spacer, { size: 9 }),
                                    D
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(A, {
                coverImageAsset: null == h ? void 0 : h.cover_image_asset,
                isPreview: M
            })
        ]
    });
}
