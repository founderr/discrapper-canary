n.d(e, {
    c: function () {
        return i;
    }
}),
    n(47120);
var a = n(192379),
    r = n(489863),
    o = n(828878),
    s = n(689938);
function i(t, e, n) {
    let [i, l] = a.useState(!1),
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
                u(429 === (a = null == t ? void 0 : t.status) ? s.Z.Messages.ACTIVATE_DEVICE_ERROR_RATE_LIMIT : 404 === a || 400 === a ? s.Z.Messages.ACTIVATE_DEVICE_ERROR_BAD_CODE : s.Z.Messages.ACTIVATE_DEVICE_ERROR_UNKNOWN), l(!1), (null == t ? void 0 : t.status) === 401 && n();
            }
        }, [t, e, n]);
    return (
        a.useEffect(() => {
            t.length === o.A.USER_CODE_LENGTH ? d() : u(null);
        }, [t, d]),
        {
            manualSubmit: d,
            error: c,
            submitting: i
        }
    );
}
