"use strict";
t.d(s, {
  Z: function() {
    return L
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(512722),
  o = t.n(r),
  c = t(442837),
  d = t(481060),
  u = t(44315),
  E = t(937615),
  _ = t(817460),
  I = t(584825),
  T = t(289393),
  N = t(723047),
  m = t(727843),
  S = t(290348),
  h = t(857081),
  g = t(869269),
  C = t(981631),
  x = t(689938),
  R = t(169769);

function L(e) {
  var s, t;
  let {
    guildId: l,
    initialEditStateId: r,
    allSubscriptionListings: L,
    priceTiers: O,
    onDeleteEditState: A,
    groupListingId: p,
    onBeforeDispatchNewListing: M,
    onAfterDispatchNewListing: f
  } = e, [D, v] = i.useState(r), j = (0, c.e7)([T.Z], () => T.Z.getSubscriptionListing(D)), Z = null == j, [U, G] = i.useState(Z), P = null == j ? void 0 : j.subscription_plans[0], b = null !== (s = null == j ? void 0 : j.published) && void 0 !== s && s, B = null !== (t = null == j ? void 0 : j.archived) && void 0 !== t && t, y = !B && !b && void 0 !== j, F = void 0 === j, k = (0, N.mY)(), [H] = S._T(D), [w] = S.mR(D), [V] = S.PK(D), [Y] = S.d9(D, 1024), W = "" !== H ? H : x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INITIAL_TIER_NAME, z = "" !== H && null != Y && "" !== V && null != w && !k, K = S.rU(D), {
    loading: q,
    error: X,
    handleCreateOrUpdateFromEditState: Q
  } = S.Xo(), {
    submitting: J,
    error: $,
    publishSubscriptionListing: ee
  } = (0, I.HQ)(), es = q || J;
  return (0, n.jsxs)("div", {
    className: R.container,
    children: [(0, n.jsxs)("div", {
      className: a()(R.header, {
        [R.headerExpanded]: U
      }),
      children: [(0, n.jsx)("div", {
        className: R.headerImageContainer,
        children: null == Y ? (0, n.jsx)(h.Z, {
          className: R.starIcon,
          "aria-hidden": !0
        }) : (0, n.jsx)("img", {
          className: R.headerImage,
          src: Y,
          alt: W
        })
      }), (0, n.jsxs)("div", {
        className: R.headerListingInfo,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "interactive-active",
          children: W
        }), (0, n.jsx)(d.Spacer, {
          size: 2
        }), (0, n.jsxs)("div", {
          className: R.headerDescriptionContainer,
          children: [y && (0, n.jsx)(d.TextBadge, {
            color: (0, u.Lq)(C.Ilk.YELLOW_300),
            text: x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_DRAFT_LABEL,
            className: R.draftBadge
          }), B && (0, n.jsx)(d.TextBadge, {
            color: (0, u.Lq)(C.Ilk.PRIMARY_500),
            text: x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_ARCHIVED_LABEL,
            className: R.archivedBadge
          }), F && (0, n.jsx)(d.TextBadge, {
            color: (0, u.Lq)(C.Ilk.PRIMARY_500),
            text: x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_UNSAVED_LABEL,
            className: R.unsavedBadge
          }), null != P && (0, n.jsxs)(d.Text, {
            color: "interactive-normal",
            variant: "text-sm/normal",
            children: [(0, E.T4)(P.price, P.currency), "/", (0, _.JE)(P)]
          })]
        })]
      }), U ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d.Button, {
          look: d.Button.Looks.BLANK,
          className: R.cancel,
          onClick: () => {
            S.GM(D), Z ? null == A || A() : G(!1)
          },
          children: x.Z.Messages.CANCEL
        }), (0, n.jsx)(d.Button, {
          onClick: () => Q({
            guildId: l,
            editStateId: D,
            groupListingId: p,
            onBeforeDispatchNewListing: M,
            onAfterDispatchNewListing: e => {
              v(e.id), null == f || f(e)
            }
          }),
          disabled: !z || !K,
          className: R.autoWidth,
          submitting: es,
          children: x.Z.Messages.SAVE
        })]
      }) : (0, n.jsx)(d.Clickable, {
        onClick: () => G(!0),
        "aria-label": x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_EDIT_LABEL,
        children: (0, n.jsx)(d.PencilIcon, {
          size: "xs",
          color: "currentColor",
          className: R.pencilIcon
        })
      })]
    }), U && (0, n.jsx)(m.I, {
      editStateId: D,
      guildId: l,
      groupListingId: p,
      children: (0, n.jsx)(g.Z, {
        allSubscriptionListings: L,
        priceTiers: O,
        loading: es,
        error: null != X ? X : $,
        handlePublishTier: () => {
          o()(null != p, "group listing doesnt exist"), o()(null != j, "subscription listing doesnt exist"), ee({
            guildId: l,
            groupListingId: p,
            listingId: j.id
          })
        },
        onDeleteEditState: A
      })
    })]
  })
}