"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(475179),
  u = n(871499),
  _ = n(689938),
  c = n(680859);

function d(e) {
  let {
    className: t,
    isVertical: n
  } = e;
  return (0, i.jsxs)("div", {
    className: c.iconContainer,
    children: [(0, i.jsx)(a.ChevronSmallDownIcon, {
      size: "md",
      color: "currentColor",
      className: o()(n ? c.upCaret : c.leftCaret, t)
    }), (0, i.jsx)(a.GroupIcon, {
      size: "md",
      color: "currentColor",
      className: o()(c.members, t)
    })]
  })
}

function E(e) {
  let {
    className: t,
    isVertical: n
  } = e;
  return (0, i.jsxs)("div", {
    className: c.iconContainer,
    children: [(0, i.jsx)(a.ChevronSmallDownIcon, {
      size: "md",
      color: "currentColor",
      className: o()(n ? c.downCaret : c.rightCaret, t)
    }), n && (0, i.jsx)(a.GroupIcon, {
      size: "md",
      color: "currentColor",
      className: o()(c.members, t)
    })]
  })
}

function I(e) {
  let {
    channelId: t,
    className: n,
    isParticipantsOpen: s,
    isVertical: a = !1,
    hideTooltip: I = !1
  } = e, T = r.useCallback(e => {
    let {
      className: t
    } = e;
    return s ? (0, i.jsx)(E, {
      className: t,
      isVertical: a
    }) : (0, i.jsx)(d, {
      className: t,
      isVertical: a
    })
  }, [s, a]);
  return (0, i.jsx)(u.Z, {
    label: s ? _.Z.Messages.VIDEO_CALL_HIDE_MEMBERS : _.Z.Messages.VIDEO_CALL_SHOW_MEMBERS,
    className: o()(c.participantsButton, n),
    onClick: function() {
      l.Z.toggleParticipants(t, !s)
    },
    iconComponent: T,
    shouldShowTooltip: !I
  })
}