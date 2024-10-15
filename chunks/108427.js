n.d(t, {
    e: function () {
        return c;
    }
}),
    n(47120);
var r = n(772848),
    s = n(579806),
    i = n(626135),
    l = n(981631);
function a(e, t, n) {
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
let o = new (class e {
    trackEvent(e, t) {
        let n = Date.now();
        requestIdleCallback(() => {
            i.default.track(e, {
                ...(function () {
                    var e, t, n;
                    let r = '--campaign-id=';
                    for (let i of null !== (n = null === s.Z || void 0 === s.Z ? void 0 : null === (t = s.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : []) if (i.startsWith(r)) return { referrer: i.substr(r.length) };
                    return {};
                })(),
                ...(function () {
                    let e = !1,
                        t = {
                            total_compressed_byte_size: 0,
                            total_uncompressed_byte_size: 0,
                            total_transfer_byte_size: 0,
                            js_compressed_byte_size: 0,
                            js_uncompressed_byte_size: 0,
                            js_transfer_byte_size: 0,
                            css_compressed_byte_size: 0,
                            css_uncompressed_byte_size: 0,
                            css_transfer_byte_size: 0
                        };
                    return (
                        null != window.performance &&
                            null != window.performance.getEntries &&
                            window.performance.getEntries().forEach((n) => {
                                let r = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
                                    s = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                    i = n.transferSize;
                                null != s && null != r && ((e = !0), (t.total_compressed_byte_size += r), (t.total_uncompressed_byte_size += s), null != i && (t.total_uncompressed_byte_size += i), 'resource' === n.entryType && ('script' === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && ((t.js_compressed_byte_size += r), (t.js_uncompressed_byte_size += s), null != i && (t.js_uncompressed_byte_size += i)), 'link' === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && ((t.css_compressed_byte_size += r), (t.css_uncompressed_byte_size += s), null != i && (t.css_uncompressed_byte_size += i))));
                            }),
                        e ? t : {}
                    );
                })(),
                load_id: this.loadId,
                screen_name: t,
                duration_ms_since_app_opened: n - window.GLOBAL_ENV.HTML_TIMESTAMP
            });
        });
    }
    trackAppUIViewed(e) {
        if (!this.appUIViewed) this.trackEvent(l.rMx.APP_UI_VIEWED, e), (this.appUIViewed = !0);
    }
    constructor() {
        a(this, 'loadId', (0, r.Z)()), a(this, 'appUIViewed', !1);
    }
})();
function c(e) {
    o.trackAppUIViewed(e);
}
