n.d(t, {
  TS: function() {
    return j
  },
  ud: function() {
    return v
  },
  v0: function() {
    return M
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(933557),
  u = n(995123),
  d = n(266076),
  h = n(703656),
  m = n(699516),
  p = n(914010),
  E = n(594174),
  g = n(467679),
  f = n(346656),
  C = n(946734),
  _ = n(99843),
  I = n(372564),
  x = n(984370),
  T = n(217314),
  N = n(981631),
  Z = n(689938),
  S = n(175803);

function v(e) {
  let {
    channel: t,
    channelName: n,
    parentChannel: s,
    guild: r,
    inSidebar: h = !1,
    handleClick: p,
    handleContextMenu: g,
    handleParentClick: f,
    handleParentContextMenu: C,
    renderFollowButton: I
  } = e, v = (0, u.Z)(t, r), {
    prefix: A,
    level: M
  } = function(e, t) {
    var n, l;
    switch (e) {
      case N.d4z.DM:
        return {
          prefix: Z.Z.Messages.DIRECT_MESSAGE, level: 1
        };
      case N.d4z.GROUP_DM:
        return {
          prefix: Z.Z.Messages.GROUP_DM, level: 1
        };
      case N.d4z.GUILD_DIRECTORY:
        return {
          prefix: null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : "", level: 1
        };
      case N.d4z.GUILD_ANNOUNCEMENT:
      case N.d4z.GUILD_TEXT:
      case N.d4z.GUILD_FORUM:
      case N.d4z.GUILD_MEDIA:
      case N.d4z.GUILD_STAGE_VOICE:
      case N.d4z.GUILD_VOICE:
        return {
          prefix: null !== (l = null == t ? void 0 : t.name) && void 0 !== l ? l : "", level: 1
        };
      case N.d4z.ANNOUNCEMENT_THREAD:
      case N.d4z.PUBLIC_THREAD:
      case N.d4z.PRIVATE_THREAD:
        return {
          prefix: Z.Z.Messages.THREAD, level: 2
        };
      default:
        return {
          prefix: null, level: 1
        }
    }
  }(t.type, r), j = (0, l.jsxs)(l.Fragment, {
    children: [null != A ? (0, l.jsxs)(o.HiddenVisually, {
      children: [A, ":"]
    }) : null, " ", n]
  });
  switch (t.type) {
    case N.d4z.DM:
      return (0, l.jsx)(T.Z, {
        level: M,
        channel: t,
        handleClick: p,
        handleContextMenu: g
      });
    case N.d4z.GROUP_DM:
      if (t.isManaged()) return j;
      return (0, l.jsxs)(i.Fragment, {
        children: [(0, l.jsx)(o.HiddenVisually, {
          children: Z.Z.Messages.GROUP_DM
        }), (0, l.jsx)("div", {
          children: (0, l.jsx)(d.Z, {
            "aria-hidden": !0,
            channel: t,
            size: o.AvatarSizes.SIZE_24,
            facepileSizeOverride: o.AvatarSizes.SIZE_32,
            experimentLocation: "header_bar",
            className: S.avatar
          })
        }), (0, l.jsx)(_.Z, {
          channel: t
        }, "channel-".concat(t.id))]
      });
    case N.d4z.GUILD_ANNOUNCEMENT:
    case N.d4z.GUILD_TEXT:
    case N.d4z.GUILD_FORUM:
    case N.d4z.GUILD_MEDIA:
      return (0, l.jsxs)(i.Fragment, {
        children: [R(v, t.type === N.d4z.GUILD_ANNOUNCEMENT ? Z.Z.Messages.NEWS_CHANNEL : Z.Z.Messages.TEXT_CHANNEL), (0, l.jsx)(x.Z.Title, {
          level: M,
          onContextMenu: g,
          onClick: p,
          children: j
        }), null != I ? I() : null]
      });
    case N.d4z.GUILD_VOICE:
      return (0, l.jsxs)(i.Fragment, {
        children: [R(v, Z.Z.Messages.VOICE_CHANNEL), (0, l.jsx)(x.Z.Title, {
          level: M,
          onContextMenu: g,
          onClick: p,
          children: j
        })]
      });
    case N.d4z.GUILD_STAGE_VOICE:
      return (0, l.jsxs)(i.Fragment, {
        children: [R(v, Z.Z.Messages.STAGE_CHANNEL), (0, l.jsx)(x.Z.Title, {
          level: M,
          onContextMenu: g,
          onClick: p,
          children: j
        })]
      });
    case N.d4z.ANNOUNCEMENT_THREAD:
    case N.d4z.PUBLIC_THREAD:
    case N.d4z.PRIVATE_THREAD:
      let L = null;
      if (!h && null != s) {
        let e = (0, u.Z)(s, r);
        L = (0, l.jsxs)(i.Fragment, {
          children: [R(e, Z.Z.Messages.TEXT_CHANNEL), (0, l.jsx)(x.Z.Title, {
            level: M,
            onContextMenu: C,
            onClick: f,
            className: a()(S.parentChannelName, S.cursorPointer),
            children: (0, c.F6)(s, E.default, m.Z)
          }), (0, l.jsx)(x.Z.Caret, {})]
        })
      }
      let O = (null == s ? void 0 : s.type) != null && N.TPd.GUILD_THREADS_ONLY.has(s.type);
      return (0, l.jsxs)(i.Fragment, {
        children: [L, R(O ? null : v, Z.Z.Messages.THREAD), (0, l.jsx)(x.Z.Title, {
          level: M,
          onContextMenu: g,
          onClick: p,
          className: a()({
            [S.cursorPointer]: h,
            [S.forumPostTitle]: O
          }),
          children: j
        })]
      });
    case N.d4z.GUILD_DIRECTORY:
      let P = (null == r ? void 0 : r.hasFeature(N.oNc.HUB)) ? Z.Z.Messages.HUB_DIRECTORY_CHANNEL_TITLE.format({
        guildName: n
      }) : n;
      return (0, l.jsxs)(i.Fragment, {
        children: [null !== v ? (0, l.jsx)(x.Z.Icon, {
          iconClassName: S.__invalid_icon,
          icon: v,
          "aria-hidden": !0
        }) : null, (0, l.jsxs)(x.Z.Title, {
          level: M,
          onContextMenu: g,
          onClick: p,
          children: [null != A ? (0, l.jsxs)(o.HiddenVisually, {
            children: [A, ":"]
          }) : null, " ", P]
        })]
      });
    default:
      return null
  }
}
let A = e => {
  let {
    channel: t
  } = e, n = (0, r.e7)([E.default], () => E.default.getCurrentUser()), i = (0, r.e7)([E.default], () => E.default.getUser(t.getRecipientId()));
  return t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == i ? void 0 : i.isStaff()) ? (0, l.jsx)(g.Z, {
    type: g.Z.Types.STAFF_ONLY_DM
  }) : null
};

function M(e, t) {
  switch (e.type) {
    case N.d4z.DM:
      return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(A, {
          channel: e
        }), (0, l.jsx)(C.Z, {
          channel: e
        }, e.id)]
      });
    case N.d4z.GUILD_ANNOUNCEMENT:
    case N.d4z.GUILD_TEXT:
    case N.d4z.GUILD_VOICE:
    case N.d4z.GUILD_STAGE_VOICE:
    case N.d4z.GROUP_DM:
      return null != t ? (0, l.jsx)(I.Z, {
        channel: e,
        guild: t
      }, e.id) : null;
    default:
      return null
  }
}

function R(e, t) {
  return (0, l.jsxs)(l.Fragment, {
    children: [null !== e && (0, l.jsx)(x.Z.Icon, {
      iconClassName: S.__invalid_icon,
      icon: e,
      "aria-hidden": !0
    }), (0, l.jsx)(o.HiddenVisually, {
      children: t
    })]
  })
}

function j(e) {
  let {
    guild: t,
    channel: n,
    caretPosition: i = "left"
  } = e;
  return (0, r.e7)([p.Z], () => p.Z.getGuildId()) !== N.I_8 || null == t ? null : (0, l.jsxs)("div", {
    className: S.guildBreadcrumbContainer,
    children: ["left" === i && (0, l.jsx)(x.Z.Caret, {
      direction: "left"
    }), (0, l.jsx)(f.Z, {
      guild: t,
      size: f.Z.Sizes.SMALLER,
      className: S.guildBreadcrumbIcon,
      active: !0
    }), (0, l.jsx)(x.Z.Title, {
      onClick: () => {
        (0, h.XU)(t.id, n.id)
      },
      className: a()(S.parentChannelName, S.cursorPointer),
      children: t.name
    }), "right" === i && (0, l.jsx)(x.Z.Caret, {
      direction: "right"
    })]
  })
}