var r,
    i = n(348327),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(592125),
    u = n(430824),
    c = n(19780),
    d = n(944486),
    _ = n(700785),
    E = n(565799),
    f = n(501655),
    h = n(750154),
    p = n(427679),
    m = n(71275),
    I = n(157925),
    T = n(981631);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let S = null;
function A() {
    var e, t, n, r, i, a, o;
    let s = d.Z.getVoiceChannelId();
    if (null == s) return null;
    let c = p.Z.getStageInstanceByChannel(s);
    if (null == c) return null;
    let g = l.Z.getChannel(s);
    if (null == g || !_.oz(T.Plq.VIEW_CHANNEL, g)) return null;
    let A = u.Z.getGuild(g.getGuildId());
    if (null == A || !A.hasFeature(T.oNc.DISCOVERABLE)) return null;
    let v = (0, h.Lw)(g, c),
        N = (null == S ? void 0 : null === (e = S.party) || void 0 === e ? void 0 : e.id) === v ? S : null,
        O = E.Z.getMutableParticipants(g.id, f.pV.SPEAKER),
        R = O.filter((e) => e.type === f.Ui.STREAM).length,
        C = O.length - R,
        y = E.Z.getParticipantCount(s) - R,
        b = (null == N ? void 0 : null === (t = N.party) || void 0 === t ? void 0 : t.size) != null ? N.party.size[1] : 0;
    return {
        application_id: I.gD,
        name: null !== (i = null !== (r = c.topic) && void 0 !== r ? r : g.topic) && void 0 !== i ? i : g.name,
        type: (0, m.xJ)(g.id) ? T.IIU.WATCHING : T.IIU.LISTENING,
        timestamps: { start: null !== (a = null == N ? void 0 : null === (n = N.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== a ? a : new Date().getTime() },
        assets: {
            small_image: null !== (o = A.icon) && void 0 !== o ? o : void 0,
            small_text: A.name
        },
        party: {
            id: v,
            size: [C, Math.max(y, b)]
        }
    };
}
function v() {
    let e = A();
    return !a()(e, S) && ((S = e), !0);
}
function N(e) {
    let { voiceStates: t } = e;
    if (null == S) return;
    let n = (0, h.rq)(S);
    null != n && null != t.find((e) => e.channelId === n.channelId) && v();
}
function O(e) {
    var t, n, r;
    let { state: i } = e,
        a = null !== (r = null == S ? void 0 : null === (n = S.party) || void 0 === n ? void 0 : null === (t = n.size) || void 0 === t ? void 0 : t[1]) && void 0 !== r ? r : 0;
    return i === T.hes.RTC_CONNECTED && !(a > 0) && v();
}
class R extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, d.Z, p.Z, c.Z);
    }
    getActivity() {
        return S;
    }
}
g(R, 'displayName', 'StageChannelSelfRichPresenceStore'),
    (t.Z = new R(s.Z, {
        CONNECTION_OPEN: v,
        STAGE_INSTANCE_CREATE: v,
        STAGE_INSTANCE_UPDATE: v,
        STAGE_INSTANCE_DELETE: v,
        VOICE_CHANNEL_SELECT: v,
        RTC_CONNECTION_STATE: O,
        VOICE_STATE_UPDATES: N
    }));
