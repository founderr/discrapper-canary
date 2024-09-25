let r;
var i,
    a = n(47120);
var o = n(442837),
    s = n(570140),
    l = n(70956),
    u = n(709054);
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
let d = 14 * l.Z.Millis.DAY,
    _ = Object.freeze([]);
let E = {},
    f = {};
function h(e) {
    var t;
    let { messageId: n, channelId: r, attachments: i } = e,
        a = {
            messageId: n,
            channelId: r,
            attachments: i,
            reportSubmit: !1
        },
        o = null !== (t = f[r]) && void 0 !== t ? t : _;
    (f[r] = [...o, a]), (E[n] = a);
}
function p(e) {
    let { messageId: t, channelId: n } = e,
        r = f[n];
    null != r &&
        ((f[n] = r.map((e) =>
            e.messageId === t
                ? {
                      ...e,
                      reportSubmit: !0
                  }
                : e
        )),
        (E[t] = {
            ...E[t],
            reportSubmit: !0
        }));
}
function m() {
    T();
}
function I(e) {
    let { explicitContentScanVersion: t } = e;
    (r = t), T();
}
function T() {
    (E = {}), (f = {});
}
class g extends (i = o.ZP.Store) {
    getFpMessageInfo(e) {
        return E[e];
    }
    getChannelFpInfo(e) {
        var t;
        return null !== (t = f[e]) && void 0 !== t ? t : _;
    }
    canSubmitFpReport(e) {
        let t = E[e];
        return null != t && !t.reportSubmit && u.default.age(t.messageId) < d;
    }
    get validContentScanVersion() {
        return r;
    }
}
c(g, 'displayName', 'FalsePositiveStore'),
    (t.Z = new g(s.Z, {
        LOGOUT: m,
        CONNECTION_OPEN: I,
        MESSAGE_EXPLICIT_CONTENT_FP_CREATE: h,
        MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: p
    }));
