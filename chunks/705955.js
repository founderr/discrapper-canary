"use strict";
let u, I, s, l, i, a, r;
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007");
var _ = n("446674"),
  E = n("913144"),
  S = n("116460"),
  T = n("449008"),
  f = n("354023"),
  N = n("42203"),
  O = n("27618"),
  d = n("843823"),
  o = n("49111"),
  g = n("91366");
let M = new Set,
  U = [],
  c = new Map;

function P(e) {
  let t = new Set,
    n = null == l || r === g.InviteTargetTypes.EMBEDDED_APPLICATION ? void 0 : l.id,
    u = (0, f.getMostRecentDMedUser)(M, n);
  for (let e of (null != u && !O.default.isBlocked(u.id) && t.add(u.id), d.default.getUserAffinitiesUserIds())) t.add(e);
  let I = new Set;
  if (r === g.InviteTargetTypes.EMBEDDED_APPLICATION) {
    let e = S.default.getChannelHistory();
    e.map(e => N.default.getChannel(e)).filter(T.isNotNullish).filter(e => e.type === o.ChannelTypes.GUILD_TEXT).slice(0, 3).forEach(e => I.add(e.id))
  }
  return (0, f.generateRowsForQuery)({
    query: e,
    omitUserIds: M,
    suggestedUserIds: t,
    maxRowsWithoutQuery: 100,
    omitGuildId: n,
    suggestedChannelIds: I,
    inviteTargetType: r
  })
}

function m(e) {
  U = e, c = new Map, e.forEach((e, t) => {
    c.set(e, {
      index: t
    })
  })
}
class D extends _.default.Store {
  initialize() {
    this.waitFor(O.default, d.default)
  }
  getInviteSuggestionRows() {
    return U
  }
  getTotalSuggestionsCount() {
    return I
  }
  getInitialCounts() {
    return u
  }
  getSelectedInviteMetadata(e) {
    let t = c.get(e),
      n = d.default.getUserAffinitiesUserIds();
    return null != t ? {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: U.length,
      numAffinityConnections: n.size,
      isFiltered: s
    } : null
  }
}
D.displayName = "InviteSuggestionsStore";
var R = new D(E.default, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: _,
      applicationId: E,
      inviteTargetType: S
    } = e;
    l = null != _ ? n : null, i = _, a = E, r = S;
    let T = O.default.getRelationships(),
      N = Object.keys(T).filter(e => T[e] === o.RelationshipTypes.BLOCKED),
      d = (0, f.getUsersAlreadyJoined)({
        channel: i,
        applicationId: a,
        inviteTargetType: S
      });
    M = new Set([...t, ...N, ...d]), s = !1;
    let {
      rows: g,
      counts: c
    } = P("");
    m(g), u = c, I = U.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    s = "" !== t;
    let {
      rows: n
    } = P(t);
    m(n)
  }
})