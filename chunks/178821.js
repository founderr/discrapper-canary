r.d(t, {
  Z: function() {
    return g
  }
}), r(47120);
var a = r(735250),
  n = r(470079),
  i = r(120356),
  o = r.n(i),
  l = r(481060),
  c = r(568818),
  s = r(719556);
let d = 1e3 / 60,
  u = 1e3 / 60 * 3,
  h = Math.ceil(3e3 / d);

function m() {
  let e = n.useRef(Array(h).fill(0)),
    t = n.useRef(performance.now()),
    r = n.useRef(0),
    i = n.useRef(0),
    o = n.useRef(0),
    c = n.useRef(0),
    [, s] = n.useState({}),
    m = n.useRef(null);
  n.useEffect(() => {
    let a = () => {
      let n = performance.now(),
        l = n - t.current;
      if (t.current = n, i.current -= e.current[c.current], e.current[c.current] = l, i.current += l, o.current < h && (o.current += 1), c.current = (c.current + 1) % h, l > u) {
        let e = 0 === o.current ? d : i.current / o.current,
          t = Math.floor(l / Math.min(2 * d, e));
        r.current += t
      }
      m.current = setTimeout(() => requestAnimationFrame(a), 12)
    };
    return requestAnimationFrame(a), () => {
      e.current.fill(0), r.current = 0, i.current = 0, o.current = 0, c.current = 0, null != m.current && clearTimeout(m.current)
    }
  }, []), n.useEffect(() => {
    let e = setInterval(() => {
      s({})
    }, d);
    return () => {
      clearInterval(e)
    }
  }, []);
  let g = 0 === o.current ? 0 : i.current / o.current,
    p = 0 === g ? 0 : d / g * 60;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)(l.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: ["Dropped Frames:", " ", (0, a.jsx)(l.Text, {
        tag: "span",
        variant: "text-md/bold",
        color: "text-primary",
        children: r.current
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
        e.current.fill(0), r.current = 0, i.current = 0, o.current = 0, c.current = 0, t.current = performance.now()
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