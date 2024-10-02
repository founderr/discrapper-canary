t.d(n, {
    Z: function () {
        return C;
    }
});
var a = t(735250),
    i = t(470079),
    l = t(120356),
    s = t.n(l),
    r = t(91192),
    c = t(481060),
    o = t(768581),
    d = t(4461),
    u = t(924489),
    _ = t(491576),
    g = t(689938),
    m = t(734888);
function C(e) {
    var n, t, l, C;
    let { application: p, className: f, childrenClassName: h, showAdd: x, showMutualGuilds: I, showPrimaryCategory: R, children: b, onView: T, guildCountPosition: A = 'top', subheaderTextVariant: v = 'text-sm/normal', mutualGuildShownMax: E, guildIconSize: P, source: N } = e,
        j = (0, r.JA)(p.id),
        S = o.ZP.getApplicationIconURL({
            id: p.id,
            icon: p.icon,
            size: 48
        }),
        { canInstall: y, install: O } = (0, d.P)(p),
        M = (0, _.Z)({
            application: p,
            showMutualGuilds: I
        }),
        D = i.useCallback(
            (e) => {
                e.stopPropagation(), O(N);
            },
            [O, N]
        ),
        Z = null === (n = p.categories) || void 0 === n ? void 0 : n[0],
        L = (null !== (l = null === (t = p.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== l ? l : 0) > 0 || M.length > 0,
        Y = (0, a.jsx)(u.Z, {
            application: p,
            textVariant: v,
            mutualGuilds: M,
            mutualGuildShownMax: E,
            guildIconSize: P,
            compact: !0
        }),
        k = R && null != Z,
        H = L && 'top' === A,
        U = L && 'bottom' === A,
        G = null !== (C = p.storefront_available) && void 0 !== C && C,
        w = (0, a.jsxs)('article', {
            children: [
                (0, a.jsxs)('div', {
                    className: m.topWrapper,
                    children: [
                        (0, a.jsx)('img', {
                            className: m.icon,
                            alt: '',
                            'aria-hidden': !0,
                            src: S,
                            width: 48,
                            height: 48
                        }),
                        (0, a.jsxs)('div', {
                            className: m.info,
                            children: [
                                (0, a.jsx)(c.Heading, {
                                    variant: 'heading-md/medium',
                                    children: p.name
                                }),
                                (k || H) &&
                                    (0, a.jsxs)('div', {
                                        className: m.details,
                                        children: [
                                            k
                                                ? (0, a.jsx)(c.Text, {
                                                      tag: 'span',
                                                      color: 'header-secondary',
                                                      variant: v,
                                                      children: Z.name
                                                  })
                                                : null,
                                            H
                                                ? (0, a.jsxs)(a.Fragment, {
                                                      children: [
                                                          k
                                                              ? (0, a.jsx)('span', {
                                                                    className: m.bullet,
                                                                    children: '\u2022'
                                                                })
                                                              : null,
                                                          Y,
                                                          G
                                                              ? (0, a.jsxs)('div', {
                                                                    className: m.premiumContainer,
                                                                    children: [
                                                                        (0, a.jsx)('span', {
                                                                            className: m.bullet,
                                                                            children: '\u2022'
                                                                        }),
                                                                        (0, a.jsx)(c.TicketIcon, {
                                                                            size: 'xs',
                                                                            color: 'currentColor'
                                                                        }),
                                                                        (0, a.jsx)(c.Text, {
                                                                            variant: 'text-sm/medium',
                                                                            className: m.premiumText,
                                                                            children: g.Z.Messages.APPLICATION_DIRECTORY_LISTING_TOOLTIP_PREMIUM
                                                                        })
                                                                    ]
                                                                })
                                                              : null
                                                      ]
                                                  })
                                                : null
                                        ]
                                    })
                            ]
                        }),
                        x
                            ? (0, a.jsx)(c.Button, {
                                  size: c.Button.Sizes.SMALL,
                                  onClick: D,
                                  disabled: !y,
                                  children: g.Z.Messages.APP_DIRECTORY_LISTING_ADD_BUTTON
                              })
                            : null
                    ]
                }),
                null != b || null != h
                    ? (0, a.jsx)('div', {
                          className: s()(h, m.__invalid_children),
                          children: b
                      })
                    : null,
                U
                    ? (0, a.jsx)('div', {
                          className: m.bottomGuildCountContainer,
                          children: Y
                      })
                    : null
            ]
        });
    return null != T
        ? (0, a.jsx)(c.Clickable, {
              tag: 'li',
              onClick: () => T({ mutualGuilds: M }),
              className: s()(f, m.listing, m.clickable),
              ...j,
              children: w
          })
        : (0, a.jsx)(c.FocusRing, {
              children: (0, a.jsx)('li', {
                  className: s()(f, m.listing),
                  ...j,
                  children: w
              })
          });
}
