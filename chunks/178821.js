"use strict";
r.r(t), r.d(t, {
  default: function() {
    return g
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  n = r("120356"),
  l = r.n(n),
  o = r("481060"),
  c = r("706311"),
  s = r("277513");
let d = 1e3 / 60,
  u = 1e3 / 60 * 3,
  h = Math.ceil(3e3 / d);

function p() {
  let e = i.useRef(Array(h).fill(0)),
    t = i.useRef(performance.now()),
    r = i.useRef(0),
    n = i.useRef(0),
    l = i.useRef(0),
    c = i.useRef(0),
    [, s] = i.useState({}),
    p = i.useRef(null);
  i.useEffect(() => {
    let a = () => {
      let i = performance.now(),
        o = i - t.current;
      t.current = i, n.current -= e.current[c.current], e.current[c.current] = o, n.current += o, l.current < h && (l.current += 1), c.current = (c.current + 1) % h, o > u && (r.current += Math.floor(o / d)), p.current = setTimeout(() => requestAnimationFrame(a), 14)
    };
    return requestAnimationFrame(a), () => {
      e.current.fill(0), r.current = 0, n.current = 0, l.current = 0, c.current = 0, null != p.current && clearTimeout(p.current)
    }
  }, []), i.useEffect(() => {
    let e = setInterval(() => {
      s({})
    }, d);
    return () => {
      clearInterval(e)
    }
  }, []);
  let g = 0 === l.current ? 0 : n.current / l.current;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: ["Dropped Frames:", " ", (0, a.jsx)(o.Text, {
        tag: "span",
        variant: "text-md/bold",
        color: "text-primary",
        children: r.current
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
        children: (0 === g ? 0 : d / g * 60).toFixed(2)
      })]
    }), (0, a.jsx)("hr", {}), (0, a.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      onClick: () => {
        e.current.fill(0), r.current = 0, n.current = 0, l.current = 0, c.current = 0, t.current = performance.now()
      },
      children: "Reset Frame Data"
    })]
  })
}

function g() {
  return (0, a.jsx)("div", {
    className: l()(s.panel, c.panel),
    children: (0, a.jsx)(p, {})
  })
}