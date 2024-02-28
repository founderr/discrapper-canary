"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  s = n.n(l),
  a = n("446674"),
  u = n("77078"),
  o = n("970728"),
  c = n("401642"),
  d = n("26989"),
  f = n("305961"),
  h = n("580357"),
  v = n("476263"),
  E = n("155207"),
  C = n("158998"),
  S = n("933326"),
  p = n("882550"),
  m = n("466148"),
  _ = n("18284"),
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
    guildId: r
  } = e, l = (0, a.useStateFromStores)([d.default], () => d.default.getMember(r, n.id), [n, r]);
  return (0, i.jsxs)("div", {
    className: L.row,
    children: [(0, i.jsx)(u.Avatar, {
      size: u.AvatarSizes.SIZE_20,
      src: n.getAvatarURL(r, 20),
      "aria-label": null !== (t = null == l ? void 0 : l.nick) && void 0 !== t ? t : C.default.getName(n),
      className: L.icon
    }), (0, i.jsx)(u.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: R.default.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
        usernameHook: function() {
          var e, t;
          return (0, i.jsx)(u.Clickable, {
            onClick: () => (0, c.openUserProfileModal)({
              userId: n.id,
              guildId: r,
              analyticsLocation: {
                section: x.AnalyticsSections.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
              }
            }),
            className: L.creator,
            tag: "span",
            role: "link",
            children: (0, i.jsx)(u.NameWithRole, {
              name: null !== (e = null == l ? void 0 : l.nick) && void 0 !== e ? e : C.default.getName(n),
              color: null !== (t = null == l ? void 0 : l.colorString) && void 0 !== t ? t : void 0
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
    onClose: l
  } = e, a = r.useCallback(e => {
    null == n || n(e), null != n && (null == l || l(e))
  }, [n, l]), o = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(v.default, {
      guild: t,
      size: v.default.Sizes.MINI,
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
    children: [(0, i.jsx)(E.default, {
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
    channel: l,
    headerId: s,
    onClose: c,
    onClickInterestedCount: d,
    isHub: h = !1,
    containerRef: v,
    recurrenceId: E,
    setRecurrenceId: C
  } = e, x = (0, a.useStateFromStores)([f.default], () => null != f.default.getGuild(n.id), [n.id]), {
    startTime: R,
    endTime: j
  } = (0, m.default)(t.id, E), w = (0, _.default)(t.guild_id, t.id, E), b = r.useCallback(e => {
    e.stopPropagation(), null != t && (0, o.transitionToGuildFromEventInvite)(t)
  }, [t]), O = (0, p.default)(t);
  r.useEffect(() => {
    S.default.getGuildEventUserCounts(n.id, t.id, null != E ? [E] : []), S.default.getGuildEventsForCurrentUser(n.id)
  }, [n.id, t.id, E]);
  let D = (0, g.recurrenceRuleFromServer)(t.recurrence_rule);
  return (0, i.jsxs)("div", {
    ref: v,
    children: [(0, i.jsxs)("div", {
      className: L.header,
      children: [(0, i.jsx)(T.GuildEventTimeStatus, {
        startTime: R.toISOString(),
        endTime: null == j ? void 0 : j.toISOString(),
        status: t.status,
        eventType: t.entity_type,
        guildEventId: t.id,
        recurrenceId: E
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
        onClick: x ? b : void 0,
        onClose: c
      }), (0, i.jsx)(A.default, {
        guildScheduledEvent: t,
        channel: l,
        onClose: c
      }), null != w && (0, i.jsx)(P, {
        userCount: w,
        onClick: d
      }), !h && null != O && (0, i.jsx)(y, {
        creator: O,
        guildId: n.id
      }, O.id), null != t.description && (0, i.jsx)("div", {
        className: L.description,
        children: (0, i.jsx)(I.default, {
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
      onRecurrenceClick: C,
      hideScroller: !0,
      activeRecurrenceId: E
    })]
  })
}