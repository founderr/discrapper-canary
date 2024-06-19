t.d(s, {
  Z: function() {
    return g
  }
}), t(47120), t(518263), t(970173), t(520712), t(268111), t(941497), t(32026), t(480839), t(744285), t(492257), t(873817), t(733860);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(704215),
  c = t(433517),
  E = t(481060),
  d = t(675478),
  _ = t(581883),
  T = t(285952),
  S = t(154921),
  u = t(915486),
  I = t(883904),
  N = t(68985),
  A = t(211644),
  C = t(694610),
  O = t(331651);

function m(e) {
  let {
    contents: s,
    content: t,
    onChange: i
  } = e, a = (0, u.jl)(s, o.z[t]);
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)(E.FormSwitch, {
      value: a,
      onChange: function() {
        i(t), a ? (0, d.w9)(o.z[t]) : (0, d.nm)(o.z[t])
      },
      children: (0, n.jsx)(E.FormText, {
        size: S.Z.Sizes.SIZE_16,
        className: O.marginTop4,
        children: "".concat(t.toLowerCase(), " (").concat(o.z[t], ")")
      })
    })
  })
}

function h(e) {
  let {
    items: s,
    dismissedContents: t,
    handleChange: i
  } = e;
  return (0, n.jsx)(n.Fragment, {
    children: s.filter(e => isNaN(Number(e))).map(e => (0, n.jsx)(m, {
      contents: t,
      content: e,
      onChange: i
    }, e))
  })
}

function g() {
  var e;
  let s = (0, A.ZP)(e => e.recentlyShown),
    {
      dailyCapReached: t,
      dailyCapOverridden: a
    } = (0, r.cj)([N.Z], () => ({
      dailyCapReached: N.Z.hasUserHitDCCap(),
      dailyCapOverridden: N.Z.dailyCapOverridden
    })),
    [S, u] = i.useState(""),
    m = null !== (e = (0, r.e7)([_.Z], () => {
      var e;
      return null === (e = _.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
    })) && void 0 !== e ? e : new Uint8Array,
    [g, R] = function(e, s) {
      let [t, n] = i.useState(() => {
        let t = c.K.get(e);
        return null != t ? t : s
      });
      return i.useEffect(() => {
        c.K.set(e, t)
      }, [e, t]), [t, n]
    }("RecentDismissibleOverrides", []),
    M = e => {
      R(s => {
        let t = new Set(s);
        t.delete(e);
        let n = Array.from(t).slice(0, 4);
        return n.unshift(e), n
      })
    },
    x = s.map(e => o.z[e]),
    D = g.filter(e => e.toLowerCase().includes(S.toLowerCase())).filter(e => !x.includes(e)),
    p = Object.keys(o.z).filter(e => !x.includes(e)).filter(e => !g.includes(e)).filter(e => e.toLowerCase().includes(S.toLowerCase())).sort((e, s) => e.localeCompare(s));
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(E.FormSection, {
      title: "Dismissible Content Fatigue",
      tag: E.FormTitleTags.H1,
      className: O.marginBottom60,
      children: [(0, n.jsx)(E.FormItem, {
        children: (0, n.jsxs)(E.FormText, {
          className: O.marginBottom4,
          children: ["Daily Cap Reached: ", t ? "Yes" : "No"]
        })
      }), (0, n.jsx)(E.FormSwitch, {
        value: a,
        onChange: I.Nj,
        children: "Override Dismissible Content Daily Cap"
      }), (0, n.jsxs)(E.FormItem, {
        children: [(0, n.jsx)(E.Button, {
          onClick: () => (0, I.EG)(),
          children: "Reset DismissibleContentFrameworkStore"
        }), (0, n.jsx)(E.FormText, {
          className: O.marginTop4,
          children: "This will reset the daily cap and content seen during session"
        })]
      })]
    }), (0, n.jsxs)(E.FormSection, {
      title: "Dismissible Contents",
      tag: E.FormTitleTags.H1,
      children: [(0, n.jsx)(E.SearchBar, {
        className: O.marginBottom20,
        size: E.SearchBar.Sizes.LARGE,
        query: S,
        onChange: u,
        onClear: () => u("")
      }), (0, n.jsxs)(E.FormItem, {
        className: C.buttonsContainer,
        children: [(0, n.jsx)(E.Button, {
          onClick: d.sr,
          children: "Clear All Dismissed Contents"
        }), (0, n.jsx)(E.Button, {
          onClick: d.bE,
          children: "Check All Dismissed Contents"
        })]
      }), s.length > 0 ? (0, n.jsxs)("div", {
        className: O.marginBottom20,
        children: [(0, n.jsx)("div", {
          className: O.marginBottom20,
          children: (0, n.jsx)(E.FormTitle, {
            children: "Recently Shown"
          })
        }), (0, n.jsx)(h, {
          items: x,
          dismissedContents: m,
          handleChange: M
        })]
      }) : null, D.length > 0 ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
          className: O.marginBottom20,
          children: (0, n.jsx)(E.FormTitle, {
            children: "Recent Overrides"
          })
        }), (0, n.jsx)(h, {
          items: D,
          dismissedContents: m,
          handleChange: M
        })]
      }) : null, (0, n.jsx)(T.Z, {
        className: l()(O.marginBottom20, O.marginTop20),
        children: (0, n.jsx)(E.FormTitle, {
          children: "Available Dismissible Contents"
        })
      }), (0, n.jsx)(h, {
        items: p,
        dismissedContents: m,
        handleChange: M
      })]
    })]
  })
}