"use strict";
s.r(t), s.d(t, {
  trackAppUIViewed: function() {
    return u
  }
}), s("222007");
var r = s("748820"),
  n = s("49671"),
  i = s("599110"),
  l = s("49111");
let a = new class e {
  trackEvent(e, t) {
    let s = Date.now();
    requestIdleCallback(() => {
      i.default.track(e, {
        ... function() {
          var e, t, s;
          let r = "--campaign-id=",
            i = null !== (s = null === n.default || void 0 === n.default ? void 0 : null === (t = n.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== s ? s : [];
          for (let e of i)
            if (e.startsWith(r)) return {
              referrer: e.substr(r.length)
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
          return null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(s => {
            let r = null != s.encodedBodySize ? s.encodedBodySize : s.decodedBodySize,
              n = null != s.decodedBodySize ? s.decodedBodySize : s.encodedBodySize,
              i = s.transferSize;
            null != n && null != r && (e = !0, t.total_compressed_byte_size += r, t.total_uncompressed_byte_size += n, null != i && (t.total_uncompressed_byte_size += i), "resource" === s.entryType && ("script" === s.initiatorType && null != s.name && null != s.name.match(/\.js/) && (t.js_compressed_byte_size += r, t.js_uncompressed_byte_size += n, null != i && (t.js_uncompressed_byte_size += i)), "link" === s.initiatorType && null != s.name && null != s.name.match(/\.css/) && (t.css_compressed_byte_size += r, t.css_uncompressed_byte_size += n, null != i && (t.css_uncompressed_byte_size += i))))
          }), e ? t : {}
        }(),
        load_id: this.loadId,
        screen_name: t,
        duration_ms_since_app_opened: s - window.GLOBAL_ENV.HTML_TIMESTAMP
      })
    })
  }
  trackAppUIViewed(e) {
    !this.appUIViewed && (this.trackEvent(l.AnalyticEvents.APP_UI_VIEWED, e), this.appUIViewed = !0)
  }
  constructor() {
    this.loadId = (0, r.v4)(), this.appUIViewed = !1
  }
};

function u(e) {
  a.trackAppUIViewed(e)
}