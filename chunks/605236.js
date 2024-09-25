n.d(t, {
    EW: function () {
        return R;
    },
    H4: function () {
        return A;
    },
    kk: function () {
        return v;
    },
    un: function () {
        return g;
    },
    wE: function () {
        return S;
    },
    wH: function () {
        return C;
    }
});
var r = n(47120);
var i = n(442837),
    a = n(704215),
    o = n(561746),
    s = n(675478),
    l = n(581883),
    u = n(626135),
    c = n(915486),
    d = n(261376),
    _ = n(883904),
    E = n(68985),
    f = n(952193),
    h = n(211644),
    p = n(57207),
    m = n(644916),
    I = n(921944),
    T = n(981631);
function g(e) {
    var t;
    if ((0, p.B)(e)) return !0;
    let n = null === (t = l.Z.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
    return null != n && (0, c.jl)(n, e);
}
function S(e) {
    return (0, i.e7)([l.Z], () => g(e));
}
function A(e) {
    var t, n;
    if ((0, p.B)(e)) return !0;
    let r = null === (n = l.Z.settings.userContent) || void 0 === n ? void 0 : null === (t = n.recurringDismissibleContentStates[e]) || void 0 === t ? void 0 : t.lastDismissedVersion,
        i = (0, m.t)(e);
    return null != r && r >= i;
}
function v(e, t, n) {
    if (!((0, h.cI)(e) || E.Z.hasUserHitDCCap(e) || b(e)) && !n)
        (0, h.f0)({
            content: e,
            groupName: null == t ? void 0 : t.groupName,
            onAdded: () => {
                var n;
                let [r, i] = (0, h.Aq)();
                (0, _.cm)(e),
                    u.default.track(T.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                        type: a.z[e],
                        content_count: r,
                        fatigable_content_count: i,
                        group_name: null == t ? void 0 : t.groupName,
                        bypass_fatigue: d.O.has(e),
                        guild_id: null == t ? void 0 : t.guildId,
                        version: null == t ? void 0 : t.version
                    }),
                    null == t || null === (n = t.onShown) || void 0 === n || n.call(t);
            }
        });
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((0, h.cI)(e) || t.forceTrack) && y(e, t), (0, _.Vr)(e);
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !E.Z.hasUserHitDCCap();
    (0, h.gE)(
        {
            content: e,
            groupName: null == t ? void 0 : t.groupName
        },
        n
    );
}
async function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    N(e, t), await (0, s.nm)(e), O(e, t);
}
async function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    N(e, n), await (0, s.Bn)(e, t), O(e, n);
}
function y(e, t) {
    var n;
    let [r] = (0, h.Aq)(),
        i = E.Z.getRenderedAtTimestamp(e),
        o = new Date(),
        s = null == i ? null : o.getTime() - i;
    u.default.track(T.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
        type: a.z[e],
        action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : I.L.UNKNOWN,
        content_count: r,
        group_name: null == t ? void 0 : t.groupName,
        bypass_fatigue: d.O.has(e),
        guild_id: null == t ? void 0 : t.guildId,
        shown_duration: s,
        version: null == t ? void 0 : t.version
    });
}
function b(e) {
    let t = f.$.has(e),
        { enabled: n } = o.Z.getCurrentConfig({ location: 'isUserSubjectToDCFHoldout' }, { autoTrackExposure: !t });
    return n && !t;
}
