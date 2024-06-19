n.d(t, {
  Be: function() {
    return h
  },
  ZP: function() {
    return A
  },
  hC: function() {
    return _
  }
}), n(47120), n(653041);
var l = n(392711),
  a = n(212819),
  s = n(938078),
  i = n(823385),
  r = n(592125),
  u = n(496675),
  o = n(594174),
  c = n(823379),
  d = n(41837),
  E = n(981631);

function _(e) {
  return "".concat(e.type, "-").concat(e.id)
}

function h(e) {
  return "user" === e.type ? r.Z.getDMFromUserId(e.id) : e.id
}

function S(e) {
  if ("user" !== e.type) return (0, s.Z)(e.id);
  {
    let t = o.default.getUser(e.id);
    return null != t ? {
      type: a.h8.USER,
      record: t,
      score: 0
    } : null
  }
}
n(689938);

function f(e, t) {
  let n;
  let l = new Set;
  if (null != t)
    for (let e of t) l.add(e);
  let s = [];
  for (let t of e) {
    if (null != t)
      if (t.type === a.h8.HEADER) n = t;
      else {
        let {
          id: e
        } = t.record;
        !l.has(e) && (l.add(e), null != n && (s.push(n), n = void 0), s.push(t))
      }
  }
  return s
}

function g(e) {
  return e.filter(e => {
    var t;
    return (0, c.lm)(e) && (e.type === a.h8.HEADER || (0, d.o)(e) && ((t = e).type === a.h8.USER ? null != r.Z.getDMFromUserId(t.record.id) : t.type === a.h8.GROUP_DM || t.record.type !== E.d4z.GUILD_FORUM && t.record.type !== E.d4z.GUILD_MEDIA && u.Z.can(E.Plq.VIEW_CHANNEL, t.record) && u.Z.can(E.Plq.SEND_MESSAGES, t.record)))
  })
}

function A(e) {
  let {
    results: t,
    hasQuery: n,
    queryMode: a,
    frequentChannels: r,
    targetDestination: u,
    selectedDestinations: o,
    pinnedDestinations: c,
    originDestination: d
  } = e;
  if (n) return f(g(t));
  let E = null != c && c.length > 0 ? c.map(e => S(e)) : [],
    _ = i.Z.getChannelHistory(),
    h = _.length > 0 ? _.map(e => (0, s.Z)(e)) : [],
    A = r.length > 0 ? r.map(e => (0, s.Z)(e.id)) : [],
    I = g([...E, null != u ? S(u) : null, ...h, ...A]),
    p = (null == o ? void 0 : o.find(e => (0, l.isEqual)(e, d))) != null,
    C = null == d || p ? [] : [d.id];
  return null != a ? f(I.filter(e => e.type === a)) : f(I, C)
}