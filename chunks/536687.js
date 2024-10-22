e.r(o),
    e.d(o, {
        default: function () {
            return d;
        }
    });
var n = e(200651),
    s = e(481060),
    a = e(113434),
    i = e(918701),
    c = e(417575);
function d(t) {
    let { questId: o, transitionState: e } = t,
        d = (0, a.B4)(o);
    return null != d && (0, i.cr)(d)
        ? (0, n.jsx)('div', {
              children: (0, n.jsx)(s.ModalRoot, {
                  transitionState: e,
                  size: s.ModalSize.LARGE,
                  className: c.modalRoot,
                  children: (0, n.jsx)(s.Text, {
                      variant: 'text-sm/bold',
                      children: d.config.messages.questName
                  })
              })
          })
        : null;
}
