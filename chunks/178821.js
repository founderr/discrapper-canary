r.d(t, {
  Z: function() {
return p;
  }
}), r(47120);
var a = r(735250),
  n = r(470079),
  i = r(120356),
  o = r.n(i),
  l = r(481060),
  c = r(38618),
  s = r(855954),
  d = r(979756);
let u = 1000 / 60,
  h = 1000 / 60 * 3,
  m = Math.ceil(3000 / u);

function g() {
  let e = n.useRef(Array(m).fill(0)),
t = n.useRef(performance.now()),
r = n.useRef(0),
i = n.useRef(0),
o = n.useRef(0),
s = n.useRef(0),
[, d] = n.useState({}),
g = n.useRef(null),
[p, b] = n.useState(!1),
[f, x] = n.useState(!1),
[y, k] = n.useState(!1);
  n.useEffect(() => {
let a = requestAnimationFrame(function n() {
  let l = performance.now(),
    c = l - t.current;
  if (t.current = l, i.current -= e.current[s.current], e.current[s.current] = c, i.current += c, o.current < m && (o.current += 1), s.current = (s.current + 1) % m, c > h) {
    let e = 0 === o.current ? u : i.current / o.current,
      t = Math.min(2 * u, e),
      a = Math.floor(c / (p ? t : u));
    r.current += a;
  }
  g.current = setTimeout(() => a = requestAnimationFrame(n), 12);
});
return () => {
  cancelAnimationFrame(a), e.current.fill(0), r.current = 0, i.current = 0, o.current = 0, s.current = 0, null != g.current && clearTimeout(g.current);
};
  }, [p]), n.useEffect(() => {
let e = setInterval(() => {
  d({});
}, u);
return () => {
  clearInterval(e);
};
  }, []);
  let v = 0 === o.current ? 0 : i.current / o.current,
_ = c.Z.getSocket(),
w = _.dispatcher.getDispatchTimings(),
C = _.dispatcher.getSchedulerTelemetry(),
j = 0 === v ? 0 : u / v * 60;
  return (0, a.jsxs)('div', {
children: [
  (0, a.jsxs)(l.Text, {
    variant: 'text-md/normal',
    color: 'text-muted',
    children: [
      'Dropped Frames:',
      ' ',
      (0, a.jsx)(l.Text, {
        tag: 'span',
        variant: 'text-md/bold',
        color: 'text-primary',
        children: r.current
      })
    ]
  }),
  (0, a.jsx)(l.Tooltip, {
    text: 'Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.',
    children: e => (0, a.jsx)('div', {
      ...e,
      children: (0, a.jsx)(l.Checkbox, {
        value: p,
        onChange: () => b(e => !e),
        size: 12,
        type: l.Checkbox.Types.INVERTED,
        children: (0, a.jsx)(l.Text, {
          tag: 'span',
          variant: 'text-xs/normal',
          color: 'text-muted',
          children: 'Use Average Frame Time'
        })
      })
    })
  }),
  (0, a.jsxs)(l.Text, {
    variant: 'text-md/normal',
    color: 'text-muted',
    children: [
      'Frame Times (~3sec):',
      ' ',
      (0, a.jsxs)(l.Text, {
        tag: 'span',
        variant: 'text-md/bold',
        color: 'text-primary',
        children: [
          v.toFixed(2),
          'ms'
        ]
      })
    ]
  }),
  (0, a.jsxs)(l.Text, {
    variant: 'text-md/normal',
    color: 'text-muted',
    children: [
      'FPS (~3sec):',
      ' ',
      (0, a.jsx)(l.Text, {
        tag: 'span',
        variant: 'text-md/bold',
        color: 'text-primary',
        children: j.toFixed(2)
      })
    ]
  }),
  (0, a.jsx)(l.Button, {
    size: l.Button.Sizes.SMALL,
    onClick: () => {
      e.current.fill(0), r.current = 0, i.current = 0, o.current = 0, s.current = 0, t.current = performance.now();
    },
    children: 'Reset Frame Data'
  }),
  (0, a.jsx)('hr', {}),
  (0, a.jsx)(l.Checkbox, {
    value: f,
    onChange: () => x(e => !e),
    size: 12,
    type: l.Checkbox.Types.INVERTED,
    children: (0, a.jsx)(l.Text, {
      tag: 'span',
      variant: 'text-xs/normal',
      color: 'text-muted',
      children: 'Show Dispatch Timings'
    })
  }),
  f ? (0, a.jsxs)(a.Fragment, {
    children: [
      (0, a.jsx)(l.Text, {
        variant: 'text-md/medium',
        color: 'text-muted',
        children: 'Gateway Dispatch Timings:'
      }),
      (0, a.jsx)('table', {
        cellPadding: 4,
        children: Object.entries(w).map(e => {
          let [t, [r, n]] = e;
          return (0, a.jsxs)('tr', {
            children: [
              (0, a.jsx)('td', {
                children: (0, a.jsx)(l.Text, {
                  variant: 'text-xs/normal',
                  color: 'text-normal',
                  children: t
                })
              }),
              (0, a.jsx)('td', {
                children: (0, a.jsxs)(l.Text, {
                  tag: 'span',
                  variant: 'text-xs/bold',
                  color: 'text-normal',
                  children: [
                    r.toFixed(2),
                    'ms'
                  ]
                })
              }),
              (0, a.jsx)('td', {
                children: (0, a.jsxs)(l.Text, {
                  tag: 'span',
                  variant: 'text-xs/normal',
                  color: 'text-muted',
                  children: [
                    '(count: ',
                    n,
                    ')'
                  ]
                })
              })
            ]
          }, t);
        })
      })
    ]
  }) : null,
  (0, a.jsx)('hr', {}),
  (0, a.jsx)(l.Checkbox, {
    value: y,
    onChange: () => k(e => !e),
    size: 12,
    type: l.Checkbox.Types.INVERTED,
    children: (0, a.jsx)(l.Text, {
      tag: 'span',
      variant: 'text-xs/normal',
      color: 'text-muted',
      children: 'Show Dispatch Scheduler Telemetry'
    })
  }),
  y ? (0, a.jsxs)(a.Fragment, {
    children: [
      (0, a.jsx)(l.Text, {
        variant: 'text-md/medium',
        color: 'text-muted',
        children: 'Dispatch Scheduler Telemetry:'
      }),
      (0, a.jsx)('table', {
        cellPadding: 4,
        children: Object.entries(C.generateTelemetry()).map(e => {
          let [t, r] = e;
          return (0, a.jsxs)('tr', {
            children: [
              (0, a.jsx)('td', {
                children: (0, a.jsx)(l.Text, {
                  variant: 'text-xs/normal',
                  color: 'text-normal',
                  children: t
                })
              }),
              (0, a.jsx)('td', {
                children: (0, a.jsx)(l.Text, {
                  tag: 'span',
                  variant: 'text-xs/bold',
                  color: 'text-normal',
                  children: r
                })
              })
            ]
          }, t);
        })
      }),
      (0, a.jsx)(l.Button, {
        size: l.Button.Sizes.SMALL,
        onClick: () => {
          C.reset();
        },
        children: 'Reset Scheduler Telemetry'
      })
    ]
  }) : null
]
  });
}

function p() {
  return (0, a.jsx)('div', {
className: o()(d.panel, s.panel),
children: (0, a.jsx)(g, {})
  });
}