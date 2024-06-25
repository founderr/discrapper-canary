"use strict";
n(757143);
var i = n(512722),
  r = n.n(i),
  s = n(302454),
  o = n.n(s);
let a = /\n{2,}$/,
  l = /(?:^|\n)( *)$/,
  u = "(?:[*-]|\\d+\\.)",
  _ = "( *)(" + u + ") +",
  c = RegExp("^" + _),
  d = RegExp(_ + "[^\\n]*(?:\\n(?!\\1" + u + " )[^\\n]*)*(\n|$)", "gm"),
  E = / *\n$/,
  I = RegExp("^( *)(" + u + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + u + " )|$)"),
  T = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
  h = e => e.map(e => ("text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e)),
  f = {
    ...o().defaultRules.list,
    requiredFirstCharacters: " *-0123456789".split(""),
    match: (e, t) => {
      if (!t.allowList || t._listLevel >= 11) return null;
      let n = null == t.prevCapture ? "" : t.prevCapture[0],
        i = l.exec(n);
      return null == i || T.test(i[0]) ? null : I.exec(e)
    },
    parse: (e, t, n) => {
      let i = e[2],
        s = i.length > 1,
        o = s ? Math.min(1e9, Math.max(1, +i)) : void 0,
        l = e[0].replace(a, "\n").match(d);
      r()(null != l, "markup list items can not be parsed.");
      let u = !1;
      return {
        ordered: s,
        start: o,
        items: l.map((e, i) => {
          let r;
          let s = c.exec(e),
            o = RegExp("^ {1," + (null != s ? s[0].length : 0) + "}", "gm"),
            a = e.replace(o, "").replace(c, ""),
            _ = i === l.length - 1,
            d = -1 !== a.indexOf("\n\n") || _ && u;
          u = d;
          let I = n.inline,
            T = n._list,
            f = n._listLevel;
          n._list = !0, n._listLevel = (null != f ? f : 0) + 1, d ? (n.inline = !1, r = a.replace(E, "\n\n")) : (n.inline = !0, r = a.replace(E, ""));
          let S = h(t(r, {
            ...n,
            allowHeading: !1
          }));
          return n.inline = I, n._list = T, n._listLevel = f, S
        })
      }
    }
  };
t.Z = f