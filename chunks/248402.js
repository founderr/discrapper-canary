let r, i;
var a,
    o = n(47120);
var s = n(392711),
    l = n.n(s),
    u = n(442837),
    c = n(570140),
    d = n(358221),
    _ = n(569545),
    E = n(199902),
    f = n(314897),
    h = n(131951),
    p = n(606304),
    m = n(354459);
function I(e, t, n) {
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
function T() {
    let e,
        t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == r) e = null;
    else {
        var n, a, o, s, u;
        e = d.Z.getSelectedParticipantId(r);
        let t = E.Z.getLastActiveStream(),
            c = null != e ? d.Z.getParticipant(r, e) : null;
        if ((((null == c ? void 0 : c.type) === m.fO.ACTIVITY || ((null == c ? void 0 : c.type) === m.fO.USER && !(null === (n = c.voiceState) || void 0 === n ? void 0 : n.selfVideo))) && (e = null), null != t && null == e && (e = null === (a = d.Z.getParticipant(r, (0, _.V9)(t))) || void 0 === a ? void 0 : a.id), null == e)) {
            let t = f.default.getId(),
                n = l()(d.Z.getVideoParticipants(r)).filter((e) => e.type === m.fO.USER && e.user.id !== t && !h.Z.isLocalVideoDisabled(e.user.id)),
                a = n.map((e) => e.user.id),
                c = Date.now();
            null ==
                (e =
                    null ===
                        (o = n
                            .map((e) => [e.user.id, p.Z.getSpeakingDuration(e.user.id, c)])
                            .filter((e) => {
                                let [t, n] = e;
                                return 0 !== n;
                            })
                            .maxBy((e) => {
                                let [t, n] = e;
                                return -n;
                            })) || void 0 === o
                        ? void 0
                        : o[0]) && (e = null != i && a.has(i) ? i : null === (u = n.first()) || void 0 === u ? void 0 : null === (s = u.user) || void 0 === s ? void 0 : s.id);
        }
    }
    i !== e && ((i = e), t && v.emitChange());
}
let g = l().debounce(T, 300);
function S() {
    return g(), !1;
}
class A extends (a = u.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, f.default, p.Z, E.Z, h.Z), this.syncWith([d.Z, E.Z], S);
    }
    getSpeaker(e) {
        return r !== e && ((r = e), T(!1)), null != i ? i : f.default.getId();
    }
}
I(A, 'displayName', 'VideoSpeakerStore');
let v = new A(c.Z, { AUDIO_SET_LOCAL_VIDEO_DISABLED: S });
t.Z = v;
