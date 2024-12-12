r.d(n, {
    EW: function () {
        return L;
    },
    Fo: function () {
        return C;
    },
    H4: function () {
        return N;
    },
    kk: function () {
        return R;
    },
    un: function () {
        return S;
    },
    wE: function () {
        return A;
    },
    wH: function () {
        return x;
    }
});
var i = r(47120);
var a = r(442837),
    s = r(704215),
    o = r(570140),
    l = r(527181),
    u = r(561746),
    c = r(675478),
    d = r(581883),
    f = r(626135),
    _ = r(915486),
    h = r(713284),
    p = r(261376),
    m = r(883904),
    g = r(68985),
    E = r(952193),
    v = r(211644),
    I = r(57207),
    T = r(644916),
    b = r(921944),
    y = r(981631);
function S(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!r && (0, I.B)(e)) return !0;
    let i = null === (n = d.Z.settings.userContent) || void 0 === n ? void 0 : n.dismissedContents;
    return null != i && (0, _.jl)(i, e);
}
function A(e) {
    return (0, a.e7)([d.Z], () => S(e));
}
function N(e) {
    var n, r;
    if ((0, I.B)(e))
        return {
            isDismissed: !0,
            lastDismissedVersion: null
        };
    let i = null === (r = d.Z.settings.userContent) || void 0 === r ? void 0 : null === (n = r.recurringDismissibleContentStates[e]) || void 0 === n ? void 0 : n.lastDismissedVersion,
        a = (0, T.t)(e);
    return {
        isDismissed: null != i && i >= a,
        lastDismissedVersion: i
    };
}
function C(e, n) {
    var r, i;
    if ((0, I.B)(e))
        return {
            isDismissed: !0,
            lastDismissedAtMs: null
        };
    let a = null === (i = d.Z.settings.userContent) || void 0 === i ? void 0 : null === (r = i.recurringDismissibleContentStates[e]) || void 0 === r ? void 0 : r.lastDismissedAtMs,
        s = null != a && '0' !== a ? (Number.isNaN(Number(a)) ? void 0 : Number(a)) : void 0;
    if (void 0 === s)
        return {
            isDismissed: !1,
            lastDismissedAtMs: void 0
        };
    let o = !0;
    if (null != n) {
        let e = s + n.cooldownDurationMs,
            r = Date.now(),
            i = null == n.showAfterTimestamp || (r >= n.showAfterTimestamp && s <= n.showAfterTimestamp);
        o = r < e || !i;
    }
    return {
        isDismissed: o,
        lastDismissedAtMs: s
    };
}
function R(e, n, r) {
    if (!((0, v.cI)(e) || g.Z.hasUserHitDCCap(e) || P(e)) && !r)
        o.Z.dispatch({
            type: 'DCF_EVENT_LOGGED',
            eventType: h.D.DC_SHOW_REQUEST,
            dismissibleContent: e
        }),
            (0, v.f0)({
                content: e,
                groupName: null == n ? void 0 : n.groupName,
                onAdded: () => {
                    var r;
                    let [i, a] = (0, v.Aq)();
                    (0, m.cm)(e),
                        f.default.track(y.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: s.z[e],
                            content_count: i,
                            fatigable_content_count: a,
                            group_name: null == n ? void 0 : n.groupName,
                            bypass_fatigue: p.O.has(e),
                            guild_id: null == n ? void 0 : n.guildId,
                            version: null == n ? void 0 : n.version
                        }),
                        null == n || null === (r = n.onShown) || void 0 === r || r.call(n);
                }
            });
}
function O(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((0, v.cI)(e) || n.forceTrack) && w(e, n), (0, m.Vr)(e);
}
function D(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = !g.Z.hasUserHitDCCap();
    (0, v.gE)(
        {
            content: e,
            groupName: null == n ? void 0 : n.groupName
        },
        r
    );
}
async function L(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { enabled: r } = l.Z.getCurrentConfig({ location: 'markDismissibleContentAsDismissed' });
    if (!(r && S(e, !0))) O(e, n), await (0, c.nm)(e), D(e, n);
}
async function x(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    O(e, r), await (0, c.Bn)(e, n), D(e, r);
}
function w(e, n) {
    var r;
    let [i] = (0, v.Aq)(),
        a = g.Z.getRenderedAtTimestamp(e),
        o = new Date(),
        l = null == a ? null : o.getTime() - a;
    f.default.track(y.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
        type: s.z[e],
        action: null !== (r = null == n ? void 0 : n.dismissAction) && void 0 !== r ? r : b.L.UNKNOWN,
        content_count: i,
        group_name: null == n ? void 0 : n.groupName,
        bypass_fatigue: p.O.has(e),
        guild_id: null == n ? void 0 : n.guildId,
        shown_duration: l,
        version: null == n ? void 0 : n.version
    });
}
function P(e) {
    let n = E.$.has(e),
        { enabled: r } = u.Z.getCurrentConfig({ location: 'isUserSubjectToDCFHoldout' }, { autoTrackExposure: !n });
    return r && !n;
}
