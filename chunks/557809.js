"use strict";
n.r(t), n.d(t, {
  renderTitle: function() {
    return L
  },
  renderTopic: function() {
    return R
  },
  HeaderGuildBreadcrumb: function() {
    return O
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("843962"),
  d = n("679653"),
  c = n("619335"),
  f = n("393414"),
  h = n("506885"),
  C = n("27618"),
  p = n("162771"),
  m = n("697218"),
  E = n("79798"),
  g = n("476263"),
  S = n("718490"),
  _ = n("960454"),
  A = n("740961"),
  T = n("539938"),
  M = n("540853"),
  I = n("49111"),
  N = n("782340"),
  v = n("250455");

function L(e) {
  let {
    channel: t,
    channelName: n,
    parentChannel: l,
    guild: r,
    inSidebar: f = !1,
    handleClick: h,
    handleContextMenu: p,
    handleParentClick: E,
    handleParentContextMenu: g,
    renderFollowButton: S
  } = e, A = (0, c.default)(t, r), {
    prefix: L,
    level: x
  } = function(e, t) {
    var n, a;
    switch (e) {
      case I.ChannelTypes.DM:
        return {
          prefix: N.default.Messages.DIRECT_MESSAGE, level: 1
        };
      case I.ChannelTypes.GROUP_DM:
        return {
          prefix: N.default.Messages.GROUP_DM, level: 1
        };
      case I.ChannelTypes.GUILD_DIRECTORY:
        return {
          prefix: null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : "", level: 1
        };
      case I.ChannelTypes.GUILD_ANNOUNCEMENT:
      case I.ChannelTypes.GUILD_TEXT:
      case I.ChannelTypes.GUILD_FORUM:
      case I.ChannelTypes.GUILD_MEDIA:
      case I.ChannelTypes.GUILD_STAGE_VOICE:
      case I.ChannelTypes.GUILD_VOICE:
        return {
          prefix: null !== (a = null == t ? void 0 : t.name) && void 0 !== a ? a : "", level: 1
        };
      case I.ChannelTypes.ANNOUNCEMENT_THREAD:
      case I.ChannelTypes.PUBLIC_THREAD:
      case I.ChannelTypes.PRIVATE_THREAD:
        return {
          prefix: N.default.Messages.THREAD, level: 2
        };
      default:
        return {
          prefix: null, level: 1
        }
    }
  }(t.type, r), R = (0, a.jsxs)(a.Fragment, {
    children: [null != L ? (0, a.jsxs)(o.HiddenVisually, {
      children: [L, ":"]
    }) : null, " ", n]
  });
  switch (t.type) {
    case I.ChannelTypes.DM:
      return (0, a.jsx)(M.default, {
        level: x,
        channel: t,
        handleClick: h,
        handleContextMenu: p
      });
    case I.ChannelTypes.GROUP_DM:
      if (t.isManaged()) return R;
      return (0, a.jsxs)(s.Fragment, {
        children: [(0, a.jsx)(o.HiddenVisually, {
          children: N.default.Messages.GROUP_DM
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(o.Avatar, {
            "aria-hidden": !0,
            className: v.avatar,
            size: o.AvatarSizes.SIZE_24,
            src: (0, u.getChannelIconURL)(t, 80, !1)
          })
        }), (0, a.jsx)(_.default, {
          channel: t
        }, "channel-".concat(t.id))]
      });
    case I.ChannelTypes.GUILD_ANNOUNCEMENT:
    case I.ChannelTypes.GUILD_TEXT:
    case I.ChannelTypes.GUILD_FORUM:
    case I.ChannelTypes.GUILD_MEDIA:
      return (0, a.jsxs)(s.Fragment, {
        children: [y(A, t.type === I.ChannelTypes.GUILD_ANNOUNCEMENT ? N.default.Messages.NEWS_CHANNEL : N.default.Messages.TEXT_CHANNEL), (0, a.jsx)(T.default.Title, {
          level: x,
          onContextMenu: p,
          onClick: h,
          children: R
        }), null != S ? S() : null]
      });
    case I.ChannelTypes.GUILD_VOICE:
      return (0, a.jsxs)(s.Fragment, {
        children: [y(A, N.default.Messages.VOICE_CHANNEL), (0, a.jsx)(T.default.Title, {
          level: x,
          onContextMenu: p,
          onClick: h,
          children: R
        })]
      });
    case I.ChannelTypes.GUILD_STAGE_VOICE:
      return (0, a.jsxs)(s.Fragment, {
        children: [y(A, N.default.Messages.STAGE_CHANNEL), (0, a.jsx)(T.default.Title, {
          level: x,
          onContextMenu: p,
          onClick: h,
          children: R
        })]
      });
    case I.ChannelTypes.ANNOUNCEMENT_THREAD:
    case I.ChannelTypes.PUBLIC_THREAD:
    case I.ChannelTypes.PRIVATE_THREAD:
      let O = null;
      if (!f && null != l) {
        let e = (0, c.default)(l, r);
        O = (0, a.jsxs)(s.Fragment, {
          children: [y(e, N.default.Messages.TEXT_CHANNEL), (0, a.jsx)(T.default.Title, {
            level: x,
            onContextMenu: g,
            onClick: E,
            className: i(v.parentChannelName, v.cursorPointer),
            children: (0, d.computeChannelName)(l, m.default, C.default)
          }), (0, a.jsx)(T.default.Caret, {})]
        })
      }
      let D = (null == l ? void 0 : l.type) != null && I.ChannelTypesSets.GUILD_THREADS_ONLY.has(l.type);
      return (0, a.jsxs)(s.Fragment, {
        children: [O, y(D ? null : A, N.default.Messages.THREAD), (0, a.jsx)(T.default.Title, {
          level: x,
          onContextMenu: p,
          onClick: h,
          className: i({
            [v.cursorPointer]: f,
            [v.forumPostTitle]: D
          }),
          children: R
        })]
      });
    case I.ChannelTypes.GUILD_DIRECTORY:
      let j = (null == r ? void 0 : r.hasFeature(I.GuildFeatures.HUB)) ? N.default.Messages.HUB_DIRECTORY_CHANNEL_TITLE.format({
        guildName: n
      }) : n;
      return (0, a.jsxs)(s.Fragment, {
        children: [null !== A ? (0, a.jsx)(T.default.Icon, {
          iconClassName: v.icon,
          icon: A,
          "aria-hidden": !0
        }) : null, (0, a.jsxs)(T.default.Title, {
          level: x,
          onContextMenu: p,
          onClick: h,
          children: [null != L ? (0, a.jsxs)(o.HiddenVisually, {
            children: [L, ":"]
          }) : null, " ", j]
        })]
      });
    default:
      return null
  }
}
let x = e => {
  let {
    channel: t
  } = e, n = (0, r.useStateFromStores)([m.default], () => m.default.getCurrentUser()), l = (0, r.useStateFromStores)([m.default], () => m.default.getUser(t.getRecipientId()));
  return (s.useEffect(() => {
    (null == n ? void 0 : n.isStaff()) && (0, h.default)(l.id, l.getAvatarURL(void 0, 80), {
      dispatchWait: !0,
      withMutualGuilds: !0,
      withMutualFriendsCount: !0
    })
  }, [n, l]), t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == l ? void 0 : l.isStaff())) ? (0, a.jsx)(E.default, {
    type: E.default.Types.STAFF_ONLY_DM
  }) : null
};

function R(e, t) {
  switch (e.type) {
    case I.ChannelTypes.DM:
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(x, {
          channel: e
        }), (0, a.jsx)(S.default, {
          channel: e
        }, e.id)]
      });
    case I.ChannelTypes.GUILD_ANNOUNCEMENT:
    case I.ChannelTypes.GUILD_TEXT:
    case I.ChannelTypes.GUILD_VOICE:
    case I.ChannelTypes.GUILD_STAGE_VOICE:
    case I.ChannelTypes.GROUP_DM:
      return null != t ? (0, a.jsx)(A.default, {
        channel: e,
        guild: t
      }, e.id) : null;
    default:
      return null
  }
}

function y(e, t) {
  return (0, a.jsxs)(a.Fragment, {
    children: [null !== e && (0, a.jsx)(T.default.Icon, {
      iconClassName: v.icon,
      icon: e,
      "aria-hidden": !0
    }), (0, a.jsx)(o.HiddenVisually, {
      children: t
    })]
  })
}

function O(e) {
  let {
    guild: t,
    channel: n,
    caretPosition: s = "left"
  } = e, l = (0, r.useStateFromStores)([p.default], () => p.default.getGuildId());
  return l !== I.FAVORITES || null == t ? null : (0, a.jsxs)("div", {
    className: v.guildBreadcrumbContainer,
    children: ["left" === s && (0, a.jsx)(T.default.Caret, {
      direction: "left"
    }), (0, a.jsx)(g.default, {
      guild: t,
      size: g.default.Sizes.SMALLER,
      className: v.guildBreadcrumbIcon,
      active: !0
    }), (0, a.jsx)(T.default.Title, {
      onClick: () => {
        (0, f.transitionToGuild)(t.id, n.id)
      },
      className: i(v.parentChannelName, v.cursorPointer),
      children: t.name
    }), "right" === s && (0, a.jsx)(T.default.Caret, {
      direction: "right"
    })]
  })
}