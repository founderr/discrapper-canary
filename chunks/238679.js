n.d(t, {
  HU: function() {
    return I
  },
  KW: function() {
    return h
  },
  dO: function() {
    return E
  },
  gQ: function() {
    return _
  }
});
var s = n(392711),
  i = n.n(s),
  l = n(570140),
  a = n(317381),
  r = n(594174),
  o = n(823379),
  c = n(5192),
  u = n(863141),
  d = n(186901);

function E() {
  let e = a.ZP.getCurrentEmbeddedActivity();
  if (null == e) return {
    participants: []
  };
  let {
    guildId: t,
    channelId: n
  } = e;
  return {
    participants: Array.from(e.userIds, e => {
      let s = r.default.getUser(e);
      if (null == s) return;
      let i = (0, c.y)(t, n, s);
      return {
        ...(0, u.Z)(s),
        nickname: null != i ? i : void 0
      }
    }).filter(o.lm)
  }
}
let h = {
    [d.Gp.ANY]: [d.wE]
  },
  _ = {
    scope: h,
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, s = E();
      return !i().isEqual(s, t) && n(s), s
    }
  };

function I(e) {
  let t = "EMBEDDED_ACTIVITY_UPDATE",
    n = () => {
      e(E())
    };
  return l.Z.subscribe(t, n), () => l.Z.unsubscribe(t, n)
}