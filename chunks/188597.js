n.d(t, {
    $s: function () {
        return C;
    },
    A0: function () {
        return y;
    },
    Sg: function () {
        return O;
    },
    ow: function () {
        return g;
    },
    rQ: function () {
        return r;
    },
    t$: function () {
        return R;
    },
    tM: function () {
        return A;
    }
});
var r,
    i = n(47120);
var a = n(544891),
    o = n(570140),
    s = n(904245),
    l = n(911969),
    u = n(812206),
    c = n(375824),
    d = n(346479),
    _ = n(314897),
    E = n(709054),
    f = n(603721),
    h = n(282397),
    p = n(622449),
    m = n(96989),
    I = n(981631),
    T = n(689938);
function g(e) {
    return null == e || '' === e || Number.isNaN(e) ? Date.now() : E.default.extractTimestamp(e) + 900000;
}
function S(e) {
    return null == e || '' === e || Number.isNaN(e) ? Date.now() : E.default.extractTimestamp(e) + 3000;
}
let A = async (e) => {
    let { componentType: t, messageId: n, messageFlags: r, customId: i, componentId: o, applicationId: s, channelId: u, guildId: c, localState: p } = e,
        m = E.default.fromTimestamp(Date.now());
    if (!h.ZP.canQueueInteraction(n, m)) return;
    await d.Z.unarchiveThreadIfNecessary(u),
        (0, f.kz)(m, {
            messageId: n,
            data: {
                interactionType: l.B8.MESSAGE_COMPONENT,
                customId: i,
                componentId: o
            },
            onFailure: (e, t) => N(u, e, t)
        }),
        null != p && (0, f.B0)(n, m, p, o);
    let T = {
        type: l.B8.MESSAGE_COMPONENT,
        nonce: m,
        guild_id: c,
        channel_id: u,
        message_flags: r,
        message_id: n,
        application_id: s,
        session_id: _.default.getSessionId(),
        data: {
            component_type: t,
            custom_id: i,
            ...v(p)
        }
    };
    await a.tn.post(
        {
            url: I.ANM.INTERACTIONS,
            body: T,
            timeout: 3000
        },
        (e) => {
            O(m, e, s, u, c);
        }
    );
};
function v(e) {
    if (null == e) return null;
    if (e.type === l.re.STRING_SELECT || e.type === l.re.INPUT_TEXT) return e;
    let t = e.selectedOptions.map((e) => e.value);
    return {
        type: e.type,
        values: t
    };
}
let N = (e, t, n) => {
        null == n && null != t && s.Z.sendClydeError(e, t);
    },
    O = (e, t, n, r, i) => {
        if (!t.ok) {
            if (!t.hasErr) {
                var a;
                if (t.status >= 400 && t.status < 500 && t.body) {
                    if (t.body.code === I.evJ.INVALID_FORM_BODY && t.body.errors) {
                        let a = (0, m.e)(t.body.errors);
                        null != a &&
                            ('INTERACTION_APPLICATION_COMMAND_INVALID_VERSION' === a.code || 'INTERACTION_APPLICATION_COMMAND_INVALID' === a.code) &&
                            o.Z.dispatch({
                                type: 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION',
                                applicationId: n,
                                channelId: r,
                                guildId: null != i ? i : null
                            }),
                            (0, f.yr)(e, void 0, null == a ? void 0 : a.message);
                        return;
                    }
                    (0, f.yr)(e, t.body.code, t.body.message, t.status);
                    return;
                }
                (0, f.yr)(e, null === (a = t.body) || void 0 === a ? void 0 : a.code);
                return;
            }
            (0, f.yr)(e);
        }
    };
!(function (e) {
    (e[(e.SENDING = 0)] = 'SENDING'), (e[(e.CREATED = 1)] = 'CREATED'), (e[(e.FAILED = 2)] = 'FAILED'), (e[(e.TIMED_OUT = 3)] = 'TIMED_OUT'), (e[(e.EPHEMERAL_SUCCESS = 4)] = 'EPHEMERAL_SUCCESS');
})(r || (r = {}));
let R = (e, t) => {
    let n = null == t ? void 0 : t.state,
        r = e.state === I.yb.SENT && g(e.id) < Date.now(),
        i = e.state === I.yb.SEND_FAILED && S(e.id) < Date.now(),
        a = (null == t ? void 0 : t.data.interactionType) === l.B8.APPLICATION_COMMAND,
        o = e.isCommandType();
    if ((a && n === p.F.QUEUED) || (o && e.state === I.yb.SENDING && null != t)) return 0;
    if ((a && n === p.F.CREATED) || (e.hasFlag(I.iLy.LOADING) && !r)) return 1;
    if (null != e.interaction && e.hasFlag(I.iLy.LOADING) && r) return 3;
    else if (null != e.interaction && !e.hasFlag(I.iLy.LOADING) && i) return 3;
    else if (o && e.state === I.yb.SEND_FAILED) return 2;
    else if (null != e.interaction && e.hasFlag(I.iLy.EPHEMERAL)) return 4;
};
function C(e) {
    let t = e.options;
    for (; (null == t ? void 0 : t.length) === 1 && (t[0].type === l.jw.SUB_COMMAND_GROUP || t[0].type === l.jw.SUB_COMMAND); ) t = t[0].options;
    for (let e of null != t ? t : []) if (e.type === l.jw.ATTACHMENT) return !1;
    return !0;
}
function y(e, t) {
    switch (e) {
        case c.Z.ReasonCodes.TIMEOUT:
            let n = u.Z.getApplication(t);
            if (null != n) return T.Z.Messages.INTERACTION_FAIL_TIMEOUT.format({ applicationName: n.name });
            return T.Z.Messages.INTERACTION_FAIL_TIMEOUT_GENERIC;
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT:
            return T.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL:
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS:
            return T.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL:
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD:
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE:
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK:
            return T.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE:
            return T.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE:
            return T.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE;
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED:
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED:
            return T.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS;
    }
}
