"use strict";
t.r(A), t.d(A, {
  default: function() {
    return p
  }
}), t("411104"), t("47120");
var a = t("470079"),
  l = t("399606"),
  s = t("780384"),
  n = t("570140"),
  r = t("881052"),
  o = t("141795"),
  i = t("476326"),
  d = t("983544"),
  u = t("9874"),
  c = t("710845"),
  C = t("430824"),
  f = t("277985"),
  g = t("240864"),
  T = t("863663"),
  U = t("981631"),
  h = t("689938");

function m(e, A, t) {
  return A in e ? Object.defineProperty(e, A, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[A] = t, e
}
let I = new c.default("ProductAttachmentManager");
class v {
  addAttachment(e, A) {
    let t = this.target.getMaxAttachmentsCount();
    if (this.uploads.length >= t) throw s.AccessibilityAnnouncer.announce(h.default.Messages.GUILD_PRODUCT_A11Y_TOO_MANY_ATTACHMENTS.format({
      maxAttachmentsCount: t
    })), Error("Too many attachments");
    e.target = d.UploadTargets.GUILD_PRODUCT_ATTACHMENT;
    let a = new o.CloudUpload(e, this.guildId);
    a.upload(), a.on("error", t => {
      var l;
      t === U.AbortCodes.ENTITY_TOO_LARGE && this.onFileSizeError();
      let n = "number" == typeof t && t > 0 ? -t : -1,
        r = (0, T.describeUploadProgressError)(n),
        o = null === (l = e.file) || void 0 === l ? void 0 : l.name;
      null != o ? s.AccessibilityAnnouncer.announce(h.default.Messages.GUILD_PRODUCT_A11Y_NAMED_UPLOAD_FAILED.format({
        filename: o,
        reason: r
      })) : s.AccessibilityAnnouncer.announce(h.default.Messages.GUILD_PRODUCT_A11Y_UPLOAD_FAILED.format({
        reason: r
      })), A(e => ({
        ...e,
        [a.id]: n
      }))
    }), a.on("progress", (e, t) => {
      A(A => ({
        ...A,
        [a.id]: e / t
      }))
    }), this.uploads = [...this.uploads, a]
  }
  deleteAttachment(e) {
    let A = this.uploads.findIndex(A => A.id === e);
    return -1 !== A && (this.uploads = [...this.uploads], this.uploads.splice(A, 1)[0].cancel(), !0)
  }
  cancelUnusedUploads() {
    for (let e of this.uploads) e.cancel();
    this.uploads = []
  }
  async saveProductWithAttachments(e) {
    let A, {
      priceTier: t,
      createNewRole: a,
      imageName: l,
      ...s
    } = e;
    if (this.uploads.some(e => e.status === o.CloudUploadStatus.ERROR)) throw Error("Cannot create product with failed attachments");
    "unlinkRole" in s && (A = s.unlinkRole);
    let r = this.uploads.filter(e => !this.existingAttachmentIds.has(e.id)),
      i = this.uploads.filter(e => this.existingAttachmentIds.has(e.id)).map(e => {
        var A;
        return {
          filename: null === (A = e.item.file) || void 0 === A ? void 0 : A.name,
          id: e.id
        }
      }),
      d = await this.createCloudUploader().uploadFiles(r, {
        ...s,
        price_tier: t,
        create_new_role: a,
        image_name: l,
        unlink_role: A,
        attachments: i.length > 0 ? i : void 0
      }, {
        addFilesTo: "attachments"
      });
    return I.log("Created/updated product:", d), null != d && (this.isEdit ? await n.default.dispatch({
      type: "GUILD_PRODUCT_UPDATE",
      product: d
    }) : await n.default.dispatch({
      type: "GUILD_PRODUCT_CREATE",
      product: d
    })), d
  }
  constructor({
    guildId: e,
    editSkuId: A,
    onFileSizeError: t
  }) {
    var a;
    m(this, "guildId", void 0), m(this, "isEdit", void 0), m(this, "target", new f.default), m(this, "createCloudUploader", void 0), m(this, "onFileSizeError", void 0), m(this, "existingAttachmentIds", new Set), m(this, "uploads", []), m(this, "generateInitialProgresses", () => {
      let e = {};
      for (let A of this.uploads) e[A.id] = 1;
      return e
    }), this.isEdit = null != A;
    let l = null == A ? U.Endpoints.GUILD_PRODUCTS(e) : U.Endpoints.GUILD_PRODUCT_LISTINGS(e, A),
      s = null == A ? "POST" : "PATCH";
    this.createCloudUploader = () => (0, u.createCloudUploader)(l, s), this.guildId = e, this.onFileSizeError = t;
    let n = null === (a = g.default.getGuildProduct(null != A ? A : "")) || void 0 === a ? void 0 : a.attachments;
    null != n && (this.uploads = n.map(A => {
      var t;
      this.existingAttachmentIds.add(A.id);
      let a = new o.CloudUpload({
        id: A.id,
        platform: i.UploadPlatform.WEB,
        file: {
          name: A.filename,
          lastModified: 0,
          size: null !== (t = A.size) && void 0 !== t ? t : 0
        }
      }, e);
      return a.status = o.CloudUploadStatus.COMPLETED, a
    }))
  }
}

function p(e, A) {
  var t;
  let {
    editSkuId: s,
    onFileSizeError: n
  } = A, o = (0, l.useStateFromStores)([C.default], () => C.default.getGuild(e)), [i, d] = a.useState({
    editSkuId: s,
    onFileSizeError: n
  }), u = a.useMemo(() => new v({
    guildId: e,
    ...i
  }), [e, i]), [c, f] = a.useState(u.generateInitialProgresses), [, g] = a.useState(null);
  a.useLayoutEffect(() => {
    f(u.generateInitialProgresses())
  }, [u]);
  let [T, h] = a.useState(), [m, I] = a.useState(), p = a.useCallback(e => {
    u.deleteAttachment(e) && g({})
  }, [u]), E = a.useCallback(e => {
    u.addAttachment(e, f), g({})
  }, [u]), q = a.useCallback(async e => {
    try {
      h(e), I(void 0);
      let A = await u.saveProductWithAttachments(e);
      return null != A && d({
        editSkuId: A.id,
        onFileSizeError: n
      }), g({}), A
    } catch (e) {
      I(e instanceof r.APIError ? e : new r.APIError({
        status: 400,
        body: {
          attachments: [e.message]
        }
      }))
    } finally {
      h(void 0)
    }
  }, [u, n]), N = a.useCallback(() => {
    u.cancelUnusedUploads(), g({})
  }, [u]);
  a.useEffect(() => () => {
    u.cancelUnusedUploads()
  }, [u]);
  let {
    uploads: R
  } = u, L = !R.every(e => u.existingAttachmentIds.has(e.id)) || R.length !== u.existingAttachmentIds.size;
  return {
    addAttachment: E,
    cancelUnusedUploads: N,
    deleteAttachment: p,
    fileUploadProgresses: c,
    uploads: R,
    saveProductWithAttachments: q,
    isSaving: null != T,
    changesSaving: T,
    saveError: m,
    hasUnsavedAttachmentChanges: L,
    canAttachFiles: R.length < u.target.getMaxAttachmentsCount(),
    canAttachArchives: null !== (t = null == o ? void 0 : o.hasFeature(U.GuildFeatures.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && void 0 !== t && t
  }
}