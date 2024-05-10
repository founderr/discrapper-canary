"use strict";
r.r(t), r.d(t, {
  default: function() {
    return R
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("544891"),
  c = r("524437"),
  s = r("481060"),
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
}, w = async (e, t) => {
  try {
    await o.HTTP.del({
      url: x.Endpoints.DELETE_USER_OFFER(e, t)
    })
  } catch {} finally {
    await (0, d.fetchUserOffer)()
  }
}, T = async (e, t) => {
  try {
    await o.HTTP.post({
      url: x.Endpoints.UNACK_USER_OFFER(e, t)
    })
  } catch {} finally {
    await (0, d.fetchUserOffer)()
  }
}, N = async () => {
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
}, L = async () => {
  try {
    await o.HTTP.del({
      url: x.Endpoints.USER_OFFERS
    })
  } catch {} finally {
    await h.default.forceReset(), await (0, d.fetchUserOffer)()
  }
};

function E(e) {
  var t, r, l, o;
  let {
    offer: c,
    offerOptions: u,
    forceRefetch: h
  } = e, [b, x] = i.useState(!1), [v, j] = i.useState(!1), [S, N] = i.useState(!1), [L, E] = i.useState(!1);
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
    id: _,
    expires_at: R,
    redeemed_at: I,
    trial_id: D,
    subscription_trial: O
  } = c, A = null !== (r = null === (t = u.find(e => {
    let {
      value: t
    } = e;
    return t === D
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", P = null != R, B = null != R && new Date(R).getTime() < Date.now(), M = (null == O ? void 0 : O.sku_id) === k.PremiumSubscriptionSKUs.TIER_0, F = async () => {
    N(!0), P ? await T(_, "trial") : await (0, d.acknowledgeUserOffer)(c), h(), N(!1)
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
  return P && (H = "Acknowledged"), B && (H = "Expired"), (0, a.jsxs)("div", {
    className: n()(C.card, M ? C.gradientWrapperTier0 : C.gradientWrapperTier2),
    children: [(0, a.jsxs)("div", {
      className: n()(C.row, C.nameRow),
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: A
      }), (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          N(!0), await w(_, "trial"), h(), N(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: n()(C.icon, C.trashIcon)
        })
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: n()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(_), x(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", _]
      }), b ? (0, a.jsx)(p.default, {
        className: n()(C.icon, C.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: C.icon
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: n()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(D), j(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", D]
      }), v ? (0, a.jsx)(p.default, {
        className: n()(C.icon, C.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: C.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, y.formatIntervalDuration)({
          intervalType: null !== (l = null == O ? void 0 : O.interval) && void 0 !== l ? l : k.SubscriptionIntervalTypes.MONTH,
          intervalCount: null !== (o = null == O ? void 0 : O.interval_count) && void 0 !== o ? o : 1,
          capitalize: !1
        })]
      })
    }), (0, a.jsxs)("div", {
      className: C.badgeContainer,
      children: [(0, a.jsx)(s.Clickable, {
        onClick: F,
        className: n()(C.badge, C.clickable, {
          [C.acked]: P,
          [C.expired]: B
        }),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === H ? void 0 : "always-white",
          children: H
        })
      }), null != I && (0, a.jsx)("div", {
        className: n()(C.badge, C.__invalid_badgeBottom, C.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)("div", {
      className: n()(C.loadingContainer, {
        [C.isLoading]: S || L
      }),
      children: (0, a.jsx)(s.Spinner, {})
    })]
  })
}

function _(e) {
  var t, r;
  let {
    offer: l,
    offerOptions: o,
    forceRefetch: c
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
    expires_at: N,
    applied_at: L,
    discount_id: E,
    discount: _
  } = l, R = null !== (r = null === (t = o.find(e => {
    let {
      value: t
    } = e;
    return t === E
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", I = null != N, D = null != N && new Date(N).getTime() < Date.now(), O = async () => {
    k(!0), I ? await T(S, "discount") : await (0, d.acknowledgeUserOffer)(void 0, l), c(), k(!1)
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
  return D && (A = "Expired"), I && (A = "Acknowledged"), (0, a.jsxs)("div", {
    className: n()(C.card, C.discount),
    children: [(0, a.jsxs)("div", {
      className: n()(C.row, C.nameRow),
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: R
      }), (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          k(!0), await w(S, "discount"), c(), k(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: n()(C.icon, C.trashIcon)
        })
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: n()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(S), h(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Offer: ", S]
      }), u ? (0, a.jsx)(p.default, {
        className: n()(C.icon, C.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: C.icon
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: n()(C.row, C.idRow),
      onClick: () => {
        (0, f.copy)(E), b(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Discount: ", E]
      }), y ? (0, a.jsx)(p.default, {
        className: n()(C.icon, C.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: C.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: [_.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: C.badgeContainer,
      children: [(0, a.jsx)(s.Clickable, {
        onClick: O,
        className: n()(C.badge, C.clickable, {
          [C.acked]: I,
          [C.expired]: D
        }),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === A ? void 0 : "always-white",
          children: A
        })
      }), null != L && (0, a.jsx)("div", {
        className: n()(C.badge, C.__invalid_badgeBottom, C.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: n()(C.loadingContainer, {
        [C.isLoading]: x || v
      }),
      children: (0, a.jsx)(s.Spinner, {})
    })]
  })
}

function R() {
  let [e, t] = i.useState([]), [r, l] = i.useState([]), [o, m] = i.useState(), [p, g] = i.useState(), [f, y] = i.useState([]), [x, k] = i.useState([]), [w, T] = i.useState(!0);
  i.useEffect(() => {
    (0 === e.length || 0 === r.length || w) && j().then(e => {
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
  }, [e, r, o, p, w]), i.useEffect(() => {
    w && (T(!1), h.default.forceReset(), (0, d.fetchUserOffer)(), N().then(e => {
      y(e.trial.sort((e, t) => e.id.localeCompare(t.id))), k(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [w]);
  let R = async () => {
    null != o && (await S(o, "trial"), T(!0))
  }, I = async () => {
    null != p && (await S(p, "discount"), T(!0))
  }, D = async () => {
    await L(), T(!0)
  };
  return (0, a.jsx)(s.ScrollerThin, {
    className: n()(v.panel),
    children: (0, a.jsxs)("div", {
      className: C.panelInner,
      children: [(0, a.jsxs)("section", {
        className: C.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, a.jsxs)("div", {
          className: C.buttons,
          children: [(0, a.jsx)(s.Button, {
            size: s.Button.Sizes.SMALL,
            onClick: D,
            children: "Clear all User Offers"
          }), (0, a.jsx)(s.Button, {
            size: s.Button.Sizes.SMALL,
            onClick: () => (0, u.removeDismissedContent)(c.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
            children: "Clear Mobile Trials DismissibleContent"
          }), (0, a.jsx)(s.Button, {
            size: s.Button.Sizes.SMALL,
            onClick: () => T(!0),
            children: "Refresh DevTools"
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: C.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Trial Offer"
        }), (0, a.jsxs)("div", {
          className: C.inputRow,
          children: [(0, a.jsx)(s.Select, {
            className: C.input,
            options: e,
            isSelected: e => o === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => m(e),
            popoutLayerContext: b.devToolsLayerContext
          }), (0, a.jsx)(s.Button, {
            onClick: R,
            children: "Create"
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: C.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, a.jsxs)("div", {
          className: C.inputRow,
          children: [(0, a.jsx)(s.Select, {
            className: C.input,
            options: r,
            isSelected: e => p === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => g(e),
            popoutLayerContext: b.devToolsLayerContext
          }), (0, a.jsx)(s.Button, {
            onClick: I,
            children: "Create"
          })]
        })]
      }), f.length > 0 && (0, a.jsxs)("section", {
        className: C.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), f.map(t => (0, a.jsx)(E, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => T(!0)
        }, t.id))]
      }), x.length > 0 && (0, a.jsxs)("section", {
        className: C.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), x.map(e => (0, a.jsx)(_, {
          offer: e,
          offerOptions: r,
          forceRefetch: () => T(!0)
        }, e.id))]
      })]
    })
  })
}