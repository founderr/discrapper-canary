"use strict";
l.r(t), l.d(t, {
  default: function() {
    return k
  }
});
var n = l("735250"),
  i = l("470079"),
  a = l("120356"),
  r = l.n(a),
  s = l("442837"),
  u = l("481060"),
  d = l("447543"),
  o = l("906732"),
  c = l("171368"),
  f = l("271383"),
  v = l("430824"),
  E = l("940627"),
  h = l("346656"),
  m = l("158010"),
  _ = l("51144"),
  g = l("897285"),
  I = l("978227"),
  S = l("894017"),
  x = l("79874"),
  N = l("315416"),
  T = l("236373"),
  j = l("854698"),
  C = l("391174"),
  p = l("810561"),
  L = l("390966"),
  R = l("390072"),
  y = l("981631"),
  M = l("689938"),
  A = l("435967");

function D(e) {
  var t;
  let {
    creator: l,
    guildId: i,
    channelId: a
  } = e, {
    analyticsLocations: r
  } = (0, o.default)(), d = (0, s.useStateFromStores)([f.default], () => f.default.getMember(i, l.id), [l, i]);
  return (0, n.jsxs)("div", {
    className: A.row,
    children: [(0, n.jsx)(u.Avatar, {
      size: u.AvatarSizes.SIZE_20,
      src: l.getAvatarURL(i, 20),
      "aria-label": null !== (t = null == d ? void 0 : d.nick) && void 0 !== t ? t : _.default.getName(l),
      className: A.icon
    }), (0, n.jsx)(u.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: M.default.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
        usernameHook: function() {
          var e, t;
          return (0, n.jsx)(u.Clickable, {
            onClick: () => (0, c.openUserProfileModal)({
              guildId: i,
              channelId: a,
              userId: l.id,
              roleId: null == d ? void 0 : d.colorRoleId,
              sourceAnalyticsLocations: r,
              analyticsLocation: {
                section: y.AnalyticsSections.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
              }
            }),
            className: A.creator,
            tag: "span",
            role: "link",
            children: (0, n.jsx)(u.NameWithRole, {
              name: null !== (e = null == d ? void 0 : d.nick) && void 0 !== e ? e : _.default.getName(l),
              color: null !== (t = null == d ? void 0 : d.colorString) && void 0 !== t ? t : void 0
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function b(e) {
  let {
    guild: t,
    onClick: l,
    onClose: a
  } = e, s = i.useCallback(e => {
    null == l || l(e), null != l && (null == a || a(e))
  }, [l, a]), d = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(h.default, {
      guild: t,
      size: h.default.Sizes.MINI,
      active: !0,
      className: r()(A.guildIcon, A.icon)
    }), (0, n.jsx)(E.default, {
      guild: t,
      tooltipPosition: "top",
      tooltipColor: u.Tooltip.Colors.PRIMARY,
      size: 16,
      className: A.guildBadge
    }), (0, n.jsx)(u.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: A.linkText,
      children: t.name
    })]
  });
  return (0, n.jsx)("div", {
    className: A.row,
    children: null != l ? (0, n.jsx)(u.Clickable, {
      onClick: s,
      className: A.clickable,
      role: "link",
      children: d
    }) : d
  })
}

function G(e) {
  let {
    userCount: t,
    onClick: l
  } = e;
  return (0, n.jsxs)("div", {
    className: A.row,
    children: [(0, n.jsx)(m.default, {
      width: 20,
      height: 20,
      className: A.icon
    }), (0, n.jsx)(u.Clickable, {
      onClick: l,
      className: A.interestedCount,
      children: (0, n.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: M.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
          count: t
        })
      })
    })]
  })
}

function k(e) {
  let {
    guildEvent: t,
    guild: l,
    channel: a,
    headerId: r,
    onClose: o,
    onClickInterestedCount: c,
    isHub: f = !1,
    containerRef: E,
    recurrenceId: h,
    setRecurrenceId: m
  } = e, _ = (0, s.useStateFromStores)([v.default], () => null != v.default.getGuild(l.id), [l.id]), {
    startTime: y,
    endTime: M
  } = (0, x.default)(t.id, h), k = (0, N.default)(t.guild_id, t.id, h), P = i.useCallback(e => {
    e.stopPropagation(), null != t && (0, d.transitionToGuildFromEventInvite)(t)
  }, [t]), U = (0, S.default)(h, t.id), V = (0, I.default)(t);
  i.useEffect(() => {
    g.default.getGuildEventUserCounts(l.id, t.id, null != h ? [h] : []), g.default.getGuildEventsForCurrentUser(l.id)
  }, [l.id, t.id, h]);
  let F = (0, T.recurrenceRuleFromServer)(t.recurrence_rule),
    O = (null == t ? void 0 : t.scheduled_start_time) != null ? (0, j.getRecurrenceStatus)(U, y, new Date(null == t ? void 0 : t.scheduled_start_time)) : null;
  return (0, n.jsxs)("div", {
    ref: E,
    children: [(0, n.jsxs)("div", {
      className: A.header,
      children: [(0, n.jsx)(L.GuildEventTimeStatus, {
        startTime: y.toISOString(),
        endTime: null == M ? void 0 : M.toISOString(),
        status: null != O ? O : t.status,
        eventType: t.entity_type,
        guildEventId: t.id,
        recurrenceId: h
      }), (0, n.jsx)(u.Heading, {
        id: r,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: A.title,
        children: t.name
      })]
    }), (0, n.jsxs)("div", {
      className: A.body,
      children: [(0, n.jsx)(b, {
        guild: l,
        onClick: _ ? P : void 0,
        onClose: o
      }), (0, n.jsx)(R.default, {
        guildScheduledEvent: t,
        channel: a,
        onClose: o
      }), null != k && (0, n.jsx)(G, {
        userCount: k,
        onClick: c
      }), !f && null != V && (0, n.jsx)(D, {
        creator: V,
        guildId: l.id,
        channelId: null == a ? void 0 : a.id
      }, V.id), null != t.description && (0, n.jsx)("div", {
        className: A.description,
        children: (0, n.jsx)(C.default, {
          description: t.description,
          truncate: !1,
          guildId: l.id
        })
      })]
    }), null != F && (0, n.jsx)("hr", {
      className: A.divider
    }), null != F && (0, n.jsx)(p.default, {
      guildId: l.id,
      recurrenceRule: F,
      guildEventId: t.id,
      onRecurrenceClick: m,
      hideScroller: !0,
      activeRecurrenceId: h
    })]
  })
}