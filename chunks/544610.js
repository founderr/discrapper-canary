let l;
n(47120), n(724458), n(653041);
var i, s, a, r, o = n(392711),
  c = n.n(o),
  u = n(442837),
  d = n(570140),
  h = n(279779),
  m = n(131704),
  p = n(624138),
  E = n(51144),
  g = n(592125),
  f = n(580005),
  C = n(699516),
  _ = n(594174),
  I = n(981631);
let x = !1,
  T = "",
  N = 0,
  Z = [],
  S = !1,
  v = new Set,
  A = null;

function M() {
  T = "", N = 0, Z = [], v = new Set, x = !1, A = null
}

function R(e) {
  T = e, N = 0, j()
}

function j() {
  if (!x) return !1;
  let e = g.Z.getChannel(A);
  if (0 === T.trim().length) return null != l && l.clearQuery(), Z = function(e) {
    let t = C.Z.getFriendIDs();
    return (null == e ? void 0 : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), t.reduce((e, t) => {
      let n = _.default.getUser(t);
      return null == n ? e : (e.push({
        user: n
      }), e)
    }, []).sort(O)
  }(e), !0;
  let t = null != e ? e.recipients : [];
  return null != l && l.setQuery(T, {
    friends: !0
  }, t, function() {
    let e = f.Z.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof m.mn && e.isDM()),
      t = Math.max(...e.map(e => {
        let {
          id: t
        } = e;
        return f.Z.getScoreWithoutFetchingLatest(t)
      })),
      n = {};
    return e.forEach(e => {
      let l = f.Z.getScoreWithoutFetchingLatest(e.id),
        i = e.getRecipientId(),
        s = C.Z.isFriend(i) ? .2 : 0,
        a = null != g.Z.getDMFromUserId(i) ? .1 : 0;
      n[i] = 1 + l / t + s + a
    }), n
  }()), !1
}

function L() {
  if (!x) return !1;
  let e = S;
  return (S = c().some(C.Z.getRelationships(), e => e === I.OGo.FRIEND)) !== e
}

function O(e, t) {
  return (0, p._I)(E.ZP.getName(e.user).toLocaleLowerCase()).localeCompare((0, p._I)(E.ZP.getName(t.user).toLocaleLowerCase()))
}

function P(e) {
  let {
    results: t
  } = e;
  if (!!x && "" !== T) Z = t.map(e => {
    let {
      id: t
    } = e;
    return {
      user: _.default.getUser(t)
    }
  }).filter(e => null != e.user), w.emitChange()
}

function y() {
  return null != l && (l.destroy(), l = null), h.Z.getSearchContext(P, 1e3)
}

function b(e) {
  if (e.key !== I.vTt) return !1;
  x = !0, L(), l = y(), A = null, R("")
}

function D(e) {
  if (e.key !== I.vTt) return !1;
  U()
}

function U() {
  null != l && (l.destroy(), l = null), M()
}
class k extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(_.default, g.Z, C.Z), this.syncWith([_.default, g.Z], j), this.syncWith([C.Z], L)
  }
  getResults() {
    return Z
  }
  hasFriends() {
    return S
  }
  getSelectedUsers() {
    return v
  }
  getQuery() {
    return T
  }
  getState() {
    return {
      query: T,
      selectedRow: N,
      selectedUsers: v,
      results: Z,
      hasFriends: S
    }
  }
}
r = "PrivateChannelRecipientsInviteStore", (a = "displayName") in(s = k) ? Object.defineProperty(s, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = r;
let w = new k(d.Z, {
  CONNECTION_OPEN: function() {
    M()
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null != t) return !1;
    let l = x;
    return M(), x = l, A = n, j()
  },
  MODAL_PUSH: b,
  SHOW_ACTION_SHEET: b,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
    x = !0, L(), l = y(), A = e.channelId, R("")
  },
  MODAL_POP: D,
  HIDE_ACTION_SHEET: D,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: U,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
    A = e.channelId, R(e.query)
  },
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
    N = e.row
  },
  PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function(e) {
    let {
      userId: t
    } = e;
    v.add(t), v = new Set(v)
  },
  PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function(e) {
    let {
      userId: t
    } = e;
    v.delete(t), v = new Set(v)
  }
});
t.Z = w