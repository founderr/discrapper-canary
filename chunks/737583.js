"use strict";
n.r(t), n.d(t, {
  drawAvatars: function() {
    return i
  },
  drawBadges: function() {
    return l
  }
}), n("47120");
var a = n("693824"),
  r = n("169040");

function l(e) {
  let t, {
    canvas: n,
    badges: l,
    startPosition: i,
    maxWidth: o
  } = e;
  for (let {
      iconPath: e,
      text: s
    }
    of(n.setFont({
      size: 12,
      truncate: a.TextTruncationMethod.None
    }), l)) {
    let a = null != t ? t.w + t.x + r.spaceBetweenBadges : i,
      l = null != t ? t.w + t.x + r.spaceBetweenBadges + r.spaceBetweenBadgeIconAndText : i + r.spaceBetweenBadgeIconAndText;
    n.drawPath(e, {
      x: a,
      y: r.badgeIconPosition
    }, !0, .6), t = n.drawText(s, {
      x: l,
      y: r.badgeTextPosition,
      w: o
    }, !0)
  }
}

function i(e) {
  let {
    canvas: t,
    avatarSrcs: n,
    position: {
      x: r,
      y: l
    },
    avatarImageSize: i
  } = e;
  for (let e = 0; e < n.length; e++) e < n.length - 1 && t.clipRoundedRect({
    x: r + (e + 1) * (i - 8) - 2,
    y: l - 1,
    w: i + 2,
    h: i + 2
  }, i / 2, !0), t.drawRoundedImage(n[e], {
    x: r + e * (i - 8),
    y: l
  }, {
    w: i,
    h: i
  }, 50, {
    fillMode: a.FillMode.Cover
  }), t.restoreContext()
}