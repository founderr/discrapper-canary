"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  },
  destinationChannel: function() {
    return _
  },
  destinationKey: function() {
    return A
  }
}), l("47120"), l("653041");
var s = l("392711"),
  a = l("212819"),
  n = l("938078"),
  i = l("823385"),
  u = l("592125"),
  r = l("496675"),
  o = l("594174"),
  d = l("823379"),
  c = l("41837"),
  f = l("981631");

function A(e) {
  return "".concat(e.type, "-").concat(e.id)
}

function _(e) {
  return "user" === e.type ? u.default.getDMFromUserId(e.id) : e.id
}

function E(e) {
  if ("user" !== e.type) return (0, n.default)(e.id);
  {
    let t = o.default.getUser(e.id);
    return null != t ? {
      type: a.AutocompleterResultTypes.USER,
      record: t,
      score: 0
    } : null
  }
}
l("689938");

function p(e, t) {
  let l;
  let s = new Set;
  if (null != t)
    for (let e of t) s.add(e);
  let n = [];
  for (let t of e) {
    if (null != t)
      if (t.type === a.AutocompleterResultTypes.HEADER) l = t;
      else {
        let {
          id: e
        } = t.record;
        !s.has(e) && (s.add(e), null != l && (n.push(l), l = void 0), n.push(t))
      }
  }
  return n
}

function I(e) {
  return e.filter(e => {
    var t;
    return (0, d.isNotNullish)(e) && (e.type === a.AutocompleterResultTypes.HEADER || (0, c.isAllowedType)(e) && ((t = e).type === a.AutocompleterResultTypes.USER ? null != u.default.getDMFromUserId(t.record.id) : t.type === a.AutocompleterResultTypes.GROUP_DM || t.record.type !== f.ChannelTypes.GUILD_FORUM && t.record.type !== f.ChannelTypes.GUILD_MEDIA && r.default.can(f.Permissions.VIEW_CHANNEL, t.record) && r.default.can(f.Permissions.SEND_MESSAGES, t.record)))
  })
}

function S(e) {
  let {
    results: t,
    hasQuery: l,
    queryMode: a,
    frequentChannels: u,
    targetDestination: r,
    selectedDestinations: o,
    pinnedDestinations: d,
    originDestination: c
  } = e;
  if (l) return p(I(t));
  let f = null != d && d.length > 0 ? d.map(e => E(e)) : [],
    A = i.default.getChannelHistory(),
    _ = A.length > 0 ? A.map(e => (0, n.default)(e)) : [],
    S = u.length > 0 ? u.map(e => (0, n.default)(e.id)) : [],
    h = I([...f, null != r ? E(r) : null, ..._, ...S]),
    m = (null == o ? void 0 : o.find(e => (0, s.isEqual)(e, c))) != null,
    T = null == c || m ? [] : [c.id];
  return null != a ? p(h.filter(e => e.type === a)) : p(h, T)
}