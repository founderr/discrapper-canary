n.d(t, {
    B0: function () {
        return _;
    },
    M4: function () {
        return r;
    },
    Nt: function () {
        return f;
    },
    RV: function () {
        return E;
    },
    VP: function () {
        return N;
    },
    X: function () {
        return A;
    },
    ZD: function () {
        return h;
    },
    fw: function () {
        return m;
    },
    hs: function () {
        return I;
    },
    i_: function () {
        return C;
    },
    k8: function () {
        return y;
    },
    ox: function () {
        return p;
    },
    qJ: function () {
        return v;
    },
    yL: function () {
        return g;
    }
}),
    n(411104),
    n(724458),
    n(47120);
var r,
    i,
    a = n(192379),
    s = n(544891),
    o = n(570140),
    l = n(367907),
    u = n(432877),
    c = n(82554),
    d = n(981631);
async function f(e, t) {
    var n;
    let r = T(e),
        i = await s.tn.get({
            url: d.ANM.GET_REPORT_MENU(r),
            query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0,
            rejectWithError: !1
        });
    return null !== (n = i.body) && void 0 !== n ? n : JSON.parse(i.text);
}
async function _(e, t) {
    var n;
    let r = b(e),
        i = await s.tn.get({
            url: d.ANM.GET_UNAUTHENTICATED_REPORT_MENU(r),
            query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0,
            rejectWithError: !1
        });
    return null !== (n = i.body) && void 0 !== n ? n : JSON.parse(i.text);
}
async function p(e, t) {
    let n = T(e),
        r = await f(e, t);
    await s.tn.post({
        url: d.ANM.SUBMIT_REPORT_MENU(n),
        body: S(r, e, [
            {
                nodeRef: r.root_node_id,
                destination: ['', r.success_node_id]
            }
        ]),
        rejectWithError: !1
    });
}
function h(e, t, n) {
    return u.ZP.get('iar_skip_api_report_submit')
        ? Promise.resolve()
        : s.tn.post({
              url: d.ANM.SUBMIT_REPORT_MENU(T(t)),
              body: S(e, t, n),
              rejectWithError: !1
          });
}
function m(e, t, n, r) {
    if (u.ZP.get('iar_skip_api_report_submit')) return Promise.resolve();
    let i = b(t);
    return s.tn.post({
        url: d.ANM.SUBMIT_UNAUTHENTICATED_REPORT_MENU(i),
        body: S(e, t, n, r),
        rejectWithError: !1
    });
}
function g(e, t) {
    return s.tn.post({
        url: d.ANM.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
        body: {
            name: e,
            email: t
        },
        rejectWithError: !1
    });
}
async function E(e, t, n) {
    return (
        await s.tn.post({
            url: d.ANM.VERIFY_UNAUTHENTICATED_REPORT(e),
            body: {
                name: e,
                email: t,
                code: n
            },
            rejectWithError: !1
        })
    ).body;
}
async function v() {
    return await s.tn.get({
        url: d.ANM.DSA_EXPERIMENT_UNAUTHENTICATED,
        rejectWithError: !1
    });
}
async function I(e) {
    return (
        await s.tn.post({
            url: d.ANM.SUBMIT_REPORT_SECOND_LOOK,
            body: { token: e },
            rejectWithError: !1
        })
    ).body;
}
function b(e) {
    let t = e.name;
    if (!Object.values(c.BM).includes(t)) throw Error('Invalid report type '.concat(e.name));
    return t;
}
function T(e) {
    let t = e.name;
    if (!Object.values(c.b).includes(t)) throw Error('Invalid report type '.concat(e.name));
    return t;
}
let S = (e, t, n, r) => {
    let { version: i, variant: a, language: s } = e,
        o = {
            channel_id: void 0,
            message_id: void 0,
            stage_instance_id: void 0,
            guild_id: void 0,
            guild_scheduled_event_id: void 0,
            user_id: void 0,
            email_token: void 0,
            application_id: void 0
        },
        l = {
            version: i,
            variant: a,
            language: null != s ? s : 'en',
            breadcrumbs: n.map((e) => e.nodeRef),
            elements: n.reduce((e, t) => {
                let { multiSelect: n, textInput: r } = t;
                return {
                    ...e,
                    ...(null != n && { [n.name]: Object.keys(n.state) }),
                    ...Object.fromEntries(
                        Object.entries(null != r ? r : {}).map((e) => {
                            let [t, { value: n }] = e;
                            return [t, n];
                        })
                    )
                };
            }, {})
        };
    if (t.name === c.b.MESSAGE || t.name === c.b.FIRST_DM) {
        let { channel_id: e, id: n } = t.record;
        return {
            ...l,
            ...o,
            name: t.name,
            channel_id: e,
            message_id: n
        };
    }
    if (t.name === c.b.GUILD || t.name === c.b.GUILD_DISCOVERY) {
        let { id: e } = t.record;
        return {
            ...l,
            ...o,
            name: t.name,
            guild_id: e
        };
    }
    if (t.name === c.b.GUILD_DIRECTORY_ENTRY) {
        let { guildId: e, channelId: n } = t.record;
        return {
            ...l,
            ...o,
            name: t.name,
            channel_id: n,
            guild_id: e
        };
    } else if (t.name === c.b.STAGE_CHANNEL) {
        let { id: e, guild_id: n, channel_id: r } = t.record;
        return {
            ...l,
            ...o,
            name: t.name,
            channel_id: r,
            guild_id: n,
            stage_instance_id: e
        };
    } else if (t.name === c.b.GUILD_SCHEDULED_EVENT) {
        let { id: e, guild_id: n } = t.record;
        return {
            ...l,
            ...o,
            name: t.name,
            guild_id: n,
            guild_scheduled_event_id: e
        };
    } else if (t.name === c.b.USER)
        return {
            ...l,
            ...o,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId
        };
    else if (t.name === c.BM.USER)
        return {
            ...l,
            ...o,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId,
            email_token: r
        };
    else if (t.name === c.BM.MESSAGE)
        return {
            ...l,
            ...o,
            name: t.name,
            message_id: t.record.id,
            email_token: r
        };
    else if (t.name === c.b.APPLICATION)
        return {
            ...l,
            ...o,
            name: t.name,
            application_id: t.record.id,
            guild_id: t.contextualGuildId,
            channel_id: t.contextualChannelId
        };
    return null;
};
function y(e, t, n) {
    l.ZP.trackWithMetadata(d.rMx.IAR_MODAL_CLOSE, {
        report_type: e.name,
        report_id: n,
        navigation_history: t,
        message_id: e.name === c.b.MESSAGE || e.name === c.b.FIRST_DM ? e.record.id : void 0,
        stage_instance_id: e.name === c.b.STAGE_CHANNEL ? e.record.id : void 0,
        guild_scheduled_event_id: e.name === c.b.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
        guild_id: e.name === c.b.GUILD || e.name === c.b.GUILD_DISCOVERY ? e.record.id : e.name === c.b.GUILD_DIRECTORY_ENTRY ? e.record.guildId : e.name === c.b.GUILD_SCHEDULED_EVENT ? e.record.guild_id : void 0,
        channel_id: e.name === c.b.GUILD_SCHEDULED_EVENT ? e.record.channel_id : e.name === c.b.GUILD_DIRECTORY_ENTRY ? e.record.channelId : void 0,
        application_id: e.name === c.b.APPLICATION ? e.record.id : void 0
    });
}
function A(e, t) {
    o.Z.dispatch({
        type: 'IN_APP_REPORTS_SHOW_FEEDBACK',
        reportId: t,
        reportType: e.name
    });
}
function N(e, t, n, r, i) {
    return (
        e.some((e) => {
            var t;
            return !0 === e.should_submit_data && ((null == r ? void 0 : r[e.name]) == null || (null == r ? void 0 : r[e.name].value) === '' || !(null == r ? void 0 : null === (t = r[e.name]) || void 0 === t ? void 0 : t.isValid));
        }) ||
        t.some((e) => !0 === e.should_submit_data && ((null == r ? void 0 : r[e.name]) == null || (null == r ? void 0 : r[e.name].value) === '')) ||
        ((null == n ? void 0 : n.should_submit_data) === !0 && (null == i || 0 === Object.keys(i).length))
    );
}
function C(e, t, n) {
    return a.useCallback(
        (r) => (i) => {
            l.ZP.trackWithMetadata(d.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                report_id: n,
                report_type: e.name,
                report_subtype: t,
                settings_upsells_type: r,
                action: i
            });
        },
        [n, e, t]
    );
}
((i = r || (r = {})).SETTINGS_UPSELLS_VIEWED = 'SETTINGS_UPSELLS_VIEWED'), (i.SETTINGS_UPSELLS_APPLY_CLICKED = 'SETTINGS_UPSELLS_APPLY_CLICKED'), (i.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED = 'SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED');
