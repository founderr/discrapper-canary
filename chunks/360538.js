"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  u = n.n(l),
  a = n("446674"),
  s = n("77078"),
  o = n("970728"),
  d = n("401642"),
  c = n("26989"),
  f = n("305961"),
  E = n("580357"),
  _ = n("476263"),
  S = n("155207"),
  T = n("158998"),
  I = n("933326"),
  h = n("398604"),
  v = n("882550"),
  N = n("466148"),
  C = n("189443"),
  p = n("909151"),
  g = n("427554"),
  A = n("393745"),
  m = n("586403"),
  R = n("49111"),
  L = n("782340"),
  P = n("409295");

function D(e) {
  var t;
  let {
    creator: n,
    guildId: r
  } = e, l = (0, a.useStateFromStores)([c.default], () => c.default.getMember(r, n.id), [n, r]);
  return (0, i.jsxs)("div", {
    className: P.row,
    children: [(0, i.jsx)(s.Avatar, {
      size: s.AvatarSizes.SIZE_20,
      src: n.getAvatarURL(r, 20),
      "aria-label": null !== (t = null == l ? void 0 : l.nick) && void 0 !== t ? t : T.default.getName(n),
      className: P.icon
    }), (0, i.jsx)(s.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: L.default.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
        usernameHook: function() {
          var e, t;
          return (0, i.jsx)(s.Clickable, {
            onClick: () => (0, d.openUserProfileModal)({
              userId: n.id,
              guildId: r,
              analyticsLocation: {
                section: R.AnalyticsSections.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
              }
            }),
            className: P.creator,
            tag: "span",
            role: "link",
            children: (0, i.jsx)(s.NameWithRole, {
              name: null !== (e = null == l ? void 0 : l.nick) && void 0 !== e ? e : T.default.getName(n),
              color: null !== (t = null == l ? void 0 : l.colorString) && void 0 !== t ? t : void 0
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function y(e) {
  let {
    guild: t,
    onClick: n,
    onClose: l
  } = e, a = r.useCallback(e => {
    null == n || n(e), null != n && (null == l || l(e))
  }, [n, l]), o = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(_.default, {
      guild: t,
      size: _.default.Sizes.MINI,
      active: !0,
      className: u(P.guildIcon, P.icon)
    }), (0, i.jsx)(E.default, {
      guild: t,
      tooltipPosition: "top",
      tooltipColor: s.Tooltip.Colors.PRIMARY,
      size: 16,
      className: P.guildBadge
    }), (0, i.jsx)(s.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: P.linkText,
      children: t.name
    })]
  });
  return (0, i.jsx)("div", {
    className: P.row,
    children: null != n ? (0, i.jsx)(s.Clickable, {
      onClick: a,
      className: P.clickable,
      role: "link",
      children: o
    }) : o
  })
}

function U(e) {
  let {
    userCount: t,
    onClick: n
  } = e;
  return (0, i.jsxs)("div", {
    className: P.row,
    children: [(0, i.jsx)(S.default, {
      width: 20,
      height: 20,
      className: P.icon
    }), (0, i.jsx)(s.Clickable, {
      onClick: n,
      className: P.interestedCount,
      children: (0, i.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: L.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
          count: t
        })
      })
    })]
  })
}

function G(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: l,
    headerId: u,
    onClose: d,
    onClickInterestedCount: c,
    isHub: E = !1,
    containerRef: _,
    recurrenceId: S,
    setRecurrenceId: T
  } = e, R = (0, a.useStateFromStores)([f.default], () => null != f.default.getGuild(n.id), [n.id]), {
    startTime: L,
    endTime: G
  } = (0, N.default)(t.id, S), O = (0, a.useStateFromStores)([h.default], () => h.default.getUserCount(t.id, S)), x = r.useCallback(e => {
    e.stopPropagation(), null != t && (0, o.transitionToGuildFromEventInvite)(t)
  }, [t]), M = (0, v.default)(t);
  r.useEffect(() => {
    I.default.getGuildEventUserCounts(n.id, t.id, null != S ? [S] : []), I.default.getGuildEventsForCurrentUser(n.id)
  }, [n.id, t.id, S]);
  let b = (0, C.recurrenceRuleFromServer)(t.recurrence_rule);
  return (0, i.jsxs)("div", {
    ref: _,
    children: [(0, i.jsxs)("div", {
      className: P.header,
      children: [(0, i.jsx)(A.GuildEventTimeStatus, {
        startTime: L.toISOString(),
        endTime: null == G ? void 0 : G.toISOString(),
        status: t.status,
        eventType: t.entity_type,
        guildEventId: t.id,
        recurrenceId: S
      }), (0, i.jsx)(s.Heading, {
        id: u,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: P.title,
        children: t.name
      })]
    }), (0, i.jsxs)("div", {
      className: P.body,
      children: [(0, i.jsx)(y, {
        guild: n,
        onClick: R ? x : void 0,
        onClose: d
      }), (0, i.jsx)(m.default, {
        guildScheduledEvent: t,
        channel: l,
        onClose: d
      }), null != O && (0, i.jsx)(U, {
        userCount: O,
        onClick: c
      }), !E && null != M && (0, i.jsx)(D, {
        creator: M,
        guildId: n.id
      }, M.id), null != t.description && (0, i.jsx)("div", {
        className: P.description,
        children: (0, i.jsx)(p.default, {
          description: t.description,
          truncate: !1,
          guildId: n.id
        })
      })]
    }), null != b && (0, i.jsx)("hr", {
      className: P.divider
    }), null != b && (0, i.jsx)(g.default, {
      guildId: n.id,
      recurrenceRule: b,
      guildEventId: t.id,
      onRecurrenceClick: T,
      hideScroller: !0,
      activeRecurrenceId: S
    })]
  })
}