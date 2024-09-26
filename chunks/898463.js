n.d(t, {
    Z: function () {
        return U;
    },
    r: function () {
        return P;
    }
});
var r = n(47120);
var i = n(315314);
var a = n(610138);
var o = n(216116);
var s = n(78328);
var l = n(815648);
var u = n(735250),
    c = n(470079),
    d = n(120356),
    _ = n.n(d),
    E = n(442837),
    f = n(481060),
    h = n(166459),
    p = n(95152),
    m = n(476326),
    I = n(543651),
    T = n(377171),
    g = n(95398),
    S = n(70097),
    A = n(592125),
    v = n(956664),
    N = n(709054),
    O = n(273031),
    R = n(859235),
    C = n(689938),
    y = n(671292);
let L = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/quicktime', 'video/mp4'];
function b(e) {
    let { alt: t, spoiler: n, renderContent: r, size: i } = e,
        [a, o] = c.useState(!1);
    return (0, u.jsx)(g.a.Provider, {
        value: !n,
        children: (0, u.jsx)(g.Z, {
            containerStyles:
                i === R.q.CLIP
                    ? {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          boxShadow: 'none'
                      }
                    : void 0,
            type: g.Z.Types.ATTACHMENT,
            onReveal: () => o(!0),
            className: y.spoilerContainer,
            children: (e) =>
                (0, u.jsxs)('div', {
                    className: y.spoilerWrapper,
                    children: [
                        r(e),
                        (0, u.jsxs)('div', {
                            className: y.tags,
                            children: [
                                null != t && '' !== t
                                    ? (0, u.jsx)('span', {
                                          className: y.altTag,
                                          children: C.Z.Messages.IMAGE_ALT
                                      })
                                    : null,
                                a && n
                                    ? (0, u.jsx)('span', {
                                          className: y.altTag,
                                          children: C.Z.Messages.SPOILER
                                      })
                                    : null
                            ]
                        })
                    ]
                })
        })
    });
}
function D(e) {
    let { file: t, alt: n, spoiler: r, size: i = R.q.MEDIUM, onMouseEnter: a } = e,
        [o, s] = c.useState(),
        [l, d] = c.useState({
            width: 0,
            height: 0
        }),
        E = i === R.q.SMALL;
    c.useEffect(() => {
        if (null == t || !1 === L.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        s(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, v.zp)(n.width, n.height);
                d({
                    width: e,
                    height: t
                });
            }),
            (n.src = e),
            () => {
                s(void 0),
                    d({
                        width: 0,
                        height: 0
                    }),
                    URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let h = c.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == o
                    ? (0, u.jsx)(u.Fragment, {})
                    : (0, u.jsx)('img', {
                          src: o,
                          className: _()(y.media, {
                              [y.spoiler]: e,
                              [y.imageSmall]: E
                          }),
                          'aria-hidden': !0,
                          alt: null != n ? n : '',
                          style: t ? l : {}
                      });
            },
            [o, E, n, l]
        ),
        p = c.useCallback(() => {
            if (null != o)
                (0, f.openModal)((e) =>
                    (0, u.jsx)(f.ModalRoot, {
                        className: y.__invalid_modal,
                        ...e,
                        size: f.ModalSize.DYNAMIC,
                        'aria-label': C.Z.Messages.IMAGE,
                        children: h(!1, !0)
                    })
                );
        }, [o, h]);
    return (0, u.jsx)('div', {
        onMouseEnter: a,
        className: _()(y.mediaContainer, { [y.imageSmall]: E }),
        children: (0, u.jsx)(f.Clickable, {
            onClick: p,
            className: y.clickableMedia,
            children: (0, u.jsx)(b, {
                size: i,
                alt: n,
                spoiler: r,
                renderContent: h
            })
        })
    });
}
function M(e) {
    let { file: t, alt: n, spoiler: r, size: i = R.q.MEDIUM, onMouseEnter: a, onVideoLoadError: o } = e,
        [s, l] = c.useState(),
        d = c.useRef(null);
    return (
        c.useEffect(() => {
            if (null == t) return;
            let e = URL.createObjectURL(t);
            return (
                l(e),
                () => {
                    l(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [t]),
        (0, u.jsx)('div', {
            onMouseEnter: a,
            className: y.mediaContainer,
            children: (0, u.jsx)(b, {
                size: i,
                alt: n,
                spoiler: r,
                renderContent: (e) =>
                    (0, u.jsx)(S.Z, {
                        ref: d,
                        src: s,
                        className: _()(y.media, {
                            [y.spoiler]: e,
                            [y.sizeClip]: i === R.q.CLIP
                        }),
                        onError: o,
                        preload: 'none',
                        'aria-hidden': !0
                    })
            })
        })
    );
}
function P(e) {
    var t;
    let { upload: n, size: r = R.q.MEDIUM, onMouseEnter: i } = e,
        [a, o] = c.useState(!1),
        s = r === R.q.SMALL;
    return n.isImage && n.item.platform === m.ow.WEB
        ? (0, u.jsx)(D, {
              file: n.item.file,
              alt: n.description,
              spoiler: n.spoiler,
              size: r,
              onMouseEnter: i
          })
        : !a && n.isVideo && n.item.platform === m.ow.WEB
          ? (0, u.jsx)(M, {
                file: n.item.file,
                size: r,
                alt: n.description,
                spoiler: n.spoiler,
                onMouseEnter: i,
                onVideoLoadError: () => o(!0)
            })
          : (0, u.jsx)('div', {
                onMouseEnter: i,
                className: _()(y.icon, y.__invalid_imageContainer, {
                    [y[null !== (t = n.classification) && void 0 !== t ? t : '']]: !0,
                    [y.imageSmall]: s
                }),
                children: (0, u.jsx)('div', {
                    className: y.tags,
                    children: n.spoiler
                        ? (0, u.jsx)('span', {
                              className: y.altTag,
                              children: C.Z.Messages.SPOILER
                          })
                        : null
                })
            });
}
function U(e) {
    let { channelId: t, draftType: n, upload: r, keyboardModeEnabled: i, label: a, size: o = R.q.MEDIUM, canEdit: s = !0, hideFileName: l = !1, clip: d } = e,
        m = null != d,
        g = (o = m ? R.q.CLIP : o) === R.q.SMALL,
        S = (0, E.e7)([A.Z], () => {
            var e;
            return null === (e = A.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
        }),
        v = (e) => {
            e.stopPropagation(),
                (0, f.openModal)((e) =>
                    (0, u.jsx)(p.default, {
                        ...e,
                        draftType: n,
                        upload: r,
                        channelId: t,
                        onSubmit: (e) => {
                            let { name: i, description: a, spoiler: o } = e;
                            h.Z.update(t, r.id, n, {
                                filename: i,
                                description: a,
                                spoiler: o
                            });
                        }
                    })
                );
        };
    return (0, u.jsxs)(R.Z, {
        actions: (0, u.jsxs)(c.Fragment, {
            children: [
                s
                    ? (0, u.jsx)(O.Z, {
                          className: _()({ [y.action]: g }),
                          tooltip: m ? C.Z.Messages.CLIPS_ATTACHMENT_UTILITIES_SPOILER : C.Z.Messages.ATTACHMENT_UTILITIES_SPOILER,
                          onClick: () => h.Z.update(t, r.id, n, { spoiler: !r.spoiler }),
                          children: r.spoiler
                              ? (0, u.jsx)(f.EyeSlashIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: _()({ [y.actionBarIcon]: g })
                                })
                              : (0, u.jsx)(f.EyeIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: _()({ [y.actionBarIcon]: g })
                                })
                      })
                    : null,
                s && !m
                    ? (0, u.jsx)(O.Z, {
                          className: _()({ [y.action]: g }),
                          tooltip: C.Z.Messages.ATTACHMENT_UTILITIES_MODIFY,
                          onClick: v,
                          children: (0, u.jsx)(f.PencilIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: _()({ [y.actionBarIcon]: g })
                          })
                      })
                    : null,
                (0, u.jsx)(O.Z, {
                    className: _()({ [y.action]: g }),
                    tooltip: m ? C.Z.Messages.CLIPS_ATTACHMENT_UTILITIES_REMOVE : C.Z.Messages.ATTACHMENT_UTILITIES_REMOVE,
                    onClick: () => h.Z.remove(t, r.id, n),
                    dangerous: !0,
                    children: (0, u.jsx)(f.TrashIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: _()({ [y.actionBarIcon]: g })
                    })
                })
            ]
        }),
        draftType: n,
        id: r.id,
        channelId: t,
        handleEditModal: v,
        keyboardModeEnabled: i,
        size: o,
        className: _()({ [y.attachmentItemSmall]: g }),
        children: [
            (0, u.jsx)(P, {
                upload: r,
                size: o
            }),
            !l &&
                !m &&
                (0, u.jsx)('div', {
                    className: y.filenameContainer,
                    children: (0, u.jsx)(f.Text, {
                        className: y.filename,
                        variant: 'text-sm/normal',
                        children: null != a ? a : r.filename
                    })
                }),
            m &&
                (0, u.jsxs)(u.Fragment, {
                    children: [
                        (0, u.jsx)(I.Z, {
                            className: y.clipsFooter,
                            createdAt: N.default.extractTimestamp(d.id),
                            participantIds: d.users,
                            applicationId: d.applicationId,
                            title: d.name,
                            guildId: S
                        }),
                        (0, u.jsx)(f.TextBadge, {
                            color: T.Z.BG_BRAND,
                            className: y.clipsBadge,
                            text: C.Z.Messages.CLIP_TAG
                        })
                    ]
                })
        ]
    });
}
