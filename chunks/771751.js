"use strict";
r.r(t), r.d(t, {
  default: function() {
    return I
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("544891"),
  s = r("524437"),
  c = r("481060"),
  d = r("937579"),
  u = r("675478"),
  h = r("295226"),
  m = r("757206"),
  p = r("525241"),
  g = r("740727"),
  f = r("572004"),
  y = r("74538"),
  b = r("246992"),
  x = r("981631"),
  k = r("474936"),
  v = r("277513"),
  C = r("104837");
let j = async () => {
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
  var t, r, l, o;
  let {
    offer: s,
    offerOptions: u,
    forceRefetch: h
  } = e, [b, x] = i.useState(!1), [v, j] = i.useState(!1), [S, w] = i.useState(!1), [E, L] = i.useState(!1);
  i.useEffect(() => {
    S && L(!0);
    let e = setTimeout(() => {
      L(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [S]);
  let {
    id: _,
    expires_at: I,
    redeemed_at: R,
    trial_id: O,
    subscription_trial: D
  } = s, A = null !== (r = null === (t = u.find(e => {
    let {
      value: t
    } = e;
    return t === O
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", P = null != I, M = null != I && new Date(I).getTime() < Date.now(), B = (null == D ? void 0 : D.sku_id) === k.PremiumSubscriptionSKUs.TIER_0, F = async () => {
    w(!0), P ? await N(_, "trial") : await (0, d.acknowledgeUserOffer)(s), h(), w(!1)
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
        j(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [b, v]);
  let H = "Active";
  return P && (H = "Acknowledged"), M && (H = "Expired"), (0, a.jsxs)("div", {
    className: n()(C.card, B ? C.gradientWrapperTier0 : C.gradientWrapperTier2),
    children: [(0, a.jsxs)("div", {
      className: n()(C.row, C.nameRow),
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: A
      }), (0, a.jsx)(c.Clickable, {
        onClick: async () => {
          w(!0), await T(_, "trial"), h(), w(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: n()(C.icon, C.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: n()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(_), x(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", _]
      }), b ? (0, a.jsx)(p.default, {
        className: n()(C.icon, C.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: C.icon
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: n()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(O), j(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", O]
      }), v ? (0, a.jsx)(p.default, {
        className: n()(C.icon, C.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: C.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, y.formatIntervalDuration)({
          intervalType: null !== (l = null == D ? void 0 : D.interval) && void 0 !== l ? l : k.SubscriptionIntervalTypes.MONTH,
          intervalCount: null !== (o = null == D ? void 0 : D.interval_count) && void 0 !== o ? o : 1,
          capitalize: !1
        })]
      })
    }), (0, a.jsxs)("div", {
      className: C.badgeContainer,
      children: [(0, a.jsx)(c.Clickable, {
        onClick: F,
        className: n()(C.badge, C.clickable, {
          [C.acked]: P,
          [C.expired]: M
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === H ? void 0 : "always-white",
          children: H
        })
      }), null != R && (0, a.jsx)("div", {
        className: n()(C.badge, C.__invalid_badgeBottom, C.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)("div", {
      className: n()(C.loadingContainer, {
        [C.isLoading]: S || E
      }),
      children: (0, a.jsx)(c.Spinner, {})
    })]
  })
}

function _(e) {
  var t, r;
  let {
    offer: l,
    offerOptions: o,
    forceRefetch: s
  } = e, [u, h] = i.useState(!1), [y, b] = i.useState(!1), [x, k] = i.useState(!1), [v, j] = i.useState(!1);
  i.useEffect(() => {
    x && j(!0);
    let e = setTimeout(() => {
      j(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [x]);
  let {
    id: S,
    expires_at: w,
    applied_at: E,
    discount_id: L,
    discount: _
  } = l, I = null !== (r = null === (t = o.find(e => {
    let {
      value: t
    } = e;
    return t === L
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", R = null != w, O = null != w && new Date(w).getTime() < Date.now(), D = async () => {
    k(!0), R ? await N(S, "discount") : await (0, d.acknowledgeUserOffer)(void 0, l), s(), k(!1)
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
  let A = "Active";
  return O && (A = "Expired"), R && (A = "Acknowledged"), (0, a.jsxs)("div", {
    className: n()(C.card, C.discount),
    children: [(0, a.jsxs)("div", {
      className: n()(C.row, C.nameRow),
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: I
      }), (0, a.jsx)(c.Clickable, {
        onClick: async () => {
          k(!0), await T(S, "discount"), s(), k(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: n()(C.icon, C.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: n()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(S), h(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Offer: ", S]
      }), u ? (0, a.jsx)(p.default, {
        className: n()(C.icon, C.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: C.icon
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: n()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(L), b(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Discount: ", L]
      }), y ? (0, a.jsx)(p.default, {
        className: n()(C.icon, C.noMargin)
      }) : (0, a.jsx)(m.default, {
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
        onClick: D,
        className: n()(C.badge, C.clickable, {
          [C.acked]: R,
          [C.expired]: O
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === A ? void 0 : "always-white",
          children: A
        })
      }), null != E && (0, a.jsx)("div", {
        className: n()(C.badge, C.__invalid_badgeBottom, C.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: n()(C.loadingContainer, {
        [C.isLoading]: x || v
      }),
      children: (0, a.jsx)(c.Spinner, {})
    })]
  })
}

function I() {
  let [e, t] = i.useState([]), [r, l] = i.useState([]), [o, m] = i.useState(), [p, g] = i.useState(), [f, y] = i.useState([]), [x, k] = i.useState([]), [T, N] = i.useState(!0);
  i.useEffect(() => {
    (0 === e.length || 0 === r.length || T) && j().then(e => {
      let r = Object.keys(e.trial).map(t => ({
          label: t,
          value: e.trial[t]
        })),
        a = Object.keys(e.discount).map(t => ({
          label: t,
          value: e.discount[t]
        }));
      t(r), l(a), null == o && m(r[0].value), null == p && g(a[0].value)
    })
  }, [e, r, o, p, T]), i.useEffect(() => {
    T && (N(!1), h.default.forceReset(), (0, d.fetchUserOffer)(), w().then(e => {
      y(e.trial.sort((e, t) => e.id.localeCompare(t.id))), k(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [T]);
  let I = async () => {
    null != o && (await S(o, "trial"), N(!0))
  }, R = async () => {
    null != p && (await S(p, "discount"), N(!0))
  }, O = async () => {
    await E(), N(!0)
  };
  return (0, a.jsx)(c.ScrollerThin, {
    className: n()(v.panel),
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
            onClick: O,
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
            select: e => m(e),
            popoutLayerContext: b.devToolsLayerContext
          }), (0, a.jsx)(c.Button, {
            onClick: I,
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
            isSelected: e => p === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => g(e),
            popoutLayerContext: b.devToolsLayerContext
          }), (0, a.jsx)(c.Button, {
            onClick: R,
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