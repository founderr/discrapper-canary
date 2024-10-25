n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(990547),
    o = n(831209),
    c = n(442837),
    u = n(481060),
    d = n(367907),
    _ = n(213609),
    E = n(565138),
    I = n(267101),
    m = n(336197),
    f = n(661824),
    T = n(430824),
    h = n(626135),
    N = n(76535),
    p = n(866104),
    C = n(886176),
    g = n(981631),
    S = n(689938),
    A = n(140171);
function x(e) {
    var t;
    let { guildId: n } = e,
        s = (0, c.e7)([T.Z], () => T.Z.getGuild(n)),
        { loading: x, subscriptionsSettings: R } = (0, N.H)(n),
        { listingsLoaded: v } = (0, I.eD)(n),
        O = (0, I.ue)(n, { publishedOnly: !0 }),
        M = a.useCallback(async () => {
            h.default.track(g.rMx.GUILD_SHOP_EMBED_CLICKED, { ...(0, d.hH)(n) }), await (0, m.Z)(g.Z5c.SERVER_SHOP(n));
        }, [n]);
    (0, _.Z)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.GUILD_SHOP_EMBED
        },
        { disableTrack: null == s }
    );
    let L = O.length > 0 ? new Date(Math.min(...O.map((e) => Date.parse(e.published_at)))) : void 0;
    return x || !v
        ? (0, i.jsx)('div', {
              className: r()(A.guildShopEmbed, A.spinnerContainer),
              children: (0, i.jsx)(u.Spinner, {})
          })
        : null == s || null == R
          ? null
          : (0, i.jsxs)('div', {
                className: A.guildShopEmbed,
                children: [
                    (0, i.jsx)(p.Z, { coverImageAsset: null !== (t = R.cover_image_asset) && void 0 !== t ? t : null }),
                    (0, i.jsx)(u.Spacer, { size: 16 }),
                    (0, i.jsxs)('div', {
                        className: A.serverShopLabel,
                        children: [
                            (0, i.jsx)(C.Z, {
                                height: '16px',
                                width: '16px',
                                color: o.Z.INTERACTIVE_NORMAL
                            }),
                            (0, i.jsx)(u.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'interactive-normal',
                                className: A.serverShopLabelText,
                                children: S.Z.Messages.GUILD_SHOP_CHANNEL_LABEL
                            })
                        ]
                    }),
                    (0, i.jsx)(u.Spacer, { size: 16 }),
                    (0, i.jsx)(u.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'text-normal',
                        children: S.Z.Messages.GUILD_STORE_HERO_TITLE.format({ guildName: s.name })
                    }),
                    (0, i.jsx)(u.Spacer, { size: 4 }),
                    (0, i.jsx)(u.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        lineClamp: 2,
                        children: R.description
                    }),
                    (0, i.jsx)(u.Spacer, { size: 16 }),
                    (0, i.jsx)(f.Z, {}),
                    (0, i.jsx)(u.Spacer, { size: 16 }),
                    (0, i.jsxs)('div', {
                        className: A.guildShopEmbedFooter,
                        children: [
                            (0, i.jsx)(E.Z, { guild: s }),
                            (0, i.jsxs)('ul', {
                                className: A.guildShopSummary,
                                children: [
                                    (0, i.jsx)('li', {
                                        children: (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: S.Z.Messages.GUILD_SHOP_EMBED_LISTINGS_AVAILABLE.format({ listingCount: O.length })
                                        })
                                    }),
                                    null != L &&
                                        (0, i.jsx)('li', {
                                            children: (0, i.jsx)(u.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-muted',
                                                children: S.Z.Messages.GUILD_SHOP_EMBED_SHOP_AGE.format({ createdYear: L.getFullYear() })
                                            })
                                        })
                                ]
                            }),
                            (0, i.jsx)(u.Button, {
                                className: A.guildShopEmbedCta,
                                onClick: M,
                                children: (0, i.jsxs)('div', {
                                    className: A.guildShopEmbedCtaContent,
                                    children: [
                                        (0, i.jsx)(C.Z, {
                                            height: '18px',
                                            width: '18px'
                                        }),
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: S.Z.Messages.GUILD_SHOP_EMBED_CTA
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            });
}
