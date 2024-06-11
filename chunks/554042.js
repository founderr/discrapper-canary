"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("442837"),
  o = s("433517"),
  d = s("481060"),
  u = s("37234"),
  c = s("153867"),
  S = s("425493"),
  E = s("607070"),
  T = s("304761"),
  _ = s("865427"),
  I = s("358085"),
  N = s("210887"),
  g = s("981631"),
  f = s("689938"),
  m = s("307723");
let A = [{
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

function O() {
  let [e, t] = n.useState(Math.round(window.outerWidth / window.innerWidth * 100)), {
    platformZoom: s,
    theme: i
  } = (0, r.useStateFromStoresObject)([N.default, E.default], () => ({
    theme: N.default.theme,
    platformZoom: E.default.zoom
  })), [o, O] = n.useState("upright"), h = ["normal", "medium", "semibold", "bold", "extrabold"], R = new Map([
    ["normal", 400],
    ["medium", 500],
    ["semibold", 600],
    ["bold", 700],
    ["extrabold", 800]
  ]);
  n.useEffect(() => {
    !I.isPlatformEmbedded && window.addEventListener("resize", () => {
      t(Math.round(window.outerWidth / window.innerWidth * 100))
    })
  }, []);
  let p = I.isPlatformEmbedded ? s : e,
    M = (0, r.useStateFromStores)([T.default], () => {
      var e, t;
      return (0, _.probablyHasBuildOverride)() ? null === (t = T.default.getCurrentBuildOverride()) || void 0 === t ? void 0 : null === (e = t.overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    [D, x] = C("playground-overrideText", null),
    [L, P] = C("playground-defaultText", A[0].value),
    b = n.useCallback(e => {
      let t = A.find(t => {
        let {
          value: s
        } = t;
        return s === e
      });
      "" === e || null == e ? (P(A[0].value), x(null)) : null != t ? P(t.value) : (P("custom"), x(e))
    }, [x, P]);
  return (0, a.jsx)("div", {
    className: m.fullscreen,
    style: {
      "--playground-font-family": "mono" === o ? "gg mono" : "gg sans",
      "--playground-font-style": "italic" === o ? "italic" : "normal"
    },
    children: (0, a.jsxs)(d.FormSection, {
      tag: d.FormTitleTags.H1,
      children: [(0, a.jsxs)("div", {
        className: m.toolbar,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsxs)(d.Text, {
            tag: "div",
            variant: "heading-lg/bold",
            style: {
              display: "inline-block"
            },
            children: ["Zoom: ", p, "%"]
          }), null != M ? (0, a.jsxs)(d.Text, {
            tag: "div",
            variant: "heading-lg/bold",
            style: {
              display: "inline-block",
              marginLeft: "1em"
            },
            color: "header-secondary",
            children: ["(", M.id, ")"]
          }) : null]
        }), (0, a.jsx)(d.FormItem, {
          children: (0, a.jsx)(d.SingleSelect, {
            className: m.select,
            options: A,
            onChange: e => b(e),
            value: L
          })
        }), (0, a.jsx)(d.FormItem, {
          children: (0, a.jsx)("div", {
            className: m.input,
            children: (0, a.jsx)(d.TextInput, {
              placeholder: "Enter custom input...",
              value: null != D ? D : "",
              onChange: b
            })
          })
        }), (0, a.jsx)(d.FormItem, {
          children: (0, a.jsx)(d.RadioGroup, {
            withTransparentBackground: !0,
            className: m.theme,
            orientation: "horizontal",
            options: [{
              name: f.default.Messages.THEME_DARK,
              value: g.ThemeTypes.DARK
            }, {
              name: f.default.Messages.THEME_LIGHT,
              value: g.ThemeTypes.LIGHT
            }],
            onChange: e => {
              (0, c.saveClientTheme)({
                theme: e.value
              })
            },
            value: i
          })
        }), (0, a.jsx)(d.FormItem, {
          children: (0, a.jsx)(d.RadioGroup, {
            withTransparentBackground: !0,
            className: m.theme,
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
              O(e.value)
            },
            value: o
          })
        }), (0, a.jsx)(S.default, {
          closeAction: u.popLayer,
          keybind: "ESC"
        })]
      }), (0, a.jsxs)("div", {
        className: m.textGrid,
        children: [(0, a.jsx)("div", {}), h.map(e => (0, a.jsx)("div", {
          className: m.columnHeading,
          children: (0, a.jsx)(d.Heading, {
            variant: "eyebrow",
            children: e
          })
        }, e)), [10, 12, 14, 15, 16, 18, 20, 24].map(e => (0, a.jsxs)(n.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: m.fontSize,
            children: [(0, a.jsxs)(d.Heading, {
              variant: "eyebrow",
              children: [e, "px"]
            }), 100 !== p ? (0, a.jsxs)(d.Heading, {
              variant: "eyebrow",
              color: "text-muted",
              children: ["(", e * p / 100, ")"]
            }) : null]
          }, e), h.map(t => {
            var s;
            let n = null !== (s = "custom" === L ? D : L) && void 0 !== s ? s : "";
            return (0, a.jsx)("div", {
              className: m.textSample,
              children: (0, a.jsxs)("div", {
                title: "".concat(e, "px at ").concat(t),
                className: l()(m.text, {
                  [m.breakAnywhere]: !n.includes(" ")
                }),
                style: {
                  fontSize: e,
                  fontWeight: R.get(t)
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