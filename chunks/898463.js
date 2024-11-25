n.d(t, {
    Z: function () {
        return R;
    },
    r: function () {
        return C;
    }
}),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(166459),
    c = n(95152),
    d = n(476326),
    f = n(543651),
    _ = n(377171),
    p = n(95398),
    h = n(70097),
    m = n(592125),
    g = n(956664),
    E = n(709054),
    v = n(273031),
    I = n(859235),
    b = n(388032),
    T = n(26577);
let S = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/quicktime', 'video/mp4'];
function y(e) {
    let { alt: t, spoiler: n, renderContent: a, size: s } = e,
        [o, l] = i.useState(!1);
    return (0, r.jsx)(p.a.Provider, {
        value: !n,
        children: (0, r.jsx)(p.Z, {
            containerStyles:
                s === I.q.CLIP
                    ? {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          boxShadow: 'none'
                      }
                    : void 0,
            type: p.Z.Types.ATTACHMENT,
            onReveal: () => l(!0),
            className: T.spoilerContainer,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: T.spoilerWrapper,
                    children: [
                        a(e),
                        (0, r.jsxs)('div', {
                            className: T.tags,
                            children: [
                                null != t && '' !== t
                                    ? (0, r.jsx)('span', {
                                          className: T.altTag,
                                          children: b.intl.string(b.t.QEW819)
                                      })
                                    : null,
                                o && n
                                    ? (0, r.jsx)('span', {
                                          className: T.altTag,
                                          children: b.intl.string(b.t['F+x38P'])
                                      })
                                    : null
                            ]
                        })
                    ]
                })
        })
    });
}
function A(e) {
    let { file: t, alt: n, spoiler: a, size: o = I.q.MEDIUM, onMouseEnter: u } = e,
        [c, d] = i.useState(),
        [f, _] = i.useState({
            width: 0,
            height: 0
        }),
        p = o === I.q.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === S.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, g.zp)(n.width, n.height);
                _({
                    width: e,
                    height: t
                });
            }),
            (n.src = e),
            () => {
                d(void 0),
                    _({
                        width: 0,
                        height: 0
                    }),
                    URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let h = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == c
                    ? (0, r.jsx)(r.Fragment, {})
                    : (0, r.jsx)('img', {
                          src: c,
                          className: s()(T.media, {
                              [T.spoiler]: e,
                              [T.imageSmall]: p
                          }),
                          'aria-hidden': !0,
                          alt: null != n ? n : '',
                          style: t ? f : {}
                      });
            },
            [c, p, n, f]
        ),
        m = i.useCallback(() => {
            if (null != c)
                (0, l.openModal)((e) =>
                    (0, r.jsx)(l.ModalRoot, {
                        className: T.__invalid_modal,
                        ...e,
                        size: l.ModalSize.DYNAMIC,
                        'aria-label': b.intl.string(b.t.X4IxWF),
                        children: h(!1, !0)
                    })
                );
        }, [c, h]);
    return (0, r.jsx)('div', {
        onMouseEnter: u,
        className: s()(T.mediaContainer, { [T.imageSmall]: p }),
        children: (0, r.jsx)(l.Clickable, {
            onClick: m,
            className: T.clickableMedia,
            children: (0, r.jsx)(y, {
                size: o,
                alt: n,
                spoiler: a,
                renderContent: h
            })
        })
    });
}
function N(e) {
    let { file: t, alt: n, spoiler: a, size: o = I.q.MEDIUM, onMouseEnter: l, onVideoLoadError: u } = e,
        [c, d] = i.useState(),
        f = i.useRef(null);
    return (
        i.useEffect(() => {
            if (null == t) return;
            let e = URL.createObjectURL(t);
            return (
                d(e),
                () => {
                    d(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [t]),
        (0, r.jsx)('div', {
            onMouseEnter: l,
            className: T.mediaContainer,
            children: (0, r.jsx)(y, {
                size: o,
                alt: n,
                spoiler: a,
                renderContent: (e) =>
                    (0, r.jsx)(h.Z, {
                        ref: f,
                        src: c,
                        className: s()(T.media, {
                            [T.spoiler]: e,
                            [T.sizeClip]: o === I.q.CLIP
                        }),
                        onError: u,
                        preload: 'none',
                        'aria-hidden': !0
                    })
            })
        })
    );
}
function C(e) {
    var t;
    let { upload: n, size: a = I.q.MEDIUM, onMouseEnter: o } = e,
        [l, u] = i.useState(!1),
        c = a === I.q.SMALL;
    return n.isImage && n.item.platform === d.ow.WEB
        ? (0, r.jsx)(A, {
              file: n.item.file,
              alt: n.description,
              spoiler: n.spoiler,
              size: a,
              onMouseEnter: o
          })
        : !l && n.isVideo && n.item.platform === d.ow.WEB
          ? (0, r.jsx)(N, {
                file: n.item.file,
                size: a,
                alt: n.description,
                spoiler: n.spoiler,
                onMouseEnter: o,
                onVideoLoadError: () => u(!0)
            })
          : (0, r.jsx)('div', {
                onMouseEnter: o,
                className: s()(T.icon, T.__invalid_imageContainer, {
                    [T[null !== (t = n.classification) && void 0 !== t ? t : '']]: !0,
                    [T.imageSmall]: c
                }),
                children: (0, r.jsx)('div', {
                    className: T.tags,
                    children: n.spoiler
                        ? (0, r.jsx)('span', {
                              className: T.altTag,
                              children: b.intl.string(b.t['F+x38P'])
                          })
                        : null
                })
            });
}
function R(e) {
    let { channelId: t, draftType: n, upload: a, keyboardModeEnabled: d, label: p, size: h = I.q.MEDIUM, canEdit: g = !0, hideFileName: S = !1, clip: y } = e,
        A = null != y,
        N = (h = A ? I.q.CLIP : h) === I.q.SMALL,
        R = (0, o.e7)([m.Z], () => {
            var e;
            return null === (e = m.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
        }),
        O = (e) => {
            e.stopPropagation(),
                (0, l.openModal)((e) =>
                    (0, r.jsx)(c.default, {
                        ...e,
                        draftType: n,
                        upload: a,
                        channelId: t,
                        onSubmit: (e) => {
                            let { name: r, description: i, spoiler: s } = e;
                            u.Z.update(t, a.id, n, {
                                filename: r,
                                description: i,
                                spoiler: s
                            });
                        }
                    })
                );
        };
    return (0, r.jsxs)(I.Z, {
        actions: (0, r.jsxs)(i.Fragment, {
            children: [
                g
                    ? (0, r.jsx)(v.Z, {
                          className: s()({ [T.action]: N }),
                          tooltip: A ? b.intl.string(b.t.MYgdY2) : b.intl.string(b.t.cuurzM),
                          onClick: () => u.Z.update(t, a.id, n, { spoiler: !a.spoiler }),
                          children: a.spoiler
                              ? (0, r.jsx)(l.EyeSlashIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: s()({ [T.actionBarIcon]: N })
                                })
                              : (0, r.jsx)(l.EyeIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: s()({ [T.actionBarIcon]: N })
                                })
                      })
                    : null,
                g && !A
                    ? (0, r.jsx)(v.Z, {
                          className: s()({ [T.action]: N }),
                          tooltip: b.intl.string(b.t.Y8ujqq),
                          onClick: O,
                          children: (0, r.jsx)(l.PencilIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: s()({ [T.actionBarIcon]: N })
                          })
                      })
                    : null,
                (0, r.jsx)(v.Z, {
                    className: s()({ [T.action]: N }),
                    tooltip: A ? b.intl.string(b.t.MskAXV) : b.intl.string(b.t.vN7REx),
                    onClick: () => u.Z.remove(t, a.id, n),
                    dangerous: !0,
                    children: (0, r.jsx)(l.TrashIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: s()({ [T.actionBarIcon]: N })
                    })
                })
            ]
        }),
        draftType: n,
        id: a.id,
        channelId: t,
        handleEditModal: O,
        keyboardModeEnabled: d,
        size: h,
        className: s()({ [T.attachmentItemSmall]: N }),
        children: [
            (0, r.jsx)(C, {
                upload: a,
                size: h
            }),
            !S &&
                !A &&
                (0, r.jsx)('div', {
                    className: T.filenameContainer,
                    children: (0, r.jsx)(l.Text, {
                        className: T.filename,
                        variant: 'text-sm/normal',
                        children: null != p ? p : a.filename
                    })
                }),
            A &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.Z, {
                            className: T.clipsFooter,
                            createdAt: E.default.extractTimestamp(y.id),
                            participantIds: y.users,
                            applicationId: y.applicationId,
                            title: y.name,
                            guildId: R
                        }),
                        (0, r.jsx)(l.TextBadge, {
                            color: _.Z.BG_BRAND,
                            className: T.clipsBadge,
                            text: b.intl.string(b.t.oA4afH)
                        })
                    ]
                })
        ]
    });
}
