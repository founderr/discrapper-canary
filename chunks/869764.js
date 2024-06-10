"use strict";
t.r(l), t.d(l, {
  NewMemberAction: function() {
    return b
  },
  default: function() {
    return T
  }
}), t("789020");
var a = t("735250"),
  n = t("470079"),
  s = t("442837"),
  i = t("481060"),
  d = t("933557"),
  r = t("471445"),
  u = t("592125"),
  o = t("271383"),
  c = t("430824"),
  f = t("496675"),
  m = t("93879"),
  h = t("441674"),
  g = t("186523"),
  x = t("931468"),
  C = t("768581"),
  v = t("630388"),
  I = t("526120"),
  S = t("563534"),
  N = t("846121"),
  j = t("305762"),
  p = t("981631"),
  E = t("372897"),
  _ = t("689938"),
  M = t("48199");

function b(e) {
  let {
    title: l,
    emojiId: t,
    emojiName: n,
    icon: s,
    completed: d,
    Icon: r,
    ...u
  } = e, o = "channel" === u.variant ? u.channelId : null, c = "static" === u.variant ? u.subtitle : u.channelName, f = null != o ? C.default.getNewMemberActionIconURL({
    channelId: o,
    icon: s
  }) : null;
  return (0, a.jsxs)("div", {
    className: M.action,
    children: [null != f ? (0, a.jsx)("img", {
      src: f,
      className: M.icon,
      width: 32,
      height: 32,
      alt: "",
      "aria-hidden": !0
    }) : (0, a.jsx)(j.default, {
      emojiId: t,
      emojiName: n,
      size: j.CTAEmojiSize.LARGE,
      defaultComponent: (0, a.jsx)("div", {
        className: M.channelIconContainer,
        children: (0, a.jsx)(r, {
          className: M.channelIcon
        })
      })
    }), (0, a.jsxs)("div", {
      className: M.actionInfo,
      children: [(0, a.jsx)(i.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: l
      }), null != c ? (0, a.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: c
      }) : null]
    }), d ? (0, a.jsx)(h.default, {
      backgroundColor: "#fff",
      className: M.checkCircleCompleted,
      width: 24,
      height: 24
    }) : (0, a.jsx)(g.default, {
      className: M.checkCircle,
      width: 24,
      height: 24
    })]
  })
}

function A(e) {
  var l;
  let {
    action: t,
    completed: o
  } = e, {
    channelId: c,
    title: h,
    emoji: g,
    icon: x
  } = t, {
    id: C,
    name: v
  } = null != g ? g : {}, S = (0, s.useStateFromStores)([u.default], () => u.default.getChannel(c)), N = (0, d.default)(S, !0), j = (0, s.useStateFromStores)([f.default], () => f.default.can(p.Permissions.VIEW_CHANNEL, S)), E = n.useCallback(() => {
    if (null == S) return null;
    (0, I.selectNewMemberActionChannel)(S.guild_id, S.id)
  }, [S]);
  if (null == S || !j) return null;
  let _ = null !== (l = (0, r.getChannelIconComponent)(S)) && void 0 !== l ? l : m.default;
  return (0, a.jsx)(i.Clickable, {
    className: M.clickableAction,
    onClick: E,
    children: (0, a.jsx)(b, {
      variant: "channel",
      channelId: c,
      title: h,
      channelName: N,
      emojiId: C,
      emojiName: v,
      icon: x,
      completed: o,
      Icon: _
    })
  })
}

function T(e) {
  let {
    guildId: l
  } = e, t = (0, s.useStateFromStores)([S.default], () => S.default.getNewMemberActions(l), [l]), d = (0, s.useStateFromStores)([N.default], () => N.default.getCompletedActions(l)), r = (0, s.useStateFromStores)([o.default], () => o.default.getSelfMember(l)), u = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(l));
  n.useEffect(() => {
    var e;
    null == d && (null == r ? void 0 : r.flags) != null && (0, v.hasFlag)(null !== (e = r.flags) && void 0 !== e ? e : 0, E.GuildMemberFlags.STARTED_HOME_ACTIONS) && (0, I.fetchNewMemberActions)(l)
  }, [d, l, null == r ? void 0 : r.flags]);
  let f = n.useCallback(() => {
    null != u && null != u.rulesChannelId && (0, I.selectNewMemberActionChannel)(u.id, u.rulesChannelId)
  }, [u]);
  return null == r || null == t || 0 === t.length ? null : (0, a.jsxs)("div", {
    className: M.container,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: _.default.Messages.GET_STARTED
    }), t.map(e => (0, a.jsx)(A, {
      action: e,
      completed: (null == d ? void 0 : d[e.channelId]) === !0,
      guildId: l
    }, e.channelId)), (null == u ? void 0 : u.rulesChannelId) != null && (0, a.jsxs)(i.Clickable, {
      className: M.action,
      onClick: f,
      children: [(0, a.jsx)("div", {
        className: M.rulesIconContainer,
        children: (0, a.jsx)(x.default, {
          className: M.rulesIcon
        })
      }), (0, a.jsx)("div", {
        className: M.actionInfo,
        children: (0, a.jsx)(i.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: _.default.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION
        })
      })]
    })]
  })
}