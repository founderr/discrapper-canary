n.d(t, {
    Z: function () {
        return z;
    }
}),
    n(653041);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(392711),
    o = n.n(r),
    c = n(848246),
    u = n(442837),
    d = n(481060),
    h = n(194082),
    m = n(320007),
    p = n(236091),
    _ = n(569545),
    f = n(517525),
    E = n(665149),
    g = n(6242),
    C = n(757692),
    I = n(933843),
    T = n(141321),
    x = n(2818),
    S = n(954551),
    v = n(44136),
    N = n(651183),
    A = n(618158),
    Z = n(390322),
    M = n(616286),
    b = n(961048),
    R = n(179424),
    L = n(786915),
    j = n(975146),
    P = n(991617),
    O = n(597998),
    y = n(606304),
    D = n(594174),
    U = n(358221),
    k = n(887012),
    w = n(444253),
    B = n(355827),
    H = n(354459),
    G = n(981631),
    V = n(689938),
    F = n(438337);
function W(e) {
    let { channelId: t, guildId: n } = e,
        s = Date.now(),
        a = (0, u.e7)([y.Z, U.Z], () =>
            o()(y.Z.getSpeakers())
                .map((e) => U.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === H.fO.USER && e.speaking && !(0, v.ZP)(e))
                .sortBy((e) => -y.Z.getSpeakingDuration(e.user.id, s))
                .slice(0, 3)
                .value()
        );
    return 0 === a.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: a.map((e, t) =>
                  (0, i.jsx)(
                      d.Tooltip,
                      {
                          position: 'bottom',
                          color: d.Tooltip.Colors.GREY,
                          text: V.Z.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({ username: e.user.username }),
                          children: (s) =>
                              (0, i.jsx)(O.Z, {
                                  ...s,
                                  className: l()(F.speaker, { [F.last]: t === a.length - 1 }),
                                  user: e.user,
                                  speaking: !0,
                                  collapsed: !0,
                                  guildId: n
                              })
                      },
                      e.id
                  )
              )
          });
}
function z(e) {
    let { inPopout: t, channel: n, appContext: a, inCall: l, isChatOpen: r, exitFullScreen: o } = e,
        v = n.id,
        {
            voiceParticipantsHidden: O,
            selectedParticipant: y,
            userParticipantCount: V
        } = (0, u.cj)(
            [U.Z],
            () => ({
                selectedParticipant: U.Z.getSelectedParticipant(v),
                voiceParticipantsHidden: U.Z.getVoiceParticipantsHidden(v),
                userParticipantCount: U.Z.getUserParticipantCount(v)
            }),
            [v]
        ),
        z = (0, u.e7)([D.default], () => D.default.getCurrentUser()),
        Y = (0, k.Z)(n),
        K = (0, I.So)(c.q.STREAM_HIGH_QUALITY),
        q = (0, C.o)(y, z),
        X = (0, g.lL)('CallHeader', !0, z, q),
        { enabled: J, inInbox: Q } = x.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        { preventIdle: $, allowIdle: ee } = (0, A.Y)('popup'),
        et = [];
    if (Y) {
        let e = (null == y ? void 0 : y.type) === H.fO.STREAM ? (0, _.my)(y.id) : void 0,
            t = (null == y ? void 0 : y.type) === H.fO.ACTIVITY ? y.id : void 0;
        et.push(
            (0, i.jsx)(
                L.Z,
                {
                    className: F.button,
                    channel: n,
                    applicationId: t,
                    stream: e,
                    exitFullScreen: o,
                    analyticsLocation: n.type === G.d4z.GUILD_VOICE ? G.ZY5.GUILD_CHANNEL : G.ZY5.DM_CHANNEL
                },
                'invite-button'
            )
        );
    }
    return (
        O &&
            et.push(
                (0, i.jsx)(
                    W,
                    {
                        channelId: v,
                        guildId: n.guild_id
                    },
                    'current-speaker'
                )
            ),
        et.push(
            (0, i.jsx)(
                p.Z,
                {
                    className: F.button,
                    channelId: v
                },
                'clips-enabled-indicator'
            )
        ),
        (null == y ? void 0 : y.type) === H.fO.STREAM &&
            (et.push(
                (0, i.jsx)(
                    N.Z,
                    {
                        className: F.button,
                        participant: y
                    },
                    'warning'
                )
            ),
            et.push(
                (0, i.jsx)(
                    f.Z,
                    {
                        size: h.ZP.Sizes.LARGE,
                        className: F.button,
                        participant: y,
                        showQuality: !0,
                        premiumIndicator: K || X.enabled
                    },
                    'live-indicator'
                )
            )),
        O &&
            et.push(
                (0, i.jsx)(
                    d.Popout,
                    {
                        position: 'bottom',
                        renderPopout: () => (0, i.jsx)(Z.Z, { children: (0, i.jsx)(B.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, s.createElement)(j.Z, {
                                ...e,
                                isActive: n,
                                count: V,
                                key: 'call-members',
                                className: F.button
                            });
                        }
                    },
                    'call-members-popout'
                )
            ),
        l &&
            et.push(
                null != y
                    ? (0, i.jsx)(
                          R.Z,
                          {
                              className: F.button,
                              channelId: v
                          },
                          'deselect-participant'
                      )
                    : (0, i.jsx)(
                          P.Z,
                          {
                              className: F.button,
                              channelId: v,
                              isHorizontal: !0
                          },
                          'select-participant'
                      )
            ),
        !t && et.push((0, i.jsx)(m.Z, { className: F.button }, 'clips')),
        et.push(
            (0, i.jsx)(
                T.Z,
                {
                    onOpen: $,
                    onClose: ee,
                    className: F.button
                },
                'recents'
            )
        ),
        J && !Q && et.push((0, i.jsx)(S.Z, { className: F.button }, 'for-later')),
        et.push(
            (0, i.jsx)(
                d.Popout,
                {
                    position: 'bottom',
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(Z.Z, {
                            children: (0, i.jsx)(w.Z, {
                                channelId: v,
                                onClose: t,
                                appContext: a,
                                exitFullScreen: o
                            })
                        });
                    },
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, s.createElement)(b.Z, {
                            ...e,
                            key: 'more-options',
                            isActive: n,
                            className: F.lastButton
                        });
                    }
                },
                'more-options-popout'
            )
        ),
        !r &&
            (et.push((0, i.jsx)(E.ZP.Divider, { className: F.divider }, 'divider')),
            et.push(
                (0, i.jsx)(
                    M.T,
                    {
                        channelId: n.id,
                        className: F.chatButtonSpacer,
                        disabled: !0
                    },
                    'chat-spacer'
                )
            )),
        (0, i.jsx)(i.Fragment, { children: et })
    );
}
