t.d(n, {
  QC: function() {
return C;
  },
  SO: function() {
return T;
  }
}), t(653041);
var a = t(512722),
  l = t.n(a),
  r = t(913527),
  i = t.n(r),
  o = t(705512),
  u = t(812206),
  c = t(55000),
  s = t(220082),
  d = t(693824),
  f = t(690725),
  h = t(706454),
  m = t(594174),
  v = t(70956),
  _ = t(709054),
  E = t(561308),
  g = t(206295),
  N = t(737583),
  Z = t(438226),
  I = t(169040),
  M = t(689938);
let p = (e, n) => ({
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
  a = _.default.extractTimestamp(e.extra.application_id);
if (7 >= i()().diff(i()(a), 'days') && t.push({
    iconPath: I.As,
    text: M.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
  }), (0, E.Ol)(e) && t.push({
    iconPath: I.fO,
    text: M.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
  }), (0, E.q_)(e)) {
  let n = (0, E.vU)(e);
  t.push({
    iconPath: I.t1,
    text: M.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
      days: n
    })
  });
}
(0, E.ig)(e) === o.o.GLOBAL && t.push({
  iconPath: I.Op,
  text: M.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
});
let l = (0, E.dw)(e);
if (null != l && t.push({
    iconPath: I.Z,
    text: (0, E.GE)(l)
  }), (0, E.V5)(e) && t.push({
    iconPath: I.Md,
    text: (0, E.kr)(e) ? (0, E.z5)(e) : (0, E.nB)(e)
  }), (0, E.Jd)(e)) {
  let n = (0, E.yA)(e);
  if (null != n) {
    let e = M.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({
      hours: Math.round(n / v.Z.Seconds.HOUR)
    });
    return [{
      iconPath: I.eF,
      text: ''.concat(M.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, ' \u2014 ').concat(e)
    }];
  }
}
return t;
  },
  x = (e, n) => {
let {
  timestamp: t,
  colors: a,
  description: l,
  entry: r,
  numAvatars: i
} = n, o = a.map((e, n) => ({
  color: e,
  stop: n
}));
e.setSize({
  w: I.nx,
  h: I.bg
}, 4), e.drawRoundedGradientRect(o, {
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
}, 8), e.setColor('white'), e.drawRoundedImage('ApplicationImage', {
  x: I.sB,
  y: I.sB
}, {
  w: I.Pu,
  h: I.Pu
}, 8) === d.vP.Failure && e.drawPath(c.Cv, {
  x: I.sB,
  y: I.sB
}, !0, 2 + 2 / 3);
(0, N.l)({
  canvas: e,
  avatarSrcs: [
    'AvatarImage1',
    'AvatarImage2',
    'AvatarImage3'
  ].slice(0, i),
  position: {
    x: I.Iq,
    y: I.sB
  },
  avatarImageSize: I.$S
}), e.setColor('white'), e.setFont({
  size: 16,
  family: I.I8,
  weight: I.Ue,
  truncate: d.GX.Wrap
}), e.drawText(l, {
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
});
  },
  T = async e => {
let {
  applicationImageSrc: n,
  entry: t,
  avatarSrcs: a,
  description: l,
  timestamp: r,
  colors: i,
  channelId: o
} = e, u = t.extra.game_name, c = p(a, n);
return await (0, f.f)({
  assetsToLoad: c,
  drawImage: e => x(e, {
    timestamp: r,
    colors: i,
    description: l,
    entry: t,
    numAvatars: a.length
  }),
  exportConfigs: {
    format: d.kH.CloudUpload,
    quality: 1,
    fileName: 'user-reacting-to-'.concat(u, '.png').toLowerCase(),
    fileType: 'png',
    channelId: o
  }
});
  };
async function C(e, n, t) {
  let a = e.extra.game_name,
r = u.Z.getApplication(e.extra.application_id),
i = null == r ? void 0 : r.getIconURL(128),
o = m.default.getUser(e.author_id);
  l()(null != o, 'Author must not be null'), await (0, s.vM)(null != i ? i : '');
  let c = [null == o ? void 0 : o.getAvatarURL(n.guild_id, 128)],
v = p(c, i),
_ = h.default.locale,
N = (0, E.yh)(e, _),
{
  primaryColor: I,
  secondaryColor: M
} = (0, g.w)(null != i ? i : ''),
A = (0, Z.HV)(e, n, o),
T = {
  format: t,
  quality: 1,
  fileName: 'user-reacting-to-'.concat(a, '.png').toLowerCase(),
  fileType: 'png'
};
  if (t === d.kH.CloudUpload) {
var C;
T.channelId = null !== (C = n.id) && void 0 !== C ? C : '';
  }
  return await (0, f.f)({
assetsToLoad: v,
drawImage: n => x(n, {
  timestamp: N,
  colors: [
    I,
    M
  ],
  description: A,
  entry: e,
  numAvatars: c.length
}),
exportConfigs: T
  });
}