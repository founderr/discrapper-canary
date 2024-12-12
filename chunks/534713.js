r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(69580);
function a(e) {
    var n, r, a, s;
    let o = null == e ? void 0 : e.get('client_id'),
        l = null == e ? void 0 : null === (n = e.get('scope')) || void 0 === n ? void 0 : n.split(' '),
        u = null == e ? void 0 : e.get('state'),
        c = null == e ? void 0 : e.get('redirect_uri'),
        d = null == e ? void 0 : e.get('response_type'),
        f = null !== (r = null == e ? void 0 : e.get('nonce')) && void 0 !== r ? r : void 0,
        _ = null !== (a = null == e ? void 0 : e.get('code_challenge')) && void 0 !== a ? a : void 0,
        h = null !== (s = null == e ? void 0 : e.get('code_challenge_method')) && void 0 !== s ? s : void 0;
    return (
        null == o ||
        null == l ||
        null == c ||
        null == d ||
        ((0, i.openOAuth2Modal)({
            clientId: o,
            scopes: l,
            redirectUri: c,
            state: null != u ? u : void 0,
            responseType: d,
            nonce: f,
            codeChallenge: _,
            codeChallengeMethod: h
        }),
        !0)
    );
}
