n.d(t, {
  be: function() {
return O;
  }
}), n(47120), n(773603);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(848246),
  o = n(793030),
  c = n(442837),
  u = n(46973),
  d = n(481060),
  h = n(846027),
  p = n(607070),
  m = n(361291),
  _ = n(131951),
  f = n(626135),
  E = n(120522),
  g = n(386542),
  C = n(933843),
  I = n(485731),
  x = n(1163),
  T = n(738672),
  N = n(981631),
  v = n(37113),
  S = n(689938),
  Z = n(782783);
let A = async () => {
  let {
default: e
  } = await n.e('21812').then(n.t.bind(n, 741855, 19));
  return e;
};

function M(e) {
  let {
className: t,
onDismiss: n
  } = e;
  return (0, i.jsx)(d.Button, {
className: t,
'aria-label': S.Z.Messages.CLOSE,
look: d.Button.Looks.BLANK,
size: d.Button.Sizes.NONE,
onClick: n,
children: (0, i.jsx)(d.CloseSmallIcon, {
  size: 'xs',
  className: Z.closeIcon,
  color: 'white'
})
  });
}
let b = v.LY.RESOLUTION_1440,
  R = v.ws.FPS_60;

function j(e) {
  let {
channel: t
  } = e, n = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), [s, l] = a.useState(!1), {
preset: o
  } = (0, c.cj)([m.Z], () => m.Z.getState()), g = (0, c.e7)([_.Z], () => _.Z.getGoLiveSource()), x = a.useCallback(() => {
l(!0), (0, E.S)(r.q.STREAM_HIGH_QUALITY).then(e => {
  if (e) {
    if ((0, I.J1)(!(0, C.mc)(b, R)), f.default.track(N.rMx.PERK_DEMO_OFFER_ACCEPTED, {
        guild_id: t.guild_id,
        channel_id: t.id,
        perk_type: r.q.STREAM_HIGH_QUALITY,
        resolution: b,
        max_fps: R
      }), (0, I.cD)(!1), null == g)
      return;
    let e = {
      qualityOptions: {
        preset: o,
        resolution: b,
        frameRate: R
      },
      context: u.Yn.STREAM
    };
    null != g.desktopSource ? e.desktopSettings = {
      sourceId: g.desktopSource.id,
      sound: !0
    } : null != g.cameraSource && (e.cameraSettings = {
      videoDeviceGuid: g.cameraSource.videoDeviceGuid,
      audioDeviceGuid: g.cameraSource.audioDeviceGuid
    }), h.Z.setGoLiveSource(e);
  }
}).catch(() => {}).finally(() => {
  l(!1);
});
  }, [
o,
t,
g
  ]);
  return (0, i.jsx)(d.ShinyButton, {
fullWidth: !0,
pauseAnimation: n,
color: d.Button.Colors.GREEN,
size: d.Button.Sizes.SMALL,
className: Z.optInButton,
onClick: x,
submitting: s,
children: S.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_POPOUT_CTA
  });
}

function L(e) {
  let {
channel: t,
hidden: n,
onDismiss: a
  } = e, s = (0, c.e7)([p.Z], () => p.Z.useReducedMotion);
  return (0, i.jsxs)('div', {
className: l()(Z.optInPopout, {
  [Z.hidden]: n
}),
children: [
  (0, i.jsxs)('div', {
    className: Z.variant1InfoContainerParent,
    children: [
      (0, i.jsxs)('div', {
        className: Z.variant1InfoContainer,
        children: [
          (0, i.jsx)(d.LottieAnimation, {
            importData: A,
            shouldAnimate: !s,
            className: Z.lottie,
            loop: !0
          }),
          (0, i.jsx)(o.x, {
            className: Z.variant1Text,
            variant: 'text-sm/medium',
            children: S.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_POPOUT_BODY
          })
        ]
      }),
      (0, i.jsx)('div', {
        children: (0, i.jsx)(M, {
          className: Z.variant1CloseButton,
          onDismiss: a
        })
      })
    ]
  }),
  (0, i.jsx)(j, {
    channel: t
  })
]
  });
}

function P(e) {
  let {
channel: t,
hidden: n,
onDismiss: a
  } = e;
  return (0, i.jsxs)('div', {
className: l()(Z.optInPopout, Z.variant2OptInPopout, {
  [Z.hidden]: n
}),
children: [
  (0, i.jsx)('img', {
    className: Z.image,
    src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
    alt: 'HD Streaming Nitro Perk'
  }),
  (0, i.jsx)(M, {
    className: Z.variant2CloseButton,
    onDismiss: a
  }),
  (0, i.jsx)('div', {
    className: Z.variant2InfoContainerParent,
    children: (0, i.jsxs)('div', {
      className: Z.variant2InfoContainer,
      children: [
        (0, i.jsx)(o.x, {
          className: Z.variant2Text,
          variant: 'text-sm/medium',
          children: S.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_POPOUT_BODY
        }),
        (0, i.jsx)(j, {
          channel: t
        })
      ]
    })
  })
]
  });
}

function O(e) {
  let {
channel: t,
...n
  } = e, {
hqStreamingState: {
  hqStreamingOptOutPopoutShouldShow: s
}
  } = (0, g.k)(r.q.STREAM_HIGH_QUALITY), {
enabled: l,
variant1: o
  } = x.Z.useExperiment({
location: 'StreamButtonDemoOptInPopout'
  }, {
autoTrackExposure: !1,
disable: !s
  }), c = a.useRef(!1);
  if (a.useEffect(() => {
  s && l && !c.current && (c.current = !0, f.default.track(N.rMx.PERK_DEMO_OFFER_VIEWED, {
    guild_id: t.guild_id,
    channel_id: t.id,
    perk_type: r.q.STREAM_HIGH_QUALITY
  }));
}, [
  s,
  l,
  t
]), !s || !l)
return null;
  let u = o ? L : P;
  return (0, i.jsx)(T.h, {
...n,
renderComponent: e => (0, i.jsx)(u, {
  ...e,
  channel: t
})
  });
}