n.d(t, {
  Z: function() {
    return X
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(392711),
  o = n.n(r),
  c = n(91192),
  u = n(924826),
  d = n(873546),
  h = n(442837),
  m = n(481060),
  p = n(239091),
  E = n(144144),
  g = n(607070),
  f = n(100527),
  C = n(906732),
  _ = n(623624),
  I = n(518738),
  x = n(965376),
  T = n(159299),
  N = n(484459),
  Z = n(103575),
  S = n(199902),
  v = n(271383),
  A = n(430824),
  M = n(158776),
  R = n(885110),
  j = n(111583),
  L = n(594174),
  O = n(499033),
  P = n(151827),
  y = n(176278),
  b = n(626135),
  D = n(585483),
  U = n(700785),
  k = n(51144),
  w = n(998502),
  H = n(276264),
  B = n(981631),
  G = n(689938),
  V = n(260505),
  F = n(279691);
let z = w.ZP.getEnableHardwareAcceleration(),
  W = 44 + H.x,
  Y = i.memo(function(e) {
    let {
      channel: t,
      sectionId: s,
      userId: a,
      guildOwnerId: r
    } = e, o = (0, h.e7)([j.Z], () => j.Z.isTyping(t.id, a)), u = (0, h.e7)([v.ZP], () => v.ZP.getMember(t.guild_id, a)), g = (0, h.e7)([A.Z], () => {
      var e;
      return (null == u ? void 0 : u.colorRoleId) != null ? null === (e = A.Z.getRole(t.guild_id, u.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
    }, [t.guild_id, u]), f = (0, h.e7)([L.default], () => L.default.getUser(a)), C = (0, h.e7)([L.default], () => L.default.getCurrentUser()), I = (null == f ? void 0 : f.id) === (null == C ? void 0 : C.id), x = (0, h.e7)([M.Z, R.Z], () => I ? R.Z.getStatus() : M.Z.getStatus(a, t.guild_id)), O = (0, h.e7)([M.Z], () => M.Z.isMobileOnline(a)), P = (0, h.e7)([M.Z, R.Z], () => I ? R.Z.getActivities() : M.Z.getActivities(a, t.guild_id)), y = (0, h.e7)([S.Z], () => S.Z.getAnyStreamForUser(a)), b = (0, c.JA)(a), U = (0, h.e7)([T.Z], () => T.Z.canUserViewChannel(t.id, s, a)), w = (null == f ? void 0 : f.id) != null && f.id === r, V = i.useCallback(e => {
      null != f && (0, p.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("70675")]).then(n.bind(n, 654663));
        return n => (0, l.jsx)(e, {
          ...n,
          user: f,
          guildId: t.guild_id,
          channel: t
        })
      })
    }, [f, t]), F = i.useCallback(() => {
      if (null == f) return;
      let e = "@".concat(k.ZP.getUserTag(f, {
          decoration: "never"
        })),
        n = "<@".concat(f.id, ">");
      D.S.dispatchToLastSubscribed(B.CkL.INSERT_TEXT, {
        plainText: e,
        rawText: n
      }), E.Z.startTyping(t.id)
    }, [f, t]), W = i.useCallback(e => {
      e.stopPropagation(), (0, _.f)({
        guildId: t.guild_id,
        location: {
          section: B.jXE.THREAD_MEMBER_LIST,
          object: B.qAy.BOOST_GEM_ICON
        }
      })
    }, [t.guild_id]);
    if (null == f) return null;
    let Y = null == u ? void 0 : u.premiumSince;
    return (0, l.jsx)(m.Popout, {
      preload: () => (0, N.W)(f, {
        guildId: t.guild_id,
        channelId: t.id
      }),
      renderPopout: e => (0, l.jsx)(Z.Z, {
        ...e,
        location: "ThreadMembers",
        userId: f.id,
        guildId: t.guild_id,
        channelId: t.id,
        analyticsParams: {
          location: {
            page: B.ZY5.GUILD_CHANNEL,
            section: B.jXE.THREAD_MEMBER_LIST
          }
        }
      }),
      position: d.tq ? "window_center" : "left",
      spacing: 16,
      onShiftClick: F,
      children: (e, n) => {
        let {
          isShown: i
        } = n;
        return (0, l.jsx)(H.Z, {
          onContextMenu: V,
          shouldAnimateStatus: z,
          user: f,
          currentUser: C,
          nick: null == u ? void 0 : u.nick,
          status: x,
          activities: P,
          colorString: null == u ? void 0 : u.colorString,
          colorRoleName: g,
          isTyping: o,
          channel: t,
          guildId: t.guild_id,
          isMobile: O,
          selected: i,
          applicationStream: y,
          premiumSince: null == Y ? null : new Date(Y),
          onClickPremiumGuildIcon: W,
          itemProps: b,
          lostPermissionTooltipText: U ? void 0 : G.Z.Messages.THREAD_MEMBER_WITHOUT_ACCESS,
          isOwner: w,
          ...e
        })
      }
    })
  }),
  K = i.memo(function(e) {
    let {
      id: t,
      label: n,
      count: i,
      guildId: s
    } = e, a = (0, I.p9)({
      roleId: t,
      guildId: s,
      size: 16
    });
    return t === B.Skl.UNKNOWN ? (0, l.jsx)("div", {
      className: F.membersGroup,
      children: (0, l.jsx)("div", {
        className: F.memberGroupsPlaceholder
      })
    }) : (0, l.jsxs)(P.Z, {
      className: F.membersGroup,
      "aria-label": G.Z.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
        title: n,
        count: i
      }),
      children: [null != a ? (0, l.jsx)(y.Z, {
        className: F.roleIcon,
        ...a
      }) : null, (0, l.jsxs)("span", {
        "aria-hidden": !0,
        children: [n, " — ", i]
      })]
    })
  }),
  q = i.memo(function(e) {
    let {
      channel: t
    } = e;
    return t.type === B.d4z.PRIVATE_THREAD ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: V.divider
      }), (0, l.jsxs)(m.Text, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: V.private,
        children: [(0, l.jsx)(m.LockIcon, {
          size: "xxs",
          color: "currentColor"
        }), "\xa0", G.Z.Messages.THREAD_BROWSER_PRIVATE]
      }), (0, l.jsx)(m.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: V.instructions,
        children: G.Z.Messages.MEMBER_LIST_PRIVATE_THREAD_INSTRUCTIONS
      })]
    }) : null
  });

function X(e) {
  let {
    channel: t,
    guild: n
  } = e, s = "members-".concat(t.id), {
    analyticsLocations: r
  } = (0, C.ZP)(f.Z.MEMBER_LIST), d = (0, x.D)(t.id, n), p = d.filter(e => e.userIds.length > 0).reverse()[0], {
    navigator: E,
    listRef: _
  } = function(e, t) {
    let n = (0, h.e7)([g.Z], () => g.Z.keyboardModeEnabled),
      l = i.useRef(null),
      s = i.useCallback((e, n) => {
        let i = l.current;
        if (null == i) return;
        let s = parseInt(n, 10),
          [a, r] = i.getSectionRowFromIndex(s),
          o = 0 === a && 0 === r ? t : 0;
        i.scrollToIndex({
          section: a,
          row: r,
          padding: o,
          callback: () => {
            requestAnimationFrame(() => {
              var t;
              return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({
                preventScroll: !0
              })
            })
          }
        })
      }, [t]),
      a = i.useCallback(() => new Promise(e => {
        let t = l.current;
        if (null == t) return e();
        t.scrollToTop({
          callback: () => requestAnimationFrame(() => e())
        })
      }), []),
      r = i.useCallback(() => new Promise(e => {
        let t = l.current;
        if (null == t) return e();
        t.scrollToBottom({
          callback() {
            requestAnimationFrame(() => setTimeout(e, 100))
          }
        })
      }), []);
    return {
      navigator: (0, u.ZP)({
        id: e,
        setFocus: s,
        isEnabled: n,
        scrollToStart: a,
        scrollToEnd: r
      }),
      listRef: l
    }
  }(s, W), I = 0 === d.length || d.every(e => 0 === e.userIds.length);
  if (i.useEffect(() => {
      b.default.track(B.rMx.MEMBER_LIST_VIEWED, {
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id
      })
    }, [t.guild_id, t.id, t.type]), I) return (0, l.jsx)(Q, {
    channel: t
  });
  let T = o().omit(E.containerProps, ["ref"]),
    N = U.iJ(n);
  return (0, l.jsx)(C.Gt, {
    value: r,
    children: (0, l.jsx)(c.bG, {
      navigator: E,
      children: (0, l.jsx)(m.FocusJumpSection, {
        children: e => (0, l.jsx)("div", {
          className: a()(F.membersWrap, F.hiddenMembers),
          children: (0, l.jsx)(m.List, {
            ref: _,
            className: F.members,
            paddingTop: 0,
            sectionHeight: 40,
            renderSection: e => {
              let {
                section: t
              } = e, i = d[t];
              return (0, l.jsx)(K, {
                id: i.id,
                label: i.label,
                count: i.userIds.length,
                guildId: n.id
              }, i.id)
            },
            rowHeight: W,
            renderRow: e => {
              let {
                section: n,
                row: i
              } = e, {
                userIds: s,
                id: a
              } = d[n];
              return (0, l.jsx)(Y, {
                channel: t,
                sectionId: a,
                userId: s[i],
                guildOwnerId: N
              }, s[i])
            },
            footerHeight: e => d[e] === p && t.type === B.d4z.PRIVATE_THREAD ? 80 : 0,
            renderFooter: e => d[e.section] === p ? (0, l.jsx)(q, {
              channel: t
            }, "footer") : null,
            innerAriaLabel: G.Z.Messages.MEMBERS,
            innerTag: "ul",
            sections: d.map(e => e.userIds.length),
            fade: !0,
            ...T,
            ...e
          }, s)
        })
      })
    })
  })
}

function Q(e) {
  let {
    channel: t
  } = e;
  return (0, l.jsxs)("div", {
    className: a()(F.membersWrap, F.hiddenMembers, F.members, V.emptyState),
    children: [(0, l.jsx)(m.Text, {
      className: V.emptyStateHeader,
      variant: "text-xs/bold",
      color: "interactive-normal",
      children: G.Z.Messages.MEMBERS
    }), (0, l.jsxs)("div", {
      className: V.emptyStateIconContainer,
      children: [(0, l.jsx)("div", {
        className: V.emptyStateIcon,
        children: (0, l.jsx)(m.GroupIcon, {
          size: "lg",
          color: "currentColor"
        })
      }), (0, l.jsx)(O.Z, {
        className: V.emptyStateStars
      })]
    }), (0, l.jsx)(m.Heading, {
      variant: "heading-md/semibold",
      children: t.isForumPost() ? G.Z.Messages.FORUM_POST_MEMBER_LIST_EMPTY_STATE_HEADER : G.Z.Messages.THREAD_MEMBER_LIST_EMPTY_STATE_HEADER
    }), (0, l.jsx)(m.Text, {
      className: V.emptyStateSubtext,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: G.Z.Messages.THREAD_MEMBER_LIST_EMPTY_STATE_SUBTEXT
    })]
  })
}