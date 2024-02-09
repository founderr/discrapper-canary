"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007"), n("424973");
var s = n("615361"),
  r = n("872717"),
  l = n("773336"),
  a = n("827032"),
  i = n("49111");
let o = new Set(["darwin", "linux", "win32", "ios", "android"]);
var u = new class e {
  increment(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      {
        name: n,
        tags: r
      } = e,
      i = {
        name: n,
        tags: (0, a.getGlobalTagsArray)()
      };
    null != r && r.forEach(e => {
      i.tags.push(e)
    });
    let u = function() {
      if ((0, l.isWeb)()) return "web";
      {
        let e = (0, l.getPlatformName)();
        return o.has(e) ? e : null
      }
    }();
    null != u && i.tags.push("platform:".concat(u));
    let c = function() {
      let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
      return s.ReleaseChannelsSets.ALL.has(e) ? e : null
    }();
    null != c && i.tags.push("release_channel:".concat(c)), this._metrics.push(i), (t || this._metrics.length >= 100) && this._flush()
  }
  _flush() {
    if (this._metrics.length > 0) {
      let e = [...this._metrics];
      r.default.post({
        url: i.Endpoints.METRICS,
        body: {
          metrics: e
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