var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(399606),
    o = n(481060),
    c = n(287734),
    u = n(654904),
    d = n(314897),
    h = n(271383),
    m = n(496675),
    p = n(19780),
    _ = n(594174),
    f = n(626135),
    E = n(906605),
    g = n(574176),
    C = n(833858),
    I = n(866071),
    T = n(223135),
    x = n(625938),
    v = n(981631),
    S = n(689938),
    N = n(470154);
t.Z = (e) => {
    let { hangStatusActivity: t, userId: a, channel: A, previewIsOpen: Z } = e,
        { enableHangStatus: M } = g.n.useExperiment({
            guildId: A.guild_id,
            location: 'HangStatusPopout'
        }),
        b = (0, r.e7)([d.default], () => d.default.getId()),
        R = (0, r.e7)([_.default], () => _.default.getUser(a)),
        L = (0, r.e7)([p.Z], () => p.Z.getChannelId() === A.id),
        j = (0, r.e7)([m.Z], () => m.Z.can(v.Plq.CONNECT, A)),
        P = (null == t ? void 0 : t.emoji) == null || (0, I.K)(t.emoji, A),
        O = (0, r.e7)([h.ZP], () => (null != A.guild_id && null != R ? h.ZP.getMember(A.guild_id, a) : null)),
        y = s.useMemo(() => (null != R ? (0, u.SG)(void 0, O, R, { size: 40 }) : void 0), [O, R]);
    return (s.useEffect(() => {
        (0, E.UP)();
    }, []),
    s.useEffect(() => {
        M &&
            null != t &&
            Z &&
            null != R &&
            b !== a &&
            f.default.track(v.rMx.VIEW_HANG_STATUS, {
                source: 'HangStatusPopout',
                guild_id: A.guild_id,
                channel_id: A.id
            });
    }, [M, t, Z, R, b, a, A]),
    M && null != R)
        ? b === a
            ? (0, i.jsx)('div', {
                  className: l()(N.popoutWrapper, { [N.mounted]: Z }),
                  children: (0, i.jsx)(x.y, {
                      currentStatus: t,
                      channel: A
                  })
              })
            : null == t
              ? null
              : (0, i.jsx)('div', {
                    className: l()(N.popoutWrapper, { [N.mounted]: Z }),
                    children: (0, i.jsxs)('div', {
                        className: N.popout,
                        children: [
                            (0, i.jsxs)('div', {
                                className: N.contentContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: N.statusGroup,
                                        children: [
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-muted',
                                                children: S.Z.Messages.STATUS_LEAD_IN_JUST
                                            }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-sm/semibold',
                                                color: 'text-normal',
                                                className: N.statusText,
                                                children: (0, C.O8)(t)
                                            })
                                        ]
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: N.iconGroup,
                                        children: [
                                            (0, i.jsx)(T.Z, {
                                                className: N.statusIcon,
                                                hangStatusActivity: t
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: N.avatarWrapper,
                                                children: [
                                                    (0, i.jsx)(o.Avatar, {
                                                        className: N.avatar,
                                                        size: o.AvatarSizes.SIZE_40,
                                                        src: y,
                                                        'aria-hidden': !0
                                                    }),
                                                    (0, i.jsx)('div', { className: N.outline })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !L && j
                                ? (0, i.jsx)(o.Button, {
                                      className: N.cta,
                                      size: o.Button.Sizes.SMALL,
                                      onClick: () => {
                                          !L &&
                                              j &&
                                              (c.default.selectVoiceChannel(A.id),
                                              f.default.track(v.rMx.HANG_STATUS_CTA_CLICKED, {
                                                  source: 'HangStatusPopout',
                                                  guild_id: A.guild_id,
                                                  channel_id: A.id
                                              }));
                                      },
                                      children: S.Z.Messages.CUSTOM_HANG_STATUS_CTA
                                  })
                                : null,
                            L && P
                                ? (0, i.jsx)(o.Button, {
                                      className: N.cta,
                                      size: o.Button.Sizes.SMALL,
                                      onClick: () => {
                                          let e = t.state;
                                          e === v.tNA.CUSTOM
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
                                              f.default.track(v.rMx.SWIPE_HANG_STATUS, {
                                                  guild_id: A.guild_id,
                                                  channel_id: A.id,
                                                  media_session_id: p.Z.getMediaSessionId()
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
