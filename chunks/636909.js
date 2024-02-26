"use strict";
l.r(t), l.d(t, {
  default: function() {
    return et
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
  E = l("161454"),
  C = l("845579"),
  h = l("216503"),
  g = l("42203"),
  _ = l("525065"),
  N = l("305961"),
  p = l("42887"),
  I = l("18494"),
  x = l("697218"),
  A = l("703370"),
  R = l("145131"),
  v = l("953109"),
  T = l("476263"),
  L = l("267675"),
  M = l("423487"),
  O = l("233437"),
  j = l("599110"),
  D = l("449008"),
  P = l("701909"),
  G = l("773336"),
  b = l("767960"),
  U = l("375202"),
  w = l("916262"),
  V = l("75974"),
  k = l("359812"),
  y = l("273405"),
  F = l("326620"),
  B = l("985997"),
  H = l("16750"),
  W = l("706530"),
  z = l("49111"),
  K = l("397336"),
  Y = l("782340"),
  Z = l("481252"),
  J = l("961523");

function Q(e) {
  let {
    selectedSource: t,
    selectSource: l,
    sourceChanged: a,
    onChangeSource: s
  } = e, r = (0, i.useStateFromStores)([E.default, A.default], () => (0, G.isWindows)() ? (0, U.default)(E.default, A.default) : null), o = (0, i.useStateFromStores)([d.default], () => (null == r ? void 0 : r.id) != null ? d.default.getApplication(r.id) : null), c = (0, i.useStateFromStores)([E.default], () => E.default.getRunningGames()), f = (0, i.useStateFromStoresArray)([d.default], () => c.map(e => null != e.id ? d.default.getApplication(e.id) : null).filter(D.isNotNullish), [c]), m = null;
  if (null != t ? m = t.name : null != r && (m = r.name), null == m) return null;
  let S = (0, H.default)(r, t, c),
    C = a ? f.find(e => {
      let {
        id: t
      } = e;
      return t === (null == S ? void 0 : S.id)
    }) : o,
    h = null != t && t.id.startsWith("screen") ? L.default : O.default;
  return (0, n.jsx)(u.FormItem, {
    title: Y.default.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
    className: J.modalContent,
    titleClassName: J.formItemTitleVerySlim,
    children: (0, n.jsxs)(F.default, {
      children: [null != C ? (0, n.jsx)(v.default, {
        game: C,
        size: v.default.Sizes.XSMALL,
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
        children: Y.default.Messages.CHANGE
      }) : null]
    })
  })
}

function X(e) {
  let {
    onChange: t,
    guildId: l
  } = e, a = (0, i.useStateFromStores)([N.default], () => N.default.getGuild(l));
  return null == a ? (t(), null) : (0, n.jsx)(u.FormItem, {
    title: Y.default.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
    className: J.modalContent,
    titleClassName: J.formItemTitle,
    children: (0, n.jsxs)(F.default, {
      children: [(0, n.jsx)(T.default, {
        guild: a,
        size: T.default.Sizes.SMALLER,
        className: Z.selectedIcon
      }), (0, n.jsx)("span", {
        className: Z.ellipsisText,
        children: a.toString()
      }), (0, n.jsx)(u.Button, {
        className: Z.changeButton,
        color: u.Button.Colors.PRIMARY,
        size: u.Button.Sizes.SMALL,
        onClick: t,
        children: Y.default.Messages.CHANGE
      })]
    })
  })
}

function q(e) {
  let {
    text: t
  } = e;
  return (0, n.jsxs)(R.default, {
    align: R.default.Align.CENTER,
    className: Z.warning,
    children: [(0, n.jsx)(M.default, {
      className: Z.warningIcon
    }), (0, n.jsx)(u.Text, {
      color: "none",
      variant: "text-xs/normal",
      children: t
    })]
  })
}

function $(e) {
  let {
    guildId: t
  } = e, l = (0, i.useStateFromStores)([_.default], () => {
    var e;
    return null !== (e = _.default.getMemberCount(t)) && void 0 !== e ? e : 0
  }), s = C.NotifyFriendsOnGoLive.useSetting(), o = a.useCallback((e, t) => {
    C.NotifyFriendsOnGoLive.updateSetting(t), j.default.track(z.AnalyticEvents.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []), d = l >= 2 && l <= W.STREAM_NOTIFY_GUILD_MAX_SIZE;
  return d ? (0, n.jsx)(u.FormItem, {
    className: r(J.modalContent, Z.checkboxRow),
    children: (0, n.jsx)(u.Checkbox, {
      value: !!s,
      type: u.Checkbox.Types.INVERTED,
      onChange: o,
      children: (0, n.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: Y.default.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
      })
    })
  }) : null
}

function ee(e) {
  let {
    enabled: t,
    onChange: l
  } = e, s = a.useCallback((e, t) => {
    l(t)
  }, [l]);
  return (0, n.jsx)(u.FormItem, {
    className: r(J.modalContent, Z.checkboxRow),
    children: (0, n.jsx)(u.Checkbox, {
      value: t,
      type: u.Checkbox.Types.INVERTED,
      onChange: s,
      children: (0, n.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: Y.default.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL
      })
    })
  })
}

function et(e) {
  let {
    selectedSource: t,
    selectedFPS: l,
    selectedChannelId: s,
    selectedPreset: r,
    selectedResolution: u,
    sourceChanged: d,
    selectedGuildId: E,
    targetGuildPremiumTier: C,
    selectSource: _,
    selectGuild: N,
    sound: A,
    onClose: R,
    onChangeSelectedFPS: v,
    onChangeSelectedResolution: T,
    onChangeSelectedPreset: L,
    onChangeSelectedChannelId: M,
    onChangeSource: O,
    onChangeAudioDevice: j,
    onChangeGuild: D,
    onChangeSound: U,
    isAnimationDone: F
  } = e, H = (0, i.useStateFromStores)([I.default, g.default], () => g.default.getChannel(I.default.getVoiceChannelId())), W = (0, i.useStateFromStores)([b.default], () => b.default.GPUDriversOutdated), J = (0, i.useStateFromStores)([b.default], () => b.default.problematicGPUDriver), et = (0, i.useStateFromStores)([p.default], () => p.default.getSoundshareEnabled()), el = (0, i.useStateFromStores)([x.default], () => x.default.getCurrentUser()), en = (0, f.useEnableClips)(), ea = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !en
  }), es = (0, w.default)();
  null != t && t.id.startsWith("screen") && !p.default.supportsScreenSoundshare() ? es = Y.default.Messages.GO_LIVE_SCREENSHARE_NO_SOUND : null == es && p.default.supportsEnableSoundshare() && et !== z.SoundshareEnableState.ENABLED && (es = Y.default.Messages.GO_LIVE_SCREENSHARE_ENABLE_FOR_SOUNDSHARE.format({
    onVoiceSettingsClick: () => {
      R(), o.default.open(z.UserSettingsSections.VOICE)
    }
  }));
  let er = en ? (0, n.jsx)(S.default, {
      guildId: E,
      isAnimationDone: F
    }) : ea ? (0, n.jsx)(m.default, {}) : void 0,
    ei = !!(null == t ? void 0 : t.id.startsWith("camera")),
    eu = null != el && el.verified && !el.bot,
    eo = null != H && !(0, c.isPrivateGuildChannel)(H),
    ed = !(0, i.useStateFromStores)([p.default], () => p.default.getHardwareH264());
  return (0, n.jsxs)(a.Fragment, {
    children: [ei ? (0, n.jsx)(V.default, {
      selectedSource: t,
      onChangeVideoDeviceSource: O,
      onChangeAudioDevice: j
    }) : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(Q, {
        selectSource: _,
        sourceChanged: d,
        onChangeSource: O,
        selectedSource: t
      }), null != es ? (0, n.jsx)(q, {
        text: es
      }) : null, (0, G.isWindows)() && null != t && t.id.startsWith("screen") && null == es ? (0, n.jsx)(ee, {
        enabled: A,
        onChange: U
      }) : null]
    }), N && null != E ? (0, n.jsx)(X, {
      guildId: E,
      onChange: D
    }) : null, null != H ? (0, n.jsx)(y.default, {
      channel: H
    }) : (0, n.jsx)(k.default, {
      guildId: E,
      selectedChannelId: s,
      onChangeSelectedChannelId: M
    }), null != E && eu && eo ? (0, n.jsx)($, {
      guildId: E
    }) : null, W ? (0, n.jsx)(q, {
      text: Y.default.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
    }) : null, J ? (0, n.jsx)(q, {
      text: Y.default.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
        helpCenterLink: P.default.getArticleURL(z.HelpdeskArticles.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, ed && (0, n.jsx)(h.default, {
      look: h.InfoBoxLooks.WARNING,
      className: Z.hardwareWarning,
      children: Y.default.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
        onClick: () => {
          R(), o.default.open(z.UserSettingsSections.VOICE, null, {
            scrollPosition: K.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        }
      })
    }), (0, n.jsx)(B.default, {
      selectedPreset: r,
      selectedFPS: l,
      selectedResolution: u,
      targetGuildPremiumTier: C,
      onClose: R,
      onFPSChange: v,
      onResolutionChange: T,
      onPresetChange: L,
      captureDeviceSelected: ei
    }), er]
  })
}