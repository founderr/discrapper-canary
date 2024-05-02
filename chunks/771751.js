"use strict";
t.r(r), t.d(r, {
  default: function() {
    return R
  }
}), t("47120");
var a = t("735250"),
  i = t("470079"),
  l = t("120356"),
  n = t.n(l),
  o = t("544891"),
  c = t("524437"),
  s = t("481060"),
  d = t("937579"),
  u = t("675478"),
  h = t("295226"),
  m = t("757206"),
  p = t("525241"),
  g = t("740727"),
  f = t("572004"),
  b = t("74538"),
  y = t("246992"),
  x = t("981631"),
  k = t("474936"),
  v = t("893048"),
  j = t("403466");
let C = async () => {
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
}, w = async (e, r) => {
  try {
    await o.HTTP.post({
      url: x.Endpoints.CREATE_USER_OFFER(e, r)
    })
  } catch {} finally {
    await (0, d.fetchUserOffer)()
  }
}, S = async (e, r) => {
  try {
    await o.HTTP.del({
      url: x.Endpoints.DELETE_USER_OFFER(e, r)
    })
  } catch {} finally {
    await (0, d.fetchUserOffer)()
  }
}, N = async (e, r) => {
  try {
    await o.HTTP.post({
      url: x.Endpoints.UNACK_USER_OFFER(e, r)
    })
  } catch {} finally {
    await (0, d.fetchUserOffer)()
  }
}, T = async () => {
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
  var r, t, l, o;
  let {
    offer: c,
    offerOptions: u,
    forceRefetch: h
  } = e, [y, x] = i.useState(!1), [v, C] = i.useState(!1), [w, T] = i.useState(!1), [L, E] = i.useState(!1);
  i.useEffect(() => {
    w && E(!0);
    let e = setTimeout(() => {
      E(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [w]);
  let {
    id: _,
    expires_at: R,
    redeemed_at: D,
    trial_id: I,
    subscription_trial: O
  } = c, A = null !== (t = null === (r = u.find(e => {
    let {
      value: r
    } = e;
    return r === I
  })) || void 0 === r ? void 0 : r.label) && void 0 !== t ? t : "Unknown", P = null != R, B = null != R && new Date(R).getTime() < Date.now(), M = (null == O ? void 0 : O.sku_id) === k.PremiumSubscriptionSKUs.TIER_0, F = async () => {
    T(!0), P ? await N(_, "trial") : await (0, d.acknowledgeUserOffer)(c), h(), T(!1)
  };
  i.useEffect(() => {
    if (y) {
      let e = setTimeout(() => {
        x(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (v) {
      let e = setTimeout(() => {
        C(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [y, v]);
  let H = "Active";
  return P && (H = "Acknowledged"), B && (H = "Expired"), (0, a.jsxs)("div", {
    className: n()(j.card, M ? j.gradientWrapperTier0 : j.gradientWrapperTier2),
    children: [(0, a.jsxs)("div", {
      className: n()(j.row, j.nameRow),
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: A
      }), (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          T(!0), await S(_, "trial"), h(), T(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: n()(j.icon, j.trashIcon)
        })
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: n()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(_), x(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", _]
      }), y ? (0, a.jsx)(p.default, {
        className: n()(j.icon, j.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: j.icon
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: n()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(I), C(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", I]
      }), v ? (0, a.jsx)(p.default, {
        className: n()(j.icon, j.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: j.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, b.formatIntervalDuration)({
          intervalType: null !== (l = null == O ? void 0 : O.interval) && void 0 !== l ? l : k.SubscriptionIntervalTypes.MONTH,
          intervalCount: null !== (o = null == O ? void 0 : O.interval_count) && void 0 !== o ? o : 1,
          capitalize: !1
        })]
      })
    }), (0, a.jsxs)("div", {
      className: j.badgeContainer,
      children: [(0, a.jsx)(s.Clickable, {
        onClick: F,
        className: n()(j.badge, j.clickable, {
          [j.acked]: P,
          [j.expired]: B
        }),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === H ? void 0 : "always-white",
          children: H
        })
      }), null != D && (0, a.jsx)("div", {
        className: n()(j.badge, j.__invalid_badgeBottom, j.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)("div", {
      className: n()(j.loadingContainer, {
        [j.isLoading]: w || L
      }),
      children: (0, a.jsx)(s.Spinner, {})
    })]
  })
}

function _(e) {
  var r, t;
  let {
    offer: l,
    offerOptions: o,
    forceRefetch: c
  } = e, [u, h] = i.useState(!1), [b, y] = i.useState(!1), [x, k] = i.useState(!1), [v, C] = i.useState(!1);
  i.useEffect(() => {
    x && C(!0);
    let e = setTimeout(() => {
      C(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [x]);
  let {
    id: w,
    expires_at: T,
    applied_at: L,
    discount_id: E,
    discount: _
  } = l, R = null !== (t = null === (r = o.find(e => {
    let {
      value: r
    } = e;
    return r === E
  })) || void 0 === r ? void 0 : r.label) && void 0 !== t ? t : "Unknown", D = null != T, I = null != T && new Date(T).getTime() < Date.now(), O = async () => {
    k(!0), D ? await N(w, "discount") : await (0, d.acknowledgeUserOffer)(void 0, l), c(), k(!1)
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
    if (b) {
      let e = setTimeout(() => {
        y(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [u, b]);
  let A = "Active";
  return I && (A = "Expired"), D && (A = "Acknowledged"), (0, a.jsxs)("div", {
    className: n()(j.card, j.discount),
    children: [(0, a.jsxs)("div", {
      className: n()(j.row, j.nameRow),
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: R
      }), (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          k(!0), await S(w, "discount"), c(), k(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: n()(j.icon, j.trashIcon)
        })
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: n()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(w), h(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Offer: ", w]
      }), u ? (0, a.jsx)(p.default, {
        className: n()(j.icon, j.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: j.icon
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: n()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(E), y(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Discount: ", E]
      }), b ? (0, a.jsx)(p.default, {
        className: n()(j.icon, j.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: j.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: [_.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: j.badgeContainer,
      children: [(0, a.jsx)(s.Clickable, {
        onClick: O,
        className: n()(j.badge, j.clickable, {
          [j.acked]: D,
          [j.expired]: I
        }),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === A ? void 0 : "always-white",
          children: A
        })
      }), null != L && (0, a.jsx)("div", {
        className: n()(j.badge, j.__invalid_badgeBottom, j.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: n()(j.loadingContainer, {
        [j.isLoading]: x || v
      }),
      children: (0, a.jsx)(s.Spinner, {})
    })]
  })
}

function R() {
  let [e, r] = i.useState([]), [t, l] = i.useState([]), [o, m] = i.useState(), [p, g] = i.useState(), [f, b] = i.useState([]), [x, k] = i.useState([]), [S, N] = i.useState(!0);
  i.useEffect(() => {
    (0 === e.length || 0 === t.length || S) && C().then(e => {
      let t = Object.keys(e.trial).map(r => ({
          label: r,
          value: e.trial[r]
        })),
        a = Object.keys(e.discount).map(r => ({
          label: r,
          value: e.discount[r]
        }));
      r(t), l(a), null == o && m(t[0].value), null == p && g(a[0].value)
    })
  }, [e, t, o, p, S]), i.useEffect(() => {
    S && (N(!1), h.default.forceReset(), (0, d.fetchUserOffer)(), T().then(e => {
      b(e.trial.sort((e, r) => e.id.localeCompare(r.id))), k(e.discount.sort((e, r) => e.id.localeCompare(r.id)))
    }))
  }, [S]);
  let R = async () => {
    null != o && (await w(o, "trial"), N(!0))
  }, D = async () => {
    null != p && (await w(p, "discount"), N(!0))
  }, I = async () => {
    await L(), N(!0)
  };
  return (0, a.jsx)(s.ScrollerThin, {
    className: n()(v.panel),
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
            onClick: I,
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
            select: e => m(e),
            popoutLayerContext: y.devToolsLayerContext
          }), (0, a.jsx)(s.Button, {
            onClick: R,
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
            options: t,
            isSelected: e => p === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => g(e),
            popoutLayerContext: y.devToolsLayerContext
          }), (0, a.jsx)(s.Button, {
            onClick: D,
            children: "Create"
          })]
        })]
      }), f.length > 0 && (0, a.jsxs)("section", {
        className: j.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), f.map(r => (0, a.jsx)(E, {
          offer: r,
          offerOptions: e,
          forceRefetch: () => N(!0)
        }, r.id))]
      }), x.length > 0 && (0, a.jsxs)("section", {
        className: j.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), x.map(e => (0, a.jsx)(_, {
          offer: e,
          offerOptions: t,
          forceRefetch: () => N(!0)
        }, e.id))]
      })]
    })
  })
}