n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(166459),
    u = n(53281),
    c = n(476326),
    d = n(703558),
    f = n(117530),
    _ = n(859235),
    h = n(898463),
    p = n(981631),
    m = n(465126),
    g = n(451328);
function E(e) {
    let { channelId: t, option: n, keyboardModeEnabled: a } = e,
        E = i.useRef(null),
        [v, I] = i.useState(!1),
        S = f.Z.getUpload(t, n.name, d.d.SlashCommand),
        T = i.useRef(null),
        b = i.useCallback(() => {
            I(!0);
        }, []),
        y = i.useCallback(() => {
            I(!1);
        }, []),
        A = i.useCallback(
            (e) => {
                var r;
                I(!1);
                let i = {
                    id: n.name,
                    file: null === (r = e.dataTransfer) || void 0 === r ? void 0 : r.files[0],
                    platform: c.ow.WEB
                };
                l.Z.setFile({
                    channelId: t,
                    id: n.name,
                    file: i,
                    draftType: d.d.SlashCommand
                });
            },
            [t, n]
        );
    return (i.useEffect(() => {
        let e = T.current;
        return (
            null == S && (null == e || e.addEventListener('dragover', b, !1), null == e || e.addEventListener('dragleave', y, !1), null == e || e.addEventListener('drop', A, !1)),
            () => {
                null == e || e.removeEventListener('dragover', b, !1), null == e || e.removeEventListener('dragleave', y, !1), null == e || e.removeEventListener('drop', A, !1);
            }
        );
    }, [S, b, y, A]),
    null != S)
        ? (0, r.jsx)(h.Z, {
              channelId: t,
              upload: S,
              keyboardModeEnabled: a,
              draftType: d.d.SlashCommand,
              label: (0, r.jsxs)(i.Fragment, {
                  children: [
                      (0, r.jsxs)(o.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          children: [n.name, ': ']
                      }),
                      (0, r.jsx)(o.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'text-brand',
                          children: S.filename
                      })
                  ]
              }),
              canEdit: !1
          })
        : (0, r.jsxs)(_.Z, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: a,
              onKeyDown: (e) => {
                  if (e.which === p.yXg.ENTER) {
                      var t;
                      e.preventDefault(), null === (t = E.current) || void 0 === t || t.activateUploadDialogue();
                  }
              },
              className: s()(m.emptyOption, { [m.emptyOptionActive]: v }),
              draftType: d.d.SlashCommand,
              ref: T,
              children: [
                  (0, r.jsx)('span', {
                      className: s()(m.optionName, { [m.optionNameActive]: v }),
                      children: n.name
                  }),
                  (0, r.jsx)(o.Clickable, {
                      className: m.clickContainer,
                      onClick: () => {
                          var e;
                          return null === (e = E.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                      },
                      children: (0, r.jsxs)('div', {
                          className: m.commandOptionContainer,
                          children: [
                              (0, r.jsx)('img', {
                                  src: g,
                                  className: m.optionIcon,
                                  alt: ''
                              }),
                              (0, r.jsx)(o.Text, {
                                  className: m.optionHelp,
                                  variant: 'text-sm/normal',
                                  children: 'Drag and drop or click to upload file'
                              }),
                              (0, r.jsx)(u.Z, {
                                  ref: E,
                                  onChange: (e) => {
                                      var r, i;
                                      if (null != t && (null === (i = e.currentTarget) || void 0 === i ? void 0 : null === (r = i.files) || void 0 === r ? void 0 : r[0]) != null) {
                                          let r = {
                                              id: n.name,
                                              file: e.currentTarget.files[0],
                                              platform: c.ow.WEB
                                          };
                                          l.Z.setFile({
                                              channelId: t,
                                              id: n.name,
                                              file: r,
                                              draftType: d.d.SlashCommand
                                          }),
                                              (e.currentTarget.value = '');
                                      }
                                  },
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
