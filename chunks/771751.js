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
  j = r("104837");
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
}, C = async (e, t) => {
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
}, E = async () => {
  try {
    await o.HTTP.del({
      url: x.Endpoints.USER_OFFERS
    })
  } catch {} finally {
    await h.default.forceReset(), await (0, d.fetchUserOffer)()
  }
};

function _(e) {
  var t, r, l, o;
  let {
    offer: s,
    offerOptions: u,
    forceRefetch: h
  } = e, [b, x] = i.useState(!1), [v, S] = i.useState(!1), [C, N] = i.useState(!1), [E, _] = i.useState(!1);
  i.useEffect(() => {
    C && _(!0);
    let e = setTimeout(() => {
      _(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [C]);
  let {
    id: L,
    expires_at: R,
    redeemed_at: I,
    trial_id: D,
    subscription_trial: O
  } = s, A = null !== (r = null === (t = u.find(e => {
    let {
      value: t
    } = e;
    return t === D
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", P = null != R, B = null != R && new Date(R).getTime() < Date.now(), F = (null == O ? void 0 : O.sku_id) === k.PremiumSubscriptionSKUs.TIER_0, M = async () => {
    N(!0), P ? await T(L, "trial") : await (0, d.acknowledgeUserOffer)(s), h(), N(!1)
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
  return P && (H = "Acknowledged"), B && (H = "Expired"), (0, a.jsxs)("div", {
    className: n()(j.card, F ? j.gradientWrapperTier0 : j.gradientWrapperTier2),
    children: [(0, a.jsxs)("div", {
      className: n()(j.row, j.nameRow),
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: A
      }), (0, a.jsx)(c.Clickable, {
        onClick: async () => {
          N(!0), await w(L, "trial"), h(), N(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: n()(j.icon, j.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: n()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(L), x(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", L]
      }), b ? (0, a.jsx)(p.default, {
        className: n()(j.icon, j.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: j.icon
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: n()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(D), S(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", D]
      }), v ? (0, a.jsx)(p.default, {
        className: n()(j.icon, j.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: j.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, y.formatIntervalDuration)({
          intervalType: null !== (l = null == O ? void 0 : O.interval) && void 0 !== l ? l : k.SubscriptionIntervalTypes.MONTH,
          intervalCount: null !== (o = null == O ? void 0 : O.interval_count) && void 0 !== o ? o : 1,
          capitalize: !1
        })]
      })
    }), (0, a.jsxs)("div", {
      className: j.badgeContainer,
      children: [(0, a.jsx)(c.Clickable, {
        onClick: M,
        className: n()(j.badge, j.clickable, {
          [j.acked]: P,
          [j.expired]: B
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === H ? void 0 : "always-white",
          children: H
        })
      }), null != I && (0, a.jsx)("div", {
        className: n()(j.badge, j.__invalid_badgeBottom, j.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)("div", {
      className: n()(j.loadingContainer, {
        [j.isLoading]: C || E
      }),
      children: (0, a.jsx)(c.Spinner, {})
    })]
  })
}

function L(e) {
  var t, r;
  let {
    offer: l,
    offerOptions: o,
    forceRefetch: s
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
    id: C,
    expires_at: N,
    applied_at: E,
    discount_id: _,
    discount: L
  } = l, R = null !== (r = null === (t = o.find(e => {
    let {
      value: t
    } = e;
    return t === _
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", I = null != N, D = null != N && new Date(N).getTime() < Date.now(), O = async () => {
    k(!0), I ? await T(C, "discount") : await (0, d.acknowledgeUserOffer)(void 0, l), s(), k(!1)
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
    className: n()(j.card, j.discount),
    children: [(0, a.jsxs)("div", {
      className: n()(j.row, j.nameRow),
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: R
      }), (0, a.jsx)(c.Clickable, {
        onClick: async () => {
          k(!0), await w(C, "discount"), s(), k(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: n()(j.icon, j.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: n()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(C), h(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Offer: ", C]
      }), u ? (0, a.jsx)(p.default, {
        className: n()(j.icon, j.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: j.icon
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: n()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(_), b(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Discount: ", _]
      }), y ? (0, a.jsx)(p.default, {
        className: n()(j.icon, j.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: j.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: [L.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: j.badgeContainer,
      children: [(0, a.jsx)(c.Clickable, {
        onClick: O,
        className: n()(j.badge, j.clickable, {
          [j.acked]: I,
          [j.expired]: D
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === A ? void 0 : "always-white",
          children: A
        })
      }), null != E && (0, a.jsx)("div", {
        className: n()(j.badge, j.__invalid_badgeBottom, j.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: n()(j.loadingContainer, {
        [j.isLoading]: x || v
      }),
      children: (0, a.jsx)(c.Spinner, {})
    })]
  })
}

function R() {
  let [e, t] = i.useState([]), [r, l] = i.useState([]), [o, m] = i.useState(), [p, g] = i.useState(), [f, y] = i.useState([]), [x, k] = i.useState([]), [w, T] = i.useState(!0);
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
      t(r), l(a), null == o && m(r[0].value), null == p && g(a[0].value)
    })
  }, [e, r, o, p, w]), i.useEffect(() => {
    w && (T(!1), h.default.forceReset(), (0, d.fetchUserOffer)(), N().then(e => {
      y(e.trial.sort((e, t) => e.id.localeCompare(t.id))), k(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [w]);
  let R = async () => {
    null != o && (await C(o, "trial"), T(!0))
  }, I = async () => {
    null != p && (await C(p, "discount"), T(!0))
  }, D = async () => {
    await E(), T(!0)
  };
  return (0, a.jsx)(c.ScrollerThin, {
    className: n()(v.panel),
    children: (0, a.jsxs)("div", {
      className: j.panelInner,
      children: [(0, a.jsxs)("section", {
        className: j.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, a.jsxs)("div", {
          className: j.buttons,
          children: [(0, a.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            onClick: D,
            children: "Clear all User Offers"
          }), (0, a.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            onClick: () => (0, u.removeDismissedContent)(s.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
            children: "Clear Mobile Trials DismissibleContent"
          }), (0, a.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            onClick: () => T(!0),
            children: "Refresh DevTools"
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: j.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Trial Offer"
        }), (0, a.jsxs)("div", {
          className: j.inputRow,
          children: [(0, a.jsx)(c.Select, {
            className: j.input,
            options: e,
            isSelected: e => o === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => m(e),
            popoutLayerContext: b.devToolsLayerContext
          }), (0, a.jsx)(c.Button, {
            onClick: R,
            children: "Create"
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: j.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, a.jsxs)("div", {
          className: j.inputRow,
          children: [(0, a.jsx)(c.Select, {
            className: j.input,
            options: r,
            isSelected: e => p === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => g(e),
            popoutLayerContext: b.devToolsLayerContext
          }), (0, a.jsx)(c.Button, {
            onClick: I,
            children: "Create"
          })]
        })]
      }), f.length > 0 && (0, a.jsxs)("section", {
        className: j.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), f.map(t => (0, a.jsx)(_, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => T(!0)
        }, t.id))]
      }), x.length > 0 && (0, a.jsxs)("section", {
        className: j.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), x.map(e => (0, a.jsx)(L, {
          offer: e,
          offerOptions: r,
          forceRefetch: () => T(!0)
        }, e.id))]
      })]
    })
  })
}