n.d(t, {
  e: function() {
    return c
  }
}), n(47120);
var s = n(772848),
  i = n(579806),
  l = n(626135),
  r = n(981631);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let o = new class e {
  trackEvent(e, t) {
    let n = Date.now();
    requestIdleCallback(() => {
      l.default.track(e, {
        ... function() {
          var e, t, n;
          let s = "--campaign-id=";
          for (let l of null !== (n = null === i.Z || void 0 === i.Z ? void 0 : null === (t = i.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : [])
            if (l.startsWith(s)) return {
              referrer: l.substr(s.length)
            };
          return {}
        }(),
        ... function() {
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
          return null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(n => {
            let s = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
              i = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
              l = n.transferSize;
            null != i && null != s && (e = !0, t.total_compressed_byte_size += s, t.total_uncompressed_byte_size += i, null != l && (t.total_uncompressed_byte_size += l), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += s, t.js_uncompressed_byte_size += i, null != l && (t.js_uncompressed_byte_size += l)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += s, t.css_uncompressed_byte_size += i, null != l && (t.css_uncompressed_byte_size += l))))
          }), e ? t : {}
        }(),
        load_id: this.loadId,
        screen_name: t,
        duration_ms_since_app_opened: n - window.GLOBAL_ENV.HTML_TIMESTAMP
      })
    })
  }
  trackAppUIViewed(e) {
    if (!this.appUIViewed) this.trackEvent(r.rMx.APP_UI_VIEWED, e), this.appUIViewed = !0
  }
  constructor() {
    a(this, "loadId", (0, s.Z)()), a(this, "appUIViewed", !1)
  }
};

function c(e) {
  o.trackAppUIViewed(e)
}