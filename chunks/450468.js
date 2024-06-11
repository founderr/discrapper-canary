"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("47120"), s("411104");
var a, n, i = s("735250"),
  l = s("470079"),
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
  A = s("689938"),
  C = s("625699");
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
  } = e, [r, S] = l.useState(!1), E = (0, d.useStateFromStores)([N.default], () => N.default.theme), {
    analyticsLocations: T
  } = (0, _.default)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(c.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H4,
        children: A.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_TITLE
      }), (0, i.jsx)(c.ModalCloseButton, {
        onClick: n
      })]
    }), (0, i.jsx)(c.ModalContent, {
      className: C.body,
      children: A.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_DESCRIPTION
    }), (0, i.jsxs)(c.ModalFooter, {
      justify: f.default.Justify.START,
      children: [(0, i.jsx)(c.Button, {
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
        children: A.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_BUTTON
      }), (0, i.jsx)(c.Button, {
        look: c.Button.Looks.LINK,
        color: (0, u.isThemeLight)(E) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
        onClick: n,
        disabled: r,
        children: A.default.Messages.NEVERMIND
      })]
    })]
  })
}

function R(e) {
  let {
    onClose: t
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(c.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H4,
        children: A.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_TITLE
      }), (0, i.jsx)(c.ModalCloseButton, {
        onClick: t
      })]
    }), (0, i.jsxs)(c.ModalContent, {
      className: C.body,
      children: [(0, i.jsx)("div", {
        className: C.uncancelImage
      }), (0, i.jsx)("div", {
        children: A.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_DESCRIPTION
      })]
    }), (0, i.jsx)(c.ModalFooter, {
      children: (0, i.jsx)(c.Button, {
        onClick: t,
        children: A.default.Messages.OKAY
      })
    })]
  })
}

function p(e) {
  let t, {
      guildBoostSlotId: s,
      transitionState: a,
      onClose: n
    } = e,
    {
      analyticsLocations: r
    } = (0, _.default)(T.default.GUILD_BOOST_UNCANCELLATION_MODAL);
  l.useEffect(() => {
    !g.default.hasFetchedSubscriptions() && (0, S.fetchSubscriptions)()
  }, []);
  let o = (0, d.useStateFromStores)([g.default], () => g.default.getPremiumTypeSubscription()),
    [u, E] = l.useState(1);
  if (null == o) t = (0, i.jsx)(c.ModalContent, {
    children: (0, i.jsx)(c.Spinner, {})
  });
  else switch (u) {
    case 1:
      t = (0, i.jsx)(h, {
        premiumSubscription: o,
        guildBoostSlotId: s,
        onNext: () => E(2),
        onClose: n
      });
      break;
    case 2:
      t = (0, i.jsx)(R, {
        onClose: n
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(u))
  }
  return (0, i.jsx)(_.AnalyticsLocationProvider, {
    value: r,
    children: (0, i.jsx)(c.ModalRoot, {
      transitionState: a,
      children: t
    })
  })
}(n = a || (a = {}))[n.START = 1] = "START", n[n.CONFIRM = 2] = "CONFIRM"