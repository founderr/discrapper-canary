"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("394846"),
  i = n("446674"),
  r = n("77078"),
  u = n("272030"),
  o = n("352674"),
  d = n("252063"),
  c = n("506885"),
  f = n("981601"),
  h = n("824563"),
  m = n("27618"),
  p = n("191542"),
  E = n("697218"),
  S = n("79798"),
  g = n("151185"),
  C = n("11056"),
  _ = n("826684"),
  I = n("599110"),
  T = n("315102"),
  v = n("659500"),
  x = n("519812"),
  N = n("158998"),
  A = n("50885"),
  M = n("888503"),
  R = n("49111"),
  j = n("782340"),
  L = n("591665"),
  y = n("559571");
let O = A.default.getEnableHardwareAcceleration();

function P(e) {
  let {
    user: t,
    channel: a
  } = e, {
    status: d,
    activities: S
  } = (0, i.useStateFromStoresObject)([m.default, E.default, h.default], () => m.default.isFriend(t.id) || t === E.default.getCurrentUser() ? {
    status: h.default.getStatus(t.id),
    activities: h.default.getActivities(t.id)
  } : {}), g = (0, i.useStateFromStores)([p.default], () => null != p.default.getTypingUsers(a.id)[t.id]), C = (0, i.useStateFromStores)([E.default], () => E.default.getCurrentUser()), _ = (0, i.useStateFromStores)([h.default], () => h.default.isMobileOnline(t.id)), I = (0, i.useStateFromStores)([m.default], () => m.default.getNickname(t.id)), T = e => {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("166452").then(n.bind(n, "166452"));
      return n => (0, l.jsx)(e, {
        ...n,
        user: t,
        channel: a
      })
    })
  };
  return (0, l.jsx)(r.Popout, {
    preload: () => (0, c.default)(t.id, t.getAvatarURL(void 0, 80)),
    renderPopout: e => (0, l.jsx)(f.default, {
      ...e,
      userId: t.id,
      channelId: a.id
    }),
    position: s.isMobile ? "window_center" : "left",
    spacing: 16,
    onShiftClick: () => {
      let e = "@".concat(N.default.getUserTag(t, {
          decoration: "never"
        })),
        n = "<@".concat(t.id, ">");
      v.ComponentDispatch.dispatchToLastSubscribed(R.ComponentActions.INSERT_TEXT, {
        plainText: e,
        rawText: n
      }), o.default.startTyping(a.id)
    },
    children: e => (0, l.jsx)(M.default, {
      user: t,
      currentUser: C,
      isOwner: t.id === a.ownerId,
      ownerTooltipText: j.default.Messages.GROUP_OWNER,
      shouldAnimateStatus: O,
      isTyping: g,
      status: d,
      activities: S,
      channel: a,
      onContextMenu: T,
      isMobile: _,
      nick: I,
      ...e
    }, t.id)
  })
}

function b(e) {
  var t;
  let {
    integration: i,
    channel: o
  } = e, d = a.useCallback(e => {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("348866").then(n.bind(n, "348866"));
      return t => (0, l.jsx)(e, {
        ...t,
        channel: o,
        integration: i
      })
    })
  }, [i, o]), h = i.application.bot, m = T.default.getApplicationIconURL({
    id: i.application.id,
    icon: i.application.icon,
    bot: null === (t = i.application) || void 0 === t ? void 0 : t.bot,
    botIconFirst: !0
  });
  return null != h ? (0, l.jsx)(r.Popout, {
    preload: () => (0, c.default)(h.id, m),
    renderPopout: e => (0, l.jsx)(f.default, {
      ...e,
      userId: h.id,
      channelId: o.id
    }),
    position: s.isMobile ? "window_center" : "left",
    spacing: 16,
    children: e => (0, l.jsx)(C.default, {
      onContextMenu: d,
      className: L.member,
      name: (0, l.jsx)("span", {
        className: L.username,
        children: i.application.name
      }),
      avatar: (0, l.jsx)(r.Avatar, {
        size: r.AvatarSizes.SIZE_32,
        src: m,
        "aria-label": i.application.name,
        statusTooltip: !0
      }),
      decorators: (0, l.jsx)(S.default, {
        className: L.botTag,
        verified: null == h ? void 0 : h.isVerifiedBot()
      }),
      id: i.application.id,
      focusProps: {
        offset: {
          top: 4,
          bottom: 4,
          left: 4,
          right: 4
        }
      },
      ...e
    })
  }) : null
}

function D(e) {
  let {
    channel: t
  } = e, s = E.default.getCurrentUser(), u = null == s ? void 0 : s.isStaff(), o = (0, i.useStateFromStoresArray)([E.default], () => (0, x.getRecipients)(t.recipients, E.default), [t.recipients]), {
    installedIntegrations: f,
    applicationsShelf: h,
    fetched: m,
    appsInGDMEnabled: p,
    availableApplications: T
  } = (0, d.usePrivateChannelIntegrationState)({
    channelId: t.id
  });
  a.useEffect(() => {
    if (u)
      for (let e of o)(0, c.default)(e.id, e.getAvatarURL(void 0, 80), {
        dispatchWait: !0
      })
  }, [u, o]), a.useEffect(() => {
    I.default.track(R.AnalyticEvents.MEMBER_LIST_VIEWED, {
      channel_id: t.id,
      channel_type: t.type,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id, t.type]);
  let v = u && o.every(e => e.isStaff());
  return (0, l.jsx)("div", {
    className: y.membersWrap,
    children: (0, l.jsxs)(r.Scroller, {
      className: y.members,
      fade: !0,
      children: [(0, l.jsxs)(_.default, {
        className: y.membersGroup,
        children: ["".concat(j.default.Messages.MEMBERS, "—").concat(o.length, " "), v ? (0, l.jsx)(S.default, {
          className: y.decorator,
          type: S.default.Types.STAFF_ONLY_DM
        }) : null]
      }), o.map(e => (0, l.jsx)(P, {
        user: e,
        channel: t
      }, e.id)), p && (f.length > 0 || m && h.length > 0) && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(_.default, {
          className: y.membersGroup,
          children: "".concat(j.default.Messages.APPS, "—").concat(f.length)
        }), f.map(e => (0, l.jsx)(b, {
          integration: e,
          channel: t
        }, e.application.id)), T.length > 0 && (0, l.jsx)(C.default, {
          className: L.member,
          onClick: () => {
            (0, r.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("724110").then(n.bind(n, "724110"));
              return n => (0, l.jsx)(e, {
                ...n,
                channelId: t.id
              })
            })
          },
          avatar: (0, l.jsx)("div", {
            className: y.appIconWrapper,
            children: (0, l.jsx)(g.default, {
              width: 18,
              height: 18
            })
          }),
          name: j.default.Messages.PRIVATE_CHANNEL_ADD_APPS
        })]
      })]
    })
  })
}