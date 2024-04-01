"use strict";
n.r(t), n.d(t, {
  MessageAccessories: function() {
    return eF
  },
  SimpleMessageAccessories: function() {
    return eH
  },
  default: function() {
    return ew
  }
}), n("47120"), n("789020"), n("411104"), n("390547");
var s, a = n("735250"),
  l = n("470079"),
  i = n("803997"),
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
  R = n("71619"),
  L = n("637618"),
  v = n("225890"),
  P = n("364097"),
  D = n("495129"),
  x = n("954654"),
  y = n("41776"),
  U = n("628238"),
  j = n("454585"),
  b = n("976853"),
  G = n("346013"),
  B = n("977683"),
  k = n("128435"),
  F = n("98278"),
  w = n("614825"),
  H = n("265299"),
  V = n("699833"),
  Y = n("344997"),
  K = n("378233"),
  W = n("374425"),
  z = n("665906"),
  Q = n("432147"),
  Z = n("695346"),
  q = n("314897"),
  J = n("271383"),
  X = n("607744"),
  $ = n("496675"),
  ee = n("594174"),
  et = n("529815"),
  en = n("261922"),
  es = n("941797"),
  ea = n("52824"),
  el = n("727779"),
  ei = n("310043"),
  er = n("592256"),
  eo = n("626135"),
  eu = n("70956"),
  ed = n("408433"),
  ec = n("630388"),
  eE = n("823379"),
  ef = n("709054"),
  e_ = n("591759"),
  eT = n("169525"),
  eI = n("161010"),
  em = n("901461"),
  eN = n("432376"),
  ep = n("384203"),
  eS = n("575312"),
  eC = n("29909"),
  eA = n("782658"),
  eh = n("453687"),
  eg = n("101578"),
  eM = n("524444"),
  eO = n("319323"),
  eR = n("920888"),
  eL = n("981631"),
  ev = n("474936"),
  eP = n("689938"),
  eD = n("192174"),
  ex = n("680674");

function ey(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function eU() {
  return (0, a.jsxs)("div", {
    className: eD.nitroFileSizeUpsell,
    children: [(0, a.jsx)("img", {
      src: ex,
      className: eD.nitroBadgeSvg,
      alt: ""
    }), (0, a.jsx)(E.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: eD.__invalid_nitroFileSizeUpsellText,
      children: eP.default.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, F.navigateToPremiumMarketingPage)()
      })
    })]
  })
}
let ej = new Set([eL.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, eL.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, eL.MessageEmbedTypes.APPLICATION_NEWS, eL.MessageEmbedTypes.POST_PREVIEW, eL.MessageEmbedTypes.SAFETY_POLICY_NOTICE, eL.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, eL.MessageEmbedTypes.VOICE_CHANNEL]),
  eb = 15 * eu.default.Millis.MINUTE,
  eG = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  eB = (e, t, n) => () => {
    let s = null != t ? t : n;
    if (null == s) return null;
    let {
      url: l,
      proxyURL: i,
      width: r,
      height: o
    } = s;
    return (0, a.jsx)(eC.default, {
      width: r,
      height: o,
      src: null != i && "" !== i ? i : l,
      url: null != e && "" !== e ? e : null != i && "" !== i ? i : l,
      format: null != n ? d.GIFType.VIDEO : d.GIFType.IMAGE,
      className: eD.gifFavoriteButton
    })
  },
  ek = e => () => {
    let {
      proxy_url: t,
      width: n,
      height: s
    } = e;
    return en.IMAGE_GIF_RE.test(e.filename) && null != n && null != s ? (0, a.jsx)(eC.default, {
      width: n,
      height: s,
      src: t,
      url: t,
      format: d.GIFType.IMAGE,
      className: eD.gifFavoriteButton
    }) : null
  };
class eF extends(s = l.Component) {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eG.has(e))
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
      className: eD.ctaButtonContainer,
      children: (0, a.jsx)(O.default, {
        messageId: e.id,
        channelId: t.id
      })
    }) : null
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
    let t = e.attachments.some(e => e.size > ev.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE);
    return (0, eI.shouldShowNitroUpsell)("attachment") && t ? (0, a.jsx)(eU, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: s
      } = t;
      if (n === S.CodedLinkType.INVITE) return this.shouldRenderInvite(s) ? (0, a.jsx)(eA.default, {
        code: s,
        author: e.author,
        getAcceptInviteContext: this.getAcceptInviteContext
      }, s) : null;
      if (n === S.CodedLinkType.TEMPLATE) return (0, a.jsx)(P.default, {
        code: s
      }, s);
      if (n === S.CodedLinkType.EVENT) return (0, a.jsx)(v.default, {
        code: s
      }, s);
      else if (n === S.CodedLinkType.CHANNEL_LINK) return (0, a.jsx)(ep.default, {
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
      else if (n === S.CodedLinkType.QUESTS_EMBED) return (0, a.jsx)(H.default, {
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
    } = e, o = ee.default.getCurrentUser();
    return null != o && t.length > 0 ? t.map(e => (0, a.jsx)("div", {
      className: eD.giftCodeContainer,
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
      className: eD.referralContainer,
      children: (0, a.jsx)(w.default, {
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
    return n ? null : (0, a.jsx)(eR.default, {
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
    if (0 === t.length || e.isPoll()) return null;
    let i = t.filter(e => null == e.flags || !(0, ec.hasFlag)(e.flags, eL.MessageAttachmentFlags.IS_THUMBNAIL));
    if (0 === i.length) return null;
    let {
      gifAutoPlay: r,
      canDeleteAttachments: o,
      inlineAttachmentMedia: u,
      onAttachmentContextMenu: d,
      shouldHideMediaOptions: c
    } = this.props, E = i.map(e => (0, er.carouselAssetFromAttachment)(e, c, l)).filter(eE.isNotNullish), f = {
      source: "Media Mosaic",
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }, _ = E.length > 1 ? (0, er.createMediaOnClickOverrides)(E, f) : {}, T = (0, ec.hasFlag)(n, eL.MessageFlags.IS_VOICE_MESSAGE), I = i.map(t => {
      let n = {
          message: e,
          attachment: t,
          autoPlayGif: r,
          canRemoveAttachment: o && (i.length > 1 || "" !== e.content),
          className: eD.embedWrapper,
          inlineMedia: u,
          onContextMenu: null != d ? e => {
            e.stopPropagation(), e.preventDefault(), d(e, t)
          } : void 0,
          onRemoveAttachment: this.handleRemoveAttachment,
          renderAudioComponent: T ? eM.renderVoiceMessageAudioComponent : eM.renderAudioComponent,
          renderImageComponent: eM.renderImageComponent,
          renderPlaintextFilePreview: eM.renderPlaintextFilePreview,
          renderVideoComponent: eM.renderVideoComponent,
          onPlay: (e, n, a) => {
            eo.default.track(eL.AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
              guild_id: s.guild_id,
              channel_id: s.id,
              channel_type: s.type,
              type: t.content_type,
              flags: t.flags,
              size: t.size,
              duration: a
            })
          },
          gifFavoriteButton: ek(t)
        },
        a = (0, ea.getBestEffortSrcUrl)({
          proxyURL: t.proxy_url,
          url: t.url
        });
      return a in _ && (n.onClick = _[a]), n
    });
    return (0, a.jsx)(ei.default, {
      attachments: I
    })
  }
  renderEmbeds(e) {
    let {
      renderEmbeds: t
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map(t => {
      if (ej.has(t.type) || (0, ed.isServerShopArticleEmbed)(t)) return null;
      let n = {
        renderImageComponent: eM.renderImageComponent,
        renderVideoComponent: eM.renderVideoComponent,
        renderLinkComponent: eM.renderMaskedLinkComponent
      };
      if (t.type === eL.MessageEmbedTypes.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let s = e_.default.safeParseWithQuery(t.url);
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
    return null == e.components || 0 === e.components.length || !1 === this.props.renderComponentAccessory ? null : (0, a.jsx)(x.default, {
      message: e
    })
  }
  renderActivityInvite(e) {
    if (null == e.activity) return null;
    let {
      channel: t
    } = this.props;
    return (0, a.jsx)(eg.default, {
      channel: t,
      message: e,
      hideParty: !1
    })
  }
  renderPublishBump(e) {
    let {
      channel: t
    } = this.props;
    return t.type !== eL.ChannelTypes.GUILD_ANNOUNCEMENT || (0, ec.hasFlag)(e.flags, eL.MessageFlags.EPHEMERAL) ? null : (0, a.jsx)(p.default, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e, t) {
    return (0, ec.hasFlag)(e.flags, eL.MessageFlags.EPHEMERAL) ? (0, a.jsx)(el.default, {
      message: e,
      channel: t,
      onDeleteMessage: () => {
        f.default.dismissAutomatedMessage(e)
      }
    }) : null
  }
  renderStickersAccessories(e) {
    let t = (0, K.getMessageStickers)(e),
      {
        channel: n,
        isInteracting: s
      } = this.props;
    return 0 === t.length ? null : t.map(e => (0, a.jsx)(W.default, {
      channel: n,
      isInteracting: s,
      renderableSticker: e
    }, e.id))
  }
  renderThreadAccessories(e) {
    if (e.hasFlag(eL.MessageFlags.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, a.jsx)(Q.default, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!!e.hasFlag(eL.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
      if (!(Date.now() - ef.default.extractTimestamp(e.id) >= eb)) return (0, a.jsx)("div", {
        className: eD.threadRoleMentionFailure,
        children: eP.default.Messages.THREAD_ROLE_MENTION_FAILURE
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
      header: eP.default.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: eP.default.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: eP.default.Messages.CANCEL,
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
        className: eD.confirmText,
        children: eP.default.Messages.SUPPRESS_EMBED_BODY
      }), (0, a.jsx)(E.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: eP.default.Messages.SUPPRESS_EMBED_TIP
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
      header: eP.default.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: eP.default.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: eP.default.Messages.CANCEL,
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
        className: eD.confirmText,
        children: eP.default.Messages.REMOVE_ATTACHMENT_BODY
      })
    })
  }
  renderInteractionPremiumUpsell(e) {
    let t = e.applicationId;
    return e.type !== o.MessageTypes.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, a.jsx)(eO.default, {
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
    return null == t || null == n || (null == s ? void 0 : s.type) !== I.InteractionTypes.APPLICATION_COMMAND ? null : (0, a.jsx)(eS.default, {
      application: t,
      activityInstance: n,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== eL.MessageEmbedTypes.POST_PREVIEW || null == t.url ? [] : (0, a.jsx)(G.default, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eL.MessageEmbedTypes.SAFETY_POLICY_NOTICE ? (0, a.jsx)(V.SafetyPolicyNotice, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eL.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION ? (0, a.jsx)(Y.SafetySystemNotification, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === eL.MessageEmbedTypes.VOICE_CHANNEL) return (0, a.jsx)(D.VoiceChannelInviteEmbed, {
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
    if (null != t) return (0, a.jsx)(k.default, {
      message: e,
      poll: t,
      className: eD.pollContainer
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
    } = this.state, o = this.renderCodedLinks(t), u = this.renderGiftCodes(t), d = this.renderReferralTrial(t), c = this.renderAttachments(t), E = this.renderCtaButton(), f = this.renderSocialProofingFileSizeNitroUpsell(t), _ = this.renderEmbeds(t), T = this.renderActivityInvite(t), I = this.renderReactions(t), m = this.renderPublishBump(t), N = this.renderEphemeralAccessories(t, n), p = this.renderStickersAccessories(t), S = this.renderThreadAccessories(t), C = this.renderComponentAccessories(t), A = this.renderThreadRoleMentionWarning(t), h = this.renderEmbeddedApplicationInstanceEmbed(t), g = this.renderInteractionPremiumUpsell(t), M = this.renderMediaPostEmbeds(t), O = this.renderSafetyPolicyNotice(t), R = this.renderSafetySystemNotification(t), L = this.renderVoiceChannelInvite(t, n), v = this.renderMediaObscureNotice(t), P = this.renderPoll(t, s);
    return null == o && null == c && null == _ && null == T && null == I && null == u && null == d && null == m && null == N && null == p && null == S && null == C && null == h && null == A && null == M && null == O && null != g && null == P && null == L ? null : (0, a.jsxs)("div", {
      id: (0, eh.getMessageAccessoriesId)(t),
      className: r()(e, eD.container),
      children: [A, P, o, u, d, M, c, E, _, v, T, p, C, h, g, f, I, m, N, l && this.renderSuppressConfirmModal(), i && this.renderRemoveAttachmentConfirmModal(), S, O, R, L]
    })
  }
  constructor(...e) {
    super(...e), ey(this, "state", {
      showSuppressModal: !1,
      showRemoveAttachmentModal: !1,
      attachmentToDelete: null
    }), ey(this, "getAcceptInviteContext", e => {
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
    }), ey(this, "renderEmbed", (e, t, n, s) => {
      let {
        gifAutoPlay: l,
        inlineEmbedMedia: i,
        canSuppressEmbeds: r,
        hasSpoilerEmbeds: o,
        shouldRedactExplicitContent: u
      } = this.props, d = (0, eT.getObscureReasonForEmbed)(e, s, n, o, u);
      return e.type === eL.MessageEmbedTypes.GIFT ? null : (0, a.jsx)(es.GIFAccessoryContext.Provider, {
        value: eB(e.url, e.image, e.video),
        children: (0, a.jsx)(et.default, {
          className: eD.embedWrapper,
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
    }), ey(this, "renderEmbedTitle", (e, t) => e.type === eL.MessageEmbedTypes.RICH ? j.default.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t), ey(this, "renderEmbedDescription", (e, t, n) => e.type === eL.MessageEmbedTypes.RICH ? j.default.parse(t, !0, {
      channelId: this.props.channel.id,
      allowLinks: !0,
      allowEmojiLinks: !0,
      allowList: this.props.showListsAndHeaders,
      allowHeading: !n && this.props.showListsAndHeaders,
      previewLinkTarget: this.props.showMaskedLinks
    }) : t), ey(this, "handleEmbedSuppressed", e => {
      let {
        channel: t,
        message: n
      } = this.props;
      e.shiftKey ? f.default.suppressEmbeds(t.id, n.id) : this.setState({
        showSuppressModal: !0
      })
    }), ey(this, "handleRemoveAttachment", e => {
      this.setState({
        showRemoveAttachmentModal: !0,
        attachmentToDelete: e
      })
    })
  }
}

function ew(e) {
  var t;
  let {
    channel: n,
    message: s,
    renderSuppressEmbeds: l
  } = e, i = (0, u.useStateFromStores)([q.default], () => q.default.getId()), r = Z.InlineAttachmentMedia.useSetting(), o = Z.InlineEmbedMedia.useSetting(), d = Z.RenderEmbeds.useSetting() && !(0, em.default)(e.message), c = Z.RenderReactions.useSetting(), E = Z.GifAutoPlay.useSetting(), f = (0, u.useStateFromStores)([X.default], () => null == n.guild_id || X.default.canChatInGuild(n.guild_id), [n]), _ = (0, u.useStateFromStores)([y.default], () => null != n.guild_id && y.default.isLurking(n.guild_id), [n]), T = (0, u.useStateFromStores)([J.default], () => J.default.isCurrentUserGuest(n.guild_id), [n]), I = (0, u.useStateFromStores)([J.default, ee.default], () => {
    var e, t;
    let s = ee.default.getCurrentUser();
    return null !== (t = null != n.guild_id && null != s ? null === (e = J.default.getMember(n.guild_id, s.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: m,
    canManageMessages: N
  } = (0, u.useStateFromStoresObject)([$.default], () => ({
    canAddNewReactions: f && $.default.can(eL.Permissions.ADD_REACTIONS, n),
    canManageMessages: $.default.can(eL.Permissions.MANAGE_MESSAGES, n)
  }), [f, n]), [, p] = (0, R.useCurrentUserCommunicationDisabled)(n.guild_id), S = (0, z.useIsActiveChannelOrUnarchivableThread)(n), C = (i === s.author.id || N) && s.author.id !== eL.LOCAL_BOT_ID && !1 !== l && !(0, ec.hasFlag)(s.flags, eL.MessageFlags.EPHEMERAL) && S, A = i === s.author.id && S, M = s.author.id === i, O = s.isFirstMessageInForumPost(n), L = (0, eN.default)({
    channel: n,
    canChat: f,
    renderReactions: c,
    canAddNewReactions: m,
    isLurking: _,
    isGuest: T,
    communicationDisabled: p,
    isActiveChannelOrUnarchivableThread: S
  }), v = (0, U.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()), P = (0, b.default)(null == n ? void 0 : n.id), D = (0, B.default)(s), x = (0, h.useShouldRedactExplicitContent)(n.id, s.author.id), j = (0, g.useShouldRenderReportFalsePositiveButton)(s.id);
  return (0, a.jsx)(eF, {
    canSuppressEmbeds: C,
    canDeleteAttachments: A,
    ...L,
    disableReactionReads: !!O || L.disableReactionReads,
    ...e,
    isLurking: _ && f,
    isGuest: T && f,
    isPendingMember: I && f,
    isCurrentUser: M,
    inlineAttachmentMedia: r,
    inlineEmbedMedia: o,
    renderEmbeds: d,
    gifAutoPlay: E,
    canRenderReferralEmbed: n.isDM(),
    poll: D,
    showListsAndHeaders: v,
    showMaskedLinks: v,
    shouldHideMediaOptions: P,
    shouldRedactExplicitContent: x,
    shouldRenderCtaButton: j
  })
}
ey(eF, "defaultProps", {
  renderEmbeds: !0,
  compact: !1
});
let eH = e => {
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
  } = e, c = Z.InlineAttachmentMedia.useSetting(), E = Z.InlineEmbedMedia.useSetting(), f = Z.RenderEmbeds.useSetting(), _ = Z.GifAutoPlay.useSetting(), T = (0, U.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), I = (0, b.default)(null == s ? void 0 : s.id), m = (0, h.useShouldRedactExplicitContent)(s.id, n.author.id), N = (0, g.useShouldRenderReportFalsePositiveButton)(n.id), p = (0, B.default)(n);
  return (0, a.jsx)(eF, {
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