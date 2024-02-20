"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("37983"),
  r = n("884691"),
  s = n("446674"),
  i = n("77078"),
  l = n("629109"),
  o = n("997289"),
  u = n("773356"),
  d = n("268491"),
  c = n("305961"),
  f = n("42887"),
  h = n("697218"),
  p = n("49111"),
  m = n("686298"),
  C = n("353927"),
  E = n("782340");

function g(e, t) {
  let {
    preset: g,
    resolution: S,
    fps: v
  } = (0, s.useStateFromStoresObject)([d.default], () => d.default.getState()), _ = (0, s.useStateFromStores)([f.default], () => f.default.getGoLiveSource()), T = (0, s.useStateFromStores)([h.default], () => h.default.getCurrentUser()), A = (0, s.useStateFromStores)([c.default], () => {
    var t;
    return null === (t = c.default.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
  }), {
    location: I
  } = (0, o.useAnalyticsContext)(), M = r.useCallback((e, r, s, o) => {
    if (e) {
      if (null != _) {
        let e = {
          qualityOptions: {
            preset: m.ApplicationStreamPresets.PRESET_CUSTOM,
            resolution: r,
            frameRate: s
          },
          context: C.MediaEngineContextTypes.STREAM
        };
        null != _.desktopSource ? e.desktopSettings = {
          sourceId: _.desktopSource.id,
          sound: !0
        } : null != _.cameraSource && (e.cameraSettings = {
          videoDeviceGuid: _.cameraSource.videoDeviceGuid,
          audioDeviceGuid: _.cameraSource.audioDeviceGuid
        }), l.default.setGoLiveSource(e)
      }
    } else {
      var u, d;
      u = t, d = {
        ...I,
        object: p.AnalyticsObjects.RADIO_ITEM,
        objectType: o
      }, (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("754534").then(n.bind(n, "754534"));
        return t => (0, a.jsx)(e, {
          ...t,
          analyticsSource: d
        })
      }, {
        contextKey: u === p.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
      })
    }
  }, [t, I, _]);
  if (null == e) return null;
  let x = g === m.ApplicationStreamPresets.PRESET_DOCUMENTS ? m.ApplicationStreamFPS.FPS_30 : v,
    y = m.ApplicationStreamFPSButtonsWithSuffixLabel.map(e => {
      let {
        value: t,
        label: n
      } = e, r = (0, u.default)(m.ApplicationStreamPresets.PRESET_CUSTOM, S, t, T, A);
      return (0, a.jsx)(i.MenuRadioItem, {
        group: "stream-settings-fps",
        id: "stream-settings-fps-".concat(t),
        label: n,
        checked: t === v,
        action: () => M(r, S, t, p.AnalyticsObjectTypes.RESOLUTION)
      }, "stream-settings-fps-".concat(t))
    }),
    R = m.ApplicationStreamResolutionButtonsWithSuffixLabel.map(e => {
      let {
        value: t,
        label: n
      } = e, r = (0, u.default)(m.ApplicationStreamPresets.PRESET_CUSTOM, t, x, T, A);
      return (0, a.jsx)(i.MenuRadioItem, {
        group: "stream-settings-resolution",
        id: "stream-settings-resolution-".concat(t),
        label: n,
        checked: t === S,
        action: () => M(r, t, x, p.AnalyticsObjectTypes.RESOLUTION)
      }, "stream-settings-resolution-".concat(t))
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.MenuGroup, {
      label: E.default.Messages.SCREENSHARE_FRAME_RATE,
      children: y
    }), (0, a.jsx)(i.MenuGroup, {
      label: E.default.Messages.STREAM_RESOLUTION,
      children: R
    })]
  })
}