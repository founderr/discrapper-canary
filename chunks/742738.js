var r,
    i,
    a,
    s,
    o = n(348327),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(592125),
    _ = n(430824),
    E = n(19780),
    f = n(944486),
    h = n(700785),
    p = n(565799),
    I = n(501655),
    m = n(750154),
    T = n(427679),
    S = n(71275),
    g = n(157925),
    A = n(981631);
let N = null;
function R() {
    let e = (function () {
        var e, t, n, r, i, a, s;
        let o = f.Z.getVoiceChannelId();
        if (null == o) return null;
        let l = T.Z.getStageInstanceByChannel(o);
        if (null == l) return null;
        let u = d.Z.getChannel(o);
        if (null == u || !h.oz(A.Plq.VIEW_CHANNEL, u)) return null;
        let c = _.Z.getGuild(u.getGuildId());
        if (null == c || !c.hasFeature(A.oNc.DISCOVERABLE)) return null;
        let E = (0, m.Lw)(u, l),
            R = (null == N ? void 0 : null === (e = N.party) || void 0 === e ? void 0 : e.id) === E ? N : null,
            O = p.Z.getMutableParticipants(u.id, I.pV.SPEAKER),
            v = O.filter((e) => e.type === I.Ui.STREAM).length,
            C = O.length - v,
            L = p.Z.getParticipantCount(o) - v,
            D = (null == R ? void 0 : null === (t = R.party) || void 0 === t ? void 0 : t.size) != null ? R.party.size[1] : 0;
        return {
            application_id: g.gD,
            name: null !== (i = null !== (r = l.topic) && void 0 !== r ? r : u.topic) && void 0 !== i ? i : u.name,
            type: (0, S.xJ)(u.id) ? A.IIU.WATCHING : A.IIU.LISTENING,
            timestamps: { start: null !== (a = null == R ? void 0 : null === (n = R.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== a ? a : new Date().getTime() },
            assets: {
                small_image: null !== (s = c.icon) && void 0 !== s ? s : void 0,
                small_text: c.name
            },
            party: {
                id: E,
                size: [C, Math.max(L, D)]
            }
        };
    })();
    return !l()(e, N) && ((N = e), !0);
}
class O extends (s = u.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, f.Z, T.Z, E.Z);
    }
    getActivity() {
        return N;
    }
}
(a = 'StageChannelSelfRichPresenceStore'),
    (i = 'displayName') in (r = O)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new O(c.Z, {
        CONNECTION_OPEN: R,
        STAGE_INSTANCE_CREATE: R,
        STAGE_INSTANCE_UPDATE: R,
        STAGE_INSTANCE_DELETE: R,
        VOICE_CHANNEL_SELECT: R,
        RTC_CONNECTION_STATE: function (e) {
            var t, n, r;
            let { state: i } = e,
                a = null !== (r = null == N ? void 0 : null === (n = N.party) || void 0 === n ? void 0 : null === (t = n.size) || void 0 === t ? void 0 : t[1]) && void 0 !== r ? r : 0;
            return i === A.hes.RTC_CONNECTED && !(a > 0) && R();
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            if (null == N) return;
            let n = (0, m.rq)(N);
            null != n && null != t.find((e) => e.channelId === n.channelId) && R();
        }
    }));
