"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("37983"),
  r = n("884691"),
  i = n("446674"),
  s = n("77078"),
  l = n("629109"),
  u = n("997289"),
  o = n("773356"),
  d = n("268491"),
  c = n("305961"),
  f = n("42887"),
  h = n("697218"),
  p = n("49111"),
  E = n("686298"),
  C = n("353927"),
  m = n("782340");

function S(e, t) {
  let {
    preset: S,
    resolution: g,
    fps: _
  } = (0, i.useStateFromStoresObject)([d.default], () => d.default.getState()), v = (0, i.useStateFromStores)([f.default], () => f.default.getGoLiveSource()), T = (0, i.useStateFromStores)([h.default], () => h.default.getCurrentUser()), I = (0, i.useStateFromStores)([c.default], () => {
    var t;
    return null === (t = c.default.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
  }), {
    location: A
  } = (0, u.useAnalyticsContext)(), M = r.useCallback((e, r, i, u) => {
    if (e) {
      if (null != v) {
        let e = {
          qualityOptions: {
            preset: E.ApplicationStreamPresets.PRESET_CUSTOM,
            resolution: r,
            frameRate: i
          },
          context: C.MediaEngineContextTypes.STREAM
        };
        null != v.desktopSource ? e.desktopSettings = {
          sourceId: v.desktopSource.id,
          sound: !0
        } : null != v.cameraSource && (e.cameraSettings = {
          videoDeviceGuid: v.cameraSource.videoDeviceGuid,
          audioDeviceGuid: v.cameraSource.audioDeviceGuid
        }), l.default.setGoLiveSource(e)
      }
    } else {
      var o, d;
      o = t, d = {
        ...A,
        object: p.AnalyticsObjects.RADIO_ITEM,
        objectType: u
      }, (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("754534").then(n.bind(n, "754534"));
        return t => (0, a.jsx)(e, {
          ...t,
          analyticsSource: d
        })
      }, {
        contextKey: o === p.AppContext.POPOUT ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT
      })
    }
  }, [t, A, v]);
  if (null == e) return null;
  let x = S === E.ApplicationStreamPresets.PRESET_DOCUMENTS ? E.ApplicationStreamFPS.FPS_30 : _,
    R = E.ApplicationStreamFPSButtonsWithSuffixLabel.map(e => {
      let {
        value: t,
        label: n
      } = e, r = (0, o.default)(E.ApplicationStreamPresets.PRESET_CUSTOM, g, t, T, I);
      return (0, a.jsx)(s.MenuRadioItem, {
        group: "stream-settings-fps",
        id: "stream-settings-fps-".concat(t),
        label: n,
        checked: t === _,
        action: () => M(r, g, t, p.AnalyticsObjectTypes.RESOLUTION)
      }, "stream-settings-fps-".concat(t))
    }),
    N = E.ApplicationStreamResolutionButtonsWithSuffixLabel.map(e => {
      let {
        value: t,
        label: n
      } = e, r = (0, o.default)(E.ApplicationStreamPresets.PRESET_CUSTOM, t, x, T, I);
      return (0, a.jsx)(s.MenuRadioItem, {
        group: "stream-settings-resolution",
        id: "stream-settings-resolution-".concat(t),
        label: n,
        checked: t === g,
        action: () => M(r, t, x, p.AnalyticsObjectTypes.RESOLUTION)
      }, "stream-settings-resolution-".concat(t))
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.MenuGroup, {
      label: m.default.Messages.SCREENSHARE_FRAME_RATE,
      children: R
    }), (0, a.jsx)(s.MenuGroup, {
      label: m.default.Messages.STREAM_RESOLUTION,
      children: N
    })]
  })
}