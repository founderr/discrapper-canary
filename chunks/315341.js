n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var s = n(442837),
  i = n(704215),
  l = n(524437),
  a = n(381499),
  r = n(433517),
  o = n(581364),
  c = n(536442),
  u = n(592125),
  d = n(915486),
  E = n(48481),
  h = n(981631),
  _ = n(71509);

function I(e, t) {
  let n = !1;
  return null == e.userContent && (e.userContent = {
    dismissedContents: new Uint8Array,
    lastReceivedChangelogId: "0"
  }), null == e.userContent.dismissedContents && (e.userContent.dismissedContents = new Uint8Array), !(0, d.jl)(e.userContent.dismissedContents, t) && (e.userContent.dismissedContents = (0, d.GV)(e.userContent.dismissedContents, t), n = !0), n
}

function m(e, t, n) {
  return !!c.qc.hasHiddenHotspot(t) && I(e, n)
}
let T = [{
  version: 2,
  run(e) {
    var t, n, s;
    let i;
    if ((s = i || (i = {})).Mentions = "Recent Mentions", s.Unreads = "Inbox", null != e.inbox) return !1;
    let a = !1,
      o = l.f9.create();
    e.inbox = o, r.K.get("seenInboxTutorial", !1) && (o.viewedTutorial = !0, a = !0);
    let c = r.K.get("recentsButtonTab2");
    null != c && (o.currentTab = "Recent Mentions" === c ? l.X.MENTIONS : l.X.UNREADS, a = !0);
    let d = null !== (t = r.K.get("unread-messages-collapsed-channels")) && void 0 !== t ? t : {};
    for (let t in d) {
      if (!d[t]) continue;
      let s = u.Z.getChannel(t);
      null != s && (a = !0, (0, E.i7)(e, null !== (n = s.guild_id) && void 0 !== n ? n : "0", s.id, e => {
        e.collapsedInInbox = !0
      }))
    }
    return a
  },
  cleanup() {
    r.K.remove("seenInboxTutorial"), r.K.remove("recentsButtonTab2"), r.K.remove("unread-messages-collapsed-channels")
  }
}, {
  version: 3,
  run(e) {
    let {
      state: t
    } = s.ZP.PersistedStore.migrateAndReadStoreState("EmojiStore", [() => ({
      diversitySurrogate: r.K.get("EmojiDiversitySurrogate") || ""
    })]);
    if (null == t) return !1;
    let n = !1;
    return null != t.diversitySurrogate && "" !== t.diversitySurrogate && (null == e.textAndImages && (e.textAndImages = l.Me.create()), null == e.textAndImages.diversitySurrogate && (e.textAndImages.diversitySurrogate = a.Gm.create()), e.textAndImages.diversitySurrogate.value = t.diversitySurrogate, n = !0), n
  },
  cleanup() {}
}, {
  version: 4,
  run(e) {
    let t = !1;
    return (!0 === r.K.get("HAS_SEEN_HUB_UPSELL") || c.qc.hasHiddenHotspot(c.v6.HUB_SECOND_EMAIL_CONNECTION_UPSELL)) && (t = I(e, i.z.HUB_WAITLIST_UPSELL)), t
  },
  cleanup() {
    r.K.remove("HAS_SEEN_HUB_UPSELL")
  }
}, {
  version: 5,
  run(e) {
    var t, n, s, i, o, c, u;
    let d = !1;
    e.textAndImages = null !== (t = e.textAndImages) && void 0 !== t ? t : l.Me.create(), e.notifications = null !== (n = e.notifications) && void 0 !== n ? n : l.sf.create(), e.privacy = null !== (s = e.privacy) && void 0 !== s ? s : l.bE.create(), e.voiceAndVideo = null !== (i = e.voiceAndVideo) && void 0 !== i ? i : l.v_.create(), e.gameLibrary = null !== (o = e.gameLibrary) && void 0 !== o ? o : l.Fm.create(), e.debug = null !== (c = e.debug) && void 0 !== c ? c : l.tA.create();
    let E = null !== (u = r.K.get("UserSettingsStore")) && void 0 !== u ? u : {};
    return "boolean" == typeof E.useRichChatTextBox && (e.textAndImages.useRichChatInput = a.D5.create({
      value: E.useRichChatTextBox
    }), d = !0), "string" == typeof E.renderSpoilers && (e.textAndImages.renderSpoilers = a.Gm.create({
      value: E.renderSpoilers
    }), d = !0), "boolean" == typeof E.useThreadSidebar && (e.textAndImages.useThreadSidebar = a.D5.create({
      value: E.useThreadSidebar
    }), d = !0), "boolean" == typeof E.showInAppNotifications && (e.notifications.showInAppNotifications = a.D5.create({
      value: E.showInAppNotifications
    }), d = !0), E.emojiPickerCollapsedSections instanceof Array && (e.textAndImages.emojiPickerCollapsedSections = E.emojiPickerCollapsedSections, d = !0), E.stickerPickerCollapsedSections instanceof Array && (e.textAndImages.stickerPickerCollapsedSections = E.stickerPickerCollapsedSections, d = !0), "boolean" == typeof E.viewImageDescriptions && (e.textAndImages.viewImageDescriptions = a.D5.create({
      value: E.viewImageDescriptions
    }), d = !0), "boolean" == typeof E.showCommandSuggestions && (e.textAndImages.showCommandSuggestions = a.D5.create({
      value: E.showCommandSuggestions
    }), d = !0), "boolean" == typeof E.alwaysPreviewVideo && (e.voiceAndVideo.alwaysPreviewVideo = a.D5.create({
      value: E.alwaysPreviewVideo
    }), d = !0), "boolean" == typeof E.notifyFriendsOnGoLive && (e.notifications.notifyFriendsOnGoLive = a.D5.create({
      value: E.notifyFriendsOnGoLive
    }), d = !0), "boolean" == typeof E.installShortcutDesktop && (e.gameLibrary.installShortcutDesktop = a.D5.create({
      value: E.installShortcutDesktop
    }), d = !0), "boolean" == typeof E.installShortcutStartMenu && (e.gameLibrary.installShortcutStartMenu = a.D5.create({
      value: E.installShortcutStartMenu
    }), d = !0), "boolean" == typeof E.allowActivityPartyPrivacyFriends && (e.privacy.allowActivityPartyPrivacyFriends = a.D5.create({
      value: E.allowActivityPartyPrivacyFriends
    }), d = !0), "boolean" == typeof E.allowActivityPartyPrivacyVoiceChannel && (e.privacy.allowActivityPartyPrivacyVoiceChannel = a.D5.create({
      value: E.allowActivityPartyPrivacyVoiceChannel
    }), d = !0), "boolean" == typeof E.rtcPanelShowVoiceStates && (e.debug.rtcPanelShowVoiceStates = a.D5.create({
      value: E.rtcPanelShowVoiceStates
    }), d = !0), d
  },
  cleanup() {}
}, {
  version: 7,
  run: e => m(e, c.v6.APPLICATION_COMMAND_TOOLTIP, i.z.APPLICATION_COMMAND_TOOLTIP),
  cleanup() {}
}, {
  version: 8,
  run: e => m(e, c.v6.CHANNEL_BANNER_MEMBER_LIST_NOTICE, i.z.CHANNELINFO_CHANNELBANNER_NOTICE),
  cleanup() {}
}, {
  version: 9,
  run: e => (c.qc.hasHiddenHotspot(c.v6.MULTI_ACCOUNT_TOOLTIP) && r.K.set(_.Ip, "true"), m(e, c.v6.MULTI_ACCOUNT_TOOLTIP, i.z.ACCOUNT_MULTIACCOUNT_TOOLTIP)),
  cleanup() {}
}, {
  version: 10,
  run(e) {
    var t;
    let n = m(e, c.v6.HUB_LINK_CHANNEL_NOTICE, i.z.CHANNEL_NOTICE_HUBLINK),
      s = null !== (t = r.K.get("channelNotices")) && void 0 !== t ? t : {};
    return !1 === s[h.vID.INVITE] && I(e, i.z.CHANNEL_NOTICE_INVITE) && (n = !0), !1 === s[h.vID.QUICKSWITCHER] && I(e, i.z.CHANNEL_NOTICE_QUICKSWITCHER) && (n = !0), !1 === s[h.vID.GUILD_BOOSTING] && I(e, i.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (n = !0), n
  },
  cleanup() {
    r.K.remove("channelNotices")
  }
}, {
  version: 11,
  run(e) {
    let t = !1;
    return m(e, c.v6.GUILD_EVENT_UPSELL, i.z.GUILD_HEADER_EVENT_UPSELL) && (t = !0), m(e, c.v6.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP, i.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS) && (t = !0), m(e, c.v6.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, i.z.GUILD_HEADER_ANIMATED_GUILD_BANNER) && (t = !0), t
  },
  cleanup() {}
}, {
  version: 12,
  run(e) {
    let t = !1;
    return r.K.get("hideNag") && I(e, i.z.NAGBAR_NOTICE_DOWNLOAD) && (t = !0), r.K.get("hideConnectSpotify") && I(e, i.z.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = !0), r.K.get("hideConnectPlayStation") && I(e, i.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = !0), r.K.get("hideMFASMSNotice") && I(e, i.z.NAGBAR_NOTICE_MFA_SMS_BACKUP) && (t = !0), t
  },
  cleanup() {
    r.K.remove("hideNag"), r.K.remove("hideConnectSpotify"), r.K.remove("hideConnectPlayStation"), r.K.remove("hideMFASMSNotice")
  }
}, {
  version: 13,
  run(e) {
    let t = !1;
    return r.K.get("hidePremiumPromo") && I(e, i.z.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = !0), r.K.get("hidePremiumTier2TrialEnding") && I(e, i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (t = !0), r.K.get("hidePremiumReactivateNotice") && I(e, i.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = !0), m(e, c.v6.INVITE_SPLASH_GUILD_HEADER_TOOLTIP, i.z.GUILD_HEADER_INVITE_SPLASH) && (t = !0), t
  },
  cleanup() {
    r.K.remove("hidePremiumPromo"), r.K.remove("hidePremiumTier2TrialEnding"), r.K.remove("hidePremiumReactivateNotice")
  }
}, {
  version: 14,
  run: e => m(e, c.v6.ACTIVITY_BEB_TUTORIAL, i.z.ACTIVITIES_TUTORIAL_COACH_MARK),
  cleanup() {}
}, {
  version: 15,
  run: e => m(e, c.v6.NOW_PLAYING_CONSENT_CARD, i.z.NOW_PLAYING_CONSENT_CARD),
  cleanup() {}
}, {
  version: 16,
  run(e) {
    let t = r.K.get("PromotionsPersistedStore");
    if (null == t) return !1;
    let n = t._state.lastDismissedOutboundPromotionStartDate;
    return null != n && (null == e.userContent && (e.userContent = l.az.create()), null == e.userContent.lastDismissedOutboundPromotionStartDate) && (e.userContent.lastDismissedOutboundPromotionStartDate = a.Gm.create({
      value: n
    }), !0)
  },
  cleanup() {}
}, {
  version: 17,
  run(e) {
    let {
      state: t
    } = s.ZP.PersistedStore.migrateAndReadStoreState("ExpressionSuggestionsPersistedStore", null);
    if (null == t) return !1;
    let n = t.expressionSuggestionsEnabled;
    return null != n && (null == e.textAndImages && (e.textAndImages = l.Me.create()), null == e.textAndImages.expressionSuggestionsEnabled) && (e.textAndImages.expressionSuggestionsEnabled = a.D5.create({
      value: n
    }), !0)
  },
  cleanup() {
    r.K.remove("ExpressionSuggestionsPersistedStore")
  }
}, {
  version: 18,
  run(e) {
    let t = !1;
    return m(e, c.v6.GUILD_DELETE_FEEDBACK, i.z.GUILD_DELETE_FEEDBACK) && (t = !0), m(e, c.v6.GUILD_LEAVE_FEEDBACK, i.z.GUILD_LEAVE_FEEDBACK) && (t = !0), t
  },
  cleanup() {}
}, {
  version: 19,
  run(e) {
    var t;
    let n = !1;
    return null !== (t = r.K.get("forumHelperCardStorageKey")) && void 0 !== t && t && (n = I(e, i.z.FORUM_CHANNEL_HELPER_CARD)), n
  },
  cleanup() {
    r.K.remove("forumHelperCardStorageKey")
  }
}, {
  version: 20,
  run(e) {
    let t = r.K.get("lastChangeLogId");
    if (null == t) return !1;
    if (!(0, o.BH)(t)) return r.K.remove("lastChangeLogId"), !1;
    if (null == e.userContent) e.userContent = l.az.create();
    else if (null != e.userContent && null != e.userContent.lastReceivedChangelogId && "0" !== e.userContent.lastReceivedChangelogId) return r.K.remove("lastChangeLogId"), !1;
    return e.userContent.lastReceivedChangelogId = t, !0
  },
  cleanup() {
    r.K.remove("lastChangeLogId")
  }
}];
t.Z = T