"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
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
  p = n("882550"),
  S = n("466148"),
  m = n("18284"),
  g = n("189443"),
  I = n("909151"),
  N = n("427554"),
  T = n("393745"),
  A = n("586403"),
  x = n("49111"),
  R = n("782340"),
  L = n("409295");

function y(e) {
  var t;
  let {
    creator: n,
    guildId: l
  } = e, r = (0, a.useStateFromStores)([c.default], () => c.default.getMember(l, n.id), [n, l]);
  return (0, i.jsxs)("div", {
    className: L.row,
    children: [(0, i.jsx)(u.Avatar, {
      size: u.AvatarSizes.SIZE_20,
      src: n.getAvatarURL(l, 20),
      "aria-label": null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : C.default.getName(n),
      className: L.icon
    }), (0, i.jsx)(u.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: R.default.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
        usernameHook: function() {
          var e, t;
          return (0, i.jsx)(u.Clickable, {
            onClick: () => (0, d.openUserProfileModal)({
              userId: n.id,
              guildId: l,
              analyticsLocation: {
                section: x.AnalyticsSections.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
              }
            }),
            className: L.creator,
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

function M(e) {
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

function P(e) {
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
        children: R.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
          count: t
        })
      })
    })]
  })
}

function j(e) {
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
  } = e, x = (0, a.useStateFromStores)([f.default], () => null != f.default.getGuild(n.id), [n.id]), {
    startTime: R,
    endTime: j
  } = (0, S.default)(t.id, v), D = (0, m.default)(t.guild_id, t.id, v), w = l.useCallback(e => {
    e.stopPropagation(), null != t && (0, o.transitionToGuildFromEventInvite)(t)
  }, [t]), b = (0, p.default)(t);
  l.useEffect(() => {
    _.default.getGuildEventUserCounts(n.id, t.id, null != v ? [v] : []), _.default.getGuildEventsForCurrentUser(n.id)
  }, [n.id, t.id, v]);
  let O = (0, g.recurrenceRuleFromServer)(t.recurrence_rule);
  return (0, i.jsxs)("div", {
    ref: E,
    children: [(0, i.jsxs)("div", {
      className: L.header,
      children: [(0, i.jsx)(T.GuildEventTimeStatus, {
        startTime: R.toISOString(),
        endTime: null == j ? void 0 : j.toISOString(),
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
      children: [(0, i.jsx)(M, {
        guild: n,
        onClick: x ? w : void 0,
        onClose: d
      }), (0, i.jsx)(A.default, {
        guildScheduledEvent: t,
        channel: r,
        onClose: d
      }), null != D && (0, i.jsx)(P, {
        userCount: D,
        onClick: c
      }), !h && null != b && (0, i.jsx)(y, {
        creator: b,
        guildId: n.id
      }, b.id), null != t.description && (0, i.jsx)("div", {
        className: L.description,
        children: (0, i.jsx)(I.default, {
          description: t.description,
          truncate: !1,
          guildId: n.id
        })
      })]
    }), null != O && (0, i.jsx)("hr", {
      className: L.divider
    }), null != O && (0, i.jsx)(N.default, {
      guildId: n.id,
      recurrenceRule: O,
      guildEventId: t.id,
      onRecurrenceClick: C,
      hideScroller: !0,
      activeRecurrenceId: v
    })]
  })
}