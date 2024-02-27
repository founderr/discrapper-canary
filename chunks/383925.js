"use strict";
r.r(t), r.d(t, {
  default: function() {
    return P
  }
});
var a = r("926607");
r("222007"), r("808653"), r("781738"), r("881410"), r("424973");
var n = r("37983"),
  i = r("884691"),
  o = r("10371"),
  l = r.n(o),
  s = r("675576"),
  c = r.n(s),
  d = r("917351"),
  u = r.n(d),
  h = r("703809"),
  p = r("95410"),
  m = r("497991"),
  g = r("928114"),
  f = r("111940"),
  b = r("133198"),
  y = r("77078"),
  x = r("841098"),
  k = r("810567"),
  v = r("945330"),
  C = r("811199"),
  S = r("699412");

function j() {
  let e = (0, a._)(["\n    import {defineColorTokens, themedToken} from '../tools/define';\n\n    const semanticTokenValues = {\n      ", "\n    };\n\n    export const semanticTokens = defineColorTokens(() => semanticTokenValues);\n    export type SemanticTokenValue = typeof semanticTokenValues;\n  "]);
  return j = function() {
    return e
  }, e
}

function T() {
  let e = (0, a._)(["\n      export const rawPalette = {\n        ", "\n      } as const;\n    "]);
  return T = function() {
    return e
  }, e
}
let w = {
    ...b.semanticColorTokens,
    ...m.componentColorTokens,
    ...g.gradients
  },
  N = {
    ...A(b.semanticColorTokens),
    ...A(m.componentColorTokens)
  },
  E = ["100", "130", "160", "200", "230", "260", "300", "330", "345", "360", "400", "430", "460", "500", "530", "560", "600", "630", "645", "660", "700", "730", "760", "800", "830", "860", "900"];

function L(e) {
  var t;
  let r = "string" == typeof e ? 1 : null !== (t = e.opacity) && void 0 !== t ? t : 1,
    a = "string" == typeof e ? e : e.color;
  return {
    color: a,
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

function R(e, t) {
  let [r, a] = i.useState(() => {
    let r = p.default.get(e);
    return null != r ? r : t
  });
  return i.useEffect(() => {
    p.default.set(e, r)
  }, [e, r]), [r, a]
}

function P() {
  let e = (0, x.useTheme)(),
    [{
      rawPalette: t,
      semanticTokens: r
    }, a, o, s, d, p] = function(e, t) {
      let [r, a] = R("".concat(e, "-states"), [t]), [n, o] = R("".concat(e, "-index"), 0), l = r[n], s = i.useCallback(e => {
        let t = [e, ...r].slice(0, 20);
        a(t), o(0)
      }, [o, a, r]), c = i.useCallback(() => {
        o(Math.min(r.length - 1, n + 1))
      }, [n, o, r.length]), d = i.useCallback(() => {
        o(Math.max(0, n - 1))
      }, [n, o]), u = n < r.length - 1, h = n > 0;
      return [l, s, c, d, u, h]
    }("color-override-03-03-23", {
      rawPalette: f.rawPalette,
      semanticTokens: N
    }),
    [m, g] = i.useState(""),
    [b, w] = i.useState({}),
    [L, _] = i.useState({}),
    A = i.useMemo(() => {
      let e = Object.keys(t);
      return e.reduce((e, t) => [...e, {
        value: t,
        label: t
      }], [])
    }, [t]),
    P = i.useCallback((e, n, i, o) => {
      let l = u.cloneDeep(r);
      l[e][n] = {
        color: i,
        opacity: o
      }, a({
        rawPalette: t,
        semanticTokens: l
      })
    }, [r, t, a]),
    M = i.useMemo(() => {
      let a = Object.keys(r).map(t => {
          let a = r[t],
            {
              color: n,
              opacity: i
            } = a[e];
          return "--".concat(t, ": hsl(var(--").concat(n.replace(".", "-"), "-hsl) / ").concat(i, ");")
        }),
        n = Object.keys(t).flatMap(e => {
          let {
            hex: r
          } = t[e], {
            h: a,
            s: n,
            l: i
          } = function(e) {
            let [t, r, a] = "transparent" === e ? [0, 0, 0] : l(e).hsl(), n = isNaN(t) ? 0 : u.round(t, 1), i = u.round(100 * a, 1), o = u.round(100 * r, 1);
            return {
              h: n,
              s: o,
              l: i
            }
          }(r), o = u.kebabCase(e);
          return ["--".concat(o, "-hsl: ").concat(a, " calc(var(--saturation-factor, 1) * ").concat(n, "%) ").concat(i, "% !important;"), "--".concat(o, ": hsl(var(--").concat(o, "-hsl)) !important;")]
        });
      return "\n      .theme-".concat(e, " {\n        ").concat(a.join("\n"), "\n\n        ").concat(Object.keys(b).filter(e => b[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n\n        ").concat(Object.keys(L).filter(e => L[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n      }\n\n      html {\n        ").concat(n.join("\n"), "\n      }\n    ")
    }, [e, r, t, b, L]),
    O = i.useCallback(e => {
      let t = "",
        r = "",
        a = !1;
      return c(j(), Object.keys(e).map(n => {
        (r = n.split("-")[0]) !== t ? (t = r, a = !0) : a = !1;
        let i = e[n],
          o = i.light,
          l = i.dark,
          s = i.midnight,
          c = [
            ["dark", l],
            ["light", o]
          ];
        (s.opacity !== l.opacity || s.color !== l.color) && c.push(["midnight", s]);
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
    I = i.useCallback(e => c(T(), Object.keys(e).map(t => '"'.concat(t, '": {hex: "').concat(e[t].hex, '"}'))), []),
    D = i.useCallback(e => {
      let t = {};
      Object.keys(e).forEach(r => {
        Object.keys(e[r]).map(a => {
          let n = [...E];
          "primary" !== r && (n = n.filter(e => "645" !== e)), t["".concat(r, ".").concat(n[+a])] = {
            hex: e[r][a]
          }
        })
      }), a({
        rawPalette: t,
        semanticTokens: r
      })
    }, [r, a]);
  return (0, n.jsxs)("div", {
    className: S.panel,
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [(0, n.jsxs)("div", {
      className: S.toolbar,
      style: {
        flex: "0 0 34px",
        padding: "0 4px"
      },
      children: [(0, n.jsxs)("div", {
        className: S.toolbarGroup,
        children: [(0, n.jsx)(y.Button, {
          onClick: o,
          disabled: !d,
          size: y.Button.Sizes.MIN,
          children: "Undo"
        }), (0, n.jsx)(y.Button, {
          onClick: s,
          disabled: !p,
          size: y.Button.Sizes.MIN,
          children: "Redo"
        })]
      }), (0, n.jsx)("div", {
        className: S.toolbarDivider
      }), (0, n.jsxs)("div", {
        className: S.toolbarGroup,
        children: [(0, n.jsx)("span", {
          className: S.toolbarGroupLabel,
          children: "Raw"
        }), (0, n.jsx)(y.Button, {
          size: y.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.readText().then(e => {
              D(JSON.parse(e))
            })
          },
          children: "Import"
        }), (0, n.jsx)(y.Button, {
          size: y.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(I(t))
          },
          children: "Export"
        })]
      }), (0, n.jsx)("div", {
        className: S.toolbarDivider
      }), (0, n.jsxs)("div", {
        className: S.toolbarGroup,
        children: [(0, n.jsx)("span", {
          className: S.toolbarGroupLabel,
          children: "Semantic"
        }), (0, n.jsx)(y.Button, {
          size: y.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(O(r))
          },
          children: "Export"
        })]
      }), (0, n.jsx)("div", {
        className: S.toolbarDivider
      }), (0, n.jsx)("div", {
        className: S.toolbarGroup,
        children: (0, n.jsx)(y.Button, {
          size: y.Button.Sizes.MIN,
          type: "reset",
          color: y.Button.Colors.RED,
          onClick: () => {
            a({
              rawPalette: f.rawPalette,
              semanticTokens: N
            })
          },
          children: "Reset all"
        })
      }), (0, n.jsx)("div", {
        className: S.toolbarDivider
      }), (0, n.jsxs)("div", {
        className: S.toolbarGroup,
        style: {
          flexGrow: 1
        },
        children: [(0, n.jsx)(k.default, {
          size: k.default.Sizes.SMALL,
          query: m,
          onChange: g,
          onClear: () => g(""),
          placeholder: "Search tokens",
          "aria-label": "Search tokens"
        }), " "]
      })]
    }), (0, n.jsx)(y.ScrollerThin, {
      children: (0, n.jsx)("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "min-content 1fr 1fr min-content min-content",
          gap: 8,
          margin: 8,
          alignItems: "center"
        },
        children: Object.keys(N).filter(e => "" === m || e.toLowerCase().includes(m)).map(t => {
          var a;
          let o = N[t][e],
            l = null == r[t] ? {
              ...o
            } : r[t][e],
            s = l.color !== o.color || l.opacity !== o.opacity;
          return (0, n.jsxs)(i.Fragment, {
            children: [(0, n.jsx)("div", {
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
              children: (0, n.jsx)(y.Checkbox, {
                value: b[t],
                onChange: () => {
                  w(e => ({
                    ...e,
                    [t]: !e[t]
                  }))
                }
              })
            }), (0, n.jsx)("span", {
              children: t
            }), (0, n.jsx)(y.SearchableSelect, {
              value: l.color,
              options: A,
              onChange: r => {
                P(t, e, r, l.opacity)
              },
              renderOptionPrefix: t => null == t ? null : (0, n.jsx)("div", {
                style: {
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "var(--".concat(t.value.replace(".", "-"), ")"),
                  border: "1px solid ".concat("dark" === e ? "white" : "black")
                }
              }),
              popoutLayerContext: C.devToolsLayerContext
            }), (0, n.jsx)(y.TextInput, {
              type: "number",
              style: {
                width: "4em"
              },
              value: null === (a = l.opacity) || void 0 === a ? void 0 : a.toString(),
              onChange: r => {
                "" !== r && P(t, e, l.color, parseFloat(r))
              }
            }), (0, n.jsx)(y.Clickable, {
              style: s ? {} : {
                opacity: 0,
                pointerEvents: "none"
              },
              onClick: () => {
                var r;
                s && P(t, e, o.color, null !== (r = o.opacity) && void 0 !== r ? r : 1)
              },
              children: (0, n.jsx)(v.default, {
                width: 16,
                height: 16
              })
            })]
          }, t)
        })
      })
    }), (0, n.jsx)(h.Helmet, {
      children: (0, n.jsx)("style", {
        id: "devtools-color-overrides",
        children: M
      })
    })]
  })
}