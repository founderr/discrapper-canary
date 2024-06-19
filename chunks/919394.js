t.d(n, {
  QC: function() {
    return Z
  },
  SO: function() {
    return R
  }
}), t(653041);
var l = t(512722),
  a = t.n(l),
  r = t(913527),
  o = t.n(r),
  i = t(705512),
  u = t(812206),
  s = t(55e3),
  c = t(220082),
  d = t(693824),
  E = t(690725),
  _ = t(706454),
  f = t(594174),
  m = t(70956),
  v = t(709054),
  T = t(561308),
  x = t(206295),
  g = t(737583),
  N = t(438226),
  h = t(169040),
  I = t(689938);
let M = (e, n) => ({
    AvatarImage1: e[0],
    ...null != e[1] && {
      AvatarImage2: e[1]
    },
    ...null != e[2] && {
      AvatarImage3: e[2]
    },
    ...null != n && {
      ApplicationImage: n
    }
  }),
  C = (e, n) => {
    let t = [{
        iconPath: h.NM,
        text: n
      }],
      l = v.default.extractTimestamp(e.extra.application_id);
    if (7 >= o()().diff(o()(l), "days") && t.push({
        iconPath: h.As,
        text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
      }), (0, T.Ol)(e) && t.push({
        iconPath: h.fO,
        text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
      }), (0, T.q_)(e)) {
      let n = (0, T.vU)(e);
      t.push({
        iconPath: h.t1,
        text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
          days: n
        })
      })
    }(0, T.ig)(e) === i.o.GLOBAL && t.push({
      iconPath: h.Op,
      text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
    });
    let a = (0, T.dw)(e);
    if (null != a && t.push({
        iconPath: h.Z,
        text: (0, T.GE)(a)
      }), (0, T.V5)(e) && t.push({
        iconPath: h.Md,
        text: (0, T.kr)(e) ? (0, T.z5)(e) : (0, T.nB)(e)
      }), (0, T.Jd)(e)) {
      let n = (0, T.yA)(e);
      if (null != n) {
        let e = I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({
          hours: Math.round(n / m.Z.Seconds.HOUR)
        });
        return [{
          iconPath: h.eF,
          text: "".concat(I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, " — ").concat(e)
        }]
      }
    }
    return t
  },
  A = (e, n) => {
    let {
      timestamp: t,
      colors: l,
      description: a,
      entry: r,
      numAvatars: o
    } = n, i = l.map((e, n) => ({
      color: e,
      stop: n
    }));
    e.setSize({
      w: h.nx,
      h: h.bg
    }, 4), e.drawRoundedGradientRect(i, {
      x: 0,
      y: h.bg
    }, {
      x: h.nx,
      y: 0
    }, {
      x: 0,
      y: 0,
      h: h.bg,
      w: h.nx
    }, 8), e.setColor("rgba(108, 111, 124, 0.24)"), e.drawRoundedRect({
      x: h.nx - h.sB - h.if,
      y: h.sB,
      w: h.if,
      h: h.wI
    }, 4, !0), e.setColor("rgba(255, 255, 255, 0.5)");
    e.setFont({
      size: 12,
      family: ["gg sans", "sans-serif"],
      weight: 500,
      truncate: d.GX.None
    }), e.drawText(I.Z.Messages.BETA, {
      x: h.nx - h.sB - 29,
      y: h.sB + 12 + 2
    }, !0), e.setColor("white"), e.drawRoundedImage("ApplicationImage", {
      x: h.sB,
      y: h.sB
    }, {
      w: h.Pu,
      h: h.Pu
    }, 8) === d.vP.Failure && e.drawPath(s.Cv, {
      x: h.sB,
      y: h.sB
    }, !0, 2 + 2 / 3);
    (0, g.l)({
      canvas: e,
      avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, o),
      position: {
        x: h.Iq,
        y: h.sB
      },
      avatarImageSize: h.$S
    }), e.setColor("white"), e.setFont({
      size: 16,
      truncate: d.GX.Wrap
    }), e.drawText(a, {
      x: h.Iq,
      y: 64,
      h: 32,
      w: h.kC
    }, !0);
    let u = C(r, t);
    (0, g.J)({
      canvas: e,
      badges: u,
      startPosition: h.Iq,
      maxWidth: h.kC
    })
  },
  R = async e => {
    let {
      applicationImageSrc: n,
      entry: t,
      avatarSrcs: l,
      description: a,
      timestamp: r,
      colors: o,
      channelId: i
    } = e, u = t.extra.game_name, s = M(l, n);
    return await (0, E.f)({
      assetsToLoad: s,
      drawImage: e => A(e, {
        timestamp: r,
        colors: o,
        description: a,
        entry: t,
        numAvatars: l.length
      }),
      exportConfigs: {
        format: d.kH.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(u, ".png").toLowerCase(),
        fileType: "png",
        channelId: i
      }
    })
  }, Z = async (e, n) => {
    let t = e.extra.game_name,
      l = u.Z.getApplication(e.extra.application_id),
      r = null == l ? void 0 : l.getIconURL(128),
      o = f.default.getUser(e.author_id);
    a()(null != o, "Author must not be null"), await (0, c.vM)(null != r ? r : "");
    let i = [null == o ? void 0 : o.getAvatarURL(n.guild_id, 128)],
      s = M(i, r),
      m = _.default.locale,
      v = (0, T.yh)(e, m),
      {
        primaryColor: g,
        secondaryColor: h
      } = (0, x.w)(null != r ? r : ""),
      I = (0, N.HV)(e, n, o);
    return await (0, E.f)({
      assetsToLoad: s,
      drawImage: n => A(n, {
        timestamp: v,
        colors: [g, h],
        description: I,
        entry: e,
        numAvatars: i.length
      }),
      exportConfigs: {
        format: d.kH.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(t, ".png").toLowerCase(),
        fileType: "png",
        channelId: n.id
      }
    })
  }