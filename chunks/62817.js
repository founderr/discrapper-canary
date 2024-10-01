n(47120), n(177593);
var a,
    l,
    i,
    r,
    s = n(442837),
    o = n(570140),
    u = n(375954);
let c = Object.freeze([]),
    d = {},
    h = {},
    m = {},
    x = {},
    v = {};
function E(e, t) {}
function _() {
    v = {};
}
function f(e, t) {
    let n = d[e];
    return null != n && ((d[e] = n.filter((e) => e.id !== t)), delete h[t], delete m[t], n.length !== d[e].length);
}
function p(e, t) {
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
    let a = m[t.id];
    null != a &&
        null != x[a.id] &&
        (x[a.id] = {
            ...x[a.id],
            ...t
        });
}
class T extends (a = s.ZP.Store) {
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
    (i = 'displayName') in (l = T)
        ? Object.defineProperty(l, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[i] = r),
    (t.Z = new T(o.Z, {
        CONNECTION_OPEN: function () {
            v = {};
        },
        LOGOUT: function () {
            v = {};
        },
        UPLOAD_START: function (e) {
            var t;
            let { channelId: n, file: a, uploader: l, message: i } = e;
            if (l._aborted || l._errored) return;
            let r = null !== (t = d[n]) && void 0 !== t ? t : c;
            (h[a.id] = l), (d[n] = [...r, a]), (m[a.id] = i);
            let { items: s } = a;
            null != s &&
                (x[i.id] = {
                    ...a,
                    items: s
                }),
                E(i.nonce, a);
        },
        UPLOAD_COMPRESSION_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            p(t, n);
        },
        UPLOAD_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            p(t, n);
        },
        UPLOAD_COMPLETE: function (e) {
            let { channelId: t, file: n } = e;
            return f(t, n.id);
        },
        UPLOAD_FAIL: function (e) {
            let { channelId: t, file: n } = e;
            return f(t, n.id);
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
                a = h[t.id];
            if (null == a) return !1;
            setImmediate(() => a.cancelItem(n));
        },
        UPLOAD_FILE_UPDATE: function (e) {
            let { channelId: t, file: n } = e,
                a = m[n.id];
            null != a && E(a.nonce, n), p(t, n);
        },
        UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
            let { file: t, messageId: n } = e;
            x[n] = t;
        }
    }));
