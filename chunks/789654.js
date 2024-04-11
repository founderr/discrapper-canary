"use strict";
r.r(t), r.d(t, {
  default: function() {
    return R
  }
}), r("47120"), r("724458"), r("757143"), r("390547"), r("653041");
var a = r("735250"),
  n = r("470079"),
  i = r("688619"),
  l = r.n(i),
  o = r("221762"),
  s = r.n(o),
  c = r("392711"),
  d = r.n(c),
  u = r("445131"),
  h = r("433517"),
  p = r("640971"),
  m = r("544342"),
  g = r("203165"),
  f = r("559760"),
  b = r("481060"),
  y = r("410030"),
  x = r("6048"),
  k = r("465670"),
  v = r("246992"),
  C = r("779869");

function S(e, t) {
  return !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }))
}

function j() {
  let e = S(["\n    import {defineColorTokens, themedToken} from '../tools/define';\n\n    const semanticTokenValues = {\n      ", "\n    };\n\n    export const semanticTokens = defineColorTokens(() => semanticTokenValues);\n    export type SemanticTokenValue = typeof semanticTokenValues;\n  "]);
  return j = function() {
    return e
  }, e
}

function T() {
  let e = S(["\n      export const rawPalette = {\n        ", "\n      } as const;\n    "]);
  return T = function() {
    return e
  }, e
}
let w = {
    ...f.semanticColorTokens,
    ...p.componentColorTokens,
    ...m.gradients
  },
  N = {
    ...A(f.semanticColorTokens),
    ...A(p.componentColorTokens)
  },
  E = ["100", "130", "160", "200", "230", "260", "300", "330", "345", "360", "400", "430", "460", "500", "530", "560", "600", "630", "645", "660", "700", "730", "760", "800", "830", "860", "900"];

function L(e) {
  var t;
  let r = "string" == typeof e ? 1 : null !== (t = e.opacity) && void 0 !== t ? t : 1;
  return {
    color: "string" == typeof e ? e : e.color,
    opacity: r
  }
}

function _(e) {
  return "name" in e
}

function A(e) {
  let t = {};
  return Object.keys(e).forEach(r => {
    let a = e[r];
    if ("name" in a) a = function e(t) {
      let r = w[t.name];
      return "name" in r ? e(r) : r
    }(a);
    t[r] = {
      light: L(a.light),
      dark: L(a.dark),
      darker: L(null != a.darker ? a.darker : a.dark),
      midnight: L(null != a.midnight ? a.midnight : a.dark)
    }
  }), t
}

function P(e, t) {
  let [r, a] = n.useState(() => {
    let r = h.Storage.get(e);
    return null != r ? r : t
  });
  return n.useEffect(() => {
    h.Storage.set(e, r)
  }, [e, r]), [r, a]
}

function R() {
  let e = (0, y.useTheme)(),
    [{
      rawPalette: t,
      semanticTokens: r
    }, i, o, c, h, p] = function(e, t) {
      let [r, a] = P("".concat(e, "-states"), [t]), [i, l] = P("".concat(e, "-index"), 0), o = r[i], s = n.useCallback(e => {
        a([e, ...r].slice(0, 20)), l(0)
      }, [l, a, r]), c = n.useCallback(() => {
        l(Math.min(r.length - 1, i + 1))
      }, [i, l, r.length]), d = n.useCallback(() => {
        l(Math.max(0, i - 1))
      }, [i, l]), u = i < r.length - 1;
      return [o, s, c, d, u, i > 0]
    }("color-override-03-03-23", {
      rawPalette: g.rawPalette,
      semanticTokens: N
    }),
    [m, f] = n.useState(""),
    [S, w] = n.useState({}),
    [L, _] = n.useState({}),
    A = n.useMemo(() => Object.keys(t).reduce((e, t) => [...e, {
      value: t,
      label: t
    }], []), [t]),
    R = n.useCallback((e, a, n, l) => {
      let o = d().cloneDeep(r);
      o[e][a] = {
        color: n,
        opacity: l
      }, i({
        rawPalette: t,
        semanticTokens: o
      })
    }, [r, t, i]),
    O = n.useMemo(() => {
      let a = Object.keys(r).map(t => {
          let {
            color: a,
            opacity: n
          } = r[t][e];
          return "--".concat(t, ": hsl(var(--").concat(a.replace(".", "-"), "-hsl) / ").concat(n, ");")
        }),
        n = Object.keys(t).flatMap(e => {
          let {
            hex: r
          } = t[e], {
            h: a,
            s: n,
            l: i
          } = function(e) {
            let [t, r, a] = "transparent" === e ? [0, 0, 0] : l()(e).hsl(), n = isNaN(t) ? 0 : d().round(t, 1), i = d().round(100 * a, 1);
            return {
              h: n,
              s: d().round(100 * r, 1),
              l: i
            }
          }(r), o = d().kebabCase(e);
          return ["--".concat(o, "-hsl: ").concat(a, " calc(var(--saturation-factor, 1) * ").concat(n, "%) ").concat(i, "% !important;"), "--".concat(o, ": hsl(var(--").concat(o, "-hsl)) !important;")]
        });
      return "\n      .theme-".concat(e, " {\n        ").concat(a.join("\n"), "\n\n        ").concat(Object.keys(S).filter(e => S[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n\n        ").concat(Object.keys(L).filter(e => L[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n      }\n\n      html {\n        ").concat(n.join("\n"), "\n      }\n    ")
    }, [e, r, t, S, L]),
    M = n.useCallback(e => {
      let t = "",
        r = "",
        a = !1;
      return s()(j(), Object.keys(e).map(n => {
        (r = n.split("-")[0]) !== t ? (t = r, a = !0) : a = !1;
        let i = e[n],
          l = i.light,
          o = i.dark,
          s = i.midnight,
          c = [
            ["dark", o],
            ["light", l]
          ];
        (s.opacity !== o.opacity || s.color !== o.color) && c.push(["midnight", s]);
        let d = c.map(e => {
            let [t, {
              color: r,
              opacity: a
            }] = e;
            return 1 === a ? "".concat(t, ': "').concat(r, '"') : "".concat(t, ': { color: "').concat(r, '", opacity: ').concat(a, " }")
          }).join(",\n"),
          u = '"'.concat(n, '": themedToken({ ').concat(d, " })");
        return "".concat(a ? "\n" : "").concat(u)
      }).join(",\n"))
    }, []),
    I = n.useCallback(e => s()(T(), Object.keys(e).map(t => '"'.concat(t, '": {hex: "').concat(e[t].hex, '"}'))), []),
    D = n.useCallback(e => {
      let t = {};
      Object.keys(e).forEach(r => {
        Object.keys(e[r]).map(a => {
          let n = [...E];
          "primary" !== r && (n = n.filter(e => "645" !== e)), t["".concat(r, ".").concat(n[+a])] = {
            hex: e[r][a]
          }
        })
      }), i({
        rawPalette: t,
        semanticTokens: r
      })
    }, [r, i]);
  return (0, a.jsxs)("div", {
    className: C.panel,
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [(0, a.jsxs)("div", {
      className: C.toolbar,
      style: {
        flex: "0 0 34px",
        padding: "0 4px"
      },
      children: [(0, a.jsxs)("div", {
        className: C.toolbarGroup,
        children: [(0, a.jsx)(b.Button, {
          onClick: o,
          disabled: !h,
          size: b.Button.Sizes.MIN,
          children: "Undo"
        }), (0, a.jsx)(b.Button, {
          onClick: c,
          disabled: !p,
          size: b.Button.Sizes.MIN,
          children: "Redo"
        })]
      }), (0, a.jsx)("div", {
        className: C.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: C.toolbarGroup,
        children: [(0, a.jsx)("span", {
          className: C.toolbarGroupLabel,
          children: "Raw"
        }), (0, a.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.readText().then(e => {
              D(JSON.parse(e))
            })
          },
          children: "Import"
        }), (0, a.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(I(t))
          },
          children: "Export"
        })]
      }), (0, a.jsx)("div", {
        className: C.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: C.toolbarGroup,
        children: [(0, a.jsx)("span", {
          className: C.toolbarGroupLabel,
          children: "Semantic"
        }), (0, a.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(M(r))
          },
          children: "Export"
        })]
      }), (0, a.jsx)("div", {
        className: C.toolbarDivider
      }), (0, a.jsx)("div", {
        className: C.toolbarGroup,
        children: (0, a.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          type: "reset",
          color: b.Button.Colors.RED,
          onClick: () => {
            i({
              rawPalette: g.rawPalette,
              semanticTokens: N
            })
          },
          children: "Reset all"
        })
      }), (0, a.jsx)("div", {
        className: C.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: C.toolbarGroup,
        style: {
          flexGrow: 1
        },
        children: [(0, a.jsx)(x.default, {
          size: x.default.Sizes.SMALL,
          query: m,
          onChange: f,
          onClear: () => f(""),
          placeholder: "Search tokens",
          "aria-label": "Search tokens"
        }), " "]
      })]
    }), (0, a.jsx)(b.ScrollerThin, {
      children: (0, a.jsx)("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "min-content 1fr 1fr min-content min-content",
          gap: 8,
          margin: 8,
          alignItems: "center"
        },
        children: Object.keys(N).filter(e => "" === m || e.toLowerCase().includes(m)).map(t => {
          var i;
          let l = N[t][e],
            o = null == r[t] ? {
              ...l
            } : r[t][e],
            s = o.color !== l.color || o.opacity !== l.opacity;
          return (0, a.jsxs)(n.Fragment, {
            children: [(0, a.jsx)("div", {
              onMouseEnter: () => {
                _(e => ({
                  ...e,
                  [t]: !0
                }))
              },
              onMouseLeave: () => {
                _(e => ({
                  ...e,
                  [t]: !1
                }))
              },
              children: (0, a.jsx)(b.Checkbox, {
                value: S[t],
                onChange: () => {
                  w(e => ({
                    ...e,
                    [t]: !e[t]
                  }))
                }
              })
            }), (0, a.jsx)("span", {
              children: t
            }), (0, a.jsx)(b.SearchableSelect, {
              value: o.color,
              options: A,
              onChange: r => {
                R(t, e, r, o.opacity)
              },
              renderOptionPrefix: t => null == t ? null : (0, a.jsx)("div", {
                style: {
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "var(--".concat(t.value.replace(".", "-"), ")"),
                  border: "1px solid ".concat("dark" === e ? "white" : "black")
                }
              }),
              popoutLayerContext: v.devToolsLayerContext
            }), (0, a.jsx)(b.TextInput, {
              type: "number",
              style: {
                width: "4em"
              },
              value: null === (i = o.opacity) || void 0 === i ? void 0 : i.toString(),
              onChange: r => {
                "" !== r && R(t, e, o.color, parseFloat(r))
              }
            }), (0, a.jsx)(b.Clickable, {
              style: s ? {} : {
                opacity: 0,
                pointerEvents: "none"
              },
              onClick: () => {
                var r;
                s && R(t, e, l.color, null !== (r = l.opacity) && void 0 !== r ? r : 1)
              },
              children: (0, a.jsx)(k.default, {
                width: 16,
                height: 16
              })
            })]
          }, t)
        })
      })
    }), (0, a.jsx)(u.Helmet, {
      children: (0, a.jsx)("style", {
        id: "devtools-color-overrides",
        children: O
      })
    })]
  })
}