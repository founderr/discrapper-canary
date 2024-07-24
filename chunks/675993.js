t.d(n, {
  Z: function() {
return x;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  l = t(120356),
  r = t.n(l),
  o = t(581051),
  s = t(353381),
  c = t(993365),
  u = t(481060),
  d = t(147865),
  m = t(240991),
  p = t(810090),
  _ = t(88410),
  f = t(783097),
  C = t(695676),
  h = t(520315),
  A = t(29380),
  E = t(689938),
  N = t(970311),
  v = t(153521);

function x(e) {
  let {
channel: n,
application: t,
videoUrl: l,
imageCoverUrl: o,
sectionName: s
  } = e, c = a.useMemo(() => {
var e;
return null !== (e = (0, f.jD)(t)) && void 0 !== e ? e : '';
  }, [t]), u = null != l || null != o, {
isSlideReady: d
  } = (0, C.hH)(), [m, _] = a.useState(!1);
  return a.useEffect(() => {
d && _(!0);
  }, [d]), (0, i.jsx)('div', {
className: N.container,
children: (0, i.jsxs)('div', {
  className: N.profileAndVideoContainer,
  children: [
    u ? (0, i.jsxs)('div', {
      className: N.videoContainer,
      children: [
        m ? (0, i.jsx)(p.Z, {
          className: r()(N.videoCover, N.video),
          loop: !0,
          muted: !0,
          autoPlay: !0,
          src: l,
          poster: o
        }) : null,
        (0, i.jsx)('img', {
          className: N.videoCover,
          src: o,
          'aria-label': E.Z.Messages.IMAGE
        })
      ]
    }) : null,
    (0, i.jsxs)('div', {
      className: u ? N.overviewContainerWithVideo : N.overviewContainerNoVideo,
      children: [
        (0, i.jsx)(I, {
          application: t
        }),
        (0, i.jsx)(g, {
          application: t
        }),
        c.length > 0 ? (0, i.jsx)(S, {
          description: c
        }) : null,
        (0, i.jsx)(L, {
          channel: n,
          application: t,
          sectionName: s
        })
      ]
    })
  ]
})
  });
}

function I(e) {
  var n;
  let {
application: t
  } = e, a = (0, f.BQ)(t) ? t.name : null !== (n = (0, f.$d)(t)) && void 0 !== n ? n : '';
  return (0, i.jsx)('div', {
className: N.titleContainer,
children: (0, i.jsx)('div', {
  className: N.titleInnerContainer,
  children: (0, i.jsx)(u.Heading, {
    variant: 'heading-xl/extrabold',
    children: a
  })
})
  });
}

function g(e) {
  let {
application: n
  } = e, t = a.useMemo(() => {
var e;
return (0, f.BQ)(n) && null !== (e = null == n ? void 0 : n.tags) && void 0 !== e ? e : [];
  }, [n]);
  return (0, f.ye)({
application: n
  }) ? (0, i.jsxs)('div', {
className: N.tagsContainer,
children: [
  (0, i.jsx)(P, {
    application: n
  }),
  t.map((e, n) => (0, i.jsx)('div', {
    className: N.tagContainer,
    children: (0, i.jsx)(c.x, {
      variant: 'text-sm/semibold',
      color: 'interactive-normal',
      children: e
    })
  }, e + n))
]
  }) : null;
}

function P(e) {
  var n;
  let {
application: t
  } = e;
  if (!(0, f.ye)({
  application: t
}))
return null;
  let a = null !== (n = 'maxParticipants' in t ? t.maxParticipants : 'max_participants' in t ? t.max_participants : 0) && void 0 !== n ? n : 0;
  return (0, i.jsxs)('div', {
className: N.tagContainer,
children: [
  (0, i.jsx)(u.GroupIcon, {
    size: 'xs',
    color: u.tokens.colors.INTERACTIVE_NORMAL
  }),
  (0, i.jsx)(c.x, {
    variant: 'text-sm/semibold',
    color: 'interactive-normal',
    children: (0, d.lY)(a)
  })
]
  });
}

function L(e) {
  let {
channel: n,
application: t,
sectionName: a
  } = e, l = (0, _.Z)({
applicationId: t.id,
channel: n
  });
  return (0, f.BQ)(t) && (0, f.ye)({
application: t
  }) ? (0, i.jsx)('div', {
className: N.entrypointContainer,
children: null != t ? (0, i.jsx)(A.Z, {
  channel: n,
  application: t,
  sectionName: a,
  commandName: l,
  buttonSize: u.ButtonSizes.MAX
}) : null
  }) : null;
}

function S(e) {
  let {
description: n
  } = e, [t, l] = a.useState(!0);
  a.useLayoutEffect(() => l(!1), []);
  let r = a.useMemo(() => (0, m.YP)(n), [n]),
{
  ref: d,
  lineHeight: p,
  lineCount: _
} = function() {
  let e = a.useRef(null),
    [n, t] = a.useState(null),
    [i, l] = a.useState(null);
  return a.useLayoutEffect(() => {
    let n = e.current;
    if (null === n || 0 === n.clientHeight)
      return;
    let i = parseInt(getComputedStyle(n).lineHeight);
    if (!isNaN(i))
      t(i), l(Math.floor(n.clientHeight / i));
  }, []), {
    ref: e,
    lineHeight: n,
    lineCount: i
  };
}(),
f = a.useMemo(() => {
  if (null == p || null == _)
    return {
      key: 0
    };
  let e = p * _;
  return {
    key: 1,
    minHeightOverride: Math.min(e, 1 * p),
    maxHeightOverride: e
  };
}, [
  _,
  p
]),
{
  ref: C,
  isTransitioning: A,
  onTransitionEnd: x
} = (0, h.Z)({
  isExpanded: t,
  ...f
}),
I = t || A;
  return (0, i.jsxs)('div', {
className: N.descriptionContainer,
children: [
  (0, i.jsx)('div', {
    ref: C,
    className: N.overflowHidden,
    onTransitionEnd: x,
    children: (0, i.jsx)(c.x, {
      ref: d,
      className: v.markup,
      variant: 'text-sm/medium',
      lineClamp: I ? void 0 : 1,
      style: {
        maxHeight: I ? void 0 : f.minHeightOverride
      },
      children: r
    })
  }),
  null != _ && _ > 1 ? (0, i.jsxs)(u.Clickable, {
    className: N.expandableDescriptionClickable,
    onClick: () => l(e => !e),
    children: [
      (0, i.jsx)(c.x, {
        variant: 'text-sm/semibold',
        color: 'text-brand',
        children: I ? E.Z.Messages.APP_LAUNCHER_SHOW_LESS : E.Z.Messages.APP_LAUNCHER_SHOW_MORE
      }),
      I ? (0, i.jsx)(s.u, {
        size: 'sm',
        color: u.tokens.colors.TEXT_BRAND
      }) : (0, i.jsx)(o.C, {
        size: 'sm',
        color: u.tokens.colors.TEXT_BRAND
      })
    ]
  }) : null
]
  });
}