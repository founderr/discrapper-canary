"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var i = n("37983"),
  l = n("884691"),
  r = n("414456"),
  s = n.n(r),
  a = n("446674"),
  u = n("77078"),
  o = n("970728"),
  c = n("401642"),
  d = n("26989"),
  f = n("305961"),
  h = n("580357"),
  C = n("476263"),
  v = n("155207"),
  p = n("158998"),
  E = n("933326"),
  S = n("398604"),
  I = n("882550"),
  m = n("466148"),
  g = n("189443"),
  _ = n("909151"),
  N = n("427554"),
  x = n("393745"),
  T = n("586403"),
  y = n("49111"),
  A = n("782340"),
  L = n("171632");

function R(e) {
  var t;
  let {
    creator: n,
    guildId: l
  } = e, r = (0, a.useStateFromStores)([d.default], () => d.default.getMember(l, n.id), [n, l]);
  return (0, i.jsxs)("div", {
    className: L.row,
    children: [(0, i.jsx)(u.Avatar, {
      size: u.AvatarSizes.SIZE_20,
      src: n.getAvatarURL(l, 20),
      "aria-label": null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : p.default.getName(n),
      className: L.icon
    }), (0, i.jsx)(u.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: A.default.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
        usernameHook: function() {
          var e, t;
          return (0, i.jsx)(u.Clickable, {
            onClick: () => (0, c.openUserProfileModal)({
              userId: n.id,
              guildId: l,
              analyticsLocation: {
                section: y.AnalyticsSections.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
              }
            }),
            className: L.creator,
            tag: "span",
            role: "link",
            children: (0, i.jsx)(u.NameWithRole, {
              name: null !== (e = null == r ? void 0 : r.nick) && void 0 !== e ? e : p.default.getName(n),
              color: null !== (t = null == r ? void 0 : r.colorString) && void 0 !== t ? t : void 0
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function j(e) {
  let {
    guild: t,
    onClick: n,
    onClose: r
  } = e, a = l.useCallback(e => {
    null == n || n(e), null != n && (null == r || r(e))
  }, [n, r]), o = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(C.default, {
      guild: t,
      size: C.default.Sizes.MINI,
      active: !0,
      className: s(L.guildIcon, L.icon)
    }), (0, i.jsx)(h.default, {
      guild: t,
      tooltipPosition: "top",
      tooltipColor: u.Tooltip.Colors.PRIMARY,
      size: 16,
      className: L.guildBadge
    }), (0, i.jsx)(u.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: L.linkText,
      children: t.name
    })]
  });
  return (0, i.jsx)("div", {
    className: L.row,
    children: null != n ? (0, i.jsx)(u.Clickable, {
      onClick: a,
      className: L.clickable,
      role: "link",
      children: o
    }) : o
  })
}

function w(e) {
  let {
    userCount: t,
    onClick: n
  } = e;
  return (0, i.jsxs)("div", {
    className: L.row,
    children: [(0, i.jsx)(v.default, {
      width: 20,
      height: 20,
      className: L.icon
    }), (0, i.jsx)(u.Clickable, {
      onClick: n,
      className: L.interestedCount,
      children: (0, i.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: A.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
          count: t
        })
      })
    })]
  })
}

function M(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: r,
    headerId: s,
    onClose: c,
    onClickInterestedCount: d,
    isHub: h = !1,
    containerRef: C,
    recurrenceId: v,
    setRecurrenceId: p
  } = e, y = (0, a.useStateFromStores)([f.default], () => null != f.default.getGuild(n.id), [n.id]), {
    startTime: A,
    endTime: M
  } = (0, m.default)(t.id, v), b = (0, a.useStateFromStores)([S.default], () => S.default.getUserCount(t.id, v)), P = l.useCallback(e => {
    e.stopPropagation(), null != t && (0, o.transitionToGuildFromEventInvite)(t)
  }, [t]), U = (0, I.default)(t);
  l.useEffect(() => {
    E.default.getGuildEventUserCounts(n.id, t.id, null != v ? [v] : []), E.default.getGuildEventsForCurrentUser(n.id)
  }, [n.id, t.id, v]);
  let D = (0, g.recurrenceRuleFromServer)(t.recurrence_rule);
  return (0, i.jsxs)("div", {
    ref: C,
    children: [(0, i.jsxs)("div", {
      className: L.header,
      children: [(0, i.jsx)(x.GuildEventTimeStatus, {
        startTime: A.toISOString(),
        endTime: null == M ? void 0 : M.toISOString(),
        status: t.status,
        eventType: t.entity_type,
        guildEventId: t.id,
        recurrenceId: v
      }), (0, i.jsx)(u.Heading, {
        id: s,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: L.title,
        children: t.name
      })]
    }), (0, i.jsxs)("div", {
      className: L.body,
      children: [(0, i.jsx)(j, {
        guild: n,
        onClick: y ? P : void 0,
        onClose: c
      }), (0, i.jsx)(T.default, {
        guildScheduledEvent: t,
        channel: r,
        onClose: c
      }), null != b && (0, i.jsx)(w, {
        userCount: b,
        onClick: d
      }), !h && null != U && (0, i.jsx)(R, {
        creator: U,
        guildId: n.id
      }, U.id), null != t.description && (0, i.jsx)("div", {
        className: L.description,
        children: (0, i.jsx)(_.default, {
          description: t.description,
          truncate: !1,
          guildId: n.id
        })
      })]
    }), null != D && (0, i.jsx)("hr", {
      className: L.divider
    }), null != D && (0, i.jsx)(N.default, {
      guildId: n.id,
      recurrenceRule: D,
      guildEventId: t.id,
      onRecurrenceClick: p,
      hideScroller: !0,
      activeRecurrenceId: v
    })]
  })
}