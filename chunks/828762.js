n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(411104),
    n(47120);
var A = n(192379),
    r = n(399606),
    a = n(780384),
    l = n(570140),
    i = n(881052),
    o = n(141795),
    s = n(476326),
    d = n(983544),
    c = n(9874),
    u = n(710845),
    g = n(430824),
    h = n(277985),
    p = n(240864),
    m = n(863663),
    f = n(981631),
    v = n(388032);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let q = new u.Z('ProductAttachmentManager');
class x {
    addAttachment(e, t) {
        let n = this.target.getMaxAttachmentsCount();
        if (this.uploads.length >= n) throw (a.uv.announce(v.intl.formatToPlainString(v.t['0QDZ4O'], { maxAttachmentsCount: n })), Error('Too many attachments'));
        e.target = d.e.GUILD_PRODUCT_ATTACHMENT;
        let A = new o.n(e, this.guildId);
        A.upload(),
            A.on('error', (n) => {
                var r;
                n === f.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
                let l = 'number' == typeof n && n > 0 ? -n : -1,
                    i = (0, m.kg)(l),
                    o = null === (r = e.file) || void 0 === r ? void 0 : r.name;
                null != o
                    ? a.uv.announce(
                          v.intl.formatToPlainString(v.t['+YVkfX'], {
                              filename: o,
                              reason: i
                          })
                      )
                    : a.uv.announce(v.intl.formatToPlainString(v.t.mBkf6e, { reason: i })),
                    t((e) => ({
                        ...e,
                        [A.id]: l
                    }));
            }),
            A.on('progress', (e, n) => {
                t((t) => ({
                    ...t,
                    [A.id]: e / n
                }));
            }),
            (this.uploads = [...this.uploads, A]);
    }
    deleteAttachment(e) {
        let t = this.uploads.findIndex((t) => t.id === e);
        return -1 !== t && ((this.uploads = [...this.uploads]), this.uploads.splice(t, 1)[0].cancel(), !0);
    }
    cancelUnusedUploads() {
        for (let e of this.uploads) e.cancel();
        this.uploads = [];
    }
    async saveProductWithAttachments(e) {
        let t,
            { priceTier: n, createNewRole: A, imageName: r, ...a } = e;
        if (this.uploads.some((e) => e.status === o.m.ERROR)) throw Error('Cannot create product with failed attachments');
        'unlinkRole' in a && (t = a.unlinkRole);
        let i = this.uploads.filter((e) => !this.existingAttachmentIds.has(e.id)),
            s = this.uploads
                .filter((e) => this.existingAttachmentIds.has(e.id))
                .map((e) => {
                    var t;
                    return {
                        filename: null === (t = e.item.file) || void 0 === t ? void 0 : t.name,
                        id: e.id
                    };
                }),
            d = await this.createCloudUploader().uploadFiles(
                i,
                {
                    ...a,
                    price_tier: n,
                    create_new_role: A,
                    image_name: r,
                    unlink_role: t,
                    attachments: s.length > 0 ? s : void 0
                },
                { addFilesTo: 'attachments' }
            );
        return (
            q.log('Created/updated product:', d),
            null != d &&
                (this.isEdit
                    ? await l.Z.dispatch({
                          type: 'GUILD_PRODUCT_UPDATE',
                          product: d
                      })
                    : await l.Z.dispatch({
                          type: 'GUILD_PRODUCT_CREATE',
                          product: d
                      })),
            d
        );
    }
    constructor({ guildId: e, editSkuId: t, onFileSizeError: n }) {
        var A;
        C(this, 'guildId', void 0),
            C(this, 'isEdit', void 0),
            C(this, 'target', new h.Z()),
            C(this, 'createCloudUploader', void 0),
            C(this, 'onFileSizeError', void 0),
            C(this, 'existingAttachmentIds', new Set()),
            C(this, 'uploads', []),
            C(this, 'generateInitialProgresses', () => {
                let e = {};
                for (let t of this.uploads) e[t.id] = 1;
                return e;
            }),
            (this.isEdit = null != t);
        let r = null == t ? f.ANM.GUILD_PRODUCTS(e) : f.ANM.GUILD_PRODUCT_LISTINGS(e, t),
            a = null == t ? 'POST' : 'PATCH';
        (this.createCloudUploader = () => (0, c.F)(r, a)), (this.guildId = e), (this.onFileSizeError = n);
        let l = null === (A = p.Z.getGuildProduct(null != t ? t : '')) || void 0 === A ? void 0 : A.attachments;
        null != l &&
            (this.uploads = l.map((t) => {
                var n;
                this.existingAttachmentIds.add(t.id);
                let A = new o.n(
                    {
                        id: t.id,
                        platform: s.ow.WEB,
                        file: {
                            name: t.filename,
                            lastModified: 0,
                            size: null !== (n = t.size) && void 0 !== n ? n : 0
                        }
                    },
                    e
                );
                return (A.status = o.m.COMPLETED), A;
            }));
    }
}
function b(e, t) {
    var n;
    let { editSkuId: a, onFileSizeError: l } = t,
        o = (0, r.e7)([g.Z], () => g.Z.getGuild(e)),
        [s, d] = A.useState({
            editSkuId: a,
            onFileSizeError: l
        }),
        c = A.useMemo(
            () =>
                new x({
                    guildId: e,
                    ...s
                }),
            [e, s]
        ),
        [u, h] = A.useState(c.generateInitialProgresses),
        [, p] = A.useState(null);
    A.useLayoutEffect(() => {
        h(c.generateInitialProgresses());
    }, [c]);
    let [m, v] = A.useState(),
        [C, q] = A.useState(),
        b = A.useCallback(
            (e) => {
                c.deleteAttachment(e) && p({});
            },
            [c]
        ),
        U = A.useCallback(
            (e) => {
                c.addAttachment(e, h), p({});
            },
            [c]
        ),
        V = A.useCallback(
            async (e) => {
                try {
                    v(e), q(void 0);
                    let t = await c.saveProductWithAttachments(e);
                    return (
                        null != t &&
                            d({
                                editSkuId: t.id,
                                onFileSizeError: l
                            }),
                        p({}),
                        t
                    );
                } catch (e) {
                    q(
                        e instanceof i.Hx
                            ? e
                            : new i.Hx({
                                  status: 400,
                                  body: { attachments: [e.message] }
                              })
                    );
                } finally {
                    v(void 0);
                }
            },
            [c, l]
        ),
        j = A.useCallback(() => {
            c.cancelUnusedUploads(), p({});
        }, [c]);
    A.useEffect(
        () => () => {
            c.cancelUnusedUploads();
        },
        [c]
    );
    let { uploads: I } = c,
        N = !I.every((e) => c.existingAttachmentIds.has(e.id)) || I.length !== c.existingAttachmentIds.size;
    return {
        addAttachment: U,
        cancelUnusedUploads: j,
        deleteAttachment: b,
        fileUploadProgresses: u,
        uploads: I,
        saveProductWithAttachments: V,
        isSaving: null != m,
        changesSaving: m,
        saveError: C,
        hasUnsavedAttachmentChanges: N,
        canAttachFiles: I.length < c.target.getMaxAttachmentsCount(),
        canAttachArchives: null !== (n = null == o ? void 0 : o.hasFeature(f.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && void 0 !== n && n
    };
}
