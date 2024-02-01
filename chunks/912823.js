"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("222007"), n("424973");
var l = n("37983"),
  i = n("884691"),
  r = n("394846"),
  o = n("446674"),
  s = n("798609"),
  a = n("206230"),
  u = n("427953"),
  d = n("383018"),
  c = n("619935"),
  f = n("540692"),
  p = n("53253"),
  m = n("795696"),
  h = n("1607"),
  E = n("328511"),
  S = n("585722"),
  g = n("697218"),
  C = n("719923"),
  T = n("998206"),
  v = n("35385"),
  y = n("695369"),
  x = n("198"),
  I = n("315814"),
  _ = n("108486"),
  N = n("923582"),
  A = n("80921"),
  R = n("954016"),
  O = n("646718"),
  M = n("537461");

function b(e) {
  let {
    disabled: t,
    channel: n
  } = e, {
    enabled: r
  } = p.default.useExperiment({
    location: "dc120b_1"
  }, {
    autoTrackExposure: !1
  }), o = (0, p.useIsSeasonalGiftingActive)();
  i.useEffect(() => {
    o && p.default.trackExposure({
      location: "dc120b_2"
    })
  }, [o]);
  let s = r && o;
  return s ? (0, l.jsx)(_.default, {
    disabled: t,
    channel: n
  }) : (0, l.jsx)(x.default, {
    disabled: t,
    channel: n
  })
}
var k = i.memo(function(e) {
  var t, n, i, p, x, _, k, P, L;
  let {
    type: U,
    disabled: j,
    channel: D,
    handleSubmit: w,
    isEmpty: B
  } = e, H = (0, o.useStateFromStores)([a.default], () => a.default.isSubmitButtonEnabled), F = (0, o.useStateFromStores)([E.default], () => E.default.getStickerPreview(D.id, U.drafts.type)), G = null != F && F.length > 0, K = (0, o.useStateFromStores)([S.default], () => S.default.getUploads(D.id, U.drafts.type)), {
    activeCommand: V,
    activeCommandOption: W
  } = (0, o.useStateFromStoresObject)([d.default], () => ({
    activeCommand: d.default.getActiveCommand(D.id),
    activeCommandOption: d.default.getActiveOption(D.id)
  })), {
    paymentsBlocked: Y
  } = c.default.useExperiment({
    location: "dc120b_3"
  }, {
    autoTrackExposure: !1
  }), q = [], {
    enabled: z
  } = h.default.getCurrentConfig({
    location: "dc120b_4"
  }, {
    autoTrackExposure: !1
  }), Q = g.default.getCurrentUser(), X = null !== (p = (0, o.useStateFromStores)([f.default], () => z && C.default.isPremiumExactly(Q, O.PremiumTypes.TIER_2) ? f.default.getReferralsRemaining() : 0)) && void 0 !== p ? p : 0, Z = (0, o.useStateFromStores)([f.default], () => {
    if (!D.isDM() || void 0 === D.recipients || D.recipients.length > 1 || !z) return !1;
    let e = D.recipients[0],
      t = f.default.getSentUserIds();
    return t.includes(e)
  }), [J, $] = (0, o.useStateFromStoresArray)([f.default, g.default], () => {
    let e = [!1, !1];
    if (!D.isDM() || void 0 === D.recipients || D.recipients.length > 1) return e;
    let t = D.recipients[0],
      n = g.default.getUser(t);
    if (null == n) return e;
    let l = n.bot;
    if (l) return e;
    let i = Z || X > 0,
      r = f.default.getRecipientEligibility(t);
    return [z && i && r, r]
  }), ee = (0, u.useActivitiesInTextButtonVisibility)(D.id, "ChannelTextAreaButtons");
  if (!r.isMobile) {
    if (D.isDM() && (null === (x = U.gifts) || void 0 === x ? void 0 : x.button) != null && null == V && (C.default.isPremiumExactly(Q, O.PremiumTypes.TIER_2) && $ && h.default.trackExposure({
        location: "dc120b_5"
      }), J && q.push((0, l.jsx)(I.default, {
        disabled: j,
        referralsRemaining: X,
        channel: D,
        isResending: Z
      }, "referral"))), (null == ee ? void 0 : ee.showChatInputButton) && R.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(D.type) && null == V && (null === (_ = U.commands) || void 0 === _ ? void 0 : _.enabled) && q.push((0, l.jsx)(T.default, {
        disabled: j,
        channel: D,
        type: U
      }, "activity")), (null === (k = U.gifts) || void 0 === k ? void 0 : k.button) != null && null == V && !Y) {
      let {
        hideChannelGiftButton: e
      } = m.default.getCurrentConfig({
        location: "ChannelTextAreaButtons"
      }, {
        autoTrackExposure: D.isDM()
      }), t = D.isDM() && e;
      !t && q.push((0, l.jsx)(b, {
        disabled: j,
        channel: D
      }, "gift"))
    }(null === (P = U.gifs) || void 0 === P ? void 0 : P.button) != null && null == V && q.push((0, l.jsx)(y.default, {
      disabled: j,
      type: U
    }, "gif")), (null === (L = U.stickers) || void 0 === L ? void 0 : L.button) != null && null == V && q.push((0, l.jsx)(A.default, {
      disabled: j,
      type: U
    }, "sticker"))
  }
  return ((null === (t = U.emojis) || void 0 === t ? void 0 : t.button) != null && (null == V || null != W && W.type !== s.ApplicationCommandOptionType.ATTACHMENT) && q.push((0, l.jsx)(v.default, {
    disabled: j,
    type: U
  }, "emoji")), (null === (n = U.submit) || void 0 === n ? void 0 : n.button) != null && ((null === (i = U.submit) || void 0 === i ? void 0 : i.ignorePreference) || H) && q.push((0, l.jsx)(N.default, {
    onClick: w,
    disabled: j || 0 === K.length && B && !G
  }, "submit")), 0 === q.length) ? null : (0, l.jsx)("div", {
    className: M.buttons,
    children: q
  })
})