"use strict";
n.r(t), n.d(t, {
  generateGamingContentImage: function() {
    return C
  },
  generateGamingContentImageFromEntry: function() {
    return A
  }
}), n("653041");
var a = n("512722"),
  r = n.n(a),
  l = n("705512"),
  i = n("812206"),
  o = n("55000"),
  s = n("220082"),
  u = n("693824"),
  d = n("690725"),
  c = n("706454"),
  g = n("594174"),
  f = n("70956"),
  m = n("561308"),
  E = n("206295"),
  T = n("737583"),
  _ = n("438226"),
  h = n("169040"),
  v = n("689938");
let I = (e, t) => ({
    AvatarImage1: e[0],
    ...null != e[1] && {
      AvatarImage2: e[1]
    },
    ...null != e[2] && {
      AvatarImage3: e[2]
    },
    ...null != t && {
      ApplicationImage: t
    }
  }),
  N = (e, t) => {
    let n = [{
      iconPath: h.GAME_CONTROLLER_ICON_PATH,
      text: t
    }];
    if ((0, m.isEntryNew)(e) && n.push({
        iconPath: h.NEW_GAME_ICON_PATH,
        text: v.default.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
      }), (0, m.isValidStreak)(e)) {
      let t = (0, m.getStreakCount)(e);
      n.push({
        iconPath: h.FLASH_ICON_PATH,
        text: v.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
          days: t
        })
      })
    }
    let a = (0, m.getResurrectedEntryLastPlayTime)(e);
    if (null != a && n.push({
        iconPath: h.RESURRECTED_ICON_PATH,
        text: (0, m.getFullResurrectedBadgeText)(a)
      }), (0, m.isEntryMarathon)(e) && n.push({
        iconPath: h.TIMER_ICON_PATH,
        text: (0, m.isEntryActive)(e) ? (0, m.getMarathonName)(e) : (0, m.getFullMarathonDescription)(e)
      }), (0, m.isEntryTopGame)(e)) {
      let t = (0, m.getEntryDuration)(e);
      if (null != t) {
        let e = v.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({
          hours: Math.round(t / f.default.Seconds.HOUR)
        });
        return [{
          iconPath: h.TROPHY_ICON_PATH,
          text: "".concat(v.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, " — ").concat(e)
        }]
      }
    }
    return (0, m.getTrendingType)(e) === l.TrendingType.GLOBAL && n.push({
      iconPath: h.TRENDING_ICON_PATH,
      text: v.default.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
    }), n
  },
  x = (e, t) => {
    let {
      timestamp: n,
      colors: a,
      description: r,
      entry: l,
      numAvatars: i
    } = t, s = a.map((e, t) => ({
      color: e,
      stop: t
    }));
    e.setSize({
      w: h.imageWidth,
      h: h.imageHeight
    }, 4), e.drawRoundedGradientRect(s, {
      x: 0,
      y: h.imageHeight
    }, {
      x: h.imageWidth,
      y: 0
    }, {
      x: 0,
      y: 0,
      h: h.imageHeight,
      w: h.imageWidth
    }, 8), e.setColor("rgba(108, 111, 124, 0.24)"), e.drawRoundedRect({
      x: h.imageWidth - h.imagePadding - h.betaTagWidth,
      y: h.imagePadding,
      w: h.betaTagWidth,
      h: h.betaTagHeight
    }, 4, !0), e.setColor("rgba(255, 255, 255, 0.5)");
    e.setFont({
      size: 12,
      family: ["gg sans", "sans-serif"],
      weight: 500,
      truncate: u.TextTruncationMethod.None
    }), e.drawText(v.default.Messages.BETA, {
      x: h.imageWidth - h.imagePadding - 29,
      y: h.imagePadding + 12 + 2
    }, !0), e.setColor("white"), e.drawRoundedImage("ApplicationImage", {
      x: h.imagePadding,
      y: h.imagePadding
    }, {
      w: h.applicationImageSize,
      h: h.applicationImageSize
    }, 8) === u.DrawResultStatus.Failure && e.drawPath(o.ACTIVITY_IMAGE_FALLBACK_PATH, {
      x: h.imagePadding,
      y: h.imagePadding
    }, !0, 2 + 2 / 3);
    (0, T.drawAvatars)({
      canvas: e,
      avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, i),
      position: {
        x: h.descriptionIndent,
        y: h.imagePadding
      },
      avatarImageSize: h.avatarImageSize
    }), e.setColor("white"), e.setFont({
      size: 16,
      truncate: u.TextTruncationMethod.Wrap
    }), e.drawText(r, {
      x: h.descriptionIndent,
      y: 64,
      h: 32,
      w: h.descriptionMaxWidth
    }, !0);
    let d = N(l, n);
    (0, T.drawBadges)({
      canvas: e,
      badges: d,
      startPosition: h.descriptionIndent,
      maxWidth: h.descriptionMaxWidth
    })
  },
  C = async e => {
    let {
      applicationImageSrc: t,
      entry: n,
      avatarSrcs: a,
      description: r,
      timestamp: l,
      colors: i,
      channelId: o
    } = e, s = n.extra.game_name, c = I(a, t);
    return await (0, d.generateImageFromCanvas)({
      assetsToLoad: c,
      drawImage: e => x(e, {
        timestamp: l,
        colors: i,
        description: r,
        entry: n,
        numAvatars: a.length
      }),
      exportConfigs: {
        format: u.DiscordCanvasExporterOutputFormats.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(s, ".png").toLowerCase(),
        fileType: "png",
        channelId: o
      }
    })
  }, A = async (e, t) => {
    let n = e.extra.game_name,
      a = i.default.getApplication(e.extra.application_id),
      l = null == a ? void 0 : a.getIconURL(128),
      o = g.default.getUser(e.author_id);
    r()(null != o, "Author must not be null"), await (0, s.maybeFetchColors)(null != l ? l : "");
    let f = [null == o ? void 0 : o.getAvatarURL(t.guild_id, 128)],
      T = I(f, l),
      h = c.default.locale,
      v = (0, m.formatEntryTimestamp)(e, h),
      {
        primaryColor: N,
        secondaryColor: C
      } = (0, E.getHeroColors)(null != l ? l : ""),
      A = (0, _.formatCanvasDescription)(e, t, o);
    return await (0, d.generateImageFromCanvas)({
      assetsToLoad: T,
      drawImage: t => x(t, {
        timestamp: v,
        colors: [N, C],
        description: A,
        entry: e,
        numAvatars: f.length
      }),
      exportConfigs: {
        format: u.DiscordCanvasExporterOutputFormats.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(n, ".png").toLowerCase(),
        fileType: "png",
        channelId: t.id
      }
    })
  }