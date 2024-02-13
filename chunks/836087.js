"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("70102"), n("222007");
var a = n("37983"),
  r = n("884691"),
  i = n("414456"),
  s = n.n(i),
  l = n("917351"),
  u = n.n(l),
  o = n("446674"),
  d = n("862337"),
  c = n("77078"),
  f = n("272030"),
  h = n("901582"),
  p = n("373469"),
  E = n("697218"),
  C = n("427302"),
  m = n("462579"),
  S = n("449008"),
  g = n("387111"),
  _ = n("99795"),
  v = n("49111"),
  T = n("782340"),
  I = n("2081");

function A(e, t) {
  switch (e) {
    case _.ParticipantTypes.ACTIVITY:
      return T.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
        numUsers: t
      });
    case _.ParticipantTypes.STREAM:
      return T.default.Messages.SPECTATORS.format({
        numViewers: t
      });
    default:
      throw Error("Unknown participant type.")
  }
}

function M(e) {
  let {
    users: t,
    disableInteraction: n,
    guildId: r,
    participantType: i,
    channelId: l,
    handleUserContextMenu: u
  } = e, o = A(i, t.length);
  return (0, a.jsx)(c.Dialog, {
    "aria-label": o,
    className: I.popoutWrapper,
    children: (0, a.jsxs)(c.Scroller, {
      className: I.scroller,
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-deprecated-12/semibold",
        className: I.memberListHeader,
        children: o
      }), (0, a.jsx)("div", {
        children: t.map(e => (0, a.jsx)(C.default, {
          guildId: null != r ? r : void 0,
          className: s(I.memberListItem, {
            [I.popoutDisabled]: n
          }),
          textClassName: I.memberListItemText,
          user: e,
          disablePopout: n,
          nick: g.default.getNickname(r, l, e),
          onContextMenu: t => n ? null : u(t, e)
        }, e.id))
      })]
    })
  })
}

function x(e) {
  let {
    users: t,
    guildId: n,
    channelId: r,
    maxVisibleUsers: i = 3,
    className: l,
    participantType: u
  } = e, o = A(u, t.length), d = t.length < i ? t.map(e => (0, a.jsx)("div", {
    className: I.viewersTooltipItem,
    children: g.default.getName(n, r, e)
  }, e.id)) : o;
  return (0, a.jsx)(c.TooltipContainer, {
    text: d,
    "aria-label": o,
    children: (0, a.jsxs)("div", {
      className: s(I.viewers, l),
      children: [(0, a.jsx)(m.default, {
        className: I.viewersIcon
      }), (0, a.jsx)("span", {
        "aria-hidden": "true",
        children: t.length
      })]
    })
  })
}
let R = [];

function N(e) {
  let {
    channelId: t,
    guildId: i,
    participant: l,
    className: C,
    compact: m = !1,
    disableInteraction: g = !1,
    maxVisibleUsers: T = 3
  } = e, [A, N] = r.useState(!1), L = r.useRef(new d.DelayedCall(150, () => N(!1))), O = (0, o.useStateFromStoresArray)([p.default, E.default], () => {
    if (l.type === _.ParticipantTypes.STREAM) {
      let e = p.default.getViewerIds(l.id);
      return e.length > 0 ? e.map(e => E.default.getUser(e)).filter(S.isNotNullish) : R
    }
    return l.type === _.ParticipantTypes.ACTIVITY ? l.participants.size > 0 ? Array.from(l.participants).map(e => E.default.getUser(e)).filter(S.isNotNullish) : R : R
  }, [l]), y = r.useCallback(() => {
    L.current.cancel(), N(!0)
  }, []), P = r.useCallback(() => {
    L.current.delay()
  }, []), b = r.useCallback((e, t) => {
    y(), (0, f.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("406784").then(n.bind(n, "406784"));
      return n => (0, a.jsx)(e, {
        ...n,
        user: t
      })
    }, {
      onClose: P
    })
  }, [P, y]);
  if (0 === O.length) return null;
  if (m) return (0, a.jsx)(x, {
    maxVisibleUsers: T,
    users: O,
    guildId: i,
    channelId: t,
    className: C,
    participantType: l.type
  });
  let D = u(O).take(T).map(e => (0, a.jsx)(c.Avatar, {
    src: e.getAvatarURL(i, 24),
    "aria-label": e.username,
    size: c.AvatarSizes.SIZE_24,
    className: I.viewer
  }, e.id)).value();
  return O.length > T && (D[D.length - 1] = (0, a.jsxs)("div", {
    className: I.overflow,
    children: ["+", O.length - T + 1]
  }, "overflow")), (0, a.jsx)(h.default, {
    section: v.AnalyticsSections.STREAM_VIEWER_POPOUT,
    children: (0, a.jsx)("div", {
      onMouseEnter: y,
      onMouseLeave: P,
      children: (0, a.jsx)(c.Popout, {
        renderPopout: () => (0, a.jsx)(M, {
          participantType: l.type,
          handleUserContextMenu: b,
          guildId: i,
          channelId: t,
          users: O,
          disableInteraction: g
        }),
        shouldShow: A,
        position: "top",
        children: () => (0, a.jsx)("div", {
          className: s(I.viewers, C),
          children: D
        })
      })
    })
  })
}