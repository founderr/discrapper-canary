n.d(t, {
  Kq: function() {
    return u
  },
  Ot: function() {
    return d
  },
  jz: function() {
    return h
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  r = n(534091),
  o = n(981631),
  c = n(407863);

function u(e) {
  let {
    locked: t = !1,
    channelType: n
  } = e, i = (0, a.useRedesignIconContext)().enabled, r = n === o.d4z.GUILD_VOICE || n === o.d4z.GUILD_STAGE_VOICE;
  if (!i) return (0, l.jsx)("div", {
    className: s()(c.emptyChannelIcon, c.emptyChannelIconSvg, {
      [c.locked]: t,
      [c.voiceChat]: r
    })
  });
  {
    let e = r ? a.ChatIcon : t ? a.TextLockIcon : a.TextIcon;
    return (0, l.jsx)("div", {
      className: s()(c.emptyChannelIcon, c.emptyChannelIconComponent),
      children: (0, l.jsx)(e, {
        color: a.tokens.colors.WHITE,
        size: "custom",
        width: 42,
        height: 42
      })
    })
  }
}

function d(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, l.jsx)(a.Heading, {
    "aria-hidden": "true",
    className: s()(n, c.header),
    variant: "heading-xxl/extrabold",
    children: t
  })
}

function h(e) {
  let {
    children: t
  } = e;
  return (0, l.jsx)(a.Text, {
    variant: "text-md/normal",
    color: "none",
    className: c.description,
    children: t
  })
}
t.ZP = function(e) {
  let {
    className: t,
    channelId: n,
    children: i,
    ...a
  } = e;
  return (0, l.jsx)("div", {
    className: s()(t, c.container),
    id: (0, r.p)(n, n),
    ...a,
    children: i
  })
}