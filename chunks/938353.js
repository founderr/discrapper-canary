"use strict";
n.r(t), n.d(t, {
  MessageAccessories: function() {
    return eW
  },
  SimpleMessageAccessories: function() {
    return eQ
  },
  default: function() {
    return ez
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
  A = n("25610"),
  g = n("703751"),
  M = n("761538"),
  R = n("674611"),
  v = n("294734"),
  O = n("715903"),
  x = n("71619"),
  L = n("637618"),
  D = n("225890"),
  P = n("364097"),
  y = n("495129"),
  U = n("954654"),
  j = n("41776"),
  b = n("628238"),
  B = n("454585"),
  F = n("768494"),
  G = n("976853"),
  k = n("346013"),
  w = n("977683"),
  H = n("128435"),
  V = n("98278"),
  Y = n("614825"),
  K = n("265299"),
  W = n("699833"),
  z = n("344997"),
  Q = n("378233"),
  q = n("374425"),
  X = n("665906"),
  Z = n("432147"),
  J = n("695346"),
  $ = n("314897"),
  ee = n("271383"),
  et = n("607744"),
  en = n("496675"),
  es = n("594174"),
  ea = n("529815"),
  el = n("261922"),
  ei = n("941797"),
  er = n("52824"),
  eo = n("727779"),
  eu = n("310043"),
  ed = n("69750"),
  ec = n("592256"),
  ef = n("626135"),
  eE = n("70956"),
  e_ = n("408433"),
  em = n("630388"),
  eT = n("823379"),
  eI = n("709054"),
  ep = n("591759"),
  eh = n("169525"),
  eN = n("161010"),
  eS = n("901461"),
  eC = n("432376"),
  eA = n("384203"),
  eg = n("633957"),
  eM = n("29909"),
  eR = n("782658"),
  ev = n("219797"),
  eO = n("453687"),
  ex = n("128854"),
  eL = n("101578"),
  eD = n("524444"),
  eP = n("319323"),
  ey = n("920888"),
  eU = n("817384"),
  ej = n("981631"),
  eb = n("474936"),
  eB = n("689938"),
  eF = n("346661"),
  eG = n("680674");

function ek(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function ew() {
  return (0, a.jsxs)("div", {
    className: eF.nitroFileSizeUpsell,
    children: [(0, a.jsx)("img", {
      src: eG,
      className: eF.nitroBadgeSvg,
      alt: ""
    }), (0, a.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: eF.__invalid_nitroFileSizeUpsellText,
      children: eB.default.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, V.navigateToPremiumMarketingPage)()
      })
    })]
  })
}
let eH = 15 * eE.default.Millis.MINUTE,
  eV = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  eY = (e, t, n) => () => {
    let s = null != t ? t : n;
    if (null == s) return null;
    let {
      url: l,
      proxyURL: i,
      width: r,
      height: o
    } = s;
    return (0, a.jsx)(eM.default, {
      width: r,
      height: o,
      src: null != i && "" !== i ? i : l,
      url: null != e && "" !== e ? e : null != i && "" !== i ? i : l,
      format: null != n ? d.GIFType.VIDEO : d.GIFType.IMAGE,
      className: eF.gifFavoriteButton
    })
  },
  eK = e => () => {
    let {
      url: t,
      proxyUrl: n,
      width: s,
      height: l
    } = e;
    return null != s && null != l && el.IMAGE_GIF_RE.test(n) ? (0, a.jsx)(eM.default, {
      width: s,
      height: l,
      src: n,
      url: t,
      format: d.GIFType.IMAGE,
      className: eF.gifFavoriteButton
    }) : null
  };
class eW extends(s = l.Component) {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eV.has(e))
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
      className: eF.ctaButtonContainer,
      children: (0, a.jsx)(R.default, {
        messageId: e.id,
        channelId: t.id
      })
    }) : null
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
    let t = e.attachments.some(e => e.size > eb.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE);
    return (0, eN.shouldShowNitroUpsell)("attachment") && t ? (0, a.jsx)(ew, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: s
      } = t;
      if (n === N.CodedLinkType.INVITE) return this.shouldRenderInvite(s) ? (0, a.jsx)(eR.default, {
        code: s,
        author: e.author,
        getAcceptInviteContext: this.getAcceptInviteContext
      }, s) : null;
      if (n === N.CodedLinkType.TEMPLATE) return (0, a.jsx)(P.default, {
        code: s
      }, s);
      if (n === N.CodedLinkType.EVENT) return (0, a.jsx)(D.default, {
        code: s
      }, s);
      else if (n === N.CodedLinkType.CHANNEL_LINK) return (0, a.jsx)(eA.default, {
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
      else if (n === N.CodedLinkType.GUILD_PRODUCT) return (0, a.jsx)(L.default, {
        code: s
      }, s);
      else if (n === N.CodedLinkType.SERVER_SHOP) return (0, a.jsx)(S.default, {
        guildId: s
      }, s);
      else if (n === N.CodedLinkType.QUESTS_EMBED) return (0, a.jsx)(K.default, {
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
    } = e, o = es.default.getCurrentUser();
    return null != o && t.length > 0 ? t.map(e => (0, a.jsx)("div", {
      className: eF.giftCodeContainer,
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
      className: eF.referralContainer,
      children: (0, a.jsx)(Y.default, {
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
    return n ? null : (0, a.jsx)(ey.default, {
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
    let i = t.filter(e => null == e.flags || !(0, em.hasFlag)(e.flags, ej.MessageAttachmentFlags.IS_THUMBNAIL));
    if (0 === i.length) return null;
    let {
      gifAutoPlay: r,
      canDeleteAttachments: o,
      inlineAttachmentMedia: u,
      onMediaItemContextMenu: d,
      shouldHideMediaOptions: c
    } = this.props, f = i.map(e => (0, ec.carouselAssetFromAttachment)(e, c, l)).filter(eT.isNotNullish), E = {
      source: "Media Mosaic",
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }, _ = f.length > 1 ? (0, ec.createMediaOnClickOverrides)(f, E) : {}, m = (0, em.hasFlag)(n, ej.MessageFlags.IS_VOICE_MESSAGE);

    function T(e, t) {
      return (0, eh.getObscureReasonForAttachment)(e.originalItem, t)
    }
    let I = i.map(t => {
      let n = (0, F.messageAttachmentToUnfurledMediaItem)(t),
        a = {
          message: e,
          item: (0, ed.messageAttachmentToMosaicMediaItem)(t, u),
          autoPlayGif: r,
          canRemoveItem: o && (i.length > 1 || "" !== e.content),
          onRemoveItem: this.handleRemoveAttachment,
          className: eF.embedWrapper,
          getObscureReason: T,
          onContextMenu: null != d ? e => {
            e.stopPropagation(), e.preventDefault(), d(e, n)
          } : void 0,
          renderAudioComponent: m ? ev.VoiceMessageAudioComponentForMessageAttachment : ev.AudioComponentForMessageAttachment,
          renderImageComponent: ev.ImageComponentForMessageAttachment,
          renderVideoComponent: ev.VideoComponentForMessageAttachment,
          renderPlaintextFilePreview: ev.PlaintextFilePreviewForMessageAttachment,
          renderGenericFileComponent: ev.GenericFileComponentForMessageAttachment,
          renderMosaicItemFooter: ev.MosaicItemFooterForMessageAttachment,
          onPlay: (e, n, a) => {
            ef.default.track(ej.AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
              guild_id: s.guild_id,
              channel_id: s.id,
              channel_type: s.type,
              type: t.content_type,
              flags: t.flags,
              size: t.size,
              duration: a
            })
          },
          gifFavoriteButton: eK(n)
        },
        l = (0, er.getBestEffortSrcUrl)({
          proxyURL: t.proxy_url,
          url: t.url
        });
      return l in _ && (a.onClick = _[l]), a
    });
    return (0, a.jsx)(eu.default, {
      items: I
    })
  }
  renderEmbeds(e) {
    let {
      renderEmbeds: t
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map(t => {
      if (eU.EMBED_TYPES_WITH_SPECIAL_RENDERER.has(t.type) || (0, e_.isServerShopArticleEmbed)(t)) return null;
      let n = {
        renderImageComponent: eD.renderImageComponent,
        renderVideoComponent: eD.renderVideoComponent,
        renderLinkComponent: eD.renderMaskedLinkComponent
      };
      if (t.type === ej.MessageEmbedTypes.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let s = ep.default.safeParseWithQuery(t.url);
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
    return (0, a.jsx)(ex.MessageAccessoriesComponentContextProvider, {
      gifAutoPlay: t,
      getGifFavButton: eK,
      getOnMediaItemContextMenu: null == l ? void 0 : e => t => {
        t.stopPropagation(), t.preventDefault(), null == l || l(t, e)
      },
      shouldHideMediaOptions: s,
      shouldRedactExplicitContent: n,
      children: (0, a.jsx)(U.default, {
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
    return t.type !== ej.ChannelTypes.GUILD_ANNOUNCEMENT || (0, em.hasFlag)(e.flags, ej.MessageFlags.EPHEMERAL) || e.isPoll() ? null : (0, a.jsx)(h.default, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e, t) {
    return (0, em.hasFlag)(e.flags, ej.MessageFlags.EPHEMERAL) ? (0, a.jsx)(eo.default, {
      message: e,
      channel: t,
      onDeleteMessage: () => {
        E.default.dismissAutomatedMessage(e)
      }
    }) : null
  }
  renderStickersAccessories(e) {
    let t = (0, Q.getMessageStickers)(e),
      {
        channel: n,
        isInteracting: s
      } = this.props;
    return 0 === t.length ? null : t.map(e => (0, a.jsx)(q.default, {
      channel: n,
      isInteracting: s,
      renderableSticker: e
    }, e.id))
  }
  renderThreadAccessories(e) {
    if (e.hasFlag(ej.MessageFlags.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, a.jsx)(Z.default, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!!e.hasFlag(ej.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
      if (!(Date.now() - eI.default.extractTimestamp(e.id) >= eH)) return (0, a.jsx)("div", {
        className: eF.threadRoleMentionFailure,
        children: eB.default.Messages.THREAD_ROLE_MENTION_FAILURE
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
      header: eB.default.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: eB.default.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: eB.default.Messages.CANCEL,
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
        className: eF.confirmText,
        children: eB.default.Messages.SUPPRESS_EMBED_BODY
      }), (0, a.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: eB.default.Messages.SUPPRESS_EMBED_TIP
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
      header: eB.default.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: eB.default.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: eB.default.Messages.CANCEL,
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
        className: eF.confirmText,
        children: eB.default.Messages.REMOVE_ATTACHMENT_BODY
      })
    })
  }
  renderInteractionPremiumUpsell(e) {
    let t = e.applicationId;
    return e.type !== o.MessageTypes.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, a.jsx)(eP.default, {
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
    return null == t || null == n || (null == s ? void 0 : s.type) !== T.InteractionTypes.APPLICATION_COMMAND ? null : (0, a.jsx)(eg.default, {
      application: t,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== ej.MessageEmbedTypes.POST_PREVIEW || null == t.url ? [] : (0, a.jsx)(k.default, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === ej.MessageEmbedTypes.SAFETY_POLICY_NOTICE ? (0, a.jsx)(W.SafetyPolicyNotice, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === ej.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION ? (0, a.jsx)(z.SafetySystemNotification, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === ej.MessageEmbedTypes.VOICE_CHANNEL) return (0, a.jsx)(y.VoiceChannelInviteEmbed, {
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
    if (null != t) return (0, a.jsx)(H.default, {
      message: e,
      poll: t,
      className: eF.pollContainer
    })
  }
  renderForwardedMessage(e) {
    return 0 === e.messageSnapshots.length ? null : (0, a.jsx)(v.default, {
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
    } = this.state, o = this.renderCodedLinks(t), u = this.renderGiftCodes(t), d = this.renderReferralTrial(t), c = this.renderAttachments(t), f = this.renderCtaButton(), E = this.renderSocialProofingFileSizeNitroUpsell(t), _ = this.renderEmbeds(t), m = this.renderActivityInvite(t), T = this.renderReactions(t), I = this.renderPublishBump(t), p = this.renderEphemeralAccessories(t, n), h = this.renderStickersAccessories(t), N = this.renderThreadAccessories(t), S = this.renderComponentAccessories(t), C = this.renderThreadRoleMentionWarning(t), A = this.renderEmbeddedApplicationInstanceEmbed(t), g = this.renderInteractionPremiumUpsell(t), M = this.renderMediaPostEmbeds(t), R = this.renderSafetyPolicyNotice(t), v = this.renderSafetySystemNotification(t), O = this.renderVoiceChannelInvite(t, n), x = this.renderMediaObscureNotice(t), L = this.renderPoll(t, s), D = this.renderForwardedMessage(t);
    return null == o && null == c && null == _ && null == m && null == T && null == u && null == d && null == I && null == p && null == h && null == N && null == S && null == A && null == C && null == M && null == R && null != g && null == L && null == O && null == D ? null : (0, a.jsxs)("div", {
      id: (0, eO.getMessageAccessoriesId)(t),
      className: r()(e, eF.container),
      children: [D, C, L, o, u, d, M, c, f, _, x, m, h, S, A, g, E, T, I, p, l && this.renderSuppressConfirmModal(), i && this.renderRemoveAttachmentConfirmModal(), N, R, v, O]
    })
  }
  constructor(...e) {
    super(...e), ek(this, "state", {
      showSuppressModal: !1,
      showRemoveAttachmentModal: !1,
      attachmentToDelete: null
    }), ek(this, "getAcceptInviteContext", e => {
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
    }), ek(this, "renderEmbed", (e, t, n, s) => {
      let {
        gifAutoPlay: l,
        inlineEmbedMedia: i,
        canSuppressEmbeds: r,
        hasSpoilerEmbeds: o,
        shouldRedactExplicitContent: u
      } = this.props, d = (0, eh.getObscureReasonForEmbed)(e, s, n, o, u);
      return e.type === ej.MessageEmbedTypes.GIFT ? null : (0, a.jsx)(ei.GIFAccessoryContext.Provider, {
        value: eY(e.url, e.image, e.video),
        children: (0, a.jsx)(ea.default, {
          className: eF.embedWrapper,
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
    }), ek(this, "renderEmbedTitle", (e, t) => e.type === ej.MessageEmbedTypes.RICH ? B.default.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t), ek(this, "renderEmbedDescription", (e, t, n) => e.type === ej.MessageEmbedTypes.RICH ? B.default.parse(t, !0, {
      channelId: this.props.channel.id,
      allowLinks: !0,
      allowEmojiLinks: !0,
      allowList: this.props.showListsAndHeaders,
      allowHeading: !n && this.props.showListsAndHeaders,
      previewLinkTarget: this.props.showMaskedLinks
    }) : t), ek(this, "handleEmbedSuppressed", e => {
      let {
        channel: t,
        message: n
      } = this.props;
      e.shiftKey ? E.default.suppressEmbeds(t.id, n.id) : this.setState({
        showSuppressModal: !0
      })
    }), ek(this, "handleRemoveAttachment", e => {
      let t = e.originalItem;
      this.setState({
        showRemoveAttachmentModal: !0,
        attachmentToDelete: t
      })
    })
  }
}

function ez(e) {
  var t;
  let {
    channel: n,
    message: s,
    renderSuppressEmbeds: l
  } = e, i = (0, u.useStateFromStores)([$.default], () => $.default.getId()), r = J.InlineAttachmentMedia.useSetting(), o = J.InlineEmbedMedia.useSetting(), d = J.RenderEmbeds.useSetting() && !(0, eS.default)(e.message), c = J.RenderReactions.useSetting(), f = J.GifAutoPlay.useSetting(), E = (0, u.useStateFromStores)([et.default], () => null == n.guild_id || et.default.canChatInGuild(n.guild_id), [n]), _ = (0, u.useStateFromStores)([j.default], () => null != n.guild_id && j.default.isLurking(n.guild_id), [n]), m = (0, u.useStateFromStores)([ee.default], () => ee.default.isCurrentUserGuest(n.guild_id), [n]), T = (0, u.useStateFromStores)([ee.default, es.default], () => {
    var e, t;
    let s = es.default.getCurrentUser();
    return null !== (t = null != n.guild_id && null != s ? null === (e = ee.default.getMember(n.guild_id, s.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: I,
    canManageMessages: p
  } = (0, u.useStateFromStoresObject)([en.default], () => ({
    canAddNewReactions: E && en.default.can(ej.Permissions.ADD_REACTIONS, n),
    canManageMessages: en.default.can(ej.Permissions.MANAGE_MESSAGES, n)
  }), [E, n]), h = (0, O.useCurrentUserAutomodQuaratinedProfile)(n.guild_id), [, N] = (0, x.useCurrentUserCommunicationDisabled)(n.guild_id), S = (0, X.useIsActiveChannelOrUnarchivableThread)(n), C = (i === s.author.id || p) && s.author.id !== ej.LOCAL_BOT_ID && !1 !== l && !(0, em.hasFlag)(s.flags, ej.MessageFlags.EPHEMERAL) && S, M = i === s.author.id && S, R = s.author.id === i, v = s.isFirstMessageInForumPost(n), L = (0, eC.default)({
    channel: n,
    canChat: E,
    renderReactions: c,
    canAddNewReactions: I,
    isLurking: _,
    isGuest: m,
    communicationDisabled: N,
    isActiveChannelOrUnarchivableThread: S,
    isAutomodQuarantined: h
  }), D = (0, b.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()), P = (0, G.default)(null == n ? void 0 : n.id), y = (0, w.default)(s), U = (0, A.useShouldRedactExplicitContent)(n.id, s.author.id), B = (0, g.useShouldRenderReportFalsePositiveButton)(s.id);
  return (0, a.jsx)(eW, {
    canSuppressEmbeds: C,
    canDeleteAttachments: M,
    ...L,
    disableReactionReads: !!v || L.disableReactionReads,
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
    poll: y,
    showListsAndHeaders: D,
    showMaskedLinks: D,
    shouldHideMediaOptions: P,
    shouldRedactExplicitContent: U,
    shouldRenderCtaButton: B
  })
}
ek(eW, "defaultProps", {
  renderEmbeds: !0,
  compact: !1
});
let eQ = e => {
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
  } = e, c = J.InlineAttachmentMedia.useSetting(), f = J.InlineEmbedMedia.useSetting(), E = J.RenderEmbeds.useSetting(), _ = J.GifAutoPlay.useSetting(), m = (0, b.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), T = (0, G.default)(null == s ? void 0 : s.id), I = (0, A.useShouldRedactExplicitContent)(s.id, n.author.id), p = (0, g.useShouldRenderReportFalsePositiveButton)(n.id), h = (0, w.default)(n);
  return (0, a.jsx)(eW, {
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
    shouldRenderCtaButton: p
  })
}