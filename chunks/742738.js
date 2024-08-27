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
    g = n(71275),
    S = n(157925),
    A = n(981631);
let N = null;
function O() {
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
            O = (null == N ? void 0 : null === (e = N.party) || void 0 === e ? void 0 : e.id) === E ? N : null,
            v = p.Z.getMutableParticipants(u.id, I.pV.SPEAKER),
            R = v.filter((e) => e.type === I.Ui.STREAM).length,
            C = v.length - R,
            y = p.Z.getParticipantCount(o) - R,
            D = (null == O ? void 0 : null === (t = O.party) || void 0 === t ? void 0 : t.size) != null ? O.party.size[1] : 0;
        return {
            application_id: S.gD,
            name: null !== (i = null !== (r = l.topic) && void 0 !== r ? r : u.topic) && void 0 !== i ? i : u.name,
            type: (0, g.xJ)(u.id) ? A.IIU.WATCHING : A.IIU.LISTENING,
            timestamps: { start: null !== (a = null == O ? void 0 : null === (n = O.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== a ? a : new Date().getTime() },
            assets: {
                small_image: null !== (s = c.icon) && void 0 !== s ? s : void 0,
                small_text: c.name
            },
            party: {
                id: E,
                size: [C, Math.max(y, D)]
            }
        };
    })();
    return !l()(e, N) && ((N = e), !0);
}
class v extends (s = u.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, f.Z, T.Z, E.Z);
    }
    getActivity() {
        return N;
    }
}
(a = 'StageChannelSelfRichPresenceStore'),
    (i = 'displayName') in (r = v)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new v(c.Z, {
        CONNECTION_OPEN: O,
        STAGE_INSTANCE_CREATE: O,
        STAGE_INSTANCE_UPDATE: O,
        STAGE_INSTANCE_DELETE: O,
        VOICE_CHANNEL_SELECT: O,
        RTC_CONNECTION_STATE: function (e) {
            var t, n, r;
            let { state: i } = e,
                a = null !== (r = null == N ? void 0 : null === (n = N.party) || void 0 === n ? void 0 : null === (t = n.size) || void 0 === t ? void 0 : t[1]) && void 0 !== r ? r : 0;
            return i === A.hes.RTC_CONNECTED && !(a > 0) && O();
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            if (null == N) return;
            let n = (0, m.rq)(N);
            null != n && null != t.find((e) => e.channelId === n.channelId) && O();
        }
    }));
