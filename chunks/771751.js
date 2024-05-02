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
  b = r("74538"),
  y = r("246992"),
  x = r("981631"),
  k = r("474936"),
  v = r("893048"),
  j = r("403466");
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
}, w = async (e, t) => {
  try {
    await o.HTTP.post({
      url: x.Endpoints.CREATE_USER_OFFER(e, t)
    })
  } catch {} finally {
    await (0, d.fetchUserOffer)()
  }
}, S = async (e, t) => {
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
    offer: s,
    offerOptions: u,
    forceRefetch: h
  } = e, [y, x] = i.useState(!1), [v, C] = i.useState(!1), [w, N] = i.useState(!1), [L, E] = i.useState(!1);
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
  } = s, A = null !== (r = null === (t = u.find(e => {
    let {
      value: t
    } = e;
    return t === I
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", P = null != R, B = null != R && new Date(R).getTime() < Date.now(), M = (null == O ? void 0 : O.sku_id) === k.PremiumSubscriptionSKUs.TIER_0, F = async () => {
    N(!0), P ? await T(_, "trial") : await (0, d.acknowledgeUserOffer)(s), h(), N(!1)
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
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: A
      }), (0, a.jsx)(c.Clickable, {
        onClick: async () => {
          N(!0), await S(_, "trial"), h(), N(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: n()(j.icon, j.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: n()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(_), x(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", _]
      }), y ? (0, a.jsx)(p.default, {
        className: n()(j.icon, j.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: j.icon
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: n()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(I), C(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", I]
      }), v ? (0, a.jsx)(p.default, {
        className: n()(j.icon, j.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: j.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
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
      children: [(0, a.jsx)(c.Clickable, {
        onClick: F,
        className: n()(j.badge, j.clickable, {
          [j.acked]: P,
          [j.expired]: B
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === H ? void 0 : "always-white",
          children: H
        })
      }), null != D && (0, a.jsx)("div", {
        className: n()(j.badge, j.__invalid_badgeBottom, j.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)("div", {
      className: n()(j.loadingContainer, {
        [j.isLoading]: w || L
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
    expires_at: N,
    applied_at: L,
    discount_id: E,
    discount: _
  } = l, R = null !== (r = null === (t = o.find(e => {
    let {
      value: t
    } = e;
    return t === E
  })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", D = null != N, I = null != N && new Date(N).getTime() < Date.now(), O = async () => {
    k(!0), D ? await T(w, "discount") : await (0, d.acknowledgeUserOffer)(void 0, l), s(), k(!1)
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
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: R
      }), (0, a.jsx)(c.Clickable, {
        onClick: async () => {
          k(!0), await S(w, "discount"), s(), k(!1)
        },
        children: (0, a.jsx)(g.default, {
          className: n()(j.icon, j.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: n()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(w), h(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Offer: ", w]
      }), u ? (0, a.jsx)(p.default, {
        className: n()(j.icon, j.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: j.icon
      })]
    }), (0, a.jsxs)(c.Clickable, {
      className: n()(j.row, j.idRow),
      onClick: () => {
        (0, f.copy)(E), y(!0)
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Discount: ", E]
      }), b ? (0, a.jsx)(p.default, {
        className: n()(j.icon, j.noMargin)
      }) : (0, a.jsx)(m.default, {
        className: j.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: [_.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: j.badgeContainer,
      children: [(0, a.jsx)(c.Clickable, {
        onClick: O,
        className: n()(j.badge, j.clickable, {
          [j.acked]: D,
          [j.expired]: I
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === A ? void 0 : "always-white",
          children: A
        })
      }), null != L && (0, a.jsx)("div", {
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
  let [e, t] = i.useState([]), [r, l] = i.useState([]), [o, m] = i.useState(), [p, g] = i.useState(), [f, b] = i.useState([]), [x, k] = i.useState([]), [S, T] = i.useState(!0);
  i.useEffect(() => {
    (0 === e.length || 0 === r.length || S) && C().then(e => {
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
  }, [e, r, o, p, S]), i.useEffect(() => {
    S && (T(!1), h.default.forceReset(), (0, d.fetchUserOffer)(), N().then(e => {
      b(e.trial.sort((e, t) => e.id.localeCompare(t.id))), k(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [S]);
  let R = async () => {
    null != o && (await w(o, "trial"), T(!0))
  }, D = async () => {
    null != p && (await w(p, "discount"), T(!0))
  }, I = async () => {
    await L(), T(!0)
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
            onClick: I,
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
            popoutLayerContext: y.devToolsLayerContext
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
            popoutLayerContext: y.devToolsLayerContext
          }), (0, a.jsx)(c.Button, {
            onClick: D,
            children: "Create"
          })]
        })]
      }), f.length > 0 && (0, a.jsxs)("section", {
        className: j.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), f.map(t => (0, a.jsx)(E, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => T(!0)
        }, t.id))]
      }), x.length > 0 && (0, a.jsxs)("section", {
        className: j.section,
        children: [(0, a.jsx)(c.Heading, {
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