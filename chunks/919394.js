t.d(n, {
  QC: function() {
return S;
  },
  SO: function() {
return R;
  }
}), t(653041);
var l = t(512722),
  r = t.n(l),
  a = t(913527),
  o = t.n(a),
  i = t(705512),
  u = t(812206),
  s = t(55000),
  c = t(220082),
  d = t(693824),
  E = t(690725),
  _ = t(706454),
  f = t(594174),
  v = t(70956),
  T = t(709054),
  x = t(561308),
  m = t(206295),
  N = t(737583),
  h = t(438226),
  I = t(169040),
  g = t(689938);
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
  l = T.default.extractTimestamp(e.extra.application_id);
if (7 >= o()().diff(o()(l), 'days') && t.push({
    iconPath: I.As,
    text: g.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
  }), (0, x.Ol)(e) && t.push({
    iconPath: I.fO,
    text: g.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
  }), (0, x.q_)(e)) {
  let n = (0, x.vU)(e);
  t.push({
    iconPath: I.t1,
    text: g.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
      days: n
    })
  });
}
(0, x.ig)(e) === i.o.GLOBAL && t.push({
  iconPath: I.Op,
  text: g.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
});
let r = (0, x.dw)(e);
if (null != r && t.push({
    iconPath: I.Z,
    text: (0, x.GE)(r)
  }), (0, x.V5)(e) && t.push({
    iconPath: I.Md,
    text: (0, x.kr)(e) ? (0, x.z5)(e) : (0, x.nB)(e)
  }), (0, x.Jd)(e)) {
  let n = (0, x.yA)(e);
  if (null != n) {
    let e = g.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({
      hours: Math.round(n / v.Z.Seconds.HOUR)
    });
    return [{
      iconPath: I.eF,
      text: ''.concat(g.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, ' \u2014 ').concat(e)
    }];
  }
}
return t;
  },
  C = (e, n) => {
let {
  timestamp: t,
  colors: l,
  description: r,
  entry: a,
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
}, 8), e.setColor('rgba(108, 111, 124, 0.24)'), e.drawRoundedRect({
  x: I.nx - I.sB - I.if,
  y: I.sB,
  w: I.if,
  h: I.wI
}, 4, !0), e.setColor('rgba(255, 255, 255, 0.5)');
e.setFont({
  size: 12,
  family: [
    'gg sans',
    'sans-serif'
  ],
  weight: 500,
  truncate: d.GX.None
}), e.drawText(g.Z.Messages.BETA, {
  x: I.nx - I.sB - 29,
  y: I.sB + 12 + 2
}, !0), e.setColor('white'), e.drawRoundedImage('ApplicationImage', {
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
  avatarSrcs: [
    'AvatarImage1',
    'AvatarImage2',
    'AvatarImage3'
  ].slice(0, o),
  position: {
    x: I.Iq,
    y: I.sB
  },
  avatarImageSize: I.$S
}), e.setColor('white'), e.setFont({
  size: 16,
  truncate: d.GX.Wrap
}), e.drawText(r, {
  x: I.Iq,
  y: 64,
  h: 32,
  w: I.kC
}, !0);
let u = A(a, t);
(0, N.J)({
  canvas: e,
  badges: u,
  startPosition: I.Iq,
  maxWidth: I.kC
});
  },
  R = async e => {
let {
  applicationImageSrc: n,
  entry: t,
  avatarSrcs: l,
  description: r,
  timestamp: a,
  colors: o,
  channelId: i
} = e, u = t.extra.game_name, s = M(l, n);
return await (0, E.f)({
  assetsToLoad: s,
  drawImage: e => C(e, {
    timestamp: a,
    colors: o,
    description: r,
    entry: t,
    numAvatars: l.length
  }),
  exportConfigs: {
    format: d.kH.CloudUpload,
    quality: 1,
    fileName: 'user-reacting-to-'.concat(u, '.png').toLowerCase(),
    fileType: 'png',
    channelId: i
  }
});
  };
async function S(e, n, t) {
  let l = e.extra.game_name,
a = u.Z.getApplication(e.extra.application_id),
o = null == a ? void 0 : a.getIconURL(128),
i = f.default.getUser(e.author_id);
  r()(null != i, 'Author must not be null'), await (0, c.vM)(null != o ? o : '');
  let s = [null == i ? void 0 : i.getAvatarURL(n.guild_id, 128)],
v = M(s, o),
T = _.default.locale,
N = (0, x.yh)(e, T),
{
  primaryColor: I,
  secondaryColor: g
} = (0, m.w)(null != o ? o : ''),
A = (0, h.HV)(e, n, i),
R = {
  format: t,
  quality: 1,
  fileName: 'user-reacting-to-'.concat(l, '.png').toLowerCase(),
  fileType: 'png'
};
  if (t === d.kH.CloudUpload) {
var S;
R.channelId = null !== (S = n.id) && void 0 !== S ? S : '';
  }
  return await (0, E.f)({
assetsToLoad: v,
drawImage: n => C(n, {
  timestamp: N,
  colors: [
    I,
    g
  ],
  description: A,
  entry: e,
  numAvatars: s.length
}),
exportConfigs: R
  });
}