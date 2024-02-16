"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("70102"), n("222007");
var a = n("37983"),
  r = n("884691"),
  s = n("414456"),
  i = n.n(s),
  l = n("917351"),
  u = n.n(l),
  o = n("446674"),
  d = n("862337"),
  c = n("77078"),
  f = n("272030"),
  S = n("901582"),
  E = n("373469"),
  h = n("697218"),
  _ = n("427302"),
  C = n("462579"),
  p = n("449008"),
  m = n("387111"),
  T = n("99795"),
  g = n("49111"),
  A = n("782340"),
  v = n("964376");

function I(e, t) {
  switch (e) {
    case T.ParticipantTypes.ACTIVITY:
      return A.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
        numUsers: t
      });
    case T.ParticipantTypes.STREAM:
      return A.default.Messages.SPECTATORS.format({
        numViewers: t
      });
    default:
      throw Error("Unknown participant type.")
  }
}

function R(e) {
  let {
    users: t,
    disableInteraction: n,
    guildId: r,
    participantType: s,
    channelId: l,
    handleUserContextMenu: u
  } = e, o = I(s, t.length);
  return (0, a.jsx)(c.Dialog, {
    "aria-label": o,
    className: v.popoutWrapper,
    children: (0, a.jsxs)(c.Scroller, {
      className: v.scroller,
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-deprecated-12/semibold",
        className: v.memberListHeader,
        children: o
      }), (0, a.jsx)("div", {
        children: t.map(e => (0, a.jsx)(_.default, {
          guildId: null != r ? r : void 0,
          className: i(v.memberListItem, {
            [v.popoutDisabled]: n
          }),
          textClassName: v.memberListItemText,
          user: e,
          disablePopout: n,
          nick: m.default.getNickname(r, l, e),
          onContextMenu: t => n ? null : u(t, e)
        }, e.id))
      })]
    })
  })
}

function M(e) {
  let {
    users: t,
    guildId: n,
    channelId: r,
    maxVisibleUsers: s = 3,
    className: l,
    participantType: u
  } = e, o = I(u, t.length), d = t.length < s ? t.map(e => (0, a.jsx)("div", {
    className: v.viewersTooltipItem,
    children: m.default.getName(n, r, e)
  }, e.id)) : o;
  return (0, a.jsx)(c.TooltipContainer, {
    text: d,
    "aria-label": o,
    children: (0, a.jsxs)("div", {
      className: i(v.viewers, l),
      children: [(0, a.jsx)(C.default, {
        className: v.viewersIcon
      }), (0, a.jsx)("span", {
        "aria-hidden": "true",
        children: t.length
      })]
    })
  })
}
let O = [];

function N(e) {
  let {
    channelId: t,
    guildId: s,
    participant: l,
    className: _,
    compact: C = !1,
    disableInteraction: m = !1,
    maxVisibleUsers: A = 3
  } = e, [I, N] = r.useState(!1), L = r.useRef(new d.DelayedCall(150, () => N(!1))), y = (0, o.useStateFromStoresArray)([E.default, h.default], () => {
    if (l.type === T.ParticipantTypes.STREAM) {
      let e = E.default.getViewerIds(l.id);
      return e.length > 0 ? e.map(e => h.default.getUser(e)).filter(p.isNotNullish) : O
    }
    return l.type === T.ParticipantTypes.ACTIVITY ? l.participants.size > 0 ? Array.from(l.participants).map(e => h.default.getUser(e)).filter(p.isNotNullish) : O : O
  }, [l]), x = r.useCallback(() => {
    L.current.cancel(), N(!0)
  }, []), D = r.useCallback(() => {
    L.current.delay()
  }, []), P = r.useCallback((e, t) => {
    x(), (0, f.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("406784").then(n.bind(n, "406784"));
      return n => (0, a.jsx)(e, {
        ...n,
        user: t
      })
    }, {
      onClose: D
    })
  }, [D, x]);
  if (0 === y.length) return null;
  if (C) return (0, a.jsx)(M, {
    maxVisibleUsers: A,
    users: y,
    guildId: s,
    channelId: t,
    className: _,
    participantType: l.type
  });
  let w = u(y).take(A).map(e => (0, a.jsx)(c.Avatar, {
    src: e.getAvatarURL(s, 24),
    "aria-label": e.username,
    size: c.AvatarSizes.SIZE_24,
    className: v.viewer
  }, e.id)).value();
  return y.length > A && (w[w.length - 1] = (0, a.jsxs)("div", {
    className: v.overflow,
    children: ["+", y.length - A + 1]
  }, "overflow")), (0, a.jsx)(S.default, {
    section: g.AnalyticsSections.STREAM_VIEWER_POPOUT,
    children: (0, a.jsx)("div", {
      onMouseEnter: x,
      onMouseLeave: D,
      children: (0, a.jsx)(c.Popout, {
        renderPopout: () => (0, a.jsx)(R, {
          participantType: l.type,
          handleUserContextMenu: P,
          guildId: s,
          channelId: t,
          users: y,
          disableInteraction: m
        }),
        shouldShow: I,
        position: "top",
        children: () => (0, a.jsx)("div", {
          className: i(v.viewers, _),
          children: w
        })
      })
    })
  })
}