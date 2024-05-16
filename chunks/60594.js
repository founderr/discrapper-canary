"use strict";
l.r(t), l.d(t, {
  default: function() {
    return Y
  }
}), l("47120");
var a, n, s = l("735250"),
  i = l("470079"),
  r = l("512722"),
  u = l.n(r),
  o = l("920906"),
  d = l("848246"),
  c = l("442837"),
  f = l("481060"),
  m = l("668781"),
  S = l("287734"),
  E = l("872810"),
  _ = l("410575"),
  N = l("812206"),
  h = l("594190"),
  C = l("751571"),
  g = l("120522"),
  p = l("933843"),
  A = l("485731"),
  x = l("361291"),
  I = l("592125"),
  R = l("430824"),
  T = l("131951"),
  v = l("944486"),
  L = l("594174"),
  M = l("449224"),
  O = l("285952"),
  j = l("153124"),
  D = l("626135"),
  b = l("358085"),
  P = l("998502"),
  U = l("451467"),
  G = l("537413"),
  k = l("989941"),
  w = l("399299"),
  y = l("351152"),
  F = l("567126"),
  V = l("143135"),
  B = l("37113"),
  H = l("981631"),
  W = l("761274"),
  K = l("689938"),
  z = l("555066");
(n = a || (a = {}))[n.GUILD = 0] = "GUILD", n[n.SOURCE = 1] = "SOURCE", n[n.CONFIRM = 2] = "CONFIRM";

function Y(e) {
  var t, a, n, r, Y, Q;
  let {
    selectGuild: q = !1,
    selectSource: Z = !0,
    guildId: J,
    analyticsLocation: X,
    onClose: $,
    transitionState: ee
  } = e, {
    preset: et,
    resolution: el,
    fps: ea,
    soundshareEnabled: en
  } = (0, c.useStateFromStoresObject)([x.default], () => x.default.getState()), es = (0, c.useStateFromStores)([v.default, I.default], () => I.default.getChannel(v.default.getVoiceChannelId())), ei = (0, c.useStateFromStores)([h.default, M.default], () => (0, b.isWindows)() ? (0, k.default)(h.default, M.default) : null), er = (0, c.useStateFromStores)([L.default], () => {
    let e = L.default.getCurrentUser();
    return u()(null != e, "GoLiveModal: user cannot be undefined"), e
  }), eu = null !== (t = null == es ? void 0 : es.getGuildId()) && void 0 !== t ? t : J, eo = (0, c.useStateFromStores)([R.default], () => {
    var e;
    return null != eu ? null === (e = R.default.getGuild(eu)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [ed, ec] = null !== (a = (0, G.default)(et, er, eo)) && void 0 !== a ? a : [B.ApplicationStreamResolutions.RESOLUTION_720, B.ApplicationStreamFPS.FPS_30];
  et !== B.ApplicationStreamPresets.PRESET_CUSTOM && (el = ed, ea = ec), !(0, U.default)(et, el, ea, er, eo) && (el = ed, ea = ec);
  let ef = (0, j.useUID)();
  let [em, eS] = i.useState((Y = q, Q = Z, Y ? 0 : Q ? 1 : 2)), [eE, e_] = i.useState(null), [eN, eh] = i.useState(!1), [eC, eg] = i.useState(null), [ep, eA] = i.useState(null), [ex, eI] = i.useState(null), [eR, eT] = i.useState(et), [ev, eL] = i.useState(el), [eM, eO] = i.useState(ea), [ej, eD] = i.useState(en), [eb, eP] = i.useState(null != J ? J : null), eU = null !== (n = null == es ? void 0 : es.id) && void 0 !== n ? n : eC;
  async function eG() {
    var e, t, l;
    u()(null != ei || null != ep, "got nothing to stream");
    let a = null !== (e = null == es ? void 0 : es.id) && void 0 !== e ? e : eC;
    u()(null != a, "Received null target channel ID");
    let n = I.default.getChannel(a),
      s = null !== (t = null == n ? void 0 : n.getGuildId()) && void 0 !== t ? t : J;
    null == es && S.default.selectVoiceChannel(a);
    let i = !0;
    (0, p.shouldActivatePerkDemo)(d.EntitlementFeatureNames.STREAM_HIGH_QUALITY) && (i = await (0, g.activatePerkDemo)(d.EntitlementFeatureNames.STREAM_HIGH_QUALITY), (0, A.hqStreamingSetEnabled)(!(0, p.ineligibleQualitySetting)(ev, eM)), D.default.track(H.AnalyticEvents.PERK_DEMO_OFFER_ACCEPTED, {
      guild_id: s,
      channel_id: null !== (l = null == es ? void 0 : es.id) && void 0 !== l ? l : eC,
      perk_type: d.EntitlementFeatureNames.STREAM_HIGH_QUALITY,
      resolution: ev,
      max_fps: eM
    }));
    let r = eR,
      o = ev,
      c = eM;
    (!(0, U.default)(r, o, c, er, eo) || !i) && (r = B.ApplicationStreamPresets.PRESET_VIDEO, o = B.ApplicationStreamResolutions.RESOLUTION_720, c = B.ApplicationStreamFPS.FPS_30), (0, E.updateStreamSettings)({
      preset: r,
      resolution: o,
      frameRate: c,
      soundshareEnabled: ej
    });
    let f = (0, V.default)(ei, ep, h.default.getRunningGames()),
      _ = !(0, b.isWindows)() || null == f || (null == ep ? void 0 : ep.id.startsWith("camera:")) || null == f ? null : f.pid;
    (0, E.startStream)(s, a, {
      pid: _,
      sourceId: null == _ && null != ep ? ep.id : null,
      sourceName: null == _ && null != ep ? ep.name : null,
      audioSourceId: ex,
      sound: ej
    }), (async () => {
      !await C.default.hasPermission(W.NativePermissionTypes.SCREEN_RECORDING, {
        showAuthorizationError: !1
      }) && m.default.show({
        title: K.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
        body: K.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
      })
    })()
  }

  function ek() {
    eG(), $()
  }
  i.useEffect(() => {
    let e = (0, b.isWindows)() ? (0, k.default)(h.default, M.default) : null,
      t = (null == e ? void 0 : e.id) != null ? N.default.getApplication(e.id) : null;
    D.default.track(H.AnalyticEvents.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: X
    })
  }, [X]);
  let ew = i.useCallback((e, t, l) => {
    let a = (0, G.default)(e, er, eo),
      [n, s] = null != a ? a : [t, l];
    if (e !== eR && (t = n, l = s), !(0, U.default)(e, t, l, er, eo)) {
      let [e, a] = (0, G.default)(B.ApplicationStreamPresets.PRESET_VIDEO, er, eo);
      t = e, l = a
    }
    l !== eM && eO(l), t !== ev && eL(t), n !== t || s !== l ? eT(B.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eR && eT(e)
  }, [er, eo, eM, ev, eR]);
  async function ey(e) {
    if (e.preventDefault(), 1 === em) return eS(2);
    let t = (0, V.default)(ei, ep, h.default.getRunningGames()),
      a = P.default.supportsFeature(H.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
    if ((0, b.isMac)() && null != ep) {
      let e = await T.default.getMediaEngine().getDesktopSources(),
        t = ep.id;
      if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
        var n, i;
        n = t, i = e, D.default.track(H.AnalyticEvents.SCREENSHARE_FAILED, {
          source_id: n,
          screens: i.length
        }), (0, f.openModal)(e => (0, s.jsx)(f.ConfirmModal, {
          header: K.default.Messages.SCREENSHARE_RELAUNCH,
          confirmText: K.default.Messages.OKAY,
          cancelText: K.default.Messages.CANCEL,
          onConfirm: () => P.default.relaunch(),
          ...e,
          children: (0, s.jsx)(f.Text, {
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
        return l => (0, s.jsx)(e, {
          ...l,
          handleStream: ek,
          pid: t
        })
      })
    }() : ek()
  }
  let eF = i.useCallback(e => {
      eA(e), null != e && (eS(2), eh(!0))
    }, []),
    eV = i.useCallback(e => {
      eP(e), eS(Z ? 1 : 2)
    }, [Z]),
    eB = function(e) {
      switch (e) {
        case 1:
          return K.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
        case 2:
          return null;
        default:
          return K.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
      }
    }(em),
    eH = (0, s.jsx)(f.ModalHeader, {
      className: z.modalHeader,
      separator: !1,
      children: (0, s.jsxs)(O.default, {
        direction: O.default.Direction.VERTICAL,
        align: O.default.Align.CENTER,
        className: z.header,
        children: [(0, s.jsx)(f.Heading, {
          variant: "heading-xl/semibold",
          id: ef,
          className: z.headerText,
          children: K.default.Messages.GO_LIVE_MODAL_TITLE
        }), null != eB ? (0, s.jsx)(f.Text, {
          className: z.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: eB
        }) : null]
      })
    }),
    eW = (0, s.jsxs)(f.Slides, {
      springConfig: {
        ...o.config.stiff,
        clamp: !0
      },
      activeSlide: em,
      width: 480,
      onSlideReady: e_,
      children: [(0, s.jsx)(f.Slide, {
        id: 0,
        children: (0, s.jsx)("div", {
          className: z.modalSize,
          children: (0, s.jsx)(y.default, {
            onSelectGuild: eV
          })
        })
      }), (0, s.jsx)(f.Slide, {
        id: 1,
        children: (0, s.jsx)("div", {
          className: z.modalSize,
          children: (0, s.jsx)(F.default, {
            selectedSource: ep,
            onChangeSelectedSource: eF
          })
        })
      }), (0, s.jsx)(f.Slide, {
        id: 2,
        children: (0, s.jsx)("div", {
          className: z.modalSize,
          children: (0, s.jsx)(w.default, {
            selectedChannelId: null !== (r = null == es ? void 0 : es.id) && void 0 !== r ? r : eC,
            selectedPreset: eR,
            selectedResolution: ev,
            selectedSource: ep,
            selectedFPS: eM,
            sound: ej,
            sourceChanged: eN,
            selectSource: Z,
            onChangeSelectedFPS: e => ew(eR, ev, e),
            onChangeSelectedResolution: e => ew(eR, e, eM),
            onChangeSelectedPreset: e => ew(e, ev, eM),
            onChangeSelectedChannelId: eg,
            onChangeSelectedSource: eF,
            onChangeSource: () => eS(1),
            onChangeAudioDevice: e => eI(e),
            onChangeGuild: () => eS(0),
            onChangeSound: e => eD(e),
            onClose: $,
            selectedGuildId: eb,
            targetGuildPremiumTier: eo,
            selectGuild: q,
            isAnimationDone: 2 === eE && ee === f.ModalTransitionState.ENTERED
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
    }(em, q, Z, eN),
    ez = 2 !== em || null == ep && null == ei || null == eU,
    eY = (0, s.jsxs)(f.ModalFooter, {
      justify: null == eK ? O.default.Justify.START : O.default.Justify.BETWEEN,
      children: [(0, s.jsx)(f.Button, {
        type: "submit",
        size: f.Button.Sizes.SMALL,
        disabled: ez,
        autoFocus: !0,
        children: K.default.Messages.GO_LIVE_MODAL_CTA
      }), null == eK ? (0, s.jsx)(f.Button, {
        className: z.cancelButton,
        look: f.Button.Looks.LINK,
        size: f.Button.Sizes.SMALL,
        color: f.ButtonColors.PRIMARY,
        onClick: $,
        children: K.default.Messages.CANCEL
      }) : (0, s.jsx)(f.Button, {
        size: f.Button.Sizes.SMALL,
        color: f.ButtonColors.PRIMARY,
        onClick: () => eS(eK),
        children: K.default.Messages.BACK
      })]
    });
  return (0, s.jsx)(_.default, {
    page: H.AnalyticsPages.GO_LIVE_MODAL,
    children: (0, s.jsxs)(f.ModalRoot, {
      "aria-labelledby": ef,
      transitionState: ee,
      size: f.ModalSize.DYNAMIC,
      className: z.modalSize,
      children: [(0, s.jsx)(f.ModalCloseButton, {
        onClick: $,
        className: z.modalCloseButton
      }), (0, s.jsx)("div", {
        className: z.art
      }), (0, s.jsxs)("form", {
        onSubmit: ey,
        children: [eH, eW, eY]
      })]
    })
  })
}