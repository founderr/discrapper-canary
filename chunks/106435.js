"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("884691"),
  r = n("77078"),
  l = n("606292"),
  a = n("688318"),
  s = n("19287");

function o(e) {
  let {
    user: t,
    guildId: n,
    size: o,
    showPending: u = !1,
    showTryItOut: d = !1,
    animateOnHover: c = !1,
    avatarDecorationOverride: f,
    avatarOverride: m
  } = e, {
    avatarSrc: _,
    isAvatarAnimating: E,
    eventHandlers: T
  } = (0, s.useAnimatedAvatarSrc)({
    user: t,
    guildId: n,
    size: (0, r.getAvatarSize)(o),
    showPending: u,
    animateOnHover: c,
    avatarOverride: m
  }), {
    avatarPlaceholderSrc: I,
    avatarDecorationSrc: C,
    eventHandlers: p
  } = (0, a.default)({
    user: t,
    size: (0, l.getDecorationSizeForAvatarSize)(o),
    showPending: u,
    animateOnHover: c,
    avatarDecorationOverride: f,
    showTryItOut: d
  }), P = i.useCallback(() => {
    T.onMouseEnter(), p.onMouseEnter()
  }, [T, p]), S = i.useCallback(() => {
    T.onMouseLeave(), p.onMouseLeave()
  }, [T, p]);
  return {
    avatarPlaceholderSrc: I,
    avatarDecorationSrc: C,
    avatarSrc: _,
    isAnimating: E,
    eventHandlers: {
      onMouseEnter: P,
      onMouseLeave: S
    }
  }
}