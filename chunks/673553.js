e.d(t, {
    U: function () {
        return S;
    }
}),
    e(47120);
var i = e(610521),
    l = e(607070),
    o = e(819640),
    r = e(131951),
    u = e(19780),
    a = e(585483),
    d = e(5967),
    E = e(13140),
    s = e(981631);
let c = new Set(['PageDown', 'PageUp', 'Home', 'End', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']),
    _ = new Set(['Alt', 'AltGraph', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'OS', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock']),
    C = new Set(['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'Accept', 'ContextMenu', 'Find', 'ZoomIn', 'ZoomOut']),
    A = new Set(['ChannelDown', 'ChannelUp', 'MediaFastForward', 'MediaPause', 'MediaPlay', 'MediaPlayPause', 'MediaRecord', 'MediaRewind', 'MediaStop', 'MediaTrackNext', 'MediaTrackPrevious', 'AudioBalanceLeft', 'AudioBalanceRight', 'AudioBassDown', 'AudioBassBoostDown', 'AudioBassBoostToggle', 'AudioBassBoostUp', 'AudioBassUp', 'AudioFaderFront', 'AudioFaderReader', 'AudioSurroundModeNext', 'AudioTrebleDown', 'AudioTreblUp', 'AudioVolumeDown', 'AudioVolumeMute', 'AudioVolumeUp', 'VolumeUp', 'VolumeDown', 'VolumeMute']),
    S = {
        binds: ['any-character'],
        keydown(n, t) {
            var e;
            let S = null === (e = (0, d.uB)(n)) || void 0 === e ? void 0 : e.activeElement;
            if ((0, d.VG)(S) || i.fC.isActive() || _.has(t) || C.has(t) || A.has(t)) return !1;
            let I = null != S && 'BODY' === S.tagName;
            return (
                !((l.Z.keyboardModeEnabled && !I && !/^[a-zA-Z0-9]$/.test(t)) || a.S.hasSubscribers(s.CkL.MODAL_CLOSE) || o.Z.hasLayers()) &&
                ('Tab' === t && a.S.hasSubscribers(s.CkL.TEXTAREA_FOCUS) && null != document.querySelector('[data-can-focus="true"]')
                    ? (n.preventDefault(), a.S.dispatch(s.CkL.TEXTAREA_FOCUS), !1)
                    : !(
                          u.Z.isConnected() &&
                          r.Z.getMode() === s.pM4.PUSH_TO_TALK &&
                          !r.Z.isSelfMute() &&
                          Object.values(r.Z.getShortcuts())
                              .map(E.d2)
                              .some((t) => t.map((n) => n.keyCode).includes(n.keyCode))
                      ) && void (!n.metaKey && !n.ctrlKey && !c.has(t) && a.S.dispatchToLastSubscribed(s.CkL.TEXTAREA_FOCUS)))
            );
        }
    };
