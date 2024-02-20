"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var r, a = n("37983"),
  l = n("884691"),
  i = n("414456"),
  s = n.n(i),
  u = n("404828"),
  o = n.n(u),
  c = n("269936"),
  d = n("647374"),
  _ = n("47677"),
  f = n("895530"),
  h = n("915621"),
  E = n("356410");
let g = new RegExp("https?://".concat(null !== (r = window.GLOBAL_ENV.CDN_HOST) && void 0 !== r ? r : ""));

function m(e) {
  return "string" == typeof e.content ? e.content : S(e.content)
}
let p = {
    ...o.defaultRules,
    heading: {
      ...o.defaultRules.heading,
      react(e, t, n) {
        let r = "h".concat(e.level);
        return (0, a.jsx)(f.default, {
          tag: r,
          children: t(e.content, n)
        }, n.key)
      }
    },
    paragraph: {
      ...o.defaultRules.paragraph,
      react: (e, t, n) => (0, a.jsx)("div", {
        className: h.paragraph,
        children: t(e.content, n)
      }, n.key)
    },
    strong: {
      ...o.defaultRules.strong,
      order: 6
    },
    em: {
      ...o.defaultRules.em,
      order: 6
    },
    u: {
      ...o.defaultRules.u,
      order: 5
    },
    del: {
      ...o.defaultRules.del,
      order: 6
    },
    link: {
      ...d.default,
      ...(0, _.default)({
        enableBuildOverrides: !1
      }),
      order: 6
    },
    blockQuote: {
      ...o.defaultRules.blockQuote,
      react: (e, t, n) => (0, a.jsx)("blockquote", {
        className: h.blockquote,
        children: m(e)
      }, n.key)
    },
    image: {
      ...o.defaultRules.image,
      order: 6,
      match(e, t, n) {
        let r = o.defaultRules.image;
        if (null == r || null == r.match) return !1;
        let a = r.match(e, t, n);
        if (null != a && Array.isArray(a) && a.length >= 3) {
          let e = a[2];
          if ("string" == typeof e) return null != e.match(g) ? a : null
        }
        return !1
      }
    },
    inlineCode: {
      ...o.defaultRules.inlineCode,
      order: 6,
      react: (e, t, n) => (0, a.jsx)("code", {
        className: h.codeInline,
        children: m(e)
      }, n.key)
    },
    codeBlock: {
      ...o.defaultRules.codeBlock,
      react(e, t, r) {
        let l = () => (0, a.jsx)("pre", {
          children: (0, a.jsx)("code", {
            className: s(E.scrollbarGhostHairline, "hljs"),
            children: m(e)
          })
        }, r.key);
        return (0, a.jsx)(c.LazyLibrary, {
          createPromise: () => n.el("86256").then(n.bind(n, "86256")),
          webpackId: "86256",
          renderFallback: l,
          render: t => {
            if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return l();
            {
              let n = t.highlight(e.lang, e.content, !0);
              return null == n ? l() : (0, a.jsx)("pre", {
                children: (0, a.jsx)("code", {
                  className: s(E.scrollbarGhostHairline, "hljs", n.language),
                  dangerouslySetInnerHTML: {
                    __html: n.value
                  }
                })
              }, r.key)
            }
          }
        }, r.key)
      }
    }
  },
  A = o.parserFor(p),
  S = o.reactFor(o.ruleOutput(p, "react"));
class T extends l.PureComponent {
  render() {
    let {
      className: e,
      children: t,
      state: n,
      parser: r,
      output: l
    } = this.props, i = r("".concat(t, "\n\n"), {
      inline: !1,
      ...n
    }), u = l(i);
    return (0, a.jsx)("div", {
      className: s(h.markdown, e),
      children: u
    })
  }
}
T.rules = p, T.defaultProps = {
  parser: A,
  output: S
};
var v = T