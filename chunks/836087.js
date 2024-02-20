"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("70102"), n("222007");
var a = n("37983"),
  r = n("884691"),
  s = n("414456"),
  i = n.n(s),
  l = n("917351"),
  o = n.n(l),
  u = n("446674"),
  d = n("862337"),
  c = n("77078"),
  f = n("272030"),
  h = n("901582"),
  p = n("373469"),
  m = n("697218"),
  C = n("427302"),
  E = n("462579"),
  g = n("449008"),
  S = n("387111"),
  v = n("99795"),
  _ = n("49111"),
  T = n("782340"),
  A = n("964376");

function I(e, t) {
  switch (e) {
    case v.ParticipantTypes.ACTIVITY:
      return T.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
        numUsers: t
      });
    case v.ParticipantTypes.STREAM:
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
    participantType: s,
    channelId: l,
    handleUserContextMenu: o
  } = e, u = I(s, t.length);
  return (0, a.jsx)(c.Dialog, {
    "aria-label": u,
    className: A.popoutWrapper,
    children: (0, a.jsxs)(c.Scroller, {
      className: A.scroller,
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-deprecated-12/semibold",
        className: A.memberListHeader,
        children: u
      }), (0, a.jsx)("div", {
        children: t.map(e => (0, a.jsx)(C.default, {
          guildId: null != r ? r : void 0,
          className: i(A.memberListItem, {
            [A.popoutDisabled]: n
          }),
          textClassName: A.memberListItemText,
          user: e,
          disablePopout: n,
          nick: S.default.getNickname(r, l, e),
          onContextMenu: t => n ? null : o(t, e)
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
    maxVisibleUsers: s = 3,
    className: l,
    participantType: o
  } = e, u = I(o, t.length), d = t.length < s ? t.map(e => (0, a.jsx)("div", {
    className: A.viewersTooltipItem,
    children: S.default.getName(n, r, e)
  }, e.id)) : u;
  return (0, a.jsx)(c.TooltipContainer, {
    text: d,
    "aria-label": u,
    children: (0, a.jsxs)("div", {
      className: i(A.viewers, l),
      children: [(0, a.jsx)(E.default, {
        className: A.viewersIcon
      }), (0, a.jsx)("span", {
        "aria-hidden": "true",
        children: t.length
      })]
    })
  })
}
let y = [];

function R(e) {
  let {
    channelId: t,
    guildId: s,
    participant: l,
    className: C,
    compact: E = !1,
    disableInteraction: S = !1,
    maxVisibleUsers: T = 3
  } = e, [I, R] = r.useState(!1), L = r.useRef(new d.DelayedCall(150, () => R(!1))), N = (0, u.useStateFromStoresArray)([p.default, m.default], () => {
    if (l.type === v.ParticipantTypes.STREAM) {
      let e = p.default.getViewerIds(l.id);
      return e.length > 0 ? e.map(e => m.default.getUser(e)).filter(g.isNotNullish) : y
    }
    return l.type === v.ParticipantTypes.ACTIVITY ? l.participants.size > 0 ? Array.from(l.participants).map(e => m.default.getUser(e)).filter(g.isNotNullish) : y : y
  }, [l]), O = r.useCallback(() => {
    L.current.cancel(), R(!0)
  }, []), P = r.useCallback(() => {
    L.current.delay()
  }, []), b = r.useCallback((e, t) => {
    O(), (0, f.openContextMenuLazy)(e, async () => {
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
  }, [P, O]);
  if (0 === N.length) return null;
  if (E) return (0, a.jsx)(x, {
    maxVisibleUsers: T,
    users: N,
    guildId: s,
    channelId: t,
    className: C,
    participantType: l.type
  });
  let D = o(N).take(T).map(e => (0, a.jsx)(c.Avatar, {
    src: e.getAvatarURL(s, 24),
    "aria-label": e.username,
    size: c.AvatarSizes.SIZE_24,
    className: A.viewer
  }, e.id)).value();
  return N.length > T && (D[D.length - 1] = (0, a.jsxs)("div", {
    className: A.overflow,
    children: ["+", N.length - T + 1]
  }, "overflow")), (0, a.jsx)(h.default, {
    section: _.AnalyticsSections.STREAM_VIEWER_POPOUT,
    children: (0, a.jsx)("div", {
      onMouseEnter: O,
      onMouseLeave: P,
      children: (0, a.jsx)(c.Popout, {
        renderPopout: () => (0, a.jsx)(M, {
          participantType: l.type,
          handleUserContextMenu: b,
          guildId: s,
          channelId: t,
          users: N,
          disableInteraction: S
        }),
        shouldShow: I,
        position: "top",
        children: () => (0, a.jsx)("div", {
          className: i(A.viewers, C),
          children: D
        })
      })
    })
  })
}