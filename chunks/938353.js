n.d(t, {
  $p: function() {
return e7;
  },
  BB: function() {
return e0;
  },
  ZP: function() {
return e1;
  }
}), n(47120), n(789020), n(411104), n(390547);
var i, s = n(735250),
  a = n(470079),
  r = n(120356),
  l = n.n(r),
  o = n(275726),
  c = n(442837),
  u = n(377108),
  d = n(902704),
  _ = n(481060),
  E = n(904245),
  I = n(637374),
  m = n(626799),
  T = n(911969),
  h = n(624367),
  N = n(433074),
  f = n(421474),
  C = n(603270),
  p = n(222709),
  g = n(446411),
  S = n(960904),
  A = n(161314),
  M = n(163268),
  R = n(25610),
  O = n(703751),
  x = n(761538),
  v = n(674611),
  Z = n(346610),
  L = n(868643),
  P = n(394779),
  D = n(294734),
  b = n(426275),
  j = n(715903),
  U = n(71619),
  y = n(637618),
  B = n(225890),
  k = n(364097),
  G = n(495129),
  F = n(954654),
  w = n(41776),
  V = n(628238),
  H = n(454585),
  Y = n(768494),
  W = n(124347),
  K = n(976853),
  z = n(346013),
  q = n(977683),
  Q = n(128435),
  X = n(98278),
  J = n(614825),
  $ = n(265299),
  ee = n(699833),
  et = n(344997),
  en = n(378233),
  ei = n(374425),
  es = n(665906),
  ea = n(432147),
  er = n(695346),
  el = n(314897),
  eo = n(271383),
  ec = n(607744),
  eu = n(496675),
  ed = n(594174),
  e_ = n(941797),
  eE = n(52824),
  eI = n(592256),
  em = n(626135),
  eT = n(70956),
  eh = n(408433),
  eN = n(630388),
  ef = n(823379),
  eC = n(709054),
  ep = n(591759),
  eg = n(169525),
  eS = n(161010),
  eA = n(461157),
  eM = n(901461),
  eR = n(432376),
  eO = n(384203),
  ex = n(633957),
  ev = n(530472),
  eZ = n(29909),
  eL = n(782658),
  eP = n(219797),
  eD = n(453687),
  eb = n(128854),
  ej = n(101578),
  eU = n(524444),
  ey = n(319323),
  eB = n(884182),
  ek = n(546432),
  eG = n(920888),
  eF = n(817384),
  ew = n(981631),
  eV = n(474936),
  eH = n(689938),
  eY = n(848509),
  eW = n(738779),
  eK = n(680674);

function ez(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function eq() {
  return (0, s.jsxs)('div', {
className: eW.nitroFileSizeUpsell,
children: [
  (0, s.jsx)('img', {
    src: eK,
    className: eW.nitroBadgeSvg,
    alt: ''
  }),
  (0, s.jsx)(_.Text, {
    variant: 'text-xs/normal',
    color: 'text-muted',
    children: eH.Z.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
      onClick: () => (0, X.z)()
    })
  })
]
  });
}
let eQ = 15 * eT.Z.Millis.MINUTE,
  eX = new Set([
'discord-developers',
'discord-testers',
'discord-townhall',
'discordgameslab'
  ]),
  eJ = (e, t, n) => () => {
let i = null != t ? t : n;
if (null == i)
  return null;
let {
  url: a,
  proxyURL: r,
  width: l,
  height: o
} = i;
return (0, s.jsx)(eZ.Z, {
  width: l,
  height: o,
  src: null != r && '' !== r ? r : a,
  url: null != e && '' !== e ? e : null != r && '' !== r ? r : a,
  format: null != n ? u.EO.VIDEO : u.EO.IMAGE,
  className: eW.gifFavoriteButton
});
  },
  e$ = e => () => {
let {
  url: t,
  proxyUrl: n,
  width: i,
  height: a
} = e;
return null != i && null != a && W.u.test(n) ? (0, s.jsx)(eZ.Z, {
  width: i,
  height: a,
  src: n,
  url: t,
  format: u.EO.IMAGE,
  className: eW.gifFavoriteButton
}) : null;
  };
class e0 extends(i = a.Component) {
  shouldRenderInvite(e) {
let {
  channel: t
} = this.props;
return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eX.has(e));
  }
  shouldComponentUpdate(e, t) {
var n, i;
let {
  channel: s,
  message: a,
  poll: r
} = this.props, {
  channel: l,
  message: o,
  poll: c
} = e;
return !(0, d.Z)(this.state, t) || !(0, d.Z)(this.props, e, [
  'message',
  'channel'
]) || s.type !== l.type || c !== r || o.codedLinks !== a.codedLinks || o.flags !== a.flags || o.giftCodes !== a.giftCodes || o.attachments !== a.attachments || o.embeds !== a.embeds || o.components !== a.components || o.activity !== a.activity || (n = o.reactions, n !== (i = a.reactions) && (n.length !== i.length || !!n.some((e, t) => {
  let {
    emoji: n,
    count: s,
    burst_count: a
  } = e, {
    emoji: r,
    count: l,
    burst_count: o
  } = i[t];
  return a !== o || s !== l || n.id !== r.id || n.name !== r.name;
})));
  }
  renderCtaButton() {
let {
  message: e,
  channel: t,
  shouldRenderCtaButton: n
} = this.props;
return n ? (0, s.jsx)('div', {
  className: eW.ctaButtonContainer,
  children: (0, s.jsx)(v.Z, {
    messageId: e.id,
    channelId: t.id
  })
}) : null;
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
let t = e.attachments.some(e => e.size > eV.Lw);
return (0, eS.M)('attachment') && t ? (0, s.jsx)(eq, {}) : null;
  }
  renderCodedLinks(e) {
return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
  let {
    type: n,
    code: i
  } = t;
  if (n === S.g.INVITE)
    return this.shouldRenderInvite(i) ? (0, s.jsx)(eL.Z, {
      code: i,
      author: e.author,
      getAcceptInviteContext: this.getAcceptInviteContext
    }, i) : null;
  if (n === S.g.TEMPLATE)
    return (0, s.jsx)(k.Z, {
      code: i
    }, i);
  if (n === S.g.EVENT)
    return (0, s.jsx)(B.Z, {
      code: i
    }, i);
  else if (n === S.g.CHANNEL_LINK)
    return (0, s.jsx)(eO.Z, {
      code: i,
      messageData: e
    }, i);
  else if (n === S.g.APP_DIRECTORY_PROFILE)
    return (0, s.jsx)(N.Z, {
      code: i,
      message: e
    }, i);
  else if (n === S.g.ACTIVITY_BOOKMARK)
    return (0, s.jsx)(h.Z, {
      applicationId: i,
      message: e
    }, i);
  else if (n === S.g.GUILD_PRODUCT)
    return (0, s.jsx)(y.Z, {
      code: i
    }, i);
  else if (n === S.g.SERVER_SHOP)
    return (0, s.jsx)(A.Z, {
      guildId: i
    }, i);
  else if (n === S.g.QUESTS_EMBED)
    return (0, s.jsx)($.Z, {
      questId: i
    }, i);
  else if (n === S.g.APP_DIRECTORY_STOREFRONT)
    return (0, s.jsx)(C.P, {
      appId: i,
      message: e
    }, i);
  else if (n === S.g.APP_DIRECTORY_STOREFRONT_SKU) {
    let t = (0, f.Q)(i);
    return null == t ? null : (0, s.jsx)(C.F, {
      skuId: t.skuId,
      message: e
    }, i);
  } else
    throw Error('Unknown coded link type: '.concat(n));
});
  }
  renderGiftCodes(e) {
let {
  giftCodes: t,
  author: n,
  channel_id: i,
  type: a,
  content: r,
  giftInfo: l
} = e, o = ed.default.getCurrentUser();
return null != o && t.length > 0 ? t.map(e => (0, s.jsx)('div', {
  className: eW.giftCodeContainer,
  children: (0, s.jsx)(I.Z, {
    code: e,
    author: n,
    channelId: i,
    currentUser: o,
    type: a,
    content: r,
    giftInfo: l
  })
}, e)) : null;
  }
  renderReferralTrial(e) {
let {
  referralTrialOfferId: t,
  type: n
} = e, {
  canRenderReferralEmbed: i
} = this.props;
return n !== o.u.PREMIUM_REFERRAL || null == t ? null : (0, s.jsx)('div', {
  className: eW.referralContainer,
  children: (0, s.jsx)(J.Z, {
    userTrialOfferId: t,
    canRenderReferralEmbed: null != i && i
  })
}, t);
  }
  renderReactions(e) {
let {
  disableReactionCreates: t,
  disableReactionReads: n,
  disableReactionUpdates: i,
  isLurking: a,
  isGuest: r,
  isPendingMember: l,
  channel: o,
  forceAddReactions: c
} = this.props;
return n ? null : (0, s.jsx)(eG.Z, {
  message: e,
  channel: o,
  disableReactionCreates: t,
  disableReactionUpdates: i,
  isLurking: a,
  isGuest: r,
  isPendingMember: l,
  forceAddReactions: c,
  useChatFontScaling: !0
});
  }
  renderAttachments(e) {
let {
  attachments: t,
  flags: n
} = e, {
  channel: i,
  shouldRedactExplicitContent: a,
  hasInlineForwardButton: r
} = this.props;
if (0 === t.length || e.isPoll() || e.isUIKitComponents())
  return null;
let l = t.filter(e => null == e.flags || !(0, eN.yE)(e.flags, ew.J0y.IS_THUMBNAIL));
if (0 === l.length)
  return null;
let {
  gifAutoPlay: o,
  canDeleteAttachments: c,
  inlineAttachmentMedia: u,
  onMediaItemContextMenu: d,
  shouldHideMediaOptions: _
} = this.props, E = l.map(t => (0, eI.j9)(t, (0, P.s)(e, {
  type: 'attachment',
  attachmentId: t.id
}), _, a)).filter(ef.lm), I = {
  source: 'Media Mosaic',
  guild_id: i.guild_id,
  channel_id: i.id,
  channel_type: i.type
}, m = E.length > 1 ? (0, eI.Cx)(E, I) : {}, T = (0, eN.yE)(n, ew.iLy.IS_VOICE_MESSAGE);

function h(e, t) {
  return (0, eg.dn)(e.originalItem, t);
}
let N = l.map(t => {
    let n = (0, Y.VY)(t),
      s = {
        message: e,
        item: (0, ek.OB)(t, u),
        autoPlayGif: o,
        canRemoveItem: c && (l.length > 1 || '' !== e.content),
        onRemoveItem: this.handleRemoveAttachment,
        className: eW.embedWrapper,
        getObscureReason: h,
        onContextMenu: null != d ? e => {
          e.stopPropagation(), e.preventDefault(), d(e, n);
        } : void 0,
        renderAudioComponent: T ? eP.jY : eP.q7,
        renderImageComponent: eP.dS,
        renderVideoComponent: eP.vZ,
        renderPlaintextFilePreview: eP.d4,
        renderGenericFileComponent: eP.ZK,
        renderMosaicItemFooter: eP.L9,
        onPlay: (e, n, s) => {
          em.default.track(ew.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
            guild_id: i.guild_id,
            channel_id: i.id,
            channel_type: i.type,
            type: t.content_type,
            flags: t.flags,
            size: t.size,
            duration: s
          });
        },
        gifFavoriteButton: e$(n)
      },
      a = (0, eE.q)({
        proxyURL: t.proxy_url,
        url: t.url
      });
    return a in m && (s.onClick = m[a]), s;
  }),
  f = r ? (0, s.jsx)(b.Z, {
    className: eY.hideIfMessageNotFocused,
    messageId: e.id,
    channelId: i.id,
    targetKind: 'media'
  }) : void 0;
return (0, s.jsx)(eB.Z, {
  items: N,
  inlineForwardButton: f
});
  }
  renderEmbeds(e) {
let {
  renderEmbeds: t
} = this.props;
return 0 !== e.embeds.length && t ? e.embeds.map((t, n) => {
  if (eF.b.has(t.type) || (0, eh.l3)(t))
    return null;
  let i = {
    renderImageComponent: eU.Yi,
    renderVideoComponent: eU.lV,
    renderLinkComponent: eU.iT,
    renderForwardComponent: (0, P.s)(e, {
      type: 'embed',
      embedIndex: n
    })
  };
  if (t.type === ew.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
    let a = ep.Z.safeParseWithQuery(t.url);
    if (null != a && null != a.pathname) {
      let r = a.pathname.split('/')[3];
      if (null != r)
        return (0, s.jsx)(m.Z, {
          skuId: r,
          renderFallback: () => this.renderEmbed(t, n, i, e.id, e.channel_id)
        }, t.id);
    }
  }
  return this.renderEmbed(t, n, i, e.id, e.channel_id);
}) : null;
  }
  renderComponentAccessories(e) {
if (0 === e.components.length || !1 === this.props.renderComponentAccessory)
  return null;
let {
  gifAutoPlay: t,
  shouldRedactExplicitContent: n,
  shouldHideMediaOptions: i,
  onMediaItemContextMenu: a
} = this.props;
return (0, s.jsx)(eb.F, {
  gifAutoPlay: t,
  getGifFavButton: e$,
  getOnMediaItemContextMenu: null == a ? void 0 : e => t => {
    t.stopPropagation(), t.preventDefault(), null == a || a(t, e);
  },
  shouldHideMediaOptions: i,
  shouldRedactExplicitContent: n,
  children: (0, s.jsx)(F.ZP, {
    message: e
  })
});
  }
  renderActivityInvite(e) {
if (null == e.activity)
  return null;
let {
  channel: t
} = this.props;
return (0, s.jsx)(ej.Z, {
  channel: t,
  message: e,
  hideParty: !1
});
  }
  renderPublishBump(e) {
return this.props.channel.type !== ew.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot ? null : (0, s.jsx)(p.Z, {
  channelId: e.channel_id,
  messageId: e.id
});
  }
  renderEphemeralAccessories(e) {
return (0, eN.yE)(e.flags, ew.iLy.EPHEMERAL) ? (0, s.jsx)(ev.Z, {
  message: e,
  onDeleteMessage: () => {
    E.Z.dismissAutomatedMessage(e);
  }
}) : null;
  }
  renderStickersAccessories(e) {
let t = (0, en.cv)(e),
  {
    channel: n,
    isInteracting: i
  } = this.props;
return 0 === t.length ? null : t.map(e => (0, s.jsx)(ei.Z, {
  channel: n,
  isInteracting: i,
  renderableSticker: e
}, e.id));
  }
  renderThreadAccessories(e) {
if (e.hasFlag(ew.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
  return (0, s.jsx)(ea.Z, {
    message: e,
    compact: this.props.compact
  });
  }
  renderThreadRoleMentionWarning(e) {
if (!!e.hasFlag(ew.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
  if (!(Date.now() - eC.default.extractTimestamp(e.id) >= eQ))
    return (0, s.jsx)('div', {
      className: eW.threadRoleMentionFailure,
      children: eH.Z.Messages.THREAD_ROLE_MENTION_FAILURE
    });
}
  }
  renderSuppressConfirmModal() {
let {
  channel: e,
  message: t
} = this.props;
return (0, s.jsxs)(_.DeclarativeConfirmModal, {
  dismissable: !0,
  header: eH.Z.Messages.SUPPRESS_EMBED_TITLE,
  confirmText: eH.Z.Messages.SUPPRESS_EMBED_CONFIRM,
  cancelText: eH.Z.Messages.CANCEL,
  onCancel: () => this.setState({
    showSuppressModal: !1
  }),
  onConfirm: () => {
    E.Z.suppressEmbeds(e.id, t.id), this.setState({
      showSuppressModal: !1
    });
  },
  children: [
    (0, s.jsx)(_.Text, {
      variant: 'text-md/normal',
      color: 'text-normal',
      className: eW.confirmText,
      children: eH.Z.Messages.SUPPRESS_EMBED_BODY
    }),
    (0, s.jsx)(_.Text, {
      variant: 'text-md/normal',
      color: 'text-muted',
      children: eH.Z.Messages.SUPPRESS_EMBED_TIP
    })
  ]
});
  }
  renderRemoveAttachmentConfirmModal() {
let {
  channel: e,
  message: t
} = this.props, {
  attachmentToDelete: n
} = this.state;
if (null == n) {
  this.setState({
    showRemoveAttachmentModal: !1
  });
  return;
}
return (0, s.jsx)(_.DeclarativeConfirmModal, {
  dismissable: !0,
  header: eH.Z.Messages.REMOVE_ATTACHMENT_TITLE,
  confirmText: eH.Z.Messages.REMOVE_ATTACHMENT_CONFIRM,
  cancelText: eH.Z.Messages.CANCEL,
  onCancel: () => this.setState({
    showRemoveAttachmentModal: !1,
    attachmentToDelete: null
  }),
  onConfirm: () => {
    let i = t.attachments.filter(e => e.id !== n.id);
    E.Z.patchMessageAttachments(e.id, t.id, i), this.setState({
      showRemoveAttachmentModal: !1,
      attachmentToDelete: null
    });
  },
  children: (0, s.jsx)(_.Text, {
    variant: 'text-md/normal',
    color: 'text-normal',
    className: eW.confirmText,
    children: eH.Z.Messages.REMOVE_ATTACHMENT_BODY
  })
});
  }
  renderInteractionPremiumUpsell(e) {
let t = e.applicationId;
return e.type !== o.u.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, s.jsx)(ey.Z, {
  applicationId: t,
  guildId: this.props.channel.guild_id
});
  }
  renderEmbeddedApplicationInstanceEmbed(e) {
let {
  application: t,
  activityInstance: n,
  interaction: i
} = e;
return null == t || null == n || (null == i ? void 0 : i.type) !== T.B8.APPLICATION_COMMAND ? null : (0, s.jsx)(ex.Z, {
  application: t,
  channelId: this.props.channel.id,
  guildId: this.props.channel.guild_id
});
  }
  renderMediaPostEmbeds(e) {
return e.embeds.flatMap(t => t.type !== ew.hBH.POST_PREVIEW || null == t.url ? [] : (0, s.jsx)(z.Z, {
  embedUrl: t.url,
  message: e,
  channel: this.props.channel
}, t.id));
  }
  renderSafetyPolicyNotice(e) {
return 1 === e.embeds.length && e.embeds[0].type === ew.hBH.SAFETY_POLICY_NOTICE ? (0, s.jsx)(ee.i, {
  message: e
}) : null;
  }
  renderSafetySystemNotification(e) {
return 1 === e.embeds.length && e.embeds[0].type === ew.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, s.jsx)(et.g, {
  embed: e.embeds[0]
}) : null;
  }
  renderVoiceChannelInvite(e, t) {
if (1 === e.embeds.length && e.embeds[0].type === ew.hBH.VOICE_CHANNEL)
  return (0, s.jsx)(G.H, {
    message: e,
    channel: t
  });
  }
  renderMediaObscureNotice(e) {
if (0 === e.attachments.length && 0 === e.embeds.length)
  return null;
let {
  obscuredAttachments: t,
  obscuredEmbeds: n
} = (0, M.Tw)(e);
return 0 === t.length && 0 === n.length ? null : (0, s.jsx)(x.Z, {
  message: e
});
  }
  renderPoll(e, t) {
if (null != t)
  return (0, s.jsx)(Q.Z, {
    message: e,
    poll: t,
    className: eW.pollContainer
  });
  }
  renderForwardedMessage(e) {
return 0 === e.messageSnapshots.length ? null : (0, s.jsx)(D.Z, {
  message: e
});
  }
  render() {
let {
  className: e,
  message: t,
  channel: n,
  poll: i
} = this.props, {
  showSuppressModal: a,
  showRemoveAttachmentModal: r
} = this.state, o = this.renderCodedLinks(t), c = this.renderGiftCodes(t), u = this.renderReferralTrial(t), d = this.renderAttachments(t), _ = this.renderCtaButton(), E = this.renderSocialProofingFileSizeNitroUpsell(t), I = this.renderEmbeds(t), m = this.renderActivityInvite(t), T = this.renderReactions(t), h = this.renderPublishBump(t), N = this.renderEphemeralAccessories(t), f = this.renderStickersAccessories(t), C = this.renderThreadAccessories(t), p = this.renderComponentAccessories(t), g = this.renderThreadRoleMentionWarning(t), S = this.renderEmbeddedApplicationInstanceEmbed(t), A = this.renderInteractionPremiumUpsell(t), M = this.renderMediaPostEmbeds(t), R = this.renderSafetyPolicyNotice(t), O = this.renderSafetySystemNotification(t), x = this.renderVoiceChannelInvite(t, n), v = this.renderMediaObscureNotice(t), Z = this.renderPoll(t, i), L = this.renderForwardedMessage(t);
return null == o && null == d && null == I && null == m && null == T && null == c && null == u && null == h && null == N && null == f && null == C && null == p && null == S && null == g && null == M && null == R && null != A && null == Z && null == x && null == L ? null : (0, s.jsxs)('div', {
  id: (0, eD.bX)(t),
  className: l()(e, eW.container),
  children: [
    L,
    g,
    Z,
    o,
    c,
    u,
    M,
    d,
    _,
    I,
    v,
    m,
    f,
    p,
    S,
    A,
    E,
    T,
    h,
    N,
    a && this.renderSuppressConfirmModal(),
    r && this.renderRemoveAttachmentConfirmModal(),
    C,
    R,
    O,
    x
  ]
});
  }
  constructor(...e) {
super(...e), ez(this, 'state', {
  showSuppressModal: !1,
  showRemoveAttachmentModal: !1,
  attachmentToDelete: null
}), ez(this, 'getAcceptInviteContext', e => {
  let {
    channel: t,
    message: n
  } = this.props;
  return {
    location: e,
    location_guild_id: t.getGuildId(),
    location_channel_id: t.id,
    location_channel_type: t.type,
    location_message_id: n.id
  };
}), ez(this, 'renderEmbed', (e, t, n, i, a) => {
  let {
    gifAutoPlay: r,
    inlineEmbedMedia: l,
    canSuppressEmbeds: o,
    hasSpoilerEmbeds: c,
    shouldRedactExplicitContent: u,
    hasInlineForwardButton: d
  } = this.props, _ = (0, eg.BP)(e, a, i, c, u);
  if (e.type === ew.hBH.GIFT)
    return null;
  let E = (0, s.jsx)(e_.h.Provider, {
    value: eJ(e.url, e.image, e.video),
    children: (0, s.jsx)(g.ZP, {
      className: eW.embedWrapper,
      embed: e,
      obscureReason: null != _ ? _ : void 0,
      autoPlayGif: r,
      hideMedia: !l,
      onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
      renderTitle: this.renderEmbedTitle,
      renderDescription: this.renderEmbedDescription,
      messageId: i,
      channelId: a,
      ...n
    })
  }, e.id);
  return d ? (0, s.jsxs)('div', {
    className: eW.embedContainer,
    children: [
      E,
      (0, s.jsx)(b.Z, {
        className: eY.hideIfMessageNotFocused,
        messageId: i,
        channelId: a,
        targetKind: 'embed',
        embedIndex: t
      })
    ]
  }) : E;
}), ez(this, 'renderEmbedTitle', (e, t) => e.type === ew.hBH.RICH ? H.Z.parseEmbedTitle(t, !0, {
  channelId: this.props.channel.id
}) : t), ez(this, 'renderEmbedDescription', (e, t, n) => e.type === ew.hBH.RICH ? H.Z.parse(t, !0, {
  channelId: this.props.channel.id,
  allowLinks: !0,
  allowEmojiLinks: !0,
  allowList: this.props.showListsAndHeaders,
  allowHeading: !n && this.props.showListsAndHeaders,
  previewLinkTarget: this.props.showMaskedLinks
}) : t), ez(this, 'handleEmbedSuppressed', e => {
  let {
    channel: t,
    message: n
  } = this.props;
  e.shiftKey ? E.Z.suppressEmbeds(t.id, n.id) : this.setState({
    showSuppressModal: !0
  });
}), ez(this, 'handleRemoveAttachment', e => {
  let t = e.originalItem;
  this.setState({
    showRemoveAttachmentModal: !0,
    attachmentToDelete: t
  });
});
  }
}

function e1(e) {
  var t;
  let {
channel: n,
message: i,
renderSuppressEmbeds: a,
isMessageSnapshot: r
  } = e, l = (0, c.e7)([el.default], () => el.default.getId()), o = er.x4.useSetting(), u = er.RS.useSetting(), d = er.NA.useSetting() && !(0, eM.Z)(e.message), _ = er.nc.useSetting(), E = er.QK.useSetting(), I = (0, c.e7)([ec.Z], () => null == n.guild_id || ec.Z.canChatInGuild(n.guild_id), [n]), m = (0, c.e7)([w.Z], () => null != n.guild_id && w.Z.isLurking(n.guild_id), [n]), T = (0, c.e7)([eo.ZP], () => eo.ZP.isCurrentUserGuest(n.guild_id), [n]), h = (0, c.e7)([
eo.ZP,
ed.default
  ], () => {
var e, t;
let i = ed.default.getCurrentUser();
return null !== (t = null != n.guild_id && null != i ? null === (e = eo.ZP.getMember(n.guild_id, i.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t;
  }), {
canAddNewReactions: N,
canManageMessages: f
  } = (0, c.cj)([eu.Z], () => ({
canAddNewReactions: I && eu.Z.can(ew.Plq.ADD_REACTIONS, n),
canManageMessages: eu.Z.can(ew.Plq.MANAGE_MESSAGES, n)
  }), [
I,
n
  ]), C = (0, j.ux)(n.guild_id), [, p] = (0, U.AB)(n.guild_id), g = (0, es.$R)(n), S = (l === i.author.id || f) && i.author.id !== ew.LAt && !1 !== a && !(0, eN.yE)(i.flags, ew.iLy.EPHEMERAL) && g && 1 === (0, eA.Z)(i), A = l === i.author.id && g && !r, M = i.author.id === l, x = i.isFirstMessageInForumPost(n), v = (0, eR.Z)({
channel: n,
canChat: I,
renderReactions: _,
canAddNewReactions: N,
isLurking: m,
isGuest: T,
communicationDisabled: p,
isActiveChannelOrUnarchivableThread: g,
isAutomodQuarantined: C
  }), P = (0, V.A)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), D = (0, K.Z)(null == n ? void 0 : n.id), b = (0, q.Z)(i), y = (0, R.V)(n.id, i.author.id), B = (0, O.r)(i.id), {
hasInlineForwardButton: k
  } = Z.w.useExperiment({
location: 'MessageAccessories'
  }), G = (0, L.a)(i) && k;
  return (0, s.jsx)(e0, {
canSuppressEmbeds: S,
canDeleteAttachments: A,
...v,
disableReactionReads: !!x || v.disableReactionReads,
...e,
isLurking: m && I,
isGuest: T && I,
isPendingMember: h && I,
isCurrentUser: M,
inlineAttachmentMedia: o,
inlineEmbedMedia: u,
renderEmbeds: d,
gifAutoPlay: E,
canRenderReferralEmbed: n.isDM(),
poll: b,
showListsAndHeaders: P,
showMaskedLinks: P,
shouldHideMediaOptions: D,
shouldRedactExplicitContent: y,
shouldRenderCtaButton: B,
hasInlineForwardButton: G
  });
}
ez(e0, 'defaultProps', {
  renderEmbeds: !0,
  compact: !1
});
let e7 = e => {
  var t;
  let {
message: n,
channel: i,
disableReactionReads: a = !1,
renderComponentAccessory: r = !1,
renderThreadAccessory: l = !1,
disableReactionCreates: o = !0,
disableReactionUpdates: c = !0,
...u
  } = e, d = er.x4.useSetting(), _ = er.RS.useSetting(), E = er.NA.useSetting(), I = er.QK.useSetting(), m = (0, V.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), T = (0, K.Z)(null == i ? void 0 : i.id), h = (0, R.V)(i.id, n.author.id), N = (0, O.r)(n.id), f = (0, q.Z)(n);
  return (0, s.jsx)(e0, {
...u,
message: n,
channel: i,
disableReactionReads: a,
disableReactionCreates: o,
disableReactionUpdates: c,
canSuppressEmbeds: !1,
canDeleteAttachments: !1,
renderComponentAccessory: r,
renderThreadAccessory: l,
inlineAttachmentMedia: d,
inlineEmbedMedia: _,
renderEmbeds: E,
gifAutoPlay: I,
poll: f,
showListsAndHeaders: m,
showMaskedLinks: m,
shouldHideMediaOptions: T,
shouldRedactExplicitContent: h,
shouldRenderCtaButton: N,
hasInlineForwardButton: !1
  });
};