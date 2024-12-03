n.d(t, {
    B: function () {
        return i;
    },
    Z: function () {
        return o;
    }
});
var r,
    i,
    a = n(818083);
((r = i || (i = {})).MicPushToEnable = 'mic-push-to-enable'), (r.MicButtonMovedLeft = 'mic-button-moved-left'), (r.GroupedButtonsControlColors = 'grouped-buttons-control-colors'), (r.GroupedButtonsRedMic = 'grouped-buttons-red-mic');
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
