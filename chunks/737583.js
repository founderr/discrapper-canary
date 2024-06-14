"use strict";
a.r(t), a.d(t, {
  drawAvatars: function() {
    return i
  },
  drawBadges: function() {
    return l
  }
}), a("47120");
var n = a("693824"),
  r = a("169040");

function l(e) {
  let t, {
    canvas: a,
    badges: l,
    startPosition: i,
    maxWidth: o
  } = e;
  for (let {
      iconPath: e,
      text: s
    }
    of(a.setFont({
      size: 12,
      truncate: n.TextTruncationMethod.None
    }), l)) {
    let n = null != t ? t.w + t.x + r.spaceBetweenBadges : i,
      l = null != t ? t.w + t.x + r.spaceBetweenBadges + r.spaceBetweenBadgeIconAndText : i + r.spaceBetweenBadgeIconAndText;
    a.drawPath(e, {
      x: n,
      y: r.badgeIconPosition
    }, !0, .6), t = a.drawText(s, {
      x: l,
      y: r.badgeTextPosition,
      w: o
    }, !0)
  }
}

function i(e) {
  let {
    canvas: t,
    avatarSrcs: a,
    position: {
      x: r,
      y: l
    },
    avatarImageSize: i
  } = e;
  for (let e = 0; e < a.length; e++) e < a.length - 1 && t.clipRoundedRect({
    x: r + (e + 1) * (i - 8) - 2,
    y: l - 1,
    w: i + 2,
    h: i + 2
  }, i / 2, !0), t.drawRoundedImage(a[e], {
    x: r + e * (i - 8),
    y: l
  }, {
    w: i,
    h: i
  }, 50, {
    fillMode: n.FillMode.Cover
  }), t.restoreContext()
}