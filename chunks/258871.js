var l = n(735250),
  i = n(470079),
  s = n(442837),
  r = n(481060),
  a = n(554747),
  o = n(434479),
  u = n(593364),
  c = n(703656),
  d = n(944486),
  h = n(147754),
  p = n(688438),
  g = n(981631),
  m = n(689938);
let C = [{
  key: "EVENTS",
  renderIcon: e => (0, l.jsx)(r.CalendarIcon, {
    size: "md",
    color: "currentColor",
    className: e
  }),
  getName: e => {
    let {
      numEvents: t
    } = e;
    return t > 0 ? m.Z.Messages.GUILD_EVENTS_PLURAL.format({
      number: t
    }) : m.Z.Messages.GUILD_EVENTS
  },
  handler: e => (0, r.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("22347"), n.e("56236")]).then(n.bind(n, 17671));
    return n => (0, l.jsx)(t, {
      ...n,
      guildId: e.id
    })
  })
}, {
  key: "JOIN_SERVERS",
  renderIcon: e => (0, l.jsx)(r.CompassIcon, {
    size: "md",
    color: "currentColor",
    className: e
  }),
  getName: () => m.Z.Messages.HUB_SIDEBAR_JOIN_SERVERS,
  handler: (e, t) => (0, c.XU)(e.id, t.id)
}, {
  key: "ADD_SERVERS",
  renderIcon: e => (0, l.jsx)(r.PlusSmallIcon, {
    size: "md",
    color: "currentColor",
    className: e
  }),
  getName: () => m.Z.Messages.HUB_SIDEBAR_ADD_SERVERS,
  handler: (e, t) => (0, r.openModalLazy)(async () => {
    let {
      default: i
    } = await Promise.all([n.e("99387"), n.e("79764")]).then(n.bind(n, 533202));
    return n => (0, l.jsx)(i, {
      ...n,
      directoryGuildName: e.name,
      directoryGuildId: e.id,
      directoryChannelId: t.id
    })
  })
}, {
  key: "INVITE_MEMBERS",
  renderIcon: e => (0, l.jsx)(r.GroupPlusIcon, {
    className: e
  }),
  getName: () => m.Z.Messages.HUB_SIDEBAR_INVITE_MEMBERS,
  handler: (e, t) => (0, r.openModalLazy)(async () => {
    let {
      default: i
    } = await Promise.all([n.e("99387"), n.e("7654"), n.e("9785")]).then(n.bind(n, 560114));
    return n => (0, l.jsx)(i, {
      ...n,
      guild: e,
      channel: t,
      source: g.t4x.HUB_SIDEBAR
    })
  })
}];
t.Z = e => {
  let {
    guild: t,
    channel: n
  } = e, r = (0, a.ZP)(t.id);
  i.useEffect(() => {
    h.Z.trackExposure({
      guildId: t.id,
      location: "543af8_1"
    })
  }, [t.id]);
  let {
    showHubEventsList: c
  } = h.Z.useExperiment({
    guildId: t.id,
    location: "543af8_2"
  }, {
    autoTrackExposure: !1
  }), g = (0, s.e7)([d.Z], () => null != n && d.Z.getChannelId() === n.id), m = i.useMemo(() => ({
    numEvents: r.length
  }), [r.length]), E = (0, p.t)(n);
  return (0, l.jsx)(l.Fragment, {
    children: C.map(e => {
      let {
        key: i,
        getName: s,
        handler: r,
        renderIcon: a
      } = e;
      if (!c && "EVENTS" === i) return null;
      let d = "".concat(i, "-").concat(t.id);
      return (0, l.jsx)(o.m, {
        id: d,
        renderIcon: a,
        text: s(m),
        selected: g && "JOIN_SERVERS" === i,
        onClick: null != n ? () => r(t, n) : void 0,
        trailing: "JOIN_SERVERS" === i && E > 0 ? (0, u.N)(E) : null
      }, d)
    })
  })
}