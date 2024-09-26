n.d(t, {
    B0: function () {
        return h;
    },
    M4: function () {
        return r;
    },
    Nt: function () {
        return f;
    },
    RV: function () {
        return g;
    },
    VP: function () {
        return y;
    },
    X: function () {
        return C;
    },
    ZD: function () {
        return m;
    },
    fw: function () {
        return I;
    },
    hs: function () {
        return A;
    },
    i_: function () {
        return L;
    },
    k8: function () {
        return R;
    },
    ox: function () {
        return p;
    },
    qJ: function () {
        return S;
    },
    yL: function () {
        return T;
    }
});
var r,
    i = n(411104);
var a = n(724458);
var o = n(47120);
var s = n(470079),
    l = n(544891),
    u = n(570140),
    c = n(367907),
    d = n(432877),
    _ = n(82554),
    E = n(981631);
async function f(e, t) {
    var n;
    let r = N(e),
        i = await l.tn.get({
            url: E.ANM.GET_REPORT_MENU(r),
            query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0
        });
    return null !== (n = i.body) && void 0 !== n ? n : JSON.parse(i.text);
}
async function h(e, t) {
    var n;
    let r = v(e),
        i = await l.tn.get({
            url: E.ANM.GET_UNAUTHENTICATED_REPORT_MENU(r),
            query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0
        });
    return null !== (n = i.body) && void 0 !== n ? n : JSON.parse(i.text);
}
async function p(e, t) {
    let n = N(e),
        r = await f(e, t);
    await l.tn.post({
        url: E.ANM.SUBMIT_REPORT_MENU(n),
        body: O(r, e, [
            {
                nodeRef: r.root_node_id,
                destination: ['', r.success_node_id]
            }
        ])
    });
}
function m(e, t, n) {
    return d.ZP.get('iar_skip_api_report_submit')
        ? Promise.resolve()
        : l.tn.post({
              url: E.ANM.SUBMIT_REPORT_MENU(N(t)),
              body: O(e, t, n)
          });
}
function I(e, t, n, r) {
    if (d.ZP.get('iar_skip_api_report_submit')) return Promise.resolve();
    let i = v(t);
    return l.tn.post({
        url: E.ANM.SUBMIT_UNAUTHENTICATED_REPORT_MENU(i),
        body: O(e, t, n, r)
    });
}
function T(e, t) {
    return l.tn.post({
        url: E.ANM.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
        body: {
            name: e,
            email: t
        }
    });
}
async function g(e, t, n) {
    return (
        await l.tn.post({
            url: E.ANM.VERIFY_UNAUTHENTICATED_REPORT(e),
            body: {
                name: e,
                email: t,
                code: n
            }
        })
    ).body;
}
async function S() {
    return await l.tn.get({ url: E.ANM.DSA_EXPERIMENT_UNAUTHENTICATED });
}
async function A(e) {
    return (
        await l.tn.post({
            url: E.ANM.SUBMIT_REPORT_SECOND_LOOK,
            body: { token: e }
        })
    ).body;
}
function v(e) {
    let t = e.name;
    if (!Object.values(_.BM).includes(t)) throw Error('Invalid report type '.concat(e.name));
    return t;
}
function N(e) {
    let t = e.name;
    if (!Object.values(_.b).includes(t)) throw Error('Invalid report type '.concat(e.name));
    return t;
}
let O = (e, t, n, r) => {
    let { version: i, variant: a, language: o } = e,
        s = {
            channel_id: void 0,
            message_id: void 0,
            stage_instance_id: void 0,
            guild_id: void 0,
            guild_scheduled_event_id: void 0,
            user_id: void 0,
            email_token: void 0
        },
        l = {
            version: i,
            variant: a,
            language: null != o ? o : 'en',
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
    if (t.name === _.b.MESSAGE || t.name === _.b.FIRST_DM) {
        let { channel_id: e, id: n } = t.record;
        return {
            ...l,
            ...s,
            name: t.name,
            channel_id: e,
            message_id: n
        };
    }
    if (t.name === _.b.GUILD || t.name === _.b.GUILD_DISCOVERY) {
        let { id: e } = t.record;
        return {
            ...l,
            ...s,
            name: t.name,
            guild_id: e
        };
    }
    if (t.name === _.b.GUILD_DIRECTORY_ENTRY) {
        let { guildId: e, channelId: n } = t.record;
        return {
            ...l,
            ...s,
            name: t.name,
            channel_id: n,
            guild_id: e
        };
    } else if (t.name === _.b.STAGE_CHANNEL) {
        let { id: e, guild_id: n, channel_id: r } = t.record;
        return {
            ...l,
            ...s,
            name: t.name,
            channel_id: r,
            guild_id: n,
            stage_instance_id: e
        };
    } else if (t.name === _.b.GUILD_SCHEDULED_EVENT) {
        let { id: e, guild_id: n } = t.record;
        return {
            ...l,
            ...s,
            name: t.name,
            guild_id: n,
            guild_scheduled_event_id: e
        };
    } else if (t.name === _.b.USER)
        return {
            ...l,
            ...s,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId
        };
    else if (t.name === _.BM.USER)
        return {
            ...l,
            ...s,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId,
            email_token: r
        };
    else if (t.name === _.BM.MESSAGE)
        return {
            ...l,
            ...s,
            name: t.name,
            message_id: t.record.id,
            email_token: r
        };
    return null;
};
function R(e, t, n) {
    c.ZP.trackWithMetadata(E.rMx.IAR_MODAL_CLOSE, {
        report_type: e.name,
        report_id: n,
        navigation_history: t,
        message_id: e.name === _.b.MESSAGE || e.name === _.b.FIRST_DM ? e.record.id : void 0,
        stage_instance_id: e.name === _.b.STAGE_CHANNEL ? e.record.id : void 0,
        guild_scheduled_event_id: e.name === _.b.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
        guild_id: e.name === _.b.GUILD || e.name === _.b.GUILD_DISCOVERY ? e.record.id : e.name === _.b.GUILD_DIRECTORY_ENTRY ? e.record.guildId : e.name === _.b.GUILD_SCHEDULED_EVENT ? e.record.guild_id : void 0,
        channel_id: e.name === _.b.GUILD_SCHEDULED_EVENT ? e.record.channel_id : e.name === _.b.GUILD_DIRECTORY_ENTRY ? e.record.channelId : void 0
    });
}
function C(e, t) {
    u.Z.dispatch({
        type: 'IN_APP_REPORTS_SHOW_FEEDBACK',
        reportId: t,
        reportType: e.name
    });
}
function y(e, t, n, r, i) {
    return (
        e.some((e) => {
            var t;
            return !0 === e.should_submit_data && ((null == r ? void 0 : r[e.name]) == null || (null == r ? void 0 : r[e.name].value) === '' || !(null == r ? void 0 : null === (t = r[e.name]) || void 0 === t ? void 0 : t.isValid));
        }) ||
        t.some((e) => !0 === e.should_submit_data && ((null == r ? void 0 : r[e.name]) == null || (null == r ? void 0 : r[e.name].value) === '')) ||
        ((null == n ? void 0 : n.should_submit_data) === !0 && (null == i || 0 === Object.keys(i).length))
    );
}
function L(e, t, n) {
    return s.useCallback(
        (r) => (i) => {
            c.ZP.trackWithMetadata(E.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
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
!(function (e) {
    (e.SETTINGS_UPSELLS_VIEWED = 'SETTINGS_UPSELLS_VIEWED'), (e.SETTINGS_UPSELLS_APPLY_CLICKED = 'SETTINGS_UPSELLS_APPLY_CLICKED'), (e.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED = 'SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED');
})(r || (r = {}));
