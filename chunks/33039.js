var r,
    i = n(47120);
var a = n(724458);
var o = n(442837),
    s = n(570140),
    l = n(981631),
    u = n(65154);
function c(e, t, n) {
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
let d = null,
    _ = null,
    E = {};
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = E[e];
    if (null == r) return;
    let i = r[null != t ? t : l.kod];
    if (null != i) {
        for (let e of Object.values(u.Yn)) (n === e || null == n) && delete i[e];
        E[e][null != t ? t : l.kod] = i;
    }
}
function h(e, t, n, r) {
    var i;
    !(e in E) && (E[e] = {});
    let a = null !== (i = E[e][null != t ? t : l.kod]) && void 0 !== i ? i : {};
    E[e][null != t ? t : l.kod] = {
        ...a,
        [r]: { streamId: n }
    };
}
function p(e) {
    let { user: t, sessionId: n } = e;
    (d = t.id), (_ = n);
}
function m(e) {
    let { user: t, sessionId: n } = e;
    (d = t.id), (_ = n);
}
function I(e) {
    let { userId: t, guildId: n, streamId: r, context: i } = e;
    null != r ? h(t, n, r, i) : f(t, n, i);
}
function T(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n;
        let { userId: r, sessionId: i, channelId: a, guildId: o } = t;
        if (null == a && r === d) {
            if (i !== _) return e;
            E = {};
        } else {
            if (null != a || (null === (n = E[r]) || void 0 === n ? void 0 : n[null != o ? o : l.kod]) == null) return e;
            f(r, o);
        }
        return !0;
    }, !1);
}
class g extends (r = o.ZP.Store) {
    getStreamId(e, t) {
        var n, r, i;
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.Yn.DEFAULT;
        return null === (i = E[e]) || void 0 === i ? void 0 : null === (r = i[null != t ? t : l.kod]) || void 0 === r ? void 0 : null === (n = r[a]) || void 0 === n ? void 0 : n.streamId;
    }
    getUserStreamData(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.Yn.DEFAULT;
        return null === (r = E[e]) || void 0 === r ? void 0 : null === (n = r[null != t ? t : l.kod]) || void 0 === n ? void 0 : n[i];
    }
}
c(g, 'displayName', 'VideoStreamStore'),
    (t.Z = new g(s.Z, {
        CONNECTION_OPEN: p,
        OVERLAY_INITIALIZE: m,
        RTC_CONNECTION_VIDEO: I,
        VOICE_STATE_UPDATES: T
    }));
