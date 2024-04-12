"use strict";
r.r(t);
var a, n, i = r("735250"),
  o = r("470079"),
  l = r("803997"),
  s = r.n(l),
  c = r("302454"),
  d = r.n(c),
  u = r("663993"),
  h = r("772096"),
  p = r("428595"),
  m = r("532901"),
  g = r("378720"),
  f = r("496019"),
  b = r("633353");

function y(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}
let x = new RegExp("https?://".concat(null !== (a = window.GLOBAL_ENV.CDN_HOST) && void 0 !== a ? a : ""));

function k(e) {
  return "string" == typeof e.content ? e.content : S(e.content)
}
let v = {
    ...d().defaultRules,
    heading: {
      ...d().defaultRules.heading,
      react(e, t, r) {
        let a = "h".concat(e.level);
        return (0, i.jsx)(g.default, {
          tag: a,
          children: t(e.content, r)
        }, r.key)
      }
    },
    paragraph: {
      ...d().defaultRules.paragraph,
      react: (e, t, r) => (0, i.jsx)("div", {
        className: f.paragraph,
        children: t(e.content, r)
      }, r.key)
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
      ...h.default,
      ...(0, m.default)({
        enableBuildOverrides: !1
      }),
      order: 6
    },
    blockQuote: {
      ...d().defaultRules.blockQuote,
      react: (e, t, r) => (0, i.jsx)("blockquote", {
        className: f.blockquote,
        children: k(e)
      }, r.key)
    },
    image: {
      ...d().defaultRules.image,
      order: 6,
      match(e, t, r) {
        let a = d().defaultRules.image;
        if (null == a || null == a.match) return !1;
        let n = a.match(e, t, r);
        if (null != n && Array.isArray(n) && n.length >= 3) {
          let e = n[2];
          if ("string" == typeof e) return null != e.match(x) ? n : null
        }
        return !1
      }
    },
    inlineCode: {
      ...p.default.RULES.inlineCode,
      order: 6,
      react: (e, t, r) => (0, i.jsx)("code", {
        className: f.codeInline,
        children: k(e)
      }, r.key)
    },
    codeBlock: {
      ...d().defaultRules.codeBlock,
      react(e, t, a) {
        let n = () => (0, i.jsx)("pre", {
          children: (0, i.jsx)("code", {
            className: s()(b.scrollbarGhostHairline, "hljs"),
            children: k(e)
          })
        }, a.key);
        return (0, i.jsx)(u.LazyLibrary, {
          createPromise: () => Promise.resolve().then(r.bind(r, "364964")),
          webpackId: "364964",
          renderFallback: n,
          render: t => {
            if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return n();
            {
              let r = t.highlight(e.lang, e.content, !0);
              return null == r ? n() : (0, i.jsx)("pre", {
                children: (0, i.jsx)("code", {
                  className: s()(b.scrollbarGhostHairline, "hljs", r.language),
                  dangerouslySetInnerHTML: {
                    __html: r.value
                  }
                })
              }, a.key)
            }
          }
        }, a.key)
      }
    }
  },
  C = d().parserFor(v),
  S = d().reactFor(d().ruleOutput(v, "react"));
class j extends(n = o.PureComponent) {
  render() {
    let {
      className: e,
      children: t,
      state: r,
      parser: a,
      output: n
    } = this.props, o = n(a("".concat(t, "\n\n"), {
      inline: !1,
      ...r
    }));
    return (0, i.jsx)("div", {
      className: s()(f.markdown, e),
      children: o
    })
  }
}
y(j, "rules", v), y(j, "defaultProps", {
  parser: C,
  output: S
}), t.default = j