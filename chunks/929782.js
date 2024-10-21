n.r(t),
    n.d(t, {
        enable: function () {
            return A;
        },
        isNotSupported: function () {
            return S;
        },
        trackToggleSelfDeaf: function () {
            return R;
        },
        trackToggleSelfMute: function () {
            return N;
        }
    });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(570140),
    s = n(710845),
    o = n(592125),
    l = n(131951),
    u = n(944486),
    c = n(556296),
    d = n(451478),
    _ = n(626135),
    E = n(13140),
    f = n(554174),
    h = n(981631),
    p = n(761274),
    I = n(689938);
let m = new s.Z('AudioActionCreators');
function T() {
    (0, i.openModalLazy)(async () => {
        let { default: e } = await n.e('82935').then(n.bind(n, 431583));
        return (t) =>
            (0, r.jsx)(e, {
                source: 'Unsupported Browser',
                ...t
            });
    });
}
function S() {
    return (
        !l.Z.isSupported() &&
        ((0, i.openModal)((e) =>
            (0, r.jsx)(i.ConfirmModal, {
                header: I.Z.Messages.UNSUPPORTED_BROWSER,
                confirmText: I.Z.Messages.DOWNLOAD_APP,
                cancelText: I.Z.Messages.CANCEL,
                onConfirm: T,
                confirmButtonColor: i.Button.Colors.BRAND,
                ...e,
                children: (0, r.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    children: I.Z.Messages.UNSUPPORTED_BROWSER_DETAILS
                })
            })
        ),
        !0)
    );
}
function g(e) {
    _.default.track(h.rMx.PERMISSIONS_ACKED, {
        type: 'audio',
        action: e
    });
}
function A() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return S()
        ? Promise.resolve(!1)
        : (_.default.track(h.rMx.PERMISSIONS_REQUESTED, { type: 'audio' }),
          l.Z.getMediaEngine()
              .enable()
              .then(
                  () => {
                      a.Z.dispatch({
                          type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                          enabled: !0,
                          unmute: e
                      }),
                          g(p.PQ.ACCEPTED);
                  },
                  (e) => {
                      switch (e) {
                          case h.ETv.NO_DEVICES_FOUND:
                              g(p.PQ.NO_DEVICES);
                              break;
                          case h.ETv.PERMISSION_DENIED:
                              g(p.PQ.DENIED);
                              break;
                          case h.ETv.PERMISSION_DISMISSED:
                              g(p.PQ.DISMISSED);
                              break;
                          default:
                              g(p.PQ.ERROR), m.warn('unknown getUserMedia error: '.concat(e));
                      }
                  }
              )
              .then(() => !0));
}
function N(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = c.Z.getKeybindForAction(h.kg4.TOGGLE_MUTE, !1, !0),
        i = u.Z.getVoiceChannelId(),
        a = null != i ? o.Z.getChannel(i) : null;
    _.default.track(h.rMx.INPUT_MUTE_TOGGLED, {
        enabled: !l.Z.isSelfMute(),
        custom_keybind_assigned: null != r && r.id !== c.E.id,
        used_keybind: t,
        app_in_focus: d.Z.isFocused(),
        overlay_activated: null != (0, f.Z)(),
        voice_channel_type: null != a ? a.type : null,
        location: n
    });
}
function R(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = c.Z.getKeybindForAction(h.kg4.TOGGLE_DEAFEN, !1, !0),
        i = u.Z.getVoiceChannelId(),
        a = null != i ? o.Z.getChannel(i) : null;
    _.default.track(h.rMx.SELF_DEAFEN_TOGGLED, {
        enabled: !l.Z.isSelfDeaf(),
        keybind_assigned: null != r ? (0, E.BB)(r.shortcut) : void 0,
        used_keybind: t,
        app_in_focus: d.Z.isFocused(),
        overlay_activated: null != (0, f.Z)(),
        voice_channel_type: null != a ? a.type : null,
        location: n
    });
}
