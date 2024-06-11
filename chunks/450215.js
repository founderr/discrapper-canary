"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("512722"),
  o = s.n(r),
  d = s("442837"),
  u = s("481060"),
  c = s("44315"),
  E = s("185403"),
  _ = s("937615"),
  I = s("817460"),
  T = s("584825"),
  S = s("289393"),
  f = s("723047"),
  m = s("727843"),
  N = s("290348"),
  g = s("857081"),
  h = s("869269"),
  C = s("981631"),
  R = s("689938"),
  x = s("169769");

function L(e) {
  var t, s;
  let {
    guildId: n,
    initialEditStateId: r,
    allSubscriptionListings: L,
    priceTiers: O,
    onDeleteEditState: p,
    groupListingId: A,
    onBeforeDispatchNewListing: M,
    onAfterDispatchNewListing: D
  } = e, [v, j] = l.useState(r), G = (0, d.useStateFromStores)([S.default], () => S.default.getSubscriptionListing(v)), U = null == G, [P, b] = l.useState(U), y = null == G ? void 0 : G.subscription_plans[0], B = null !== (t = null == G ? void 0 : G.published) && void 0 !== t && t, F = null !== (s = null == G ? void 0 : G.archived) && void 0 !== s && s, H = (0, f.useRoleSubscriptionSettingsDisabled)(), [k] = N.useName(v), [w] = N.usePriceTier(v), [V] = N.useDescription(v), [Y] = N.useImage(v, 1024), W = "" !== k ? k : R.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INITIAL_TIER_NAME, z = "" !== k && null != Y && "" !== V && null != w && !H, K = N.useHasChanges(v), {
    loading: Z,
    error: X,
    handleCreateOrUpdateFromEditState: Q
  } = N.useCreateOrUpdateListingFromEditState(), {
    submitting: J,
    error: q,
    publishSubscriptionListing: $
  } = (0, T.usePublishSubscriptionListing)(), ee = Z || J;
  return (0, a.jsxs)("div", {
    className: x.container,
    children: [(0, a.jsxs)("div", {
      className: i()(x.header, {
        [x.headerExpanded]: P
      }),
      children: [(0, a.jsx)("div", {
        className: x.headerImageContainer,
        children: null == Y ? (0, a.jsx)(g.default, {
          className: x.starIcon,
          "aria-hidden": !0
        }) : (0, a.jsx)("img", {
          className: x.headerImage,
          src: Y,
          alt: W
        })
      }), (0, a.jsxs)("div", {
        className: x.headerListingInfo,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "interactive-active",
          children: W
        }), (0, a.jsx)(u.Spacer, {
          size: 2
        }), (0, a.jsxs)("div", {
          className: x.headerDescriptionContainer,
          children: [!F && !B && void 0 !== G && (0, a.jsx)(u.TextBadge, {
            color: (0, c.getColor)(C.Color.YELLOW_300),
            text: R.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_DRAFT_LABEL,
            className: x.draftBadge
          }), F && (0, a.jsx)(u.TextBadge, {
            color: (0, c.getColor)(C.Color.PRIMARY_500),
            text: R.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_ARCHIVED_LABEL,
            className: x.archivedBadge
          }), void 0 === G && (0, a.jsx)(u.TextBadge, {
            color: (0, c.getColor)(C.Color.PRIMARY_500),
            text: R.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_UNSAVED_LABEL,
            className: x.unsavedBadge
          }), null != y && (0, a.jsxs)(u.Text, {
            color: "interactive-normal",
            variant: "text-sm/normal",
            children: [(0, _.formatPrice)(y.price, y.currency), "/", (0, I.formatPlanInterval)(y)]
          })]
        })]
      }), P ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.Button, {
          look: u.Button.Looks.BLANK,
          className: x.cancel,
          onClick: () => {
            N.clearEditState(v), U ? null == p || p() : b(!1)
          },
          children: R.default.Messages.CANCEL
        }), (0, a.jsx)(u.Button, {
          onClick: () => Q({
            guildId: n,
            editStateId: v,
            groupListingId: A,
            onBeforeDispatchNewListing: M,
            onAfterDispatchNewListing: e => {
              j(e.id), null == D || D(e)
            }
          }),
          disabled: !z || !K,
          className: x.autoWidth,
          submitting: ee,
          children: R.default.Messages.SAVE
        })]
      }) : (0, a.jsx)(u.Clickable, {
        onClick: () => b(!0),
        "aria-label": R.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_EDIT_LABEL,
        children: (0, a.jsx)(E.default, {
          className: x.pencilIcon
        })
      })]
    }), P && (0, a.jsx)(m.EditStateContextProvider, {
      editStateId: v,
      guildId: n,
      groupListingId: A,
      children: (0, a.jsx)(h.default, {
        allSubscriptionListings: L,
        priceTiers: O,
        loading: ee,
        error: null != X ? X : q,
        handlePublishTier: () => {
          o()(null != A, "group listing doesnt exist"), o()(null != G, "subscription listing doesnt exist"), $({
            guildId: n,
            groupListingId: A,
            listingId: G.id
          })
        },
        onDeleteEditState: p
      })
    })]
  })
}