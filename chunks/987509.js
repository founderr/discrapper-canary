n.d(t, {
  Be: function() {
    return E
  },
  ZP: function() {
    return g
  },
  hC: function() {
    return h
  }
}), n(47120), n(653041);
var l = n(392711),
  a = n(212819),
  i = n(938078),
  s = n(823385),
  r = n(592125),
  c = n(496675),
  o = n(594174),
  u = n(823379),
  d = n(41837),
  _ = n(981631);

function h(e) {
  return "".concat(e.type, "-").concat(e.id)
}

function E(e) {
  return "user" === e.type ? r.Z.getDMFromUserId(e.id) : e.id
}

function f(e) {
  if ("user" !== e.type) return (0, i.Z)(e.id);
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

function S(e, t) {
  let n;
  let l = new Set;
  if (null != t)
    for (let e of t) l.add(e);
  let i = [];
  for (let t of e) {
    if (null != t)
      if (t.type === a.h8.HEADER) n = t;
      else {
        let {
          id: e
        } = t.record;
        !l.has(e) && (l.add(e), null != n && (i.push(n), n = void 0), i.push(t))
      }
  }
  return i
}

function I(e) {
  return e.filter(e => {
    var t;
    return (0, u.lm)(e) && (e.type === a.h8.HEADER || (0, d.o)(e) && ((t = e).type === a.h8.USER ? null != r.Z.getDMFromUserId(t.record.id) : t.type === a.h8.GROUP_DM || t.record.type !== _.d4z.GUILD_FORUM && t.record.type !== _.d4z.GUILD_MEDIA && c.Z.can(_.Plq.VIEW_CHANNEL, t.record) && c.Z.can(_.Plq.SEND_MESSAGES, t.record)))
  })
}

function g(e) {
  let {
    results: t,
    hasQuery: n,
    queryMode: a,
    frequentChannels: r,
    targetDestination: c,
    selectedDestinations: o,
    pinnedDestinations: u,
    originDestination: d
  } = e;
  if (n) return S(I(t));
  let _ = null != u && u.length > 0 ? u.map(e => f(e)) : [],
    h = s.Z.getChannelHistory(),
    E = h.length > 0 ? h.map(e => (0, i.Z)(e)) : [],
    g = r.length > 0 ? r.map(e => (0, i.Z)(e.id)) : [],
    A = I([..._, null != c ? f(c) : null, ...E, ...g]),
    p = (null == o ? void 0 : o.find(e => (0, l.isEqual)(e, d))) != null,
    m = null == d || p ? [] : [d.id];
  return null != a ? S(A.filter(e => e.type === a)) : S(A, m)
}