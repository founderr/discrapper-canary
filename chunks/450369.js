n.d(t, {
    Q: function () {
        return y;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
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
    v = n(347475),
    _ = n(199902),
    I = n(430824),
    E = n(496675),
    b = n(979651),
    N = n(88751),
    Z = n(252132),
    S = n(248400),
    T = n(981631),
    j = n(354459),
    A = n(235537);
let y = 16 / 9,
    P = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: r, guildId: a, user: s, width: c, isModerator: d, onContextMenu: u, inPopout: h } = e,
            { reducedMotion: p } = l.useContext(o.AccessibilityPreferencesContext),
            { blocked: m, ignored: f, id: g } = t;
        return (0, i.jsx)(o.Popout, {
            preload:
                null == n
                    ? void 0
                    : () =>
                          (0, x.Z)(n.user, {
                              guildId: r.guild_id,
                              channelId: r.id
                          }),
            renderPopout: (e) =>
                (0, i.jsx)(v.Z, {
                    ...e,
                    guildId: a,
                    channelId: r.id,
                    userId: s.id
                }),
            position: 'right',
            spacing: 8,
            children: (e) =>
                (0, i.jsx)(o.Clickable, {
                    onContextMenu: (e) => u(n, e),
                    ...e,
                    children: (0, i.jsx)(
                        Z.Z,
                        {
                            participant: n,
                            aspectRatio: y,
                            blocked: m,
                            ignored: f,
                            channel: r,
                            className: A.tile,
                            inCall: !0,
                            inPopout: h,
                            paused: !1,
                            pulseSpeakingIndicator: !p.enabled,
                            width: c,
                            children: d && (0, i.jsx)(S.Z, {})
                        },
                        g
                    )
                })
        });
    },
    M = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: r, width: a, isModerator: d, onContextMenu: h, inPopout: x } = e,
            { reducedMotion: v } = l.useContext(o.AccessibilityPreferencesContext),
            { id: N, blocked: P, ignored: M } = t,
            R = (0, s.Wu)([_.Z], () => _.Z.getAllActiveStreams(), []),
            { selectedParticipant: L, largeStream: k } = (0, s.cj)([p.Z], () => ({
                selectedParticipant: null != r ? p.Z.getSelectedParticipant(r.id) : null,
                largeStream: null != r && p.Z.getStageStreamSize(r.id)
            })),
            O = l.useCallback(
                (e, t) => {
                    if (e.type === j.fO.STREAM && 0 === R.filter((t) => (0, f.V9)(t) === e.id && t.state !== T.jm8.ENDED).length) {
                        if (!(0, g.p9)(r, b.Z, I.Z, E.Z, m.Z)[0]) return;
                        (0, u.rn)((0, f.my)(e.id), { forceMultiple: t.shiftKey });
                    }
                    (null == L ? void 0 : L.id) === e.id ? (k ? (c.Z.selectParticipant(r.id, null), c.Z.updateStageStreamSize(r.id, !1)) : c.Z.updateStageStreamSize(r.id, !0)) : (c.Z.updateStageStreamSize(r.id, !1), c.Z.selectParticipant(r.id, e.id));
                },
                [R, r, L, k]
            );
        return (0, i.jsx)(
            Z.Z,
            {
                participant: n,
                aspectRatio: y,
                fit: n.type === j.fO.USER ? C.L.COVER : void 0,
                blocked: P,
                ignored: M,
                channel: r,
                className: A.tile,
                inCall: !0,
                inPopout: x,
                onClick: O,
                onContextMenu: h,
                paused: !1,
                pulseSpeakingIndicator: !v.enabled,
                width: a,
                children: d && n.type === j.fO.USER && (0, i.jsx)(S.Z, {})
            },
            N
        );
    };
t.Z = l.memo(function (e) {
    var t;
    let { participant: l, channel: r, width: o } = e,
        c = (0, h.bp)(),
        u = r.getGuildId();
    a()(null != u, 'Channel cannot be guildless');
    let { user: m } = l,
        f = (0, s.e7)([p.Z], () => p.Z.getParticipant(r.id, l.id), [r.id, l.id]),
        g = (0, s.e7)([N.ZP], () => N.ZP.isModerator(m.id, r.id), [r.id, m.id]);
    if (null == f || f.type === j.fO.ACTIVITY) return null;
    let C = (e, t) => {
            switch (e.type) {
                case j.fO.HIDDEN_STREAM:
                case j.fO.STREAM:
                    (0, d.jW)(
                        t,
                        async () => {
                            let { default: t } = await n.e('22183').then(n.bind(n, 987281));
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
                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    user: m,
                                    guildId: u,
                                    channel: r,
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
                  channel: r,
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
                  channel: r,
                  guildId: u,
                  user: m,
                  width: o,
                  isModerator: g,
                  onContextMenu: C,
                  inPopout: c === T.IlC.POPOUT
              })
    });
});
