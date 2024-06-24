t.d(r, {
  Z: function() {
    return E
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
  f = t(719556),
  x = t(24822);
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
}, N = async (e, r) => {
  try {
    await o.tn.post({
      url: b.ANM.UNACK_USER_OFFER(e, r)
    })
  } catch {} finally {
    await (0, d.Tf)()
  }
}, w = async () => {
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
  } = e, [p, b] = n.useState(!1), [f, k] = n.useState(!1), [v, w] = n.useState(!1), [C, S] = n.useState(!1);
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
    expires_at: E,
    redeemed_at: _,
    trial_id: I,
    subscription_trial: Z
  } = c, R = null !== (t = null === (r = u.find(e => {
    let {
      value: r
    } = e;
    return r === I
  })) || void 0 === r ? void 0 : r.label) && void 0 !== t ? t : "Unknown", O = null != E, A = null != E && new Date(E).getTime() < Date.now(), P = (null == Z ? void 0 : Z.sku_id) === y.Si.TIER_0, L = async () => {
    w(!0), O ? await N(T, "trial") : await (0, d.ab)(c), h(), w(!1)
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
    if (f) {
      let e = setTimeout(() => {
        k(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [p, f]);
  let D = "Active";
  return O && (D = "Acknowledged"), A && (D = "Expired"), (0, a.jsxs)("div", {
    className: l()(x.card, P ? x.gradientWrapperTier0 : x.gradientWrapperTier2),
    children: [(0, a.jsxs)("div", {
      className: l()(x.row, x.nameRow),
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: R
      }), (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          w(!0), await j(T, "trial"), h(), w(!1)
        },
        children: (0, a.jsx)(s.TrashIcon, {
          size: "md",
          color: "currentColor",
          className: l()(x.icon, x.trashIcon)
        })
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(x.row, x.idRow),
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
        className: l()(x.icon, x.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: "xs",
        color: "currentColor",
        className: x.icon
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(x.row, x.idRow),
      onClick: () => {
        (0, m.JG)(I), k(!0)
      },
      children: [(0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", I]
      }), f ? (0, a.jsx)(s.CheckmarkLargeIcon, {
        size: "md",
        color: "currentColor",
        className: l()(x.icon, x.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: "xs",
        color: "currentColor",
        className: x.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, g.if)({
          intervalType: null !== (i = null == Z ? void 0 : Z.interval) && void 0 !== i ? i : y.rV.MONTH,
          intervalCount: null !== (o = null == Z ? void 0 : Z.interval_count) && void 0 !== o ? o : 1,
          capitalize: !1
        })]
      })
    }), (0, a.jsxs)("div", {
      className: x.badgeContainer,
      children: [(0, a.jsx)(s.Clickable, {
        onClick: L,
        className: l()(x.badge, x.clickable, {
          [x.acked]: O,
          [x.expired]: A
        }),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === D ? void 0 : "always-white",
          children: D
        })
      }), null != _ && (0, a.jsx)("div", {
        className: l()(x.badge, x.__invalid_badgeBottom, x.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)("div", {
      className: l()(x.loadingContainer, {
        [x.isLoading]: v || C
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
  } = e, [u, h] = n.useState(!1), [g, p] = n.useState(!1), [b, y] = n.useState(!1), [f, k] = n.useState(!1);
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
    expires_at: w,
    applied_at: C,
    discount_id: S,
    discount: T
  } = i, E = null !== (t = null === (r = o.find(e => {
    let {
      value: r
    } = e;
    return r === S
  })) || void 0 === r ? void 0 : r.label) && void 0 !== t ? t : "Unknown", _ = null != w, I = null != w && new Date(w).getTime() < Date.now(), Z = async () => {
    y(!0), _ ? await N(v, "discount") : await (0, d.ab)(void 0, i), c(), y(!1)
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
  return I && (R = "Expired"), _ && (R = "Acknowledged"), (0, a.jsxs)("div", {
    className: l()(x.card, x.discount),
    children: [(0, a.jsxs)("div", {
      className: l()(x.row, x.nameRow),
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: E
      }), (0, a.jsx)(s.Clickable, {
        onClick: async () => {
          y(!0), await j(v, "discount"), c(), y(!1)
        },
        children: (0, a.jsx)(s.TrashIcon, {
          size: "md",
          color: "currentColor",
          className: l()(x.icon, x.trashIcon)
        })
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(x.row, x.idRow),
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
        className: l()(x.icon, x.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: "xs",
        color: "currentColor",
        className: x.icon
      })]
    }), (0, a.jsxs)(s.Clickable, {
      className: l()(x.row, x.idRow),
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
        className: l()(x.icon, x.noMargin)
      }) : (0, a.jsx)(s.CopyIcon, {
        size: "xs",
        color: "currentColor",
        className: x.icon
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)(s.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: [T.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: x.badgeContainer,
      children: [(0, a.jsx)(s.Clickable, {
        onClick: Z,
        className: l()(x.badge, x.clickable, {
          [x.acked]: _,
          [x.expired]: I
        }),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === R ? void 0 : "always-white",
          children: R
        })
      }), null != C && (0, a.jsx)("div", {
        className: l()(x.badge, x.__invalid_badgeBottom, x.redeemed),
        children: (0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: l()(x.loadingContainer, {
        [x.isLoading]: b || f
      }),
      children: (0, a.jsx)(s.Spinner, {})
    })]
  })
}

function E() {
  let [e, r] = n.useState([]), [t, i] = n.useState([]), [o, m] = n.useState(), [g, b] = n.useState(), [y, j] = n.useState([]), [N, E] = n.useState([]), [_, I] = n.useState(!0);
  n.useEffect(() => {
    (0 === e.length || 0 === t.length || _) && k().then(e => {
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
  }, [e, t, o, g, _]), n.useEffect(() => {
    _ && (I(!1), h.Z.forceReset(), (0, d.Tf)(), w().then(e => {
      j(e.trial.sort((e, r) => e.id.localeCompare(r.id))), E(e.discount.sort((e, r) => e.id.localeCompare(r.id)))
    }))
  }, [_]);
  let Z = async () => {
    null != o && (await v(o, "trial"), I(!0))
  }, R = async () => {
    null != g && (await v(g, "discount"), I(!0))
  }, O = async () => {
    await C(), I(!0)
  };
  return (0, a.jsx)(s.ScrollerThin, {
    className: l()(f.panel),
    children: (0, a.jsxs)("div", {
      className: x.panelInner,
      children: [(0, a.jsxs)("section", {
        className: x.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, a.jsxs)("div", {
          className: x.buttons,
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
        className: x.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Trial Offer"
        }), (0, a.jsxs)("div", {
          className: x.inputRow,
          children: [(0, a.jsx)(s.Select, {
            className: x.input,
            options: e,
            isSelected: e => o === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => m(e),
            popoutLayerContext: p.O$
          }), (0, a.jsx)(s.Button, {
            onClick: Z,
            children: "Create"
          })]
        })]
      }), (0, a.jsxs)("section", {
        className: x.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, a.jsxs)("div", {
          className: x.inputRow,
          children: [(0, a.jsx)(s.Select, {
            className: x.input,
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
        className: x.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), y.map(r => (0, a.jsx)(S, {
          offer: r,
          offerOptions: e,
          forceRefetch: () => I(!0)
        }, r.id))]
      }), N.length > 0 && (0, a.jsxs)("section", {
        className: x.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), N.map(e => (0, a.jsx)(T, {
          offer: e,
          offerOptions: t,
          forceRefetch: () => I(!0)
        }, e.id))]
      })]
    })
  })
}