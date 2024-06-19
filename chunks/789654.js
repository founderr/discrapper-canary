t.d(r, {
  Z: function() {
    return O
  }
}), t(47120), t(724458), t(757143), t(390547), t(653041);
var a = t(735250),
  i = t(470079),
  n = t(688619),
  o = t.n(n),
  l = t(221762),
  c = t.n(l),
  s = t(392711),
  d = t.n(s),
  u = t(470716),
  h = t(433517),
  m = t(640971),
  g = t(544342),
  p = t(203165),
  b = t(559760),
  y = t(481060),
  x = t(410030),
  f = t(246992),
  k = t(719556);

function v(e, r) {
  return !r && (r = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(r)
    }
  }))
}

function j() {
  let e = v(["\n    import {defineColorTokens, themedToken} from '../tools/define';\n\n    const semanticTokenValues = {\n      ", "\n    };\n\n    export const semanticTokens = defineColorTokens(() => semanticTokenValues);\n    export type SemanticTokenValue = typeof semanticTokenValues;\n  "]);
  return j = function() {
    return e
  }, e
}

function w() {
  let e = v(["\n      export const rawPalette = {\n        ", "\n      } as const;\n    "]);
  return w = function() {
    return e
  }, e
}
let N = {
    ...b.K,
    ...m.J,
    ...g.c
  },
  C = {
    ...E(b.K),
    ...E(m.J)
  },
  S = ["100", "130", "160", "200", "230", "260", "300", "330", "345", "360", "400", "430", "460", "500", "530", "560", "600", "630", "645", "660", "700", "730", "760", "800", "830", "860", "900"];

function T(e) {
  var r;
  let t = "string" == typeof e ? 1 : null !== (r = e.opacity) && void 0 !== r ? r : 1;
  return {
    color: "string" == typeof e ? e : e.color,
    opacity: t
  }
}

function Z(e) {
  return "name" in e
}

function E(e) {
  let r = {};
  return Object.keys(e).forEach(t => {
    let a = e[t];
    if ("name" in a) a = function e(r) {
      let t = N[r.name];
      return "name" in t ? e(t) : t
    }(a);
    r[t] = {
      light: T(a.light),
      dark: T(a.dark),
      darker: T(null != a.darker ? a.darker : a.dark),
      midnight: T(null != a.midnight ? a.midnight : a.dark)
    }
  }), r
}

function _(e, r) {
  let [t, a] = i.useState(() => {
    let t = h.K.get(e);
    return null != t ? t : r
  });
  return i.useEffect(() => {
    h.K.set(e, t)
  }, [e, t]), [t, a]
}

function O() {
  let e = (0, x.Fg)(),
    [{
      rawPalette: r,
      semanticTokens: t
    }, n, l, s, h, m] = function(e, r) {
      let [t, a] = _("".concat(e, "-states"), [r]), [n, o] = _("".concat(e, "-index"), 0), l = t[n], c = i.useCallback(e => {
        a([e, ...t].slice(0, 20)), o(0)
      }, [o, a, t]), s = i.useCallback(() => {
        o(Math.min(t.length - 1, n + 1))
      }, [n, o, t.length]), d = i.useCallback(() => {
        o(Math.max(0, n - 1))
      }, [n, o]), u = n < t.length - 1;
      return [l, c, s, d, u, n > 0]
    }("color-override-03-03-23", {
      rawPalette: p.b,
      semanticTokens: C
    }),
    [g, b] = i.useState(""),
    [v, N] = i.useState({}),
    [T, Z] = i.useState({}),
    E = i.useMemo(() => Object.keys(r).reduce((e, r) => [...e, {
      value: r,
      label: r
    }], []), [r]),
    O = i.useCallback((e, a, i, o) => {
      let l = d().cloneDeep(t);
      l[e][a] = {
        color: i,
        opacity: o
      }, n({
        rawPalette: r,
        semanticTokens: l
      })
    }, [t, r, n]),
    I = i.useMemo(() => {
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
            l: n
          } = function(e) {
            let [r, t, a] = "transparent" === e ? [0, 0, 0] : o()(e).hsl(), i = isNaN(r) ? 0 : d().round(r, 1), n = d().round(100 * a, 1);
            return {
              h: i,
              s: d().round(100 * t, 1),
              l: n
            }
          }(t), l = d().kebabCase(e);
          return ["--".concat(l, "-hsl: ").concat(a, " calc(var(--saturation-factor, 1) * ").concat(i, "%) ").concat(n, "% !important;"), "--".concat(l, ": hsl(var(--").concat(l, "-hsl)) !important;")]
        });
      return "\n      .theme-".concat(e, " {\n        ").concat(a.join("\n"), "\n\n        ").concat(Object.keys(v).filter(e => v[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n\n        ").concat(Object.keys(T).filter(e => T[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n      }\n\n      html {\n        ").concat(i.join("\n"), "\n      }\n    ")
    }, [e, t, r, v, T]),
    R = i.useCallback(e => {
      let r = "",
        t = "",
        a = !1;
      return c()(j(), Object.keys(e).map(i => {
        (t = i.split("-")[0]) !== r ? (r = t, a = !0) : a = !1;
        let n = e[i],
          o = n.light,
          l = n.dark,
          c = n.midnight,
          s = [
            ["dark", l],
            ["light", o]
          ];
        (c.opacity !== l.opacity || c.color !== l.color) && s.push(["midnight", c]);
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
    L = i.useCallback(e => c()(w(), Object.keys(e).map(r => '"'.concat(r, '": {hex: "').concat(e[r].hex, '"}'))), []),
    A = i.useCallback(e => {
      let r = {};
      Object.keys(e).forEach(t => {
        Object.keys(e[t]).map(a => {
          let i = [...S];
          "primary" !== t && (i = i.filter(e => "645" !== e)), r["".concat(t, ".").concat(i[+a])] = {
            hex: e[t][a]
          }
        })
      }), n({
        rawPalette: r,
        semanticTokens: t
      })
    }, [t, n]);
  return (0, a.jsxs)("div", {
    className: k.panel,
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [(0, a.jsxs)("div", {
      className: k.toolbar,
      style: {
        flex: "0 0 34px",
        padding: "0 4px"
      },
      children: [(0, a.jsxs)("div", {
        className: k.toolbarGroup,
        children: [(0, a.jsx)(y.Button, {
          onClick: l,
          disabled: !h,
          size: y.Button.Sizes.MIN,
          children: "Undo"
        }), (0, a.jsx)(y.Button, {
          onClick: s,
          disabled: !m,
          size: y.Button.Sizes.MIN,
          children: "Redo"
        })]
      }), (0, a.jsx)("div", {
        className: k.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: k.toolbarGroup,
        children: [(0, a.jsx)("span", {
          className: k.toolbarGroupLabel,
          children: "Raw"
        }), (0, a.jsx)(y.Button, {
          size: y.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.readText().then(e => {
              A(JSON.parse(e))
            })
          },
          children: "Import"
        }), (0, a.jsx)(y.Button, {
          size: y.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(L(r))
          },
          children: "Export"
        })]
      }), (0, a.jsx)("div", {
        className: k.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: k.toolbarGroup,
        children: [(0, a.jsx)("span", {
          className: k.toolbarGroupLabel,
          children: "Semantic"
        }), (0, a.jsx)(y.Button, {
          size: y.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(R(t))
          },
          children: "Export"
        })]
      }), (0, a.jsx)("div", {
        className: k.toolbarDivider
      }), (0, a.jsx)("div", {
        className: k.toolbarGroup,
        children: (0, a.jsx)(y.Button, {
          size: y.Button.Sizes.MIN,
          type: "reset",
          color: y.Button.Colors.RED,
          onClick: () => {
            n({
              rawPalette: p.b,
              semanticTokens: C
            })
          },
          children: "Reset all"
        })
      }), (0, a.jsx)("div", {
        className: k.toolbarDivider
      }), (0, a.jsxs)("div", {
        className: k.toolbarGroup,
        style: {
          flexGrow: 1
        },
        children: [(0, a.jsx)(y.SearchBar, {
          size: y.SearchBar.Sizes.SMALL,
          query: g,
          onChange: b,
          onClear: () => b(""),
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
        children: Object.keys(C).filter(e => "" === g || e.toLowerCase().includes(g)).map(r => {
          var n;
          let o = C[r][e],
            l = null == t[r] ? {
              ...o
            } : t[r][e],
            c = l.color !== o.color || l.opacity !== o.opacity;
          return (0, a.jsxs)(i.Fragment, {
            children: [(0, a.jsx)("div", {
              onMouseEnter: () => {
                Z(e => ({
                  ...e,
                  [r]: !0
                }))
              },
              onMouseLeave: () => {
                Z(e => ({
                  ...e,
                  [r]: !1
                }))
              },
              children: (0, a.jsx)(y.Checkbox, {
                value: v[r],
                onChange: () => {
                  N(e => ({
                    ...e,
                    [r]: !e[r]
                  }))
                }
              })
            }), (0, a.jsx)("span", {
              children: r
            }), (0, a.jsx)(y.SearchableSelect, {
              value: l.color,
              options: E,
              onChange: t => {
                O(r, e, t, l.opacity)
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
              popoutLayerContext: f.O$
            }), (0, a.jsx)(y.TextInput, {
              type: "number",
              style: {
                width: "4em"
              },
              value: null === (n = l.opacity) || void 0 === n ? void 0 : n.toString(),
              onChange: t => {
                "" !== t && O(r, e, l.color, parseFloat(t))
              }
            }), (0, a.jsx)(y.Clickable, {
              style: c ? {} : {
                opacity: 0,
                pointerEvents: "none"
              },
              onClick: () => {
                var t;
                c && O(r, e, o.color, null !== (t = o.opacity) && void 0 !== t ? t : 1)
              },
              children: (0, a.jsx)(y.CloseSmallIcon, {
                size: "xs",
                color: "currentColor"
              })
            })]
          }, r)
        })
      })
    }), (0, a.jsx)(u.ql, {
      children: (0, a.jsx)("style", {
        id: "devtools-color-overrides",
        children: I
      })
    })]
  })
}