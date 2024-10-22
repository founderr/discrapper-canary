n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(481060),
    r = n(581364),
    l = n(665692),
    o = n(689938),
    c = n(974079);
function d(e) {
    let { application: t } = e,
        n = a.useMemo(() => {
            var e;
            let n = null === (e = t.directory_entry) || void 0 === e ? void 0 : e.popular_application_commands;
            return null != n
                ? n.map((e) =>
                      (0, r.Z8)({
                          rootCommand: e,
                          command: e,
                          applicationId: e.application_id
                      })
                  )
                : [];
        }, [t]);
    return 0 === n.length
        ? null
        : (0, i.jsxs)('div', {
              className: c.sectionContainer,
              children: [
                  (0, i.jsx)(s.Heading, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: o.Z.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
                  }),
                  (0, i.jsx)('div', {
                      className: c.contentContainer,
                      children: n.map((e) =>
                          (0, i.jsxs)(
                              'div',
                              {
                                  className: c.commandContainer,
                                  children: [
                                      (0, i.jsxs)(s.Text, {
                                          className: c.commandName,
                                          variant: 'code',
                                          color: 'header-primary',
                                          children: [l.GI, e.displayName]
                                      }),
                                      (0, i.jsx)(s.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-normal',
                                          children: e.displayDescription
                                      })
                                  ]
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
