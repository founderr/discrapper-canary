n.d(e, {
    c: function () {
        return s;
    }
}),
    n(47120);
var a = n(192379),
    r = n(489863),
    o = n(828878),
    i = n(388032);
function s(t, e, n) {
    let [s, l] = a.useState(!1),
        [c, u] = a.useState(null),
        d = a.useCallback(async () => {
            try {
                l(!0);
                let n = await (0, r.tV)(t);
                l(!1),
                    e({
                        userCode: t,
                        clientId: n.body.client_id,
                        scopes: n.body.scopes,
                        twoWayLinkCode: n.body.two_way_link_code
                    });
            } catch (t) {
                var a;
                u(429 === (a = null == t ? void 0 : t.status) ? i.intl.string(i.t.BPmZvr) : 404 === a || 400 === a ? i.intl.string(i.t.aWa1Pz) : i.intl.string(i.t.JNQRU1)), l(!1), (null == t ? void 0 : t.status) === 401 && n();
            }
        }, [t, e, n]);
    return (
        a.useEffect(() => {
            t.length === o.A.USER_CODE_LENGTH ? d() : u(null);
        }, [t, d]),
        {
            manualSubmit: d,
            error: c,
            submitting: s
        }
    );
}
