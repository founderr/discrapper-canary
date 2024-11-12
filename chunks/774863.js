let r;
n(47120);
var i,
    a,
    s,
    o,
    l = n(442837),
    u = n(570140),
    c = n(70956),
    d = n(709054);
let f = 14 * c.Z.Millis.DAY,
    _ = Object.freeze([]);
let p = {},
    h = {};
function m() {
    (p = {}), (h = {});
}
class g extends (i = l.ZP.Store) {
    getFpMessageInfo(e) {
        return p[e];
    }
    getChannelFpInfo(e) {
        var t;
        return null !== (t = h[e]) && void 0 !== t ? t : _;
    }
    canSubmitFpReport(e) {
        let t = p[e];
        return null != t && !t.reportSubmit && d.default.age(t.messageId) < f;
    }
    get validContentScanVersion() {
        return r;
    }
}
(o = 'FalsePositiveStore'),
    (s = 'displayName') in (a = g)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new g(u.Z, {
        LOGOUT: function () {
            (function () {
                (p = {}), (h = {});
            })();
        },
        CONNECTION_OPEN: function (e) {
            let { explicitContentScanVersion: t } = e;
            (r = t),
                (function () {
                    (p = {}), (h = {});
                })();
        },
        MESSAGE_EXPLICIT_CONTENT_FP_CREATE: function (e) {
            var t;
            let { messageId: n, channelId: r, attachments: i } = e,
                a = {
                    messageId: n,
                    channelId: r,
                    attachments: i,
                    reportSubmit: !1
                },
                s = null !== (t = h[r]) && void 0 !== t ? t : _;
            (h[r] = [...s, a]), (p[n] = a);
        },
        MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function (e) {
            let { messageId: t, channelId: n } = e,
                r = h[n];
            null != r &&
                ((h[n] = r.map((e) =>
                    e.messageId === t
                        ? {
                              ...e,
                              reportSubmit: !0
                          }
                        : e
                )),
                (p[t] = {
                    ...p[t],
                    reportSubmit: !0
                }));
        }
    }));
