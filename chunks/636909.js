"use strict";
l.r(t), l.d(t, {
  default: function() {
    return $
  }
});
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  r = l.n(s),
  i = l("446674"),
  u = l("77078"),
  o = l("79112"),
  d = l("299285"),
  c = l("454273"),
  f = l("56947"),
  m = l("187001"),
  S = l("504219"),
  E = l("845579"),
  C = l("42203"),
  h = l("525065"),
  g = l("305961"),
  _ = l("42887"),
  p = l("568307"),
  N = l("18494"),
  I = l("697218"),
  x = l("703370"),
  v = l("145131"),
  A = l("953109"),
  R = l("476263"),
  T = l("267675"),
  L = l("423487"),
  O = l("233437"),
  j = l("599110"),
  M = l("449008"),
  D = l("701909"),
  P = l("773336"),
  b = l("767960"),
  G = l("375202"),
  U = l("916262"),
  y = l("75974"),
  k = l("359812"),
  w = l("273405"),
  F = l("326620"),
  V = l("985997"),
  H = l("16750"),
  B = l("706530"),
  W = l("49111"),
  K = l("782340"),
  z = l("183351"),
  Y = l("770420");

function Z(e) {
  let {
    selectedSource: t,
    selectSource: l,
    sourceChanged: n,
    onChangeSource: s
  } = e, r = (0, i.useStateFromStores)([p.default, x.default], () => (0, P.isWindows)() ? (0, G.default)(p.default, x.default) : null), o = (0, i.useStateFromStores)([d.default], () => (null == r ? void 0 : r.id) != null ? d.default.getApplication(r.id) : null), c = (0, i.useStateFromStores)([p.default], () => p.default.getRunningGames()), f = (0, i.useStateFromStoresArray)([d.default], () => c.map(e => null != e.id ? d.default.getApplication(e.id) : null).filter(M.isNotNullish), [c]), m = null;
  if (null != t ? m = t.name : null != r && (m = r.name), null == m) return null;
  let S = (0, H.default)(r, t, c),
    E = n ? f.find(e => {
      let {
        id: t
      } = e;
      return t === (null == S ? void 0 : S.id)
    }) : o,
    C = null != t && t.id.startsWith("screen") ? T.default : O.default;
  return (0, a.jsx)(u.FormItem, {
    title: K.default.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
    className: Y.modalContent,
    titleClassName: Y.formItemTitleVerySlim,
    children: (0, a.jsxs)(F.default, {
      children: [null != E ? (0, a.jsx)(A.default, {
        game: E,
        size: A.default.Sizes.XSMALL,
        className: z.selectedIcon
      }) : (0, a.jsx)(C, {
        className: z.selectedIcon
      }), (0, a.jsx)("span", {
        className: z.ellipsisText,
        children: m
      }), l ? (0, a.jsx)(u.Button, {
        className: z.changeButton,
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.SMALL,
        onClick: s,
        children: K.default.Messages.CHANGE
      }) : null]
    })
  })
}

function J(e) {
  let {
    onChange: t,
    guildId: l
  } = e, n = (0, i.useStateFromStores)([g.default], () => g.default.getGuild(l));
  return null == n ? (t(), null) : (0, a.jsx)(u.FormItem, {
    title: K.default.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
    className: Y.modalContent,
    titleClassName: Y.formItemTitle,
    children: (0, a.jsxs)(F.default, {
      children: [(0, a.jsx)(R.default, {
        guild: n,
        size: R.default.Sizes.SMALLER,
        className: z.selectedIcon
      }), (0, a.jsx)("span", {
        className: z.ellipsisText,
        children: n.toString()
      }), (0, a.jsx)(u.Button, {
        className: z.changeButton,
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.SMALL,
        onClick: t,
        children: K.default.Messages.CHANGE
      })]
    })
  })
}

function Q(e) {
  let {
    text: t
  } = e;
  return (0, a.jsxs)(v.default, {
    align: v.default.Align.CENTER,
    className: z.warning,
    children: [(0, a.jsx)(L.default, {
      className: z.warningIcon
    }), (0, a.jsx)(u.Text, {
      color: "none",
      variant: "text-xs/normal",
      children: t
    })]
  })
}

function X(e) {
  let {
    guildId: t
  } = e, l = (0, i.useStateFromStores)([h.default], () => {
    var e;
    return null !== (e = h.default.getMemberCount(t)) && void 0 !== e ? e : 0
  }), s = E.NotifyFriendsOnGoLive.useSetting(), o = n.useCallback((e, t) => {
    E.NotifyFriendsOnGoLive.updateSetting(t), j.default.track(W.AnalyticEvents.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []), d = l >= 2 && l <= B.STREAM_NOTIFY_GUILD_MAX_SIZE;
  return d ? (0, a.jsx)(u.FormItem, {
    className: r(Y.modalContent, z.checkboxRow),
    children: (0, a.jsx)(u.Checkbox, {
      value: !!s,
      type: u.Checkbox.Types.INVERTED,
      onChange: o,
      children: (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: K.default.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
      })
    })
  }) : null
}

function q(e) {
  let {
    enabled: t,
    onChange: l
  } = e, s = n.useCallback((e, t) => {
    l(t)
  }, [l]);
  return (0, a.jsx)(u.FormItem, {
    className: r(Y.modalContent, z.checkboxRow),
    children: (0, a.jsx)(u.Checkbox, {
      value: t,
      type: u.Checkbox.Types.INVERTED,
      onChange: s,
      children: (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: K.default.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL
      })
    })
  })
}

function $(e) {
  let {
    selectedSource: t,
    selectedFPS: l,
    selectedChannelId: s,
    selectedPreset: r,
    selectedResolution: u,
    sourceChanged: d,
    selectedGuildId: E,
    targetGuildPremiumTier: h,
    selectSource: g,
    selectGuild: p,
    sound: x,
    onClose: v,
    onChangeSelectedFPS: A,
    onChangeSelectedResolution: R,
    onChangeSelectedPreset: T,
    onChangeSelectedChannelId: L,
    onChangeSource: O,
    onChangeAudioDevice: j,
    onChangeGuild: M,
    onChangeSound: G,
    isAnimationDone: F
  } = e, H = (0, i.useStateFromStores)([N.default, C.default], () => C.default.getChannel(N.default.getVoiceChannelId())), B = (0, i.useStateFromStores)([b.default], () => b.default.GPUDriversOutdated), z = (0, i.useStateFromStores)([b.default], () => b.default.problematicGPUDriver), Y = (0, i.useStateFromStores)([_.default], () => _.default.getSoundshareEnabled()), $ = (0, i.useStateFromStores)([I.default], () => I.default.getCurrentUser()), ee = (0, f.useEnableClips)(), et = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !ee
  }), el = (0, U.default)();
  null != t && t.id.startsWith("screen") && !_.default.supportsScreenSoundshare() ? el = K.default.Messages.GO_LIVE_SCREENSHARE_NO_SOUND : null == el && _.default.supportsEnableSoundshare() && Y !== W.SoundshareEnableState.ENABLED && (el = K.default.Messages.GO_LIVE_SCREENSHARE_ENABLE_FOR_SOUNDSHARE.format({
    onVoiceSettingsClick: () => {
      v(), o.default.open(W.UserSettingsSections.VOICE)
    }
  }));
  let ea = ee ? (0, a.jsx)(S.default, {
      guildId: E,
      isAnimationDone: F
    }) : et ? (0, a.jsx)(m.default, {}) : void 0,
    en = !!(null == t ? void 0 : t.id.startsWith("camera")),
    es = null != $ && $.verified && !$.bot,
    er = null != H && !(0, c.isPrivateGuildChannel)(H);
  return (0, a.jsxs)(n.Fragment, {
    children: [en ? (0, a.jsx)(y.default, {
      selectedSource: t,
      onChangeVideoDeviceSource: O,
      onChangeAudioDevice: j
    }) : (0, a.jsxs)("div", {
      children: [(0, a.jsx)(Z, {
        selectSource: g,
        sourceChanged: d,
        onChangeSource: O,
        selectedSource: t
      }), null != el ? (0, a.jsx)(Q, {
        text: el
      }) : null, (0, P.isWindows)() && null != t && t.id.startsWith("screen") && null == el ? (0, a.jsx)(q, {
        enabled: x,
        onChange: G
      }) : null]
    }), p && null != E ? (0, a.jsx)(J, {
      guildId: E,
      onChange: M
    }) : null, null != H ? (0, a.jsx)(w.default, {
      channel: H
    }) : (0, a.jsx)(k.default, {
      guildId: E,
      selectedChannelId: s,
      onChangeSelectedChannelId: L
    }), null != E && es && er ? (0, a.jsx)(X, {
      guildId: E
    }) : null, B ? (0, a.jsx)(Q, {
      text: K.default.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
    }) : null, z ? (0, a.jsx)(Q, {
      text: K.default.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
        helpCenterLink: D.default.getArticleURL(W.HelpdeskArticles.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, (0, a.jsx)(V.default, {
      selectedPreset: r,
      selectedFPS: l,
      selectedResolution: u,
      targetGuildPremiumTier: h,
      onClose: v,
      onFPSChange: A,
      onResolutionChange: R,
      onPresetChange: T,
      captureDeviceSelected: en
    }), ea]
  })
}