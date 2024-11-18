n.d(t, {
    Cb: function () {
        return r;
    },
    Hv: function () {
        return p;
    },
    JD: function () {
        return f;
    },
    VY: function () {
        return d;
    },
    y_: function () {
        return _;
    },
    ym: function () {
        return c;
    }
}),
    n(789020);
var r,
    i,
    a = n(911969),
    s = n(406432),
    o = n(630388),
    l = n(591759),
    u = n(981631);
(i = r || (r = {}))[(i.EXPLICIT = 1)] = 'EXPLICIT';
function c(e) {
    var t, n;
    return {
        url: e.url,
        proxyUrl: e.proxy_url,
        height: e.height,
        width: e.width,
        placeholder: e.placeholder,
        placeholderVersion: e.placeholder_version,
        contentType: e.content_type,
        loadingState: e.loading_state,
        contentScanMetadata:
            null != e.content_scan_metadata
                ? {
                      version: (n = e.content_scan_metadata).version,
                      flags: n.flags
                  }
                : void 0,
        srcIsAnimated: (0, o.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, u.J0y.IS_ANIMATED)
    };
}
function d(e) {
    var t, n;
    let r = 0;
    return (
        (0, o.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, u.J0y.CONTAINS_EXPLICIT_MEDIA) && (r += 1),
        {
            url: e.url,
            proxyUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            contentType: e.content_type,
            placeholder: e.placeholder,
            placeholderVersion: e.placeholder_version,
            loadingState: a.f.LOADED_SUCCESS,
            contentScanMetadata:
                null == e.content_scan_version
                    ? void 0
                    : {
                          version: e.content_scan_version,
                          flags: r
                      },
            srcIsAnimated: (0, o.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, u.J0y.IS_ANIMATED)
        }
    );
}
function f(e, t) {
    var n;
    return {
        ...d(e),
        type: ((n = e), (0, s.CO)(n.filename) ? 'IMAGE' : (0, s.NU)(n.filename) ? 'VIDEO' : 'INVALID'),
        sourceMetadata: {
            message: t,
            identifier: {
                type: 'attachment',
                attachmentId: e.id
            }
        }
    };
}
function _(e) {
    var t;
    return {
        ...e,
        type: ((t = e), (0, s.tw)(t.contentType) ? 'IMAGE' : (0, s.X2)(t.contentType) && null != t.proxyUrl && null != l.Z.toURLSafe(t.proxyUrl) ? 'VIDEO' : 'INVALID')
    };
}
function p(e, t, n) {
    return {
        type: n,
        url: e.url,
        proxyUrl: e.proxyURL,
        width: e.width,
        height: e.height,
        placeholder: e.placeholder,
        placeholderVersion: e.placeholderVersion,
        sourceMetadata: t
    };
}
