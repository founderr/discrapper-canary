n.d(t, {
    t: function () {
        return c;
    }
});
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(246364);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = {
        version: '',
        description: '',
        formFields: []
    },
    d = {};
function _(e) {
    let { form: t, guildId: n } = e;
    if (null == t) d[n] = c;
    else {
        var r;
        let e = null !== (r = d[n]) && void 0 !== r ? r : c;
        d[n] = {
            ...e,
            ...t
        };
    }
}
function E(e) {
    var t;
    let { guildId: n } = e;
    d[n] = null !== (t = d[n]) && void 0 !== t ? t : c;
}
function f(e) {
    let { invite: t } = e,
        { member_verification_form: n } = t,
        { guild: r } = t;
    if (null != r && null != n) {
        var i;
        return (
            (d[r.id] = {
                version: n.version,
                description: null !== (i = n.description) && void 0 !== i ? i : '',
                formFields: n.form_fields,
                guild: r
            }),
            !0
        );
    }
    return !1;
}
function h(e) {
    let { guild: t } = e;
    delete d[null == t ? void 0 : t.id];
}
class p extends (r = o.ZP.Store) {
    get(e) {
        if (null != e) return d[e];
    }
    getRulesPrompt(e) {
        var t;
        return a().find(null === (t = d[e]) || void 0 === t ? void 0 : t.formFields, l.J);
    }
}
u(p, 'displayName', 'MemberVerificationFormStore'),
    (t.Z = new p(s.Z, {
        INVITE_ACCEPT_SUCCESS: f,
        MEMBER_VERIFICATION_FORM_UPDATE: _,
        MEMBER_VERIFICATION_FORM_FETCH_FAIL: E,
        GUILD_DELETE: h
    }));
