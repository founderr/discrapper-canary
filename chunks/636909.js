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
  E = l("161454"),
  C = l("845579"),
  h = l("42203"),
  g = l("525065"),
  _ = l("305961"),
  N = l("42887"),
  p = l("18494"),
  I = l("697218"),
  x = l("703370"),
  A = l("145131"),
  R = l("953109"),
  v = l("476263"),
  T = l("267675"),
  L = l("423487"),
  M = l("233437"),
  O = l("599110"),
  j = l("449008"),
  D = l("701909"),
  P = l("773336"),
  b = l("767960"),
  G = l("375202"),
  U = l("916262"),
  k = l("75974"),
  V = l("359812"),
  w = l("273405"),
  y = l("326620"),
  F = l("985997"),
  B = l("16750"),
  H = l("706530"),
  W = l("49111"),
  z = l("782340"),
  K = l("481252"),
  Y = l("961523");

function Z(e) {
  let {
    selectedSource: t,
    selectSource: l,
    sourceChanged: n,
    onChangeSource: s
  } = e, r = (0, i.useStateFromStores)([E.default, x.default], () => (0, P.isWindows)() ? (0, G.default)(E.default, x.default) : null), o = (0, i.useStateFromStores)([d.default], () => (null == r ? void 0 : r.id) != null ? d.default.getApplication(r.id) : null), c = (0, i.useStateFromStores)([E.default], () => E.default.getRunningGames()), f = (0, i.useStateFromStoresArray)([d.default], () => c.map(e => null != e.id ? d.default.getApplication(e.id) : null).filter(j.isNotNullish), [c]), m = null;
  if (null != t ? m = t.name : null != r && (m = r.name), null == m) return null;
  let S = (0, B.default)(r, t, c),
    C = n ? f.find(e => {
      let {
        id: t
      } = e;
      return t === (null == S ? void 0 : S.id)
    }) : o,
    h = null != t && t.id.startsWith("screen") ? T.default : M.default;
  return (0, a.jsx)(u.FormItem, {
    title: z.default.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
    className: Y.modalContent,
    titleClassName: Y.formItemTitleVerySlim,
    children: (0, a.jsxs)(y.default, {
      children: [null != C ? (0, a.jsx)(R.default, {
        game: C,
        size: R.default.Sizes.XSMALL,
        className: K.selectedIcon
      }) : (0, a.jsx)(h, {
        className: K.selectedIcon
      }), (0, a.jsx)("span", {
        className: K.ellipsisText,
        children: m
      }), l ? (0, a.jsx)(u.Button, {
        className: K.changeButton,
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
  } = e, n = (0, i.useStateFromStores)([_.default], () => _.default.getGuild(l));
  return null == n ? (t(), null) : (0, a.jsx)(u.FormItem, {
    title: z.default.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
    className: Y.modalContent,
    titleClassName: Y.formItemTitle,
    children: (0, a.jsxs)(y.default, {
      children: [(0, a.jsx)(v.default, {
        guild: n,
        size: v.default.Sizes.SMALLER,
        className: K.selectedIcon
      }), (0, a.jsx)("span", {
        className: K.ellipsisText,
        children: n.toString()
      }), (0, a.jsx)(u.Button, {
        className: K.changeButton,
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.SMALL,
        onClick: t,
        children: z.default.Messages.CHANGE
      })]
    })
  })
}

function Q(e) {
  let {
    text: t
  } = e;
  return (0, a.jsxs)(A.default, {
    align: A.default.Align.CENTER,
    className: K.warning,
    children: [(0, a.jsx)(L.default, {
      className: K.warningIcon
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
  } = e, l = (0, i.useStateFromStores)([g.default], () => {
    var e;
    return null !== (e = g.default.getMemberCount(t)) && void 0 !== e ? e : 0
  }), s = C.NotifyFriendsOnGoLive.useSetting(), o = n.useCallback((e, t) => {
    C.NotifyFriendsOnGoLive.updateSetting(t), O.default.track(W.AnalyticEvents.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []), d = l >= 2 && l <= H.STREAM_NOTIFY_GUILD_MAX_SIZE;
  return d ? (0, a.jsx)(u.FormItem, {
    className: r(Y.modalContent, K.checkboxRow),
    children: (0, a.jsx)(u.Checkbox, {
      value: !!s,
      type: u.Checkbox.Types.INVERTED,
      onChange: o,
      children: (0, a.jsx)(u.Text, {
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
  } = e, s = n.useCallback((e, t) => {
    l(t)
  }, [l]);
  return (0, a.jsx)(u.FormItem, {
    className: r(Y.modalContent, K.checkboxRow),
    children: (0, a.jsx)(u.Checkbox, {
      value: t,
      type: u.Checkbox.Types.INVERTED,
      onChange: s,
      children: (0, a.jsx)(u.Text, {
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
    selectedGuildId: E,
    targetGuildPremiumTier: C,
    selectSource: g,
    selectGuild: _,
    sound: x,
    onClose: A,
    onChangeSelectedFPS: R,
    onChangeSelectedResolution: v,
    onChangeSelectedPreset: T,
    onChangeSelectedChannelId: L,
    onChangeSource: M,
    onChangeAudioDevice: O,
    onChangeGuild: j,
    onChangeSound: G,
    isAnimationDone: y
  } = e, B = (0, i.useStateFromStores)([p.default, h.default], () => h.default.getChannel(p.default.getVoiceChannelId())), H = (0, i.useStateFromStores)([b.default], () => b.default.GPUDriversOutdated), K = (0, i.useStateFromStores)([b.default], () => b.default.problematicGPUDriver), Y = (0, i.useStateFromStores)([N.default], () => N.default.getSoundshareEnabled()), $ = (0, i.useStateFromStores)([I.default], () => I.default.getCurrentUser()), ee = (0, f.useEnableClips)(), et = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !ee
  }), el = (0, U.default)();
  null != t && t.id.startsWith("screen") && !N.default.supportsScreenSoundshare() ? el = z.default.Messages.GO_LIVE_SCREENSHARE_NO_SOUND : null == el && N.default.supportsEnableSoundshare() && Y !== W.SoundshareEnableState.ENABLED && (el = z.default.Messages.GO_LIVE_SCREENSHARE_ENABLE_FOR_SOUNDSHARE.format({
    onVoiceSettingsClick: () => {
      A(), o.default.open(W.UserSettingsSections.VOICE)
    }
  }));
  let ea = ee ? (0, a.jsx)(S.default, {
      guildId: E,
      isAnimationDone: y
    }) : et ? (0, a.jsx)(m.default, {}) : void 0,
    en = !!(null == t ? void 0 : t.id.startsWith("camera")),
    es = null != $ && $.verified && !$.bot,
    er = null != B && !(0, c.isPrivateGuildChannel)(B);
  return (0, a.jsxs)(n.Fragment, {
    children: [en ? (0, a.jsx)(k.default, {
      selectedSource: t,
      onChangeVideoDeviceSource: M,
      onChangeAudioDevice: O
    }) : (0, a.jsxs)("div", {
      children: [(0, a.jsx)(Z, {
        selectSource: g,
        sourceChanged: d,
        onChangeSource: M,
        selectedSource: t
      }), null != el ? (0, a.jsx)(Q, {
        text: el
      }) : null, (0, P.isWindows)() && null != t && t.id.startsWith("screen") && null == el ? (0, a.jsx)(q, {
        enabled: x,
        onChange: G
      }) : null]
    }), _ && null != E ? (0, a.jsx)(J, {
      guildId: E,
      onChange: j
    }) : null, null != B ? (0, a.jsx)(w.default, {
      channel: B
    }) : (0, a.jsx)(V.default, {
      guildId: E,
      selectedChannelId: s,
      onChangeSelectedChannelId: L
    }), null != E && es && er ? (0, a.jsx)(X, {
      guildId: E
    }) : null, H ? (0, a.jsx)(Q, {
      text: z.default.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
    }) : null, K ? (0, a.jsx)(Q, {
      text: z.default.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
        helpCenterLink: D.default.getArticleURL(W.HelpdeskArticles.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, (0, a.jsx)(F.default, {
      selectedPreset: r,
      selectedFPS: l,
      selectedResolution: u,
      targetGuildPremiumTier: C,
      onClose: A,
      onFPSChange: R,
      onResolutionChange: v,
      onPresetChange: T,
      captureDeviceSelected: en
    }), ea]
  })
}