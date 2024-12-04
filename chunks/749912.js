t(47120);
var a,
    i,
    n = t(200651);
t(192379);
var r = t(754700),
    l = t(481060),
    o = t(70956),
    d = t(416457);
((i = a || (a = {}))[(i.PLAY_DESKTOP = 0)] = 'PLAY_DESKTOP'), (i[(i.STREAM_DESKTOP = 1)] = 'STREAM_DESKTOP'), (i[(i.WATCH_VIDEO = 2)] = 'WATCH_VIDEO'), (i[(i.PLAY_CONSOLE = 3)] = 'PLAY_CONSOLE'), (i[(i.PLAY_DESKTOP_CONSOLE = 4)] = 'PLAY_DESKTOP_CONSOLE'), (i[(i.PLAY_ACTIVITY = 5)] = 'PLAY_ACTIVITY');
let c = [
    {
        value: 1,
        label: 'Stream Desktop'
    },
    {
        value: 0,
        label: 'Play Desktop'
    },
    {
        value: 3,
        label: 'Play Console'
    },
    {
        value: 4,
        label: 'Play Desktop & Console'
    },
    {
        value: 2,
        label: 'Watch Video'
    },
    {
        value: 5,
        label: 'Play Activity'
    }
];
s.Z = function (e) {
    let { onSelect: s, taskDuration: t = 10, taskConfig: a } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.FormItem, {
                children: [
                    (0, n.jsx)(l.FormTitle, {
                        tag: l.FormTitleTags.H5,
                        children: 'Task Type(s)'
                    }),
                    (0, n.jsx)(l.FormText, {
                        children: (0, n.jsx)(l.Select, {
                            className: d.taskPresetSelect,
                            placeholder: 'Select Task Preset',
                            options: c,
                            renderOptionValue: (e) => e.map((e) => (0, n.jsx)('div', { children: e.label }, e.value)),
                            renderOptionLabel: (e) => (0, n.jsx)('div', { children: e.label }),
                            isSelected: (e) =>
                                e ===
                                (function (e) {
                                    let s = r.X.PLAY_ON_PLAYSTATION in e || r.X.PLAY_ON_XBOX in e,
                                        t = r.X.PLAY_ON_DESKTOP in e || r.X.PLAY_ON_DESKTOP_V2 in e,
                                        a = r.X.STREAM_ON_DESKTOP in e,
                                        i = r.X.WATCH_VIDEO in e,
                                        n = r.X.PLAY_ACTIVITY in e;
                                    return s && t ? 4 : s ? 3 : t ? 0 : a ? 1 : i ? 2 : n ? 5 : void 0;
                                })(a.tasks),
                            select: (e) => {
                                s({
                                    ...a,
                                    tasks: (function (e, s) {
                                        let t = [];
                                        switch (e) {
                                            case 1:
                                                t = [r.X.STREAM_ON_DESKTOP];
                                                break;
                                            case 0:
                                                t = [r.X.PLAY_ON_DESKTOP];
                                                break;
                                            case 3:
                                                t = [r.X.PLAY_ON_PLAYSTATION, r.X.PLAY_ON_XBOX];
                                                break;
                                            case 4:
                                                t = [r.X.PLAY_ON_DESKTOP, r.X.PLAY_ON_PLAYSTATION, r.X.PLAY_ON_XBOX];
                                                break;
                                            case 2:
                                                t = [r.X.WATCH_VIDEO];
                                                break;
                                            case 5:
                                                t = [r.X.PLAY_ACTIVITY];
                                        }
                                        let a = {};
                                        for (let e of t)
                                            a[e] = {
                                                eventName: e,
                                                target: s,
                                                externalIds: []
                                            };
                                        return a;
                                    })(e, t)
                                });
                            },
                            serialize: String
                        })
                    })
                ]
            }),
            (0, n.jsxs)(l.FormItem, {
                children: [
                    (0, n.jsx)(l.FormTitle, {
                        tag: l.FormTitleTags.H5,
                        children: 'Task Duration'
                    }),
                    (0, n.jsx)(l.FormText, {
                        children: (0, n.jsx)(l.TextInput, {
                            value: String(t / o.Z.Seconds.MINUTE),
                            onChange: function (e) {
                                let t = Number(e);
                                if (isNaN(t)) return;
                                t *= o.Z.Seconds.MINUTE;
                                let i = { ...a.tasks };
                                for (let [e, s] of Object.entries(i))
                                    i[e] = {
                                        ...s,
                                        target: t
                                    };
                                s({
                                    ...a,
                                    tasks: i
                                });
                            }
                        })
                    })
                ]
            })
        ]
    });
};
