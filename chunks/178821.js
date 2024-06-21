t.d(r, {
  Z: function() {
    return g
  }
}), t(47120);
var a = t(735250),
  i = t(470079),
  n = t(120356),
  o = t.n(n),
  l = t(481060),
  c = t(568818),
  s = t(719556);
let d = 1e3 / 60,
  u = 1e3 / 60 * 3,
  h = Math.ceil(3e3 / d);

function m() {
  let e = i.useRef(Array(h).fill(0)),
    r = i.useRef(performance.now()),
    t = i.useRef(0),
    n = i.useRef(0),
    o = i.useRef(0),
    c = i.useRef(0),
    [, s] = i.useState({}),
    m = i.useRef(null);
  i.useEffect(() => {
    let a = () => {
      let i = performance.now(),
        l = i - r.current;
      if (r.current = i, n.current -= e.current[c.current], e.current[c.current] = l, n.current += l, o.current < h && (o.current += 1), c.current = (c.current + 1) % h, l > u) {
        let e = 0 === o.current ? d : n.current / o.current,
          r = Math.floor(l / Math.min(2 * d, e));
        t.current += r
      }
      m.current = setTimeout(() => requestAnimationFrame(a), 12)
    };
    return requestAnimationFrame(a), () => {
      e.current.fill(0), t.current = 0, n.current = 0, o.current = 0, c.current = 0, null != m.current && clearTimeout(m.current)
    }
  }, []), i.useEffect(() => {
    let e = setInterval(() => {
      s({})
    }, d);
    return () => {
      clearInterval(e)
    }
  }, []);
  let g = 0 === o.current ? 0 : n.current / o.current,
    p = 0 === g ? 0 : d / g * 60;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)(l.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: ["Dropped Frames:", " ", (0, a.jsx)(l.Text, {
        tag: "span",
        variant: "text-md/bold",
        color: "text-primary",
        children: t.current
      })]
    }), (0, a.jsxs)(l.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: ["Frame Times (~3sec):", " ", (0, a.jsxs)(l.Text, {
        tag: "span",
        variant: "text-md/bold",
        color: "text-primary",
        children: [g.toFixed(2), "ms"]
      })]
    }), (0, a.jsxs)(l.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: ["FPS (~3sec):", " ", (0, a.jsx)(l.Text, {
        tag: "span",
        variant: "text-md/bold",
        color: "text-primary",
        children: p.toFixed(2)
      })]
    }), (0, a.jsx)("hr", {}), (0, a.jsx)(l.Button, {
      size: l.Button.Sizes.SMALL,
      onClick: () => {
        e.current.fill(0), t.current = 0, n.current = 0, o.current = 0, c.current = 0, r.current = performance.now()
      },
      children: "Reset Frame Data"
    })]
  })
}

function g() {
  return (0, a.jsx)("div", {
    className: o()(s.panel, c.panel),
    children: (0, a.jsx)(m, {})
  })
}