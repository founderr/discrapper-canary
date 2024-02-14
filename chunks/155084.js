"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007"), n("424973");
var l = n("615361"),
  i = n("872717"),
  a = n("773336"),
  s = n("827032"),
  r = n("49111");
let u = new Set(["darwin", "linux", "win32", "ios", "android"]);
var o = new class e {
  increment(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      {
        name: n,
        tags: i
      } = e,
      r = {
        name: n,
        tags: (0, s.getGlobalTagsArray)()
      };
    null != i && i.forEach(e => {
      r.tags.push(e)
    });
    let o = function() {
      if ((0, a.isWeb)()) return "web";
      {
        let e = (0, a.getPlatformName)();
        return u.has(e) ? e : null
      }
    }();
    null != o && r.tags.push("platform:".concat(o));
    let d = function() {
      let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
      return l.ReleaseChannelsSets.ALL.has(e) ? e : null
    }();
    null != d && r.tags.push("release_channel:".concat(d)), this._metrics.push(r), (t || this._metrics.length >= 100) && this._flush()
  }
  _flush() {
    if (this._metrics.length > 0) {
      let e = [...this._metrics];
      i.default.post({
        url: r.Endpoints.METRICS,
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