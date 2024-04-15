"use strict";
l.r(t), l.d(t, {
  default: function() {
    return Q
  }
}), l("47120");
var a, s, n = l("735250"),
  i = l("470079"),
  r = l("512722"),
  u = l.n(r),
  o = l("718017"),
  d = l("848246"),
  c = l("442837"),
  f = l("481060"),
  m = l("668781"),
  S = l("287734"),
  E = l("872810"),
  _ = l("410575"),
  C = l("812206"),
  g = l("594190"),
  N = l("751571"),
  h = l("120522"),
  x = l("386542"),
  I = l("933843"),
  A = l("485731"),
  p = l("361291"),
  T = l("592125"),
  R = l("430824"),
  v = l("131951"),
  L = l("944486"),
  M = l("594174"),
  j = l("449224"),
  O = l("285952"),
  D = l("153124"),
  P = l("626135"),
  G = l("358085"),
  b = l("998502"),
  U = l("451467"),
  F = l("537413"),
  k = l("989941"),
  y = l("399299"),
  w = l("351152"),
  B = l("567126"),
  V = l("143135"),
  H = l("37113"),
  W = l("981631"),
  z = l("761274"),
  K = l("689938"),
  Y = l("223318");
(s = a || (a = {}))[s.GUILD = 0] = "GUILD", s[s.SOURCE = 1] = "SOURCE", s[s.CONFIRM = 2] = "CONFIRM";

function Q(e) {
  var t, a, s, r, Q;
  let {
    selectGuild: Z = !1,
    selectSource: J = !0,
    guildId: q,
    analyticsLocation: X,
    onClose: $,
    transitionState: ee
  } = e, {
    preset: et,
    resolution: el,
    fps: ea,
    soundshareEnabled: es
  } = (0, c.useStateFromStoresObject)([p.default], () => p.default.getState()), en = (0, c.useStateFromStores)([L.default, T.default], () => T.default.getChannel(L.default.getVoiceChannelId())), ei = (0, c.useStateFromStores)([g.default, j.default], () => (0, G.isWindows)() ? (0, k.default)(g.default, j.default) : null), er = (0, c.useStateFromStores)([M.default], () => {
    let e = M.default.getCurrentUser();
    return u()(null != e, "GoLiveModal: user cannot be undefined"), e
  }), eu = null !== (t = null == en ? void 0 : en.getGuildId()) && void 0 !== t ? t : q, eo = (0, c.useStateFromStores)([R.default], () => {
    var e;
    return null != eu ? null === (e = R.default.getGuild(eu)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [ed, ec] = null !== (a = (0, F.default)(et, er, eo)) && void 0 !== a ? a : [H.ApplicationStreamResolutions.RESOLUTION_720, H.ApplicationStreamFPS.FPS_30], {
    available: ef
  } = (0, x.usePerksDemo)(d.EntitlementFeatureNames.STREAM_HIGH_QUALITY);
  et !== H.ApplicationStreamPresets.PRESET_CUSTOM && (el = ed, ea = ec), ef && (el = H.ApplicationStreamResolutions.RESOLUTION_1080, ea = H.ApplicationStreamFPS.FPS_60), !(0, U.default)(et, el, ea, er, eo) && (el = ed, ea = ec);
  let em = (0, D.useUID)();
  let [eS, eE] = i.useState((r = Z, Q = J, r ? 0 : Q ? 1 : 2)), [e_, eC] = i.useState(null), [eg, eN] = i.useState(!1), [eh, ex] = i.useState(null), [eI, eA] = i.useState(null), [ep, eT] = i.useState(null), [eR, ev] = i.useState(et), [eL, eM] = i.useState(el), [ej, eO] = i.useState(ea), [eD, eP] = i.useState(es), [eG, eb] = i.useState(null != q ? q : null), eU = null !== (s = null == en ? void 0 : en.id) && void 0 !== s ? s : eh;
  async function eF() {
    var e, t;
    u()(null != ei || null != eI, "got nothing to stream");
    let l = null !== (e = null == en ? void 0 : en.id) && void 0 !== e ? e : eh;
    u()(null != l, "Received null target channel ID");
    let a = T.default.getChannel(l),
      s = null !== (t = null == a ? void 0 : a.getGuildId()) && void 0 !== t ? t : q;
    null == en && S.default.selectVoiceChannel(l);
    let n = !0;
    (0, I.shouldActivatePerkDemo)(d.EntitlementFeatureNames.STREAM_HIGH_QUALITY) && (n = await (0, h.activatePerkDemo)(d.EntitlementFeatureNames.STREAM_HIGH_QUALITY), (0, A.hqStreamingSetEnabled)(!(0, I.ineligibleQualitySetting)(eL, ej)));
    let i = eR,
      r = eL,
      o = ej;
    (!(0, U.default)(i, r, o, er, eo) || !n) && (i = H.ApplicationStreamPresets.PRESET_VIDEO, r = H.ApplicationStreamResolutions.RESOLUTION_720, o = H.ApplicationStreamFPS.FPS_30), (0, E.updateStreamSettings)({
      preset: i,
      resolution: r,
      frameRate: o,
      soundshareEnabled: eD
    });
    let c = (0, V.default)(ei, eI, g.default.getRunningGames()),
      f = !(0, G.isWindows)() || null == c || (null == eI ? void 0 : eI.id.startsWith("camera:")) || null == c ? null : c.pid;
    (0, E.startStream)(s, l, {
      pid: f,
      sourceId: null == f && null != eI ? eI.id : null,
      sourceName: null == f && null != eI ? eI.name : null,
      audioSourceId: ep,
      sound: eD
    }), (async () => {
      !await N.default.hasPermission(z.NativePermissionTypes.SCREEN_RECORDING, {
        showAuthorizationError: !1
      }) && m.default.show({
        title: K.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
        body: K.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
      })
    })()
  }

  function ek() {
    eF(), $()
  }
  i.useEffect(() => {
    let e = (0, G.isWindows)() ? (0, k.default)(g.default, j.default) : null,
      t = (null == e ? void 0 : e.id) != null ? C.default.getApplication(e.id) : null;
    P.default.track(W.AnalyticEvents.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: X
    })
  }, [X]);
  let ey = i.useCallback((e, t, l) => {
    let a = (0, F.default)(e, er, eo),
      [s, n] = null != a ? a : [t, l];
    if (e !== eR && (t = s, l = n), !(0, U.default)(e, t, l, er, eo)) {
      let [e, a] = (0, F.default)(H.ApplicationStreamPresets.PRESET_VIDEO, er, eo);
      t = e, l = a
    }
    l !== ej && eO(l), t !== eL && eM(t), s !== t || n !== l ? ev(H.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eR && ev(e)
  }, [er, eo, ej, eL, eR]);
  async function ew(e) {
    if (e.preventDefault(), 1 === eS) return eE(2);
    let t = (0, V.default)(ei, eI, g.default.getRunningGames()),
      a = b.default.supportsFeature(W.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
    if ((0, G.isMac)() && null != eI) {
      let e = await v.default.getMediaEngine().getDesktopSources(),
        t = eI.id;
      if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
        var s, i;
        s = t, i = e, P.default.track(W.AnalyticEvents.SCREENSHARE_FAILED, {
          source_id: s,
          screens: i.length
        }), (0, f.openModal)(e => (0, n.jsx)(f.ConfirmModal, {
          header: K.default.Messages.SCREENSHARE_RELAUNCH,
          confirmText: K.default.Messages.OKAY,
          cancelText: K.default.Messages.CANCEL,
          onConfirm: () => b.default.relaunch(),
          ...e,
          children: (0, n.jsx)(f.Text, {
            variant: "text-md/normal",
            children: K.default.Messages.SCREENSHARE_RELAUNCH_BODY
          })
        }));
        return
      }
    }
    a ? ! function() {
      var e;
      let t = null !== (e = null == ei ? void 0 : ei.pid) && void 0 !== e ? e : null;
      (0, f.openModalLazy)(async () => {
        let {
          default: e
        } = await l.e("74300").then(l.bind(l, "566852"));
        return l => (0, n.jsx)(e, {
          ...l,
          handleStream: ek,
          pid: t
        })
      })
    }() : ek()
  }
  let eB = i.useCallback(e => {
      eA(e), null != e && (eE(2), eN(!0))
    }, []),
    eV = i.useCallback(e => {
      eb(e), eE(J ? 1 : 2)
    }, [J]),
    eH = function(e) {
      switch (e) {
        case 1:
          return K.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
        case 2:
          return null;
        default:
          return K.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
      }
    }(eS),
    eW = (0, n.jsx)(f.ModalHeader, {
      className: Y.modalHeader,
      separator: !1,
      children: (0, n.jsxs)(O.default, {
        direction: O.default.Direction.VERTICAL,
        align: O.default.Align.CENTER,
        className: Y.header,
        children: [(0, n.jsx)(f.Heading, {
          variant: "heading-xl/semibold",
          id: em,
          className: Y.headerText,
          children: K.default.Messages.GO_LIVE_MODAL_TITLE
        }), null != eH ? (0, n.jsx)(f.Text, {
          className: Y.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: eH
        }) : null]
      })
    }),
    ez = (0, n.jsxs)(f.Slides, {
      springConfig: {
        ...o.config.stiff,
        clamp: !0
      },
      activeSlide: eS,
      width: 480,
      onSlideReady: eC,
      children: [(0, n.jsx)(f.Slide, {
        id: 0,
        children: (0, n.jsx)("div", {
          className: Y.modalSize,
          children: (0, n.jsx)(w.default, {
            onSelectGuild: eV
          })
        })
      }), (0, n.jsx)(f.Slide, {
        id: 1,
        children: (0, n.jsx)("div", {
          className: Y.modalSize,
          children: (0, n.jsx)(B.default, {
            selectedSource: eI,
            onChangeSelectedSource: eB
          })
        })
      }), (0, n.jsx)(f.Slide, {
        id: 2,
        children: (0, n.jsx)("div", {
          className: Y.modalSize,
          children: (0, n.jsx)(y.default, {
            selectedChannelId: eh,
            selectedPreset: eR,
            selectedResolution: eL,
            selectedSource: eI,
            selectedFPS: ej,
            sound: eD,
            sourceChanged: eg,
            selectSource: J,
            onChangeSelectedFPS: e => ey(eR, eL, e),
            onChangeSelectedResolution: e => ey(eR, e, ej),
            onChangeSelectedPreset: e => ey(e, eL, ej),
            onChangeSelectedChannelId: ex,
            onChangeSelectedSource: eB,
            onChangeSource: () => eE(1),
            onChangeAudioDevice: e => eT(e),
            onChangeGuild: () => eE(0),
            onChangeSound: e => eP(e),
            onClose: $,
            selectedGuildId: eG,
            targetGuildPremiumTier: eo,
            selectGuild: Z,
            isAnimationDone: 2 === e_ && ee === f.ModalTransitionState.ENTERED
          })
        })
      })]
    }),
    eK = function(e, t, l, a) {
      switch (e) {
        case 1:
          return t ? 0 : null;
        case 2:
          if (a) return 1;
          if (!l && t) return 0;
          return null;
        default:
          return null
      }
    }(eS, Z, J, eg),
    eY = 2 !== eS || null == eI && null == ei || null == eU,
    eQ = (0, n.jsxs)(f.ModalFooter, {
      justify: null == eK ? O.default.Justify.START : O.default.Justify.BETWEEN,
      children: [(0, n.jsx)(f.Button, {
        type: "submit",
        size: f.Button.Sizes.SMALL,
        disabled: eY,
        autoFocus: !0,
        children: K.default.Messages.GO_LIVE_MODAL_CTA
      }), null == eK ? (0, n.jsx)(f.Button, {
        className: Y.cancelButton,
        look: f.Button.Looks.LINK,
        size: f.Button.Sizes.SMALL,
        color: f.ButtonColors.PRIMARY,
        onClick: $,
        children: K.default.Messages.CANCEL
      }) : (0, n.jsx)(f.Button, {
        size: f.Button.Sizes.SMALL,
        color: f.ButtonColors.PRIMARY,
        onClick: () => eE(eK),
        children: K.default.Messages.BACK
      })]
    });
  return (0, n.jsx)(_.default, {
    page: W.AnalyticsPages.GO_LIVE_MODAL,
    children: (0, n.jsxs)(f.ModalRoot, {
      "aria-labelledby": em,
      transitionState: ee,
      size: f.ModalSize.DYNAMIC,
      className: Y.modalSize,
      children: [(0, n.jsx)(f.ModalCloseButton, {
        onClick: $,
        className: Y.modalCloseButton
      }), (0, n.jsx)("div", {
        className: Y.art
      }), (0, n.jsxs)("form", {
        onSubmit: ew,
        children: [eW, ez, eQ]
      })]
    })
  })
}