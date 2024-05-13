"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("924826"),
  r = n("442837"),
  o = n("481060"),
  u = n("788307"),
  d = n("43267"),
  c = n("933557"),
  f = n("471445"),
  h = n("199902"),
  E = n("592125"),
  m = n("430824"),
  p = n("158776"),
  g = n("594174"),
  S = n("2093"),
  N = n("346656"),
  _ = n("153124"),
  T = n("689938"),
  I = n("595497");
let C = {
  top: 8,
  bottom: 8,
  left: -4,
  right: -4
};

function A(e) {
  let {
    channel: t,
    children: n,
    gotoChannel: l,
    mentionCount: s,
    channelState: r,
    toggleCollapsed: u
  } = e, d = (0, i.useListItem)("recents-header-".concat(t.id, "-").concat((0, _.useUID)()));
  return (0, a.jsx)(o.FocusRing, {
    offset: C,
    children: (0, a.jsxs)("div", {
      className: I.channelHeader,
      ...d,
      tabIndex: 0,
      "data-recents-channel": t.id,
      onKeyDown: function(e) {
        null != u && null != r && ("ArrowRight" === e.key && r.collapsed || "ArrowLeft" === e.key && !r.collapsed) && (null == u || u(r))
      },
      children: [(0, a.jsx)(v, {
        channel: t,
        gotoChannel: l
      }), (0, a.jsx)(x, {
        channel: t,
        gotoChannel: l,
        mentionCount: s
      }), n]
    })
  })
}

function v(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e;
  return t.isPrivate() ? (0, a.jsx)(M, {
    channel: t,
    gotoChannel: n
  }) : (0, a.jsx)(R, {
    channel: t,
    gotoChannel: n
  })
}

function M(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, l = (0, r.useStateFromStores)([g.default], () => t.isDM() ? g.default.getUser(t.getRecipientId()) : null), s = null == l ? (0, d.getChannelIconURL)(t) : l.getAvatarURL(void 0, 40);
  return (0, a.jsx)(o.Clickable, {
    onClick: n,
    tabIndex: -1,
    children: (0, a.jsx)("img", {
      className: I.dmIcon,
      src: s,
      alt: "",
      "aria-hidden": !0
    })
  })
}

function R(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, l = (0, r.useStateFromStores)([m.default], () => m.default.getGuild(t.guild_id));
  return null == l ? null : (0, a.jsx)(N.default, {
    "aria-hidden": !0,
    className: I.guildIcon,
    guild: l,
    size: N.default.Sizes.MEDIUM,
    active: !0,
    onClick: n,
    tabIndex: -1
  })
}

function x(e) {
  let {
    channel: t,
    gotoChannel: n,
    mentionCount: l
  } = e, i = (0, r.useStateFromStores)([m.default], () => m.default.getGuild(t.guild_id)), u = (0, r.useStateFromStores)([E.default], () => E.default.getChannel(t.parent_id)), d = (0, f.getChannelIconComponent)(t, i), h = (0, c.default)(t, !1), p = null == u ? null == i ? void 0 : i.name : "".concat(null == i ? void 0 : i.name, " › ").concat(u.name), g = t.isMultiUserDM() ? T.default.Messages.MEMBERS_HEADER.format({
    members: t.recipients.length + 1
  }) : t.isPrivate() ? (0, a.jsx)(L, {
    channel: t
  }) : (0, a.jsx)(o.Clickable, {
    className: s()(I.subtext, I.guildName),
    onClick: n,
    children: p
  });
  return (0, a.jsxs)("div", {
    className: I.channelNameSection,
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: I.channelNameHeader,
      children: (0, a.jsxs)(o.Clickable, {
        className: I.channelName,
        onClick: n,
        children: [t.isThread() || t.isGroupDM() || null == d ? null : (0, a.jsx)(d, {
          className: t.isForumLikeChannel() ? I.forumIcon : void 0,
          width: 18,
          height: 18
        }), (0, a.jsx)("span", {
          className: I.channelNameSpan,
          children: h
        }), null != l && l > 0 ? (0, a.jsx)(S.default, {
          value: l,
          className: I.badge
        }) : null]
      })
    }), (0, a.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      className: I.subtextContainer,
      children: g
    })]
  })
}

function L(e) {
  let {
    channel: t
  } = e, {
    user: n,
    activities: l,
    applicationStream: s
  } = (0, r.useStateFromStoresObject)([g.default, p.default, h.default], () => {
    let e = g.default.getUser(t.getRecipientId());
    return {
      user: e,
      activities: null != e ? p.default.getActivities(e.id) : null,
      applicationStream: null != e ? h.default.getAnyStreamForUser(e.id) : null
    }
  });
  return null == l ? null : (0, a.jsx)(u.default, {
    className: I.activityStatus,
    emojiClassName: I.activityEmoji,
    activities: l,
    applicationStream: s,
    hideTooltip: !0,
    user: n
  })
}