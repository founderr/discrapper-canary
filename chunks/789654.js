"use strict";
r.r(t), r.d(t, {
  default: function() {
    return O
  }
}), r("47120"), r("724458"), r("757143"), r("390547"), r("653041");
var a = r("735250"),
  i = r("470079"),
  n = r("688619"),
  l = r.n(n),
  o = r("221762"),
  c = r.n(o),
  s = r("392711"),
  d = r.n(s),
  u = r("470716"),
  h = r("433517"),
  p = r("640971"),
  g = r("544342"),
  m = r("203165"),
  f = r("559760"),
  y = r("481060"),
  b = r("410030"),
  x = r("6048"),
  k = r("465670"),
  v = r("246992"),
  T = r("277513");

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

function w() {
  let e = S(["\n      export const rawPalette = {\n        ", "\n      } as const;\n    "]);
  return w = function() {
    return e
  }, e
}
let E = {
    ...f.semanticColorTokens,
    ...p.componentColorTokens,
    ...g.gradients
  },
  C = {
    ...R(f.semanticColorTokens),
    ...R(p.componentColorTokens)
  },
  N = ["100", "130", "160", "200", "230", "260", "300", "330", "345", "360", "400", "430", "460", "500", "530", "560", "600", "630", "645", "660", "700", "730", "760", "800", "830", "860", "900"];

function _(e) {
  var t;
  let r = "string" == typeof e ? 1 : null !== (t = e.opacity) && void 0 !== t ? t : 1;
  return {
    color: "string" == typeof e ? e : e.color,
    opacity: r
  }
}

function I(e) {
  return "name" in e
}

function R(e) {
  let t = {};
  return Object.keys(e).forEach(r => {
    let a = e[r];
    if ("name" in a) a = function e(t) {
      let r = E[t.name];
      return "name" in r ? e(r) : r
    }(a);
    t[r] = {
      light: _(a.light),
      dark: _(a.dark),
      darker: _(null != a.darker ? a.darker : a.dark),
      midnight: _(null != a.midnight ? a.midnight : a.dark)
    }
  }), t
}

function P(e, t) {
  let [r, a] = i.useState(() => {
    let r = h.Storage.get(e);
    return null != r ? r : t
  });
  return i.useEffect(() => {
    h.Storage.set(e, r)
  }, [e, r]), [r, a]
}

function O() {
  let e = (0, b.useTheme)(),
    [{
      rawPalette: t,
      semanticTokens: r
    }, n, o, s, h, p] = function(e, t) {
      let [r, a] = P("".concat(e, "-states"), [t]), [n, l] = P("".concat(e, "-index"), 0), o = r[n], c = i.useCallback(e => {
        a([e, ...r].slice(0, 20)), l(0)
      }, [l, a, r]), s = i.useCallback(() => {
        l(Math.min(r.length - 1, n + 1))
      }, [n, l, r.length]), d = i.useCallback(() => {
        l(Math.max(0, n - 1))
      }, [n, l]), u = n < r.length - 1;
      return [o, c, s, d, u, n > 0]
    }("color-override-03-03-23", {
      rawPalette: m.rawPalette,
      semanticTokens: C
    }),
    [g, f] = i.useState(""),
    [S, E] = i.useState({}),
    [_, I] = i.useState({}),
    R = i.useMemo(() => Object.keys(t).reduce((e, t) => [...e, {
      value: t,
      label: t
    }], []), [t]),
    O = i.useCallback((e, a, i, l) => {
      let o = d().cloneDeep(r);
      o[e][a] = {
        color: i,
        opacity: l
      }, n({
        rawPalette: t,
        semanticTokens: o
      })
    }, [r, t, n]),
    A = i.useMemo(() => {
      let a = Object.keys(r).map(t => {
          let {
            color: a,
            opacity: i
          } = r[t][e];
          return "--".concat(t, ": hsl(var(--").concat(a.replace(".", "-"), "-hsl) / ").concat(i, ");")
        }),
        i = Object.keys(t).flatMap(e => {
          let {
            hex: r
          } = t[e], {
            h: a,
            s: i,
            l: n
          } = function(e) {
            let [t, r, a] = "transparent" === e ? [0, 0, 0] : l()(e).hsl(), i = isNaN(t) ? 0 : d().round(t, 1), n = d().round(100 * a, 1);
            return {
              h: i,
              s: d().round(100 * r, 1),
              l: n
            }
          }(r), o = d().kebabCase(e);
          return ["--".concat(o, "-hsl: ").concat(a, " calc(var(--saturation-factor, 1) * ").concat(i, "%) ").concat(n, "% !important;"), "--".concat(o, ": hsl(var(--").concat(o, "-hsl)) !important;")]
        });
      return "\n      .theme-".concat(e, " {\n        ").concat(a.join("\n"), "\n\n        ").concat(Object.keys(S).filter(e => S[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n\n        ").concat(Object.keys(_).filter(e => _[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n      }\n\n      html {\n        ").concat(i.join("\n"), "\n      }\n    ")
    }, [e, r, t, S, _]),
    L = i.useCallback(e => {
      let t = "",
        r = "",
        a = !1;
      return c()(j(), Object.keys(e).map(i => {
        (r = i.split("-")[0]) !== t ? (t = r, a = !0) : a = !1;
        let n = e[i],
          l = n.light,
          o = n.dark,
          c = n.midnight,
          s = [
            ["dark", o],
            ["light", l]
          ];
        (c.opacity !== o.opacity || c.color !== o.color) && s.push(["midnight", c]);
        let d = s.map(e => {
            let [t, {
              color: r,
              opacity: a
            }] = e;
            return 1 === a ? "".concat(t, ': "').concat(r, '"') : "".concat(t, ': { color: "').concat(r, '", opacity: ').concat(a, " }")
          }).join(",\n"),
          u = '"'.concat(i, '": themedToken({ ').concat(d, " })");
        return "".concat(a ? "\n" : "").concat(u)
      }).join(",\n"))
    }, []),
    D = i.useCallback(e => c()(w(), Object.keys(e).map(t => '"'.concat(t, '": {hex: "').concat(e[t].hex, '"}'))), []),
    M = i.useCallback(e => {
      let t = {};
      Object.keys(e).forEach(r => {
        Object.keys(e[r]).map(a => {
          let i = [...N];
          "primary" !== r && (i = i.filter(e => "645" !== e)), t["".concat(r, ".").concat(i[+a])] = {
            hex: e[r][a]
          }
        })
      }), n({
        rawPalette: t,
        semanticTokens: r
      })
    }, [r, n]);
  return (0, a.jsxs)("div", {
    className: T.panel,
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [(0, a.jsxs)("div", {
      className: T.toolbar,
      style: {
        flex: "0 0 34px",
        padding: "0 4px"
      },
      children: [(0, a.jsxs)("div", {
        className: T.toolbarGroup,
        children: [(0, a.jsx)(y.Button, {
          onClick: o,
          disabled: !h,
          size: y.Button.Sizes.MIN,
          children: "Undo"
        }), (0, a.jsx)(y.Button, {
          onClick: s,
          disabled: !p,
          size: y.Button.Sizes.MIN,
          children: "Redo"
        })]
      }), (0, a.jsx)("div", {
        className: T.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: T.toolbarGroup,
        children: [(0, a.jsx)("span", {
          className: T.toolbarGroupLabel,
          children: "Raw"
        }), (0, a.jsx)(y.Button, {
          size: y.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.readText().then(e => {
              M(JSON.parse(e))
            })
          },
          children: "Import"
        }), (0, a.jsx)(y.Button, {
          size: y.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(D(t))
          },
          children: "Export"
        })]
      }), (0, a.jsx)("div", {
        className: T.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: T.toolbarGroup,
        children: [(0, a.jsx)("span", {
          className: T.toolbarGroupLabel,
          children: "Semantic"
        }), (0, a.jsx)(y.Button, {
          size: y.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(L(r))
          },
          children: "Export"
        })]
      }), (0, a.jsx)("div", {
        className: T.toolbarDivider
      }), (0, a.jsx)("div", {
        className: T.toolbarGroup,
        children: (0, a.jsx)(y.Button, {
          size: y.Button.Sizes.MIN,
          type: "reset",
          color: y.Button.Colors.RED,
          onClick: () => {
            n({
              rawPalette: m.rawPalette,
              semanticTokens: C
            })
          },
          children: "Reset all"
        })
      }), (0, a.jsx)("div", {
        className: T.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: T.toolbarGroup,
        style: {
          flexGrow: 1
        },
        children: [(0, a.jsx)(x.default, {
          size: x.default.Sizes.SMALL,
          query: g,
          onChange: f,
          onClear: () => f(""),
          placeholder: "Search tokens",
          "aria-label": "Search tokens"
        }), " "]
      })]
    }), (0, a.jsx)(y.ScrollerThin, {
      children: (0, a.jsx)("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "min-content 1fr 1fr min-content min-content",
          gap: 8,
          margin: 8,
          alignItems: "center"
        },
        children: Object.keys(C).filter(e => "" === g || e.toLowerCase().includes(g)).map(t => {
          var n;
          let l = C[t][e],
            o = null == r[t] ? {
              ...l
            } : r[t][e],
            c = o.color !== l.color || o.opacity !== l.opacity;
          return (0, a.jsxs)(i.Fragment, {
            children: [(0, a.jsx)("div", {
              onMouseEnter: () => {
                I(e => ({
                  ...e,
                  [t]: !0
                }))
              },
              onMouseLeave: () => {
                I(e => ({
                  ...e,
                  [t]: !1
                }))
              },
              children: (0, a.jsx)(y.Checkbox, {
                value: S[t],
                onChange: () => {
                  E(e => ({
                    ...e,
                    [t]: !e[t]
                  }))
                }
              })
            }), (0, a.jsx)("span", {
              children: t
            }), (0, a.jsx)(y.SearchableSelect, {
              value: o.color,
              options: R,
              onChange: r => {
                O(t, e, r, o.opacity)
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
            }), (0, a.jsx)(y.TextInput, {
              type: "number",
              style: {
                width: "4em"
              },
              value: null === (n = o.opacity) || void 0 === n ? void 0 : n.toString(),
              onChange: r => {
                "" !== r && O(t, e, o.color, parseFloat(r))
              }
            }), (0, a.jsx)(y.Clickable, {
              style: c ? {} : {
                opacity: 0,
                pointerEvents: "none"
              },
              onClick: () => {
                var r;
                c && O(t, e, l.color, null !== (r = l.opacity) && void 0 !== r ? r : 1)
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
        children: A
      })
    })]
  })
}