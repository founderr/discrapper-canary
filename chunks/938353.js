"use strict";
n.r(t), n.d(t, {
  MessageAccessories: function() {
    return eQ
  },
  SimpleMessageAccessories: function() {
    return eX
  },
  default: function() {
    return eq
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
  p = n("433074"),
  h = n("222709"),
  N = n("960904"),
  S = n("161314"),
  C = n("163268"),
  g = n("25610"),
  A = n("703751"),
  M = n("761538"),
  R = n("674611"),
  v = n("346610"),
  O = n("294734"),
  x = n("426275"),
  L = n("715903"),
  D = n("71619"),
  P = n("637618"),
  y = n("225890"),
  U = n("364097"),
  j = n("495129"),
  b = n("954654"),
  B = n("41776"),
  F = n("628238"),
  G = n("454585"),
  k = n("768494"),
  w = n("976853"),
  H = n("346013"),
  V = n("977683"),
  Y = n("128435"),
  K = n("98278"),
  W = n("614825"),
  z = n("265299"),
  Q = n("699833"),
  q = n("344997"),
  X = n("378233"),
  Z = n("374425"),
  J = n("665906"),
  $ = n("432147"),
  ee = n("695346"),
  et = n("314897"),
  en = n("271383"),
  es = n("607744"),
  ea = n("496675"),
  el = n("594174"),
  ei = n("529815"),
  er = n("261922"),
  eo = n("941797"),
  eu = n("52824"),
  ed = n("727779"),
  ec = n("310043"),
  ef = n("69750"),
  eE = n("592256"),
  e_ = n("626135"),
  em = n("70956"),
  eT = n("408433"),
  eI = n("630388"),
  ep = n("823379"),
  eh = n("709054"),
  eN = n("591759"),
  eS = n("169525"),
  eC = n("161010"),
  eg = n("901461"),
  eA = n("432376"),
  eM = n("384203"),
  eR = n("633957"),
  ev = n("29909"),
  eO = n("782658"),
  ex = n("219797"),
  eL = n("453687"),
  eD = n("128854"),
  eP = n("101578"),
  ey = n("524444"),
  eU = n("319323"),
  ej = n("920888"),
  eb = n("817384"),
  eB = n("981631"),
  eF = n("474936"),
  eG = n("689938"),
  ek = n("346661"),
  ew = n("680674");

function eH(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function eV() {
  return (0, a.jsxs)("div", {
    className: ek.nitroFileSizeUpsell,
    children: [(0, a.jsx)("img", {
      src: ew,
      className: ek.nitroBadgeSvg,
      alt: ""
    }), (0, a.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: ek.__invalid_nitroFileSizeUpsellText,
      children: eG.default.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, K.navigateToPremiumMarketingPage)()
      })
    })]
  })
}
let eY = 15 * em.default.Millis.MINUTE,
  eK = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  eW = (e, t, n) => () => {
    let s = null != t ? t : n;
    if (null == s) return null;
    let {
      url: l,
      proxyURL: i,
      width: r,
      height: o
    } = s;
    return (0, a.jsx)(ev.default, {
      width: r,
      height: o,
      src: null != i && "" !== i ? i : l,
      url: null != e && "" !== e ? e : null != i && "" !== i ? i : l,
      format: null != n ? d.GIFType.VIDEO : d.GIFType.IMAGE,
      className: ek.gifFavoriteButton
    })
  },
  ez = e => () => {
    let {
      url: t,
      proxyUrl: n,
      width: s,
      height: l
    } = e;
    return null != s && null != l && er.IMAGE_GIF_RE.test(n) ? (0, a.jsx)(ev.default, {
      width: s,
      height: l,
      src: n,
      url: t,
      format: d.GIFType.IMAGE,
      className: ek.gifFavoriteButton
    }) : null
  };
class eQ extends(s = l.Component) {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eK.has(e))
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
      className: ek.ctaButtonContainer,
      children: (0, a.jsx)(R.default, {
        messageId: e.id,
        channelId: t.id
      })
    }) : null
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
    let t = e.attachments.some(e => e.size > eF.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE);
    return (0, eC.shouldShowNitroUpsell)("attachment") && t ? (0, a.jsx)(eV, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: s
      } = t;
      if (n === N.CodedLinkType.INVITE) return this.shouldRenderInvite(s) ? (0, a.jsx)(eO.default, {
        code: s,
        author: e.author,
        getAcceptInviteContext: this.getAcceptInviteContext
      }, s) : null;
      if (n === N.CodedLinkType.TEMPLATE) return (0, a.jsx)(U.default, {
        code: s
      }, s);
      if (n === N.CodedLinkType.EVENT) return (0, a.jsx)(y.default, {
        code: s
      }, s);
      else if (n === N.CodedLinkType.CHANNEL_LINK) return (0, a.jsx)(eM.default, {
        code: s,
        messageData: e
      }, s);
      else if (n === N.CodedLinkType.APP_DIRECTORY_PROFILE) return (0, a.jsx)(p.default, {
        code: s,
        message: e
      }, s);
      else if (n === N.CodedLinkType.ACTIVITY_BOOKMARK) return (0, a.jsx)(I.default, {
        applicationId: s,
        message: e
      }, s);
      else if (n === N.CodedLinkType.GUILD_PRODUCT) return (0, a.jsx)(P.default, {
        code: s
      }, s);
      else if (n === N.CodedLinkType.SERVER_SHOP) return (0, a.jsx)(S.default, {
        guildId: s
      }, s);
      else if (n === N.CodedLinkType.QUESTS_EMBED) return (0, a.jsx)(z.default, {
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
    } = e, o = el.default.getCurrentUser();
    return null != o && t.length > 0 ? t.map(e => (0, a.jsx)("div", {
      className: ek.giftCodeContainer,
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
      className: ek.referralContainer,
      children: (0, a.jsx)(W.default, {
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
    return n ? null : (0, a.jsx)(ej.default, {
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
    let r = t.filter(e => null == e.flags || !(0, eI.hasFlag)(e.flags, eB.MessageAttachmentFlags.IS_THUMBNAIL));
    if (0 === r.length) return null;
    let {
      gifAutoPlay: o,
      canDeleteAttachments: u,
      inlineAttachmentMedia: d,
      onMediaItemContextMenu: c,
      shouldHideMediaOptions: f
    } = this.props, E = r.map(e => (0, eE.carouselAssetFromAttachment)(e, f, l)).filter(ep.isNotNullish), _ = {
      source: "Media Mosaic",
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }, m = E.length > 1 ? (0, eE.createMediaOnClickOverrides)(E, _) : {}, T = (0, eI.hasFlag)(n, eB.MessageFlags.IS_VOICE_MESSAGE);

    function I(e, t) {
      return (0, eS.getObscureReasonForAttachment)(e.originalItem, t)
    }
    let p = r.map(t => {
      let n = (0, k.messageAttachmentToUnfurledMediaItem)(t),
        a = {
          message: e,
          item: (0, ef.messageAttachmentToMosaicMediaItem)(t, d),
          autoPlayGif: o,
          canRemoveItem: u && (r.length > 1 || "" !== e.content),
          onRemoveItem: this.handleRemoveAttachment,
          className: ek.embedWrapper,
          getObscureReason: I,
          onContextMenu: null != c ? e => {
            e.stopPropagation(), e.preventDefault(), c(e, n)
          } : void 0,
          renderAudioComponent: T ? ex.VoiceMessageAudioComponentForMessageAttachment : ex.AudioComponentForMessageAttachment,
          renderImageComponent: ex.ImageComponentForMessageAttachment,
          renderVideoComponent: ex.VideoComponentForMessageAttachment,
          renderPlaintextFilePreview: ex.PlaintextFilePreviewForMessageAttachment,
          renderGenericFileComponent: ex.GenericFileComponentForMessageAttachment,
          renderMosaicItemFooter: ex.MosaicItemFooterForMessageAttachment,
          onPlay: (e, n, a) => {
            e_.default.track(eB.AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
              guild_id: s.guild_id,
              channel_id: s.id,
              channel_type: s.type,
              type: t.content_type,
              flags: t.flags,
              size: t.size,
              duration: a
            })
          },
          gifFavoriteButton: ez(n)
        },
        l = (0, eu.getBestEffortSrcUrl)({
          proxyURL: t.proxy_url,
          url: t.url
        });
      return l in m && (a.onClick = m[l]), a
    });
    return (0, a.jsx)(ec.default, {
      items: p,
      hasInlineForwardButton: i
    })
  }
  renderEmbeds(e) {
    let {
      renderEmbeds: t
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map(t => {
      if (eb.EMBED_TYPES_WITH_SPECIAL_RENDERER.has(t.type) || (0, eT.isServerShopArticleEmbed)(t)) return null;
      let n = {
        renderImageComponent: ey.renderImageComponent,
        renderVideoComponent: ey.renderVideoComponent,
        renderLinkComponent: ey.renderMaskedLinkComponent
      };
      if (t.type === eB.MessageEmbedTypes.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let s = eN.default.safeParseWithQuery(t.url);
        if (null != s && null != s.pathname) {
          let l = s.pathname.split("/")[3];
          if (null != l) return (0, a.jsx)(m.default, {
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
    return (0, a.jsx)(eD.MessageAccessoriesComponentContextProvider, {
      gifAutoPlay: t,
      getGifFavButton: ez,
      getOnMediaItemContextMenu: null == l ? void 0 : e => t => {
        t.stopPropagation(), t.preventDefault(), null == l || l(t, e)
      },
      shouldHideMediaOptions: s,
      shouldRedactExplicitContent: n,
      children: (0, a.jsx)(b.default, {
        message: e
      })
    })
  }
  renderActivityInvite(e) {
    if (null == e.activity) return null;
    let {
      channel: t
    } = this.props;
    return (0, a.jsx)(eP.default, {
      channel: t,
      message: e,
      hideParty: !1
    })
  }
  renderPublishBump(e) {
    let {
      channel: t
    } = this.props;
    return t.type !== eB.ChannelTypes.GUILD_ANNOUNCEMENT || (0, eI.hasFlag)(e.flags, eB.MessageFlags.EPHEMERAL) || e.isPoll() ? null : (0, a.jsx)(h.default, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e, t) {
    return (0, eI.hasFlag)(e.flags, eB.MessageFlags.EPHEMERAL) ? (0, a.jsx)(ed.default, {
      message: e,
      channel: t,
      onDeleteMessage: () => {
        E.default.dismissAutomatedMessage(e)
      }
    }) : null
  }
  renderStickersAccessories(e) {
    let t = (0, X.getMessageStickers)(e),
      {
        channel: n,
        isInteracting: s
      } = this.props;
    return 0 === t.length ? null : t.map(e => (0, a.jsx)(Z.default, {
      channel: n,
      isInteracting: s,
      renderableSticker: e
    }, e.id))
  }
  renderThreadAccessories(e) {
    if (e.hasFlag(eB.MessageFlags.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, a.jsx)($.default, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!!e.hasFlag(eB.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
      if (!(Date.now() - eh.default.extractTimestamp(e.id) >= eY)) return (0, a.jsx)("div", {
        className: ek.threadRoleMentionFailure,
        children: eG.default.Messages.THREAD_ROLE_MENTION_FAILURE
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
      header: eG.default.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: eG.default.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: eG.default.Messages.CANCEL,
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
        className: ek.confirmText,
        children: eG.default.Messages.SUPPRESS_EMBED_BODY
      }), (0, a.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: eG.default.Messages.SUPPRESS_EMBED_TIP
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
      header: eG.default.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: eG.default.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: eG.default.Messages.CANCEL,
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
        className: ek.confirmText,
        children: eG.default.Messages.REMOVE_ATTACHMENT_BODY
      })
    })
  }
  renderInteractionPremiumUpsell(e) {
    let t = e.applicationId;
    return e.type !== o.MessageTypes.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, a.jsx)(eU.default, {
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
    return null == t || null == n || (null == s ? void 0 : s.type) !== T.InteractionTypes.APPLICATION_COMMAND ? null : (0, a.jsx)(eR.default, {
      application: t,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== eB.MessageEmbedTypes.POST_PREVIEW || null == t.url ? [] : (0, a.jsx)(H.default, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eB.MessageEmbedTypes.SAFETY_POLICY_NOTICE ? (0, a.jsx)(Q.SafetyPolicyNotice, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eB.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION ? (0, a.jsx)(q.SafetySystemNotification, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === eB.MessageEmbedTypes.VOICE_CHANNEL) return (0, a.jsx)(j.VoiceChannelInviteEmbed, {
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
    if (null != t) return (0, a.jsx)(Y.default, {
      message: e,
      poll: t,
      className: ek.pollContainer
    })
  }
  renderForwardedMessage(e) {
    return 0 === e.messageSnapshots.length ? null : (0, a.jsx)(O.default, {
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
    } = this.state, o = this.renderCodedLinks(t), u = this.renderGiftCodes(t), d = this.renderReferralTrial(t), c = this.renderAttachments(t), f = this.renderCtaButton(), E = this.renderSocialProofingFileSizeNitroUpsell(t), _ = this.renderEmbeds(t), m = this.renderActivityInvite(t), T = this.renderReactions(t), I = this.renderPublishBump(t), p = this.renderEphemeralAccessories(t, n), h = this.renderStickersAccessories(t), N = this.renderThreadAccessories(t), S = this.renderComponentAccessories(t), C = this.renderThreadRoleMentionWarning(t), g = this.renderEmbeddedApplicationInstanceEmbed(t), A = this.renderInteractionPremiumUpsell(t), M = this.renderMediaPostEmbeds(t), R = this.renderSafetyPolicyNotice(t), v = this.renderSafetySystemNotification(t), O = this.renderVoiceChannelInvite(t, n), x = this.renderMediaObscureNotice(t), L = this.renderPoll(t, s), D = this.renderForwardedMessage(t);
    return null == o && null == c && null == _ && null == m && null == T && null == u && null == d && null == I && null == p && null == h && null == N && null == S && null == g && null == C && null == M && null == R && null != A && null == L && null == O && null == D ? null : (0, a.jsxs)("div", {
      id: (0, eL.getMessageAccessoriesId)(t),
      className: r()(e, ek.container),
      children: [D, C, L, o, u, d, M, c, f, _, x, m, h, S, g, A, E, T, I, p, l && this.renderSuppressConfirmModal(), i && this.renderRemoveAttachmentConfirmModal(), N, R, v, O]
    })
  }
  constructor(...e) {
    super(...e), eH(this, "state", {
      showSuppressModal: !1,
      showRemoveAttachmentModal: !1,
      attachmentToDelete: null
    }), eH(this, "getAcceptInviteContext", e => {
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
    }), eH(this, "renderEmbed", (e, t, n, s) => {
      let {
        gifAutoPlay: l,
        inlineEmbedMedia: i,
        canSuppressEmbeds: r,
        hasSpoilerEmbeds: o,
        shouldRedactExplicitContent: u,
        hasInlineForwardButton: d
      } = this.props, c = (0, eS.getObscureReasonForEmbed)(e, s, n, o, u);
      if (e.type === eB.MessageEmbedTypes.GIFT) return null;
      let f = (0, a.jsx)(eo.GIFAccessoryContext.Provider, {
        value: eW(e.url, e.image, e.video),
        children: (0, a.jsx)(ei.default, {
          className: ek.embedWrapper,
          embed: e,
          obscureReason: null != c ? c : void 0,
          autoPlayGif: l,
          hideMedia: !i,
          onSuppressEmbed: r ? this.handleEmbedSuppressed : void 0,
          renderTitle: this.renderEmbedTitle,
          renderDescription: this.renderEmbedDescription,
          messageId: n,
          channelId: s,
          ...t
        })
      }, e.id);
      return d ? (0, a.jsxs)("div", {
        className: ek.embedContainer,
        children: [f, (0, a.jsx)(x.default, {
          onClick: () => {}
        })]
      }) : f
    }), eH(this, "renderEmbedTitle", (e, t) => e.type === eB.MessageEmbedTypes.RICH ? G.default.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t), eH(this, "renderEmbedDescription", (e, t, n) => e.type === eB.MessageEmbedTypes.RICH ? G.default.parse(t, !0, {
      channelId: this.props.channel.id,
      allowLinks: !0,
      allowEmojiLinks: !0,
      allowList: this.props.showListsAndHeaders,
      allowHeading: !n && this.props.showListsAndHeaders,
      previewLinkTarget: this.props.showMaskedLinks
    }) : t), eH(this, "handleEmbedSuppressed", e => {
      let {
        channel: t,
        message: n
      } = this.props;
      e.shiftKey ? E.default.suppressEmbeds(t.id, n.id) : this.setState({
        showSuppressModal: !0
      })
    }), eH(this, "handleRemoveAttachment", e => {
      let t = e.originalItem;
      this.setState({
        showRemoveAttachmentModal: !0,
        attachmentToDelete: t
      })
    })
  }
}

function eq(e) {
  var t;
  let {
    channel: n,
    message: s,
    renderSuppressEmbeds: l
  } = e, i = (0, u.useStateFromStores)([et.default], () => et.default.getId()), r = ee.InlineAttachmentMedia.useSetting(), o = ee.InlineEmbedMedia.useSetting(), d = ee.RenderEmbeds.useSetting() && !(0, eg.default)(e.message), c = ee.RenderReactions.useSetting(), f = ee.GifAutoPlay.useSetting(), E = (0, u.useStateFromStores)([es.default], () => null == n.guild_id || es.default.canChatInGuild(n.guild_id), [n]), _ = (0, u.useStateFromStores)([B.default], () => null != n.guild_id && B.default.isLurking(n.guild_id), [n]), m = (0, u.useStateFromStores)([en.default], () => en.default.isCurrentUserGuest(n.guild_id), [n]), T = (0, u.useStateFromStores)([en.default, el.default], () => {
    var e, t;
    let s = el.default.getCurrentUser();
    return null !== (t = null != n.guild_id && null != s ? null === (e = en.default.getMember(n.guild_id, s.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: I,
    canManageMessages: p
  } = (0, u.useStateFromStoresObject)([ea.default], () => ({
    canAddNewReactions: E && ea.default.can(eB.Permissions.ADD_REACTIONS, n),
    canManageMessages: ea.default.can(eB.Permissions.MANAGE_MESSAGES, n)
  }), [E, n]), h = (0, L.useCurrentUserAutomodQuaratinedProfile)(n.guild_id), [, N] = (0, D.useCurrentUserCommunicationDisabled)(n.guild_id), S = (0, J.useIsActiveChannelOrUnarchivableThread)(n), C = (i === s.author.id || p) && s.author.id !== eB.LOCAL_BOT_ID && !1 !== l && !(0, eI.hasFlag)(s.flags, eB.MessageFlags.EPHEMERAL) && S, M = i === s.author.id && S, R = s.author.id === i, O = s.isFirstMessageInForumPost(n), x = (0, eA.default)({
    channel: n,
    canChat: E,
    renderReactions: c,
    canAddNewReactions: I,
    isLurking: _,
    isGuest: m,
    communicationDisabled: N,
    isActiveChannelOrUnarchivableThread: S,
    isAutomodQuarantined: h
  }), P = (0, F.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()), y = (0, w.default)(null == n ? void 0 : n.id), U = (0, V.default)(s), j = (0, g.useShouldRedactExplicitContent)(n.id, s.author.id), b = (0, A.useShouldRenderReportFalsePositiveButton)(s.id), {
    hasInlineForwardButton: G
  } = v.MessageForwardingExperiment.useExperiment({
    location: "MessageMediaMosaic"
  });
  return (0, a.jsx)(eQ, {
    canSuppressEmbeds: C,
    canDeleteAttachments: M,
    ...x,
    disableReactionReads: !!O || x.disableReactionReads,
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
    poll: U,
    showListsAndHeaders: P,
    showMaskedLinks: P,
    shouldHideMediaOptions: y,
    shouldRedactExplicitContent: j,
    shouldRenderCtaButton: b,
    hasInlineForwardButton: G
  })
}
eH(eQ, "defaultProps", {
  renderEmbeds: !0,
  compact: !1
});
let eX = e => {
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
  } = e, c = ee.InlineAttachmentMedia.useSetting(), f = ee.InlineEmbedMedia.useSetting(), E = ee.RenderEmbeds.useSetting(), _ = ee.GifAutoPlay.useSetting(), m = (0, F.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), T = (0, w.default)(null == s ? void 0 : s.id), I = (0, g.useShouldRedactExplicitContent)(s.id, n.author.id), p = (0, A.useShouldRenderReportFalsePositiveButton)(n.id), h = (0, V.default)(n);
  return (0, a.jsx)(eQ, {
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
    poll: h,
    showListsAndHeaders: m,
    showMaskedLinks: m,
    shouldHideMediaOptions: T,
    shouldRedactExplicitContent: I,
    shouldRenderCtaButton: p,
    hasInlineForwardButton: !1
  })
}