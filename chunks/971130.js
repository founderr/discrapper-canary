"use strict";
let l;
n.r(t), n.d(t, {
  RowTypes: function() {
    return u
  },
  generateRowsForQuery: function() {
    return U
  },
  getMostRecentDMedUser: function() {
    return R
  },
  getUsersAlreadyJoined: function() {
    return P
  },
  maxAgeString: function() {
    return y
  }
}), n("653041"), n("47120");
var u, s, a = n("317381"),
  r = n("592125"),
  i = n("271383"),
  I = n("306680"),
  o = n("699516"),
  d = n("594174"),
  _ = n("55589"),
  T = n("483360"),
  E = n("981631"),
  f = n("245335"),
  c = n("689938");
l = n("603617"), (s = u || (u = {})).GROUP_DM = "GROUP_DM", s.DM = "DM", s.FRIEND = "FRIEND", s.CHANNEL = "CHANNEL";
let N = (e, t) => null != e && i.default.isMember(e, t),
  S = e => {
    let {
      omitUserIds: t,
      suggestedUserIds: n,
      maxRowsWithoutQuery: l,
      omitGuildId: u,
      shownUserIds: s,
      rows: a,
      counts: r
    } = e;
    if (null != n)
      for (let e of n) {
        if (null != l && l > 0 && a.length >= l) break;
        if (t.has(e) || s.has(e)) continue;
        let n = d.default.getUser(e);
        !(null == n || N(u, n.id)) && (s.add(n.id), a.push({
          type: "FRIEND",
          item: n,
          isSuggested: !0
        }), r.numFriends++)
      }
  },
  O = e => {
    let {
      suggestedChannelIds: t,
      maxRowsWithoutQuery: n,
      rows: l,
      counts: u
    } = e;
    if (null != t)
      for (let e of t) {
        if (null != n && n > 0 && l.length >= n) break;
        let t = r.default.getChannel(e);
        null != t && (l.push({
          type: "CHANNEL",
          item: t,
          isSuggested: !0
        }), u.numChannels++)
      }
  },
  m = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: n,
      omitGuildId: l,
      shownUserIds: u,
      rows: s,
      counts: a,
      includeGroupDms: i,
      limit: o
    } = e, T = 0;
    for (let e of _.default.getPrivateChannelIds()) {
      if (null != n && n > 0 && s.length >= n || null != o && T >= o) break;
      let _ = r.default.getChannel(e);
      if (null == _ || !_.isPrivate()) continue;
      if (i && _.type === E.ChannelTypes.GROUP_DM) {
        s.push({
          type: "GROUP_DM",
          item: _,
          isSuggested: !1
        }), a.numGroupDms++, T++;
        continue
      }
      if (null == I.default.lastMessageId(_.id)) continue;
      let f = _.getRecipientId();
      if (null != f && !t.has(f) && !u.has(f)) {
        let e = d.default.getUser(f);
        if (null == e || e.bot || N(l, e.id)) continue;
        u.add(e.id), s.push({
          type: "DM",
          item: e,
          isSuggested: !1
        }), a.numDms++, T++
      }
    }
  },
  g = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: n,
      omitGuildId: l,
      shownUserIds: u,
      rows: s,
      counts: a
    } = e;
    for (let e of o.default.getFriendIDs()) {
      if (null != n && n > 0 && s.length >= n) break;
      if (t.has(e) || u.has(e)) continue;
      let r = d.default.getUser(e);
      !(null == r || N(l, r.id)) && (s.push({
        type: "FRIEND",
        item: r,
        isSuggested: !1
      }), a.numFriends++)
    }
  },
  h = e => {
    let {
      query: t,
      rows: n,
      counts: l,
      inviteTargetType: u
    } = e;
    u === f.InviteTargetTypes.EMBEDDED_APPLICATION && T.default.queryChannels({
      query: t,
      limit: 3,
      guildId: void 0
    }).forEach(e => {
      let {
        record: t
      } = e;
      n.push({
        type: "CHANNEL",
        item: t,
        isSuggested: !1
      }), l.numChannels++
    })
  },
  M = e => {
    let {
      query: t,
      omitUserIds: n,
      shownUserIds: l,
      rows: u,
      counts: s
    } = e;
    T.default.queryDMUsers({
      query: t,
      limit: 50
    }).forEach(e => {
      let {
        record: t
      } = e;
      if (n.has(t.id)) return;
      let a = r.default.getDMFromUserId(t.id);
      if (null != a) null != I.default.lastMessageId(a) && (l.add(t.id), u.push({
        type: "DM",
        item: t,
        isSuggested: !1
      }), s.numDms++)
    })
  },
  p = e => {
    let {
      query: t,
      rows: n,
      counts: l
    } = e;
    T.default.queryGroupDMs({
      query: t,
      limit: 50,
      fuzzy: !1
    }).forEach(e => {
      let {
        record: t
      } = e;
      n.push({
        type: "GROUP_DM",
        item: t,
        isSuggested: !1
      }), l.numGroupDms++
    })
  },
  D = e => {
    let {
      query: t,
      rows: n,
      counts: l,
      omitUserIds: u,
      shownUserIds: s
    } = e;
    T.default.queryFriends({
      query: t,
      limit: 500,
      _fuzzy: !1
    }).forEach(e => {
      let {
        record: t
      } = e;
      !(u.has(t.id) || s.has(t.id)) && (s.add(t.id), n.push({
        type: "FRIEND",
        item: t,
        isSuggested: !1
      }), l.numFriends++)
    })
  };

function U(e) {
  let {
    query: t,
    inviteTargetType: n,
    omitUserIds: l,
    suggestedUserIds: u,
    suggestedChannelIds: s,
    maxRowsWithoutQuery: a,
    omitGuildId: r
  } = e, i = new Set, I = [], o = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numGuildMembers: 0,
    numChannels: 0
  };
  if ("" === t) {
    let e = {
      omitUserIds: l,
      maxRowsWithoutQuery: a,
      omitGuildId: r,
      shownUserIds: i,
      rows: I,
      counts: o
    };
    n === f.InviteTargetTypes.EMBEDDED_APPLICATION && (m({
      ...e,
      includeGroupDms: !1,
      limit: 1
    }), O({
      ...e,
      suggestedChannelIds: s
    })), S({
      ...e,
      suggestedUserIds: u
    }), m({
      ...e,
      includeGroupDms: !0
    }), g(e)
  } else {
    let e = {
      query: t,
      rows: I,
      counts: o
    };
    n === f.InviteTargetTypes.EMBEDDED_APPLICATION && h({
      ...e,
      inviteTargetType: n
    }), M({
      ...e,
      omitUserIds: l,
      shownUserIds: i
    }), p(e), D({
      ...e,
      omitUserIds: l,
      shownUserIds: i
    })
  }
  return {
    rows: I,
    counts: o
  }
}

function R(e, t) {
  for (let n of _.default.getPrivateChannelIds()) {
    let l = r.default.getChannel(n);
    if (null == l || !l.isDM() || null == I.default.lastMessageId(l.id)) continue;
    let u = l.getRecipientId();
    if (null != u && !e.has(u)) {
      let e = d.default.getUser(u);
      if (null == e || e.bot || N(t, e.id)) continue;
      return e
    }
  }
  return null
}

function P(e) {
  let {
    channel: t,
    inviteTargetType: n,
    applicationId: l
  } = e;
  if (n === f.InviteTargetTypes.EMBEDDED_APPLICATION) {
    if (null != t) {
      for (let e of a.default.getEmbeddedActivitiesForChannel(t.id))
        if (e.applicationId === l) return new Set(e.userIds)
    }
  }
  return new Set
}
let A = {
    MINUTES: "minutes",
    HOURS: "hours",
    DAYS: "days",
    NEVER: "never"
  },
  C = {
    [l.INVITE_OPTIONS_30_MINUTES.value]: {
      value: 30,
      type: A.MINUTES
    },
    [l.INVITE_OPTIONS_1_HOUR.value]: {
      value: 1,
      type: A.HOURS
    },
    [l.INVITE_OPTIONS_6_HOURS.value]: {
      value: 6,
      type: A.HOURS
    },
    [l.INVITE_OPTIONS_12_HOURS.value]: {
      value: 12,
      type: A.HOURS
    },
    [l.INVITE_OPTIONS_1_DAY.value]: {
      value: 1,
      type: A.DAYS
    },
    [l.INVITE_OPTIONS_7_DAYS.value]: {
      value: 7,
      type: A.DAYS
    },
    [l.INVITE_OPTIONS_FOREVER.value]: {
      value: 0,
      type: A.NEVER
    }
  };

function y(e, t) {
  let n = parseInt(t, 10),
    l = 0 === n,
    u = C[e].value;
  switch (C[e].type) {
    case A.MINUTES:
      if (l) return c.default.Messages.INVITE_EXPIRES_MINUTES;
      return c.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
        numUses: n
      });
    case A.HOURS:
      if (l) return c.default.Messages.INVITE_EXPIRES_HOURS.format({
        numHours: u
      });
      return c.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
        numHours: u,
        numUses: n
      });
    case A.DAYS:
      if (l) return c.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
        numDays: u
      });
      return c.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
        numDays: u,
        numUses: n
      });
    case A.NEVER:
      if (l) return c.default.Messages.INVITE_EXPIRES_NEVER;
      return c.default.Messages.INVITE_EXPIRES_USES.format({
        numUses: n
      });
    default:
      return ""
  }
}
t.default = {
  getMaxAgeOptions: l.MAX_AGE_OPTIONS,
  getMaxUsesOptions: l.MAX_USES_OPTIONS,
  INVITE_OPTIONS_FOREVER: l.INVITE_OPTIONS_FOREVER,
  INVITE_OPTIONS_1_DAY: l.INVITE_OPTIONS_1_DAY,
  INVITE_OPTIONS_7_DAYS: l.INVITE_OPTIONS_7_DAYS,
  INVITE_OPTIONS_12_HOURS: l.INVITE_OPTIONS_12_HOURS,
  INVITE_OPTIONS_6_HOURS: l.INVITE_OPTIONS_6_HOURS,
  INVITE_OPTIONS_1_HOUR: l.INVITE_OPTIONS_1_HOUR,
  INVITE_OPTIONS_30_MINUTES: l.INVITE_OPTIONS_30_MINUTES,
  INVITE_OPTIONS_UNLIMITED: l.INVITE_OPTIONS_UNLIMITED,
  INVITE_OPTIONS_ONCE: l.INVITE_OPTIONS_ONCE,
  INVITE_OPTIONS_5_TIMES: l.INVITE_OPTIONS_5_TIMES,
  INVITE_OPTIONS_10_TIMES: l.INVITE_OPTIONS_10_TIMES,
  INVITE_OPTIONS_25_TIMES: l.INVITE_OPTIONS_25_TIMES,
  INVITE_OPTIONS_50_TIMES: l.INVITE_OPTIONS_50_TIMES,
  INVITE_OPTIONS_100_TIMES: l.INVITE_OPTIONS_100_TIMES
}