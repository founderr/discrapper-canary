n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(166459),
    c = n(53281),
    d = n(476326),
    _ = n(703558),
    E = n(117530),
    f = n(859235),
    h = n(898463),
    p = n(981631),
    m = n(52522),
    I = n(451328);
function T(e) {
    let { channelId: t, option: n, keyboardModeEnabled: r } = e,
        o = a.useRef(null),
        [T, g] = a.useState(!1),
        S = E.Z.getUpload(t, n.name, _.d.SlashCommand),
        A = a.useRef(null),
        v = (e) => {
            if (e.which === p.yXg.ENTER) {
                var t;
                e.preventDefault(), null === (t = o.current) || void 0 === t || t.activateUploadDialogue();
            }
        },
        N = a.useCallback(() => {
            g(!0);
        }, []),
        O = a.useCallback(() => {
            g(!1);
        }, []),
        R = a.useCallback(
            (e) => {
                var r;
                g(!1);
                let i = {
                    id: n.name,
                    file: null === (r = e.dataTransfer) || void 0 === r ? void 0 : r.files[0],
                    platform: d.ow.WEB
                };
                u.Z.setFile({
                    channelId: t,
                    id: n.name,
                    file: i,
                    draftType: _.d.SlashCommand
                });
            },
            [t, n]
        );
    a.useEffect(() => {
        let e = A.current;
        return (
            null == S && (null == e || e.addEventListener('dragover', N, !1), null == e || e.addEventListener('dragleave', O, !1), null == e || e.addEventListener('drop', R, !1)),
            () => {
                null == e || e.removeEventListener('dragover', N, !1), null == e || e.removeEventListener('dragleave', O, !1), null == e || e.removeEventListener('drop', R, !1);
            }
        );
    }, [S, N, O, R]);
    let C = (e) => {
        var r, i;
        if (null != t && (null === (i = e.currentTarget) || void 0 === i ? void 0 : null === (r = i.files) || void 0 === r ? void 0 : r[0]) != null) {
            let r = {
                id: n.name,
                file: e.currentTarget.files[0],
                platform: d.ow.WEB
            };
            u.Z.setFile({
                channelId: t,
                id: n.name,
                file: r,
                draftType: _.d.SlashCommand
            }),
                (e.currentTarget.value = '');
        }
    };
    return null != S
        ? (0, i.jsx)(h.Z, {
              channelId: t,
              upload: S,
              keyboardModeEnabled: r,
              draftType: _.d.SlashCommand,
              label: (0, i.jsxs)(a.Fragment, {
                  children: [
                      (0, i.jsxs)(l.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          children: [n.name, ': ']
                      }),
                      (0, i.jsx)(l.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'text-brand',
                          children: S.filename
                      })
                  ]
              }),
              canEdit: !1
          })
        : (0, i.jsxs)(f.Z, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: r,
              onKeyDown: v,
              className: s()(m.emptyOption, { [m.emptyOptionActive]: T }),
              draftType: _.d.SlashCommand,
              ref: A,
              children: [
                  (0, i.jsx)('span', {
                      className: s()(m.optionName, { [m.optionNameActive]: T }),
                      children: n.name
                  }),
                  (0, i.jsx)(l.Clickable, {
                      className: m.clickContainer,
                      onClick: () => {
                          var e;
                          return null === (e = o.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                      },
                      children: (0, i.jsxs)('div', {
                          className: m.commandOptionContainer,
                          children: [
                              (0, i.jsx)('img', {
                                  src: I,
                                  className: m.optionIcon,
                                  alt: ''
                              }),
                              (0, i.jsx)(l.Text, {
                                  className: m.optionHelp,
                                  variant: 'text-sm/normal',
                                  children: 'Drag and drop or click to upload file'
                              }),
                              (0, i.jsx)(c.Z, {
                                  ref: o,
                                  onChange: C,
                                  multiple: !1,
                                  tabIndex: -1,
                                  'aria-hidden': !0,
                                  className: m.fileInput
                              })
                          ]
                      })
                  })
              ]
          });
}
