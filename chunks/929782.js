r.r(n),
    r.d(n, {
        enable: function () {
            return y;
        },
        isNotSupported: function () {
            return T;
        },
        trackToggleSelfDeaf: function () {
            return A;
        },
        trackToggleSelfMute: function () {
            return S;
        }
    });
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(570140),
    o = r(710845),
    l = r(592125),
    u = r(131951),
    c = r(944486),
    d = r(556296),
    f = r(451478),
    _ = r(626135),
    h = r(13140),
    p = r(554174),
    m = r(981631),
    g = r(761274),
    E = r(388032);
let v = new o.Z('AudioActionCreators');
function I() {
    (0, a.openModalLazy)(async () => {
        let { default: e } = await r.e('82935').then(r.bind(r, 431583));
        return (n) =>
            (0, i.jsx)(e, {
                source: 'Unsupported Browser',
                ...n
            });
    });
}
function T() {
    return (
        !u.Z.isSupported() &&
        ((0, a.openModal)((e) =>
            (0, i.jsx)(a.ConfirmModal, {
                header: E.intl.string(E.t.ilMTy8),
                confirmText: E.intl.string(E.t.BK8LKy),
                cancelText: E.intl.string(E.t['ETE/oK']),
                onConfirm: I,
                confirmButtonColor: a.Button.Colors.BRAND,
                ...e,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children: E.intl.string(E.t.h66vlJ)
                })
            })
        ),
        !0)
    );
}
function b(e) {
    _.default.track(m.rMx.PERMISSIONS_ACKED, {
        type: 'audio',
        action: e
    });
}
function y() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return T()
        ? Promise.resolve(!1)
        : (_.default.track(m.rMx.PERMISSIONS_REQUESTED, { type: 'audio' }),
          u.Z.getMediaEngine()
              .enable()
              .then(
                  () => {
                      s.Z.dispatch({
                          type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                          enabled: !0,
                          unmute: e
                      }),
                          b(g.PQ.ACCEPTED);
                  },
                  (e) => {
                      switch (e) {
                          case m.ETv.NO_DEVICES_FOUND:
                              b(g.PQ.NO_DEVICES);
                              break;
                          case m.ETv.PERMISSION_DENIED:
                              b(g.PQ.DENIED);
                              break;
                          case m.ETv.PERMISSION_DISMISSED:
                              b(g.PQ.DISMISSED);
                              break;
                          default:
                              b(g.PQ.ERROR), v.warn('unknown getUserMedia error: '.concat(e));
                      }
                  }
              )
              .then(() => !0));
}
function S(e) {
    let { usedKeybind: n = !1, location: r } = e,
        i = d.Z.getKeybindForAction(m.kg4.TOGGLE_MUTE, !1, !0),
        a = c.Z.getVoiceChannelId(),
        s = null != a ? l.Z.getChannel(a) : null;
    _.default.track(m.rMx.INPUT_MUTE_TOGGLED, {
        enabled: !u.Z.isSelfMute(),
        custom_keybind_assigned: null != i && i.id !== d.E.id,
        used_keybind: n,
        app_in_focus: f.Z.isFocused(),
        overlay_activated: null != (0, p.Z)(),
        voice_channel_type: null != s ? s.type : null,
        location: r
    });
}
function A(e) {
    let { usedKeybind: n = !1, location: r } = e,
        i = d.Z.getKeybindForAction(m.kg4.TOGGLE_DEAFEN, !1, !0),
        a = c.Z.getVoiceChannelId(),
        s = null != a ? l.Z.getChannel(a) : null;
    _.default.track(m.rMx.SELF_DEAFEN_TOGGLED, {
        enabled: !u.Z.isSelfDeaf(),
        keybind_assigned: null != i ? (0, h.BB)(i.shortcut) : void 0,
        used_keybind: n,
        app_in_focus: f.Z.isFocused(),
        overlay_activated: null != (0, p.Z)(),
        voice_channel_type: null != s ? s.type : null,
        location: r
    });
}
