n.d(t, {
  be: function() {
    return y
  }
}), n(47120), n(773603);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(848246),
  o = n(793030),
  c = n(442837),
  u = n(46973),
  d = n(481060),
  h = n(846027),
  m = n(607070),
  p = n(361291),
  E = n(131951),
  g = n(626135),
  f = n(120522),
  C = n(386542),
  _ = n(933843),
  I = n(485731),
  x = n(1163),
  T = n(738672),
  N = n(981631),
  Z = n(37113),
  S = n(689938),
  v = n(778855);
let A = async () => {
  let {
    default: e
  } = await n.e("21812").then(n.t.bind(n, 741855, 19));
  return e
};

function M(e) {
  let {
    className: t,
    onDismiss: n
  } = e;
  return (0, l.jsx)(d.Button, {
    className: t,
    "aria-label": S.Z.Messages.CLOSE,
    look: d.Button.Looks.BLANK,
    size: d.Button.Sizes.NONE,
    onClick: n,
    children: (0, l.jsx)(d.CloseSmallIcon, {
      size: "xs",
      className: v.closeIcon,
      color: "white"
    })
  })
}
let R = Z.LY.RESOLUTION_1440,
  j = Z.ws.FPS_60;

function L(e) {
  let {
    channel: t
  } = e, n = (0, c.e7)([m.Z], () => m.Z.useReducedMotion), [s, a] = i.useState(!1), {
    preset: o
  } = (0, c.cj)([p.Z], () => p.Z.getState()), C = (0, c.e7)([E.Z], () => E.Z.getGoLiveSource()), x = i.useCallback(() => {
    a(!0), (0, f.S)(r.q.STREAM_HIGH_QUALITY).then(e => {
      if (e) {
        if ((0, I.J1)(!(0, _.mc)(R, j)), g.default.track(N.rMx.PERK_DEMO_OFFER_ACCEPTED, {
            guild_id: t.guild_id,
            channel_id: t.id,
            perk_type: r.q.STREAM_HIGH_QUALITY,
            resolution: R,
            max_fps: j
          }), (0, I.cD)(!1), null == C) return;
        let e = {
          qualityOptions: {
            preset: o,
            resolution: R,
            frameRate: j
          },
          context: u.Yn.STREAM
        };
        null != C.desktopSource ? e.desktopSettings = {
          sourceId: C.desktopSource.id,
          sound: !0
        } : null != C.cameraSource && (e.cameraSettings = {
          videoDeviceGuid: C.cameraSource.videoDeviceGuid,
          audioDeviceGuid: C.cameraSource.audioDeviceGuid
        }), h.Z.setGoLiveSource(e)
      }
    }).catch(() => {}).finally(() => {
      a(!1)
    })
  }, [o, t, C]);
  return (0, l.jsx)(d.ShinyButton, {
    fullWidth: !0,
    pauseAnimation: n,
    color: d.Button.Colors.GREEN,
    size: d.Button.Sizes.SMALL,
    className: v.optInButton,
    onClick: x,
    submitting: s,
    children: S.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_POPOUT_CTA
  })
}

function O(e) {
  let {
    channel: t,
    hidden: n,
    onDismiss: i
  } = e, s = (0, c.e7)([m.Z], () => m.Z.useReducedMotion);
  return (0, l.jsxs)("div", {
    className: a()(v.optInPopout, {
      [v.hidden]: n
    }),
    children: [(0, l.jsxs)("div", {
      className: v.variant1InfoContainerParent,
      children: [(0, l.jsxs)("div", {
        className: v.variant1InfoContainer,
        children: [(0, l.jsx)(d.LottieAnimation, {
          importData: A,
          shouldAnimate: !s,
          className: v.lottie,
          loop: !0
        }), (0, l.jsx)(o.x, {
          className: v.variant1Text,
          variant: "text-sm/medium",
          children: S.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_POPOUT_BODY
        })]
      }), (0, l.jsx)("div", {
        children: (0, l.jsx)(M, {
          className: v.variant1CloseButton,
          onDismiss: i
        })
      })]
    }), (0, l.jsx)(L, {
      channel: t
    })]
  })
}

function P(e) {
  let {
    channel: t,
    hidden: n,
    onDismiss: i
  } = e;
  return (0, l.jsxs)("div", {
    className: a()(v.optInPopout, v.variant2OptInPopout, {
      [v.hidden]: n
    }),
    children: [(0, l.jsx)("img", {
      className: v.image,
      src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
      alt: "HD Streaming Nitro Perk"
    }), (0, l.jsx)(M, {
      className: v.variant2CloseButton,
      onDismiss: i
    }), (0, l.jsx)("div", {
      className: v.variant2InfoContainerParent,
      children: (0, l.jsxs)("div", {
        className: v.variant2InfoContainer,
        children: [(0, l.jsx)(o.x, {
          className: v.variant2Text,
          variant: "text-sm/medium",
          children: S.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_POPOUT_BODY
        }), (0, l.jsx)(L, {
          channel: t
        })]
      })
    })]
  })
}

function y(e) {
  let {
    channel: t,
    ...n
  } = e, {
    hqStreamingState: {
      hqStreamingOptOutPopoutShouldShow: s
    }
  } = (0, C.k)(r.q.STREAM_HIGH_QUALITY), {
    enabled: a,
    variant1: o
  } = x.Z.useExperiment({
    location: "StreamButtonDemoOptInPopout"
  }, {
    autoTrackExposure: s,
    disable: !s
  }), c = i.useRef(!1);
  if (i.useEffect(() => {
      s && a && !c.current && (c.current = !0, g.default.track(N.rMx.PERK_DEMO_OFFER_VIEWED, {
        guild_id: t.guild_id,
        channel_id: t.id,
        perk_type: r.q.STREAM_HIGH_QUALITY
      }))
    }, [s, a, t]), !s || !a) return null;
  let u = o ? O : P;
  return (0, l.jsx)(T.h, {
    ...n,
    renderComponent: e => (0, l.jsx)(u, {
      ...e,
      channel: t
    })
  })
}