n.d(t, {
    NB: function () {
        return u;
    },
    ar: function () {
        return c;
    },
    fG: function () {
        return a;
    },
    kg: function () {
        return l;
    },
    pM: function () {
        return s;
    }
});
var r = n(881052);
n(496675);
var i = n(981631),
    o = n(689938);
let u = '_role';
function l(e) {
    if (!(e >= 0))
        switch (-e) {
            case i.evJ.ENTITY_TOO_LARGE:
                return o.Z.Messages.UPLOAD_ERROR_TOO_LARGE;
            case i.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
                return o.Z.Messages.GUILD_PRODUCT_ERROR_NO_ARCHIVES;
            case 1:
                return o.Z.Messages.ERROR_GENERIC_TITLE;
            default:
                return o.Z.Messages.GUILD_PRODUCT_ERROR_OTHER_CODE.format({ code: -e });
        }
}
function s(e) {
    let { newRoleParams: t } = e;
    if (null != t && '' === t.name.trim()) {
        var n, i;
        return (
            (n = u),
            (i = o.Z.Messages.GUILD_PRODUCT_ERROR_EMPTY_ROLE_NAME),
            new r.Hx({
                status: 400,
                body: {
                    message: 'Invalid form body',
                    errors: {
                        [n]: {
                            _errors: [
                                {
                                    code: '',
                                    message: i
                                }
                            ]
                        }
                    }
                }
            })
        );
    }
}
function a(e) {
    var t;
    let { guildProductListing: n, name: r, priceTier: i, description: o, image: u, imageName: l, isImageChanged: s, newRoleParams: a, hasUnsavedAttachmentChanges: c } = e,
        d = {};
    (null == n ? void 0 : n.name) !== r && '' !== r.trim() && (d.name = r), (null !== (t = null == n ? void 0 : n.description) && void 0 !== t ? t : '') !== o && (d.description = o), (null == n ? void 0 : n.price_tier) !== i && null != i && (d.priceTier = i), null != a && '' !== a.name.trim() ? (d.createNewRole = !0) : null === a && (d.unlinkRole = !0), u.startsWith('data:') && (s || (null == n && (Object.keys(d).length > 0 || c))) && ((d.image = u), (d.imageName = l));
    let _ = Object.keys(d).length > 0 || c;
    return {
        changes: d,
        hasUnsavedChanges: _,
        canSaveForDraft: _,
        canSaveForPublished: _,
        canPublishOrUnpublish: !(null == n || _)
    };
}
function c(e, t) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(i.Z5c.GUILD_PRODUCT(e, t));
}
