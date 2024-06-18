"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(470079),
  r = n(481060),
  s = n(1585),
  o = n(125988),
  a = n(252532);

function l(e) {
  let {
    user: t,
    guildId: n,
    size: l,
    showPending: u = !1,
    showTryItOut: _ = !1,
    animateOnHover: c = !1,
    avatarDecorationOverride: d,
    avatarOverride: E
  } = e, {
    avatarSrc: I,
    isAvatarAnimating: T,
    eventHandlers: h
  } = (0, a.w)({
    user: t,
    guildId: n,
    size: (0, r.getAvatarSize)(l),
    showPending: u,
    animateOnHover: c,
    avatarOverride: E
  }), {
    avatarPlaceholderSrc: S,
    avatarDecorationSrc: f,
    eventHandlers: N
  } = (0, o.Z)({
    user: t,
    guildId: null != n ? n : void 0,
    size: (0, s.y9)(l),
    showPending: u,
    animateOnHover: c,
    avatarDecorationOverride: d,
    showTryItOut: _
  }), A = i.useCallback(() => {
    h.onMouseEnter(), N.onMouseEnter()
  }, [h, N]);
  return {
    avatarPlaceholderSrc: S,
    avatarDecorationSrc: f,
    avatarSrc: I,
    isAnimating: T,
    eventHandlers: {
      onMouseEnter: A,
      onMouseLeave: i.useCallback(() => {
        h.onMouseLeave(), N.onMouseLeave()
      }, [h, N])
    }
  }
}