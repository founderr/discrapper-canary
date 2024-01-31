"use strict";
i.r(t), i.d(t, {
  default: function() {
    return v
  }
}), i("222007");
var n = i("37983"),
  l = i("884691"),
  s = i("866227"),
  a = i.n(s),
  r = i("446674"),
  o = i("95410"),
  u = i("77078"),
  c = i("850068"),
  d = i("79112"),
  f = i("521012"),
  E = i("791106"),
  m = i("945330"),
  I = i("216422"),
  p = i("719923"),
  g = i("788506"),
  _ = i("49111"),
  S = i("646718"),
  C = i("782340"),
  h = i("764942");
let T = "premiumRetentionEmojiPickerNotice",
  N = o.default.get(T);
var v = e => {
  let {
    closePopout: t,
    channel: i
  } = e, [s, v] = l.useState(!1), {
    subscription: A,
    hasFetchedSubscriptions: y
  } = (0, r.useStateFromStoresObject)([f.default], () => ({
    subscription: f.default.getPremiumSubscription(),
    hasFetchedSubscriptions: f.default.hasFetchedSubscriptions()
  }));
  if (l.useEffect(() => {
      !y && (0, c.fetchSubscriptions)()
    }, [y]), null == A || !(0, p.isSubscriptionStatusFailedPayment)(A.status) || s) return null;
  let j = A.status === _.SubscriptionStatusTypes.PAST_DUE ? (0, p.getBillingGracePeriodDays)(A) : S.MAX_ACCOUNT_HOLD_DAYS,
    R = a(A.currentPeriodStart).add(j, "days"),
    O = "".concat(A.id, ":").concat(R.toISOString());
  if (N === O) return null;
  let M = p.default.getPremiumType(A.planId) === S.PremiumTypes.TIER_0 ? E.GradientCssUrls.PREMIUM_TIER_0 : p.default.getPremiumType(A.planId) === S.PremiumTypes.TIER_1 ? E.GradientCssUrls.PREMIUM_TIER_1 : E.GradientCssUrls.PREMIUM_TIER_2;
  return (0, n.jsxs)("div", {
    className: h.premiumRetentionNotice,
    children: [(0, n.jsx)(I.default, {
      className: h.premiumRetentionNoticeIcon,
      color: M
    }), (0, n.jsxs)("div", {
      className: h.premiumRetentionNoticeContent,
      children: [(0, n.jsx)(u.Text, {
        variant: "text-xs/normal",
        children: C.default.Messages.PREMIUM_RETENTION_EMOJI_PICKER_DESCRIPTION.format({
          planName: p.default.getDisplayPremiumType(A.planId),
          endsAt: R
        })
      }), (0, n.jsx)("div", {
        children: (0, n.jsx)(u.Anchor, {
          onClick: () => {
            (0, g.trackPremiumSettingsPaneOpened)(i), t(), d.default.open(_.UserSettingsSections.PREMIUM)
          },
          children: C.default.Messages.PREMIUM_RETENTION_EMOJI_PICKER_UPDATE_PAYMENT_INFORMATION
        })
      })]
    }), (0, n.jsx)(u.Clickable, {
      onClick: () => {
        o.default.set(T, O), N = O, v(!0)
      },
      children: (0, n.jsx)(m.default, {
        className: h.premiumRetentionNoticeClose
      })
    })]
  })
}