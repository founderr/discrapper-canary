n.d(t, {
    $s: function () {
        return A;
    },
    A0: function () {
        return N;
    },
    Sg: function () {
        return S;
    },
    ow: function () {
        return I;
    },
    rQ: function () {
        return r;
    },
    t$: function () {
        return y;
    },
    tM: function () {
        return T;
    }
}),
    n(47120);
var r,
    i,
    a = n(544891),
    s = n(570140),
    o = n(904245),
    l = n(911969),
    u = n(812206),
    c = n(375824),
    d = n(346479),
    f = n(314897),
    _ = n(709054),
    p = n(603721),
    h = n(282397),
    m = n(622449),
    g = n(96989),
    E = n(981631),
    v = n(388032);
function I(e) {
    return null == e || '' === e || Number.isNaN(e) ? Date.now() : _.default.extractTimestamp(e) + 900000;
}
let T = async (e) => {
        let { componentType: t, messageId: n, messageFlags: r, customId: i, componentId: s, applicationId: o, channelId: u, guildId: c, localState: m } = e,
            g = _.default.fromTimestamp(Date.now());
        if (!h.ZP.canQueueInteraction(n, g)) return;
        await d.Z.unarchiveThreadIfNecessary(u),
            (0, p.kz)(g, {
                messageId: n,
                data: {
                    interactionType: l.B8.MESSAGE_COMPONENT,
                    customId: i,
                    componentId: s
                },
                onFailure: (e, t) => b(u, e, t)
            }),
            null != m && (0, p.B0)(n, g, m, s);
        let v = {
            type: l.B8.MESSAGE_COMPONENT,
            nonce: g,
            guild_id: c,
            channel_id: u,
            message_flags: r,
            message_id: n,
            application_id: o,
            session_id: f.default.getSessionId(),
            data: {
                component_type: t,
                custom_id: i,
                ...(function (e) {
                    if (null == e) return null;
                    if (e.type === l.re.STRING_SELECT || e.type === l.re.TEXT_INPUT) return e;
                    let t = e.selectedOptions.map((e) => e.value);
                    return {
                        type: e.type,
                        values: t
                    };
                })(m)
            }
        };
        await a.tn.post(
            {
                url: E.ANM.INTERACTIONS,
                body: v,
                timeout: 3000,
                rejectWithError: !1
            },
            (e) => {
                S(g, e, o, u, c);
            }
        );
    },
    b = (e, t, n) => {
        null == n && null != t && o.Z.sendClydeError(e, t);
    },
    S = (e, t, n, r, i) => {
        if (!t.ok) {
            if (!t.hasErr) {
                var a;
                if (t.status >= 400 && t.status < 500 && t.body) {
                    if (t.body.code === E.evJ.INVALID_FORM_BODY && t.body.errors) {
                        let a = (0, g.e)(t.body.errors);
                        null != a &&
                            ('INTERACTION_APPLICATION_COMMAND_INVALID_VERSION' === a.code || 'INTERACTION_APPLICATION_COMMAND_INVALID' === a.code) &&
                            s.Z.dispatch({
                                type: 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION',
                                applicationId: n,
                                channelId: r,
                                guildId: null != i ? i : null
                            }),
                            (0, p.yr)(e, void 0, null == a ? void 0 : a.message);
                        return;
                    }
                    (0, p.yr)(e, t.body.code, t.body.message, t.status);
                    return;
                }
                (0, p.yr)(e, null === (a = t.body) || void 0 === a ? void 0 : a.code);
                return;
            }
            (0, p.yr)(e);
        }
    };
((i = r || (r = {}))[(i.SENDING = 0)] = 'SENDING'), (i[(i.CREATED = 1)] = 'CREATED'), (i[(i.FAILED = 2)] = 'FAILED'), (i[(i.TIMED_OUT = 3)] = 'TIMED_OUT'), (i[(i.EPHEMERAL_SUCCESS = 4)] = 'EPHEMERAL_SUCCESS');
let y = (e, t) => {
    var n;
    let r = null == t ? void 0 : t.state,
        i = e.state === E.yb.SENT && I(e.id) < Date.now();
    let a = e.state === E.yb.SEND_FAILED && (null == (n = e.id) || '' === n || Number.isNaN(n) ? Date.now() : _.default.extractTimestamp(n) + 3000) < Date.now(),
        s = (null == t ? void 0 : t.data.interactionType) === l.B8.APPLICATION_COMMAND,
        o = e.isCommandType();
    if ((s && r === m.F.QUEUED) || (o && e.state === E.yb.SENDING && null != t)) return 0;
    if ((s && r === m.F.CREATED) || (e.hasFlag(E.iLy.LOADING) && !i)) return 1;
    if (null != e.interaction && e.hasFlag(E.iLy.LOADING) && i) return 3;
    else if (null != e.interaction && !e.hasFlag(E.iLy.LOADING) && a) return 3;
    else if (o && e.state === E.yb.SEND_FAILED) return 2;
    else if (null != e.interaction && e.hasFlag(E.iLy.EPHEMERAL)) return 4;
};
function A(e) {
    let t = e.options;
    for (; (null == t ? void 0 : t.length) === 1 && (t[0].type === l.jw.SUB_COMMAND_GROUP || t[0].type === l.jw.SUB_COMMAND); ) t = t[0].options;
    for (let e of null != t ? t : []) if (e.type === l.jw.ATTACHMENT) return !1;
    return !0;
}
function N(e, t) {
    switch (e) {
        case c.Z.ReasonCodes.TIMEOUT:
            let n = u.Z.getApplication(t);
            if (null != n) return v.intl.formatToPlainString(v.t.u2D2Ul, { applicationName: n.name });
            return v.intl.string(v.t['vGU8+v']);
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT:
            return v.intl.string(v.t.Gyzcra);
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL:
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS:
            return v.intl.string(v.t.hHGrW1);
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL:
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD:
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE:
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK:
            return v.intl.string(v.t.j29zCg);
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE:
            return v.intl.string(v.t['4WuFRE']);
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE:
            return v.intl.string(v.t.RvkXdX);
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED:
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED:
            return v.intl.string(v.t.uGDCc3);
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY:
            return v.intl.string(v.t.WjNAAA);
        case c.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE:
            return v.intl.string(v.t.PtobXV);
    }
}
