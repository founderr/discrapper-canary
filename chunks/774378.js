n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(653041);
var o,
    i,
    l = n(388032);
function a(e) {
    let t = [
        {
            label: l.intl.string(l.t['UqD/9f']),
            code: 2,
            value: "I couldn't hear audio at all"
        },
        {
            label: l.intl.string(l.t.DVEGuL),
            code: 3,
            value: 'Nobody could hear me'
        },
        {
            label: l.intl.string(l.t['2nWcBw']),
            code: 4,
            value: 'Audio had echos or feedback'
        },
        {
            label: l.intl.string(l.t.K3E4Dw),
            code: 5,
            value: 'Audio was robotic or distorted'
        },
        {
            label: l.intl.string(l.t.Dpm2U1),
            code: 6,
            value: 'Audio cut in and out'
        },
        {
            label: l.intl.string(l.t.kuGsi4),
            code: 7,
            value: 'Volume was too low or high'
        },
        {
            label: l.intl.string(l.t.PkiFCQ),
            code: 8,
            value: 'Background noise was too loud'
        }
    ];
    return (
        e &&
            t.push({
                label: l.intl.string(l.t.hvIDwc),
                code: 9,
                value: 'Issues with speakerphone'
            }),
        t.push(
            {
                label: l.intl.string(l.t['+gUm1t']),
                code: 10,
                value: 'Issues with headset/bluetooth'
            },
            {
                label: l.intl.string(l.t['emlT9/']),
                code: 1,
                value: 'Other'
            }
        ),
        t
    );
}
((i = o || (o = {})).COULD_NOT_HEAR_AUDIO = "I couldn't hear audio at all"), (i.NOBODY_COULD_HEAR_ME = 'Nobody could hear me'), (i.AUDIO_ECHOS = 'Audio had echos or feedback'), (i.AUDIO_ROBOTIC = 'Audio was robotic or distorted'), (i.AUDIO_CUT = 'Audio cut in and out'), (i.BAD_VOLUME = 'Volume was too low or high'), (i.BACKGROUND_NOISE = 'Background noise was too loud'), (i.SPEAKERPHONE = 'Issues with speakerphone'), (i.HEADSET = 'Issues with headset/bluetooth'), (i.OTHER = 'Other');
