n.d(t, {
  ZP: function() {
    return d
  },
  aJ: function() {
    return u
  }
}), n(411104), n(653041), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(392711),
  a = n.n(s),
  r = n(38371),
  o = n(981631),
  c = n(126564);

function u(e) {
  let {
    compact: t,
    messageGroups: n,
    groupRange: l,
    attachments: i,
    fontSize: s,
    groupSpacing: c
  } = e;
  if (i > n) throw Error("generateMessageSpecs: too many attachments relative to messageGroups: ".concat(n, ", ").concat(i));
  let u = s / o.yqN.FONT_SIZE_DEFAULT,
    d = t ? r.iv : r.pk,
    h = t ? r.Pb : r.XX,
    m = 0,
    p = Array(n).fill(null).map(() => {
      let e = a().random(1, l);
      return m += c * u + d * u + (e - 1) * h * u, e
    }),
    E = p.map((e, t) => t),
    g = [];
  for (; g.length < i;) {
    let e = {
      width: a().random(140, 400),
      height: a().random(100, 320)
    };
    g.push([E.splice(a().random(0, E.length - 1), 1)[0], e]), m += e.height + r.M9 * u
  }
  return {
    messages: p,
    attachmentSpecs: g,
    totalHeight: m,
    groupSpacing: c
  }
}

function d(e) {
  let {
    compact: t,
    messages: n,
    attachmentSpecs: s,
    totalHeight: a,
    groupSpacing: o
  } = e;
  return i.useMemo(() => {
    let e = Array(n.length).fill(void 0);
    for (let [t, n] of s) e[t] = n;
    return (0, l.jsx)("div", {
      className: c.wrapper,
      style: {
        height: a
      },
      children: n.map((n, i) => (0, l.jsx)(r.ZP, {
        groupSpacing: o,
        compact: t,
        messages: n,
        attachmentSpecs: e[i]
      }, i))
    })
  }, [t, n, s, a, o])
}