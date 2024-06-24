t.d(s, {
  Z: function() {
    return g
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(433517),
  c = t(481060),
  E = t(37234),
  d = t(153867),
  _ = t(425493),
  T = t(607070),
  S = t(304761),
  u = t(865427),
  I = t(358085),
  N = t(210887),
  A = t(981631),
  C = t(689938),
  O = t(81378);
let m = [{
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

function h(e, s) {
  let [t, n] = i.useState(() => {
    let t = o.K.get(e);
    return null != t ? t : s
  });
  return i.useEffect(() => {
    o.K.set(e, t)
  }, [e, t]), [t, n]
}

function g() {
  let [e, s] = i.useState(Math.round(window.outerWidth / window.innerWidth * 100)), {
    platformZoom: t,
    theme: a
  } = (0, r.cj)([N.Z, T.Z], () => ({
    theme: N.Z.theme,
    platformZoom: T.Z.zoom
  })), [o, g] = i.useState("upright"), R = ["normal", "medium", "semibold", "bold", "extrabold"], M = new Map([
    ["normal", 400],
    ["medium", 500],
    ["semibold", 600],
    ["bold", 700],
    ["extrabold", 800]
  ]);
  i.useEffect(() => {
    !I.isPlatformEmbedded && window.addEventListener("resize", () => {
      s(Math.round(window.outerWidth / window.innerWidth * 100))
    })
  }, []);
  let x = I.isPlatformEmbedded ? t : e,
    p = (0, r.e7)([S.C], () => {
      var e, s;
      return (0, u.fD)() ? null === (s = S.C.getCurrentBuildOverride()) || void 0 === s ? void 0 : null === (e = s.overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    [D, L] = h("playground-overrideText", null),
    [P, Z] = h("playground-defaultText", m[0].value),
    f = i.useCallback(e => {
      let s = m.find(s => {
        let {
          value: t
        } = s;
        return t === e
      });
      "" === e || null == e ? (Z(m[0].value), L(null)) : null != s ? Z(s.value) : (Z("custom"), L(e))
    }, [L, Z]);
  return (0, n.jsx)("div", {
    className: O.fullscreen,
    style: {
      "--playground-font-family": "mono" === o ? "gg mono" : "gg sans",
      "--playground-font-style": "italic" === o ? "italic" : "normal"
    },
    children: (0, n.jsxs)(c.FormSection, {
      tag: c.FormTitleTags.H1,
      children: [(0, n.jsxs)("div", {
        className: O.toolbar,
        children: [(0, n.jsxs)("div", {
          children: [(0, n.jsxs)(c.Text, {
            tag: "div",
            variant: "heading-lg/bold",
            style: {
              display: "inline-block"
            },
            children: ["Zoom: ", x, "%"]
          }), null != p ? (0, n.jsxs)(c.Text, {
            tag: "div",
            variant: "heading-lg/bold",
            style: {
              display: "inline-block",
              marginLeft: "1em"
            },
            color: "header-secondary",
            children: ["(", p.id, ")"]
          }) : null]
        }), (0, n.jsx)(c.FormItem, {
          children: (0, n.jsx)(c.SingleSelect, {
            className: O.select,
            options: m,
            onChange: e => f(e),
            value: P
          })
        }), (0, n.jsx)(c.FormItem, {
          children: (0, n.jsx)("div", {
            className: O.input,
            children: (0, n.jsx)(c.TextInput, {
              placeholder: "Enter custom input...",
              value: null != D ? D : "",
              onChange: f
            })
          })
        }), (0, n.jsx)(c.FormItem, {
          children: (0, n.jsx)(c.RadioGroup, {
            withTransparentBackground: !0,
            className: O.theme,
            orientation: "horizontal",
            options: [{
              name: C.Z.Messages.THEME_DARK,
              value: A.BRd.DARK
            }, {
              name: C.Z.Messages.THEME_LIGHT,
              value: A.BRd.LIGHT
            }],
            onChange: e => {
              (0, d.ZI)({
                theme: e.value
              })
            },
            value: a
          })
        }), (0, n.jsx)(c.FormItem, {
          children: (0, n.jsx)(c.RadioGroup, {
            withTransparentBackground: !0,
            className: O.theme,
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
              g(e.value)
            },
            value: o
          })
        }), (0, n.jsx)(_.Z, {
          closeAction: E.xf,
          keybind: "ESC"
        })]
      }), (0, n.jsxs)("div", {
        className: O.textGrid,
        children: [(0, n.jsx)("div", {}), R.map(e => (0, n.jsx)("div", {
          className: O.columnHeading,
          children: (0, n.jsx)(c.Heading, {
            variant: "eyebrow",
            children: e
          })
        }, e)), [10, 12, 14, 15, 16, 18, 20, 24].map(e => (0, n.jsxs)(i.Fragment, {
          children: [(0, n.jsxs)("div", {
            className: O.fontSize,
            children: [(0, n.jsxs)(c.Heading, {
              variant: "eyebrow",
              children: [e, "px"]
            }), 100 !== x ? (0, n.jsxs)(c.Heading, {
              variant: "eyebrow",
              color: "text-muted",
              children: ["(", e * x / 100, ")"]
            }) : null]
          }, e), R.map(s => {
            var t;
            let i = null !== (t = "custom" === P ? D : P) && void 0 !== t ? t : "";
            return (0, n.jsx)("div", {
              className: O.textSample,
              children: (0, n.jsxs)("div", {
                title: "".concat(e, "px at ").concat(s),
                className: l()(O.text, {
                  [O.breakAnywhere]: !i.includes(" ")
                }),
                style: {
                  fontSize: e,
                  fontWeight: M.get(s)
                },
                children: [(0, n.jsx)("p", {
                  children: i
                }), (0, n.jsx)("p", {
                  style: {
                    textTransform: "lowercase"
                  },
                  children: i
                }), (0, n.jsx)("p", {
                  style: {
                    textTransform: "uppercase"
                  },
                  children: i
                })]
              })
            }, "".concat(e, "-").concat(s))
          })]
        }, e))]
      })]
    })
  })
}