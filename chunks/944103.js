n.d(t, {
  Z: function() {
    return h
  }
});
var l = n(470079),
  i = n(442837),
  s = n(131704),
  a = n(9156),
  r = n(423589),
  o = n(674190),
  c = n(624617),
  u = n(490897);
let d = Object.freeze({
  NOTICE_RENDER: {
    MAX: 1,
    PER_SECONDS: 600
  },
  CHANNEL_VISTS: {
    MIN: 2,
    PER_SECONDS: 86400
  }
});

function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = (0, r.Mn)("useShouldRenderBanner"),
    h = (0, i.e7)([c.Z, a.ZP], () => {
      let {
        guild_id: t,
        id: n
      } = e;
      if (!s.$N.has(e.type)) return !1;
      let l = a.ZP.resolveUnreadSetting(e),
        i = a.ZP.getChannelUnreadSetting(t, n),
        r = c.Z.getNumberOfRendersSince(d.NOTICE_RENDER.PER_SECONDS),
        o = c.Z.getNumberOfChannelVisitsSince(t, n, d.CHANNEL_VISTS.PER_SECONDS);
      return i === u.i.UNSET && l !== u.i.ALL_MESSAGES && r <= d.NOTICE_RENDER.MAX && o >= d.CHANNEL_VISTS.MIN
    }, [e]);
  return l.useEffect(() => {
    t && h && (0, o.g)(e.guild_id, e.id)
  }, [t, h, e.guild_id, e.id]), l.useEffect(() => {
    s.$N.has(e.type) && (0, o.a)(e.guild_id, e.id)
  }, [e.guild_id, e.id, e.type]), {
    canRenderNotice: h && n,
    recordNoticeRender: () => (0, o.g)(e.guild_id, e.id)
  }
}