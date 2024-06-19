t.d(A, {
  Z: function() {
    return q
  }
}), t(411104), t(47120);
var n = t(470079),
  a = t(399606),
  s = t(780384),
  r = t(570140),
  l = t(881052),
  o = t(141795),
  i = t(476326),
  d = t(983544),
  c = t(9874),
  u = t(710845),
  C = t(430824),
  g = t(277985),
  T = t(240864),
  U = t(863663),
  m = t(981631),
  I = t(689938);

function h(e, A, t) {
  return A in e ? Object.defineProperty(e, A, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[A] = t, e
}
let p = new u.Z("ProductAttachmentManager");
class v {
  addAttachment(e, A) {
    let t = this.target.getMaxAttachmentsCount();
    if (this.uploads.length >= t) throw s.uv.announce(I.Z.Messages.GUILD_PRODUCT_A11Y_TOO_MANY_ATTACHMENTS.format({
      maxAttachmentsCount: t
    })), Error("Too many attachments");
    e.target = d.e.GUILD_PRODUCT_ATTACHMENT;
    let n = new o.n(e, this.guildId);
    n.upload(), n.on("error", t => {
      var a;
      t === m.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
      let r = "number" == typeof t && t > 0 ? -t : -1,
        l = (0, U.kg)(r),
        o = null === (a = e.file) || void 0 === a ? void 0 : a.name;
      null != o ? s.uv.announce(I.Z.Messages.GUILD_PRODUCT_A11Y_NAMED_UPLOAD_FAILED.format({
        filename: o,
        reason: l
      })) : s.uv.announce(I.Z.Messages.GUILD_PRODUCT_A11Y_UPLOAD_FAILED.format({
        reason: l
      })), A(e => ({
        ...e,
        [n.id]: r
      }))
    }), n.on("progress", (e, t) => {
      A(A => ({
        ...A,
        [n.id]: e / t
      }))
    }), this.uploads = [...this.uploads, n]
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
      createNewRole: n,
      imageName: a,
      ...s
    } = e;
    if (this.uploads.some(e => e.status === o.m.ERROR)) throw Error("Cannot create product with failed attachments");
    "unlinkRole" in s && (A = s.unlinkRole);
    let l = this.uploads.filter(e => !this.existingAttachmentIds.has(e.id)),
      i = this.uploads.filter(e => this.existingAttachmentIds.has(e.id)).map(e => {
        var A;
        return {
          filename: null === (A = e.item.file) || void 0 === A ? void 0 : A.name,
          id: e.id
        }
      }),
      d = await this.createCloudUploader().uploadFiles(l, {
        ...s,
        price_tier: t,
        create_new_role: n,
        image_name: a,
        unlink_role: A,
        attachments: i.length > 0 ? i : void 0
      }, {
        addFilesTo: "attachments"
      });
    return p.log("Created/updated product:", d), null != d && (this.isEdit ? await r.Z.dispatch({
      type: "GUILD_PRODUCT_UPDATE",
      product: d
    }) : await r.Z.dispatch({
      type: "GUILD_PRODUCT_CREATE",
      product: d
    })), d
  }
  constructor({
    guildId: e,
    editSkuId: A,
    onFileSizeError: t
  }) {
    var n;
    h(this, "guildId", void 0), h(this, "isEdit", void 0), h(this, "target", new g.Z), h(this, "createCloudUploader", void 0), h(this, "onFileSizeError", void 0), h(this, "existingAttachmentIds", new Set), h(this, "uploads", []), h(this, "generateInitialProgresses", () => {
      let e = {};
      for (let A of this.uploads) e[A.id] = 1;
      return e
    }), this.isEdit = null != A;
    let a = null == A ? m.ANM.GUILD_PRODUCTS(e) : m.ANM.GUILD_PRODUCT_LISTINGS(e, A),
      s = null == A ? "POST" : "PATCH";
    this.createCloudUploader = () => (0, c.F)(a, s), this.guildId = e, this.onFileSizeError = t;
    let r = null === (n = T.Z.getGuildProduct(null != A ? A : "")) || void 0 === n ? void 0 : n.attachments;
    null != r && (this.uploads = r.map(A => {
      var t;
      this.existingAttachmentIds.add(A.id);
      let n = new o.n({
        id: A.id,
        platform: i.ow.WEB,
        file: {
          name: A.filename,
          lastModified: 0,
          size: null !== (t = A.size) && void 0 !== t ? t : 0
        }
      }, e);
      return n.status = o.m.COMPLETED, n
    }))
  }
}

function q(e, A) {
  var t;
  let {
    editSkuId: s,
    onFileSizeError: r
  } = A, o = (0, a.e7)([C.Z], () => C.Z.getGuild(e)), [i, d] = n.useState({
    editSkuId: s,
    onFileSizeError: r
  }), c = n.useMemo(() => new v({
    guildId: e,
    ...i
  }), [e, i]), [u, g] = n.useState(c.generateInitialProgresses), [, T] = n.useState(null);
  n.useLayoutEffect(() => {
    g(c.generateInitialProgresses())
  }, [c]);
  let [U, I] = n.useState(), [h, p] = n.useState(), q = n.useCallback(e => {
    c.deleteAttachment(e) && T({})
  }, [c]), f = n.useCallback(e => {
    c.addAttachment(e, g), T({})
  }, [c]), E = n.useCallback(async e => {
    try {
      I(e), p(void 0);
      let A = await c.saveProductWithAttachments(e);
      return null != A && d({
        editSkuId: A.id,
        onFileSizeError: r
      }), T({}), A
    } catch (e) {
      p(e instanceof l.Hx ? e : new l.Hx({
        status: 400,
        body: {
          attachments: [e.message]
        }
      }))
    } finally {
      I(void 0)
    }
  }, [c, r]), N = n.useCallback(() => {
    c.cancelUnusedUploads(), T({})
  }, [c]);
  n.useEffect(() => () => {
    c.cancelUnusedUploads()
  }, [c]);
  let {
    uploads: O
  } = c, D = !O.every(e => c.existingAttachmentIds.has(e.id)) || O.length !== c.existingAttachmentIds.size;
  return {
    addAttachment: f,
    cancelUnusedUploads: N,
    deleteAttachment: q,
    fileUploadProgresses: u,
    uploads: O,
    saveProductWithAttachments: E,
    isSaving: null != U,
    changesSaving: U,
    saveError: h,
    hasUnsavedAttachmentChanges: D,
    canAttachFiles: O.length < c.target.getMaxAttachmentsCount(),
    canAttachArchives: null !== (t = null == o ? void 0 : o.hasFeature(m.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && void 0 !== t && t
  }
}