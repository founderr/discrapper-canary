n.d(e, {
  J: function() {
return r;
  },
  l: function() {
return u;
  }
}), n(47120);
var a = n(693824),
  l = n(169040);

function r(t) {
  let e, {
canvas: n,
badges: r,
startPosition: u,
maxWidth: i
  } = t;
  for (let {
  iconPath: t,
  text: o
}
of(n.setFont({
  size: 12,
  family: l.I8,
  weight: l.Ue,
  truncate: a.GX.None
}), r)) {
let a = null != e ? e.w + e.x + l.PW : u,
  r = null != e ? e.w + e.x + l.PW + l.NC : u + l.NC;
n.drawPath(t, {
  x: a,
  y: l.f0
}, !0, 0.6), e = n.drawText(o, {
  x: r,
  y: l.m2,
  w: i
}, !0);
  }
}

function u(t) {
  let {
canvas: e,
avatarSrcs: n,
position: {
  x: l,
  y: r
},
avatarImageSize: u
  } = t;
  for (let t = 0; t < n.length; t++)
t < n.length - 1 && e.clipRoundedRect({
  x: l + (t + 1) * (u - 8) - 2,
  y: r - 1,
  w: u + 2,
  h: u + 2
}, u / 2, !0), e.drawRoundedImage(n[t], {
  x: l + t * (u - 8),
  y: r
}, {
  w: u,
  h: u
}, 50, {
  fillMode: a.JU.Cover
}), e.restoreContext();
}