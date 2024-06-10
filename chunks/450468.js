"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("47120"), s("411104");
var a, n, l = s("735250"),
  i = s("470079"),
  r = s("512722"),
  o = s.n(r),
  d = s("442837"),
  u = s("780384"),
  c = s("481060"),
  S = s("355467"),
  E = s("179360"),
  T = s("100527"),
  _ = s("906732"),
  I = s("431369"),
  N = s("210887"),
  g = s("78839"),
  f = s("285952"),
  m = s("74538"),
  C = s("689938"),
  A = s("625699");
async function O(e, t, s, a) {
  await (0, E.uncancelGuildBoostSlot)(s), await (0, S.updateSubscription)(e, {
    items: (0, m.getItemsFromNewAdditionalPlans)(e, t)
  }, a)
}

function h(e) {
  let {
    premiumSubscription: t,
    guildBoostSlotId: s,
    onNext: a,
    onClose: n
  } = e, [r, S] = i.useState(!1), E = (0, d.useStateFromStores)([N.default], () => N.default.theme), {
    analyticsLocations: T
  } = (0, _.default)();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(c.ModalHeader, {
      separator: !1,
      children: [(0, l.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H4,
        children: C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_TITLE
      }), (0, l.jsx)(c.ModalCloseButton, {
        onClick: n
      })]
    }), (0, l.jsx)(c.ModalContent, {
      className: A.body,
      children: C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_DESCRIPTION
    }), (0, l.jsxs)(c.ModalFooter, {
      justify: f.default.Justify.START,
      children: [(0, l.jsx)(c.Button, {
        onClick: async () => {
          try {
            S(!0);
            let e = (0, I.calculateAdditionalPlansWithPremiumGuildAdjustment)(t, 1);
            o()((0, m.getNumPremiumGuildSubscriptions)(e) <= (0, m.getNumPremiumGuildSubscriptions)(t.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await O(t, e, s, T), a()
          } catch (e) {
            S(!1)
          }
        },
        submitting: r,
        children: C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_BUTTON
      }), (0, l.jsx)(c.Button, {
        look: c.Button.Looks.LINK,
        color: (0, u.isThemeLight)(E) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
        onClick: n,
        disabled: r,
        children: C.default.Messages.NEVERMIND
      })]
    })]
  })
}

function p(e) {
  let {
    onClose: t
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(c.ModalHeader, {
      separator: !1,
      children: [(0, l.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H4,
        children: C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_TITLE
      }), (0, l.jsx)(c.ModalCloseButton, {
        onClick: t
      })]
    }), (0, l.jsxs)(c.ModalContent, {
      className: A.body,
      children: [(0, l.jsx)("div", {
        className: A.uncancelImage
      }), (0, l.jsx)("div", {
        children: C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_DESCRIPTION
      })]
    }), (0, l.jsx)(c.ModalFooter, {
      children: (0, l.jsx)(c.Button, {
        onClick: t,
        children: C.default.Messages.OKAY
      })
    })]
  })
}

function R(e) {
  let t, {
      guildBoostSlotId: s,
      transitionState: a,
      onClose: n
    } = e,
    {
      analyticsLocations: r
    } = (0, _.default)(T.default.GUILD_BOOST_UNCANCELLATION_MODAL);
  i.useEffect(() => {
    !g.default.hasFetchedSubscriptions() && (0, S.fetchSubscriptions)()
  }, []);
  let o = (0, d.useStateFromStores)([g.default], () => g.default.getPremiumTypeSubscription()),
    [u, E] = i.useState(1);
  if (null == o) t = (0, l.jsx)(c.ModalContent, {
    children: (0, l.jsx)(c.Spinner, {})
  });
  else switch (u) {
    case 1:
      t = (0, l.jsx)(h, {
        premiumSubscription: o,
        guildBoostSlotId: s,
        onNext: () => E(2),
        onClose: n
      });
      break;
    case 2:
      t = (0, l.jsx)(p, {
        onClose: n
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(u))
  }
  return (0, l.jsx)(_.AnalyticsLocationProvider, {
    value: r,
    children: (0, l.jsx)(c.ModalRoot, {
      transitionState: a,
      children: t
    })
  })
}(n = a || (a = {}))[n.START = 1] = "START", n[n.CONFIRM = 2] = "CONFIRM"