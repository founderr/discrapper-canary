"use strict";
n.r(e), n.d(e, {
  default: function() {
    return o
  }
}), n("222007"), n("424973");
var i = n("615361"),
  r = n("872717"),
  a = n("773336"),
  s = n("827032"),
  l = n("49111");
let u = new Set(["darwin", "linux", "win32", "ios", "android"]);
var o = new class t {
  increment(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      {
        name: n,
        tags: r
      } = t,
      l = {
        name: n,
        tags: (0, s.getGlobalTagsArray)()
      };
    null != r && r.forEach(t => {
      l.tags.push(t)
    });
    let o = function() {
      if ((0, a.isWeb)()) return "web";
      {
        let t = (0, a.getPlatformName)();
        return u.has(t) ? t : null
      }
    }();
    null != o && l.tags.push("platform:".concat(o));
    let c = function() {
      let t = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
      return i.ReleaseChannelsSets.ALL.has(t) ? t : null
    }();
    null != c && l.tags.push("release_channel:".concat(c)), this._metrics.push(l), (e || this._metrics.length >= 100) && this._flush()
  }
  _flush() {
    if (this._metrics.length > 0) {
      let t = [...this._metrics];
      r.default.post({
        url: l.Endpoints.METRICS,
        body: {
          metrics: t,
          client_info: {
            built_at: "1708566184047",
            build_number: "268033"
          }
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