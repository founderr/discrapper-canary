var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(399606),
    o = n(481060),
    c = n(287734),
    u = n(654904),
    d = n(314897),
    h = n(271383),
    p = n(496675),
    m = n(19780),
    _ = n(594174),
    f = n(626135),
    E = n(906605),
    g = n(574176),
    C = n(833858),
    I = n(866071),
    x = n(223135),
    T = n(625938),
    N = n(981631),
    S = n(689938),
    v = n(803565);
t.Z = (e) => {
    let { hangStatusActivity: t, userId: s, channel: Z, previewIsOpen: A } = e,
        { enableHangStatus: M } = g.n.useExperiment({
            guildId: Z.guild_id,
            location: 'HangStatusPopout'
        }),
        b = (0, r.e7)([d.default], () => d.default.getId()),
        R = (0, r.e7)([_.default], () => _.default.getUser(s)),
        L = (0, r.e7)([m.Z], () => m.Z.getChannelId() === Z.id),
        j = (0, r.e7)([p.Z], () => p.Z.can(N.Plq.CONNECT, Z)),
        O = (null == t ? void 0 : t.emoji) == null || (0, I.K)(t.emoji, Z),
        P = (0, r.e7)([h.ZP], () => (null != Z.guild_id && null != R ? h.ZP.getMember(Z.guild_id, s) : null)),
        y = a.useMemo(() => (null != R ? (0, u.SG)(void 0, P, R, { size: 40 }) : void 0), [P, R]);
    return (a.useEffect(() => {
        (0, E.UP)();
    }, []),
    a.useEffect(() => {
        M &&
            null != t &&
            A &&
            null != R &&
            b !== s &&
            f.default.track(N.rMx.VIEW_HANG_STATUS, {
                source: 'HangStatusPopout',
                guild_id: Z.guild_id,
                channel_id: Z.id
            });
    }, [M, t, A, R, b, s, Z]),
    M && null != R)
        ? b === s
            ? (0, i.jsx)('div', {
                  className: l()(v.popoutWrapper, { [v.mounted]: A }),
                  children: (0, i.jsx)(T.y, {
                      currentStatus: t,
                      channel: Z
                  })
              })
            : null == t
              ? null
              : (0, i.jsx)('div', {
                    className: l()(v.popoutWrapper, { [v.mounted]: A }),
                    children: (0, i.jsxs)('div', {
                        className: v.popout,
                        children: [
                            (0, i.jsxs)('div', {
                                className: v.contentContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: v.statusGroup,
                                        children: [
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-muted',
                                                children: S.Z.Messages.STATUS_LEAD_IN_JUST
                                            }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-sm/semibold',
                                                color: 'text-normal',
                                                className: v.statusText,
                                                children: (0, C.O8)(t)
                                            })
                                        ]
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: v.iconGroup,
                                        children: [
                                            (0, i.jsx)(x.Z, {
                                                className: v.statusIcon,
                                                hangStatusActivity: t
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: v.avatarWrapper,
                                                children: [
                                                    (0, i.jsx)(o.Avatar, {
                                                        className: v.avatar,
                                                        size: o.AvatarSizes.SIZE_40,
                                                        src: y,
                                                        'aria-hidden': !0
                                                    }),
                                                    (0, i.jsx)('div', { className: v.outline })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !L && j
                                ? (0, i.jsx)(o.Button, {
                                      className: v.cta,
                                      size: o.Button.Sizes.SMALL,
                                      onClick: () => {
                                          !L &&
                                              j &&
                                              (c.default.selectVoiceChannel(Z.id),
                                              f.default.track(N.rMx.HANG_STATUS_CTA_CLICKED, {
                                                  source: 'HangStatusPopout',
                                                  guild_id: Z.guild_id,
                                                  channel_id: Z.id
                                              }));
                                      },
                                      children: S.Z.Messages.CUSTOM_HANG_STATUS_CTA
                                  })
                                : null,
                            L && O
                                ? (0, i.jsx)(o.Button, {
                                      className: v.cta,
                                      size: o.Button.Sizes.SMALL,
                                      onClick: () => {
                                          let e = t.state;
                                          e === N.tNA.CUSTOM
                                              ? (0, o.openModalLazy)(async () => {
                                                    let { default: e } = await n.e('1631').then(n.bind(n, 333541));
                                                    return (n) =>
                                                        (0, i.jsx)(e, {
                                                            ...n,
                                                            startingText: t.details,
                                                            startingEmoji: t.emoji
                                                        });
                                                })
                                              : (0, E.Zx)(e, !0),
                                              f.default.track(N.rMx.SWIPE_HANG_STATUS, {
                                                  guild_id: Z.guild_id,
                                                  channel_id: Z.id,
                                                  media_session_id: m.Z.getMediaSessionId()
                                              });
                                      },
                                      children: S.Z.Messages.CUSTOM_HANGS_STATUS_COPY_CTA
                                  })
                                : null
                        ]
                    })
                })
        : null;
};
