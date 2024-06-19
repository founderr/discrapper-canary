n.d(t, {
  Z: function() {
    return E
  }
}), n(653041), n(47120), n(390547);
var i = n(735250),
  s = n(470079),
  l = n(481060),
  a = n(906732),
  r = n(171368),
  o = n(841710),
  c = n(981631),
  u = n(689938);

function d(e) {
  let {
    priorityMembers: t,
    otherMembers: n,
    totalMembers: s,
    activity: a,
    guildId: d,
    sourceAnalyticsLocations: E
  } = e, h = [];
  for (let {
      user: e,
      status: n
    }
    of t) h.push((0, i.jsx)(l.MenuItem, {
    id: e.id,
    keepItemStyles: !0,
    render: t => (0, i.jsx)(o.Z, {
      ...t,
      user: e,
      status: n,
      guildId: d
    }),
    action: () => (0, r.openUserProfileModal)({
      userId: e.id,
      guildId: d,
      sourceAnalyticsLocations: E,
      analyticsLocation: {
        section: c.jXE.ACTIVITY_FEED_NOW_PLAYING_CONTEXT_MENU
      }
    })
  }));
  for (let e of n) h.push((0, i.jsx)(l.MenuItem, {
    id: e.id,
    keepItemStyles: !0,
    render: t => (0, i.jsx)(o.Z, {
      ...t,
      user: e,
      guildId: d
    }),
    action: () => (0, r.openUserProfileModal)({
      userId: e.id,
      guildId: d,
      sourceAnalyticsLocations: E,
      analyticsLocation: {
        section: c.jXE.ACTIVITY_FEED_NOW_PLAYING_CONTEXT_MENU
      }
    })
  }));
  let _ = s - h.length;
  return _ > 0 && h.push((0, i.jsx)(l.MenuItem, {
    id: "unknown-members-".concat(null == a ? void 0 : a.session_id),
    render: e => (0, i.jsx)(o.Y, {
      ...e,
      label: u.Z.Messages.GAME_FEED_UNKNOWN_PLAYERS.format({
        count: _
      })
    })
  })), h
}

function E(e) {
  let {
    priorityMembers: t,
    partiedMembers: n,
    currentActivities: r,
    guildContext: o
  } = e, c = new Set(t.map(e => {
    let {
      user: t
    } = e;
    return t.id
  })), E = n.filter(e => !c.has(e.id)), {
    analyticsLocations: h
  } = (0, a.ZP)(), _ = s.useMemo(() => {
    let e = r.flatMap(e => {
      let {
        playingMembers: t
      } = e;
      return t
    }).map(e => e.id);
    return n.filter(t => !e.includes(t.id))
  }, [n, r]);
  if (r.length <= 1 && 0 === _.length) {
    var I, m;
    return (0, i.jsx)(l.MenuGroup, {
      label: n.length > 1 ? u.Z.Messages.ACTIVITY_FEED_SINGLE_MEMBER_LIST_HEADER.format({
        memberCount: n.length
      }) : void 0,
      children: d({
        priorityMembers: t,
        otherMembers: E,
        totalMembers: n.length,
        activity: null !== (m = null === (I = r[0]) || void 0 === I ? void 0 : I.activity) && void 0 !== m ? m : void 0,
        guildId: null == o ? void 0 : o.id,
        sourceAnalyticsLocations: h
      })
    })
  }
  let g = r.map((e, n) => {
      let {
        playingMembers: s,
        game: a,
        activity: r
      } = e, u = new Set(s.map(e => e.id));
      return (0, i.jsx)(l.MenuGroup, {
        label: "".concat(a.name, " - ").concat(s.length),
        children: d({
          priorityMembers: t.filter(e => {
            let {
              user: t
            } = e;
            return u.has(t.id)
          }),
          otherMembers: s.filter(e => !c.has(e.id)),
          totalMembers: s.length,
          activity: null != r ? r : void 0,
          guildId: null == o ? void 0 : o.id,
          sourceAnalyticsLocations: h
        })
      }, n)
    }),
    p = _.map(e => e.id);
  return [...g, (0, i.jsx)(l.MenuGroup, {
    label: "".concat(u.Z.Messages.ACTIVITY_FEED_OTHER_MEMBER_LIST_HEADER, " - ").concat(_.length),
    children: d({
      priorityMembers: t.filter(e => {
        let {
          user: t
        } = e;
        return p.includes(t.id)
      }),
      otherMembers: _.filter(e => !c.has(e.id)),
      totalMembers: _.length,
      guildId: null == o ? void 0 : o.id,
      sourceAnalyticsLocations: h
    })
  })]
}