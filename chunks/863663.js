t.d(n, {
    NB: function () {
        return o;
    },
    ar: function () {
        return c;
    },
    fG: function () {
        return a;
    },
    kg: function () {
        return u;
    },
    pM: function () {
        return s;
    }
});
var r = t(881052);
t(496675);
var i = t(981631),
    l = t(689938);
let o = '_role';
function u(e) {
    if (!(e >= 0))
        switch (-e) {
            case i.evJ.ENTITY_TOO_LARGE:
                return l.Z.Messages.UPLOAD_ERROR_TOO_LARGE;
            case i.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
                return l.Z.Messages.GUILD_PRODUCT_ERROR_NO_ARCHIVES;
            case 1:
                return l.Z.Messages.ERROR_GENERIC_TITLE;
            default:
                return l.Z.Messages.GUILD_PRODUCT_ERROR_OTHER_CODE.format({ code: -e });
        }
}
function s(e) {
    let { newRoleParams: n } = e;
    if (null != n && '' === n.name.trim()) {
        var t, i;
        return (
            (t = o),
            (i = l.Z.Messages.GUILD_PRODUCT_ERROR_EMPTY_ROLE_NAME),
            new r.Hx({
                status: 400,
                body: {
                    message: 'Invalid form body',
                    errors: {
                        [t]: {
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
    var n;
    let { guildProductListing: t, name: r, priceTier: i, description: l, image: o, imageName: u, isImageChanged: s, newRoleParams: a, hasUnsavedAttachmentChanges: c } = e,
        d = {};
    (null == t ? void 0 : t.name) !== r && '' !== r.trim() && (d.name = r), (null !== (n = null == t ? void 0 : t.description) && void 0 !== n ? n : '') !== l && (d.description = l), (null == t ? void 0 : t.price_tier) !== i && null != i && (d.priceTier = i), null != a && '' !== a.name.trim() ? (d.createNewRole = !0) : null === a && (d.unlinkRole = !0), o.startsWith('data:') && (s || (null == t && (Object.keys(d).length > 0 || c))) && ((d.image = o), (d.imageName = u));
    let _ = Object.keys(d).length > 0 || c;
    return {
        changes: d,
        hasUnsavedChanges: _,
        canSaveForDraft: _,
        canSaveForPublished: _,
        canPublishOrUnpublish: !(null == t || _)
    };
}
function c(e, n) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(i.Z5c.GUILD_PRODUCT(e, n));
}
