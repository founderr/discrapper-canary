n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(25209),
    o = n(794295),
    s = n(865427),
    l = n(853425),
    u = n(49012),
    c = n(773352);
let d = 1024;
function _(e) {
    return {
        react(t, n, _) {
            if (e.enableBuildOverrides && (0, s._G)(t.target)) return (0, r.jsx)(i.Fragment, { children: (0, r.jsx)(l.Z, { url: t.target }, t.target) }, _.key);
            let E = n(t.content, _),
                f = 'string' == typeof t.title && 0 !== t.title.length ? t.title : (0, a.Rp)(t.content),
                h = () => (0, c.r)(t),
                p = (null == e ? void 0 : e.mustConfirmExternalLink)
                    ? (e) => (
                          null == e || e.stopPropagation(),
                          null == e || e.preventDefault(),
                          (0, u.q)({
                              href: t.target,
                              shouldConfirm: !0,
                              messageId: _.messageId,
                              channelId: _.channelId
                          }),
                          null
                      )
                    : void 0;
            if (_.previewLinkTarget && !(0, c.r)(t)) {
                let e = '\n\n('.concat(t.target, ')');
                f.length + e.length > d && ((e = '...' + e), (f = (f = f.substr(0, d - e.length)).trimEnd())), (f += e);
            }
            return _.noStyleAndInteraction
                ? (0, r.jsx)(
                      'span',
                      {
                          title: f,
                          children: E
                      },
                      _.key
                  )
                : (0, r.jsx)(
                      o.Z,
                      {
                          title: f,
                          href: t.target,
                          trusted: h,
                          onClick: p,
                          messageId: _.messageId,
                          channelId: _.channelId,
                          children: E
                      },
                      _.key
                  );
        }
    };
}
