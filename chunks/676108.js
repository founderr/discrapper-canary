n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(318766),
    o = n(907040),
    l = n(28546),
    u = n(872635),
    c = n(185923),
    d = n(220869);
function f(e) {
    var t;
    let { editorRef: n, options: f, channel: _ } = e,
        h = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor(),
        p = i.useCallback(
            (e, t) => {
                let r = n.current;
                null != e && null != r && r.insertEmoji(e, t, !1), t && (0, l._Q)();
            },
            [n]
        );
    return null == h
        ? null
        : (0, r.jsxs)('div', {
              id: 'slate-toolbar',
              className: d.staticToolbar,
              children: [
                  (0, r.jsx)('div', {
                      className: d.staticButtons,
                      children: (0, r.jsx)(u.I, {
                          editorRef: n,
                          options: f,
                          iconClassName: d.staticIcon,
                          dividerClassName: d.staticDivider
                      })
                  }),
                  (0, r.jsx)(a.Popout, {
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, r.jsx)(o.Z, {
                              persistSearch: !0,
                              channel: _,
                              closePopout: t,
                              onSelectEmoji: (e, n) => {
                                  p(e, n), n && t();
                              },
                              pickerIntention: c.Hz.COMMUNITY_CONTENT
                          });
                      },
                      position: 'bottom',
                      animation: a.Popout.Animation.NONE,
                      align: 'left',
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, r.jsx)(s.Z, {
                              ...e,
                              active: n,
                              className: d.emojiButton,
                              tabIndex: 0
                          });
                      }
                  })
              ]
          });
}
