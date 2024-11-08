t.d(n, {
    NB: function () {
        return o;
    },
    ar: function () {
        return c;
    },
    fG: function () {
        return s;
    },
    kg: function () {
        return u;
    },
    pM: function () {
        return a;
    }
});
var i = t(881052);
t(496675);
var r = t(981631),
    l = t(388032);
let o = '_role';
function u(e) {
    if (!(e >= 0))
        switch (-e) {
            case r.evJ.ENTITY_TOO_LARGE:
                return l.intl.string(l.t.YbdEFB);
            case r.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
                return l.intl.string(l.t.ZaXBoK);
            case 1:
                return l.intl.string(l.t.R0RpRU);
            default:
                return l.intl.formatToPlainString(l.t.cYwlp6, { code: -e });
        }
}
function a(e) {
    let { newRoleParams: n } = e;
    if (null != n && '' === n.name.trim()) {
        var t, r;
        return (
            (t = o),
            (r = l.intl.string(l.t['V0B/k5'])),
            new i.Hx({
                status: 400,
                body: {
                    message: 'Invalid form body',
                    errors: {
                        [t]: {
                            _errors: [
                                {
                                    code: '',
                                    message: r
                                }
                            ]
                        }
                    }
                }
            })
        );
    }
}
function s(e) {
    var n;
    let { guildProductListing: t, name: i, priceTier: r, description: l, image: o, imageName: u, isImageChanged: a, newRoleParams: s, hasUnsavedAttachmentChanges: c } = e,
        d = {};
    (null == t ? void 0 : t.name) !== i && '' !== i.trim() && (d.name = i), (null !== (n = null == t ? void 0 : t.description) && void 0 !== n ? n : '') !== l && (d.description = l), (null == t ? void 0 : t.price_tier) !== r && null != r && (d.priceTier = r), null != s && '' !== s.name.trim() ? (d.createNewRole = !0) : null === s && (d.unlinkRole = !0), o.startsWith('data:') && (a || (null == t && (Object.keys(d).length > 0 || c))) && ((d.image = o), (d.imageName = u));
    let f = Object.keys(d).length > 0 || c;
    return {
        changes: d,
        hasUnsavedChanges: f,
        canSaveForDraft: f,
        canSaveForPublished: f,
        canPublishOrUnpublish: !(null == t || f)
    };
}
function c(e, n) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(r.Z5c.GUILD_PRODUCT(e, n));
}
