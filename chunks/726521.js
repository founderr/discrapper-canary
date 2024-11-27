n.d(t, {
    I6: function () {
        return v;
    },
    J7: function () {
        return b;
    },
    JM: function () {
        return I;
    },
    Jw: function () {
        return _;
    },
    WL: function () {
        return m;
    },
    ak: function () {
        return f;
    },
    d$: function () {
        return h;
    },
    eE: function () {
        return T;
    },
    ic: function () {
        return p;
    },
    pX: function () {
        return E;
    },
    sq: function () {
        return d;
    },
    uu: function () {
        return y;
    },
    wk: function () {
        return S;
    },
    zd: function () {
        return g;
    }
});
var r = n(367907),
    i = n(427679),
    a = n(23750),
    s = n(598077),
    o = n(82554),
    l = n(185625),
    u = n(443599),
    c = n(981631);
function d(e, t) {
    A(o.b.GUILD_DIRECTORY_ENTRY, {
        channel_id: e.channelId,
        guild_id: e.guildId
    }),
        (0, u.m)(
            {
                name: o.b.GUILD_DIRECTORY_ENTRY,
                record: e
            },
            {},
            t
        );
}
function f(e, t, n) {
    A(o.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, u.m)(
            {
                name: o.b.MESSAGE,
                record: e
            },
            {},
            n
        );
}
function _(e, t, n) {
    A(o.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, u.m)(
            {
                name: o.b.MESSAGE,
                record: e
            },
            { variant: 'staff' },
            n
        );
}
function p(e, t) {
    let n = i.Z.getStageInstanceByChannel(e.id);
    if (null != n)
        A(o.b.STAGE_CHANNEL, {
            stage_instance_id: n.id,
            channel_id: n.channel_id,
            guild_id: n.guild_id
        }),
            (0, u.m)(
                {
                    name: o.b.STAGE_CHANNEL,
                    record: n
                },
                {},
                t
            );
}
function h(e, t) {
    var n;
    A(o.b.GUILD_SCHEDULED_EVENT, {
        guild_scheduled_event_id: e.id,
        guild_id: e.guild_id,
        channel_id: null !== (n = e.channel_id) && void 0 !== n ? n : void 0
    }),
        (0, u.m)(
            {
                name: o.b.GUILD_SCHEDULED_EVENT,
                record: e
            },
            {},
            t
        );
}
function m(e, t) {
    A(o.b.FIRST_DM, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, u.m)(
            {
                name: o.b.FIRST_DM,
                record: e
            },
            {},
            t,
            void 0,
            !1
        );
}
async function g(e, t) {
    try {
        await (0, l.ox)(
            {
                name: o.b.FIRST_DM,
                record: e
            },
            { variant: '_first_dm_ham_v1' }
        ),
            null == t || t();
    } catch {}
}
function E(e, t, n) {
    A(o.b.USER, { reported_user_id: e.id }),
        (0, u.m)(
            {
                name: o.b.USER,
                record: e,
                contextualGuildId: t
            },
            {},
            n,
            void 0
        );
}
function v(e, t, n) {
    A(o.b.USER, { reported_user_id: e.id }),
        (0, u.m)(
            {
                name: o.b.USER,
                record: e,
                contextualGuildId: t
            },
            { variant: 'staff' },
            n,
            void 0,
            !1
        );
}
function I(e, t) {
    let n = new s.Z({});
    A(o.BM.USER, { reported_user_id: n.id }),
        (0, u.m)(
            {
                name: o.BM.USER,
                record: n
            },
            {},
            t,
            void 0,
            !1,
            !1,
            e
        );
}
function T(e, t) {
    let n = new a.ZP({});
    A(o.BM.MESSAGE, {
        message_id: void 0,
        channel_id: void 0
    }),
        (0, u.m)(
            {
                name: o.BM.MESSAGE,
                record: n
            },
            {},
            t,
            void 0,
            !1,
            !1,
            e
        );
}
async function b(e, t, n) {
    try {
        await (0, l.ox)(
            {
                name: o.b.MESSAGE,
                record: e
            },
            { variant: 'safety_alerts_headless_v1' }
        ),
            null == t || t();
    } catch {
        null == n || n();
    }
}
function S(e, t) {
    A(o.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, u.m)(
            {
                name: o.b.MESSAGE,
                record: e
            },
            { variant: 'safety_alerts_v1' },
            t
        );
}
function y(e) {
    let { application: t, entrypoint: n, contextualGuildId: i, contextualChannelId: a, onSubmit: s } = e;
    r.ZP.trackWithMetadata(c.rMx.REPORT_APPLICATION_CLICKED, {
        application_id: t.id,
        location: n
    }),
        A(o.b.APPLICATION, {
            application_id: t.id,
            guild_id: i,
            channel_id: a
        }),
        (0, u.m)(
            {
                name: o.b.APPLICATION,
                record: t,
                contextualGuildId: i,
                contextualChannelId: a,
                entrypoint: n
            },
            {},
            s
        );
}
function A(e, t) {
    r.ZP.trackWithMetadata(c.rMx.IAR_MODAL_OPEN, {
        report_type: e,
        ...t
    });
}
