"use strict";
r.r(t), r.d(t, {
  default: function() {
    return R
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  n = r("120356"),
  l = r.n(n),
  o = r("544891"),
  c = r("524437"),
  s = r("481060"),
  d = r("937579"),
  u = r("675478"),
  h = r("295226"),
  p = r("757206"),
  g = r("525241"),
  m = r("740727"),
  f = r("572004"),
  y = r("74538"),
  b = r("246992"),
  x = r("981631"),
  k = r("474936"),
  v = r("277513"),
  T = r("104837");
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
}, w = async (e, t) => {
  try {
    await o.HTTP.del({
      url: x.Endpoints.DELETE_USER_OFFER(e, t)
    })
  } catch {} finally {
    await (0, d.fetchUserOffer)()
  }
}, E = async (e, t) => {
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
}, N = async () => {
  try {
    await o.HTTP.del({
      url: x.Endpoints.USER_OFFERS
    })
  } catch {} finally {
    await h.default.forceReset(), await (0, d.fetchUserOffer)()
  }
};

function _(e) {
  var t, r, n, o;
  let {
    offer: c,
    offerOptions: u,
    forceRefetch: h
  } = e, [b, x] = i.useState(!1), [v, S] = i.useState(!1), [j, C] = i.useState(!1), [N, _] = i.useState(!1);
  i.useEffect(() => {
    j && _(!0);
    let e = setTimeout(() => {
      _(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [j]);
  let {
    id: I,
    expires_at: R,
    redeemed_at: P,
    trial_id: O,
    subscription_trial: A
  } = c, L = null !== (r = null === (t = u.find(e => {
    let {
      value: t
    } = e;
    return t === O
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", D = null != R, M = null != R && new Date(R).getTime() < Date.now(), B = (null == A ? void 0 : A.sku_id) === k.PremiumSubscriptionSKUs.TIER_0, F = async () => {
    C(!0), D ? await E(I, "trial") : await (0, d.acknowledgeUserOffer)(c), h(), C(!1)
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
        S(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [b, v]);
  let H = "Active";
  return D && (H = "Acknowledged"), M && (H = "Expired"), (0, a.jsxs)("div", {
    className: l()(T.card, B ? T.gradientWrapperTier0 : T.gradientWrapperTier2),
    children: [(0, a.jsxs)("div", {
      className: l()(T.row, T.nameRow),
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: L
      }), (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          C(!0), await w(I, "trial"), h(), C(!1)
        },
        children: (0, a.jsx)(m.default, {
          className: l()(T.icon, T.trashIcon)
        })
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(T.row, T.idRow),
      onClick: () => {
        (0, f.copy)(I), x(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", I]
      }), b ? (0, a.jsx)(g.default, {
        className: l()(T.icon, T.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: T.icon
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(T.row, T.idRow),
      onClick: () => {
        (0, f.copy)(O), S(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", O]
      }), v ? (0, a.jsx)(g.default, {
        className: l()(T.icon, T.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: T.icon
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
      className: T.badgeContainer,
      children: [(0, a.jsx)(s.Clickable, {
        onClick: F,
        className: l()(T.badge, T.clickable, {
          [T.acked]: D,
          [T.expired]: M
        }),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === H ? void 0 : "always-white",
          children: H
        })
      }), null != P && (0, a.jsx)("div", {
        className: l()(T.badge, T.__invalid_badgeBottom, T.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)("div", {
      className: l()(T.loadingContainer, {
        [T.isLoading]: j || N
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
  } = e, [u, h] = i.useState(!1), [y, b] = i.useState(!1), [x, k] = i.useState(!1), [v, S] = i.useState(!1);
  i.useEffect(() => {
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
    expires_at: C,
    applied_at: N,
    discount_id: _,
    discount: I
  } = n, R = null !== (r = null === (t = o.find(e => {
    let {
      value: t
    } = e;
    return t === _
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", P = null != C, O = null != C && new Date(C).getTime() < Date.now(), A = async () => {
    k(!0), P ? await E(j, "discount") : await (0, d.acknowledgeUserOffer)(void 0, n), c(), k(!1)
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
  return O && (L = "Expired"), P && (L = "Acknowledged"), (0, a.jsxs)("div", {
    className: l()(T.card, T.discount),
    children: [(0, a.jsxs)("div", {
      className: l()(T.row, T.nameRow),
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: R
      }), (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          k(!0), await w(j, "discount"), c(), k(!1)
        },
        children: (0, a.jsx)(m.default, {
          className: l()(T.icon, T.trashIcon)
        })
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(T.row, T.idRow),
      onClick: () => {
        (0, f.copy)(j), h(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Offer: ", j]
      }), u ? (0, a.jsx)(g.default, {
        className: l()(T.icon, T.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: T.icon
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(T.row, T.idRow),
      onClick: () => {
        (0, f.copy)(_), b(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Discount: ", _]
      }), y ? (0, a.jsx)(g.default, {
        className: l()(T.icon, T.noMargin)
      }) : (0, a.jsx)(p.default, {
        className: T.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: [I.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: T.badgeContainer,
      children: [(0, a.jsx)(s.Clickable, {
        onClick: A,
        className: l()(T.badge, T.clickable, {
          [T.acked]: P,
          [T.expired]: O
        }),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === L ? void 0 : "always-white",
          children: L
        })
      }), null != N && (0, a.jsx)("div", {
        className: l()(T.badge, T.__invalid_badgeBottom, T.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: l()(T.loadingContainer, {
        [T.isLoading]: x || v
      }),
      children: (0, a.jsx)(s.Spinner, {})
    })]
  })
}

function R() {
  let [e, t] = i.useState([]), [r, n] = i.useState([]), [o, p] = i.useState(), [g, m] = i.useState(), [f, y] = i.useState([]), [x, k] = i.useState([]), [w, E] = i.useState(!0);
  i.useEffect(() => {
    (0 === e.length || 0 === r.length || w) && S().then(e => {
      let r = Object.keys(e.trial).map(t => ({
          label: t,
          value: e.trial[t]
        })),
        a = Object.keys(e.discount).map(t => ({
          label: t,
          value: e.discount[t]
        }));
      t(r), n(a), null == o && p(r[0].value), null == g && m(a[0].value)
    })
  }, [e, r, o, g, w]), i.useEffect(() => {
    w && (E(!1), h.default.forceReset(), (0, d.fetchUserOffer)(), C().then(e => {
      y(e.trial.sort((e, t) => e.id.localeCompare(t.id))), k(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [w]);
  let R = async () => {
    null != o && (await j(o, "trial"), E(!0))
  }, P = async () => {
    null != g && (await j(g, "discount"), E(!0))
  }, O = async () => {
    await N(), E(!0)
  };
  return (0, a.jsx)(s.ScrollerThin, {
    className: l()(v.panel),
    children: (0, a.jsxs)("div", {
      className: T.panelInner,
      children: [(0, a.jsxs)("section", {
        className: T.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, a.jsxs)("div", {
          className: T.buttons,
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
            onClick: () => E(!0),
            children: "Refresh DevTools"
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: T.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Trial Offer"
        }), (0, a.jsxs)("div", {
          className: T.inputRow,
          children: [(0, a.jsx)(s.Select, {
            className: T.input,
            options: e,
            isSelected: e => o === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => p(e),
            popoutLayerContext: b.devToolsLayerContext
          }), (0, a.jsx)(s.Button, {
            onClick: R,
            children: "Create"
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: T.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, a.jsxs)("div", {
          className: T.inputRow,
          children: [(0, a.jsx)(s.Select, {
            className: T.input,
            options: r,
            isSelected: e => g === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => m(e),
            popoutLayerContext: b.devToolsLayerContext
          }), (0, a.jsx)(s.Button, {
            onClick: P,
            children: "Create"
          })]
        })]
      }), f.length > 0 && (0, a.jsxs)("section", {
        className: T.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), f.map(t => (0, a.jsx)(_, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => E(!0)
        }, t.id))]
      }), x.length > 0 && (0, a.jsxs)("section", {
        className: T.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), x.map(e => (0, a.jsx)(I, {
          offer: e,
          offerOptions: r,
          forceRefetch: () => E(!0)
        }, e.id))]
      })]
    })
  })
}