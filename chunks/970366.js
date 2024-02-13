"use strict";
r.r(t), r.d(t, {
  trackAppUIViewed: function() {
    return o
  }
}), r("222007");
var s = r("748820"),
  i = r("49671"),
  n = r("599110"),
  l = r("49111");
let a = new class e {
  trackEvent(e, t) {
    let r = Date.now();
    requestIdleCallback(() => {
      n.default.track(e, {
        ... function() {
          var e, t, r;
          let s = "--campaign-id=",
            n = null !== (r = null === i.default || void 0 === i.default ? void 0 : null === (t = i.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== r ? r : [];
          for (let e of n)
            if (e.startsWith(s)) return {
              referrer: e.substr(s.length)
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
          return null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(r => {
            let s = null != r.encodedBodySize ? r.encodedBodySize : r.decodedBodySize,
              i = null != r.decodedBodySize ? r.decodedBodySize : r.encodedBodySize,
              n = r.transferSize;
            null != i && null != s && (e = !0, t.total_compressed_byte_size += s, t.total_uncompressed_byte_size += i, null != n && (t.total_uncompressed_byte_size += n), "resource" === r.entryType && ("script" === r.initiatorType && null != r.name && null != r.name.match(/\.js/) && (t.js_compressed_byte_size += s, t.js_uncompressed_byte_size += i, null != n && (t.js_uncompressed_byte_size += n)), "link" === r.initiatorType && null != r.name && null != r.name.match(/\.css/) && (t.css_compressed_byte_size += s, t.css_uncompressed_byte_size += i, null != n && (t.css_uncompressed_byte_size += n))))
          }), e ? t : {}
        }(),
        load_id: this.loadId,
        screen_name: t,
        duration_ms_since_app_opened: r - window.GLOBAL_ENV.HTML_TIMESTAMP
      })
    })
  }
  trackAppUIViewed(e) {
    !this.appUIViewed && (this.trackEvent(l.AnalyticEvents.APP_UI_VIEWED, e), this.appUIViewed = !0)
  }
  constructor() {
    this.loadId = (0, s.v4)(), this.appUIViewed = !1
  }
};

function o(e) {
  a.trackAppUIViewed(e)
}