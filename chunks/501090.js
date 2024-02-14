"use strict";
let l;
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("222007"), n("808653"), n("424973");
var a = n("917351"),
  s = n.n(a),
  i = n("446674"),
  r = n("913144"),
  o = n("447909"),
  u = n("233069"),
  d = n("159885"),
  c = n("158998"),
  f = n("42203"),
  h = n("319781"),
  m = n("27618"),
  p = n("697218"),
  E = n("49111");
let S = !1,
  g = "",
  C = 0,
  _ = [],
  I = !1,
  T = new Set,
  v = null;

function x() {
  g = "", C = 0, _ = [], T = new Set, S = !1, v = null
}

function N(e) {
  g = e, C = 0, A()
}

function A() {
  if (!S) return !1;
  let e = f.default.getChannel(v);
  if (0 === g.trim().length) return null != l && l.clearQuery(), _ = function(e) {
    let t = m.default.getFriendIDs();
    return (null == e ? void 0 : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), t.reduce((e, t) => {
      let n = p.default.getUser(t);
      return null == n ? e : (e.push({
        user: n
      }), e)
    }, []).sort(R)
  }(e), !0;
  let t = null != e ? e.recipients : [];
  return null != l && l.setQuery(g, {
    friends: !0
  }, t, function() {
    let e = h.default.getFrequentlyWithoutFetchingLatest(),
      t = e.filter(e => e instanceof u.PrivateChannelRecord && e.isDM()),
      n = Math.max(...t.map(e => {
        let {
          id: t
        } = e;
        return h.default.getScoreWithoutFetchingLatest(t)
      })),
      l = {};
    return t.forEach(e => {
      let t = h.default.getScoreWithoutFetchingLatest(e.id),
        a = e.getRecipientId(),
        s = m.default.isFriend(a) ? .2 : 0,
        i = null != f.default.getDMFromUserId(a) ? .1 : 0;
      l[a] = 1 + t / n + s + i
    }), l
  }()), !1
}

function M() {
  if (!S) return !1;
  let e = I;
  return (I = s.some(m.default.getRelationships(), e => e === E.RelationshipTypes.FRIEND)) !== e
}

function R(e, t) {
  return (0, d.stripDiacritics)(c.default.getName(e.user).toLocaleLowerCase()).localeCompare((0, d.stripDiacritics)(c.default.getName(t.user).toLocaleLowerCase()))
}

function j(e) {
  let {
    results: t
  } = e;
  S && "" !== g && (_ = t.map(e => {
    let {
      id: t
    } = e;
    return {
      user: p.default.getUser(t)
    }
  }).filter(e => null != e.user), D.emitChange())
}

function L() {
  return null != l && (l.destroy(), l = null), o.default.getSearchContext(j, 1e3)
}

function O(e) {
  if (e.key !== E.NEW_GROUP_DM_POPOUT_ID) return !1;
  S = !0, M(), l = L(), v = null, N("")
}

function y(e) {
  if (e.key !== E.NEW_GROUP_DM_POPOUT_ID) return !1;
  P()
}

function P() {
  null != l && (l.destroy(), l = null), x()
}
class b extends i.default.Store {
  initialize() {
    this.waitFor(p.default, f.default, m.default), this.syncWith([p.default, f.default], A), this.syncWith([m.default], M)
  }
  getResults() {
    return _
  }
  hasFriends() {
    return I
  }
  getSelectedUsers() {
    return T
  }
  getQuery() {
    return g
  }
  getState() {
    return {
      query: g,
      selectedRow: C,
      selectedUsers: T,
      results: _,
      hasFriends: I
    }
  }
}
b.displayName = "PrivateChannelRecipientsInviteStore";
let D = new b(r.default, {
  CONNECTION_OPEN: function() {
    x()
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null != t) return !1;
    let l = S;
    return x(), S = l, v = n, A()
  },
  MODAL_PUSH: O,
  SHOW_ACTION_SHEET: O,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
    S = !0, M(), l = L(), v = e.channelId, N("")
  },
  MODAL_POP: y,
  HIDE_ACTION_SHEET: y,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: P,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
    v = e.channelId, N(e.query)
  },
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
    C = e.row
  },
  PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function(e) {
    let {
      userId: t
    } = e;
    T.add(t), T = new Set(T)
  },
  PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function(e) {
    let {
      userId: t
    } = e;
    T.delete(t), T = new Set(T)
  }
});
var U = D