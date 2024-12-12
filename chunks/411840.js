r.d(n, {
    B: function () {
        return i;
    },
    Z: function () {
        return o;
    }
});
var i,
    a = r(818083);
!(function (e) {
    (e.MicPushToEnable = 'mic-push-to-enable'), (e.MicButtonMovedLeft = 'mic-button-moved-left'), (e.GroupedButtonsControlColors = 'grouped-buttons-control-colors'), (e.GroupedButtonsRedMic = 'grouped-buttons-red-mic');
})(i || (i = {}));
let s = (0, a.B)({
    kind: 'user',
    id: '2024-12_voice_icon_states',
    label: 'Voice/Video icon states',
    defaultConfig: {
        mode: 'mic-push-to-enable',
        groupedButtons: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Microphone button moved to left',
            config: {
                mode: 'mic-button-moved-left',
                groupedButtons: !1
            }
        },
        {
            id: 2,
            label: 'Grouped buttons with control colors',
            config: {
                mode: 'grouped-buttons-control-colors',
                groupedButtons: !0
            }
        },
        {
            id: 3,
            label: 'Grouped buttons with only red mic',
            config: {
                mode: 'grouped-buttons-red-mic',
                groupedButtons: !0
            }
        }
    ]
});
function o(e) {
    return s.useExperiment(e);
}
