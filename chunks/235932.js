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
    }, 8, !0), (null === (l = t.assets) || void 0 === l ? void 0 : l.large_image) != null ? a.drawImage(o.AssetTypes.AssetImage, {
      x: 0,
      y: 8
    }, {
      w: o.activitySize,
      h: o.activitySize
    }) : (null === (i = a.assetMap) || void 0 === i ? void 0 : i.has(o.AssetTypes.ApplicationImage)) && a.drawImage("ApplicationImage", {
      x: 0,
      y: 8
    }, {
      w: o.activitySize,
      h: o.activitySize
    }), a.setColor("dark" === r ? "white" : "rgb(6, 6, 7)"), a.setFont({
      size: 16,
      family: "sans-serif"
    }), a.drawText("".concat(n.username, " is playing"), {
      x: o.activitySize + o.padding,
      y: o.fontPadding
    }, !0), a.drawText("".concat(t.name), {
      x: o.activitySize + o.padding,
      y: o.fontPadding + 1 * o.lineHeight
    }, !0), null != t.timestamps && a.drawText("for ".concat((0, u.howLong)(t.timestamps)), {
      x: o.activitySize + o.padding,
      y: o.fontPadding + 2 * o.lineHeight
    }, !0)
  },
  f = (e, t, n) => {
    var l;
    let {
      canvas: i
    } = e;
    i.setSize({
      w: o.canvasWidth,
      h: o.canvasHeight
    });
    let {
      color: a,
      theme: s
    } = (0, u.getProfileInfo)(n, "black");
    i.setColor(a), i.drawRoundedRect({
      x: 0,
      y: 0,
      h: o.canvasHeight,
      w: o.canvasWidth
    }, 8, !0), i.setColor("dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), i.drawRoundedRect({
      x: 0,
      y: 0,
      h: o.canvasHeight,
      w: o.canvasWidth
    }, 8, !0), (null === (l = i.assetMap) || void 0 === l ? void 0 : l.has(o.AssetTypes.AssetImage)) && i.drawImage(o.AssetTypes.AssetImage, {
      x: o.padding,
      y: o.padding
    }, {
      w: o.activitySize,
      h: o.activitySize
    });
    let r = o.activitySize + o.padding + o.imagePadding;
    i.setColor("dark" === s ? "white" : "rgb(6, 6, 7)"), i.setFont({
      size: 16,
      family: '"gg sans", sans-serif',
      weight: 700
    }), i.drawText("".concat(t.details), {
      x: r,
      y: o.fontPadding + 1 * o.lineHeight
    }, !0), i.setFont({
      size: 14,
      weight: 500
    }), i.drawText("by ".concat(t.state), {
      x: r,
      y: o.fontPadding + 2 * o.lineHeight
    }, !0)
  },
  p = (e, t, n) => {
    let {
      canvas: l
    } = e;
    l.setSize({
      w: 320,
      h: o.canvasHeight
    });
    let {
      assets: i,
      application_id: a
    } = t, s = (0, r.getAssetImage)(a, null == i ? void 0 : i.large_image, o.activitySize), {
      color: d,
      theme: c
    } = (0, u.getProfileInfo)(n, "black");
    l.setColor(d), l.drawRoundedRect({
      x: 0,
      y: 0,
      h: o.canvasHeight,
      w: o.canvasWidth
    }, 8, !0), l.setColor("dark" === c ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), l.drawRoundedRect({
      x: 0,
      y: 0,
      h: o.canvasHeight,
      w: o.canvasWidth
    }, 8, !0), null != s && l.drawImage(o.AssetTypes.AssetImage, {
      x: o.padding,
      y: o.padding
    }, {
      w: o.activitySize,
      h: o.activitySize
    });
    let f = o.activitySize + o.padding + o.imagePadding;
    l.setColor("dark" === c ? "white" : "rgb(6, 6, 7)"), l.setFont({
      size: 16,
      family: '"gg sans", sans-serif',
      weight: 700
    }), l.drawText("".concat(t.details), {
      x: f,
      y: o.fontPadding + 1 * o.lineHeight
    }, !0), l.setFont({
      size: 14,
      weight: 500
    }), l.drawText("".concat(t.state), {
      x: f,
      y: o.fontPadding + 2 * o.lineHeight
    }, !0)
  },
  m = (e, t, n) => {
    var l;
    let {
      canvas: i
    } = e;
    i.setSize({
      w: 450,
      h: 300
    });
    let {
      color: a,
      theme: s
    } = (0, u.getProfileInfo)(n, "black");
    i.setColor(a), i.drawRoundedRect({
      x: 0,
      y: 0,
      h: o.canvasHeight,
      w: o.canvasWidth
    }, 8, !0), i.setColor("dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)"), i.drawRoundedRect({
      x: 0,
      y: 0,
      h: o.canvasHeight,
      w: o.canvasWidth
    }, 8, !0), (null === (l = i.assetMap) || void 0 === l ? void 0 : l.has(o.AssetTypes.StreamPreview)) && i.drawImage(o.AssetTypes.StreamPreview, {
      x: 8,
      y: 54
    }, {
      w: 240,
      h: 180
    }), i.setColor("dark" === s ? "white" : "rgb(6, 6, 7)"), i.setFont({
      size: 16
    }), i.drawText("".concat(n.username), {
      x: 8,
      y: 22
    }, !0), i.drawText("".concat(t.name), {
      x: 8,
      y: 38
    }, !0)
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
  }), null != S ? m(C, h, E) : (0, a.default)(h) ? f(C, h, E) : (0, i.default)(h) && h.name === l.default.get(d.PlatformTypes.LEAGUE_OF_LEGENDS).name ? p(C, h, E) : c(C, h, E), (null === (t = T.assetMap) || void 0 === t ? void 0 : t.has(o.AssetTypes.Platform)) && T.drawImage(o.AssetTypes.Platform, {
    x: o.canvasWidth - o.padding - o.platformSize,
    y: o.padding
  }, {
    w: o.platformSize,
    h: o.platformSize
  }), g(C)
}