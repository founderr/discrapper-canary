n.d(t, {
    EW: function () {
        return R;
    },
    Fo: function () {
        return y;
    },
    H4: function () {
        return S;
    },
    kk: function () {
        return A;
    },
    un: function () {
        return T;
    },
    wE: function () {
        return b;
    },
    wH: function () {
        return O;
    }
}),
    n(47120);
var r = n(442837),
    i = n(704215),
    a = n(570140),
    s = n(561746),
    o = n(675478),
    l = n(581883),
    u = n(626135),
    c = n(915486),
    d = n(713284),
    f = n(261376),
    _ = n(883904),
    p = n(68985),
    h = n(952193),
    m = n(211644),
    g = n(57207),
    E = n(644916),
    v = n(921944),
    I = n(981631);
function T(e) {
    var t;
    if ((0, g.B)(e)) return !0;
    let n = null === (t = l.Z.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
    return null != n && (0, c.jl)(n, e);
}
function b(e) {
    return (0, r.e7)([l.Z], () => T(e));
}
function S(e) {
    var t, n;
    if ((0, g.B)(e))
        return {
            isDismissed: !0,
            lastDismissedVersion: null
        };
    let r = null === (n = l.Z.settings.userContent) || void 0 === n ? void 0 : null === (t = n.recurringDismissibleContentStates[e]) || void 0 === t ? void 0 : t.lastDismissedVersion,
        i = (0, E.t)(e);
    return {
        isDismissed: null != r && r >= i,
        lastDismissedVersion: r
    };
}
function y(e, t) {
    var n, r;
    if ((0, g.B)(e))
        return {
            isDismissed: !0,
            lastDismissedAtMs: null
        };
    let i = null === (r = l.Z.settings.userContent) || void 0 === r ? void 0 : null === (n = r.recurringDismissibleContentStates[e]) || void 0 === n ? void 0 : n.lastDismissedAtMs,
        a = null != i && '0' !== i ? (Number.isNaN(Number(i)) ? void 0 : Number(i)) : void 0;
    if (void 0 === a)
        return {
            isDismissed: !1,
            lastDismissedAtMs: void 0
        };
    let s = !0;
    if (null != t) {
        let e = a + t.cooldownDurationMs,
            n = Date.now(),
            r = null == t.showAfterTimestamp || n >= t.showAfterTimestamp;
        s = n < e || !r;
    }
    return {
        isDismissed: s,
        lastDismissedAtMs: a
    };
}
function A(e, t, n) {
    if (
        !(
            (0, m.cI)(e) ||
            p.Z.hasUserHitDCCap(e) ||
            (function (e) {
                let t = h.$.has(e),
                    { enabled: n } = s.Z.getCurrentConfig({ location: 'isUserSubjectToDCFHoldout' }, { autoTrackExposure: !t });
                return n && !t;
            })(e)
        ) &&
        !n
    )
        a.Z.dispatch({
            type: 'DCF_EVENT_LOGGED',
            eventType: d.D.DC_SHOW_REQUEST,
            dismissibleContent: e
        }),
            (0, m.f0)({
                content: e,
                groupName: null == t ? void 0 : t.groupName,
                onAdded: () => {
                    var n;
                    let [r, a] = (0, m.Aq)();
                    (0, _.cm)(e),
                        u.default.track(I.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: i.z[e],
                            content_count: r,
                            fatigable_content_count: a,
                            group_name: null == t ? void 0 : t.groupName,
                            bypass_fatigue: f.O.has(e),
                            guild_id: null == t ? void 0 : t.guildId,
                            version: null == t ? void 0 : t.version
                        }),
                        null == t || null === (n = t.onShown) || void 0 === n || n.call(t);
                }
            });
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((0, m.cI)(e) || t.forceTrack) &&
        (function (e, t) {
            var n;
            let [r] = (0, m.Aq)(),
                a = p.Z.getRenderedAtTimestamp(e),
                s = new Date(),
                o = null == a ? null : s.getTime() - a;
            u.default.track(I.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: i.z[e],
                action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : v.L.UNKNOWN,
                content_count: r,
                group_name: null == t ? void 0 : t.groupName,
                bypass_fatigue: f.O.has(e),
                guild_id: null == t ? void 0 : t.guildId,
                shown_duration: o,
                version: null == t ? void 0 : t.version
            });
        })(e, t),
        (0, _.Vr)(e);
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !p.Z.hasUserHitDCCap();
    (0, m.gE)(
        {
            content: e,
            groupName: null == t ? void 0 : t.groupName
        },
        n
    );
}
async function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    N(e, t), await (0, o.nm)(e), C(e, t);
}
async function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    N(e, n), await (0, o.Bn)(e, t), C(e, n);
}
