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
  h = l("812206"),
  C = l("594190"),
  g = l("751571"),
  N = l("120522"),
  I = l("933843"),
  p = l("485731"),
  x = l("361291"),
  A = l("592125"),
  T = l("430824"),
  R = l("131951"),
  v = l("944486"),
  L = l("594174"),
  M = l("449224"),
  O = l("285952"),
  j = l("153124"),
  D = l("626135"),
  P = l("358085"),
  G = l("998502"),
  U = l("451467"),
  b = l("537413"),
  y = l("989941"),
  F = l("399299"),
  k = l("351152"),
  w = l("567126"),
  H = l("143135"),
  V = l("37113"),
  B = l("981631"),
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
  } = (0, c.useStateFromStoresObject)([x.default], () => x.default.getState()), es = (0, c.useStateFromStores)([v.default, A.default], () => A.default.getChannel(v.default.getVoiceChannelId())), ei = (0, c.useStateFromStores)([C.default, M.default], () => (0, P.isWindows)() ? (0, y.default)(C.default, M.default) : null), er = (0, c.useStateFromStores)([L.default], () => {
    let e = L.default.getCurrentUser();
    return u()(null != e, "GoLiveModal: user cannot be undefined"), e
  }), eu = null !== (t = null == es ? void 0 : es.getGuildId()) && void 0 !== t ? t : J, eo = (0, c.useStateFromStores)([T.default], () => {
    var e;
    return null != eu ? null === (e = T.default.getGuild(eu)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [ed, ec] = null !== (a = (0, b.default)(et, er, eo)) && void 0 !== a ? a : [V.ApplicationStreamResolutions.RESOLUTION_720, V.ApplicationStreamFPS.FPS_30];
  et !== V.ApplicationStreamPresets.PRESET_CUSTOM && (el = ed, ea = ec), !(0, U.default)(et, el, ea, er, eo) && (el = ed, ea = ec);
  let ef = (0, j.useUID)();
  let [em, eS] = i.useState((Y = q, Q = Z, Y ? 0 : Q ? 1 : 2)), [eE, e_] = i.useState(null), [eh, eC] = i.useState(!1), [eg, eN] = i.useState(null), [eI, ep] = i.useState(null), [ex, eA] = i.useState(null), [eT, eR] = i.useState(et), [ev, eL] = i.useState(el), [eM, eO] = i.useState(ea), [ej, eD] = i.useState(en), [eP, eG] = i.useState(null != J ? J : null), eU = null !== (n = null == es ? void 0 : es.id) && void 0 !== n ? n : eg;
  async function eb() {
    var e, t, l;
    u()(null != ei || null != eI, "got nothing to stream");
    let a = null !== (e = null == es ? void 0 : es.id) && void 0 !== e ? e : eg;
    u()(null != a, "Received null target channel ID");
    let n = A.default.getChannel(a),
      s = null !== (t = null == n ? void 0 : n.getGuildId()) && void 0 !== t ? t : J;
    null == es && S.default.selectVoiceChannel(a);
    let i = !0;
    (0, I.shouldActivatePerkDemo)(d.EntitlementFeatureNames.STREAM_HIGH_QUALITY) && (i = await (0, N.activatePerkDemo)(d.EntitlementFeatureNames.STREAM_HIGH_QUALITY), (0, p.hqStreamingSetEnabled)(!(0, I.ineligibleQualitySetting)(ev, eM)), D.default.track(B.AnalyticEvents.PERK_DEMO_OFFER_ACCEPTED, {
      guild_id: s,
      channel_id: null !== (l = null == es ? void 0 : es.id) && void 0 !== l ? l : eg,
      perk_type: d.EntitlementFeatureNames.STREAM_HIGH_QUALITY,
      resolution: ev,
      max_fps: eM
    }));
    let r = eT,
      o = ev,
      c = eM;
    (!(0, U.default)(r, o, c, er, eo) || !i) && (r = V.ApplicationStreamPresets.PRESET_VIDEO, o = V.ApplicationStreamResolutions.RESOLUTION_720, c = V.ApplicationStreamFPS.FPS_30), (0, E.updateStreamSettings)({
      preset: r,
      resolution: o,
      frameRate: c,
      soundshareEnabled: ej
    });
    let f = (0, H.default)(ei, eI, C.default.getRunningGames()),
      _ = !(0, P.isWindows)() || null == f || (null == eI ? void 0 : eI.id.startsWith("camera:")) || null == f ? null : f.pid;
    (0, E.startStream)(s, a, {
      pid: _,
      sourceId: null == _ && null != eI ? eI.id : null,
      sourceName: null == _ && null != eI ? eI.name : null,
      audioSourceId: ex,
      sound: ej
    }), (async () => {
      !await g.default.hasPermission(W.NativePermissionTypes.SCREEN_RECORDING, {
        showAuthorizationError: !1
      }) && m.default.show({
        title: K.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
        body: K.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
      })
    })()
  }

  function ey() {
    eb(), $()
  }
  i.useEffect(() => {
    let e = (0, P.isWindows)() ? (0, y.default)(C.default, M.default) : null,
      t = (null == e ? void 0 : e.id) != null ? h.default.getApplication(e.id) : null;
    D.default.track(B.AnalyticEvents.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: X
    })
  }, [X]);
  let eF = i.useCallback((e, t, l) => {
    let a = (0, b.default)(e, er, eo),
      [n, s] = null != a ? a : [t, l];
    if (e !== eT && (t = n, l = s), !(0, U.default)(e, t, l, er, eo)) {
      let [e, a] = (0, b.default)(V.ApplicationStreamPresets.PRESET_VIDEO, er, eo);
      t = e, l = a
    }
    l !== eM && eO(l), t !== ev && eL(t), n !== t || s !== l ? eR(V.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eT && eR(e)
  }, [er, eo, eM, ev, eT]);
  async function ek(e) {
    if (e.preventDefault(), 1 === em) return eS(2);
    let t = (0, H.default)(ei, eI, C.default.getRunningGames()),
      a = G.default.supportsFeature(B.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
    if ((0, P.isMac)() && null != eI) {
      let e = await R.default.getMediaEngine().getDesktopSources(),
        t = eI.id;
      if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
        var n, i;
        n = t, i = e, D.default.track(B.AnalyticEvents.SCREENSHARE_FAILED, {
          source_id: n,
          screens: i.length
        }), (0, f.openModal)(e => (0, s.jsx)(f.ConfirmModal, {
          header: K.default.Messages.SCREENSHARE_RELAUNCH,
          confirmText: K.default.Messages.OKAY,
          cancelText: K.default.Messages.CANCEL,
          onConfirm: () => G.default.relaunch(),
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
          handleStream: ey,
          pid: t
        })
      })
    }() : ey()
  }
  let ew = i.useCallback(e => {
      ep(e), null != e && (eS(2), eC(!0))
    }, []),
    eH = i.useCallback(e => {
      eG(e), eS(Z ? 1 : 2)
    }, [Z]),
    eV = function(e) {
      switch (e) {
        case 1:
          return K.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
        case 2:
          return null;
        default:
          return K.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
      }
    }(em),
    eB = (0, s.jsx)(f.ModalHeader, {
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
        }), null != eV ? (0, s.jsx)(f.Text, {
          className: z.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: eV
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
          children: (0, s.jsx)(k.default, {
            onSelectGuild: eH
          })
        })
      }), (0, s.jsx)(f.Slide, {
        id: 1,
        children: (0, s.jsx)("div", {
          className: z.modalSize,
          children: (0, s.jsx)(w.default, {
            selectedSource: eI,
            onChangeSelectedSource: ew
          })
        })
      }), (0, s.jsx)(f.Slide, {
        id: 2,
        children: (0, s.jsx)("div", {
          className: z.modalSize,
          children: (0, s.jsx)(F.default, {
            selectedChannelId: null !== (r = null == es ? void 0 : es.id) && void 0 !== r ? r : eg,
            selectedPreset: eT,
            selectedResolution: ev,
            selectedSource: eI,
            selectedFPS: eM,
            sound: ej,
            sourceChanged: eh,
            selectSource: Z,
            onChangeSelectedFPS: e => eF(eT, ev, e),
            onChangeSelectedResolution: e => eF(eT, e, eM),
            onChangeSelectedPreset: e => eF(e, ev, eM),
            onChangeSelectedChannelId: eN,
            onChangeSelectedSource: ew,
            onChangeSource: () => eS(1),
            onChangeAudioDevice: e => eA(e),
            onChangeGuild: () => eS(0),
            onChangeSound: e => eD(e),
            onClose: $,
            selectedGuildId: eP,
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
    }(em, q, Z, eh),
    ez = 2 !== em || null == eI && null == ei || null == eU,
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
    page: B.AnalyticsPages.GO_LIVE_MODAL,
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
        onSubmit: ek,
        children: [eB, eW, eY]
      })]
    })
  })
}