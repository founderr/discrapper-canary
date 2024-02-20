"use strict";
n.r(t), n.d(t, {
  NewMemberAction: function() {
    return R
  },
  default: function() {
    return x
  }
}), n("702976");
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("679653"),
  d = n("419830"),
  o = n("42203"),
  u = n("26989"),
  c = n("305961"),
  N = n("957255"),
  _ = n("593195"),
  I = n("578706"),
  E = n("904276"),
  f = n("641892"),
  O = n("315102"),
  S = n("568734"),
  T = n("347895"),
  m = n("698882"),
  D = n("675305"),
  A = n("205454"),
  g = n("49111"),
  G = n("657944"),
  h = n("782340"),
  L = n("918648");

function R(e) {
  let {
    title: t,
    emojiId: n,
    emojiName: l,
    icon: s,
    completed: r,
    Icon: d,
    ...o
  } = e, u = "channel" === o.variant ? o.channelId : null, c = "static" === o.variant ? o.subtitle : o.channelName, N = null != u ? O.default.getNewMemberActionIconURL({
    channelId: u,
    icon: s
  }) : null;
  return (0, a.jsxs)("div", {
    className: L.action,
    children: [null != N ? (0, a.jsx)("img", {
      src: N,
      className: L.icon,
      width: 32,
      height: 32,
      alt: "",
      "aria-hidden": !0
    }) : (0, a.jsx)(A.default, {
      emojiId: n,
      emojiName: l,
      size: A.CTAEmojiSize.LARGE,
      defaultComponent: (0, a.jsx)("div", {
        className: L.channelIconContainer,
        children: (0, a.jsx)(d, {
          className: L.channelIcon
        })
      })
    }), (0, a.jsxs)("div", {
      className: L.actionInfo,
      children: [(0, a.jsx)(i.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t
      }), null != c ? (0, a.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: c
      }) : null]
    }), r ? (0, a.jsx)(I.default, {
      backgroundColor: "#fff",
      className: L.checkCircleCompleted,
      width: 24,
      height: 24
    }) : (0, a.jsx)(E.default, {
      className: L.checkCircle,
      width: 24,
      height: 24
    })]
  })
}

function p(e) {
  var t;
  let {
    action: n,
    completed: u
  } = e, {
    channelId: c,
    title: I,
    emoji: E,
    icon: f
  } = n, {
    id: O,
    name: S
  } = null != E ? E : {}, m = (0, s.useStateFromStores)([o.default], () => o.default.getChannel(c)), D = (0, r.default)(m, !0), A = (0, s.useStateFromStores)([N.default], () => N.default.can(g.Permissions.VIEW_CHANNEL, m)), G = l.useCallback(() => {
    if (null == m) return null;
    (0, T.selectNewMemberActionChannel)(m.guild_id, m.id)
  }, [m]);
  if (null == m || !A) return null;
  let h = null !== (t = (0, d.getChannelIconComponent)(m)) && void 0 !== t ? t : _.default;
  return (0, a.jsx)(i.Clickable, {
    className: L.clickableAction,
    onClick: G,
    children: (0, a.jsx)(R, {
      variant: "channel",
      channelId: c,
      title: I,
      channelName: D,
      emojiId: O,
      emojiName: S,
      icon: f,
      completed: u,
      Icon: h
    })
  })
}

function x(e) {
  let {
    guildId: t
  } = e, n = (0, s.useStateFromStores)([m.default], () => m.default.getNewMemberActions(t), [t]), r = (0, s.useStateFromStores)([D.default], () => D.default.getCompletedActions(t)), d = (0, s.useStateFromStores)([u.default], () => u.default.getSelfMember(t)), o = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(t));
  l.useEffect(() => {
    var e;
    null == r && (null == d ? void 0 : d.flags) != null && (0, S.hasFlag)(null !== (e = d.flags) && void 0 !== e ? e : 0, G.GuildMemberFlags.STARTED_HOME_ACTIONS) && (0, T.fetchNewMemberActions)(t)
  }, [r, t, null == d ? void 0 : d.flags]);
  let N = l.useCallback(() => {
    null != o && null != o.rulesChannelId && (0, T.selectNewMemberActionChannel)(o.id, o.rulesChannelId)
  }, [o]);
  return null == d || null == n || 0 === n.length ? null : (0, a.jsxs)("div", {
    className: L.container,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: h.default.Messages.GET_STARTED
    }), n.map(e => (0, a.jsx)(p, {
      action: e,
      completed: (null == r ? void 0 : r[e.channelId]) === !0,
      guildId: t
    }, e.channelId)), (null == o ? void 0 : o.rulesChannelId) != null && (0, a.jsxs)(i.Clickable, {
      className: L.action,
      onClick: N,
      children: [(0, a.jsx)("div", {
        className: L.rulesIconContainer,
        children: (0, a.jsx)(f.default, {
          className: L.rulesIcon
        })
      }), (0, a.jsx)("div", {
        className: L.actionInfo,
        children: (0, a.jsx)(i.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: h.default.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION
        })
      })]
    })]
  })
}