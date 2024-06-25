"use strict";
n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(873546),
  o = n(442837),
  a = n(911969),
  l = n(607070),
  u = n(998698),
  _ = n(211242),
  c = n(276444),
  d = n(646476),
  E = n(963198),
  I = n(913663),
  T = n(117530),
  h = n(594174),
  f = n(74538),
  S = n(94161),
  A = n(9277),
  N = n(897291),
  m = n(764794),
  O = n(241553),
  p = n(319417),
  R = n(728386),
  g = n(474936),
  C = n(573809);

function v(e) {
  let {
    disabled: t,
    channel: n
  } = e, {
    enabled: s
  } = d.ZP.useExperiment({
    location: "dc120b_1"
  }, {
    autoTrackExposure: !1
  }), o = (0, d.rK)();
  return r.useEffect(() => {
    o && d.ZP.trackExposure({
      location: "dc120b_2"
    })
  }, [o]), s && o ? (0, i.jsx)(O.Z, {
    disabled: t,
    channel: n
  }) : (0, i.jsx)(N.Z, {
    disabled: t,
    channel: n
  })
}
t.Z = r.memo(function(e) {
  var t, n, r, d, N, O, L, D;
  let {
    type: M,
    disabled: P,
    channel: y,
    handleSubmit: U,
    isEmpty: b
  } = e, G = (0, o.e7)([l.Z], () => l.Z.isSubmitButtonEnabled), w = (0, o.e7)([I.Z], () => I.Z.getStickerPreview(y.id, M.drafts.type)), x = null != w && w.length > 0, B = (0, o.e7)([T.Z], () => T.Z.getUploads(y.id, M.drafts.type)), {
    activeCommand: k,
    activeCommandOption: V
  } = (0, o.cj)([u.Z], () => ({
    activeCommand: u.Z.getActiveCommand(y.id),
    activeCommandOption: u.Z.getActiveOption(y.id)
  })), {
    paymentsBlocked: Z
  } = _.Z.useExperiment({
    location: "dc120b_3"
  }, {
    autoTrackExposure: !1
  }), H = [], {
    enabled: F
  } = E.Z.getCurrentConfig({
    location: "dc120b_4"
  }, {
    autoTrackExposure: !1
  }), Y = h.default.getCurrentUser(), j = null !== (d = (0, o.e7)([c.Z], () => F && f.ZP.isPremiumExactly(Y, g.p9.TIER_2) ? c.Z.getReferralsRemaining() : 0)) && void 0 !== d ? d : 0, W = (0, o.e7)([c.Z], () => {
    if (!y.isDM() || void 0 === y.recipients || y.recipients.length > 1 || !F) return !1;
    let e = y.recipients[0];
    return c.Z.getSentUserIds().includes(e)
  }), [K, z] = (0, o.Wu)([c.Z, h.default], () => {
    let e = [!1, !1];
    if (!y.isDM() || void 0 === y.recipients || y.recipients.length > 1) return e;
    let t = y.recipients[0],
      n = h.default.getUser(t);
    if (null == n || n.bot) return e;
    let i = W || j > 0,
      r = c.Z.getRecipientEligibility(t);
    return [F && i && r, r]
  });
  return (!s.tq && (y.isDM() && (null === (N = M.gifts) || void 0 === N ? void 0 : N.button) != null && null == k && (f.ZP.isPremiumExactly(Y, g.p9.TIER_2) && z && E.Z.trackExposure({
    location: "dc120b_5"
  }), K && H.push((0, i.jsx)(m.Z, {
    disabled: P,
    referralsRemaining: j,
    channel: y,
    isResending: W
  }, "referral"))), (null === (O = M.gifts) || void 0 === O ? void 0 : O.button) != null && null == k && !Z && H.push((0, i.jsx)(v, {
    disabled: P,
    channel: y
  }, "gift")), (null === (L = M.gifs) || void 0 === L ? void 0 : L.button) != null && null == k && H.push((0, i.jsx)(A.Z, {
    disabled: P,
    type: M
  }, "gif")), (null === (D = M.stickers) || void 0 === D ? void 0 : D.button) != null && null == k && H.push((0, i.jsx)(R.Z, {
    disabled: P,
    type: M
  }, "sticker"))), (null === (t = M.emojis) || void 0 === t ? void 0 : t.button) != null && (null == k || null != V && V.type !== a.jw.ATTACHMENT) && H.push((0, i.jsx)(S.Z, {
    disabled: P,
    type: M
  }, "emoji")), (null === (n = M.submit) || void 0 === n ? void 0 : n.button) != null && ((null === (r = M.submit) || void 0 === r ? void 0 : r.ignorePreference) || G) && H.push((0, i.jsx)(p.Z, {
    onClick: U,
    disabled: P || 0 === B.length && b && !x
  }, "submit")), 0 === H.length) ? null : (0, i.jsx)("div", {
    className: C.buttons,
    children: H
  })
})