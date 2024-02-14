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
  E = n("697218"),
  S = n("49111"),
  h = n("686298"),
  C = n("353927"),
  _ = n("782340");

function p(e, t) {
  let {
    preset: p,
    resolution: m,
    fps: g
  } = (0, s.useStateFromStoresObject)([d.default], () => d.default.getState()), T = (0, s.useStateFromStores)([f.default], () => f.default.getGoLiveSource()), v = (0, s.useStateFromStores)([E.default], () => E.default.getCurrentUser()), A = (0, s.useStateFromStores)([c.default], () => {
    var t;
    return null === (t = c.default.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
  }), {
    location: I
  } = (0, u.useAnalyticsContext)(), R = r.useCallback((e, r, s, u) => {
    if (e) {
      if (null != T) {
        let e = {
          qualityOptions: {
            preset: h.ApplicationStreamPresets.PRESET_CUSTOM,
            resolution: r,
            frameRate: s
          },
          context: C.MediaEngineContextTypes.STREAM
        };
        null != T.desktopSource ? e.desktopSettings = {
          sourceId: T.desktopSource.id,
          sound: !0
        } : null != T.cameraSource && (e.cameraSettings = {
          videoDeviceGuid: T.cameraSource.videoDeviceGuid,
          audioDeviceGuid: T.cameraSource.audioDeviceGuid
        }), l.default.setGoLiveSource(e)
      }
    } else {
      var o, d;
      o = t, d = {
        ...I,
        object: S.AnalyticsObjects.RADIO_ITEM,
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
        contextKey: o === S.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
      })
    }
  }, [t, I, T]);
  if (null == e) return null;
  let M = p === h.ApplicationStreamPresets.PRESET_DOCUMENTS ? h.ApplicationStreamFPS.FPS_30 : g,
    O = h.ApplicationStreamFPSButtonsWithSuffixLabel.map(e => {
      let {
        value: t,
        label: n
      } = e, r = (0, o.default)(h.ApplicationStreamPresets.PRESET_CUSTOM, m, t, v, A);
      return (0, a.jsx)(i.MenuRadioItem, {
        group: "stream-settings-fps",
        id: "stream-settings-fps-".concat(t),
        label: n,
        checked: t === g,
        action: () => R(r, m, t, S.AnalyticsObjectTypes.RESOLUTION)
      }, "stream-settings-fps-".concat(t))
    }),
    L = h.ApplicationStreamResolutionButtonsWithSuffixLabel.map(e => {
      let {
        value: t,
        label: n
      } = e, r = (0, o.default)(h.ApplicationStreamPresets.PRESET_CUSTOM, t, M, v, A);
      return (0, a.jsx)(i.MenuRadioItem, {
        group: "stream-settings-resolution",
        id: "stream-settings-resolution-".concat(t),
        label: n,
        checked: t === m,
        action: () => R(r, t, M, S.AnalyticsObjectTypes.RESOLUTION)
      }, "stream-settings-resolution-".concat(t))
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.MenuGroup, {
      label: _.default.Messages.SCREENSHARE_FRAME_RATE,
      children: O
    }), (0, a.jsx)(i.MenuGroup, {
      label: _.default.Messages.STREAM_RESOLUTION,
      children: L
    })]
  })
}