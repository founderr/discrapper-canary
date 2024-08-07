var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(338545),
  i = n(481060),
  c = n(569379),
  d = n(689938),
  u = n(448288);
t.Z = o.forwardRef((e, t) => {
  let {
quest: n,
percentComplete: o,
size: r = 42,
strokeWidth: p = 3,
glowBlur: m = 0.4,
showProgressText: x = !1,
children: g
  } = e, f = (0, c.EK)(n, o > 0), C = r / 2, _ = r / 2 - p / 2, h = 2 * Math.PI * _, E = h - o * h, S = {
strokeDasharray: ''.concat(h, ' ').concat(h),
strokeDashoffset: E
  }, T = {
strokeDasharray: ''.concat(h, ' ').concat(h),
strokeDashoffset: -o * h
  }, v = {
boxShadow: '0 0 30px 0px '.concat(f.glow)
  }, {
progressTextAnimation: N
  } = (0, i.useSpring)({
progressTextAnimation: x && 1 !== o ? 1 : 0,
config: {
  tension: 300,
  friction: 25
}
  }), j = Math.floor(100 * o);
  return (0, s.jsxs)('div', {
className: u.outer,
ref: t,
children: [
  (0, s.jsxs)('div', {
    className: u.inner,
    style: v,
    children: [
      g,
      (0, s.jsxs)(l.animated.div, {
        style: {
          opacity: N
        },
        className: a()(u.coverContent, u.progressTextWrapper),
        children: [
          (0, s.jsx)('div', {
            className: a()(u.coverContent, u.progressTextOverlay)
          }),
          (0, s.jsx)(i.Text, {
            variant: 'text-lg/medium',
            color: 'text-primary',
            className: u.progressText,
            children: d.Z.Messages.QUESTS_PROGRESS.format({
              percent: j.toString()
            })
          })
        ]
      })
    ]
  }),
  (0, s.jsxs)('svg', {
    className: u.progressBar,
    height: r,
    width: r,
    children: [
      (0, s.jsxs)('defs', {
        children: [
          (0, s.jsxs)('filter', {
            id: 'glow',
            children: [
              (0, s.jsx)('feGaussianBlur', {
                result: 'coloredBlur',
                stdDeviation: m
              }),
              (0, s.jsxs)('feMerge', {
                children: [
                  (0, s.jsx)('feMergeNode', {
                    in: 'coloredBlur'
                  }),
                  (0, s.jsx)('feMergeNode', {
                    in: 'coloredBlur'
                  }),
                  (0, s.jsx)('feMergeNode', {
                    in: 'coloredBlur'
                  }),
                  (0, s.jsx)('feMergeNode', {
                    in: 'SourceGraphic'
                  })
                ]
              })
            ]
          }),
          (0, s.jsxs)('linearGradient', {
            id: 'linear',
            x1: '100%',
            y1: '0%',
            x2: '0%',
            y2: '0%',
            children: [
              (0, s.jsx)('stop', {
                offset: '0%',
                stopColor: f.backgroundTop
              }),
              (0, s.jsx)('stop', {
                offset: '100%',
                stopColor: f.backgroundBottom
              })
            ]
          })
        ]
      }),
      (0, s.jsx)('circle', {
        className: u.progress,
        strokeWidth: p,
        fill: 'transparent',
        r: _,
        cx: C,
        cy: C,
        stroke: 'url(#linear)',
        style: T
      }),
      (0, s.jsx)('circle', {
        className: u.progress,
        strokeWidth: p,
        fill: 'transparent',
        r: _,
        cx: C,
        cy: C,
        stroke: f.foreground,
        style: S
      })
    ]
  })
]
  });
});