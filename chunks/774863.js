let i;
var a,
    s = r(47120);
var o = r(442837),
    l = r(570140),
    u = r(70956),
    c = r(709054);
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
let f = 14 * u.Z.Millis.DAY,
    _ = Object.freeze([]);
let h = {},
    p = {};
function m(e) {
    var n;
    let { messageId: r, channelId: i, attachments: a } = e,
        s = {
            messageId: r,
            channelId: i,
            attachments: a,
            reportSubmit: !1
        },
        o = null !== (n = p[i]) && void 0 !== n ? n : _;
    (p[i] = [...o, s]), (h[r] = s);
}
function g(e) {
    let { messageId: n, channelId: r } = e,
        i = p[r];
    null != i &&
        ((p[r] = i.map((e) =>
            e.messageId === n
                ? {
                      ...e,
                      reportSubmit: !0
                  }
                : e
        )),
        (h[n] = {
            ...h[n],
            reportSubmit: !0
        }));
}
function E() {
    I();
}
function v(e) {
    let { explicitContentScanVersion: n } = e;
    (i = n), I();
}
function I() {
    (h = {}), (p = {});
}
class T extends (a = o.ZP.Store) {
    getFpMessageInfo(e) {
        return h[e];
    }
    getChannelFpInfo(e) {
        var n;
        return null !== (n = p[e]) && void 0 !== n ? n : _;
    }
    canSubmitFpReport(e) {
        let n = h[e];
        return null != n && !n.reportSubmit && c.default.age(n.messageId) < f;
    }
    get validContentScanVersion() {
        return i;
    }
}
d(T, 'displayName', 'FalsePositiveStore'),
    (n.Z = new T(l.Z, {
        LOGOUT: E,
        CONNECTION_OPEN: v,
        MESSAGE_EXPLICIT_CONTENT_FP_CREATE: m,
        MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: g
    }));
