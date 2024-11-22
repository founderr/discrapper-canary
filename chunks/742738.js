var r,
    i,
    a,
    s,
    o = n(348327),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(592125),
    f = n(430824),
    _ = n(19780),
    p = n(944486),
    h = n(700785),
    m = n(565799),
    g = n(501655),
    E = n(750154),
    v = n(427679),
    I = n(368442),
    b = n(157925),
    T = n(981631);
let S = null;
function y() {
    let e = (function () {
        var e, t, n, r, i, a, s;
        let o = p.Z.getVoiceChannelId();
        if (null == o) return null;
        let l = v.Z.getStageInstanceByChannel(o);
        if (null == l) return null;
        let u = d.Z.getChannel(o);
        if (null == u || !h.oz(T.Plq.VIEW_CHANNEL, u)) return null;
        let c = f.Z.getGuild(u.getGuildId());
        if (null == c || !c.hasFeature(T.oNc.DISCOVERABLE)) return null;
        let _ = (0, E.Lw)(u, l),
            y = (null == S ? void 0 : null === (e = S.party) || void 0 === e ? void 0 : e.id) === _ ? S : null,
            A = m.Z.getMutableParticipants(u.id, g.pV.SPEAKER),
            N = A.filter((e) => e.type === g.Ui.STREAM).length,
            C = A.length - N,
            R = m.Z.getParticipantCount(o) - N,
            O = (null == y ? void 0 : null === (t = y.party) || void 0 === t ? void 0 : t.size) != null ? y.party.size[1] : 0;
        return {
            application_id: b.gD,
            name: null !== (i = null !== (r = l.topic) && void 0 !== r ? r : u.topic) && void 0 !== i ? i : u.name,
            type: (0, I.xJ)(u.id) ? T.IIU.WATCHING : T.IIU.LISTENING,
            timestamps: { start: null !== (a = null == y ? void 0 : null === (n = y.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== a ? a : new Date().getTime() },
            assets: {
                small_image: null !== (s = c.icon) && void 0 !== s ? s : void 0,
                small_text: c.name
            },
            party: {
                id: _,
                size: [C, Math.max(R, O)]
            }
        };
    })();
    return !l()(e, S) && ((S = e), !0);
}
class A extends (s = u.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, p.Z, v.Z, _.Z);
    }
    getActivity() {
        return S;
    }
}
(a = 'StageChannelSelfRichPresenceStore'),
    (i = 'displayName') in (r = A)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new A(c.Z, {
        CONNECTION_OPEN: y,
        STAGE_INSTANCE_CREATE: y,
        STAGE_INSTANCE_UPDATE: y,
        STAGE_INSTANCE_DELETE: y,
        VOICE_CHANNEL_SELECT: y,
        RTC_CONNECTION_STATE: function (e) {
            var t, n, r;
            let { state: i } = e,
                a = null !== (r = null == S ? void 0 : null === (n = S.party) || void 0 === n ? void 0 : null === (t = n.size) || void 0 === t ? void 0 : t[1]) && void 0 !== r ? r : 0;
            return i === T.hes.RTC_CONNECTED && !(a > 0) && y();
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            if (null == S) return;
            let n = (0, E.rq)(S);
            null != n && null != t.find((e) => e.channelId === n.channelId) && y();
        }
    }));
