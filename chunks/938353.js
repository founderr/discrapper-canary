"use strict";
n.r(t), n.d(t, {
  MessageAccessories: function() {
    return eK
  },
  SimpleMessageAccessories: function() {
    return ez
  },
  default: function() {
    return eW
  }
}), n("47120"), n("789020"), n("411104"), n("390547");
var s, a = n("735250"),
  l = n("470079"),
  i = n("120356"),
  r = n.n(i),
  o = n("275726"),
  u = n("442837"),
  d = n("377108"),
  c = n("902704"),
  E = n("481060"),
  f = n("904245"),
  _ = n("637374"),
  T = n("626799"),
  I = n("911969"),
  m = n("624367"),
  N = n("433074"),
  p = n("222709"),
  S = n("960904"),
  C = n("161314"),
  A = n("163268"),
  h = n("25610"),
  g = n("703751"),
  M = n("761538"),
  O = n("674611"),
  R = n("715903"),
  v = n("71619"),
  L = n("637618"),
  P = n("225890"),
  D = n("364097"),
  x = n("495129"),
  y = n("954654"),
  U = n("41776"),
  j = n("628238"),
  b = n("454585"),
  G = n("768494"),
  B = n("976853"),
  F = n("346013"),
  k = n("977683"),
  w = n("128435"),
  H = n("98278"),
  V = n("614825"),
  Y = n("265299"),
  K = n("699833"),
  W = n("344997"),
  z = n("378233"),
  Q = n("374425"),
  q = n("665906"),
  J = n("432147"),
  Z = n("695346"),
  X = n("314897"),
  $ = n("271383"),
  ee = n("607744"),
  et = n("496675"),
  en = n("594174"),
  es = n("529815"),
  ea = n("261922"),
  el = n("941797"),
  ei = n("52824"),
  er = n("727779"),
  eo = n("310043"),
  eu = n("69750"),
  ed = n("592256"),
  ec = n("626135"),
  eE = n("70956"),
  ef = n("408433"),
  e_ = n("630388"),
  eT = n("823379"),
  eI = n("709054"),
  em = n("591759"),
  eN = n("169525"),
  ep = n("161010"),
  eS = n("901461"),
  eC = n("432376"),
  eA = n("384203"),
  eh = n("633957"),
  eg = n("29909"),
  eM = n("782658"),
  eO = n("219797"),
  eR = n("453687"),
  ev = n("128854"),
  eL = n("101578"),
  eP = n("524444"),
  eD = n("319323"),
  ex = n("920888"),
  ey = n("981631"),
  eU = n("474936"),
  ej = n("689938"),
  eb = n("192174"),
  eG = n("680674");

function eB(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function eF() {
  return (0, a.jsxs)("div", {
    className: eb.nitroFileSizeUpsell,
    children: [(0, a.jsx)("img", {
      src: eG,
      className: eb.nitroBadgeSvg,
      alt: ""
    }), (0, a.jsx)(E.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: eb.__invalid_nitroFileSizeUpsellText,
      children: ej.default.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, H.navigateToPremiumMarketingPage)()
      })
    })]
  })
}
let ek = new Set([ey.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, ey.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, ey.MessageEmbedTypes.APPLICATION_NEWS, ey.MessageEmbedTypes.POST_PREVIEW, ey.MessageEmbedTypes.SAFETY_POLICY_NOTICE, ey.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, ey.MessageEmbedTypes.VOICE_CHANNEL]),
  ew = 15 * eE.default.Millis.MINUTE,
  eH = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  eV = (e, t, n) => () => {
    let s = null != t ? t : n;
    if (null == s) return null;
    let {
      url: l,
      proxyURL: i,
      width: r,
      height: o
    } = s;
    return (0, a.jsx)(eg.default, {
      width: r,
      height: o,
      src: null != i && "" !== i ? i : l,
      url: null != e && "" !== e ? e : null != i && "" !== i ? i : l,
      format: null != n ? d.GIFType.VIDEO : d.GIFType.IMAGE,
      className: eb.gifFavoriteButton
    })
  },
  eY = e => () => {
    let {
      url: t,
      proxyUrl: n,
      width: s,
      height: l
    } = e;
    return null != s && null != l && ea.IMAGE_GIF_RE.test(n) ? (0, a.jsx)(eg.default, {
      width: s,
      height: l,
      src: n,
      url: t,
      format: d.GIFType.IMAGE,
      className: eb.gifFavoriteButton
    }) : null
  };
class eK extends(s = l.Component) {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eH.has(e))
  }
  shouldComponentUpdate(e, t) {
    var n, s;
    let {
      channel: a,
      message: l,
      poll: i
    } = this.props, {
      channel: r,
      message: o,
      poll: u
    } = e;
    return !(0, c.default)(this.state, t) || !(0, c.default)(this.props, e, ["message", "channel"]) || a.type !== r.type || u !== i || o.codedLinks !== l.codedLinks || o.flags !== l.flags || o.giftCodes !== l.giftCodes || o.attachments !== l.attachments || o.embeds !== l.embeds || o.components !== l.components || o.activity !== l.activity || (n = o.reactions, n !== (s = l.reactions) && (n.length !== s.length || !!n.some((e, t) => {
      let {
        emoji: n,
        count: a,
        burst_count: l
      } = e, {
        emoji: i,
        count: r,
        burst_count: o
      } = s[t];
      return l !== o || a !== r || n.id !== i.id || n.name !== i.name
    })))
  }
  renderCtaButton() {
    let {
      message: e,
      channel: t,
      shouldRenderCtaButton: n
    } = this.props;
    return n ? (0, a.jsx)("div", {
      className: eb.ctaButtonContainer,
      children: (0, a.jsx)(O.default, {
        messageId: e.id,
        channelId: t.id
      })
    }) : null
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
    let t = e.attachments.some(e => e.size > eU.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE);
    return (0, ep.shouldShowNitroUpsell)("attachment") && t ? (0, a.jsx)(eF, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: s
      } = t;
      if (n === S.CodedLinkType.INVITE) return this.shouldRenderInvite(s) ? (0, a.jsx)(eM.default, {
        code: s,
        author: e.author,
        getAcceptInviteContext: this.getAcceptInviteContext
      }, s) : null;
      if (n === S.CodedLinkType.TEMPLATE) return (0, a.jsx)(D.default, {
        code: s
      }, s);
      if (n === S.CodedLinkType.EVENT) return (0, a.jsx)(P.default, {
        code: s
      }, s);
      else if (n === S.CodedLinkType.CHANNEL_LINK) return (0, a.jsx)(eA.default, {
        code: s,
        messageData: e
      }, s);
      else if (n === S.CodedLinkType.APP_DIRECTORY_PROFILE) return (0, a.jsx)(N.default, {
        code: s,
        message: e
      }, s);
      else if (n === S.CodedLinkType.CLYDE_PROFILE) return;
      else if (n === S.CodedLinkType.ACTIVITY_BOOKMARK) return (0, a.jsx)(m.default, {
        applicationId: s,
        message: e
      }, s);
      else if (n === S.CodedLinkType.GUILD_PRODUCT) return (0, a.jsx)(L.default, {
        code: s
      }, s);
      else if (n === S.CodedLinkType.SERVER_SHOP) return (0, a.jsx)(C.default, {
        guildId: s
      }, s);
      else if (n === S.CodedLinkType.QUESTS_EMBED) return (0, a.jsx)(Y.default, {
        questId: s
      }, s);
      else throw Error("Unknown coded link type: ".concat(n))
    })
  }
  renderGiftCodes(e) {
    let {
      giftCodes: t,
      author: n,
      channel_id: s,
      type: l,
      content: i,
      giftInfo: r
    } = e, o = en.default.getCurrentUser();
    return null != o && t.length > 0 ? t.map(e => (0, a.jsx)("div", {
      className: eb.giftCodeContainer,
      children: (0, a.jsx)(_.default, {
        code: e,
        author: n,
        channelId: s,
        currentUser: o,
        type: l,
        content: i,
        giftInfo: r
      })
    }, e)) : null
  }
  renderReferralTrial(e) {
    let {
      referralTrialOfferId: t,
      type: n
    } = e, {
      canRenderReferralEmbed: s
    } = this.props;
    return n !== o.MessageTypes.PREMIUM_REFERRAL || null == t ? null : (0, a.jsx)("div", {
      className: eb.referralContainer,
      children: (0, a.jsx)(V.default, {
        userTrialOfferId: t,
        canRenderReferralEmbed: null != s && s
      })
    }, t)
  }
  renderReactions(e) {
    let {
      disableReactionCreates: t,
      disableReactionReads: n,
      disableReactionUpdates: s,
      isLurking: l,
      isGuest: i,
      isPendingMember: r,
      channel: o,
      forceAddReactions: u
    } = this.props;
    return n ? null : (0, a.jsx)(ex.default, {
      message: e,
      channel: o,
      disableReactionCreates: t,
      disableReactionUpdates: s,
      isLurking: l,
      isGuest: i,
      isPendingMember: r,
      forceAddReactions: u,
      useChatFontScaling: !0
    })
  }
  renderAttachments(e) {
    let {
      attachments: t,
      flags: n
    } = e, {
      channel: s,
      shouldRedactExplicitContent: l
    } = this.props;
    if (0 === t.length || e.isPoll() || e.isUIKitComponents()) return null;
    let i = t.filter(e => null == e.flags || !(0, e_.hasFlag)(e.flags, ey.MessageAttachmentFlags.IS_THUMBNAIL));
    if (0 === i.length) return null;
    let {
      gifAutoPlay: r,
      canDeleteAttachments: o,
      inlineAttachmentMedia: u,
      onMediaItemContextMenu: d,
      shouldHideMediaOptions: c
    } = this.props, E = i.map(e => (0, ed.carouselAssetFromAttachment)(e, c, l)).filter(eT.isNotNullish), f = {
      source: "Media Mosaic",
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }, _ = E.length > 1 ? (0, ed.createMediaOnClickOverrides)(E, f) : {}, T = (0, e_.hasFlag)(n, ey.MessageFlags.IS_VOICE_MESSAGE);

    function I(e, t) {
      return (0, eN.getObscureReasonForAttachment)(e.originalItem, t)
    }
    let m = i.map(t => {
      let n = (0, G.messageAttachmentToUnfurledMediaItem)(t),
        a = {
          message: e,
          item: (0, eu.messageAttachmentToMosaicMediaItem)(t, u),
          autoPlayGif: r,
          canRemoveItem: o && (i.length > 1 || "" !== e.content),
          onRemoveItem: this.handleRemoveAttachment,
          className: eb.embedWrapper,
          getObscureReason: I,
          onContextMenu: null != d ? e => {
            e.stopPropagation(), e.preventDefault(), d(e, n)
          } : void 0,
          renderAudioComponent: T ? eO.VoiceMessageAudioComponentForMessageAttachment : eO.AudioComponentForMessageAttachment,
          renderImageComponent: eO.ImageComponentForMessageAttachment,
          renderVideoComponent: eO.VideoComponentForMessageAttachment,
          renderPlaintextFilePreview: eO.PlaintextFilePreviewForMessageAttachment,
          renderGenericFileComponent: eO.GenericFileComponentForMessageAttachment,
          renderMosaicItemFooter: eO.MosaicItemFooterForMessageAttachment,
          onPlay: (e, n, a) => {
            ec.default.track(ey.AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
              guild_id: s.guild_id,
              channel_id: s.id,
              channel_type: s.type,
              type: t.content_type,
              flags: t.flags,
              size: t.size,
              duration: a
            })
          },
          gifFavoriteButton: eY(n)
        },
        l = (0, ei.getBestEffortSrcUrl)({
          proxyURL: t.proxy_url,
          url: t.url
        });
      return l in _ && (a.onClick = _[l]), a
    });
    return (0, a.jsx)(eo.default, {
      items: m
    })
  }
  renderEmbeds(e) {
    let {
      renderEmbeds: t
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map(t => {
      if (ek.has(t.type) || (0, ef.isServerShopArticleEmbed)(t)) return null;
      let n = {
        renderImageComponent: eP.renderImageComponent,
        renderVideoComponent: eP.renderVideoComponent,
        renderLinkComponent: eP.renderMaskedLinkComponent
      };
      if (t.type === ey.MessageEmbedTypes.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let s = em.default.safeParseWithQuery(t.url);
        if (null != s && null != s.pathname) {
          let l = s.pathname.split("/")[3];
          if (null != l) return (0, a.jsx)(T.default, {
            skuId: l,
            renderFallback: () => this.renderEmbed(t, n, e.id, e.channel_id)
          }, t.id)
        }
      }
      return this.renderEmbed(t, n, e.id, e.channel_id)
    }) : null
  }
  renderComponentAccessories(e) {
    if (0 === e.components.length || !1 === this.props.renderComponentAccessory) return null;
    let {
      gifAutoPlay: t,
      shouldRedactExplicitContent: n,
      shouldHideMediaOptions: s,
      onMediaItemContextMenu: l
    } = this.props;
    return (0, a.jsx)(ev.MessageAccessoriesComponentContextProvider, {
      gifAutoPlay: t,
      getGifFavButton: eY,
      getOnMediaItemContextMenu: null == l ? void 0 : e => t => {
        t.stopPropagation(), t.preventDefault(), null == l || l(t, e)
      },
      shouldHideMediaOptions: s,
      shouldRedactExplicitContent: n,
      children: (0, a.jsx)(y.default, {
        message: e
      })
    })
  }
  renderActivityInvite(e) {
    if (null == e.activity) return null;
    let {
      channel: t
    } = this.props;
    return (0, a.jsx)(eL.default, {
      channel: t,
      message: e,
      hideParty: !1
    })
  }
  renderPublishBump(e) {
    let {
      channel: t
    } = this.props;
    return t.type !== ey.ChannelTypes.GUILD_ANNOUNCEMENT || (0, e_.hasFlag)(e.flags, ey.MessageFlags.EPHEMERAL) || e.isPoll() ? null : (0, a.jsx)(p.default, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e, t) {
    return (0, e_.hasFlag)(e.flags, ey.MessageFlags.EPHEMERAL) ? (0, a.jsx)(er.default, {
      message: e,
      channel: t,
      onDeleteMessage: () => {
        f.default.dismissAutomatedMessage(e)
      }
    }) : null
  }
  renderStickersAccessories(e) {
    let t = (0, z.getMessageStickers)(e),
      {
        channel: n,
        isInteracting: s
      } = this.props;
    return 0 === t.length ? null : t.map(e => (0, a.jsx)(Q.default, {
      channel: n,
      isInteracting: s,
      renderableSticker: e
    }, e.id))
  }
  renderThreadAccessories(e) {
    if (e.hasFlag(ey.MessageFlags.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, a.jsx)(J.default, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!!e.hasFlag(ey.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
      if (!(Date.now() - eI.default.extractTimestamp(e.id) >= ew)) return (0, a.jsx)("div", {
        className: eb.threadRoleMentionFailure,
        children: ej.default.Messages.THREAD_ROLE_MENTION_FAILURE
      })
    }
  }
  renderSuppressConfirmModal() {
    let {
      channel: e,
      message: t
    } = this.props;
    return (0, a.jsxs)(E.DeclarativeConfirmModal, {
      dismissable: !0,
      header: ej.default.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: ej.default.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: ej.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showSuppressModal: !1
      }),
      onConfirm: () => {
        f.default.suppressEmbeds(e.id, t.id), this.setState({
          showSuppressModal: !1
        })
      },
      children: [(0, a.jsx)(E.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: eb.confirmText,
        children: ej.default.Messages.SUPPRESS_EMBED_BODY
      }), (0, a.jsx)(E.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: ej.default.Messages.SUPPRESS_EMBED_TIP
      })]
    })
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
      return
    }
    return (0, a.jsx)(E.DeclarativeConfirmModal, {
      dismissable: !0,
      header: ej.default.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: ej.default.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: ej.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showRemoveAttachmentModal: !1,
        attachmentToDelete: null
      }),
      onConfirm: () => {
        let s = t.attachments.filter(e => e.id !== n.id);
        f.default.patchMessageAttachments(e.id, t.id, s), this.setState({
          showRemoveAttachmentModal: !1,
          attachmentToDelete: null
        })
      },
      children: (0, a.jsx)(E.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: eb.confirmText,
        children: ej.default.Messages.REMOVE_ATTACHMENT_BODY
      })
    })
  }
  renderInteractionPremiumUpsell(e) {
    let t = e.applicationId;
    return e.type !== o.MessageTypes.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, a.jsx)(eD.default, {
      applicationId: t,
      guildId: this.props.channel.guild_id
    })
  }
  renderEmbeddedApplicationInstanceEmbed(e) {
    let {
      application: t,
      activityInstance: n,
      interaction: s
    } = e;
    return null == t || null == n || (null == s ? void 0 : s.type) !== I.InteractionTypes.APPLICATION_COMMAND ? null : (0, a.jsx)(eh.default, {
      application: t,
      activityInstance: n,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== ey.MessageEmbedTypes.POST_PREVIEW || null == t.url ? [] : (0, a.jsx)(F.default, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === ey.MessageEmbedTypes.SAFETY_POLICY_NOTICE ? (0, a.jsx)(K.SafetyPolicyNotice, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === ey.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION ? (0, a.jsx)(W.SafetySystemNotification, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === ey.MessageEmbedTypes.VOICE_CHANNEL) return (0, a.jsx)(x.VoiceChannelInviteEmbed, {
      message: e,
      channel: t
    })
  }
  renderMediaObscureNotice(e) {
    if (0 === e.attachments.length && 0 === e.embeds.length) return null;
    let {
      obscuredAttachments: t,
      obscuredEmbeds: n
    } = (0, A.getObscuredMediaForMessage)(e);
    return 0 === t.length && 0 === n.length ? null : (0, a.jsx)(M.default, {
      message: e
    })
  }
  renderPoll(e, t) {
    if (null != t) return (0, a.jsx)(w.default, {
      message: e,
      poll: t,
      className: eb.pollContainer
    })
  }
  render() {
    let {
      className: e,
      message: t,
      channel: n,
      poll: s
    } = this.props, {
      showSuppressModal: l,
      showRemoveAttachmentModal: i
    } = this.state, o = this.renderCodedLinks(t), u = this.renderGiftCodes(t), d = this.renderReferralTrial(t), c = this.renderAttachments(t), E = this.renderCtaButton(), f = this.renderSocialProofingFileSizeNitroUpsell(t), _ = this.renderEmbeds(t), T = this.renderActivityInvite(t), I = this.renderReactions(t), m = this.renderPublishBump(t), N = this.renderEphemeralAccessories(t, n), p = this.renderStickersAccessories(t), S = this.renderThreadAccessories(t), C = this.renderComponentAccessories(t), A = this.renderThreadRoleMentionWarning(t), h = this.renderEmbeddedApplicationInstanceEmbed(t), g = this.renderInteractionPremiumUpsell(t), M = this.renderMediaPostEmbeds(t), O = this.renderSafetyPolicyNotice(t), R = this.renderSafetySystemNotification(t), v = this.renderVoiceChannelInvite(t, n), L = this.renderMediaObscureNotice(t), P = this.renderPoll(t, s);
    return null == o && null == c && null == _ && null == T && null == I && null == u && null == d && null == m && null == N && null == p && null == S && null == C && null == h && null == A && null == M && null == O && null != g && null == P && null == v ? null : (0, a.jsxs)("div", {
      id: (0, eR.getMessageAccessoriesId)(t),
      className: r()(e, eb.container),
      children: [A, P, o, u, d, M, c, E, _, L, T, p, C, h, g, f, I, m, N, l && this.renderSuppressConfirmModal(), i && this.renderRemoveAttachmentConfirmModal(), S, O, R, v]
    })
  }
  constructor(...e) {
    super(...e), eB(this, "state", {
      showSuppressModal: !1,
      showRemoveAttachmentModal: !1,
      attachmentToDelete: null
    }), eB(this, "getAcceptInviteContext", e => {
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
      }
    }), eB(this, "renderEmbed", (e, t, n, s) => {
      let {
        gifAutoPlay: l,
        inlineEmbedMedia: i,
        canSuppressEmbeds: r,
        hasSpoilerEmbeds: o,
        shouldRedactExplicitContent: u
      } = this.props, d = (0, eN.getObscureReasonForEmbed)(e, s, n, o, u);
      return e.type === ey.MessageEmbedTypes.GIFT ? null : (0, a.jsx)(el.GIFAccessoryContext.Provider, {
        value: eV(e.url, e.image, e.video),
        children: (0, a.jsx)(es.default, {
          className: eb.embedWrapper,
          embed: e,
          obscureReason: null != d ? d : void 0,
          autoPlayGif: l,
          hideMedia: !i,
          onSuppressEmbed: r ? this.handleEmbedSuppressed : void 0,
          renderTitle: this.renderEmbedTitle,
          renderDescription: this.renderEmbedDescription,
          messageId: n,
          channelId: s,
          ...t
        })
      }, e.id)
    }), eB(this, "renderEmbedTitle", (e, t) => e.type === ey.MessageEmbedTypes.RICH ? b.default.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t), eB(this, "renderEmbedDescription", (e, t, n) => e.type === ey.MessageEmbedTypes.RICH ? b.default.parse(t, !0, {
      channelId: this.props.channel.id,
      allowLinks: !0,
      allowEmojiLinks: !0,
      allowList: this.props.showListsAndHeaders,
      allowHeading: !n && this.props.showListsAndHeaders,
      previewLinkTarget: this.props.showMaskedLinks
    }) : t), eB(this, "handleEmbedSuppressed", e => {
      let {
        channel: t,
        message: n
      } = this.props;
      e.shiftKey ? f.default.suppressEmbeds(t.id, n.id) : this.setState({
        showSuppressModal: !0
      })
    }), eB(this, "handleRemoveAttachment", e => {
      let t = e.originalItem;
      this.setState({
        showRemoveAttachmentModal: !0,
        attachmentToDelete: t
      })
    })
  }
}

function eW(e) {
  var t;
  let {
    channel: n,
    message: s,
    renderSuppressEmbeds: l
  } = e, i = (0, u.useStateFromStores)([X.default], () => X.default.getId()), r = Z.InlineAttachmentMedia.useSetting(), o = Z.InlineEmbedMedia.useSetting(), d = Z.RenderEmbeds.useSetting() && !(0, eS.default)(e.message), c = Z.RenderReactions.useSetting(), E = Z.GifAutoPlay.useSetting(), f = (0, u.useStateFromStores)([ee.default], () => null == n.guild_id || ee.default.canChatInGuild(n.guild_id), [n]), _ = (0, u.useStateFromStores)([U.default], () => null != n.guild_id && U.default.isLurking(n.guild_id), [n]), T = (0, u.useStateFromStores)([$.default], () => $.default.isCurrentUserGuest(n.guild_id), [n]), I = (0, u.useStateFromStores)([$.default, en.default], () => {
    var e, t;
    let s = en.default.getCurrentUser();
    return null !== (t = null != n.guild_id && null != s ? null === (e = $.default.getMember(n.guild_id, s.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: m,
    canManageMessages: N
  } = (0, u.useStateFromStoresObject)([et.default], () => ({
    canAddNewReactions: f && et.default.can(ey.Permissions.ADD_REACTIONS, n),
    canManageMessages: et.default.can(ey.Permissions.MANAGE_MESSAGES, n)
  }), [f, n]), p = (0, R.useCurrentUserAutomodQuaratinedProfile)(n.guild_id), [, S] = (0, v.useCurrentUserCommunicationDisabled)(n.guild_id), C = (0, q.useIsActiveChannelOrUnarchivableThread)(n), A = (i === s.author.id || N) && s.author.id !== ey.LOCAL_BOT_ID && !1 !== l && !(0, e_.hasFlag)(s.flags, ey.MessageFlags.EPHEMERAL) && C, M = i === s.author.id && C, O = s.author.id === i, L = s.isFirstMessageInForumPost(n), P = (0, eC.default)({
    channel: n,
    canChat: f,
    renderReactions: c,
    canAddNewReactions: m,
    isLurking: _,
    isGuest: T,
    communicationDisabled: S,
    isActiveChannelOrUnarchivableThread: C,
    isAutomodQuarantined: p
  }), D = (0, j.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()), x = (0, B.default)(null == n ? void 0 : n.id), y = (0, k.default)(s), b = (0, h.useShouldRedactExplicitContent)(n.id, s.author.id), G = (0, g.useShouldRenderReportFalsePositiveButton)(s.id);
  return (0, a.jsx)(eK, {
    canSuppressEmbeds: A,
    canDeleteAttachments: M,
    ...P,
    disableReactionReads: !!L || P.disableReactionReads,
    ...e,
    isLurking: _ && f,
    isGuest: T && f,
    isPendingMember: I && f,
    isCurrentUser: O,
    inlineAttachmentMedia: r,
    inlineEmbedMedia: o,
    renderEmbeds: d,
    gifAutoPlay: E,
    canRenderReferralEmbed: n.isDM(),
    poll: y,
    showListsAndHeaders: D,
    showMaskedLinks: D,
    shouldHideMediaOptions: x,
    shouldRedactExplicitContent: b,
    shouldRenderCtaButton: G
  })
}
eB(eK, "defaultProps", {
  renderEmbeds: !0,
  compact: !1
});
let ez = e => {
  var t;
  let {
    message: n,
    channel: s,
    disableReactionReads: l = !1,
    renderComponentAccessory: i = !1,
    renderThreadAccessory: r = !1,
    disableReactionCreates: o = !0,
    disableReactionUpdates: u = !0,
    ...d
  } = e, c = Z.InlineAttachmentMedia.useSetting(), E = Z.InlineEmbedMedia.useSetting(), f = Z.RenderEmbeds.useSetting(), _ = Z.GifAutoPlay.useSetting(), T = (0, j.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), I = (0, B.default)(null == s ? void 0 : s.id), m = (0, h.useShouldRedactExplicitContent)(s.id, n.author.id), N = (0, g.useShouldRenderReportFalsePositiveButton)(n.id), p = (0, k.default)(n);
  return (0, a.jsx)(eK, {
    ...d,
    message: n,
    channel: s,
    disableReactionReads: l,
    disableReactionCreates: o,
    disableReactionUpdates: u,
    canSuppressEmbeds: !1,
    canDeleteAttachments: !1,
    renderComponentAccessory: i,
    renderThreadAccessory: r,
    inlineAttachmentMedia: c,
    inlineEmbedMedia: E,
    renderEmbeds: f,
    gifAutoPlay: _,
    poll: p,
    showListsAndHeaders: T,
    showMaskedLinks: T,
    shouldHideMediaOptions: I,
    shouldRedactExplicitContent: m,
    shouldRenderCtaButton: N
  })
}