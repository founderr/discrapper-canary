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
    b = n(859235),
    I = n(388032),
    S = n(647366);
let T = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/quicktime', 'video/mp4'];
function y(e) {
    let { alt: t, spoiler: n, renderContent: a, size: s } = e,
        [o, l] = i.useState(!1);
    return (0, r.jsx)(p.a.Provider, {
        value: !n,
        children: (0, r.jsx)(p.Z, {
            containerStyles:
                s === b.q.CLIP
                    ? {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          boxShadow: 'none'
                      }
                    : void 0,
            type: p.Z.Types.ATTACHMENT,
            onReveal: () => l(!0),
            className: S.spoilerContainer,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: S.spoilerWrapper,
                    children: [
                        a(e),
                        (0, r.jsxs)('div', {
                            className: S.tags,
                            children: [
                                null != t && '' !== t
                                    ? (0, r.jsx)('span', {
                                          className: S.altTag,
                                          children: I.intl.string(I.t.QEW819)
                                      })
                                    : null,
                                o && n
                                    ? (0, r.jsx)('span', {
                                          className: S.altTag,
                                          children: I.intl.string(I.t['F+x38P'])
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
    let { file: t, alt: n, spoiler: a, size: o = b.q.MEDIUM, onMouseEnter: u } = e,
        [c, d] = i.useState(),
        [f, _] = i.useState({
            width: 0,
            height: 0
        }),
        p = o === b.q.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === T.includes(t.type)) return;
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
                          className: s()(S.media, {
                              [S.spoiler]: e,
                              [S.imageSmall]: p
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
                        className: S.__invalid_modal,
                        ...e,
                        size: l.ModalSize.DYNAMIC,
                        'aria-label': I.intl.string(I.t.X4IxWF),
                        children: h(!1, !0)
                    })
                );
        }, [c, h]);
    return (0, r.jsx)('div', {
        onMouseEnter: u,
        className: s()(S.mediaContainer, { [S.imageSmall]: p }),
        children: (0, r.jsx)(l.Clickable, {
            onClick: m,
            className: S.clickableMedia,
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
    let { file: t, alt: n, spoiler: a, size: o = b.q.MEDIUM, onMouseEnter: l, onVideoLoadError: u } = e,
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
            className: S.mediaContainer,
            children: (0, r.jsx)(y, {
                size: o,
                alt: n,
                spoiler: a,
                renderContent: (e) =>
                    (0, r.jsx)(h.Z, {
                        ref: f,
                        src: c,
                        className: s()(S.media, {
                            [S.spoiler]: e,
                            [S.sizeClip]: o === b.q.CLIP
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
    let { upload: n, size: a = b.q.MEDIUM, onMouseEnter: o } = e,
        [l, u] = i.useState(!1),
        c = a === b.q.SMALL;
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
                className: s()(S.icon, S.__invalid_imageContainer, {
                    [S[null !== (t = n.classification) && void 0 !== t ? t : '']]: !0,
                    [S.imageSmall]: c
                }),
                children: (0, r.jsx)('div', {
                    className: S.tags,
                    children: n.spoiler
                        ? (0, r.jsx)('span', {
                              className: S.altTag,
                              children: I.intl.string(I.t['F+x38P'])
                          })
                        : null
                })
            });
}
function R(e) {
    let { channelId: t, draftType: n, upload: a, keyboardModeEnabled: d, label: p, size: h = b.q.MEDIUM, canEdit: g = !0, hideFileName: T = !1, clip: y } = e,
        A = null != y,
        N = (h = A ? b.q.CLIP : h) === b.q.SMALL,
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
    return (0, r.jsxs)(b.Z, {
        actions: (0, r.jsxs)(i.Fragment, {
            children: [
                g
                    ? (0, r.jsx)(v.Z, {
                          className: s()({ [S.action]: N }),
                          tooltip: A ? I.intl.string(I.t.MYgdY2) : I.intl.string(I.t.cuurzM),
                          onClick: () => u.Z.update(t, a.id, n, { spoiler: !a.spoiler }),
                          children: a.spoiler
                              ? (0, r.jsx)(l.EyeSlashIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: s()({ [S.actionBarIcon]: N })
                                })
                              : (0, r.jsx)(l.EyeIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: s()({ [S.actionBarIcon]: N })
                                })
                      })
                    : null,
                g && !A
                    ? (0, r.jsx)(v.Z, {
                          className: s()({ [S.action]: N }),
                          tooltip: I.intl.string(I.t.Y8ujqq),
                          onClick: O,
                          children: (0, r.jsx)(l.PencilIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: s()({ [S.actionBarIcon]: N })
                          })
                      })
                    : null,
                (0, r.jsx)(v.Z, {
                    className: s()({ [S.action]: N }),
                    tooltip: A ? I.intl.string(I.t.MskAXV) : I.intl.string(I.t.vN7REx),
                    onClick: () => u.Z.remove(t, a.id, n),
                    dangerous: !0,
                    children: (0, r.jsx)(l.TrashIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: s()({ [S.actionBarIcon]: N })
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
        className: s()({ [S.attachmentItemSmall]: N }),
        children: [
            (0, r.jsx)(C, {
                upload: a,
                size: h
            }),
            !T &&
                !A &&
                (0, r.jsx)('div', {
                    className: S.filenameContainer,
                    children: (0, r.jsx)(l.Text, {
                        className: S.filename,
                        variant: 'text-sm/normal',
                        children: null != p ? p : a.filename
                    })
                }),
            A &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.Z, {
                            className: S.clipsFooter,
                            createdAt: E.default.extractTimestamp(y.id),
                            participantIds: y.users,
                            applicationId: y.applicationId,
                            title: y.name,
                            guildId: R
                        }),
                        (0, r.jsx)(l.TextBadge, {
                            color: _.Z.BG_BRAND,
                            className: S.clipsBadge,
                            text: I.intl.string(I.t.oA4afH)
                        })
                    ]
                })
        ]
    });
}
