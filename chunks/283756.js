var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(249458),
    l = n(138599),
    u = n(388032),
    c = n(652750);
t.Z = (e) => {
    let { onPlay: t, externalURL: n, className: i, renderLinkComponent: d, inactive: f, messageId: _, channelId: h } = e;
    return (0, r.jsx)(o.G.Consumer, {
        children: (e) =>
            (0, r.jsxs)('div', {
                className: a()(i, c.wrapper, { [c.disableInteractions]: e.disableInteractions }),
                children: [
                    f && null == t
                        ? (0, r.jsx)('div', {
                              className: c.iconWrapper,
                              children: (0, r.jsx)(s.PlayIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: c.iconPlay
                              })
                          })
                        : null,
                    null != t
                        ? (0, r.jsx)(s.Clickable, {
                              onClick: t,
                              className: a()(c.iconWrapperActive),
                              tabIndex: f ? -1 : 0,
                              'aria-label': u.intl.string(u.t.RscU7O),
                              children: (0, r.jsx)(s.PlayIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: c.iconPlay
                              })
                          })
                        : null,
                    null != n
                        ? d({
                              href: n,
                              target: '_blank',
                              rel: 'noreferrer noopener',
                              className: c.iconWrapperActive,
                              children: (0, r.jsx)(l.Z, {
                                  'aria-label': u.intl.string(u.t.wuRE8P),
                                  className: null != t ? c.iconExternalMargins : c.iconExternal
                              }),
                              messageId: _,
                              channelId: h
                          })
                        : null
                ]
            })
    });
};
