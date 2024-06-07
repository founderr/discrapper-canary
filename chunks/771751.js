"use strict";
r.r(t), r.d(t, {
  default: function() {
    return P
  }
}), r("47120");
var a = r("735250"),
  n = r("470079"),
  i = r("120356"),
  l = r.n(i),
  o = r("544891"),
  s = r("704215"),
  c = r("481060"),
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
  C = r("104837");
let S = async () => {
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
}, j = async (e, t) => {
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
}, w = async () => {
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
}, E = async () => {
  try {
    await o.HTTP.del({
      url: x.Endpoints.USER_OFFERS
    })
  } catch {} finally {
    await h.default.forceReset(), await (0, d.fetchUserOffer)()
  }
};

function L(e) {
  var t, r, i, o;
  let {
    offer: s,
    offerOptions: u,
    forceRefetch: h
  } = e, [b, x] = n.useState(!1), [v, S] = n.useState(!1), [j, w] = n.useState(!1), [E, L] = n.useState(!1);
  n.useEffect(() => {
    j && L(!0);
    let e = setTimeout(() => {
      L(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [j]);
  let {
    id: _,
    expires_at: P,
    redeemed_at: A,
    trial_id: R,
    subscription_trial: O
  } = s, M = null !== (r = null === (t = u.find(e => {
    let {
      value: t
    } = e;
    return t === R
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", I = null != P, D = null != P && new Date(P).getTime() < Date.now(), B = (null == O ? void 0 : O.sku_id) === k.PremiumSubscriptionSKUs.TIER_0, F = async () => {
    w(!0), I ? await N(_, "trial") : await (0, d.acknowledgeUserOffer)(s), h(), w(!1)
  };
  n.useEffect(() => {
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
        S(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [b, v]);
  let G = "Active";
  return I && (G = "Acknowledged"), D && (G = "Expired"), (0, a.jsxs)("div", {
    className: l()(C.card, B ? C.gradientWrapperTier0 : C.gradientWrapperTier2),
    children: [(0, a.jsxs)("div", {
      className: l()(C.row, C.nameRow),
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: M
      }), (0, a.jsx)(c.Clickable, {
        onClick: async () => {
          w(!0), await T(_, "trial"), h(), w(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: l()(C.icon, C.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: l()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(_), x(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", _]
      }), b ? (0, a.jsx)(m.default, {
        className: l()(C.icon, C.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: C.icon
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: l()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(R), S(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", R]
      }), v ? (0, a.jsx)(m.default, {
        className: l()(C.icon, C.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: C.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, y.formatIntervalDuration)({
          intervalType: null !== (i = null == O ? void 0 : O.interval) && void 0 !== i ? i : k.SubscriptionIntervalTypes.MONTH,
          intervalCount: null !== (o = null == O ? void 0 : O.interval_count) && void 0 !== o ? o : 1,
          capitalize: !1
        })]
      })
    }), (0, a.jsxs)("div", {
      className: C.badgeContainer,
      children: [(0, a.jsx)(c.Clickable, {
        onClick: F,
        className: l()(C.badge, C.clickable, {
          [C.acked]: I,
          [C.expired]: D
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === G ? void 0 : "always-white",
          children: G
        })
      }), null != A && (0, a.jsx)("div", {
        className: l()(C.badge, C.__invalid_badgeBottom, C.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)("div", {
      className: l()(C.loadingContainer, {
        [C.isLoading]: j || E
      }),
      children: (0, a.jsx)(c.Spinner, {})
    })]
  })
}

function _(e) {
  var t, r;
  let {
    offer: i,
    offerOptions: o,
    forceRefetch: s
  } = e, [u, h] = n.useState(!1), [y, b] = n.useState(!1), [x, k] = n.useState(!1), [v, S] = n.useState(!1);
  n.useEffect(() => {
    x && S(!0);
    let e = setTimeout(() => {
      S(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [x]);
  let {
    id: j,
    expires_at: w,
    applied_at: E,
    discount_id: L,
    discount: _
  } = i, P = null !== (r = null === (t = o.find(e => {
    let {
      value: t
    } = e;
    return t === L
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", A = null != w, R = null != w && new Date(w).getTime() < Date.now(), O = async () => {
    k(!0), A ? await N(j, "discount") : await (0, d.acknowledgeUserOffer)(void 0, i), s(), k(!1)
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
    if (y) {
      let e = setTimeout(() => {
        b(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [u, y]);
  let M = "Active";
  return R && (M = "Expired"), A && (M = "Acknowledged"), (0, a.jsxs)("div", {
    className: l()(C.card, C.discount),
    children: [(0, a.jsxs)("div", {
      className: l()(C.row, C.nameRow),
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: P
      }), (0, a.jsx)(c.Clickable, {
        onClick: async () => {
          k(!0), await T(j, "discount"), s(), k(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: l()(C.icon, C.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: l()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(j), h(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Offer: ", j]
      }), u ? (0, a.jsx)(m.default, {
        className: l()(C.icon, C.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: C.icon
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: l()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(L), b(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Discount: ", L]
      }), y ? (0, a.jsx)(m.default, {
        className: l()(C.icon, C.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: C.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: [_.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: C.badgeContainer,
      children: [(0, a.jsx)(c.Clickable, {
        onClick: O,
        className: l()(C.badge, C.clickable, {
          [C.acked]: A,
          [C.expired]: R
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === M ? void 0 : "always-white",
          children: M
        })
      }), null != E && (0, a.jsx)("div", {
        className: l()(C.badge, C.__invalid_badgeBottom, C.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: l()(C.loadingContainer, {
        [C.isLoading]: x || v
      }),
      children: (0, a.jsx)(c.Spinner, {})
    })]
  })
}

function P() {
  let [e, t] = n.useState([]), [r, i] = n.useState([]), [o, p] = n.useState(), [m, g] = n.useState(), [f, y] = n.useState([]), [x, k] = n.useState([]), [T, N] = n.useState(!0);
  n.useEffect(() => {
    (0 === e.length || 0 === r.length || T) && S().then(e => {
      let r = Object.keys(e.trial).map(t => ({
          label: t,
          value: e.trial[t]
        })),
        a = Object.keys(e.discount).map(t => ({
          label: t,
          value: e.discount[t]
        }));
      t(r), i(a), null == o && p(r[0].value), null == m && g(a[0].value)
    })
  }, [e, r, o, m, T]), n.useEffect(() => {
    T && (N(!1), h.default.forceReset(), (0, d.fetchUserOffer)(), w().then(e => {
      y(e.trial.sort((e, t) => e.id.localeCompare(t.id))), k(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [T]);
  let P = async () => {
    null != o && (await j(o, "trial"), N(!0))
  }, A = async () => {
    null != m && (await j(m, "discount"), N(!0))
  }, R = async () => {
    await E(), N(!0)
  };
  return (0, a.jsx)(c.ScrollerThin, {
    className: l()(v.panel),
    children: (0, a.jsxs)("div", {
      className: C.panelInner,
      children: [(0, a.jsxs)("section", {
        className: C.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, a.jsxs)("div", {
          className: C.buttons,
          children: [(0, a.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            onClick: R,
            children: "Clear all User Offers"
          }), (0, a.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            onClick: () => (0, u.removeDismissedContent)(s.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
            children: "Clear Mobile Trials DismissibleContent"
          }), (0, a.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            onClick: () => N(!0),
            children: "Refresh DevTools"
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: C.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Trial Offer"
        }), (0, a.jsxs)("div", {
          className: C.inputRow,
          children: [(0, a.jsx)(c.Select, {
            className: C.input,
            options: e,
            isSelected: e => o === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => p(e),
            popoutLayerContext: b.devToolsLayerContext
          }), (0, a.jsx)(c.Button, {
            onClick: P,
            children: "Create"
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: C.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, a.jsxs)("div", {
          className: C.inputRow,
          children: [(0, a.jsx)(c.Select, {
            className: C.input,
            options: r,
            isSelected: e => m === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => g(e),
            popoutLayerContext: b.devToolsLayerContext
          }), (0, a.jsx)(c.Button, {
            onClick: A,
            children: "Create"
          })]
        })]
      }), f.length > 0 && (0, a.jsxs)("section", {
        className: C.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), f.map(t => (0, a.jsx)(L, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => N(!0)
        }, t.id))]
      }), x.length > 0 && (0, a.jsxs)("section", {
        className: C.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), x.map(e => (0, a.jsx)(_, {
          offer: e,
          offerOptions: r,
          forceRefetch: () => N(!0)
        }, e.id))]
      })]
    })
  })
}