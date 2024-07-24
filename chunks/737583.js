t.d(n, {
  J: function() {
return r;
  },
  l: function() {
return i;
  }
}), t(47120);
var a = t(693824),
  l = t(169040);

function r(e) {
  let n, {
canvas: t,
badges: r,
startPosition: i,
maxWidth: o
  } = e;
  for (let {
  iconPath: e,
  text: u
}
of(t.setFont({
  size: 12,
  family: l.I8,
  weight: l.Ue,
  truncate: a.GX.None
}), r)) {
let a = null != n ? n.w + n.x + l.PW : i,
  r = null != n ? n.w + n.x + l.PW + l.NC : i + l.NC;
t.drawPath(e, {
  x: a,
  y: l.f0
}, !0, 0.6), n = t.drawText(u, {
  x: r,
  y: l.m2,
  w: o
}, !0);
  }
}

function i(e) {
  let {
canvas: n,
avatarSrcs: t,
position: {
  x: l,
  y: r
},
avatarImageSize: i
  } = e;
  for (let e = 0; e < t.length; e++)
e < t.length - 1 && n.clipRoundedRect({
  x: l + (e + 1) * (i - 8) - 2,
  y: r - 1,
  w: i + 2,
  h: i + 2
}, i / 2, !0), n.drawRoundedImage(t[e], {
  x: l + e * (i - 8),
  y: r
}, {
  w: i,
  h: i
}, 50, {
  fillMode: a.JU.Cover
}), n.restoreContext();
}