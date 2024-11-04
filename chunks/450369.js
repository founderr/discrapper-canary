n.d(t, {
    Q: function () {
        return y;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(512722),
    s = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(475179),
    u = n(239091),
    d = n(872810),
    h = n(40851),
    m = n(358221),
    p = n(258609),
    f = n(569545),
    g = n(382182),
    C = n(352978),
    x = n(184301),
    v = n(347475),
    _ = n(199902),
    I = n(430824),
    E = n(496675),
    b = n(979651),
    S = n(88751),
    Z = n(252132),
    T = n(248400),
    N = n(981631),
    j = n(354459),
    A = n(527938);
let y = 16 / 9,
    P = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: r, guildId: s, user: a, width: c, isModerator: u, onContextMenu: d, inPopout: h } = e,
            { reducedMotion: m } = l.useContext(o.AccessibilityPreferencesContext),
            { blocked: p, id: f } = t;
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
                    guildId: s,
                    channelId: r.id,
                    userId: a.id
                }),
            position: 'right',
            spacing: 8,
            children: (e) =>
                (0, i.jsx)(o.Clickable, {
                    onContextMenu: (e) => d(n, e),
                    ...e,
                    children: (0, i.jsx)(
                        Z.Z,
                        {
                            participant: n,
                            aspectRatio: y,
                            blocked: p,
                            channel: r,
                            className: A.tile,
                            inCall: !0,
                            inPopout: h,
                            paused: !1,
                            pulseSpeakingIndicator: !m.enabled,
                            width: c,
                            children: u && (0, i.jsx)(T.Z, {})
                        },
                        f
                    )
                })
        });
    },
    M = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: r, width: s, isModerator: u, onContextMenu: h, inPopout: x } = e,
            { reducedMotion: v } = l.useContext(o.AccessibilityPreferencesContext),
            { id: S, blocked: P } = t,
            M = (0, a.Wu)([_.Z], () => _.Z.getAllActiveStreams(), []),
            { selectedParticipant: R, largeStream: L } = (0, a.cj)([m.Z], () => ({
                selectedParticipant: null != r ? m.Z.getSelectedParticipant(r.id) : null,
                largeStream: null != r && m.Z.getStageStreamSize(r.id)
            })),
            k = l.useCallback(
                (e, t) => {
                    if (e.type === j.fO.STREAM && 0 === M.filter((t) => (0, f.V9)(t) === e.id && t.state !== N.jm8.ENDED).length) {
                        if (!(0, g.p9)(r, b.Z, I.Z, E.Z, p.Z)[0]) return;
                        (0, d.rn)((0, f.my)(e.id), { forceMultiple: t.shiftKey });
                    }
                    (null == R ? void 0 : R.id) === e.id ? (L ? (c.Z.selectParticipant(r.id, null), c.Z.updateStageStreamSize(r.id, !1)) : c.Z.updateStageStreamSize(r.id, !0)) : (c.Z.updateStageStreamSize(r.id, !1), c.Z.selectParticipant(r.id, e.id));
                },
                [M, r, R, L]
            );
        return (0, i.jsx)(
            Z.Z,
            {
                participant: n,
                aspectRatio: y,
                fit: n.type === j.fO.USER ? C.L.COVER : void 0,
                blocked: P,
                channel: r,
                className: A.tile,
                inCall: !0,
                inPopout: x,
                onClick: k,
                onContextMenu: h,
                paused: !1,
                pulseSpeakingIndicator: !v.enabled,
                width: s,
                children: u && n.type === j.fO.USER && (0, i.jsx)(T.Z, {})
            },
            S
        );
    };
t.Z = l.memo(function (e) {
    var t;
    let { participant: l, channel: r, width: o } = e,
        c = (0, h.bp)(),
        d = r.getGuildId();
    s()(null != d, 'Channel cannot be guildless');
    let { user: p } = l,
        f = (0, a.e7)([m.Z], () => m.Z.getParticipant(r.id, l.id), [r.id, l.id]),
        g = (0, a.e7)([S.ZP], () => S.ZP.isModerator(p.id, r.id), [r.id, p.id]);
    if (null == f || f.type === j.fO.ACTIVITY) return null;
    let C = (e, t) => {
            switch (e.type) {
                case j.fO.HIDDEN_STREAM:
                case j.fO.STREAM:
                    (0, u.jW)(
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
                    (0, u.jW)(
                        t,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('91864')]).then(n.bind(n, 757387));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    user: p,
                                    guildId: d,
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
                  guildId: d,
                  user: p,
                  width: o,
                  isModerator: g,
                  onContextMenu: C,
                  inPopout: c === N.IlC.POPOUT
              })
            : (0, i.jsx)(M, {
                  stageParticipant: l,
                  rtcParticipant: f,
                  channel: r,
                  guildId: d,
                  user: p,
                  width: o,
                  isModerator: g,
                  onContextMenu: C,
                  inPopout: c === N.IlC.POPOUT
              })
    });
});
