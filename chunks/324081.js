n.d(t, {
  Z: function() {
    return f
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(91192),
  r = n(442837),
  o = n(481060),
  c = n(788307),
  u = n(43267),
  d = n(933557),
  E = n(471445),
  _ = n(199902),
  I = n(592125),
  T = n(430824),
  m = n(158776),
  N = n(594174),
  h = n(2093),
  C = n(346656),
  S = n(153124),
  A = n(689938),
  g = n(51562);
let p = {
  top: 8,
  bottom: 8,
  left: -4,
  right: -4
};

function f(e) {
  let {
    channel: t,
    children: n,
    gotoChannel: i,
    mentionCount: l,
    channelState: r,
    toggleCollapsed: c
  } = e, u = (0, a.JA)("recents-header-".concat(t.id, "-").concat((0, S.Dt)()));
  return (0, s.jsx)(o.FocusRing, {
    offset: p,
    children: (0, s.jsxs)("div", {
      className: g.channelHeader,
      ...u,
      tabIndex: 0,
      "data-recents-channel": t.id,
      onKeyDown: function(e) {
        null != c && null != r && ("ArrowRight" === e.key && r.collapsed || "ArrowLeft" === e.key && !r.collapsed) && (null == c || c(r))
      },
      children: [(0, s.jsx)(R, {
        channel: t,
        gotoChannel: i
      }), (0, s.jsx)(x, {
        channel: t,
        gotoChannel: i,
        mentionCount: l
      }), n]
    })
  })
}

function R(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e;
  return t.isPrivate() ? (0, s.jsx)(O, {
    channel: t,
    gotoChannel: n
  }) : (0, s.jsx)(M, {
    channel: t,
    gotoChannel: n
  })
}

function O(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, i = (0, r.e7)([N.default], () => t.isDM() ? N.default.getUser(t.getRecipientId()) : null), l = null == i ? (0, u.x)(t) : i.getAvatarURL(void 0, 40);
  return (0, s.jsx)(o.Clickable, {
    onClick: n,
    tabIndex: -1,
    children: (0, s.jsx)("img", {
      className: g.dmIcon,
      src: l,
      alt: "",
      "aria-hidden": !0
    })
  })
}

function M(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, i = (0, r.e7)([T.Z], () => T.Z.getGuild(t.guild_id));
  return null == i ? null : (0, s.jsx)(C.Z, {
    "aria-hidden": !0,
    className: g.guildIcon,
    guild: i,
    size: C.Z.Sizes.MEDIUM,
    active: !0,
    onClick: n,
    tabIndex: -1
  })
}

function x(e) {
  let {
    channel: t,
    gotoChannel: n,
    mentionCount: i
  } = e, a = (0, r.e7)([T.Z], () => T.Z.getGuild(t.guild_id)), c = (0, r.e7)([I.Z], () => I.Z.getChannel(t.parent_id)), u = (0, E.KS)(t, a), _ = (0, d.ZP)(t, !1), m = null == c ? null == a ? void 0 : a.name : "".concat(null == a ? void 0 : a.name, " › ").concat(c.name), N = t.isMultiUserDM() ? A.Z.Messages.MEMBERS_HEADER.format({
    members: t.recipients.length + 1
  }) : t.isPrivate() ? (0, s.jsx)(v, {
    channel: t
  }) : (0, s.jsx)(o.Clickable, {
    className: l()(g.subtext, g.guildName),
    onClick: n,
    children: m
  });
  return (0, s.jsxs)("div", {
    className: g.channelNameSection,
    children: [(0, s.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: g.channelNameHeader,
      children: (0, s.jsxs)(o.Clickable, {
        className: g.channelName,
        onClick: n,
        children: [t.isThread() || t.isGroupDM() || null == u ? null : (0, s.jsx)(u, {
          className: t.isForumLikeChannel() ? g.forumIcon : void 0,
          width: 18,
          height: 18,
          size: "custom",
          color: "currentColor"
        }), (0, s.jsx)("span", {
          className: g.channelNameSpan,
          children: _
        }), null != i && i > 0 ? (0, s.jsx)(h.Z, {
          value: i,
          className: g.badge
        }) : null]
      })
    }), (0, s.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      className: g.subtextContainer,
      children: N
    })]
  })
}

function v(e) {
  let {
    channel: t
  } = e, {
    user: n,
    activities: i,
    applicationStream: l
  } = (0, r.cj)([N.default, m.Z, _.Z], () => {
    let e = N.default.getUser(t.getRecipientId());
    return {
      user: e,
      activities: null != e ? m.Z.getActivities(e.id) : null,
      applicationStream: null != e ? _.Z.getAnyStreamForUser(e.id) : null
    }
  });
  return null == i ? null : (0, s.jsx)(c.Z, {
    className: g.activityStatus,
    emojiClassName: g.activityEmoji,
    activities: i,
    applicationStream: l,
    hideTooltip: !0,
    user: n
  })
}