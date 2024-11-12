let r, i;
n(47120);
var a,
    s,
    o,
    l,
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    f = n(570140),
    _ = n(358221),
    p = n(569545),
    h = n(199902),
    m = n(314897),
    g = n(131951),
    E = n(606304),
    v = n(354459);
function I() {
    let e,
        t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == r) e = null;
    else {
        var n, a, s, o, l;
        e = _.Z.getSelectedParticipantId(r);
        let t = h.Z.getLastActiveStream(),
            u = null != e ? _.Z.getParticipant(r, e) : null;
        if ((((null == u ? void 0 : u.type) === v.fO.ACTIVITY || ((null == u ? void 0 : u.type) === v.fO.USER && !(null === (n = u.voiceState) || void 0 === n ? void 0 : n.selfVideo))) && (e = null), null != t && null == e && (e = null === (a = _.Z.getParticipant(r, (0, p.V9)(t))) || void 0 === a ? void 0 : a.id), null == e)) {
            let t = m.default.getId(),
                n = c()(_.Z.getVideoParticipants(r)).filter((e) => e.type === v.fO.USER && e.user.id !== t && !g.Z.isLocalVideoDisabled(e.user.id)),
                a = n.map((e) => e.user.id),
                u = Date.now();
            null ==
                (e =
                    null ===
                        (s = n
                            .map((e) => [e.user.id, E.Z.getSpeakingDuration(e.user.id, u)])
                            .filter((e) => {
                                let [t, n] = e;
                                return 0 !== n;
                            })
                            .maxBy((e) => {
                                let [t, n] = e;
                                return -n;
                            })) || void 0 === s
                        ? void 0
                        : s[0]) && (e = null != i && a.has(i) ? i : null === (l = n.first()) || void 0 === l ? void 0 : null === (o = l.user) || void 0 === o ? void 0 : o.id);
        }
    }
    i !== e && ((i = e), t && y.emitChange());
}
let b = c().debounce(I, 300);
function S() {
    return b(), !1;
}
class T extends (a = d.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, m.default, E.Z, h.Z, g.Z), this.syncWith([_.Z, h.Z], S);
    }
    getSpeaker(e) {
        return r !== e && ((r = e), I(!1)), null != i ? i : m.default.getId();
    }
}
(l = 'VideoSpeakerStore'),
    (o = 'displayName') in (s = T)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l);
let y = new T(f.Z, { AUDIO_SET_LOCAL_VIDEO_DISABLED: S });
t.Z = y;
