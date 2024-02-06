"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var i = n("37983"),
  l = n("884691"),
  r = n("414456"),
  s = n.n(r),
  a = n("446674"),
  u = n("77078"),
  o = n("970728"),
  d = n("401642"),
  c = n("26989"),
  f = n("305961"),
  h = n("580357"),
  E = n("476263"),
  v = n("155207"),
  C = n("158998"),
  _ = n("933326"),
  p = n("398604"),
  S = n("882550"),
  N = n("466148"),
  T = n("189443"),
  I = n("909151"),
  g = n("427554"),
  m = n("393745"),
  A = n("586403"),
  R = n("49111"),
  x = n("782340"),
  y = n("171632");

function U(e) {
  var t;
  let {
    creator: n,
    guildId: l
  } = e, r = (0, a.useStateFromStores)([c.default], () => c.default.getMember(l, n.id), [n, l]);
  return (0, i.jsxs)("div", {
    className: y.row,
    children: [(0, i.jsx)(u.Avatar, {
      size: u.AvatarSizes.SIZE_20,
      src: n.getAvatarURL(l, 20),
      "aria-label": null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : C.default.getName(n),
      className: y.icon
    }), (0, i.jsx)(u.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: x.default.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
        usernameHook: function() {
          var e, t;
          return (0, i.jsx)(u.Clickable, {
            onClick: () => (0, d.openUserProfileModal)({
              userId: n.id,
              guildId: l,
              analyticsLocation: {
                section: R.AnalyticsSections.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
              }
            }),
            className: y.creator,
            tag: "span",
            role: "link",
            children: (0, i.jsx)(u.NameWithRole, {
              name: null !== (e = null == r ? void 0 : r.nick) && void 0 !== e ? e : C.default.getName(n),
              color: null !== (t = null == r ? void 0 : r.colorString) && void 0 !== t ? t : void 0
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function L(e) {
  let {
    guild: t,
    onClick: n,
    onClose: r
  } = e, a = l.useCallback(e => {
    null == n || n(e), null != n && (null == r || r(e))
  }, [n, r]), o = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(E.default, {
      guild: t,
      size: E.default.Sizes.MINI,
      active: !0,
      className: s(y.guildIcon, y.icon)
    }), (0, i.jsx)(h.default, {
      guild: t,
      tooltipPosition: "top",
      tooltipColor: u.Tooltip.Colors.PRIMARY,
      size: 16,
      className: y.guildBadge
    }), (0, i.jsx)(u.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: y.linkText,
      children: t.name
    })]
  });
  return (0, i.jsx)("div", {
    className: y.row,
    children: null != n ? (0, i.jsx)(u.Clickable, {
      onClick: a,
      className: y.clickable,
      role: "link",
      children: o
    }) : o
  })
}

function P(e) {
  let {
    userCount: t,
    onClick: n
  } = e;
  return (0, i.jsxs)("div", {
    className: y.row,
    children: [(0, i.jsx)(v.default, {
      width: 20,
      height: 20,
      className: y.icon
    }), (0, i.jsx)(u.Clickable, {
      onClick: n,
      className: y.interestedCount,
      children: (0, i.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: x.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
          count: t
        })
      })
    })]
  })
}

function O(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: r,
    headerId: s,
    onClose: d,
    onClickInterestedCount: c,
    isHub: h = !1,
    containerRef: E,
    recurrenceId: v,
    setRecurrenceId: C
  } = e, R = (0, a.useStateFromStores)([f.default], () => null != f.default.getGuild(n.id), [n.id]), {
    startTime: x,
    endTime: O
  } = (0, N.default)(t.id, v), j = (0, a.useStateFromStores)([p.default], () => p.default.getUserCount(t.id, v)), M = l.useCallback(e => {
    e.stopPropagation(), null != t && (0, o.transitionToGuildFromEventInvite)(t)
  }, [t]), D = (0, S.default)(t);
  l.useEffect(() => {
    _.default.getGuildEventUserCounts(n.id, t.id, null != v ? [v] : []), _.default.getGuildEventsForCurrentUser(n.id)
  }, [n.id, t.id, v]);
  let b = (0, T.recurrenceRuleFromServer)(t.recurrence_rule);
  return (0, i.jsxs)("div", {
    ref: E,
    children: [(0, i.jsxs)("div", {
      className: y.header,
      children: [(0, i.jsx)(m.GuildEventTimeStatus, {
        startTime: x.toISOString(),
        endTime: null == O ? void 0 : O.toISOString(),
        status: t.status,
        eventType: t.entity_type,
        guildEventId: t.id,
        recurrenceId: v
      }), (0, i.jsx)(u.Heading, {
        id: s,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: y.title,
        children: t.name
      })]
    }), (0, i.jsxs)("div", {
      className: y.body,
      children: [(0, i.jsx)(L, {
        guild: n,
        onClick: R ? M : void 0,
        onClose: d
      }), (0, i.jsx)(A.default, {
        guildScheduledEvent: t,
        channel: r,
        onClose: d
      }), null != j && (0, i.jsx)(P, {
        userCount: j,
        onClick: c
      }), !h && null != D && (0, i.jsx)(U, {
        creator: D,
        guildId: n.id
      }, D.id), null != t.description && (0, i.jsx)("div", {
        className: y.description,
        children: (0, i.jsx)(I.default, {
          description: t.description,
          truncate: !1,
          guildId: n.id
        })
      })]
    }), null != b && (0, i.jsx)("hr", {
      className: y.divider
    }), null != b && (0, i.jsx)(g.default, {
      guildId: n.id,
      recurrenceRule: b,
      guildEventId: t.id,
      onRecurrenceClick: C,
      hideScroller: !0,
      activeRecurrenceId: v
    })]
  })
}