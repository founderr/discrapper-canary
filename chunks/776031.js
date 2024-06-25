"use strict";
n.d(t, {
  Z: function() {
    return O
  }
});
var i = n(735250),
  r = n(470079),
  s = n(848246),
  o = n(442837),
  a = n(481060),
  l = n(846027),
  u = n(2052),
  _ = n(451467),
  c = n(386542),
  d = n(933843),
  E = n(485731),
  I = n(361291),
  T = n(430824),
  h = n(131951),
  f = n(594174),
  S = n(981631),
  A = n(37113),
  N = n(65154),
  m = n(689938);

function O(e, t) {
  let {
    preset: O,
    resolution: p,
    fps: R
  } = (0, o.cj)([I.Z], () => I.Z.getState()), g = (0, o.e7)([h.Z], () => h.Z.getGoLiveSource()), C = (0, o.e7)([f.default], () => f.default.getCurrentUser()), v = (0, o.e7)([T.Z], () => {
    var t;
    return null === (t = T.Z.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
  }), {
    location: L
  } = (0, u.O)(), {
    available: D,
    activated: M
  } = (0, c.k)(s.q.STREAM_HIGH_QUALITY), P = r.useCallback((e, r, s, o) => {
    if (e) {
      if (null != g) {
        let e = {
          qualityOptions: {
            preset: A.tI.PRESET_CUSTOM,
            resolution: r,
            frameRate: s
          },
          context: N.Yn.STREAM
        };
        null != g.desktopSource ? e.desktopSettings = {
          sourceId: g.desktopSource.id,
          sound: !0
        } : null != g.cameraSource && (e.cameraSettings = {
          videoDeviceGuid: g.cameraSource.videoDeviceGuid,
          audioDeviceGuid: g.cameraSource.audioDeviceGuid
        }), D && (0, E.J1)(!(0, d.mc)(r, s)), l.Z.setGoLiveSource(e)
      }
    } else {
      var u, _;
      u = t, _ = {
        ...L,
        object: S.qAy.RADIO_ITEM,
        objectType: o
      }, (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e("28479").then(n.bind(n, 78865));
        return t => (0, i.jsx)(e, {
          ...t,
          analyticsSource: _
        })
      }, {
        contextKey: u === S.IlC.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
      })
    }
  }, [t, L, g, D]);
  if (null == e) return null;
  let y = O === A.tI.PRESET_DOCUMENTS ? A.ws.FPS_30 : R,
    U = A.af.map(e => {
      let {
        value: t,
        label: n
      } = e, r = (0, _.Z)(A.tI.PRESET_CUSTOM, p, t, C, v);
      return D && !M && (r = !1), (0, i.jsx)(a.MenuRadioItem, {
        group: "stream-settings-fps",
        id: "stream-settings-fps-".concat(t),
        label: n,
        checked: t === R,
        action: () => P(r, p, t, S.Qqv.RESOLUTION)
      }, "stream-settings-fps-".concat(t))
    }),
    b = A.km.map(e => {
      let {
        value: t,
        label: n
      } = e, r = (0, _.Z)(A.tI.PRESET_CUSTOM, t, y, C, v);
      return D && !M && (r = !1), (0, i.jsx)(a.MenuRadioItem, {
        group: "stream-settings-resolution",
        id: "stream-settings-resolution-".concat(t),
        label: n,
        checked: t === p,
        action: () => P(r, t, y, S.Qqv.RESOLUTION)
      }, "stream-settings-resolution-".concat(t))
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.MenuGroup, {
      label: m.Z.Messages.SCREENSHARE_FRAME_RATE,
      children: U
    }), (0, i.jsx)(a.MenuGroup, {
      label: m.Z.Messages.STREAM_RESOLUTION,
      children: b
    })]
  })
}