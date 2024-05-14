"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("685626"),
  l = n("442837"),
  u = n("481060"),
  d = n("26151"),
  _ = n("922555"),
  c = n("287734"),
  E = n("249000"),
  I = n("43267"),
  T = n("933557"),
  f = n("703656"),
  S = n("932724"),
  h = n("672339"),
  A = n("898531"),
  m = n("923973"),
  N = n("189771"),
  p = n("560688"),
  O = n("871499"),
  C = n("136995"),
  R = n("25827"),
  g = n("131951"),
  L = n("594174"),
  v = n("451478"),
  D = n("465670"),
  M = n("421600"),
  y = n("792125"),
  P = n("358221"),
  U = n("793865"),
  b = n("981631"),
  G = n("65154"),
  w = n("689938"),
  k = n("152435"),
  B = n("661781");
let V = {
    width: 232,
    height: 315
  },
  x = {
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
  } = e, n = g.default.getCameraComponent(), a = (0, l.useStateFromStores)([g.default], () => g.default.getVideoDeviceId()), s = (0, A.default)();
  return r.useEffect(() => {
    let e = L.default.getCurrentUser();
    if (s && null != e) {
      let t = (0, S.getLastUsedVideoBackgroundOption)(e);
      (0, h.applyBackgroundOptionPreview)(t, a, {
        track: !1
      }).catch(b.NOOP)
    }
  }, [s, a]), (0, i.jsxs)("div", {
    className: k.previewRoot,
    children: [(0, i.jsx)(u.Spinner, {}), (0, i.jsx)("div", {
      className: k.preview,
      children: (0, i.jsx)(n, {
        disabled: !1,
        deviceId: a,
        width: F.width,
        height: F.height
      })
    }), (0, i.jsx)("div", {
      className: k.previewChannelHeader,
      children: t
    })]
  })
}

function Y(e) {
  let {
    canVideo: t,
    channel: n,
    numVideoDevices: r
  } = e, {
    cameraUnavailable: a,
    enabled: o
  } = (0, m.default)(), l = (0, N.default)(n);
  return (0, i.jsxs)("div", {
    className: k.actions,
    children: [(0, i.jsx)(O.CenterControlButton, {
      iconComponent: D.default,
      color: "red",
      className: k.actionButton,
      label: w.default.Messages.DISMISS,
      onClick: () => d.default.stopRinging(n.id)
    }), t && (0, i.jsx)(u.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsx)(U.default, {
          onClose: t
        })
      },
      position: "top",
      align: "center",
      animation: u.Popout.Animation.FADE,
      children: (e, t) => {
        let {
          onClick: s
        } = e, {
          isShown: u
        } = t;
        return (0, i.jsx)(R.default, {
          join: !0,
          enabled: o,
          color: "green",
          centerButton: !0,
          hasPermission: l,
          cameraUnavailable: a,
          channel: n,
          onPopoutClick: r > 1 ? s : null,
          className: k.actionButton,
          popoutOpen: u,
          onCameraUnavailable: p.default,
          onChange: () => {
            c.default.selectVoiceChannel(n.id, !0), (0, f.transitionToGuild)(b.ME, n.id)
          }
        })
      }
    }), (0, i.jsx)(C.default, {
      channel: n,
      color: "green",
      centerButton: !0,
      className: s()(k.actionButton, k.last)
    })]
  })
}

function j(e) {
  let {
    animatedStyle: t,
    y: n,
    x: a,
    channel: c
  } = e, [f, S] = r.useState(!1), h = (0, I.getChannelIconURL)(c), A = (0, T.default)(c), [m, N] = (0, l.useStateFromStoresArray)([g.default], () => [g.default.supports(G.Features.VIDEO), Object.keys(g.default.getVideoDevices()).length]), p = (0, l.useStateFromStores)([v.default], () => v.default.isFocused()), O = (0, l.useStateFromStores)([P.default], () => P.default.getMode(c.id)), C = r.useCallback(e => {
    null != e.top && null != e.left && _.default.move(e.left, e.top)
  }, []), R = (0, o.useSpring)({
    value: f ? 1 : 0,
    config: {
      ...o.config.stiff,
      clamp: !0
    }
  });
  r.useEffect(() => {
    let e = e => {
      e.keyCode === b.KeyboardKeys.ESCAPE && d.default.stopRinging(c.id)
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [c]);
  let L = O === b.ChannelModes.VIDEO && m && N > 0,
    D = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(M.default, {
        className: k.icon,
        ringing: p,
        src: null != h ? h : "",
        ringingType: M.default.RingingType.INCOMING,
        size: f ? u.AvatarSizes.SIZE_40 : u.AvatarSizes.SIZE_80
      }), (0, i.jsxs)("div", {
        className: k.titleGroup,
        children: [(0, i.jsx)(u.Text, {
          className: k.title,
          color: "header-primary",
          variant: f ? "text-md/semibold" : "text-lg/semibold",
          children: A
        }), (0, i.jsx)(u.Text, {
          color: "header-secondary",
          className: k.subtitle,
          variant: f ? "text-sm/normal" : "text-md/normal",
          children: O === b.ChannelModes.VOICE ? w.default.Messages.INCOMING_CALL_ELLIPSIS : w.default.Messages.INCOMING_VIDEO_CALL_ELLIPSIS
        })]
      })]
    }),
    U = L ? V : x;
  return (0, i.jsx)(E.default, {
    className: k.wrapper,
    selector: ".".concat(k.root),
    initialPosition: {
      left: a,
      top: n
    },
    maxX: window.innerWidth,
    maxY: window.innerHeight,
    onDragEnd: C,
    dragAnywhere: !0,
    children: (0, i.jsx)(i.Fragment, {
      children: (0, i.jsxs)(o.animated.div, {
        className: s()(k.root, B.elevationHigh, {
          [k.previewCamera]: f
        }, f ? (0, y.getThemeClass)("dark") : null),
        style: {
          ...t,
          width: R.value.interpolate([0, 1], [U.width, F.width]),
          minHeight: R.value.interpolate([0, 1], [U.height, F.height]),
          translateX: R.value.interpolate([0, 1], [0, -1 * Math.abs(F.width - U.width) / 2])
        },
        children: [f ? (0, i.jsx)(H, {
          header: D
        }) : (0, i.jsx)("div", {
          className: k.mainChannelInfo,
          children: D
        }), (0, i.jsx)(Y, {
          canVideo: L,
          channel: c,
          numVideoDevices: N
        }), L && !f ? (0, i.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          fullWidth: !0,
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.PRIMARY,
          className: k.previewButton,
          onClick: () => S(!0),
          children: w.default.Messages.INCOMING_CALL_PREVIEW_CAMERA
        }) : null]
      })
    })
  })
}