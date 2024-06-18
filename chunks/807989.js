"use strict";
n.d(t, {
  Z: function() {
    return f
  }
}), n(789020), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(243814),
  a = n(993365),
  l = n(481060),
  u = n(979200),
  _ = n(630388),
  c = n(709054),
  d = n(941532),
  E = n(713938),
  I = n(981631),
  T = n(689938),
  h = n(236099);
let S = e => {
  switch (e) {
    case u.ZC.IP_LOCATION:
      return l.GlobeEarthIcon;
    case u.ZC.DISPLAYS_ADVERTISEMENTS:
      return l.EmbedIcon;
    default:
      return null
  }
};

function f(e) {
  var t;
  let n, {
      application: r,
      scopes: s,
      redirectUri: a,
      approximateGuildCount: f,
      isEmbeddedFlow: A,
      disclosures: m
    } = e,
    O = new Date(c.default.extractTimestamp(r.id)),
    R = (0, E.W3)(s),
    p = (0, _.yE)(null !== (t = r.flags) && void 0 !== t ? t : 0, I.udG.EMBEDDED);
  if (null != a && !p && !A) try {
    let e = new URL(a);
    n = null != e.host && e.host.length > 0 ? e.origin : e.href
  } catch (e) {
    n = null
  }
  return (0, i.jsxs)("div", {
    className: h.applicationDetails,
    children: [null != n ? (0, i.jsx)(N, {
      className: h.redirectWarning,
      icon: l.LinkIcon,
      text: T.Z.Messages.OAUTH2_DETAILS_REDIRECT.format({
        origin: n
      })
    }) : null, (0, i.jsx)(N, {
      icon: l.LockIcon,
      text: (0, d.i)(r)
    }), (0, i.jsx)(N, {
      icon: l.ClockIcon,
      text: T.Z.Messages.OAUTH2_DETAILS_CREATION_DATE.format({
        date: O
      })
    }), s.includes(o.x.BOT) && null != f ? (0, i.jsx)(N, {
      icon: l.RobotIcon,
      text: T.Z.Messages.OAUTH2_DETAILS_GUILDS.format({
        guildCount: f
      })
    }) : null, (0, i.jsx)(N, {
      icon: l.ShieldIcon,
      text: R
    }), null != m ? m.map(e => {
      let t = (0, u.PM)(e),
        n = S(e);
      return null != n && null != t ? (0, i.jsx)(N, {
        icon: n,
        text: t
      }) : null
    }) : null]
  })
}

function N(e) {
  let {
    icon: t,
    text: n,
    className: r
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(h.entry, r),
    children: [(0, i.jsx)(t, {
      className: h.entryIcon,
      color: "currentColor"
    }), (0, i.jsx)(a.x, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: h.entryInner,
      children: n
    })]
  })
}