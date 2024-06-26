"use strict";
n.d(t, {
  Z: function() {
    return Y
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(442837),
  u = n(481060),
  _ = n(26151),
  c = n(922555),
  d = n(287734),
  E = n(249e3),
  I = n(43267),
  T = n(933557),
  h = n(703656),
  f = n(932724),
  S = n(672339),
  N = n(898531),
  A = n(923973),
  m = n(189771),
  O = n(560688),
  p = n(871499),
  R = n(136995),
  g = n(25827),
  C = n(131951),
  v = n(594174),
  L = n(451478),
  D = n(421600),
  M = n(792125),
  P = n(358221),
  y = n(793865),
  U = n(981631),
  b = n(65154),
  G = n(689938),
  w = n(82872),
  x = n(972667);
let B = {
    width: 232,
    height: 315
  },
  k = {
    width: 232,
    height: 267
  },
  V = 475,
  Z = 267;

function H(e) {
  let {
    header: t
  } = e, n = C.Z.getCameraComponent(), s = (0, l.e7)([C.Z], () => C.Z.getVideoDeviceId()), o = (0, N.Z)();
  return r.useEffect(() => {
    let e = v.default.getCurrentUser();
    if (o && null != e) {
      let t = (0, f.P)(e);
      (0, S.FU)(t, s, {
        track: !1
      }).catch(U.dG4)
    }
  }, [o, s]), (0, i.jsxs)("div", {
    className: w.previewRoot,
    children: [(0, i.jsx)(u.Spinner, {}), (0, i.jsx)("div", {
      className: w.preview,
      children: (0, i.jsx)(n, {
        disabled: !1,
        deviceId: s,
        width: V,
        height: Z
      })
    }), (0, i.jsx)("div", {
      className: w.previewChannelHeader,
      children: t
    })]
  })
}

function F(e) {
  let {
    canVideo: t,
    channel: n,
    numVideoDevices: r
  } = e, {
    cameraUnavailable: s,
    enabled: a
  } = (0, A.Z)(), l = (0, m.Z)(n);
  return (0, i.jsxs)("div", {
    className: w.actions,
    children: [(0, i.jsx)(p.d, {
      iconComponent: u.CloseSmallIcon,
      color: "red",
      className: w.actionButton,
      label: G.Z.Messages.DISMISS,
      onClick: () => _.Z.stopRinging(n.id)
    }), t && (0, i.jsx)(u.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsx)(y.Z, {
          onClose: t
        })
      },
      position: "top",
      align: "center",
      animation: u.Popout.Animation.FADE,
      children: (e, t) => {
        let {
          onClick: o
        } = e, {
          isShown: u
        } = t;
        return (0, i.jsx)(g.C, {
          join: !0,
          enabled: a,
          color: "green",
          centerButton: !0,
          hasPermission: l,
          cameraUnavailable: s,
          channel: n,
          onPopoutClick: r > 1 ? o : null,
          className: w.actionButton,
          popoutOpen: u,
          onCameraUnavailable: O.Z,
          onChange: () => {
            d.default.selectVoiceChannel(n.id, !0), (0, h.XU)(U.ME, n.id)
          }
        })
      }
    }), (0, i.jsx)(R.Z, {
      channel: n,
      color: "green",
      centerButton: !0,
      className: o()(w.actionButton, w.last)
    })]
  })
}

function Y(e) {
  let {
    animatedStyle: t,
    y: n,
    x: s,
    channel: d
  } = e, [h, f] = r.useState(!1), S = (0, I.x)(d), N = (0, T.ZP)(d), [A, m] = (0, l.Wu)([C.Z], () => [C.Z.supports(b.AN.VIDEO), Object.keys(C.Z.getVideoDevices()).length]), O = (0, l.e7)([L.Z], () => L.Z.isFocused()), p = (0, l.e7)([P.Z], () => P.Z.getMode(d.id)), R = r.useCallback(e => {
    null != e.top && null != e.left && c.Z.move(e.left, e.top)
  }, []), g = (0, a.useSpring)({
    value: h ? 1 : 0,
    config: {
      ...a.config.stiff,
      clamp: !0
    }
  });
  r.useEffect(() => {
    let e = e => {
      e.keyCode === U.yXg.ESCAPE && _.Z.stopRinging(d.id)
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [d]);
  let v = p === U.WtW.VIDEO && A && m > 0,
    y = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(D.Z, {
        className: w.icon,
        ringing: O,
        src: null != S ? S : "",
        ringingType: D.Z.RingingType.INCOMING,
        size: h ? u.AvatarSizes.SIZE_40 : u.AvatarSizes.SIZE_80
      }), (0, i.jsxs)("div", {
        className: w.titleGroup,
        children: [(0, i.jsx)(u.Text, {
          className: w.title,
          color: "header-primary",
          variant: h ? "text-md/semibold" : "text-lg/semibold",
          children: N
        }), (0, i.jsx)(u.Text, {
          color: "header-secondary",
          className: w.subtitle,
          variant: h ? "text-sm/normal" : "text-md/normal",
          children: p === U.WtW.VOICE ? G.Z.Messages.INCOMING_CALL_ELLIPSIS : G.Z.Messages.INCOMING_VIDEO_CALL_ELLIPSIS
        })]
      })]
    }),
    Y = v ? B : k;
  return (0, i.jsx)(E.Z, {
    className: w.wrapper,
    selector: ".".concat(w.root),
    initialPosition: {
      left: s,
      top: n
    },
    maxX: window.innerWidth,
    maxY: window.innerHeight,
    onDragEnd: R,
    dragAnywhere: !0,
    children: (0, i.jsx)(i.Fragment, {
      children: (0, i.jsxs)(a.animated.div, {
        className: o()(w.root, x.elevationHigh, {
          [w.previewCamera]: h
        }, h ? (0, M.Q)("dark") : null),
        style: {
          ...t,
          width: g.value.interpolate([0, 1], [Y.width, V]),
          minHeight: g.value.interpolate([0, 1], [Y.height, Z]),
          translateX: g.value.interpolate([0, 1], [0, -1 * Math.abs(V - Y.width) / 2])
        },
        children: [h ? (0, i.jsx)(H, {
          header: y
        }) : (0, i.jsx)("div", {
          className: w.mainChannelInfo,
          children: y
        }), (0, i.jsx)(F, {
          canVideo: v,
          channel: d,
          numVideoDevices: m
        }), v && !h ? (0, i.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          fullWidth: !0,
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.PRIMARY,
          className: w.previewButton,
          onClick: () => f(!0),
          children: G.Z.Messages.INCOMING_CALL_PREVIEW_CAMERA
        }) : null]
      })
    })
  })
}