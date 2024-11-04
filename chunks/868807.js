n.d(t, {
    a: function () {
        return m;
    }
}),
    n(47120);
var i = n(392711),
    l = n.n(i),
    a = n(442837),
    r = n(544891),
    s = n(570140),
    o = n(375954),
    c = n(306680),
    d = n(748902),
    u = n(981631);
let h = new Set(),
    p = null;
function m(e) {
    let { id: t } = e,
        {
            loaded: n,
            message: i,
            error: l
        } = (0, a.cj)(
            [d.Z, o.Z, c.ZP],
            () => {
                let e = c.ZP.lastMessageId(t),
                    n = d.Z.getMessageRequestPreview(t);
                if (null == n.message && null != e) {
                    let n = o.Z.getMessage(t, e);
                    if (null != n)
                        return {
                            loaded: !0,
                            error: !1,
                            message: n
                        };
                }
                return n;
            },
            [t]
        ),
        r = (0, a.e7)([d.Z], () => d.Z.shouldLoadMessageRequestPreview(t), [t]);
    return (
        !n &&
            null == i &&
            r &&
            (function (e) {
                h.add(e), null == p && (p = setTimeout(f, 0));
            })(t),
        {
            loaded: n,
            error: l,
            message: i
        }
    );
}
async function f() {
    try {
        for (; !l().isEmpty(h); ) await g();
    } finally {
        p = null;
    }
}
async function g() {
    let e = Array.from(h).slice(0, 25);
    try {
        let t = await r.tn.get({
            url: u.ANM.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
            query: { channel_ids: e }
        });
        s.Z.dispatch({
            type: 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS',
            requestedChannelIds: e,
            supplementalData: t.body
        });
    } catch (t) {
        s.Z.dispatch({
            type: 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR',
            requestedChannelIds: e
        });
    } finally {
        for (let t of e) h.delete(t);
    }
}
