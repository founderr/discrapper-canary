"use strict";
t.r(A), t.d(A, {
  default: function() {
    return p
  }
}), t("70102"), t("222007");
var a = t("884691"),
  l = t("65597"),
  n = t("819855"),
  r = t("913144"),
  s = t("448993"),
  o = t("282928"),
  i = t("966724"),
  d = t("142852"),
  u = t("793825"),
  c = t("605250"),
  f = t("305961"),
  C = t("572679"),
  g = t("565559"),
  T = t("757515"),
  h = t("49111"),
  m = t("782340");
let U = new c.default("ProductAttachmentManager");
class I {
  addAttachment(e, A) {
    let t = this.target.getMaxAttachmentsCount();
    if (this.uploads.length >= t) throw n.AccessibilityAnnouncer.announce(m.default.Messages.GUILD_PRODUCT_A11Y_TOO_MANY_ATTACHMENTS.format({
      maxAttachmentsCount: t
    })), Error("Too many attachments");
    e.target = d.UploadTargets.GUILD_PRODUCT_ATTACHMENT;
    let a = new o.CloudUpload(e, this.guildId);
    a.upload(), a.on("error", t => {
      var l;
      t === h.AbortCodes.ENTITY_TOO_LARGE && this.onFileSizeError();
      let r = "number" == typeof t && t > 0 ? -t : -1,
        s = (0, T.describeUploadProgressError)(r),
        o = null === (l = e.file) || void 0 === l ? void 0 : l.name;
      null != o ? n.AccessibilityAnnouncer.announce(m.default.Messages.GUILD_PRODUCT_A11Y_NAMED_UPLOAD_FAILED.format({
        filename: o,
        reason: s
      })) : n.AccessibilityAnnouncer.announce(m.default.Messages.GUILD_PRODUCT_A11Y_UPLOAD_FAILED.format({
        reason: s
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
      s = this.uploads.some(e => e.status === o.CloudUploadStatus.ERROR);
    if (s) throw Error("Cannot create product with failed attachments");
    "unlinkRole" in n && (A = n.unlinkRole);
    let i = this.uploads.filter(e => !this.existingAttachmentIds.has(e.id)),
      d = this.uploads.filter(e => this.existingAttachmentIds.has(e.id)).map(e => {
        var A;
        return {
          filename: null === (A = e.item.file) || void 0 === A ? void 0 : A.name,
          id: e.id
        }
      }),
      u = await this.createCloudUploader().uploadFiles(i, {
        ...n,
        price_tier: t,
        create_new_role: a,
        image_name: l,
        unlink_role: A,
        attachments: d.length > 0 ? d : void 0
      }, {
        addFilesTo: "attachments"
      });
    return U.log("Created/updated product:", u), null != u && (this.isEdit ? await r.default.dispatch({
      type: "GUILD_PRODUCT_UPDATE",
      product: u
    }) : await r.default.dispatch({
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
    this.target = new C.default, this.existingAttachmentIds = new Set, this.uploads = [], this.generateInitialProgresses = () => {
      let e = {};
      for (let A of this.uploads) e[A.id] = 1;
      return e
    }, this.isEdit = null != A;
    let l = null == A ? h.Endpoints.GUILD_PRODUCTS(e) : h.Endpoints.GUILD_PRODUCT_LISTINGS(e, A),
      n = null == A ? "POST" : "PATCH";
    this.createCloudUploader = () => (0, u.createCloudUploader)(l, n), this.guildId = e, this.onFileSizeError = t;
    let r = null === (a = g.default.getGuildProduct(null != A ? A : "")) || void 0 === a ? void 0 : a.attachments;
    null != r && (this.uploads = r.map(A => {
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
    editSkuId: n,
    onFileSizeError: r
  } = A, o = (0, l.default)([f.default], () => f.default.getGuild(e)), [i, d] = a.useState({
    editSkuId: n,
    onFileSizeError: r
  }), u = a.useMemo(() => new I({
    guildId: e,
    ...i
  }), [e, i]), [c, C] = a.useState(u.generateInitialProgresses), [, g] = a.useState(null);
  a.useLayoutEffect(() => {
    C(u.generateInitialProgresses())
  }, [u]);
  let [T, m] = a.useState(), [U, p] = a.useState(), v = a.useCallback(e => {
    u.deleteAttachment(e) && g({})
  }, [u]), E = a.useCallback(e => {
    u.addAttachment(e, C), g({})
  }, [u]), q = a.useCallback(async e => {
    try {
      m(e), p(void 0);
      let A = await u.saveProductWithAttachments(e);
      return null != A && d({
        editSkuId: A.id,
        onFileSizeError: r
      }), g({}), A
    } catch (e) {
      p(e instanceof s.APIError ? e : new s.APIError({
        status: 400,
        body: {
          attachments: [e.message]
        }
      }))
    } finally {
      m(void 0)
    }
  }, [u, r]), N = a.useCallback(() => {
    u.cancelUnusedUploads(), g({})
  }, [u]);
  a.useEffect(() => () => {
    u.cancelUnusedUploads()
  }, [u]);
  let {
    uploads: O
  } = u, x = !O.every(e => u.existingAttachmentIds.has(e.id)) || O.length !== u.existingAttachmentIds.size;
  return {
    addAttachment: E,
    cancelUnusedUploads: N,
    deleteAttachment: v,
    fileUploadProgresses: c,
    uploads: O,
    saveProductWithAttachments: q,
    isSaving: null != T,
    changesSaving: T,
    saveError: U,
    hasUnsavedAttachmentChanges: x,
    canAttachFiles: O.length < u.target.getMaxAttachmentsCount(),
    canAttachArchives: null !== (t = null == o ? void 0 : o.hasFeature(h.GuildFeatures.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && void 0 !== t && t
  }
}