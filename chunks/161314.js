n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(990547),
    o = n(831209),
    c = n(442837),
    d = n(481060),
    u = n(367907),
    _ = n(213609),
    E = n(565138),
    I = n(267101),
    m = n(336197),
    T = n(661824),
    N = n(430824),
    h = n(626135),
    C = n(76535),
    p = n(866104),
    f = n(886176),
    g = n(981631),
    A = n(689938),
    S = n(140171);
function M(e) {
    var t;
    let { guildId: n } = e,
        s = (0, c.e7)([N.Z], () => N.Z.getGuild(n)),
        { loading: M, subscriptionsSettings: O } = (0, C.H)(n),
        { listingsLoaded: x } = (0, I.eD)(n),
        R = (0, I.ue)(n, { publishedOnly: !0 }),
        v = a.useCallback(async () => {
            h.default.track(g.rMx.GUILD_SHOP_EMBED_CLICKED, { ...(0, u.hH)(n) }), await (0, m.Z)(g.Z5c.SERVER_SHOP(n));
        }, [n]);
    (0, _.Z)(
        {
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.GUILD_SHOP_EMBED
        },
        { disableTrack: null == s }
    );
    let L = R.length > 0 ? new Date(Math.min(...R.map((e) => Date.parse(e.published_at)))) : void 0;
    return M || !x
        ? (0, i.jsx)('div', {
              className: l()(S.guildShopEmbed, S.spinnerContainer),
              children: (0, i.jsx)(d.Spinner, {})
          })
        : null == s || null == O
          ? null
          : (0, i.jsxs)('div', {
                className: S.guildShopEmbed,
                children: [
                    (0, i.jsx)(p.Z, { coverImageAsset: null !== (t = O.cover_image_asset) && void 0 !== t ? t : null }),
                    (0, i.jsx)(d.Spacer, { size: 16 }),
                    (0, i.jsxs)('div', {
                        className: S.serverShopLabel,
                        children: [
                            (0, i.jsx)(f.Z, {
                                height: '16px',
                                width: '16px',
                                color: o.Z.INTERACTIVE_NORMAL
                            }),
                            (0, i.jsx)(d.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'interactive-normal',
                                className: S.serverShopLabelText,
                                children: A.Z.Messages.GUILD_SHOP_CHANNEL_LABEL
                            })
                        ]
                    }),
                    (0, i.jsx)(d.Spacer, { size: 16 }),
                    (0, i.jsx)(d.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'text-normal',
                        children: A.Z.Messages.GUILD_STORE_HERO_TITLE.format({ guildName: s.name })
                    }),
                    (0, i.jsx)(d.Spacer, { size: 4 }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        lineClamp: 2,
                        children: O.description
                    }),
                    (0, i.jsx)(d.Spacer, { size: 16 }),
                    (0, i.jsx)(T.Z, {}),
                    (0, i.jsx)(d.Spacer, { size: 16 }),
                    (0, i.jsxs)('div', {
                        className: S.guildShopEmbedFooter,
                        children: [
                            (0, i.jsx)(E.Z, { guild: s }),
                            (0, i.jsxs)('ul', {
                                className: S.guildShopSummary,
                                children: [
                                    (0, i.jsx)('li', {
                                        children: (0, i.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: A.Z.Messages.GUILD_SHOP_EMBED_LISTINGS_AVAILABLE.format({ listingCount: R.length })
                                        })
                                    }),
                                    null != L &&
                                        (0, i.jsx)('li', {
                                            children: (0, i.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-muted',
                                                children: A.Z.Messages.GUILD_SHOP_EMBED_SHOP_AGE.format({ createdYear: L.getFullYear() })
                                            })
                                        })
                                ]
                            }),
                            (0, i.jsx)(d.Button, {
                                className: S.guildShopEmbedCta,
                                onClick: v,
                                children: (0, i.jsxs)('div', {
                                    className: S.guildShopEmbedCtaContent,
                                    children: [
                                        (0, i.jsx)(f.Z, {
                                            height: '18px',
                                            width: '18px'
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: A.Z.Messages.GUILD_SHOP_EMBED_CTA
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            });
}
