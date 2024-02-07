"use strict";
n.r(e), n.d(e, {
  default: function() {
    return s
  }
}), n("222007"), n("424973");
var r = n("615361"),
  i = n("872717"),
  u = n("773336"),
  o = n("827032"),
  a = n("49111");
let l = new Set(["darwin", "linux", "win32", "ios", "android"]);
var s = new class t {
  increment(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      {
        name: n,
        tags: i
      } = t,
      a = {
        name: n,
        tags: (0, o.getGlobalTagsArray)()
      };
    null != i && i.forEach(t => {
      a.tags.push(t)
    });
    let s = function() {
      if ((0, u.isWeb)()) return "web";
      {
        let t = (0, u.getPlatformName)();
        return l.has(t) ? t : null
      }
    }();
    null != s && a.tags.push("platform:".concat(s));
    let c = function() {
      let t = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
      return r.ReleaseChannelsSets.ALL.has(t) ? t : null
    }();
    null != c && a.tags.push("release_channel:".concat(c)), this._metrics.push(a), (e || this._metrics.length >= 100) && this._flush()
  }
  _flush() {
    if (this._metrics.length > 0) {
      let t = [...this._metrics];
      i.default.post({
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