"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
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
  E = n("901582"),
  S = n("373469"),
  h = n("697218"),
  C = n("427302"),
  _ = n("462579"),
  p = n("449008"),
  m = n("387111"),
  g = n("99795"),
  T = n("49111"),
  v = n("782340"),
  A = n("964376");

function I(e, t) {
  switch (e) {
    case g.ParticipantTypes.ACTIVITY:
      return v.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
        numUsers: t
      });
    case g.ParticipantTypes.STREAM:
      return v.default.Messages.SPECTATORS.format({
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
    className: A.popoutWrapper,
    children: (0, a.jsxs)(c.Scroller, {
      className: A.scroller,
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-deprecated-12/semibold",
        className: A.memberListHeader,
        children: o
      }), (0, a.jsx)("div", {
        children: t.map(e => (0, a.jsx)(C.default, {
          guildId: null != r ? r : void 0,
          className: i(A.memberListItem, {
            [A.popoutDisabled]: n
          }),
          textClassName: A.memberListItemText,
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
    className: A.viewersTooltipItem,
    children: m.default.getName(n, r, e)
  }, e.id)) : o;
  return (0, a.jsx)(c.TooltipContainer, {
    text: d,
    "aria-label": o,
    children: (0, a.jsxs)("div", {
      className: i(A.viewers, l),
      children: [(0, a.jsx)(_.default, {
        className: A.viewersIcon
      }), (0, a.jsx)("span", {
        "aria-hidden": "true",
        children: t.length
      })]
    })
  })
}
let O = [];

function L(e) {
  let {
    channelId: t,
    guildId: s,
    participant: l,
    className: C,
    compact: _ = !1,
    disableInteraction: m = !1,
    maxVisibleUsers: v = 3
  } = e, [I, L] = r.useState(!1), N = r.useRef(new d.DelayedCall(150, () => L(!1))), y = (0, o.useStateFromStoresArray)([S.default, h.default], () => {
    if (l.type === g.ParticipantTypes.STREAM) {
      let e = S.default.getViewerIds(l.id);
      return e.length > 0 ? e.map(e => h.default.getUser(e)).filter(p.isNotNullish) : O
    }
    return l.type === g.ParticipantTypes.ACTIVITY ? l.participants.size > 0 ? Array.from(l.participants).map(e => h.default.getUser(e)).filter(p.isNotNullish) : O : O
  }, [l]), x = r.useCallback(() => {
    N.current.cancel(), L(!0)
  }, []), P = r.useCallback(() => {
    N.current.delay()
  }, []), D = r.useCallback((e, t) => {
    x(), (0, f.openContextMenuLazy)(e, async () => {
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
  }, [P, x]);
  if (0 === y.length) return null;
  if (_) return (0, a.jsx)(M, {
    maxVisibleUsers: v,
    users: y,
    guildId: s,
    channelId: t,
    className: C,
    participantType: l.type
  });
  let w = u(y).take(v).map(e => (0, a.jsx)(c.Avatar, {
    src: e.getAvatarURL(s, 24),
    "aria-label": e.username,
    size: c.AvatarSizes.SIZE_24,
    className: A.viewer
  }, e.id)).value();
  return y.length > v && (w[w.length - 1] = (0, a.jsxs)("div", {
    className: A.overflow,
    children: ["+", y.length - v + 1]
  }, "overflow")), (0, a.jsx)(E.default, {
    section: T.AnalyticsSections.STREAM_VIEWER_POPOUT,
    children: (0, a.jsx)("div", {
      onMouseEnter: x,
      onMouseLeave: P,
      children: (0, a.jsx)(c.Popout, {
        renderPopout: () => (0, a.jsx)(R, {
          participantType: l.type,
          handleUserContextMenu: D,
          guildId: s,
          channelId: t,
          users: y,
          disableInteraction: m
        }),
        shouldShow: I,
        position: "top",
        children: () => (0, a.jsx)("div", {
          className: i(A.viewers, C),
          children: w
        })
      })
    })
  })
}