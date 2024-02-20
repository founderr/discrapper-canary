"use strict";
l.r(t), l.d(t, {
  default: function() {
    return $
  }
});
var n = l("37983"),
  a = l("884691"),
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
  C = l("161454"),
  E = l("845579"),
  h = l("42203"),
  N = l("525065"),
  g = l("305961"),
  _ = l("42887"),
  p = l("18494"),
  I = l("697218"),
  x = l("703370"),
  v = l("145131"),
  A = l("953109"),
  R = l("476263"),
  T = l("267675"),
  L = l("423487"),
  M = l("233437"),
  j = l("599110"),
  O = l("449008"),
  D = l("701909"),
  P = l("773336"),
  b = l("767960"),
  U = l("375202"),
  G = l("916262"),
  y = l("75974"),
  V = l("359812"),
  w = l("273405"),
  H = l("326620"),
  k = l("985997"),
  F = l("16750"),
  B = l("706530"),
  W = l("49111"),
  z = l("782340"),
  Z = l("481252"),
  Y = l("961523");

function K(e) {
  let {
    selectedSource: t,
    selectSource: l,
    sourceChanged: a,
    onChangeSource: s
  } = e, r = (0, i.useStateFromStores)([C.default, x.default], () => (0, P.isWindows)() ? (0, U.default)(C.default, x.default) : null), o = (0, i.useStateFromStores)([d.default], () => (null == r ? void 0 : r.id) != null ? d.default.getApplication(r.id) : null), c = (0, i.useStateFromStores)([C.default], () => C.default.getRunningGames()), f = (0, i.useStateFromStoresArray)([d.default], () => c.map(e => null != e.id ? d.default.getApplication(e.id) : null).filter(O.isNotNullish), [c]), m = null;
  if (null != t ? m = t.name : null != r && (m = r.name), null == m) return null;
  let S = (0, F.default)(r, t, c),
    E = a ? f.find(e => {
      let {
        id: t
      } = e;
      return t === (null == S ? void 0 : S.id)
    }) : o,
    h = null != t && t.id.startsWith("screen") ? T.default : M.default;
  return (0, n.jsx)(u.FormItem, {
    title: z.default.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
    className: Y.modalContent,
    titleClassName: Y.formItemTitleVerySlim,
    children: (0, n.jsxs)(H.default, {
      children: [null != E ? (0, n.jsx)(A.default, {
        game: E,
        size: A.default.Sizes.XSMALL,
        className: Z.selectedIcon
      }) : (0, n.jsx)(h, {
        className: Z.selectedIcon
      }), (0, n.jsx)("span", {
        className: Z.ellipsisText,
        children: m
      }), l ? (0, n.jsx)(u.Button, {
        className: Z.changeButton,
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.SMALL,
        onClick: s,
        children: z.default.Messages.CHANGE
      }) : null]
    })
  })
}

function J(e) {
  let {
    onChange: t,
    guildId: l
  } = e, a = (0, i.useStateFromStores)([g.default], () => g.default.getGuild(l));
  return null == a ? (t(), null) : (0, n.jsx)(u.FormItem, {
    title: z.default.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
    className: Y.modalContent,
    titleClassName: Y.formItemTitle,
    children: (0, n.jsxs)(H.default, {
      children: [(0, n.jsx)(R.default, {
        guild: a,
        size: R.default.Sizes.SMALLER,
        className: Z.selectedIcon
      }), (0, n.jsx)("span", {
        className: Z.ellipsisText,
        children: a.toString()
      }), (0, n.jsx)(u.Button, {
        className: Z.changeButton,
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
    className: Z.warning,
    children: [(0, n.jsx)(L.default, {
      className: Z.warningIcon
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
  } = e, l = (0, i.useStateFromStores)([N.default], () => {
    var e;
    return null !== (e = N.default.getMemberCount(t)) && void 0 !== e ? e : 0
  }), s = E.NotifyFriendsOnGoLive.useSetting(), o = a.useCallback((e, t) => {
    E.NotifyFriendsOnGoLive.updateSetting(t), j.default.track(W.AnalyticEvents.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []), d = l >= 2 && l <= B.STREAM_NOTIFY_GUILD_MAX_SIZE;
  return d ? (0, n.jsx)(u.FormItem, {
    className: r(Y.modalContent, Z.checkboxRow),
    children: (0, n.jsx)(u.Checkbox, {
      value: !!s,
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
  } = e, s = a.useCallback((e, t) => {
    l(t)
  }, [l]);
  return (0, n.jsx)(u.FormItem, {
    className: r(Y.modalContent, Z.checkboxRow),
    children: (0, n.jsx)(u.Checkbox, {
      value: t,
      type: u.Checkbox.Types.INVERTED,
      onChange: s,
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
    selectedChannelId: s,
    selectedPreset: r,
    selectedResolution: u,
    sourceChanged: d,
    selectedGuildId: C,
    targetGuildPremiumTier: E,
    selectSource: N,
    selectGuild: g,
    sound: x,
    onClose: v,
    onChangeSelectedFPS: A,
    onChangeSelectedResolution: R,
    onChangeSelectedPreset: T,
    onChangeSelectedChannelId: L,
    onChangeSource: M,
    onChangeAudioDevice: j,
    onChangeGuild: O,
    onChangeSound: U,
    isAnimationDone: H
  } = e, F = (0, i.useStateFromStores)([p.default, h.default], () => h.default.getChannel(p.default.getVoiceChannelId())), B = (0, i.useStateFromStores)([b.default], () => b.default.GPUDriversOutdated), Z = (0, i.useStateFromStores)([b.default], () => b.default.problematicGPUDriver), Y = (0, i.useStateFromStores)([_.default], () => _.default.getSoundshareEnabled()), $ = (0, i.useStateFromStores)([I.default], () => I.default.getCurrentUser()), ee = (0, f.useEnableClips)(), et = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !ee
  }), el = (0, G.default)();
  null != t && t.id.startsWith("screen") && !_.default.supportsScreenSoundshare() ? el = z.default.Messages.GO_LIVE_SCREENSHARE_NO_SOUND : null == el && _.default.supportsEnableSoundshare() && Y !== W.SoundshareEnableState.ENABLED && (el = z.default.Messages.GO_LIVE_SCREENSHARE_ENABLE_FOR_SOUNDSHARE.format({
    onVoiceSettingsClick: () => {
      v(), o.default.open(W.UserSettingsSections.VOICE)
    }
  }));
  let en = ee ? (0, n.jsx)(S.default, {
      guildId: C,
      isAnimationDone: H
    }) : et ? (0, n.jsx)(m.default, {}) : void 0,
    ea = !!(null == t ? void 0 : t.id.startsWith("camera")),
    es = null != $ && $.verified && !$.bot,
    er = null != F && !(0, c.isPrivateGuildChannel)(F);
  return (0, n.jsxs)(a.Fragment, {
    children: [ea ? (0, n.jsx)(y.default, {
      selectedSource: t,
      onChangeVideoDeviceSource: M,
      onChangeAudioDevice: j
    }) : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(K, {
        selectSource: N,
        sourceChanged: d,
        onChangeSource: M,
        selectedSource: t
      }), null != el ? (0, n.jsx)(X, {
        text: el
      }) : null, (0, P.isWindows)() && null != t && t.id.startsWith("screen") && null == el ? (0, n.jsx)(q, {
        enabled: x,
        onChange: U
      }) : null]
    }), g && null != C ? (0, n.jsx)(J, {
      guildId: C,
      onChange: O
    }) : null, null != F ? (0, n.jsx)(w.default, {
      channel: F
    }) : (0, n.jsx)(V.default, {
      guildId: C,
      selectedChannelId: s,
      onChangeSelectedChannelId: L
    }), null != C && es && er ? (0, n.jsx)(Q, {
      guildId: C
    }) : null, B ? (0, n.jsx)(X, {
      text: z.default.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
    }) : null, Z ? (0, n.jsx)(X, {
      text: z.default.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
        helpCenterLink: D.default.getArticleURL(W.HelpdeskArticles.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, (0, n.jsx)(k.default, {
      selectedPreset: r,
      selectedFPS: l,
      selectedResolution: u,
      targetGuildPremiumTier: E,
      onClose: v,
      onFPSChange: A,
      onResolutionChange: R,
      onPresetChange: T,
      captureDeviceSelected: ea
    }), en]
  })
}