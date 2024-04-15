"use strict";
n.r(t), n.d(t, {
  MessageAccessories: function() {
    return ew
  },
  SimpleMessageAccessories: function() {
    return eV
  },
  default: function() {
    return eH
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
  O = n("715903"),
  v = n("71619"),
  L = n("637618"),
  x = n("225890"),
  D = n("364097"),
  P = n("495129"),
  y = n("954654"),
  U = n("41776"),
  b = n("628238"),
  j = n("454585"),
  G = n("976853"),
  B = n("346013"),
  F = n("977683"),
  k = n("128435"),
  w = n("98278"),
  H = n("614825"),
  V = n("265299"),
  Y = n("699833"),
  K = n("344997"),
  W = n("378233"),
  z = n("374425"),
  Q = n("665906"),
  q = n("432147"),
  J = n("695346"),
  Z = n("314897"),
  X = n("271383"),
  $ = n("607744"),
  ee = n("496675"),
  et = n("594174"),
  en = n("529815"),
  es = n("261922"),
  ea = n("941797"),
  el = n("52824"),
  ei = n("727779"),
  er = n("310043"),
  eo = n("592256"),
  eu = n("626135"),
  ed = n("70956"),
  ec = n("408433"),
  ef = n("630388"),
  eE = n("823379"),
  e_ = n("709054"),
  em = n("591759"),
  eT = n("169525"),
  eI = n("161010"),
  ep = n("901461"),
  eh = n("432376"),
  eN = n("384203"),
  eS = n("633957"),
  eC = n("29909"),
  eA = n("782658"),
  eg = n("453687"),
  eM = n("101578"),
  eR = n("524444"),
  eO = n("319323"),
  ev = n("920888"),
  eL = n("981631"),
  ex = n("474936"),
  eD = n("689938"),
  eP = n("192174"),
  ey = n("680674");

function eU(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function eb() {
  return (0, a.jsxs)("div", {
    className: eP.nitroFileSizeUpsell,
    children: [(0, a.jsx)("img", {
      src: ey,
      className: eP.nitroBadgeSvg,
      alt: ""
    }), (0, a.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: eP.__invalid_nitroFileSizeUpsellText,
      children: eD.default.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, w.navigateToPremiumMarketingPage)()
      })
    })]
  })
}
let ej = new Set([eL.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, eL.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, eL.MessageEmbedTypes.APPLICATION_NEWS, eL.MessageEmbedTypes.POST_PREVIEW, eL.MessageEmbedTypes.SAFETY_POLICY_NOTICE, eL.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, eL.MessageEmbedTypes.VOICE_CHANNEL]),
  eG = 15 * ed.default.Millis.MINUTE,
  eB = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  eF = (e, t, n) => () => {
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
      className: eP.gifFavoriteButton
    })
  },
  ek = e => () => {
    let {
      proxy_url: t,
      width: n,
      height: s
    } = e;
    return es.IMAGE_GIF_RE.test(e.filename) && null != n && null != s ? (0, a.jsx)(eC.default, {
      width: n,
      height: s,
      src: t,
      url: t,
      format: d.GIFType.IMAGE,
      className: eP.gifFavoriteButton
    }) : null
  };
class ew extends(s = l.Component) {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eB.has(e))
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
      className: eP.ctaButtonContainer,
      children: (0, a.jsx)(R.default, {
        messageId: e.id,
        channelId: t.id
      })
    }) : null
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
    let t = e.attachments.some(e => e.size > ex.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE);
    return (0, eI.shouldShowNitroUpsell)("attachment") && t ? (0, a.jsx)(eb, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: s
      } = t;
      if (n === N.CodedLinkType.INVITE) return this.shouldRenderInvite(s) ? (0, a.jsx)(eA.default, {
        code: s,
        author: e.author,
        getAcceptInviteContext: this.getAcceptInviteContext
      }, s) : null;
      if (n === N.CodedLinkType.TEMPLATE) return (0, a.jsx)(D.default, {
        code: s
      }, s);
      if (n === N.CodedLinkType.EVENT) return (0, a.jsx)(x.default, {
        code: s
      }, s);
      else if (n === N.CodedLinkType.CHANNEL_LINK) return (0, a.jsx)(eN.default, {
        code: s,
        messageData: e
      }, s);
      else if (n === N.CodedLinkType.APP_DIRECTORY_PROFILE) return (0, a.jsx)(p.default, {
        code: s,
        message: e
      }, s);
      else if (n === N.CodedLinkType.CLYDE_PROFILE) return;
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
      else if (n === N.CodedLinkType.QUESTS_EMBED) return (0, a.jsx)(V.default, {
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
    } = e, o = et.default.getCurrentUser();
    return null != o && t.length > 0 ? t.map(e => (0, a.jsx)("div", {
      className: eP.giftCodeContainer,
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
      className: eP.referralContainer,
      children: (0, a.jsx)(H.default, {
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
    return n ? null : (0, a.jsx)(ev.default, {
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
    let i = t.filter(e => null == e.flags || !(0, ef.hasFlag)(e.flags, eL.MessageAttachmentFlags.IS_THUMBNAIL));
    if (0 === i.length) return null;
    let {
      gifAutoPlay: r,
      canDeleteAttachments: o,
      inlineAttachmentMedia: u,
      onAttachmentContextMenu: d,
      shouldHideMediaOptions: c
    } = this.props, f = i.map(e => (0, eo.carouselAssetFromAttachment)(e, c, l)).filter(eE.isNotNullish), E = {
      source: "Media Mosaic",
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }, _ = f.length > 1 ? (0, eo.createMediaOnClickOverrides)(f, E) : {}, m = (0, ef.hasFlag)(n, eL.MessageFlags.IS_VOICE_MESSAGE), T = i.map(t => {
      let n = {
          message: e,
          attachment: t,
          autoPlayGif: r,
          canRemoveAttachment: o && (i.length > 1 || "" !== e.content),
          className: eP.embedWrapper,
          inlineMedia: u,
          onContextMenu: null != d ? e => {
            e.stopPropagation(), e.preventDefault(), d(e, t)
          } : void 0,
          onRemoveAttachment: this.handleRemoveAttachment,
          renderAudioComponent: m ? eR.renderVoiceMessageAudioComponent : eR.renderAudioComponent,
          renderImageComponent: eR.renderImageComponent,
          renderPlaintextFilePreview: eR.renderPlaintextFilePreview,
          renderVideoComponent: eR.renderVideoComponent,
          onPlay: (e, n, a) => {
            eu.default.track(eL.AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
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
        a = (0, el.getBestEffortSrcUrl)({
          proxyURL: t.proxy_url,
          url: t.url
        });
      return a in _ && (n.onClick = _[a]), n
    });
    return (0, a.jsx)(er.default, {
      attachments: T
    })
  }
  renderEmbeds(e) {
    let {
      renderEmbeds: t
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map(t => {
      if (ej.has(t.type) || (0, ec.isServerShopArticleEmbed)(t)) return null;
      let n = {
        renderImageComponent: eR.renderImageComponent,
        renderVideoComponent: eR.renderVideoComponent,
        renderLinkComponent: eR.renderMaskedLinkComponent
      };
      if (t.type === eL.MessageEmbedTypes.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let s = em.default.safeParseWithQuery(t.url);
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
    return null == e.components || 0 === e.components.length || !1 === this.props.renderComponentAccessory ? null : (0, a.jsx)(y.default, {
      message: e
    })
  }
  renderActivityInvite(e) {
    if (null == e.activity) return null;
    let {
      channel: t
    } = this.props;
    return (0, a.jsx)(eM.default, {
      channel: t,
      message: e,
      hideParty: !1
    })
  }
  renderPublishBump(e) {
    let {
      channel: t
    } = this.props;
    return t.type !== eL.ChannelTypes.GUILD_ANNOUNCEMENT || (0, ef.hasFlag)(e.flags, eL.MessageFlags.EPHEMERAL) || e.isPoll() ? null : (0, a.jsx)(h.default, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e, t) {
    return (0, ef.hasFlag)(e.flags, eL.MessageFlags.EPHEMERAL) ? (0, a.jsx)(ei.default, {
      message: e,
      channel: t,
      onDeleteMessage: () => {
        E.default.dismissAutomatedMessage(e)
      }
    }) : null
  }
  renderStickersAccessories(e) {
    let t = (0, W.getMessageStickers)(e),
      {
        channel: n,
        isInteracting: s
      } = this.props;
    return 0 === t.length ? null : t.map(e => (0, a.jsx)(z.default, {
      channel: n,
      isInteracting: s,
      renderableSticker: e
    }, e.id))
  }
  renderThreadAccessories(e) {
    if (e.hasFlag(eL.MessageFlags.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, a.jsx)(q.default, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!!e.hasFlag(eL.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
      if (!(Date.now() - e_.default.extractTimestamp(e.id) >= eG)) return (0, a.jsx)("div", {
        className: eP.threadRoleMentionFailure,
        children: eD.default.Messages.THREAD_ROLE_MENTION_FAILURE
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
      header: eD.default.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: eD.default.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: eD.default.Messages.CANCEL,
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
        className: eP.confirmText,
        children: eD.default.Messages.SUPPRESS_EMBED_BODY
      }), (0, a.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: eD.default.Messages.SUPPRESS_EMBED_TIP
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
      header: eD.default.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: eD.default.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: eD.default.Messages.CANCEL,
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
        className: eP.confirmText,
        children: eD.default.Messages.REMOVE_ATTACHMENT_BODY
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
    return null == t || null == n || (null == s ? void 0 : s.type) !== T.InteractionTypes.APPLICATION_COMMAND ? null : (0, a.jsx)(eS.default, {
      application: t,
      activityInstance: n,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== eL.MessageEmbedTypes.POST_PREVIEW || null == t.url ? [] : (0, a.jsx)(B.default, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eL.MessageEmbedTypes.SAFETY_POLICY_NOTICE ? (0, a.jsx)(Y.SafetyPolicyNotice, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eL.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION ? (0, a.jsx)(K.SafetySystemNotification, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === eL.MessageEmbedTypes.VOICE_CHANNEL) return (0, a.jsx)(P.VoiceChannelInviteEmbed, {
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
    if (null != t) return (0, a.jsx)(k.default, {
      message: e,
      poll: t,
      className: eP.pollContainer
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
    } = this.state, o = this.renderCodedLinks(t), u = this.renderGiftCodes(t), d = this.renderReferralTrial(t), c = this.renderAttachments(t), f = this.renderCtaButton(), E = this.renderSocialProofingFileSizeNitroUpsell(t), _ = this.renderEmbeds(t), m = this.renderActivityInvite(t), T = this.renderReactions(t), I = this.renderPublishBump(t), p = this.renderEphemeralAccessories(t, n), h = this.renderStickersAccessories(t), N = this.renderThreadAccessories(t), S = this.renderComponentAccessories(t), C = this.renderThreadRoleMentionWarning(t), A = this.renderEmbeddedApplicationInstanceEmbed(t), g = this.renderInteractionPremiumUpsell(t), M = this.renderMediaPostEmbeds(t), R = this.renderSafetyPolicyNotice(t), O = this.renderSafetySystemNotification(t), v = this.renderVoiceChannelInvite(t, n), L = this.renderMediaObscureNotice(t), x = this.renderPoll(t, s);
    return null == o && null == c && null == _ && null == m && null == T && null == u && null == d && null == I && null == p && null == h && null == N && null == S && null == A && null == C && null == M && null == R && null != g && null == x && null == v ? null : (0, a.jsxs)("div", {
      id: (0, eg.getMessageAccessoriesId)(t),
      className: r()(e, eP.container),
      children: [C, x, o, u, d, M, c, f, _, L, m, h, S, A, g, E, T, I, p, l && this.renderSuppressConfirmModal(), i && this.renderRemoveAttachmentConfirmModal(), N, R, O, v]
    })
  }
  constructor(...e) {
    super(...e), eU(this, "state", {
      showSuppressModal: !1,
      showRemoveAttachmentModal: !1,
      attachmentToDelete: null
    }), eU(this, "getAcceptInviteContext", e => {
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
    }), eU(this, "renderEmbed", (e, t, n, s) => {
      let {
        gifAutoPlay: l,
        inlineEmbedMedia: i,
        canSuppressEmbeds: r,
        hasSpoilerEmbeds: o,
        shouldRedactExplicitContent: u
      } = this.props, d = (0, eT.getObscureReasonForEmbed)(e, s, n, o, u);
      return e.type === eL.MessageEmbedTypes.GIFT ? null : (0, a.jsx)(ea.GIFAccessoryContext.Provider, {
        value: eF(e.url, e.image, e.video),
        children: (0, a.jsx)(en.default, {
          className: eP.embedWrapper,
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
    }), eU(this, "renderEmbedTitle", (e, t) => e.type === eL.MessageEmbedTypes.RICH ? j.default.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t), eU(this, "renderEmbedDescription", (e, t, n) => e.type === eL.MessageEmbedTypes.RICH ? j.default.parse(t, !0, {
      channelId: this.props.channel.id,
      allowLinks: !0,
      allowEmojiLinks: !0,
      allowList: this.props.showListsAndHeaders,
      allowHeading: !n && this.props.showListsAndHeaders,
      previewLinkTarget: this.props.showMaskedLinks
    }) : t), eU(this, "handleEmbedSuppressed", e => {
      let {
        channel: t,
        message: n
      } = this.props;
      e.shiftKey ? E.default.suppressEmbeds(t.id, n.id) : this.setState({
        showSuppressModal: !0
      })
    }), eU(this, "handleRemoveAttachment", e => {
      this.setState({
        showRemoveAttachmentModal: !0,
        attachmentToDelete: e
      })
    })
  }
}

function eH(e) {
  var t;
  let {
    channel: n,
    message: s,
    renderSuppressEmbeds: l
  } = e, i = (0, u.useStateFromStores)([Z.default], () => Z.default.getId()), r = J.InlineAttachmentMedia.useSetting(), o = J.InlineEmbedMedia.useSetting(), d = J.RenderEmbeds.useSetting() && !(0, ep.default)(e.message), c = J.RenderReactions.useSetting(), f = J.GifAutoPlay.useSetting(), E = (0, u.useStateFromStores)([$.default], () => null == n.guild_id || $.default.canChatInGuild(n.guild_id), [n]), _ = (0, u.useStateFromStores)([U.default], () => null != n.guild_id && U.default.isLurking(n.guild_id), [n]), m = (0, u.useStateFromStores)([X.default], () => X.default.isCurrentUserGuest(n.guild_id), [n]), T = (0, u.useStateFromStores)([X.default, et.default], () => {
    var e, t;
    let s = et.default.getCurrentUser();
    return null !== (t = null != n.guild_id && null != s ? null === (e = X.default.getMember(n.guild_id, s.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: I,
    canManageMessages: p
  } = (0, u.useStateFromStoresObject)([ee.default], () => ({
    canAddNewReactions: E && ee.default.can(eL.Permissions.ADD_REACTIONS, n),
    canManageMessages: ee.default.can(eL.Permissions.MANAGE_MESSAGES, n)
  }), [E, n]), h = (0, O.useCurrentUserAutomodQuaratinedProfile)(n.guild_id), [, N] = (0, v.useCurrentUserCommunicationDisabled)(n.guild_id), S = (0, Q.useIsActiveChannelOrUnarchivableThread)(n), C = (i === s.author.id || p) && s.author.id !== eL.LOCAL_BOT_ID && !1 !== l && !(0, ef.hasFlag)(s.flags, eL.MessageFlags.EPHEMERAL) && S, M = i === s.author.id && S, R = s.author.id === i, L = s.isFirstMessageInForumPost(n), x = (0, eh.default)({
    channel: n,
    canChat: E,
    renderReactions: c,
    canAddNewReactions: I,
    isLurking: _,
    isGuest: m,
    communicationDisabled: N,
    isActiveChannelOrUnarchivableThread: S,
    isAutomodQuarantined: h
  }), D = (0, b.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()), P = (0, G.default)(null == n ? void 0 : n.id), y = (0, F.default)(s), j = (0, A.useShouldRedactExplicitContent)(n.id, s.author.id), B = (0, g.useShouldRenderReportFalsePositiveButton)(s.id);
  return (0, a.jsx)(ew, {
    canSuppressEmbeds: C,
    canDeleteAttachments: M,
    ...x,
    disableReactionReads: !!L || x.disableReactionReads,
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
    shouldRedactExplicitContent: j,
    shouldRenderCtaButton: B
  })
}
eU(ew, "defaultProps", {
  renderEmbeds: !0,
  compact: !1
});
let eV = e => {
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
  } = e, c = J.InlineAttachmentMedia.useSetting(), f = J.InlineEmbedMedia.useSetting(), E = J.RenderEmbeds.useSetting(), _ = J.GifAutoPlay.useSetting(), m = (0, b.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), T = (0, G.default)(null == s ? void 0 : s.id), I = (0, A.useShouldRedactExplicitContent)(s.id, n.author.id), p = (0, g.useShouldRenderReportFalsePositiveButton)(n.id), h = (0, F.default)(n);
  return (0, a.jsx)(ew, {
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