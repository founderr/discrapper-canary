"use strict";
l.r(t), l.d(t, {
  default: function() {
    return H
  }
}), l("222007");
var n, a, s = l("37983"),
  r = l("884691"),
  i = l("627445"),
  u = l.n(i),
  o = l("907002"),
  d = l("446674"),
  c = l("77078"),
  f = l("404118"),
  m = l("987317"),
  S = l("990766"),
  E = l("901582"),
  C = l("299285"),
  h = l("161454"),
  g = l("928609"),
  _ = l("268491"),
  N = l("42203"),
  p = l("305961"),
  I = l("42887"),
  x = l("18494"),
  A = l("697218"),
  R = l("703370"),
  v = l("145131"),
  T = l("476765"),
  L = l("599110"),
  M = l("773336"),
  O = l("50885"),
  j = l("773356"),
  D = l("7738"),
  P = l("375202"),
  G = l("636909"),
  b = l("934054"),
  U = l("23922"),
  w = l("16750"),
  V = l("686298"),
  k = l("49111"),
  y = l("180524"),
  F = l("782340"),
  B = l("961523");
(a = n || (n = {}))[a.GUILD = 0] = "GUILD", a[a.SOURCE = 1] = "SOURCE", a[a.CONFIRM = 2] = "CONFIRM";

function H(e) {
  var t, n, a, i, H;
  let {
    selectGuild: W = !1,
    selectSource: z = !0,
    guildId: K,
    analyticsLocation: Y,
    onClose: Z,
    transitionState: J
  } = e, {
    preset: Q,
    resolution: X,
    fps: q,
    soundshareEnabled: $
  } = (0, d.useStateFromStoresObject)([_.default], () => _.default.getState()), ee = (0, d.useStateFromStores)([x.default, N.default], () => N.default.getChannel(x.default.getVoiceChannelId())), et = (0, d.useStateFromStores)([h.default, R.default], () => (0, M.isWindows)() ? (0, P.default)(h.default, R.default) : null), el = (0, d.useStateFromStores)([A.default], () => {
    let e = A.default.getCurrentUser();
    return u(null != e, "GoLiveModal: user cannot be undefined"), e
  }), en = null !== (t = null == ee ? void 0 : ee.getGuildId()) && void 0 !== t ? t : K, ea = (0, d.useStateFromStores)([p.default], () => {
    var e;
    return null != en ? null === (e = p.default.getGuild(en)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [es, er] = null !== (n = (0, D.default)(Q, el, ea)) && void 0 !== n ? n : [V.ApplicationStreamResolutions.RESOLUTION_720, V.ApplicationStreamFPS.FPS_30];
  Q !== V.ApplicationStreamPresets.PRESET_CUSTOM && (X = es, q = er);
  let ei = (0, T.useUID)();
  let [eu, eo] = r.useState((i = W, H = z, i ? 0 : H ? 1 : 2)), [ed, ec] = r.useState(null), [ef, em] = r.useState(!1), [eS, eE] = r.useState(null), [eC, eh] = r.useState(null), [eg, e_] = r.useState(null), [eN, ep] = r.useState(Q), [eI, ex] = r.useState(X), [eA, eR] = r.useState(q), [ev, eT] = r.useState($), [eL, eM] = r.useState(null != K ? K : null), eO = null !== (a = null == ee ? void 0 : ee.id) && void 0 !== a ? a : eS;
  r.useEffect(() => {
    let e = (0, M.isWindows)() ? (0, P.default)(h.default, R.default) : null,
      t = (null == e ? void 0 : e.id) != null ? C.default.getApplication(e.id) : null;
    L.default.track(k.AnalyticEvents.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: Y
    })
  }, [Y]);

  function ej() {
    ! function() {
      var e, t;
      u(null != et || null != eC, "got nothing to stream");
      let l = null !== (e = null == ee ? void 0 : ee.id) && void 0 !== e ? e : eS;
      u(null != l, "Received null target channel ID");
      let n = N.default.getChannel(l),
        a = null !== (t = null == n ? void 0 : n.getGuildId()) && void 0 !== t ? t : K;
      null == ee && m.default.selectVoiceChannel(l);
      let s = eN,
        r = eI,
        i = eA;
      !(0, j.default)(s, r, i, el, ea) && (s = V.ApplicationStreamPresets.PRESET_VIDEO, r = V.ApplicationStreamResolutions.RESOLUTION_720, i = V.ApplicationStreamFPS.FPS_30), (0, S.updateStreamSettings)({
        preset: s,
        resolution: r,
        frameRate: i,
        soundshareEnabled: ev
      });
      let o = (0, w.default)(et, eC, h.default.getRunningGames()),
        d = !(0, M.isWindows)() || null == o || (null == eC ? void 0 : eC.id.startsWith("camera:")),
        c = d || null == o ? null : o.pid;
      (0, S.startStream)(a, l, {
        pid: c,
        sourceId: null == c && null != eC ? eC.id : null,
        sourceName: null == c && null != eC ? eC.name : null,
        audioSourceId: eg,
        sound: ev
      }), (async () => {
        let e = await g.default.hasPermission(y.NativePermissionTypes.SCREEN_RECORDING, {
          showAuthorizationError: !1
        });
        !e && f.default.show({
          title: F.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
          body: F.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
        })
      })()
    }(), Z()
  }
  let eD = r.useCallback((e, t, l) => {
    let n = (0, D.default)(e, el, ea),
      [a, s] = null != n ? n : [t, l];
    if (e !== eN && (t = a, l = s), !(0, j.default)(e, t, l, el, ea)) {
      let [e, n] = (0, D.default)(V.ApplicationStreamPresets.PRESET_VIDEO, el, ea);
      t = e, l = n
    }
    l !== eA && eR(l), t !== eI && ex(t), a !== t || s !== l ? ep(V.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eN && ep(e)
  }, [el, ea, eA, eI, eN]);
  async function eP(e) {
    if (e.preventDefault(), 1 === eu) return eo(2);
    let t = (0, w.default)(et, eC, h.default.getRunningGames()),
      n = O.default.supportsFeature(k.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
    if ((0, M.isMac)() && null != eC) {
      let e = await I.default.getMediaEngine().getDesktopSources(),
        t = eC.id;
      if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
        var a, r;
        a = t, r = e, L.default.track(k.AnalyticEvents.SCREENSHARE_FAILED, {
          source_id: a,
          screens: r.length
        }), (0, c.openModal)(e => (0, s.jsx)(c.ConfirmModal, {
          header: F.default.Messages.SCREENSHARE_RELAUNCH,
          confirmText: F.default.Messages.OKAY,
          cancelText: F.default.Messages.CANCEL,
          onConfirm: () => O.default.relaunch(),
          ...e,
          children: (0, s.jsx)(c.Text, {
            variant: "text-md/normal",
            children: F.default.Messages.SCREENSHARE_RELAUNCH_BODY
          })
        }));
        return
      }
    }
    n ? ! function() {
      var e;
      let t = null !== (e = null == et ? void 0 : et.pid) && void 0 !== e ? e : null;
      (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await l.el("426319").then(l.bind(l, "426319"));
        return l => (0, s.jsx)(e, {
          ...l,
          handleStream: ej,
          pid: t
        })
      })
    }() : ej()
  }
  let eG = r.useCallback(e => {
      eh(e), null != e && (eo(2), em(!0))
    }, []),
    eb = r.useCallback(e => {
      eM(e), eo(z ? 1 : 2)
    }, [z]),
    eU = function(e) {
      switch (e) {
        case 1:
          return F.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
        case 2:
          return null;
        default:
          return F.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
      }
    }(eu),
    ew = (0, s.jsx)(c.ModalHeader, {
      className: B.modalHeader,
      separator: !1,
      children: (0, s.jsxs)(v.default, {
        direction: v.default.Direction.VERTICAL,
        align: v.default.Align.CENTER,
        className: B.header,
        children: [(0, s.jsx)(c.Heading, {
          variant: "heading-xl/semibold",
          id: ei,
          className: B.headerText,
          children: F.default.Messages.GO_LIVE_MODAL_TITLE
        }), null != eU ? (0, s.jsx)(c.Text, {
          className: B.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: eU
        }) : null]
      })
    }),
    eV = (0, s.jsxs)(c.Slides, {
      springConfig: {
        ...o.config.stiff,
        clamp: !0
      },
      activeSlide: eu,
      width: 480,
      onSlideReady: ec,
      children: [(0, s.jsx)(c.Slide, {
        id: 0,
        children: (0, s.jsx)("div", {
          className: B.modalSize,
          children: (0, s.jsx)(b.default, {
            onSelectGuild: eb
          })
        })
      }), (0, s.jsx)(c.Slide, {
        id: 1,
        children: (0, s.jsx)("div", {
          className: B.modalSize,
          children: (0, s.jsx)(U.default, {
            selectedSource: eC,
            onChangeSelectedSource: eG
          })
        })
      }), (0, s.jsx)(c.Slide, {
        id: 2,
        children: (0, s.jsx)("div", {
          className: B.modalSize,
          children: (0, s.jsx)(G.default, {
            selectedChannelId: eS,
            selectedPreset: eN,
            selectedResolution: eI,
            selectedSource: eC,
            selectedFPS: eA,
            sound: ev,
            sourceChanged: ef,
            selectSource: z,
            onChangeSelectedFPS: e => eD(eN, eI, e),
            onChangeSelectedResolution: e => eD(eN, e, eA),
            onChangeSelectedPreset: e => eD(e, eI, eA),
            onChangeSelectedChannelId: eE,
            onChangeSelectedSource: eG,
            onChangeSource: () => eo(1),
            onChangeAudioDevice: e => e_(e),
            onChangeGuild: () => eo(0),
            onChangeSound: e => eT(e),
            onClose: Z,
            selectedGuildId: eL,
            targetGuildPremiumTier: ea,
            selectGuild: W,
            isAnimationDone: 2 === ed && J === c.ModalTransitionState.ENTERED
          })
        })
      })]
    }),
    ek = function(e, t, l, n) {
      switch (e) {
        case 1:
          return t ? 0 : null;
        case 2:
          if (n) return 1;
          if (!l && t) return 0;
          return null;
        default:
          return null
      }
    }(eu, W, z, ef),
    ey = 2 !== eu || null == eC && null == et || null == eO,
    eF = (0, s.jsxs)(c.ModalFooter, {
      justify: null == ek ? v.default.Justify.START : v.default.Justify.BETWEEN,
      children: [(0, s.jsx)(c.Button, {
        type: "submit",
        size: c.Button.Sizes.SMALL,
        disabled: ey,
        autoFocus: !0,
        children: F.default.Messages.GO_LIVE_MODAL_CTA
      }), null == ek ? (0, s.jsx)(c.Button, {
        className: B.cancelButton,
        look: c.Button.Looks.LINK,
        size: c.Button.Sizes.SMALL,
        color: c.ButtonColors.PRIMARY,
        onClick: Z,
        children: F.default.Messages.CANCEL
      }) : (0, s.jsx)(c.Button, {
        size: c.Button.Sizes.SMALL,
        color: c.ButtonColors.PRIMARY,
        onClick: () => eo(ek),
        children: F.default.Messages.BACK
      })]
    });
  return (0, s.jsx)(E.default, {
    page: k.AnalyticsPages.GO_LIVE_MODAL,
    children: (0, s.jsxs)(c.ModalRoot, {
      "aria-labelledby": ei,
      transitionState: J,
      size: c.ModalSize.DYNAMIC,
      className: B.modalSize,
      children: [(0, s.jsx)(c.ModalCloseButton, {
        onClick: Z,
        className: B.modalCloseButton
      }), (0, s.jsx)("div", {
        className: B.art
      }), (0, s.jsxs)("form", {
        onSubmit: eP,
        children: [ew, eV, eF]
      })]
    })
  })
}