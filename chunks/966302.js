"use strict";
a.r(t), a.d(t, {
  default: function() {
    return Y
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("718017"),
  o = a("442837"),
  u = a("481060"),
  d = a("26151"),
  c = a("922555"),
  f = a("287734"),
  E = a("249000"),
  h = a("43267"),
  _ = a("933557"),
  C = a("703656"),
  m = a("932724"),
  S = a("672339"),
  p = a("898531"),
  I = a("923973"),
  g = a("189771"),
  T = a("560688"),
  A = a("871499"),
  N = a("136995"),
  v = a("25827"),
  L = a("131951"),
  R = a("594174"),
  O = a("451478"),
  M = a("465670"),
  P = a("421600"),
  x = a("792125"),
  y = a("358221"),
  D = a("793865"),
  b = a("981631"),
  U = a("65154"),
  j = a("689938"),
  G = a("746302"),
  w = a("976587");
let k = {
    width: 232,
    height: 315
  },
  B = {
    width: 232,
    height: 267
  },
  F = {
    width: 475,
    height: 267
  };

function H(e) {
  let {
    header: t
  } = e, a = L.default.getCameraComponent(), l = (0, o.useStateFromStores)([L.default], () => L.default.getVideoDeviceId()), i = (0, p.default)();
  return s.useEffect(() => {
    let e = R.default.getCurrentUser();
    if (i && null != e) {
      let t = (0, m.getLastUsedVideoBackgroundOption)(e);
      (0, S.applyBackgroundOptionPreview)(t, l, {
        track: !1
      }).catch(b.NOOP)
    }
  }, [i, l]), (0, n.jsxs)("div", {
    className: G.previewRoot,
    children: [(0, n.jsx)(u.Spinner, {}), (0, n.jsx)("div", {
      className: G.preview,
      children: (0, n.jsx)(a, {
        disabled: !1,
        deviceId: l,
        width: F.width,
        height: F.height
      })
    }), (0, n.jsx)("div", {
      className: G.previewChannelHeader,
      children: t
    })]
  })
}

function V(e) {
  let {
    canVideo: t,
    channel: a,
    numVideoDevices: s
  } = e, {
    cameraUnavailable: l,
    enabled: r
  } = (0, I.default)(), o = (0, g.default)(a);
  return (0, n.jsxs)("div", {
    className: G.actions,
    children: [(0, n.jsx)(A.CenterControlButton, {
      iconComponent: M.default,
      color: "red",
      className: G.actionButton,
      label: j.default.Messages.DISMISS,
      onClick: () => d.default.stopRinging(a.id)
    }), t && (0, n.jsx)(u.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, n.jsx)(D.default, {
          onClose: t
        })
      },
      position: "top",
      align: "center",
      animation: u.Popout.Animation.FADE,
      children: (e, t) => {
        let {
          onClick: i
        } = e, {
          isShown: u
        } = t;
        return (0, n.jsx)(v.default, {
          join: !0,
          enabled: r,
          color: "green",
          centerButton: !0,
          hasPermission: o,
          cameraUnavailable: l,
          channel: a,
          onPopoutClick: s > 1 ? i : null,
          className: G.actionButton,
          popoutOpen: u,
          onCameraUnavailable: T.default,
          onChange: () => {
            f.default.selectVoiceChannel(a.id, !0), (0, C.transitionToGuild)(b.ME, a.id)
          }
        })
      }
    }), (0, n.jsx)(N.default, {
      channel: a,
      color: "green",
      centerButton: !0,
      className: i()(G.actionButton, G.last)
    })]
  })
}

function Y(e) {
  let {
    animatedStyle: t,
    y: a,
    x: l,
    channel: f
  } = e, [C, m] = s.useState(!1), S = (0, h.getChannelIconURL)(f), p = (0, _.default)(f), [I, g] = (0, o.useStateFromStoresArray)([L.default], () => [L.default.supports(U.Features.VIDEO), Object.keys(L.default.getVideoDevices()).length]), T = (0, o.useStateFromStores)([O.default], () => O.default.isFocused()), A = (0, o.useStateFromStores)([y.default], () => y.default.getMode(f.id)), N = s.useCallback(e => {
    null != e.top && null != e.left && c.default.move(e.left, e.top)
  }, []), v = (0, r.useSpring)({
    value: C ? 1 : 0,
    config: {
      ...r.config.stiff,
      clamp: !0
    }
  });
  s.useEffect(() => {
    let e = e => {
      e.keyCode === b.KeyboardKeys.ESCAPE && d.default.stopRinging(f.id)
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [f]);
  let R = A === b.ChannelModes.VIDEO && I && g > 0,
    M = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(P.default, {
        className: G.icon,
        ringing: T,
        src: null != S ? S : "",
        ringingType: P.default.RingingType.INCOMING,
        size: C ? u.AvatarSizes.SIZE_40 : u.AvatarSizes.SIZE_80
      }), (0, n.jsxs)("div", {
        className: G.titleGroup,
        children: [(0, n.jsx)(u.Text, {
          className: G.title,
          color: "header-primary",
          variant: C ? "text-md/semibold" : "text-lg/semibold",
          children: p
        }), (0, n.jsx)(u.Text, {
          color: "header-secondary",
          className: G.subtitle,
          variant: C ? "text-sm/normal" : "text-md/normal",
          children: A === b.ChannelModes.VOICE ? j.default.Messages.INCOMING_CALL_ELLIPSIS : j.default.Messages.INCOMING_VIDEO_CALL_ELLIPSIS
        })]
      })]
    }),
    D = R ? k : B;
  return (0, n.jsx)(E.default, {
    className: G.wrapper,
    selector: ".".concat(G.root),
    initialPosition: {
      left: l,
      top: a
    },
    maxX: window.innerWidth,
    maxY: window.innerHeight,
    onDragEnd: N,
    dragAnywhere: !0,
    children: (0, n.jsx)(n.Fragment, {
      children: (0, n.jsxs)(r.animated.div, {
        className: i()(G.root, w.elevationHigh, {
          [G.previewCamera]: C
        }, C ? (0, x.getThemeClass)("dark") : null),
        style: {
          ...t,
          width: v.value.interpolate([0, 1], [D.width, F.width]),
          minHeight: v.value.interpolate([0, 1], [D.height, F.height]),
          translateX: v.value.interpolate([0, 1], [0, -1 * Math.abs(F.width - D.width) / 2])
        },
        children: [C ? (0, n.jsx)(H, {
          header: M
        }) : (0, n.jsx)("div", {
          className: G.mainChannelInfo,
          children: M
        }), (0, n.jsx)(V, {
          canVideo: R,
          channel: f,
          numVideoDevices: g
        }), R && !C ? (0, n.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          fullWidth: !0,
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.PRIMARY,
          className: G.previewButton,
          onClick: () => m(!0),
          children: j.default.Messages.INCOMING_CALL_PREVIEW_CAMERA
        }) : null]
      })
    })
  })
}