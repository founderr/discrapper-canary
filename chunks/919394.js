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
  m = t(561308),
  h = t(206295),
  I = t(737583),
  N = t(438226),
  x = t(169040),
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
    iconPath: x.NM,
    text: n
  }],
  l = T.default.extractTimestamp(e.extra.application_id);
if (7 >= o()().diff(o()(l), 'days') && t.push({
    iconPath: x.As,
    text: g.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
  }), (0, m.Ol)(e) && t.push({
    iconPath: x.fO,
    text: g.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
  }), (0, m.q_)(e)) {
  let n = (0, m.vU)(e);
  t.push({
    iconPath: x.t1,
    text: g.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
      days: n
    })
  });
}
(0, m.ig)(e) === i.o.GLOBAL && t.push({
  iconPath: x.Op,
  text: g.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
});
let r = (0, m.dw)(e);
if (null != r && t.push({
    iconPath: x.Z,
    text: (0, m.GE)(r)
  }), (0, m.V5)(e) && t.push({
    iconPath: x.Md,
    text: (0, m.kr)(e) ? (0, m.z5)(e) : (0, m.nB)(e)
  }), (0, m.Jd)(e)) {
  let n = (0, m.yA)(e);
  if (null != n) {
    let e = g.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({
      hours: Math.round(n / v.Z.Seconds.HOUR)
    });
    return [{
      iconPath: x.eF,
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
  w: x.nx,
  h: x.bg
}, 4), e.drawRoundedGradientRect(i, {
  x: 0,
  y: x.bg
}, {
  x: x.nx,
  y: 0
}, {
  x: 0,
  y: 0,
  h: x.bg,
  w: x.nx
}, 8), e.setColor('white'), e.drawRoundedImage('ApplicationImage', {
  x: x.sB,
  y: x.sB
}, {
  w: x.Pu,
  h: x.Pu
}, 8) === d.vP.Failure && e.drawPath(s.Cv, {
  x: x.sB,
  y: x.sB
}, !0, 2 + 2 / 3);
(0, I.l)({
  canvas: e,
  avatarSrcs: [
    'AvatarImage1',
    'AvatarImage2',
    'AvatarImage3'
  ].slice(0, o),
  position: {
    x: x.Iq,
    y: x.sB
  },
  avatarImageSize: x.$S
}), e.setColor('white'), e.setFont({
  size: 16,
  family: x.I8,
  weight: x.Ue,
  truncate: d.GX.Wrap
}), e.drawText(r, {
  x: x.Iq,
  y: 64,
  h: 32,
  w: x.kC
}, !0);
let u = A(a, t);
(0, I.J)({
  canvas: e,
  badges: u,
  startPosition: x.Iq,
  maxWidth: x.kC
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
I = (0, m.yh)(e, T),
{
  primaryColor: x,
  secondaryColor: g
} = (0, h.w)(null != o ? o : ''),
A = (0, N.HV)(e, n, i),
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
  timestamp: I,
  colors: [
    x,
    g
  ],
  description: A,
  entry: e,
  numAvatars: s.length
}),
exportConfigs: R
  });
}