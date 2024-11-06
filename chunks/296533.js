n.d(t, {
    Z: function () {
        return j;
    },
    r: function () {
        return v;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(100621),
    l = n(399606),
    a = n(481060),
    o = n(607070),
    c = n(158153),
    d = n(280942),
    u = n(314684),
    m = n(209747),
    h = n(430824),
    g = n(267642),
    p = n(709054),
    x = n(357956),
    S = n(275909),
    T = n(300037),
    C = n(981631),
    _ = n(474936),
    E = n(388032),
    f = n(210849);
function I(e) {
    let { guildTier: t, guildBoostSlot: n, showAltText: l, isCanceled: o, premiumSubscription: c } = e,
        d = s.useMemo(() => {
            if (o) return E.intl.format(E.t.Z4ULRE, { date: c.currentPeriodEnd });
            let e = null != n.premiumGuildSubscription ? p.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return E.intl.formatToPlainString(E.t.lY2Bur, { date: new Date(e) });
        }, [n, o, c]),
        u = s.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === C.Eu4.NONE) return '';
                    let t = [
                        E.intl.formatToPlainString(E.t.dLlKX1, { numEmojiSlots: _.HO[e].limits.emoji }),
                        E.intl.formatToPlainString(E.t['+ANIfn'], { numStickerSlots: _.HO[e].limits.stickers }),
                        E.intl.formatToPlainString(E.t['4gt60d'], { numSoundboardSlots: _.HO[e].limits.soundboardSounds }),
                        E.intl.formatToPlainString(E.t.XahSjY, {
                            resolution: _.HO[e].limits.screenShareQualityResolution,
                            framerate: _.HO[e].limits.screenShareQualityFramerate
                        }),
                        E.intl.formatToPlainString(E.t.NbNs7e, { bitrate: _.HO[e].limits.bitrate / 1000 }),
                        E.intl.formatToPlainString(E.t.VVKcpq, { filesize: _.HO[e].limits.fileSize / 1024 / 1024 }),
                        E.intl.formatToPlainString(E.t.TbpCvr, { numVideoStageSeats: _.HO[e].limits.stageVideoUsers }),
                        E.intl.string(E.t.LDyX3t),
                        E.intl.string(E.t.YtGlPT)
                    ];
                    e >= C.Eu4.TIER_2 && (t.push(E.intl.string(E.t.SztbtL)), t.push(E.intl.string(E.t['3GK91t']))), e >= C.Eu4.TIER_3 && t.push(E.intl.string(E.t.XUUJd3));
                    let n = t[Math.floor(Math.random() * t.length)];
                    return E.intl.format(E.t['/dOAmZ'], { perk: n });
                })(t),
            [t]
        ),
        m = (0, a.useTransition)(
            l,
            {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            'animate-always'
        );
    return o || t === C.Eu4.NONE
        ? (0, i.jsx)('div', {
              className: f.boostDescriptionInnerContainer,
              children: (0, i.jsx)(a.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-muted',
                  children: d
              })
          })
        : m((e, t) =>
              (0, i.jsx)(r.animated.div, {
                  style: e,
                  className: f.boostDescriptionInnerContainer,
                  children: (0, i.jsx)(a.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-muted',
                      children: t ? u : d
                  })
              })
          );
}
function N(e) {
    let { guildTier: t, guildBoostSlot: n, premiumSubscription: r, hasCancelableGuildBoostSlot: c, showAltText: u, isLastGuildBoostSlot: m } = e,
        h = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        p = s.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        T = s.useMemo(() => null != p && p > new Date(), [p]),
        C = (0, g.tl)(n);
    return (0, i.jsxs)('div', {
        className: f.boostContainer,
        children: [
            (0, i.jsxs)('div', {
                className: f.boostInnerContainer,
                children: [
                    (0, i.jsx)(S.Z, {
                        isCanceled: C,
                        hasCooldown: T,
                        useReducedMotion: h
                    }),
                    (0, i.jsx)('div', {
                        className: f.boostDescriptionContainer,
                        children:
                            null != p && T && !C
                                ? (0, i.jsx)(x.Z, {
                                      className: f.boostDescriptionInnerContainer,
                                      cooldown: p.getTime()
                                  })
                                : (0, i.jsx)(I, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: u,
                                      isCanceled: C,
                                      premiumSubscription: r
                                  })
                    }),
                    (0, i.jsx)(a.Popout, {
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(d.Z, {
                                onClose: t,
                                guildBoostSlot: n,
                                premiumSubscription: r,
                                hasCancelableGuildBoostSlot: c
                            });
                        },
                        position: 'right',
                        align: 'center',
                        children: (e) =>
                            (0, i.jsx)(a.Clickable, {
                                ...e,
                                'aria-label': E.intl.string(E.t.PdRCRk),
                                className: f.boostSlotMenuIcon,
                                children: (0, i.jsx)(a.MoreVerticalIcon, {
                                    size: 'md',
                                    color: 'currentColor'
                                })
                            })
                    })
                ]
            }),
            !m && (0, i.jsx)('div', { className: f.boostContainerSeparator })
        ]
    });
}
function b(e) {
    let { guildId: t, guildBoostSlotRecords: n, premiumSubscription: s, hasCancelableGuildBoostSlot: r, showAltText: a } = e,
        o = (0, l.e7)([h.Z], () => h.Z.getGuild(t), [t]);
    return (0, i.jsxs)('div', {
        className: f.appliedBoostContainer,
        children: [
            (0, i.jsx)(T.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    N,
                    {
                        guildTier: null == o ? void 0 : o.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: s,
                        hasCancelableGuildBoostSlot: r,
                        showAltText: a,
                        isLastGuildBoostSlot: t === n.length - 1
                    },
                    e.id
                )
            )
        ]
    });
}
function A(e) {
    let { guildId: t, appliedGuildBoosts: n, premiumSubscription: s } = e,
        r = (0, l.e7)([h.Z], () => h.Z.getGuild(t), [t]),
        a = p.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == a || 0 > p.default.compare(e.id, a)) && (a = e.id);
        }),
        null == a)
    )
        return null;
    let o = m.Z.createFromServer(
        {
            id: p.default.fromTimestamp(Date.now()),
            subscription_id: s.id,
            canceled: !1,
            premium_guild_subscription: {
                id: a,
                guild_id: t
            },
            cooldown_ends_at: null
        },
        s
    );
    return (0, i.jsxs)('div', {
        className: f.appliedBoostContainer,
        children: [
            (0, i.jsx)(T.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    N,
                    {
                        guildTier: null == r ? void 0 : r.premiumTier,
                        guildBoostSlot: o,
                        premiumSubscription: s,
                        hasCancelableGuildBoostSlot: !1,
                        showAltText: !1,
                        isLastGuildBoostSlot: t === n.length - 1
                    },
                    t
                )
            )
        ]
    });
}
function v(e) {
    let { appliedGuildBoosts: t, premiumSubscription: n } = e,
        r = s.useMemo(() => {
            let e = {};
            return (
                t.forEach((t) => {
                    let n = t.guildId;
                    !(n in e) && (e[n] = []), e[n].push(t);
                }),
                e
            );
        }, [t]);
    return null == n || 0 === t.length
        ? null
        : (0, i.jsxs)('div', {
              className: f.wrapper,
              children: [
                  (0, i.jsx)('div', {
                      className: f.container,
                      children: p.default.keys(r).map((e) =>
                          (0, i.jsx)(
                              A,
                              {
                                  guildId: e,
                                  premiumSubscription: n,
                                  appliedGuildBoosts: r[e]
                              },
                              e
                          )
                      )
                  }),
                  (0, i.jsx)('div', { className: f.mainSeparator })
              ]
          });
}
function j(e) {
    let { guildBoostSlots: t, premiumSubscription: n } = e,
        [r, l] = s.useState(!1),
        a = (0, u.Vp)();
    s.useEffect(() => {
        let e = -1;
        return (
            null != n &&
                (e = setInterval(() => {
                    l((e) => !e);
                }, 3000)),
            () => {
                clearInterval(e);
            }
        );
    }, [n]);
    let { boostsByGuildId: o, numActiveGuildBoostSlots: d } = s.useMemo(() => {
        let e = 0,
            n = {};
        return (
            Object.keys(t).forEach((i) => {
                let s = t[i];
                if ((!(0, g.tl)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    !(e in n) && (n[e] = []), n[e].push(s);
                }
            }),
            {
                boostsByGuildId: n,
                numActiveGuildBoostSlots: e
            }
        );
    }, [t]);
    if (null == n || 0 === Object.keys(o).length) return null;
    let m = d > (0, c.G)(n, a);
    return (0, i.jsxs)('div', {
        className: f.wrapper,
        children: [
            (0, i.jsx)('div', {
                className: f.container,
                children: p.default.keys(o).map((e) =>
                    (0, i.jsx)(
                        b,
                        {
                            guildId: e,
                            guildBoostSlotRecords: o[e],
                            premiumSubscription: n,
                            hasCancelableGuildBoostSlot: m,
                            showAltText: r
                        },
                        e
                    )
                )
            }),
            (0, i.jsx)('div', { className: f.mainSeparator })
        ]
    });
}
