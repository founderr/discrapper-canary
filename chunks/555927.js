"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("653041"), a("47120"), a("390547");
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("906732"),
  r = a("171368"),
  o = a("841710"),
  u = a("981631"),
  d = a("689938");

function c(e) {
  let {
    priorityMembers: t,
    otherMembers: a,
    totalMembers: s,
    activity: i,
    guildId: c,
    sourceAnalyticsLocations: f
  } = e, E = [];
  for (let {
      user: e,
      status: a
    }
    of t) E.push((0, n.jsx)(l.MenuItem, {
    id: e.id,
    keepItemStyles: !0,
    render: t => (0, n.jsx)(o.default, {
      ...t,
      user: e,
      status: a,
      guildId: c
    }),
    action: () => (0, r.openUserProfileModal)({
      userId: e.id,
      guildId: c,
      sourceAnalyticsLocations: f,
      analyticsLocation: {
        section: u.AnalyticsSections.ACTIVITY_FEED_NOW_PLAYING_CONTEXT_MENU
      }
    })
  }));
  for (let e of a) E.push((0, n.jsx)(l.MenuItem, {
    id: e.id,
    keepItemStyles: !0,
    render: t => (0, n.jsx)(o.default, {
      ...t,
      user: e,
      guildId: c
    }),
    action: () => (0, r.openUserProfileModal)({
      userId: e.id,
      guildId: c,
      sourceAnalyticsLocations: f,
      analyticsLocation: {
        section: u.AnalyticsSections.ACTIVITY_FEED_NOW_PLAYING_CONTEXT_MENU
      }
    })
  }));
  let h = s - E.length;
  return h > 0 && E.push((0, n.jsx)(l.MenuItem, {
    id: "unknown-members-".concat(null == i ? void 0 : i.session_id),
    render: e => (0, n.jsx)(o.NowPlayingUnknownMemberMenuItem, {
      ...e,
      label: d.default.Messages.GAME_FEED_UNKNOWN_PLAYERS.format({
        count: h
      })
    })
  })), E
}

function f(e) {
  let {
    priorityMembers: t,
    partiedMembers: a,
    currentActivities: r,
    guildContext: o
  } = e, u = new Set(t.map(e => {
    let {
      user: t
    } = e;
    return t.id
  })), f = a.filter(e => !u.has(e.id)), {
    analyticsLocations: E
  } = (0, i.default)(), h = s.useMemo(() => {
    let e = r.flatMap(e => {
      let {
        playingMembers: t
      } = e;
      return t
    }).map(e => e.id);
    return a.filter(t => !e.includes(t.id))
  }, [a, r]);
  if (r.length <= 1 && 0 === h.length) {
    var _, C;
    return (0, n.jsx)(l.MenuGroup, {
      label: a.length > 1 ? d.default.Messages.ACTIVITY_FEED_SINGLE_MEMBER_LIST_HEADER.format({
        memberCount: a.length
      }) : void 0,
      children: c({
        priorityMembers: t,
        otherMembers: f,
        totalMembers: a.length,
        activity: null !== (C = null === (_ = r[0]) || void 0 === _ ? void 0 : _.activity) && void 0 !== C ? C : void 0,
        guildId: null == o ? void 0 : o.id,
        sourceAnalyticsLocations: E
      })
    })
  }
  let m = r.map((e, a) => {
      let {
        playingMembers: s,
        game: i,
        activity: r
      } = e, d = new Set(s.map(e => e.id));
      return (0, n.jsx)(l.MenuGroup, {
        label: "".concat(i.name, " - ").concat(s.length),
        children: c({
          priorityMembers: t.filter(e => {
            let {
              user: t
            } = e;
            return d.has(t.id)
          }),
          otherMembers: s.filter(e => !u.has(e.id)),
          totalMembers: s.length,
          activity: null != r ? r : void 0,
          guildId: null == o ? void 0 : o.id,
          sourceAnalyticsLocations: E
        })
      }, a)
    }),
    S = h.map(e => e.id);
  return [...m, (0, n.jsx)(l.MenuGroup, {
    label: "".concat(d.default.Messages.ACTIVITY_FEED_OTHER_MEMBER_LIST_HEADER, " - ").concat(h.length),
    children: c({
      priorityMembers: t.filter(e => {
        let {
          user: t
        } = e;
        return S.includes(t.id)
      }),
      otherMembers: h.filter(e => !u.has(e.id)),
      totalMembers: h.length,
      guildId: null == o ? void 0 : o.id,
      sourceAnalyticsLocations: E
    })
  })]
}