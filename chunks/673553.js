t.d(n, {
    U: function () {
        return S;
    }
}),
    t(47120);
var i = t(802498),
    o = t(607070),
    l = t(819640),
    E = t(131951),
    r = t(19780),
    a = t(585483),
    u = t(5967),
    d = t(13140),
    s = t(981631);
let _ = new Set(['PageDown', 'PageUp', 'Home', 'End', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']),
    c = new Set(['Alt', 'AltGraph', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'OS', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock']),
    A = new Set(['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'Accept', 'ContextMenu', 'Find', 'ZoomIn', 'ZoomOut']),
    C = new Set(['ChannelDown', 'ChannelUp', 'MediaFastForward', 'MediaPause', 'MediaPlay', 'MediaPlayPause', 'MediaRecord', 'MediaRewind', 'MediaStop', 'MediaTrackNext', 'MediaTrackPrevious', 'AudioBalanceLeft', 'AudioBalanceRight', 'AudioBassDown', 'AudioBassBoostDown', 'AudioBassBoostToggle', 'AudioBassBoostUp', 'AudioBassUp', 'AudioFaderFront', 'AudioFaderReader', 'AudioSurroundModeNext', 'AudioTrebleDown', 'AudioTreblUp', 'AudioVolumeDown', 'AudioVolumeMute', 'AudioVolumeUp', 'VolumeUp', 'VolumeDown', 'VolumeMute']),
    S = {
        binds: ['any-character'],
        keydown(e, n) {
            var t;
            let S = null === (t = (0, u.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
            if ((0, u.VG)(S) || i.fC.isActive() || c.has(n) || A.has(n) || C.has(n)) return !1;
            let I = null != S && 'BODY' === S.tagName;
            return (
                !((o.Z.keyboardModeEnabled && !I && !/^[a-zA-Z0-9]$/.test(n)) || a.S.hasSubscribers(s.CkL.MODAL_CLOSE) || l.Z.hasLayers()) &&
                ('Tab' === n && a.S.hasSubscribers(s.CkL.TEXTAREA_FOCUS) && null != document.querySelector('[data-can-focus="true"]')
                    ? (e.preventDefault(), a.S.dispatch(s.CkL.TEXTAREA_FOCUS), !1)
                    : !(
                          r.Z.isConnected() &&
                          E.Z.getMode() === s.pM4.PUSH_TO_TALK &&
                          !E.Z.isSelfMute() &&
                          Object.values(E.Z.getShortcuts())
                              .map(d.d2)
                              .some((n) => n.map((e) => e.keyCode).includes(e.keyCode))
                      ) && void (!e.metaKey && !e.ctrlKey && !_.has(n) && a.S.dispatchToLastSubscribed(s.CkL.TEXTAREA_FOCUS)))
            );
        }
    };
