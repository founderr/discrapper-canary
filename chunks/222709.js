var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(481060),
    s = n(528963),
    l = n(143740),
    u = n(528144),
    c = n(212342),
    d = n(689938),
    _ = n(196273);
let E = (e) => {
    let { channelId: t, messageId: n } = e,
        E = (0, a.e7)([c.Z], () => c.Z.shouldShowBump(n), [n]),
        f = i.useCallback(() => {
            s.Z.dismissPublishBump(n), (0, l.Z)(t, n);
        }, [t, n]),
        h = i.useCallback(() => {
            s.Z.dismissPublishBump(n);
        }, [n]),
        p = i.useCallback(() => {
            s.Z.permanentlyHidePublishBump(t);
        }, [t]);
    return E
        ? (0, r.jsxs)('div', {
              className: _.container,
              children: [
                  (0, r.jsxs)('div', {
                      className: _.bumpBox,
                      children: [
                          (0, r.jsx)(o.AnnouncementsIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: _.icon
                          }),
                          (0, r.jsx)(u.Z, {
                              className: _.tagline,
                              size: u.Z.Sizes.SIZE_14,
                              children: d.Z.Messages.NEWS_CHANNEL_PUBLISH_BUMP
                          }),
                          (0, r.jsx)(o.Button, {
                              color: o.Button.Colors.LINK,
                              look: o.Button.Looks.LINK,
                              size: o.Button.Sizes.MIN,
                              className: _.publish,
                              onClick: f,
                              children: d.Z.Messages.NEWS_CHANNEL_PUBLISH
                          }),
                          (0, r.jsx)(o.Clickable, {
                              onClick: h,
                              children: (0, r.jsx)(o.CircleXIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: _.closeIcon
                              })
                          })
                      ]
                  }),
                  (0, r.jsx)(o.Text, {
                      color: 'text-muted',
                      className: _.hidePermanently,
                      variant: 'text-sm/normal',
                      children: (0, r.jsx)(o.Clickable, {
                          onClick: p,
                          children: d.Z.Messages.NEWS_CHANNEL_PUBLISH_BUMP_HIDE_PERMANENTLY
                      })
                  })
              ]
          })
        : null;
};
t.Z = E;
