var i,
    a = r(47120);
var s = r(724458);
var o = r(442837),
    l = r(570140),
    u = r(981631),
    c = r(65154);
function d(e, n, r) {
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
let f = null,
    _ = null,
    h = {};
function p(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = h[e];
    if (null == i) return;
    let a = i[null != n ? n : u.kod];
    if (null != a) {
        for (let e of Object.values(c.Yn)) (r === e || null == r) && delete a[e];
        h[e][null != n ? n : u.kod] = a;
    }
}
function m(e, n, r, i) {
    var a;
    !(e in h) && (h[e] = {});
    let s = null !== (a = h[e][null != n ? n : u.kod]) && void 0 !== a ? a : {};
    h[e][null != n ? n : u.kod] = {
        ...s,
        [i]: { streamId: r }
    };
}
function g(e) {
    let { user: n, sessionId: r } = e;
    (f = n.id), (_ = r);
}
function E(e) {
    let { user: n, sessionId: r } = e;
    (f = n.id), (_ = r);
}
function v(e) {
    let { userId: n, guildId: r, streamId: i, context: a } = e;
    null != i ? m(n, r, i, a) : p(n, r, a);
}
function I(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => {
        var r;
        let { userId: i, sessionId: a, channelId: s, guildId: o } = n;
        if (null == s && i === f) {
            if (a !== _) return e;
            h = {};
        } else {
            if (null != s || (null === (r = h[i]) || void 0 === r ? void 0 : r[null != o ? o : u.kod]) == null) return e;
            p(i, o);
        }
        return !0;
    }, !1);
}
class T extends (i = o.ZP.Store) {
    getStreamId(e, n) {
        var r, i, a;
        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Yn.DEFAULT;
        return null === (a = h[e]) || void 0 === a ? void 0 : null === (i = a[null != n ? n : u.kod]) || void 0 === i ? void 0 : null === (r = i[s]) || void 0 === r ? void 0 : r.streamId;
    }
    getUserStreamData(e, n) {
        var r, i;
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Yn.DEFAULT;
        return null === (i = h[e]) || void 0 === i ? void 0 : null === (r = i[null != n ? n : u.kod]) || void 0 === r ? void 0 : r[a];
    }
}
d(T, 'displayName', 'VideoStreamStore'),
    (n.Z = new T(l.Z, {
        CONNECTION_OPEN: g,
        OVERLAY_INITIALIZE: E,
        RTC_CONNECTION_VIDEO: v,
        VOICE_STATE_UPDATES: I
    }));
