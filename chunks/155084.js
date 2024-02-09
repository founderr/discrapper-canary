"use strict";
n.r(e), n.d(e, {
  default: function() {
    return u
  }
}), n("222007"), n("424973");
var i = n("615361"),
  r = n("872717"),
  l = n("773336"),
  s = n("827032"),
  a = n("49111");
let o = new Set(["darwin", "linux", "win32", "ios", "android"]);
var u = new class t {
  increment(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      {
        name: n,
        tags: r
      } = t,
      a = {
        name: n,
        tags: (0, s.getGlobalTagsArray)()
      };
    null != r && r.forEach(t => {
      a.tags.push(t)
    });
    let u = function() {
      if ((0, l.isWeb)()) return "web";
      {
        let t = (0, l.getPlatformName)();
        return o.has(t) ? t : null
      }
    }();
    null != u && a.tags.push("platform:".concat(u));
    let c = function() {
      let t = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
      return i.ReleaseChannelsSets.ALL.has(t) ? t : null
    }();
    null != c && a.tags.push("release_channel:".concat(c)), this._metrics.push(a), (e || this._metrics.length >= 100) && this._flush()
  }
  _flush() {
    if (this._metrics.length > 0) {
      let t = [...this._metrics];
      r.default.post({
        url: a.Endpoints.METRICS,
        body: {
          metrics: t
        },
        retries: 1
      }).catch(e => {
        this._metrics.length + t.length < 100 && (this._metrics = [...this._metrics, ...t])
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