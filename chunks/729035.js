"use strict";
l.r(t);
var r, n, a = l("735250"),
  u = l("470079"),
  s = l("120356"),
  i = l.n(s),
  o = l("302454"),
  d = l.n(o),
  c = l("663993"),
  f = l("772096"),
  h = l("428595"),
  p = l("532901"),
  g = l("378720"),
  m = l("496019"),
  b = l("633353");

function j(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
let k = new RegExp("https?://".concat(null !== (r = window.GLOBAL_ENV.CDN_HOST) && void 0 !== r ? r : ""));

function y(e) {
  return "string" == typeof e.content ? e.content : v(e.content)
}
let E = {
    ...d().defaultRules,
    heading: {
      ...d().defaultRules.heading,
      react(e, t, l) {
        let r = "h".concat(e.level);
        return (0, a.jsx)(g.default, {
          tag: r,
          children: t(e.content, l)
        }, l.key)
      }
    },
    paragraph: {
      ...d().defaultRules.paragraph,
      react: (e, t, l) => (0, a.jsx)("div", {
        className: m.paragraph,
        children: t(e.content, l)
      }, l.key)
    },
    strong: {
      ...d().defaultRules.strong,
      order: 6
    },
    em: {
      ...d().defaultRules.em,
      order: 6
    },
    u: {
      ...d().defaultRules.u,
      order: 5
    },
    del: {
      ...d().defaultRules.del,
      order: 6
    },
    link: {
      ...f.default,
      ...(0, p.default)({
        enableBuildOverrides: !1
      }),
      order: 6
    },
    blockQuote: {
      ...d().defaultRules.blockQuote,
      react: (e, t, l) => (0, a.jsx)("blockquote", {
        className: m.blockquote,
        children: y(e)
      }, l.key)
    },
    image: {
      ...d().defaultRules.image,
      order: 6,
      match(e, t, l) {
        let r = d().defaultRules.image;
        if (null == r || null == r.match) return !1;
        let n = r.match(e, t, l);
        if (null != n && Array.isArray(n) && n.length >= 3) {
          let e = n[2];
          if ("string" == typeof e) return null != e.match(k) ? n : null
        }
        return !1
      }
    },
    inlineCode: {
      ...h.default.RULES.inlineCode,
      order: 6,
      react: (e, t, l) => (0, a.jsx)("code", {
        className: m.codeInline,
        children: y(e)
      }, l.key)
    },
    codeBlock: {
      ...d().defaultRules.codeBlock,
      react(e, t, r) {
        let n = () => (0, a.jsx)("pre", {
          children: (0, a.jsx)("code", {
            className: i()(b.scrollbarGhostHairline, "hljs"),
            children: y(e)
          })
        }, r.key);
        return (0, a.jsx)(c.LazyLibrary, {
          createPromise: () => Promise.resolve().then(l.bind(l, "364964")),
          webpackId: "364964",
          renderFallback: n,
          render: t => {
            if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return n();
            {
              let l = t.highlight(e.lang, e.content, !0);
              return null == l ? n() : (0, a.jsx)("pre", {
                children: (0, a.jsx)("code", {
                  className: i()(b.scrollbarGhostHairline, "hljs", l.language),
                  dangerouslySetInnerHTML: {
                    __html: l.value
                  }
                })
              }, r.key)
            }
          }
        }, r.key)
      }
    }
  },
  x = d().parserFor(E),
  v = d().reactFor(d().ruleOutput(E, "react"));
class L extends(n = u.PureComponent) {
  render() {
    let {
      className: e,
      children: t,
      state: l,
      parser: r,
      output: n
    } = this.props, u = n(r("".concat(t, "\n\n"), {
      inline: !1,
      ...l
    }));
    return (0, a.jsx)("div", {
      className: i()(m.markdown, e),
      children: u
    })
  }
}
j(L, "rules", E), j(L, "defaultProps", {
  parser: x,
  output: v
}), t.default = L