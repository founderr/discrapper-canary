t.d(n, {
  Z: function() {
    return X
  }
});
var l = t(735250),
  s = t(470079),
  a = t(120356),
  i = t.n(a),
  r = t(442837),
  o = t(481060),
  u = t(230711),
  c = t(812206),
  d = t(605436),
  m = t(924557),
  E = t(954564),
  _ = t(98131),
  S = t(594190),
  h = t(695346),
  g = t(494620),
  C = t(592125),
  I = t(650774),
  Z = t(430824),
  N = t(131951),
  x = t(944486),
  f = t(594174),
  A = t(449224),
  T = t(285952),
  R = t(366695),
  v = t(346656),
  L = t(626135),
  p = t(823379),
  M = t(63063),
  O = t(358085),
  j = t(653255),
  P = t(989941),
  D = t(618407),
  G = t(586290),
  U = t(233037),
  b = t(810013),
  w = t(537135),
  y = t(641115),
  k = t(143135),
  B = t(70722),
  H = t(981631),
  V = t(526761),
  F = t(689938),
  W = t(816047),
  z = t(278768);

function K(e) {
  let {
    selectedSource: n,
    selectSource: t,
    sourceChanged: s,
    onChangeSource: a
  } = e, i = (0, r.e7)([S.ZP, A.Z], () => (0, O.isWindows)() ? (0, P.Z)(S.ZP, A.Z) : null), u = (0, r.e7)([c.Z], () => (null == i ? void 0 : i.id) != null ? c.Z.getApplication(i.id) : null), d = (0, r.e7)([S.ZP], () => S.ZP.getRunningGames()), m = (0, r.Wu)([c.Z], () => d.map(e => null != e.id ? c.Z.getApplication(e.id) : null).filter(p.lm), [d]), E = null;
  if (null != n ? E = n.name : null != i && (E = i.name), null == E) return null;
  let _ = (0, k.Z)(i, n, d),
    h = s ? m.find(e => {
      let {
        id: n
      } = e;
      return n === (null == _ ? void 0 : _.id)
    }) : u,
    g = null != n && n.id.startsWith("screen") ? o.ScreenIcon : o.BrowserIcon;
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
      }), t ? (0, l.jsx)(o.Button, {
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
    onChange: n,
    guildId: t
  } = e, s = (0, r.e7)([Z.Z], () => Z.Z.getGuild(t));
  return null == s ? (n(), null) : (0, l.jsx)(o.FormItem, {
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
        onClick: n,
        children: F.Z.Messages.CHANGE
      })]
    })
  })
}

function q(e) {
  let {
    text: n
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
      children: n
    })]
  })
}

function Q(e) {
  let {
    guildId: n
  } = e, t = (0, r.e7)([I.Z], () => {
    var e;
    return null !== (e = I.Z.getMemberCount(n)) && void 0 !== e ? e : 0
  }), a = h.eo.useSetting(), u = s.useCallback((e, n) => {
    h.eo.updateSetting(n), L.default.track(H.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
      value: n
    })
  }, []);
  return t >= 2 && t <= B.tB ? (0, l.jsx)(o.FormItem, {
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
    enabled: n,
    onChange: t,
    screen: a
  } = e, r = s.useCallback((e, n) => {
    t(n)
  }, [t]);
  return (0, l.jsx)(o.FormItem, {
    className: i()(z.modalContent, W.checkboxRow),
    children: (0, l.jsx)(o.Checkbox, {
      value: n,
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
    selectedSource: n,
    selectedFPS: t,
    selectedChannelId: a,
    selectedPreset: i,
    selectedResolution: o,
    sourceChanged: c,
    selectedGuildId: S,
    targetGuildPremiumTier: h,
    selectSource: I,
    selectGuild: Z,
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
  } = e, z = (0, r.e7)([x.Z, C.Z], () => C.Z.getChannel(x.Z.getVoiceChannelId())), X = (0, r.e7)([j.Z], () => j.Z.GPUDriversOutdated), $ = (0, r.e7)([j.Z], () => j.Z.problematicGPUDriver), ee = (0, r.e7)([f.default], () => f.default.getCurrentUser()), en = (0, m.Go)(), et = (0, m.Zq)({
    autoTrackExposure: !en
  }), el = (0, D.Z)();
  null != n && n.id.startsWith("screen") && !N.Z.supportsScreenSoundshare() && (el = F.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
  let es = en ? (0, l.jsx)(_.Z, {
      guildId: S,
      isAnimationDone: B
    }) : et ? (0, l.jsx)(E.Z, {}) : void 0,
    ea = !!(null == n ? void 0 : n.id.startsWith("camera")),
    ei = null != ee && ee.verified && !ee.bot,
    er = null != z && !(0, d.Yk)(z),
    eo = !(0, r.e7)([N.Z], () => N.Z.getHardwareEncoding());
  return (0, l.jsxs)(s.Fragment, {
    children: [ea ? (0, l.jsx)(G.Z, {
      selectedSource: n,
      onChangeVideoDeviceSource: O,
      onChangeAudioDevice: P
    }) : (0, l.jsxs)("div", {
      children: [(0, l.jsx)(K, {
        selectSource: I,
        sourceChanged: c,
        onChangeSource: O,
        selectedSource: n
      }), null != el ? (0, l.jsx)(q, {
        text: el
      }) : null, null != n && null == el ? (0, l.jsx)(J, {
        enabled: A,
        onChange: k,
        screen: n.id.startsWith("screen")
      }) : null]
    }), Z && null != S ? (0, l.jsx)(Y, {
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
      selectedFPS: t,
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