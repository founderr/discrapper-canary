"use strict";
var s = n(735250);
n(470079);
var l = n(120356),
  a = n.n(l),
  r = n(913527),
  i = n.n(r),
  o = n(481060),
  c = n(70956),
  d = n(689938),
  u = n(781303);
t.Z = e => {
  let {
    rateLimitPerUser: t,
    slowmodeCooldownGuess: n,
    isBypassSlowmode: l,
    leadingIcon: r = !1
  } = e, m = "", h = "";
  if (t >= c.Z.Seconds.HOUR) {
    let e = Math.floor(t / c.Z.Seconds.HOUR),
      n = Math.floor((t - e * c.Z.Seconds.HOUR) / c.Z.Seconds.MINUTE),
      s = t - e * c.Z.Seconds.HOUR - n * c.Z.Seconds.MINUTE;
    h = d.Z.Messages.FORUM_SLOWMODE_DESC_HOURS.format({
      hours: e,
      minutes: n,
      seconds: s
    })
  } else if (t >= 60) {
    let e = Math.floor(t / 60);
    h = d.Z.Messages.FORUM_SLOWMODE_DESC_MINUTES.format({
      minutes: e,
      seconds: t - 60 * e
    })
  } else h = d.Z.Messages.FORUM_SLOWMODE_DESC.format({
    seconds: t
  });
  if (!l && n > 0) {
    let e = i().duration(n);
    if (n > c.Z.Millis.HOUR) {
      let t = "".concat(e.minutes()).padStart(2, "0"),
        n = "".concat(e.seconds()).padStart(2, "0");
      m = "".concat(e.hours(), ":").concat(t, ":").concat(n)
    } else {
      let t = "".concat(e.seconds()).padStart(2, "0");
      m = "".concat(e.minutes(), ":").concat(t)
    }
  } else m = l ? d.Z.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : d.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT;
  let g = (0, s.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: m
    }),
    x = (0, s.jsx)(o.TimerIcon, {
      size: "xs",
      color: "currentColor",
      className: a()(u.slowModeIcon, {
        [u.leadingIcon]: r
      })
    });
  return (0, s.jsx)(o.Tooltip, {
    text: h,
    children: e => (0, s.jsx)("div", {
      className: u.cooldownWrapper,
      ...e,
      children: r ? (0, s.jsxs)(s.Fragment, {
        children: [x, g]
      }) : (0, s.jsxs)(s.Fragment, {
        children: [g, x]
      })
    })
  })
}