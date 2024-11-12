n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(833858),
    i = n(981631),
    a = n(388032);
function s(e) {
    switch (e.type) {
        case i.IIU.STREAMING:
            let t = null != e.details && '' !== e.details ? e.details : e.name;
            return null != t ? a.intl.formatToPlainString(a.t['0wJXSk'], { name: t }) : null;
        case i.IIU.LISTENING:
            let n = null != e.details && '' !== e.details ? e.details : e.name;
            return null != n ? a.intl.formatToPlainString(a.t.Vnuxub, { name: n }) : null;
        case i.IIU.WATCHING:
            let s = null != e.details && '' !== e.details ? e.details : e.name;
            return null != s ? a.intl.formatToPlainString(a.t.pW3Ip6, { name: s }) : null;
        case i.IIU.COMPETING:
            return null != e.name ? a.intl.formatToPlainString(a.t.QQ2wVF, { name: e.name }) : null;
        case i.IIU.HANG_STATUS:
            return (0, r.O8)(e);
        case i.IIU.PLAYING:
        default:
            return null != e.name ? a.intl.formatToPlainString(a.t.lFApm5, { game: e.name }) : null;
    }
}
