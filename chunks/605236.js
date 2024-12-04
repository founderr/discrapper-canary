n.d(t, {
    EW: function () {
        return O;
    },
    Fo: function () {
        return A;
    },
    H4: function () {
        return y;
    },
    kk: function () {
        return N;
    },
    un: function () {
        return b;
    },
    wE: function () {
        return S;
    },
    wH: function () {
        return D;
    }
}),
    n(47120);
var r = n(442837),
    i = n(704215),
    a = n(570140),
    s = n(527181),
    o = n(561746),
    l = n(675478),
    u = n(581883),
    c = n(626135),
    d = n(915486),
    f = n(713284),
    _ = n(261376),
    p = n(883904),
    h = n(68985),
    m = n(952193),
    g = n(211644),
    E = n(57207),
    v = n(644916),
    I = n(921944),
    T = n(981631);
function b(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!n && (0, E.B)(e)) return !0;
    let r = null === (t = u.Z.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
    return null != r && (0, d.jl)(r, e);
}
function S(e) {
    return (0, r.e7)([u.Z], () => b(e));
}
function y(e) {
    var t, n;
    if ((0, E.B)(e))
        return {
            isDismissed: !0,
            lastDismissedVersion: null
        };
    let r = null === (n = u.Z.settings.userContent) || void 0 === n ? void 0 : null === (t = n.recurringDismissibleContentStates[e]) || void 0 === t ? void 0 : t.lastDismissedVersion,
        i = (0, v.t)(e);
    return {
        isDismissed: null != r && r >= i,
        lastDismissedVersion: r
    };
}
function A(e, t) {
    var n, r;
    if ((0, E.B)(e))
        return {
            isDismissed: !0,
            lastDismissedAtMs: null
        };
    let i = null === (r = u.Z.settings.userContent) || void 0 === r ? void 0 : null === (n = r.recurringDismissibleContentStates[e]) || void 0 === n ? void 0 : n.lastDismissedAtMs,
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
            r = null == t.showAfterTimestamp || (n >= t.showAfterTimestamp && a <= t.showAfterTimestamp);
        s = n < e || !r;
    }
    return {
        isDismissed: s,
        lastDismissedAtMs: a
    };
}
function N(e, t, n) {
    if (
        !(
            (0, g.cI)(e) ||
            h.Z.hasUserHitDCCap(e) ||
            (function (e) {
                let t = m.$.has(e),
                    { enabled: n } = o.Z.getCurrentConfig({ location: 'isUserSubjectToDCFHoldout' }, { autoTrackExposure: !t });
                return n && !t;
            })(e)
        ) &&
        !n
    )
        a.Z.dispatch({
            type: 'DCF_EVENT_LOGGED',
            eventType: f.D.DC_SHOW_REQUEST,
            dismissibleContent: e
        }),
            (0, g.f0)({
                content: e,
                groupName: null == t ? void 0 : t.groupName,
                onAdded: () => {
                    var n;
                    let [r, a] = (0, g.Aq)();
                    (0, p.cm)(e),
                        c.default.track(T.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: i.z[e],
                            content_count: r,
                            fatigable_content_count: a,
                            group_name: null == t ? void 0 : t.groupName,
                            bypass_fatigue: _.O.has(e),
                            guild_id: null == t ? void 0 : t.guildId,
                            version: null == t ? void 0 : t.version
                        }),
                        null == t || null === (n = t.onShown) || void 0 === n || n.call(t);
                }
            });
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((0, g.cI)(e) || t.forceTrack) &&
        (function (e, t) {
            var n;
            let [r] = (0, g.Aq)(),
                a = h.Z.getRenderedAtTimestamp(e),
                s = new Date(),
                o = null == a ? null : s.getTime() - a;
            c.default.track(T.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: i.z[e],
                action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : I.L.UNKNOWN,
                content_count: r,
                group_name: null == t ? void 0 : t.groupName,
                bypass_fatigue: _.O.has(e),
                guild_id: null == t ? void 0 : t.guildId,
                shown_duration: o,
                version: null == t ? void 0 : t.version
            });
        })(e, t),
        (0, p.Vr)(e);
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !h.Z.hasUserHitDCCap();
    (0, g.gE)(
        {
            content: e,
            groupName: null == t ? void 0 : t.groupName
        },
        n
    );
}
async function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { enabled: n } = s.Z.getCurrentConfig({ location: 'markDismissibleContentAsDismissed' });
    if (!(n && b(e, !0))) C(e, t), await (0, l.nm)(e), R(e, t);
}
async function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    C(e, n), await (0, l.Bn)(e, t), R(e, n);
}
