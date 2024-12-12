let i, a, s;
r.d(n, {
    At: function () {
        return A;
    },
    DB: function () {
        return O;
    },
    DR: function () {
        return N;
    },
    Wf: function () {
        return R;
    },
    XU: function () {
        return T;
    },
    dL: function () {
        return y;
    },
    eH: function () {
        return L;
    },
    m1: function () {
        return C;
    },
    op: function () {
        return D;
    },
    s1: function () {
        return S;
    },
    uL: function () {
        return I;
    },
    uv: function () {
        return b;
    }
});
var o = r(653041);
var l = r(757143);
var u = r(539528),
    c = r(710845),
    d = r(585483),
    f = r(143816),
    _ = r(981631);
let h = new c.Z('Routing/Utils'),
    p = [_.E07.DEVELOPER_PORTAL];
i = __OVERLAY__ ? (0, u.PP)() : (0, u.lX)();
let m = !1,
    g = i.listen((e, n) => {
        'REPLACE' !== n && ((m = !0), g());
    });
function E() {
    return !d.S.hasSubscribers(_.CkL.MODAL_CLOSE) && (r(574254).Z.close(), !0);
}
function v(e, n) {
    return !!('string' == typeof e && p.some((n) => e.startsWith(n))) && (h.log(''.concat(n, ' - route to external path ').concat(e)), window.dispatchEvent(new Event('beforeunload')), window.location[n](e), !0);
}
function I(e, n) {
    if (v(e, 'assign')) return;
    h.log('transitionTo - Transitioning to '.concat(e));
    let r = null == n ? void 0 : n.source;
    null == n || delete n.source;
    let o = null == n ? void 0 : n.sourceLocationStack;
    null == n || delete n.sourceLocationStack,
        null == n
            ? i.push(e)
            : i.push({
                  pathname: e,
                  ...n
              }),
        (a = r),
        (s = o);
}
function T(e, n, r, i) {
    h.log(
        'transitionToGuild - Transitioning to '.concat(
            JSON.stringify({
                guildId: e,
                channelId: n,
                messageId: r
            })
        )
    ),
        I(_.Z5c.CHANNEL(e, n, r), i);
}
function b() {
    return null != a && f.H.has(a);
}
function y(e, n, r) {
    !v(e, 'replace') && (h.log('Replacing route with '.concat(e)), 'string' == typeof e ? i.replace(e, n) : i.replace(e), (a = r));
}
function S() {
    return i;
}
function A() {
    return a;
}
function N() {
    return s;
}
function C(e) {
    if (null == e) {
        var n;
        e = null !== (n = i.location.pathname) && void 0 !== n ? n : '';
    }
    return !e.startsWith(_.Z5c.HANDOFF) && !0;
}
function R(e) {
    if (null == e) {
        var n;
        e = null !== (n = i.location.pathname) && void 0 !== n ? n : '';
    }
    if (e.startsWith(_.Z5c.LOGIN)) return _.Usc.LOGIN;
    if (e.startsWith(_.Z5c.REGISTER)) return _.Usc.REGISTER;
    if (e.startsWith(_.Z5c.INVITE(''))) return _.Usc.INVITE;
    else if (e.startsWith(_.Z5c.VERIFY)) return _.Usc.VERIFY;
    else if (e.startsWith(_.Z5c.DISABLE_EMAIL_NOTIFICATIONS)) return _.Usc.DISABLE_EMAIL_NOTIFICATIONS;
    else if (e.startsWith(_.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) return _.Usc.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
    else if (e.startsWith(_.Z5c.REJECT_IP)) return _.Usc.REJECT_IP;
    else if (e.startsWith(_.Z5c.REJECT_MFA)) return _.Usc.REJECT_MFA;
    else if (e.startsWith(_.Z5c.AUTHORIZE_IP)) return _.Usc.AUTHORIZE_IP;
    else if (e.startsWith(_.Z5c.AUTHORIZE_PAYMENT)) return _.Usc.AUTHORIZE_PAYMENT;
    else if (e.startsWith(_.Z5c.RESET)) return _.Usc.RESET;
    else if (e.startsWith(_.Z5c.REPORT)) return _.Usc.REPORT;
    else if (e.startsWith(_.Z5c.REPORT_SECOND_LOOK)) return _.Usc.REPORT_SECOND_LOOK;
    else if (e.startsWith(_.Z5c.ACCOUNT_REVERT(''))) return _.Usc.ACCOUNT_REVERT;
    return e;
}
function O() {
    return m;
}
function D() {
    E() && ((a = null), i.goBack());
}
function L() {
    E() && ((a = null), i.goForward());
}
