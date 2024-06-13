"use strict";
n.r(t), n.d(t, {
  MessageAccessories: function() {
    return eZ
  },
  SimpleMessageAccessories: function() {
    return e$
  },
  default: function() {
    return eJ
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
  f = n("481060"),
  E = n("904245"),
  _ = n("637374"),
  m = n("626799"),
  T = n("911969"),
  I = n("624367"),
  h = n("433074"),
  p = n("222709"),
  N = n("960904"),
  S = n("161314"),
  C = n("163268"),
  g = n("25610"),
  A = n("703751"),
  M = n("761538"),
  R = n("674611"),
  v = n("346610"),
  O = n("868643"),
  x = n("294734"),
  L = n("426275"),
  D = n("715903"),
  P = n("71619"),
  y = n("637618"),
  U = n("225890"),
  j = n("364097"),
  b = n("495129"),
  F = n("954654"),
  B = n("41776"),
  G = n("628238"),
  k = n("454585"),
  w = n("768494"),
  H = n("976853"),
  V = n("346013"),
  Y = n("977683"),
  K = n("128435"),
  W = n("98278"),
  z = n("614825"),
  Q = n("265299"),
  q = n("699833"),
  X = n("344997"),
  Z = n("378233"),
  J = n("374425"),
  $ = n("665906"),
  ee = n("432147"),
  et = n("695346"),
  en = n("314897"),
  es = n("271383"),
  ea = n("607744"),
  el = n("496675"),
  ei = n("594174"),
  er = n("529815"),
  eo = n("261922"),
  eu = n("941797"),
  ed = n("52824"),
  ec = n("727779"),
  ef = n("310043"),
  eE = n("69750"),
  e_ = n("592256"),
  em = n("626135"),
  eT = n("70956"),
  eI = n("408433"),
  eh = n("630388"),
  ep = n("823379"),
  eN = n("709054"),
  eS = n("591759"),
  eC = n("169525"),
  eg = n("161010"),
  eA = n("461157"),
  eM = n("901461"),
  eR = n("432376"),
  ev = n("384203"),
  eO = n("633957"),
  ex = n("29909"),
  eL = n("782658"),
  eD = n("219797"),
  eP = n("453687"),
  ey = n("128854"),
  eU = n("101578"),
  ej = n("524444"),
  eb = n("319323"),
  eF = n("920888"),
  eB = n("817384"),
  eG = n("981631"),
  ek = n("474936"),
  ew = n("689938"),
  eH = n("373947"),
  eV = n("346661"),
  eY = n("680674");

function eK(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function eW() {
  return (0, a.jsxs)("div", {
    className: eV.nitroFileSizeUpsell,
    children: [(0, a.jsx)("img", {
      src: eY,
      className: eV.nitroBadgeSvg,
      alt: ""
    }), (0, a.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: eV.__invalid_nitroFileSizeUpsellText,
      children: ew.default.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, W.navigateToPremiumMarketingPage)()
      })
    })]
  })
}
let ez = 15 * eT.default.Millis.MINUTE,
  eQ = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  eq = (e, t, n) => () => {
    let s = null != t ? t : n;
    if (null == s) return null;
    let {
      url: l,
      proxyURL: i,
      width: r,
      height: o
    } = s;
    return (0, a.jsx)(ex.default, {
      width: r,
      height: o,
      src: null != i && "" !== i ? i : l,
      url: null != e && "" !== e ? e : null != i && "" !== i ? i : l,
      format: null != n ? d.GIFType.VIDEO : d.GIFType.IMAGE,
      className: eV.gifFavoriteButton
    })
  },
  eX = e => () => {
    let {
      url: t,
      proxyUrl: n,
      width: s,
      height: l
    } = e;
    return null != s && null != l && eo.IMAGE_GIF_RE.test(n) ? (0, a.jsx)(ex.default, {
      width: s,
      height: l,
      src: n,
      url: t,
      format: d.GIFType.IMAGE,
      className: eV.gifFavoriteButton
    }) : null
  };
class eZ extends(s = l.Component) {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eQ.has(e))
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
      className: eV.ctaButtonContainer,
      children: (0, a.jsx)(R.default, {
        messageId: e.id,
        channelId: t.id
      })
    }) : null
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
    let t = e.attachments.some(e => e.size > ek.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE);
    return (0, eg.shouldShowNitroUpsell)("attachment") && t ? (0, a.jsx)(eW, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: s
      } = t;
      if (n === N.CodedLinkType.INVITE) return this.shouldRenderInvite(s) ? (0, a.jsx)(eL.default, {
        code: s,
        author: e.author,
        getAcceptInviteContext: this.getAcceptInviteContext
      }, s) : null;
      if (n === N.CodedLinkType.TEMPLATE) return (0, a.jsx)(j.default, {
        code: s
      }, s);
      if (n === N.CodedLinkType.EVENT) return (0, a.jsx)(U.default, {
        code: s
      }, s);
      else if (n === N.CodedLinkType.CHANNEL_LINK) return (0, a.jsx)(ev.default, {
        code: s,
        messageData: e
      }, s);
      else if (n === N.CodedLinkType.APP_DIRECTORY_PROFILE) return (0, a.jsx)(h.default, {
        code: s,
        message: e
      }, s);
      else if (n === N.CodedLinkType.ACTIVITY_BOOKMARK) return (0, a.jsx)(I.default, {
        applicationId: s,
        message: e
      }, s);
      else if (n === N.CodedLinkType.GUILD_PRODUCT) return (0, a.jsx)(y.default, {
        code: s
      }, s);
      else if (n === N.CodedLinkType.SERVER_SHOP) return (0, a.jsx)(S.default, {
        guildId: s
      }, s);
      else if (n === N.CodedLinkType.QUESTS_EMBED) return (0, a.jsx)(Q.default, {
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
    } = e, o = ei.default.getCurrentUser();
    return null != o && t.length > 0 ? t.map(e => (0, a.jsx)("div", {
      className: eV.giftCodeContainer,
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
      className: eV.referralContainer,
      children: (0, a.jsx)(z.default, {
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
    return n ? null : (0, a.jsx)(eF.default, {
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
      shouldRedactExplicitContent: l,
      hasInlineForwardButton: i
    } = this.props;
    if (0 === t.length || e.isPoll() || e.isUIKitComponents()) return null;
    let r = t.filter(e => null == e.flags || !(0, eh.hasFlag)(e.flags, eG.MessageAttachmentFlags.IS_THUMBNAIL));
    if (0 === r.length) return null;
    let {
      gifAutoPlay: o,
      canDeleteAttachments: u,
      inlineAttachmentMedia: d,
      onMediaItemContextMenu: c,
      shouldHideMediaOptions: f
    } = this.props, E = r.map(e => (0, e_.carouselAssetFromAttachment)(e, f, l)).filter(ep.isNotNullish), _ = {
      source: "Media Mosaic",
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }, m = E.length > 1 ? (0, e_.createMediaOnClickOverrides)(E, _) : {}, T = (0, eh.hasFlag)(n, eG.MessageFlags.IS_VOICE_MESSAGE);

    function I(e, t) {
      return (0, eC.getObscureReasonForAttachment)(e.originalItem, t)
    }
    let h = r.map(t => {
        let n = (0, w.messageAttachmentToUnfurledMediaItem)(t),
          a = {
            message: e,
            item: (0, eE.messageAttachmentToMosaicMediaItem)(t, d),
            autoPlayGif: o,
            canRemoveItem: u && (r.length > 1 || "" !== e.content),
            onRemoveItem: this.handleRemoveAttachment,
            className: eV.embedWrapper,
            getObscureReason: I,
            onContextMenu: null != c ? e => {
              e.stopPropagation(), e.preventDefault(), c(e, n)
            } : void 0,
            renderAudioComponent: T ? eD.VoiceMessageAudioComponentForMessageAttachment : eD.AudioComponentForMessageAttachment,
            renderImageComponent: eD.ImageComponentForMessageAttachment,
            renderVideoComponent: eD.VideoComponentForMessageAttachment,
            renderPlaintextFilePreview: eD.PlaintextFilePreviewForMessageAttachment,
            renderGenericFileComponent: eD.GenericFileComponentForMessageAttachment,
            renderMosaicItemFooter: eD.MosaicItemFooterForMessageAttachment,
            onPlay: (e, n, a) => {
              em.default.track(eG.AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type,
                type: t.content_type,
                flags: t.flags,
                size: t.size,
                duration: a
              })
            },
            gifFavoriteButton: eX(n)
          },
          l = (0, ed.getBestEffortSrcUrl)({
            proxyURL: t.proxy_url,
            url: t.url
          });
        return l in m && (a.onClick = m[l]), a
      }),
      p = i ? (0, a.jsx)(L.default, {
        className: eH.hideIfMessageNotFocused,
        messageId: e.id,
        channelId: s.id,
        targetKind: "media"
      }) : void 0;
    return (0, a.jsx)(ef.default, {
      items: h,
      inlineForwardButton: p
    })
  }
  renderEmbeds(e) {
    let {
      renderEmbeds: t
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map((t, n) => {
      if (eB.EMBED_TYPES_WITH_SPECIAL_RENDERER.has(t.type) || (0, eI.isServerShopArticleEmbed)(t)) return null;
      let s = {
        renderImageComponent: ej.renderImageComponent,
        renderVideoComponent: ej.renderVideoComponent,
        renderLinkComponent: ej.renderMaskedLinkComponent
      };
      if (t.type === eG.MessageEmbedTypes.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let l = eS.default.safeParseWithQuery(t.url);
        if (null != l && null != l.pathname) {
          let i = l.pathname.split("/")[3];
          if (null != i) return (0, a.jsx)(m.default, {
            skuId: i,
            renderFallback: () => this.renderEmbed(t, n, s, e.id, e.channel_id)
          }, t.id)
        }
      }
      return this.renderEmbed(t, n, s, e.id, e.channel_id)
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
    return (0, a.jsx)(ey.MessageAccessoriesComponentContextProvider, {
      gifAutoPlay: t,
      getGifFavButton: eX,
      getOnMediaItemContextMenu: null == l ? void 0 : e => t => {
        t.stopPropagation(), t.preventDefault(), null == l || l(t, e)
      },
      shouldHideMediaOptions: s,
      shouldRedactExplicitContent: n,
      children: (0, a.jsx)(F.default, {
        message: e
      })
    })
  }
  renderActivityInvite(e) {
    if (null == e.activity) return null;
    let {
      channel: t
    } = this.props;
    return (0, a.jsx)(eU.default, {
      channel: t,
      message: e,
      hideParty: !1
    })
  }
  renderPublishBump(e) {
    let {
      channel: t
    } = this.props;
    return t.type !== eG.ChannelTypes.GUILD_ANNOUNCEMENT || (0, eh.hasFlag)(e.flags, eG.MessageFlags.EPHEMERAL) || e.isPoll() ? null : (0, a.jsx)(p.default, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e) {
    return (0, eh.hasFlag)(e.flags, eG.MessageFlags.EPHEMERAL) ? (0, a.jsx)(ec.default, {
      message: e,
      onDeleteMessage: () => {
        E.default.dismissAutomatedMessage(e)
      }
    }) : null
  }
  renderStickersAccessories(e) {
    let t = (0, Z.getMessageStickers)(e),
      {
        channel: n,
        isInteracting: s
      } = this.props;
    return 0 === t.length ? null : t.map(e => (0, a.jsx)(J.default, {
      channel: n,
      isInteracting: s,
      renderableSticker: e
    }, e.id))
  }
  renderThreadAccessories(e) {
    if (e.hasFlag(eG.MessageFlags.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, a.jsx)(ee.default, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!!e.hasFlag(eG.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
      if (!(Date.now() - eN.default.extractTimestamp(e.id) >= ez)) return (0, a.jsx)("div", {
        className: eV.threadRoleMentionFailure,
        children: ew.default.Messages.THREAD_ROLE_MENTION_FAILURE
      })
    }
  }
  renderSuppressConfirmModal() {
    let {
      channel: e,
      message: t
    } = this.props;
    return (0, a.jsxs)(f.DeclarativeConfirmModal, {
      dismissable: !0,
      header: ew.default.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: ew.default.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: ew.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showSuppressModal: !1
      }),
      onConfirm: () => {
        E.default.suppressEmbeds(e.id, t.id), this.setState({
          showSuppressModal: !1
        })
      },
      children: [(0, a.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: eV.confirmText,
        children: ew.default.Messages.SUPPRESS_EMBED_BODY
      }), (0, a.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: ew.default.Messages.SUPPRESS_EMBED_TIP
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
    return (0, a.jsx)(f.DeclarativeConfirmModal, {
      dismissable: !0,
      header: ew.default.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: ew.default.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: ew.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showRemoveAttachmentModal: !1,
        attachmentToDelete: null
      }),
      onConfirm: () => {
        let s = t.attachments.filter(e => e.id !== n.id);
        E.default.patchMessageAttachments(e.id, t.id, s), this.setState({
          showRemoveAttachmentModal: !1,
          attachmentToDelete: null
        })
      },
      children: (0, a.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: eV.confirmText,
        children: ew.default.Messages.REMOVE_ATTACHMENT_BODY
      })
    })
  }
  renderInteractionPremiumUpsell(e) {
    let t = e.applicationId;
    return e.type !== o.MessageTypes.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, a.jsx)(eb.default, {
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
    return null == t || null == n || (null == s ? void 0 : s.type) !== T.InteractionTypes.APPLICATION_COMMAND ? null : (0, a.jsx)(eO.default, {
      application: t,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== eG.MessageEmbedTypes.POST_PREVIEW || null == t.url ? [] : (0, a.jsx)(V.default, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eG.MessageEmbedTypes.SAFETY_POLICY_NOTICE ? (0, a.jsx)(q.SafetyPolicyNotice, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eG.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION ? (0, a.jsx)(X.SafetySystemNotification, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === eG.MessageEmbedTypes.VOICE_CHANNEL) return (0, a.jsx)(b.VoiceChannelInviteEmbed, {
      message: e,
      channel: t
    })
  }
  renderMediaObscureNotice(e) {
    if (0 === e.attachments.length && 0 === e.embeds.length) return null;
    let {
      obscuredAttachments: t,
      obscuredEmbeds: n
    } = (0, C.getObscuredMediaForMessage)(e);
    return 0 === t.length && 0 === n.length ? null : (0, a.jsx)(M.default, {
      message: e
    })
  }
  renderPoll(e, t) {
    if (null != t) return (0, a.jsx)(K.default, {
      message: e,
      poll: t,
      className: eV.pollContainer
    })
  }
  renderForwardedMessage(e) {
    return 0 === e.messageSnapshots.length ? null : (0, a.jsx)(x.default, {
      message: e
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
    } = this.state, o = this.renderCodedLinks(t), u = this.renderGiftCodes(t), d = this.renderReferralTrial(t), c = this.renderAttachments(t), f = this.renderCtaButton(), E = this.renderSocialProofingFileSizeNitroUpsell(t), _ = this.renderEmbeds(t), m = this.renderActivityInvite(t), T = this.renderReactions(t), I = this.renderPublishBump(t), h = this.renderEphemeralAccessories(t), p = this.renderStickersAccessories(t), N = this.renderThreadAccessories(t), S = this.renderComponentAccessories(t), C = this.renderThreadRoleMentionWarning(t), g = this.renderEmbeddedApplicationInstanceEmbed(t), A = this.renderInteractionPremiumUpsell(t), M = this.renderMediaPostEmbeds(t), R = this.renderSafetyPolicyNotice(t), v = this.renderSafetySystemNotification(t), O = this.renderVoiceChannelInvite(t, n), x = this.renderMediaObscureNotice(t), L = this.renderPoll(t, s), D = this.renderForwardedMessage(t);
    return null == o && null == c && null == _ && null == m && null == T && null == u && null == d && null == I && null == h && null == p && null == N && null == S && null == g && null == C && null == M && null == R && null != A && null == L && null == O && null == D ? null : (0, a.jsxs)("div", {
      id: (0, eP.getMessageAccessoriesId)(t),
      className: r()(e, eV.container),
      children: [D, C, L, o, u, d, M, c, f, _, x, m, p, S, g, A, E, T, I, h, l && this.renderSuppressConfirmModal(), i && this.renderRemoveAttachmentConfirmModal(), N, R, v, O]
    })
  }
  constructor(...e) {
    super(...e), eK(this, "state", {
      showSuppressModal: !1,
      showRemoveAttachmentModal: !1,
      attachmentToDelete: null
    }), eK(this, "getAcceptInviteContext", e => {
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
    }), eK(this, "renderEmbed", (e, t, n, s, l) => {
      let {
        gifAutoPlay: i,
        inlineEmbedMedia: r,
        canSuppressEmbeds: o,
        hasSpoilerEmbeds: u,
        shouldRedactExplicitContent: d,
        hasInlineForwardButton: c
      } = this.props, f = (0, eC.getObscureReasonForEmbed)(e, l, s, u, d);
      if (e.type === eG.MessageEmbedTypes.GIFT) return null;
      let E = (0, a.jsx)(eu.GIFAccessoryContext.Provider, {
        value: eq(e.url, e.image, e.video),
        children: (0, a.jsx)(er.default, {
          className: eV.embedWrapper,
          embed: e,
          obscureReason: null != f ? f : void 0,
          autoPlayGif: i,
          hideMedia: !r,
          onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
          renderTitle: this.renderEmbedTitle,
          renderDescription: this.renderEmbedDescription,
          messageId: s,
          channelId: l,
          ...n
        })
      }, e.id);
      return c ? (0, a.jsxs)("div", {
        className: eV.embedContainer,
        children: [E, (0, a.jsx)(L.default, {
          className: eH.hideIfMessageNotFocused,
          messageId: s,
          channelId: l,
          targetKind: "embed",
          embedIndex: t
        })]
      }) : E
    }), eK(this, "renderEmbedTitle", (e, t) => e.type === eG.MessageEmbedTypes.RICH ? k.default.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t), eK(this, "renderEmbedDescription", (e, t, n) => e.type === eG.MessageEmbedTypes.RICH ? k.default.parse(t, !0, {
      channelId: this.props.channel.id,
      allowLinks: !0,
      allowEmojiLinks: !0,
      allowList: this.props.showListsAndHeaders,
      allowHeading: !n && this.props.showListsAndHeaders,
      previewLinkTarget: this.props.showMaskedLinks
    }) : t), eK(this, "handleEmbedSuppressed", e => {
      let {
        channel: t,
        message: n
      } = this.props;
      e.shiftKey ? E.default.suppressEmbeds(t.id, n.id) : this.setState({
        showSuppressModal: !0
      })
    }), eK(this, "handleRemoveAttachment", e => {
      let t = e.originalItem;
      this.setState({
        showRemoveAttachmentModal: !0,
        attachmentToDelete: t
      })
    })
  }
}

function eJ(e) {
  var t;
  let {
    channel: n,
    message: s,
    renderSuppressEmbeds: l
  } = e, i = (0, u.useStateFromStores)([en.default], () => en.default.getId()), r = et.InlineAttachmentMedia.useSetting(), o = et.InlineEmbedMedia.useSetting(), d = et.RenderEmbeds.useSetting() && !(0, eM.default)(e.message), c = et.RenderReactions.useSetting(), f = et.GifAutoPlay.useSetting(), E = (0, u.useStateFromStores)([ea.default], () => null == n.guild_id || ea.default.canChatInGuild(n.guild_id), [n]), _ = (0, u.useStateFromStores)([B.default], () => null != n.guild_id && B.default.isLurking(n.guild_id), [n]), m = (0, u.useStateFromStores)([es.default], () => es.default.isCurrentUserGuest(n.guild_id), [n]), T = (0, u.useStateFromStores)([es.default, ei.default], () => {
    var e, t;
    let s = ei.default.getCurrentUser();
    return null !== (t = null != n.guild_id && null != s ? null === (e = es.default.getMember(n.guild_id, s.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: I,
    canManageMessages: h
  } = (0, u.useStateFromStoresObject)([el.default], () => ({
    canAddNewReactions: E && el.default.can(eG.Permissions.ADD_REACTIONS, n),
    canManageMessages: el.default.can(eG.Permissions.MANAGE_MESSAGES, n)
  }), [E, n]), p = (0, D.useCurrentUserAutomodQuaratinedProfile)(n.guild_id), [, N] = (0, P.useCurrentUserCommunicationDisabled)(n.guild_id), S = (0, $.useIsActiveChannelOrUnarchivableThread)(n), C = (i === s.author.id || h) && s.author.id !== eG.LOCAL_BOT_ID && !1 !== l && !(0, eh.hasFlag)(s.flags, eG.MessageFlags.EPHEMERAL) && S && 1 === (0, eA.default)(s), M = i === s.author.id && S, R = s.author.id === i, x = s.isFirstMessageInForumPost(n), L = (0, eR.default)({
    channel: n,
    canChat: E,
    renderReactions: c,
    canAddNewReactions: I,
    isLurking: _,
    isGuest: m,
    communicationDisabled: N,
    isActiveChannelOrUnarchivableThread: S,
    isAutomodQuarantined: p
  }), y = (0, G.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()), U = (0, H.default)(null == n ? void 0 : n.id), j = (0, Y.default)(s), b = (0, g.useShouldRedactExplicitContent)(n.id, s.author.id), F = (0, A.useShouldRenderReportFalsePositiveButton)(s.id), {
    hasInlineForwardButton: k
  } = v.MessageForwardingExperiment.useExperiment({
    location: "MessageAccessories"
  }), w = (0, O.useCanForwardMessage)(s) && k;
  return (0, a.jsx)(eZ, {
    canSuppressEmbeds: C,
    canDeleteAttachments: M,
    ...L,
    disableReactionReads: !!x || L.disableReactionReads,
    ...e,
    isLurking: _ && E,
    isGuest: m && E,
    isPendingMember: T && E,
    isCurrentUser: R,
    inlineAttachmentMedia: r,
    inlineEmbedMedia: o,
    renderEmbeds: d,
    gifAutoPlay: f,
    canRenderReferralEmbed: n.isDM(),
    poll: j,
    showListsAndHeaders: y,
    showMaskedLinks: y,
    shouldHideMediaOptions: U,
    shouldRedactExplicitContent: b,
    shouldRenderCtaButton: F,
    hasInlineForwardButton: w
  })
}
eK(eZ, "defaultProps", {
  renderEmbeds: !0,
  compact: !1
});
let e$ = e => {
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
  } = e, c = et.InlineAttachmentMedia.useSetting(), f = et.InlineEmbedMedia.useSetting(), E = et.RenderEmbeds.useSetting(), _ = et.GifAutoPlay.useSetting(), m = (0, G.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), T = (0, H.default)(null == s ? void 0 : s.id), I = (0, g.useShouldRedactExplicitContent)(s.id, n.author.id), h = (0, A.useShouldRenderReportFalsePositiveButton)(n.id), p = (0, Y.default)(n);
  return (0, a.jsx)(eZ, {
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
    inlineEmbedMedia: f,
    renderEmbeds: E,
    gifAutoPlay: _,
    poll: p,
    showListsAndHeaders: m,
    showMaskedLinks: m,
    shouldHideMediaOptions: T,
    shouldRedactExplicitContent: I,
    shouldRenderCtaButton: h,
    hasInlineForwardButton: !1
  })
}