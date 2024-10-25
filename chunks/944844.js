n.d(e, {
    t: function () {
        return _;
    }
}),
    n(411104);
var a = n(192379),
    r = n(512722),
    o = n.n(r),
    s = n(478677),
    c = n(457330),
    i = n(275759),
    l = n(489863),
    u = n(497350);
async function d(t, e, n) {
    var a, r, l, d;
    let _ = (0, u.B)(t);
    if (null == _) throw (await f(n, 1, 'authorize'), Error('Unsupported client_id for two way link'));
    let p = null;
    try {
        let { body: t } = await c.Z.authorize(_, {
            twoWayLinkType: s.g.DEVICE_CODE,
            userCode: n
        });
        p = t.url;
    } catch (t) {
        throw (await f(n, null !== (r = null == t ? void 0 : null === (a = t.body) || void 0 === a ? void 0 : a.code) && void 0 !== r ? r : 0, 'authorize'), Error('error during two way authorize'));
    }
    let C = null;
    try {
        o()(null != p, 'No URL in authorize response');
        let { state: t } = (0, i.xp)(p);
        o()(null != t, 'Authorize URL state query parameter must be present'), (C = t);
    } catch (t) {
        throw (await f(n, 2, 'authorize'), Error('error parsing callback params'));
    }
    try {
        await c.Z.callback(_, {
            code: e,
            state: C
        });
    } catch (t) {
        throw (await f(n, null !== (d = null == t ? void 0 : null === (l = t.body) || void 0 === l ? void 0 : l.code) && void 0 !== d ? d : 0, 'callback'), Error('error during two way callback'));
    }
}
async function f(t, e, n) {
    try {
        await (0, l.i2)(t, e, n);
    } catch (t) {}
}
function _(t, e, n) {
    return a.useCallback(
        async (a, r) => {
            if (!r) {
                try {
                    await (0, l.tR)(a.userCode, 'denied');
                } catch (t) {}
                t();
                return;
            }
            if (null == a.twoWayLinkCode)
                try {
                    await (0, l.tR)(a.userCode, 'granted'), n(a);
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
