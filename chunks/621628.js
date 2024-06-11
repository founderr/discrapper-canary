"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("47120"), s("518263"), s("970173"), s("520712"), s("268111"), s("941497"), s("32026"), s("480839"), s("744285"), s("492257"), s("873817"), s("733860");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("442837"),
  o = s("704215"),
  d = s("433517"),
  u = s("481060"),
  c = s("675478"),
  S = s("581883"),
  E = s("285952"),
  T = s("154921"),
  _ = s("915486"),
  I = s("883904"),
  N = s("68985"),
  g = s("211644"),
  f = s("312244"),
  m = s("611273");

function A(e) {
  let {
    contents: t,
    content: s,
    onChange: n
  } = e, i = (0, _.hasBit)(t, o.DismissibleContent[s]);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(u.FormSwitch, {
      value: i,
      onChange: function() {
        n(s), i ? (0, c.removeDismissedContent)(o.DismissibleContent[s]) : (0, c.addDismissedContent)(o.DismissibleContent[s])
      },
      children: (0, a.jsx)(u.FormText, {
        size: T.default.Sizes.SIZE_16,
        className: m.marginTop4,
        children: "".concat(s.toLowerCase(), " (").concat(o.DismissibleContent[s], ")")
      })
    })
  })
}

function C(e) {
  let {
    items: t,
    dismissedContents: s,
    handleChange: n
  } = e;
  return (0, a.jsx)(a.Fragment, {
    children: t.filter(e => isNaN(Number(e))).map(e => (0, a.jsx)(A, {
      contents: s,
      content: e,
      onChange: n
    }, e))
  })
}

function O() {
  var e;
  let t = (0, g.default)(e => e.recentlyShown),
    {
      dailyCapReached: s,
      dailyCapOverridden: i
    } = (0, r.useStateFromStoresObject)([N.default], () => ({
      dailyCapReached: N.default.hasUserHitDCCap(),
      dailyCapOverridden: N.default.dailyCapOverridden
    })),
    [T, _] = n.useState(""),
    A = null !== (e = (0, r.useStateFromStores)([S.default], () => {
      var e;
      return null === (e = S.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
    })) && void 0 !== e ? e : new Uint8Array,
    [O, h] = function(e, t) {
      let [s, a] = n.useState(() => {
        let s = d.Storage.get(e);
        return null != s ? s : t
      });
      return n.useEffect(() => {
        d.Storage.set(e, s)
      }, [e, s]), [s, a]
    }("RecentDismissibleOverrides", []),
    R = e => {
      h(t => {
        let s = new Set(t);
        s.delete(e);
        let a = Array.from(s).slice(0, 4);
        return a.unshift(e), a
      })
    },
    p = t.map(e => o.DismissibleContent[e]),
    M = O.filter(e => e.toLowerCase().includes(T.toLowerCase())).filter(e => !p.includes(e)),
    D = Object.keys(o.DismissibleContent).filter(e => !p.includes(e)).filter(e => !O.includes(e)).filter(e => e.toLowerCase().includes(T.toLowerCase())).sort((e, t) => e.localeCompare(t));
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.FormSection, {
      title: "Dismissible Content Fatigue",
      tag: u.FormTitleTags.H1,
      className: m.marginBottom60,
      children: [(0, a.jsx)(u.FormItem, {
        children: (0, a.jsxs)(u.FormText, {
          className: m.marginBottom4,
          children: ["Daily Cap Reached: ", s ? "Yes" : "No"]
        })
      }), (0, a.jsx)(u.FormSwitch, {
        value: i,
        onChange: I.overrideDismissibleContentFramework,
        children: "Override Dismissible Content Daily Cap"
      }), (0, a.jsxs)(u.FormItem, {
        children: [(0, a.jsx)(u.Button, {
          onClick: () => (0, I.resetDismissibleContentFrameworkStore)(),
          children: "Reset DismissibleContentFrameworkStore"
        }), (0, a.jsx)(u.FormText, {
          className: m.marginTop4,
          children: "This will reset the daily cap and content seen during session"
        })]
      })]
    }), (0, a.jsxs)(u.FormSection, {
      title: "Dismissible Contents",
      tag: u.FormTitleTags.H1,
      children: [(0, a.jsx)(u.SearchBar, {
        className: m.marginBottom20,
        size: u.SearchBar.Sizes.LARGE,
        query: T,
        onChange: _,
        onClear: () => _("")
      }), (0, a.jsxs)(u.FormItem, {
        className: f.buttonsContainer,
        children: [(0, a.jsx)(u.Button, {
          onClick: c.clearDismissedContents,
          children: "Clear All Dismissed Contents"
        }), (0, a.jsx)(u.Button, {
          onClick: c.checkAllDismissedContents,
          children: "Check All Dismissed Contents"
        })]
      }), t.length > 0 ? (0, a.jsxs)("div", {
        className: m.marginBottom20,
        children: [(0, a.jsx)("div", {
          className: m.marginBottom20,
          children: (0, a.jsx)(u.FormTitle, {
            children: "Recently Shown"
          })
        }), (0, a.jsx)(C, {
          items: p,
          dismissedContents: A,
          handleChange: R
        })]
      }) : null, M.length > 0 ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: m.marginBottom20,
          children: (0, a.jsx)(u.FormTitle, {
            children: "Recent Overrides"
          })
        }), (0, a.jsx)(C, {
          items: M,
          dismissedContents: A,
          handleChange: R
        })]
      }) : null, (0, a.jsx)(E.default, {
        className: l()(m.marginBottom20, m.marginTop20),
        children: (0, a.jsx)(u.FormTitle, {
          children: "Available Dismissible Contents"
        })
      }), (0, a.jsx)(C, {
        items: D,
        dismissedContents: A,
        handleChange: R
      })]
    })]
  })
}