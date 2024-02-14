"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("376556"),
  i = n("309570"),
  a = n("429928"),
  s = n("404605"),
  r = n("550368"),
  o = n("407462"),
  u = n("78512"),
  d = n("49111");
let c = (e, t, n) => {
    var l, i, a;
    let {
      canvas: s
    } = e;
    s.setSize({
      w: o.canvasWidth,
      h: o.canvasHeight
    });
    let {
      color: r,
      theme: d
    } = (0, u.getProfileInfo)(n, "black");
    s.setColor(r), s.drawRoundedRect({
      x: 0,
      y: 0,
      h: o.canvasHeight,
      w: o.canvasWidth
    }, 8, !0), s.setColor("dark" === d ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), s.drawRoundedRect({
      x: 0,
      y: 0,
      h: o.canvasHeight,
      w: o.canvasWidth
    }, 8, !0), (null === (l = t.assets) || void 0 === l ? void 0 : l.large_image) != null ? s.drawRoundedImage(o.AssetTypes.AssetImage, {
      x: o.padding,
      y: o.padding
    }, {
      w: o.activitySize,
      h: o.activitySize
    }, 8) : (null === (i = s.assetMap) || void 0 === i ? void 0 : i.has(o.AssetTypes.ApplicationImage)) ? s.drawRoundedImage("ApplicationImage", {
      x: o.padding,
      y: o.padding
    }, {
      w: o.activitySize,
      h: o.activitySize
    }, 8) : (s.setColor("dark" === d ? "white" : "black"), s.drawPath(o.ACTIVITY_IMAGE_FALLBACK_PATH, {
      x: o.padding,
      y: o.padding
    }, !0, 2 + 2 / 3));
    let c = o.activitySize + o.padding + o.imagePadding;
    s.setColor("dark" === d ? "white" : "rgb(6, 6, 7)"), s.setFont({
      size: 16,
      family: '"gg sans", sans-serif',
      weight: 700
    }), s.drawText("".concat(t.name), {
      x: c,
      y: o.fontPadding + 1 * o.lineHeight
    }, !0, (null === (a = s.assetMap) || void 0 === a ? void 0 : a.has(o.AssetTypes.Platform)) ? o.titleMaxWidthPlatform : o.titleMaxWidthNoPlatform), null != t.timestamps && (s.setFont({
      size: 14,
      weight: 400
    }), s.drawText("for ".concat((0, u.howLong)(t.timestamps)), {
      x: c,
      y: o.fontPadding + 2 * o.lineHeight
    }, !0))
  },
  f = (e, t, n) => {
    var l, i;
    let {
      canvas: a
    } = e;
    a.setSize({
      w: o.canvasWidth,
      h: o.canvasHeight
    });
    let {
      color: s,
      theme: r
    } = (0, u.getProfileInfo)(n, "black");
    a.setColor(s), a.drawRoundedRect({
      x: 0,
      y: 0,
      h: o.canvasHeight,
      w: o.canvasWidth
    }, 8, !0), a.setColor("dark" === r ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), a.drawRoundedRect({
      x: 0,
      y: 0,
      h: o.canvasHeight,
      w: o.canvasWidth
    }, 8, !0), (null === (l = a.assetMap) || void 0 === l ? void 0 : l.has(o.AssetTypes.AssetImage)) && a.drawRoundedImage(o.AssetTypes.AssetImage, {
      x: o.padding,
      y: o.padding
    }, {
      w: o.activitySize,
      h: o.activitySize
    }, 8);
    let d = o.activitySize + o.padding + o.imagePadding;
    a.setColor("dark" === r ? "white" : "rgb(6, 6, 7)"), a.setFont({
      size: 14,
      family: '"gg sans", sans-serif',
      weight: 700
    }), a.drawText("".concat(t.details), {
      x: d,
      y: o.fontPadding + 1 * o.lineHeight
    }, !0, (null === (i = a.assetMap) || void 0 === i ? void 0 : i.has(o.AssetTypes.Platform)) ? o.titleMaxWidthPlatform : o.titleMaxWidthNoPlatform), a.setFont({
      size: 14,
      weight: 400
    }), a.drawText("by ".concat(t.state), {
      x: d,
      y: o.fontPadding + 2 * o.lineHeight
    }, !0)
  },
  m = (e, t, n) => {
    var l;
    let {
      canvas: i
    } = e;
    i.setSize({
      w: 320,
      h: o.canvasHeight
    });
    let {
      assets: a,
      application_id: s
    } = t, d = (0, r.getAssetImage)(s, null == a ? void 0 : a.large_image, o.activitySize), {
      color: c,
      theme: f
    } = (0, u.getProfileInfo)(n, "black");
    i.setColor(c), i.drawRoundedRect({
      x: 0,
      y: 0,
      h: o.canvasHeight,
      w: o.canvasWidth
    }, 8, !0), i.setColor("dark" === f ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), i.drawRoundedRect({
      x: 0,
      y: 0,
      h: o.canvasHeight,
      w: o.canvasWidth
    }, 8, !0), null != d && i.drawRoundedImage(o.AssetTypes.AssetImage, {
      x: o.padding,
      y: o.padding
    }, {
      w: o.activitySize,
      h: o.activitySize
    }, 8);
    let m = o.activitySize + o.padding + o.imagePadding;
    i.setColor("dark" === f ? "white" : "rgb(6, 6, 7)"), i.setFont({
      size: 14,
      family: '"gg sans", sans-serif',
      weight: 700
    }), i.drawText("".concat(t.details), {
      x: m,
      y: o.fontPadding + 1 * o.lineHeight
    }, !0, (null === (l = i.assetMap) || void 0 === l ? void 0 : l.has(o.AssetTypes.Platform)) ? o.titleMaxWidthPlatform : o.titleMaxWidthNoPlatform), i.setFont({
      size: 14,
      weight: 400
    }), i.drawText("".concat(t.state), {
      x: m,
      y: o.fontPadding + 2 * o.lineHeight
    }, !0)
  },
  p = (e, t, n) => {
    var l, i, a;
    let {
      canvas: s
    } = e;
    s.setSize({
      w: o.canvasWidth,
      h: o.canvasHeight
    });
    let {
      color: r,
      theme: d
    } = (0, u.getProfileInfo)(n, "black");
    s.setColor(r), s.drawRoundedRect({
      x: 0,
      y: 0,
      h: o.canvasHeight,
      w: o.canvasWidth
    }, 8, !0), s.setColor("dark" === d ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), s.drawRoundedRect({
      x: 0,
      y: 0,
      h: o.canvasHeight,
      w: o.canvasWidth
    }, 8, !0), s.setColor("dark" === d ? "white" : "black"), (null === (l = t.assets) || void 0 === l ? void 0 : l.large_image) != null ? s.drawRoundedImage(o.AssetTypes.AssetImage, {
      x: o.padding,
      y: o.padding
    }, {
      w: o.activitySize,
      h: o.activitySize
    }, 8) : (null === (i = s.assetMap) || void 0 === i ? void 0 : i.has(o.AssetTypes.ApplicationImage)) ? s.drawRoundedImage("ApplicationImage", {
      x: o.padding,
      y: o.padding
    }, {
      w: o.activitySize,
      h: o.activitySize
    }, 8) : s.drawPath(o.ACTIVITY_IMAGE_FALLBACK_PATH, {
      x: o.padding,
      y: o.padding
    }, !0, 2 + 2 / 3);
    let c = o.activitySize + o.padding + o.imagePadding;
    s.setColor("dark" === d ? "white" : "rgb(6, 6, 7)"), s.setFont({
      size: 16,
      family: '"gg sans", sans-serif',
      weight: 700
    }), s.drawText("Streaming ".concat(t.name), {
      x: c,
      y: o.fontPadding + o.lineHeight * (null != t.timestamps ? 1 : 1.5)
    }, !0, (null === (a = s.assetMap) || void 0 === a ? void 0 : a.has(o.AssetTypes.Platform)) ? o.titleMaxWidthPlatform : o.titleMaxWidthNoPlatform), null != t.timestamps && (s.setFont({
      size: 14,
      weight: 500
    }), s.drawText("for ".concat((0, u.howLong)(t.timestamps)), {
      x: c,
      y: o.fontPadding + 2 * o.lineHeight
    }, !0))
  };
var h = e => {
  var t;
  let r, {
    renderer: u,
    activity: h,
    user: E,
    onComplete: g,
    stream: S
  } = e;
  {
    let e = n("800044").default;
    r = new e
  }
  let C = new s.default(u, r),
    {
      canvas: T
    } = C;
  T.setFont({
    truncate: !0
  }), null != S ? p(C, h, E) : (0, a.default)(h) ? f(C, h, E) : (0, i.default)(h) && h.name === l.default.get(d.PlatformTypes.LEAGUE_OF_LEGENDS).name ? m(C, h, E) : c(C, h, E), (null === (t = T.assetMap) || void 0 === t ? void 0 : t.has(o.AssetTypes.Platform)) && T.drawImage(o.AssetTypes.Platform, {
    x: o.canvasWidth - o.padding - o.platformSize,
    y: o.padding
  }, {
    w: o.platformSize,
    h: o.platformSize
  }), g(C)
}