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
var i = n(392711),
  s = n.n(i),
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
      let i = r.default.getUser(e);
      if (null == i) return;
      let s = (0, c.y)(t, n, i);
      return {
        ...(0, u.Z)(i),
        nickname: null != s ? s : void 0
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
      } = e, i = E();
      return !s().isEqual(i, t) && n(i), i
    }
  };

function I(e) {
  let t = "EMBEDDED_ACTIVITY_UPDATE",
    n = () => {
      e(E())
    };
  return l.Z.subscribe(t, n), () => l.Z.unsubscribe(t, n)
}