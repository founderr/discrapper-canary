"use strict";
t.r(r), t.d(r, {
  default: function() {
    return I
  }
}), t("47120"), t("724458"), t("757143"), t("390547"), t("653041");
var a = t("735250"),
  i = t("470079"),
  l = t("688619"),
  n = t.n(l),
  o = t("221762"),
  c = t.n(o),
  s = t("392711"),
  d = t.n(s),
  u = t("445131"),
  h = t("433517"),
  m = t("640971"),
  p = t("544342"),
  g = t("203165"),
  f = t("559760"),
  b = t("481060"),
  y = t("410030"),
  x = t("6048"),
  k = t("465670"),
  v = t("246992"),
  j = t("893048");

function C(e, r) {
  return !r && (r = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(r)
    }
  }))
}

function w() {
  let e = C(["\n    import {defineColorTokens, themedToken} from '../tools/define';\n\n    const semanticTokenValues = {\n      ", "\n    };\n\n    export const semanticTokens = defineColorTokens(() => semanticTokenValues);\n    export type SemanticTokenValue = typeof semanticTokenValues;\n  "]);
  return w = function() {
    return e
  }, e
}

function S() {
  let e = C(["\n      export const rawPalette = {\n        ", "\n      } as const;\n    "]);
  return S = function() {
    return e
  }, e
}
let N = {
    ...f.semanticColorTokens,
    ...m.componentColorTokens,
    ...p.gradients
  },
  T = {
    ...R(f.semanticColorTokens),
    ...R(m.componentColorTokens)
  },
  L = ["100", "130", "160", "200", "230", "260", "300", "330", "345", "360", "400", "430", "460", "500", "530", "560", "600", "630", "645", "660", "700", "730", "760", "800", "830", "860", "900"];

function E(e) {
  var r;
  let t = "string" == typeof e ? 1 : null !== (r = e.opacity) && void 0 !== r ? r : 1;
  return {
    color: "string" == typeof e ? e : e.color,
    opacity: t
  }
}

function _(e) {
  return "name" in e
}

function R(e) {
  let r = {};
  return Object.keys(e).forEach(t => {
    let a = e[t];
    if ("name" in a) a = function e(r) {
      let t = N[r.name];
      return "name" in t ? e(t) : t
    }(a);
    r[t] = {
      light: E(a.light),
      dark: E(a.dark),
      darker: E(null != a.darker ? a.darker : a.dark),
      midnight: E(null != a.midnight ? a.midnight : a.dark)
    }
  }), r
}

function D(e, r) {
  let [t, a] = i.useState(() => {
    let t = h.Storage.get(e);
    return null != t ? t : r
  });
  return i.useEffect(() => {
    h.Storage.set(e, t)
  }, [e, t]), [t, a]
}

function I() {
  let e = (0, y.useTheme)(),
    [{
      rawPalette: r,
      semanticTokens: t
    }, l, o, s, h, m] = function(e, r) {
      let [t, a] = D("".concat(e, "-states"), [r]), [l, n] = D("".concat(e, "-index"), 0), o = t[l], c = i.useCallback(e => {
        a([e, ...t].slice(0, 20)), n(0)
      }, [n, a, t]), s = i.useCallback(() => {
        n(Math.min(t.length - 1, l + 1))
      }, [l, n, t.length]), d = i.useCallback(() => {
        n(Math.max(0, l - 1))
      }, [l, n]), u = l < t.length - 1;
      return [o, c, s, d, u, l > 0]
    }("color-override-03-03-23", {
      rawPalette: g.rawPalette,
      semanticTokens: T
    }),
    [p, f] = i.useState(""),
    [C, N] = i.useState({}),
    [E, _] = i.useState({}),
    R = i.useMemo(() => Object.keys(r).reduce((e, r) => [...e, {
      value: r,
      label: r
    }], []), [r]),
    I = i.useCallback((e, a, i, n) => {
      let o = d().cloneDeep(t);
      o[e][a] = {
        color: i,
        opacity: n
      }, l({
        rawPalette: r,
        semanticTokens: o
      })
    }, [t, r, l]),
    O = i.useMemo(() => {
      let a = Object.keys(t).map(r => {
          let {
            color: a,
            opacity: i
          } = t[r][e];
          return "--".concat(r, ": hsl(var(--").concat(a.replace(".", "-"), "-hsl) / ").concat(i, ");")
        }),
        i = Object.keys(r).flatMap(e => {
          let {
            hex: t
          } = r[e], {
            h: a,
            s: i,
            l
          } = function(e) {
            let [r, t, a] = "transparent" === e ? [0, 0, 0] : n()(e).hsl(), i = isNaN(r) ? 0 : d().round(r, 1), l = d().round(100 * a, 1);
            return {
              h: i,
              s: d().round(100 * t, 1),
              l: l
            }
          }(t), o = d().kebabCase(e);
          return ["--".concat(o, "-hsl: ").concat(a, " calc(var(--saturation-factor, 1) * ").concat(i, "%) ").concat(l, "% !important;"), "--".concat(o, ": hsl(var(--").concat(o, "-hsl)) !important;")]
        });
      return "\n      .theme-".concat(e, " {\n        ").concat(a.join("\n"), "\n\n        ").concat(Object.keys(C).filter(e => C[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n\n        ").concat(Object.keys(E).filter(e => E[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n      }\n\n      html {\n        ").concat(i.join("\n"), "\n      }\n    ")
    }, [e, t, r, C, E]),
    P = i.useCallback(e => {
      let r = "",
        t = "",
        a = !1;
      return c()(w(), Object.keys(e).map(i => {
        (t = i.split("-")[0]) !== r ? (r = t, a = !0) : a = !1;
        let l = e[i],
          n = l.light,
          o = l.dark,
          c = l.midnight,
          s = [
            ["dark", o],
            ["light", n]
          ];
        (c.opacity !== o.opacity || c.color !== o.color) && s.push(["midnight", c]);
        let d = s.map(e => {
            let [r, {
              color: t,
              opacity: a
            }] = e;
            return 1 === a ? "".concat(r, ': "').concat(t, '"') : "".concat(r, ': { color: "').concat(t, '", opacity: ').concat(a, " }")
          }).join(",\n"),
          u = '"'.concat(i, '": themedToken({ ').concat(d, " })");
        return "".concat(a ? "\n" : "").concat(u)
      }).join(",\n"))
    }, []),
    A = i.useCallback(e => c()(S(), Object.keys(e).map(r => '"'.concat(r, '": {hex: "').concat(e[r].hex, '"}'))), []),
    B = i.useCallback(e => {
      let r = {};
      Object.keys(e).forEach(t => {
        Object.keys(e[t]).map(a => {
          let i = [...L];
          "primary" !== t && (i = i.filter(e => "645" !== e)), r["".concat(t, ".").concat(i[+a])] = {
            hex: e[t][a]
          }
        })
      }), l({
        rawPalette: r,
        semanticTokens: t
      })
    }, [t, l]);
  return (0, a.jsxs)("div", {
    className: j.panel,
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [(0, a.jsxs)("div", {
      className: j.toolbar,
      style: {
        flex: "0 0 34px",
        padding: "0 4px"
      },
      children: [(0, a.jsxs)("div", {
        className: j.toolbarGroup,
        children: [(0, a.jsx)(b.Button, {
          onClick: o,
          disabled: !h,
          size: b.Button.Sizes.MIN,
          children: "Undo"
        }), (0, a.jsx)(b.Button, {
          onClick: s,
          disabled: !m,
          size: b.Button.Sizes.MIN,
          children: "Redo"
        })]
      }), (0, a.jsx)("div", {
        className: j.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: j.toolbarGroup,
        children: [(0, a.jsx)("span", {
          className: j.toolbarGroupLabel,
          children: "Raw"
        }), (0, a.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.readText().then(e => {
              B(JSON.parse(e))
            })
          },
          children: "Import"
        }), (0, a.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(A(r))
          },
          children: "Export"
        })]
      }), (0, a.jsx)("div", {
        className: j.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: j.toolbarGroup,
        children: [(0, a.jsx)("span", {
          className: j.toolbarGroupLabel,
          children: "Semantic"
        }), (0, a.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(P(t))
          },
          children: "Export"
        })]
      }), (0, a.jsx)("div", {
        className: j.toolbarDivider
      }), (0, a.jsx)("div", {
        className: j.toolbarGroup,
        children: (0, a.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          type: "reset",
          color: b.Button.Colors.RED,
          onClick: () => {
            l({
              rawPalette: g.rawPalette,
              semanticTokens: T
            })
          },
          children: "Reset all"
        })
      }), (0, a.jsx)("div", {
        className: j.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: j.toolbarGroup,
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
    }), (0, a.jsx)(b.ScrollerThin, {
      children: (0, a.jsx)("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "min-content 1fr 1fr min-content min-content",
          gap: 8,
          margin: 8,
          alignItems: "center"
        },
        children: Object.keys(T).filter(e => "" === p || e.toLowerCase().includes(p)).map(r => {
          var l;
          let n = T[r][e],
            o = null == t[r] ? {
              ...n
            } : t[r][e],
            c = o.color !== n.color || o.opacity !== n.opacity;
          return (0, a.jsxs)(i.Fragment, {
            children: [(0, a.jsx)("div", {
              onMouseEnter: () => {
                _(e => ({
                  ...e,
                  [r]: !0
                }))
              },
              onMouseLeave: () => {
                _(e => ({
                  ...e,
                  [r]: !1
                }))
              },
              children: (0, a.jsx)(b.Checkbox, {
                value: C[r],
                onChange: () => {
                  N(e => ({
                    ...e,
                    [r]: !e[r]
                  }))
                }
              })
            }), (0, a.jsx)("span", {
              children: r
            }), (0, a.jsx)(b.SearchableSelect, {
              value: o.color,
              options: R,
              onChange: t => {
                I(r, e, t, o.opacity)
              },
              renderOptionPrefix: r => null == r ? null : (0, a.jsx)("div", {
                style: {
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "var(--".concat(r.value.replace(".", "-"), ")"),
                  border: "1px solid ".concat("dark" === e ? "white" : "black")
                }
              }),
              popoutLayerContext: v.devToolsLayerContext
            }), (0, a.jsx)(b.TextInput, {
              type: "number",
              style: {
                width: "4em"
              },
              value: null === (l = o.opacity) || void 0 === l ? void 0 : l.toString(),
              onChange: t => {
                "" !== t && I(r, e, o.color, parseFloat(t))
              }
            }), (0, a.jsx)(b.Clickable, {
              style: c ? {} : {
                opacity: 0,
                pointerEvents: "none"
              },
              onClick: () => {
                var t;
                c && I(r, e, n.color, null !== (t = n.opacity) && void 0 !== t ? t : 1)
              },
              children: (0, a.jsx)(k.default, {
                width: 16,
                height: 16
              })
            })]
          }, r)
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