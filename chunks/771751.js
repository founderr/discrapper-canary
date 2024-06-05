"use strict";
r.r(t), r.d(t, {
  default: function() {
    return P
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  n = r("120356"),
  l = r.n(n),
  o = r("544891"),
  c = r("704215"),
  s = r("481060"),
  d = r("937579"),
  u = r("675478"),
  h = r("295226"),
  p = r("757206"),
  m = r("525241"),
  g = r("740727"),
  f = r("572004"),
  y = r("74538"),
  b = r("246992"),
  x = r("981631"),
  k = r("474936"),
  v = r("277513"),
  j = r("104837");
let w = async () => {
  try {
    let {
      body: e
    } = await o.HTTP.get({
      url: x.Endpoints.USER_OFFER_IDS
    });
    return e
  } catch (e) {
    return []
  }
}, S = async (e, t) => {
  try {
    await o.HTTP.post({
      url: x.Endpoints.CREATE_USER_OFFER(e, t)
    })
  } catch {} finally {
    await (0, d.fetchUserOffer)()
  }
}, T = async (e, t) => {
  try {
    await o.HTTP.del({
      url: x.Endpoints.DELETE_USER_OFFER(e, t)
    })
  } catch {} finally {
    await (0, d.fetchUserOffer)()
  }
}, N = async (e, t) => {
  try {
    await o.HTTP.post({
      url: x.Endpoints.UNACK_USER_OFFER(e, t)
    })
  } catch {} finally {
    await (0, d.fetchUserOffer)()
  }
}, C = async () => {
  try {
    let {
      body: e
    } = await o.HTTP.get({
      url: x.Endpoints.USER_OFFERS
    });
    return e
  } catch (e) {
    return {
      trial: [],
      discount: []
    }
  }
}, _ = async () => {
  try {
    await o.HTTP.del({
      url: x.Endpoints.USER_OFFERS
    })
  } catch {} finally {
    await h.default.forceReset(), await (0, d.fetchUserOffer)()
  }
};

function E(e) {
  var t, r, n, o;
  let {
    offer: c,
    offerOptions: u,
    forceRefetch: h
  } = e, [b, x] = i.useState(!1), [v, w] = i.useState(!1), [S, C] = i.useState(!1), [_, E] = i.useState(!1);
  i.useEffect(() => {
    S && E(!0);
    let e = setTimeout(() => {
      E(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [S]);
  let {
    id: I,
    expires_at: P,
    redeemed_at: R,
    trial_id: O,
    subscription_trial: A
  } = c, L = null !== (r = null === (t = u.find(e => {
    let {
      value: t
    } = e;
    return t === O
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", D = null != P, B = null != P && new Date(P).getTime() < Date.now(), F = (null == A ? void 0 : A.sku_id) === k.PremiumSubscriptionSKUs.TIER_0, M = async () => {
    C(!0), D ? await N(I, "trial") : await (0, d.acknowledgeUserOffer)(c), h(), C(!1)
  };
  i.useEffect(() => {
    if (b) {
      let e = setTimeout(() => {
        x(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (v) {
      let e = setTimeout(() => {
        w(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [b, v]);
  let H = "Active";
  return D && (H = "Acknowledged"), B && (H = "Expired"), (0, a.jsxs)("div", {
    className: l()(j.card, F ? j.gradientWrapperTier0 : j.gradientWrapperTier2),
    children: [(0, a.jsxs)("div", {
      className: l()(j.row, j.nameRow),
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: L
      }), (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          C(!0), await T(I, "trial"), h(), C(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: l()(j.icon, j.trashIcon)
        })
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(I), x(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", I]
      }), b ? (0, a.jsx)(m.default, {
        className: l()(j.icon, j.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: j.icon
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(O), w(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", O]
      }), v ? (0, a.jsx)(m.default, {
        className: l()(j.icon, j.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: j.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, y.formatIntervalDuration)({
          intervalType: null !== (n = null == A ? void 0 : A.interval) && void 0 !== n ? n : k.SubscriptionIntervalTypes.MONTH,
          intervalCount: null !== (o = null == A ? void 0 : A.interval_count) && void 0 !== o ? o : 1,
          capitalize: !1
        })]
      })
    }), (0, a.jsxs)("div", {
      className: j.badgeContainer,
      children: [(0, a.jsx)(s.Clickable, {
        onClick: M,
        className: l()(j.badge, j.clickable, {
          [j.acked]: D,
          [j.expired]: B
        }),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === H ? void 0 : "always-white",
          children: H
        })
      }), null != R && (0, a.jsx)("div", {
        className: l()(j.badge, j.__invalid_badgeBottom, j.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)("div", {
      className: l()(j.loadingContainer, {
        [j.isLoading]: S || _
      }),
      children: (0, a.jsx)(s.Spinner, {})
    })]
  })
}

function I(e) {
  var t, r;
  let {
    offer: n,
    offerOptions: o,
    forceRefetch: c
  } = e, [u, h] = i.useState(!1), [y, b] = i.useState(!1), [x, k] = i.useState(!1), [v, w] = i.useState(!1);
  i.useEffect(() => {
    x && w(!0);
    let e = setTimeout(() => {
      w(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [x]);
  let {
    id: S,
    expires_at: C,
    applied_at: _,
    discount_id: E,
    discount: I
  } = n, P = null !== (r = null === (t = o.find(e => {
    let {
      value: t
    } = e;
    return t === E
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", R = null != C, O = null != C && new Date(C).getTime() < Date.now(), A = async () => {
    k(!0), R ? await N(S, "discount") : await (0, d.acknowledgeUserOffer)(void 0, n), c(), k(!1)
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
    if (y) {
      let e = setTimeout(() => {
        b(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [u, y]);
  let L = "Active";
  return O && (L = "Expired"), R && (L = "Acknowledged"), (0, a.jsxs)("div", {
    className: l()(j.card, j.discount),
    children: [(0, a.jsxs)("div", {
      className: l()(j.row, j.nameRow),
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: P
      }), (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          k(!0), await T(S, "discount"), c(), k(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: l()(j.icon, j.trashIcon)
        })
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(S), h(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Offer: ", S]
      }), u ? (0, a.jsx)(m.default, {
        className: l()(j.icon, j.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: j.icon
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(E), b(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Discount: ", E]
      }), y ? (0, a.jsx)(m.default, {
        className: l()(j.icon, j.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: j.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: [I.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: j.badgeContainer,
      children: [(0, a.jsx)(s.Clickable, {
        onClick: A,
        className: l()(j.badge, j.clickable, {
          [j.acked]: R,
          [j.expired]: O
        }),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === L ? void 0 : "always-white",
          children: L
        })
      }), null != _ && (0, a.jsx)("div", {
        className: l()(j.badge, j.__invalid_badgeBottom, j.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: l()(j.loadingContainer, {
        [j.isLoading]: x || v
      }),
      children: (0, a.jsx)(s.Spinner, {})
    })]
  })
}

function P() {
  let [e, t] = i.useState([]), [r, n] = i.useState([]), [o, p] = i.useState(), [m, g] = i.useState(), [f, y] = i.useState([]), [x, k] = i.useState([]), [T, N] = i.useState(!0);
  i.useEffect(() => {
    (0 === e.length || 0 === r.length || T) && w().then(e => {
      let r = Object.keys(e.trial).map(t => ({
          label: t,
          value: e.trial[t]
        })),
        a = Object.keys(e.discount).map(t => ({
          label: t,
          value: e.discount[t]
        }));
      t(r), n(a), null == o && p(r[0].value), null == m && g(a[0].value)
    })
  }, [e, r, o, m, T]), i.useEffect(() => {
    T && (N(!1), h.default.forceReset(), (0, d.fetchUserOffer)(), C().then(e => {
      y(e.trial.sort((e, t) => e.id.localeCompare(t.id))), k(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [T]);
  let P = async () => {
    null != o && (await S(o, "trial"), N(!0))
  }, R = async () => {
    null != m && (await S(m, "discount"), N(!0))
  }, O = async () => {
    await _(), N(!0)
  };
  return (0, a.jsx)(s.ScrollerThin, {
    className: l()(v.panel),
    children: (0, a.jsxs)("div", {
      className: j.panelInner,
      children: [(0, a.jsxs)("section", {
        className: j.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, a.jsxs)("div", {
          className: j.buttons,
          children: [(0, a.jsx)(s.Button, {
            size: s.Button.Sizes.SMALL,
            onClick: O,
            children: "Clear all User Offers"
          }), (0, a.jsx)(s.Button, {
            size: s.Button.Sizes.SMALL,
            onClick: () => (0, u.removeDismissedContent)(c.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
            children: "Clear Mobile Trials DismissibleContent"
          }), (0, a.jsx)(s.Button, {
            size: s.Button.Sizes.SMALL,
            onClick: () => N(!0),
            children: "Refresh DevTools"
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: j.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Trial Offer"
        }), (0, a.jsxs)("div", {
          className: j.inputRow,
          children: [(0, a.jsx)(s.Select, {
            className: j.input,
            options: e,
            isSelected: e => o === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => p(e),
            popoutLayerContext: b.devToolsLayerContext
          }), (0, a.jsx)(s.Button, {
            onClick: P,
            children: "Create"
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: j.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, a.jsxs)("div", {
          className: j.inputRow,
          children: [(0, a.jsx)(s.Select, {
            className: j.input,
            options: r,
            isSelected: e => m === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => g(e),
            popoutLayerContext: b.devToolsLayerContext
          }), (0, a.jsx)(s.Button, {
            onClick: R,
            children: "Create"
          })]
        })]
      }), f.length > 0 && (0, a.jsxs)("section", {
        className: j.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), f.map(t => (0, a.jsx)(E, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => N(!0)
        }, t.id))]
      }), x.length > 0 && (0, a.jsxs)("section", {
        className: j.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), x.map(e => (0, a.jsx)(I, {
          offer: e,
          offerOptions: r,
          forceRefetch: () => N(!0)
        }, e.id))]
      })]
    })
  })
}