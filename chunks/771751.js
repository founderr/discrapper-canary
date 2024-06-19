t.d(r, {
  Z: function() {
    return Z
  }
}), t(47120);
var a = t(735250),
  i = t(470079),
  n = t(120356),
  o = t.n(n),
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
  y = t(474936),
  x = t(719556),
  f = t(24822);
let k = async () => {
  try {
    let {
      body: e
    } = await l.tn.get({
      url: b.ANM.USER_OFFER_IDS
    });
    return e
  } catch (e) {
    return []
  }
}, v = async (e, r) => {
  try {
    await l.tn.post({
      url: b.ANM.CREATE_USER_OFFER(e, r)
    })
  } catch {} finally {
    await (0, d.Tf)()
  }
}, j = async (e, r) => {
  try {
    await l.tn.del({
      url: b.ANM.DELETE_USER_OFFER(e, r)
    })
  } catch {} finally {
    await (0, d.Tf)()
  }
}, w = async (e, r) => {
  try {
    await l.tn.post({
      url: b.ANM.UNACK_USER_OFFER(e, r)
    })
  } catch {} finally {
    await (0, d.Tf)()
  }
}, N = async () => {
  try {
    let {
      body: e
    } = await l.tn.get({
      url: b.ANM.USER_OFFERS
    });
    return e
  } catch (e) {
    return {
      trial: [],
      discount: []
    }
  }
}, C = async () => {
  try {
    await l.tn.del({
      url: b.ANM.USER_OFFERS
    })
  } catch {} finally {
    await h.Z.forceReset(), await (0, d.Tf)()
  }
};

function S(e) {
  var r, t, n, l;
  let {
    offer: c,
    offerOptions: u,
    forceRefetch: h
  } = e, [p, b] = i.useState(!1), [x, k] = i.useState(!1), [v, N] = i.useState(!1), [C, S] = i.useState(!1);
  i.useEffect(() => {
    v && S(!0);
    let e = setTimeout(() => {
      S(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [v]);
  let {
    id: T,
    expires_at: Z,
    redeemed_at: E,
    trial_id: _,
    subscription_trial: O
  } = c, I = null !== (t = null === (r = u.find(e => {
    let {
      value: r
    } = e;
    return r === _
  })) || void 0 === r ? void 0 : r.label) && void 0 !== t ? t : "Unknown", R = null != Z, L = null != Z && new Date(Z).getTime() < Date.now(), A = (null == O ? void 0 : O.sku_id) === y.Si.TIER_0, P = async () => {
    N(!0), R ? await w(T, "trial") : await (0, d.ab)(c), h(), N(!1)
  };
  i.useEffect(() => {
    if (p) {
      let e = setTimeout(() => {
        b(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (x) {
      let e = setTimeout(() => {
        k(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [p, x]);
  let B = "Active";
  return R && (B = "Acknowledged"), L && (B = "Expired"), (0, a.jsxs)("div", {
    className: o()(f.card, A ? f.gradientWrapperTier0 : f.gradientWrapperTier2),
    children: [(0, a.jsxs)("div", {
      className: o()(f.row, f.nameRow),
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: I
      }), (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          N(!0), await j(T, "trial"), h(), N(!1)
        },
        children: (0, a.jsx)(s.TrashIcon, {
          size: "md",
          color: "currentColor",
          className: o()(f.icon, f.trashIcon)
        })
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: o()(f.row, f.idRow),
      onClick: () => {
        (0, m.JG)(T), b(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", T]
      }), p ? (0, a.jsx)(s.CheckmarkLargeIcon, {
        size: "md",
        color: "currentColor",
        className: o()(f.icon, f.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: "xs",
        color: "currentColor",
        className: f.icon
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: o()(f.row, f.idRow),
      onClick: () => {
        (0, m.JG)(_), k(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", _]
      }), x ? (0, a.jsx)(s.CheckmarkLargeIcon, {
        size: "md",
        color: "currentColor",
        className: o()(f.icon, f.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: "xs",
        color: "currentColor",
        className: f.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, g.if)({
          intervalType: null !== (n = null == O ? void 0 : O.interval) && void 0 !== n ? n : y.rV.MONTH,
          intervalCount: null !== (l = null == O ? void 0 : O.interval_count) && void 0 !== l ? l : 1,
          capitalize: !1
        })]
      })
    }), (0, a.jsxs)("div", {
      className: f.badgeContainer,
      children: [(0, a.jsx)(s.Clickable, {
        onClick: P,
        className: o()(f.badge, f.clickable, {
          [f.acked]: R,
          [f.expired]: L
        }),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === B ? void 0 : "always-white",
          children: B
        })
      }), null != E && (0, a.jsx)("div", {
        className: o()(f.badge, f.__invalid_badgeBottom, f.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)("div", {
      className: o()(f.loadingContainer, {
        [f.isLoading]: v || C
      }),
      children: (0, a.jsx)(s.Spinner, {})
    })]
  })
}

function T(e) {
  var r, t;
  let {
    offer: n,
    offerOptions: l,
    forceRefetch: c
  } = e, [u, h] = i.useState(!1), [g, p] = i.useState(!1), [b, y] = i.useState(!1), [x, k] = i.useState(!1);
  i.useEffect(() => {
    b && k(!0);
    let e = setTimeout(() => {
      k(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [b]);
  let {
    id: v,
    expires_at: N,
    applied_at: C,
    discount_id: S,
    discount: T
  } = n, Z = null !== (t = null === (r = l.find(e => {
    let {
      value: r
    } = e;
    return r === S
  })) || void 0 === r ? void 0 : r.label) && void 0 !== t ? t : "Unknown", E = null != N, _ = null != N && new Date(N).getTime() < Date.now(), O = async () => {
    y(!0), E ? await w(v, "discount") : await (0, d.ab)(void 0, n), c(), y(!1)
  };
  i.useEffect(() => {
    if (u) {
      let e = setTimeout(() => {
        h(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (g) {
      let e = setTimeout(() => {
        p(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [u, g]);
  let I = "Active";
  return _ && (I = "Expired"), E && (I = "Acknowledged"), (0, a.jsxs)("div", {
    className: o()(f.card, f.discount),
    children: [(0, a.jsxs)("div", {
      className: o()(f.row, f.nameRow),
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: Z
      }), (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          y(!0), await j(v, "discount"), c(), y(!1)
        },
        children: (0, a.jsx)(s.TrashIcon, {
          size: "md",
          color: "currentColor",
          className: o()(f.icon, f.trashIcon)
        })
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: o()(f.row, f.idRow),
      onClick: () => {
        (0, m.JG)(v), h(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Offer: ", v]
      }), u ? (0, a.jsx)(s.CheckmarkLargeIcon, {
        size: "md",
        color: "currentColor",
        className: o()(f.icon, f.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: "xs",
        color: "currentColor",
        className: f.icon
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: o()(f.row, f.idRow),
      onClick: () => {
        (0, m.JG)(S), p(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Discount: ", S]
      }), g ? (0, a.jsx)(s.CheckmarkLargeIcon, {
        size: "md",
        color: "currentColor",
        className: o()(f.icon, f.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: "xs",
        color: "currentColor",
        className: f.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: [T.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: f.badgeContainer,
      children: [(0, a.jsx)(s.Clickable, {
        onClick: O,
        className: o()(f.badge, f.clickable, {
          [f.acked]: E,
          [f.expired]: _
        }),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === I ? void 0 : "always-white",
          children: I
        })
      }), null != C && (0, a.jsx)("div", {
        className: o()(f.badge, f.__invalid_badgeBottom, f.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: o()(f.loadingContainer, {
        [f.isLoading]: b || x
      }),
      children: (0, a.jsx)(s.Spinner, {})
    })]
  })
}

function Z() {
  let [e, r] = i.useState([]), [t, n] = i.useState([]), [l, m] = i.useState(), [g, b] = i.useState(), [y, j] = i.useState([]), [w, Z] = i.useState([]), [E, _] = i.useState(!0);
  i.useEffect(() => {
    (0 === e.length || 0 === t.length || E) && k().then(e => {
      let t = Object.keys(e.trial).map(r => ({
          label: r,
          value: e.trial[r]
        })),
        a = Object.keys(e.discount).map(r => ({
          label: r,
          value: e.discount[r]
        }));
      r(t), n(a), null == l && m(t[0].value), null == g && b(a[0].value)
    })
  }, [e, t, l, g, E]), i.useEffect(() => {
    E && (_(!1), h.Z.forceReset(), (0, d.Tf)(), N().then(e => {
      j(e.trial.sort((e, r) => e.id.localeCompare(r.id))), Z(e.discount.sort((e, r) => e.id.localeCompare(r.id)))
    }))
  }, [E]);
  let O = async () => {
    null != l && (await v(l, "trial"), _(!0))
  }, I = async () => {
    null != g && (await v(g, "discount"), _(!0))
  }, R = async () => {
    await C(), _(!0)
  };
  return (0, a.jsx)(s.ScrollerThin, {
    className: o()(x.panel),
    children: (0, a.jsxs)("div", {
      className: f.panelInner,
      children: [(0, a.jsxs)("section", {
        className: f.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, a.jsxs)("div", {
          className: f.buttons,
          children: [(0, a.jsx)(s.Button, {
            size: s.Button.Sizes.SMALL,
            onClick: R,
            children: "Clear all User Offers"
          }), (0, a.jsx)(s.Button, {
            size: s.Button.Sizes.SMALL,
            onClick: () => (0, u.w9)(c.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
            children: "Clear Mobile Trials DismissibleContent"
          }), (0, a.jsx)(s.Button, {
            size: s.Button.Sizes.SMALL,
            onClick: () => _(!0),
            children: "Refresh DevTools"
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: f.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Trial Offer"
        }), (0, a.jsxs)("div", {
          className: f.inputRow,
          children: [(0, a.jsx)(s.Select, {
            className: f.input,
            options: e,
            isSelected: e => l === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => m(e),
            popoutLayerContext: p.O$
          }), (0, a.jsx)(s.Button, {
            onClick: O,
            children: "Create"
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: f.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, a.jsxs)("div", {
          className: f.inputRow,
          children: [(0, a.jsx)(s.Select, {
            className: f.input,
            options: t,
            isSelected: e => g === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => b(e),
            popoutLayerContext: p.O$
          }), (0, a.jsx)(s.Button, {
            onClick: I,
            children: "Create"
          })]
        })]
      }), y.length > 0 && (0, a.jsxs)("section", {
        className: f.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), y.map(r => (0, a.jsx)(S, {
          offer: r,
          offerOptions: e,
          forceRefetch: () => _(!0)
        }, r.id))]
      }), w.length > 0 && (0, a.jsxs)("section", {
        className: f.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), w.map(e => (0, a.jsx)(T, {
          offer: e,
          offerOptions: t,
          forceRefetch: () => _(!0)
        }, e.id))]
      })]
    })
  })
}