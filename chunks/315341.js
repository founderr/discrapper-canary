"use strict";
n.r(t), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817");
var a = n("442837"),
  s = n("524437"),
  i = n("381499"),
  l = n("433517"),
  r = n("581364"),
  o = n("536442"),
  u = n("592125"),
  d = n("915486"),
  c = n("48481"),
  f = n("981631"),
  E = n("798077");

function h(e, t) {
  let n = !1;
  return null == e.userContent && (e.userContent = {
    dismissedContents: new Uint8Array,
    lastReceivedChangelogId: "0"
  }), null == e.userContent.dismissedContents && (e.userContent.dismissedContents = new Uint8Array), !(0, d.hasBit)(e.userContent.dismissedContents, t) && (e.userContent.dismissedContents = (0, d.addBit)(e.userContent.dismissedContents, t), n = !0), n
}

function _(e, t, n) {
  return !!o.HotspotStore.hasHiddenHotspot(t) && h(e, n)
}
let C = [{
  version: 2,
  run(e) {
    var t, n, a;
    let i;
    if ((a = i || (i = {})).Mentions = "Recent Mentions", a.Unreads = "Inbox", null != e.inbox) return !1;
    let r = !1,
      o = s.InboxSettings.create();
    e.inbox = o, l.Storage.get("seenInboxTutorial", !1) && (o.viewedTutorial = !0, r = !0);
    let d = l.Storage.get("recentsButtonTab2");
    null != d && (o.currentTab = "Recent Mentions" === d ? s.InboxTab.MENTIONS : s.InboxTab.UNREADS, r = !0);
    let f = null !== (t = l.Storage.get("unread-messages-collapsed-channels")) && void 0 !== t ? t : {};
    for (let t in f) {
      if (!f[t]) continue;
      let a = u.default.getChannel(t);
      null != a && (r = !0, (0, c.mutateUserChannelSettings)(e, null !== (n = a.guild_id) && void 0 !== n ? n : "0", a.id, e => {
        e.collapsedInInbox = !0
      }))
    }
    return r
  },
  cleanup() {
    l.Storage.remove("seenInboxTutorial"), l.Storage.remove("recentsButtonTab2"), l.Storage.remove("unread-messages-collapsed-channels")
  }
}, {
  version: 3,
  run(e) {
    let {
      state: t
    } = a.default.PersistedStore.migrateAndReadStoreState("EmojiStore", [() => ({
      diversitySurrogate: l.Storage.get("EmojiDiversitySurrogate") || ""
    })]);
    if (null == t) return !1;
    let n = !1;
    return null != t.diversitySurrogate && "" !== t.diversitySurrogate && (null == e.textAndImages && (e.textAndImages = s.TextAndImagesSettings.create()), null == e.textAndImages.diversitySurrogate && (e.textAndImages.diversitySurrogate = i.StringValue.create()), e.textAndImages.diversitySurrogate.value = t.diversitySurrogate, n = !0), n
  },
  cleanup() {}
}, {
  version: 4,
  run(e) {
    let t = !1;
    return (!0 === l.Storage.get("HAS_SEEN_HUB_UPSELL") || o.HotspotStore.hasHiddenHotspot(o.HotspotLocations.HUB_SECOND_EMAIL_CONNECTION_UPSELL)) && (t = h(e, s.DismissibleContent.HUB_WAITLIST_UPSELL)), t
  },
  cleanup() {
    l.Storage.remove("HAS_SEEN_HUB_UPSELL")
  }
}, {
  version: 5,
  run(e) {
    var t, n, a, r, o, u, d;
    let c = !1;
    e.textAndImages = null !== (t = e.textAndImages) && void 0 !== t ? t : s.TextAndImagesSettings.create(), e.notifications = null !== (n = e.notifications) && void 0 !== n ? n : s.NotificationSettings.create(), e.privacy = null !== (a = e.privacy) && void 0 !== a ? a : s.PrivacySettings.create(), e.voiceAndVideo = null !== (r = e.voiceAndVideo) && void 0 !== r ? r : s.VoiceAndVideoSettings.create(), e.gameLibrary = null !== (o = e.gameLibrary) && void 0 !== o ? o : s.GameLibrarySettings.create(), e.debug = null !== (u = e.debug) && void 0 !== u ? u : s.DebugSettings.create();
    let f = null !== (d = l.Storage.get("UserSettingsStore")) && void 0 !== d ? d : {};
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
  run: e => _(e, o.HotspotLocations.APPLICATION_COMMAND_TOOLTIP, s.DismissibleContent.APPLICATION_COMMAND_TOOLTIP),
  cleanup() {}
}, {
  version: 8,
  run: e => _(e, o.HotspotLocations.CHANNEL_BANNER_MEMBER_LIST_NOTICE, s.DismissibleContent.CHANNELINFO_CHANNELBANNER_NOTICE),
  cleanup() {}
}, {
  version: 9,
  run: e => (o.HotspotStore.hasHiddenHotspot(o.HotspotLocations.MULTI_ACCOUNT_TOOLTIP) && l.Storage.set(E.MULTIACCOUNT_TOOLTIP_SEEN_KEY, "true"), _(e, o.HotspotLocations.MULTI_ACCOUNT_TOOLTIP, s.DismissibleContent.ACCOUNT_MULTIACCOUNT_TOOLTIP)),
  cleanup() {}
}, {
  version: 10,
  run(e) {
    var t;
    let n = _(e, o.HotspotLocations.HUB_LINK_CHANNEL_NOTICE, s.DismissibleContent.CHANNEL_NOTICE_HUBLINK),
      a = null !== (t = l.Storage.get("channelNotices")) && void 0 !== t ? t : {};
    return !1 === a[f.ChannelNoticeTypes.INVITE] && h(e, s.DismissibleContent.CHANNEL_NOTICE_INVITE) && (n = !0), !1 === a[f.ChannelNoticeTypes.QUICKSWITCHER] && h(e, s.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER) && (n = !0), !1 === a[f.ChannelNoticeTypes.GUILD_BOOSTING] && h(e, s.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (n = !0), n
  },
  cleanup() {
    l.Storage.remove("channelNotices")
  }
}, {
  version: 11,
  run(e) {
    let t = !1;
    return _(e, o.HotspotLocations.GUILD_EVENT_UPSELL, s.DismissibleContent.GUILD_HEADER_EVENT_UPSELL) && (t = !0), _(e, o.HotspotLocations.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP, s.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS) && (t = !0), _(e, o.HotspotLocations.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, s.DismissibleContent.GUILD_HEADER_ANIMATED_GUILD_BANNER) && (t = !0), t
  },
  cleanup() {}
}, {
  version: 12,
  run(e) {
    let t = !1;
    return l.Storage.get("hideNag") && h(e, s.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD) && (t = !0), l.Storage.get("hideConnectSpotify") && h(e, s.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = !0), l.Storage.get("hideConnectPlayStation") && h(e, s.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = !0), l.Storage.get("hideMFASMSNotice") && h(e, s.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP) && (t = !0), t
  },
  cleanup() {
    l.Storage.remove("hideNag"), l.Storage.remove("hideConnectSpotify"), l.Storage.remove("hideConnectPlayStation"), l.Storage.remove("hideMFASMSNotice")
  }
}, {
  version: 13,
  run(e) {
    let t = !1;
    return l.Storage.get("hidePremiumPromo") && h(e, s.DismissibleContent.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = !0), l.Storage.get("hidePremiumTier2TrialEnding") && h(e, s.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (t = !0), l.Storage.get("hidePremiumReactivateNotice") && h(e, s.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = !0), _(e, o.HotspotLocations.INVITE_SPLASH_GUILD_HEADER_TOOLTIP, s.DismissibleContent.GUILD_HEADER_INVITE_SPLASH) && (t = !0), t
  },
  cleanup() {
    l.Storage.remove("hidePremiumPromo"), l.Storage.remove("hidePremiumTier2TrialEnding"), l.Storage.remove("hidePremiumReactivateNotice")
  }
}, {
  version: 14,
  run: e => _(e, o.HotspotLocations.ACTIVITY_BEB_TUTORIAL, s.DismissibleContent.ACTIVITIES_TUTORIAL_COACH_MARK),
  cleanup() {}
}, {
  version: 15,
  run: e => _(e, o.HotspotLocations.NOW_PLAYING_CONSENT_CARD, s.DismissibleContent.NOW_PLAYING_CONSENT_CARD),
  cleanup() {}
}, {
  version: 16,
  run(e) {
    let t = l.Storage.get("PromotionsPersistedStore");
    if (null == t) return !1;
    let n = t._state.lastDismissedOutboundPromotionStartDate;
    return null != n && (null == e.userContent && (e.userContent = s.UserContentSettings.create()), null == e.userContent.lastDismissedOutboundPromotionStartDate) && (e.userContent.lastDismissedOutboundPromotionStartDate = i.StringValue.create({
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
    return null != n && (null == e.textAndImages && (e.textAndImages = s.TextAndImagesSettings.create()), null == e.textAndImages.expressionSuggestionsEnabled) && (e.textAndImages.expressionSuggestionsEnabled = i.BoolValue.create({
      value: n
    }), !0)
  },
  cleanup() {
    l.Storage.remove("ExpressionSuggestionsPersistedStore")
  }
}, {
  version: 18,
  run(e) {
    let t = !1;
    return _(e, o.HotspotLocations.GUILD_DELETE_FEEDBACK, s.DismissibleContent.GUILD_DELETE_FEEDBACK) && (t = !0), _(e, o.HotspotLocations.GUILD_LEAVE_FEEDBACK, s.DismissibleContent.GUILD_LEAVE_FEEDBACK) && (t = !0), t
  },
  cleanup() {}
}, {
  version: 19,
  run(e) {
    var t;
    let n = !1;
    return null !== (t = l.Storage.get("forumHelperCardStorageKey")) && void 0 !== t && t && (n = h(e, s.DismissibleContent.FORUM_CHANNEL_HELPER_CARD)), n
  },
  cleanup() {
    l.Storage.remove("forumHelperCardStorageKey")
  }
}, {
  version: 20,
  run(e) {
    let t = l.Storage.get("lastChangeLogId");
    return null != t && ((0, r.isSnowflake)(t) ? (null == e.userContent && (e.userContent = s.UserContentSettings.create()), e.userContent.lastReceivedChangelogId = t, !0) : (l.Storage.remove("lastChangeLogId"), !1))
  },
  cleanup() {
    l.Storage.remove("lastChangeLogId")
  }
}];
t.default = C