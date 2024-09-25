n.d(t, {
    Wt: function () {
        return f;
    },
    mc: function () {
        return h;
    },
    q$: function () {
        return p;
    }
});
var r = n(411104);
var i = n(789020);
var a = n(570140),
    o = n(566620),
    s = n(728345),
    l = n(812206),
    u = n(973616),
    c = n(630388),
    d = n(591759),
    _ = n(978085),
    E = n(981631);
async function f(e, t) {
    a.Z.dispatch({
        applicationId: e,
        type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_START'
    });
    try {
        if (!(await (0, o.W5)(e))) throw Error('Do not have access!');
        let n = l.Z.getApplication(e);
        null == n && (n = u.Z.createFromServer(await s.Z.fetchApplication(e)));
        let r = (0, c.yE)(n.flags, E.udG.EMBEDDED);
        if (r && (null == t || !d.Z.URL_REGEX.test(t))) throw Error('Invalid Origin URL for embedded application');
        return (
            !r && _.GR(n),
            a.Z.dispatch({
                type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS',
                applicationId: e,
                originURL: r ? t : null
            }),
            n
        );
    } catch (t) {
        return (
            a.Z.dispatch({
                type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL',
                applicationId: e,
                error: t.message
            }),
            null
        );
    }
}
function h() {
    a.Z.dispatch({ type: 'DEVELOPER_TEST_MODE_RESET' });
}
function p() {
    a.Z.dispatch({ type: 'DEVELOPER_TEST_MODE_RESET_ERROR' });
}
