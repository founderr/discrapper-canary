n.d(t, {
    Q: function () {
        return y;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(512722),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(475179),
    d = n(239091),
    u = n(872810),
    h = n(40851),
    p = n(358221),
    m = n(258609),
    f = n(569545),
    g = n(102172),
    C = n(352978),
    x = n(184301),
    _ = n(347475),
    v = n(199902),
    I = n(430824),
    E = n(496675),
    b = n(979651),
    Z = n(88751),
    N = n(252132),
    S = n(248400),
    T = n(981631),
    j = n(354459),
    A = n(716598);
let y = 16 / 9,
    P = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: a, guildId: r, user: s, width: c, isModerator: d, onContextMenu: u, inPopout: h } = e,
            { reducedMotion: p } = l.useContext(o.AccessibilityPreferencesContext),
            { blocked: m, id: f } = t;
        return (0, i.jsx)(o.Popout, {
            preload:
                null == n
                    ? void 0
                    : () =>
                          (0, x.Z)(n.user, {
                              guildId: a.guild_id,
                              channelId: a.id
                          }),
            renderPopout: (e) =>
                (0, i.jsx)(_.Z, {
                    ...e,
                    guildId: r,
                    channelId: a.id,
                    userId: s.id
                }),
            position: 'right',
            spacing: 8,
            children: (e) =>
                (0, i.jsx)(o.Clickable, {
                    onContextMenu: (e) => u(n, e),
                    ...e,
                    children: (0, i.jsx)(
                        N.Z,
                        {
                            participant: n,
                            aspectRatio: y,
                            blocked: m,
                            channel: a,
                            className: A.tile,
                            inCall: !0,
                            inPopout: h,
                            paused: !1,
                            pulseSpeakingIndicator: !p.enabled,
                            width: c,
                            children: d && (0, i.jsx)(S.Z, {})
                        },
                        f
                    )
                })
        });
    },
    M = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: a, width: r, isModerator: d, onContextMenu: h, inPopout: x } = e,
            { reducedMotion: _ } = l.useContext(o.AccessibilityPreferencesContext),
            { id: Z, blocked: P } = t,
            M = (0, s.Wu)([v.Z], () => v.Z.getAllActiveStreams(), []),
            { selectedParticipant: L, largeStream: R } = (0, s.cj)([p.Z], () => ({
                selectedParticipant: null != a ? p.Z.getSelectedParticipant(a.id) : null,
                largeStream: null != a && p.Z.getStageStreamSize(a.id)
            })),
            k = l.useCallback(
                (e, t) => {
                    if (e.type === j.fO.STREAM && 0 === M.filter((t) => (0, f.V9)(t) === e.id && t.state !== T.jm8.ENDED).length) {
                        if (!(0, g.p9)(a, b.Z, I.Z, E.Z, m.Z)[0]) return;
                        (0, u.rn)((0, f.my)(e.id), { forceMultiple: t.shiftKey });
                    }
                    (null == L ? void 0 : L.id) === e.id ? (R ? (c.Z.selectParticipant(a.id, null), c.Z.updateStageStreamSize(a.id, !1)) : c.Z.updateStageStreamSize(a.id, !0)) : (c.Z.updateStageStreamSize(a.id, !1), c.Z.selectParticipant(a.id, e.id));
                },
                [M, a, L, R]
            );
        return (0, i.jsx)(
            N.Z,
            {
                participant: n,
                aspectRatio: y,
                fit: n.type === j.fO.USER ? C.L.COVER : void 0,
                blocked: P,
                channel: a,
                className: A.tile,
                inCall: !0,
                inPopout: x,
                onClick: k,
                onContextMenu: h,
                paused: !1,
                pulseSpeakingIndicator: !_.enabled,
                width: r,
                children: d && n.type === j.fO.USER && (0, i.jsx)(S.Z, {})
            },
            Z
        );
    };
t.Z = l.memo(function (e) {
    var t;
    let { participant: l, channel: a, width: o } = e,
        c = (0, h.bp)(),
        u = a.getGuildId();
    r()(null != u, 'Channel cannot be guildless');
    let { user: m } = l,
        f = (0, s.e7)([p.Z], () => p.Z.getParticipant(a.id, l.id), [a.id, l.id]),
        g = (0, s.e7)([Z.ZP], () => Z.ZP.isModerator(m.id, a.id), [a.id, m.id]);
    if (null == f || f.type === j.fO.ACTIVITY) return null;
    let C = (e, t) => {
            switch (e.type) {
                case j.fO.HIDDEN_STREAM:
                case j.fO.STREAM:
                    (0, d.jW)(
                        t,
                        async () => {
                            let { default: t } = await n.e('50350').then(n.bind(n, 987281));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    ...n,
                                    stream: e.stream,
                                    appContext: c,
                                    exitFullscreen: () => {}
                                });
                        },
                        { context: c }
                    );
                    return;
                case j.fO.USER:
                default:
                    (0, d.jW)(
                        t,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('59458')]).then(n.bind(n, 757387));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    user: m,
                                    guildId: u,
                                    channel: a,
                                    showMediaItems: !0,
                                    showStageChannelItems: !0,
                                    showChatItems: !1
                                });
                        },
                        { context: c }
                    );
            }
        },
        x = f.type === j.fO.USER && !(null === (t = f.voiceState) || void 0 === t ? void 0 : t.selfVideo);
    return (0, i.jsx)(i.Fragment, {
        children: x
            ? (0, i.jsx)(P, {
                  stageParticipant: l,
                  rtcParticipant: f,
                  channel: a,
                  guildId: u,
                  user: m,
                  width: o,
                  isModerator: g,
                  onContextMenu: C,
                  inPopout: c === T.IlC.POPOUT
              })
            : (0, i.jsx)(M, {
                  stageParticipant: l,
                  rtcParticipant: f,
                  channel: a,
                  guildId: u,
                  user: m,
                  width: o,
                  isModerator: g,
                  onContextMenu: C,
                  inPopout: c === T.IlC.POPOUT
              })
    });
});
