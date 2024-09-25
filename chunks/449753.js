var r = n(47120);
var i = n(846519),
    a = n(570140),
    o = n(872810),
    s = n(199902),
    l = n(314897),
    u = n(592125),
    c = n(936349),
    d = n(944486),
    _ = n(959457),
    E = n(70956),
    f = n(569545),
    h = n(981631);
let p = new i.V7(),
    m = new i.V7(),
    I = 180000,
    T = 5 * E.Z.Millis.SECOND,
    g = 12 * E.Z.Millis.SECOND,
    S = null;
function A(e, t) {
    if (d.Z.getVoiceChannelId() !== e) return !1;
    let n = u.Z.getChannel(e);
    if (null == n || (!n.isDM() && !n.isGuildStageVoice()) || null != s.Z.getActiveStreamForUser(t, n.getGuildId())) return !1;
    let r = s.Z.getStreamForUser(t, n.getGuildId());
    if (null == r) return !1;
    let i = (0, f.V9)(r);
    return i !== S && ((S = i), (0, o.rn)(r, { noFocus: !0 }), !0);
}
function v(e, t) {
    let n = null != t ? t : c.Z.getPreferredRegion();
    null != n && n !== c.Z.getRegion(_.Z.getHostname(_.Z.getActiveStreamKey())) && (0, o.dV)(e, n);
}
t.Z = {
    init() {
        let e = (e, t) => {
            !_.Z.getAllActiveStreamKeys().includes(e) &&
                m.start(t ? g : T, () => {
                    a.Z.dispatch({
                        type: 'STREAM_TIMED_OUT',
                        streamKey: e
                    });
                });
        };
        a.Z.subscribe('STREAM_WATCH', (t) => {
            let { streamKey: n } = t,
                { channelId: r } = (0, f.my)(n),
                i = u.Z.getChannel(r);
            e(n, null == i ? void 0 : i.isGuildStageVoice());
        }),
            a.Z.subscribe('STREAM_START', (t) => {
                let { streamType: n, guildId: r, channelId: i } = t,
                    a = u.Z.getChannel(i);
                e(
                    (0, f.V9)({
                        streamType: n,
                        guildId: r,
                        channelId: i,
                        ownerId: l.default.getId()
                    }),
                    null == a ? void 0 : a.isGuildStageVoice()
                );
            }),
            a.Z.subscribe('STREAM_CREATE', () => {
                m.stop();
            }),
            a.Z.subscribe('STREAM_UPDATE', () => {
                m.stop();
            }),
            a.Z.subscribe('STREAM_DELETE', () => {
                m.stop();
            }),
            a.Z.subscribe('STREAM_CLOSE', () => {
                p.stop(), m.stop();
            }),
            a.Z.subscribe('VOICE_CHANNEL_SELECT', (e) => {
                let { channelId: t } = e;
                if (null == t) return;
                S = null;
                let n = s.Z.getAllApplicationStreamsForChannel(t).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== l.default.getId();
                })[0];
                null != n && A(t, n.ownerId);
            }),
            a.Z.subscribe('VOICE_STATE_UPDATES', (e) => {
                let { voiceStates: t } = e;
                t.forEach((e) => {
                    let { userId: t, channelId: n, guildId: r, selfStream: i } = e;
                    if (t !== l.default.getId() && null != n) {
                        if (i && A(n, t)) return;
                        let e = s.Z.getActiveStreamForUser(t, r);
                        if (null != e && e.channelId === n && (!i && e.state !== h.jm8.ENDED && p.start(I, () => (0, o.aP)((0, f.V9)(e), !1)), i && e.state === h.jm8.ENDED)) {
                            p.stop();
                            let e = s.Z.getStreamForUser(t, r);
                            if (null == e) return;
                            (0, o.rn)(e);
                        }
                    }
                });
            }),
            a.Z.subscribe('CALL_UPDATE', (e) => {
                let { channelId: t, region: n } = e,
                    r = s.Z.getCurrentUserActiveStream();
                (null == r ? void 0 : r.channelId) === t && v((0, f.V9)(r), n);
            }),
            a.Z.subscribe('CHANNEL_UPDATES', (e) => {
                let { channels: t } = e,
                    n = s.Z.getCurrentUserActiveStream();
                if (null != n) for (let e of t) n.channelId === e.id && v((0, f.V9)(n), e.rtcRegion);
            });
    }
};
