"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("392711"),
  o = s("399606"),
  d = s("215569"),
  u = s("481060"),
  c = s("852860"),
  E = s("999382"),
  _ = s("151785"),
  I = s("644542"),
  T = s("923726"),
  S = s("584825"),
  f = s("295141"),
  m = s("723047"),
  N = s("290348"),
  g = s("450215"),
  h = s("981631"),
  C = s("689938"),
  R = s("321809");
let x = "guild-role-subscription-tier-template-selector",
  L = e => {
    let [t, s] = l.useState(!0), [a, n] = l.useState();
    return l.useEffect(() => {
      s(!0), (0, f.getPriceTiers)(e).then(e => {
        n(e), s(!1)
      })
    }, [e]), {
      loading: t,
      priceTiers: a
    }
  };

function O(e) {
  let {
    guildId: t,
    priceTiers: n,
    groupListingId: f
  } = e, L = (0, S.useSubscriptionListingsForGroup)(f), {
    editStateIds: O,
    addNewEditStateId: p,
    addNewEditStateFromTemplate: A,
    removeEditStateId: M
  } = N.useEditStateIds(f, t, {
    includeSoftDeleted: !0
  }), [D, v] = l.useState({}), j = l.useMemo(() => {
    let e = O.map(e => {
      var t;
      return null !== (t = D[e]) && void 0 !== t ? t : e
    });
    return (0, r.uniq)(e)
  }, [O, D]), G = (e, t) => {
    v(s => ({
      ...s,
      [e]: t
    }))
  }, U = (0, T.useGuildEligibleForTierTemplates)(t), P = (0, T.useUserEligibleForTierTemplates)(), b = l.useCallback(() => {
    P && I.GuildRoleSubscriptionsTierTemplatesExperiment.trackExposure({
      guildId: t,
      location: "b2d9de_1"
    }), P && U ? (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("9558")]).then(s.bind(s, "34460"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t,
        addNewEditStateFromTemplate: A,
        addNewEditStateFromScratch: p,
        priceTiers: n
      })
    }, {
      modalKey: x
    }) : p()
  }, [t, A, p, n, P, U]), y = N.useHasChangesForEditStateIds(j), B = l.useCallback(() => j.forEach(N.clearEditState), [j]), F = (0, m.useRoleSubscriptionSettingsDisabled)(), H = (0, o.useStateFromStores)([E.default], () => E.default.getProps().subsection);
  return l.useEffect(() => (H === h.GuildSettingsSubsections.ROLE_SUBSCRIPTION_TIER_TEMPLATE && b(), () => {
    (0, u.closeModal)(x)
  }), [H, b]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: R.groupListings,
      children: [j.map(e => (0, a.jsx)(g.default, {
        guildId: t,
        initialEditStateId: e,
        allSubscriptionListings: L,
        priceTiers: n,
        groupListingId: f,
        onDeleteEditState: () => M(e),
        onBeforeDispatchNewListing: t => G(t.id, e),
        onAfterDispatchNewListing: () => M(e)
      }, e)), (0, a.jsxs)(u.Clickable, {
        onClick: F ? void 0 : b,
        className: i()(R.createTierButton, {
          [R.disabled]: F
        }),
        "aria-disabled": F,
        children: [(0, a.jsx)(_.default, {
          className: R.createTierIcon
        }), (0, a.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "interactive-active",
          children: C.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIER_CARD_CREATE
        })]
      })]
    }), (0, a.jsx)(d.TransitionGroup, {
      component: "div",
      className: R.contentRegion,
      children: y && (0, a.jsx)(u.SlideIn, {
        children: (0, a.jsx)(c.default, {
          onReset: B
        })
      })
    })]
  })
}

function p(e) {
  let {
    guildId: t
  } = e, {
    priceTiers: s
  } = L(t), l = (0, S.useGroupListingsForGuild)(t), {
    maxTiers: n
  } = (0, T.useRoleSubscriptionMaxTiersExperiment)(t), i = l.map(e => e.id);
  return (0, a.jsxs)(u.FormSection, {
    title: C.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIERS_TAB_TITLE,
    className: R.container,
    children: [(0, a.jsx)(u.FormText, {
      type: u.FormText.Types.DESCRIPTION,
      children: C.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIERS_TAB_DESCRIPTION.format({
        maxTiers: n
      })
    }), (0, a.jsx)(u.Spacer, {
      size: 16
    }), (0, a.jsx)(O, {
      priceTiers: s,
      guildId: t,
      groupListingId: i[0]
    })]
  })
}