e.d(t, {
    U: function () {
        return S;
    }
}),
    e(47120);
var i = e(610521),
    o = e(607070),
    r = e(819640),
    l = e(131951),
    d = e(19780),
    s = e(585483),
    u = e(5967),
    a = e(13140),
    c = e(981631);
let E = new Set(['PageDown', 'PageUp', 'Home', 'End', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']),
    C = new Set(['Alt', 'AltGraph', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'OS', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock']),
    b = new Set(['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'Accept', 'ContextMenu', 'Find', 'ZoomIn', 'ZoomOut']),
    A = new Set(['ChannelDown', 'ChannelUp', 'MediaFastForward', 'MediaPause', 'MediaPlay', 'MediaPlayPause', 'MediaRecord', 'MediaRewind', 'MediaStop', 'MediaTrackNext', 'MediaTrackPrevious', 'AudioBalanceLeft', 'AudioBalanceRight', 'AudioBassDown', 'AudioBassBoostDown', 'AudioBassBoostToggle', 'AudioBassBoostUp', 'AudioBassUp', 'AudioFaderFront', 'AudioFaderReader', 'AudioSurroundModeNext', 'AudioTrebleDown', 'AudioTreblUp', 'AudioVolumeDown', 'AudioVolumeMute', 'AudioVolumeUp', 'VolumeUp', 'VolumeDown', 'VolumeMute']),
    S = {
        binds: ['any-character'],
        keydown(n, t) {
            var e;
            let S = null === (e = (0, u.uB)(n)) || void 0 === e ? void 0 : e.activeElement;
            if ((0, u.VG)(S) || i.fC.isActive() || C.has(t) || b.has(t) || A.has(t)) return !1;
            let p = null != S && 'BODY' === S.tagName;
            return (
                !((o.Z.keyboardModeEnabled && !p && !/^[a-zA-Z0-9]$/.test(t)) || s.S.hasSubscribers(c.CkL.MODAL_CLOSE) || r.Z.hasLayers()) &&
                ('Tab' === t && s.S.hasSubscribers(c.CkL.TEXTAREA_FOCUS) && null != document.querySelector('[data-can-focus="true"]')
                    ? (n.preventDefault(), s.S.dispatch(c.CkL.TEXTAREA_FOCUS), !1)
                    : !(
                          d.Z.isConnected() &&
                          l.Z.getMode() === c.pM4.PUSH_TO_TALK &&
                          !l.Z.isSelfMute() &&
                          Object.values(l.Z.getShortcuts())
                              .map(a.d2)
                              .some((t) => t.map((n) => n.keyCode).includes(n.keyCode))
                      ) && void (!n.metaKey && !n.ctrlKey && !E.has(t) && s.S.dispatchToLastSubscribed(c.CkL.TEXTAREA_FOCUS)))
            );
        }
    };
