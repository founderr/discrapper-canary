let r, i, a;
n.d(t, {
    At: function () {
        return N;
    },
    DB: function () {
        return y;
    },
    DR: function () {
        return O;
    },
    Wf: function () {
        return C;
    },
    XU: function () {
        return g;
    },
    dL: function () {
        return A;
    },
    eH: function () {
        return L;
    },
    m1: function () {
        return R;
    },
    op: function () {
        return b;
    },
    s1: function () {
        return v;
    },
    uL: function () {
        return T;
    },
    uv: function () {
        return S;
    }
});
var o = n(653041);
var s = n(757143);
var l = n(539528),
    u = n(710845),
    c = n(585483),
    d = n(143816),
    _ = n(981631);
let E = new u.Z('Routing/Utils'),
    f = [_.E07.DEVELOPER_PORTAL];
r = __OVERLAY__ ? (0, l.PP)() : (0, l.lX)();
let h = !1,
    p = r.listen((e, t) => {
        'REPLACE' !== t && ((h = !0), p());
    });
function m() {
    return !c.S.hasSubscribers(_.CkL.MODAL_CLOSE) && (n(574254).Z.close(), !0);
}
function I(e, t) {
    return !!('string' == typeof e && f.some((t) => e.startsWith(t))) && (E.log(''.concat(t, ' - route to external path ').concat(e)), window.dispatchEvent(new Event('beforeunload')), window.location[t](e), !0);
}
function T(e, t) {
    if (I(e, 'assign')) return;
    E.log('transitionTo - Transitioning to '.concat(e));
    let n = null == t ? void 0 : t.source;
    null == t || delete t.source;
    let o = null == t ? void 0 : t.sourceLocationStack;
    null == t || delete t.sourceLocationStack,
        null == t
            ? r.push(e)
            : r.push({
                  pathname: e,
                  ...t
              }),
        (i = n),
        (a = o);
}
function g(e, t, n, r) {
    E.log(
        'transitionToGuild - Transitioning to '.concat(
            JSON.stringify({
                guildId: e,
                channelId: t,
                messageId: n
            })
        )
    ),
        T(_.Z5c.CHANNEL(e, t, n), r);
}
function S() {
    return null != i && d.H.has(i);
}
function A(e, t, n) {
    !I(e, 'replace') && (E.log('Replacing route with '.concat(e)), 'string' == typeof e ? r.replace(e, t) : r.replace(e), (i = n));
}
function v() {
    return r;
}
function N() {
    return i;
}
function O() {
    return a;
}
function R(e) {
    if (null == e) {
        var t;
        e = null !== (t = r.location.pathname) && void 0 !== t ? t : '';
    }
    return !e.startsWith(_.Z5c.HANDOFF) && !0;
}
function C(e) {
    if (null == e) {
        var t;
        e = null !== (t = r.location.pathname) && void 0 !== t ? t : '';
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
    return e;
}
function y() {
    return h;
}
function b() {
    m() && ((i = null), r.goBack());
}
function L() {
    m() && ((i = null), r.goForward());
}
