l.d(n, {
  Z: function() {
    return k
  }
});
var t = l(735250),
  i = l(470079),
  r = l(120356),
  s = l.n(r),
  a = l(442837),
  o = l(481060),
  u = l(447543),
  c = l(906732),
  d = l(171368),
  v = l(271383),
  h = l(430824),
  E = l(940627),
  g = l(346656),
  f = l(51144),
  m = l(897285),
  x = l(978227),
  _ = l(894017),
  I = l(79874),
  Z = l(315416),
  N = l(236373),
  T = l(854698),
  j = l(391174),
  C = l(810561),
  p = l(390966),
  L = l(390072),
  S = l(981631),
  M = l(689938),
  P = l(519229);

function R(e) {
  var n;
  let {
    creator: l,
    guildId: i,
    channelId: r
  } = e, {
    analyticsLocations: s
  } = (0, c.ZP)(), u = (0, a.e7)([v.ZP], () => v.ZP.getMember(i, l.id), [l, i]);
  return (0, t.jsxs)("div", {
    className: P.row,
    children: [(0, t.jsx)(o.Avatar, {
      size: o.AvatarSizes.SIZE_20,
      src: l.getAvatarURL(i, 20),
      "aria-label": null !== (n = null == u ? void 0 : u.nick) && void 0 !== n ? n : f.ZP.getName(l),
      className: P.icon
    }), (0, t.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: M.Z.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
        usernameHook: function() {
          var e, n;
          return (0, t.jsx)(o.Clickable, {
            onClick: () => (0, d.openUserProfileModal)({
              guildId: i,
              channelId: r,
              userId: l.id,
              roleId: null == u ? void 0 : u.colorRoleId,
              sourceAnalyticsLocations: s,
              analyticsLocation: {
                section: S.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
              }
            }),
            className: P.creator,
            tag: "span",
            role: "link",
            children: (0, t.jsx)(o.NameWithRole, {
              name: null !== (e = null == u ? void 0 : u.nick) && void 0 !== e ? e : f.ZP.getName(l),
              color: null !== (n = null == u ? void 0 : u.colorString) && void 0 !== n ? n : void 0
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function b(e) {
  let {
    guild: n,
    onClick: l,
    onClose: r
  } = e, a = i.useCallback(e => {
    null == l || l(e), null != l && (null == r || r(e))
  }, [l, r]), u = (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(g.Z, {
      guild: n,
      size: g.Z.Sizes.MINI,
      active: !0,
      className: s()(P.guildIcon, P.icon)
    }), (0, t.jsx)(E.Z, {
      guild: n,
      tooltipPosition: "top",
      tooltipColor: o.Tooltip.Colors.PRIMARY,
      size: 16,
      className: P.guildBadge
    }), (0, t.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: P.linkText,
      children: n.name
    })]
  });
  return (0, t.jsx)("div", {
    className: P.row,
    children: null != l ? (0, t.jsx)(o.Clickable, {
      onClick: a,
      className: P.clickable,
      role: "link",
      children: u
    }) : u
  })
}

function y(e) {
  let {
    userCount: n,
    onClick: l
  } = e;
  return (0, t.jsxs)("div", {
    className: P.row,
    children: [(0, t.jsx)(o.GroupIcon, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: P.icon
    }), (0, t.jsx)(o.Clickable, {
      onClick: l,
      className: P.interestedCount,
      children: (0, t.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: M.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
          count: n
        })
      })
    })]
  })
}

function k(e) {
  let {
    guildEvent: n,
    guild: l,
    channel: r,
    headerId: s,
    onClose: c,
    onClickInterestedCount: d,
    isHub: v = !1,
    containerRef: E,
    recurrenceId: g,
    setRecurrenceId: f
  } = e, S = (0, a.e7)([h.Z], () => null != h.Z.getGuild(l.id), [l.id]), {
    startTime: M,
    endTime: k
  } = (0, I.ZP)(n, g), D = (0, Z.Z)(n.guild_id, n.id, g), A = i.useCallback(e => {
    e.stopPropagation(), null != n && (0, u.B)(n)
  }, [n]), G = (0, _.Z)(g, n.id), U = (0, x.Z)(n);
  i.useEffect(() => {
    m.Z.getGuildEventUserCounts(l.id, n.id, null != g ? [g] : []), m.Z.getGuildEventsForCurrentUser(l.id)
  }, [l.id, n.id, g]);
  let O = (0, N.KV)(n.recurrence_rule),
    V = (null == n ? void 0 : n.scheduled_start_time) != null ? (0, T.lh)(G, M, new Date(null == n ? void 0 : n.scheduled_start_time)) : null;
  return (0, t.jsxs)("div", {
    ref: E,
    children: [(0, t.jsxs)("div", {
      className: P.header,
      children: [(0, t.jsx)(p.z, {
        startTime: M.toISOString(),
        endTime: null == k ? void 0 : k.toISOString(),
        status: null != V ? V : n.status,
        eventType: n.entity_type,
        guildEventId: n.id,
        recurrenceId: g
      }), (0, t.jsx)(o.Heading, {
        id: s,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: P.title,
        children: n.name
      })]
    }), (0, t.jsxs)("div", {
      className: P.body,
      children: [(0, t.jsx)(b, {
        guild: l,
        onClick: S ? A : void 0,
        onClose: c
      }), (0, t.jsx)(L.Z, {
        guildScheduledEvent: n,
        channel: r,
        onClose: c
      }), null != D && (0, t.jsx)(y, {
        userCount: D,
        onClick: d
      }), !v && null != U && (0, t.jsx)(R, {
        creator: U,
        guildId: l.id,
        channelId: null == r ? void 0 : r.id
      }, U.id), null != n.description && (0, t.jsx)("div", {
        className: P.description,
        children: (0, t.jsx)(j.Z, {
          description: n.description,
          truncate: !1,
          guildId: l.id
        })
      })]
    }), null != O && (0, t.jsx)("hr", {
      className: P.divider
    }), null != O && (0, t.jsx)(C.Z, {
      guildId: l.id,
      recurrenceRule: O,
      guildEventId: n.id,
      onRecurrenceClick: f,
      hideScroller: !0,
      activeRecurrenceId: g
    })]
  })
}