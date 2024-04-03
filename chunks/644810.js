"use strict";
n.r(t), n.d(t, {
  generateWatchContentImage: function() {
    return d
  }
});
var a = n("493683"),
  l = n("55000"),
  s = n("693824"),
  i = n("690725"),
  r = n("169040"),
  o = n("689938");
let u = (e, t, n) => ({
    AvatarImage: e,
    ...null != t && {
      MediaImage: t
    },
    ...null != n && {
      ApplicationImage: n
    }
  }),
  d = async e => {
    let {
      mediaImageSrc: t,
      entry: n,
      avatarSrc: d,
      description: c,
      timestamp: f,
      episodeDescription: h,
      colors: m
    } = e, p = await a.default.openPrivateChannel(n.author_id, !1, !1), E = n.extra.media_title, C = u(d, t);
    return await (0, i.generateImageFromCanvas)({
      assetsToLoad: C,
      drawImage: e => {
        let t = m.map((e, t) => ({
          color: e,
          stop: t
        }));
        e.setSize({
          w: r.imageWidth,
          h: r.imageHeight
        }, 4), e.drawRoundedGradientRect(t, {
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
        }, 4, !0), e.setColor("rgba(255, 255, 255, 0.5)"), e.setFont({
          size: 12,
          family: ["gg sans", "sans-serif"],
          weight: 500,
          truncate: s.TextTruncationMethod.None
        }), e.drawText(o.default.Messages.BETA, {
          x: r.imageWidth - r.imagePadding - 29,
          y: 26
        }, !0), e.setColor("white");
        let n = e.drawRoundedImage("MediaImage", {
          x: r.imagePadding,
          y: r.imagePadding
        }, {
          w: r.applicationImageSize,
          h: r.applicationImageSize
        }, 8, {
          fillMode: s.FillMode.Contain
        });
        n === s.DrawResultStatus.Failure && (n = e.drawRoundedImage("ApplicationImage", {
          x: r.imagePadding,
          y: r.imagePadding
        }, {
          w: r.applicationImageSize,
          h: r.applicationImageSize
        }, 8)), n === s.DrawResultStatus.Failure && e.drawPath(l.ACTIVITY_IMAGE_FALLBACK_PATH, {
          x: r.imagePadding,
          y: r.imagePadding
        }, !0, 2 + 2 / 3), e.drawRoundedImage("AvatarImage", {
          x: r.descriptionIndent,
          y: r.imagePadding
        }, {
          w: r.avatarImageSize,
          h: r.avatarImageSize
        }, 50), e.setFont({
          size: 16,
          truncate: s.TextTruncationMethod.Wrap
        }), e.drawText(c, {
          x: r.descriptionIndent,
          y: 64,
          h: 32,
          w: r.descriptionMaxWidth
        }, !0), e.setFont({
          size: 12,
          truncate: s.TextTruncationMethod.None
        }), e.drawText(f, {
          x: r.descriptionIndent + r.attributionSpacing,
          y: r.attributionTextPosition,
          w: r.descriptionMaxWidth
        }, !0), e.drawPath(r.WATCH_ICON_PATH_TOP, {
          x: r.descriptionIndent,
          y: r.attributionIconPosition + 1
        }, !0, 1.1), e.drawPath(r.WATCH_ICON_PATH_BOTTOM, {
          x: r.descriptionIndent,
          y: r.attributionIconPosition + 1
        }, !0, 1.1), null != h && (e.drawPath(r.SCROLL_ICON_PATH, {
          x: r.descriptionIndent + r.attributionSize,
          y: r.attributionIconPosition
        }, !0, .6), e.drawText(h, {
          x: r.descriptionIndent + r.attributionSize + r.attributionSpacing,
          y: r.attributionTextPosition
        }, !0))
      },
      exportConfigs: {
        format: s.DiscordCanvasExporterOutputFormats.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(E, ".png").toLowerCase(),
        fileType: "png",
        channelId: p
      }
    })
  }