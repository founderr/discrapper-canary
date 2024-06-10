"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("47120"), s("518263"), s("970173"), s("520712"), s("268111"), s("941497"), s("32026"), s("480839"), s("744285"), s("492257"), s("873817"), s("733860");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("704215"),
  d = s("433517"),
  u = s("481060"),
  c = s("675478"),
  S = s("581883"),
  E = s("285952"),
  T = s("6048"),
  _ = s("154921"),
  I = s("915486"),
  N = s("883904"),
  g = s("68985"),
  f = s("211644"),
  m = s("312244"),
  C = s("611273");

function A(e) {
  let {
    contents: t,
    content: s,
    onChange: n
  } = e, l = (0, I.hasBit)(t, o.DismissibleContent[s]);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(u.FormSwitch, {
      value: l,
      onChange: function() {
        n(s), l ? (0, c.removeDismissedContent)(o.DismissibleContent[s]) : (0, c.addDismissedContent)(o.DismissibleContent[s])
      },
      children: (0, a.jsx)(u.FormText, {
        size: _.default.Sizes.SIZE_16,
        className: C.marginTop4,
        children: "".concat(s.toLowerCase(), " (").concat(o.DismissibleContent[s], ")")
      })
    })
  })
}

function O(e) {
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

function h() {
  var e;
  let t = (0, f.default)(e => e.recentlyShown),
    {
      dailyCapReached: s,
      dailyCapOverridden: l
    } = (0, r.useStateFromStoresObject)([g.default], () => ({
      dailyCapReached: g.default.hasUserHitDCCap(),
      dailyCapOverridden: g.default.dailyCapOverridden
    })),
    [_, I] = n.useState(""),
    A = null !== (e = (0, r.useStateFromStores)([S.default], () => {
      var e;
      return null === (e = S.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
    })) && void 0 !== e ? e : new Uint8Array,
    [h, p] = function(e, t) {
      let [s, a] = n.useState(() => {
        let s = d.Storage.get(e);
        return null != s ? s : t
      });
      return n.useEffect(() => {
        d.Storage.set(e, s)
      }, [e, s]), [s, a]
    }("RecentDismissibleOverrides", []),
    R = e => {
      p(t => {
        let s = new Set(t);
        s.delete(e);
        let a = Array.from(s).slice(0, 4);
        return a.unshift(e), a
      })
    },
    M = t.map(e => o.DismissibleContent[e]),
    x = h.filter(e => e.toLowerCase().includes(_.toLowerCase())).filter(e => !M.includes(e)),
    D = Object.keys(o.DismissibleContent).filter(e => !M.includes(e)).filter(e => !h.includes(e)).filter(e => e.toLowerCase().includes(_.toLowerCase())).sort((e, t) => e.localeCompare(t));
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.FormSection, {
      title: "Dismissible Content Fatigue",
      tag: u.FormTitleTags.H1,
      className: C.marginBottom60,
      children: [(0, a.jsx)(u.FormItem, {
        children: (0, a.jsxs)(u.FormText, {
          className: C.marginBottom4,
          children: ["Daily Cap Reached: ", s ? "Yes" : "No"]
        })
      }), (0, a.jsx)(u.FormSwitch, {
        value: l,
        onChange: N.overrideDismissibleContentFramework,
        children: "Override Dismissible Content Daily Cap"
      }), (0, a.jsxs)(u.FormItem, {
        children: [(0, a.jsx)(u.Button, {
          onClick: () => (0, N.resetDismissibleContentFrameworkStore)(),
          children: "Reset DismissibleContentFrameworkStore"
        }), (0, a.jsx)(u.FormText, {
          className: C.marginTop4,
          children: "This will reset the daily cap and content seen during session"
        })]
      })]
    }), (0, a.jsxs)(u.FormSection, {
      title: "Dismissible Contents",
      tag: u.FormTitleTags.H1,
      children: [(0, a.jsx)(T.default, {
        className: C.marginBottom20,
        size: T.default.Sizes.LARGE,
        query: _,
        onChange: I,
        onClear: () => I("")
      }), (0, a.jsxs)(u.FormItem, {
        className: m.buttonsContainer,
        children: [(0, a.jsx)(u.Button, {
          onClick: c.clearDismissedContents,
          children: "Clear All Dismissed Contents"
        }), (0, a.jsx)(u.Button, {
          onClick: c.checkAllDismissedContents,
          children: "Check All Dismissed Contents"
        })]
      }), t.length > 0 ? (0, a.jsxs)("div", {
        className: C.marginBottom20,
        children: [(0, a.jsx)("div", {
          className: C.marginBottom20,
          children: (0, a.jsx)(u.FormTitle, {
            children: "Recently Shown"
          })
        }), (0, a.jsx)(O, {
          items: M,
          dismissedContents: A,
          handleChange: R
        })]
      }) : null, x.length > 0 ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: C.marginBottom20,
          children: (0, a.jsx)(u.FormTitle, {
            children: "Recent Overrides"
          })
        }), (0, a.jsx)(O, {
          items: x,
          dismissedContents: A,
          handleChange: R
        })]
      }) : null, (0, a.jsx)(E.default, {
        className: i()(C.marginBottom20, C.marginTop20),
        children: (0, a.jsx)(u.FormTitle, {
          children: "Available Dismissible Contents"
        })
      }), (0, a.jsx)(O, {
        items: D,
        dismissedContents: A,
        handleChange: R
      })]
    })]
  })
}