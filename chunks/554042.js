"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("433517"),
  d = s("481060"),
  u = s("37234"),
  c = s("153867"),
  S = s("425493"),
  E = s("607070"),
  T = s("304761"),
  _ = s("865427"),
  f = s("358085"),
  m = s("210887"),
  g = s("981631"),
  I = s("689938"),
  N = s("307723");
let h = [{
  label: "Latin alphabet",
  value: "aBcDeFgHiJkLmNoPqRsTuVwXyZ"
}, {
  label: "Latin pangram",
  value: "The quick brown fox jumps over the lazy dog"
}, {
  label: "Greek alphabet",
  value: "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΆΈΉΊΌΎΏ"
}, {
  label: "Greek pangram",
  value: "ΤΑΧΊΣΤΗ ΑΛΏΠΗΞ ΒΑΦΉΣ ΨΗΜΈΝΗ ΓΗ, ΔΡΑΣΚΕΛΊΖΕΙ ΥΠΈΡ ΝΩΘΡΟΎ ΚΥΝΌΣ"
}, {
  label: "Cyrillic alphabet",
  value: "АБВГЃҐДЕЀЁЖЗИЙЍКЌЛМНОПРСТУЎФХЧЦШЩЏЬЪЫЉЊЅЄЭІЇЈЋЮЯЂѢѲѴ"
}, {
  label: "Cyrillic pangram",
  value: "В ЧАЩАХ ЮГА ЖИЛ БЫ ЦИТРУС? ДА, НО ФАЛЬШИВЫЙ ЭКЗЕМПЛЯР!"
}, {
  label: "Custom",
  value: "custom"
}];

function C(e, t) {
  let [s, a] = n.useState(() => {
    let s = o.Storage.get(e);
    return null != s ? s : t
  });
  return n.useEffect(() => {
    o.Storage.set(e, s)
  }, [e, s]), [s, a]
}

function A() {
  let [e, t] = n.useState(Math.round(window.outerWidth / window.innerWidth * 100)), {
    platformZoom: s,
    theme: l
  } = (0, r.useStateFromStoresObject)([m.default, E.default], () => ({
    theme: m.default.theme,
    platformZoom: E.default.zoom
  })), [o, A] = n.useState("upright"), p = ["normal", "medium", "semibold", "bold", "extrabold"], O = new Map([
    ["normal", 400],
    ["medium", 500],
    ["semibold", 600],
    ["bold", 700],
    ["extrabold", 800]
  ]);
  n.useEffect(() => {
    !f.isPlatformEmbedded && window.addEventListener("resize", () => {
      t(Math.round(window.outerWidth / window.innerWidth * 100))
    })
  }, []);
  let R = f.isPlatformEmbedded ? s : e,
    x = (0, r.useStateFromStores)([T.default], () => {
      var e, t;
      return (0, _.probablyHasBuildOverride)() ? null === (t = T.default.getCurrentBuildOverride()) || void 0 === t ? void 0 : null === (e = t.overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    [M, v] = C("playground-overrideText", null),
    [L, D] = C("playground-defaultText", h[0].value),
    P = n.useCallback(e => {
      let t = h.find(t => {
        let {
          value: s
        } = t;
        return s === e
      });
      "" === e || null == e ? (D(h[0].value), v(null)) : null != t ? D(t.value) : (D("custom"), v(e))
    }, [v, D]);
  return (0, a.jsx)("div", {
    className: N.fullscreen,
    style: {
      "--playground-font-family": "mono" === o ? "gg mono" : "gg sans",
      "--playground-font-style": "italic" === o ? "italic" : "normal"
    },
    children: (0, a.jsxs)(d.FormSection, {
      tag: d.FormTitleTags.H1,
      children: [(0, a.jsxs)("div", {
        className: N.toolbar,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsxs)(d.Text, {
            tag: "div",
            variant: "heading-lg/bold",
            style: {
              display: "inline-block"
            },
            children: ["Zoom: ", R, "%"]
          }), null != x ? (0, a.jsxs)(d.Text, {
            tag: "div",
            variant: "heading-lg/bold",
            style: {
              display: "inline-block",
              marginLeft: "1em"
            },
            color: "header-secondary",
            children: ["(", x.id, ")"]
          }) : null]
        }), (0, a.jsx)(d.FormItem, {
          children: (0, a.jsx)(d.SingleSelect, {
            className: N.select,
            options: h,
            onChange: e => P(e),
            value: L
          })
        }), (0, a.jsx)(d.FormItem, {
          children: (0, a.jsx)("div", {
            className: N.input,
            children: (0, a.jsx)(d.TextInput, {
              placeholder: "Enter custom input...",
              value: null != M ? M : "",
              onChange: P
            })
          })
        }), (0, a.jsx)(d.FormItem, {
          children: (0, a.jsx)(d.RadioGroup, {
            withTransparentBackground: !0,
            className: N.theme,
            orientation: "horizontal",
            options: [{
              name: I.default.Messages.THEME_DARK,
              value: g.ThemeTypes.DARK
            }, {
              name: I.default.Messages.THEME_LIGHT,
              value: g.ThemeTypes.LIGHT
            }],
            onChange: e => {
              (0, c.saveClientTheme)({
                theme: e.value
              })
            },
            value: l
          })
        }), (0, a.jsx)(d.FormItem, {
          children: (0, a.jsx)(d.RadioGroup, {
            withTransparentBackground: !0,
            className: N.theme,
            orientation: "horizontal",
            options: [{
              name: "Upright",
              value: "upright"
            }, {
              name: "Italic",
              value: "italic"
            }, {
              name: "Mono",
              value: "mono"
            }],
            onChange: e => {
              A(e.value)
            },
            value: o
          })
        }), (0, a.jsx)(S.default, {
          closeAction: u.popLayer,
          keybind: "ESC"
        })]
      }), (0, a.jsxs)("div", {
        className: N.textGrid,
        children: [(0, a.jsx)("div", {}), p.map(e => (0, a.jsx)("div", {
          className: N.columnHeading,
          children: (0, a.jsx)(d.Heading, {
            variant: "eyebrow",
            children: e
          })
        }, e)), [10, 12, 14, 15, 16, 18, 20, 24].map(e => (0, a.jsxs)(n.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: N.fontSize,
            children: [(0, a.jsxs)(d.Heading, {
              variant: "eyebrow",
              children: [e, "px"]
            }), 100 !== R ? (0, a.jsxs)(d.Heading, {
              variant: "eyebrow",
              color: "text-muted",
              children: ["(", e * R / 100, ")"]
            }) : null]
          }, e), p.map(t => {
            var s;
            let n = null !== (s = "custom" === L ? M : L) && void 0 !== s ? s : "";
            return (0, a.jsx)("div", {
              className: N.textSample,
              children: (0, a.jsxs)("div", {
                title: "".concat(e, "px at ").concat(t),
                className: i()(N.text, {
                  [N.breakAnywhere]: !n.includes(" ")
                }),
                style: {
                  fontSize: e,
                  fontWeight: O.get(t)
                },
                children: [(0, a.jsx)("p", {
                  children: n
                }), (0, a.jsx)("p", {
                  style: {
                    textTransform: "lowercase"
                  },
                  children: n
                }), (0, a.jsx)("p", {
                  style: {
                    textTransform: "uppercase"
                  },
                  children: n
                })]
              })
            }, "".concat(e, "-").concat(t))
          })]
        }, e))]
      })]
    })
  })
}