"use strict";
let l, i, a, s, r, u, o;
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007");
var d = n("446674"),
  c = n("913144"),
  f = n("116460"),
  h = n("449008"),
  I = n("354023"),
  g = n("42203"),
  E = n("27618"),
  _ = n("843823"),
  p = n("49111"),
  v = n("91366");
let m = new Set,
  T = [],
  S = new Map;

function N(e) {
  let t = new Set,
    n = null == s || o === v.InviteTargetTypes.EMBEDDED_APPLICATION ? void 0 : s.id,
    l = (0, I.getMostRecentDMedUser)(m, n);
  for (let e of (null != l && !E.default.isBlocked(l.id) && t.add(l.id), _.default.getUserAffinitiesUserIds())) t.add(e);
  let i = new Set;
  if (o === v.InviteTargetTypes.EMBEDDED_APPLICATION) {
    let e = f.default.getChannelHistory();
    e.map(e => g.default.getChannel(e)).filter(h.isNotNullish).filter(e => e.type === p.ChannelTypes.GUILD_TEXT).slice(0, 3).forEach(e => i.add(e.id))
  }
  return (0, I.generateRowsForQuery)({
    query: e,
    omitUserIds: m,
    suggestedUserIds: t,
    maxRowsWithoutQuery: 100,
    omitGuildId: n,
    suggestedChannelIds: i,
    inviteTargetType: o
  })
}

function C(e) {
  T = e, S = new Map, e.forEach((e, t) => {
    S.set(e, {
      index: t
    })
  })
}
class A extends d.default.Store {
  initialize() {
    this.waitFor(E.default, _.default)
  }
  getInviteSuggestionRows() {
    return T
  }
  getTotalSuggestionsCount() {
    return i
  }
  getInitialCounts() {
    return l
  }
  getSelectedInviteMetadata(e) {
    let t = S.get(e),
      n = _.default.getUserAffinitiesUserIds();
    return null != t ? {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: T.length,
      numAffinityConnections: n.size,
      isFiltered: a
    } : null
  }
}
A.displayName = "InviteSuggestionsStore";
var x = new A(c.default, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: d,
      applicationId: c,
      inviteTargetType: f
    } = e;
    s = null != d ? n : null, r = d, u = c, o = f;
    let h = E.default.getRelationships(),
      g = Object.keys(h).filter(e => h[e] === p.RelationshipTypes.BLOCKED),
      _ = (0, I.getUsersAlreadyJoined)({
        channel: r,
        applicationId: u,
        inviteTargetType: f
      });
    m = new Set([...t, ...g, ..._]), a = !1;
    let {
      rows: v,
      counts: S
    } = N("");
    C(v), l = S, i = T.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    a = "" !== t;
    let {
      rows: n
    } = N(t);
    C(n)
  }
})