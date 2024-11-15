n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(846027),
    a = n(921801),
    o = n(131951),
    c = n(726985),
    d = n(388032),
    u = n(971436);
function m() {
    let {
        videoHook: e,
        experimentalSoundshare: t,
        useSystemScreensharePicker: n
    } = (0, s.cj)([o.Z], () => ({
        videoHook: o.Z.getVideoHook(),
        experimentalSoundshare: o.Z.getExperimentalSoundshare(),
        useSystemScreensharePicker: o.Z.getUseSystemScreensharePicker()
    }));
    return (0, i.jsx)(a.F, {
        setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
        children: (0, i.jsxs)(r.FormSection, {
            className: u.marginBottom20,
            title: d.intl.string(d.t.NMCIf3),
            children: [
                (0, i.jsx)(a.F, {
                    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
                    children: (0, i.jsx)(r.FormSwitch, {
                        value: e,
                        onChange: (e) => l.Z.setVideoHook(e),
                        note: d.intl.string(d.t['Fj/xn5']),
                        children: d.intl.string(d.t.GmWk2N)
                    })
                }),
                (0, i.jsx)(a.F, {
                    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
                    children: (0, i.jsx)(r.FormSwitch, {
                        value: t,
                        onChange: (e) => l.Z.setExperimentalSoundshare(e),
                        children: d.intl.string(d.t['4I0qzc'])
                    })
                }),
                (0, i.jsx)(a.F, {
                    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
                    children: (0, i.jsx)(r.FormSwitch, {
                        value: n,
                        onChange: (e) => l.Z.setUseSystemScreensharePicker(e),
                        children: d.intl.string(d.t.ie1mgY)
                    })
                })
            ]
        })
    });
}
