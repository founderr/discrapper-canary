"use strict";
t.d(s, {
  Z: function() {
    return A
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(392711),
  o = t(399606),
  c = t(215569),
  d = t(481060),
  u = t(852860),
  E = t(999382),
  _ = t(644542),
  I = t(923726),
  T = t(584825),
  N = t(295141),
  m = t(723047),
  S = t(290348),
  h = t(450215),
  g = t(981631),
  C = t(689938),
  x = t(321809);
let R = "guild-role-subscription-tier-template-selector",
  L = e => {
    let [s, t] = i.useState(!0), [n, l] = i.useState();
    return i.useEffect(() => {
      t(!0), (0, N.X)(e).then(e => {
        l(e), t(!1)
      })
    }, [e]), {
      loading: s,
      priceTiers: n
    }
  };

function O(e) {
  let {
    guildId: s,
    priceTiers: l,
    groupListingId: N
  } = e, L = (0, T._k)(N), {
    editStateIds: O,
    addNewEditStateId: A,
    addNewEditStateFromTemplate: p,
    removeEditStateId: M
  } = S.B7(N, s, {
    includeSoftDeleted: !0
  }), [f, D] = i.useState({}), v = i.useMemo(() => {
    let e = O.map(e => {
      var s;
      return null !== (s = f[e]) && void 0 !== s ? s : e
    });
    return (0, r.uniq)(e)
  }, [O, f]), j = (e, s) => {
    D(t => ({
      ...t,
      [e]: s
    }))
  }, Z = (0, I.ss)(s), U = (0, I.Gp)(), G = i.useCallback(() => {
    U && _.jJ.trackExposure({
      guildId: s,
      location: "b2d9de_1"
    }), U && Z ? (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("9558")]).then(t.bind(t, 34460));
      return t => (0, n.jsx)(e, {
        ...t,
        guildId: s,
        addNewEditStateFromTemplate: p,
        addNewEditStateFromScratch: A,
        priceTiers: l
      })
    }, {
      modalKey: R
    }) : A()
  }, [s, p, A, l, U, Z]), P = S.Lo(v), b = i.useCallback(() => v.forEach(S.GM), [v]), B = (0, m.mY)(), y = (0, o.e7)([E.Z], () => E.Z.getProps().subsection);
  return i.useEffect(() => (y === g.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE && G(), () => {
    (0, d.closeModal)(R)
  }), [y, G]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: x.groupListings,
      children: [v.map(e => (0, n.jsx)(h.Z, {
        guildId: s,
        initialEditStateId: e,
        allSubscriptionListings: L,
        priceTiers: l,
        groupListingId: N,
        onDeleteEditState: () => M(e),
        onBeforeDispatchNewListing: s => j(s.id, e),
        onAfterDispatchNewListing: () => M(e)
      }, e)), (0, n.jsxs)(d.Clickable, {
        onClick: B ? void 0 : G,
        className: a()(x.createTierButton, {
          [x.disabled]: B
        }),
        "aria-disabled": B,
        children: [(0, n.jsx)(d.CirclePlusIcon, {
          size: "xs",
          color: "currentColor",
          className: x.createTierIcon
        }), (0, n.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "interactive-active",
          children: C.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIER_CARD_CREATE
        })]
      })]
    }), (0, n.jsx)(c.W, {
      component: "div",
      className: x.contentRegion,
      children: P && (0, n.jsx)(d.SlideIn, {
        children: (0, n.jsx)(u.Z, {
          onReset: b
        })
      })
    })]
  })
}

function A(e) {
  let {
    guildId: s
  } = e, {
    priceTiers: t
  } = L(s), i = (0, T.GG)(s), {
    maxTiers: l
  } = (0, I.s1)(s), a = i.map(e => e.id);
  return (0, n.jsxs)(d.FormSection, {
    title: C.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIERS_TAB_TITLE,
    className: x.container,
    children: [(0, n.jsx)(d.FormText, {
      type: d.FormText.Types.DESCRIPTION,
      children: C.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIERS_TAB_DESCRIPTION.format({
        maxTiers: l
      })
    }), (0, n.jsx)(d.Spacer, {
      size: 16
    }), (0, n.jsx)(O, {
      priceTiers: t,
      guildId: s,
      groupListingId: a[0]
    })]
  })
}