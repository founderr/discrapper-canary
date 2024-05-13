"use strict";
n.r(t), n.d(t, {
  ROLE_FIELD_NAME: function() {
    return l
  },
  computeProductChanges: function() {
    return a
  },
  describeProductChangeValidation: function() {
    return o
  },
  describeUploadProgressError: function() {
    return u
  },
  getGuildProductListingUrl: function() {
    return d
  }
});
var r = n("881052");
n("496675");
var i = n("981631"),
  s = n("689938");
let l = "_role";

function u(e) {
  if (!(e >= 0)) switch (-e) {
    case i.AbortCodes.ENTITY_TOO_LARGE:
      return s.default.Messages.UPLOAD_ERROR_TOO_LARGE;
    case i.AbortCodes.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
      return s.default.Messages.GUILD_PRODUCT_ERROR_NO_ARCHIVES;
    case 1:
      return s.default.Messages.ERROR_GENERIC_TITLE;
    default:
      return s.default.Messages.GUILD_PRODUCT_ERROR_OTHER_CODE.format({
        code: -e
      })
  }
}

function o(e) {
  let {
    newRoleParams: t
  } = e;
  if (null != t && "" === t.name.trim()) {
    var n, i;
    return n = l, i = s.default.Messages.GUILD_PRODUCT_ERROR_EMPTY_ROLE_NAME, new r.APIError({
      status: 400,
      body: {
        message: "Invalid form body",
        errors: {
          [n]: {
            _errors: [{
              code: "",
              message: i
            }]
          }
        }
      }
    })
  }
}

function a(e) {
  var t;
  let {
    guildProductListing: n,
    name: r,
    priceTier: i,
    description: s,
    image: l,
    imageName: u,
    isImageChanged: o,
    newRoleParams: a,
    hasUnsavedAttachmentChanges: d
  } = e, c = {};
  (null == n ? void 0 : n.name) !== r && "" !== r.trim() && (c.name = r), (null !== (t = null == n ? void 0 : n.description) && void 0 !== t ? t : "") !== s && (c.description = s), (null == n ? void 0 : n.price_tier) !== i && null != i && (c.priceTier = i), null != a && "" !== a.name.trim() ? c.createNewRole = !0 : null === a && (c.unlinkRole = !0), l.startsWith("data:") && (o || null == n && (Object.keys(c).length > 0 || d)) && (c.image = l, c.imageName = u);
  let f = Object.keys(c).length > 0 || d;
  return {
    changes: c,
    hasUnsavedChanges: f,
    canSaveForDraft: f,
    canSaveForPublished: f,
    canPublishOrUnpublish: !(null == n || f)
  }
}

function d(e, t) {
  return "".concat(location.protocol, "//").concat(location.host).concat(i.Routes.GUILD_PRODUCT(e, t))
}