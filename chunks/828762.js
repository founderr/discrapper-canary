"use strict";
t.r(A), t.d(A, {
  default: function() {
    return v
  }
}), t("411104"), t("47120");
var a = t("470079"),
  l = t("399606"),
  s = t("780384"),
  r = t("570140"),
  n = t("881052"),
  i = t("141795"),
  o = t("476326"),
  d = t("983544"),
  u = t("9874"),
  c = t("710845"),
  g = t("430824"),
  f = t("277985"),
  C = t("240864"),
  h = t("863663"),
  T = t("981631"),
  U = t("689938");

function p(e, A, t) {
  return A in e ? Object.defineProperty(e, A, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[A] = t, e
}
let m = new c.default("ProductAttachmentManager");
class I {
  addAttachment(e, A) {
    let t = this.target.getMaxAttachmentsCount();
    if (this.uploads.length >= t) throw s.AccessibilityAnnouncer.announce(U.default.Messages.GUILD_PRODUCT_A11Y_TOO_MANY_ATTACHMENTS.format({
      maxAttachmentsCount: t
    })), Error("Too many attachments");
    e.target = d.UploadTargets.GUILD_PRODUCT_ATTACHMENT;
    let a = new i.CloudUpload(e, this.guildId);
    a.upload(), a.on("error", t => {
      var l;
      t === T.AbortCodes.ENTITY_TOO_LARGE && this.onFileSizeError();
      let r = "number" == typeof t && t > 0 ? -t : -1,
        n = (0, h.describeUploadProgressError)(r),
        i = null === (l = e.file) || void 0 === l ? void 0 : l.name;
      null != i ? s.AccessibilityAnnouncer.announce(U.default.Messages.GUILD_PRODUCT_A11Y_NAMED_UPLOAD_FAILED.format({
        filename: i,
        reason: n
      })) : s.AccessibilityAnnouncer.announce(U.default.Messages.GUILD_PRODUCT_A11Y_UPLOAD_FAILED.format({
        reason: n
      })), A(e => ({
        ...e,
        [a.id]: r
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
    if (this.uploads.some(e => e.status === i.CloudUploadStatus.ERROR)) throw Error("Cannot create product with failed attachments");
    "unlinkRole" in s && (A = s.unlinkRole);
    let n = this.uploads.filter(e => !this.existingAttachmentIds.has(e.id)),
      o = this.uploads.filter(e => this.existingAttachmentIds.has(e.id)).map(e => {
        var A;
        return {
          filename: null === (A = e.item.file) || void 0 === A ? void 0 : A.name,
          id: e.id
        }
      }),
      d = await this.createCloudUploader().uploadFiles(n, {
        ...s,
        price_tier: t,
        create_new_role: a,
        image_name: l,
        unlink_role: A,
        attachments: o.length > 0 ? o : void 0
      }, {
        addFilesTo: "attachments"
      });
    return m.log("Created/updated product:", d), null != d && (this.isEdit ? await r.default.dispatch({
      type: "GUILD_PRODUCT_UPDATE",
      product: d
    }) : await r.default.dispatch({
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
    p(this, "guildId", void 0), p(this, "isEdit", void 0), p(this, "target", new f.default), p(this, "createCloudUploader", void 0), p(this, "onFileSizeError", void 0), p(this, "existingAttachmentIds", new Set), p(this, "uploads", []), p(this, "generateInitialProgresses", () => {
      let e = {};
      for (let A of this.uploads) e[A.id] = 1;
      return e
    }), this.isEdit = null != A;
    let l = null == A ? T.Endpoints.GUILD_PRODUCTS(e) : T.Endpoints.GUILD_PRODUCT_LISTINGS(e, A),
      s = null == A ? "POST" : "PATCH";
    this.createCloudUploader = () => (0, u.createCloudUploader)(l, s), this.guildId = e, this.onFileSizeError = t;
    let r = null === (a = C.default.getGuildProduct(null != A ? A : "")) || void 0 === a ? void 0 : a.attachments;
    null != r && (this.uploads = r.map(A => {
      var t;
      this.existingAttachmentIds.add(A.id);
      let a = new i.CloudUpload({
        id: A.id,
        platform: o.UploadPlatform.WEB,
        file: {
          name: A.filename,
          lastModified: 0,
          size: null !== (t = A.size) && void 0 !== t ? t : 0
        }
      }, e);
      return a.status = i.CloudUploadStatus.COMPLETED, a
    }))
  }
}

function v(e, A) {
  var t;
  let {
    editSkuId: s,
    onFileSizeError: r
  } = A, i = (0, l.useStateFromStores)([g.default], () => g.default.getGuild(e)), [o, d] = a.useState({
    editSkuId: s,
    onFileSizeError: r
  }), u = a.useMemo(() => new I({
    guildId: e,
    ...o
  }), [e, o]), [c, f] = a.useState(u.generateInitialProgresses), [, C] = a.useState(null);
  a.useLayoutEffect(() => {
    f(u.generateInitialProgresses())
  }, [u]);
  let [h, U] = a.useState(), [p, m] = a.useState(), v = a.useCallback(e => {
    u.deleteAttachment(e) && C({})
  }, [u]), E = a.useCallback(e => {
    u.addAttachment(e, f), C({})
  }, [u]), q = a.useCallback(async e => {
    try {
      U(e), m(void 0);
      let A = await u.saveProductWithAttachments(e);
      return null != A && d({
        editSkuId: A.id,
        onFileSizeError: r
      }), C({}), A
    } catch (e) {
      m(e instanceof n.APIError ? e : new n.APIError({
        status: 400,
        body: {
          attachments: [e.message]
        }
      }))
    } finally {
      U(void 0)
    }
  }, [u, r]), D = a.useCallback(() => {
    u.cancelUnusedUploads(), C({})
  }, [u]);
  a.useEffect(() => () => {
    u.cancelUnusedUploads()
  }, [u]);
  let {
    uploads: N
  } = u, O = !N.every(e => u.existingAttachmentIds.has(e.id)) || N.length !== u.existingAttachmentIds.size;
  return {
    addAttachment: E,
    cancelUnusedUploads: D,
    deleteAttachment: v,
    fileUploadProgresses: c,
    uploads: N,
    saveProductWithAttachments: q,
    isSaving: null != h,
    changesSaving: h,
    saveError: p,
    hasUnsavedAttachmentChanges: O,
    canAttachFiles: N.length < u.target.getMaxAttachmentsCount(),
    canAttachArchives: null !== (t = null == i ? void 0 : i.hasFeature(T.GuildFeatures.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && void 0 !== t && t
  }
}