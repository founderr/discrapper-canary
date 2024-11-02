n.d(t, {
    Z: function () {
        return m;
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
    u = n(594174),
    d = n(981631),
    h = n(388032);
function m(e) {
    let { canAttachFiles: t, canStartThreads: n, useSlate: i, canUseApplicationCommands: l, hasClips: m, channel: p, activities: f, newClipsCount: g, canPostPolls: C, canLaunchActivities: x, appContext: v } = e,
        _ = [];
    return (
        t &&
            (_.push({
                type: 'UPLOAD_A_FILE',
                icon: r.FileUpIcon,
                display: h.intl.string(h.t['d3+iYm'])
            }),
            _.push({
                type: 'UPLOAD_TEXT_AS_FILE',
                icon: r.FileUpIcon,
                display: h.intl.string(h.t['G9s+EB'])
            })),
        m &&
            t &&
            v !== d.IlC.POPOUT &&
            _.push({
                type: 'CLIPS',
                icon: r.ClipsIcon,
                display: h.intl.string(h.t.o034cn),
                badgeVal: g,
                badgeColor: o.Z.BG_BRAND
            }),
        n &&
            _.push({
                type: 'CREATE_THREAD',
                icon: r.ThreadPlusIcon,
                display: h.intl.string(h.t.rBIGBA)
            }),
        C &&
            _.push({
                type: 'POLL',
                icon: r.PollsIcon,
                display: h.intl.string(h.t.Flr51t)
            }),
        i &&
            l &&
            _.push({
                type: 'SLASH_COMMAND',
                icon: r.AppsIcon,
                display: h.intl.string(h.t.Bbvp6O)
            }),
        x &&
            _.push({
                type: 'ACTIVITY',
                icon: r.ActivitiesIcon,
                display: h.intl.string(h.t['16Lfra'])
            }),
        f.forEach((e) => {
            if (!(0, a.Z)(e, d.xjy.EMBEDDED))
                e.type === d.IIU.PLAYING &&
                    (0, a.Z)(e, d.xjy.JOIN) &&
                    _.push({
                        type: 'INVITE_TO_GAME',
                        icon: r.DpadIcon,
                        display: h.intl.formatToPlainString(h.t['KHLo+P'], {
                            channel: (0, s.F6)(p, u.default, c.Z, !0),
                            game: null != e ? e.name : ''
                        }),
                        activity: e
                    }),
                    e.type === d.IIU.LISTENING &&
                        (0, a.Z)(e, d.xjy.SYNC) &&
                        _.push({
                            type: 'INVITE_TO_LISTEN',
                            icon: r.UserPlayIcon,
                            display: h.intl.formatToPlainString(h.t.I479p6, {
                                channel: (0, s.F6)(p, u.default, c.Z, !0),
                                name: null != e ? e.name : ''
                            }),
                            activity: e
                        }),
                    e.type === d.IIU.WATCHING &&
                        (0, a.Z)(e, d.xjy.SYNC) &&
                        _.push({
                            type: 'INVITE_TO_WATCH',
                            icon: r.EyeIcon,
                            display: h.intl.formatToPlainString(h.t['EvCP/v'], {
                                channel: (0, s.F6)(p, u.default, c.Z, !0),
                                name: null != e ? e.name : ''
                            }),
                            activity: e
                        });
        }),
        _
    );
}
((l = i || (i = {})).UPLOAD_A_FILE = 'UPLOAD_A_FILE'), (l.UPLOAD_TEXT_AS_FILE = 'UPLOAD_TEXT_AS_FILE'), (l.INVITE_TO_PLAY_GAME = 'INVITE_TO_GAME'), (l.INVITE_TO_LISTEN = 'INVITE_TO_LISTEN'), (l.INVITE_TO_WATCH = 'INVITE_TO_WATCH'), (l.CREATE_THREAD = 'CREATE_THREAD'), (l.SLASH_COMMAND = 'SLASH_COMMAND'), (l.CLIPS = 'CLIPS'), (l.POLL = 'POLL'), (l.ACTIVITY = 'ACTIVITY');
