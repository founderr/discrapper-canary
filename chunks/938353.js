"use strict";
n.r(t), n.d(t, {
  MessageAccessories: function() {
    return e$
  },
  SimpleMessageAccessories: function() {
    return e1
  },
  default: function() {
    return e0
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
  h = n("421474"),
  N = n("603270"),
  S = n("222709"),
  C = n("960904"),
  g = n("161314"),
  A = n("163268"),
  M = n("25610"),
  R = n("703751"),
  v = n("761538"),
  O = n("674611"),
  x = n("346610"),
  L = n("868643"),
  D = n("294734"),
  P = n("426275"),
  y = n("715903"),
  U = n("71619"),
  j = n("637618"),
  b = n("225890"),
  F = n("364097"),
  B = n("495129"),
  G = n("954654"),
  k = n("41776"),
  w = n("628238"),
  H = n("454585"),
  V = n("768494"),
  Y = n("976853"),
  K = n("346013"),
  W = n("977683"),
  z = n("128435"),
  Q = n("98278"),
  q = n("614825"),
  X = n("265299"),
  Z = n("699833"),
  J = n("344997"),
  $ = n("378233"),
  ee = n("374425"),
  et = n("665906"),
  en = n("432147"),
  es = n("695346"),
  ea = n("314897"),
  el = n("271383"),
  ei = n("607744"),
  er = n("496675"),
  eo = n("594174"),
  eu = n("529815"),
  ed = n("261922"),
  ec = n("941797"),
  ef = n("52824"),
  eE = n("727779"),
  e_ = n("310043"),
  em = n("69750"),
  eT = n("592256"),
  eI = n("626135"),
  ep = n("70956"),
  eh = n("408433"),
  eN = n("630388"),
  eS = n("823379"),
  eC = n("709054"),
  eg = n("591759"),
  eA = n("169525"),
  eM = n("161010"),
  eR = n("461157"),
  ev = n("901461"),
  eO = n("432376"),
  ex = n("384203"),
  eL = n("633957"),
  eD = n("29909"),
  eP = n("782658"),
  ey = n("219797"),
  eU = n("453687"),
  ej = n("128854"),
  eb = n("101578"),
  eF = n("524444"),
  eB = n("319323"),
  eG = n("920888"),
  ek = n("817384"),
  ew = n("981631"),
  eH = n("474936"),
  eV = n("689938"),
  eY = n("373947"),
  eK = n("346661"),
  eW = n("680674");

function ez(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function eQ() {
  return (0, a.jsxs)("div", {
    className: eK.nitroFileSizeUpsell,
    children: [(0, a.jsx)("img", {
      src: eW,
      className: eK.nitroBadgeSvg,
      alt: ""
    }), (0, a.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: eK.__invalid_nitroFileSizeUpsellText,
      children: eV.default.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, Q.navigateToPremiumMarketingPage)()
      })
    })]
  })
}
let eq = 15 * ep.default.Millis.MINUTE,
  eX = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  eZ = (e, t, n) => () => {
    let s = null != t ? t : n;
    if (null == s) return null;
    let {
      url: l,
      proxyURL: i,
      width: r,
      height: o
    } = s;
    return (0, a.jsx)(eD.default, {
      width: r,
      height: o,
      src: null != i && "" !== i ? i : l,
      url: null != e && "" !== e ? e : null != i && "" !== i ? i : l,
      format: null != n ? d.GIFType.VIDEO : d.GIFType.IMAGE,
      className: eK.gifFavoriteButton
    })
  },
  eJ = e => () => {
    let {
      url: t,
      proxyUrl: n,
      width: s,
      height: l
    } = e;
    return null != s && null != l && ed.IMAGE_GIF_RE.test(n) ? (0, a.jsx)(eD.default, {
      width: s,
      height: l,
      src: n,
      url: t,
      format: d.GIFType.IMAGE,
      className: eK.gifFavoriteButton
    }) : null
  };
class e$ extends(s = l.Component) {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eX.has(e))
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
      className: eK.ctaButtonContainer,
      children: (0, a.jsx)(O.default, {
        messageId: e.id,
        channelId: t.id
      })
    }) : null
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
    let t = e.attachments.some(e => e.size > eH.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE);
    return (0, eM.shouldShowNitroUpsell)("attachment") && t ? (0, a.jsx)(eQ, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: s
      } = t;
      if (n === C.CodedLinkType.INVITE) return this.shouldRenderInvite(s) ? (0, a.jsx)(eP.default, {
        code: s,
        author: e.author,
        getAcceptInviteContext: this.getAcceptInviteContext
      }, s) : null;
      if (n === C.CodedLinkType.TEMPLATE) return (0, a.jsx)(F.default, {
        code: s
      }, s);
      if (n === C.CodedLinkType.EVENT) return (0, a.jsx)(b.default, {
        code: s
      }, s);
      else if (n === C.CodedLinkType.CHANNEL_LINK) return (0, a.jsx)(ex.default, {
        code: s,
        messageData: e
      }, s);
      else if (n === C.CodedLinkType.APP_DIRECTORY_PROFILE) return (0, a.jsx)(p.default, {
        code: s,
        message: e
      }, s);
      else if (n === C.CodedLinkType.ACTIVITY_BOOKMARK) return (0, a.jsx)(I.default, {
        applicationId: s,
        message: e
      }, s);
      else if (n === C.CodedLinkType.GUILD_PRODUCT) return (0, a.jsx)(j.default, {
        code: s
      }, s);
      else if (n === C.CodedLinkType.SERVER_SHOP) return (0, a.jsx)(g.default, {
        guildId: s
      }, s);
      else if (n === C.CodedLinkType.QUESTS_EMBED) return (0, a.jsx)(X.default, {
        questId: s
      }, s);
      else if (n === C.CodedLinkType.APP_DIRECTORY_STOREFRONT) return (0, a.jsx)(N.AppStorefrontMessageEmbed, {
        appId: s,
        message: e
      }, s);
      else if (n === C.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU) {
        let t = (0, h.parseStorefrontSkuCodedLink)(s);
        return null == t ? null : (0, a.jsx)(N.AppStorefrontSKUMessageEmbed, {
          skuId: t.skuId,
          message: e
        }, s)
      } else throw Error("Unknown coded link type: ".concat(n))
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
    } = e, o = eo.default.getCurrentUser();
    return null != o && t.length > 0 ? t.map(e => (0, a.jsx)("div", {
      className: eK.giftCodeContainer,
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
      className: eK.referralContainer,
      children: (0, a.jsx)(q.default, {
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
    return n ? null : (0, a.jsx)(eG.default, {
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
    let r = t.filter(e => null == e.flags || !(0, eN.hasFlag)(e.flags, ew.MessageAttachmentFlags.IS_THUMBNAIL));
    if (0 === r.length) return null;
    let {
      gifAutoPlay: o,
      canDeleteAttachments: u,
      inlineAttachmentMedia: d,
      onMediaItemContextMenu: c,
      shouldHideMediaOptions: f
    } = this.props, E = r.map(e => (0, eT.carouselAssetFromAttachment)(e, f, l)).filter(eS.isNotNullish), _ = {
      source: "Media Mosaic",
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }, m = E.length > 1 ? (0, eT.createMediaOnClickOverrides)(E, _) : {}, T = (0, eN.hasFlag)(n, ew.MessageFlags.IS_VOICE_MESSAGE);

    function I(e, t) {
      return (0, eA.getObscureReasonForAttachment)(e.originalItem, t)
    }
    let p = r.map(t => {
        let n = (0, V.messageAttachmentToUnfurledMediaItem)(t),
          a = {
            message: e,
            item: (0, em.messageAttachmentToMosaicMediaItem)(t, d),
            autoPlayGif: o,
            canRemoveItem: u && (r.length > 1 || "" !== e.content),
            onRemoveItem: this.handleRemoveAttachment,
            className: eK.embedWrapper,
            getObscureReason: I,
            onContextMenu: null != c ? e => {
              e.stopPropagation(), e.preventDefault(), c(e, n)
            } : void 0,
            renderAudioComponent: T ? ey.VoiceMessageAudioComponentForMessageAttachment : ey.AudioComponentForMessageAttachment,
            renderImageComponent: ey.ImageComponentForMessageAttachment,
            renderVideoComponent: ey.VideoComponentForMessageAttachment,
            renderPlaintextFilePreview: ey.PlaintextFilePreviewForMessageAttachment,
            renderGenericFileComponent: ey.GenericFileComponentForMessageAttachment,
            renderMosaicItemFooter: ey.MosaicItemFooterForMessageAttachment,
            onPlay: (e, n, a) => {
              eI.default.track(ew.AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type,
                type: t.content_type,
                flags: t.flags,
                size: t.size,
                duration: a
              })
            },
            gifFavoriteButton: eJ(n)
          },
          l = (0, ef.getBestEffortSrcUrl)({
            proxyURL: t.proxy_url,
            url: t.url
          });
        return l in m && (a.onClick = m[l]), a
      }),
      h = i ? (0, a.jsx)(P.default, {
        className: eY.hideIfMessageNotFocused,
        messageId: e.id,
        channelId: s.id,
        targetKind: "media"
      }) : void 0;
    return (0, a.jsx)(e_.default, {
      items: p,
      inlineForwardButton: h
    })
  }
  renderEmbeds(e) {
    let {
      renderEmbeds: t
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map((t, n) => {
      if (ek.EMBED_TYPES_WITH_SPECIAL_RENDERER.has(t.type) || (0, eh.isServerShopArticleEmbed)(t)) return null;
      let s = {
        renderImageComponent: eF.renderImageComponent,
        renderVideoComponent: eF.renderVideoComponent,
        renderLinkComponent: eF.renderMaskedLinkComponent
      };
      if (t.type === ew.MessageEmbedTypes.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let l = eg.default.safeParseWithQuery(t.url);
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
    return (0, a.jsx)(ej.MessageAccessoriesComponentContextProvider, {
      gifAutoPlay: t,
      getGifFavButton: eJ,
      getOnMediaItemContextMenu: null == l ? void 0 : e => t => {
        t.stopPropagation(), t.preventDefault(), null == l || l(t, e)
      },
      shouldHideMediaOptions: s,
      shouldRedactExplicitContent: n,
      children: (0, a.jsx)(G.default, {
        message: e
      })
    })
  }
  renderActivityInvite(e) {
    if (null == e.activity) return null;
    let {
      channel: t
    } = this.props;
    return (0, a.jsx)(eb.default, {
      channel: t,
      message: e,
      hideParty: !1
    })
  }
  renderPublishBump(e) {
    let {
      channel: t
    } = this.props;
    return t.type !== ew.ChannelTypes.GUILD_ANNOUNCEMENT || (0, eN.hasFlag)(e.flags, ew.MessageFlags.EPHEMERAL) || e.isPoll() ? null : (0, a.jsx)(S.default, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e) {
    return (0, eN.hasFlag)(e.flags, ew.MessageFlags.EPHEMERAL) ? (0, a.jsx)(eE.default, {
      message: e,
      onDeleteMessage: () => {
        E.default.dismissAutomatedMessage(e)
      }
    }) : null
  }
  renderStickersAccessories(e) {
    let t = (0, $.getMessageStickers)(e),
      {
        channel: n,
        isInteracting: s
      } = this.props;
    return 0 === t.length ? null : t.map(e => (0, a.jsx)(ee.default, {
      channel: n,
      isInteracting: s,
      renderableSticker: e
    }, e.id))
  }
  renderThreadAccessories(e) {
    if (e.hasFlag(ew.MessageFlags.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, a.jsx)(en.default, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!!e.hasFlag(ew.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
      if (!(Date.now() - eC.default.extractTimestamp(e.id) >= eq)) return (0, a.jsx)("div", {
        className: eK.threadRoleMentionFailure,
        children: eV.default.Messages.THREAD_ROLE_MENTION_FAILURE
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
      header: eV.default.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: eV.default.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: eV.default.Messages.CANCEL,
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
        className: eK.confirmText,
        children: eV.default.Messages.SUPPRESS_EMBED_BODY
      }), (0, a.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: eV.default.Messages.SUPPRESS_EMBED_TIP
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
      header: eV.default.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: eV.default.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: eV.default.Messages.CANCEL,
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
        className: eK.confirmText,
        children: eV.default.Messages.REMOVE_ATTACHMENT_BODY
      })
    })
  }
  renderInteractionPremiumUpsell(e) {
    let t = e.applicationId;
    return e.type !== o.MessageTypes.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, a.jsx)(eB.default, {
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
    return null == t || null == n || (null == s ? void 0 : s.type) !== T.InteractionTypes.APPLICATION_COMMAND ? null : (0, a.jsx)(eL.default, {
      application: t,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== ew.MessageEmbedTypes.POST_PREVIEW || null == t.url ? [] : (0, a.jsx)(K.default, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === ew.MessageEmbedTypes.SAFETY_POLICY_NOTICE ? (0, a.jsx)(Z.SafetyPolicyNotice, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === ew.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION ? (0, a.jsx)(J.SafetySystemNotification, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === ew.MessageEmbedTypes.VOICE_CHANNEL) return (0, a.jsx)(B.VoiceChannelInviteEmbed, {
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
    return 0 === t.length && 0 === n.length ? null : (0, a.jsx)(v.default, {
      message: e
    })
  }
  renderPoll(e, t) {
    if (null != t) return (0, a.jsx)(z.default, {
      message: e,
      poll: t,
      className: eK.pollContainer
    })
  }
  renderForwardedMessage(e) {
    return 0 === e.messageSnapshots.length ? null : (0, a.jsx)(D.default, {
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
    } = this.state, o = this.renderCodedLinks(t), u = this.renderGiftCodes(t), d = this.renderReferralTrial(t), c = this.renderAttachments(t), f = this.renderCtaButton(), E = this.renderSocialProofingFileSizeNitroUpsell(t), _ = this.renderEmbeds(t), m = this.renderActivityInvite(t), T = this.renderReactions(t), I = this.renderPublishBump(t), p = this.renderEphemeralAccessories(t), h = this.renderStickersAccessories(t), N = this.renderThreadAccessories(t), S = this.renderComponentAccessories(t), C = this.renderThreadRoleMentionWarning(t), g = this.renderEmbeddedApplicationInstanceEmbed(t), A = this.renderInteractionPremiumUpsell(t), M = this.renderMediaPostEmbeds(t), R = this.renderSafetyPolicyNotice(t), v = this.renderSafetySystemNotification(t), O = this.renderVoiceChannelInvite(t, n), x = this.renderMediaObscureNotice(t), L = this.renderPoll(t, s), D = this.renderForwardedMessage(t);
    return null == o && null == c && null == _ && null == m && null == T && null == u && null == d && null == I && null == p && null == h && null == N && null == S && null == g && null == C && null == M && null == R && null != A && null == L && null == O && null == D ? null : (0, a.jsxs)("div", {
      id: (0, eU.getMessageAccessoriesId)(t),
      className: r()(e, eK.container),
      children: [D, C, L, o, u, d, M, c, f, _, x, m, h, S, g, A, E, T, I, p, l && this.renderSuppressConfirmModal(), i && this.renderRemoveAttachmentConfirmModal(), N, R, v, O]
    })
  }
  constructor(...e) {
    super(...e), ez(this, "state", {
      showSuppressModal: !1,
      showRemoveAttachmentModal: !1,
      attachmentToDelete: null
    }), ez(this, "getAcceptInviteContext", e => {
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
    }), ez(this, "renderEmbed", (e, t, n, s, l) => {
      let {
        gifAutoPlay: i,
        inlineEmbedMedia: r,
        canSuppressEmbeds: o,
        hasSpoilerEmbeds: u,
        shouldRedactExplicitContent: d,
        hasInlineForwardButton: c
      } = this.props, f = (0, eA.getObscureReasonForEmbed)(e, l, s, u, d);
      if (e.type === ew.MessageEmbedTypes.GIFT) return null;
      let E = (0, a.jsx)(ec.GIFAccessoryContext.Provider, {
        value: eZ(e.url, e.image, e.video),
        children: (0, a.jsx)(eu.default, {
          className: eK.embedWrapper,
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
        className: eK.embedContainer,
        children: [E, (0, a.jsx)(P.default, {
          className: eY.hideIfMessageNotFocused,
          messageId: s,
          channelId: l,
          targetKind: "embed",
          embedIndex: t
        })]
      }) : E
    }), ez(this, "renderEmbedTitle", (e, t) => e.type === ew.MessageEmbedTypes.RICH ? H.default.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t), ez(this, "renderEmbedDescription", (e, t, n) => e.type === ew.MessageEmbedTypes.RICH ? H.default.parse(t, !0, {
      channelId: this.props.channel.id,
      allowLinks: !0,
      allowEmojiLinks: !0,
      allowList: this.props.showListsAndHeaders,
      allowHeading: !n && this.props.showListsAndHeaders,
      previewLinkTarget: this.props.showMaskedLinks
    }) : t), ez(this, "handleEmbedSuppressed", e => {
      let {
        channel: t,
        message: n
      } = this.props;
      e.shiftKey ? E.default.suppressEmbeds(t.id, n.id) : this.setState({
        showSuppressModal: !0
      })
    }), ez(this, "handleRemoveAttachment", e => {
      let t = e.originalItem;
      this.setState({
        showRemoveAttachmentModal: !0,
        attachmentToDelete: t
      })
    })
  }
}

function e0(e) {
  var t;
  let {
    channel: n,
    message: s,
    renderSuppressEmbeds: l,
    isMessageSnapshot: i
  } = e, r = (0, u.useStateFromStores)([ea.default], () => ea.default.getId()), o = es.InlineAttachmentMedia.useSetting(), d = es.InlineEmbedMedia.useSetting(), c = es.RenderEmbeds.useSetting() && !(0, ev.default)(e.message), f = es.RenderReactions.useSetting(), E = es.GifAutoPlay.useSetting(), _ = (0, u.useStateFromStores)([ei.default], () => null == n.guild_id || ei.default.canChatInGuild(n.guild_id), [n]), m = (0, u.useStateFromStores)([k.default], () => null != n.guild_id && k.default.isLurking(n.guild_id), [n]), T = (0, u.useStateFromStores)([el.default], () => el.default.isCurrentUserGuest(n.guild_id), [n]), I = (0, u.useStateFromStores)([el.default, eo.default], () => {
    var e, t;
    let s = eo.default.getCurrentUser();
    return null !== (t = null != n.guild_id && null != s ? null === (e = el.default.getMember(n.guild_id, s.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: p,
    canManageMessages: h
  } = (0, u.useStateFromStoresObject)([er.default], () => ({
    canAddNewReactions: _ && er.default.can(ew.Permissions.ADD_REACTIONS, n),
    canManageMessages: er.default.can(ew.Permissions.MANAGE_MESSAGES, n)
  }), [_, n]), N = (0, y.useCurrentUserAutomodQuaratinedProfile)(n.guild_id), [, S] = (0, U.useCurrentUserCommunicationDisabled)(n.guild_id), C = (0, et.useIsActiveChannelOrUnarchivableThread)(n), g = (r === s.author.id || h) && s.author.id !== ew.LOCAL_BOT_ID && !1 !== l && !(0, eN.hasFlag)(s.flags, ew.MessageFlags.EPHEMERAL) && C && 1 === (0, eR.default)(s), A = r === s.author.id && C && !i, v = s.author.id === r, O = s.isFirstMessageInForumPost(n), D = (0, eO.default)({
    channel: n,
    canChat: _,
    renderReactions: f,
    canAddNewReactions: p,
    isLurking: m,
    isGuest: T,
    communicationDisabled: S,
    isActiveChannelOrUnarchivableThread: C,
    isAutomodQuarantined: N
  }), P = (0, w.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()), j = (0, Y.default)(null == n ? void 0 : n.id), b = (0, W.default)(s), F = (0, M.useShouldRedactExplicitContent)(n.id, s.author.id), B = (0, R.useShouldRenderReportFalsePositiveButton)(s.id), {
    hasInlineForwardButton: G
  } = x.MessageForwardingExperiment.useExperiment({
    location: "MessageAccessories"
  }), H = (0, L.useCanForwardMessage)(s) && G;
  return (0, a.jsx)(e$, {
    canSuppressEmbeds: g,
    canDeleteAttachments: A,
    ...D,
    disableReactionReads: !!O || D.disableReactionReads,
    ...e,
    isLurking: m && _,
    isGuest: T && _,
    isPendingMember: I && _,
    isCurrentUser: v,
    inlineAttachmentMedia: o,
    inlineEmbedMedia: d,
    renderEmbeds: c,
    gifAutoPlay: E,
    canRenderReferralEmbed: n.isDM(),
    poll: b,
    showListsAndHeaders: P,
    showMaskedLinks: P,
    shouldHideMediaOptions: j,
    shouldRedactExplicitContent: F,
    shouldRenderCtaButton: B,
    hasInlineForwardButton: H
  })
}
ez(e$, "defaultProps", {
  renderEmbeds: !0,
  compact: !1
});
let e1 = e => {
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
  } = e, c = es.InlineAttachmentMedia.useSetting(), f = es.InlineEmbedMedia.useSetting(), E = es.RenderEmbeds.useSetting(), _ = es.GifAutoPlay.useSetting(), m = (0, w.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), T = (0, Y.default)(null == s ? void 0 : s.id), I = (0, M.useShouldRedactExplicitContent)(s.id, n.author.id), p = (0, R.useShouldRenderReportFalsePositiveButton)(n.id), h = (0, W.default)(n);
  return (0, a.jsx)(e$, {
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