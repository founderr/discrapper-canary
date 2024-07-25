n.d(e, {
  QC: function() {
return O;
  },
  SO: function() {
return p;
  }
}), n(653041);
var a = n(512722),
  l = n.n(a),
  r = n(913527),
  u = n.n(r),
  i = n(705512),
  o = n(812206),
  c = n(55000),
  s = n(220082),
  d = n(693824),
  f = n(690725),
  E = n(706454),
  _ = n(594174),
  v = n(70956),
  M = n(709054),
  h = n(561308),
  N = n(206295),
  Z = n(737583),
  g = n(438226),
  T = n(169040),
  m = n(689938);
let A = (t, e) => ({
AvatarImage1: t[0],
...null != t[1] && {
  AvatarImage2: t[1]
},
...null != t[2] && {
  AvatarImage3: t[2]
},
...null != e && {
  ApplicationImage: e
}
  }),
  I = (t, e) => {
let n = [{
    iconPath: T.NM,
    text: e
  }],
  a = M.default.extractTimestamp(t.extra.application_id);
if (7 >= u()().diff(u()(a), 'days') && n.push({
    iconPath: T.As,
    text: m.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
  }), (0, h.Ol)(t) && n.push({
    iconPath: T.fO,
    text: m.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
  }), (0, h.q_)(t)) {
  let e = (0, h.vU)(t);
  n.push({
    iconPath: T.t1,
    text: m.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
      days: e
    })
  });
}
(0, h.ig)(t) === i.o.GLOBAL && n.push({
  iconPath: T.Op,
  text: m.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
});
let l = (0, h.dw)(t);
if (null != l && n.push({
    iconPath: T.Z,
    text: (0, h.GE)(l)
  }), (0, h.V5)(t)) {
  let {
    text: e
  } = (0, h.zo)(t);
  null != e && n.push({
    iconPath: T.Md,
    text: e
  });
}
if ((0, h.Jd)(t)) {
  let e = (0, h.yA)(t);
  if (null != e) {
    let t = m.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({
      hours: Math.round(e / v.Z.Seconds.HOUR)
    });
    return [{
      iconPath: T.eF,
      text: ''.concat(m.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, ' \u2014 ').concat(t)
    }];
  }
}
return n;
  },
  C = (t, e) => {
let {
  timestamp: n,
  colors: a,
  description: l,
  entry: r,
  numAvatars: u
} = e, i = a.map((t, e) => ({
  color: t,
  stop: e
}));
t.setSize({
  w: T.nx,
  h: T.bg
}, 4), t.drawRoundedGradientRect(i, {
  x: 0,
  y: T.bg
}, {
  x: T.nx,
  y: 0
}, {
  x: 0,
  y: 0,
  h: T.bg,
  w: T.nx
}, 8), t.setColor('white'), t.drawRoundedImage('ApplicationImage', {
  x: T.sB,
  y: T.sB
}, {
  w: T.Pu,
  h: T.Pu
}, 8) === d.vP.Failure && t.drawPath(c.Cv, {
  x: T.sB,
  y: T.sB
}, !0, 2 + 2 / 3);
(0, Z.l)({
  canvas: t,
  avatarSrcs: [
    'AvatarImage1',
    'AvatarImage2',
    'AvatarImage3'
  ].slice(0, u),
  position: {
    x: T.Iq,
    y: T.sB
  },
  avatarImageSize: T.$S
}), t.setColor('white'), t.setFont({
  size: 16,
  family: T.I8,
  weight: T.Ue,
  truncate: d.GX.Wrap
}), t.drawText(l, {
  x: T.Iq,
  y: 64,
  h: 32,
  w: T.kC
}, !0);
let o = I(r, n);
(0, Z.J)({
  canvas: t,
  badges: o,
  startPosition: T.Iq,
  maxWidth: T.kC
});
  },
  p = async t => {
let {
  applicationImageSrc: e,
  entry: n,
  avatarSrcs: a,
  description: l,
  timestamp: r,
  colors: u,
  channelId: i
} = t, o = n.extra.game_name, c = A(a, e);
return await (0, f.f)({
  assetsToLoad: c,
  drawImage: t => C(t, {
    timestamp: r,
    colors: u,
    description: l,
    entry: n,
    numAvatars: a.length
  }),
  exportConfigs: {
    format: d.kH.CloudUpload,
    quality: 1,
    fileName: 'user-reacting-to-'.concat(o, '.png').toLowerCase(),
    fileType: 'png',
    channelId: i
  }
});
  };
async function O(t, e, n) {
  let a = t.extra.game_name,
r = o.Z.getApplication(t.extra.application_id),
u = null == r ? void 0 : r.getIconURL(128),
i = _.default.getUser(t.author_id);
  l()(null != i, 'Author must not be null'), await (0, s.vM)(null != u ? u : '');
  let c = [null == i ? void 0 : i.getAvatarURL(e.guild_id, 128)],
v = A(c, u),
M = E.default.locale,
Z = (0, h.yh)(t, M),
{
  primaryColor: T,
  secondaryColor: m
} = (0, N.w)(null != u ? u : ''),
I = (0, g.HV)(t, e, i),
p = {
  format: n,
  quality: 1,
  fileName: 'user-reacting-to-'.concat(a, '.png').toLowerCase(),
  fileType: 'png'
};
  if (n === d.kH.CloudUpload) {
var O;
p.channelId = null !== (O = e.id) && void 0 !== O ? O : '';
  }
  return await (0, f.f)({
assetsToLoad: v,
drawImage: e => C(e, {
  timestamp: Z,
  colors: [
    T,
    m
  ],
  description: I,
  entry: t,
  numAvatars: c.length
}),
exportConfigs: p
  });
}