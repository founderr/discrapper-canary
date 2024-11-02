n(47120), n(177593);
var i,
    l,
    a,
    r,
    o = n(442837),
    s = n(570140),
    u = n(375954);
let c = Object.freeze([]),
    d = {},
    h = {},
    m = {},
    x = {},
    v = {};
function f(e, t) {}
function p() {
    v = {};
}
function g(e, t) {
    let n = d[e];
    return null != n && ((d[e] = n.filter((e) => e.id !== t)), delete h[t], delete m[t], n.length !== d[e].length);
}
function C(e, t) {
    let n = d[e];
    if (null == n) return !1;
    d[e] = n.map((e) =>
        e.id === t.id
            ? {
                  ...e,
                  ...t
              }
            : e
    );
    let i = m[t.id];
    null != i &&
        null != x[i.id] &&
        (x[i.id] = {
            ...x[i.id],
            ...t
        });
}
class I extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    getFiles(e) {
        var t;
        return null !== (t = d[e]) && void 0 !== t ? t : c;
    }
    getMessageForFile(e) {
        return m[e];
    }
    getUploaderFileForMessageId(e) {
        return x[e];
    }
    getUploadAttachments(e) {
        if (null != e) return v[e];
    }
}
(r = 'UploadStore'),
    (a = 'displayName') in (l = I)
        ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = r),
    (t.Z = new I(s.Z, {
        CONNECTION_OPEN: function () {
            v = {};
        },
        LOGOUT: function () {
            v = {};
        },
        UPLOAD_START: function (e) {
            var t;
            let { channelId: n, file: i, uploader: l, message: a } = e;
            if (l._aborted || l._errored) return;
            let r = null !== (t = d[n]) && void 0 !== t ? t : c;
            (h[i.id] = l), (d[n] = [...r, i]), (m[i.id] = a);
            let { items: o } = i;
            null != o &&
                (x[a.id] = {
                    ...i,
                    items: o
                }),
                f(a.nonce, i);
        },
        UPLOAD_COMPRESSION_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            C(t, n);
        },
        UPLOAD_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            C(t, n);
        },
        UPLOAD_COMPLETE: function (e) {
            let { channelId: t, file: n } = e;
            return g(t, n.id);
        },
        UPLOAD_FAIL: function (e) {
            let { channelId: t, file: n } = e;
            return g(t, n.id);
        },
        UPLOAD_CANCEL_REQUEST: function (e) {
            let { file: t } = e,
                n = h[t.id];
            if (null == n) return !1;
            setImmediate(() => {
                var e;
                return null === (e = n.cancel) || void 0 === e ? void 0 : e.call(n);
            });
        },
        UPLOAD_ITEM_CANCEL_REQUEST: function (e) {
            let { file: t, itemId: n } = e,
                i = h[t.id];
            if (null == i) return !1;
            setImmediate(() => i.cancelItem(n));
        },
        UPLOAD_FILE_UPDATE: function (e) {
            let { channelId: t, file: n } = e,
                i = m[n.id];
            null != i && f(i.nonce, n), C(t, n);
        },
        UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
            let { file: t, messageId: n } = e;
            x[n] = t;
        }
    }));
