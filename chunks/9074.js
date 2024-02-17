"use strict";
t.r(r), t.d(r, {
  default: function() {
    return C
  }
});
var a, n = t("37983"),
  i = t("884691"),
  l = t("414456"),
  o = t.n(l),
  s = t("404828"),
  c = t.n(s),
  d = t("269936"),
  u = t("647374"),
  h = t("47677"),
  p = t("895530"),
  m = t("915621"),
  g = t("356410");
let f = new RegExp("https?://".concat(null !== (a = window.GLOBAL_ENV.CDN_HOST) && void 0 !== a ? a : ""));

function b(e) {
  return "string" == typeof e.content ? e.content : k(e.content)
}
let y = {
    ...c.defaultRules,
    heading: {
      ...c.defaultRules.heading,
      react(e, r, t) {
        let a = "h".concat(e.level);
        return (0, n.jsx)(p.default, {
          tag: a,
          children: r(e.content, t)
        }, t.key)
      }
    },
    paragraph: {
      ...c.defaultRules.paragraph,
      react: (e, r, t) => (0, n.jsx)("div", {
        className: m.paragraph,
        children: r(e.content, t)
      }, t.key)
    },
    strong: {
      ...c.defaultRules.strong,
      order: 6
    },
    em: {
      ...c.defaultRules.em,
      order: 6
    },
    u: {
      ...c.defaultRules.u,
      order: 5
    },
    del: {
      ...c.defaultRules.del,
      order: 6
    },
    link: {
      ...u.default,
      ...(0, h.default)({
        enableBuildOverrides: !1
      }),
      order: 6
    },
    blockQuote: {
      ...c.defaultRules.blockQuote,
      react: (e, r, t) => (0, n.jsx)("blockquote", {
        className: m.blockquote,
        children: b(e)
      }, t.key)
    },
    image: {
      ...c.defaultRules.image,
      order: 6,
      match(e, r, t) {
        let a = c.defaultRules.image;
        if (null == a || null == a.match) return !1;
        let n = a.match(e, r, t);
        if (null != n && Array.isArray(n) && n.length >= 3) {
          let e = n[2];
          if ("string" == typeof e) return null != e.match(f) ? n : null
        }
        return !1
      }
    },
    inlineCode: {
      ...c.defaultRules.inlineCode,
      order: 6,
      react: (e, r, t) => (0, n.jsx)("code", {
        className: m.codeInline,
        children: b(e)
      }, t.key)
    },
    codeBlock: {
      ...c.defaultRules.codeBlock,
      react(e, r, a) {
        let i = () => (0, n.jsx)("pre", {
          children: (0, n.jsx)("code", {
            className: o(g.scrollbarGhostHairline, "hljs"),
            children: b(e)
          })
        }, a.key);
        return (0, n.jsx)(d.LazyLibrary, {
          createPromise: () => t.el("86256").then(t.bind(t, "86256")),
          webpackId: "86256",
          renderFallback: i,
          render: r => {
            if (!(e.lang && r.hasLanguage(e.lang)) || "string" != typeof e.content) return i();
            {
              let t = r.highlight(e.lang, e.content, !0);
              return null == t ? i() : (0, n.jsx)("pre", {
                children: (0, n.jsx)("code", {
                  className: o(g.scrollbarGhostHairline, "hljs", t.language),
                  dangerouslySetInnerHTML: {
                    __html: t.value
                  }
                })
              }, a.key)
            }
          }
        }, a.key)
      }
    }
  },
  x = c.parserFor(y),
  k = c.reactFor(c.ruleOutput(y, "react"));
class v extends i.PureComponent {
  render() {
    let {
      className: e,
      children: r,
      state: t,
      parser: a,
      output: i
    } = this.props, l = a("".concat(r, "\n\n"), {
      inline: !1,
      ...t
    }), s = i(l);
    return (0, n.jsx)("div", {
      className: o(m.markdown, e),
      children: s
    })
  }
}
v.rules = y, v.defaultProps = {
  parser: x,
  output: k
};
var C = v