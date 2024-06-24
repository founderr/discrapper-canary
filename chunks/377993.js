n.d(t, {
  Z: function() {
    return w
  }
}), n(47120), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(873546),
  a = n(442837),
  r = n(481060),
  o = n(239091),
  c = n(144144),
  u = n(100527),
  d = n(906732),
  h = n(556084),
  m = n(280234),
  p = n(484459),
  E = n(103575),
  g = n(158776),
  f = n(699516),
  C = n(111583),
  _ = n(594174),
  I = n(467679),
  x = n(360048),
  T = n(151827),
  N = n(626135),
  Z = n(768581),
  S = n(585483),
  v = n(233870),
  A = n(51144),
  M = n(998502),
  R = n(276264),
  j = n(981631),
  L = n(689938),
  O = n(328e3),
  P = n(279691);
let y = [],
  b = M.ZP.getEnableHardwareAcceleration();

function D(e) {
  let {
    user: t,
    channel: i,
    status: u,
    activities: d,
    lastOnlineTimestamp: h
  } = e, m = (0, a.e7)([C.Z], () => null != C.Z.getTypingUsers(i.id)[t.id]), I = (0, a.e7)([_.default], () => _.default.getCurrentUser()), x = (0, a.e7)([g.Z], () => g.Z.isMobileOnline(t.id)), T = (0, a.e7)([f.Z], () => f.Z.getNickname(t.id)), N = e => {
    (0, o.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("60677")]).then(n.bind(n, 354589));
      return n => (0, l.jsx)(e, {
        ...n,
        user: t,
        channel: i
      })
    })
  };
  return (0, l.jsx)(r.Popout, {
    preload: () => (0, p.W)(t, {
      channelId: i.id
    }),
    renderPopout: e => (0, l.jsx)(E.Z, {
      ...e,
      location: "PrivateChannelRecipients",
      userId: t.id,
      channelId: i.id
    }),
    position: s.tq ? "window_center" : "left",
    spacing: 16,
    onShiftClick: () => {
      let e = "@".concat(A.ZP.getUserTag(t, {
          decoration: "never"
        })),
        n = "<@".concat(t.id, ">");
      S.S.dispatchToLastSubscribed(j.CkL.INSERT_TEXT, {
        plainText: e,
        rawText: n
      }), c.Z.startTyping(i.id)
    },
    children: e => (0, l.jsx)(R.Z, {
      user: t,
      currentUser: I,
      isOwner: t.id === i.ownerId,
      ownerTooltipText: L.Z.Messages.GROUP_OWNER,
      shouldAnimateStatus: b,
      isTyping: m,
      status: u,
      activities: d,
      lastOnlineTimestamp: h,
      channel: i,
      onContextMenu: N,
      isMobile: x,
      nick: T,
      ...e
    }, t.id)
  })
}

function U(e) {
  var t;
  let {
    integration: a,
    channel: c
  } = e, u = i.useCallback(e => {
    (0, o.jW)(e, async () => {
      let {
        default: e
      } = await n.e("37969").then(n.bind(n, 496281));
      return t => (0, l.jsx)(e, {
        ...t,
        channel: c,
        integration: a
      })
    })
  }, [a, c]), d = a.application.bot, h = Z.ZP.getApplicationIconURL({
    id: a.application.id,
    icon: a.application.icon,
    bot: null === (t = a.application) || void 0 === t ? void 0 : t.bot,
    botIconFirst: !0
  });
  return null != d ? (0, l.jsx)(r.Popout, {
    preload: () => (0, p.W)(d.id, h, {
      channelId: c.id
    }),
    renderPopout: e => (0, l.jsx)(E.Z, {
      ...e,
      location: "PrivateChannelRecipients",
      userId: d.id,
      channelId: c.id
    }),
    position: s.tq ? "window_center" : "left",
    spacing: 16,
    children: e => (0, l.jsx)(x.Z, {
      onContextMenu: u,
      className: O.member,
      name: (0, l.jsx)("span", {
        className: O.username,
        children: a.application.name
      }),
      avatar: (0, l.jsx)(r.Avatar, {
        size: r.AvatarSizes.SIZE_32,
        src: h,
        "aria-label": a.application.name,
        statusTooltip: !0
      }),
      decorators: (0, l.jsx)(I.Z, {
        className: O.botTag,
        verified: null == d ? void 0 : d.isVerifiedBot()
      }),
      id: a.application.id,
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
    let l = e.listItems[n],
      i = t.listItems[n];
    if (l.user !== i.user || l.status !== i.status || l.activities !== i.activities || l.lastOnlineTimestamp !== i.lastOnlineTimestamp) return !1
  }
  return !0
}

function w(e) {
  let {
    channel: t
  } = e, s = _.default.getCurrentUser(), o = null == s ? void 0 : s.isStaff(), {
    analyticsLocations: c
  } = (0, d.ZP)(u.Z.MEMBER_LIST), {
    shouldTrackRecentlyOnlineExposure: E,
    listItems: C
  } = function(e) {
    let {
      isRecentlyOnlineEnabled: t
    } = m.Z.useExperiment({
      location: "n/a"
    }, {
      autoTrackExposure: !1
    });
    return (0, a.e7)([f.Z, _.default, g.Z], () => {
      let n = !1,
        l = (0, v.T)(e.recipients, _.default),
        i = {};
      for (let e of l) {
        var s, a, r;
        if (f.Z.isFriend(e.id) || e.id === (null === (s = _.default.getCurrentUser()) || void 0 === s ? void 0 : s.id)) {
          let t = g.Z.getLastOnlineTimestamp(e.id),
            {
              isRecentlyOnlineShowable: l,
              isRecentlyOnlineTrackable: s
            } = (0, m.$)(t);
          i[e.id] = {
            status: null !== (a = g.Z.getStatus(e.id)) && void 0 !== a ? a : j.Skl.OFFLINE,
            activities: null !== (r = g.Z.getActivities(e.id)) && void 0 !== r ? r : y,
            lastOnlineTimestamp: l ? t : void 0
          }, s && (n = !0)
        } else i[e.id] = {
          status: j.Skl.OFFLINE,
          activities: y
        }
      }
      let o = [];
      for (let e of l) {
        let t = {
          user: e,
          status: i[e.id].status,
          activities: i[e.id].activities,
          lastOnlineTimestamp: i[e.id].lastOnlineTimestamp
        };
        o.push(t)
      }
      if (!t) return {
        shouldTrackRecentlyOnlineExposure: n,
        listItems: o
      };
      let c = [j.Skl.OFFLINE, j.Skl.INVISIBLE, null, void 0],
        u = [],
        d = [],
        h = [];
      return o.forEach(e => {
        c.includes(e.status) ? null != e.lastOnlineTimestamp ? d.push(e) : h.push(e) : u.push(e)
      }), {
        shouldTrackRecentlyOnlineExposure: n,
        listItems: [...u, ...d, ...h]
      }
    }, [e, t], k)
  }(t);
  E && m.Z.trackExposure({
    location: "private_channel_recipients"
  });
  let {
    installedIntegrations: Z,
    applicationsShelf: S,
    fetched: A,
    appsInGDMEnabled: M,
    availableApplications: R
  } = (0, h.j)({
    channelId: t.id
  });
  i.useEffect(() => {
    if (o)
      for (let e of C)(0, p.W)(e.user, {
        dispatchWait: !0,
        channelId: t.id
      })
  }, [o, C, t.id]), i.useEffect(() => {
    N.default.track(j.rMx.MEMBER_LIST_VIEWED, {
      channel_id: t.id,
      channel_type: t.type,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id, t.type]);
  let b = o && C.every(e => e.user.isStaff());
  return (0, l.jsx)(d.Gt, {
    value: c,
    children: (0, l.jsx)("div", {
      className: P.membersWrap,
      children: (0, l.jsxs)(r.Scroller, {
        className: P.members,
        fade: !0,
        children: [(0, l.jsxs)(T.Z, {
          className: P.membersGroup,
          children: ["".concat(L.Z.Messages.MEMBERS, "—").concat(C.length, " "), b ? (0, l.jsx)(I.Z, {
            className: P.__invalid_decorator,
            type: I.Z.Types.STAFF_ONLY_DM
          }) : null]
        }), C.map(e => (0, l.jsx)(D, {
          user: e.user,
          status: e.status,
          activities: e.activities,
          lastOnlineTimestamp: e.lastOnlineTimestamp,
          channel: t
        }, e.user.id)), M && (Z.length > 0 || A && S.length > 0) && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(T.Z, {
            className: P.membersGroup,
            children: "".concat(L.Z.Messages.APPS, "—").concat(Z.length)
          }), Z.map(e => (0, l.jsx)(U, {
            integration: e,
            channel: t
          }, e.application.id)), R.length > 0 && (0, l.jsx)(x.Z, {
            className: O.member,
            onClick: () => {
              (0, r.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.resolve().then(n.bind(n, 422677));
                return n => (0, l.jsx)(e, {
                  ...n,
                  channelId: t.id
                })
              })
            },
            avatar: (0, l.jsx)("div", {
              className: P.appIconWrapper,
              children: (0, l.jsx)(r.PlusSmallIcon, {
                size: "sm",
                color: "currentColor"
              })
            }),
            name: L.Z.Messages.PRIVATE_CHANNEL_ADD_APPS
          })]
        })]
      })
    })
  })
}