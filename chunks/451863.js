"use strict";
l.r(t), l.d(t, {
  default: function() {
    return B
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
  C = l("901582"),
  E = l("299285"),
  h = l("928609"),
  N = l("268491"),
  g = l("42203"),
  _ = l("305961"),
  p = l("42887"),
  I = l("568307"),
  v = l("18494"),
  x = l("697218"),
  A = l("703370"),
  R = l("145131"),
  T = l("476765"),
  L = l("599110"),
  M = l("773336"),
  j = l("50885"),
  O = l("773356"),
  D = l("7738"),
  P = l("375202"),
  b = l("636909"),
  G = l("934054"),
  y = l("23922"),
  U = l("16750"),
  w = l("686298"),
  V = l("49111"),
  H = l("180524"),
  F = l("782340"),
  k = l("770420");
(a = n || (n = {}))[a.GUILD = 0] = "GUILD", a[a.SOURCE = 1] = "SOURCE", a[a.CONFIRM = 2] = "CONFIRM";

function B(e) {
  var t, n, a, i, B;
  let {
    selectGuild: W = !1,
    selectSource: z = !0,
    guildId: Z,
    analyticsLocation: K,
    onClose: Y,
    transitionState: J
  } = e, {
    preset: X,
    resolution: Q,
    fps: q,
    soundshareEnabled: $
  } = (0, d.useStateFromStoresObject)([N.default], () => N.default.getState()), ee = (0, d.useStateFromStores)([v.default, g.default], () => g.default.getChannel(v.default.getVoiceChannelId())), et = (0, d.useStateFromStores)([I.default, A.default], () => (0, M.isWindows)() ? (0, P.default)(I.default, A.default) : null), el = (0, d.useStateFromStores)([x.default], () => {
    let e = x.default.getCurrentUser();
    return u(null != e, "GoLiveModal: user cannot be undefined"), e
  }), en = null !== (t = null == ee ? void 0 : ee.getGuildId()) && void 0 !== t ? t : Z, ea = (0, d.useStateFromStores)([_.default], () => {
    var e;
    return null != en ? null === (e = _.default.getGuild(en)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [es, er] = null !== (n = (0, D.default)(X, el, ea)) && void 0 !== n ? n : [w.ApplicationStreamResolutions.RESOLUTION_720, w.ApplicationStreamFPS.FPS_30];
  X !== w.ApplicationStreamPresets.PRESET_CUSTOM && (Q = es, q = er);
  let ei = (0, T.useUID)();
  let [eu, eo] = r.useState((i = W, B = z, i ? 0 : B ? 1 : 2)), [ed, ec] = r.useState(null), [ef, em] = r.useState(!1), [eS, eC] = r.useState(null), [eE, eh] = r.useState(null), [eN, eg] = r.useState(null), [e_, ep] = r.useState(X), [eI, ev] = r.useState(Q), [ex, eA] = r.useState(q), [eR, eT] = r.useState($), [eL, eM] = r.useState(null != Z ? Z : null), ej = null !== (a = null == ee ? void 0 : ee.id) && void 0 !== a ? a : eS;
  r.useEffect(() => {
    let e = (0, M.isWindows)() ? (0, P.default)(I.default, A.default) : null,
      t = (null == e ? void 0 : e.id) != null ? E.default.getApplication(e.id) : null;
    L.default.track(V.AnalyticEvents.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: K
    })
  }, [K]);

  function eO() {
    ! function() {
      var e, t;
      u(null != et || null != eE, "got nothing to stream");
      let l = null !== (e = null == ee ? void 0 : ee.id) && void 0 !== e ? e : eS;
      u(null != l, "Received null target channel ID");
      let n = g.default.getChannel(l),
        a = null !== (t = null == n ? void 0 : n.getGuildId()) && void 0 !== t ? t : Z;
      null == ee && m.default.selectVoiceChannel(l);
      let s = e_,
        r = eI,
        i = ex;
      !(0, O.default)(s, r, i, el, ea) && (s = w.ApplicationStreamPresets.PRESET_VIDEO, r = w.ApplicationStreamResolutions.RESOLUTION_720, i = w.ApplicationStreamFPS.FPS_30), (0, S.updateStreamSettings)({
        preset: s,
        resolution: r,
        frameRate: i,
        soundshareEnabled: eR
      });
      let o = (0, U.default)(et, eE, I.default.getRunningGames()),
        d = !(0, M.isWindows)() || null == o || (null == eE ? void 0 : eE.id.startsWith("camera:")),
        c = d || null == o ? null : o.pid;
      (0, S.startStream)(a, l, {
        pid: c,
        sourceId: null == c && null != eE ? eE.id : null,
        sourceName: null == c && null != eE ? eE.name : null,
        audioSourceId: eN,
        sound: eR
      }), (async () => {
        let e = await h.default.hasPermission(H.NativePermissionTypes.SCREEN_RECORDING, {
          showAuthorizationError: !1
        });
        !e && f.default.show({
          title: F.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
          body: F.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
        })
      })()
    }(), Y()
  }
  let eD = r.useCallback((e, t, l) => {
    let n = (0, D.default)(e, el, ea),
      [a, s] = null != n ? n : [t, l];
    if (e !== e_ && (t = a, l = s), !(0, O.default)(e, t, l, el, ea)) {
      let [e, n] = (0, D.default)(w.ApplicationStreamPresets.PRESET_VIDEO, el, ea);
      t = e, l = n
    }
    l !== ex && eA(l), t !== eI && ev(t), a !== t || s !== l ? ep(w.ApplicationStreamPresets.PRESET_CUSTOM) : e !== e_ && ep(e)
  }, [el, ea, ex, eI, e_]);
  async function eP(e) {
    if (e.preventDefault(), 1 === eu) return eo(2);
    let t = (0, U.default)(et, eE, I.default.getRunningGames()),
      n = j.default.supportsFeature(V.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
    if ((0, M.isMac)() && null != eE) {
      let e = await p.default.getMediaEngine().getDesktopSources(),
        t = eE.id;
      if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
        var a, r;
        a = t, r = e, L.default.track(V.AnalyticEvents.SCREENSHARE_FAILED, {
          source_id: a,
          screens: r.length
        }), (0, c.openModal)(e => (0, s.jsx)(c.ConfirmModal, {
          header: F.default.Messages.SCREENSHARE_RELAUNCH,
          confirmText: F.default.Messages.OKAY,
          cancelText: F.default.Messages.CANCEL,
          onConfirm: () => j.default.relaunch(),
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
          handleStream: eO,
          pid: t
        })
      })
    }() : eO()
  }
  let eb = r.useCallback(e => {
      eh(e), null != e && (eo(2), em(!0))
    }, []),
    eG = r.useCallback(e => {
      eM(e), eo(z ? 1 : 2)
    }, [z]),
    ey = function(e) {
      switch (e) {
        case 1:
          return F.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
        case 2:
          return null;
        default:
          return F.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
      }
    }(eu),
    eU = (0, s.jsx)(c.ModalHeader, {
      className: k.modalHeader,
      separator: !1,
      children: (0, s.jsxs)(R.default, {
        direction: R.default.Direction.VERTICAL,
        align: R.default.Align.CENTER,
        className: k.header,
        children: [(0, s.jsx)(c.Heading, {
          variant: "heading-xl/semibold",
          id: ei,
          className: k.headerText,
          children: F.default.Messages.GO_LIVE_MODAL_TITLE
        }), null != ey ? (0, s.jsx)(c.Text, {
          className: k.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: ey
        }) : null]
      })
    }),
    ew = (0, s.jsxs)(c.Slides, {
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
          className: k.modalSize,
          children: (0, s.jsx)(G.default, {
            onSelectGuild: eG
          })
        })
      }), (0, s.jsx)(c.Slide, {
        id: 1,
        children: (0, s.jsx)("div", {
          className: k.modalSize,
          children: (0, s.jsx)(y.default, {
            selectedSource: eE,
            onChangeSelectedSource: eb
          })
        })
      }), (0, s.jsx)(c.Slide, {
        id: 2,
        children: (0, s.jsx)("div", {
          className: k.modalSize,
          children: (0, s.jsx)(b.default, {
            selectedChannelId: eS,
            selectedPreset: e_,
            selectedResolution: eI,
            selectedSource: eE,
            selectedFPS: ex,
            sound: eR,
            sourceChanged: ef,
            selectSource: z,
            onChangeSelectedFPS: e => eD(e_, eI, e),
            onChangeSelectedResolution: e => eD(e_, e, ex),
            onChangeSelectedPreset: e => eD(e, eI, ex),
            onChangeSelectedChannelId: eC,
            onChangeSelectedSource: eb,
            onChangeSource: () => eo(1),
            onChangeAudioDevice: e => eg(e),
            onChangeGuild: () => eo(0),
            onChangeSound: e => eT(e),
            onClose: Y,
            selectedGuildId: eL,
            targetGuildPremiumTier: ea,
            selectGuild: W,
            isAnimationDone: 2 === ed && J === c.ModalTransitionState.ENTERED
          })
        })
      })]
    }),
    eV = function(e, t, l, n) {
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
    eH = 2 !== eu || null == eE && null == et || null == ej,
    eF = (0, s.jsxs)(c.ModalFooter, {
      justify: null == eV ? R.default.Justify.START : R.default.Justify.BETWEEN,
      children: [(0, s.jsx)(c.Button, {
        type: "submit",
        size: c.Button.Sizes.SMALL,
        disabled: eH,
        autoFocus: !0,
        children: F.default.Messages.GO_LIVE_MODAL_CTA
      }), null == eV ? (0, s.jsx)(c.Button, {
        className: k.cancelButton,
        look: c.Button.Looks.LINK,
        size: c.Button.Sizes.SMALL,
        color: c.ButtonColors.PRIMARY,
        onClick: Y,
        children: F.default.Messages.CANCEL
      }) : (0, s.jsx)(c.Button, {
        size: c.Button.Sizes.SMALL,
        color: c.ButtonColors.PRIMARY,
        onClick: () => eo(eV),
        children: F.default.Messages.BACK
      })]
    });
  return (0, s.jsx)(C.default, {
    page: V.AnalyticsPages.GO_LIVE_MODAL,
    children: (0, s.jsxs)(c.ModalRoot, {
      "aria-labelledby": ei,
      transitionState: J,
      size: c.ModalSize.DYNAMIC,
      className: k.modalSize,
      children: [(0, s.jsx)(c.ModalCloseButton, {
        onClick: Y,
        className: k.modalCloseButton
      }), (0, s.jsx)("div", {
        className: k.art
      }), (0, s.jsxs)("form", {
        onSubmit: eP,
        children: [eU, ew, eF]
      })]
    })
  })
}