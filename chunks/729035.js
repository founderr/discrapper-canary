var r, l, a = t(735250),
  s = t(470079),
  o = t(120356),
  i = t.n(o),
  u = t(302454),
  c = t.n(u),
  d = t(663993),
  h = t(772096),
  f = t(428595),
  g = t(532901),
  p = t(378720),
  m = t(755864),
  b = t(520076);

function j(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e
}
let k = new RegExp("https?://".concat(null !== (r = window.GLOBAL_ENV.CDN_HOST) && void 0 !== r ? r : ""));

function x(e) {
  return "string" == typeof e.content ? e.content : E(e.content)
}
let y = {
    ...c().defaultRules,
    heading: {
      ...c().defaultRules.heading,
      react(e, n, t) {
        let r = "h".concat(e.level);
        return (0, a.jsx)(p.Z, {
          tag: r,
          children: n(e.content, t)
        }, t.key)
      }
    },
    paragraph: {
      ...c().defaultRules.paragraph,
      react: (e, n, t) => (0, a.jsx)("div", {
        className: m.paragraph,
        children: n(e.content, t)
      }, t.key)
    },
    strong: {
      ...c().defaultRules.strong,
      order: 6
    },
    em: {
      ...c().defaultRules.em,
      order: 6
    },
    u: {
      ...c().defaultRules.u,
      order: 5
    },
    del: {
      ...c().defaultRules.del,
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
      ...c().defaultRules.blockQuote,
      react: (e, n, t) => (0, a.jsx)("blockquote", {
        className: m.blockquote,
        children: x(e)
      }, t.key)
    },
    image: {
      ...c().defaultRules.image,
      order: 6,
      match(e, n, t) {
        let r = c().defaultRules.image;
        if (null == r || null == r.match) return !1;
        let l = r.match(e, n, t);
        if (null != l && Array.isArray(l) && l.length >= 3) {
          let e = l[2];
          if ("string" == typeof e) return null != e.match(k) ? l : null
        }
        return !1
      }
    },
    inlineCode: {
      ...f.Z.RULES.inlineCode,
      order: 6,
      react: (e, n, t) => (0, a.jsx)("code", {
        className: m.codeInline,
        children: x(e)
      }, t.key)
    },
    codeBlock: {
      ...c().defaultRules.codeBlock,
      react(e, n, r) {
        let l = () => (0, a.jsx)("pre", {
          children: (0, a.jsx)("code", {
            className: i()(b.scrollbarGhostHairline, "hljs"),
            children: x(e)
          })
        }, r.key);
        return (0, a.jsx)(d.GI, {
          createPromise: () => Promise.resolve().then(t.bind(t, 364964)),
          webpackId: 364964,
          renderFallback: l,
          render: n => {
            if (!(e.lang && n.hasLanguage(e.lang)) || "string" != typeof e.content) return l();
            {
              let t = n.highlight(e.lang, e.content, !0);
              return null == t ? l() : (0, a.jsx)("pre", {
                children: (0, a.jsx)("code", {
                  className: i()(b.scrollbarGhostHairline, "hljs", t.language),
                  dangerouslySetInnerHTML: {
                    __html: t.value
                  }
                })
              }, r.key)
            }
          }
        }, r.key)
      }
    }
  },
  v = c().parserFor(y),
  E = c().reactFor(c().ruleOutput(y, "react"));
class N extends(l = s.PureComponent) {
  render() {
    let {
      className: e,
      children: n,
      state: t,
      parser: r,
      output: l
    } = this.props, s = l(r("".concat(n, "\n\n"), {
      inline: !1,
      ...t
    }));
    return (0, a.jsx)("div", {
      className: i()(m.markdown, e),
      children: s
    })
  }
}
j(N, "rules", y), j(N, "defaultProps", {
  parser: v,
  output: E
}), n.Z = N