n.d(t, {
    Q: function () {
        return R;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(512722),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(475179),
    u = n(239091),
    d = n(872810),
    h = n(40851),
    p = n(358221),
    m = n(258609),
    _ = n(569545),
    f = n(382182),
    E = n(352978),
    g = n(184301),
    C = n(347475),
    I = n(199902),
    T = n(430824),
    x = n(496675),
    v = n(979651),
    S = n(88751),
    N = n(252132),
    A = n(248400),
    Z = n(981631),
    M = n(354459),
    b = n(527938);
let R = 16 / 9,
    L = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: a, guildId: l, user: r, width: c, isModerator: u, onContextMenu: d, inPopout: h } = e,
            { reducedMotion: p } = s.useContext(o.AccessibilityPreferencesContext),
            { blocked: m, id: _ } = t;
        return (0, i.jsx)(o.Popout, {
            preload:
                null == n
                    ? void 0
                    : () =>
                          (0, g.Z)(n.user, {
                              guildId: a.guild_id,
                              channelId: a.id
                          }),
            renderPopout: (e) =>
                (0, i.jsx)(C.Z, {
                    ...e,
                    guildId: l,
                    channelId: a.id,
                    userId: r.id
                }),
            position: 'right',
            spacing: 8,
            children: (e) =>
                (0, i.jsx)(o.Clickable, {
                    onContextMenu: (e) => d(n, e),
                    ...e,
                    children: (0, i.jsx)(
                        N.Z,
                        {
                            participant: n,
                            aspectRatio: R,
                            blocked: m,
                            channel: a,
                            className: b.tile,
                            inCall: !0,
                            inPopout: h,
                            paused: !1,
                            pulseSpeakingIndicator: !p.enabled,
                            width: c,
                            children: u && (0, i.jsx)(A.Z, {})
                        },
                        _
                    )
                })
        });
    },
    j = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: a, width: l, isModerator: u, onContextMenu: h, inPopout: g } = e,
            { reducedMotion: C } = s.useContext(o.AccessibilityPreferencesContext),
            { id: S, blocked: L } = t,
            j = (0, r.Wu)([I.Z], () => I.Z.getAllActiveStreams(), []),
            { selectedParticipant: P, largeStream: O } = (0, r.cj)([p.Z], () => ({
                selectedParticipant: null != a ? p.Z.getSelectedParticipant(a.id) : null,
                largeStream: null != a && p.Z.getStageStreamSize(a.id)
            })),
            y = s.useCallback(
                (e, t) => {
                    if (e.type === M.fO.STREAM && 0 === j.filter((t) => (0, _.V9)(t) === e.id && t.state !== Z.jm8.ENDED).length) {
                        if (!(0, f.p9)(a, v.Z, T.Z, x.Z, m.Z)[0]) return;
                        (0, d.rn)((0, _.my)(e.id), { forceMultiple: t.shiftKey });
                    }
                    (null == P ? void 0 : P.id) === e.id ? (O ? (c.Z.selectParticipant(a.id, null), c.Z.updateStageStreamSize(a.id, !1)) : c.Z.updateStageStreamSize(a.id, !0)) : (c.Z.updateStageStreamSize(a.id, !1), c.Z.selectParticipant(a.id, e.id));
                },
                [j, a, P, O]
            );
        return (0, i.jsx)(
            N.Z,
            {
                participant: n,
                aspectRatio: R,
                fit: n.type === M.fO.USER ? E.L.COVER : void 0,
                blocked: L,
                channel: a,
                className: b.tile,
                inCall: !0,
                inPopout: g,
                onClick: y,
                onContextMenu: h,
                paused: !1,
                pulseSpeakingIndicator: !C.enabled,
                width: l,
                children: u && n.type === M.fO.USER && (0, i.jsx)(A.Z, {})
            },
            S
        );
    };
t.Z = s.memo(function (e) {
    var t;
    let { participant: s, channel: a, width: o } = e,
        c = (0, h.bp)(),
        d = a.getGuildId();
    l()(null != d, 'Channel cannot be guildless');
    let { user: m } = s,
        _ = (0, r.e7)([p.Z], () => p.Z.getParticipant(a.id, s.id), [a.id, s.id]),
        f = (0, r.e7)([S.ZP], () => S.ZP.isModerator(m.id, a.id), [a.id, m.id]);
    if (null == _ || _.type === M.fO.ACTIVITY) return null;
    let E = (e, t) => {
            switch (e.type) {
                case M.fO.HIDDEN_STREAM:
                case M.fO.STREAM:
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
                case M.fO.USER:
                default:
                    (0, u.jW)(
                        t,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('91864')]).then(n.bind(n, 757387));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    user: m,
                                    guildId: d,
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
        g = _.type === M.fO.USER && !(null === (t = _.voiceState) || void 0 === t ? void 0 : t.selfVideo);
    return (0, i.jsx)(i.Fragment, {
        children: g
            ? (0, i.jsx)(L, {
                  stageParticipant: s,
                  rtcParticipant: _,
                  channel: a,
                  guildId: d,
                  user: m,
                  width: o,
                  isModerator: f,
                  onContextMenu: E,
                  inPopout: c === Z.IlC.POPOUT
              })
            : (0, i.jsx)(j, {
                  stageParticipant: s,
                  rtcParticipant: _,
                  channel: a,
                  guildId: d,
                  user: m,
                  width: o,
                  isModerator: f,
                  onContextMenu: E,
                  inPopout: c === Z.IlC.POPOUT
              })
    });
});
