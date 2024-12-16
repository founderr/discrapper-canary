n(47120), n(177593);
var i,
    l,
    o,
    r,
    a = n(442837),
    s = n(570140),
    u = n(375954);
let c = Object.freeze([]),
    d = {},
    h = {},
    f = {},
    v = {},
    p = {};
function x(t, e) {}
function g() {
    p = {};
}
function m(t, e) {
    let n = d[t];
    return null != n && ((d[t] = n.filter((t) => t.id !== e)), delete h[e], delete f[e], n.length !== d[t].length);
}
function w(t, e) {
    let n = d[t];
    if (null == n) return !1;
    d[t] = n.map((t) =>
        t.id === e.id
            ? {
                  ...t,
                  ...e
              }
            : t
    );
    let i = f[e.id];
    null != i &&
        null != v[i.id] &&
        (v[i.id] = {
            ...v[i.id],
            ...e
        });
}
class y extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    getFiles(t) {
        var e;
        return null !== (e = d[t]) && void 0 !== e ? e : c;
    }
    getMessageForFile(t) {
        return f[t];
    }
    getUploaderFileForMessageId(t) {
        return v[t];
    }
    getUploadAttachments(t) {
        if (null != t) return p[t];
    }
}
(r = 'UploadStore'),
    (o = 'displayName') in (l = y)
        ? Object.defineProperty(l, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[o] = r),
    (e.Z = new y(s.Z, {
        CONNECTION_OPEN: function () {
            p = {};
        },
        LOGOUT: function () {
            p = {};
        },
        UPLOAD_START: function (t) {
            var e;
            let { channelId: n, file: i, uploader: l, message: o } = t;
            if (l._aborted || l._errored) return;
            let r = null !== (e = d[n]) && void 0 !== e ? e : c;
            (h[i.id] = l), (d[n] = [...r, i]), (f[i.id] = o);
            let { items: a } = i;
            null != a &&
                (v[o.id] = {
                    ...i,
                    items: a
                }),
                x(o.nonce, i);
        },
        UPLOAD_COMPRESSION_PROGRESS: function (t) {
            let { channelId: e, file: n } = t;
            w(e, n);
        },
        UPLOAD_PROGRESS: function (t) {
            let { channelId: e, file: n } = t;
            w(e, n);
        },
        UPLOAD_COMPLETE: function (t) {
            let { channelId: e, file: n } = t;
            return m(e, n.id);
        },
        UPLOAD_FAIL: function (t) {
            let { channelId: e, file: n } = t;
            return m(e, n.id);
        },
        UPLOAD_CANCEL_REQUEST: function (t) {
            let { file: e } = t,
                n = h[e.id];
            if (null == n) return !1;
            setImmediate(() => {
                var t;
                return null === (t = n.cancel) || void 0 === t ? void 0 : t.call(n);
            });
        },
        UPLOAD_ITEM_CANCEL_REQUEST: function (t) {
            let { file: e, itemId: n } = t,
                i = h[e.id];
            if (null == i) return !1;
            setImmediate(() => i.cancelItem(n));
        },
        UPLOAD_FILE_UPDATE: function (t) {
            let { channelId: e, file: n } = t,
                i = f[n.id];
            null != i && x(i.nonce, n), w(e, n);
        },
        UPLOAD_RESTORE_FAILED_UPLOAD: function (t) {
            let { file: e, messageId: n } = t;
            v[n] = e;
        }
    }));
