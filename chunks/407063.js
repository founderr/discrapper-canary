"use strict";
n.r(t), n.d(t, {
  getDevicePixelRatio: function() {
    return E.default
  },
  isImageLoaded: function() {
    return I
  },
  loadImage: function() {
    return S
  },
  getBestMediaProxySize: function() {
    return f
  },
  getImageSrc: function() {
    return O
  }
}), n("222007");
var r = n("917351"),
  i = n.n(r),
  o = n("693566"),
  l = n.n(o),
  u = n("522632"),
  a = n("981980"),
  s = n("35468"),
  E = n("547630"),
  _ = n("49111");
let c = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
  d = new l({
    max: 1e3
  });

function T(e) {
  let t = new Image;
  t.onerror = function(e, t) {
    null == e.backoff && (e.backoff = new a.default);
    let {
      backoff: n
    } = e;
    return async () => {
      await s.default.isOnline(), n.fails < 5 ? n.fail(() => {
        T(e)
      }) : A(!0, e, t)
    }
  }(e, t), t.onload = () => {
    let {
      backoff: n
    } = e;
    null != n && n.succeed(), A(!1, e, t)
  }, t.src = e.url
}

function A(e, t, n) {
  let {
    callbacks: r,
    url: i
  } = t;
  if (e) d.del(i);
  else {
    let {
      width: e,
      height: r
    } = n;
    t = {
      url: i,
      loaded: !0,
      width: e,
      height: r
    }, d.set(i, t)
  }
  null != r && r.forEach(n => n(e, t))
}

function I(e) {
  let t = d.get(e);
  return null != t && t.loaded
}

function S(e, t) {
  let n = d.get(e);
  if (null != n && n.loaded) return null != t && s.default.awaitOnline().then(() => {
    null != n && null != n.callbacks && n.callbacks.forEach(t => {
      null != n ? t(!1, n) : t(!0, {
        url: e,
        loaded: !0
      })
    })
  }), _.NOOP;
  {
    let r;
    return null == n && (n = {
      url: e,
      loaded: !1
    }, d.set(e, n), T(n)), null != t && (r = t.bind(null), null == n.callbacks && (n.callbacks = new Set), n.callbacks.add(r)), () => {
      null != r && null != n && (null != n.callbacks && n.callbacks.delete(r), null != n.backoff && n.backoff.cancel())
    }
  }
}

function f(e) {
  var t;
  return null !== (t = c.find(t => e <= t)) && void 0 !== t ? t : c[c.length - 1]
}

function O(e) {
  let {
    src: t,
    width: n,
    height: r,
    maxWidth: o,
    maxHeight: l,
    ratio: a = 1,
    format: s = null,
    quality: _ = null
  } = e, c = n, d = r;
  a < 1 && (c = Math.round(n * a), d = Math.round(r * a)), null != o && (c = Math.min(c, o)), null != l && (d = Math.min(d, l));
  let T = (0, E.default)();
  return c *= T,
    function(e) {
      let {
        src: t,
        sourceWidth: n,
        sourceHeight: r,
        targetWidth: o,
        targetHeight: l,
        format: a = null,
        quality: s = null
      } = e, [E, _] = function(e) {
        let [t, n] = e.split("?");
        return [t, u.parse(n)]
      }(t);
      return null != a && (_.format = a), null != s && (_.quality = s), (o !== n || l !== r) && (_.width = 0 | o, _.height = 0 | l), !i.isEmpty(_) && (E += "?" + u.stringify(_)), E
    }({
      src: t,
      sourceWidth: n,
      sourceHeight: r,
      targetWidth: c,
      targetHeight: d *= T,
      format: s,
      quality: _
    })
}