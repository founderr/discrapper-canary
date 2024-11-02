n.d(t, {
    Z: function () {
        return h;
    },
    j: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(139387),
    s = n(852860),
    a = n(490655),
    o = n(434404),
    c = n(360606),
    d = n(999382),
    u = n(821864),
    m = n(905753);
function h(e) {
    let { refToScroller: t } = e,
        n = (0, r.e7)([d.Z], () => d.Z.getGuild()),
        {
            section: l,
            sectionId: s,
            integrations: o,
            editedIntegration: u,
            webhooks: m,
            editedWebhook: h,
            isFetching: g,
            errors: x
        } = (0, r.cj)([c.Z], () => ({
            editedIntegration: c.Z.editedIntegration,
            editedWebhook: c.Z.editedWebhook,
            errors: c.Z.getErrors(),
            integrations: c.Z.integrations,
            isFetching: c.Z.isFetching(),
            section: c.Z.getSection(),
            sectionId: c.Z.getSectionId(),
            webhooks: c.Z.webhooks
        }));
    return null == n
        ? null
        : (0, i.jsx)(a.Z, {
              guild: n,
              section: l,
              sectionId: s,
              integrations: o,
              webhooks: m,
              editedIntegration: u,
              editedWebhook: h,
              isFetching: g,
              hasChanges: c.Z.hasChanges,
              errors: x,
              refToScroller: t
          });
}
function g() {
    let { guild: e, submitting: t } = (0, r.cj)([d.Z], () => ({
        guild: d.Z.getGuild(),
        submitting: d.Z.isSubmitting()
    }));
    return (0, i.jsx)(s.Z, {
        submitting: t,
        onReset: () => {
            l.Z.init(), u.Ui(), null != e && o.Z.init(e.id);
        },
        onSave: () => {
            if (null != e) {
                if (null != c.Z.editedIntegration) l.Z.saveIntegration(e.id, c.Z.editedIntegration);
                else if (null != c.Z.editedWebhook) l.Z.saveWebhook(e.id, c.Z.editedWebhook);
                else if (null != c.Z.editedCommandId) {
                    let t = c.Z.getSectionId(),
                        n = m.Z.getEditedApplication();
                    if (null == t || null == n) return;
                    l.Z.saveApplicationPermissions(t, e.id, Object.values(n));
                }
                d.Z.hasChanges() && o.Z.saveGuild(e.id, { features: e.features });
            }
        }
    });
}
