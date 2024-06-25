var a, n, i = t(735250),
  l = t(470079),
  o = t(120356),
  c = t.n(o),
  s = t(302454),
  d = t.n(s),
  u = t(663993),
  h = t(772096),
  m = t(428595),
  g = t(532901),
  p = t(378720),
  b = t(755864),
  y = t(520076);

function x(e, r, t) {
  return r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e
}
let f = new RegExp("https?://".concat(null !== (a = window.GLOBAL_ENV.CDN_HOST) && void 0 !== a ? a : ""));

function k(e) {
  return "string" == typeof e.content ? e.content : w(e.content)
}
let v = {
    ...d().defaultRules,
    heading: {
      ...d().defaultRules.heading,
      react(e, r, t) {
        let a = "h".concat(e.level);
        return (0, i.jsx)(p.Z, {
          tag: a,
          children: r(e.content, t)
        }, t.key)
      }
    },
    paragraph: {
      ...d().defaultRules.paragraph,
      react: (e, r, t) => (0, i.jsx)("div", {
        className: b.paragraph,
        children: r(e.content, t)
      }, t.key)
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
      ...h.ZP,
      ...(0, g.Z)({
        enableBuildOverrides: !1
      }),
      order: 6
    },
    blockQuote: {
      ...d().defaultRules.blockQuote,
      react: (e, r, t) => (0, i.jsx)("blockquote", {
        className: b.blockquote,
        children: k(e)
      }, t.key)
    },
    image: {
      ...d().defaultRules.image,
      order: 6,
      match(e, r, t) {
        let a = d().defaultRules.image;
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
      ...m.Z.RULES.inlineCode,
      order: 6,
      react: (e, r, t) => (0, i.jsx)("code", {
        className: b.codeInline,
        children: k(e)
      }, t.key)
    },
    codeBlock: {
      ...d().defaultRules.codeBlock,
      react(e, r, a) {
        let n = () => (0, i.jsx)("pre", {
          children: (0, i.jsx)("code", {
            className: c()(y.scrollbarGhostHairline, "hljs"),
            children: k(e)
          })
        }, a.key);
        return (0, i.jsx)(u.GI, {
          createPromise: () => Promise.resolve().then(t.bind(t, 364964)),
          webpackId: 364964,
          renderFallback: n,
          render: r => {
            if (!(e.lang && r.hasLanguage(e.lang)) || "string" != typeof e.content) return n();
            {
              let t = r.highlight(e.lang, e.content, !0);
              return null == t ? n() : (0, i.jsx)("pre", {
                children: (0, i.jsx)("code", {
                  className: c()(y.scrollbarGhostHairline, "hljs", t.language),
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
  j = d().parserFor(v),
  w = d().reactFor(d().ruleOutput(v, "react"));
class N extends(n = l.PureComponent) {
  render() {
    let {
      className: e,
      children: r,
      state: t,
      parser: a,
      output: n
    } = this.props, l = n(a("".concat(r, "\n\n"), {
      inline: !1,
      ...t
    }));
    return (0, i.jsx)("div", {
      className: c()(b.markdown, e),
      children: l
    })
  }
}
x(N, "rules", v), x(N, "defaultProps", {
  parser: j,
  output: w
}), r.Z = N