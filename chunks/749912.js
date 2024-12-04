t(47120);
var i,
    a,
    n = t(200651);
t(192379);
var l = t(754700),
    r = t(481060),
    o = t(70956),
    d = t(416457);
((a = i || (i = {}))[(a.PLAY_DESKTOP = 0)] = 'PLAY_DESKTOP'), (a[(a.STREAM_DESKTOP = 1)] = 'STREAM_DESKTOP'), (a[(a.WATCH_VIDEO = 2)] = 'WATCH_VIDEO'), (a[(a.PLAY_CONSOLE = 3)] = 'PLAY_CONSOLE'), (a[(a.PLAY_DESKTOP_CONSOLE = 4)] = 'PLAY_DESKTOP_CONSOLE'), (a[(a.PLAY_ACTIVITY = 5)] = 'PLAY_ACTIVITY');
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
    let { onSelect: s, taskDuration: t = 10, taskConfig: i } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(r.FormItem, {
                children: [
                    (0, n.jsx)(r.FormTitle, {
                        tag: r.FormTitleTags.H5,
                        children: 'Task Type(s)'
                    }),
                    (0, n.jsx)(r.FormText, {
                        children: (0, n.jsx)(r.Select, {
                            className: d.taskPresetSelect,
                            placeholder: 'Select Task Preset',
                            options: c,
                            renderOptionValue: (e) => e.map((e) => (0, n.jsx)('div', { children: e.label }, e.value)),
                            renderOptionLabel: (e) => (0, n.jsx)('div', { children: e.label }),
                            isSelected: (e) =>
                                e ===
                                (function (e) {
                                    let s = l.X.PLAY_ON_PLAYSTATION in e || l.X.PLAY_ON_XBOX in e,
                                        t = l.X.PLAY_ON_DESKTOP in e || l.X.PLAY_ON_DESKTOP_V2 in e,
                                        i = l.X.STREAM_ON_DESKTOP in e,
                                        a = l.X.WATCH_VIDEO in e,
                                        n = l.X.PLAY_ACTIVITY in e;
                                    return s && t ? 4 : s ? 3 : t ? 0 : i ? 1 : a ? 2 : n ? 5 : void 0;
                                })(i.tasks),
                            select: (e) => {
                                s({
                                    ...i,
                                    tasks: (function (e, s) {
                                        let t = [];
                                        switch (e) {
                                            case 1:
                                                t = [l.X.STREAM_ON_DESKTOP];
                                                break;
                                            case 0:
                                                t = [l.X.PLAY_ON_DESKTOP];
                                                break;
                                            case 3:
                                                t = [l.X.PLAY_ON_PLAYSTATION, l.X.PLAY_ON_XBOX];
                                                break;
                                            case 4:
                                                t = [l.X.PLAY_ON_DESKTOP, l.X.PLAY_ON_PLAYSTATION, l.X.PLAY_ON_XBOX];
                                                break;
                                            case 2:
                                                t = [l.X.WATCH_VIDEO];
                                                break;
                                            case 5:
                                                t = [l.X.PLAY_ACTIVITY];
                                        }
                                        let i = {};
                                        for (let e of t)
                                            i[e] = {
                                                eventName: e,
                                                target: s,
                                                externalIds: []
                                            };
                                        return i;
                                    })(e, t)
                                });
                            },
                            serialize: String
                        })
                    })
                ]
            }),
            (0, n.jsxs)(r.FormItem, {
                children: [
                    (0, n.jsx)(r.FormTitle, {
                        tag: r.FormTitleTags.H5,
                        children: 'Task Duration'
                    }),
                    (0, n.jsx)(r.FormText, {
                        children: (0, n.jsx)(r.TextInput, {
                            value: String(t / o.Z.Seconds.MINUTE),
                            onChange: function (e) {
                                let t = Number(e);
                                if (isNaN(t)) return;
                                t *= o.Z.Seconds.MINUTE;
                                let a = { ...i.tasks };
                                for (let [e, s] of Object.entries(a))
                                    a[e] = {
                                        ...s,
                                        target: t
                                    };
                                s({
                                    ...i,
                                    tasks: a
                                });
                            }
                        })
                    })
                ]
            })
        ]
    });
};
