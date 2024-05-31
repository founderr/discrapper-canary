"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("873546"),
  i = n("442837"),
  r = n("481060"),
  o = n("239091"),
  u = n("144144"),
  d = n("100527"),
  c = n("906732"),
  f = n("556084"),
  h = n("280234"),
  m = n("484459"),
  p = n("103575"),
  E = n("158776"),
  C = n("699516"),
  g = n("111583"),
  S = n("594174"),
  _ = n("467679"),
  T = n("729285"),
  I = n("360048"),
  A = n("151827"),
  v = n("626135"),
  N = n("768581"),
  x = n("585483"),
  M = n("233870"),
  R = n("51144"),
  y = n("998502"),
  L = n("276264"),
  O = n("981631"),
  j = n("689938"),
  P = n("895294"),
  D = n("67431");
let b = y.default.getEnableHardwareAcceleration();

function U(e) {
  let {
    user: t,
    channel: l,
    status: d,
    activities: c,
    lastOnlineTimestamp: f
  } = e, h = (0, i.useStateFromStores)([g.default], () => null != g.default.getTypingUsers(l.id)[t.id]), _ = (0, i.useStateFromStores)([S.default], () => S.default.getCurrentUser()), T = (0, i.useStateFromStores)([E.default], () => E.default.isMobileOnline(t.id)), I = (0, i.useStateFromStores)([C.default], () => C.default.getNickname(t.id)), A = e => {
    (0, o.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("36441"), n.e("60677")]).then(n.bind(n, "354589"));
      return n => (0, a.jsx)(e, {
        ...n,
        user: t,
        channel: l
      })
    })
  };
  return (0, a.jsx)(r.Popout, {
    preload: () => (0, m.maybeFetchUserProfileForPopout)(t, {
      channelId: l.id
    }),
    renderPopout: e => (0, a.jsx)(p.default, {
      ...e,
      location: "PrivateChannelRecipients",
      userId: t.id,
      channelId: l.id
    }),
    position: s.isMobile ? "window_center" : "left",
    spacing: 16,
    onShiftClick: () => {
      let e = "@".concat(R.default.getUserTag(t, {
          decoration: "never"
        })),
        n = "<@".concat(t.id, ">");
      x.ComponentDispatch.dispatchToLastSubscribed(O.ComponentActions.INSERT_TEXT, {
        plainText: e,
        rawText: n
      }), u.default.startTyping(l.id)
    },
    children: e => (0, a.jsx)(L.default, {
      user: t,
      currentUser: _,
      isOwner: t.id === l.ownerId,
      ownerTooltipText: j.default.Messages.GROUP_OWNER,
      shouldAnimateStatus: b,
      isTyping: h,
      status: d,
      activities: c,
      lastOnlineTimestamp: f,
      channel: l,
      onContextMenu: A,
      isMobile: T,
      nick: I,
      ...e
    }, t.id)
  })
}

function F(e) {
  var t;
  let {
    integration: i,
    channel: u
  } = e, d = l.useCallback(e => {
    (0, o.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("37969").then(n.bind(n, "496281"));
      return t => (0, a.jsx)(e, {
        ...t,
        channel: u,
        integration: i
      })
    })
  }, [i, u]), c = i.application.bot, f = N.default.getApplicationIconURL({
    id: i.application.id,
    icon: i.application.icon,
    bot: null === (t = i.application) || void 0 === t ? void 0 : t.bot,
    botIconFirst: !0
  });
  return null != c ? (0, a.jsx)(r.Popout, {
    preload: () => (0, m.maybeFetchUserProfileForPopout)(c.id, f, {
      channelId: u.id
    }),
    renderPopout: e => (0, a.jsx)(p.default, {
      ...e,
      location: "PrivateChannelRecipients",
      userId: c.id,
      channelId: u.id
    }),
    position: s.isMobile ? "window_center" : "left",
    spacing: 16,
    children: e => (0, a.jsx)(I.default, {
      onContextMenu: d,
      className: P.member,
      name: (0, a.jsx)("span", {
        className: P.username,
        children: i.application.name
      }),
      avatar: (0, a.jsx)(r.Avatar, {
        size: r.AvatarSizes.SIZE_32,
        src: f,
        "aria-label": i.application.name,
        statusTooltip: !0
      }),
      decorators: (0, a.jsx)(_.default, {
        className: P.botTag,
        verified: null == c ? void 0 : c.isVerifiedBot()
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

function w(e) {
  let {
    channel: t
  } = e, s = S.default.getCurrentUser(), o = null == s ? void 0 : s.isStaff(), {
    analyticsLocations: u
  } = (0, c.default)(d.default.MEMBER_LIST), p = function(e) {
    let {
      isRecentlyOnlineEnabled: t
    } = h.default.useExperiment({
      location: "n/a"
    }, {
      autoTrackExposure: !1
    }), n = (0, i.useStateFromStoresArray)([S.default], () => (0, M.getRecipients)(e.recipients, S.default), [e.recipients]), a = (0, i.useStateFromStoresObject)([C.default, S.default, E.default], () => {
      let e = {};
      for (let s of n) {
        var t, a, l;
        if (C.default.isFriend(s.id) || s.id === (null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) {
          let t = E.default.getLastOnlineTimestamp(s.id),
            n = null != t && (0, h.isRecentlyOnline)(t);
          e[s.id] = {
            status: null !== (a = E.default.getStatus(s.id)) && void 0 !== a ? a : O.StatusTypes.OFFLINE,
            activities: null !== (l = E.default.getActivities(s.id)) && void 0 !== l ? l : [],
            lastOnlineTimestamp: n ? t : void 0
          }
        } else e[s.id] = {
          status: O.StatusTypes.OFFLINE,
          activities: []
        }
      }
      return e
    });
    return l.useMemo(() => {
      let e = [];
      for (let t of n) {
        let n = {
          user: t,
          status: a[t.id].status,
          activities: a[t.id].activities,
          lastOnlineTimestamp: a[t.id].lastOnlineTimestamp
        };
        e.push(n)
      }
      if (!t) return e;
      let l = [O.StatusTypes.OFFLINE, O.StatusTypes.INVISIBLE, null, void 0],
        s = [],
        i = [],
        r = [];
      return e.forEach(e => {
        l.includes(e.status) ? null != e.lastOnlineTimestamp ? i.push(e) : r.push(e) : s.push(e)
      }), [...s, ...i, ...r]
    }, [t, n, a])
  }(t), {
    installedIntegrations: g,
    applicationsShelf: N,
    fetched: x,
    appsInGDMEnabled: R,
    availableApplications: y
  } = (0, f.usePrivateChannelIntegrationState)({
    channelId: t.id
  });
  l.useEffect(() => {
    if (o)
      for (let e of p)(0, m.maybeFetchUserProfileForPopout)(e.user, {
        dispatchWait: !0,
        channelId: t.id
      })
  }, [o, p, t.id]), l.useEffect(() => {
    v.default.track(O.AnalyticEvents.MEMBER_LIST_VIEWED, {
      channel_id: t.id,
      channel_type: t.type,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id, t.type]);
  let L = o && p.every(e => e.user.isStaff());
  return (0, a.jsx)(c.AnalyticsLocationProvider, {
    value: u,
    children: (0, a.jsx)("div", {
      className: D.membersWrap,
      children: (0, a.jsxs)(r.Scroller, {
        className: D.members,
        fade: !0,
        children: [(0, a.jsxs)(A.default, {
          className: D.membersGroup,
          children: ["".concat(j.default.Messages.MEMBERS, "—").concat(p.length, " "), L ? (0, a.jsx)(_.default, {
            className: D.__invalid_decorator,
            type: _.default.Types.STAFF_ONLY_DM
          }) : null]
        }), p.map(e => (0, a.jsx)(U, {
          user: e.user,
          status: e.status,
          activities: e.activities,
          lastOnlineTimestamp: e.lastOnlineTimestamp,
          channel: t
        }, e.user.id)), R && (g.length > 0 || x && N.length > 0) && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(A.default, {
            className: D.membersGroup,
            children: "".concat(j.default.Messages.APPS, "—").concat(g.length)
          }), g.map(e => (0, a.jsx)(F, {
            integration: e,
            channel: t
          }, e.application.id)), y.length > 0 && (0, a.jsx)(I.default, {
            className: P.member,
            onClick: () => {
              (0, r.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.resolve().then(n.bind(n, "422677"));
                return n => (0, a.jsx)(e, {
                  ...n,
                  channelId: t.id
                })
              })
            },
            avatar: (0, a.jsx)("div", {
              className: D.appIconWrapper,
              children: (0, a.jsx)(T.default, {
                width: 18,
                height: 18
              })
            }),
            name: j.default.Messages.PRIVATE_CHANNEL_ADD_APPS
          })]
        })]
      })
    })
  })
}