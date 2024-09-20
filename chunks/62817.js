n(47120), n(177593);
var l,
    a,
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
    E = {};
function v(e, t) {}
function _() {
    E = {};
}
function p(e, t) {
    let n = d[e];
    return null != n && ((d[e] = n.filter((e) => e.id !== t)), delete h[t], delete m[t], n.length !== d[e].length);
}
function f(e, t) {
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
    let l = m[t.id];
    null != l &&
        null != x[l.id] &&
        (x[l.id] = {
            ...x[l.id],
            ...t
        });
}
class T extends (l = s.ZP.Store) {
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
        if (null != e) return E[e];
    }
}
(r = 'UploadStore'),
    (i = 'displayName') in (a = T)
        ? Object.defineProperty(a, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[i] = r),
    (t.Z = new T(o.Z, {
        CONNECTION_OPEN: function () {
            E = {};
        },
        LOGOUT: function () {
            E = {};
        },
        UPLOAD_START: function (e) {
            var t;
            let { channelId: n, file: l, uploader: a, message: i } = e;
            if (a._aborted || a._errored) return;
            let r = null !== (t = d[n]) && void 0 !== t ? t : c;
            (h[l.id] = a), (d[n] = [...r, l]), (m[l.id] = i);
            let { items: s } = l;
            null != s &&
                (x[i.id] = {
                    ...l,
                    items: s
                }),
                v(i.nonce, l);
        },
        UPLOAD_COMPRESSION_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            f(t, n);
        },
        UPLOAD_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            f(t, n);
        },
        UPLOAD_COMPLETE: function (e) {
            let { channelId: t, file: n } = e;
            return p(t, n.id);
        },
        UPLOAD_FAIL: function (e) {
            let { channelId: t, file: n } = e;
            return p(t, n.id);
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
                l = h[t.id];
            if (null == l) return !1;
            setImmediate(() => l.cancelItem(n));
        },
        UPLOAD_FILE_UPDATE: function (e) {
            let { channelId: t, file: n } = e,
                l = m[n.id];
            null != l && v(l.nonce, n), f(t, n);
        },
        UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
            let { file: t, messageId: n } = e;
            x[n] = t;
        }
    }));
