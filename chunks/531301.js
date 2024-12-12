r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(192379),
    a = r(442837),
    s = r(544891),
    o = r(570140),
    l = r(722086),
    u = r(981631);
function c(e) {
    let n = (0, a.e7)([l.Z], () => l.Z.getNote(e));
    return (
        i.useEffect(() => {
            null == n && d(e);
        }, [n, e]),
        null != n
            ? n
            : {
                  loading: !0,
                  note: null
              }
    );
}
async function d(e) {
    o.Z.dispatch({
        type: 'USER_NOTE_LOAD_START',
        userId: e
    });
    try {
        let { body: n } = await s.tn.get({
            url: u.ANM.NOTE(e),
            oldFormErrors: !0,
            rejectWithError: !0
        });
        o.Z.dispatch({
            type: 'USER_NOTE_LOADED',
            userId: e,
            note: n
        });
    } catch (n) {
        o.Z.dispatch({
            type: 'USER_NOTE_LOADED',
            userId: e
        });
    }
}
