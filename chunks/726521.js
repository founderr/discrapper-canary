r.d(n, {
    I6: function () {
        return I;
    },
    J7: function () {
        return y;
    },
    JM: function () {
        return T;
    },
    Jw: function () {
        return h;
    },
    WL: function () {
        return g;
    },
    ak: function () {
        return _;
    },
    d$: function () {
        return m;
    },
    eE: function () {
        return b;
    },
    ic: function () {
        return p;
    },
    pX: function () {
        return v;
    },
    sq: function () {
        return f;
    },
    uu: function () {
        return A;
    },
    wk: function () {
        return S;
    },
    zd: function () {
        return E;
    }
});
var i = r(367907),
    a = r(427679),
    s = r(23750),
    o = r(598077),
    l = r(82554),
    u = r(185625),
    c = r(443599),
    d = r(981631);
function f(e, n) {
    N(l.b.GUILD_DIRECTORY_ENTRY, {
        channel_id: e.channelId,
        guild_id: e.guildId
    }),
        (0, c.m)(
            {
                name: l.b.GUILD_DIRECTORY_ENTRY,
                record: e
            },
            {},
            n
        );
}
function _(e, n, r) {
    N(l.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, c.m)(
            {
                name: l.b.MESSAGE,
                record: e
            },
            {},
            r
        );
}
function h(e, n, r) {
    N(l.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, c.m)(
            {
                name: l.b.MESSAGE,
                record: e
            },
            { variant: 'staff' },
            r
        );
}
function p(e, n) {
    let r = a.Z.getStageInstanceByChannel(e.id);
    if (null != r)
        N(l.b.STAGE_CHANNEL, {
            stage_instance_id: r.id,
            channel_id: r.channel_id,
            guild_id: r.guild_id
        }),
            (0, c.m)(
                {
                    name: l.b.STAGE_CHANNEL,
                    record: r
                },
                {},
                n
            );
}
function m(e, n) {
    var r;
    N(l.b.GUILD_SCHEDULED_EVENT, {
        guild_scheduled_event_id: e.id,
        guild_id: e.guild_id,
        channel_id: null !== (r = e.channel_id) && void 0 !== r ? r : void 0
    }),
        (0, c.m)(
            {
                name: l.b.GUILD_SCHEDULED_EVENT,
                record: e
            },
            {},
            n
        );
}
function g(e, n) {
    N(l.b.FIRST_DM, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, c.m)(
            {
                name: l.b.FIRST_DM,
                record: e
            },
            {},
            n,
            void 0,
            !1
        );
}
async function E(e, n) {
    try {
        await (0, u.ox)(
            {
                name: l.b.FIRST_DM,
                record: e
            },
            { variant: '_first_dm_ham_v1' }
        ),
            null == n || n();
    } catch {}
}
function v(e, n, r) {
    N(l.b.USER, { reported_user_id: e.id }),
        (0, c.m)(
            {
                name: l.b.USER,
                record: e,
                contextualGuildId: n
            },
            {},
            r,
            void 0
        );
}
function I(e, n, r) {
    N(l.b.USER, { reported_user_id: e.id }),
        (0, c.m)(
            {
                name: l.b.USER,
                record: e,
                contextualGuildId: n
            },
            { variant: 'staff' },
            r,
            void 0,
            !1
        );
}
function T(e, n) {
    let r = new o.Z({});
    N(l.BM.USER, { reported_user_id: r.id }),
        (0, c.m)(
            {
                name: l.BM.USER,
                record: r
            },
            {},
            n,
            void 0,
            !1,
            !1,
            e
        );
}
function b(e, n) {
    let r = new s.ZP({});
    N(l.BM.MESSAGE, {
        message_id: void 0,
        channel_id: void 0
    }),
        (0, c.m)(
            {
                name: l.BM.MESSAGE,
                record: r
            },
            {},
            n,
            void 0,
            !1,
            !1,
            e
        );
}
async function y(e, n, r) {
    try {
        await (0, u.ox)(
            {
                name: l.b.MESSAGE,
                record: e
            },
            { variant: 'safety_alerts_headless_v1' }
        ),
            null == n || n();
    } catch {
        null == r || r();
    }
}
function S(e, n) {
    N(l.b.MESSAGE, {
        message_id: e.id,
        channel_id: e.channel_id
    }),
        (0, c.m)(
            {
                name: l.b.MESSAGE,
                record: e
            },
            { variant: 'safety_alerts_v1' },
            n
        );
}
function A(e) {
    let { application: n, entrypoint: r, contextualGuildId: a, contextualChannelId: s, onSubmit: o } = e;
    i.ZP.trackWithMetadata(d.rMx.REPORT_APPLICATION_CLICKED, {
        application_id: n.id,
        location: r
    }),
        N(l.b.APPLICATION, {
            application_id: n.id,
            guild_id: a,
            channel_id: s
        }),
        (0, c.m)(
            {
                name: l.b.APPLICATION,
                record: n,
                contextualGuildId: a,
                contextualChannelId: s,
                entrypoint: r
            },
            {},
            o
        );
}
function N(e, n) {
    i.ZP.trackWithMetadata(d.rMx.IAR_MODAL_OPEN, {
        report_type: e,
        ...n
    });
}
