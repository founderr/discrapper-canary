"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007"), n("424973");
var r = n("615361"),
  s = n("872717"),
  i = n("773336"),
  a = n("827032"),
  l = n("49111");
let o = new Set(["darwin", "linux", "win32", "ios", "android"]);
var u = new class e {
  increment(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      {
        name: n,
        tags: s
      } = e,
      l = {
        name: n,
        tags: (0, a.getGlobalTagsArray)()
      };
    null != s && s.forEach(e => {
      l.tags.push(e)
    });
    let u = function() {
      if ((0, i.isWeb)()) return "web";
      {
        let e = (0, i.getPlatformName)();
        return o.has(e) ? e : null
      }
    }();
    null != u && l.tags.push("platform:".concat(u));
    let c = function() {
      let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
      return r.ReleaseChannelsSets.ALL.has(e) ? e : null
    }();
    null != c && l.tags.push("release_channel:".concat(c)), this._metrics.push(l), (t || this._metrics.length >= 100) && this._flush()
  }
  _flush() {
    if (this._metrics.length > 0) {
      let e = [...this._metrics];
      s.default.post({
        url: l.Endpoints.METRICS,
        body: {
          metrics: e,
          client_info: {
            built_at: "1708721377669",
            build_number: "268618"
          }
        },
        retries: 1
      }).catch(t => {
        this._metrics.length + e.length < 100 && (this._metrics = [...this._metrics, ...e])
      })
    }
    this._metrics = []
  }
  constructor() {
    this._metrics = [], this._intervalId = setInterval(() => {
      this._flush()
    }, 12e4)
  }
}