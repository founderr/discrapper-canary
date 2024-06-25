t.d(r, {
  Z: function() {
    return Z
  }
}), t(47120);
var a = t(735250),
  n = t(470079),
  i = t(120356),
  l = t.n(i),
  o = t(544891),
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
    } = await o.tn.get({
      url: b.ANM.USER_OFFER_IDS
    });
    return e
  } catch (e) {
    return []
  }
}, v = async (e, r) => {
  try {
    await o.tn.post({
      url: b.ANM.CREATE_USER_OFFER(e, r)
    })
  } catch {} finally {
    await (0, d.Tf)()
  }
}, j = async (e, r) => {
  try {
    await o.tn.del({
      url: b.ANM.DELETE_USER_OFFER(e, r)
    })
  } catch {} finally {
    await (0, d.Tf)()
  }
}, w = async (e, r) => {
  try {
    await o.tn.post({
      url: b.ANM.UNACK_USER_OFFER(e, r)
    })
  } catch {} finally {
    await (0, d.Tf)()
  }
}, N = async () => {
  try {
    let {
      body: e
    } = await o.tn.get({
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
    await o.tn.del({
      url: b.ANM.USER_OFFERS
    })
  } catch {} finally {
    await h.Z.forceReset(), await (0, d.Tf)()
  }
};

function S(e) {
  var r, t, i, o;
  let {
    offer: c,
    offerOptions: u,
    forceRefetch: h
  } = e, [p, b] = n.useState(!1), [x, k] = n.useState(!1), [v, N] = n.useState(!1), [C, S] = n.useState(!1);
  n.useEffect(() => {
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
    trial_id: I,
    subscription_trial: _
  } = c, R = null !== (t = null === (r = u.find(e => {
    let {
      value: r
    } = e;
    return r === I
  })) || void 0 === r ? void 0 : r.label) && void 0 !== t ? t : "Unknown", O = null != Z, L = null != Z && new Date(Z).getTime() < Date.now(), A = (null == _ ? void 0 : _.sku_id) === y.Si.TIER_0, P = async () => {
    N(!0), O ? await w(T, "trial") : await (0, d.ab)(c), h(), N(!1)
  };
  n.useEffect(() => {
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
  let D = "Active";
  return O && (D = "Acknowledged"), L && (D = "Expired"), (0, a.jsxs)("div", {
    className: l()(f.card, A ? f.gradientWrapperTier0 : f.gradientWrapperTier2),
    children: [(0, a.jsxs)("div", {
      className: l()(f.row, f.nameRow),
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: R
      }), (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          N(!0), await j(T, "trial"), h(), N(!1)
        },
        children: (0, a.jsx)(s.TrashIcon, {
          size: "md",
          color: "currentColor",
          className: l()(f.icon, f.trashIcon)
        })
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(f.row, f.idRow),
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
        className: l()(f.icon, f.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: "xs",
        color: "currentColor",
        className: f.icon
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(f.row, f.idRow),
      onClick: () => {
        (0, m.JG)(I), k(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", I]
      }), x ? (0, a.jsx)(s.CheckmarkLargeIcon, {
        size: "md",
        color: "currentColor",
        className: l()(f.icon, f.noMargin)
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
          intervalType: null !== (i = null == _ ? void 0 : _.interval) && void 0 !== i ? i : y.rV.MONTH,
          intervalCount: null !== (o = null == _ ? void 0 : _.interval_count) && void 0 !== o ? o : 1,
          capitalize: !1
        })]
      })
    }), (0, a.jsxs)("div", {
      className: f.badgeContainer,
      children: [(0, a.jsx)(s.Clickable, {
        onClick: P,
        className: l()(f.badge, f.clickable, {
          [f.acked]: O,
          [f.expired]: L
        }),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === D ? void 0 : "always-white",
          children: D
        })
      }), null != E && (0, a.jsx)("div", {
        className: l()(f.badge, f.__invalid_badgeBottom, f.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)("div", {
      className: l()(f.loadingContainer, {
        [f.isLoading]: v || C
      }),
      children: (0, a.jsx)(s.Spinner, {})
    })]
  })
}

function T(e) {
  var r, t;
  let {
    offer: i,
    offerOptions: o,
    forceRefetch: c
  } = e, [u, h] = n.useState(!1), [g, p] = n.useState(!1), [b, y] = n.useState(!1), [x, k] = n.useState(!1);
  n.useEffect(() => {
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
  } = i, Z = null !== (t = null === (r = o.find(e => {
    let {
      value: r
    } = e;
    return r === S
  })) || void 0 === r ? void 0 : r.label) && void 0 !== t ? t : "Unknown", E = null != N, I = null != N && new Date(N).getTime() < Date.now(), _ = async () => {
    y(!0), E ? await w(v, "discount") : await (0, d.ab)(void 0, i), c(), y(!1)
  };
  n.useEffect(() => {
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
  let R = "Active";
  return I && (R = "Expired"), E && (R = "Acknowledged"), (0, a.jsxs)("div", {
    className: l()(f.card, f.discount),
    children: [(0, a.jsxs)("div", {
      className: l()(f.row, f.nameRow),
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
          className: l()(f.icon, f.trashIcon)
        })
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(f.row, f.idRow),
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
        className: l()(f.icon, f.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: "xs",
        color: "currentColor",
        className: f.icon
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(f.row, f.idRow),
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
        className: l()(f.icon, f.noMargin)
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
        onClick: _,
        className: l()(f.badge, f.clickable, {
          [f.acked]: E,
          [f.expired]: I
        }),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === R ? void 0 : "always-white",
          children: R
        })
      }), null != C && (0, a.jsx)("div", {
        className: l()(f.badge, f.__invalid_badgeBottom, f.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: l()(f.loadingContainer, {
        [f.isLoading]: b || x
      }),
      children: (0, a.jsx)(s.Spinner, {})
    })]
  })
}

function Z() {
  let [e, r] = n.useState([]), [t, i] = n.useState([]), [o, m] = n.useState(), [g, b] = n.useState(), [y, j] = n.useState([]), [w, Z] = n.useState([]), [E, I] = n.useState(!0);
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
      r(t), i(a), null == o && m(t[0].value), null == g && b(a[0].value)
    })
  }, [e, t, o, g, E]), n.useEffect(() => {
    E && (I(!1), h.Z.forceReset(), (0, d.Tf)(), N().then(e => {
      j(e.trial.sort((e, r) => e.id.localeCompare(r.id))), Z(e.discount.sort((e, r) => e.id.localeCompare(r.id)))
    }))
  }, [E]);
  let _ = async () => {
    null != o && (await v(o, "trial"), I(!0))
  }, R = async () => {
    null != g && (await v(g, "discount"), I(!0))
  }, O = async () => {
    await C(), I(!0)
  };
  return (0, a.jsx)(s.ScrollerThin, {
    className: l()(x.panel),
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
            onClick: O,
            children: "Clear all User Offers"
          }), (0, a.jsx)(s.Button, {
            size: s.Button.Sizes.SMALL,
            onClick: () => (0, u.w9)(c.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
            children: "Clear Mobile Trials DismissibleContent"
          }), (0, a.jsx)(s.Button, {
            size: s.Button.Sizes.SMALL,
            onClick: () => I(!0),
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
            isSelected: e => o === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => m(e),
            popoutLayerContext: p.O$
          }), (0, a.jsx)(s.Button, {
            onClick: _,
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
            onClick: R,
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
          forceRefetch: () => I(!0)
        }, r.id))]
      }), w.length > 0 && (0, a.jsxs)("section", {
        className: f.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), w.map(e => (0, a.jsx)(T, {
          offer: e,
          offerOptions: t,
          forceRefetch: () => I(!0)
        }, e.id))]
      })]
    })
  })
}