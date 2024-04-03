"use strict";
n.r(t), n.d(t, {
  generateGamingContentImage: function() {
    return c
  }
});
var a = n("55000"),
  l = n("693824"),
  s = n("690725"),
  i = n("561308"),
  r = n("169040"),
  o = n("689938");
let u = (e, t) => ({
    AvatarImage: e,
    ...null != t && {
      ApplicationImage: t
    }
  }),
  d = (e, t) => {
    let {
      timestamp: n,
      colors: s,
      description: u,
      entry: d
    } = t, c = s.map((e, t) => ({
      color: e,
      stop: t
    }));
    e.setSize({
      w: r.imageWidth,
      h: r.imageHeight
    }, 4), e.drawRoundedGradientRect(c, {
      x: 0,
      y: r.imageHeight
    }, {
      x: r.imageWidth,
      y: 0
    }, {
      x: 0,
      y: 0,
      h: r.imageHeight,
      w: r.imageWidth
    }, 8), e.setColor("rgba(108, 111, 124, 0.24)"), e.drawRoundedRect({
      x: r.imageWidth - r.imagePadding - r.betaTagWidth,
      y: r.imagePadding,
      w: r.betaTagWidth,
      h: r.betaTagHeight
    }, 4, !0), e.setColor("rgba(255, 255, 255, 0.5)");
    e.setFont({
      size: 12,
      family: ["gg sans", "sans-serif"],
      weight: 500,
      truncate: l.TextTruncationMethod.None
    }), e.drawText(o.default.Messages.BETA, {
      x: r.imageWidth - r.imagePadding - 29,
      y: r.imagePadding + 12
    }, !0), e.setColor("white"), e.drawRoundedImage("ApplicationImage", {
      x: r.imagePadding,
      y: r.imagePadding
    }, {
      w: r.applicationImageSize,
      h: r.applicationImageSize
    }, 8) === l.DrawResultStatus.Failure && e.drawPath(a.ACTIVITY_IMAGE_FALLBACK_PATH, {
      x: r.imagePadding,
      y: r.imagePadding
    }, !0, 2 + 2 / 3), e.drawRoundedImage("AvatarImage", {
      x: r.descriptionIndent,
      y: r.imagePadding
    }, {
      w: r.avatarImageSize,
      h: r.avatarImageSize
    }, 50, {
      fillMode: l.FillMode.Cover
    }), e.setColor("white"), e.setFont({
      size: 16,
      truncate: l.TextTruncationMethod.Wrap
    }), e.drawText(u, {
      x: r.descriptionIndent,
      y: 64,
      h: 32,
      w: r.descriptionMaxWidth
    }, !0), e.setFont({
      size: 12,
      truncate: l.TextTruncationMethod.None
    }), e.drawText(n, {
      x: r.descriptionIndent + r.attributionSpacing,
      y: r.attributionTextPosition,
      w: r.descriptionMaxWidth
    }, !0), e.drawPath(r.GAME_CONTROLLER_ICON_PATH, {
      x: r.descriptionIndent,
      y: r.attributionIconPosition
    }, !0, .6), (0, i.isEntryNew)(d) && (e.drawPath(r.NEW_GAME_ICON_PATH_TOP, {
      x: r.descriptionIndent + r.attributionSize,
      y: r.attributionIconPosition
    }, !0, .6), e.drawPath(r.NEW_GAME_ICON_PATH_BOTTOM, {
      x: r.descriptionIndent + r.attributionSize,
      y: r.attributionIconPosition
    }, !0, .6), e.drawText(o.default.Messages.MEMBER_LIST_CONTENT_FEED_FIRST_TIME, {
      x: r.descriptionIndent + r.attributionSize + r.attributionSpacing,
      y: r.attributionTextPosition
    }, !0))
  },
  c = async e => {
    let {
      applicationImageSrc: t,
      entry: n,
      avatarSrc: a,
      description: i,
      timestamp: r,
      colors: o,
      channelId: c
    } = e, f = n.extra.game_name, h = u(a, t);
    return await (0, s.generateImageFromCanvas)({
      assetsToLoad: h,
      drawImage: e => d(e, {
        timestamp: r,
        colors: o,
        description: i,
        entry: n
      }),
      exportConfigs: {
        format: l.DiscordCanvasExporterOutputFormats.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(f, ".png").toLowerCase(),
        fileType: "png",
        channelId: c
      }
    })
  }