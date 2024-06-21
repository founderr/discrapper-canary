n.d(t, {
  FJ: function() {
    return o
  },
  HL: function() {
    return u
  },
  Yc: function() {
    return d
  },
  xe: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(702346),
  a = n(689938),
  r = n(47696);

function o(e) {
  let {
    message: t,
    compact: i,
    onClick: o
  } = e;
  return (0, s.jsx)(l.Z, {
    icon: n(508933),
    timestamp: t.timestamp,
    compact: i,
    contentClassName: r.messageContent,
    children: a.Z.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_DISQUALIFIED.format({
      onClick: o
    })
  })
}

function c(e) {
  let {
    message: t,
    compact: i
  } = e;
  return (0, s.jsx)(l.Z, {
    icon: n(324606),
    timestamp: t.timestamp,
    compact: i,
    contentClassName: r.messageContent,
    children: a.Z.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_REQUALIFIED
  })
}

function u(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, s.jsx)(l.Z, {
    iconNode: (0, s.jsx)(i.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: r.alertIcon
    }),
    timestamp: t.timestamp,
    compact: n,
    contentClassName: r.messageContent,
    children: a.Z.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING
  })
}

function d(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, s.jsx)(l.Z, {
    iconNode: (0, s.jsx)(i.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: r.alertIcon
    }),
    timestamp: t.timestamp,
    compact: n,
    contentClassName: r.messageContent,
    children: a.Z.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING
  })
}