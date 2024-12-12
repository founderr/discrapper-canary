r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(25209),
    o = r(794295),
    l = r(865427),
    u = r(853425),
    c = r(49012),
    d = r(773352);
let f = 1024;
function _(e) {
    return {
        react(n, r, _) {
            if (e.enableBuildOverrides && (0, l._G)(n.target)) return (0, i.jsx)(a.Fragment, { children: (0, i.jsx)(u.Z, { url: n.target }, n.target) }, _.key);
            let h = r(n.content, _),
                p = 'string' == typeof n.title && 0 !== n.title.length ? n.title : (0, s.Rp)(n.content),
                m = () => (0, d.r)(n),
                g = (null == e ? void 0 : e.mustConfirmExternalLink)
                    ? (e) => (
                          null == e || e.stopPropagation(),
                          null == e || e.preventDefault(),
                          (0, c.q)({
                              href: n.target,
                              shouldConfirm: !0,
                              messageId: _.messageId,
                              channelId: _.channelId
                          }),
                          null
                      )
                    : void 0;
            if (_.previewLinkTarget && !(0, d.r)(n)) {
                let e = '\n\n('.concat(n.target, ')');
                p.length + e.length > f && ((e = '...' + e), (p = (p = p.substr(0, f - e.length)).trimEnd())), (p += e);
            }
            return _.noStyleAndInteraction
                ? (0, i.jsx)(
                      'span',
                      {
                          title: p,
                          children: h
                      },
                      _.key
                  )
                : (0, i.jsx)(
                      o.Z,
                      {
                          title: p,
                          href: n.target,
                          trusted: m,
                          onClick: g,
                          messageId: _.messageId,
                          channelId: _.channelId,
                          children: h
                      },
                      _.key
                  );
        }
    };
}
