r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(833858),
    a = r(981631),
    s = r(388032);
function o(e) {
    switch (e.type) {
        case a.IIU.STREAMING:
            let n = null != e.details && '' !== e.details ? e.details : e.name;
            return null != n ? s.intl.formatToPlainString(s.t['0wJXSk'], { name: n }) : null;
        case a.IIU.LISTENING:
            let r = null != e.details && '' !== e.details ? e.details : e.name;
            return null != r ? s.intl.formatToPlainString(s.t.Vnuxub, { name: r }) : null;
        case a.IIU.WATCHING:
            let o = null != e.details && '' !== e.details ? e.details : e.name;
            return null != o ? s.intl.formatToPlainString(s.t.pW3Ip6, { name: o }) : null;
        case a.IIU.COMPETING:
            return null != e.name ? s.intl.formatToPlainString(s.t.QQ2wVF, { name: e.name }) : null;
        case a.IIU.HANG_STATUS:
            return (0, i.O8)(e);
        case a.IIU.PLAYING:
        default:
            return null != e.name ? s.intl.formatToPlainString(s.t.lFApm5, { game: e.name }) : null;
    }
}
