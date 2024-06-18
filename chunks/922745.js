"use strict";
n.d(t, {
  Z: function() {
    return N
  },
  r: function() {
    return f
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(692547),
  l = n(215569),
  u = n(481060),
  _ = n(19780),
  c = n(285952),
  d = n(470441),
  E = n(727218),
  I = n(540028),
  T = n(507675),
  h = n(689938),
  S = n(910310);

function f(e) {
  let {
    title: t,
    onJumpToChannel: n,
    idle: r,
    preventIdleComponent: s
  } = e, l = (0, o.e7)([_.Z], () => _.Z.getChannelId()), c = null != l ? (0, i.jsx)(I.Z, {
    voiceChannelId: l,
    idle: r
  }) : null;
  return (0, i.jsxs)(s, {
    className: S.headerIdleContainer,
    children: [(0, i.jsxs)(u.Clickable, {
      className: S.headerTitle,
      onClick: n,
      children: [(0, i.jsx)(u.ArrowSmallLeftIcon, {
        size: "custom",
        color: "currentColor",
        "aria-label": h.Z.Messages.OPEN_IN_THEATER,
        className: S.backButton,
        width: 20,
        height: 20
      }), (0, i.jsx)(E.Z, {
        className: S.headerText,
        size: E.Z.Sizes.SIZE_16,
        color: a.Z.unsafe_rawColors.WHITE_500.css,
        children: t
      })]
    }), c]
  })
}

function N(e) {
  let {
    children: t,
    idle: n,
    onJumpToChannel: r,
    backgroundKey: o,
    onActive: a,
    onForceIdle: u,
    renderBottomLeftControls: _,
    renderBottomRightControls: E,
    screenMessage: I,
    hideControls: h = !1,
    className: N,
    innerClassName: A,
    ...m
  } = e;
  return (0, i.jsxs)("div", {
    onMouseMove: a,
    onMouseDown: a,
    onMouseLeave: u,
    className: s()(S.pictureInPictureVideo, {
      [S.idle]: n
    }, N),
    onDoubleClick: r,
    children: [(0, i.jsx)(l.W, {
      children: (0, i.jsx)(d.B, {
        className: A,
        children: t
      }, o)
    }), null != I ? (0, i.jsx)(T.Z, {
      size: "small",
      ...I
    }) : null, !h && (0, i.jsxs)("div", {
      className: S.videoControls,
      children: [(0, i.jsx)("div", {
        className: S.topControls,
        children: (0, i.jsx)(f, {
          idle: n,
          onJumpToChannel: r,
          ...m
        })
      }), (0, i.jsxs)("div", {
        className: S.bottomControls,
        children: [(0, i.jsx)(c.Z, {
          grow: 0,
          shrink: 1,
          basis: "50%",
          align: c.Z.Align.CENTER,
          className: S.bottomLeftControls,
          children: null == _ ? void 0 : _()
        }), (0, i.jsx)(c.Z, {
          grow: 0,
          shrink: 1,
          justify: c.Z.Justify.END,
          basis: "50%",
          align: c.Z.Align.CENTER,
          children: null == E ? void 0 : E()
        })]
      })]
    })]
  })
}