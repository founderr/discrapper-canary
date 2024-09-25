n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(668781),
    o = n(881052),
    s = n(824389),
    l = n(179838),
    u = n(689938);
function c(e, t) {
    let [n, r] = i.useState(!1);
    return {
        isLoading: n,
        downloadAttachment: i.useCallback(
            async (n) => {
                if (null != e && null != t) {
                    r(!0);
                    try {
                        let { url: r } = await s.gs({
                            guildId: e,
                            productId: t,
                            attachmentId: n
                        });
                        await l.L(r);
                    } catch (t) {
                        let e = t instanceof o.Hx ? t.getAnyErrorMessage() : void 0;
                        a.Z.show({
                            title: u.Z.Messages.ERROR_GENERIC_TITLE,
                            body: null != e ? e : u.Z.Messages.GENERIC_ERROR_BODY
                        });
                    } finally {
                        r(!1);
                    }
                }
            },
            [e, t]
        )
    };
}
