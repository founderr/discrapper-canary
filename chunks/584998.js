"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("272030"),
  o = n("120027"),
  u = n("487269"),
  d = n("957255"),
  c = n("660478"),
  m = n("109264"),
  f = n("251144"),
  h = n("20662"),
  p = n("15738"),
  g = n("299039"),
  E = n("347738"),
  C = n("118094"),
  v = n("402318"),
  I = n("976818"),
  S = n("49111"),
  _ = n("200521"),
  x = n("137738");

function N(e) {
  let {
    summary: t,
    channel: c,
    members: I,
    guildId: N,
    unread: T,
    onClick: M
  } = e, [A, O] = a.useState(!1), j = (0, u.getTimestampString)(g.default.extractTimestamp(t.startId)), y = (0, s.useStateFromStores)([E.default], () => E.default.summaryFeedback(t)), L = (e, n) => {
    e.stopPropagation(), (0, C.default)({
      summary: t,
      channel: c,
      rating: n
    })
  }, R = d.default.can(S.Permissions.MANAGE_MESSAGES, c);
  return (0, l.jsxs)(i.Clickable, {
    className: x.container,
    onClick: M,
    onContextMenu: e => {
      R && (0, r.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("113286").then(n.bind(n, "113286"));
        return n => (0, l.jsx)(e, {
          ...n,
          summary: t
        })
      })
    },
    onMouseEnter: () => O(!0),
    onMouseLeave: () => O(!1),
    children: [(0, l.jsx)(p.default, {
      hovered: A,
      unread: T,
      className: x.unreadPill
    }), (0, l.jsx)("div", {
      className: x.rowHeader,
      children: (0, l.jsxs)("div", {
        className: x.rowHeaderLeft,
        children: [(0, l.jsx)(i.Text, {
          className: x.timestamp,
          color: "interactive-normal",
          variant: "text-xs/normal",
          children: j
        }), (0, l.jsx)(o.default, {
          height: 4,
          width: 4,
          "aria-hidden": "true",
          className: x.dot
        }), (0, l.jsx)(m.default, {
          height: 12,
          width: 12,
          className: x.icon
        }), (0, l.jsx)(i.Text, {
          className: x.count,
          color: "interactive-normal",
          variant: "text-xs/normal",
          children: t.count
        }), I.length > 0 && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(o.default, {
            height: 4,
            width: 4,
            "aria-hidden": "true",
            className: x.dot
          }), (0, l.jsx)(v.default, {
            partySize: {
              knownSize: I.length,
              totalSize: I.length
            },
            maxAvatarsShown: 3,
            members: I,
            guildId: N
          })]
        })]
      })
    }), A && !y && (0, l.jsxs)("div", {
      className: x.feedbackContainer,
      children: [(0, l.jsx)(i.Clickable, {
        onClick: e => L(e, _.FeedbackRating.GOOD),
        children: (0, l.jsx)(h.default, {
          className: x.thumbIcon,
          width: 12,
          height: 12
        })
      }), (0, l.jsx)(i.Clickable, {
        onClick: e => L(e, _.FeedbackRating.BAD),
        children: (0, l.jsx)(f.default, {
          className: x.thumbIcon,
          width: 12,
          height: 12
        })
      })]
    }), (0, l.jsx)(i.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      className: x.title,
      children: t.topic
    }), (0, l.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: x.subtitle,
      children: t.summShort
    })]
  })
}

function T(e) {
  let {
    summaries: t,
    summariesMembers: n,
    channel: i,
    selectTopic: r,
    setOpen: o
  } = e, u = (0, s.useStateFromStores)([c.default], () => c.default.getOldestUnreadMessageId(i.id)), d = a.useCallback(e => {
    r(e), o(!1)
  }, [r, o]);
  return t.length < 1 ? (0, l.jsx)(I.default, {}) : (0, l.jsx)(l.Fragment, {
    children: t.map((e, t) => {
      var a;
      let s = null !== (a = n[t]) && void 0 !== a ? a : [];
      return (0, l.jsx)(N, {
        summary: e,
        channel: i,
        members: s,
        guildId: i.guild_id,
        unread: null != u && g.default.compare(e.endId, u) > 0,
        onClick: () => d(t)
      }, t)
    })
  })
}