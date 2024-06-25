n.d(t, {
  B: function() {
    return d
  }
}), n(653041);
var l = n(55e3),
  i = n(693824),
  s = n(690725),
  a = n(737583),
  r = n(169040),
  o = n(689938);
let c = (e, t, n) => ({
    AvatarImage: e,
    ...null != t && {
      MediaImage: t
    },
    ...null != n && {
      ApplicationImage: n
    }
  }),
  u = (e, t) => {
    let n = [{
      iconPath: r.i6,
      text: e
    }];
    return null != t && n.push({
      iconPath: r.fj,
      text: t
    }), n
  },
  d = async e => {
    let {
      mediaImageSrc: t,
      entry: n,
      avatarSrc: d,
      description: h,
      timestamp: m,
      episodeDescription: E,
      colors: p,
      channelId: g
    } = e, f = n.extra.media_title, C = c(d, t);
    return await (0, s.f)({
      assetsToLoad: C,
      drawImage: e => {
        let t = p.map((e, t) => ({
          color: e,
          stop: t
        }));
        e.setSize({
          w: r.nx,
          h: r.bg
        }, 4), e.drawRoundedGradientRect(t, {
          x: 0,
          y: r.bg
        }, {
          x: r.nx,
          y: 0
        }, {
          x: 0,
          y: 0,
          h: r.bg,
          w: r.nx
        }, 8), e.setColor("rgba(108, 111, 124, 0.24)"), e.drawRoundedRect({
          x: r.nx - r.sB - r.if,
          y: r.sB,
          w: r.if,
          h: r.wI
        }, 4, !0), e.setColor("rgba(255, 255, 255, 0.5)"), e.setFont({
          size: 12,
          family: ["gg sans", "sans-serif"],
          weight: 500,
          truncate: i.GX.None
        }), e.drawText(o.Z.Messages.BETA, {
          x: r.nx - r.sB - 29,
          y: 26
        }, !0), e.setColor("white");
        let n = e.drawRoundedImage("MediaImage", {
          x: r.sB,
          y: r.sB
        }, {
          w: r.Pu,
          h: r.Pu
        }, 8, {
          fillMode: i.JU.Contain
        });
        n === i.vP.Failure && (n = e.drawRoundedImage("ApplicationImage", {
          x: r.sB,
          y: r.sB
        }, {
          w: r.Pu,
          h: r.Pu
        }, 8)), n === i.vP.Failure && e.drawPath(l.Cv, {
          x: r.sB,
          y: r.sB
        }, !0, 2 + 2 / 3), e.drawRoundedImage("AvatarImage", {
          x: r.Iq,
          y: r.sB
        }, {
          w: r.$S,
          h: r.$S
        }, 50), e.setFont({
          size: 16,
          truncate: i.GX.Wrap
        }), e.drawText(h, {
          x: r.Iq,
          y: 64,
          h: 32,
          w: r.kC
        }, !0);
        let s = u(m, E);
        (0, a.J)({
          canvas: e,
          badges: s,
          startPosition: r.Iq,
          maxWidth: r.kC
        })
      },
      exportConfigs: {
        format: i.kH.CloudUpload,
        quality: 1,
        fileName: "user-reacting-to-".concat(f, ".png").toLowerCase(),
        fileType: "png",
        channelId: g
      }
    })
  }