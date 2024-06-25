t.r(s), t.d(s, {
  default: function() {
    return x
  }
}), t(47120), t(411104);
var n, a, i = t(735250),
  r = t(470079),
  o = t(512722),
  l = t.n(o),
  c = t(442837),
  d = t(780384),
  _ = t(481060),
  E = t(355467),
  u = t(179360),
  T = t(100527),
  S = t(906732),
  I = t(431369),
  N = t(210887),
  C = t(78839),
  A = t(285952),
  m = t(74538),
  O = t(689938),
  g = t(634554);
async function h(e, s, t, n) {
  await (0, u.bG)(t), await (0, E.Mg)(e, {
    items: (0, m.MY)(e, s)
  }, n)
}

function R(e) {
  let {
    premiumSubscription: s,
    guildBoostSlotId: t,
    onNext: n,
    onClose: a
  } = e, [o, E] = r.useState(!1), u = (0, c.e7)([N.Z], () => N.Z.theme), {
    analyticsLocations: T
  } = (0, S.ZP)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(_.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H4,
        children: O.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_TITLE
      }), (0, i.jsx)(_.ModalCloseButton, {
        onClick: a
      })]
    }), (0, i.jsx)(_.ModalContent, {
      className: g.body,
      children: O.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_DESCRIPTION
    }), (0, i.jsxs)(_.ModalFooter, {
      justify: A.Z.Justify.START,
      children: [(0, i.jsx)(_.Button, {
        onClick: async () => {
          try {
            E(!0);
            let e = (0, I.g)(s, 1);
            l()((0, m.uV)(e) <= (0, m.uV)(s.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await h(s, e, t, T), n()
          } catch (e) {
            E(!1)
          }
        },
        submitting: o,
        children: O.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_BUTTON
      }), (0, i.jsx)(_.Button, {
        look: _.Button.Looks.LINK,
        color: (0, d.ap)(u) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
        onClick: a,
        disabled: o,
        children: O.Z.Messages.NEVERMIND
      })]
    })]
  })
}

function p(e) {
  let {
    onClose: s
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(_.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H4,
        children: O.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_TITLE
      }), (0, i.jsx)(_.ModalCloseButton, {
        onClick: s
      })]
    }), (0, i.jsxs)(_.ModalContent, {
      className: g.body,
      children: [(0, i.jsx)("div", {
        className: g.uncancelImage
      }), (0, i.jsx)("div", {
        children: O.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_DESCRIPTION
      })]
    }), (0, i.jsx)(_.ModalFooter, {
      children: (0, i.jsx)(_.Button, {
        onClick: s,
        children: O.Z.Messages.OKAY
      })
    })]
  })
}

function x(e) {
  let s, {
      guildBoostSlotId: t,
      transitionState: n,
      onClose: a
    } = e,
    {
      analyticsLocations: o
    } = (0, S.ZP)(T.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
  r.useEffect(() => {
    !C.ZP.hasFetchedSubscriptions() && (0, E.jg)()
  }, []);
  let l = (0, c.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
    [d, u] = r.useState(1);
  if (null == l) s = (0, i.jsx)(_.ModalContent, {
    children: (0, i.jsx)(_.Spinner, {})
  });
  else switch (d) {
    case 1:
      s = (0, i.jsx)(R, {
        premiumSubscription: l,
        guildBoostSlotId: t,
        onNext: () => u(2),
        onClose: a
      });
      break;
    case 2:
      s = (0, i.jsx)(p, {
        onClose: a
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(d))
  }
  return (0, i.jsx)(S.Gt, {
    value: o,
    children: (0, i.jsx)(_.ModalRoot, {
      transitionState: n,
      children: s
    })
  })
}(a = n || (n = {}))[a.START = 1] = "START", a[a.CONFIRM = 2] = "CONFIRM"