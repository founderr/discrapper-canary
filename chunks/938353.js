"use strict";
n.r(t), n.d(t, {
  MessageAccessories: function() {
    return eJ
  },
  SimpleMessageAccessories: function() {
    return e0
  },
  default: function() {
    return e$
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
  T = n("626799"),
  m = n("911969"),
  I = n("624367"),
  N = n("433074"),
  p = n("603270"),
  h = n("222709"),
  S = n("960904"),
  C = n("161314"),
  A = n("163268"),
  g = n("25610"),
  M = n("703751"),
  R = n("761538"),
  O = n("674611"),
  v = n("346610"),
  x = n("868643"),
  L = n("294734"),
  P = n("426275"),
  D = n("715903"),
  y = n("71619"),
  U = n("637618"),
  j = n("225890"),
  b = n("364097"),
  G = n("495129"),
  F = n("954654"),
  B = n("41776"),
  k = n("628238"),
  w = n("454585"),
  H = n("768494"),
  V = n("976853"),
  Y = n("346013"),
  K = n("977683"),
  W = n("128435"),
  z = n("98278"),
  Q = n("614825"),
  q = n("265299"),
  X = n("699833"),
  Z = n("344997"),
  J = n("378233"),
  $ = n("374425"),
  ee = n("665906"),
  et = n("432147"),
  en = n("695346"),
  es = n("314897"),
  ea = n("271383"),
  el = n("607744"),
  ei = n("496675"),
  er = n("594174"),
  eo = n("529815"),
  eu = n("261922"),
  ed = n("941797"),
  ec = n("52824"),
  ef = n("727779"),
  eE = n("310043"),
  e_ = n("69750"),
  eT = n("592256"),
  em = n("626135"),
  eI = n("70956"),
  eN = n("408433"),
  ep = n("630388"),
  eh = n("823379"),
  eS = n("709054"),
  eC = n("591759"),
  eA = n("169525"),
  eg = n("161010"),
  eM = n("461157"),
  eR = n("901461"),
  eO = n("432376"),
  ev = n("384203"),
  ex = n("633957"),
  eL = n("29909"),
  eP = n("782658"),
  eD = n("219797"),
  ey = n("453687"),
  eU = n("128854"),
  ej = n("101578"),
  eb = n("524444"),
  eG = n("319323"),
  eF = n("920888"),
  eB = n("817384"),
  ek = n("981631"),
  ew = n("474936"),
  eH = n("689938"),
  eV = n("373947"),
  eY = n("346661"),
  eK = n("680674");

function eW(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function ez() {
  return (0, a.jsxs)("div", {
    className: eY.nitroFileSizeUpsell,
    children: [(0, a.jsx)("img", {
      src: eK,
      className: eY.nitroBadgeSvg,
      alt: ""
    }), (0, a.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: eY.__invalid_nitroFileSizeUpsellText,
      children: eH.default.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, z.navigateToPremiumMarketingPage)()
      })
    })]
  })
}
let eQ = 15 * eI.default.Millis.MINUTE,
  eq = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  eX = (e, t, n) => () => {
    let s = null != t ? t : n;
    if (null == s) return null;
    let {
      url: l,
      proxyURL: i,
      width: r,
      height: o
    } = s;
    return (0, a.jsx)(eL.default, {
      width: r,
      height: o,
      src: null != i && "" !== i ? i : l,
      url: null != e && "" !== e ? e : null != i && "" !== i ? i : l,
      format: null != n ? d.GIFType.VIDEO : d.GIFType.IMAGE,
      className: eY.gifFavoriteButton
    })
  },
  eZ = e => () => {
    let {
      url: t,
      proxyUrl: n,
      width: s,
      height: l
    } = e;
    return null != s && null != l && eu.IMAGE_GIF_RE.test(n) ? (0, a.jsx)(eL.default, {
      width: s,
      height: l,
      src: n,
      url: t,
      format: d.GIFType.IMAGE,
      className: eY.gifFavoriteButton
    }) : null
  };
class eJ extends(s = l.Component) {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eq.has(e))
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
      className: eY.ctaButtonContainer,
      children: (0, a.jsx)(O.default, {
        messageId: e.id,
        channelId: t.id
      })
    }) : null
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
    let t = e.attachments.some(e => e.size > ew.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE);
    return (0, eg.shouldShowNitroUpsell)("attachment") && t ? (0, a.jsx)(ez, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: s
      } = t;
      if (n === S.CodedLinkType.INVITE) return this.shouldRenderInvite(s) ? (0, a.jsx)(eP.default, {
        code: s,
        author: e.author,
        getAcceptInviteContext: this.getAcceptInviteContext
      }, s) : null;
      if (n === S.CodedLinkType.TEMPLATE) return (0, a.jsx)(b.default, {
        code: s
      }, s);
      if (n === S.CodedLinkType.EVENT) return (0, a.jsx)(j.default, {
        code: s
      }, s);
      else if (n === S.CodedLinkType.CHANNEL_LINK) return (0, a.jsx)(ev.default, {
        code: s,
        messageData: e
      }, s);
      else if (n === S.CodedLinkType.APP_DIRECTORY_PROFILE) return (0, a.jsx)(N.default, {
        code: s,
        message: e
      }, s);
      else if (n === S.CodedLinkType.ACTIVITY_BOOKMARK) return (0, a.jsx)(I.default, {
        applicationId: s,
        message: e
      }, s);
      else if (n === S.CodedLinkType.GUILD_PRODUCT) return (0, a.jsx)(U.default, {
        code: s
      }, s);
      else if (n === S.CodedLinkType.SERVER_SHOP) return (0, a.jsx)(C.default, {
        guildId: s
      }, s);
      else if (n === S.CodedLinkType.QUESTS_EMBED) return (0, a.jsx)(q.default, {
        questId: s
      }, s);
      else if (n === S.CodedLinkType.APP_DIRECTORY_STOREFRONT) return (0, a.jsx)(p.AppStorefrontMessageEmbed, {
        appId: s,
        message: e
      }, s);
      else if (n === S.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU) return (0, a.jsx)(p.AppStorefrontSKUMessageEmbed, {
        skuId: s,
        message: e
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
    } = e, o = er.default.getCurrentUser();
    return null != o && t.length > 0 ? t.map(e => (0, a.jsx)("div", {
      className: eY.giftCodeContainer,
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
      className: eY.referralContainer,
      children: (0, a.jsx)(Q.default, {
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
    let r = t.filter(e => null == e.flags || !(0, ep.hasFlag)(e.flags, ek.MessageAttachmentFlags.IS_THUMBNAIL));
    if (0 === r.length) return null;
    let {
      gifAutoPlay: o,
      canDeleteAttachments: u,
      inlineAttachmentMedia: d,
      onMediaItemContextMenu: c,
      shouldHideMediaOptions: f
    } = this.props, E = r.map(e => (0, eT.carouselAssetFromAttachment)(e, f, l)).filter(eh.isNotNullish), _ = {
      source: "Media Mosaic",
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }, T = E.length > 1 ? (0, eT.createMediaOnClickOverrides)(E, _) : {}, m = (0, ep.hasFlag)(n, ek.MessageFlags.IS_VOICE_MESSAGE);

    function I(e, t) {
      return (0, eA.getObscureReasonForAttachment)(e.originalItem, t)
    }
    let N = r.map(t => {
        let n = (0, H.messageAttachmentToUnfurledMediaItem)(t),
          a = {
            message: e,
            item: (0, e_.messageAttachmentToMosaicMediaItem)(t, d),
            autoPlayGif: o,
            canRemoveItem: u && (r.length > 1 || "" !== e.content),
            onRemoveItem: this.handleRemoveAttachment,
            className: eY.embedWrapper,
            getObscureReason: I,
            onContextMenu: null != c ? e => {
              e.stopPropagation(), e.preventDefault(), c(e, n)
            } : void 0,
            renderAudioComponent: m ? eD.VoiceMessageAudioComponentForMessageAttachment : eD.AudioComponentForMessageAttachment,
            renderImageComponent: eD.ImageComponentForMessageAttachment,
            renderVideoComponent: eD.VideoComponentForMessageAttachment,
            renderPlaintextFilePreview: eD.PlaintextFilePreviewForMessageAttachment,
            renderGenericFileComponent: eD.GenericFileComponentForMessageAttachment,
            renderMosaicItemFooter: eD.MosaicItemFooterForMessageAttachment,
            onPlay: (e, n, a) => {
              em.default.track(ek.AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type,
                type: t.content_type,
                flags: t.flags,
                size: t.size,
                duration: a
              })
            },
            gifFavoriteButton: eZ(n)
          },
          l = (0, ec.getBestEffortSrcUrl)({
            proxyURL: t.proxy_url,
            url: t.url
          });
        return l in T && (a.onClick = T[l]), a
      }),
      p = i ? (0, a.jsx)(P.default, {
        className: eV.hideIfMessageNotFocused,
        messageId: e.id,
        channelId: s.id,
        targetKind: "media"
      }) : void 0;
    return (0, a.jsx)(eE.default, {
      items: N,
      inlineForwardButton: p
    })
  }
  renderEmbeds(e) {
    let {
      renderEmbeds: t
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map((t, n) => {
      if (eB.EMBED_TYPES_WITH_SPECIAL_RENDERER.has(t.type) || (0, eN.isServerShopArticleEmbed)(t)) return null;
      let s = {
        renderImageComponent: eb.renderImageComponent,
        renderVideoComponent: eb.renderVideoComponent,
        renderLinkComponent: eb.renderMaskedLinkComponent
      };
      if (t.type === ek.MessageEmbedTypes.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let l = eC.default.safeParseWithQuery(t.url);
        if (null != l && null != l.pathname) {
          let i = l.pathname.split("/")[3];
          if (null != i) return (0, a.jsx)(T.default, {
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
    return (0, a.jsx)(eU.MessageAccessoriesComponentContextProvider, {
      gifAutoPlay: t,
      getGifFavButton: eZ,
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
    return (0, a.jsx)(ej.default, {
      channel: t,
      message: e,
      hideParty: !1
    })
  }
  renderPublishBump(e) {
    let {
      channel: t
    } = this.props;
    return t.type !== ek.ChannelTypes.GUILD_ANNOUNCEMENT || (0, ep.hasFlag)(e.flags, ek.MessageFlags.EPHEMERAL) || e.isPoll() ? null : (0, a.jsx)(h.default, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e) {
    return (0, ep.hasFlag)(e.flags, ek.MessageFlags.EPHEMERAL) ? (0, a.jsx)(ef.default, {
      message: e,
      onDeleteMessage: () => {
        E.default.dismissAutomatedMessage(e)
      }
    }) : null
  }
  renderStickersAccessories(e) {
    let t = (0, J.getMessageStickers)(e),
      {
        channel: n,
        isInteracting: s
      } = this.props;
    return 0 === t.length ? null : t.map(e => (0, a.jsx)($.default, {
      channel: n,
      isInteracting: s,
      renderableSticker: e
    }, e.id))
  }
  renderThreadAccessories(e) {
    if (e.hasFlag(ek.MessageFlags.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, a.jsx)(et.default, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!!e.hasFlag(ek.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
      if (!(Date.now() - eS.default.extractTimestamp(e.id) >= eQ)) return (0, a.jsx)("div", {
        className: eY.threadRoleMentionFailure,
        children: eH.default.Messages.THREAD_ROLE_MENTION_FAILURE
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
      header: eH.default.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: eH.default.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: eH.default.Messages.CANCEL,
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
        className: eY.confirmText,
        children: eH.default.Messages.SUPPRESS_EMBED_BODY
      }), (0, a.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: eH.default.Messages.SUPPRESS_EMBED_TIP
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
      header: eH.default.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: eH.default.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: eH.default.Messages.CANCEL,
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
        className: eY.confirmText,
        children: eH.default.Messages.REMOVE_ATTACHMENT_BODY
      })
    })
  }
  renderInteractionPremiumUpsell(e) {
    let t = e.applicationId;
    return e.type !== o.MessageTypes.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, a.jsx)(eG.default, {
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
    return null == t || null == n || (null == s ? void 0 : s.type) !== m.InteractionTypes.APPLICATION_COMMAND ? null : (0, a.jsx)(ex.default, {
      application: t,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== ek.MessageEmbedTypes.POST_PREVIEW || null == t.url ? [] : (0, a.jsx)(Y.default, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === ek.MessageEmbedTypes.SAFETY_POLICY_NOTICE ? (0, a.jsx)(X.SafetyPolicyNotice, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === ek.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION ? (0, a.jsx)(Z.SafetySystemNotification, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === ek.MessageEmbedTypes.VOICE_CHANNEL) return (0, a.jsx)(G.VoiceChannelInviteEmbed, {
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
    return 0 === t.length && 0 === n.length ? null : (0, a.jsx)(R.default, {
      message: e
    })
  }
  renderPoll(e, t) {
    if (null != t) return (0, a.jsx)(W.default, {
      message: e,
      poll: t,
      className: eY.pollContainer
    })
  }
  renderForwardedMessage(e) {
    return 0 === e.messageSnapshots.length ? null : (0, a.jsx)(L.default, {
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
    } = this.state, o = this.renderCodedLinks(t), u = this.renderGiftCodes(t), d = this.renderReferralTrial(t), c = this.renderAttachments(t), f = this.renderCtaButton(), E = this.renderSocialProofingFileSizeNitroUpsell(t), _ = this.renderEmbeds(t), T = this.renderActivityInvite(t), m = this.renderReactions(t), I = this.renderPublishBump(t), N = this.renderEphemeralAccessories(t), p = this.renderStickersAccessories(t), h = this.renderThreadAccessories(t), S = this.renderComponentAccessories(t), C = this.renderThreadRoleMentionWarning(t), A = this.renderEmbeddedApplicationInstanceEmbed(t), g = this.renderInteractionPremiumUpsell(t), M = this.renderMediaPostEmbeds(t), R = this.renderSafetyPolicyNotice(t), O = this.renderSafetySystemNotification(t), v = this.renderVoiceChannelInvite(t, n), x = this.renderMediaObscureNotice(t), L = this.renderPoll(t, s), P = this.renderForwardedMessage(t);
    return null == o && null == c && null == _ && null == T && null == m && null == u && null == d && null == I && null == N && null == p && null == h && null == S && null == A && null == C && null == M && null == R && null != g && null == L && null == v && null == P ? null : (0, a.jsxs)("div", {
      id: (0, ey.getMessageAccessoriesId)(t),
      className: r()(e, eY.container),
      children: [P, C, L, o, u, d, M, c, f, _, x, T, p, S, A, g, E, m, I, N, l && this.renderSuppressConfirmModal(), i && this.renderRemoveAttachmentConfirmModal(), h, R, O, v]
    })
  }
  constructor(...e) {
    super(...e), eW(this, "state", {
      showSuppressModal: !1,
      showRemoveAttachmentModal: !1,
      attachmentToDelete: null
    }), eW(this, "getAcceptInviteContext", e => {
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
    }), eW(this, "renderEmbed", (e, t, n, s, l) => {
      let {
        gifAutoPlay: i,
        inlineEmbedMedia: r,
        canSuppressEmbeds: o,
        hasSpoilerEmbeds: u,
        shouldRedactExplicitContent: d,
        hasInlineForwardButton: c
      } = this.props, f = (0, eA.getObscureReasonForEmbed)(e, l, s, u, d);
      if (e.type === ek.MessageEmbedTypes.GIFT) return null;
      let E = (0, a.jsx)(ed.GIFAccessoryContext.Provider, {
        value: eX(e.url, e.image, e.video),
        children: (0, a.jsx)(eo.default, {
          className: eY.embedWrapper,
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
        className: eY.embedContainer,
        children: [E, (0, a.jsx)(P.default, {
          className: eV.hideIfMessageNotFocused,
          messageId: s,
          channelId: l,
          targetKind: "embed",
          embedIndex: t
        })]
      }) : E
    }), eW(this, "renderEmbedTitle", (e, t) => e.type === ek.MessageEmbedTypes.RICH ? w.default.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t), eW(this, "renderEmbedDescription", (e, t, n) => e.type === ek.MessageEmbedTypes.RICH ? w.default.parse(t, !0, {
      channelId: this.props.channel.id,
      allowLinks: !0,
      allowEmojiLinks: !0,
      allowList: this.props.showListsAndHeaders,
      allowHeading: !n && this.props.showListsAndHeaders,
      previewLinkTarget: this.props.showMaskedLinks
    }) : t), eW(this, "handleEmbedSuppressed", e => {
      let {
        channel: t,
        message: n
      } = this.props;
      e.shiftKey ? E.default.suppressEmbeds(t.id, n.id) : this.setState({
        showSuppressModal: !0
      })
    }), eW(this, "handleRemoveAttachment", e => {
      let t = e.originalItem;
      this.setState({
        showRemoveAttachmentModal: !0,
        attachmentToDelete: t
      })
    })
  }
}

function e$(e) {
  var t;
  let {
    channel: n,
    message: s,
    renderSuppressEmbeds: l,
    isMessageSnapshot: i
  } = e, r = (0, u.useStateFromStores)([es.default], () => es.default.getId()), o = en.InlineAttachmentMedia.useSetting(), d = en.InlineEmbedMedia.useSetting(), c = en.RenderEmbeds.useSetting() && !(0, eR.default)(e.message), f = en.RenderReactions.useSetting(), E = en.GifAutoPlay.useSetting(), _ = (0, u.useStateFromStores)([el.default], () => null == n.guild_id || el.default.canChatInGuild(n.guild_id), [n]), T = (0, u.useStateFromStores)([B.default], () => null != n.guild_id && B.default.isLurking(n.guild_id), [n]), m = (0, u.useStateFromStores)([ea.default], () => ea.default.isCurrentUserGuest(n.guild_id), [n]), I = (0, u.useStateFromStores)([ea.default, er.default], () => {
    var e, t;
    let s = er.default.getCurrentUser();
    return null !== (t = null != n.guild_id && null != s ? null === (e = ea.default.getMember(n.guild_id, s.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: N,
    canManageMessages: p
  } = (0, u.useStateFromStoresObject)([ei.default], () => ({
    canAddNewReactions: _ && ei.default.can(ek.Permissions.ADD_REACTIONS, n),
    canManageMessages: ei.default.can(ek.Permissions.MANAGE_MESSAGES, n)
  }), [_, n]), h = (0, D.useCurrentUserAutomodQuaratinedProfile)(n.guild_id), [, S] = (0, y.useCurrentUserCommunicationDisabled)(n.guild_id), C = (0, ee.useIsActiveChannelOrUnarchivableThread)(n), A = (r === s.author.id || p) && s.author.id !== ek.LOCAL_BOT_ID && !1 !== l && !(0, ep.hasFlag)(s.flags, ek.MessageFlags.EPHEMERAL) && C && 1 === (0, eM.default)(s), R = r === s.author.id && C && !i, O = s.author.id === r, L = s.isFirstMessageInForumPost(n), P = (0, eO.default)({
    channel: n,
    canChat: _,
    renderReactions: f,
    canAddNewReactions: N,
    isLurking: T,
    isGuest: m,
    communicationDisabled: S,
    isActiveChannelOrUnarchivableThread: C,
    isAutomodQuarantined: h
  }), U = (0, k.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()), j = (0, V.default)(null == n ? void 0 : n.id), b = (0, K.default)(s), G = (0, g.useShouldRedactExplicitContent)(n.id, s.author.id), F = (0, M.useShouldRenderReportFalsePositiveButton)(s.id), {
    hasInlineForwardButton: w
  } = v.MessageForwardingExperiment.useExperiment({
    location: "MessageAccessories"
  }), H = (0, x.useCanForwardMessage)(s) && w;
  return (0, a.jsx)(eJ, {
    canSuppressEmbeds: A,
    canDeleteAttachments: R,
    ...P,
    disableReactionReads: !!L || P.disableReactionReads,
    ...e,
    isLurking: T && _,
    isGuest: m && _,
    isPendingMember: I && _,
    isCurrentUser: O,
    inlineAttachmentMedia: o,
    inlineEmbedMedia: d,
    renderEmbeds: c,
    gifAutoPlay: E,
    canRenderReferralEmbed: n.isDM(),
    poll: b,
    showListsAndHeaders: U,
    showMaskedLinks: U,
    shouldHideMediaOptions: j,
    shouldRedactExplicitContent: G,
    shouldRenderCtaButton: F,
    hasInlineForwardButton: H
  })
}
eW(eJ, "defaultProps", {
  renderEmbeds: !0,
  compact: !1
});
let e0 = e => {
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
  } = e, c = en.InlineAttachmentMedia.useSetting(), f = en.InlineEmbedMedia.useSetting(), E = en.RenderEmbeds.useSetting(), _ = en.GifAutoPlay.useSetting(), T = (0, k.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), m = (0, V.default)(null == s ? void 0 : s.id), I = (0, g.useShouldRedactExplicitContent)(s.id, n.author.id), N = (0, M.useShouldRenderReportFalsePositiveButton)(n.id), p = (0, K.default)(n);
  return (0, a.jsx)(eJ, {
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
    showListsAndHeaders: T,
    showMaskedLinks: T,
    shouldHideMediaOptions: m,
    shouldRedactExplicitContent: I,
    shouldRenderCtaButton: N,
    hasInlineForwardButton: !1
  })
}