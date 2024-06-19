n.d(t, {
  BT: function() {
    return M
  },
  KO: function() {
    return p
  },
  Kw: function() {
    return R
  },
  OU: function() {
    return b
  },
  bI: function() {
    return N
  },
  jp: function() {
    return A
  }
}), n(653041), n(47120);
var a = n(470079),
  l = n(512722),
  s = n.n(l),
  r = n(442837),
  i = n(461745),
  o = n(971628),
  d = n(695346),
  c = n(314897),
  u = n(592125),
  m = n(650774),
  h = n(271383),
  S = n(430824),
  T = n(699516),
  x = n(771845),
  g = n(594174),
  v = n(709054),
  f = n(51144),
  E = n(995923),
  C = n(71080);

function b(e) {
  let t;
  return e.rowType === C.aC.USER ? t = {
    type: i.Fj.USER,
    label: e.name,
    avatar: e.avatarURL
  } : e.rowType === C.aC.GUILD && (t = {
    type: i.Fj.GUILD,
    label: e.name,
    guild: e.guild
  }), s()(null != t, "RowData must be a guild or a user"), {
    display: t,
    row: e
  }
}

function R(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0;
  return (0, r.Wu)([S.Z, m.Z], () => {
    let n = [];
    return e.forEach(e => {
      var a;
      let l = S.Z.getGuild(e),
        s = null !== (a = m.Z.getMemberCount(e)) && void 0 !== a ? a : E.UK;
      null != l && s < E.UK && (null == t ? void 0 : t(l.name)) && n.push(l)
    }), n
  }, [e, t])
}

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    n = R(e, t);
  return a.useMemo(() => n.map(e => ({
    rowType: C.aC.GUILD,
    name: e.name,
    id: e.id,
    disabled: !1,
    guild: e,
    key: "".concat(C.aC.GUILD, ":").concat(e.id)
  })), [n])
}

function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return e.filter(e => null != e && (null == t ? void 0 : t(e.username))).map(e => ({
    rowType: C.aC.USER,
    name: f.ZP.getUserTag(e),
    id: e.id,
    disabled: n && T.Z.isFriend(e.id),
    avatarURL: e.getAvatarURL(null, 24),
    key: "".concat(C.aC.USER, ":").concat(e.id)
  }))
}

function M(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    n = arguments.length > 2 ? arguments[2] : void 0,
    l = (0, r.e7)([x.ZP], () => x.ZP.getFlattenedGuildIds()),
    s = _(l, t),
    i = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        l = (0, r.Wu)([T.Z], () => T.Z.getFriendIDs()),
        s = R(t),
        i = (0, r.e7)([c.default], () => c.default.getId()),
        o = (0, r.e7)([h.ZP], () => h.ZP.getMemberVersion()),
        d = a.useMemo(() => {
          let e = new Set(l);
          return s.forEach(t => {
            h.ZP.getMemberIds(t.id).forEach(t => {
              !e.has(t) && !T.Z.isBlocked(t) && e.add(t)
            })
          }), e
        }, [s, l, o]);
      return I((0, r.Wu)([g.default], () => [...d].map(e => g.default.getUser(e)), [d]).filter(e => null != e && !e.bot && e.id !== i).sort((e, t) => {
        let n = u.Z.getChannel(u.Z.getDMFromUserId(null == e ? void 0 : e.id)),
          a = u.Z.getChannel(u.Z.getDMFromUserId(null == t ? void 0 : t.id));
        return v.default.compare(null == n ? void 0 : n.lastMessageId, null == a ? void 0 : a.lastMessageId) > 0 ? -1 : 1
      }), e, n)
    }(t, l, n);
  return [i, e ? [] : s]
}

function A() {
  let e = d.MI.useSetting(),
    t = d.GA.useSetting(),
    n = {},
    a = {};
  return _(e).forEach(e => {
    n[(0, o.G)(e)] = b(e)
  }), t.length > 0 && I(t.map(e => g.default.getUser(e)).filter(e => null != e)).map(e => {
    a[(0, o.G)(e)] = b(e)
  }), {
    [C.aC.GUILD]: n,
    [C.aC.USER]: a
  }
}

function p(e) {
  let t = c.default.getId(),
    n = e;
  return n.length > E.Ly && (n = n.slice(0, E.Ly)), n = n.filter(e => {
    var n;
    return h.ZP.isMember(e, t) && (null !== (n = m.Z.getMemberCount(e)) && void 0 !== n ? n : E.UK) < E.UK
  })
}

function N(e) {
  let t = e;
  return t.length > E.uv && (t = t.slice(0, E.uv)), t
}