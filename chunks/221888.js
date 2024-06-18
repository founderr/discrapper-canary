"use strict";
n.d(t, {
  Z: function() {
    return v
  }
}), n(411104), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(846519),
  c = n(481060),
  d = n(239091),
  E = n(410575),
  I = n(199902),
  T = n(594174),
  h = n(321148),
  S = n(823379),
  f = n(5192),
  N = n(354459),
  A = n(981631),
  m = n(689938),
  O = n(530175);

function R(e, t) {
  switch (e) {
    case N.fO.ACTIVITY:
      return m.Z.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
        numUsers: t
      });
    case N.fO.STREAM:
      return m.Z.Messages.SPECTATORS.format({
        numViewers: t
      });
    default:
      throw Error("Unknown participant type.")
  }
}

function p(e) {
  let {
    users: t,
    disableInteraction: n,
    guildId: r,
    participantType: s,
    channelId: a,
    handleUserContextMenu: l
  } = e, u = R(s, t.length);
  return (0, i.jsx)(c.Dialog, {
    "aria-label": u,
    className: O.popoutWrapper,
    children: (0, i.jsxs)(c.Scroller, {
      className: O.scroller,
      children: [(0, i.jsx)(c.Heading, {
        variant: "heading-deprecated-12/semibold",
        className: O.memberListHeader,
        children: u
      }), (0, i.jsx)("div", {
        children: t.map(e => (0, i.jsx)(h.Z, {
          guildId: null != r ? r : void 0,
          className: o()(O.memberListItem, {
            [O.popoutDisabled]: n
          }),
          textClassName: O.memberListItemText,
          user: e,
          disablePopout: n,
          nick: f.ZP.getNickname(r, a, e),
          onContextMenu: t => n ? null : l(t, e)
        }, e.id))
      })]
    })
  })
}

function g(e) {
  let {
    users: t,
    guildId: n,
    channelId: r,
    maxVisibleUsers: s = 3,
    className: a,
    participantType: l
  } = e, u = R(l, t.length), _ = t.length < s ? t.map(e => (0, i.jsx)("div", {
    className: O.viewersTooltipItem,
    children: f.ZP.getName(n, r, e)
  }, e.id)) : u;
  return (0, i.jsx)(c.TooltipContainer, {
    text: _,
    "aria-label": u,
    children: (0, i.jsxs)("div", {
      className: o()(O.viewers, a),
      children: [(0, i.jsx)(c.EyeIcon, {
        size: "xs",
        color: "currentColor",
        className: O.viewersIcon
      }), (0, i.jsx)("span", {
        "aria-hidden": "true",
        children: t.length
      })]
    })
  })
}
let C = [];

function v(e) {
  let {
    channelId: t,
    guildId: s,
    participant: a,
    className: h,
    compact: f = !1,
    disableInteraction: m = !1,
    maxVisibleUsers: R = 3
  } = e, [v, L] = r.useState(!1), D = r.useRef(new _.sW(150, () => L(!1))), M = (0, u.Wu)([I.Z, T.default], () => {
    if (a.type === N.fO.STREAM) {
      let e = I.Z.getViewerIds(a.id);
      return e.length > 0 ? e.map(e => T.default.getUser(e)).filter(S.lm) : C
    }
    return a.type === N.fO.ACTIVITY ? a.participants.length > 0 ? Array.from(a.participants).map(e => T.default.getUser(e.userId)).filter(S.lm) : C : C
  }, [a]), P = r.useCallback(() => {
    D.current.cancel(), L(!0)
  }, []), y = r.useCallback(() => {
    D.current.delay()
  }, []), U = r.useCallback((e, t) => {
    P(), (0, d.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("15421")]).then(n.bind(n, 881351));
      return n => (0, i.jsx)(e, {
        ...n,
        user: t
      })
    }, {
      onClose: y
    })
  }, [y, P]);
  if (0 === M.length) return null;
  if (f) return (0, i.jsx)(g, {
    maxVisibleUsers: R,
    users: M,
    guildId: s,
    channelId: t,
    className: h,
    participantType: a.type
  });
  let b = l()(M).take(R).map(e => (0, i.jsx)(c.Avatar, {
    src: e.getAvatarURL(s, 24),
    "aria-label": e.username,
    size: c.AvatarSizes.SIZE_24,
    className: O.viewer
  }, e.id)).value();
  return M.length > R && (b[b.length - 1] = (0, i.jsxs)("div", {
    className: O.overflow,
    children: ["+", M.length - R + 1]
  }, "overflow")), (0, i.jsx)(E.Z, {
    section: A.jXE.STREAM_VIEWER_POPOUT,
    children: (0, i.jsx)("div", {
      onMouseEnter: P,
      onMouseLeave: y,
      children: (0, i.jsx)(c.Popout, {
        renderPopout: () => (0, i.jsx)(p, {
          participantType: a.type,
          handleUserContextMenu: U,
          guildId: s,
          channelId: t,
          users: M,
          disableInteraction: m
        }),
        shouldShow: v,
        position: "top",
        children: () => (0, i.jsx)("div", {
          className: o()(O.viewers, h),
          children: b
        })
      })
    })
  })
}