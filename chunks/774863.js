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
let h = {},
    p = {};
function m() {
    (h = {}), (p = {});
}
class g extends (i = l.ZP.Store) {
    getFpMessageInfo(e) {
        return h[e];
    }
    getChannelFpInfo(e) {
        var t;
        return null !== (t = p[e]) && void 0 !== t ? t : _;
    }
    canSubmitFpReport(e) {
        let t = h[e];
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
                (h = {}), (p = {});
            })();
        },
        CONNECTION_OPEN: function (e) {
            let { explicitContentScanVersion: t } = e;
            (r = t),
                (function () {
                    (h = {}), (p = {});
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
                s = null !== (t = p[r]) && void 0 !== t ? t : _;
            (p[r] = [...s, a]), (h[n] = a);
        },
        MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function (e) {
            let { messageId: t, channelId: n } = e,
                r = p[n];
            null != r &&
                ((p[n] = r.map((e) =>
                    e.messageId === t
                        ? {
                              ...e,
                              reportSubmit: !0
                          }
                        : e
                )),
                (h[t] = {
                    ...h[t],
                    reportSubmit: !0
                }));
        }
    }));
