n.d(e, {
    t: function () {
        return p;
    }
}),
    n(411104);
var a = n(192379),
    r = n(512722),
    o = n.n(r),
    s = n(478677),
    i = n(457330),
    l = n(275759),
    c = n(489863),
    u = n(497350);
async function d(t, e, n) {
    var a, r, c, d;
    let p = (0, u.B)(t);
    if (null == p) throw (await f(n, 1, 'authorize'), Error('Unsupported client_id for two way link'));
    let _ = null;
    try {
        let { body: t } = await i.Z.authorize(p, {
            twoWayLinkType: s.g.DEVICE_CODE,
            userCode: n
        });
        _ = t.url;
    } catch (t) {
        throw (await f(n, null !== (r = null == t ? void 0 : null === (a = t.body) || void 0 === a ? void 0 : a.code) && void 0 !== r ? r : 0, 'authorize'), Error('error during two way authorize'));
    }
    let E = null;
    try {
        o()(null != _, 'No URL in authorize response');
        let { state: t } = (0, l.xp)(_);
        o()(null != t, 'Authorize URL state query parameter must be present'), (E = t);
    } catch (t) {
        throw (await f(n, 2, 'authorize'), Error('error parsing callback params'));
    }
    try {
        await i.Z.callback(p, {
            code: e,
            state: E
        });
    } catch (t) {
        throw (await f(n, null !== (d = null == t ? void 0 : null === (c = t.body) || void 0 === c ? void 0 : c.code) && void 0 !== d ? d : 0, 'callback'), Error('error during two way callback'));
    }
}
async function f(t, e, n) {
    try {
        await (0, c.i2)(t, e, n);
    } catch (t) {}
}
function p(t, e, n, r) {
    return a.useCallback(
        async (a) => {
            if (!a) {
                try {
                    await (0, c.tR)(t.userCode, 'denied');
                } catch (t) {}
                e();
                return;
            }
            if (null == t.twoWayLinkCode)
                try {
                    await (0, c.tR)(t.userCode, 'granted'), r(t);
                } catch (e) {
                    n(t);
                }
            else
                try {
                    await d(t.clientId, t.twoWayLinkCode, t.userCode), r(t);
                } catch (e) {
                    n(t);
                }
        },
        [t, e, n, r]
    );
}
