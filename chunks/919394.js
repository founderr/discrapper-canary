"use strict";
a.r(t), a.d(t, {
  generateGamingContentImage: function() {
    return M
  },
  generateGamingContentImageFromEntry: function() {
    return R
  }
}), a("653041");
var n = a("512722"),
  r = a.n(n),
  l = a("913527"),
  i = a.n(l),
  o = a("705512"),
  s = a("812206"),
  u = a("55000"),
  d = a("220082"),
  c = a("693824"),
  g = a("690725"),
  f = a("706454"),
  E = a("594174"),
  m = a("70956"),
  T = a("709054"),
  _ = a("561308"),
  h = a("206295"),
  v = a("737583"),
  I = a("438226"),
  N = a("169040"),
  x = a("689938");
let C = (e, t) => ({
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
  A = (e, t) => {
    let a = [{
        iconPath: N.GAME_CONTROLLER_ICON_PATH,
        text: t
      }],
      n = T.default.extractTimestamp(e.extra.application_id);
    if (i()().diff(i()(n), "days") > 7 && a.push({
        iconPath: N.NEW_RELEASE_ICON_PATH,
        text: x.default.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
      }), (0, _.isEntryNew)(e) && a.push({
        iconPath: N.NEW_GAME_ICON_PATH,
        text: x.default.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
      }), (0, _.isValidStreak)(e)) {
      let t = (0, _.getStreakCount)(e);
      a.push({
        iconPath: N.FLASH_ICON_PATH,
        text: x.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
          days: t
        })
      })
    }(0, _.getTrendingType)(e) === o.TrendingType.GLOBAL && a.push({
      iconPath: N.TRENDING_ICON_PATH,
      text: x.default.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
    });
    let r = (0, _.getResurrectedEntryLastPlayTime)(e);
    if (null != r && a.push({
        iconPath: N.RESURRECTED_ICON_PATH,
        text: (0, _.getFullResurrectedBadgeText)(r)
      }), (0, _.isEntryMarathon)(e) && a.push({
        iconPath: N.TIMER_ICON_PATH,
        text: (0, _.isEntryActive)(e) ? (0, _.getMarathonName)(e) : (0, _.getFullMarathonDescription)(e)
      }), (0, _.isEntryTopGame)(e)) {
      let t = (0, _.getEntryDuration)(e);
      if (null != t) {
        let e = x.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({
          hours: Math.round(t / m.default.Seconds.HOUR)
        });
        return [{
          iconPath: N.TROPHY_ICON_PATH,
          text: "".concat(x.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, " — ").concat(e)
        }]
      }
    }
    return a
  },
  p = (e, t) => {
    let {
      timestamp: a,
      colors: n,
      description: r,
      entry: l,
      numAvatars: i
    } = t, o = n.map((e, t) => ({
      color: e,
      stop: t
    }));
    e.setSize({
      w: N.imageWidth,
      h: N.imageHeight
    }, 4), e.drawRoundedGradientRect(o, {
      x: 0,
      y: N.imageHeight
    }, {
      x: N.imageWidth,
      y: 0
    }, {
      x: 0,
      y: 0,
      h: N.imageHeight,
      w: N.imageWidth
    }, 8), e.setColor("rgba(108, 111, 124, 0.24)"), e.drawRoundedRect({
      x: N.imageWidth - N.imagePadding - N.betaTagWidth,
      y: N.imagePadding,
      w: N.betaTagWidth,
      h: N.betaTagHeight
    }, 4, !0), e.setColor("rgba(255, 255, 255, 0.5)");
    e.setFont({
      size: 12,
      family: ["gg sans", "sans-serif"],
      weight: 500,
      truncate: c.TextTruncationMethod.None
    }), e.drawText(x.default.Messages.BETA, {
      x: N.imageWidth - N.imagePadding - 29,
      y: N.imagePadding + 12 + 2
    }, !0), e.setColor("white"), e.drawRoundedImage("ApplicationImage", {
      x: N.imagePadding,
      y: N.imagePadding
    }, {
      w: N.applicationImageSize,
      h: N.applicationImageSize
    }, 8) === c.DrawResultStatus.Failure && e.drawPath(u.ACTIVITY_IMAGE_FALLBACK_PATH, {
      x: N.imagePadding,
      y: N.imagePadding
    }, !0, 2 + 2 / 3);
    (0, v.drawAvatars)({
      canvas: e,
      avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, i),
      position: {
        x: N.descriptionIndent,
        y: N.imagePadding
      },
      avatarImageSize: N.avatarImageSize
    }), e.setColor("white"), e.setFont({
      size: 16,
      truncate: c.TextTruncationMethod.Wrap
    }), e.drawText(r, {
      x: N.descriptionIndent,
      y: 64,
      h: 32,
      w: N.descriptionMaxWidth
    }, !0);
    let s = A(l, a);
    (0, v.drawBadges)({
      canvas: e,
      badges: s,
      startPosition: N.descriptionIndent,
      maxWidth: N.descriptionMaxWidth
    })
  },
  M = async e => {
    let {
      applicationImageSrc: t,
      entry: a,
      avatarSrcs: n,
      description: r,
      timestamp: l,
      colors: i,
      channelId: o
    } = e, s = a.extra.game_name, u = C(n, t);
    return await (0, g.generateImageFromCanvas)({
      assetsToLoad: u,
      drawImage: e => p(e, {
        timestamp: l,
        colors: i,
        description: r,
        entry: a,
        numAvatars: n.length
      }),
      exportConfigs: {
        format: c.DiscordCanvasExporterOutputFormats.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(s, ".png").toLowerCase(),
        fileType: "png",
        channelId: o
      }
    })
  }, R = async (e, t) => {
    let a = e.extra.game_name,
      n = s.default.getApplication(e.extra.application_id),
      l = null == n ? void 0 : n.getIconURL(128),
      i = E.default.getUser(e.author_id);
    r()(null != i, "Author must not be null"), await (0, d.maybeFetchColors)(null != l ? l : "");
    let o = [null == i ? void 0 : i.getAvatarURL(t.guild_id, 128)],
      u = C(o, l),
      m = f.default.locale,
      T = (0, _.formatEntryTimestamp)(e, m),
      {
        primaryColor: v,
        secondaryColor: N
      } = (0, h.getHeroColors)(null != l ? l : ""),
      x = (0, I.formatCanvasDescription)(e, t, i);
    return await (0, g.generateImageFromCanvas)({
      assetsToLoad: u,
      drawImage: t => p(t, {
        timestamp: T,
        colors: [v, N],
        description: x,
        entry: e,
        numAvatars: o.length
      }),
      exportConfigs: {
        format: c.DiscordCanvasExporterOutputFormats.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(a, ".png").toLowerCase(),
        fileType: "png",
        channelId: t.id
      }
    })
  }