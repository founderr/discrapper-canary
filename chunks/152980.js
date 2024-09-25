t.d(A, {
    s: function () {
        return f;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    s = t(120356),
    r = t.n(s),
    o = t(481060),
    l = t(205822),
    i = t(476326),
    d = t(377171),
    c = t(313201),
    u = t(374794),
    C = t(587123),
    g = t(863663),
    T = t(731994),
    I = t(629481),
    U = t(689938),
    p = t(423817);
let h = (0, c.hQ)();
function m(e) {
    var A;
    let { upload: t, progress: s = 0, onDeleteAttachment: l } = e,
        i = a.useCallback(() => {
            null == l || l(t.id);
        }, [l, t.id]),
        c = s >= 1,
        u = s < 0,
        C = c || u,
        T = null !== (A = t.filename) && void 0 !== A ? A : t.id,
        I = (0, g.kg)(s);
    return (0, n.jsx)(o.TooltipContainer, {
        text: I,
        children: (0, n.jsxs)('div', {
            className: r()(p.attachedFileCard, {
                [p.attachedFileCardError]: u,
                [p.attachedFileCardUploading]: !C
            }),
            children: [
                (0, n.jsx)(o.ImageFileIcon, {
                    size: 'xs',
                    color: d.Z.INTERACTIVE_MUTED
                }),
                (0, n.jsx)(o.Spacer, {
                    size: 10,
                    horizontal: !0
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: T
                }),
                !C &&
                    (0, n.jsx)(o.Spinner, {
                        className: p.attachedFileCardSpinner,
                        type: o.Spinner.Type.SPINNING_CIRCLE
                    }),
                C &&
                    null != l &&
                    (0, n.jsx)(o.Button, {
                        'aria-label': U.Z.Messages.GUILD_PRODUCT_DELETE_ATTACHMENT.format({ attachment: T }),
                        className: p.deleteButton,
                        innerClassName: p.deleteButtonInner,
                        look: o.Button.Looks.BLANK,
                        size: o.Button.Sizes.NONE,
                        onClick: i,
                        children: (0, n.jsx)(o.XSmallIcon, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: p.__invalid_deleteIcon
                        })
                    })
            ]
        })
    });
}
function f(e) {
    let { onFileAdded: A } = e,
        { uploads: t, canAttachFiles: s, canAttachArchives: r, addAttachment: d, deleteAttachment: c, fileUploadProgresses: g } = (0, C.P)(),
        f = a.useRef(!1);
    function v(e) {
        try {
            for (let A of e)
                d({
                    platform: i.ow.WEB,
                    file: A
                });
            f.current = !0;
        } catch {}
    }
    return (
        a.useEffect(() => {
            f.current && (A(), (f.current = !1));
        }, [A]),
        (0, n.jsxs)('div', {
            className: p.container,
            children: [
                (0, n.jsx)(l.Z, {
                    className: p.uploadArea,
                    title: U.Z.Messages.GUILD_PRODUCT_UPLOAD_AREA_TITLE,
                    description: U.Z.Messages.GUILD_PRODUCT_UPLOAD_AREA_INSTRUCTIONS,
                    icons: T.J6,
                    onDrop: v
                }),
                (0, n.jsxs)(u.Z, {
                    className: p.addFileButtonLook,
                    innerClassName: p.addFileButton,
                    color: o.Button.Colors.CUSTOM,
                    disabled: !s,
                    'aria-label': U.Z.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON,
                    'aria-describedby': h,
                    multiple: !0,
                    onChange: function (e) {
                        null != e.currentTarget.files && v(e.currentTarget.files);
                    },
                    children: [
                        (0, n.jsx)(o.ImageFileUpIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: p.addFileButtonIcon,
                            'aria-hidden': !0
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: U.Z.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON
                        })
                    ]
                }),
                (0, n.jsx)(o.Spacer, { size: 12 }),
                (0, n.jsx)(o.Text, {
                    id: h,
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    children: r ? U.Z.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS_ARCHIVES_ALLOWED.format({ fileUploadLimit: I.TR }) : U.Z.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS.format({ fileUploadLimit: I.TR })
                }),
                t.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)('div', { className: p.separator }),
                            (0, n.jsx)('ul', {
                                className: p.attachedFilesContainer,
                                'aria-label': U.Z.Messages.GUILD_PRODUCT_ATTACHED_FILES_SECTION_LABEL,
                                children: t.map((e) =>
                                    (0, n.jsx)(
                                        'li',
                                        {
                                            children: (0, n.jsx)(m, {
                                                upload: e,
                                                onDeleteAttachment: c,
                                                progress: g[e.id]
                                            })
                                        },
                                        e.id
                                    )
                                )
                            })
                        ]
                    })
            ]
        })
    );
}
