t.d(s, {
    Z: function () {
        return f;
    },
    r: function () {
        return M;
    }
}),
    t(653041),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(212433),
    r = t(399606),
    o = t(481060),
    l = t(607070),
    c = t(158153),
    d = t(280942),
    _ = t(314684),
    u = t(209747),
    E = t(430824),
    T = t(267642),
    S = t(709054),
    I = t(357956),
    N = t(275909),
    m = t(300037),
    C = t(981631),
    A = t(474936),
    g = t(689938),
    h = t(210849);
function O(e) {
    let { guildTier: s, guildBoostSlot: t, showAltText: r, isCanceled: l, premiumSubscription: c } = e,
        d = a.useMemo(() => {
            if (l) return g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({ date: c.currentPeriodEnd });
            let e = null != t.premiumGuildSubscription ? S.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_DURATION_SHORTENED.format({ date: new Date(e) });
        }, [t, l, c]),
        _ = a.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === C.Eu4.NONE) return '';
                    let s = [
                        g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_EMOJI_SLOTS.format({ numEmojiSlots: A.HO[e].limits.emoji }),
                        g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STICKER_SLOTS.format({ numStickerSlots: A.HO[e].limits.stickers }),
                        g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_SOUNDBOARD_SLOTS.format({ numSoundboardSlots: A.HO[e].limits.soundboardSounds }),
                        g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STREAM_QUALITY.format({
                            resolution: A.HO[e].limits.screenShareQualityResolution,
                            framerate: A.HO[e].limits.screenShareQualityFramerate
                        }),
                        g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_AUDIO_QUALITY.format({ bitrate: A.HO[e].limits.bitrate / 1000 }),
                        g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_UPLOAD_SIZE_LIMIT.format({ filesize: A.HO[e].limits.fileSize / 1024 / 1024 }),
                        g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VIDEO_STAGE_SEATS.format({ numVideoStageSeats: A.HO[e].limits.stageVideoUsers }),
                        g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_ANIMATED_GUILD_ICON,
                        g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_INVITE_BACKGROUND
                    ];
                    e >= C.Eu4.TIER_2 && (s.push(g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_BANNER), s.push(g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_CUSTOM_ROLE_ICONS)), e >= C.Eu4.TIER_3 && s.push(g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VANITY_URL);
                    let t = s[Math.floor(Math.random() * s.length)];
                    return g.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_TEMPLATE.format({ perk: t });
                })(s),
            [s]
        ),
        u = (0, o.useTransition)(
            r,
            {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            'animate-always'
        );
    return l || s === C.Eu4.NONE
        ? (0, n.jsx)('div', {
              className: h.boostDescriptionInnerContainer,
              children: (0, n.jsx)(o.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-muted',
                  children: d
              })
          })
        : u((e, s) =>
              (0, n.jsx)(i.animated.div, {
                  style: e,
                  className: h.boostDescriptionInnerContainer,
                  children: (0, n.jsx)(o.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-muted',
                      children: s ? _ : d
                  })
              })
          );
}
function p(e) {
    let { guildTier: s, guildBoostSlot: t, premiumSubscription: i, hasCancelableGuildBoostSlot: c, showAltText: _, isLastGuildBoostSlot: u } = e,
        E = (0, r.e7)([l.Z], () => l.Z.useReducedMotion),
        S = a.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        m = a.useMemo(() => null != S && S > new Date(), [S]),
        C = (0, T.tl)(t);
    return (0, n.jsxs)('div', {
        className: h.boostContainer,
        children: [
            (0, n.jsxs)('div', {
                className: h.boostInnerContainer,
                children: [
                    (0, n.jsx)(N.Z, {
                        isCanceled: C,
                        hasCooldown: m,
                        useReducedMotion: E
                    }),
                    (0, n.jsx)('div', {
                        className: h.boostDescriptionContainer,
                        children:
                            null != S && m && !C
                                ? (0, n.jsx)(I.Z, {
                                      className: h.boostDescriptionInnerContainer,
                                      cooldown: S.getTime()
                                  })
                                : (0, n.jsx)(O, {
                                      guildTier: s,
                                      guildBoostSlot: t,
                                      showAltText: _,
                                      isCanceled: C,
                                      premiumSubscription: i
                                  })
                    }),
                    (0, n.jsx)(o.Popout, {
                        renderPopout: function (e) {
                            let { closePopout: s } = e;
                            return (0, n.jsx)(d.Z, {
                                onClose: s,
                                guildBoostSlot: t,
                                premiumSubscription: i,
                                hasCancelableGuildBoostSlot: c
                            });
                        },
                        position: 'right',
                        align: 'center',
                        children: (e) =>
                            (0, n.jsx)(o.Clickable, {
                                ...e,
                                'aria-label': g.Z.Messages.MORE_OPTIONS,
                                className: h.boostSlotMenuIcon,
                                children: (0, n.jsx)(o.MoreVerticalIcon, {
                                    size: 'md',
                                    color: 'currentColor'
                                })
                            })
                    })
                ]
            }),
            !u && (0, n.jsx)('div', { className: h.boostContainerSeparator })
        ]
    });
}
function R(e) {
    let { guildId: s, guildBoostSlotRecords: t, premiumSubscription: a, hasCancelableGuildBoostSlot: i, showAltText: o } = e,
        l = (0, r.e7)([E.Z], () => E.Z.getGuild(s), [s]);
    return (0, n.jsxs)('div', {
        className: h.appliedBoostContainer,
        children: [
            (0, n.jsx)(m.Z, {
                guildId: s,
                boostingVariant: !1
            }),
            t.map((e, s) =>
                (0, n.jsx)(
                    p,
                    {
                        guildTier: null == l ? void 0 : l.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: a,
                        hasCancelableGuildBoostSlot: i,
                        showAltText: o,
                        isLastGuildBoostSlot: s === t.length - 1
                    },
                    e.id
                )
            )
        ]
    });
}
function x(e) {
    let { guildId: s, appliedGuildBoosts: t, premiumSubscription: a } = e,
        i = (0, r.e7)([E.Z], () => E.Z.getGuild(s), [s]),
        o = S.default.fromTimestamp(Date.now());
    if (
        (t.forEach((e) => {
            (null == o || 0 > S.default.compare(e.id, o)) && (o = e.id);
        }),
        null == o)
    )
        return null;
    let l = u.Z.createFromServer(
        {
            id: S.default.fromTimestamp(Date.now()),
            subscription_id: a.id,
            canceled: !1,
            premium_guild_subscription: {
                id: o,
                guild_id: s
            },
            cooldown_ends_at: null
        },
        a
    );
    return (0, n.jsxs)('div', {
        className: h.appliedBoostContainer,
        children: [
            (0, n.jsx)(m.Z, {
                guildId: s,
                boostingVariant: !1
            }),
            t.map((e, s) =>
                (0, n.jsx)(
                    p,
                    {
                        guildTier: null == i ? void 0 : i.premiumTier,
                        guildBoostSlot: l,
                        premiumSubscription: a,
                        hasCancelableGuildBoostSlot: !1,
                        showAltText: !1,
                        isLastGuildBoostSlot: s === t.length - 1
                    },
                    s
                )
            )
        ]
    });
}
function M(e) {
    let { appliedGuildBoosts: s, premiumSubscription: t } = e,
        i = a.useMemo(() => {
            let e = {};
            return (
                s.forEach((s) => {
                    let t = s.guildId;
                    !(t in e) && (e[t] = []), e[t].push(s);
                }),
                e
            );
        }, [s]);
    return null == t || 0 === s.length
        ? null
        : (0, n.jsxs)('div', {
              className: h.wrapper,
              children: [
                  (0, n.jsx)('div', {
                      className: h.container,
                      children: S.default.keys(i).map((e) =>
                          (0, n.jsx)(
                              x,
                              {
                                  guildId: e,
                                  premiumSubscription: t,
                                  appliedGuildBoosts: i[e]
                              },
                              e
                          )
                      )
                  }),
                  (0, n.jsx)('div', { className: h.mainSeparator })
              ]
          });
}
function f(e) {
    let { guildBoostSlots: s, premiumSubscription: t } = e,
        [i, r] = a.useState(!1),
        o = (0, _.Vp)();
    a.useEffect(() => {
        let e = -1;
        return (
            null != t &&
                (e = setInterval(() => {
                    r((e) => !e);
                }, 3000)),
            () => {
                clearInterval(e);
            }
        );
    }, [t]);
    let { boostsByGuildId: l, numActiveGuildBoostSlots: d } = a.useMemo(() => {
        let e = 0,
            t = {};
        return (
            Object.keys(s).forEach((n) => {
                let a = s[n];
                if ((!(0, T.tl)(a) && e++, null != a.premiumGuildSubscription)) {
                    let e = a.premiumGuildSubscription.guildId;
                    !(e in t) && (t[e] = []), t[e].push(a);
                }
            }),
            {
                boostsByGuildId: t,
                numActiveGuildBoostSlots: e
            }
        );
    }, [s]);
    if (null == t || 0 === Object.keys(l).length) return null;
    let u = d > (0, c.G)(t, o);
    return (0, n.jsxs)('div', {
        className: h.wrapper,
        children: [
            (0, n.jsx)('div', {
                className: h.container,
                children: S.default.keys(l).map((e) =>
                    (0, n.jsx)(
                        R,
                        {
                            guildId: e,
                            guildBoostSlotRecords: l[e],
                            premiumSubscription: t,
                            hasCancelableGuildBoostSlot: u,
                            showAltText: i
                        },
                        e
                    )
                )
            }),
            (0, n.jsx)('div', { className: h.mainSeparator })
        ]
    });
}
