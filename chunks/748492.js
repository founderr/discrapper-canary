"use strict";
n.d(t, {
  Ds: function() {
    return b
  },
  YB: function() {
    return y
  },
  of: function() {
    return G
  },
  q5: function() {
    return U
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(846027),
  u = n(40851),
  _ = n(835473),
  c = n(221888),
  d = n(788983),
  E = n(189771),
  I = n(560688),
  T = n(618158),
  h = n(922745),
  S = n(871499),
  f = n(402113),
  N = n(800965),
  A = n(157813),
  m = n(25827),
  O = n(131951),
  R = n(285952),
  p = n(602623),
  g = n(349619),
  C = n(981631),
  v = n(231338),
  L = n(689938),
  D = n(483889),
  M = n(910310);

function P(e) {
  let {
    onClick: t,
    isExpanded: n
  } = e;
  return (0, i.jsx)(S.Z, {
    iconClassName: s()(D.arrowIcon, {
      [D.arrowIconExpanded]: n
    }),
    onClick: t,
    iconComponent: a.ChevronSmallDownIcon,
    label: n ? L.Z.Messages.PICTURE_IN_PICTURE_COLLAPSE : L.Z.Messages.PICTURE_IN_PICTURE_EXPAND
  })
}

function y(e) {
  var t, n;
  let {
    channel: r,
    applicationId: s,
    onMouseDown: a,
    onMouseMove: S,
    onMouseLeave: A,
    onJumpToChannel: p,
    idle: L,
    selectedParticipant: P
  } = e, y = (0, u.bp)() === C.IlC.POPOUT, U = (0, o.e7)([O.Z], () => O.Z.isVideoEnabled()), b = (0, o.e7)([O.Z], () => Object.values(O.Z.getVideoDevices())[0]), G = !1 === (null === (t = null == b ? void 0 : b.disabled) || void 0 === t || t), w = (0, _.Z)([s])[0], k = (0, E.Z)(r), B = e => {
    l.Z.setVideoEnabled(e)
  };
  return (0, i.jsxs)("div", {
    className: M.videoControls,
    onMouseMove: S,
    onMouseDown: a,
    onMouseLeave: A,
    children: [(0, i.jsx)("div", {
      className: M.topControls,
      children: (0, i.jsx)(h.r, {
        idle: L,
        title: null !== (n = null == w ? void 0 : w.name) && void 0 !== n ? n : r.name,
        onJumpToChannel: p,
        preventIdleComponent: T.Z
      })
    }), (0, i.jsxs)("div", {
      className: M.bottomControls,
      children: [(0, i.jsxs)(R.Z, {
        grow: 0,
        shrink: 1,
        basis: "50%",
        align: R.Z.Align.CENTER,
        children: [(0, i.jsx)(m.C, {
          className: D.leftPipIcon,
          enabled: U,
          cameraUnavailable: !G,
          hasPermission: k,
          onChange: B,
          onCameraUnavailable: () => {
            G ? B(!0) : (0, I.Z)()
          }
        }), (0, i.jsx)(T.Z, {
          children: (0, i.jsx)(c.Z, {
            channelId: r.id,
            guildId: r.getGuildId(),
            className: M.__invalid_leftTrayIcon,
            participant: P,
            compact: !0
          })
        })]
      }), (0, i.jsxs)(R.Z, {
        grow: 0,
        shrink: 1,
        justify: R.Z.Justify.END,
        basis: "50%",
        align: R.Z.Align.CENTER,
        children: [y ? null : (0, i.jsx)(N.Z, {
          className: D.rightPipIcon,
          popoutOpen: !1,
          onOpenPopout: () => {
            (0, g.Z)(() => d.hP(r))
          },
          onClosePopout: v.Vq
        }), (0, i.jsx)(f.Z, {
          applicationId: s,
          channelId: r.id,
          className: D.rightPipIcon
        })]
      })]
    })]
  })
}

function U(e) {
  var t;
  let {
    channel: n,
    applicationId: r,
    onMouseDown: o,
    onMouseMove: l,
    onMouseLeave: u,
    onJumpToChannel: c,
    idle: d,
    users: E
  } = e, I = (0, _.Z)([r])[0];
  return (0, i.jsxs)(a.Clickable, {
    className: s()(M.videoControls, M.videoControlsTextActivity),
    onMouseMove: l,
    onMouseDown: o,
    onMouseLeave: u,
    onDoubleClick: c,
    children: [(0, i.jsx)("div", {
      className: s()(M.topControls),
      children: (0, i.jsx)(h.r, {
        idle: d,
        title: null !== (t = null == I ? void 0 : I.name) && void 0 !== t ? t : n.name,
        onJumpToChannel: c,
        preventIdleComponent: T.Z
      })
    }), (0, i.jsxs)("div", {
      className: M.bottomControls,
      children: [(0, i.jsx)(p.Z, {
        renderIcon: !1,
        users: E,
        size: 24,
        max: 3,
        className: D.__invalid_userSummaryContainer
      }), (0, i.jsx)(f.Z, {
        applicationId: r,
        channelId: n.id,
        iconClassName: D.leaveActivityIcon,
        isActive: !0
      })]
    })]
  })
}

function b(e) {
  let {
    channelId: t,
    participantsOpen: n,
    showToggleParticipants: r
  } = e;
  return r ? (0, i.jsx)(A.Z, {
    channelId: t,
    isParticipantsOpen: n,
    className: D.participantsButton
  }) : null
}

function G(e) {
  var t;
  let {
    onMouseDown: n,
    onMouseMove: r,
    onMouseLeave: o,
    showControls: l,
    applicationId: u,
    channel: c,
    onJumpToChannel: d,
    onToggleHeight: E,
    isExpanded: I,
    hideExpandedButton: S
  } = e, N = (0, _.Z)([u])[0];
  return (0, i.jsx)("div", {
    className: D.pipHeader,
    onMouseMove: r,
    onMouseDown: n,
    onMouseLeave: o,
    children: (0, i.jsxs)("div", {
      className: s()(M.topControls, D.pipHeaderContent, {
        [D.pipHeaderContentOpen]: l
      }),
      children: [!l && (0, i.jsx)(a.MoreHorizontalIcon, {
        size: "xxs",
        color: "currentColor",
        className: D.menuIcon
      }), l && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(h.r, {
          idle: !l,
          title: null !== (t = null == N ? void 0 : N.name) && void 0 !== t ? t : c.name,
          onJumpToChannel: d,
          preventIdleComponent: T.Z
        }), (0, i.jsxs)("div", {
          className: D.pipHeaderButtonsRight,
          children: [S ? null : (0, i.jsx)(P, {
            isExpanded: I,
            onClick: E
          }), (0, i.jsx)(f.Z, {
            applicationId: u,
            channelId: c.id,
            iconClassName: D.leaveActivityIcon
          })]
        })]
      })]
    })
  })
}