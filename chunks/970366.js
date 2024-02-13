"use strict";
i.r(t), i.d(t, {
  trackAppUIViewed: function() {
    return u
  }
}), i("222007");
var r = i("748820"),
  s = i("49671"),
  n = i("599110"),
  l = i("49111");
let a = new class e {
  trackEvent(e, t) {
    let i = Date.now();
    requestIdleCallback(() => {
      n.default.track(e, {
        ... function() {
          var e, t, i;
          let r = "--campaign-id=",
            n = null !== (i = null === s.default || void 0 === s.default ? void 0 : null === (t = s.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== i ? i : [];
          for (let e of n)
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
          return null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(i => {
            let r = null != i.encodedBodySize ? i.encodedBodySize : i.decodedBodySize,
              s = null != i.decodedBodySize ? i.decodedBodySize : i.encodedBodySize,
              n = i.transferSize;
            null != s && null != r && (e = !0, t.total_compressed_byte_size += r, t.total_uncompressed_byte_size += s, null != n && (t.total_uncompressed_byte_size += n), "resource" === i.entryType && ("script" === i.initiatorType && null != i.name && null != i.name.match(/\.js/) && (t.js_compressed_byte_size += r, t.js_uncompressed_byte_size += s, null != n && (t.js_uncompressed_byte_size += n)), "link" === i.initiatorType && null != i.name && null != i.name.match(/\.css/) && (t.css_compressed_byte_size += r, t.css_uncompressed_byte_size += s, null != n && (t.css_uncompressed_byte_size += n))))
          }), e ? t : {}
        }(),
        load_id: this.loadId,
        screen_name: t,
        duration_ms_since_app_opened: i - window.GLOBAL_ENV.HTML_TIMESTAMP
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