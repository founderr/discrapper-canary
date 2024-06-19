n.d(t, {
  B2: function() {
    return g
  },
  Ov: function() {
    return E
  },
  Qn: function() {
    return m
  },
  _o: function() {
    return p
  },
  pd: function() {
    return h
  }
}), n(47120), n(411104), n(653041);
var l = n(149765),
  i = n(399606),
  s = n(271383),
  a = n(430824),
  r = n(594174),
  o = n(700785),
  c = n(981631),
  u = n(135899);
let d = [c.Plq.USE_CLYDE_AI],
  h = Object.keys(c.Plq).filter(e => !d.includes(c.Plq[e])),
  m = Array.from(new Set([...u.$X, ...c.yYS, c.Plq.ADMINISTRATOR, c.Plq.KICK_MEMBERS, c.Plq.BAN_MEMBERS, c.Plq.MANAGE_GUILD, c.Plq.MANAGE_CHANNELS, c.Plq.MANAGE_ROLES, c.Plq.MANAGE_MESSAGES, c.Plq.MANAGE_THREADS, c.Plq.MANAGE_GUILD_EXPRESSIONS, c.Plq.CREATE_GUILD_EXPRESSIONS, c.Plq.MANAGE_EVENTS, c.Plq.CREATE_EVENTS, c.Plq.MODERATE_MEMBERS, c.Plq.MENTION_EVERYONE, c.Plq.MANAGE_WEBHOOKS])).map(e => {
    let t = h.find(t => c.Plq[t] === e);
    if (null == t) throw Error("Permission ".concat(e, " not found in Permissions"));
    return t
  }),
  p = new Set(c.yYS);

function E(e, t) {
  return e === t
}

function g(e, t, n) {
  let u = (0, i.e7)([a.Z], () => a.Z.getGuild(t), [t]);
  return (0, i.e7)([s.ZP, r.default, a.Z], () => {
    let i = {},
      d = s.ZP.getMember(t, e),
      h = r.default.getUser(e);
    if (null == u || null == d || null == h) return i;
    let m = a.Z.getRole(u.id, u.getEveryoneRoleId()),
      p = o.uB({
        user: h,
        context: u
      });
    for (let e of n) {
      let t = c.Plq[e];
      if (!!l.e$(p, t)) {
        for (let n of (i[e] = [], d.roles)) {
          let s = a.Z.getRole(u.id, n);
          if (null != s)(l.e$(s.permissions, c.Plq.ADMINISTRATOR) || l.Db(s.permissions, t)) && i[e].push(s.id)
        }
        null != m && (l.e$(m.permissions, c.Plq.ADMINISTRATOR) || l.Db(m.permissions, t)) && i[e].push(m.id), u.isOwner(h) && i[e].push(h.id)
      }
    }
    return i
  }, [u, t, n, e])
}