n.d(t, {
    F: function () {
        return E;
    },
    Y: function () {
        return _;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(772848),
    o = n(993365),
    s = n(481060),
    l = n(245216),
    u = n(561466),
    c = n(482617);
function d(e) {
    switch (e) {
        case u.pC.SUCCESS:
            return (0, r.jsx)(s.CheckmarkLargeIcon, {
                size: 'md',
                className: c.icon,
                color: s.tokens.colors.STATUS_POSITIVE.css
            });
        case u.pC.FAILURE:
            return (0, r.jsx)(s.XLargeIcon, {
                size: 'md',
                className: c.icon,
                color: s.tokens.colors.STATUS_DANGER.css
            });
        case u.pC.CLIP:
            return (0, r.jsx)(s.ClipsIcon, {
                size: 'xs',
                className: c.clipIcon,
                color: s.tokens.colors.HEADER_PRIMARY.css
            });
        case u.pC.LINK:
            return (0, r.jsx)(s.LinkIcon, {
                className: c.icon,
                color: s.tokens.colors.HEADER_PRIMARY.css
            });
        case u.pC.FORWARD:
            return (0, r.jsx)(l.Z, {
                className: c.icon,
                color: s.tokens.colors.STATUS_POSITIVE.css
            });
        case u.pC.BOOKMARK:
            return (0, r.jsx)(s.BookmarkIcon, {
                className: c.icon,
                color: s.tokens.colors.HEADER_PRIMARY.css
            });
        case u.pC.CLOCK:
            return (0, r.jsx)(s.ClockIcon, {
                className: c.icon,
                color: s.tokens.colors.HEADER_PRIMARY.css
            });
        default:
            return null;
    }
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.si,
        { position: r = u.si.position, component: i = u.si.component, duration: o = u.si.duration } = n;
    return {
        message: e,
        id: (0, a.Z)(),
        type: t,
        options: {
            position: r,
            component: i,
            duration: o
        }
    };
}
let E = i.memo(function (e) {
    let { message: t, type: n, id: i, options: { component: a = u.si.component } = u.si } = e;
    return null != a
        ? (0, r.jsx)(r.Fragment, { children: a })
        : (0, r.jsxs)('div', {
              id: i,
              className: c.toast,
              children: [
                  d(n),
                  (0, r.jsx)(o.x, {
                      className: c.__invalid_content,
                      color: 'header-primary',
                      variant: 'text-md/normal',
                      children: t
                  })
              ]
          });
});
