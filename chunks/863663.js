n.d(t, {
    NB: function () {
        return o;
    },
    ar: function () {
        return d;
    },
    fG: function () {
        return c;
    },
    kg: function () {
        return s;
    },
    pM: function () {
        return u;
    }
});
var r = n(881052);
n(496675);
var i = n(981631),
    a = n(689938);
let o = '_role';
function s(e) {
    if (!(e >= 0))
        switch (-e) {
            case i.evJ.ENTITY_TOO_LARGE:
                return a.Z.Messages.UPLOAD_ERROR_TOO_LARGE;
            case i.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
                return a.Z.Messages.GUILD_PRODUCT_ERROR_NO_ARCHIVES;
            case 1:
                return a.Z.Messages.ERROR_GENERIC_TITLE;
            default:
                return a.Z.Messages.GUILD_PRODUCT_ERROR_OTHER_CODE.format({ code: -e });
        }
}
function l(e, t) {
    let n = {
        message: 'Invalid form body',
        errors: {
            [e]: {
                _errors: [
                    {
                        code: '',
                        message: t
                    }
                ]
            }
        }
    };
    return new r.Hx({
        status: 400,
        body: n
    });
}
function u(e) {
    let { newRoleParams: t } = e;
    if (null != t && '' === t.name.trim()) return l(o, a.Z.Messages.GUILD_PRODUCT_ERROR_EMPTY_ROLE_NAME);
}
function c(e) {
    var t;
    let { guildProductListing: n, name: r, priceTier: i, description: a, image: o, imageName: s, isImageChanged: l, newRoleParams: u, hasUnsavedAttachmentChanges: c } = e,
        d = {};
    (null == n ? void 0 : n.name) !== r && '' !== r.trim() && (d.name = r), (null !== (t = null == n ? void 0 : n.description) && void 0 !== t ? t : '') !== a && (d.description = a), (null == n ? void 0 : n.price_tier) !== i && null != i && (d.priceTier = i), null != u && '' !== u.name.trim() ? (d.createNewRole = !0) : null === u && (d.unlinkRole = !0), o.startsWith('data:') && (l || (null == n && (Object.keys(d).length > 0 || c))) && ((d.image = o), (d.imageName = s));
    let _ = Object.keys(d).length > 0 || c;
    return {
        changes: d,
        hasUnsavedChanges: _,
        canSaveForDraft: _,
        canSaveForPublished: _,
        canPublishOrUnpublish: !(null == n || _)
    };
}
function d(e, t) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(i.Z5c.GUILD_PRODUCT(e, t));
}
