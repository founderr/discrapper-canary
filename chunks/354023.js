"use strict";
let u;
n.r(t), n.d(t, {
  RowTypes: function() {
    return I
  },
  generateRowsForQuery: function() {
    return R
  },
  getMostRecentDMedUser: function() {
    return p
  },
  getUsersAlreadyJoined: function() {
    return V
  },
  maxAgeString: function() {
    return y
  },
  default: function() {
    return v
  }
}), n("424973"), n("222007");
var I, s, l = n("191225"),
  i = n("42203"),
  a = n("26989"),
  r = n("660478"),
  _ = n("27618"),
  E = n("697218"),
  S = n("287850"),
  T = n("25292"),
  f = n("49111"),
  N = n("91366"),
  O = n("782340");
u = n("591205"), (s = I || (I = {})).GROUP_DM = "GROUP_DM", s.DM = "DM", s.FRIEND = "FRIEND", s.CHANNEL = "CHANNEL";
let d = (e, t) => null != e && a.default.isMember(e, t),
  o = e => {
    let {
      omitUserIds: t,
      suggestedUserIds: n,
      maxRowsWithoutQuery: u,
      omitGuildId: I,
      shownUserIds: s,
      rows: l,
      counts: i
    } = e;
    if (null != n)
      for (let e of n) {
        if (null != u && u > 0 && l.length >= u) break;
        if (t.has(e) || s.has(e)) continue;
        let n = E.default.getUser(e);
        !(null == n || d(I, n.id)) && (s.add(n.id), l.push({
          type: "FRIEND",
          item: n,
          isSuggested: !0
        }), i.numFriends++)
      }
  },
  g = e => {
    let {
      suggestedChannelIds: t,
      maxRowsWithoutQuery: n,
      rows: u,
      counts: I
    } = e;
    if (null != t)
      for (let e of t) {
        if (null != n && n > 0 && u.length >= n) break;
        let t = i.default.getChannel(e);
        null != t && (u.push({
          type: "CHANNEL",
          item: t,
          isSuggested: !0
        }), I.numChannels++)
      }
  },
  M = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: n,
      omitGuildId: u,
      shownUserIds: I,
      rows: s,
      counts: l,
      includeGroupDms: a,
      limit: _
    } = e, T = 0;
    for (let e of S.default.getPrivateChannelIds()) {
      if (null != n && n > 0 && s.length >= n || null != _ && T >= _) break;
      let S = i.default.getChannel(e);
      if (null == S || !S.isPrivate()) continue;
      if (a && S.type === f.ChannelTypes.GROUP_DM) {
        s.push({
          type: "GROUP_DM",
          item: S,
          isSuggested: !1
        }), l.numGroupDms++, T++;
        continue
      }
      let N = r.default.lastMessageId(S.id);
      if (null == N) continue;
      let O = S.getRecipientId();
      if (null != O && !t.has(O) && !I.has(O)) {
        let e = E.default.getUser(O);
        if (null == e || e.bot || d(u, e.id)) continue;
        I.add(e.id), s.push({
          type: "DM",
          item: e,
          isSuggested: !1
        }), l.numDms++, T++
      }
    }
  },
  U = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: n,
      omitGuildId: u,
      shownUserIds: I,
      rows: s,
      counts: l
    } = e;
    for (let e of _.default.getFriendIDs()) {
      if (null != n && n > 0 && s.length >= n) break;
      if (t.has(e) || I.has(e)) continue;
      let i = E.default.getUser(e);
      !(null == i || d(u, i.id)) && (s.push({
        type: "FRIEND",
        item: i,
        isSuggested: !1
      }), l.numFriends++)
    }
  },
  c = e => {
    let {
      query: t,
      rows: n,
      counts: u,
      inviteTargetType: I
    } = e;
    I === N.InviteTargetTypes.EMBEDDED_APPLICATION && T.default.queryChannels({
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
      }), u.numChannels++
    })
  },
  P = e => {
    let {
      query: t,
      omitUserIds: n,
      shownUserIds: u,
      rows: I,
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
      let l = i.default.getDMFromUserId(t.id);
      if (null == l) return;
      let a = r.default.lastMessageId(l);
      null != a && (u.add(t.id), I.push({
        type: "DM",
        item: t,
        isSuggested: !1
      }), s.numDms++)
    })
  },
  m = e => {
    let {
      query: t,
      rows: n,
      counts: u
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
      }), u.numGroupDms++
    })
  },
  D = e => {
    let {
      query: t,
      rows: n,
      counts: u,
      omitUserIds: I,
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
      !(I.has(t.id) || s.has(t.id)) && (s.add(t.id), n.push({
        type: "FRIEND",
        item: t,
        isSuggested: !1
      }), u.numFriends++)
    })
  };

function R(e) {
  let {
    query: t,
    inviteTargetType: n,
    omitUserIds: u,
    suggestedUserIds: I,
    suggestedChannelIds: s,
    maxRowsWithoutQuery: l,
    omitGuildId: i
  } = e, a = new Set, r = [], _ = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numGuildMembers: 0,
    numChannels: 0
  };
  if ("" === t) {
    let e = {
      omitUserIds: u,
      maxRowsWithoutQuery: l,
      omitGuildId: i,
      shownUserIds: a,
      rows: r,
      counts: _
    };
    n === N.InviteTargetTypes.EMBEDDED_APPLICATION && (M({
      ...e,
      includeGroupDms: !1,
      limit: 1
    }), g({
      ...e,
      suggestedChannelIds: s
    })), o({
      ...e,
      suggestedUserIds: I
    }), M({
      ...e,
      includeGroupDms: !0
    }), U(e)
  } else {
    let e = {
      query: t,
      rows: r,
      counts: _
    };
    n === N.InviteTargetTypes.EMBEDDED_APPLICATION && c({
      ...e,
      inviteTargetType: n
    }), P({
      ...e,
      omitUserIds: u,
      shownUserIds: a
    }), m(e), D({
      ...e,
      omitUserIds: u,
      shownUserIds: a
    })
  }
  return {
    rows: r,
    counts: _
  }
}

function p(e, t) {
  for (let n of S.default.getPrivateChannelIds()) {
    let u = i.default.getChannel(n);
    if (null == u || !u.isDM() || null == r.default.lastMessageId(u.id)) continue;
    let I = u.getRecipientId();
    if (null != I && !e.has(I)) {
      let e = E.default.getUser(I);
      if (null == e || e.bot || d(t, e.id)) continue;
      return e
    }
  }
  return null
}

function V(e) {
  let {
    channel: t,
    inviteTargetType: n,
    applicationId: u
  } = e;
  if (n === N.InviteTargetTypes.EMBEDDED_APPLICATION) {
    if (null != t) {
      for (let e of l.default.getEmbeddedActivitiesForChannel(t.id))
        if (e.applicationId === u) return new Set(e.userIds)
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
  h = {
    [u.INVITE_OPTIONS_30_MINUTES.value]: {
      value: 30,
      type: A.MINUTES
    },
    [u.INVITE_OPTIONS_1_HOUR.value]: {
      value: 1,
      type: A.HOURS
    },
    [u.INVITE_OPTIONS_6_HOURS.value]: {
      value: 6,
      type: A.HOURS
    },
    [u.INVITE_OPTIONS_12_HOURS.value]: {
      value: 12,
      type: A.HOURS
    },
    [u.INVITE_OPTIONS_1_DAY.value]: {
      value: 1,
      type: A.DAYS
    },
    [u.INVITE_OPTIONS_7_DAYS.value]: {
      value: 7,
      type: A.DAYS
    },
    [u.INVITE_OPTIONS_FOREVER.value]: {
      value: 0,
      type: A.NEVER
    }
  };

function y(e, t) {
  let n = parseInt(t, 10),
    u = 0 === n,
    I = h[e].value,
    s = h[e].type;
  switch (s) {
    case A.MINUTES:
      if (u) return O.default.Messages.INVITE_EXPIRES_MINUTES;
      return O.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
        numUses: n
      });
    case A.HOURS:
      if (u) return O.default.Messages.INVITE_EXPIRES_HOURS.format({
        numHours: I
      });
      return O.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
        numHours: I,
        numUses: n
      });
    case A.DAYS:
      if (u) return O.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
        numDays: I
      });
      return O.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
        numDays: I,
        numUses: n
      });
    case A.NEVER:
      if (u) return O.default.Messages.INVITE_EXPIRES_NEVER;
      return O.default.Messages.INVITE_EXPIRES_USES.format({
        numUses: n
      });
    default:
      return ""
  }
}
var v = {
  getMaxAgeOptions: u.MAX_AGE_OPTIONS,
  getMaxUsesOptions: u.MAX_USES_OPTIONS,
  INVITE_OPTIONS_FOREVER: u.INVITE_OPTIONS_FOREVER,
  INVITE_OPTIONS_1_DAY: u.INVITE_OPTIONS_1_DAY,
  INVITE_OPTIONS_7_DAYS: u.INVITE_OPTIONS_7_DAYS,
  INVITE_OPTIONS_12_HOURS: u.INVITE_OPTIONS_12_HOURS,
  INVITE_OPTIONS_6_HOURS: u.INVITE_OPTIONS_6_HOURS,
  INVITE_OPTIONS_1_HOUR: u.INVITE_OPTIONS_1_HOUR,
  INVITE_OPTIONS_30_MINUTES: u.INVITE_OPTIONS_30_MINUTES,
  INVITE_OPTIONS_UNLIMITED: u.INVITE_OPTIONS_UNLIMITED,
  INVITE_OPTIONS_ONCE: u.INVITE_OPTIONS_ONCE,
  INVITE_OPTIONS_5_TIMES: u.INVITE_OPTIONS_5_TIMES,
  INVITE_OPTIONS_10_TIMES: u.INVITE_OPTIONS_10_TIMES,
  INVITE_OPTIONS_25_TIMES: u.INVITE_OPTIONS_25_TIMES,
  INVITE_OPTIONS_50_TIMES: u.INVITE_OPTIONS_50_TIMES,
  INVITE_OPTIONS_100_TIMES: u.INVITE_OPTIONS_100_TIMES
}