t.d(n, {
  Z: function() {
return C;
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  a = t(581051),
  r = t(353381),
  s = t(993365),
  o = t(481060),
  c = t(147865),
  u = t(240991),
  d = t(810090),
  m = t(88410),
  p = t(783097),
  _ = t(520315),
  E = t(29380),
  A = t(689938),
  h = t(655863),
  f = t(910212),
  N = t(194271);

function C(e) {
  let {
channel: n,
application: t,
videoUrl: a,
imageCoverUrl: r,
sectionName: s
  } = e, o = l.useMemo(() => {
var e;
return null !== (e = (0, p.jD)(t)) && void 0 !== e ? e : '';
  }, [t]), c = null != a || null != r;
  return (0, i.jsx)('div', {
className: h.container,
children: (0, i.jsxs)('div', {
  className: h.profileAndVideoContainer,
  children: [
    c ? (0, i.jsx)(d.Z, {
      loop: !0,
      autoPlay: !0,
      muted: !0,
      className: h.videoWithOverview,
      src: a,
      poster: r
    }) : null,
    (0, i.jsxs)('div', {
      className: c ? h.overviewContainerWithVideo : h.overviewContainerNoVideo,
      children: [
        (0, i.jsx)(v, {
          application: t
        }),
        (0, i.jsx)(I, {
          application: t
        }),
        o.length > 0 ? (0, i.jsx)(T, {
          description: o
        }) : null,
        (0, i.jsx)(P, {
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

function v(e) {
  var n;
  let {
application: t
  } = e, l = (0, p.BQ)(t) ? t.name : null !== (n = (0, p.$d)(t)) && void 0 !== n ? n : '';
  return (0, i.jsx)('div', {
className: h.titleContainer,
children: (0, i.jsx)('div', {
  className: h.titleInnerContainer,
  children: (0, i.jsx)(o.Heading, {
    variant: 'heading-xl/extrabold',
    children: l
  })
})
  });
}

function I(e) {
  let {
application: n
  } = e, t = l.useMemo(() => {
var e;
return (0, p.BQ)(n) && null !== (e = null == n ? void 0 : n.tags) && void 0 !== e ? e : [];
  }, [n]);
  return (0, p.ye)({
application: n
  }) ? (0, i.jsxs)('div', {
className: h.tagsContainer,
children: [
  (0, i.jsx)(x, {
    application: n
  }),
  t.map((e, n) => (0, i.jsx)('div', {
    className: h.tagContainer,
    children: (0, i.jsx)(s.x, {
      variant: 'text-sm/semibold',
      color: 'interactive-normal',
      children: e
    })
  }, e + n))
]
  }) : null;
}

function x(e) {
  var n;
  let {
application: t
  } = e;
  if (!(0, p.ye)({
  application: t
}))
return null;
  let l = null !== (n = 'maxParticipants' in t ? t.maxParticipants : 'max_participants' in t ? t.max_participants : 0) && void 0 !== n ? n : 0;
  return (0, i.jsxs)('div', {
className: h.tagContainer,
children: [
  (0, i.jsx)('img', {
    className: void 0,
    src: N,
    alt: '',
    'aria-hidden': !0
  }),
  (0, i.jsx)(s.x, {
    variant: 'text-sm/semibold',
    color: 'interactive-normal',
    children: (0, c.lY)(l)
  })
]
  });
}

function P(e) {
  let {
channel: n,
application: t,
sectionName: l
  } = e, a = (0, m.Z)({
applicationId: t.id,
channel: n
  });
  return (0, p.BQ)(t) && (0, p.ye)({
application: t
  }) ? (0, i.jsx)('div', {
className: h.entrypointContainer,
children: null != t ? (0, i.jsx)(E.Z, {
  channel: n,
  application: t,
  sectionName: l,
  commandName: a,
  buttonSize: o.ButtonSizes.MAX
}) : null
  }) : null;
}

function T(e) {
  let {
description: n
  } = e, [t, c] = l.useState(!0);
  l.useLayoutEffect(() => c(!1), []);
  let d = l.useMemo(() => (0, u.YP)(n), [n]),
{
  ref: m,
  lineHeight: p,
  lineCount: E
} = function() {
  let e = l.useRef(null),
    [n, t] = l.useState(null),
    [i, a] = l.useState(null);
  return l.useLayoutEffect(() => {
    let n = e.current;
    if (null === n || 0 === n.clientHeight)
      return;
    let i = parseInt(getComputedStyle(n).lineHeight);
    if (!isNaN(i))
      t(i), a(Math.floor(n.clientHeight / i));
  }, []), {
    ref: e,
    lineHeight: n,
    lineCount: i
  };
}(),
N = l.useMemo(() => {
  if (null == p || null == E)
    return {
      key: 0
    };
  let e = p * E;
  return {
    key: 1,
    minHeightOverride: Math.min(e, 1 * p),
    maxHeightOverride: e
  };
}, [
  E,
  p
]),
{
  ref: C,
  isTransitioning: v,
  onTransitionEnd: I
} = (0, _.Z)({
  isExpanded: t,
  ...N
}),
x = t || v;
  return (0, i.jsxs)('div', {
className: h.descriptionContainer,
children: [
  (0, i.jsx)('div', {
    ref: C,
    className: h.overflowHidden,
    onTransitionEnd: I,
    children: (0, i.jsx)(s.x, {
      ref: m,
      className: f.markup,
      variant: 'text-sm/medium',
      lineClamp: x ? void 0 : 1,
      style: {
        maxHeight: x ? void 0 : N.minHeightOverride
      },
      children: d
    })
  }),
  null != E && E > 1 ? (0, i.jsxs)(o.Clickable, {
    className: h.expandableDescriptionClickable,
    onClick: () => c(e => !e),
    children: [
      (0, i.jsx)(s.x, {
        variant: 'text-sm/semibold',
        color: 'text-brand',
        children: x ? A.Z.Messages.APP_LAUNCHER_SHOW_LESS : A.Z.Messages.APP_LAUNCHER_SHOW_MORE
      }),
      x ? (0, i.jsx)(r.u, {
        size: 'sm',
        color: o.tokens.colors.TEXT_BRAND
      }) : (0, i.jsx)(a.C, {
        size: 'sm',
        color: o.tokens.colors.TEXT_BRAND
      })
    ]
  }) : null
]
  });
}