var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(399606),
    o = n(481060),
    c = n(287734),
    u = n(654904),
    d = n(314897),
    h = n(271383),
    m = n(496675),
    p = n(19780),
    f = n(594174),
    g = n(626135),
    C = n(906605),
    x = n(574176),
    v = n(833858),
    _ = n(866071),
    I = n(223135),
    E = n(625938),
    b = n(981631),
    S = n(388032),
    Z = n(470154);
t.Z = (e) => {
    let { hangStatusActivity: t, userId: r, channel: T, previewIsOpen: N } = e,
        { enableHangStatus: j } = x.n.useExperiment({
            guildId: T.guild_id,
            location: 'HangStatusPopout'
        }),
        A = (0, a.e7)([d.default], () => d.default.getId()),
        y = (0, a.e7)([f.default], () => f.default.getUser(r)),
        P = (0, a.e7)([p.Z], () => p.Z.getChannelId() === T.id),
        M = (0, a.e7)([m.Z], () => m.Z.can(b.Plq.CONNECT, T)),
        R = (null == t ? void 0 : t.emoji) == null || (0, _.K)(t.emoji, T),
        L = (0, a.e7)([h.ZP], () => (null != T.guild_id && null != y ? h.ZP.getMember(T.guild_id, r) : null)),
        k = l.useMemo(() => (null != y ? (0, u.SG)(void 0, L, y, { size: 40 }) : void 0), [L, y]);
    return (l.useEffect(() => {
        (0, C.UP)();
    }, []),
    l.useEffect(() => {
        j &&
            null != t &&
            N &&
            null != y &&
            A !== r &&
            g.default.track(b.rMx.VIEW_HANG_STATUS, {
                source: 'HangStatusPopout',
                guild_id: T.guild_id,
                channel_id: T.id
            });
    }, [j, t, N, y, A, r, T]),
    j && null != y)
        ? A === r
            ? (0, i.jsx)('div', {
                  className: s()(Z.popoutWrapper, { [Z.mounted]: N }),
                  children: (0, i.jsx)(E.y, {
                      currentStatus: t,
                      channel: T
                  })
              })
            : null == t
              ? null
              : (0, i.jsx)('div', {
                    className: s()(Z.popoutWrapper, { [Z.mounted]: N }),
                    children: (0, i.jsxs)('div', {
                        className: Z.popout,
                        children: [
                            (0, i.jsxs)('div', {
                                className: Z.contentContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: Z.statusGroup,
                                        children: [
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-muted',
                                                children: S.intl.string(S.t['74vS//'])
                                            }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-sm/semibold',
                                                color: 'text-normal',
                                                className: Z.statusText,
                                                children: (0, v.O8)(t)
                                            })
                                        ]
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: Z.iconGroup,
                                        children: [
                                            (0, i.jsx)(I.Z, {
                                                className: Z.statusIcon,
                                                hangStatusActivity: t
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: Z.avatarWrapper,
                                                children: [
                                                    (0, i.jsx)(o.Avatar, {
                                                        className: Z.avatar,
                                                        size: o.AvatarSizes.SIZE_40,
                                                        src: k,
                                                        'aria-hidden': !0
                                                    }),
                                                    (0, i.jsx)('div', { className: Z.outline })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !P && M
                                ? (0, i.jsx)(o.Button, {
                                      className: Z.cta,
                                      size: o.Button.Sizes.SMALL,
                                      onClick: () => {
                                          !P &&
                                              M &&
                                              (c.default.selectVoiceChannel(T.id),
                                              g.default.track(b.rMx.HANG_STATUS_CTA_CLICKED, {
                                                  source: 'HangStatusPopout',
                                                  guild_id: T.guild_id,
                                                  channel_id: T.id
                                              }));
                                      },
                                      children: S.intl.string(S.t['B/dHXF'])
                                  })
                                : null,
                            P && R
                                ? (0, i.jsx)(o.Button, {
                                      className: Z.cta,
                                      size: o.Button.Sizes.SMALL,
                                      onClick: () => {
                                          let e = t.state;
                                          e === b.tNA.CUSTOM
                                              ? (0, o.openModalLazy)(async () => {
                                                    let { default: e } = await n.e('1631').then(n.bind(n, 333541));
                                                    return (n) =>
                                                        (0, i.jsx)(e, {
                                                            ...n,
                                                            startingText: t.details,
                                                            startingEmoji: t.emoji
                                                        });
                                                })
                                              : (0, C.Zx)(e, !0),
                                              g.default.track(b.rMx.SWIPE_HANG_STATUS, {
                                                  guild_id: T.guild_id,
                                                  channel_id: T.id,
                                                  media_session_id: p.Z.getMediaSessionId()
                                              });
                                      },
                                      children: S.intl.string(S.t.xcVcFR)
                                  })
                                : null
                        ]
                    })
                })
        : null;
};
