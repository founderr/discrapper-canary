"use strict";
let l, i, a, s, r, u, o;
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var d = n("446674"),
  c = n("913144"),
  f = n("116460"),
  h = n("449008"),
  I = n("354023"),
  g = n("299039"),
  E = n("42203"),
  _ = n("27618"),
  p = n("843823"),
  v = n("49111"),
  m = n("91366");
let T = new Set,
  S = [],
  N = new Map;

function C(e) {
  let t = new Set,
    n = null == s || o === m.InviteTargetTypes.EMBEDDED_APPLICATION ? void 0 : s.id,
    l = (0, I.getMostRecentDMedUser)(T, n);
  for (let e of (null != l && !_.default.isBlocked(l.id) && t.add(l.id), p.default.getUserAffinitiesUserIds())) t.add(e);
  let i = new Set;
  if (o === m.InviteTargetTypes.EMBEDDED_APPLICATION) {
    let e = f.default.getChannelHistory();
    e.map(e => E.default.getChannel(e)).filter(h.isNotNullish).filter(e => e.type === v.ChannelTypes.GUILD_TEXT).slice(0, 3).forEach(e => i.add(e.id))
  }
  return (0, I.generateRowsForQuery)({
    query: e,
    omitUserIds: T,
    suggestedUserIds: t,
    maxRowsWithoutQuery: 100,
    omitGuildId: n,
    suggestedChannelIds: i,
    inviteTargetType: o
  })
}

function A(e) {
  S = e, N = new Map, e.forEach((e, t) => {
    N.set(e, {
      index: t
    })
  })
}
class x extends d.default.Store {
  initialize() {
    this.waitFor(_.default, p.default)
  }
  getInviteSuggestionRows() {
    return S
  }
  getTotalSuggestionsCount() {
    return i
  }
  getInitialCounts() {
    return l
  }
  getSelectedInviteMetadata(e) {
    let t = N.get(e),
      n = p.default.getUserAffinitiesUserIds();
    return null != t ? {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: S.length,
      numAffinityConnections: n.size,
      isFiltered: a
    } : null
  }
}
x.displayName = "InviteSuggestionsStore";
var M = new x(c.default, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: d,
      applicationId: c,
      inviteTargetType: f
    } = e;
    s = null != d ? n : null, r = d, u = c, o = f;
    let h = _.default.getRelationships(),
      E = g.default.keys(h).filter(e => h[e] === v.RelationshipTypes.BLOCKED),
      p = (0, I.getUsersAlreadyJoined)({
        channel: r,
        applicationId: u,
        inviteTargetType: f
      });
    T = new Set([...t, ...E, ...p]), a = !1;
    let {
      rows: m,
      counts: N
    } = C("");
    A(m), l = N, i = S.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    a = "" !== t;
    let {
      rows: n
    } = C(t);
    A(n)
  }
})