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
  S = n("594174"),
  g = n("2093"),
  _ = n("346656"),
  N = n("153124"),
  I = n("689938"),
  T = n("553403");
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
  } = e, d = (0, i.useListItem)("recents-header-".concat(t.id, "-").concat((0, N.useUID)()));
  return (0, a.jsx)(o.FocusRing, {
    offset: C,
    children: (0, a.jsxs)("div", {
      className: T.channelHeader,
      ...d,
      tabIndex: 0,
      "data-recents-channel": t.id,
      onKeyDown: function(e) {
        null != u && null != r && ("ArrowRight" === e.key && r.collapsed || "ArrowLeft" === e.key && !r.collapsed) && (null == u || u(r))
      },
      children: [(0, a.jsx)(v, {
        channel: t,
        gotoChannel: l
      }), (0, a.jsx)(M, {
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
  return t.isPrivate() ? (0, a.jsx)(R, {
    channel: t,
    gotoChannel: n
  }) : (0, a.jsx)(x, {
    channel: t,
    gotoChannel: n
  })
}

function R(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, l = (0, r.useStateFromStores)([S.default], () => t.isDM() ? S.default.getUser(t.getRecipientId()) : null), s = null == l ? (0, d.getChannelIconURL)(t) : l.getAvatarURL(void 0, 40);
  return (0, a.jsx)(o.Clickable, {
    onClick: n,
    tabIndex: -1,
    children: (0, a.jsx)("img", {
      className: T.dmIcon,
      src: s,
      alt: "",
      "aria-hidden": !0
    })
  })
}

function x(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, l = (0, r.useStateFromStores)([m.default], () => m.default.getGuild(t.guild_id));
  return null == l ? null : (0, a.jsx)(_.default, {
    "aria-hidden": !0,
    className: T.guildIcon,
    guild: l,
    size: _.default.Sizes.MEDIUM,
    active: !0,
    onClick: n,
    tabIndex: -1
  })
}

function M(e) {
  let {
    channel: t,
    gotoChannel: n,
    mentionCount: l
  } = e, i = (0, r.useStateFromStores)([m.default], () => m.default.getGuild(t.guild_id)), u = (0, r.useStateFromStores)([E.default], () => E.default.getChannel(t.parent_id)), d = (0, f.getChannelIconComponent)(t, i), h = (0, c.default)(t, !1), p = null == u ? null == i ? void 0 : i.name : "".concat(null == i ? void 0 : i.name, " › ").concat(u.name), S = t.isMultiUserDM() ? I.default.Messages.MEMBERS_HEADER.format({
    members: t.recipients.length + 1
  }) : t.isPrivate() ? (0, a.jsx)(L, {
    channel: t
  }) : (0, a.jsx)(o.Clickable, {
    className: s()(T.subtext, T.guildName),
    onClick: n,
    children: p
  });
  return (0, a.jsxs)("div", {
    className: T.channelNameSection,
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: T.channelNameHeader,
      children: (0, a.jsxs)(o.Clickable, {
        className: T.channelName,
        onClick: n,
        children: [t.isThread() || t.isGroupDM() || null == d ? null : (0, a.jsx)(d, {
          className: t.isForumLikeChannel() ? T.forumIcon : void 0,
          width: 18,
          height: 18
        }), (0, a.jsx)("span", {
          className: T.channelNameSpan,
          children: h
        }), null != l && l > 0 ? (0, a.jsx)(g.default, {
          value: l,
          className: T.badge
        }) : null]
      })
    }), (0, a.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      className: T.subtextContainer,
      children: S
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
  } = (0, r.useStateFromStoresObject)([S.default, p.default, h.default], () => {
    let e = S.default.getUser(t.getRecipientId());
    return {
      user: e,
      activities: null != e ? p.default.getActivities(e.id) : null,
      applicationStream: null != e ? h.default.getAnyStreamForUser(e.id) : null
    }
  });
  return null == l ? null : (0, a.jsx)(u.default, {
    className: T.activityStatus,
    emojiClassName: T.activityEmoji,
    activities: l,
    applicationStream: s,
    hideTooltip: !0,
    user: n
  })
}