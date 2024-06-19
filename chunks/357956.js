var n = t(735250);
t(470079);
var i = t(481060),
  a = t(774078),
  l = t(55935),
  r = t(689938);
s.Z = function(e) {
  let {
    className: s,
    cooldown: t
  } = e, o = (0, a.Z)(t);
  return (0, n.jsx)(i.Text, {
    className: s,
    variant: "text-sm/medium",
    color: "text-muted",
    children: (0, l.QX)(o, {
      days: r.Z.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN_DAYS,
      hours: r.Z.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN_HOURS,
      minutes: r.Z.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN_MINUTES
    })
  })
}