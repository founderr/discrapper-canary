t.r(s), t.d(s, {
  default: function() {
    return x
  }
}), t(47120), t(411104);
var n, i, a = t(735250),
  l = t(470079),
  r = t(512722),
  o = t.n(r),
  c = t(442837),
  E = t(780384),
  d = t(481060),
  _ = t(355467),
  T = t(179360),
  S = t(100527),
  u = t(906732),
  I = t(431369),
  N = t(210887),
  A = t(78839),
  C = t(285952),
  O = t(74538),
  m = t(689938),
  h = t(634554);
async function g(e, s, t, n) {
  await (0, T.bG)(t), await (0, _.Mg)(e, {
    items: (0, O.MY)(e, s)
  }, n)
}

function R(e) {
  let {
    premiumSubscription: s,
    guildBoostSlotId: t,
    onNext: n,
    onClose: i
  } = e, [r, _] = l.useState(!1), T = (0, c.e7)([N.Z], () => N.Z.theme), {
    analyticsLocations: S
  } = (0, u.ZP)();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(d.ModalHeader, {
      separator: !1,
      children: [(0, a.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H4,
        children: m.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_TITLE
      }), (0, a.jsx)(d.ModalCloseButton, {
        onClick: i
      })]
    }), (0, a.jsx)(d.ModalContent, {
      className: h.body,
      children: m.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_DESCRIPTION
    }), (0, a.jsxs)(d.ModalFooter, {
      justify: C.Z.Justify.START,
      children: [(0, a.jsx)(d.Button, {
        onClick: async () => {
          try {
            _(!0);
            let e = (0, I.g)(s, 1);
            o()((0, O.uV)(e) <= (0, O.uV)(s.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await g(s, e, t, S), n()
          } catch (e) {
            _(!1)
          }
        },
        submitting: r,
        children: m.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_BUTTON
      }), (0, a.jsx)(d.Button, {
        look: d.Button.Looks.LINK,
        color: (0, E.ap)(T) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
        onClick: i,
        disabled: r,
        children: m.Z.Messages.NEVERMIND
      })]
    })]
  })
}

function M(e) {
  let {
    onClose: s
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(d.ModalHeader, {
      separator: !1,
      children: [(0, a.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H4,
        children: m.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_TITLE
      }), (0, a.jsx)(d.ModalCloseButton, {
        onClick: s
      })]
    }), (0, a.jsxs)(d.ModalContent, {
      className: h.body,
      children: [(0, a.jsx)("div", {
        className: h.uncancelImage
      }), (0, a.jsx)("div", {
        children: m.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_DESCRIPTION
      })]
    }), (0, a.jsx)(d.ModalFooter, {
      children: (0, a.jsx)(d.Button, {
        onClick: s,
        children: m.Z.Messages.OKAY
      })
    })]
  })
}

function x(e) {
  let s, {
      guildBoostSlotId: t,
      transitionState: n,
      onClose: i
    } = e,
    {
      analyticsLocations: r
    } = (0, u.ZP)(S.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
  l.useEffect(() => {
    !A.ZP.hasFetchedSubscriptions() && (0, _.jg)()
  }, []);
  let o = (0, c.e7)([A.ZP], () => A.ZP.getPremiumTypeSubscription()),
    [E, T] = l.useState(1);
  if (null == o) s = (0, a.jsx)(d.ModalContent, {
    children: (0, a.jsx)(d.Spinner, {})
  });
  else switch (E) {
    case 1:
      s = (0, a.jsx)(R, {
        premiumSubscription: o,
        guildBoostSlotId: t,
        onNext: () => T(2),
        onClose: i
      });
      break;
    case 2:
      s = (0, a.jsx)(M, {
        onClose: i
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(E))
  }
  return (0, a.jsx)(u.Gt, {
    value: r,
    children: (0, a.jsx)(d.ModalRoot, {
      transitionState: n,
      children: s
    })
  })
}(i = n || (n = {}))[i.START = 1] = "START", i[i.CONFIRM = 2] = "CONFIRM"