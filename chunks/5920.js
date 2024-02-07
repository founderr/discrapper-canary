"use strict";
a.r(t), a.d(t, {
  selectedTagFromRowData: function() {
    return m
  },
  useFilteredGuilds: function() {
    return D
  },
  useBroadcastingPrivacyAudience: function() {
    return x
  },
  useBroadcastingStoredSelectedTags: function() {
    return N
  },
  sanitizeAllowedGuildIds: function() {
    return L
  },
  sanitizeAllowedUserIds: function() {
    return B
  }
}), a("424973"), a("222007");
var l = a("884691"),
  n = a("627445"),
  r = a.n(n),
  s = a("249654"),
  i = a("446674"),
  d = a("137223"),
  o = a("355313"),
  u = a("845579"),
  c = a("271938"),
  S = a("42203"),
  f = a("525065"),
  A = a("26989"),
  T = a("305961"),
  _ = a("27618"),
  E = a("677099"),
  I = a("697218"),
  g = a("158998"),
  R = a("844153"),
  h = a("606762");

function m(e) {
  let t;
  return e.rowType === h.RowType.USER ? t = {
    type: d.RichTagTypes.USER,
    label: e.name,
    avatar: e.avatarURL
  } : e.rowType === h.RowType.GUILD && (t = {
    type: d.RichTagTypes.GUILD,
    label: e.name,
    guild: e.guild
  }), r(null != t, "RowData must be a guild or a user"), {
    display: t,
    row: e
  }
}

function D(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    a = (0, i.useStateFromStoresArray)([T.default, f.default], () => {
      let a = [];
      return e.forEach(e => {
        var l;
        let n = T.default.getGuild(e),
          r = null !== (l = f.default.getMemberCount(e)) && void 0 !== l ? l : R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT;
        null != n && r < R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT && (null == t ? void 0 : t(n.name)) && a.push(n)
      }), a
    }, [e, t]);
  return a
}

function v(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    a = D(e, t),
    n = l.useMemo(() => a.map(e => ({
      rowType: h.RowType.GUILD,
      name: e.name,
      id: e.id,
      disabled: !1,
      guild: e,
      key: "".concat(h.RowType.GUILD, ":").concat(e.id)
    })), [a]);
  return n
}

function C(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return e.filter(e => null != e && (null == t ? void 0 : t(e.username))).map(e => ({
    rowType: h.RowType.USER,
    name: g.default.getUserTag(e),
    id: e.id,
    disabled: a && _.default.isFriend(e.id),
    avatarURL: e.getAvatarURL(null, 24),
    key: "".concat(h.RowType.USER, ":").concat(e.id)
  }))
}

function x(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    a = arguments.length > 2 ? arguments[2] : void 0,
    n = (0, i.useStateFromStores)([E.default], () => E.default.getFlattenedGuildIds()),
    r = v(n, t),
    d = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0,
        t = arguments.length > 1 ? arguments[1] : void 0,
        a = arguments.length > 2 ? arguments[2] : void 0,
        n = (0, i.useStateFromStoresArray)([_.default], () => _.default.getFriendIDs()),
        r = D(t),
        d = (0, i.useStateFromStores)([c.default], () => c.default.getId()),
        o = (0, i.useStateFromStores)([A.default], () => A.default.getMemberVersion()),
        u = l.useMemo(() => {
          let e = new Set(n);
          return r.forEach(t => {
            let a = A.default.getMemberIds(t.id);
            a.forEach(t => {
              !e.has(t) && !_.default.isBlocked(t) && e.add(t)
            })
          }), e
        }, [r, n, o]),
        f = (0, i.useStateFromStoresArray)([I.default], () => [...u].map(e => I.default.getUser(e)), [u]),
        T = f.filter(e => null != e && !e.bot && e.id !== d).sort((e, t) => {
          let a = S.default.getChannel(S.default.getDMFromUserId(null == e ? void 0 : e.id)),
            l = S.default.getChannel(S.default.getDMFromUserId(null == t ? void 0 : t.id));
          return s.default.compare(null == a ? void 0 : a.lastMessageId, null == l ? void 0 : l.lastMessageId) > 0 ? -1 : 1
        });
      return C(T, e, a)
    }(t, n, a);
  return [d, e ? [] : r]
}

function N() {
  let e = u.BroadcastAllowedGuildIds.useSetting(),
    t = u.BroadcastAllowedUserIds.useSetting(),
    a = {},
    l = {};
  if (v(e).forEach(e => {
      let t = (0, o.getFullRowId)(e);
      a[t] = m(e)
    }), t.length > 0) {
    let e = t.map(e => I.default.getUser(e)).filter(e => null != e);
    C(e).map(e => {
      let t = (0, o.getFullRowId)(e);
      l[t] = m(e)
    })
  }
  return {
    [h.RowType.GUILD]: a,
    [h.RowType.USER]: l
  }
}

function L(e) {
  let t = c.default.getId(),
    a = e;
  return a.length > R.BROADCASTING_MAX_ALLOWED_GUILD_IDS && (a = a.slice(0, R.BROADCASTING_MAX_ALLOWED_GUILD_IDS)), a = a.filter(e => {
    var a;
    return A.default.isMember(e, t) && (null !== (a = f.default.getMemberCount(e)) && void 0 !== a ? a : R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT) < R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT
  })
}

function B(e) {
  let t = e;
  return t.length > R.BROADCASTING_MAX_ALLOWED_USER_IDS && (t = t.slice(0, R.BROADCASTING_MAX_ALLOWED_USER_IDS)), t
}