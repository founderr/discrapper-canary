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
  N = n(158776),
  m = n(594174),
  h = n(2093),
  C = n(346656),
  S = n(153124),
  A = n(689938),
  p = n(51562);
let g = {
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
    offset: g,
    children: (0, s.jsxs)("div", {
      className: p.channelHeader,
      ...u,
      tabIndex: 0,
      "data-recents-channel": t.id,
      onKeyDown: function(e) {
        null != c && null != r && ("ArrowRight" === e.key && r.collapsed || "ArrowLeft" === e.key && !r.collapsed) && (null == c || c(r))
      },
      children: [(0, s.jsx)(O, {
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

function O(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e;
  return t.isPrivate() ? (0, s.jsx)(R, {
    channel: t,
    gotoChannel: n
  }) : (0, s.jsx)(M, {
    channel: t,
    gotoChannel: n
  })
}

function R(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, i = (0, r.e7)([m.default], () => t.isDM() ? m.default.getUser(t.getRecipientId()) : null), l = null == i ? (0, u.x)(t) : i.getAvatarURL(void 0, 40);
  return (0, s.jsx)(o.Clickable, {
    onClick: n,
    tabIndex: -1,
    children: (0, s.jsx)("img", {
      className: p.dmIcon,
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
    className: p.guildIcon,
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
  } = e, a = (0, r.e7)([T.Z], () => T.Z.getGuild(t.guild_id)), c = (0, r.e7)([I.Z], () => I.Z.getChannel(t.parent_id)), u = (0, E.KS)(t, a), _ = (0, d.ZP)(t, !1), N = null == c ? null == a ? void 0 : a.name : "".concat(null == a ? void 0 : a.name, " › ").concat(c.name), m = t.isMultiUserDM() ? A.Z.Messages.MEMBERS_HEADER.format({
    members: t.recipients.length + 1
  }) : t.isPrivate() ? (0, s.jsx)(v, {
    channel: t
  }) : (0, s.jsx)(o.Clickable, {
    className: l()(p.subtext, p.guildName),
    onClick: n,
    children: N
  });
  return (0, s.jsxs)("div", {
    className: p.channelNameSection,
    children: [(0, s.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: p.channelNameHeader,
      children: (0, s.jsxs)(o.Clickable, {
        className: p.channelName,
        onClick: n,
        children: [t.isThread() || t.isGroupDM() || null == u ? null : (0, s.jsx)(u, {
          className: t.isForumLikeChannel() ? p.forumIcon : void 0,
          width: 18,
          height: 18,
          size: "custom",
          color: "currentColor"
        }), (0, s.jsx)("span", {
          className: p.channelNameSpan,
          children: _
        }), null != i && i > 0 ? (0, s.jsx)(h.Z, {
          value: i,
          className: p.badge
        }) : null]
      })
    }), (0, s.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      className: p.subtextContainer,
      children: m
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
  } = (0, r.cj)([m.default, N.Z, _.Z], () => {
    let e = m.default.getUser(t.getRecipientId());
    return {
      user: e,
      activities: null != e ? N.Z.getActivities(e.id) : null,
      applicationStream: null != e ? _.Z.getAnyStreamForUser(e.id) : null
    }
  });
  return null == i ? null : (0, s.jsx)(c.Z, {
    className: p.activityStatus,
    emojiClassName: p.activityEmoji,
    activities: i,
    applicationStream: l,
    hideTooltip: !0,
    user: n
  })
}