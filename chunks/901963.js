"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(913527),
  o = n.n(s),
  a = n(442837),
  l = n(433517),
  u = n(481060),
  _ = n(355467),
  c = n(230711),
  d = n(78839),
  E = n(672752),
  I = n(74538),
  T = n(543241),
  h = n(981631),
  S = n(474936),
  f = n(689938),
  N = n(375660);
let A = "premiumRetentionEmojiPickerNotice",
  m = l.K.get(A);
t.Z = e => {
  let {
    closePopout: t,
    channel: n
  } = e, [s, O] = r.useState(!1), {
    subscription: R,
    hasFetchedSubscriptions: p
  } = (0, a.cj)([d.ZP], () => ({
    subscription: d.ZP.getPremiumSubscription(),
    hasFetchedSubscriptions: d.ZP.hasFetchedSubscriptions()
  }));
  if (r.useEffect(() => {
      !p && (0, _.jg)()
    }, [p]), null == R || !(0, I.zV)(R.status) || s) return null;
  let g = R.status === h.O0b.PAST_DUE ? (0, I.lY)(R).expiresDate : o()(R.currentPeriodStart).add(S.gh),
    C = "".concat(R.id, ":").concat(g.toISOString());
  if (m === C) return null;
  let v = I.ZP.getPremiumType(R.planId) === S.p9.TIER_0 ? E.JX.PREMIUM_TIER_0 : I.ZP.getPremiumType(R.planId) === S.p9.TIER_1 ? E.JX.PREMIUM_TIER_1 : E.JX.PREMIUM_TIER_2;
  return (0, i.jsxs)("div", {
    className: N.premiumRetentionNotice,
    children: [(0, i.jsx)(u.NitroWheelIcon, {
      size: "md",
      className: N.premiumRetentionNoticeIcon,
      color: v
    }), (0, i.jsxs)("div", {
      className: N.premiumRetentionNoticeContent,
      children: [(0, i.jsx)(u.Text, {
        variant: "text-xs/normal",
        children: f.Z.Messages.PREMIUM_RETENTION_EMOJI_PICKER_DESCRIPTION.format({
          planName: I.ZP.getDisplayPremiumType(R.planId),
          endsAt: g
        })
      }), (0, i.jsx)("div", {
        children: (0, i.jsx)(u.Anchor, {
          onClick: () => {
            (0, T.A3)(n), t(), c.Z.open(h.oAB.PREMIUM)
          },
          children: f.Z.Messages.PREMIUM_RETENTION_EMOJI_PICKER_UPDATE_PAYMENT_INFORMATION
        })
      })]
    }), (0, i.jsx)(u.Clickable, {
      onClick: () => {
        l.K.set(A, C), m = C, O(!0)
      },
      children: (0, i.jsx)(u.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: N.premiumRetentionNoticeClose
      })
    })]
  })
}