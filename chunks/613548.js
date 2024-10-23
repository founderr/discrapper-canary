n.d(t, {
    Z: function () {
        return Y;
    }
}),
    n(653041);
var i = n(200651),
    s = n(192379),
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
    _ = n(540059),
    f = n(569545),
    E = n(517525),
    g = n(665149),
    C = n(6242),
    I = n(757692),
    T = n(933843),
    x = n(141321),
    S = n(2818),
    v = n(954551),
    N = n(44136),
    A = n(651183),
    Z = n(618158),
    M = n(390322),
    b = n(616286),
    R = n(961048),
    L = n(179424),
    j = n(786915),
    P = n(975146),
    O = n(991617),
    y = n(597998),
    D = n(606304),
    U = n(594174),
    k = n(358221),
    w = n(887012),
    B = n(444253),
    H = n(355827),
    G = n(354459),
    V = n(981631),
    F = n(689938),
    W = n(438337);
function z(e) {
    let { channelId: t, guildId: n } = e,
        s = (0, u.Wu)([D.Z, k.Z], () => {
            let e = Date.now();
            return o()(D.Z.getSpeakers())
                .map((e) => k.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === G.fO.USER && e.speaking && !(0, N.ZP)(e))
                .sortBy((t) => -D.Z.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === s.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: s.map((e, t) =>
                  (0, i.jsx)(
                      d.Tooltip,
                      {
                          position: 'bottom',
                          color: d.Tooltip.Colors.GREY,
                          text: F.Z.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({ username: e.user.username }),
                          children: (a) =>
                              (0, i.jsx)(y.Z, {
                                  ...a,
                                  className: l()(W.speaker, { [W.last]: t === s.length - 1 }),
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
function Y(e) {
    let { inPopout: t, channel: n, appContext: a, inCall: l, isChatOpen: r, exitFullScreen: o } = e,
        N = n.id,
        {
            voiceParticipantsHidden: y,
            selectedParticipant: D,
            userParticipantCount: F
        } = (0, u.cj)(
            [k.Z],
            () => ({
                selectedParticipant: k.Z.getSelectedParticipant(N),
                voiceParticipantsHidden: k.Z.getVoiceParticipantsHidden(N),
                userParticipantCount: k.Z.getUserParticipantCount(N)
            }),
            [N]
        ),
        Y = (0, u.e7)([U.default], () => U.default.getCurrentUser()),
        K = (0, w.Z)(n),
        q = (0, T.So)(c.q.STREAM_HIGH_QUALITY),
        X = (0, I.o)(D, Y),
        J = (0, C.lL)('CallHeader', !0, Y, X),
        { enabled: Q, inInbox: $ } = S.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        ee = (0, _.Q)('ChannelCallHeaderToolbar'),
        { preventIdle: et, allowIdle: en } = (0, Z.Y)('popup'),
        ei = [];
    if (K) {
        let e = (null == D ? void 0 : D.type) === G.fO.STREAM ? (0, f.my)(D.id) : void 0,
            t = (null == D ? void 0 : D.type) === G.fO.ACTIVITY ? D.id : void 0;
        ei.push(
            (0, i.jsx)(
                j.Z,
                {
                    className: W.button,
                    channel: n,
                    applicationId: t,
                    stream: e,
                    exitFullScreen: o,
                    analyticsLocation: n.type === V.d4z.GUILD_VOICE ? V.ZY5.GUILD_CHANNEL : V.ZY5.DM_CHANNEL
                },
                'invite-button'
            )
        );
    }
    return (
        y &&
            ei.push(
                (0, i.jsx)(
                    z,
                    {
                        channelId: N,
                        guildId: n.guild_id
                    },
                    'current-speaker'
                )
            ),
        ei.push(
            (0, i.jsx)(
                p.Z,
                {
                    className: W.button,
                    channelId: N
                },
                'clips-enabled-indicator'
            )
        ),
        (null == D ? void 0 : D.type) === G.fO.STREAM &&
            (ei.push(
                (0, i.jsx)(
                    A.Z,
                    {
                        className: W.button,
                        participant: D
                    },
                    'warning'
                )
            ),
            ei.push(
                (0, i.jsx)(
                    E.Z,
                    {
                        size: h.ZP.Sizes.LARGE,
                        className: W.button,
                        participant: D,
                        showQuality: !0,
                        premiumIndicator: q || J.enabled
                    },
                    'live-indicator'
                )
            )),
        y &&
            ei.push(
                (0, i.jsx)(
                    d.Popout,
                    {
                        position: 'bottom',
                        renderPopout: () => (0, i.jsx)(M.Z, { children: (0, i.jsx)(H.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, s.createElement)(P.Z, {
                                ...e,
                                isActive: n,
                                count: F,
                                key: 'call-members',
                                className: W.button
                            });
                        }
                    },
                    'call-members-popout'
                )
            ),
        l &&
            ei.push(
                null != D
                    ? (0, i.jsx)(
                          L.Z,
                          {
                              className: W.button,
                              channelId: N
                          },
                          'deselect-participant'
                      )
                    : (0, i.jsx)(
                          O.Z,
                          {
                              className: W.button,
                              channelId: N,
                              isHorizontal: !0
                          },
                          'select-participant'
                      )
            ),
        !t && ei.push((0, i.jsx)(m.Z, { className: W.button }, 'clips')),
        !ee &&
            ei.push(
                (0, i.jsx)(
                    x.Z,
                    {
                        onOpen: et,
                        onClose: en,
                        className: W.button
                    },
                    'recents'
                )
            ),
        Q && !$ && ei.push((0, i.jsx)(v.Z, { className: W.button }, 'for-later')),
        ei.push(
            (0, i.jsx)(
                d.Popout,
                {
                    position: 'bottom',
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(M.Z, {
                            children: (0, i.jsx)(B.Z, {
                                channelId: N,
                                onClose: t,
                                appContext: a,
                                exitFullScreen: o
                            })
                        });
                    },
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, s.createElement)(R.Z, {
                            ...e,
                            key: 'more-options',
                            isActive: n,
                            className: W.lastButton
                        });
                    }
                },
                'more-options-popout'
            )
        ),
        !r &&
            (ei.push((0, i.jsx)(g.ZP.Divider, { className: W.divider }, 'divider')),
            ei.push(
                (0, i.jsx)(
                    b.T,
                    {
                        channelId: n.id,
                        className: W.chatButtonSpacer,
                        disabled: !0
                    },
                    'chat-spacer'
                )
            )),
        (0, i.jsx)(i.Fragment, { children: ei })
    );
}
