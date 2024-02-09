"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("866227"),
  s = n.n(a),
  r = n("446674"),
  o = n("95410"),
  u = n("77078"),
  d = n("850068"),
  c = n("79112"),
  f = n("521012"),
  p = n("791106"),
  m = n("945330"),
  h = n("216422"),
  E = n("719923"),
  S = n("788506"),
  g = n("49111"),
  C = n("646718"),
  T = n("782340"),
  v = n("764942");
let I = "premiumRetentionEmojiPickerNotice",
  _ = o.default.get(I);
var y = e => {
  let {
    closePopout: t,
    channel: n
  } = e, [a, y] = i.useState(!1), {
    subscription: A,
    hasFetchedSubscriptions: N
  } = (0, r.useStateFromStoresObject)([f.default], () => ({
    subscription: f.default.getPremiumSubscription(),
    hasFetchedSubscriptions: f.default.hasFetchedSubscriptions()
  }));
  if (i.useEffect(() => {
      !N && (0, d.fetchSubscriptions)()
    }, [N]), null == A || !(0, E.isSubscriptionStatusFailedPayment)(A.status) || a) return null;
  let x = A.status === g.SubscriptionStatusTypes.PAST_DUE ? (0, E.getBillingGracePeriodDays)(A) : C.MAX_ACCOUNT_HOLD_DAYS,
    O = s(A.currentPeriodStart).add(x, "days"),
    R = "".concat(A.id, ":").concat(O.toISOString());
  if (_ === R) return null;
  let M = E.default.getPremiumType(A.planId) === C.PremiumTypes.TIER_0 ? p.GradientCssUrls.PREMIUM_TIER_0 : E.default.getPremiumType(A.planId) === C.PremiumTypes.TIER_1 ? p.GradientCssUrls.PREMIUM_TIER_1 : p.GradientCssUrls.PREMIUM_TIER_2;
  return (0, l.jsxs)("div", {
    className: v.premiumRetentionNotice,
    children: [(0, l.jsx)(h.default, {
      className: v.premiumRetentionNoticeIcon,
      color: M
    }), (0, l.jsxs)("div", {
      className: v.premiumRetentionNoticeContent,
      children: [(0, l.jsx)(u.Text, {
        variant: "text-xs/normal",
        children: T.default.Messages.PREMIUM_RETENTION_EMOJI_PICKER_DESCRIPTION.format({
          planName: E.default.getDisplayPremiumType(A.planId),
          endsAt: O
        })
      }), (0, l.jsx)("div", {
        children: (0, l.jsx)(u.Anchor, {
          onClick: () => {
            (0, S.trackPremiumSettingsPaneOpened)(n), t(), c.default.open(g.UserSettingsSections.PREMIUM)
          },
          children: T.default.Messages.PREMIUM_RETENTION_EMOJI_PICKER_UPDATE_PAYMENT_INFORMATION
        })
      })]
    }), (0, l.jsx)(u.Clickable, {
      onClick: () => {
        o.default.set(I, R), _ = R, y(!0)
      },
      children: (0, l.jsx)(m.default, {
        className: v.premiumRetentionNoticeClose
      })
    })]
  })
}