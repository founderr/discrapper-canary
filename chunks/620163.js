"use strict";
s.r(t), s.d(t, {
  getConfig: function() {
    return eU
  }
}), s("653041");
var a = s("735250");
s("470079");
var n = s("990547"),
  l = s("524437"),
  i = s("692547"),
  r = s("481060"),
  o = s("570140"),
  d = s("893776"),
  u = s("809206"),
  c = s("230711"),
  S = s("493544"),
  E = s("782568"),
  T = s("163379"),
  _ = s("703288"),
  f = s("574755"),
  m = s("425799"),
  g = s("377171"),
  I = s("621628"),
  N = s("18438"),
  h = s("778825"),
  C = s("351780"),
  p = s("231765"),
  A = s("837741"),
  O = s("804545"),
  x = s("813732"),
  R = s("398140"),
  M = s("564344"),
  v = s("977156"),
  D = s("652380"),
  L = s("171156"),
  P = s("906467"),
  b = s("131951"),
  j = s("25990"),
  U = s("87086"),
  y = s("759231"),
  G = s("26290"),
  B = s("626135"),
  F = s("49012"),
  k = s("358085"),
  w = s("392735"),
  H = s("61160"),
  V = s("604227"),
  Y = s("38915"),
  W = s("498639"),
  K = s("748717"),
  z = s("419636"),
  Q = s("35426"),
  q = s("799071"),
  Z = s("601433"),
  X = s("154022"),
  J = s("393681"),
  $ = s("309739"),
  ee = s("64914"),
  et = s("501348"),
  es = s("795594"),
  ea = s("443702"),
  en = s("920914"),
  el = s("956699"),
  ei = s("54942"),
  er = s("15780"),
  eo = s("293389"),
  ed = s("88624"),
  eu = s("387747"),
  ec = s("389650"),
  eS = s("649157"),
  eE = s("593648"),
  eT = s("327885"),
  e_ = s("595242"),
  ef = s("301121"),
  em = s("207874"),
  eg = s("463153"),
  eI = s("36192"),
  eN = s("338345"),
  eh = s("400287"),
  eC = s("554042"),
  ep = s("200645"),
  eA = s("287490"),
  eO = s("168308"),
  ex = s("277329"),
  eR = s("674116"),
  eM = s("726985"),
  ev = s("981631"),
  eD = s("46140"),
  eL = s("689938"),
  eP = s("442691");
let eb = () => {
    let e = "Settings list view",
      t = [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE];
    return A.BrandRefreshPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.BRAND_REFRESH_NEW_BADGE), O.PrideMonthPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.PRIDE_ICONS_APPEARANCE_BADGE), t
  },
  ej = ep.default,
  eU = e => {
    let {
      unseenGiftCount: t,
      showPrepaidPaymentPastDueWarning: A,
      impressionSource: O,
      numOfPendingFamilyRequests: eU,
      isOverlaySupported: ey,
      isClipsBetaTagShowing: eG = !1,
      shouldMergeGameSettings: eB,
      isUserSettingsSearchEnabled: eF
    } = e;
    return Object.freeze({
      [eM.WebSetting.SEARCH_BAR]: {
        section: S.SectionTypes.CUSTOM,
        element: em.default,
        predicate: () => eF
      },
      [eM.WebSetting.SEARCH_NO_RESULTS]: {
        section: S.SectionTypes.CUSTOM,
        element: eg.default,
        predicate: () => eF
      },
      [eM.WebSetting.ACCOUNT]: {
        section: ev.UserSettingsSections.ACCOUNT,
        searchableTitle: eL.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        label: eL.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: eL.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.ACCOUNT_PROFILE]: {
        searchableTitle: eL.default.Messages.PROFILE,
        parent: eM.WebSetting.ACCOUNT,
        section: ev.UserSettingsSections.ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.DISPLAY_NAME]: {
        searchableTitle: eL.default.Messages.DISPLAY_NAME,
        section: ev.UserSettingsSections.ACCOUNT,
        parent: eM.WebSetting.ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.PHONE_NUMBER]: {
        searchableTitle: eL.default.Messages.CHANGE_PHONE_NUMBER,
        section: ev.UserSettingsSections.ACCOUNT,
        parent: eM.WebSetting.ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.USERNAME]: {
        searchableTitle: eL.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE,
        section: ev.UserSettingsSections.ACCOUNT,
        parent: eM.WebSetting.ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.ACCOUNT_EMAIL]: {
        searchableTitle: eL.default.Messages.CHANGE_EMAIL,
        section: ev.UserSettingsSections.ACCOUNT,
        parent: eM.WebSetting.ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.PASSWORD_AND_AUTHENTICATION]: {
        section: eM.WebSetting.ACCOUNT,
        parent: eM.WebSetting.ACCOUNT,
        searchableTitle: eL.default.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION,
        element: J.default
      },
      [eM.WebSetting.ACCOUNT_CHANGE_PASSWORD]: {
        searchableTitle: eL.default.Messages.CHANGE_PASSWORD,
        section: eM.WebSetting.ACCOUNT,
        parent: eM.WebSetting.ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.ACCOUNT_CONFIRM_PASSWORD]: {
        searchableTitle: eL.default.Messages.FORM_LABEL_CONFIRM_PASSWORD,
        section: eM.WebSetting.ACCOUNT,
        parent: eM.WebSetting.ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.MULTI_FACTOR_AUTHENTICATION]: {
        searchableTitle: eL.default.Messages.SETTINGS_TWO_FA,
        section: eM.WebSetting.ACCOUNT,
        parent: eM.WebSetting.ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.ACCOUNT_ENABLE_2FA]: {
        searchableTitle: eL.default.Messages.TWO_FA_ENABLE,
        section: eM.WebSetting.ACCOUNT,
        parent: eM.WebSetting.ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.ACCOUNT_REMOVE_2FA]: {
        searchableTitle: eL.default.Messages.TWO_FA_REMOVE,
        section: eM.WebSetting.ACCOUNT,
        parent: eM.WebSetting.ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.ACCOUNT_VIEW_BACKUP_CODES]: {
        searchableTitle: eL.default.Messages.TWO_FA_BACKUP_CODE,
        section: eM.WebSetting.ACCOUNT,
        parent: eM.WebSetting.ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.ACCOUNT_SMS_BACKUP]: {
        searchableTitle: eL.default.Messages.MFA_SMS_AUTH,
        section: eM.WebSetting.ACCOUNT,
        parent: eM.WebSetting.ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.ACCOUNT_REMOVAL]: {
        section: ev.UserSettingsSections.ACCOUNT,
        searchableTitle: eL.default.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION,
        parent: eM.WebSetting.ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.DELETE_ACCOUNT]: {
        section: ev.UserSettingsSections.ACCOUNT,
        searchableTitle: eL.default.Messages.DELETE_ACCOUNT,
        parent: eM.WebSetting.ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.DISABLE_ACCOUNT]: {
        section: ev.UserSettingsSections.ACCOUNT,
        searchableTitle: eL.default.Messages.DISABLE_ACCOUNT,
        parent: eM.WebSetting.ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.GAMES]: {
        section: ev.UserSettingsSections.GAMES,
        searchableTitle: eL.default.Messages.GAMES,
        label: eL.default.Messages.GAMES,
        ariaLabel: eL.default.Messages.GAMES,
        element: ex.default,
        predicate: () => eB
      },
      [eM.WebSetting.PROFILE_CUSTOMIZATION]: {
        section: ev.UserSettingsSections.PROFILE_CUSTOMIZATION,
        type: S.ContentTypes.WIDE,
        searchableTitle: eL.default.Messages.USER_SETTINGS_PROFILES,
        label: eL.default.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: eL.default.Messages.USER_SETTINGS_PROFILES,
        element: M.default,
        newIndicator: (0, a.jsx)(G.PremiumBadge, {
          text: eL.default.Messages.NEW
        }),
        notice: {
          stores: [j.default, h.default],
          element: R.default
        },
        onSettingsClose: () => {
          o.default.wait(() => {
            (0, N.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(ev.UserSettingsSections.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [eM.WebSetting.PRIVACY_AND_SAFETY]: {
        section: ev.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eL.default.Messages.PRIVACY_AND_SAFETY,
        label: eL.default.Messages.PRIVACY_AND_SAFETY,
        element: ef.default
      },
      [eM.WebSetting.FAMILY_CENTER]: {
        section: ev.UserSettingsSections.FAMILY_CENTER,
        searchableTitle: eL.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        label: eL.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: eL.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: ei.default,
        badgeCount: eU,
        newIndicator: (0, a.jsx)(G.TextBadge, {
          text: eL.default.Messages.NEW,
          color: g.default.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
      },
      [eM.WebSetting.AUTHORIZED_APPS]: {
        section: ev.UserSettingsSections.AUTHORIZED_APPS,
        searchableTitle: eL.default.Messages.AUTHORIZED_APPS,
        label: eL.default.Messages.AUTHORIZED_APPS,
        element: es.default
      },
      [eM.WebSetting.SESSIONS]: {
        section: ev.UserSettingsSections.SESSIONS,
        searchableTitle: eL.default.Messages.AUTH_SESSIONS,
        label: eL.default.Messages.AUTH_SESSIONS,
        ariaLabel: eL.default.Messages.AUTH_SESSIONS,
        element: eI.default,
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
        predicate: () => w.default.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [eM.WebSetting.CONNECTIONS]: {
        section: ev.UserSettingsSections.CONNECTIONS,
        searchableTitle: eL.default.Messages.CONNECTIONS,
        label: eL.default.Messages.CONNECTIONS,
        ariaLabel: eL.default.Messages.CONNECTIONS,
        element: en.default,
        impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: O
        },
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
      },
      [eM.WebSetting.CLIPS]: {
        section: ev.UserSettingsSections.CLIPS,
        searchableTitle: eL.default.Messages.CLIPS,
        label: eL.default.Messages.CLIPS,
        ariaLabel: eL.default.Messages.CLIPS,
        icon: eG ? (0, a.jsx)(_.default, {}) : void 0,
        element: f.default,
        predicate: () => !eB
      },
      [eM.WebSetting.FRIEND_REQUESTS]: {
        section: ev.UserSettingsSections.FRIEND_REQUESTS,
        searchableTitle: eL.default.Messages.FRIEND_REQUESTS,
        label: eL.default.Messages.FRIEND_REQUESTS,
        element: er.default
      },
      [eM.WebSetting.PREMIUM]: {
        section: ev.UserSettingsSections.PREMIUM,
        ariaLabel: eL.default.Messages.PREMIUM,
        searchableTitle: eL.default.Messages.PREMIUM,
        label: eL.default.Messages.PREMIUM,
        element: K.default,
        className: eP.premiumTab
      },
      [eM.WebSetting.GUILD_BOOSTING]: {
        section: ev.UserSettingsSections.GUILD_BOOSTING,
        searchableTitle: eL.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        label: eL.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: e_.default
      },
      [eM.WebSetting.SUBSCRIPTIONS]: {
        section: ev.UserSettingsSections.SUBSCRIPTIONS,
        ariaLabel: eL.default.Messages.SUBSCRIPTIONS_TITLE,
        searchableTitle: eL.default.Messages.SUBSCRIPTIONS_TITLE,
        label: eL.default.Messages.SUBSCRIPTIONS_TITLE,
        element: x.default,
        icon: A ? (0, a.jsx)(y.default, {
          width: 16,
          height: 16,
          color: i.default.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [eM.WebSetting.GIFT_INVENTORY]: {
        section: ev.UserSettingsSections.INVENTORY,
        searchableTitle: eL.default.Messages.GIFT_INVENTORY,
        label: eL.default.Messages.GIFT_INVENTORY,
        element: eu.default,
        ariaLabel: eL.default.Messages.GIFT_INVENTORY,
        badgeCount: t
      },
      [eM.WebSetting.BILLING]: {
        section: ev.UserSettingsSections.BILLING,
        searchableTitle: eL.default.Messages.BILLING,
        label: eL.default.Messages.BILLING,
        element: ea.default
      },
      [eM.WebSetting.APPEARANCE]: {
        section: ev.UserSettingsSections.APPEARANCE,
        searchableTitle: eL.default.Messages.APPEARANCE,
        label: eL.default.Messages.APPEARANCE,
        ariaLabel: eL.default.Messages.APPEARANCE,
        element: et.default,
        newIndicator: (0, a.jsx)(G.PremiumBadge, {
          text: eL.default.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: eb()
      },
      [eM.WebSetting.ACCESSIBILITY]: {
        section: ev.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eL.default.Messages.ACCESSIBILITY,
        label: eL.default.Messages.ACCESSIBILITY,
        element: X.default
      },
      [eM.WebSetting.VOICE_AND_VIDEO]: {
        section: ev.UserSettingsSections.VOICE,
        searchableTitle: eL.default.Messages.VOICE_AND_VIDEO,
        label: eL.default.Messages.VOICE_AND_VIDEO,
        element: eR.default,
        predicate: () => b.default.isSupported()
      },
      [eM.WebSetting.POGGERMODE]: {
        section: ev.UserSettingsSections.POGGERMODE,
        searchableTitle: eL.default.Messages.POGGERMODE,
        label: eL.default.Messages.POGGERMODE,
        ariaLabel: eL.default.Messages.POGGERMODE,
        element: p.default,
        predicate: () => C.default.settingsVisible,
        icon: (0, a.jsx)("img", {
          alt: "",
          src: s("542156"),
          className: eP.poggermodeIcon
        })
      },
      [eM.WebSetting.CHAT]: {
        section: ev.UserSettingsSections.TEXT,
        searchableTitle: eL.default.Messages.CHAT,
        label: eL.default.Messages.CHAT,
        element: eh.default
      },
      [eM.WebSetting.NOTIFICATIONS]: {
        section: ev.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eL.default.Messages.NOTIFICATIONS,
        label: eL.default.Messages.NOTIFICATIONS,
        element: eE.default
      },
      [eM.WebSetting.KEYBINDS]: {
        section: ev.UserSettingsSections.KEYBINDS,
        searchableTitle: eL.default.Messages.KEYBINDS,
        label: eL.default.Messages.KEYBINDS,
        element: ec.default
      },
      [eM.WebSetting.LANGUAGE]: {
        section: ev.UserSettingsSections.LOCALE,
        searchableTitle: eL.default.Messages.LANGUAGE,
        label: eL.default.Messages.LANGUAGE,
        element: eS.default
      },
      [eM.WebSetting.WINDOW_SETTINGS]: {
        section: ev.UserSettingsSections.WINDOWS,
        searchableTitle: eL.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        label: eL.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: ep.default,
        predicate: () => k.isPlatformEmbedded && (0, k.isWindows)()
      },
      [eM.WebSetting.LINUX_SETTINGS]: {
        section: ev.UserSettingsSections.LINUX,
        searchableTitle: eL.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        label: eL.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: ej,
        predicate: () => k.isPlatformEmbedded && (0, k.isLinux)()
      },
      [eM.WebSetting.STREAMER_MODE]: {
        section: ev.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eL.default.Messages.STREAMER_MODE,
        label: eL.default.Messages.STREAMER_MODE,
        element: eN.default
      },
      [eM.WebSetting.SPEED_TEST]: {
        section: ev.UserSettingsSections.SPEED_TEST,
        searchableTitle: "Speed Test",
        label: "Speed Test",
        element: Q.default,
        predicate: () => L.default.isSupported() && H.default.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [eM.WebSetting.SETTINGS_ADVANCED]: {
        section: ev.UserSettingsSections.ADVANCED,
        searchableTitle: eL.default.Messages.SETTINGS_ADVANCED,
        label: eL.default.Messages.SETTINGS_ADVANCED,
        element: ee.default
      },
      [eM.WebSetting.ACTIVITY_PRIVACY]: {
        section: ev.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: eL.default.Messages.ACTIVITY_PRIVACY,
        label: eL.default.Messages.ACTIVITY_PRIVACY,
        element: $.default,
        predicate: () => !eB
      },
      [eM.WebSetting.REGISTERED_GAMES]: {
        section: ev.UserSettingsSections.REGISTERED_GAMES,
        searchableTitle: eL.default.Messages.REGISTERED_GAMES,
        label: eL.default.Messages.REGISTERED_GAMES,
        element: eo.default,
        predicate: () => !eB && (0, eO.shouldShowRegisteredGamesSettings)()
      },
      [eM.WebSetting.OVERLAY]: {
        section: ev.UserSettingsSections.OVERLAY,
        searchableTitle: eL.default.Messages.OVERLAY,
        label: eL.default.Messages.OVERLAY,
        element: eT.default,
        predicate: () => !eB && ey
      },
      [eM.WebSetting.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, T.openChangelog)(!0),
        searchableTitle: eL.default.Messages.WHATS_NEW,
        label: eL.default.Messages.WHATS_NEW
      },
      [eM.WebSetting.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          B.default.track(ev.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, F.handleClick)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              B.default.track(ev.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
            }
          })
        },
        searchableTitle: eL.default.Messages.MERCHANDISE,
        label: eL.default.Messages.MERCHANDISE,
        ariaLabel: eL.default.Messages.MERCHANDISE
      },
      [eM.WebSetting.HYPESQUAD]: {
        section: ev.UserSettingsSections.HYPESQUAD_ONLINE,
        searchableTitle: eL.default.Messages.USER_SETTINGS_HYPESQUAD,
        label: eL.default.Messages.USER_SETTINGS_HYPESQUAD,
        element: ed.default
      },
      [eM.WebSetting.EXPERIMENTS]: {
        section: ev.UserSettingsSections.EXPERIMENTS,
        searchableTitle: "Experiments",
        label: "Experiments",
        element: eA.default,
        predicate: () => P.default.isDeveloper
      },
      [eM.WebSetting.DEVELOPER_OPTIONS]: {
        section: ev.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Developer Options",
        label: "Developer Options",
        element: el.default,
        predicate: () => P.default.isDeveloper
      },
      [eM.WebSetting.HOTSPOT_OPTIONS]: {
        section: ev.UserSettingsSections.HOTSPOT_OPTIONS,
        searchableTitle: "Hotspot Options",
        label: "Hotspot Options",
        element: Y.default,
        predicate: () => P.default.isDeveloper
      },
      [eM.WebSetting.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: ev.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
        searchableTitle: "Dismissible Contents",
        label: "Dismissible Contents",
        element: I.default,
        predicate: () => P.default.isDeveloper
      },
      [eM.WebSetting.PAYMENT_FLOW_MODALS]: {
        section: ev.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
        searchableTitle: "Payment Flow Modals",
        label: "Payment Flow Modals",
        element: W.default,
        predicate: () => P.default.isDeveloper
      },
      [eM.WebSetting.TEXT_PLAYGROUND]: {
        section: ev.UserSettingsSections.TEXT_PLAYGROUND,
        searchableTitle: "Text Playground",
        label: "Text Playground",
        element: eC.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || P.default.isDeveloper
      },
      [eM.WebSetting.TEXT_COMPONENTS]: {
        section: ev.UserSettingsSections.TEXT_COMPONENT,
        searchableTitle: "Text Components",
        label: "Text Components",
        element: q.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || P.default.isDeveloper
      },
      [eM.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: ev.UserSettingsSections.PROFILE_EFFECTS_PREVIEW_TOOL,
        searchableTitle: "Profile Effects Preview Tool",
        label: "Profile Effects Preview Tool",
        element: m.default,
        predicate: () => P.default.isDeveloper
      },
      [eM.WebSetting.QUEST_PREVIEW_TOOL]: {
        section: ev.UserSettingsSections.QUEST_PREVIEW_TOOL,
        searchableTitle: "Quest Preview Tool",
        label: "Quest Preview Tool",
        element: D.default,
        predicate: () => (0, v.isQuestPreviewToolEnabled)({
          location: eD.QuestsExperimentLocations.QUEST_PREVIEW_TOOL
        })
      },
      [eM.WebSetting.LOGOUT]: {
        section: "logout",
        onClick: () => {
          (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
            header: eL.default.Messages.LOGOUT,
            confirmText: eL.default.Messages.LOGOUT,
            cancelText: eL.default.Messages.CANCEL,
            onCancel: e.onClose,
            onConfirm: () => d.default.logout(),
            ...e,
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: eL.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
            })
          }))
        },
        label: eL.default.Messages.LOGOUT,
        ariaLabel: eL.default.Messages.LOGOUT,
        icon: (0, a.jsx)(U.default, {
          width: 16,
          height: 16
        })
      },
      [eM.WebSetting.SOCIAL_LINKS]: {
        section: S.SectionTypes.CUSTOM,
        element: z.default
      },
      [eM.WebSetting.CLIENT_DEBUG_INFO]: {
        section: S.SectionTypes.CUSTOM,
        element: V.default
      }
    })
  }