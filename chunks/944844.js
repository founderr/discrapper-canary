n.d(e, {
    t: function () {
        return p;
    }
}),
    n(411104);
var a = n(192379),
    r = n(512722),
    o = n.n(r),
    i = n(478677),
    l = n(457330),
    s = n(275759),
    c = n(489863),
    u = n(497350);
async function d(t, e, n) {
    var a, r, c, d;
    let p = (0, u.B)(t);
    if (null == p) throw (await f(n, 1, 'authorize'), Error('Unsupported client_id for two way link'));
    let h = null;
    try {
        let { body: t } = await l.Z.authorize(p, {
            twoWayLinkType: i.g.DEVICE_CODE,
            userCode: n
        });
        h = t.url;
    } catch (t) {
        throw (await f(n, null !== (r = null == t ? void 0 : null === (a = t.body) || void 0 === a ? void 0 : a.code) && void 0 !== r ? r : 0, 'authorize'), Error('error during two way authorize'));
    }
    let x = null;
    try {
        o()(null != h, 'No URL in authorize response');
        let { state: t } = (0, s.xp)(h);
        o()(null != t, 'Authorize URL state query parameter must be present'), (x = t);
    } catch (t) {
        throw (await f(n, 2, 'authorize'), Error('error parsing callback params'));
    }
    try {
        await l.Z.callback(p, {
            code: e,
            state: x
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
function p(t, e, n) {
    return a.useCallback(
        async (a, r) => {
            if (!r) {
                try {
                    await (0, c.tR)(a.userCode, 'denied');
                } catch (t) {}
                t();
                return;
            }
            if (null == a.twoWayLinkCode)
                try {
                    await (0, c.tR)(a.userCode, 'granted'), n(a);
                } catch (t) {
                    e(a);
                }
            else
                try {
                    await d(a.clientId, a.twoWayLinkCode, a.userCode), n(a);
                } catch (t) {
                    e(a);
                }
        },
        [t, e, n]
    );
}
