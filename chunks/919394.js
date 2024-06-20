t.d(n, {
  QC: function() {
    return S
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
  T = t(70956),
  m = t(709054),
  v = t(561308),
  x = t(206295),
  N = t(737583),
  g = t(438226),
  I = t(169040),
  h = t(689938);
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
  A = (e, n) => {
    let t = [{
        iconPath: I.NM,
        text: n
      }],
      l = m.default.extractTimestamp(e.extra.application_id);
    if (7 >= o()().diff(o()(l), "days") && t.push({
        iconPath: I.As,
        text: h.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
      }), (0, v.Ol)(e) && t.push({
        iconPath: I.fO,
        text: h.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
      }), (0, v.q_)(e)) {
      let n = (0, v.vU)(e);
      t.push({
        iconPath: I.t1,
        text: h.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
          days: n
        })
      })
    }(0, v.ig)(e) === i.o.GLOBAL && t.push({
      iconPath: I.Op,
      text: h.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
    });
    let a = (0, v.dw)(e);
    if (null != a && t.push({
        iconPath: I.Z,
        text: (0, v.GE)(a)
      }), (0, v.V5)(e) && t.push({
        iconPath: I.Md,
        text: (0, v.kr)(e) ? (0, v.z5)(e) : (0, v.nB)(e)
      }), (0, v.Jd)(e)) {
      let n = (0, v.yA)(e);
      if (null != n) {
        let e = h.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({
          hours: Math.round(n / T.Z.Seconds.HOUR)
        });
        return [{
          iconPath: I.eF,
          text: "".concat(h.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, " — ").concat(e)
        }]
      }
    }
    return t
  },
  C = (e, n) => {
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
      w: I.nx,
      h: I.bg
    }, 4), e.drawRoundedGradientRect(i, {
      x: 0,
      y: I.bg
    }, {
      x: I.nx,
      y: 0
    }, {
      x: 0,
      y: 0,
      h: I.bg,
      w: I.nx
    }, 8), e.setColor("rgba(108, 111, 124, 0.24)"), e.drawRoundedRect({
      x: I.nx - I.sB - I.if,
      y: I.sB,
      w: I.if,
      h: I.wI
    }, 4, !0), e.setColor("rgba(255, 255, 255, 0.5)");
    e.setFont({
      size: 12,
      family: ["gg sans", "sans-serif"],
      weight: 500,
      truncate: d.GX.None
    }), e.drawText(h.Z.Messages.BETA, {
      x: I.nx - I.sB - 29,
      y: I.sB + 12 + 2
    }, !0), e.setColor("white"), e.drawRoundedImage("ApplicationImage", {
      x: I.sB,
      y: I.sB
    }, {
      w: I.Pu,
      h: I.Pu
    }, 8) === d.vP.Failure && e.drawPath(s.Cv, {
      x: I.sB,
      y: I.sB
    }, !0, 2 + 2 / 3);
    (0, N.l)({
      canvas: e,
      avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, o),
      position: {
        x: I.Iq,
        y: I.sB
      },
      avatarImageSize: I.$S
    }), e.setColor("white"), e.setFont({
      size: 16,
      truncate: d.GX.Wrap
    }), e.drawText(a, {
      x: I.Iq,
      y: 64,
      h: 32,
      w: I.kC
    }, !0);
    let u = A(r, t);
    (0, N.J)({
      canvas: e,
      badges: u,
      startPosition: I.Iq,
      maxWidth: I.kC
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
      drawImage: e => C(e, {
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
  }, S = async (e, n) => {
    let t = e.extra.game_name,
      l = u.Z.getApplication(e.extra.application_id),
      r = null == l ? void 0 : l.getIconURL(128),
      o = f.default.getUser(e.author_id);
    a()(null != o, "Author must not be null"), await (0, c.vM)(null != r ? r : "");
    let i = [null == o ? void 0 : o.getAvatarURL(n.guild_id, 128)],
      s = M(i, r),
      T = _.default.locale,
      m = (0, v.yh)(e, T),
      {
        primaryColor: N,
        secondaryColor: I
      } = (0, x.w)(null != r ? r : ""),
      h = (0, g.HV)(e, n, o);
    return await (0, E.f)({
      assetsToLoad: s,
      drawImage: n => C(n, {
        timestamp: m,
        colors: [N, I],
        description: h,
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