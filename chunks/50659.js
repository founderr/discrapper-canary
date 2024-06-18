"use strict";
n.d(t, {
  U4: function() {
    return _
  },
  hm: function() {
    return h
  },
  py: function() {
    return T
  }
}), n(47120);
var i = n(512722),
  r = n.n(i),
  s = n(53529),
  o = n(436660),
  a = n(887490);
let l = new Set(["*", "_", "~", "`", "|"]),
  u = {
    bold: "**",
    italics: "*",
    underline: "__",
    strikethrough: "~~",
    inlineCode: "`",
    spoiler: "||"
  };

function _(e, t, n) {
  if (null == e.selection) return {
    before: {},
    after: {}
  };
  let i = c(e, t),
    r = c(e, n);
  for (let e in i) !(e in r) && delete i[e];
  for (let e in r) !(e in i) && delete r[e];
  return {
    before: i,
    after: r
  }
}

function c(e, t) {
  let [n] = a.bN.node(e, t.path);
  if (!a.LC.isText(n)) return {};
  let i = n.text,
    r = t.offset;
  for (let e = r - 1; e >= 0; e--)
    if (l.has(i.charAt(e))) r--;
    else break;
  let s = t.offset;
  for (let e = s; e < i.length; e++)
    if (l.has(i.charAt(e))) s++;
    else break;
  let o = i.substring(r, s),
    u = {};
  return E({
    result: u,
    text: o,
    startIndex: r,
    syntax: "***",
    type1: "italics",
    type2: "bold"
  }), E({
    result: u,
    text: o,
    startIndex: r,
    syntax: "___",
    type1: "italics",
    type2: "underline"
  }), d(u, o, r, "**", "bold"), d(u, o, r, "*", "italics"), d(u, o, r, "_", "italics"), d(u, o, r, "__", "underline"), d(u, o, r, "`", "inlineCode"), d(u, o, r, "~~", "strikethrough"), d(u, o, r, "||", "spoiler"), u
}

function d(e, t, n, i, r) {
  let s = I(t, i);
  s >= 0 && (e[r] = {
    chars: i,
    location: n + s
  })
}

function E(e) {
  let {
    result: t,
    text: n,
    startIndex: i,
    syntax: r,
    type1: s,
    type2: o
  } = e, a = I(n, r);
  a >= 0 && (t[s] = {
    chars: r.substring(0, 1),
    location: a + i
  }, t[o] = {
    chars: r.substring(1),
    location: a + i + 1
  })
}

function I(e, t) {
  let n = e.indexOf(t);
  if (n >= 0) {
    let i = t.charAt(0);
    if (n > 0 && e.charAt(n - 1) === i || n < e.length - 1 && e.charAt(n + t.length) === i) return -1
  }
  return n
}

function T(e, t) {
  s.T.withSingleEntry(e, () => {
    a.bN.withoutNormalizing(e, () => {
      r()(null != e.selection, "Editor has no selection");
      let [n, i] = a.M8.edges(e.selection), s = _(e, n, i), l = s.before[t], c = s.after[t], d = a.bN.node(e, n.path), E = a.bN.node(e, i.path);
      if (null == d || null == E || !a.LC.isText(d[0]) || !a.LC.isText(E[0])) return;
      let I = a.C0.equals(d[1], E[1]);
      if (null != l && null != c) {
        let t = {
            path: n.path,
            offset: l.location
          },
          r = {
            path: i.path,
            offset: c.location
          };
        o.Q.delete(e, {
          at: r,
          distance: c.chars.length
        }), o.Q.delete(e, {
          at: t,
          distance: l.chars.length
        });
        let s = n.offset,
          u = i.offset;
        !a.Jz.isBefore(n, t) && (s -= l.chars.length), I && !a.Jz.isBefore(i, t) && (u -= l.chars.length), a.Jz.isAfter(i, r) && (u -= c.chars.length), o.Q.select(e, {
          anchor: {
            path: n.path,
            offset: Math.max(0, s)
          },
          focus: {
            path: i.path,
            offset: Math.max(0, u)
          }
        })
      } else {
        let r = u[t];
        o.Q.insertText(e, r, {
          at: i
        }), o.Q.insertText(e, r, {
          at: n
        });
        let s = d[0].text.length + r.length,
          a = E[0].text.length + (I ? 2 * r.length : r.length);
        o.Q.select(e, {
          anchor: {
            path: n.path,
            offset: Math.min(s, n.offset + r.length)
          },
          focus: {
            path: i.path,
            offset: Math.min(a, i.offset + (I ? r.length : 0))
          }
        })
      }
    })
  }), a.bN.focus(e)
}

function h(e, t) {
  let n = e.selection;
  if (null == n) return;
  let i = !0;
  for (let [r, s] of a.bN.blocks(e))("line" === r.type || r.type === t) && a.M8.includes(n, s) && (i = i && r.type === t);
  a.bN.withoutNormalizing(e, () => {
    for (let [r, s] of a.bN.blocks(e)) a.M8.includes(n, s) && (i || "line" !== r.type ? i && r.type === t && o.Q.setNodes(e, {
      type: "line"
    }, {
      at: s
    }) : o.Q.setNodes(e, {
      type: t
    }, {
      at: s
    }))
  }), a.bN.focus(e)
}