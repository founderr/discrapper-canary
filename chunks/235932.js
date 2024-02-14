"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("376556"),
  i = n("309570"),
  a = n("429928"),
  s = n("404605"),
  r = n("695412"),
  o = n("550368"),
  u = n("407462"),
  d = n("78512"),
  c = n("49111");
let f = (e, t) => {
    e.setColor("dark" === t ? "white" : "black"), e.drawPath(u.ACTIVITY_IMAGE_FALLBACK_PATH, {
      x: u.padding,
      y: u.padding
    }, !0, 2 + 2 / 3)
  },
  m = (e, t, n) => {
    var l, i, a;
    let {
      canvas: s
    } = e;
    s.setSize({
      w: u.canvasWidth,
      h: u.canvasHeight
    });
    let {
      color: r,
      theme: o
    } = (0, d.getProfileInfo)(n, "black");
    s.setColor(r), s.drawRoundedRect({
      x: 0,
      y: 0,
      h: u.canvasHeight,
      w: u.canvasWidth
    }, 8, !0), s.setColor("dark" === o ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), s.drawRoundedRect({
      x: 0,
      y: 0,
      h: u.canvasHeight,
      w: u.canvasWidth
    }, 8, !0), (null === (l = t.assets) || void 0 === l ? void 0 : l.large_image) != null ? s.drawRoundedImage(u.AssetTypes.AssetImage, {
      x: u.padding,
      y: u.padding
    }, {
      w: u.activitySize,
      h: u.activitySize
    }, 8) : (null === (i = s.assetMap) || void 0 === i ? void 0 : i.has(u.AssetTypes.ApplicationImage)) ? s.drawRoundedImage("ApplicationImage", {
      x: u.padding,
      y: u.padding
    }, {
      w: u.activitySize,
      h: u.activitySize
    }, 8) : f(s, o);
    let c = u.activitySize + u.padding + u.imagePadding;
    s.setColor("dark" === o ? "white" : "rgb(6, 6, 7)"), s.setFont({
      size: 16,
      family: '"gg sans", sans-serif',
      weight: 700
    }), s.drawText("".concat(t.name), {
      x: c,
      y: u.fontPadding + 1 * u.lineHeight
    }, !0, (null === (a = s.assetMap) || void 0 === a ? void 0 : a.has(u.AssetTypes.Platform)) ? u.titleMaxWidthPlatform : u.titleMaxWidthNoPlatform), null != t.timestamps && (s.setFont({
      size: 14,
      weight: 400
    }), s.drawText("for ".concat((0, d.howLong)(t.timestamps)), {
      x: c,
      y: u.fontPadding + 2 * u.lineHeight
    }, !0))
  },
  p = (e, t, n) => {
    var l, i;
    let {
      canvas: a
    } = e;
    a.setSize({
      w: u.canvasWidth,
      h: u.canvasHeight
    });
    let {
      color: s,
      theme: r
    } = (0, d.getProfileInfo)(n, "black");
    a.setColor(s), a.drawRoundedRect({
      x: 0,
      y: 0,
      h: u.canvasHeight,
      w: u.canvasWidth
    }, 8, !0), a.setColor("dark" === r ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), a.drawRoundedRect({
      x: 0,
      y: 0,
      h: u.canvasHeight,
      w: u.canvasWidth
    }, 8, !0), (null === (l = a.assetMap) || void 0 === l ? void 0 : l.has(u.AssetTypes.AssetImage)) && a.drawRoundedImage(u.AssetTypes.AssetImage, {
      x: u.padding,
      y: u.padding
    }, {
      w: u.activitySize,
      h: u.activitySize
    }, 8);
    let o = u.activitySize + u.padding + u.imagePadding;
    a.setColor("dark" === r ? "white" : "rgb(6, 6, 7)"), a.setFont({
      size: 14,
      family: '"gg sans", sans-serif',
      weight: 700
    }), a.drawText("".concat(t.details), {
      x: o,
      y: u.fontPadding + 1 * u.lineHeight
    }, !0, (null === (i = a.assetMap) || void 0 === i ? void 0 : i.has(u.AssetTypes.Platform)) ? u.titleMaxWidthPlatform : u.titleMaxWidthNoPlatform), a.setFont({
      size: 14,
      weight: 400
    }), a.drawText("by ".concat(t.state), {
      x: o,
      y: u.fontPadding + 2 * u.lineHeight
    }, !0)
  },
  h = (e, t, n) => {
    var l;
    let {
      canvas: i
    } = e;
    i.setSize({
      w: u.canvasWidth,
      h: u.canvasHeight
    });
    let {
      assets: a,
      application_id: s
    } = t, c = (0, o.getAssetImage)(s, null == a ? void 0 : a.large_image, u.activitySize), {
      color: f,
      theme: m
    } = (0, d.getProfileInfo)(n, "black");
    if (i.setColor(f), i.drawRoundedRect({
        x: 0,
        y: 0,
        h: u.canvasHeight,
        w: u.canvasWidth
      }, 8, !0), i.setColor("dark" === m ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), i.drawRoundedRect({
        x: 0,
        y: 0,
        h: u.canvasHeight,
        w: u.canvasWidth
      }, 8, !0), i.setColor("dark" === m ? "white" : "black"), null != c) {
      let e = i.drawRoundedImage(u.AssetTypes.AssetImage, {
        x: u.padding,
        y: u.padding
      }, {
        w: u.activitySize,
        h: u.activitySize
      }, 8);
      e === r.DrawResultStatus.Failure && i.drawPath(u.ACTIVITY_IMAGE_FALLBACK_PATH, {
        x: u.padding,
        y: u.padding
      }, !0, 2 + 2 / 3)
    } else i.drawPath(u.ACTIVITY_IMAGE_FALLBACK_PATH, {
      x: u.padding,
      y: u.padding
    }, !0, 2 + 2 / 3);
    let p = u.activitySize + u.padding + u.imagePadding;
    i.setColor("dark" === m ? "white" : "rgb(6, 6, 7)"), i.setFont({
      size: 14,
      family: '"gg sans", sans-serif',
      weight: 700
    }), i.drawText("".concat(t.details), {
      x: p,
      y: u.fontPadding + 1 * u.lineHeight
    }, !0, (null === (l = i.assetMap) || void 0 === l ? void 0 : l.has(u.AssetTypes.Platform)) ? u.titleMaxWidthPlatform : u.titleMaxWidthNoPlatform), i.setFont({
      size: 14,
      weight: 400
    }), i.drawText("".concat(t.state), {
      x: p,
      y: u.fontPadding + 2 * u.lineHeight
    }, !0)
  },
  E = (e, t, n) => {
    var l, i, a;
    let {
      canvas: s
    } = e;
    s.setSize({
      w: u.canvasWidth,
      h: u.canvasHeight
    });
    let {
      color: r,
      theme: o
    } = (0, d.getProfileInfo)(n, "black");
    s.setColor(r), s.drawRoundedRect({
      x: 0,
      y: 0,
      h: u.canvasHeight,
      w: u.canvasWidth
    }, 8, !0), s.setColor("dark" === o ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), s.drawRoundedRect({
      x: 0,
      y: 0,
      h: u.canvasHeight,
      w: u.canvasWidth
    }, 8, !0), (null === (l = t.assets) || void 0 === l ? void 0 : l.large_image) != null ? s.drawRoundedImage(u.AssetTypes.AssetImage, {
      x: u.padding,
      y: u.padding
    }, {
      w: u.activitySize,
      h: u.activitySize
    }, 8) : (null === (i = s.assetMap) || void 0 === i ? void 0 : i.has(u.AssetTypes.ApplicationImage)) ? s.drawRoundedImage("ApplicationImage", {
      x: u.padding,
      y: u.padding
    }, {
      w: u.activitySize,
      h: u.activitySize
    }, 8) : f(s, o);
    let c = u.activitySize + u.padding + u.imagePadding;
    s.setColor("dark" === o ? "white" : "rgb(6, 6, 7)"), s.setFont({
      size: 16,
      family: '"gg sans", sans-serif',
      weight: 700
    }), s.drawText("Streaming ".concat(t.name), {
      x: c,
      y: u.fontPadding + u.lineHeight * (null != t.timestamps ? 1 : 1.5)
    }, !0, (null === (a = s.assetMap) || void 0 === a ? void 0 : a.has(u.AssetTypes.Platform)) ? u.titleMaxWidthPlatform : u.titleMaxWidthNoPlatform), null != t.timestamps && (s.setFont({
      size: 14,
      weight: 500
    }), s.drawText("for ".concat((0, d.howLong)(t.timestamps)), {
      x: c,
      y: u.fontPadding + 2 * u.lineHeight
    }, !0))
  };
var g = e => {
  var t;
  let r, {
    renderer: o,
    activity: d,
    user: f,
    onComplete: g,
    stream: S
  } = e;
  {
    let e = n("800044").default;
    r = new e
  }
  let C = new s.default(o, r),
    {
      canvas: T
    } = C;
  T.setFont({
    truncate: !0
  }), null != S ? E(C, d, f) : (0, a.default)(d) ? p(C, d, f) : (0, i.default)(d) && d.name === l.default.get(c.PlatformTypes.LEAGUE_OF_LEGENDS).name ? h(C, d, f) : m(C, d, f), (null === (t = T.assetMap) || void 0 === t ? void 0 : t.has(u.AssetTypes.Platform)) && T.drawImage(u.AssetTypes.Platform, {
    x: u.canvasWidth - u.padding - u.platformSize,
    y: u.padding
  }, {
    w: u.platformSize,
    h: u.platformSize
  }), g(C)
}