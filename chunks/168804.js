"use strict";
t.r(A), t.d(A, {
  default: function() {
    return I
  }
}), t("70102"), t("222007");
var a = t("884691"),
  l = t("65597"),
  n = t("819855"),
  s = t("913144"),
  r = t("448993"),
  i = t("282928"),
  o = t("966724"),
  d = t("142852"),
  u = t("793825"),
  c = t("605250"),
  f = t("305961"),
  g = t("572679"),
  C = t("565559"),
  h = t("757515"),
  T = t("49111"),
  m = t("782340");
let U = new c.default("ProductAttachmentManager");
class p {
  addAttachment(e, A) {
    let t = this.target.getMaxAttachmentsCount();
    if (this.uploads.length >= t) throw n.AccessibilityAnnouncer.announce(m.default.Messages.GUILD_PRODUCT_A11Y_TOO_MANY_ATTACHMENTS.format({
      maxAttachmentsCount: t
    })), Error("Too many attachments");
    e.target = d.UploadTargets.GUILD_PRODUCT_ATTACHMENT;
    let a = new i.CloudUpload(e, this.guildId);
    a.upload(), a.on("error", t => {
      var l;
      t === T.AbortCodes.ENTITY_TOO_LARGE && this.onFileSizeError();
      let s = "number" == typeof t && t > 0 ? -t : -1,
        r = (0, h.describeUploadProgressError)(s),
        i = null === (l = e.file) || void 0 === l ? void 0 : l.name;
      null != i ? n.AccessibilityAnnouncer.announce(m.default.Messages.GUILD_PRODUCT_A11Y_NAMED_UPLOAD_FAILED.format({
        filename: i,
        reason: r
      })) : n.AccessibilityAnnouncer.announce(m.default.Messages.GUILD_PRODUCT_A11Y_UPLOAD_FAILED.format({
        reason: r
      })), A(e => ({
        ...e,
        [a.id]: s
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
    if (-1 === A) return !1;
    this.uploads = [...this.uploads];
    let t = this.uploads.splice(A, 1);
    return t[0].cancel(), !0
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
        ...n
      } = e,
      r = this.uploads.some(e => e.status === i.CloudUploadStatus.ERROR);
    if (r) throw Error("Cannot create product with failed attachments");
    "unlinkRole" in n && (A = n.unlinkRole);
    let o = this.uploads.filter(e => !this.existingAttachmentIds.has(e.id)),
      d = this.uploads.filter(e => this.existingAttachmentIds.has(e.id)).map(e => {
        var A;
        return {
          filename: null === (A = e.item.file) || void 0 === A ? void 0 : A.name,
          id: e.id
        }
      }),
      u = await this.createCloudUploader().uploadFiles(o, {
        ...n,
        price_tier: t,
        create_new_role: a,
        image_name: l,
        unlink_role: A,
        attachments: d.length > 0 ? d : void 0
      }, {
        addFilesTo: "attachments"
      });
    return U.log("Created/updated product:", u), null != u && (this.isEdit ? await s.default.dispatch({
      type: "GUILD_PRODUCT_UPDATE",
      product: u
    }) : await s.default.dispatch({
      type: "GUILD_PRODUCT_CREATE",
      product: u
    })), u
  }
  constructor({
    guildId: e,
    editSkuId: A,
    onFileSizeError: t
  }) {
    var a;
    this.target = new g.default, this.existingAttachmentIds = new Set, this.uploads = [], this.generateInitialProgresses = () => {
      let e = {};
      for (let A of this.uploads) e[A.id] = 1;
      return e
    }, this.isEdit = null != A;
    let l = null == A ? T.Endpoints.GUILD_PRODUCTS(e) : T.Endpoints.GUILD_PRODUCT_LISTINGS(e, A),
      n = null == A ? "POST" : "PATCH";
    this.createCloudUploader = () => (0, u.createCloudUploader)(l, n), this.guildId = e, this.onFileSizeError = t;
    let s = null === (a = C.default.getGuildProduct(null != A ? A : "")) || void 0 === a ? void 0 : a.attachments;
    null != s && (this.uploads = s.map(A => {
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

function I(e, A) {
  var t;
  let {
    editSkuId: n,
    onFileSizeError: s
  } = A, i = (0, l.default)([f.default], () => f.default.getGuild(e)), [o, d] = a.useState({
    editSkuId: n,
    onFileSizeError: s
  }), u = a.useMemo(() => new p({
    guildId: e,
    ...o
  }), [e, o]), [c, g] = a.useState(u.generateInitialProgresses), [, C] = a.useState(null);
  a.useLayoutEffect(() => {
    g(u.generateInitialProgresses())
  }, [u]);
  let [h, m] = a.useState(), [U, I] = a.useState(), v = a.useCallback(e => {
    u.deleteAttachment(e) && C({})
  }, [u]), E = a.useCallback(e => {
    u.addAttachment(e, g), C({})
  }, [u]), q = a.useCallback(async e => {
    try {
      m(e), I(void 0);
      let A = await u.saveProductWithAttachments(e);
      return null != A && d({
        editSkuId: A.id,
        onFileSizeError: s
      }), C({}), A
    } catch (e) {
      I(e instanceof r.APIError ? e : new r.APIError({
        status: 400,
        body: {
          attachments: [e.message]
        }
      }))
    } finally {
      m(void 0)
    }
  }, [u, s]), D = a.useCallback(() => {
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
    saveError: U,
    hasUnsavedAttachmentChanges: O,
    canAttachFiles: N.length < u.target.getMaxAttachmentsCount(),
    canAttachArchives: null !== (t = null == i ? void 0 : i.hasFeature(T.GuildFeatures.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && void 0 !== t && t
  }
}