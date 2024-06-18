"use strict";
t.d(s, {
  $: function() {
    return T
  },
  Z: function() {
    return N
  }
});
var n = t(735250);
t(470079);
var i = t(392711),
  l = t(442837),
  a = t(481060),
  r = t(241559),
  o = t(527379),
  c = t(313364),
  d = t(434404),
  u = t(999382),
  E = t(981631),
  _ = t(689938),
  I = t(126197);

function T() {
  var e;
  let s = (0, l.e7)([u.Z], () => u.Z.getProps().guild, []),
    t = null !== (e = null == s ? void 0 : s.isCommunity()) && void 0 !== e && e;
  return (0, n.jsxs)(a.Clickable, {
    onClick: e => {
      if (null != s) t ? (e.preventDefault(), d.Z.close(), (0, o._X)(s.id)) : d.Z.open(s.id, E.pNK.MEMBERS)
    },
    className: I.rowContainer,
    children: [(0, n.jsx)("div", {
      children: _.Z.Messages.MEMBERS
    }), t && (0, n.jsx)(a.WindowLaunchIcon, {
      size: "custom",
      color: "currentColor",
      className: I.linkIcon,
      width: 16,
      height: 16
    })]
  })
}

function N() {
  var e;
  let {
    guild: s
  } = (0, l.e7)([u.Z], () => u.Z.getProps(), [], i.isEqual), t = null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : E.lds;
  return (0, r.n2)(t) ? (0, n.jsx)(c.Z, {
    guildId: t
  }) : null
}