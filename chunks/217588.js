var r = n(724458);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(442837),
    c = n(481060),
    d = n(749210),
    _ = n(367907),
    E = n(600164),
    f = n(111028),
    h = n(231053),
    p = n(697568),
    m = n(183023),
    I = n(524444),
    T = n(98278),
    g = n(197115),
    S = n(430824),
    A = n(594174),
    v = n(626135),
    N = n(74538),
    O = n(453070),
    R = n(926491),
    C = n(378233),
    y = n(419922),
    b = n(688179),
    L = n(981631),
    D = n(474936),
    M = n(689938),
    P = n(174461),
    U = n(507444);
let w = 80,
    x = 48,
    G = 32,
    k = 2,
    B = 3,
    F = 12,
    Z = (e, t) => (t ? M.Z.Messages.STICKER_POPOUT_PACK_INFO_PREMIUM.format({ stickerPackName: e.name }) : M.Z.Messages.STICKER_POPOUT_PACK_INFO_UNAVAILABLE.format({ stickerPackName: e.name })),
    V = (e) => {
        let { sticker: t, stickerPack: n } = e;
        return o.useMemo(() => (null == n ? [] : n.stickers.slice(0, B + 1).reduce((e, n) => (e.length !== B && n.id !== t.id ? e.concat(n) : e), [])), [t, n]);
    };
function H(e) {
    v.default.track(L.rMx.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? L.ZY5.GUILD_CHANNEL : L.ZY5.DM_CHANNEL,
        location_section: L.jXE.STICKER_POPOUT
    }),
        (0, T.z)();
}
function Y(e) {
    let { sticker: t, description: n } = e;
    return (0, a.jsxs)(E.Z, {
        children: [
            (0, a.jsx)(y.ZP, {
                sticker: t,
                size: x,
                isInteracting: !0
            }),
            (0, a.jsxs)(E.Z, {
                direction: E.Z.Direction.VERTICAL,
                justify: E.Z.Justify.CENTER,
                className: U.truncatingText,
                children: [
                    (0, a.jsx)(c.Text, {
                        className: U.__invalid_emojiName,
                        variant: 'text-md/semibold',
                        children: (0, a.jsx)(f.Z, { children: t.name })
                    }),
                    null != n &&
                        (0, a.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            children: n
                        })
                ]
            })
        ]
    });
}
let j = (e) => {
        let { closePopout: t, sticker: n, channel: r, refreshPositionKey: i } = e,
            [s, l, d] = (0, u.Wu)([R.Z], () => [R.Z.getStickerPack(n.pack_id), !R.Z.hasLoadedStickerPacks, R.Z.isPremiumPack(n.pack_id)], [n]),
            E = V({
                sticker: n,
                stickerPack: s
            });
        (0, O.Pq)(n.pack_id);
        let f = (0, O.Sd)(r);
        if (
            (o.useEffect(() => {
                i();
            }, [l]),
            o.useEffect(() => {
                v.default.track(L.rMx.OPEN_POPOUT, {
                    type: L.jXE.STICKER_POPOUT,
                    guild_id: r.getGuildId(),
                    sticker_pack_id: n.pack_id,
                    ...(0, _.v_)(r)
                });
            }, [n.pack_id]),
            l || null == s)
        )
            return (0, a.jsx)(I.SE, { className: P.popoutLoader });
        let h = d,
            p = () => {
                h &&
                    (0, b.m)({
                        stickerPack: s,
                        stickerPickerCategories: f
                    }),
                    t();
            };
        return (0, a.jsxs)(I.W_, {
            className: P.popoutContent,
            children: [
                (0, a.jsx)(c.Heading, {
                    variant: 'heading-md/semibold',
                    children: n.name
                }),
                (0, a.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    children: Z(s, d)
                }),
                (0, a.jsx)('ul', {
                    className: P.stickersList,
                    children: E.map((e) =>
                        (0, a.jsx)(
                            y.ZP,
                            {
                                isInteracting: !0,
                                size: w,
                                sticker: e
                            },
                            e.id
                        )
                    )
                }),
                d &&
                    (0, a.jsx)('div', {
                        className: P.packActions,
                        children: (0, a.jsx)(
                            c.Button,
                            {
                                color: c.Button.Colors.PRIMARY,
                                size: c.Button.Sizes.SMALL,
                                onClick: p,
                                children: M.Z.Messages.STICKER_VIEW_MORE_STICKERS
                            },
                            'view-sticker-pack'
                        )
                    })
            ]
        });
    },
    W = (e) => {
        let t,
            { sticker: n, channel: r, closePopout: i, refreshPositionKey: s } = e,
            [f, T] = o.useState(null),
            [O, R] = o.useState(!1),
            C = A.default.getCurrentUser(),
            b = N.ZP.canUseCustomStickersEverywhere(C),
            w = (0, u.e7)([S.Z], () => S.Z.getGuild(n.guild_id)),
            x = null != w,
            [B, Z] = o.useState(!1),
            [V, j] = o.useState(null),
            W = o.useMemo(
                () => ({
                    page: null != r.guild_id ? L.ZY5.GUILD_CHANNEL : L.ZY5.DM_CHANNEL,
                    section: L.jXE.STICKER_POPOUT
                }),
                [r.guild_id]
            ),
            { current: K } = o.useRef({
                guild_id: r.getGuildId(),
                ...(0, _.v_)(r)
            });
        o.useEffect(() => {
            (async () => {
                (null == w || w.hasFeature(L.oNc.DISCOVERABLE)) && T(await (0, p.Z)(n.id)), R(!0);
            })();
        }, [n.id, x]);
        let z = n.guild_id === r.getGuildId(),
            q = null != f,
            Q = !1,
            X = 'Custom Sticker Popout';
        b
            ? (t = x ? (z ? M.Z.Messages.STICKER_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : M.Z.Messages.STICKER_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION) : q ? M.Z.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : M.Z.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION)
            : x
              ? (z ? (t = M.Z.Messages.STICKER_POPOUT_CURRENT_GUILD_DESCRIPTION) : (t = M.Z.Messages.STICKER_POPOUT_JOINED_GUILD_DESCRIPTION), (Q = !0), (X = 'Custom Sticker Popout (Upsell)'))
              : q
                ? ((t = M.Z.Messages.STICKER_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION), (Q = !0), (X = 'Custom Sticker Popout (Upsell)'))
                : ((t = M.Z.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                      openPremiumSettings: () => {
                          H(r), i();
                      }
                  })),
                  (X = 'Custom Sticker Popout (Soft Upsell)'));
        let $ = !Q && !x && q && b;
        if (
            (o.useEffect(() => {
                s();
            }, [O, f]),
            o.useEffect(() => {
                v.default.track(L.rMx.OPEN_POPOUT, {
                    type: X,
                    ...K
                });
            }, []),
            !O)
        )
            return (0, a.jsx)(I.SE, { className: P.popoutLoader });
        {
            let e = () => {
                    let e = async () => {
                        if (null == f || x) return;
                        i();
                        let e = f.id;
                        try {
                            await d.Z.joinGuild(e), d.Z.transitionToGuildSync(e);
                        } catch {}
                    };
                    return (0, a.jsxs)('div', {
                        className: U.emojiSection,
                        children: [
                            (0, a.jsx)(Y, {
                                description: t,
                                sticker: n
                            }),
                            Q &&
                                (0, a.jsx)(g.Z, {
                                    className: U.ctaButton,
                                    subscriptionTier: D.Si.TIER_2,
                                    size: c.Button.Sizes.SMALL,
                                    fullWidth: !0,
                                    buttonText: M.Z.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                                    onSubscribeModalClose: (t) => (t ? e() : i()),
                                    postSuccessGuild: x || null == f ? void 0 : f,
                                    premiumModalAnalyticsLocation: W
                                }),
                            $ &&
                                (0, a.jsx)(c.Button, {
                                    size: c.Button.Sizes.SMALL,
                                    className: U.ctaButton,
                                    fullWidth: !0,
                                    onClick: e,
                                    children: M.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
                                })
                        ]
                    });
                },
                r = () => {
                    var e;
                    if (!q && !x) return;
                    let t = (null !== (e = null == f ? void 0 : f.stickers) && void 0 !== e ? e : [])
                            .slice(0, F + 1)
                            .filter((e) => e.id !== n.id)
                            .slice(0, F),
                        r = () => {
                            s(), Z(!B);
                        },
                        i = null != f ? h.JO.createFromDiscoverableGuild(f) : h.JO.createFromGuildRecord(w);
                    return (0, a.jsxs)('div', {
                        className: U.guildSection,
                        children: [
                            (0, a.jsx)(c.FormTitle, {
                                className: U.guildTitle,
                                children: x ? M.Z.Messages.STICKER_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : M.Z.Messages.STICKER_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
                            }),
                            (0, a.jsx)(m.Oe, {
                                expressionSourceGuild: i,
                                hasJoinedExpressionSourceGuild: x,
                                isDisplayingJoinGuildButtonInPopout: $
                            }),
                            !x &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(c.Clickable, {
                                            onClick: r,
                                            className: U.showMoreEmojis,
                                            children: (0, a.jsxs)(E.Z, {
                                                children: [
                                                    (0, a.jsx)(c.Text, {
                                                        className: U.__invalid_showMoreEmojisLabel,
                                                        variant: 'text-xs/normal',
                                                        color: 'none',
                                                        children: M.Z.Messages.STICKER_POPOUT_SHOW_MORE_STICKERS
                                                    }),
                                                    (0, a.jsx)(c.ChevronSmallDownIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: l()(U.showMoreEmojisArrow, { [U.showMoreEmojisArrowCollapsed]: !B })
                                                    })
                                                ]
                                            })
                                        }),
                                        B &&
                                            (0, a.jsx)(E.Z, {
                                                wrap: E.Z.Wrap.WRAP,
                                                align: E.Z.Align.START,
                                                justify: E.Z.Justify.START,
                                                className: U.otherEmojisContainer,
                                                children: t.map((e) =>
                                                    (0, a.jsx)(
                                                        c.Tooltip,
                                                        {
                                                            text: e.name,
                                                            ...I.b_,
                                                            children: (t) => {
                                                                let { onMouseEnter: n, onMouseLeave: r, ...i } = t;
                                                                return (0, a.jsx)(
                                                                    'div',
                                                                    {
                                                                        className: l()(U.otherEmoji, { [P.nonInteractingSticker]: null != V && V !== e.id }),
                                                                        onMouseEnter: () => {
                                                                            null == n || n(), j(e.id);
                                                                        },
                                                                        onMouseLeave: () => {
                                                                            null == r || r(), j(null);
                                                                        },
                                                                        ...i,
                                                                        children: (0, a.jsx)(y.ZP, {
                                                                            size: G,
                                                                            enlargeOnInteraction: !0,
                                                                            enlargeWithName: !1,
                                                                            enlargeScaleFactor: k,
                                                                            isInteracting: V === e.id,
                                                                            sticker: e
                                                                        })
                                                                    },
                                                                    e.id
                                                                );
                                                            }
                                                        },
                                                        e.id
                                                    )
                                                )
                                            })
                                    ]
                                })
                        ]
                    });
                };
            return (0, a.jsxs)(I.W_, {
                className: U.popoutContent,
                children: [e(), (null != w || null != f) && r()]
            });
        }
    };
function K(e) {
    let { channel: t, closePopout: n, sticker: r } = e;
    return (0, a.jsx)(I.W_, {
        className: P.popoutContent,
        children: (0, a.jsx)(Y, {
            sticker: r,
            description: M.Z.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                openPremiumSettings: () => {
                    n(), H(t);
                }
            })
        })
    });
}
let z = (e) => {
    let { renderableSticker: t, channel: n, closePopout: r, refreshPositionKey: i } = e,
        [o, s] = (0, O.XW)(t, !0);
    if (null != o && (0, C.jl)(o))
        return (0, a.jsx)(j, {
            sticker: o,
            closePopout: r,
            channel: n,
            refreshPositionKey: i
        });
    if (null != o && (0, C.J8)(o))
        return (0, a.jsx)(W, {
            sticker: o,
            channel: n,
            closePopout: r,
            refreshPositionKey: i
        });
    if (!s) return (0, a.jsx)(I.SE, {});
    else if (s && null == o)
        return (0, a.jsx)(K, {
            channel: n,
            closePopout: r,
            sticker: t
        });
    return r(), null;
};
t.Z = z;
