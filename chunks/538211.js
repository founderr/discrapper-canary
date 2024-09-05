n.d(t, {
    Z: function () {
        return l;
    }
});
var a = n(70722),
    s = n(689938);
function l(e, t) {
    return [
        {
            value: a.kr.BLACK_SCREEN,
            label: t ? s.Z.Messages.STREAM_REPORT_ENDED_BLACK : s.Z.Messages.STREAM_REPORT_BLACK
        },
        {
            value: a.kr.BLURRY,
            label: t ? s.Z.Messages.STREAM_REPORT_ENDED_BLURRY : s.Z.Messages.STREAM_REPORT_BLURRY
        },
        {
            value: a.kr.LAGGING,
            label: t ? s.Z.Messages.STREAM_REPORT_ENDED_LAGGING : s.Z.Messages.STREAM_REPORT_LAGGING
        },
        {
            value: a.kr.OUT_OF_SYNC,
            label: t ? s.Z.Messages.STREAM_REPORT_ENDED_OUT_OF_SYNC : s.Z.Messages.STREAM_REPORT_OUT_OF_SYNC
        },
        {
            value: a.kr.AUDIO_MISSING,
            label: t ? s.Z.Messages.STREAM_REPORT_ENDED_AUDIO_MISSING : s.Z.Messages.STREAM_REPORT_AUDIO_MISSING
        },
        {
            value: a.kr.AUDIO_POOR,
            label: t ? s.Z.Messages.STREAM_REPORT_ENDED_AUDIO_POOR : s.Z.Messages.STREAM_REPORT_AUDIO_POOR
        },
        {
            value: a.kr.STREAM_STOPPED,
            label: s.Z.Messages.STREAM_REPORT_ENDED_STREAM_STOPPED_UNEXPECTEDLY
        },
        {
            value: a.kr.OTHER,
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_OTHER
        }
    ];
}
