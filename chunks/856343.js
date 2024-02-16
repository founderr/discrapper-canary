"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983"),
  r = n("884691"),
  s = n("446674"),
  i = n("77078"),
  l = n("629109"),
  u = n("997289"),
  o = n("773356"),
  d = n("268491"),
  c = n("305961"),
  f = n("42887"),
  S = n("697218"),
  E = n("49111"),
  h = n("686298"),
  _ = n("353927"),
  C = n("782340");

function p(e, t) {
  let {
    preset: p,
    resolution: m,
    fps: T
  } = (0, s.useStateFromStoresObject)([d.default], () => d.default.getState()), g = (0, s.useStateFromStores)([f.default], () => f.default.getGoLiveSource()), A = (0, s.useStateFromStores)([S.default], () => S.default.getCurrentUser()), v = (0, s.useStateFromStores)([c.default], () => {
    var t;
    return null === (t = c.default.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
  }), {
    location: I
  } = (0, u.useAnalyticsContext)(), R = r.useCallback((e, r, s, u) => {
    if (e) {
      if (null != g) {
        let e = {
          qualityOptions: {
            preset: h.ApplicationStreamPresets.PRESET_CUSTOM,
            resolution: r,
            frameRate: s
          },
          context: _.MediaEngineContextTypes.STREAM
        };
        null != g.desktopSource ? e.desktopSettings = {
          sourceId: g.desktopSource.id,
          sound: !0
        } : null != g.cameraSource && (e.cameraSettings = {
          videoDeviceGuid: g.cameraSource.videoDeviceGuid,
          audioDeviceGuid: g.cameraSource.audioDeviceGuid
        }), l.default.setGoLiveSource(e)
      }
    } else {
      var o, d;
      o = t, d = {
        ...I,
        object: E.AnalyticsObjects.RADIO_ITEM,
        objectType: u
      }, (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("754534").then(n.bind(n, "754534"));
        return t => (0, a.jsx)(e, {
          ...t,
          analyticsSource: d
        })
      }, {
        contextKey: o === E.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
      })
    }
  }, [t, I, g]);
  if (null == e) return null;
  let M = p === h.ApplicationStreamPresets.PRESET_DOCUMENTS ? h.ApplicationStreamFPS.FPS_30 : T,
    O = h.ApplicationStreamFPSButtonsWithSuffixLabel.map(e => {
      let {
        value: t,
        label: n
      } = e, r = (0, o.default)(h.ApplicationStreamPresets.PRESET_CUSTOM, m, t, A, v);
      return (0, a.jsx)(i.MenuRadioItem, {
        group: "stream-settings-fps",
        id: "stream-settings-fps-".concat(t),
        label: n,
        checked: t === T,
        action: () => R(r, m, t, E.AnalyticsObjectTypes.RESOLUTION)
      }, "stream-settings-fps-".concat(t))
    }),
    N = h.ApplicationStreamResolutionButtonsWithSuffixLabel.map(e => {
      let {
        value: t,
        label: n
      } = e, r = (0, o.default)(h.ApplicationStreamPresets.PRESET_CUSTOM, t, M, A, v);
      return (0, a.jsx)(i.MenuRadioItem, {
        group: "stream-settings-resolution",
        id: "stream-settings-resolution-".concat(t),
        label: n,
        checked: t === m,
        action: () => R(r, t, M, E.AnalyticsObjectTypes.RESOLUTION)
      }, "stream-settings-resolution-".concat(t))
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.MenuGroup, {
      label: C.default.Messages.SCREENSHARE_FRAME_RATE,
      children: O
    }), (0, a.jsx)(i.MenuGroup, {
      label: C.default.Messages.STREAM_RESOLUTION,
      children: N
    })]
  })
}