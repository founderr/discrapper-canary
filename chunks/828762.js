t.d(A, {
    Z: function () {
        return v;
    }
}),
    t(411104),
    t(47120);
var n = t(470079),
    a = t(399606),
    s = t(780384),
    r = t(570140),
    o = t(881052),
    l = t(141795),
    i = t(476326),
    d = t(983544),
    c = t(9874),
    u = t(710845),
    C = t(430824),
    g = t(277985),
    T = t(240864),
    I = t(863663),
    U = t(981631),
    p = t(689938);
function h(e, A, t) {
    return (
        A in e
            ? Object.defineProperty(e, A, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[A] = t),
        e
    );
}
let m = new u.Z('ProductAttachmentManager');
class f {
    addAttachment(e, A) {
        let t = this.target.getMaxAttachmentsCount();
        if (this.uploads.length >= t) throw (s.uv.announce(p.Z.Messages.GUILD_PRODUCT_A11Y_TOO_MANY_ATTACHMENTS.format({ maxAttachmentsCount: t })), Error('Too many attachments'));
        e.target = d.e.GUILD_PRODUCT_ATTACHMENT;
        let n = new l.n(e, this.guildId);
        n.upload(),
            n.on('error', (t) => {
                var a;
                t === U.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
                let r = 'number' == typeof t && t > 0 ? -t : -1,
                    o = (0, I.kg)(r),
                    l = null === (a = e.file) || void 0 === a ? void 0 : a.name;
                null != l
                    ? s.uv.announce(
                          p.Z.Messages.GUILD_PRODUCT_A11Y_NAMED_UPLOAD_FAILED.format({
                              filename: l,
                              reason: o
                          })
                      )
                    : s.uv.announce(p.Z.Messages.GUILD_PRODUCT_A11Y_UPLOAD_FAILED.format({ reason: o })),
                    A((e) => ({
                        ...e,
                        [n.id]: r
                    }));
            }),
            n.on('progress', (e, t) => {
                A((A) => ({
                    ...A,
                    [n.id]: e / t
                }));
            }),
            (this.uploads = [...this.uploads, n]);
    }
    deleteAttachment(e) {
        let A = this.uploads.findIndex((A) => A.id === e);
        return -1 !== A && ((this.uploads = [...this.uploads]), this.uploads.splice(A, 1)[0].cancel(), !0);
    }
    cancelUnusedUploads() {
        for (let e of this.uploads) e.cancel();
        this.uploads = [];
    }
    async saveProductWithAttachments(e) {
        let A,
            { priceTier: t, createNewRole: n, imageName: a, ...s } = e;
        if (this.uploads.some((e) => e.status === l.m.ERROR)) throw Error('Cannot create product with failed attachments');
        'unlinkRole' in s && (A = s.unlinkRole);
        let o = this.uploads.filter((e) => !this.existingAttachmentIds.has(e.id)),
            i = this.uploads
                .filter((e) => this.existingAttachmentIds.has(e.id))
                .map((e) => {
                    var A;
                    return {
                        filename: null === (A = e.item.file) || void 0 === A ? void 0 : A.name,
                        id: e.id
                    };
                }),
            d = await this.createCloudUploader().uploadFiles(
                o,
                {
                    ...s,
                    price_tier: t,
                    create_new_role: n,
                    image_name: a,
                    unlink_role: A,
                    attachments: i.length > 0 ? i : void 0
                },
                { addFilesTo: 'attachments' }
            );
        return (
            m.log('Created/updated product:', d),
            null != d &&
                (this.isEdit
                    ? await r.Z.dispatch({
                          type: 'GUILD_PRODUCT_UPDATE',
                          product: d
                      })
                    : await r.Z.dispatch({
                          type: 'GUILD_PRODUCT_CREATE',
                          product: d
                      })),
            d
        );
    }
    constructor({ guildId: e, editSkuId: A, onFileSizeError: t }) {
        var n;
        h(this, 'guildId', void 0),
            h(this, 'isEdit', void 0),
            h(this, 'target', new g.Z()),
            h(this, 'createCloudUploader', void 0),
            h(this, 'onFileSizeError', void 0),
            h(this, 'existingAttachmentIds', new Set()),
            h(this, 'uploads', []),
            h(this, 'generateInitialProgresses', () => {
                let e = {};
                for (let A of this.uploads) e[A.id] = 1;
                return e;
            }),
            (this.isEdit = null != A);
        let a = null == A ? U.ANM.GUILD_PRODUCTS(e) : U.ANM.GUILD_PRODUCT_LISTINGS(e, A),
            s = null == A ? 'POST' : 'PATCH';
        (this.createCloudUploader = () => (0, c.F)(a, s)), (this.guildId = e), (this.onFileSizeError = t);
        let r = null === (n = T.Z.getGuildProduct(null != A ? A : '')) || void 0 === n ? void 0 : n.attachments;
        null != r &&
            (this.uploads = r.map((A) => {
                var t;
                this.existingAttachmentIds.add(A.id);
                let n = new l.n(
                    {
                        id: A.id,
                        platform: i.ow.WEB,
                        file: {
                            name: A.filename,
                            lastModified: 0,
                            size: null !== (t = A.size) && void 0 !== t ? t : 0
                        }
                    },
                    e
                );
                return (n.status = l.m.COMPLETED), n;
            }));
    }
}
function v(e, A) {
    var t;
    let { editSkuId: s, onFileSizeError: r } = A,
        l = (0, a.e7)([C.Z], () => C.Z.getGuild(e)),
        [i, d] = n.useState({
            editSkuId: s,
            onFileSizeError: r
        }),
        c = n.useMemo(
            () =>
                new f({
                    guildId: e,
                    ...i
                }),
            [e, i]
        ),
        [u, g] = n.useState(c.generateInitialProgresses),
        [, T] = n.useState(null);
    n.useLayoutEffect(() => {
        g(c.generateInitialProgresses());
    }, [c]);
    let [I, p] = n.useState(),
        [h, m] = n.useState(),
        v = n.useCallback(
            (e) => {
                c.deleteAttachment(e) && T({});
            },
            [c]
        ),
        q = n.useCallback(
            (e) => {
                c.addAttachment(e, g), T({});
            },
            [c]
        ),
        E = n.useCallback(
            async (e) => {
                try {
                    p(e), m(void 0);
                    let A = await c.saveProductWithAttachments(e);
                    return (
                        null != A &&
                            d({
                                editSkuId: A.id,
                                onFileSizeError: r
                            }),
                        T({}),
                        A
                    );
                } catch (e) {
                    m(
                        e instanceof o.Hx
                            ? e
                            : new o.Hx({
                                  status: 400,
                                  body: { attachments: [e.message] }
                              })
                    );
                } finally {
                    p(void 0);
                }
            },
            [c, r]
        ),
        O = n.useCallback(() => {
            c.cancelUnusedUploads(), T({});
        }, [c]);
    n.useEffect(
        () => () => {
            c.cancelUnusedUploads();
        },
        [c]
    );
    let { uploads: N } = c,
        D = !N.every((e) => c.existingAttachmentIds.has(e.id)) || N.length !== c.existingAttachmentIds.size;
    return {
        addAttachment: q,
        cancelUnusedUploads: O,
        deleteAttachment: v,
        fileUploadProgresses: u,
        uploads: N,
        saveProductWithAttachments: E,
        isSaving: null != I,
        changesSaving: I,
        saveError: h,
        hasUnsavedAttachmentChanges: D,
        canAttachFiles: N.length < c.target.getMaxAttachmentsCount(),
        canAttachArchives: null !== (t = null == l ? void 0 : l.hasFeature(U.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && void 0 !== t && t
    };
}
