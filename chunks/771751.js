t.d(r, {
  Z: function() {
return T;
  }
}), t(47120);
var a = t(735250),
  n = t(470079),
  i = t(120356),
  o = t.n(i),
  l = t(544891),
  c = t(704215),
  s = t(481060),
  d = t(937579),
  u = t(675478),
  h = t(295226),
  m = t(572004),
  g = t(74538),
  p = t(246992),
  b = t(981631),
  f = t(474936),
  x = t(979756),
  y = t(751544);
let k = async () => {
  try {
let {
  body: e
} = await l.tn.get({
  url: b.ANM.USER_OFFER_IDS
});
return e;
  } catch (e) {
return [];
  }
}, v = async (e, r) => {
  try {
await l.tn.post({
  url: b.ANM.CREATE_USER_OFFER(e, r)
});
  } catch {} finally {
await (0, d.T)();
  }
}, _ = async (e, r) => {
  try {
await l.tn.del({
  url: b.ANM.DELETE_USER_OFFER(e, r)
});
  } catch {} finally {
await (0, d.T)();
  }
}, j = async (e, r) => {
  try {
await l.tn.post({
  url: b.ANM.UNACK_USER_OFFER(e, r)
});
  } catch {} finally {
await (0, d.T)();
  }
}, w = async () => {
  try {
let {
  body: e
} = await l.tn.get({
  url: b.ANM.USER_OFFERS
});
return e;
  } catch (e) {
return {
  trial: [],
  discount: []
};
  }
}, C = async () => {
  try {
await l.tn.del({
  url: b.ANM.USER_OFFERS
});
  } catch {} finally {
await h.Z.forceReset(), await (0, d.T)();
  }
};

function S(e) {
  var r, t, i, l;
  let {
offer: c,
offerOptions: u,
forceRefetch: h
  } = e, [p, b] = n.useState(!1), [x, k] = n.useState(!1), [v, w] = n.useState(!1), [C, S] = n.useState(!1);
  n.useEffect(() => {
v && S(!0);
let e = setTimeout(() => {
  S(!1);
}, 500);
return () => {
  clearTimeout(e);
};
  }, [v]);
  let {
id: N,
expires_at: T,
redeemed_at: E,
trial_id: Z,
subscription_trial: I
  } = c, R = null !== (t = null === (r = u.find(e => {
let {
  value: r
} = e;
return r === Z;
  })) || void 0 === r ? void 0 : r.label) && void 0 !== t ? t : 'Unknown', O = null != T, B = null != T && new Date(T).getTime() < Date.now(), P = (null == I ? void 0 : I.sku_id) === f.Si.TIER_0, A = async () => {
w(!0), O ? await j(N, 'trial') : await (0, d.a)(c), h(), w(!1);
  };
  n.useEffect(() => {
if (p) {
  let e = setTimeout(() => {
    b(!1);
  }, 3000);
  return () => {
    clearTimeout(e);
  };
}
if (x) {
  let e = setTimeout(() => {
    k(!1);
  }, 3000);
  return () => {
    clearTimeout(e);
  };
}
  }, [
p,
x
  ]);
  let D = 'Active';
  return O && (D = 'Acknowledged'), B && (D = 'Expired'), (0, a.jsxs)('div', {
className: o()(y.card, P ? y.gradientWrapperTier0 : y.gradientWrapperTier2),
children: [
  (0, a.jsxs)('div', {
    className: o()(y.row, y.nameRow),
    children: [
      (0, a.jsx)(s.Heading, {
        variant: 'heading-lg/semibold',
        color: 'always-white',
        children: R
      }),
      (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          w(!0), await _(N, 'trial'), h(), w(!1);
        },
        children: (0, a.jsx)(s.TrashIcon, {
          size: 'md',
          color: 'currentColor',
          className: o()(y.icon, y.trashIcon)
        })
      })
    ]
  }),
  (0, a.jsxs)(s.Clickable, {
    className: o()(y.row, y.idRow),
    onClick: () => {
      (0, m.JG)(N), b(!0);
    },
    children: [
      (0, a.jsxs)(s.Text, {
        variant: 'eyebrow',
        color: 'always-white',
        children: [
          'Offer: ',
          N
        ]
      }),
      p ? (0, a.jsx)(s.CheckmarkLargeIcon, {
        size: 'md',
        color: 'currentColor',
        className: o()(y.icon, y.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: 'xs',
        color: 'currentColor',
        className: y.icon
      })
    ]
  }),
  (0, a.jsxs)(s.Clickable, {
    className: o()(y.row, y.idRow),
    onClick: () => {
      (0, m.JG)(Z), k(!0);
    },
    children: [
      (0, a.jsxs)(s.Text, {
        variant: 'eyebrow',
        color: 'always-white',
        children: [
          'Trial: ',
          Z
        ]
      }),
      x ? (0, a.jsx)(s.CheckmarkLargeIcon, {
        size: 'md',
        color: 'currentColor',
        className: o()(y.icon, y.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: 'xs',
        color: 'currentColor',
        className: y.icon
      })
    ]
  }),
  (0, a.jsx)('div', {
    children: (0, a.jsxs)(s.Text, {
      variant: 'eyebrow',
      color: 'always-white',
      children: [
        'Trial Length:',
        ' ',
        (0, g.if)({
          intervalType: null !== (i = null == I ? void 0 : I.interval) && void 0 !== i ? i : f.rV.MONTH,
          intervalCount: null !== (l = null == I ? void 0 : I.interval_count) && void 0 !== l ? l : 1,
          capitalize: !1
        })
      ]
    })
  }),
  (0, a.jsxs)('div', {
    className: y.badgeContainer,
    children: [
      (0, a.jsx)(s.Clickable, {
        onClick: A,
        className: o()(y.badge, y.clickable, {
          [y.acked]: O,
          [y.expired]: B
        }),
        children: (0, a.jsx)(s.Text, {
          variant: 'eyebrow',
          color: 'Acknowledged' === D ? void 0 : 'always-white',
          children: D
        })
      }),
      null != E && (0, a.jsx)('div', {
        className: o()(y.badge, y.__invalid_badgeBottom, y.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: 'eyebrow',
          color: 'always-white',
          children: 'Redeemed'
        })
      })
    ]
  }),
  (0, a.jsx)('div', {
    className: o()(y.loadingContainer, {
      [y.isLoading]: v || C
    }),
    children: (0, a.jsx)(s.Spinner, {})
  })
]
  });
}

function N(e) {
  var r, t;
  let {
offer: i,
offerOptions: l,
forceRefetch: c
  } = e, [u, h] = n.useState(!1), [g, p] = n.useState(!1), [b, f] = n.useState(!1), [x, k] = n.useState(!1);
  n.useEffect(() => {
b && k(!0);
let e = setTimeout(() => {
  k(!1);
}, 500);
return () => {
  clearTimeout(e);
};
  }, [b]);
  let {
id: v,
expires_at: w,
applied_at: C,
discount_id: S,
discount: N
  } = i, T = null !== (t = null === (r = l.find(e => {
let {
  value: r
} = e;
return r === S;
  })) || void 0 === r ? void 0 : r.label) && void 0 !== t ? t : 'Unknown', E = null != w, Z = null != w && new Date(w).getTime() < Date.now(), I = async () => {
f(!0), E ? await j(v, 'discount') : await (0, d.a)(void 0, i), c(), f(!1);
  };
  n.useEffect(() => {
if (u) {
  let e = setTimeout(() => {
    h(!1);
  }, 3000);
  return () => {
    clearTimeout(e);
  };
}
if (g) {
  let e = setTimeout(() => {
    p(!1);
  }, 3000);
  return () => {
    clearTimeout(e);
  };
}
  }, [
u,
g
  ]);
  let R = 'Active';
  return Z && (R = 'Expired'), E && (R = 'Acknowledged'), (0, a.jsxs)('div', {
className: o()(y.card, y.discount),
children: [
  (0, a.jsxs)('div', {
    className: o()(y.row, y.nameRow),
    children: [
      (0, a.jsx)(s.Heading, {
        variant: 'heading-lg/semibold',
        color: 'text-normal',
        children: T
      }),
      (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          f(!0), await _(v, 'discount'), c(), f(!1);
        },
        children: (0, a.jsx)(s.TrashIcon, {
          size: 'md',
          color: 'currentColor',
          className: o()(y.icon, y.trashIcon)
        })
      })
    ]
  }),
  (0, a.jsxs)(s.Clickable, {
    className: o()(y.row, y.idRow),
    onClick: () => {
      (0, m.JG)(v), h(!0);
    },
    children: [
      (0, a.jsxs)(s.Text, {
        variant: 'eyebrow',
        color: 'text-normal',
        children: [
          'Offer: ',
          v
        ]
      }),
      u ? (0, a.jsx)(s.CheckmarkLargeIcon, {
        size: 'md',
        color: 'currentColor',
        className: o()(y.icon, y.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: 'xs',
        color: 'currentColor',
        className: y.icon
      })
    ]
  }),
  (0, a.jsxs)(s.Clickable, {
    className: o()(y.row, y.idRow),
    onClick: () => {
      (0, m.JG)(S), p(!0);
    },
    children: [
      (0, a.jsxs)(s.Text, {
        variant: 'eyebrow',
        color: 'text-normal',
        children: [
          'Discount: ',
          S
        ]
      }),
      g ? (0, a.jsx)(s.CheckmarkLargeIcon, {
        size: 'md',
        color: 'currentColor',
        className: o()(y.icon, y.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: 'xs',
        color: 'currentColor',
        className: y.icon
      })
    ]
  }),
  (0, a.jsx)('div', {
    children: (0, a.jsxs)(s.Text, {
      variant: 'eyebrow',
      color: 'text-normal',
      children: [
        N.amount,
        '% off'
      ]
    })
  }),
  (0, a.jsxs)('div', {
    className: y.badgeContainer,
    children: [
      (0, a.jsx)(s.Clickable, {
        onClick: I,
        className: o()(y.badge, y.clickable, {
          [y.acked]: E,
          [y.expired]: Z
        }),
        children: (0, a.jsx)(s.Text, {
          variant: 'eyebrow',
          color: 'Acknowledged' === R ? void 0 : 'always-white',
          children: R
        })
      }),
      null != C && (0, a.jsx)('div', {
        className: o()(y.badge, y.__invalid_badgeBottom, y.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: 'eyebrow',
          color: 'always-white',
          children: 'Applied'
        })
      })
    ]
  }),
  (0, a.jsx)('div', {
    className: o()(y.loadingContainer, {
      [y.isLoading]: b || x
    }),
    children: (0, a.jsx)(s.Spinner, {})
  })
]
  });
}

function T() {
  let [e, r] = n.useState([]), [t, i] = n.useState([]), [l, m] = n.useState(), [g, b] = n.useState(), [f, _] = n.useState([]), [j, T] = n.useState([]), [E, Z] = n.useState(!0);
  n.useEffect(() => {
(0 === e.length || 0 === t.length || E) && k().then(e => {
  let t = Object.keys(e.trial).map(r => ({
      label: r,
      value: e.trial[r]
    })),
    a = Object.keys(e.discount).map(r => ({
      label: r,
      value: e.discount[r]
    }));
  r(t), i(a), null == l && m(t[0].value), null == g && b(a[0].value);
});
  }, [
e,
t,
l,
g,
E
  ]), n.useEffect(() => {
E && (Z(!1), h.Z.forceReset(), (0, d.T)(), w().then(e => {
  _(e.trial.sort((e, r) => e.id.localeCompare(r.id))), T(e.discount.sort((e, r) => e.id.localeCompare(r.id)));
}));
  }, [E]);
  let I = async () => {
null != l && (await v(l, 'trial'), Z(!0));
  }, R = async () => {
null != g && (await v(g, 'discount'), Z(!0));
  }, O = async () => {
await C(), Z(!0);
  };
  return (0, a.jsx)(s.ScrollerThin, {
className: o()(x.panel),
children: (0, a.jsxs)('div', {
  className: y.panelInner,
  children: [
    (0, a.jsxs)('section', {
      className: y.section,
      children: [
        (0, a.jsx)(s.Heading, {
          variant: 'heading-md/semibold',
          children: 'Utils'
        }),
        (0, a.jsxs)('div', {
          className: y.buttons,
          children: [
            (0, a.jsx)(s.Button, {
              size: s.Button.Sizes.SMALL,
              onClick: O,
              children: 'Clear all User Offers'
            }),
            (0, a.jsx)(s.Button, {
              size: s.Button.Sizes.SMALL,
              onClick: () => (0, u.w9)(c.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
              children: 'Clear Mobile Trials DismissibleContent'
            }),
            (0, a.jsx)(s.Button, {
              size: s.Button.Sizes.SMALL,
              onClick: () => Z(!0),
              children: 'Refresh DevTools'
            })
          ]
        })
      ]
    }),
    (0, a.jsxs)('section', {
      className: y.section,
      children: [
        (0, a.jsx)(s.Heading, {
          variant: 'heading-md/semibold',
          children: 'Create a Trial Offer'
        }),
        (0, a.jsxs)('div', {
          className: y.inputRow,
          children: [
            (0, a.jsx)(s.Select, {
              className: y.input,
              options: e,
              isSelected: e => l === e,
              placeholder: 'Trial Type',
              serialize: e => String(e),
              select: e => m(e),
              popoutLayerContext: p.O$
            }),
            (0, a.jsx)(s.Button, {
              onClick: I,
              children: 'Create'
            })
          ]
        })
      ]
    }),
    (0, a.jsxs)('section', {
      className: y.section,
      children: [
        (0, a.jsx)(s.Heading, {
          variant: 'heading-md/semibold',
          children: 'Create a Discount Offer'
        }),
        (0, a.jsxs)('div', {
          className: y.inputRow,
          children: [
            (0, a.jsx)(s.Select, {
              className: y.input,
              options: t,
              isSelected: e => g === e,
              placeholder: 'Discount Type',
              serialize: e => String(e),
              select: e => b(e),
              popoutLayerContext: p.O$
            }),
            (0, a.jsx)(s.Button, {
              onClick: R,
              children: 'Create'
            })
          ]
        })
      ]
    }),
    f.length > 0 && (0, a.jsxs)('section', {
      className: y.section,
      children: [
        (0, a.jsx)(s.Heading, {
          variant: 'heading-md/semibold',
          children: 'Existing Trial Offers'
        }),
        f.map(r => (0, a.jsx)(S, {
          offer: r,
          offerOptions: e,
          forceRefetch: () => Z(!0)
        }, r.id))
      ]
    }),
    j.length > 0 && (0, a.jsxs)('section', {
      className: y.section,
      children: [
        (0, a.jsx)(s.Heading, {
          variant: 'heading-md/semibold',
          children: 'Existing Discount Offers'
        }),
        j.map(e => (0, a.jsx)(N, {
          offer: e,
          offerOptions: t,
          forceRefetch: () => Z(!0)
        }, e.id))
      ]
    })
  ]
})
  });
}