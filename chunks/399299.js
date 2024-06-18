"use strict";
n.d(t, {
  Z: function() {
    return X
  }
});
var l = n(735250),
  s = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(442837),
  o = n(481060),
  u = n(230711),
  c = n(812206),
  d = n(605436),
  m = n(924557),
  E = n(954564),
  _ = n(98131),
  S = n(594190),
  h = n(695346),
  g = n(494620),
  C = n(592125),
  I = n(650774),
  N = n(430824),
  Z = n(131951),
  x = n(944486),
  f = n(594174),
  A = n(449224),
  T = n(285952),
  R = n(366695),
  v = n(346656),
  L = n(626135),
  p = n(823379),
  M = n(63063),
  O = n(358085),
  j = n(653255),
  P = n(989941),
  D = n(618407),
  G = n(586290),
  U = n(233037),
  b = n(810013),
  w = n(537135),
  y = n(641115),
  k = n(143135),
  B = n(70722),
  H = n(981631),
  V = n(526761),
  F = n(689938),
  W = n(29707),
  z = n(555066);

function K(e) {
  let {
    selectedSource: t,
    selectSource: n,
    sourceChanged: s,
    onChangeSource: a
  } = e, i = (0, r.e7)([S.ZP, A.Z], () => (0, O.isWindows)() ? (0, P.Z)(S.ZP, A.Z) : null), u = (0, r.e7)([c.Z], () => (null == i ? void 0 : i.id) != null ? c.Z.getApplication(i.id) : null), d = (0, r.e7)([S.ZP], () => S.ZP.getRunningGames()), m = (0, r.Wu)([c.Z], () => d.map(e => null != e.id ? c.Z.getApplication(e.id) : null).filter(p.lm), [d]), E = null;
  if (null != t ? E = t.name : null != i && (E = i.name), null == E) return null;
  let _ = (0, k.Z)(i, t, d),
    h = s ? m.find(e => {
      let {
        id: t
      } = e;
      return t === (null == _ ? void 0 : _.id)
    }) : u,
    g = null != t && t.id.startsWith("screen") ? o.ScreenIcon : o.BrowserIcon;
  return (0, l.jsx)(o.FormItem, {
    title: F.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
    className: z.modalContent,
    titleClassName: z.formItemTitleVerySlim,
    children: (0, l.jsxs)(w.Z, {
      children: [null != h ? (0, l.jsx)(R.Z, {
        game: h,
        size: R.Z.Sizes.XSMALL,
        className: W.selectedIcon
      }) : (0, l.jsx)(g, {
        className: W.selectedIcon
      }), (0, l.jsx)("span", {
        className: W.ellipsisText,
        children: E
      }), n ? (0, l.jsx)(o.Button, {
        className: W.changeButton,
        color: o.Button.Colors.PRIMARY,
        size: o.Button.Sizes.SMALL,
        onClick: a,
        children: F.Z.Messages.CHANGE
      }) : null]
    })
  })
}

function Y(e) {
  let {
    onChange: t,
    guildId: n
  } = e, s = (0, r.e7)([N.Z], () => N.Z.getGuild(n));
  return null == s ? (t(), null) : (0, l.jsx)(o.FormItem, {
    title: F.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
    className: z.modalContent,
    titleClassName: z.formItemTitle,
    children: (0, l.jsxs)(w.Z, {
      children: [(0, l.jsx)(v.Z, {
        guild: s,
        size: v.Z.Sizes.SMALLER,
        className: W.selectedIcon
      }), (0, l.jsx)("span", {
        className: W.ellipsisText,
        children: s.toString()
      }), (0, l.jsx)(o.Button, {
        className: W.changeButton,
        color: o.Button.Colors.PRIMARY,
        size: o.Button.Sizes.SMALL,
        onClick: t,
        children: F.Z.Messages.CHANGE
      })]
    })
  })
}

function q(e) {
  let {
    text: t
  } = e;
  return (0, l.jsxs)(T.Z, {
    align: T.Z.Align.CENTER,
    className: W.warning,
    children: [(0, l.jsx)(o.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: W.warningIcon
    }), (0, l.jsx)(o.Text, {
      color: "none",
      variant: "text-xs/normal",
      children: t
    })]
  })
}

function Q(e) {
  let {
    guildId: t
  } = e, n = (0, r.e7)([I.Z], () => {
    var e;
    return null !== (e = I.Z.getMemberCount(t)) && void 0 !== e ? e : 0
  }), a = h.eo.useSetting(), u = s.useCallback((e, t) => {
    h.eo.updateSetting(t), L.default.track(H.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []);
  return n >= 2 && n <= B.tB ? (0, l.jsx)(o.FormItem, {
    className: i()(z.modalContent, W.checkboxRow),
    children: (0, l.jsx)(o.Checkbox, {
      value: !!a,
      type: o.Checkbox.Types.INVERTED,
      onChange: u,
      children: (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: F.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
      })
    })
  }) : null
}

function J(e) {
  let {
    enabled: t,
    onChange: n,
    screen: a
  } = e, r = s.useCallback((e, t) => {
    n(t)
  }, [n]);
  return (0, l.jsx)(o.FormItem, {
    className: i()(z.modalContent, W.checkboxRow),
    children: (0, l.jsx)(o.Checkbox, {
      value: t,
      type: o.Checkbox.Types.INVERTED,
      onChange: r,
      children: (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: a ? F.Z.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL : F.Z.Messages.GO_LIVE_MODAL_ENABLE_APP_SOUNDSHARE_LABEL
      })
    })
  })
}

function X(e) {
  let {
    selectedSource: t,
    selectedFPS: n,
    selectedChannelId: a,
    selectedPreset: i,
    selectedResolution: o,
    sourceChanged: c,
    selectedGuildId: S,
    targetGuildPremiumTier: h,
    selectSource: I,
    selectGuild: N,
    sound: A,
    onClose: T,
    onChangeSelectedFPS: R,
    onChangeSelectedResolution: v,
    onChangeSelectedPreset: L,
    onChangeSelectedChannelId: p,
    onChangeSource: O,
    onChangeAudioDevice: P,
    onChangeGuild: w,
    onChangeSound: k,
    isAnimationDone: B
  } = e, z = (0, r.e7)([x.Z, C.Z], () => C.Z.getChannel(x.Z.getVoiceChannelId())), X = (0, r.e7)([j.Z], () => j.Z.GPUDriversOutdated), $ = (0, r.e7)([j.Z], () => j.Z.problematicGPUDriver), ee = (0, r.e7)([f.default], () => f.default.getCurrentUser()), et = (0, m.Go)(), en = (0, m.Zq)({
    autoTrackExposure: !et
  }), el = (0, D.Z)();
  null != t && t.id.startsWith("screen") && !Z.Z.supportsScreenSoundshare() && (el = F.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
  let es = et ? (0, l.jsx)(_.Z, {
      guildId: S,
      isAnimationDone: B
    }) : en ? (0, l.jsx)(E.Z, {}) : void 0,
    ea = !!(null == t ? void 0 : t.id.startsWith("camera")),
    ei = null != ee && ee.verified && !ee.bot,
    er = null != z && !(0, d.Yk)(z),
    eo = !(0, r.e7)([Z.Z], () => Z.Z.getHardwareH264());
  return (0, l.jsxs)(s.Fragment, {
    children: [ea ? (0, l.jsx)(G.Z, {
      selectedSource: t,
      onChangeVideoDeviceSource: O,
      onChangeAudioDevice: P
    }) : (0, l.jsxs)("div", {
      children: [(0, l.jsx)(K, {
        selectSource: I,
        sourceChanged: c,
        onChangeSource: O,
        selectedSource: t
      }), null != el ? (0, l.jsx)(q, {
        text: el
      }) : null, null != t && null == el ? (0, l.jsx)(J, {
        enabled: A,
        onChange: k,
        screen: t.id.startsWith("screen")
      }) : null]
    }), N && null != S ? (0, l.jsx)(Y, {
      guildId: S,
      onChange: w
    }) : null, null != z ? (0, l.jsx)(b.Z, {
      channel: z
    }) : (0, l.jsx)(U.Z, {
      guildId: S,
      selectedChannelId: a,
      onChangeSelectedChannelId: p
    }), null != S && ei && er ? (0, l.jsx)(Q, {
      guildId: S
    }) : null, X ? (0, l.jsx)(q, {
      text: F.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
    }) : null, $ ? (0, l.jsx)(q, {
      text: F.Z.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
        helpCenterLink: M.Z.getArticleURL(H.BhN.NVIDIA_DRIVER_ISSUES)
      })
    }) : null, eo && (0, l.jsx)(g.Z, {
      look: g.z.WARNING,
      className: W.hardwareWarning,
      children: F.Z.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
        onClick: () => {
          T(), u.Z.open(H.oAB.VOICE, null, {
            scrollPosition: V.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        }
      })
    }), (0, l.jsx)(y.Z, {
      selectedGuildId: S,
      selectedChannelId: a,
      selectedPreset: i,
      selectedFPS: n,
      selectedResolution: o,
      targetGuildPremiumTier: h,
      onClose: T,
      onFPSChange: R,
      onResolutionChange: v,
      onPresetChange: L,
      captureDeviceSelected: ea
    }), es]
  })
}