n.d(t, {
    V: function () {
        return p;
    }
});
var r = n(518263);
var i = n(970173);
var a = n(520712);
var o = n(268111);
var s = n(941497);
var l = n(32026);
var u = n(480839);
var c = n(744285);
var d = n(492257);
var _ = n(873817);
var E = n(710845),
    f = n(358085),
    h = n(998502);
function p() {
    if (f.isPlatformEmbedded) {
        let e;
        try {
            e = h.ZP.requireModule('discord_erlpack');
        } catch (t) {
            try {
                e = h.ZP.requireModule('erlpack');
            } catch (e) {}
        }
        if (null != e)
            return class {
                static canUse() {
                    return null != e;
                }
                pack(t) {
                    return e.pack(t).buffer;
                }
                unpack(t) {
                    t instanceof ArrayBuffer && (t = new Uint8Array(t));
                    try {
                        return e.unpack(t);
                    } catch (e) {
                        throw (
                            (new E.Z('GatewayEncodingErlpackEncoding').error('Error unpacking', {
                                erlpackUnpackError: e,
                                erlpackDataPreview: null != t ? Array.from(t.slice(0, 32)) : null,
                                erlpackDataLength: null != t ? t.length : null
                            }),
                            e)
                        );
                    }
                }
                getName() {
                    return 'etf';
                }
                wantsString() {
                    return !1;
                }
            };
    }
}
