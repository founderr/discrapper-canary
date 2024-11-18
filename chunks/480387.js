n.d(e, {
    HJ: function () {
        return _;
    },
    Zd: function () {
        return p;
    },
    yD: function () {
        return E;
    }
});
var l = n(213919),
    r = n(544891),
    i = n(570140),
    a = n(893776),
    u = n(710845),
    o = n(314897),
    s = n(726745),
    c = n(981631);
let d = new u.Z('MultiAccountActionCreators');
function _() {
    let t = o.default.getId();
    s.Z.getUsers().forEach(async (e) => {
        let n,
            { id: a } = e,
            u = l.getToken(a);
        if (null == u || '' === u) {
            i.Z.dispatch({
                type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE',
                userId: a
            });
            return;
        }
        i.Z.dispatch({
            type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST',
            userId: a
        });
        try {
            n = await r.tn.get({
                url: c.ANM.ME,
                headers: { authorization: u },
                retries: 3,
                rejectWithError: !1
            });
        } catch (e) {
            let t = (null == e ? void 0 : e.status) === 401 || (null == e ? void 0 : e.status) === 403;
            i.Z.dispatch({
                type: t ? 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE' : 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS',
                userId: a
            });
            return;
        }
        i.Z.dispatch({
            type: t === a ? 'CURRENT_USER_UPDATE' : 'USER_UPDATE',
            user: n.body
        }),
            i.Z.dispatch({
                type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS',
                userId: a
            });
    });
}
function E(t, e) {
    d.log('Switching account to '.concat(t), { switchSynchronously: e });
    let n = l.getToken(t);
    return null == n
        ? (d.log('Switching accounts failed because there was no token'),
          i.Z.dispatch({
              type: 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE',
              userId: t
          }),
          Promise.resolve())
        : a.Z.switchAccountToken(n, e);
}
function p(t) {
    i.Z.dispatch({
        type: 'MULTI_ACCOUNT_REMOVE_ACCOUNT',
        userId: t
    });
}
