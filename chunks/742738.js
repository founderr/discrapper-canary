var i,
    a = r(348327),
    s = r.n(a),
    o = r(442837),
    l = r(570140),
    u = r(592125),
    c = r(430824),
    d = r(19780),
    f = r(944486),
    _ = r(700785),
    h = r(565799),
    p = r(501655),
    m = r(750154),
    g = r(427679),
    E = r(368442),
    v = r(157925),
    I = r(981631);
function T(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let b = null;
function y() {
    var e, n, r, i, a, s, o;
    let l = f.Z.getVoiceChannelId();
    if (null == l) return null;
    let d = g.Z.getStageInstanceByChannel(l);
    if (null == d) return null;
    let T = u.Z.getChannel(l);
    if (null == T || !_.oz(I.Plq.VIEW_CHANNEL, T)) return null;
    let y = c.Z.getGuild(T.getGuildId());
    if (null == y || !y.hasFeature(I.oNc.DISCOVERABLE)) return null;
    let S = (0, m.Lw)(T, d),
        A = (null == b ? void 0 : null === (e = b.party) || void 0 === e ? void 0 : e.id) === S ? b : null,
        N = h.Z.getMutableParticipants(T.id, p.pV.SPEAKER),
        C = N.filter((e) => e.type === p.Ui.STREAM).length,
        R = N.length - C,
        O = h.Z.getParticipantCount(l) - C,
        D = (null == A ? void 0 : null === (n = A.party) || void 0 === n ? void 0 : n.size) != null ? A.party.size[1] : 0;
    return {
        application_id: v.gD,
        name: null !== (a = null !== (i = d.topic) && void 0 !== i ? i : T.topic) && void 0 !== a ? a : T.name,
        type: (0, E.xJ)(T.id) ? I.IIU.WATCHING : I.IIU.LISTENING,
        timestamps: { start: null !== (s = null == A ? void 0 : null === (r = A.timestamps) || void 0 === r ? void 0 : r.start) && void 0 !== s ? s : new Date().getTime() },
        assets: {
            small_image: null !== (o = y.icon) && void 0 !== o ? o : void 0,
            small_text: y.name
        },
        party: {
            id: S,
            size: [R, Math.max(O, D)]
        }
    };
}
function S() {
    let e = y();
    return !s()(e, b) && ((b = e), !0);
}
function A(e) {
    let { voiceStates: n } = e;
    if (null == b) return;
    let r = (0, m.rq)(b);
    null != r && null != n.find((e) => e.channelId === r.channelId) && S();
}
function N(e) {
    var n, r, i;
    let { state: a } = e,
        s = null !== (i = null == b ? void 0 : null === (r = b.party) || void 0 === r ? void 0 : null === (n = r.size) || void 0 === n ? void 0 : n[1]) && void 0 !== i ? i : 0;
    return a === I.hes.RTC_CONNECTED && !(s > 0) && S();
}
class C extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, f.Z, g.Z, d.Z);
    }
    getActivity() {
        return b;
    }
}
T(C, 'displayName', 'StageChannelSelfRichPresenceStore'),
    (n.Z = new C(l.Z, {
        CONNECTION_OPEN: S,
        STAGE_INSTANCE_CREATE: S,
        STAGE_INSTANCE_UPDATE: S,
        STAGE_INSTANCE_DELETE: S,
        VOICE_CHANNEL_SELECT: S,
        RTC_CONNECTION_STATE: N,
        VOICE_STATE_UPDATES: A
    }));
