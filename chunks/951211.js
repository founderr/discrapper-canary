n.d(t, {
    Z: function () {
        return p;
    },
    r: function () {
        return i;
    }
}),
    n(653041);
var i,
    l,
    r = n(481060),
    a = n(620662),
    s = n(933557),
    o = n(377171),
    c = n(699516),
    d = n(594174),
    u = n(981631),
    h = n(388032);
function p(e) {
    let { canAttachFiles: t, canStartThreads: n, useSlate: i, canUseApplicationCommands: l, hasClips: p, channel: m, activities: f, newClipsCount: g, canPostPolls: C, canLaunchActivities: x, appContext: _ } = e,
        v = [];
    return (
        t &&
            (v.push({
                type: 'UPLOAD_A_FILE',
                icon: r.FileUpIcon,
                display: h.intl.string(h.t['d3+iYm'])
            }),
            v.push({
                type: 'UPLOAD_TEXT_AS_FILE',
                icon: r.FileUpIcon,
                display: h.intl.string(h.t['G9s+EB'])
            })),
        p &&
            t &&
            _ !== u.IlC.POPOUT &&
            v.push({
                type: 'CLIPS',
                icon: r.ClipsIcon,
                display: h.intl.string(h.t.o034cn),
                badgeVal: g,
                badgeColor: o.Z.BG_BRAND
            }),
        n &&
            v.push({
                type: 'CREATE_THREAD',
                icon: r.ThreadPlusIcon,
                display: h.intl.string(h.t.rBIGBA)
            }),
        C &&
            v.push({
                type: 'POLL',
                icon: r.PollsIcon,
                display: h.intl.string(h.t.Flr51t)
            }),
        i &&
            l &&
            v.push({
                type: 'SLASH_COMMAND',
                icon: r.AppsIcon,
                display: h.intl.string(h.t.Bbvp6O)
            }),
        x &&
            v.push({
                type: 'ACTIVITY',
                icon: r.ActivitiesIcon,
                display: h.intl.string(h.t['16Lfra'])
            }),
        f.forEach((e) => {
            if (!(0, a.Z)(e, u.xjy.EMBEDDED))
                e.type === u.IIU.PLAYING &&
                    (0, a.Z)(e, u.xjy.JOIN) &&
                    v.push({
                        type: 'INVITE_TO_GAME',
                        icon: r.DpadIcon,
                        display: h.intl.formatToPlainString(h.t['KHLo+P'], {
                            channel: (0, s.F6)(m, d.default, c.Z, !0),
                            game: null != e ? e.name : ''
                        }),
                        activity: e
                    }),
                    e.type === u.IIU.LISTENING &&
                        (0, a.Z)(e, u.xjy.SYNC) &&
                        v.push({
                            type: 'INVITE_TO_LISTEN',
                            icon: r.UserPlayIcon,
                            display: h.intl.formatToPlainString(h.t.I479p6, {
                                channel: (0, s.F6)(m, d.default, c.Z, !0),
                                name: null != e ? e.name : ''
                            }),
                            activity: e
                        }),
                    e.type === u.IIU.WATCHING &&
                        (0, a.Z)(e, u.xjy.SYNC) &&
                        v.push({
                            type: 'INVITE_TO_WATCH',
                            icon: r.EyeIcon,
                            display: h.intl.formatToPlainString(h.t['EvCP/v'], {
                                channel: (0, s.F6)(m, d.default, c.Z, !0),
                                name: null != e ? e.name : ''
                            }),
                            activity: e
                        });
        }),
        v
    );
}
((l = i || (i = {})).UPLOAD_A_FILE = 'UPLOAD_A_FILE'), (l.UPLOAD_TEXT_AS_FILE = 'UPLOAD_TEXT_AS_FILE'), (l.INVITE_TO_PLAY_GAME = 'INVITE_TO_GAME'), (l.INVITE_TO_LISTEN = 'INVITE_TO_LISTEN'), (l.INVITE_TO_WATCH = 'INVITE_TO_WATCH'), (l.CREATE_THREAD = 'CREATE_THREAD'), (l.SLASH_COMMAND = 'SLASH_COMMAND'), (l.CLIPS = 'CLIPS'), (l.POLL = 'POLL'), (l.ACTIVITY = 'ACTIVITY');
