"use strict";
n.r(t), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817");
var a = n("442837"),
  s = n("704215"),
  l = n("524437"),
  i = n("381499"),
  r = n("433517"),
  o = n("581364"),
  u = n("536442"),
  d = n("592125"),
  c = n("915486"),
  f = n("48481"),
  E = n("981631"),
  h = n("798077");

function _(e, t) {
  let n = !1;
  return null == e.userContent && (e.userContent = {
    dismissedContents: new Uint8Array,
    lastReceivedChangelogId: "0"
  }), null == e.userContent.dismissedContents && (e.userContent.dismissedContents = new Uint8Array), !(0, c.hasBit)(e.userContent.dismissedContents, t) && (e.userContent.dismissedContents = (0, c.addBit)(e.userContent.dismissedContents, t), n = !0), n
}

function C(e, t, n) {
  return !!u.HotspotStore.hasHiddenHotspot(t) && _(e, n)
}
let m = [{
  version: 2,
  run(e) {
    var t, n, a;
    let s;
    if ((a = s || (s = {})).Mentions = "Recent Mentions", a.Unreads = "Inbox", null != e.inbox) return !1;
    let i = !1,
      o = l.InboxSettings.create();
    e.inbox = o, r.Storage.get("seenInboxTutorial", !1) && (o.viewedTutorial = !0, i = !0);
    let u = r.Storage.get("recentsButtonTab2");
    null != u && (o.currentTab = "Recent Mentions" === u ? l.InboxTab.MENTIONS : l.InboxTab.UNREADS, i = !0);
    let c = null !== (t = r.Storage.get("unread-messages-collapsed-channels")) && void 0 !== t ? t : {};
    for (let t in c) {
      if (!c[t]) continue;
      let a = d.default.getChannel(t);
      null != a && (i = !0, (0, f.mutateUserChannelSettings)(e, null !== (n = a.guild_id) && void 0 !== n ? n : "0", a.id, e => {
        e.collapsedInInbox = !0
      }))
    }
    return i
  },
  cleanup() {
    r.Storage.remove("seenInboxTutorial"), r.Storage.remove("recentsButtonTab2"), r.Storage.remove("unread-messages-collapsed-channels")
  }
}, {
  version: 3,
  run(e) {
    let {
      state: t
    } = a.default.PersistedStore.migrateAndReadStoreState("EmojiStore", [() => ({
      diversitySurrogate: r.Storage.get("EmojiDiversitySurrogate") || ""
    })]);
    if (null == t) return !1;
    let n = !1;
    return null != t.diversitySurrogate && "" !== t.diversitySurrogate && (null == e.textAndImages && (e.textAndImages = l.TextAndImagesSettings.create()), null == e.textAndImages.diversitySurrogate && (e.textAndImages.diversitySurrogate = i.StringValue.create()), e.textAndImages.diversitySurrogate.value = t.diversitySurrogate, n = !0), n
  },
  cleanup() {}
}, {
  version: 4,
  run(e) {
    let t = !1;
    return (!0 === r.Storage.get("HAS_SEEN_HUB_UPSELL") || u.HotspotStore.hasHiddenHotspot(u.HotspotLocations.HUB_SECOND_EMAIL_CONNECTION_UPSELL)) && (t = _(e, s.DismissibleContent.HUB_WAITLIST_UPSELL)), t
  },
  cleanup() {
    r.Storage.remove("HAS_SEEN_HUB_UPSELL")
  }
}, {
  version: 5,
  run(e) {
    var t, n, a, s, o, u, d;
    let c = !1;
    e.textAndImages = null !== (t = e.textAndImages) && void 0 !== t ? t : l.TextAndImagesSettings.create(), e.notifications = null !== (n = e.notifications) && void 0 !== n ? n : l.NotificationSettings.create(), e.privacy = null !== (a = e.privacy) && void 0 !== a ? a : l.PrivacySettings.create(), e.voiceAndVideo = null !== (s = e.voiceAndVideo) && void 0 !== s ? s : l.VoiceAndVideoSettings.create(), e.gameLibrary = null !== (o = e.gameLibrary) && void 0 !== o ? o : l.GameLibrarySettings.create(), e.debug = null !== (u = e.debug) && void 0 !== u ? u : l.DebugSettings.create();
    let f = null !== (d = r.Storage.get("UserSettingsStore")) && void 0 !== d ? d : {};
    return "boolean" == typeof f.useRichChatTextBox && (e.textAndImages.useRichChatInput = i.BoolValue.create({
      value: f.useRichChatTextBox
    }), c = !0), "string" == typeof f.renderSpoilers && (e.textAndImages.renderSpoilers = i.StringValue.create({
      value: f.renderSpoilers
    }), c = !0), "boolean" == typeof f.useThreadSidebar && (e.textAndImages.useThreadSidebar = i.BoolValue.create({
      value: f.useThreadSidebar
    }), c = !0), "boolean" == typeof f.showInAppNotifications && (e.notifications.showInAppNotifications = i.BoolValue.create({
      value: f.showInAppNotifications
    }), c = !0), f.emojiPickerCollapsedSections instanceof Array && (e.textAndImages.emojiPickerCollapsedSections = f.emojiPickerCollapsedSections, c = !0), f.stickerPickerCollapsedSections instanceof Array && (e.textAndImages.stickerPickerCollapsedSections = f.stickerPickerCollapsedSections, c = !0), "boolean" == typeof f.viewImageDescriptions && (e.textAndImages.viewImageDescriptions = i.BoolValue.create({
      value: f.viewImageDescriptions
    }), c = !0), "boolean" == typeof f.showCommandSuggestions && (e.textAndImages.showCommandSuggestions = i.BoolValue.create({
      value: f.showCommandSuggestions
    }), c = !0), "boolean" == typeof f.alwaysPreviewVideo && (e.voiceAndVideo.alwaysPreviewVideo = i.BoolValue.create({
      value: f.alwaysPreviewVideo
    }), c = !0), "boolean" == typeof f.notifyFriendsOnGoLive && (e.notifications.notifyFriendsOnGoLive = i.BoolValue.create({
      value: f.notifyFriendsOnGoLive
    }), c = !0), "boolean" == typeof f.installShortcutDesktop && (e.gameLibrary.installShortcutDesktop = i.BoolValue.create({
      value: f.installShortcutDesktop
    }), c = !0), "boolean" == typeof f.installShortcutStartMenu && (e.gameLibrary.installShortcutStartMenu = i.BoolValue.create({
      value: f.installShortcutStartMenu
    }), c = !0), "boolean" == typeof f.allowActivityPartyPrivacyFriends && (e.privacy.allowActivityPartyPrivacyFriends = i.BoolValue.create({
      value: f.allowActivityPartyPrivacyFriends
    }), c = !0), "boolean" == typeof f.allowActivityPartyPrivacyVoiceChannel && (e.privacy.allowActivityPartyPrivacyVoiceChannel = i.BoolValue.create({
      value: f.allowActivityPartyPrivacyVoiceChannel
    }), c = !0), "boolean" == typeof f.rtcPanelShowVoiceStates && (e.debug.rtcPanelShowVoiceStates = i.BoolValue.create({
      value: f.rtcPanelShowVoiceStates
    }), c = !0), c
  },
  cleanup() {}
}, {
  version: 7,
  run: e => C(e, u.HotspotLocations.APPLICATION_COMMAND_TOOLTIP, s.DismissibleContent.APPLICATION_COMMAND_TOOLTIP),
  cleanup() {}
}, {
  version: 8,
  run: e => C(e, u.HotspotLocations.CHANNEL_BANNER_MEMBER_LIST_NOTICE, s.DismissibleContent.CHANNELINFO_CHANNELBANNER_NOTICE),
  cleanup() {}
}, {
  version: 9,
  run: e => (u.HotspotStore.hasHiddenHotspot(u.HotspotLocations.MULTI_ACCOUNT_TOOLTIP) && r.Storage.set(h.MULTIACCOUNT_TOOLTIP_SEEN_KEY, "true"), C(e, u.HotspotLocations.MULTI_ACCOUNT_TOOLTIP, s.DismissibleContent.ACCOUNT_MULTIACCOUNT_TOOLTIP)),
  cleanup() {}
}, {
  version: 10,
  run(e) {
    var t;
    let n = C(e, u.HotspotLocations.HUB_LINK_CHANNEL_NOTICE, s.DismissibleContent.CHANNEL_NOTICE_HUBLINK),
      a = null !== (t = r.Storage.get("channelNotices")) && void 0 !== t ? t : {};
    return !1 === a[E.ChannelNoticeTypes.INVITE] && _(e, s.DismissibleContent.CHANNEL_NOTICE_INVITE) && (n = !0), !1 === a[E.ChannelNoticeTypes.QUICKSWITCHER] && _(e, s.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER) && (n = !0), !1 === a[E.ChannelNoticeTypes.GUILD_BOOSTING] && _(e, s.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (n = !0), n
  },
  cleanup() {
    r.Storage.remove("channelNotices")
  }
}, {
  version: 11,
  run(e) {
    let t = !1;
    return C(e, u.HotspotLocations.GUILD_EVENT_UPSELL, s.DismissibleContent.GUILD_HEADER_EVENT_UPSELL) && (t = !0), C(e, u.HotspotLocations.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP, s.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS) && (t = !0), C(e, u.HotspotLocations.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, s.DismissibleContent.GUILD_HEADER_ANIMATED_GUILD_BANNER) && (t = !0), t
  },
  cleanup() {}
}, {
  version: 12,
  run(e) {
    let t = !1;
    return r.Storage.get("hideNag") && _(e, s.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD) && (t = !0), r.Storage.get("hideConnectSpotify") && _(e, s.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = !0), r.Storage.get("hideConnectPlayStation") && _(e, s.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = !0), r.Storage.get("hideMFASMSNotice") && _(e, s.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP) && (t = !0), t
  },
  cleanup() {
    r.Storage.remove("hideNag"), r.Storage.remove("hideConnectSpotify"), r.Storage.remove("hideConnectPlayStation"), r.Storage.remove("hideMFASMSNotice")
  }
}, {
  version: 13,
  run(e) {
    let t = !1;
    return r.Storage.get("hidePremiumPromo") && _(e, s.DismissibleContent.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = !0), r.Storage.get("hidePremiumTier2TrialEnding") && _(e, s.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (t = !0), r.Storage.get("hidePremiumReactivateNotice") && _(e, s.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = !0), C(e, u.HotspotLocations.INVITE_SPLASH_GUILD_HEADER_TOOLTIP, s.DismissibleContent.GUILD_HEADER_INVITE_SPLASH) && (t = !0), t
  },
  cleanup() {
    r.Storage.remove("hidePremiumPromo"), r.Storage.remove("hidePremiumTier2TrialEnding"), r.Storage.remove("hidePremiumReactivateNotice")
  }
}, {
  version: 14,
  run: e => C(e, u.HotspotLocations.ACTIVITY_BEB_TUTORIAL, s.DismissibleContent.ACTIVITIES_TUTORIAL_COACH_MARK),
  cleanup() {}
}, {
  version: 15,
  run: e => C(e, u.HotspotLocations.NOW_PLAYING_CONSENT_CARD, s.DismissibleContent.NOW_PLAYING_CONSENT_CARD),
  cleanup() {}
}, {
  version: 16,
  run(e) {
    let t = r.Storage.get("PromotionsPersistedStore");
    if (null == t) return !1;
    let n = t._state.lastDismissedOutboundPromotionStartDate;
    return null != n && (null == e.userContent && (e.userContent = l.UserContentSettings.create()), null == e.userContent.lastDismissedOutboundPromotionStartDate) && (e.userContent.lastDismissedOutboundPromotionStartDate = i.StringValue.create({
      value: n
    }), !0)
  },
  cleanup() {}
}, {
  version: 17,
  run(e) {
    let {
      state: t
    } = a.default.PersistedStore.migrateAndReadStoreState("ExpressionSuggestionsPersistedStore", null);
    if (null == t) return !1;
    let n = t.expressionSuggestionsEnabled;
    return null != n && (null == e.textAndImages && (e.textAndImages = l.TextAndImagesSettings.create()), null == e.textAndImages.expressionSuggestionsEnabled) && (e.textAndImages.expressionSuggestionsEnabled = i.BoolValue.create({
      value: n
    }), !0)
  },
  cleanup() {
    r.Storage.remove("ExpressionSuggestionsPersistedStore")
  }
}, {
  version: 18,
  run(e) {
    let t = !1;
    return C(e, u.HotspotLocations.GUILD_DELETE_FEEDBACK, s.DismissibleContent.GUILD_DELETE_FEEDBACK) && (t = !0), C(e, u.HotspotLocations.GUILD_LEAVE_FEEDBACK, s.DismissibleContent.GUILD_LEAVE_FEEDBACK) && (t = !0), t
  },
  cleanup() {}
}, {
  version: 19,
  run(e) {
    var t;
    let n = !1;
    return null !== (t = r.Storage.get("forumHelperCardStorageKey")) && void 0 !== t && t && (n = _(e, s.DismissibleContent.FORUM_CHANNEL_HELPER_CARD)), n
  },
  cleanup() {
    r.Storage.remove("forumHelperCardStorageKey")
  }
}, {
  version: 20,
  run(e) {
    let t = r.Storage.get("lastChangeLogId");
    if (null == t) return !1;
    if (!(0, o.isSnowflake)(t)) return r.Storage.remove("lastChangeLogId"), !1;
    if (null == e.userContent) e.userContent = l.UserContentSettings.create();
    else if (null != e.userContent && null != e.userContent.lastReceivedChangelogId && "0" !== e.userContent.lastReceivedChangelogId) return r.Storage.remove("lastChangeLogId"), !1;
    return e.userContent.lastReceivedChangelogId = t, !0
  },
  cleanup() {
    r.Storage.remove("lastChangeLogId")
  }
}];
t.default = m