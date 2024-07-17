t.d(s, {
  Z: function() {
return O;
  }
}), t(47120), t(518263), t(970173), t(520712), t(268111), t(941497), t(32026), t(480839), t(744285), t(492257), t(873817), t(733860);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(704215),
  c = t(433517),
  d = t(481060),
  _ = t(675478),
  E = t(581883),
  u = t(285952),
  T = t(154921),
  I = t(915486),
  S = t(883904),
  N = t(68985),
  C = t(211644),
  m = t(197369),
  A = t(549856);

function h(e) {
  let {
contents: s,
content: t,
onChange: a
  } = e, i = (0, I.jl)(s, l.z[t]);
  return (0, n.jsx)(n.Fragment, {
children: (0, n.jsx)(d.FormSwitch, {
  value: i,
  onChange: function() {
    a(t), i ? (0, _.w9)(l.z[t]) : (0, _.nm)(l.z[t]);
  },
  children: (0, n.jsx)(d.FormText, {
    size: T.Z.Sizes.SIZE_16,
    className: A.marginTop4,
    children: ''.concat(t.toLowerCase(), ' (').concat(l.z[t], ')')
  })
})
  });
}

function g(e) {
  let {
items: s,
dismissedContents: t,
handleChange: a
  } = e;
  return (0, n.jsx)(n.Fragment, {
children: s.filter(e => isNaN(Number(e))).map(e => (0, n.jsx)(h, {
  contents: t,
  content: e,
  onChange: a
}, e))
  });
}

function O() {
  var e;
  let s = (0, C.ZP)(e => e.recentlyShown),
{
  dailyCapReached: t,
  dailyCapOverridden: i
} = (0, o.cj)([N.Z], () => ({
  dailyCapReached: N.Z.hasUserHitDCCap(),
  dailyCapOverridden: N.Z.dailyCapOverridden
})),
[T, I] = a.useState(''),
h = null !== (e = (0, o.e7)([E.Z], () => {
  var e;
  return null === (e = E.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
})) && void 0 !== e ? e : new Uint8Array(),
[O, p] = function(e, s) {
  let [t, n] = a.useState(() => {
    let t = c.K.get(e);
    return null != t ? t : s;
  });
  return a.useEffect(() => {
    c.K.set(e, t);
  }, [
    e,
    t
  ]), [
    t,
    n
  ];
}('RecentDismissibleOverrides', []),
R = e => {
  p(s => {
    let t = new Set(s);
    t.delete(e);
    let n = Array.from(t).slice(0, 4);
    return n.unshift(e), n;
  });
},
x = s.map(e => l.z[e]),
M = O.filter(e => e.toLowerCase().includes(T.toLowerCase())).filter(e => !x.includes(e)),
D = Object.keys(l.z).filter(e => !x.includes(e)).filter(e => !O.includes(e)).filter(e => e.toLowerCase().includes(T.toLowerCase())).sort((e, s) => e.localeCompare(s));
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)(d.FormSection, {
    title: 'Dismissible Content Fatigue',
    tag: d.FormTitleTags.H1,
    className: A.marginBottom60,
    children: [
      (0, n.jsx)(d.FormItem, {
        children: (0, n.jsxs)(d.FormText, {
          className: A.marginBottom4,
          children: [
            'Daily Cap Reached: ',
            t ? 'Yes' : 'No'
          ]
        })
      }),
      (0, n.jsx)(d.FormSwitch, {
        value: i,
        onChange: S.Nj,
        children: 'Override Dismissible Content Daily Cap'
      }),
      (0, n.jsxs)(d.FormItem, {
        children: [
          (0, n.jsx)(d.Button, {
            onClick: () => (0, S.EG)(),
            children: 'Reset DismissibleContentFrameworkStore'
          }),
          (0, n.jsx)(d.FormText, {
            className: A.marginTop4,
            children: 'This will reset the daily cap and content seen during session'
          })
        ]
      })
    ]
  }),
  (0, n.jsxs)(d.FormSection, {
    title: 'Dismissible Contents',
    tag: d.FormTitleTags.H1,
    children: [
      (0, n.jsx)(d.SearchBar, {
        className: A.marginBottom20,
        size: d.SearchBar.Sizes.LARGE,
        query: T,
        onChange: I,
        onClear: () => I('')
      }),
      (0, n.jsxs)(d.FormItem, {
        className: m.buttonsContainer,
        children: [
          (0, n.jsx)(d.Button, {
            onClick: _.sr,
            children: 'Clear All Dismissed Contents'
          }),
          (0, n.jsx)(d.Button, {
            onClick: _.bE,
            children: 'Check All Dismissed Contents'
          })
        ]
      }),
      s.length > 0 ? (0, n.jsxs)('div', {
        className: A.marginBottom20,
        children: [
          (0, n.jsx)('div', {
            className: A.marginBottom20,
            children: (0, n.jsx)(d.FormTitle, {
              children: 'Recently Shown'
            })
          }),
          (0, n.jsx)(g, {
            items: x,
            dismissedContents: h,
            handleChange: R
          })
        ]
      }) : null,
      M.length > 0 ? (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)('div', {
            className: A.marginBottom20,
            children: (0, n.jsx)(d.FormTitle, {
              children: 'Recent Overrides'
            })
          }),
          (0, n.jsx)(g, {
            items: M,
            dismissedContents: h,
            handleChange: R
          })
        ]
      }) : null,
      (0, n.jsx)(u.Z, {
        className: r()(A.marginBottom20, A.marginTop20),
        children: (0, n.jsx)(d.FormTitle, {
          children: 'Available Dismissible Contents'
        })
      }),
      (0, n.jsx)(g, {
        items: D,
        dismissedContents: h,
        handleChange: R
      })
    ]
  })
]
  });
}