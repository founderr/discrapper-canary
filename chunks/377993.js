"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
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
  g = n("699516"),
  C = n("111583"),
  S = n("594174"),
  _ = n("467679"),
  T = n("729285"),
  I = n("360048"),
  A = n("151827"),
  v = n("626135"),
  x = n("768581"),
  N = n("585483"),
  M = n("233870"),
  y = n("51144"),
  R = n("998502"),
  L = n("276264"),
  O = n("981631"),
  j = n("689938"),
  P = n("895294"),
  D = n("67431");
let b = [],
  U = R.default.getEnableHardwareAcceleration();

function F(e) {
  let {
    user: t,
    channel: l,
    status: d,
    activities: c,
    lastOnlineTimestamp: f
  } = e, h = (0, i.useStateFromStores)([C.default], () => null != C.default.getTypingUsers(l.id)[t.id]), _ = (0, i.useStateFromStores)([S.default], () => S.default.getCurrentUser()), T = (0, i.useStateFromStores)([E.default], () => E.default.isMobileOnline(t.id)), I = (0, i.useStateFromStores)([g.default], () => g.default.getNickname(t.id)), A = e => {
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
      let e = "@".concat(y.default.getUserTag(t, {
          decoration: "never"
        })),
        n = "<@".concat(t.id, ">");
      N.ComponentDispatch.dispatchToLastSubscribed(O.ComponentActions.INSERT_TEXT, {
        plainText: e,
        rawText: n
      }), u.default.startTyping(l.id)
    },
    children: e => (0, a.jsx)(L.default, {
      user: t,
      currentUser: _,
      isOwner: t.id === l.ownerId,
      ownerTooltipText: j.default.Messages.GROUP_OWNER,
      shouldAnimateStatus: U,
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

function w(e) {
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
  }, [i, u]), c = i.application.bot, f = x.default.getApplicationIconURL({
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

function k(e, t) {
  if (e.shouldTrackRecentlyOnlineExposure !== t.shouldTrackRecentlyOnlineExposure || e.listItems.length !== t.listItems.length) return !1;
  for (let n = 0; n < e.listItems.length; n++) {
    let a = e.listItems[n],
      l = t.listItems[n];
    if (a.user !== l.user || a.status !== l.status || a.activities !== l.activities || a.lastOnlineTimestamp !== l.lastOnlineTimestamp) return !1
  }
  return !0
}

function H(e) {
  let {
    channel: t
  } = e, s = S.default.getCurrentUser(), o = null == s ? void 0 : s.isStaff(), {
    analyticsLocations: u
  } = (0, c.default)(d.default.MEMBER_LIST), {
    shouldTrackRecentlyOnlineExposure: p,
    listItems: C
  } = function(e) {
    let {
      isRecentlyOnlineEnabled: t
    } = h.default.useExperiment({
      location: "n/a"
    }, {
      autoTrackExposure: !1
    });
    return (0, i.useStateFromStores)([g.default, S.default, E.default], () => {
      let n = !1,
        a = (0, M.getRecipients)(e.recipients, S.default),
        l = {};
      for (let e of a) {
        var s, i, r;
        if (g.default.isFriend(e.id) || e.id === (null === (s = S.default.getCurrentUser()) || void 0 === s ? void 0 : s.id)) {
          let t = E.default.getLastOnlineTimestamp(e.id),
            {
              isRecentlyOnlineShowable: a,
              isRecentlyOnlineTrackable: s
            } = (0, h.getRecentlyOnlineStrategy)(t);
          l[e.id] = {
            status: null !== (i = E.default.getStatus(e.id)) && void 0 !== i ? i : O.StatusTypes.OFFLINE,
            activities: null !== (r = E.default.getActivities(e.id)) && void 0 !== r ? r : b,
            lastOnlineTimestamp: a ? t : void 0
          }, s && (n = !0)
        } else l[e.id] = {
          status: O.StatusTypes.OFFLINE,
          activities: b
        }
      }
      let o = [];
      for (let e of a) {
        let t = {
          user: e,
          status: l[e.id].status,
          activities: l[e.id].activities,
          lastOnlineTimestamp: l[e.id].lastOnlineTimestamp
        };
        o.push(t)
      }
      if (!t) return {
        shouldTrackRecentlyOnlineExposure: n,
        listItems: o
      };
      let u = [O.StatusTypes.OFFLINE, O.StatusTypes.INVISIBLE, null, void 0],
        d = [],
        c = [],
        f = [];
      return o.forEach(e => {
        u.includes(e.status) ? null != e.lastOnlineTimestamp ? c.push(e) : f.push(e) : d.push(e)
      }), {
        shouldTrackRecentlyOnlineExposure: n,
        listItems: [...d, ...c, ...f]
      }
    }, [e, t], k)
  }(t);
  p && h.default.trackExposure({
    location: "private_channel_recipients"
  });
  let {
    installedIntegrations: x,
    applicationsShelf: N,
    fetched: y,
    appsInGDMEnabled: R,
    availableApplications: L
  } = (0, f.usePrivateChannelIntegrationState)({
    channelId: t.id
  });
  l.useEffect(() => {
    if (o)
      for (let e of C)(0, m.maybeFetchUserProfileForPopout)(e.user, {
        dispatchWait: !0,
        channelId: t.id
      })
  }, [o, C, t.id]), l.useEffect(() => {
    v.default.track(O.AnalyticEvents.MEMBER_LIST_VIEWED, {
      channel_id: t.id,
      channel_type: t.type,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id, t.type]);
  let U = o && C.every(e => e.user.isStaff());
  return (0, a.jsx)(c.AnalyticsLocationProvider, {
    value: u,
    children: (0, a.jsx)("div", {
      className: D.membersWrap,
      children: (0, a.jsxs)(r.Scroller, {
        className: D.members,
        fade: !0,
        children: [(0, a.jsxs)(A.default, {
          className: D.membersGroup,
          children: ["".concat(j.default.Messages.MEMBERS, "—").concat(C.length, " "), U ? (0, a.jsx)(_.default, {
            className: D.__invalid_decorator,
            type: _.default.Types.STAFF_ONLY_DM
          }) : null]
        }), C.map(e => (0, a.jsx)(F, {
          user: e.user,
          status: e.status,
          activities: e.activities,
          lastOnlineTimestamp: e.lastOnlineTimestamp,
          channel: t
        }, e.user.id)), R && (x.length > 0 || y && N.length > 0) && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(A.default, {
            className: D.membersGroup,
            children: "".concat(j.default.Messages.APPS, "—").concat(x.length)
          }), x.map(e => (0, a.jsx)(w, {
            integration: e,
            channel: t
          }, e.application.id)), L.length > 0 && (0, a.jsx)(I.default, {
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