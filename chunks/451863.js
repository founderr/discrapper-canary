"use strict";
l.r(t), l.d(t, {
  default: function() {
    return H
  }
}), l("222007");
var a, n, s = l("37983"),
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
  h = l("928609"),
  g = l("268491"),
  _ = l("42203"),
  N = l("305961"),
  p = l("42887"),
  I = l("568307"),
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
  b = l("636909"),
  G = l("934054"),
  U = l("23922"),
  k = l("16750"),
  V = l("686298"),
  w = l("49111"),
  y = l("180524"),
  F = l("782340"),
  B = l("770420");
(n = a || (a = {}))[n.GUILD = 0] = "GUILD", n[n.SOURCE = 1] = "SOURCE", n[n.CONFIRM = 2] = "CONFIRM";

function H(e) {
  var t, a, n, i, H;
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
  } = (0, d.useStateFromStoresObject)([g.default], () => g.default.getState()), ee = (0, d.useStateFromStores)([x.default, _.default], () => _.default.getChannel(x.default.getVoiceChannelId())), et = (0, d.useStateFromStores)([I.default, R.default], () => (0, M.isWindows)() ? (0, P.default)(I.default, R.default) : null), el = (0, d.useStateFromStores)([A.default], () => {
    let e = A.default.getCurrentUser();
    return u(null != e, "GoLiveModal: user cannot be undefined"), e
  }), ea = null !== (t = null == ee ? void 0 : ee.getGuildId()) && void 0 !== t ? t : K, en = (0, d.useStateFromStores)([N.default], () => {
    var e;
    return null != ea ? null === (e = N.default.getGuild(ea)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [es, er] = null !== (a = (0, D.default)(Q, el, en)) && void 0 !== a ? a : [V.ApplicationStreamResolutions.RESOLUTION_720, V.ApplicationStreamFPS.FPS_30];
  Q !== V.ApplicationStreamPresets.PRESET_CUSTOM && (X = es, q = er);
  let ei = (0, T.useUID)();
  let [eu, eo] = r.useState((i = W, H = z, i ? 0 : H ? 1 : 2)), [ed, ec] = r.useState(null), [ef, em] = r.useState(!1), [eS, eE] = r.useState(null), [eC, eh] = r.useState(null), [eg, e_] = r.useState(null), [eN, ep] = r.useState(Q), [eI, ex] = r.useState(X), [eA, eR] = r.useState(q), [ev, eT] = r.useState($), [eL, eM] = r.useState(null != K ? K : null), eO = null !== (n = null == ee ? void 0 : ee.id) && void 0 !== n ? n : eS;
  r.useEffect(() => {
    let e = (0, M.isWindows)() ? (0, P.default)(I.default, R.default) : null,
      t = (null == e ? void 0 : e.id) != null ? C.default.getApplication(e.id) : null;
    L.default.track(w.AnalyticEvents.OPEN_MODAL, {
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
      let a = _.default.getChannel(l),
        n = null !== (t = null == a ? void 0 : a.getGuildId()) && void 0 !== t ? t : K;
      null == ee && m.default.selectVoiceChannel(l);
      let s = eN,
        r = eI,
        i = eA;
      !(0, j.default)(s, r, i, el, en) && (s = V.ApplicationStreamPresets.PRESET_VIDEO, r = V.ApplicationStreamResolutions.RESOLUTION_720, i = V.ApplicationStreamFPS.FPS_30), (0, S.updateStreamSettings)({
        preset: s,
        resolution: r,
        frameRate: i,
        soundshareEnabled: ev
      });
      let o = (0, k.default)(et, eC, I.default.getRunningGames()),
        d = !(0, M.isWindows)() || null == o || (null == eC ? void 0 : eC.id.startsWith("camera:")),
        c = d || null == o ? null : o.pid;
      (0, S.startStream)(n, l, {
        pid: c,
        sourceId: null == c && null != eC ? eC.id : null,
        sourceName: null == c && null != eC ? eC.name : null,
        audioSourceId: eg,
        sound: ev
      }), (async () => {
        let e = await h.default.hasPermission(y.NativePermissionTypes.SCREEN_RECORDING, {
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
    let a = (0, D.default)(e, el, en),
      [n, s] = null != a ? a : [t, l];
    if (e !== eN && (t = n, l = s), !(0, j.default)(e, t, l, el, en)) {
      let [e, a] = (0, D.default)(V.ApplicationStreamPresets.PRESET_VIDEO, el, en);
      t = e, l = a
    }
    l !== eA && eR(l), t !== eI && ex(t), n !== t || s !== l ? ep(V.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eN && ep(e)
  }, [el, en, eA, eI, eN]);
  async function eP(e) {
    if (e.preventDefault(), 1 === eu) return eo(2);
    let t = (0, k.default)(et, eC, I.default.getRunningGames()),
      a = O.default.supportsFeature(w.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
    if ((0, M.isMac)() && null != eC) {
      let e = await p.default.getMediaEngine().getDesktopSources(),
        t = eC.id;
      if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
        var n, r;
        n = t, r = e, L.default.track(w.AnalyticEvents.SCREENSHARE_FAILED, {
          source_id: n,
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
    a ? ! function() {
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
  let eb = r.useCallback(e => {
      eh(e), null != e && (eo(2), em(!0))
    }, []),
    eG = r.useCallback(e => {
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
    ek = (0, s.jsx)(c.ModalHeader, {
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
          children: (0, s.jsx)(G.default, {
            onSelectGuild: eG
          })
        })
      }), (0, s.jsx)(c.Slide, {
        id: 1,
        children: (0, s.jsx)("div", {
          className: B.modalSize,
          children: (0, s.jsx)(U.default, {
            selectedSource: eC,
            onChangeSelectedSource: eb
          })
        })
      }), (0, s.jsx)(c.Slide, {
        id: 2,
        children: (0, s.jsx)("div", {
          className: B.modalSize,
          children: (0, s.jsx)(b.default, {
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
            onChangeSelectedSource: eb,
            onChangeSource: () => eo(1),
            onChangeAudioDevice: e => e_(e),
            onChangeGuild: () => eo(0),
            onChangeSound: e => eT(e),
            onClose: Z,
            selectedGuildId: eL,
            targetGuildPremiumTier: en,
            selectGuild: W,
            isAnimationDone: 2 === ed && J === c.ModalTransitionState.ENTERED
          })
        })
      })]
    }),
    ew = function(e, t, l, a) {
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
    }(eu, W, z, ef),
    ey = 2 !== eu || null == eC && null == et || null == eO,
    eF = (0, s.jsxs)(c.ModalFooter, {
      justify: null == ew ? v.default.Justify.START : v.default.Justify.BETWEEN,
      children: [(0, s.jsx)(c.Button, {
        type: "submit",
        size: c.Button.Sizes.SMALL,
        disabled: ey,
        autoFocus: !0,
        children: F.default.Messages.GO_LIVE_MODAL_CTA
      }), null == ew ? (0, s.jsx)(c.Button, {
        className: B.cancelButton,
        look: c.Button.Looks.LINK,
        size: c.Button.Sizes.SMALL,
        color: c.ButtonColors.PRIMARY,
        onClick: Z,
        children: F.default.Messages.CANCEL
      }) : (0, s.jsx)(c.Button, {
        size: c.Button.Sizes.SMALL,
        color: c.ButtonColors.PRIMARY,
        onClick: () => eo(ew),
        children: F.default.Messages.BACK
      })]
    });
  return (0, s.jsx)(E.default, {
    page: w.AnalyticsPages.GO_LIVE_MODAL,
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
        children: [ek, eV, eF]
      })]
    })
  })
}