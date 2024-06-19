l.d(n, {
  Z: function() {
    return b
  },
  k: function() {
    return E
  }
}), l(789020);
var a = l(735250),
  i = l(470079),
  s = l(442837),
  r = l(481060),
  t = l(933557),
  d = l(471445),
  c = l(592125),
  o = l(271383),
  u = l(430824),
  h = l(496675),
  m = l(186523),
  g = l(768581),
  x = l(630388),
  Z = l(526120),
  C = l(563534),
  v = l(846121),
  f = l(305762),
  I = l(981631),
  j = l(372897),
  N = l(689938),
  p = l(336324);

function E(e) {
  let {
    title: n,
    emojiId: l,
    emojiName: i,
    icon: s,
    completed: t,
    Icon: d,
    ...c
  } = e, o = "channel" === c.variant ? c.channelId : null, u = "static" === c.variant ? c.subtitle : c.channelName, h = null != o ? g.ZP.getNewMemberActionIconURL({
    channelId: o,
    icon: s
  }) : null;
  return (0, a.jsxs)("div", {
    className: p.action,
    children: [null != h ? (0, a.jsx)("img", {
      src: h,
      className: p.icon,
      width: 32,
      height: 32,
      alt: "",
      "aria-hidden": !0
    }) : (0, a.jsx)(f.Z, {
      emojiId: l,
      emojiName: i,
      size: f.R.LARGE,
      defaultComponent: (0, a.jsx)("div", {
        className: p.channelIconContainer,
        children: (0, a.jsx)(d, {
          className: p.channelIcon,
          color: "currentColor"
        })
      })
    }), (0, a.jsxs)("div", {
      className: p.actionInfo,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: n
      }), null != u ? (0, a.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: u
      }) : null]
    }), t ? (0, a.jsx)(r.CircleCheckIcon, {
      size: "md",
      color: "currentColor",
      secondaryColor: "#fff",
      className: p.checkCircleCompleted
    }) : (0, a.jsx)(m.Z, {
      className: p.checkCircle,
      width: 24,
      height: 24
    })]
  })
}

function _(e) {
  var n;
  let {
    action: l,
    completed: o
  } = e, {
    channelId: u,
    title: m,
    emoji: g,
    icon: x
  } = l, {
    id: C,
    name: v
  } = null != g ? g : {}, f = (0, s.e7)([c.Z], () => c.Z.getChannel(u)), j = (0, t.ZP)(f, !0), N = (0, s.e7)([h.Z], () => h.Z.can(I.Plq.VIEW_CHANNEL, f)), _ = i.useCallback(() => {
    if (null == f) return null;
    (0, Z.gp)(f.guild_id, f.id)
  }, [f]);
  if (null == f || !N) return null;
  let b = null !== (n = (0, d.KS)(f)) && void 0 !== n ? n : r.TextIcon;
  return (0, a.jsx)(r.Clickable, {
    className: p.clickableAction,
    onClick: _,
    children: (0, a.jsx)(E, {
      variant: "channel",
      channelId: u,
      title: m,
      channelName: j,
      emojiId: C,
      emojiName: v,
      icon: x,
      completed: o,
      Icon: b
    })
  })
}

function b(e) {
  let {
    guildId: n
  } = e, l = (0, s.e7)([C.Z], () => C.Z.getNewMemberActions(n), [n]), t = (0, s.e7)([v.Z], () => v.Z.getCompletedActions(n)), d = (0, s.e7)([o.ZP], () => o.ZP.getSelfMember(n)), c = (0, s.e7)([u.Z], () => u.Z.getGuild(n));
  i.useEffect(() => {
    var e;
    null == t && (null == d ? void 0 : d.flags) != null && (0, x.yE)(null !== (e = d.flags) && void 0 !== e ? e : 0, j.q.STARTED_HOME_ACTIONS) && (0, Z.Fg)(n)
  }, [t, n, null == d ? void 0 : d.flags]);
  let h = i.useCallback(() => {
    null != c && null != c.rulesChannelId && (0, Z.gp)(c.id, c.rulesChannelId)
  }, [c]);
  return null == d || null == l || 0 === l.length ? null : (0, a.jsxs)("div", {
    className: p.container,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: N.Z.Messages.GET_STARTED
    }), l.map(e => (0, a.jsx)(_, {
      action: e,
      completed: (null == t ? void 0 : t[e.channelId]) === !0,
      guildId: n
    }, e.channelId)), (null == c ? void 0 : c.rulesChannelId) != null && (0, a.jsxs)(r.Clickable, {
      className: p.action,
      onClick: h,
      children: [(0, a.jsx)("div", {
        className: p.rulesIconContainer,
        children: (0, a.jsx)(r.BookCheckIcon, {
          size: "xs",
          color: "currentColor",
          className: p.rulesIcon
        })
      }), (0, a.jsx)("div", {
        className: p.actionInfo,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: N.Z.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION
        })
      })]
    })]
  })
}