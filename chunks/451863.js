"use strict";
l.r(t), l.d(t, {
  default: function() {
    return w
  }
}), l("222007");
var n, s, a = l("37983"),
  r = l("884691"),
  i = l("627445"),
  u = l.n(i),
  o = l("907002"),
  d = l("446674"),
  c = l("77078"),
  f = l("404118"),
  m = l("987317"),
  S = l("990766"),
  h = l("901582"),
  C = l("299285"),
  E = l("928609"),
  p = l("268491"),
  N = l("42203"),
  g = l("305961"),
  _ = l("42887"),
  x = l("568307"),
  I = l("18494"),
  v = l("697218"),
  A = l("703370"),
  R = l("145131"),
  T = l("476765"),
  L = l("599110"),
  j = l("773336"),
  M = l("50885"),
  O = l("773356"),
  D = l("7738"),
  b = l("375202"),
  P = l("636909"),
  y = l("934054"),
  k = l("23922"),
  G = l("16750"),
  H = l("686298"),
  U = l("49111"),
  F = l("180524"),
  B = l("782340"),
  V = l("770420");
(s = n || (n = {}))[s.GUILD = 0] = "GUILD", s[s.SOURCE = 1] = "SOURCE", s[s.CONFIRM = 2] = "CONFIRM";

function w(e) {
  var t, n, s, i, w;
  let {
    selectGuild: W = !1,
    selectSource: z = !0,
    guildId: K,
    analyticsLocation: Y,
    onClose: Z,
    transitionState: J
  } = e, {
    preset: X,
    resolution: Q,
    fps: q
  } = (0, d.useStateFromStoresObject)([p.default], () => p.default.getState()), $ = (0, d.useStateFromStores)([I.default, N.default], () => N.default.getChannel(I.default.getVoiceChannelId())), ee = (0, d.useStateFromStores)([x.default, A.default], () => (0, j.isWindows)() ? (0, b.default)(x.default, A.default) : null), et = (0, d.useStateFromStores)([v.default], () => {
    let e = v.default.getCurrentUser();
    return u(null != e, "GoLiveModal: user cannot be undefined"), e
  }), el = null !== (t = null == $ ? void 0 : $.getGuildId()) && void 0 !== t ? t : K, en = (0, d.useStateFromStores)([g.default], () => {
    var e;
    return null != el ? null === (e = g.default.getGuild(el)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [es, ea] = null !== (n = (0, D.default)(X, et, en)) && void 0 !== n ? n : [H.ApplicationStreamResolutions.RESOLUTION_720, H.ApplicationStreamFPS.FPS_30];
  X !== H.ApplicationStreamPresets.PRESET_CUSTOM && (Q = es, q = ea);
  let er = (0, T.useUID)();
  let [ei, eu] = r.useState((i = W, w = z, i ? 0 : w ? 1 : 2)), [eo, ed] = r.useState(null), [ec, ef] = r.useState(!1), [em, eS] = r.useState(null), [eh, eC] = r.useState(null), [eE, ep] = r.useState(null), [eN, eg] = r.useState(X), [e_, ex] = r.useState(Q), [eI, ev] = r.useState(q), [eA, eR] = r.useState(!0), [eT, eL] = r.useState(null != K ? K : null), ej = null !== (s = null == $ ? void 0 : $.id) && void 0 !== s ? s : em;
  r.useEffect(() => {
    let e = (0, j.isWindows)() ? (0, b.default)(x.default, A.default) : null,
      t = (null == e ? void 0 : e.id) != null ? C.default.getApplication(e.id) : null;
    L.default.track(U.AnalyticEvents.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: Y
    })
  }, [Y]);

  function eM() {
    ! function() {
      var e, t;
      u(null != ee || null != eh, "got nothing to stream");
      let l = null !== (e = null == $ ? void 0 : $.id) && void 0 !== e ? e : em;
      u(null != l, "Received null target channel ID");
      let n = N.default.getChannel(l),
        s = null !== (t = null == n ? void 0 : n.getGuildId()) && void 0 !== t ? t : K;
      null == $ && m.default.selectVoiceChannel(l);
      let a = eN,
        r = e_,
        i = eI;
      !(0, O.default)(a, r, i, et, en) && (a = H.ApplicationStreamPresets.PRESET_VIDEO, r = H.ApplicationStreamResolutions.RESOLUTION_720, i = H.ApplicationStreamFPS.FPS_30), (0, S.updateStreamSettings)({
        preset: a,
        resolution: r,
        frameRate: i
      });
      let o = (0, G.default)(ee, eh, x.default.getRunningGames()),
        d = !(0, j.isWindows)() || null == o || (null == eh ? void 0 : eh.id.startsWith("camera:")),
        c = d || null == o ? null : o.pid;
      (0, S.startStream)(s, l, {
        pid: c,
        sourceId: null == c && null != eh ? eh.id : null,
        sourceName: null == c && null != eh ? eh.name : null,
        audioSourceId: eE,
        sound: eA
      }), (async () => {
        let e = await E.default.hasPermission(F.NativePermissionTypes.SCREEN_RECORDING, {
          showAuthorizationError: !1
        });
        !e && f.default.show({
          title: B.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
          body: B.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
        })
      })()
    }(), Z()
  }
  let eO = r.useCallback((e, t, l) => {
    let n = (0, D.default)(e, et, en),
      [s, a] = null != n ? n : [t, l];
    if (e !== eN && (t = s, l = a), !(0, O.default)(e, t, l, et, en)) {
      let [e, n] = (0, D.default)(H.ApplicationStreamPresets.PRESET_VIDEO, et, en);
      t = e, l = n
    }
    l !== eI && ev(l), t !== e_ && ex(t), s !== t || a !== l ? eg(H.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eN && eg(e)
  }, [et, en, eI, e_, eN]);
  async function eD(e) {
    if (e.preventDefault(), 1 === ei) return eu(2);
    let t = (0, G.default)(ee, eh, x.default.getRunningGames()),
      n = M.default.supportsFeature(U.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
    if ((0, j.isMac)() && null != eh) {
      let e = await _.default.getMediaEngine().getDesktopSources(),
        t = eh.id;
      if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
        var s, r;
        s = t, r = e, L.default.track(U.AnalyticEvents.SCREENSHARE_FAILED, {
          source_id: s,
          screens: r.length
        }), (0, c.openModal)(e => (0, a.jsx)(c.ConfirmModal, {
          header: B.default.Messages.SCREENSHARE_RELAUNCH,
          confirmText: B.default.Messages.OKAY,
          cancelText: B.default.Messages.CANCEL,
          onConfirm: () => M.default.relaunch(),
          ...e,
          children: (0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            children: B.default.Messages.SCREENSHARE_RELAUNCH_BODY
          })
        }));
        return
      }
    }
    n ? ! function() {
      var e;
      let t = null !== (e = null == ee ? void 0 : ee.pid) && void 0 !== e ? e : null;
      (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await l.el("426319").then(l.bind(l, "426319"));
        return l => (0, a.jsx)(e, {
          ...l,
          handleStream: eM,
          pid: t
        })
      })
    }() : eM()
  }
  let eb = r.useCallback(e => {
      eC(e), null != e && (eu(2), ef(!0))
    }, []),
    eP = r.useCallback(e => {
      eL(e), eu(z ? 1 : 2)
    }, [z]),
    ey = function(e) {
      switch (e) {
        case 1:
          return B.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
        case 2:
          return null;
        default:
          return B.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
      }
    }(ei),
    ek = (0, a.jsx)(c.ModalHeader, {
      className: V.modalHeader,
      separator: !1,
      children: (0, a.jsxs)(R.default, {
        direction: R.default.Direction.VERTICAL,
        align: R.default.Align.CENTER,
        className: V.header,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-xl/semibold",
          id: er,
          className: V.headerText,
          children: B.default.Messages.GO_LIVE_MODAL_TITLE
        }), null != ey ? (0, a.jsx)(c.Text, {
          className: V.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: ey
        }) : null]
      })
    }),
    eG = (0, a.jsxs)(c.Slides, {
      springConfig: {
        ...o.config.stiff,
        clamp: !0
      },
      activeSlide: ei,
      width: 480,
      onSlideReady: ed,
      children: [(0, a.jsx)(c.Slide, {
        id: 0,
        children: (0, a.jsx)("div", {
          className: V.modalSize,
          children: (0, a.jsx)(y.default, {
            onSelectGuild: eP
          })
        })
      }), (0, a.jsx)(c.Slide, {
        id: 1,
        children: (0, a.jsx)("div", {
          className: V.modalSize,
          children: (0, a.jsx)(k.default, {
            selectedSource: eh,
            onChangeSelectedSource: eb
          })
        })
      }), (0, a.jsx)(c.Slide, {
        id: 2,
        children: (0, a.jsx)("div", {
          className: V.modalSize,
          children: (0, a.jsx)(P.default, {
            selectedChannelId: em,
            selectedPreset: eN,
            selectedResolution: e_,
            selectedSource: eh,
            selectedFPS: eI,
            sound: eA,
            sourceChanged: ec,
            selectSource: z,
            onChangeSelectedFPS: e => eO(eN, e_, e),
            onChangeSelectedResolution: e => eO(eN, e, eI),
            onChangeSelectedPreset: e => eO(e, e_, eI),
            onChangeSelectedChannelId: eS,
            onChangeSelectedSource: eb,
            onChangeSource: () => eu(1),
            onChangeAudioDevice: e => ep(e),
            onChangeGuild: () => eu(0),
            onChangeSound: e => eR(e),
            onClose: Z,
            selectedGuildId: eT,
            targetGuildPremiumTier: en,
            selectGuild: W,
            isAnimationDone: 2 === eo && J === c.ModalTransitionState.ENTERED
          })
        })
      })]
    }),
    eH = function(e, t, l, n) {
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
    }(ei, W, z, ec),
    eU = 2 !== ei || null == eh && null == ee || null == ej,
    eF = (0, a.jsxs)(c.ModalFooter, {
      justify: null == eH ? R.default.Justify.START : R.default.Justify.BETWEEN,
      children: [(0, a.jsx)(c.Button, {
        type: "submit",
        size: c.Button.Sizes.SMALL,
        disabled: eU,
        autoFocus: !0,
        children: B.default.Messages.GO_LIVE_MODAL_CTA
      }), null == eH ? (0, a.jsx)(c.Button, {
        className: V.cancelButton,
        look: c.Button.Looks.LINK,
        size: c.Button.Sizes.SMALL,
        color: c.ButtonColors.PRIMARY,
        onClick: Z,
        children: B.default.Messages.CANCEL
      }) : (0, a.jsx)(c.Button, {
        size: c.Button.Sizes.SMALL,
        color: c.ButtonColors.PRIMARY,
        onClick: () => eu(eH),
        children: B.default.Messages.BACK
      })]
    });
  return (0, a.jsx)(h.default, {
    page: U.AnalyticsPages.GO_LIVE_MODAL,
    children: (0, a.jsxs)(c.ModalRoot, {
      "aria-labelledby": er,
      transitionState: J,
      size: c.ModalSize.DYNAMIC,
      className: V.modalSize,
      children: [(0, a.jsx)(c.ModalCloseButton, {
        onClick: Z,
        className: V.modalCloseButton
      }), (0, a.jsx)("div", {
        className: V.art
      }), (0, a.jsxs)("form", {
        onSubmit: eD,
        children: [ek, eG, eF]
      })]
    })
  })
}