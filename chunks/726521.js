n.d(t, {
    I6: function () {
        return S;
    },
    J7: function () {
        return N;
    },
    JM: function () {
        return g;
    },
    Jw: function () {
        return f;
    },
    WL: function () {
        return I;
    },
    ak: function () {
        return E;
    },
    d$: function () {
        return p;
    },
    eE: function () {
        return A;
    },
    ic: function () {
        return h;
    },
    lt: function () {
        return d;
    },
    pX: function () {
        return T;
    },
    sq: function () {
        return _;
    },
    wk: function () {
        return R;
    },
    zd: function () {
        return m;
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
    O(o.b.GUILD_DISCOVERY, { guild_id: e.id }),
        (0, u.m)(
            {
                name: o.b.GUILD_DISCOVERY,
                record: e
            },
            {},
            t
        );
}
function _(e, t) {
    O(o.b.GUILD_DIRECTORY_ENTRY, {
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
function E(e, t, n) {
    O(o.b.MESSAGE, {
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
function f(e, t, n) {
    O(o.b.MESSAGE, {
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
function h(e, t) {
    let n = i.Z.getStageInstanceByChannel(e.id);
    if (null != n)
        O(o.b.STAGE_CHANNEL, {
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
function p(e, t) {
    var n;
    O(o.b.GUILD_SCHEDULED_EVENT, {
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
function I(e, t) {
    O(o.b.FIRST_DM, {
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
async function m(e, t) {
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
function T(e, t, n) {
    O(o.b.USER, { reported_user_id: e.id }),
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
function S(e, t, n) {
    O(o.b.USER, { reported_user_id: e.id }),
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
function g(e, t) {
    let n = new s.Z({});
    O(o.BM.USER, { reported_user_id: n.id }),
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
function A(e, t) {
    let n = new a.ZP({});
    O(o.BM.MESSAGE, {
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
async function N(e, t, n) {
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
function R(e, t) {
    O(o.b.MESSAGE, {
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
function O(e, t) {
    r.ZP.trackWithMetadata(c.rMx.IAR_MODAL_OPEN, {
        report_type: e,
        ...t
    });
}
