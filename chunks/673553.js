t.d(n, {
    U: function () {
        return S;
    }
}),
    t(47120);
var l = t(610521),
    i = t(607070),
    o = t(819640),
    a = t(131951),
    u = t(19780),
    r = t(585483),
    d = t(5967),
    c = t(13140),
    s = t(981631);
let E = new Set(['PageDown', 'PageUp', 'Home', 'End', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']),
    C = new Set(['Alt', 'AltGraph', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'OS', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock']),
    _ = new Set(['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'Accept', 'ContextMenu', 'Find', 'ZoomIn', 'ZoomOut']),
    h = new Set(['ChannelDown', 'ChannelUp', 'MediaFastForward', 'MediaPause', 'MediaPlay', 'MediaPlayPause', 'MediaRecord', 'MediaRewind', 'MediaStop', 'MediaTrackNext', 'MediaTrackPrevious', 'AudioBalanceLeft', 'AudioBalanceRight', 'AudioBassDown', 'AudioBassBoostDown', 'AudioBassBoostToggle', 'AudioBassBoostUp', 'AudioBassUp', 'AudioFaderFront', 'AudioFaderReader', 'AudioSurroundModeNext', 'AudioTrebleDown', 'AudioTreblUp', 'AudioVolumeDown', 'AudioVolumeMute', 'AudioVolumeUp', 'VolumeUp', 'VolumeDown', 'VolumeMute']),
    S = {
        binds: ['any-character'],
        keydown(e, n) {
            var t;
            let S = null === (t = (0, d.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
            if ((0, d.VG)(S) || l.fC.isActive() || C.has(n) || _.has(n) || h.has(n)) return !1;
            let I = null != S && 'BODY' === S.tagName;
            return (
                !((i.Z.keyboardModeEnabled && !I && !/^[a-zA-Z0-9]$/.test(n)) || r.S.hasSubscribers(s.CkL.MODAL_CLOSE) || o.Z.hasLayers()) &&
                ('Tab' === n && r.S.hasSubscribers(s.CkL.TEXTAREA_FOCUS) && null != document.querySelector('[data-can-focus="true"]')
                    ? (e.preventDefault(), r.S.dispatch(s.CkL.TEXTAREA_FOCUS), !1)
                    : !(
                          u.Z.isConnected() &&
                          a.Z.getMode() === s.pM4.PUSH_TO_TALK &&
                          !a.Z.isSelfMute() &&
                          Object.values(a.Z.getShortcuts())
                              .map(c.d2)
                              .some((n) => n.map((e) => e.keyCode).includes(e.keyCode))
                      ) && void (!e.metaKey && !e.ctrlKey && !E.has(n) && r.S.dispatchToLastSubscribed(s.CkL.TEXTAREA_FOCUS)))
            );
        }
    };
