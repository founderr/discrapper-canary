"use strict";
n.d(t, {
  yw: function() {
    return O
  }
}), n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(411104);
var i = n(392711),
  r = n.n(i),
  s = n(31775),
  o = n.n(s);
n(711739);
var a = n(302454),
  l = n.n(a),
  u = n(830121),
  _ = n(823379),
  c = n(172244),
  d = n(571989);
let E = new(o())({
  max: 50
});

function I(e) {
  let t = E.get(e);
  if (null != t) return t;
  let n = (0, d.yx)(e),
    i = (0, d.zq)(n),
    r = {
      whitespaceSanitized: n,
      fullySanitized: i
    };
  return E.set(e, r), r
}
let T = ["http:", "https:", "discord:"],
  h = [c.b.TEXT, c.b.UNDERLINE, c.b.STRONG, c.b.ITALICS, c.b.STRIKETHROUGH, c.b.INLINE_CODE, c.b.SPOILER, c.b.LINE_BREAK, c.b.TIMESTAMP],
  S = [...h, c.b.EMOJI, c.b.CUSTOM_EMOJI],
  f = [c.b.LIST, c.b.HEADING, c.b.BLOCK_QUOTE, c.b.SUBTEXT],
  N = [c.b.TEXT],
  A = [c.b.UNDERLINE, c.b.STRONG, c.b.ITALICS, c.b.STRIKETHROUGH, c.b.INLINE_CODE, c.b.SPOILER, c.b.LINE_BREAK, c.b.TIMESTAMP, c.b.EMOJI, c.b.CUSTOM_EMOJI, c.b.LIST, c.b.HEADING, c.b.BLOCK_QUOTE, c.b.SUBTEXT];

function m(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let i of (!Array.isArray(e) && (e = [e]), e)) {
    if (void 0 === i || !t.includes(i.type)) return null;
    if (i.type === c.b.INLINE_CODE) {
      let e = [...t, ...n];
      if (null == m(i.validationChildContent, e)) return null
    }
    if (Array.isArray(i.content) && null == m(i.content, t)) return null
  }
  return e
}

function O(e) {
  try {
    var t;
    let n = new URL(e),
      i = null !== (t = n.protocol) && void 0 !== t ? t : "";
    if (!T.includes(i.toLowerCase())) throw Error("Provided protocol is not allowed: " + i);
    if (("http:" === i || "https:" === i) && (null == n.hostname || 0 === n.hostname.length)) throw Error("no hostname");
    let r = (0, d.MO)(n);
    n.username = "", n.password = "";
    let s = (0, d.MO)(n);
    return {
      target: r,
      displayTarget: s
    }
  } catch (e) {
    return null
  }
}
t.ZP = {
  ...l().defaultRules.link,
  match: (e, t, n) => t.allowLinks ? l().defaultRules.link.match(e, t, n) : null,
  parse(e, t, n) {
    let [i, s, o, a] = e, d = () => ({
      type: c.b.TEXT,
      content: i
    }), E = I(o), T = I(s), R = I(null != a ? a : ""), p = E.whitespaceSanitized, g = T.fullySanitized, C = R.fullySanitized, v = g.trim();
    if (0 === p.trim().length || 0 === v.length) return d();
    let L = O(l().unescapeUrl(o)),
      D = (0, u.ZP)(s).length > 0 || (0, u.ZP)(a).length > 0;
    if (null == L || D) return d();
    let M = {
        ...n,
        allowEscape: !1,
        parseInlineCodeChildContent: !0
      },
      P = n.allowEmojiLinks ? S : h,
      y = [...P, ...f],
      U = [...N, ...A],
      b = m(t(g, M), y, [c.b.EMOJI]),
      G = m(t(C, M), U);
    if (null == b || null == G || 0 === (function e(t) {
        let n = "";
        for (let i of t) switch (i.type) {
          case c.b.TEXT:
          case c.b.INLINE_CODE:
            n += i.content;
            break;
          case c.b.CUSTOM_EMOJI:
            n += i.name;
            break;
          case c.b.EMOJI:
            n += i.surrogate;
            break;
          case c.b.LINE_BREAK:
            n += "\n";
            break;
          case c.b.STRONG:
          case c.b.ITALICS:
          case c.b.UNDERLINE:
          case c.b.STRIKETHROUGH:
          case c.b.SPOILER:
            n += e(i.content);
            break;
          case c.b.TIMESTAMP:
            n += "<timestamp>";
            break;
          case c.b.BLOCK_QUOTE:
          case c.b.LIST:
          case c.b.HEADING:
          case c.b.SUBTEXT:
            n += "<".concat(i.type, "Content>");
            break;
          default:
            (0, _.vE)(i.type)
        }
        return n
      })(b).trim().length) return d();
    let w = r().pick(t.rules, P),
      B = l().parserFor(w)(T.whitespaceSanitized, M),
      x = R.whitespaceSanitized,
      {
        target: k
      } = L;
    return {
      content: B,
      target: k,
      title: x
    }
  }
}