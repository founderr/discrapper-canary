n.d(t, {
    _: function () {
        return y;
    }
});
var a = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(399606),
    d = n(481060),
    u = n(166459),
    m = n(607070),
    h = n(541716),
    g = n(273031),
    x = n(859235),
    f = n(313201),
    p = n(70097),
    C = n(374794),
    v = n(470623),
    b = n(983200),
    j = n(127654),
    _ = n(124252),
    I = n(388032),
    T = n(77364);
let N = [
        {
            name: 'Media Post Thumbnail',
            extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp']
        }
    ],
    S = (0, f.hQ)();
function w(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: i } = e,
        r = (0, b.tu)({
            numAttachments: t.length,
            containerWidth: n,
            containerHeight: i
        });
    return (0, a.jsx)(a.Fragment, {
        children: t.map((e, t) => {
            var n;
            return (0, a.jsx)(
                'div',
                {
                    style: r[t],
                    children:
                        !0 === e.isVideo
                            ? (0, a.jsx)(p.Z, {
                                  src: e.src,
                                  className: T.thumbnail,
                                  'aria-hidden': !0
                              })
                            : (0, a.jsx)('img', {
                                  src: e.src,
                                  className: T.thumbnail,
                                  'aria-hidden': !0,
                                  alt: null !== (n = null == e ? void 0 : e.alt) && void 0 !== n ? n : ''
                              })
                },
                e.src
            );
        })
    });
}
let y = (e) => {
    var t;
    let { parentChannel: r } = e,
        { textAreaState: s } = (0, v.xH)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }),
        f = (0, c.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        p = (0, _.Z)(r, null === (t = s.textValue) || void 0 === t ? void 0 : t.trim()),
        b = i.useMemo(() => p.find((e) => e.isThumbnail), [p]),
        y = null != p && p.length > 0,
        E = i.useMemo(() => {
            let e = (null == p ? void 0 : p.length) > 1 ? 1.15 : 1;
            return {
                width: 153 * e,
                height: 86 * e
            };
        }, [p]),
        R = i.useCallback(
            (e) => {
                null != b && u.Z.remove(r.id, b.id, h.I.CREATE_FORUM_POST.drafts.type),
                    (0, j.d)(e.currentTarget.files, r, h.I.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0
                    }),
                    (e.currentTarget.value = null);
            },
            [r, b]
        ),
        P = (e) => {
            if ((e.stopPropagation(), (null == b ? void 0 : b.upload) != null))
                (0, d.openModalLazy)(async () => {
                    let e = b.upload;
                    o()(null != e, 'upload should not be null');
                    let { default: t } = await Promise.resolve().then(n.bind(n, 95152));
                    return (n) =>
                        (0, a.jsx)(t, {
                            ...n,
                            upload: e,
                            channelId: r.id,
                            draftType: h.I.CREATE_FORUM_POST.drafts.type,
                            onSubmit: (t) => {
                                let { name: n, description: a, spoiler: i } = t;
                                u.Z.update(r.id, e.id, h.I.CREATE_FORUM_POST.drafts.type, {
                                    filename: n,
                                    description: a,
                                    spoiler: i
                                });
                            },
                            disableSpoiler: !0
                        });
                });
        },
        M = (0, a.jsx)(C.Z, {
            color: d.ButtonColors.CUSTOM,
            className: l()(T.uploadFileInputContainer),
            innerClassName: T.uploadThumbnailContainer,
            onChange: R,
            multiple: !1,
            'aria-hidden': !0,
            filters: N,
            'aria-describedby': S,
            'aria-label': y ? I.intl.string(I.t.MxJI3d) : I.intl.string(I.t.CbiofX),
            children: y
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(w, {
                              mediaAttachments: p,
                              containerWidth: E.width,
                              containerHeight: E.height
                          }),
                          (0, a.jsxs)('div', {
                              className: l()(T.changeThumbnailLabelContainer, { [T.changeThumbnailLabelOverflow]: (null == p ? void 0 : p.length) > 2 }),
                              children: [
                                  (0, a.jsx)(d.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'header-secondary',
                                      children: I.intl.string(I.t.MxJI3d)
                                  }),
                                  null == b &&
                                      (0, a.jsx)(d.PencilIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: T.editIcon
                                      })
                              ]
                          })
                      ]
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(d.ImagePlusIcon, {
                              size: 'custom',
                              width: 39,
                              height: 39,
                              color: 'currentColor',
                              className: T.uploadIcon
                          }),
                          (0, a.jsx)(d.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: I.intl.string(I.t.CbiofX)
                          })
                      ]
                  })
        });
    return (0, a.jsx)('div', {
        className: T.thumbnailContainer,
        style: E,
        children:
            null != b
                ? (0, a.jsx)(x.Z, {
                      actions: (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(g.Z, {
                                  className: T.action,
                                  tooltip: I.intl.string(I.t.Y8ujqq),
                                  onClick: P,
                                  children: (0, a.jsx)(d.PencilIcon, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  })
                              }),
                              (0, a.jsx)(g.Z, {
                                  className: T.action,
                                  tooltip: I.intl.string(I.t.vN7REx),
                                  onClick: () => u.Z.remove(r.id, b.id, h.I.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, a.jsx)(d.TrashIcon, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                          ]
                      }),
                      draftType: h.I.CREATE_FORUM_POST.drafts.type,
                      id: b.id,
                      channelId: r.id,
                      handleEditModal: P,
                      keyboardModeEnabled: f,
                      size: x.q.SMALL,
                      className: T.attachmentListItem,
                      children: M
                  })
                : (0, a.jsx)(a.Fragment, { children: M })
    });
};
