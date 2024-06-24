t.d(r, {
  Z: function() {
    return g
  }
}), t(47120);
var a = t(735250),
  n = t(470079),
  i = t(120356),
  l = t.n(i),
  o = t(481060),
  c = t(568818),
  s = t(719556);
let d = 1e3 / 60,
  u = 1e3 / 60 * 3,
  h = Math.ceil(3e3 / d);

function m() {
  let e = n.useRef(Array(h).fill(0)),
    r = n.useRef(performance.now()),
    t = n.useRef(0),
    i = n.useRef(0),
    l = n.useRef(0),
    c = n.useRef(0),
    [, s] = n.useState({}),
    m = n.useRef(null);
  n.useEffect(() => {
    let a = () => {
      let n = performance.now(),
        o = n - r.current;
      if (r.current = n, i.current -= e.current[c.current], e.current[c.current] = o, i.current += o, l.current < h && (l.current += 1), c.current = (c.current + 1) % h, o > u) {
        let e = 0 === l.current ? d : i.current / l.current,
          r = Math.floor(o / Math.min(2 * d, e));
        t.current += r
      }
      m.current = setTimeout(() => requestAnimationFrame(a), 12)
    };
    return requestAnimationFrame(a), () => {
      e.current.fill(0), t.current = 0, i.current = 0, l.current = 0, c.current = 0, null != m.current && clearTimeout(m.current)
    }
  }, []), n.useEffect(() => {
    let e = setInterval(() => {
      s({})
    }, d);
    return () => {
      clearInterval(e)
    }
  }, []);
  let g = 0 === l.current ? 0 : i.current / l.current,
    p = 0 === g ? 0 : d / g * 60;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: ["Dropped Frames:", " ", (0, a.jsx)(o.Text, {
        tag: "span",
        variant: "text-md/bold",
        color: "text-primary",
        children: t.current
      })]
    }), (0, a.jsxs)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: ["Frame Times (~3sec):", " ", (0, a.jsxs)(o.Text, {
        tag: "span",
        variant: "text-md/bold",
        color: "text-primary",
        children: [g.toFixed(2), "ms"]
      })]
    }), (0, a.jsxs)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: ["FPS (~3sec):", " ", (0, a.jsx)(o.Text, {
        tag: "span",
        variant: "text-md/bold",
        color: "text-primary",
        children: p.toFixed(2)
      })]
    }), (0, a.jsx)("hr", {}), (0, a.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      onClick: () => {
        e.current.fill(0), t.current = 0, i.current = 0, l.current = 0, c.current = 0, r.current = performance.now()
      },
      children: "Reset Frame Data"
    })]
  })
}

function g() {
  return (0, a.jsx)("div", {
    className: l()(s.panel, c.panel),
    children: (0, a.jsx)(m, {})
  })
}