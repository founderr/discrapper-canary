"use strict";
let i;
n.d(t, {
  Z: function() {
    return eE
  }
}), n(653041);
var s = n(735250),
  l = n(470079),
  o = n(120356),
  a = n.n(o),
  r = n(921738),
  c = n.n(r),
  d = n(954955),
  u = n.n(d),
  h = n(498607),
  p = n.n(h),
  f = n(442837),
  E = n(481060),
  g = n(668781),
  m = n(239091),
  Z = n(13245),
  I = n(425493),
  S = n(951483),
  _ = n(714338),
  C = n(185666),
  v = n(100527),
  x = n(906732),
  N = n(770471),
  T = n(757454),
  O = n(594190),
  A = n(74299),
  y = n(989941),
  R = n(377400),
  M = n(329557),
  L = n(199902),
  P = n(314897),
  D = n(592125),
  b = n(430824),
  j = n(131951),
  w = n(944486),
  k = n(618541),
  V = n(449224),
  U = n(574254),
  B = n(556296),
  G = n(237997),
  z = n(451478),
  Y = n(285952);
n(810090);
var W = n(70956),
  F = n(358085),
  H = n(998502),
  K = n(13140),
  X = n(145597),
  Q = n(658785),
  J = n(681603),
  q = n(358446),
  $ = n(348733),
  ee = n(312178),
  et = n(708383),
  en = n(923532),
  ei = n(107200),
  es = n(987650),
  el = n(981631),
  eo = n(689938),
  ea = n(217098);

function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
f.ZP.PersistedStore.disableWrites = __OVERLAY__, f.ZP.initialize();
let ec = null;

function ed(e) {
  e.preventDefault()
}

function eu(e) {
  (0, m.jW)(e, async () => {
    let {
      default: e
    } = await n.e("92780").then(n.bind(n, 930381));
    return t => (0, s.jsx)(e, {
      ...t
    })
  })
}
F.isPlatformEmbedded;
let eh = e => {
    let {
      keybind: t,
      onClick: n,
      isPreviewingInGame: i,
      locked: l
    } = e, o = l ? E.Clickable : "div";
    return (0, s.jsx)(o, {
      className: a()(ea.overlayBackground, {
        [ea.overlayActive]: !l,
        [ea.overlayLocked]: l,
        [ea.previewMode]: !l && i
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: s
        } = e;
        s === el.AeJ.PRIMARY && t === i && n()
      },
      onContextMenu: eu,
      children: l ? null : (0, s.jsx)("div", {
        className: ea.closeContainer,
        children: (0, s.jsx)(I.Z, {
          variant: I.Z.Variants.BOLD,
          keybind: t,
          closeAction: n
        })
      })
    })
  },
  ep = e => {
    let {
      keyCode: t,
      shiftKey: n,
      metaKey: i,
      altKey: s,
      ctrlKey: l
    } = e;
    return {
      keyCode: t,
      shiftKey: n,
      metaKey: i,
      altKey: s,
      ctrlKey: l
    }
  };
class ef extends l.Component {
  handleLock() {
    !(0, E.hasAnyModalOpen)() && !U.Z.isOpen() && Z.Z.setLocked(!0, (0, X.QF)())
  }
  handleDeactivate() {
    Z.Z.deactivateAllRegions()
  }
  componentDidMount() {
    Z.Z.startSession(), R.Z.initialize(), C.Z.initialize(), M.Z.initialize()
  }
  componentDidUpdate(e) {
    let {
      initialized: t
    } = this.props;
    if (!!t) {
      if (t && !e.initialized) {
        this.initialSetup();
        return
      }
      if (!e.locked && this.props.locked) {
        if (window.addEventListener("contextmenu", ed, !1), null != ec) {
          let e = Date.now() - ec;
          Z.Z.track(el.rMx.OVERLAY_LOCKED, {
            unlocked_duration: e
          }), ec = null
        }
        _.Z.disable(), this.activeKeyEventShapes = [], G.Z.isPinned(el.Odu.TEXT) && (_.Z.setLayout(S.Xq), _.Z.enable())
      } else e.locked && !this.props.locked && (window.removeEventListener("contextmenu", ed, !1), null == ec && (ec = Date.now(), Z.Z.track(el.rMx.OVERLAY_UNLOCKED)), _.Z.disable(), this.activeKeyEventShapes = [], _.Z.setLayout(S.Sr), _.Z.enable());
      e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, K.d2)(this.props.keybindKeyCodes))
    }
  }
  initialSetup() {
    let {
      connectedToVoice: e,
      locked: t,
      canGoLive: n,
      isStreaming: i,
      voiceGuild: s,
      voiceChannelId: l,
      game: o,
      canStartBroadcast: a,
      canBroadcast: r,
      showKeybindNotification: c,
      dismissKeybindNotification: d
    } = this.props;
    Z.Z.track(el.rMx.OVERLAY_INITIALIZED, {
      voice_widget_connected: e,
      text_widget_connected: G.Z.isPinned(el.Odu.TEXT)
    }), Q.Z.trackExposure({
      location: "Overlay"
    });
    let u = n && !i && null != o,
      h = e && null != s && null != l,
      p = {
        type: es.nc.WELCOME
      };
    if (c ? p = {
        type: es.nc.KEYBIND_INDICATORS,
        markAsDismissed: d
      } : u && !e && a ? (N.Z.trackExposure({
        location: "overlay_notification"
      }), r && (p = {
        type: es.nc.BROADCAST,
        game: o
      })) : u && h ? p = {
        type: es.nc.GO_LIVE_VOICE,
        game: o,
        voiceChannelId: l,
        voiceGuild: s
      } : u && (p = {
        type: es.nc.GO_LIVE_NON_VOICE,
        game: o
      }), Z.Z.overlayMounted(p), window.addEventListener("resize", this.handleWindowResize), t && window.addEventListener("contextmenu", ed, !1), F.isPlatformEmbedded) {
      let e = H.ZP.requireModule("discord_overlay2");
      void 0 !== e.setPerfInfoCallback && (e.setPerfInfoCallback(e => {
        Z.Z.track(el.rMx.OVERLAY_PERF_INFO, e)
      }), e.broadcastCommand({
        message: "set_perf_report_interval",
        interval: 15 * W.Z.Millis.MINUTE
      })), H.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
        G.Z.getDisableExternalLinkAlert() || t === k.Z.getLastURL() ? H.ZP.send("OPEN_EXTERNAL_URL", t) : g.Z.show({
          title: eo.Z.Messages.OVERLAY_LINK_ALERT_TITLE,
          body: eo.Z.Messages.OVERLAY_LINK_ALERT_BODY,
          secondaryConfirmText: eo.Z.Messages.OVERLAY_LINK_ALERT_SECONDARY,
          confirmText: eo.Z.Messages.CONTINUE,
          cancelText: eo.Z.Messages.CANCEL,
          onConfirmSecondary: () => {
            Z.Z.disableExternalLinkAlert(), H.ZP.send("OPEN_EXTERNAL_URL", t)
          },
          onConfirm: () => H.ZP.send("OPEN_EXTERNAL_URL", t)
        })
      })
    }
    window.addEventListener("keydown", this.onKeyDownGlobal, !0), window.addEventListener("keyup", this.onKeyUpGlobal, !0)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), window.removeEventListener("keydown", this.onKeyDownGlobal, !0), window.removeEventListener("keyup", this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener("contextmenu", ed, !1), R.Z.terminate(), C.Z.terminate(), M.Z.terminate()
  }
  renderInvalidSizeMessage() {
    return (0, s.jsx)(Y.Z, {
      justify: Y.Z.Justify.CENTER,
      align: Y.Z.Align.CENTER,
      className: ea.invalidContainer,
      children: (0, s.jsx)("div", {
        className: ea.inactiveContainer,
        children: eo.Z.Messages.OVERLAY_TOO_SMALL.format(X.FW)
      })
    })
  }
  render() {
    let {
      locked: e,
      keybind: t,
      incompatibleApp: n,
      initialized: l,
      isPreviewingInGame: o,
      activeRegions: r,
      windowSize: c,
      voiceGuild: d,
      voiceChannelId: u
    } = this.props, {
      width: h,
      height: p
    } = c;
    if (0 === h || 0 === p || n || !l) return null;
    let f = e || o,
      E = P.default.getId();
    return (0, s.jsxs)("div", {
      className: ea.overlay,
      children: [(0, s.jsx)(et.Z, {}), o && (0, s.jsx)("header", {
        className: ea.previewingInGameHeader,
        children: eo.Z.Messages.OVERLAY_IN_GAME_PREVIEW_HEADER
      }), i, (!e || r.has(el.O0n.TEXT_WIDGET)) && (0, s.jsx)(eh, {
        locked: e,
        keybind: t,
        onClick: e ? this.handleDeactivate : this.handleLock,
        isPreviewingInGame: o
      }), (0, X.Te)(c) ? (0, s.jsx)(ee.Z, {
        className: a()({
          [ea.layoutLocked]: e,
          [ea.layoutUnlocked]: !e
        })
      }) : e ? null : this.renderInvalidSizeMessage(), (0, s.jsx)(ei.Z, {}), null != d && null != u && (0, s.jsx)(en.Z, {
        streamerId: E,
        guildId: d.id,
        channelId: u
      }), (0, s.jsx)($.Z, {
        locked: f,
        keybind: t
      }), (0, s.jsx)(J.Z, {})]
    })
  }
  constructor(e) {
    super(e), er(this, "handleWindowResize", () => {
      (0, X.W2)() ? this.forceUpdate(): u()(() => {
        this.forceUpdate()
      }, 500)
    }), er(this, "activeKeyEventShapes", []), er(this, "lockEventShape", (0, K.d2)(this.props.keybindKeyCodes)), er(this, "getActiveKeyEventIndex", e => this.activeKeyEventShapes.findIndex(t => p()(t, e))), er(this, "onKeyDownGlobal", e => {
      let t = ep(e),
        n = this.getActiveKeyEventIndex(t) > -1,
        i = [16, 17, 18, 91].includes(e.keyCode);
      !n && !i && this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every(e => this.activeKeyEventShapes.some(t => p()(e, t))) && (e.preventDefault(), e.stopPropagation());
      let {
        locked: s,
        activeRegions: l
      } = this.props;
      t.keyCode === c().codes.esc && s && l.has(el.O0n.TEXT_WIDGET) && Z.Z.deactivateAllRegions()
    }), er(this, "onKeyUpGlobal", e => {
      let t = ep(e),
        n = this.getActiveKeyEventIndex(t);
      n > -1 && this.activeKeyEventShapes.splice(n, 1)
    });
    let t = e.locked && G.Z.isPinned(el.Odu.TEXT);
    _.Z.setLayout(t ? S.Xq : S.Sr), t && _.Z.enable()
  }
}

function eE() {
  let {
    locked: e,
    initialized: t,
    incompatibleApp: n,
    activeRegions: i,
    isPreviewingInGame: l
  } = (0, f.cj)([G.Z], () => ({
    locked: G.Z.isUILocked((0, X.QF)()),
    initialized: G.Z.initialized,
    incompatibleApp: G.Z.incompatibleApp,
    activeRegions: G.Z.getActiveRegions(),
    isPreviewingInGame: G.Z.isPreviewingInGame()
  })), o = (0, f.e7)([z.Z], () => z.Z.windowSize()), a = (0, f.e7)([B.Z], () => B.Z.getOverlayKeybind()), r = (0, f.e7)([w.Z], () => w.Z.getVoiceChannelId()), c = (0, f.e7)([D.Z], () => D.Z.getChannel(r)), d = (0, f.e7)([b.Z], () => null != c ? b.Z.getGuild(c.guild_id) : null), u = (0, f.e7)([O.ZP, V.Z], () => (0, y.Z)(O.ZP, V.Z)), h = (0, f.e7)([j.Z], () => (0, A.Z)(j.Z)), {
    canBroadcast: p
  } = N.Z.useExperiment({
    location: "overlay"
  }, {
    autoTrackExposure: !1
  }), g = (0, T.Z)() && null != u, m = (0, f.e7)([L.Z], () => null != L.Z.getCurrentUserActiveStream()), {
    analyticsLocations: Z
  } = (0, x.ZP)(v.Z.OVERLAY), {
    showKeybindIndicators: I,
    dismissKeybindNotification: S
  } = (0, q.K)();
  return (0, s.jsx)(x.Gt, {
    value: Z,
    children: (0, s.jsx)(E.RedesignIconContextProvider, {
      children: (0, s.jsx)(ef, {
        locked: e,
        initialized: t,
        incompatibleApp: n,
        activeRegions: i,
        isPreviewingInGame: l,
        windowSize: o,
        keybind: null != a ? (0, K.BB)(a.shortcut, !0) : "???",
        keybindKeyCodes: null != a ? a.shortcut : [],
        connectedToVoice: null != r,
        voiceChannelId: null != c ? c.id : null,
        voiceGuild: d,
        game: u,
        canGoLive: h,
        isStreaming: m,
        canBroadcast: p,
        canStartBroadcast: g,
        showKeybindNotification: I,
        dismissKeybindNotification: S
      })
    })
  })
}