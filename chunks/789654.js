"use strict";
r.r(t), r.d(t, {
  default: function() {
    return O
  }
}), r("47120"), r("724458"), r("757143"), r("390547"), r("653041");
var a = r("735250"),
  i = r("470079"),
  l = r("688619"),
  n = r.n(l),
  o = r("221762"),
  s = r.n(o),
  c = r("392711"),
  d = r.n(c),
  u = r("470716"),
  h = r("433517"),
  m = r("640971"),
  p = r("544342"),
  g = r("203165"),
  f = r("559760"),
  y = r("481060"),
  b = r("410030"),
  x = r("6048"),
  k = r("465670"),
  v = r("246992"),
  C = r("277513");

function j(e, t) {
  return !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }))
}

function S() {
  let e = j(["\n    import {defineColorTokens, themedToken} from '../tools/define';\n\n    const semanticTokenValues = {\n      ", "\n    };\n\n    export const semanticTokens = defineColorTokens(() => semanticTokenValues);\n    export type SemanticTokenValue = typeof semanticTokenValues;\n  "]);
  return S = function() {
    return e
  }, e
}

function T() {
  let e = j(["\n      export const rawPalette = {\n        ", "\n      } as const;\n    "]);
  return T = function() {
    return e
  }, e
}
let N = {
    ...f.semanticColorTokens,
    ...m.componentColorTokens,
    ...p.gradients
  },
  w = {
    ...I(f.semanticColorTokens),
    ...I(m.componentColorTokens)
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

function I(e) {
  let t = {};
  return Object.keys(e).forEach(r => {
    let a = e[r];
    if ("name" in a) a = function e(t) {
      let r = N[t.name];
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
    }, l, o, c, h, m] = function(e, t) {
      let [r, a] = R("".concat(e, "-states"), [t]), [l, n] = R("".concat(e, "-index"), 0), o = r[l], s = i.useCallback(e => {
        a([e, ...r].slice(0, 20)), n(0)
      }, [n, a, r]), c = i.useCallback(() => {
        n(Math.min(r.length - 1, l + 1))
      }, [l, n, r.length]), d = i.useCallback(() => {
        n(Math.max(0, l - 1))
      }, [l, n]), u = l < r.length - 1;
      return [o, s, c, d, u, l > 0]
    }("color-override-03-03-23", {
      rawPalette: g.rawPalette,
      semanticTokens: w
    }),
    [p, f] = i.useState(""),
    [j, N] = i.useState({}),
    [L, _] = i.useState({}),
    I = i.useMemo(() => Object.keys(t).reduce((e, t) => [...e, {
      value: t,
      label: t
    }], []), [t]),
    O = i.useCallback((e, a, i, n) => {
      let o = d().cloneDeep(r);
      o[e][a] = {
        color: i,
        opacity: n
      }, l({
        rawPalette: t,
        semanticTokens: o
      })
    }, [r, t, l]),
    D = i.useMemo(() => {
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
            l
          } = function(e) {
            let [t, r, a] = "transparent" === e ? [0, 0, 0] : n()(e).hsl(), i = isNaN(t) ? 0 : d().round(t, 1), l = d().round(100 * a, 1);
            return {
              h: i,
              s: d().round(100 * r, 1),
              l: l
            }
          }(r), o = d().kebabCase(e);
          return ["--".concat(o, "-hsl: ").concat(a, " calc(var(--saturation-factor, 1) * ").concat(i, "%) ").concat(l, "% !important;"), "--".concat(o, ": hsl(var(--").concat(o, "-hsl)) !important;")]
        });
      return "\n      .theme-".concat(e, " {\n        ").concat(a.join("\n"), "\n\n        ").concat(Object.keys(j).filter(e => j[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n\n        ").concat(Object.keys(L).filter(e => L[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n      }\n\n      html {\n        ").concat(i.join("\n"), "\n      }\n    ")
    }, [e, r, t, j, L]),
    A = i.useCallback(e => {
      let t = "",
        r = "",
        a = !1;
      return s()(S(), Object.keys(e).map(i => {
        (r = i.split("-")[0]) !== t ? (t = r, a = !0) : a = !1;
        let l = e[i],
          n = l.light,
          o = l.dark,
          s = l.midnight,
          c = [
            ["dark", o],
            ["light", n]
          ];
        (s.opacity !== o.opacity || s.color !== o.color) && c.push(["midnight", s]);
        let d = c.map(e => {
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
    P = i.useCallback(e => s()(T(), Object.keys(e).map(t => '"'.concat(t, '": {hex: "').concat(e[t].hex, '"}'))), []),
    M = i.useCallback(e => {
      let t = {};
      Object.keys(e).forEach(r => {
        Object.keys(e[r]).map(a => {
          let i = [...E];
          "primary" !== r && (i = i.filter(e => "645" !== e)), t["".concat(r, ".").concat(i[+a])] = {
            hex: e[r][a]
          }
        })
      }), l({
        rawPalette: t,
        semanticTokens: r
      })
    }, [r, l]);
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
        children: [(0, a.jsx)(y.Button, {
          onClick: o,
          disabled: !h,
          size: y.Button.Sizes.MIN,
          children: "Undo"
        }), (0, a.jsx)(y.Button, {
          onClick: c,
          disabled: !m,
          size: y.Button.Sizes.MIN,
          children: "Redo"
        })]
      }), (0, a.jsx)("div", {
        className: C.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: C.toolbarGroup,
        children: [(0, a.jsx)("span", {
          className: C.toolbarGroupLabel,
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
            navigator.clipboard.writeText(P(t))
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
        }), (0, a.jsx)(y.Button, {
          size: y.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(A(r))
          },
          children: "Export"
        })]
      }), (0, a.jsx)("div", {
        className: C.toolbarDivider
      }), (0, a.jsx)("div", {
        className: C.toolbarGroup,
        children: (0, a.jsx)(y.Button, {
          size: y.Button.Sizes.MIN,
          type: "reset",
          color: y.Button.Colors.RED,
          onClick: () => {
            l({
              rawPalette: g.rawPalette,
              semanticTokens: w
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
          query: p,
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
        children: Object.keys(w).filter(e => "" === p || e.toLowerCase().includes(p)).map(t => {
          var l;
          let n = w[t][e],
            o = null == r[t] ? {
              ...n
            } : r[t][e],
            s = o.color !== n.color || o.opacity !== n.opacity;
          return (0, a.jsxs)(i.Fragment, {
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
              children: (0, a.jsx)(y.Checkbox, {
                value: j[t],
                onChange: () => {
                  N(e => ({
                    ...e,
                    [t]: !e[t]
                  }))
                }
              })
            }), (0, a.jsx)("span", {
              children: t
            }), (0, a.jsx)(y.SearchableSelect, {
              value: o.color,
              options: I,
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
              value: null === (l = o.opacity) || void 0 === l ? void 0 : l.toString(),
              onChange: r => {
                "" !== r && O(t, e, o.color, parseFloat(r))
              }
            }), (0, a.jsx)(y.Clickable, {
              style: s ? {} : {
                opacity: 0,
                pointerEvents: "none"
              },
              onClick: () => {
                var r;
                s && O(t, e, n.color, null !== (r = n.opacity) && void 0 !== r ? r : 1)
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
        children: D
      })
    })]
  })
}