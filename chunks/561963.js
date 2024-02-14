"use strict";
n.r(t), n.d(t, {
  default: function() {
    return X
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n.n(r),
  u = n("974667"),
  d = n("394846"),
  c = n("446674"),
  f = n("77078"),
  h = n("272030"),
  m = n("352674"),
  p = n("206230"),
  E = n("95039"),
  S = n("405645"),
  g = n("256648"),
  C = n("593752"),
  _ = n("506885"),
  I = n("981601"),
  T = n("373469"),
  v = n("26989"),
  x = n("305961"),
  N = n("824563"),
  A = n("101125"),
  M = n("191542"),
  R = n("697218"),
  j = n("543289"),
  L = n("45029"),
  O = n("155207"),
  y = n("826684"),
  P = n("483093"),
  b = n("599110"),
  D = n("659500"),
  U = n("991170"),
  w = n("158998"),
  F = n("50885"),
  k = n("888503"),
  V = n("49111"),
  B = n("782340"),
  G = n("363092"),
  H = n("559571");
let W = F.default.getEnableHardwareAcceleration(),
  Y = 44 + k.AVATAR_DECORATION_PADDING,
  z = a.memo(function(e) {
    let {
      channel: t,
      sectionId: s,
      userId: i,
      guildOwnerId: r
    } = e, o = (0, c.useStateFromStores)([M.default], () => M.default.isTyping(t.id, i)), p = (0, c.useStateFromStores)([v.default], () => v.default.getMember(t.guild_id, i)), S = (0, c.useStateFromStores)([x.default], () => {
      var e, n;
      return (null == p ? void 0 : p.colorRoleId) != null ? null === (n = x.default.getGuild(t.guild_id)) || void 0 === n ? void 0 : null === (e = n.getRole(p.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
    }, [t.guild_id, p]), g = (0, c.useStateFromStores)([R.default], () => R.default.getUser(i)), j = (0, c.useStateFromStores)([R.default], () => R.default.getCurrentUser()), L = (null == g ? void 0 : g.id) === (null == j ? void 0 : j.id), O = (0, c.useStateFromStores)([N.default, A.default], () => L ? A.default.getStatus() : N.default.getStatus(i, t.guild_id)), y = (0, c.useStateFromStores)([N.default], () => N.default.isMobileOnline(i)), P = (0, c.useStateFromStores)([N.default, A.default], () => L ? A.default.getActivities() : N.default.getActivities(i, t.guild_id)), b = (0, c.useStateFromStores)([T.default], () => T.default.getAnyStreamForUser(i)), U = (0, u.useListItem)(i), F = (0, c.useStateFromStores)([C.default], () => C.default.canUserViewChannel(t.id, s, i)), G = (null == g ? void 0 : g.id) != null && g.id === r, H = a.useCallback(e => {
      null != g && (0, h.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("721429").then(n.bind(n, "721429"));
        return n => (0, l.jsx)(e, {
          ...n,
          user: g,
          guildId: t.guild_id,
          channel: t
        })
      })
    }, [g, t]), Y = a.useCallback(() => {
      if (null == g) return;
      let e = "@".concat(w.default.getUserTag(g, {
          decoration: "never"
        })),
        n = "<@".concat(g.id, ">");
      D.ComponentDispatch.dispatchToLastSubscribed(V.ComponentActions.INSERT_TEXT, {
        plainText: e,
        rawText: n
      }), m.default.startTyping(t.id)
    }, [g, t]), z = a.useCallback(e => {
      e.stopPropagation(), (0, E.openGuildBoostingMarketingModal)({
        guildId: t.guild_id,
        location: {
          section: V.AnalyticsSections.THREAD_MEMBER_LIST,
          object: V.AnalyticsObjects.BOOST_GEM_ICON
        }
      })
    }, [t.guild_id]);
    if (null == g) return null;
    let K = null == p ? void 0 : p.premiumSince;
    return (0, l.jsx)(f.Popout, {
      preload: () => (0, _.default)(g.id, g.getAvatarURL(t.guild_id, 80), {
        guildId: t.guild_id,
        channelId: t.id
      }),
      renderPopout: e => (0, l.jsx)(I.default, {
        ...e,
        userId: g.id,
        guildId: t.guild_id,
        channelId: t.id,
        analyticsParams: {
          location: {
            page: V.AnalyticsPages.GUILD_CHANNEL,
            section: V.AnalyticsSections.THREAD_MEMBER_LIST
          }
        }
      }),
      position: d.isMobile ? "window_center" : "left",
      spacing: 16,
      onShiftClick: Y,
      children: (e, n) => {
        let {
          isShown: a
        } = n;
        return (0, l.jsx)(k.default, {
          onContextMenu: H,
          shouldAnimateStatus: W,
          user: g,
          currentUser: j,
          nick: null == p ? void 0 : p.nick,
          status: O,
          activities: P,
          colorString: null == p ? void 0 : p.colorString,
          colorRoleName: S,
          isTyping: o,
          channel: t,
          guildId: t.guild_id,
          isMobile: y,
          selected: a,
          applicationStream: b,
          premiumSince: null == K ? null : new Date(K),
          onClickPremiumGuildIcon: z,
          itemProps: U,
          lostPermissionTooltipText: F ? void 0 : B.default.Messages.THREAD_MEMBER_WITHOUT_ACCESS,
          isOwner: G,
          ...e
        })
      }
    })
  }),
  K = a.memo(function(e) {
    let {
      id: t,
      label: n,
      count: a,
      guildId: s
    } = e, i = (0, S.useRoleIcon)({
      roleId: t,
      guildId: s,
      size: 16
    });
    return t === V.StatusTypes.UNKNOWN ? (0, l.jsx)("div", {
      className: H.membersGroup,
      children: (0, l.jsx)("div", {
        className: H.memberGroupsPlaceholder
      })
    }) : (0, l.jsxs)(y.default, {
      className: H.membersGroup,
      "aria-label": B.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
        title: n,
        count: a
      }),
      children: [null != i ? (0, l.jsx)(P.default, {
        className: H.roleIcon,
        ...i
      }) : null, (0, l.jsxs)("span", {
        "aria-hidden": !0,
        children: [n, " — ", a]
      })]
    })
  }),
  Z = a.memo(function(e) {
    let {
      channel: t
    } = e;
    return t.type === V.ChannelTypes.PRIVATE_THREAD ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: G.divider
      }), (0, l.jsxs)(f.Text, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: G.private,
        children: [(0, l.jsx)(L.default, {
          width: 12,
          height: 12
        }), "\xa0", B.default.Messages.THREAD_BROWSER_PRIVATE]
      }), (0, l.jsx)(f.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: G.instructions,
        children: B.default.Messages.MEMBER_LIST_PRIVATE_THREAD_INSTRUCTIONS
      })]
    }) : null
  });

function X(e) {
  let {
    channel: t,
    guild: n
  } = e, s = "members-".concat(t.id), r = (0, g.useThreadMemberListSections)(t.id, n), d = r.filter(e => e.userIds.length > 0).reverse()[0], {
    navigator: h,
    listRef: m
  } = function(e, t) {
    let n = (0, c.useStateFromStores)([p.default], () => p.default.keyboardModeEnabled),
      l = a.useRef(null),
      s = a.useCallback((e, n) => {
        let a = l.current;
        if (null == a) return;
        let s = parseInt(n, 10),
          [i, r] = a.getSectionRowFromIndex(s),
          o = 0 === i && 0 === r ? t : 0;
        a.scrollToIndex({
          section: i,
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
      i = a.useCallback(() => new Promise(e => {
        let t = l.current;
        if (null == t) return e();
        t.scrollToTop({
          callback: () => requestAnimationFrame(() => e())
        })
      }), []),
      r = a.useCallback(() => new Promise(e => {
        let t = l.current;
        if (null == t) return e();
        t.scrollToBottom({
          callback() {
            requestAnimationFrame(() => setTimeout(e, 100))
          }
        })
      }), []),
      o = (0, u.default)({
        id: e,
        setFocus: s,
        isEnabled: n,
        scrollToStart: i,
        scrollToEnd: r
      });
    return {
      navigator: o,
      listRef: l
    }
  }(s, Y), E = 0 === r.length || r.every(e => 0 === e.userIds.length);
  if (a.useEffect(() => {
      b.default.track(V.AnalyticEvents.MEMBER_LIST_VIEWED, {
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id
      })
    }, [t.guild_id, t.id, t.type]), E) return (0, l.jsx)(J, {
    channel: t
  });
  let S = o.omit(h.containerProps, ["ref"]),
    C = U.default.getGuildVisualOwnerId(n);
  return (0, l.jsx)(u.ListNavigatorProvider, {
    navigator: h,
    children: (0, l.jsx)(f.FocusJumpSection, {
      children: e => (0, l.jsx)("div", {
        className: i(H.membersWrap, H.hiddenMembers),
        children: (0, l.jsx)(f.List, {
          ref: m,
          className: H.members,
          paddingTop: 0,
          sectionHeight: 40,
          renderSection: e => {
            let {
              section: t
            } = e, a = r[t];
            return (0, l.jsx)(K, {
              id: a.id,
              label: a.label,
              count: a.userIds.length,
              guildId: n.id
            }, a.id)
          },
          rowHeight: Y,
          renderRow: e => {
            let {
              section: n,
              row: a
            } = e, {
              userIds: s,
              id: i
            } = r[n];
            return (0, l.jsx)(z, {
              channel: t,
              sectionId: i,
              userId: s[a],
              guildOwnerId: C
            }, s[a])
          },
          footerHeight: e => r[e] === d && t.type === V.ChannelTypes.PRIVATE_THREAD ? 80 : 0,
          renderFooter: e => r[e.section] === d ? (0, l.jsx)(Z, {
            channel: t
          }, "footer") : null,
          innerAriaLabel: B.default.Messages.MEMBERS,
          innerTag: "ul",
          sections: r.map(e => e.userIds.length),
          fade: !0,
          ...S,
          ...e
        }, s)
      })
    })
  })
}

function J(e) {
  let {
    channel: t
  } = e;
  return (0, l.jsxs)("div", {
    className: i(H.membersWrap, H.hiddenMembers, H.members, G.emptyState),
    children: [(0, l.jsx)(f.Text, {
      className: G.emptyStateHeader,
      variant: "text-xs/bold",
      color: "interactive-normal",
      children: B.default.Messages.MEMBERS
    }), (0, l.jsxs)("div", {
      className: G.emptyStateIconContainer,
      children: [(0, l.jsx)("div", {
        className: G.emptyStateIcon,
        children: (0, l.jsx)(O.default, {
          width: 32,
          height: 32
        })
      }), (0, l.jsx)(j.default, {
        className: G.emptyStateStars
      })]
    }), (0, l.jsx)(f.Heading, {
      variant: "heading-md/semibold",
      children: t.isForumPost() ? B.default.Messages.FORUM_POST_MEMBER_LIST_EMPTY_STATE_HEADER : B.default.Messages.THREAD_MEMBER_LIST_EMPTY_STATE_HEADER
    }), (0, l.jsx)(f.Text, {
      className: G.emptyStateSubtext,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: B.default.Messages.THREAD_MEMBER_LIST_EMPTY_STATE_SUBTEXT
    })]
  })
}