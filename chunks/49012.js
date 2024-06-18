"use strict";
n.d(t, {
  q: function() {
    return D
  },
  r: function() {
    return L
  }
});
var i = n(302454),
  r = n.n(i),
  s = n(668781),
  o = n(45986),
  a = n(782568),
  l = n(704133),
  u = n(139674),
  _ = n(702321),
  c = n(900460),
  d = n(627714),
  E = n(364640),
  I = n(772096),
  T = n(982806),
  h = n(540709),
  S = n(881706),
  f = n(592125),
  N = n(430824),
  A = n(20303),
  m = n(902676),
  O = n(375954),
  R = n(699516),
  p = n(944486),
  g = n(626135),
  C = n(981631),
  v = n(689938);

function L(e, t) {
  var n;
  let i = f.Z.getChannel(p.Z.getChannelId());
  return !!(null == i || i.type !== C.d4z.DM || R.Z.isFriend(null !== (n = i.getRecipientId()) && void 0 !== n ? n : "")) && e === t
}

function D(e, t) {
  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
    {
      trusted: R,
      onClick: p,
      onConfirm: L,
      shouldConfirm: D,
      messageId: M,
      channelId: P
    } = e,
    y = r().sanitizeUrl(e.href);
  if (null == y) {
    null != t && t.preventDefault(), s.Z.show({
      title: v.Z.Messages.HOLD_UP,
      body: v.Z.Messages.MALFORMED_LINK_BODY.format({
        url: e.href
      }),
      isDismissable: !0
    });
    return
  }
  let U = null,
    b = !1,
    G = M,
    w = P,
    k = null;
  if (null != M && null != P) {
    var B, x, V;
    let e = O.Z.getMessage(P, M),
      t = f.Z.getBasicChannel(P);
    U = null !== (V = null == t ? void 0 : t.guild_id) && void 0 !== V ? V : null;
    let n = N.Z.getGuild(U),
      i = (null == e ? void 0 : null === (B = e.messageReference) || void 0 === B ? void 0 : B.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(C.iLy.IS_CROSSPOST)) && null != U;
    i && (null == e ? void 0 : null === (x = e.messageReference) || void 0 === x ? void 0 : x.guild_id) != null ? (G = e.messageReference.message_id, w = e.messageReference.channel_id, k = e.messageReference.guild_id) : k = U;
    let r = (null == t ? void 0 : t.type) === C.d4z.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(C.oNc.COMMUNITY)) === !0,
      s = (null == e ? void 0 : e.hasFlag(C.iLy.EPHEMERAL)) === !0;
    b = null != e && !s && (i || r)
  }
  if (null != P) {
    let e = f.Z.getChannel(P),
      t = N.Z.getGuild(null == e ? void 0 : e.getGuildId());
    null != e && null != t && t.hasFeature(C.oNc.DISCOVERABLE) && g.default.track(C.rMx.URL_CLICKED, {
      url_domain: (0, m.F)(y),
      guild_id: t.id,
      channel_id: e.id
    }), (0, _.Z)(P) && g.default.track(C.rMx.CHANGE_LOG_CTA_CLICKED, {
      cta_type: "inline_link",
      target: y
    })
  }
  if (E.Z.trackLinkClicked(y), null != p) {
    if (p(t)) return
  } else {
    let {
      default: e
    } = n(315263), r = e(y, {
      skipExtensionCheck: void 0,
      analyticsLocations: i
    });
    if (null != r && r(t)) return
  }
  let Z = () => {
    if (b && E.Z.trackAnnouncementMessageLinkClicked({
        messageId: G,
        channelId: P,
        guildId: U,
        sourceChannelId: w,
        sourceGuildId: k
      }), null != L) {
      L();
      return
    }(0, a.Z)(y)
  };
  if (null !== u.Z.isBlockedDomain(y)) {
    null == t || t.preventDefault(), l.Z.show(y);
    return
  }
  if (null != (0, S.v)(y)) {
    null == t || t.preventDefault(), h.Z.show(y);
    return
  }
  if ((0, d.I)(y)) {
    null == t || t.preventDefault(), c.Z.show(y);
    return
  }
  let H = "function" == typeof R ? R() : R,
    F = (0, m.E)(y),
    Y = !("http:" === F || "https:" === F);
  if (!Y && (H || A.Z.isTrustedDomain(y)) || Y && A.Z.isTrustedProtocol(y)) {
    null == t || null != D && D ? Z() : b && E.Z.trackAnnouncementMessageLinkClicked({
      messageId: G,
      channelId: P,
      guildId: U,
      sourceChannelId: w,
      sourceGuildId: k
    });
    return
  }
  if (null != t && t.preventDefault(), Y) T.Z.show({
    url: y,
    trustUrl: o.u,
    onConfirm: Z,
    isProtocol: !0
  });
  else {
    let e = (0, I.yw)(y),
      t = null != e ? e.displayTarget : y;
    T.Z.show({
      url: t,
      trustUrl: o.o,
      onConfirm: Z,
      isProtocol: !1
    })
  }
}