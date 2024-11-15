n.d(t, {
    EW: function () {
        return A;
    },
    H4: function () {
        return I;
    },
    kk: function () {
        return S;
    },
    un: function () {
        return v;
    },
    wE: function () {
        return b;
    },
    wH: function () {
        return N;
    }
}),
    n(47120);
var r = n(442837),
    i = n(704215),
    a = n(561746),
    s = n(675478),
    o = n(581883),
    l = n(626135),
    u = n(915486),
    c = n(261376),
    d = n(883904),
    f = n(68985),
    _ = n(952193),
    p = n(211644),
    h = n(57207),
    m = n(644916),
    g = n(921944),
    E = n(981631);
function v(e) {
    var t;
    if ((0, h.B)(e)) return !0;
    let n = null === (t = o.Z.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
    return null != n && (0, u.jl)(n, e);
}
function b(e) {
    return (0, r.e7)([o.Z], () => v(e));
}
function I(e) {
    var t, n;
    if ((0, h.B)(e)) return !0;
    let r = null === (n = o.Z.settings.userContent) || void 0 === n ? void 0 : null === (t = n.recurringDismissibleContentStates[e]) || void 0 === t ? void 0 : t.lastDismissedVersion,
        i = (0, m.t)(e);
    return null != r && r >= i;
}
function S(e, t, n) {
    if (
        !(
            (0, p.cI)(e) ||
            f.Z.hasUserHitDCCap(e) ||
            (function (e) {
                let t = _.$.has(e),
                    { enabled: n } = a.Z.getCurrentConfig({ location: 'isUserSubjectToDCFHoldout' }, { autoTrackExposure: !t });
                return n && !t;
            })(e)
        ) &&
        !n
    )
        (0, p.f0)({
            content: e,
            groupName: null == t ? void 0 : t.groupName,
            onAdded: () => {
                var n;
                let [r, a] = (0, p.Aq)();
                (0, d.cm)(e),
                    l.default.track(E.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                        type: i.z[e],
                        content_count: r,
                        fatigable_content_count: a,
                        group_name: null == t ? void 0 : t.groupName,
                        bypass_fatigue: c.O.has(e),
                        guild_id: null == t ? void 0 : t.guildId,
                        version: null == t ? void 0 : t.version
                    }),
                    null == t || null === (n = t.onShown) || void 0 === n || n.call(t);
            }
        });
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((0, p.cI)(e) || t.forceTrack) &&
        (function (e, t) {
            var n;
            let [r] = (0, p.Aq)(),
                a = f.Z.getRenderedAtTimestamp(e),
                s = new Date(),
                o = null == a ? null : s.getTime() - a;
            l.default.track(E.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: i.z[e],
                action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : g.L.UNKNOWN,
                content_count: r,
                group_name: null == t ? void 0 : t.groupName,
                bypass_fatigue: c.O.has(e),
                guild_id: null == t ? void 0 : t.guildId,
                shown_duration: o,
                version: null == t ? void 0 : t.version
            });
        })(e, t),
        (0, d.Vr)(e);
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !f.Z.hasUserHitDCCap();
    (0, p.gE)(
        {
            content: e,
            groupName: null == t ? void 0 : t.groupName
        },
        n
    );
}
async function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    T(e, t), await (0, s.nm)(e), y(e, t);
}
async function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    T(e, n), await (0, s.Bn)(e, t), y(e, n);
}
