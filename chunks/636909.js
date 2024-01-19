"use strict";
l.r(t), l.d(t, {
  default: function() {
    return $
  }
});
var n = l("37983"),
  s = l("884691"),
  a = l("414456"),
  r = l.n(a),
  i = l("446674"),
  u = l("77078"),
  o = l("79112"),
  d = l("299285"),
  c = l("454273"),
  f = l("56947"),
  m = l("187001"),
  S = l("504219"),
  h = l("845579"),
  C = l("42203"),
  E = l("525065"),
  p = l("305961"),
  N = l("42887"),
  g = l("568307"),
  _ = l("18494"),
  x = l("697218"),
  I = l("703370"),
  v = l("145131"),
  A = l("953109"),
  R = l("476263"),
  T = l("267675"),
  L = l("423487"),
  j = l("233437"),
  M = l("599110"),
  O = l("449008"),
  D = l("701909"),
  b = l("773336"),
  P = l("767960"),
  y = l("375202"),
  k = l("916262"),
  G = l("75974"),
  H = l("359812"),
  U = l("273405"),
  F = l("326620"),
  B = l("985997"),
  V = l("16750"),
  w = l("706530"),
  W = l("49111"),
  z = l("782340"),
  K = l("183351"),
  Y = l("770420");

function Z(e) {
  let {
    selectedSource: t,
    selectSource: l,
    sourceChanged: s,
    onChangeSource: a
  } = e, r = (0, i.useStateFromStores)([g.default, I.default], () => (0, b.isWindows)() ? (0, y.default)(g.default, I.default) : null), o = (0, i.useStateFromStores)([d.default], () => (null == r ? void 0 : r.id) != null ? d.default.getApplication(r.id) : null), c = (0, i.useStateFromStores)([g.default], () => g.default.getRunningGames()), f = (0, i.useStateFromStoresArray)([d.default], () => c.map(e => null != e.id ? d.default.getApplication(e.id) : null).filter(O.isNotNullish), [c]), m = null;
  if (null != t ? m = t.name : null != r && (m = r.name), null == m) return null;
  let S = (0, V.default)(r, t, c),
    h = s ? f.find(e => {
      let {
        id: t
      } = e;
      return t === (null == S ? void 0 : S.id)
    }) : o,
    C = null != t && t.id.startsWith("screen") ? T.default : j.default;
  return (0, n.jsx)(u.FormItem, {
    title: z.default.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
    className: Y.modalContent,
    titleClassName: Y.formItemTitleVerySlim,
    children: (0, n.jsxs)(F.default, {
      children: [null != h ? (0, n.jsx)(A.default, {
        game: h,
        size: A.default.Sizes.XSMALL,
        className: K.selectedIcon
      }) : (0, n.jsx)(C, {
        className: K.selectedIcon
      }), (0, n.jsx)("span", {
        className: K.ellipsisText,
        children: m
      }), l ? (0, n.jsx)(u.Button, {
        className: K.changeButton,
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.SMALL,
        onClick: a,
        children: z.default.Messages.CHANGE
      }) : null]
    })
  })
}

function J(e) {
  let {
    onChange: t,
    guildId: l
  } = e, s = (0, i.useStateFromStores)([p.default], () => p.default.getGuild(l));
  return null == s ? (t(), null) : (0, n.jsx)(u.FormItem, {
    title: z.default.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
    className: Y.modalContent,
    titleClassName: Y.formItemTitle,
    children: (0, n.jsxs)(F.default, {
      children: [(0, n.jsx)(R.default, {
        guild: s,
        size: R.default.Sizes.SMALLER,
        className: K.selectedIcon
      }), (0, n.jsx)("span", {
        className: K.ellipsisText,
        children: s.toString()
      }), (0, n.jsx)(u.Button, {
        className: K.changeButton,
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.SMALL,
        onClick: t,
        children: z.default.Messages.CHANGE
      })]
    })
  })
}

function X(e) {
  let {
    text: t
  } = e;
  return (0, n.jsxs)(v.default, {
    align: v.default.Align.CENTER,
    className: K.warning,
    children: [(0, n.jsx)(L.default, {
      className: K.warningIcon
    }), (0, n.jsx)(u.Text, {
      color: "none",
      variant: "text-xs/normal",
      children: t
    })]
  })
}

function Q(e) {
  let {
    guildId: t
  } = e, l = (0, i.useStateFromStores)([E.default], () => {
    var e;
    return null !== (e = E.default.getMemberCount(t)) && void 0 !== e ? e : 0
  }), a = h.NotifyFriendsOnGoLive.useSetting(), o = s.useCallback((e, t) => {
    h.NotifyFriendsOnGoLive.updateSetting(t), M.default.track(W.AnalyticEvents.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []), d = l >= 2 && l <= w.STREAM_NOTIFY_GUILD_MAX_SIZE;
  return d ? (0, n.jsx)(u.FormItem, {
    className: r(Y.modalContent, K.checkboxRow),
    children: (0, n.jsx)(u.Checkbox, {
      value: !!a,
      type: u.Checkbox.Types.INVERTED,
      onChange: o,
      children: (0, n.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: z.default.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
      })
    })
  }) : null
}

function q(e) {
  let {
    enabled: t,
    onChange: l
  } = e, a = s.useCallback((e, t) => {
    l(t)
  }, [l]);
  return (0, n.jsx)(u.FormItem, {
    className: r(Y.modalContent, K.checkboxRow),
    children: (0, n.jsx)(u.Checkbox, {
      value: t,
      type: u.Checkbox.Types.INVERTED,
      onChange: a,
      children: (0, n.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: z.default.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL
      })
    })
  })
}

function $(e) {
  let {
    selectedSource: t,
    selectedFPS: l,
    selectedChannelId: a,
    selectedPreset: r,
    selectedResolution: u,
    sourceChanged: d,
    selectedGuildId: h,
    targetGuildPremiumTier: E,
    selectSource: p,
    selectGuild: g,
    sound: I,
    onClose: v,
    onChangeSelectedFPS: A,
    onChangeSelectedResolution: R,
    onChangeSelectedPreset: T,
    onChangeSelectedChannelId: L,
    onChangeSource: j,
    onChangeAudioDevice: M,
    onChangeGuild: O,
    onChangeSound: y,
    isAnimationDone: F
  } = e, V = (0, i.useStateFromStores)([_.default, C.default], () => C.default.getChannel(_.default.getVoiceChannelId())), w = (0, i.useStateFromStores)([P.default], () => P.default.GPUDriversOutdated), K = (0, i.useStateFromStores)([P.default], () => P.default.problematicGPUDriver), Y = (0, i.useStateFromStores)([N.default], () => N.default.getSoundshareEnabled()), $ = (0, i.useStateFromStores)([x.default], () => x.default.getCurrentUser()), ee = (0, f.useEnableClips)(), et = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !ee
  }), el = (0, k.default)();
  null != t && t.id.startsWith("screen") && !N.default.supportsScreenSoundshare() ? el = z.default.Messages.GO_LIVE_SCREENSHARE_NO_SOUND : null == el && N.default.supportsEnableSoundshare() && Y !== W.SoundshareEnableState.ENABLED && (el = z.default.Messages.GO_LIVE_SCREENSHARE_ENABLE_FOR_SOUNDSHARE.format({
    onVoiceSettingsClick: () => {
      v(), o.default.open(W.UserSettingsSections.VOICE)
    }
  }));
  let en = ee ? (0, n.jsx)(S.default, {
      guildId: h,
      isAnimationDone: F
    }) : et ? (0, n.jsx)(m.default, {}) : void 0,
    es = !!(null == t ? void 0 : t.id.startsWith("camera")),
    ea = null != $ && $.verified && !$.bot,
    er = null != V && !(0, c.isPrivateGuildChannel)(V);
  return (0, n.jsxs)(s.Fragment, {
    children: [es ? (0, n.jsx)(G.default, {
      selectedSource: t,
      onChangeVideoDeviceSource: j,
      onChangeAudioDevice: M
    }) : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(Z, {
        selectSource: p,
        sourceChanged: d,
        onChangeSource: j,
        selectedSource: t
      }), null != el ? (0, n.jsx)(X, {
        text: el
      }) : null, (0, b.isWindows)() && null != t && t.id.startsWith("screen") && null == el ? (0, n.jsx)(q, {
        enabled: I,
        onChange: y
      }) : null]
    }), g && null != h ? (0, n.jsx)(J, {
      guildId: h,
      onChange: O
    }) : null, null != V ? (0, n.jsx)(U.default, {
      channel: V
    }) : (0, n.jsx)(H.default, {
      guildId: h,
      selectedChannelId: a,
      onChangeSelectedChannelId: L
    }), null != h && ea && er ? (0, n.jsx)(Q, {
      guildId: h
    }) : null, w ? (0, n.jsx)(X, {
      text: z.default.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
    }) : null, K ? (0, n.jsx)(X, {
      text: z.default.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
        helpCenterLink: D.default.getArticleURL(W.HelpdeskArticles.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, (0, n.jsx)(B.default, {
      selectedPreset: r,
      selectedFPS: l,
      selectedResolution: u,
      targetGuildPremiumTier: E,
      onClose: v,
      onFPSChange: A,
      onResolutionChange: R,
      onPresetChange: T,
      captureDeviceSelected: es
    }), en]
  })
}