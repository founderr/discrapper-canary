n.d(t, {
    Z: function () {
        return r;
    }
});
var a = n(192379),
    o = n(252618),
    s = n(358085),
    l = n(689938);
function r() {
    return (
        a.useEffect(() => {
            !s.isPlatformEmbedded &&
                (0, o.EM)({
                    messages: [l.Z.Messages.GO_LIVE_HEY, l.Z.Messages.GO_LIVE_LOOK, l.Z.Messages.GO_LIVE_LISTEN],
                    interval: 600,
                    count: 20,
                    onlyWhenBlurred: !0
                });
        }, []),
        null
    );
}
