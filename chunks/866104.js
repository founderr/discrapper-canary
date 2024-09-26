n.d(t, {
    C: function () {
        return b;
    },
    Z: function () {
        return L;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(512722),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(131388),
    d = n(357352),
    _ = n(70097),
    E = n(565138),
    f = n(353254),
    h = n(695346),
    p = n(271383),
    m = n(594174),
    I = n(671533),
    T = n(51144),
    g = n(506071),
    S = n(696014),
    A = n(847033),
    v = n(544978),
    N = n(893182),
    O = n(689938),
    R = n(687006);
function C(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(u.Clickable, {
        onClick: t,
        className: R.showMoreButton,
        children: [
            (0, i.jsx)(u.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: O.Z.Messages.GUILD_STORE_HERO_SHOW_MORE_DESCRIPTION_LABEL
            }),
            (0, i.jsx)(u.Spacer, {
                size: 4,
                horizontal: !0
            }),
            (0, i.jsx)(I.Z, {
                direction: I.Z.Directions.RIGHT,
                className: R.showMoreArrow
            })
        ]
    });
}
function y(e) {
    return (0, l.cj)(
        [p.ZP, m.default],
        () => {
            var t, n;
            let r = m.default.getCurrentUser();
            s()(null != r, 'user cannot be null');
            let i = p.ZP.getMember(e, r.id);
            return {
                nickname: null !== (t = null == i ? void 0 : i.nick) && void 0 !== t ? t : T.ZP.getName(r),
                nickcolor: null !== (n = null == i ? void 0 : i.colorString) && void 0 !== n ? n : void 0
            };
        },
        [e]
    );
}
function L(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        r = h.QK.useSetting(),
        a = (0, g.n)() && r,
        [o, s] = (0, f.Z)(t, a),
        l = a
            ? (0, i.jsx)(_.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: R.coverImage,
                  width: 655,
                  poster: (0, d.b)('server_products/storefront/default-header.png'),
                  src: (0, d.b)('server_products/storefront/default-header.mov')
              })
            : (0, i.jsx)('img', {
                  src: (0, d.b)('server_products/storefront/default-header.png'),
                  alt: '',
                  className: R.coverImage
              });
    return (0, i.jsx)('div', {
        ref: o,
        className: R.coverImageContainer,
        children:
            null == s || n
                ? l
                : (0, i.jsx)('img', {
                      src: s,
                      alt: '',
                      className: R.coverImage
                  })
    });
}
function b(e) {
    var t, n;
    let { guild: r, subscriptionsSettings: o } = e,
        s = r.id,
        { nickname: l, nickcolor: _ } = y(s),
        { isTruncated: f, ExpandableTextContainer: h } = (0, S.s)(),
        p = () => (0, N.Z)({ guildId: s }),
        m = (null !== (n = null == o ? void 0 : null === (t = o.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0,
        [I, T] = a.useState(1),
        g = (0, c.Z)('(max-width: 1439px)'),
        { selectedTab: b, isPhantomPreview: D } = (0, A.m)(),
        M = b === v.y.GUILD_PRODUCTS_PREVIEW ? O.Z.Messages.GUILD_STORE_HERO_PREVIEW_TAB_DESCRIPTION : O.Z.Messages.GUILD_STORE_HERO_PREVIEW_PAGE_DESCRIPTION,
        P = (e) => {
            null != e && e.clientHeight > 30 && T(2);
        };
    function U(e, t) {
        return (0, i.jsx)(
            'span',
            {
                style: { color: _ },
                children: e
            },
            t
        );
    }
    let w = m
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(h, {
                      lineClamp: g || 2 === I ? 2 : 3,
                      children: (0, i.jsx)(u.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-normal',
                          children: null == o ? void 0 : o.description
                      })
                  }),
                  f &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(u.Spacer, { size: 4 }), (0, i.jsx)(C, { onClick: p })]
                      })
              ]
          })
        : (0, i.jsx)(u.Text, {
              variant: 'text-sm/normal',
              color: 'text-normal',
              children: D ? M : O.Z.Messages.GUILD_STORE_HERO_DEFAULT_DESCRIPTION
          });
    return (0, i.jsxs)('div', {
        className: R.container,
        children: [
            (0, i.jsxs)('div', {
                className: R.infoContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(E.Z, {
                            guild: r,
                            size: E.Z.Sizes.LARGER,
                            iconSrc: null == r.icon || D ? (0, d.b)('server_products/storefront/default-guild-icon.jpg') : void 0
                        })
                    }),
                    (0, i.jsx)(u.Spacer, {
                        size: 16,
                        horizontal: !0
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)('div', {
                                ref: P,
                                children: (0, i.jsx)(u.Heading, {
                                    variant: 'heading-xl/semibold',
                                    color: 'header-primary',
                                    lineClamp: 2,
                                    children: D ? O.Z.Messages.GUILD_STORE_HERO_PREVIEW_TITLE : O.Z.Messages.GUILD_STORE_HERO_TITLE.format({ guildName: r.name })
                                })
                            }),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(u.Spacer, { size: 8 }),
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-normal',
                                        children: O.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_GREETING.format({
                                            username: l,
                                            usernameHook: U
                                        })
                                    }),
                                    (0, i.jsx)(u.Spacer, { size: 9 }),
                                    w
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(L, {
                coverImageAsset: null == o ? void 0 : o.cover_image_asset,
                isPreview: D
            })
        ]
    });
}
