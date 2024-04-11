"use strict";
n.r(t), n.d(t, {
  generateGamingContentImage: function() {
    return h
  }
}), n("653041");
var a = n("55000"),
  l = n("693824"),
  s = n("690725"),
  i = n("561308"),
  r = n("737583"),
  o = n("169040"),
  u = n("689938");
let d = (e, t) => ({
    AvatarImage: e,
    ...null != t && {
      ApplicationImage: t
    }
  }),
  c = (e, t) => {
    let n = [{
      iconPath: o.GAME_CONTROLLER_ICON_PATH,
      text: t
    }];
    return (0, i.isEntryNew)(e) && n.push({
      iconPath: o.NEW_GAME_ICON_PATH,
      text: u.default.Messages.MEMBER_LIST_CONTENT_FEED_FIRST_TIME
    }), (0, i.isEntryResurrected)(e) && n.push({
      iconPath: o.RESURRECTED_ICON_PATH,
      text: u.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
    }), (0, i.isEntryMarathon)(e) && n.push({
      iconPath: o.TIMER_ICON_PATH,
      text: u.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
    }), n
  },
  f = (e, t) => {
    let {
      timestamp: n,
      colors: s,
      description: i,
      entry: d
    } = t, f = s.map((e, t) => ({
      color: e,
      stop: t
    }));
    e.setSize({
      w: o.imageWidth,
      h: o.imageHeight
    }, 4), e.drawRoundedGradientRect(f, {
      x: 0,
      y: o.imageHeight
    }, {
      x: o.imageWidth,
      y: 0
    }, {
      x: 0,
      y: 0,
      h: o.imageHeight,
      w: o.imageWidth
    }, 8), e.setColor("rgba(108, 111, 124, 0.24)"), e.drawRoundedRect({
      x: o.imageWidth - o.imagePadding - o.betaTagWidth,
      y: o.imagePadding,
      w: o.betaTagWidth,
      h: o.betaTagHeight
    }, 4, !0), e.setColor("rgba(255, 255, 255, 0.5)");
    e.setFont({
      size: 12,
      family: ["gg sans", "sans-serif"],
      weight: 500,
      truncate: l.TextTruncationMethod.None
    }), e.drawText(u.default.Messages.BETA, {
      x: o.imageWidth - o.imagePadding - 29,
      y: o.imagePadding + 12
    }, !0), e.setColor("white"), e.drawRoundedImage("ApplicationImage", {
      x: o.imagePadding,
      y: o.imagePadding
    }, {
      w: o.applicationImageSize,
      h: o.applicationImageSize
    }, 8) === l.DrawResultStatus.Failure && e.drawPath(a.ACTIVITY_IMAGE_FALLBACK_PATH, {
      x: o.imagePadding,
      y: o.imagePadding
    }, !0, 2 + 2 / 3), e.drawRoundedImage("AvatarImage", {
      x: o.descriptionIndent,
      y: o.imagePadding
    }, {
      w: o.avatarImageSize,
      h: o.avatarImageSize
    }, 50, {
      fillMode: l.FillMode.Cover
    }), e.setColor("white"), e.setFont({
      size: 16,
      truncate: l.TextTruncationMethod.Wrap
    }), e.drawText(i, {
      x: o.descriptionIndent,
      y: 64,
      h: 32,
      w: o.descriptionMaxWidth
    }, !0);
    let h = c(d, n);
    (0, r.drawBadges)({
      canvas: e,
      badges: h,
      startPosition: o.descriptionIndent,
      maxWidth: o.descriptionMaxWidth
    })
  },
  h = async e => {
    let {
      applicationImageSrc: t,
      entry: n,
      avatarSrc: a,
      description: i,
      timestamp: r,
      colors: o,
      channelId: u
    } = e, c = n.extra.game_name, h = d(a, t);
    return await (0, s.generateImageFromCanvas)({
      assetsToLoad: h,
      drawImage: e => f(e, {
        timestamp: r,
        colors: o,
        description: i,
        entry: n
      }),
      exportConfigs: {
        format: l.DiscordCanvasExporterOutputFormats.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(c, ".png").toLowerCase(),
        fileType: "png",
        channelId: u
      }
    })
  }