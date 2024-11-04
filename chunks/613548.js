n.d(t, {
    Z: function () {
        return Y;
    }
}),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(392711),
    o = n.n(a),
    c = n(848246),
    u = n(442837),
    d = n(481060),
    h = n(194082),
    m = n(320007),
    p = n(236091),
    f = n(540059),
    g = n(569545),
    C = n(517525),
    x = n(665149),
    v = n(6242),
    _ = n(757692),
    I = n(933843),
    E = n(141321),
    b = n(2818),
    S = n(954551),
    Z = n(44136),
    T = n(651183),
    N = n(618158),
    j = n(390322),
    A = n(616286),
    y = n(961048),
    P = n(179424),
    M = n(786915),
    R = n(975146),
    L = n(991617),
    k = n(597998),
    O = n(606304),
    w = n(594174),
    D = n(358221),
    U = n(887012),
    B = n(444253),
    H = n(355827),
    F = n(354459),
    G = n(981631),
    V = n(388032),
    z = n(438337);
function W(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, u.Wu)([O.Z, D.Z], () => {
            let e = Date.now();
            return o()(O.Z.getSpeakers())
                .map((e) => D.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === F.fO.USER && e.speaking && !(0, Z.ZP)(e))
                .sortBy((t) => -O.Z.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: l.map((e, t) =>
                  (0, i.jsx)(
                      d.Tooltip,
                      {
                          position: 'bottom',
                          color: d.Tooltip.Colors.GREY,
                          text: V.intl.formatToPlainString(V.t.JjdizM, { username: e.user.username }),
                          children: (r) =>
                              (0, i.jsx)(k.Z, {
                                  ...r,
                                  className: s()(z.speaker, { [z.last]: t === l.length - 1 }),
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
    let { inPopout: t, channel: n, appContext: r, inCall: s, isChatOpen: a, exitFullScreen: o } = e,
        Z = n.id,
        {
            voiceParticipantsHidden: k,
            selectedParticipant: O,
            userParticipantCount: V
        } = (0, u.cj)(
            [D.Z],
            () => ({
                selectedParticipant: D.Z.getSelectedParticipant(Z),
                voiceParticipantsHidden: D.Z.getVoiceParticipantsHidden(Z),
                userParticipantCount: D.Z.getUserParticipantCount(Z)
            }),
            [Z]
        ),
        Y = (0, u.e7)([w.default], () => w.default.getCurrentUser()),
        K = (0, U.Z)(n),
        q = (0, I.So)(c.q.STREAM_HIGH_QUALITY),
        X = (0, _.o)(O, Y),
        J = (0, v.lL)('CallHeader', !0, Y, X),
        { enabled: Q, inInbox: $ } = b.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        ee = (0, f.Q)('ChannelCallHeaderToolbar'),
        { preventIdle: et, allowIdle: en } = (0, N.Y)('popup'),
        ei = [];
    if (K) {
        let e = (null == O ? void 0 : O.type) === F.fO.STREAM ? (0, g.my)(O.id) : void 0,
            t = (null == O ? void 0 : O.type) === F.fO.ACTIVITY ? O.id : void 0;
        ei.push(
            (0, i.jsx)(
                M.Z,
                {
                    className: z.button,
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
        k &&
            ei.push(
                (0, i.jsx)(
                    W,
                    {
                        channelId: Z,
                        guildId: n.guild_id
                    },
                    'current-speaker'
                )
            ),
        ei.push(
            (0, i.jsx)(
                p.Z,
                {
                    className: z.button,
                    channelId: Z
                },
                'clips-enabled-indicator'
            )
        ),
        (null == O ? void 0 : O.type) === F.fO.STREAM &&
            (ei.push(
                (0, i.jsx)(
                    T.Z,
                    {
                        className: z.button,
                        participant: O
                    },
                    'warning'
                )
            ),
            ei.push(
                (0, i.jsx)(
                    C.Z,
                    {
                        size: h.ZP.Sizes.LARGE,
                        className: z.button,
                        participant: O,
                        showQuality: !0,
                        premiumIndicator: q || J.enabled
                    },
                    'live-indicator'
                )
            )),
        k &&
            ei.push(
                (0, i.jsx)(
                    d.Popout,
                    {
                        position: 'bottom',
                        renderPopout: () => (0, i.jsx)(j.Z, { children: (0, i.jsx)(H.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(R.Z, {
                                ...e,
                                isActive: n,
                                count: V,
                                key: 'call-members',
                                className: z.button
                            });
                        }
                    },
                    'call-members-popout'
                )
            ),
        s &&
            ei.push(
                null != O
                    ? (0, i.jsx)(
                          P.Z,
                          {
                              className: z.button,
                              channelId: Z
                          },
                          'deselect-participant'
                      )
                    : (0, i.jsx)(
                          L.Z,
                          {
                              className: z.button,
                              channelId: Z,
                              isHorizontal: !0
                          },
                          'select-participant'
                      )
            ),
        !t && ei.push((0, i.jsx)(m.Z, { className: z.button }, 'clips')),
        !ee &&
            ei.push(
                (0, i.jsx)(
                    E.Z,
                    {
                        onOpen: et,
                        onClose: en,
                        className: z.button
                    },
                    'recents'
                )
            ),
        Q && !$ && ei.push((0, i.jsx)(S.Z, { className: z.button }, 'for-later')),
        ei.push(
            (0, i.jsx)(
                d.Popout,
                {
                    position: 'bottom',
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(j.Z, {
                            children: (0, i.jsx)(B.Z, {
                                channelId: Z,
                                onClose: t,
                                appContext: r,
                                exitFullScreen: o
                            })
                        });
                    },
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, l.createElement)(y.Z, {
                            ...e,
                            key: 'more-options',
                            isActive: n,
                            className: z.lastButton
                        });
                    }
                },
                'more-options-popout'
            )
        ),
        !a &&
            (ei.push((0, i.jsx)(x.ZP.Divider, { className: z.divider }, 'divider')),
            ei.push(
                (0, i.jsx)(
                    A.T,
                    {
                        channelId: n.id,
                        className: z.chatButtonSpacer,
                        disabled: !0
                    },
                    'chat-spacer'
                )
            )),
        (0, i.jsx)(i.Fragment, { children: ei })
    );
}
