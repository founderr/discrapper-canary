n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(990547),
    u = n(831209),
    c = n(442837),
    d = n(481060),
    _ = n(367907),
    E = n(213609),
    f = n(565138),
    h = n(267101),
    p = n(336197),
    m = n(661824),
    I = n(430824),
    T = n(626135),
    g = n(76535),
    S = n(866104),
    A = n(886176),
    v = n(981631),
    N = n(689938),
    O = n(140171);
function R(e) {
    var t;
    let { guildId: n } = e,
        r = (0, c.e7)([I.Z], () => I.Z.getGuild(n)),
        { loading: o, subscriptionsSettings: R } = (0, g.H)(n),
        { listingsLoaded: C } = (0, h.eD)(n),
        y = (0, h.ue)(n, { publishedOnly: !0 }),
        L = a.useCallback(async () => {
            T.default.track(v.rMx.GUILD_SHOP_EMBED_CLICKED, { ...(0, _.hH)(n) }), await (0, p.Z)(v.Z5c.SERVER_SHOP(n));
        }, [n]);
    (0, E.Z)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.GUILD_SHOP_EMBED
        },
        { disableTrack: null == r }
    );
    let b = y.length > 0 ? new Date(Math.min(...y.map((e) => Date.parse(e.published_at)))) : void 0;
    return o || !C
        ? (0, i.jsx)('div', {
              className: s()(O.guildShopEmbed, O.spinnerContainer),
              children: (0, i.jsx)(d.Spinner, {})
          })
        : null == r || null == R
          ? null
          : (0, i.jsxs)('div', {
                className: O.guildShopEmbed,
                children: [
                    (0, i.jsx)(S.Z, { coverImageAsset: null !== (t = R.cover_image_asset) && void 0 !== t ? t : null }),
                    (0, i.jsx)(d.Spacer, { size: 16 }),
                    (0, i.jsxs)('div', {
                        className: O.serverShopLabel,
                        children: [
                            (0, i.jsx)(A.Z, {
                                height: '16px',
                                width: '16px',
                                color: u.Z.INTERACTIVE_NORMAL
                            }),
                            (0, i.jsx)(d.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'interactive-normal',
                                className: O.serverShopLabelText,
                                children: N.Z.Messages.GUILD_SHOP_CHANNEL_LABEL
                            })
                        ]
                    }),
                    (0, i.jsx)(d.Spacer, { size: 16 }),
                    (0, i.jsx)(d.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'text-normal',
                        children: N.Z.Messages.GUILD_STORE_HERO_TITLE.format({ guildName: r.name })
                    }),
                    (0, i.jsx)(d.Spacer, { size: 4 }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        lineClamp: 2,
                        children: R.description
                    }),
                    (0, i.jsx)(d.Spacer, { size: 16 }),
                    (0, i.jsx)(m.Z, {}),
                    (0, i.jsx)(d.Spacer, { size: 16 }),
                    (0, i.jsxs)('div', {
                        className: O.guildShopEmbedFooter,
                        children: [
                            (0, i.jsx)(f.Z, { guild: r }),
                            (0, i.jsxs)('ul', {
                                className: O.guildShopSummary,
                                children: [
                                    (0, i.jsx)('li', {
                                        children: (0, i.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: N.Z.Messages.GUILD_SHOP_EMBED_LISTINGS_AVAILABLE.format({ listingCount: y.length })
                                        })
                                    }),
                                    null != b &&
                                        (0, i.jsx)('li', {
                                            children: (0, i.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-muted',
                                                children: N.Z.Messages.GUILD_SHOP_EMBED_SHOP_AGE.format({ createdYear: b.getFullYear() })
                                            })
                                        })
                                ]
                            }),
                            (0, i.jsx)(d.Button, {
                                className: O.guildShopEmbedCta,
                                onClick: L,
                                children: (0, i.jsxs)('div', {
                                    className: O.guildShopEmbedCtaContent,
                                    children: [
                                        (0, i.jsx)(A.Z, {
                                            height: '18px',
                                            width: '18px'
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: N.Z.Messages.GUILD_SHOP_EMBED_CTA
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            });
}
